import axios from "axios";
import { storage } from "@/utils/storage";

export const listService =
{
  // Propriété qui stocke la BASE URL de notre API
	//base_url : "http://192.168.42.124/Projets_Vue/ListeDeCouseBackendV2/wordpress/wp-json/",
	//base_url : "http://192.168.1.40/Projets_Vue/ListeDeCouseBackendV2/wordpress/wp-json/",
	base_url : "https://listeback-v2.raffiskender.com/wp-json/",

  // Méthode pour se connecter
  async findAll()
	{
		const userData = storage.get( "userData" );
    const response = await axios.get(
			this.base_url + "liste-de-course/v1/data/" + userData.user_id,
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

  async update(newJsonTable)
	{
		const userData = storage.get( "userData" );

    const response = await axios.put(
			this.base_url + "liste-de-course/v1/data/" + userData.user_id,
			{
        json: newJsonTable,
			},
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

  async patch(elementId, newTitle)
	{
		const userData = storage.get( "userData" );

    const response = await axios.patch(
			this.base_url + "wp/v2/list_element/" + elementId,
			{
        title: newTitle,
			},
			{
				headers:{
						Authorization : "Bearer " + userData.token
				}
			}
    ).catch( function() {
      return { data : null };
    } );
		console.log(response.data);
    return response.data;
  },

  async delete(listId)
	{
		const userData = storage.get( "userData" );

    await axios.delete(
			this.base_url + "wp/v2/list_element/" + listId,
			{
				headers:{
						Authorization : "Bearer " + userData.token
				}
			}
    ).catch( function() {
      return false;
    } );
		
    return true;
  }
};