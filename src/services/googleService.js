import axios from "axios";

export const googleService = 
{
  // Propriété qui stocke la BASE URL de notre API
	//base_url : "http://192.168.42.124/Projets_Vue/ListeDeCouseBackendV2/wordpress/wp-json/",
  base_url : "https://listeback-v2.raffiskender.com/wp-json/",

  // demande du code au back-end.
  async login( code )
  {
    const response = await axios.post( this.base_url + "liste-de-course/v1/googleLogin", {
      headers : {
        'Content-Type': 'text/html; charset=UTF-8'
      },
      code: code,
    }).catch( function(data) {
      return { data };
    });
    
  return response.data;
  },

};