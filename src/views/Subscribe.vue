<template>
  <section>
		<ModalView @close="toggleModal" :modalActive="modalActive">
			<div class="modal-content">
				<h1 class="title">Inscription réussie !</h1>
				<p>Un mail de vérification vient de vous être envoyé. Une fois votre mail confirmé, vous pourrez vous connecter...</p>
			</div>
		</ModalView>
		<!-- <button @click="this.toggleModal">ouvrir</button> -->
		
    <h2>S'enregistrer</h2>
    <form @submit.prevent="handleFormSubmit()">
      <label for="email">
        <p>Email</p>
      </label>
        <input
          id="email"
					type="email"
					name="Email"
					v-model="email"
					placeholder="Email"
					:class="[isEmailValid()]"
          @focus="() => {errors.invalidMail = false ; errors.emailEmpty = false}"
					required/>
        <div class="error" v-if="errors.emailEmpty">
          Vous devez saisir un mail !
        </div>
				<div class="error" v-if="errors.invalidMail">
					E-mail invalide !
				</div>
			
      <label for="user-name">
        <p>Identifiant</p>
      </label>
        <input
          id="user-name"
					type="text"
					name="username"
					v-model="username"
					placeholder="Identifiant"
					required
          @focus="errors.usernameEmpty = false"/>
					
        <div class="error" v-if="errors.usernameEmpty">
          Vous devez saisir un login !
        </div>

      <InputPassword
        title="Mot de passe"
        :theClass="passwordCheck.isPasswordValid()"
        @new-value="check($event)"
        name="password"
        @focus-me="passwordInputFocused()"
      />	
      <div class="error" v-if="errors.passwordEmpty">
        Vous devez saisir un mot de passe !
      </div>
      <div class="error" v-if="errors.invalidPassword">
        Votre mot de passe n'est pas assez fort !
      </div>
      <PasswordCheckView />

			<InputPassword
        title="Vérification du mot de passe"
        :theClass="passwordCheck.isPasswordValidationOk(passwordVerify)"
        @new-value="recordPasswordValidation($event)"
        name="password-Validation"
        @focus-me="passwordVerifyInputFocused()"
      />
			

        <div class="error" v-if="errors.passwordVerifyEmpty">
          Vous devez saisir une deuxième fois votre mot de passe !
        </div>
        <div class="error" v-if="errors.passwordsDoesNotMatch">
          Les 2 mots de passe ne sont pas identiques !
        </div>

      <div class="error" v-if="errors.loginFailed">
        Identifiants incorrects
      </div>

      <button :disabled="email == '' || username == '' || passwordCheck.password == '' || passwordVerify == '' || awaiting">
        <span v-if="!awaiting">S'inscrire</span>
				<SpinnerCpnt v-else />
      </button>
      <div class="error" v-if="errors.subscribeFailed">
				<p>Il y eu un pb lors de votre enregistrement</p>
				<p>Message : {{errorMessage}}</p>
				
      </div>
    </form>

  </section>
</template>

<script>
export default{
  name: "SubscribeView",
}
</script>

<script setup>
  import {userService} from "@/services/userService";
	import ModalView from "@/components/Modal.vue";
	import SpinnerCpnt from "@/components/SpinnerCpnt.vue";
	import {ref} from 'vue';
  import router from '@/router';
  import InputPassword from "@/components/InputPassword.vue";
  import PasswordCheckView from "@/components/PasswordCheckView.vue";
  import { usePasswordCheckStore } from "@/stores/PasswordChecking";
  //import storage     from "@/utils/storage";
	// import { useVuelidate } from '@vuelidate/core';
	// import { required, email } from '@vuelidate/validators';
	
  const passwordInputFocused = () => {
    errors.value.passwordEmpty = false
    errors.value.invalidPassword = false
  }
  const passwordVerifyInputFocused = () => {
    errors.value.passwordVerifyEmpty = false
    errors.value.passwordsDoesNotMatch = false
  }
  
  const modalActive = ref(false)
  
  const toggleModal = () => {
    modalActive.value = !modalActive.value;
    if (! modalActive.value){
      setTimeout(()=>{
        router.push({name: 'login'})}, 150)
    }
  }
  
  
  const email = ref('')
	const regMail = ref(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const isEmailValid = () => {
    return (email.value == "") ? "" : (regMail.value.test(email.value)) ? 'has-success' : 'has-error';
  }
  
  const username = ref('')
  
  const passwordCheck = usePasswordCheckStore() ;
  
  const passwordVerify = ref('')
  const recordPasswordValidation = (value) => {
      passwordVerify.value = value
    }
  
  const awaiting = ref(false)
  const errors = ref({
    subscribeFailed: false,
    emailEmpty: false,
    usernameEmpty: false,
    passwordEmpty: false,
    passwordVerifyEmpty: false,
    passwordsDoesNotMatch: false,
    invalidMail: false,
    invalidPassword: false,
  })
  const errorMessage = ref('')
  
  const check = (value) => {
      passwordCheck.updatePassword(value)
    }
			
	const handleFormSubmit = async() => {
    errors.value.subscribeFailed = false;
    errors.value.invalidMail = false;
    errors.value.invalidPassword = false;
    
    // --- Vérification des données du formulaire --- //
    // En version raccourcie : on stocke le résultat de la condition dans la variable
    errors.value.emailEmpty     = ( email.value    == "" );
    errors.value.usernameEmpty  = ( username.value == "" );
    errors.value.passwordEmpty  = ( passwordCheck.password == "" );
    errors.value.passwordVerifyEmpty  = ( passwordVerify.value == "" );
    errors.value.passwordsDoesNotMatch = ( passwordCheck.password != passwordVerify.value )
    errors.value.invalidMail = ( ! regMail.value.test(email.value) );
    errors.value.invalidPassword = ( !passwordCheck.regPassword.test(passwordCheck.password) );
          
    // Si une erreur est rencontrée, on n'envoi pas la requete au serveur !
    if (!errors.value.usernameEmpty &&
        !errors.value.passwordEmpty &&
        !errors.value.emailEmpty &&
        !errors.value.passwordsDoesNotMatch &&
        !errors.value.invalidMail &&
        !errors.value.invalidPassword){

      awaiting.value = true;
      // Envoie de la requette à l'endpoint users pour création du nouvel utilisateur
      const data = await userService.subscribe( email.value, username.value, passwordCheck.password );
      //console.log(this.email, this.username, this.first_name, this.last_name, this.password)
      //console.log(data);
      
      if (data.success == 1){
        toggleModal();
        email.value            = "";
        username.value         = "" ;
        passwordCheck.password = "" ;
        passwordVerify.value   = "";
        awaiting.value         = false;
      }
    
      else{
        errorMessage.value = data.response.message;
        errors.value.subscribeFailed = true;
        awaiting.value = false;
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
  color:blueviolet;
}

form {
  display: flex;
  flex-direction: column;
  padding: 1em;
  margin: 0;
}

label {
  width:fit-content;
  font-size:1.2em;
  font-family:'Quicksand', Arial, Helvetica, sans-serif ;
  color:rgb(0, 89, 255);
  line-height: 1.3em;
}

input {
  display: block;
  margin: 5px 0 1.2em 0;
  width: 100%;
  padding: 0.75em 1.5em;
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
  &:hover{
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
.error{
  color : rgb(133, 0, 0);
  font-weight: bold;
  //margin-bottom: 0em;
  text-align: center;
}

</style>