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
					src="@/assets/eye-solid.svg"
					alt=""
					width="16" /> 
				<font-awesome-icon
					class="eye"
					icon="fa-solid fa-eye-slash"
					@click="this.handleHidePwd()"
					v-bind:class="{'hide': !this.seePwd}"
					src="@/assets/eye-slash-solid.svg"
					alt=""
					width="16"/>

				
				<div class="error" v-if="this.errors.passwordEmpty">
          Vous devez saisir un mot de passe !
        </div>
      </label>

      <div class="error" v-if="this.errors.loginFailed" style="font-weight: bold; margin-bottom: 1em; text-align: center;">
        Identifiants incorrects
      </div>

      <button :disabled="this.login == '' || this.password == ''">
        Se connecter
      </button>
    </form>
  </section>
</template>

<script>
  import userService from "@/Services/userService";
  import storage     from "@/utils/storage";
	
  export default 
  {
    name: "LoginView",
		
    data()
    {
      return {
        login: "",
        password: "",
				seePwd:false,
				
        errors : {
          loginEmpty: false,
          passwordEmpty: false,
          loginFailed: false,
        }
      }
    },

    methods: 
    {
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

        // --- Vérification des données du formulaire --- //

        // En version raccourcie : on stocke le résultat de la condition dans la variable

        this.errors.loginEmpty    = ( this.login    == "" );
        this.errors.passwordEmpty = ( this.password == "" );

        // Si une erreur est rencontrée, on n'envoi pas la requete au serveur !
        if( !this.errors.loginEmpty && !this.errors.passwordEmpty )
        {

          // Envoie de la requette à l'endpoint JWT et récupération d'un token de connexion
          let data = await userService.login( this.login, this.password );

          // Stokage du token dans le localStorage
          // L'objet data sera convertit en JSON
          storage.set( "userData", data );

          // ON AWAIT LE RETOUR DE isConnected() pour la validation du token, sinon on reçoit une Promise et non un booléen !
          if( await userService.isConnected() )
          {
            // On émet un event custom pour indiquer aux parents 
            // que l'utilisateur s'est connecté avec succès
            // this.$emit( "user-connected" );
            // VueX : Plus besoin de s'embeter a faire remonter des events
            this.$store.commit( 'userConnected' );
						
						//console.log("connecté");
            // Redirection vers la home
            this.$router.push( { name : 'list' } );
          }
          else
          {
            // Token invalide, ou identifiants invalides
            this.errors.loginFailed = true;
						//console.log("ERREUR ! ! !")
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
			background: lighten(blueviolet, 15%);
    }
		&:disabled{
			background: #bbb;
		}
  }
}
</style>