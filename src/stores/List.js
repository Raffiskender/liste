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
    
    async updateTitle(id, newTitle){
      
      for (const current in this.listData){
        if (this.listData[current].id === id){
          this.listData[current].content = newTitle
          
        }
      }
      
      await listService.update(JSON.stringify(this.listData)) 
    }, 
    
    async updateDone(id, done){
      
      for (const current in this.listData){
        if (this.listData[current].id === id){
          this.listData[current].done = done
          
        }
      }
      
      await listService.update(JSON.stringify(this.listData)) 
    }
      
      
  }
})
