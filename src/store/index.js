import { createStore } from 'vuex'
import storage from '@/utils/storage'

export default createStore({
  state: 
  {
    isConnected: false
  },
  getters: 
  {
  },
  mutations: 
  {
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
		},
	},
  modules: {

  }
})
