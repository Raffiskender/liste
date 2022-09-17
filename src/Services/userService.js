import axios   from "axios";
import storage from "@/utils/storage";

const userService = 
{
  // Propriété qui stocke la BASE URL de notre API
  base_url : "http://192.168.1.30/Projets_Vue/ListeDeCouseBackend/wordpress/wp-json",

  // Méthode pour se connecter
  async login( p_login, p_password )
  {
    const response = await axios.post( this.base_url + "/jwt-auth/v1/token", {
      username: p_login,
      password: p_password
    } ).catch( function() {
      return { data : null };
    } );
    return response.data;
  },
	
  // Méthode pour vérifier si on est connecté
  async isConnected()
  {
    // Vérification de la validité du token JWT stocké dans le localStorage
    const userData = storage.get( "userData" );

    // On vérifie d'abord qu'on a récupéré quelque chose
    if( userData != null )
    {
      // On vérifie qu'un token est présent dans ces données
      if( userData.token )
      {
        // On appelle l'API WP pour vérifier la validité du token
        await axios.post( 
          this.base_url + "/jwt-auth/v1/token/validate",
          null, // On envoi pas de données à cet endpoint uniquement un Header
          {
            // On met notre token dans le header Authorization de la requête
            headers : {
              Authorization : "Bearer " + userData.token
            }
          }
        ).catch( function() {
          // Token invalide, on renvoi false
          return false;
        } );

        // Si on arrive jusqu'ici c'est que tout est bon, le token est valide, on est connecté
        // console.log( response );
        return true;
      }
    }
    
    return false;
  },

	async suscribe(eMail, login, firstName, lastName, password) {
		const response = await axios.post( 
			this.base_url + "/wp/v2/users",
			{
				username   :login,
				first_name :firstName,
				last_name  :lastName,
				email      :eMail,
				password   :password,
				roles      :['author'],
			}).catch( function() {
      // Ici, j'indique a JS quoi faire si la requete échoue (erreur réseau, etc)
				return { response : null };
			});
		return (response.data)
	}
};

export default userService;