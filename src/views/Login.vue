<template>
  <section>
    <h2>Connexion</h2>
    <form @submit.prevent="this.handleFormSubmit">
      <label>
        Login
        <input type="text" name="login" v-model="this.login" placeholder="Paul Position"/>
        <div class="error" v-if="this.errors.loginEmpty">
          Vous devez saisir un identifiant !
        </div>
      </label>

      <label>
        Mot de passe
        <input type="password" name="password" v-model="this.password" />
        <div class="error" v-if="this.errors.passwordEmpty">
          Vous devez saisir un mot de passe !
        </div>
      </label>

      <div class="error" v-if="this.errors.loginFailed" style="font-weight: bold; margin-bottom: 1em; text-align: center;">
        Identifiants incorrects
      </div>

      <button>
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
        errors : {
          loginEmpty: false,
          passwordEmpty: false,
          loginFailed: false,
        }
      }
    },

    methods: 
    {
      async handleFormSubmit( event )
      {
        console.log( "Form envoyé !", event );

        // On retire l'erreur précédente
        this.errors.loginFailed = false;

         console.log( this.login );
         console.log( this.password );

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
						
						console.log("connecté");
            // Redirection vers la home
            this.$router.push( { name : 'home' } );
          }
          else
          {
            // Token invalide, ou identifiants invalides
            this.errors.loginFailed = true;
						console.log("ERREUR ! ! !")
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
		text-align: left;
		font-family: Arial, Helvetica, sans-serif;

    input {
      display: block;
      margin: 5px 0;
      width: 100%;
      padding: 0.75em 1.5em;
      border-radius: 0.5em;
			background: #dfdfdf;;
      border: none;
      box-sizing: border-box;
    }
  }

  button {
    display: block;
    margin: 5px 0;
    width: 100%;
    padding: 1em 1.5em;
    border-radius: 0.5em;
    color: white;
		background: #ccc;
    font-weight: bold;
    border: none;
    box-sizing: border-box;

    &:hover
    {
      cursor: pointer;
    }
  }
}
</style>