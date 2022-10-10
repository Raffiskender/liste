import axios   from "axios";
import storage from "@/utils/storage";

const listService =
{
  // Propriété qui stocke la BASE URL de notre API
	base_url : "https://listeback.raffiskender.com/wp-json/",

  // Méthode pour se connecter
  async findAll()
	{
		const userData = storage.get( "userData" );

    const response = await axios.get(
			this.base_url + "wp/v2/list_element?author=" + userData.user_id + "&status=private&_embed=true",
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

  async create(newElement)
	{
		const userData = storage.get( "userData" );

    const response = await axios.post(
			this.base_url + "wp/v2/list_element",
			{
        title: newElement,
        status: "private",
        classement: '',
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

export default listService;