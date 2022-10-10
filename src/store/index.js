import { createStore } from 'vuex'
import storage from '@/utils/storage'

export default createStore({
  state: 
  {
    isConnected: false,
		//userId:'',
  },
  getters: 
  {
  },
  mutations: 
  {
		// rememberUserId(state){
		// 	const userData = storage.get( "userData" );
		// 	state.userId = userData.id;
		// },
		// forgetUserId(state){
		// 	state.userId = '';
		// },
		
    userConnected(state)
    {
      state.isConnected = 'true';
    },
		
    setConnected(state, connected) 
    {
      // Je met à jour mon state avec la nouvelle valeur
      state.isConnected = connected;
    }
  },
	
  actions: 
	{
    userDisconnected(context)
    {
      context.commit( "setConnected", false );
      storage.unset( "userData" );
			//context.commit( "forgetUserId" );
		},
	},
  modules: {

  }
})
