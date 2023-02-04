import { defineStore } from 'pinia'
import { storage } from '@/utils/storage'

export  const useUserStore = defineStore('User', {
  state: () => ({
    isConnected: false,
  }),

  actions: {
    userConnection()
    {
      this.isConnected = true;
    },
    
    userDisconnection()
    {
      this.isConnected = false;
      storage.unset( "userData" );
		},
    
    setConnected(bool){
      if (bool)
        this.userConnection()
      else
        this.userDisconnection()
    },
	},
})
