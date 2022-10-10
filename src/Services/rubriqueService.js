import axios   from "axios";
import storage from "@/utils/storage";

const rubriqueService =
{
  // Propriété qui stocke la BASE URL de notre API
	base_url : "https://listeback.raffiskender.com/wp-json/",

  // Méthode pour se connecter
  async findAll()
	{
		
		const userData = storage.get( "userData" );

    const response = await axios.get(
			this.base_url + "wp/v2/rubrique?author=" + userData.user_id + "&satus=private",
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
}
export default rubriqueService;
