<template>
  <section>
    <h2>S'enregistrer</h2>
    <form @submit.prevent="this.handleFormSubmit">
      <label>
        Email
        <input type="mail" name="Email" v-model="this.email" placeholder="Email" required/>
        <div class="error" v-if="this.errors.emailEmpty">
          Vous devez saisir un mail !
        </div>
      </label>
			
      <label>
        Login
        <input type="text" name="username" v-model="this.username" placeholder="username" required/>
        <div class="error" v-if="this.errors.usernameEmpty">
          Vous devez saisir un login !
        </div>
      </label>
			
      <label>
        Nom (pas obligatoire mais c'est mieux)
        <input type="text" name="first_name" v-model="this.first_name" placeholder="first_name"/>
        <!-- <div class="error" v-if="this.errors.first_nameEmpty">
          Vous devez saisir un Nom !
        </div> -->
      </label>
      <label>
        Prénom (pas obligatoire non plus mais c'est mieux)
        <input type="text" name="last_name" v-model="this.last_name" placeholder="Prénom"/>
        <!-- <div class="error" v-if="this.errors.last_nameEmpty">
          Vous devez saisir un Nom !
        </div> -->
      </label>

      <label>
        Mot de passe
        <input type="password" name="password" v-model="this.password" />
        <div class="error" v-if="this.errors.passwordEmpty">
          Vous devez saisir un mot de passe !
        </div>
      </label>
			
      <label>
        Vérification du mot de passe
        <input type="password" name="passwordVerify" v-model="this.passwordVerify" />
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

      <button>
        S'inscrire
      </button>
      <div class="error" v-if="this.errors.suscribeFailed">
				Il y eu un pb interne lors de votre enregistrement
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
	
  export default 
  {
    name: "LoginView",
		
    data()
    {
      return {
				email: "",
        username: "",
        first_name: "",
        last_name: "",
        password: "",
        passwordVerify: "",
        errors : {
					suscribeFailed: false,
          emailEmpty: false,
          usernameEmpty: false,
          fisrt_nameEmpty: false,
          last_nameEmpty: false,
          passwordEmpty: false,
          passwordVerifyEmpty: false,
					passwordsDoesNotMatch: false,
				},
        success : {
					suscribeSuccessfull: false,
        }
      }
    },

		methods: 
		{
			async handleFormSubmit( )
			{
				this.errors.suscribeFailed = false;

				// --- Vérification des données du formulaire --- //

				// En version raccourcie : on stocke le résultat de la condition dans la variable

				this.errors.emailEmpty     = ( this.email    == "" );
				this.errors.usernameEmpty  = ( this.username == "" );
				this.errors.passwordEmpty  = ( this.password == "" );
				this.errors.passwordsDoesNotMatch = ( this.password != this.passwordVerify );
				
				// Si une erreur est rencontrée, on n'envoi pas la requete au serveur !
				if( !this.errors.usernameEmpty &&
						!this.errors.passwordEmpty &&
						!this.emailEmpty &&
						!this.errors.passwordsDoesNotMatch)
				{
					// Envoie de la requette à l'endpoint users pour création du nouvel utilisateur
					let data = await userService.suscribe( this.email, this.username, this.first_name, this.last_name, this.password );
					console.log(this.email, this.username, this.first_name, this.last_name, this.password)
					
					if (data){
						this.success.suscribeSuccessfull = true;
					}
					else{
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
    }
  }

  button {
    display: block;
    margin: 5px 0;
    width: 100%;
    padding: 1em 1.5em;
    border-radius: 0.5em;
    color: white;
		background: rgb(150, 150, 150);
    font-weight: bold;
    border: none;
    box-sizing: border-box;
		transition: 0.3s;

    &:hover
    {
      cursor: pointer;
			background: #686868;
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