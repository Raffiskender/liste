<template>
	<h1>Réinitialisation du mot de passe</h1>
    <form @submit.prevent="handleFormSubmit()">
        <input
        type="email"
        name="Email"
        v-model="email"
        placeholder="Entrez votre email"
        :class="[isEmailValid()]"
        required/>
        <div class="error" v-if="errors.emailEmpty">
          Vous devez saisir un mail !
        </div>
        <div class="error" v-if="errors.invalidMail">
          E-mail invalide !
        </div>
      
      <button :disabled="email == '' || isEmailValid() == 'has-error'">
        <span v-if="!awaiting">Envoyer</span>
        <SpinnerCpnt v-else />
      </button>
      <div class="error" v-if="errors.sendingFailed">
        <p>Il y eu un pb lors de votre enregistrement</p>
        <p>Message : {{errorMessage}}</p>		
      </div>
      <div class="success" v-if="success" style="font-weight: bold; margin-bottom: 1em; text-align: center;">
        C'est envoyé ! Si votre mail est enregistré dans notre base, vous recevrez un mail avec un lien pour modifier votre mot de passe ! A bientôt !
      </div>
    </form>
</template>

<script>

export default {
  name : 'PasswordReset'
}

</script>

<script setup>

  import { userService } from '@/services/userService';
  //import LoadingVue from '@/components/Layout/Loading.vue';
  import SpinnerCpnt from '@/components/SpinnerCpnt.vue';
  import { ref } from 'vue';
  
  const email = ref('')
  const regMail = ref(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  const errors = ref({
    emailEmpty: false,
    invalidMail:false,
    sendingFailed:false,
  })
  const awaiting = ref(false)
  const success = ref(false)
  const errorMessage = ref('')
  
  // const userId = ref(route.query['user'])
  // userKey = ref(route.query['key'])

  const isEmailValid = () => {
    return (email.value == "") ? "" : (regMail.value.test(email.value)) ? 'has-success' : 'has-error';
  }
  
  const handleFormSubmit = async() => {
      //* Errors reinitialisation...
      errors.value.emailEmpty = false;
      errors.value.invalidMail = false;
      errors.value.sendingFailed = false;
      errorMessage.value = '';
      success.value = false;
      
      //* Now come the verifications 
      errors.value.emailEmpty = (email.value == '')
      errors.value.invalidMail = ( !regMail.value.test(email.value) );
      
      if (!errors.value.emailEmpty && !errors.value.invalidMail){
        const response = await userService.userAsksForPasswordReset(email.value);
        //* If we have a message, it means we have an error...
        
        if (response.success == 1){
          success.value = true;
          email.value = "";
          awaiting.value = false;
          errors.value.sendingFailed = false;
        }
        else {
          errorMessage.value = response.response.message;
          errors.value.sendingFailed = true;
          awaiting.value = false;
          success.value = false;
        }
      }
    }
</script>

<style lang="scss" scoped>
h1{
	text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  padding: 1em;
  margin: 0;
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
    transition:0.3s;
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
	
</style>