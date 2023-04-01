<template>
  <h3>Mon profil</h3>
  <modale v-if="showModal">
    ceci est ma modale
    <button
      @click="showModal=false">Fermer</button>
  </modale>
  
  <LoaderView v-if ="! this.userStore.user"/>
  <div class="page" v-else>
    <div class="container">
      <div class="left">
        <p v-if="this.date">Enregistré le : <br>
        {{ this.date.getDate() }} {{ this.getReadableMonth() }} {{ this.date.getFullYear() }}</p>
        <p>Identifiant : <br>{{ this.userStore.user['username'] }}</p>
        <p>Nom d'affichage :  <br>{{ this.userStore.user['slug'] }}</p>
        <p v-if=" this.userStore.user['last_name'] != ''">Nom :  <br>{{ this.userStore.user['last_name'] }}</p>
        <p v-if=" this.userStore.user['first_name'] != ''">Prénom :  <br>{{ this.userStore.user['first_name'] }}</p>
      </div>
      <div class="right">
        <img :src="this.userStore.user['avatar_urls']['96']" alt="Avatar">
        <p class="mini">créez votre avatar sur <a href="https://gravatar.com" target="blank">gravatar.com</a></p>
      </div>
    </div>
    
    <p>E-mail : <br>{{ this.userStore.user['email'] }}</p>
    
    <p
      class="link"
      @click="showModal = true"
      >modifier mon mot de passe</p>
      <passwordInput
      label="Entrez votre mot de passe actuel"
      placeHolder="coucou"
      name="old-password"/>
      
    <div v-if="changePassword">
      <label>
        Mot de passe actuel
				<input
					:type="[this.inputType(this.seeOldPwd)]"
					name="old-password"
          id="old-pwd"
					v-model="this.oldPassword"
        >
				
				<font-awesome-icon
					icon="fa-solid fa-eye"
					class="eye"
					@click="this.handleSeeOldPwd()"
					v-bind:class="{'hide': this.seeOldPwd}"
					alt=""
					width="16" />	
					
				<font-awesome-icon
					icon="fa-solid fa-eye-slash"
					class="eye"
					@click="this.handleSeeOldPwd()"
					v-bind:class="{'hide': !this.seeOldPwd}"
					alt=""
					width="16" />	
      </label>
    <form @submit.prevent="this.handleFormSubmit">
      <label>
        Nouveau mot de passe
				<input
					:class="['pwdInput', isPasswordValid()]"
					:type="[this.inputType(this.seePwd)]"
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
					:type="[this.inputType(this.seePwdVerif)]"
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
    </div>
    <p class="link red">supprimer mon compte</p>
  </div>
</template>

<script>
import {useUserStore} from '@/stores/User';
import { userService } from '@/services/userService'
import LoaderView from '@/components/Layout/Loading.vue';
import PasswordInput from '@/components/PasswordInput.vue';
//import SpinnerCpnt from '@/components/SpinnerCpnt.vue'

export default{
  name:'ProfilView',
  components: {
    LoaderView,
    PasswordInput
  //  SpinnerCpnt,
  },
  data() {
    return{
      date : false,
      month : '',
      showModal:false,
      changePassword: false,
      email: '',
      username: '',
      // first_name: '',
      // last_name: '',
      oldPassword: '',
      password:'',
      passwordVerify: '',
      //passwordfocus: false,

      seeOldPwd:false,
      seePwd:false,
      seePwdVerif:false,
      
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
    }
  },
  setup() {
    const userStore = useUserStore();
    return{
      userStore,
    }
  },
  methods : {
    getReadableMonth(){
      switch (this.date.getMonth()) {
        case 1 : {
          return 'janvier'
        }
        case 2 : {
          return 'février'
        }
        case 3 : {
          return 'mars'
        }
        case 4 : {
          return 'avril'
        }
        case 5 : {
          return 'mai'
        }
        case 6 : {
          return 'juin'
        }
        case 7 : {
          return 'juillet'
        }
        case 8 : {
          return 'août'
        }
        case 9 : {
          return 'septembre'
        }
        case 10 : {
          return 'octobre'
        }
        case 11 : {
          return 'novembre'
        }
        case 12 : {
          return 'décembre'
        }
        default: {
          return 'mois'
        }
      }
    },

    openPwdChange(){
      this.changePassword = !this.changePassword
      setTimeout(()=>{
        document.querySelector("#old-pwd").focus()
      },100)
    },
    inputType(shallISee){
      return (shallISee) ? 'text' : 'password';
    },
    handleSeeOldPwd(){
      this.seeOldPwd = !this.seeOldPwd;
    },
    handleSeePwd(){
      this.seePwd = !this.seePwd;
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
					
  },
  async created() {
    if ( await userService.isConnected() ){
      this.userStore.createUser(await userService.getUserInfos())
      this.date = new Date(this.userStore.user['registered_date'])
    }
    else{
      this.$router.push( {name: '403'})
    }
  }
}
</script>

<style lang="scss" scoped>
h1, h2, h3, p, ul, li{
	font-family: 'quicksand', Arial, Helvetica, sans-serif;
}

	h3{
		color: blueviolet;
		text-align: center;
	}
  p {
	font-size:1.2em;
	font-family:'Quicksand', Arial, Helvetica, sans-serif ;
	color:rgb(0, 89, 255);
  margin : 0.5em 0em;
  // overflow: hidden;
  line-height: 1.3em;
  word-wrap:break-word;

  &.link{
    cursor: pointer
  }
  &.red{
    color : rgb(252, 80, 80)
  }
}
.page{
  margin : 2em;
  }
  .container{
    width : 100%;
    //border:1px solid red;
    display: flex;
    justify-content: right;
  }
  .left{
    width: calc(100% - 105px);
  }
  .right{
    border-left:1px solid rgb(116, 116, 116);
    border-top-left-radius:48px;
    //border:1px solid red;
    margin:0 auto;
    padding : 0px;
    text-align: center;
    max-width: 105px;
    & .mini{
      font-size: 0.8em;
    }
    & img{
      
    border-radius: 50%;
    margin-top:5px;
  }
}
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
    .hide{
		display: none;
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
</style>