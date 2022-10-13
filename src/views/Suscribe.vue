<template>
  <section>
    <h2>S'enregistrer</h2>
    <form @submit.prevent="this.handleFormSubmit">
      <label>
        Email
        <input
					type="mail"
					name="Email"
					v-model="this.email"
					placeholder="Email"
					:class="[isEmailValid()]"
					required/>
        <div class="error" v-if="this.errors.emailEmpty">
          Vous devez saisir un mail !
        </div>
				<div class="error" v-if="this.errors.invalidMail">
					E-mail invalide !
				</div>
      </label>
			
      <label>
        Login
        <input
					type="text"
					name="username"
					v-model="this.username"
					placeholder="username"
					required/>
					
        <div class="error" v-if="this.errors.usernameEmpty">
          Vous devez saisir un login !
        </div>
      </label>

      <label>
        Mot de passe
				<input
					:class="['pwdInput', isPasswordValid()]"
					:type="[this.pwdInputType()]"
					name="password"
					v-model="this.password"
					@focus="this.handleFocusPasswordInput"
					@blur="this.handleBlurPasswordInput"/>
					
				<img
					@click="this.handleSeePwd()"
					v-bind:class="{'hide': !this.seePwd}"
					src="@/assets/eye-slash-solid.svg"
					alt=""
					width="16">	
				<img
					@click="this.handleSeePwd()"
					v-bind:class="{'hide': this.seePwd}"
					src="@/assets/eye-solid.svg"
					alt=""
					width="16">
					
				<div>
					<ul>Doit contenir
						<li :class="[isNumberOfCaracteresValid()]">entre 8 et 22 caractères,</li>
						<li :class="[isCapitilizeCaractereValid()]">une majuscule,</li>
						<li :class="[isMinimizeCaractereValid()]">une minuscule</li>
						<li :class="[isNumberValid()]">un chiffre</li>
						<li :class="[isSpecialCaractereValid()]">un caractère spécial</li>
					</ul>
				</div>
        <div class="error" v-if="this.errors.passwordEmpty">
          Vous devez saisir un mot de passe !
        </div>
        <div class="error" v-if="this.errors.invalidPassword">
          Votre mot de passe n'est pas assez fort !
        </div>
      </label>
			
      <label>
        Vérification du mot de passe
        <input
					:class="['pwdInput', isPasswordValidationOk()]"
					:type="[this.pwdVerifInputType()]"
					name="passwordVerify"
					@blur="this.handleBlurPwdVerif()"
					v-model="this.passwordVerify" />
					
				<img
				@click="this.handleSeePwdVerif()"
				v-bind:class="{'hide': !this.seePwdVerif}"
				src="@/assets/eye-slash-solid.svg"
				alt=""
				width="16">	
				
				<img
				@click="this.handleSeePwdVerif()"
				v-bind:class="{'hide': this.seePwdVerif}"
				src="@/assets/eye-solid.svg"
				alt=""
				width="16">	
				
        <div class="error" v-if="this.errors.passwordVerifyEmpty">
          Vous devez saisir une deuxième fois votre mot de passe !
        </div>
        <div class="error" v-if="this.errors.passwordsDoesNotMatch">
          Les 2 mots de passe ne sont pas identiques !
        </div>
      </label>

      <div class="error" v-if="this.errors.loginFailed">
        Identifiants incorrects
      </div>

      <button :disabled="this.email == '' || this.username == '' || this.password == '' || this.passwordVerify == '' ">
        S'inscrire
      </button>
      <div class="error" v-if="this.errors.suscribeFailed">
				<p>Il y eu un pb lors de votre enregistrement</p>
				<p>Message : {{this.errorMessage}}</p>
				
      </div>
      <div class="success" v-if="this.success.suscribeSuccessfull" style="font-weight: bold; margin-bottom: 1em; text-align: center;">
				Félicitation, vous êtes à présent enregistré sur notre site.
				Vous pouvez dès à présent vous connecter sur la <router-link :to="{name : 'login'}" >page de connection</router-link> !
      </div>
    </form>
  </section>
</template>

<script>
  import userService from "@/Services/userService";
  //import storage     from "@/utils/storage";
	// import { useVuelidate } from '@vuelidate/core'
	// import { required, email } from '@vuelidate/validators'
	
  export default 
  {
    name: "LoginView",
		// setup () {
		// 	return { v$: useVuelidate() }
		// },
		
    data()
    {
      return {
				email: "",
        username: "",
        first_name: "",
        last_name: "",
        password: "",
        passwordVerify: "",
				passwordfocus: false,
				seePwd:false,
				seePwdVerif:false,
        errors : {
					suscribeFailed: false,
          emailEmpty: false,
          usernameEmpty: false,
          fisrt_nameEmpty: false,
          last_nameEmpty: false,
          passwordEmpty: false,
          passwordVerifyEmpty: false,
					passwordsDoesNotMatch: false,
					invalidMail: false,
					invalidPassword: false,
				},
        success : {
					suscribeSuccessfull: false,
        },
				errorMessage:'',
				regMail:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				regPassword : /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,22}$)/,
				regNumberOfCaracteres:/(?=.{8,22}$)/,
				regSpecialCaractere:/(?=.*[^A-Za-z0-9])/,
				regCapitilizeCaractere: /(?=.*[A-Z])/,
				regMinimizeCaractere:/(?=.*[a-z])/,
				regNumber: /(?=.*[0-9])/,
			}
		},
		// validations () {
		// 	return{
		// 		email: { required, email}
		// 	}
		// },

		methods: 
		{
			isEmailValid() {
				return (this.email == "") ? "" : (this.regMail.test(this.email)) ? 'has-success' : 'has-error';
			},
			handleSeePwd(){
				this.seePwd = !this.seePwd;
				this.passwordfocus = true;
			},
			handleSeePwdVerif(){
				this.seePwdVerif = !this.seePwdVerif;
			},
					
			handleBlurPwdVerif(){
				this.seePwdVerif=false;
			},
						
			pwdVerifInputType(){
				return (this.seePwdVerif) ? 'text' : 'password';
			},
			pwdInputType(){
				return (this.seePwd) ? 'text' : 'password';
			},
			
			isNumberOfCaracteresValid() {
				return (this.password == "") ? "" : (this.regNumberOfCaracteres.test(this.password)) ? 'has-success' : 'has-error';
					
			},
			isSpecialCaractereValid() {
				return (this.password == "") ? "" : (this.regSpecialCaractere.test(this.password)) ? 'has-success' : 'has-error';
					
			},
			isCapitilizeCaractereValid() {
				return (this.password == "") ? "" : (this.regCapitilizeCaractere.test(this.password)) ? 'has-success' : 'has-error';
					
			},
			isMinimizeCaractereValid() {
				return (this.password == "") ? "" : (this.regMinimizeCaractere.test(this.password)) ? 'has-success' : 'has-error';
					
			},
			isNumberValid() {
				return (this.password == "") ? "" : (this.regNumber.test(this.password)) ? 'has-success' : 'has-error';
					
			},
					
			isPasswordValid() {
				return (this.password == "") ? "" : (this.regPassword.test(this.password)) ? 'has-success' : 'has-error';
					
			},
			isPasswordValidationOk() {
				if (this.passwordVerify!="" && this.regPassword.test(this.password)){
					return (this.password == this.passwordVerify) ? 'has-success' : 'has-error';
				}
			},
					
			handleFocusPasswordInput(){
				this.errors.invalidPassword=false;
				this.passwordfocus = true;
			},
			handleBlurPasswordInput(){
				this.seePwd = false;
				this.passwordfocus = false;
			},
			
			async handleFormSubmit()
			{
				this.errors.suscribeFailed = false;
				this.errors.invalidMail = false;
				this.errors.invalidPassword = false;
				
				// --- Vérification des données du formulaire --- //
				// En version raccourcie : on stocke le résultat de la condition dans la variable
				this.errors.emailEmpty     = ( this.email    == "" );
				this.errors.usernameEmpty  = ( this.username == "" );
				this.errors.passwordEmpty  = ( this.password == "" );
				this.errors.passwordsDoesNotMatch = ( this.password != this.passwordVerify )
				this.errors.invalidMail = ( !this.regMail.test(this.email) );
				this.errors.invalidPassword = ( !this.regPassword.test(this.password) );
							
				// Si une erreur est rencontrée, on n'envoi pas la requete au serveur !
				if( !this.errors.usernameEmpty &&
						!this.errors.passwordEmpty &&
						!this.emailEmpty &&
						!this.errors.passwordsDoesNotMatch &&
						!this.errors.invalidMail &&
						!this.errors.invalidPassword)
				{

					
						// Envoie de la requette à l'endpoint users pour création du nouvel utilisateur
						let data = await userService.suscribe( this.email, this.username, this.first_name, this.last_name, this.password );
						//console.log(this.email, this.username, this.first_name, this.last_name, this.password)
						//console.log(data);
						
						if (data.success == 1){
							this.success.suscribeSuccessfull = true;
						}
					
						else{
							this.errorMessage = data.response.message;
							this.errors.suscribeFailed = true;
						}
					}
				}
			
		}
	}
</script>

<style lang="scss" scoped>

h2 {
  text-align: center;
  margin: 1em auto;
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
    margin: 5px 0;
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
  }
	ul{
		list-style-type: none;
		font-size: 0.9em;
		color:rgb(0, 128, 0); margin:0;
	}
	li{
			color:red;
			&::before{
				margin-left: 1em;
				content: "\2613 ";
				word-spacing: 0.5em;
				//color: rgb(226, 43, 43);
			}
		
		&.has-success{
			color:green;
			&::before{
				margin-left: 1em;
				content: "\1F5F8 ";
				word-spacing: 0.5em;
				//color: green;
			}
		}
	}

	img{
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