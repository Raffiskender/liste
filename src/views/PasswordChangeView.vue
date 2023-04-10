<template>
	<h1>Réinitialisation du mot de passe</h1>
    <form @submit.prevent="handleFormSubmit()">
      <InputPassword
        title="Mot de passe"
        :theClass="passwordCheck.isPasswordValid()"
        @new-value="check($event)"
        name="password"
      />
      <div class="error" v-if="errors.passwordEmpty">
        Vous devez saisir un mot de passe !
      </div>
      <div class="error" v-if="errors.invalidPassword && !errors.passwordEmpty">
        Votre mot de passe n'est pas assez fort !
      </div>
      
			<div>
        <PasswordCheckView/>
      </div>
      
      
      <InputPassword
        title="Confirmez"
        :theClass="passwordCheck.isPasswordValidationOk(passwordVerify)"
        @new-value="recordPasswordValidation($event)"
        name="password-validation"
      />
        <div class="error" v-if="errors.passwordVerifyEmpty">
          Vous devez saisir une deuxième fois votre mot de passe !
        </div>
        <div class="error" v-if="errors.passwordsDoesNotMatch && !errors.passwordVerifyEmpty">
          Les 2 mots de passe ne sont pas identiques !
        </div>
      
      <button :disabled="passwordCheck.password == '' || passwordCheck.isPasswordValid() == 'has-error' || passwordCheck.isPasswordValidationOk(passwordVerify) == 'has-error'">
        <span v-if="!awaiting">Réinitialiser</span>
        <SpinnerCpnt v-else />
      </button>
      
      <div class="error" v-if="errors.sendingFailed">
        <p>Il y eu un pb</p>
        <p>Message : {{errorMessage}}</p>		
      </div>
      <div class="success" v-if="this.success" style="font-weight: bold; margin-bottom: 1em; text-align: center;">
        Votre mot de passe vient d'être remplacé. Vous pouvez aller <router-link :to="{name : 'login'}" >vous connecter</router-link> !
      </div>
    </form>
</template>

<script>
  export default{
    name : 'PasswordChange',
  }
</script>
  
<script setup>
  import { userService } from '@/services/userService';
  //import LoadingVue from '@/components/Layout/Loading.vue';
  import SpinnerCpnt from '@/components/SpinnerCpnt.vue';
  import PasswordCheckView from '@/components/PasswordCheckView.vue';
  import InputPassword from '@/components/InputPassword.vue';
  import { usePasswordCheckStore } from '@/stores/PasswordChecking';
  import {ref} from 'vue'
  //import router from '@/router'
  import { useRoute } from 'vue-router'

  
  const passwordCheck = usePasswordCheckStore()

  // const password = ref('')
  const passwordVerify = ref('')
  
  const errors = ref({
    passwordEmpty : ref(false),
    passwordVerifyEmpty : ref(false), 
    invalidPassword : ref(false),
    sendingFailed : ref(false),
    passwordsDoesNotMatch : ref(false)
  })
  
  const awaiting = ref(false)
  const errorMessage = ref('')
  const success = ref(false)
  
  const route = useRoute()
  const userId = ref(route.query['user'])
  const userKey = ref(route.query['key'])
  
  const check = (value) => {
      passwordCheck.updatePassword(value)
  }
  
  const recordPasswordValidation = (value) => {
    passwordVerify.value = value
  }
  const handleFormSubmit = async() => {
      //* Errors reinitialisation...
      errors.value.passwordEmpty = false
      errors.value.passwordVerifyEmpty = false
      errors.value.invalidPassword = false
      errors.value.sendingFailed = false;
      errorMessage.value = '';
      success.value = false;
      
      //* Now come the verifications 
      errors.value.passwordEmpty = (passwordCheck.password == '')
      errors.value.passwordVerifyEmpty = (passwordVerify.value == '')
      errors.value.invalidPassword = ( !passwordCheck.regPassword.test(passwordCheck.password) );
      errors.value.passwordsDoesNotMatch = (passwordCheck.password != passwordVerify.value)
      if (!errors.value.passwordEmpty && !errors.value.passwordVerifyEmpty && !errors.value.invalidPassword){
        awaiting.value = true
        const response = await userService.passwordReset(passwordCheck.password, userKey.value, userId.value);
        //console.log('ici c\'est passé')
        //* If we have a message, it means we have an error...
        
        if (response.success == 1){
          success.value = true
          awaiting.value = false
        }
        else {
          errorMessage.value = response.response;
          errors.value.sendingFailed = true;
          awaiting.value = false;
          success.value = false;
        }
      }
    }
	

</script>

<style lang="scss" scoped>
section{
	min-height: calc(100vh + 0.05em);
}

h2 {
  text-align: center;
  padding-top: 1em;
  font-size: 2em;
  font-weight: bold;
  text-transform: uppercase;
}

form {
  display: flex;
  flex-direction: column;
  padding: 1em;
  margin: 0;

  label {
    margin-bottom: 1em;
		color: #003e7c;
		text-align: left;
		font-weight: normal;
		font-family: 'Quicksand',  Arial, Helvetica, sans-serif;
    input {
      display: block;
      margin: 5px 0;
      width: 100%;
      padding: 0.75em 1.5em;
      // border-radius: 0.5em;
			background: #ffffff;;
      border: none;
			border-bottom: #00aeff 2px solid;
			border-left:  #00aeff 2px solid;;
      box-sizing: border-box;
			&:hover{
			background: #e0e0e0;;
			}
			&:focus{
			background: #e0e0e0;;
			}
			&.has-error{
				background: rgb(255, 156, 156);
			}
			&.has-success{
				background: rgb(159, 206, 159);
			}
    }
  }

  button {
    display: block;
    margin: 5px 0 2.3em 0;
    width: 100%;
    padding: 1em 1.5em;
    border-radius: 0.5em;
    color: white;
		background: blueviolet;
    font-weight: bold;
    border: none;
    box-sizing: border-box;
		transition: 0.3s;

     &:hover
    {
      cursor: pointer;
			background: darken(blueviolet, 15%);
    }
		&:disabled{
			background: #bbb;
		}
		>div {
			margin: auto;
		}
  }
	
	ul{
		list-style-type: none;
		font-size: 0.9em;
		color:rgb(0, 128, 0); margin:0;
		&>div{
			display: flex;
			align-items: center;
				&.has-error{
				color:red;
				transition: 0.5s;
				transform: rotateX(0deg)
				}
			
			&.has-success{
				color:green;
				transition: 0.5s;
				transform: rotateX(360deg)

			}
		}
	}
	
	li{
			margin-left: 0.5em;
	}
	.eye{
		color:#003e7c;
		font-size: 1.1em;
		position:relative;
		left: calc(100% - 2em);
		top:-2em;
		&:hover{
			cursor:pointer;
		}
		&.hide{
			display: none;
		}
	}
	
	.hide{
		display: none;
	}
	
	.error{
		color : rgb(133, 0, 0);
		font-weight: bold;
		margin-bottom: 1em;
		text-align: center;
	}
	.success{
		color : rgb(0, 133, 0);
		font-weight: bold;
		margin-bottom: 1em;
		text-align: center;
	}

}
</style>