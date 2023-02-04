<template>
	<h1>Réinitialisation du mot de passe</h1>
    <form @submit.prevent="this.handleFormSubmit">
      <label>
        Mot de passe
				<input
					:class="['pwdInput', isPasswordValid()]"
					:type="[this.pwdInputType()]"
					name="password"
					v-model="this.password"
					@focus="this.handleFocusPasswordInput"
					@blur="this.handleBlurPasswordInput"/>
				
				
				<font-awesome-icon
					icon="fa-solid fa-eye"
					class="eye"
					@click="this.handleSeePwd()"
					v-bind:class="{'hide': this.seePwd}"
					alt=""
					width="16" />	
					
				<font-awesome-icon
					icon="fa-solid fa-eye-slash"
					class="eye"
					@click="this.handleSeePwd()"
					v-bind:class="{'hide': !this.seePwd}"
					alt=""
					width="16" />	

				<div>
					<ul>Doit contenir
						<div
						:class="[isNumberOfCaracteresValid()]">
							<font-awesome-icon	
								icon="fa-regular fa-circle-check"
								v-bind:class="{'hide': isNumberOfCaracteresValid()=='has-error' || this.password == ''}"
								/>
							<font-awesome-icon
								icon="fa-regular fa-circle-xmark"
								v-bind:class="{'hide': isNumberOfCaracteresValid()=='has-success'}"
								/>
							<li>entre 8 et 22 caractères,</li>
						</div>
						<div 
						:class="[isCapitilizeCaractereValid()]">
							<font-awesome-icon	
								icon="fa-regular fa-circle-check"
								v-bind:class="{'hide': isCapitilizeCaractereValid()=='has-error' || this.password == ''}"
								style="color:green" />
							<font-awesome-icon
								icon="fa-regular fa-circle-xmark"
								v-bind:class="{'hide': isCapitilizeCaractereValid()=='has-success'}"
								style="color:red" />
							<li :class="[isCapitilizeCaractereValid()]">une majuscule,</li>
						</div>
						<div :class ="[isMinimizeCaractereValid()]">
							<font-awesome-icon	
								icon="fa-regular fa-circle-check"
								v-bind:class="{'hide': isMinimizeCaractereValid()=='has-error' || this.password == ''}"
								style="color:green" />
							<font-awesome-icon
								icon="fa-regular fa-circle-xmark"
								v-bind:class="{'hide': isMinimizeCaractereValid()=='has-success'}"
								style="color:red" />
							<li :class="[isMinimizeCaractereValid()]">une minuscule</li>
						</div>
						<div :class ="[isNumberValid()]">
							<font-awesome-icon	
								icon="fa-regular fa-circle-check"
								v-bind:class="{'hide': isNumberValid()=='has-error' || this.password == ''}"
								style="color:green" />
							<font-awesome-icon
								icon="fa-regular fa-circle-xmark"
								v-bind:class="{'hide': isNumberValid()=='has-success'}"
								style="color:red" />
							<li :class="[isNumberValid()]">un chiffre</li>
						</div>
						<div :class="[isSpecialCaractereValid()]">
							<font-awesome-icon	
								icon="fa-regular fa-circle-check"
								v-bind:class="{'hide': isSpecialCaractereValid()=='has-error' || this.password == ''}"
								style="color:green" />
							<font-awesome-icon
								icon="fa-regular fa-circle-xmark"
								v-bind:class="{'hide': isSpecialCaractereValid()=='has-success'}"
								style="color:red" />
							<li :class="[isSpecialCaractereValid()]">un caractère spécial</li>
						</div>
					</ul>
				</div>
        <div class="error" v-if="this.errors.passwordEmpty">
          Vous devez saisir un mot de passe !
        </div>
        <div class="error" v-if="this.errors.invalidPassword && !this.errors.passwordEmpty">
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
					
				<font-awesome-icon
					icon="fa-solid fa-eye"
					class="eye"
					v-bind:class="{'hide': this.seePwdVerif}"
					@click="this.handleSeePwdVerif()"
					alt=""
					width="16" />	
				
				<font-awesome-icon
					icon="fa-solid fa-eye-slash"
					class="eye"
					v-bind:class="{'hide': !this.seePwdVerif}"
					@click="this.handleSeePwdVerif()"
					alt=""
					width="16" />	
				
        <div class="error" v-if="this.errors.passwordVerifyEmpty">
          Vous devez saisir une deuxième fois votre mot de passe !
        </div>
        <div class="error" v-if="this.errors.passwordsDoesNotMatch && !this.errors.passwordVerifyEmpty">
          Les 2 mots de passe ne sont pas identiques !
        </div>
      </label>
      
      <button :disabled="this.password == '' || this.isPasswordValid() == 'has-error' || this.isPasswordValidationOk() == 'has-error'">
        <span v-if="!this.awaiting">Réinitialiser</span>
        <SpinnerCpnt v-else />
      </button>
      <div class="error" v-if="this.errors.sendingFailed">
        <p>Il y eu un pb</p>
        <p>Message : {{this.errorMessage}}</p>		
      </div>
      <div class="success" v-if="this.success" style="font-weight: bold; margin-bottom: 1em; text-align: center;">
        Votre mot de passe vient d'être remplacé. Vous pouvez aller <router-link :to="{name : 'login'}" >vous connecter</router-link> !
      </div>
    </form>
</template>

<script>
import { userService } from '@/services/userService';
//import LoadingVue from '@/components/Layout/Loading.vue';
import SpinnerCpnt from '@/components/SpinnerCpnt.vue';

export default {
	name : 'PasswordChange',
	components : {
    SpinnerCpnt,
  },
  
	data(){
		return{
      seePwd:false,
      seePwdVerif: false,
      password: "",
      passwordVerify:'',
      regPassword : /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(^.{8,22}$)/,
			regNumberOfCaracteres:/(^.{8,22}$)/,
			regSpecialCaractere:/(?=.*[^A-Za-z0-9])/,
			regCapitilizeCaractere: /(?=.*[A-Z])/,
			regMinimizeCaractere:/(?=.*[a-z])/,
			regNumber: /(?=.*[0-9])/,
      
      errors : {
        passwordEmpty: false,
        passwordVerifyEmpty: false, 
        invalidPassword:false,
        sendingFailed:false,
        passwordsDoesNotMatch:false,
			},
      awaiting:false,
      errorMessage:'',
      success:false,
      
      userId :this.$route.query['user'],
			userKey :this.$route.query['key'],
      
		}
	},
		
	methods:{
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
				return (this.password == "") ? "has-error" : (this.regNumberOfCaracteres.test(this.password)) ? 'has-success' : 'has-error';
					
			},
			isSpecialCaractereValid() {
				return (this.password == "") ? "has-error" : (this.regSpecialCaractere.test(this.password)) ? 'has-success' : 'has-error';
					
			},
			isCapitilizeCaractereValid() {
				return (this.password == "") ? "has-error" : (this.regCapitilizeCaractere.test(this.password)) ? 'has-success' : 'has-error';
					
			},
			isMinimizeCaractereValid() {
				return (this.password == "") ? "has-error" : (this.regMinimizeCaractere.test(this.password)) ? 'has-success' : 'has-error';
					
			},
			isNumberValid() {
				return (this.password == "") ? "has-error" : (this.regNumber.test(this.password)) ? 'has-success' : 'has-error';
					
			},
					
			isPasswordValid() {
				return (this.password == "") ? "has-error" : (this.regPassword.test(this.password)) ? 'has-success' : 'has-error';
					
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
  
    async handleFormSubmit() {
      //* Errors reinitialisation...
      this.errors.passwordEmpty = false;
      this.errors.passwordVerifyEmpty = false;
      this.errors.invalidPassword = false;
      this.sendingFailed = false;
      this.errorMessage = '';
      this.success = false;
      
      //* Now come the verifications 
      this.errors.passwordEmpty = (this.password == '')
      this.errors.passwordVerifyEmpty = (this.passwordVerify == '')
      this.errors.invalidPassword = ( !this.regPassword.test(this.password) );
      this.errors.passwordsDoesNotMatch = (this.password != this.passwordVerify)
      
      if (!this.errors.passwordEmpty && !this.errors.passwordVerifyEmpty && !this.errors.invalidPassword){
        const response = await userService.passwordReset(this.password, this.userKey, this.userId);
        //* If we have a message, it means we have an error...
        
        if (response.success == 1){
          this.success = true;
          this.email   = "";
          this.awaiting = false;
          this.errors.sendingFailed = false;
        }
        else {
          this.errorMessage = response.response;
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