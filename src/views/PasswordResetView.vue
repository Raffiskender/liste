<template>
	<h1>Réinitialisation du mot de passe</h1>
    <form @submit.prevent="this.handleFormSubmit">
      <label>
        <input
        type="email"
        name="Email"
        v-model="this.email"
        placeholder="Entrez votre email"
        :class="[isEmailValid()]"
        required/>
        <div class="error" v-if="this.errors.emailEmpty">
          Vous devez saisir un mail !
        </div>
        <div class="error" v-if="this.errors.invalidMail">
          E-mail invalide !
        </div>
      </label>
      
      <button :disabled="this.email == '' || isEmailValid() == 'has-error'">
        <span v-if="!this.awaiting">Envoyer</span>
        <SpinnerCpnt v-else />
      </button>
      <div class="error" v-if="this.errors.sendingFailed">
        <p>Il y eu un pb lors de votre enregistrement</p>
        <p>Message : {{this.errorMessage}}</p>		
      </div>
      <div class="success" v-if="this.success" style="font-weight: bold; margin-bottom: 1em; text-align: center;">
        C'est envoyé ! Si votre mail est enregistré dans notre base, vous recevrez un mail avec un lien pour modifier votre mot de passe ! A bientôt !
      </div>
    </form>
</template>

<script>
import { userService } from '@/services/userService';
//import LoadingVue from '@/components/Layout/Loading.vue';
import SpinnerCpnt from '@/components/SpinnerCpnt.vue';

export default {
	name : 'PasswordReset',
	components : {
    SpinnerCpnt,
  },
  
	data(){
		return{
      email: "",
      regMail:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      errors : {
        emailEmpty: false,
        invalidMail:false,
        sendingFailed:false,
				},
      awaiting:false,
      errorMessage:'',
      success:false,
      
      userId :this.$route.query['user'],
			userKey :this.$route.query['key'],
      
		}
	},
		
	methods:{
    isEmailValid() {
				return (this.email == "") ? "" : (this.regMail.test(this.email)) ? 'has-success' : 'has-error';
			},
    async handleFormSubmit() {
      //* Errors reinitialisation...
      this.errors.emailEmpty = false;
      this.errors.invalidMail = false;
      this.sendingFailed = false;
      this.errorMessage = '';
      this.success = false;
      
      //* Now come the verifications 
      this.errors.emailEmpty = (this.email == '')
      this.errors.invalidMail = ( !this.regMail.test(this.email) );
      
      if (!this.errors.emailEmpty && !this.errors.invalidMail){
        const response = await userService.userAsksForPasswordReset(this.email);
        //* If we have a message, it means we have an error...
        
        if (response.success == 1){
          this.success = true;
          this.email   = "";
          this.awaiting = false;
          this.errors.sendingFailed = false;
        }
        else {
          this.errorMessage = response.response.message;
          this.errors.sendingFailed = true;
          this.awaiting = false;
          this.success = false;
        }
      }
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