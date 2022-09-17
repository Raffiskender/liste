import axios   from "axios";
import storage from "@/utils/storage";

const listService =
{
  // Propriété qui stocke la BASE URL de notre API
	base_url : "http://192.168.1.30/Projets_Vue/ListeDeCouseBackend/wordpress/wp-json/",

  // Méthode pour se connecter
  async findAll()
	{
		const userData = storage.get( "userData" );

    const response = await axios.get(
			this.base_url + "wp/v2/list_element?author=1&status=private&_embed=true",
			{
				headers:{
						Authorization : "Bearer " + userData.token
				}
			}
    ).catch( function() {
      return { data : null };
    } );
		
    return response.data;
  },

  async delete(listId)
	{
		const userData = storage.get( "userData" );

    const response = await axios.delete(
			this.base_url + "wp/v2/list_element/" + listId,
			{
				headers:{
						Authorization : "Bearer " + userData.token
				}
			}
    ).catch( function() {
			console.log('ERREUR INTERNE')
      return { data : null };
    } );
		
    return response.data;
  }
};

export default listService;