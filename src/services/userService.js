import axios from "axios";
import { storage } from "@/utils/storage";
import { useUserStore } from '@/stores/User';

export const userService =
  {
    //userStore : useUserStore(),
    
    // Propriété qui stocke la BASE URL de notre API
    //
    base_url : "http://192.168.42.124/Projets_Vue/ListeDeCouseBackendV2/wordpress/wp-json/",
    //base_url : "http://192.168.1.41/Projets_Vue/ListeDeCouseBackendV2/wordpress/wp-json/",
    //base_url : "https://listeback-v2.raffiskender.com/wp-json/",
    //base_url : "http://localhost/Projets_Vue/ListeDeCouseBackendV2/wordpress/wp-json/",

    success : '',
  
    //userStore : useUserStore,

    // Méthode pour se connecter
    async login( p_login, p_password )
    {
      const response = await axios.post( this.base_url + "jwt-auth/v1/token", {
        username: p_login,
        password: p_password
      }).catch( function() {
        return { data : null };
      });
      
      return response.data;
    },
    
    // Méthode pour vérifier si on est connecté
    async isConnected()
    {
      const userStore = useUserStore()
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
            this.base_url + "jwt-auth/v1/token/validate",
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
          
          // Si on arrive jusqu'ici c'est que tout est bon, le token est valide. On va tout de suite vérifier que notre user est bien "confirmed". on est connecté
          // console.log( response );
          userStore.userConnection()
          //this.getUserInfos();
          
          return true;
        }
      }
      
      return false;
    },

    async subscribe(eMail, login, password) {
      console.log(eMail + ' ' + login + ' ' + password)
      this.success = 1;
      const response = await axios.post( 
        this.base_url + "liste-de-course/v1/create-user",
        {
          username   :login,
          email      :eMail,
          password   :password,
        }).catch( (response) => {
          // Ici, j'indique a JS quoi faire si la requete échoue (erreur réseau, etc)
            //console.log(response.response.data.message);
            this.success = 0;
            //* catch will return to the subscribe function
            return response
          }
        );
      //* everything went well
      if (this.success == 1){
        return {
          'success': 1,
          'response': response.data,
        }
      }
      //* we encoutered an error.
      else {
        return {
        'success': 0,
        'response': response.response.data,
        }
      }
    },
    
    async getUserInfos(){
      const userData = storage.get( "userData" )
     
      const response = await axios.post(this.base_url + "wp/v2/users/me",
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

      return response.data;
    },
    
    async userConfirmation( user, key ){
        const response = await axios.post( 
        this.base_url + "liste-de-course/v1/confirm",
        {
          user :user,
          key  :key,

        }).catch( function(){
            return { data : null };
        });
      return response.data;
    },
    
    async userAsksForPasswordReset(email){
      this.success = 1;
      const response = await axios.post(
        this.base_url + 'liste-de-course/v1/askForPasswordReset', {
          email : email,			
          }).catch( function(response) {
            // Ici, j'indique a JS quoi faire si la requete échoue (erreur réseau, etc)
            //console.log(response.response.data.message);
              this.success = 0;
              return response
            }
          );
        if (this.success == 1){
          return {
            'success': 1,
            'response': response.data,
          }
        }
        else {
          return {
          'success': 0,
          'response': response.response.data,
          }
        }
      },
    
    async passwordReset(password, key, userId){
      this.success = 1;
      const response = await axios.post( 
        this.base_url + "liste-de-course/v1/resetPassword",
        {
          password :password,
          userId   :userId,
          key      :key,
        }).catch( function(response) {
          // Ici, j'indique a JS quoi faire si la requete échoue (erreur réseau, etc)
            //console.log(response.response.data.message);
            this.success = 0;
            return response
          }
        );
      if (this.success == 1){
        if (response.data == '1'){
          return {
            'success': 1,
          }
        }
          else {
            return {
            'success': 0,
            'response': response.data,
          }
        }
      }
    },
    
    async passwordResetFromProfil(currentPassword, newPassword){
      const userData = storage.get( "userData" )
      
      this.success = 1;
      const response = await axios.post( 
        this.base_url + "liste-de-course/v1/resetPasswordFromProfil",
        {
          currentPassword :currentPassword,
          newPassword : newPassword,
          userId : userData.user_id
        },
        {
          headers : {
            Authorization : "Bearer " + userData.token
          }
        }).catch( (response) => {
          // Ici, j'indique a JS quoi faire si la requete échoue (erreur réseau, etc)
            //console.log(response.response.data.message);
            this.success = 0;
            return response
          }
        );
      //console.log(this.success)
      if (this.success == 1){
        if (response.data == '1'){
          return {
            'success': 1,
          }
        }
      }
      else {
        return {
          'success': 0,
          'response': response.response.data,
        }  
      }
    },
    
    async deleteAccount(){
      const userData = storage.get( "userData" )
      this.success = 1;
      const response = await axios.delete( 
        this.base_url + "liste-de-course/v1/delete-user",
        {
          headers : {
            Authorization : "Bearer " + userData.token
          }
        }).catch( (response) => {
          // Ici, j'indique a JS quoi faire si la requete échoue (erreur réseau, etc)
            //console.log(response.response.data.message);
            this.success = 0;
            return response
          }
        );
      //console.log(this.success)
      if (this.success == 1){
        if (response.data == '1'){
          return {
            'success': 1,
          }
        }
      }
      else {
        return {
          'success': 0,
          'response': response.response.data,
        }  
      }
    },

    async changeUserLastName(params){
      const userData = storage.get( "userData" )
      
      this.success = 1;
      const response = await axios.post( 
        this.base_url + "liste-de-course/v1/changeLastName",
        {
          lastName :params,
        },
        {
          headers : {
            Authorization : "Bearer " + userData.token
          }
        }).catch( (response) => {
          // Ici, j'indique a JS quoi faire si la requete échoue (erreur réseau, etc)
            //console.log(response.response.data.message);
            this.success = 0;
            return response
          }
        );
      //console.log(this.success)
      if (this.success == 1){
        if (response.data == '1'){
          return {
            'success': 1,
          }
        }
      }
      else {
        return {
          'success': 0,
          'response': response.response.data,
        }  
      }
    }
    
  }
