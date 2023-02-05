<template>
  <section>
    <h2>Connexion</h2>
    <form @submit.prevent="this.handleFormSubmit">
      <label>
        Login ou e-mail
        <input type="text" name="login" v-model="this.login" placeholder="Paul Position"/>
        <div class="error" v-if="this.errors.loginEmpty">
          Vous devez saisir un identifiant !
        </div>
      </label>

      <label>
        Mot de passe
        <input
					:type="[pwdInputType()]"
					name="password"
					v-model="this.password"
					@blur="[this.handleHidePwd()]"/>
				
				<font-awesome-icon
					class="eye"
					icon="fa-solid fa-eye"
					@click="this.handleShowPwd()"
					v-bind:class="{'hide': this.seePwd}"
					alt=""
					width="16" /> 
				<font-awesome-icon
					class="eye"
					icon="fa-solid fa-eye-slash"
					@click="this.handleHidePwd()"
					v-bind:class="{'hide': !this.seePwd}"
					alt=""
					width="16"/>

				<div>
          <router-link :to="{name : 'passwordReset'}" >J'ai oublié mon mot de passe !</router-link>
        </div>
				<div class="error" v-if="this.errors.passwordEmpty">
          Vous devez saisir un mot de passe !
        </div>
      </label>

      <div class="error" v-if="this.errors.loginFailed" style="font-weight: bold; margin-bottom: 1em; text-align: center;">
        Identifiants incorrects
      </div>
      <div class="error" v-if="this.errors.unconfirmedUser" style="font-weight: bold; margin-bottom: 1em; text-align: center;">
				Vous ne pouvez pas vous connecter car votre email n'a pas été vérifié !
      </div>
      <button @click="this.handleFormSubmit" :disabled="this.login == '' || this.password == '' || this.awaiting">
        <span v-if="!this.awaiting">Se connecter</span>
				<SpinnerCpnt v-else/>
      </button>
    </form>
    <div class="google">
    
      <p style = "margin-bottom: 1em;">Vous pouvez aussi vous connecter via</p>
      
      <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=email profile&access_type=online&redirect_uri=https://liste-v2.raffiskender.com/googleLogin&response_type=code&client_id=270319015769-o80is9ik9r6pop7fmojb46ns28pic1li.apps.googleusercontent.com"><img src="@/../public/google.png" style = "width : 180px; height : auto">
      </a>
 
    </div>

  </section>
	
</template>

<script>
  import { userService }  from "@/services/userService";
  import { storage }      from "@/utils/storage";
	import SpinnerCpnt      from "@/components/SpinnerCpnt.vue";
  import { useUserStore } from "@/stores/User";
  
  export default
  {
    name: "LoginView",
		
		components:{
			SpinnerCpnt },
		
    setup()
    {
      const store = useUserStore();
      return{
        store,
      }
    },
    
    data() {
      return {
        login: "",
        password: "",
				seePwd:false,
				awaiting:false,
        
        errors : {
          loginEmpty: false,
          passwordEmpty: false,
          loginFailed: false,
					unconfirmedUser:false,
        }
      }
    },
    methods: 
    {
      
      handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
      },
      
			handleShowPwd(){
				this.seePwd = true;
			},
			
			handleHidePwd(){
				this.seePwd = false
			},
			
			pwdInputType(){
				return (this.seePwd) ? 'text' : 'password';
			},
			
      async handleFormSubmit()
      {
        // On retire l'erreur précédente
        this.errors.loginFailed = false;
				this.errors.unconfirmedUser = false;
				this.awaiting = true
        // --- Vérification des données du formulaire --- //

        // En version raccourcie : on stocke le résultat de la condition dans la variable

        this.errors.loginEmpty    = ( this.login    == "" );
        this.errors.passwordEmpty = ( this.password == "" );

        // Si une erreur est rencontrée, on n'envoi pas la requete au serveur !
        if( !this.errors.loginEmpty && !this.errors.passwordEmpty )
        {

          // Envoie de la requette à l'endpoint JWT et récupération d'un token de connexion
          let data = await userService.login( this.login, this.password );

          storage.set( "userData", data );
					
					if (data == null){
						this.errors.loginFailed = true;
						this.awaiting = false
					}
          // Stokage du token dans le localStorage
          // L'objet data sera convertit en JSON

          // ON AWAIT LE RETOUR DE isConnected() pour la validation du token, sinon on reçoit une Promise et non un booléen !
          else if( data.user_confirmed[0] == ['0'] ){
						this.errors.unconfirmedUser = true
						//storeUser.userDisconnected();
						this.awaiting = false
					}
          else if( await userService.isConnected() )
          {	//console.log(data)
						//* on vérifie que notre user est "confirmed" :
											
            // On émet un event custom pour indiquer aux parents 
            // que l'utilisateur s'est connecté avec succès
            // this.$emit( "user-connected" );
            // VueX : Plus besoin de s'embeter a faire remonter des events
            this.store.userConnection();
						this.awaiting = false
						
						//console.log("connecté");
            // Redirection vers la home
            this.$router.push( { name : 'list' } );
						}
          }    
        }
      }
    }
  
</script>

<style lang="scss" scoped>

/*This min-height section is to force mozilla android to keep the nav-bar.*/
section{
	min-height: calc(100vh + 0.05em);
}
div.google{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    }
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

  button {
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
			background: lighten(blueviolet, 15%);
    }
		&:disabled{
			background: #bbb;
		}
		>div{
			margin : auto
		}
  }
}
</style>