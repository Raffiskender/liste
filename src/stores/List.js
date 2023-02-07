import { defineStore } from 'pinia'
import { listService } from '@/services/listService'

export const useListStore = defineStore('list', {
  state: () => ({
    listData: false,
  }),
  
  actions: 
  {
    async findAll()
    {
      const tampon = await listService.findAll()
      this.listData = JSON.parse(tampon)
    },
    
    async delete(id)
    {
      this.listData = this.listData.filter(list => list.id !== id);
      if (this.listData.length == 0) {
        this.listData[0] = 'vide';
      }
        
      await listService.update(JSON.stringify(this.listData)) 
    },
    
    async add(newElement){
      if (this.listData[0] == 'vide'){
        this.listData = [];
      }
      this.listData.push(newElement)
      
      await listService.update(JSON.stringify(this.listData)) 
    },
    
    toggleDone(id){
      for (const currentElm of this.listData) {
        if (currentElm.id === id){
          currentElm.done = ! currentElm.done
        }
      }
      this.updateDatabase()
    },

    changeTitle(id, newTitle){
      for (const currentElm of this.listData) {
        if (currentElm.id === id){
          currentElm.content = newTitle 
        }
      }
      this.updateDatabase()
    },
    
    updateDatabase(){
     
      listService.update(JSON.stringify(this.listData)) 
    }, 
      
  }
})
