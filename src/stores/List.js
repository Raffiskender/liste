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
      for (const item of this.listData){
        if (item.selected){
          item.content = item.content.filter(list => list.id !== id);
          if (item.content.length == 0) {
            item.content = 'vide';
          }
        return
        }
      }  
      await listService.update(JSON.stringify(this.listData)) 
    },
    
    async add(newElement){
      for (const item of this.listData){
        if (item.selected){
          if (item.content == 'vide'){
            item.content = [];
          }
          item.content.push(newElement)
          this.updateDatabase()
          return
        }
      }
    },
    
    toggleDone(id){
      for (const item of this.listData){
        if (item.selected){
          for (const currentElm of item.content) {
            if (currentElm.id === id){
              currentElm.done = ! currentElm.done
              this.updateDatabase()
              return
            }
          }
        }
      }
    },

    changeTitle(id, newTitle){
      for (const item of this.listData){
        if (item.selected){
          for (const currentElm of item.content) {
            if (currentElm.id === id){
              currentElm.content = newTitle
              this.updateDatabase()
              return
            }
          }
        }
      }
    },
    
    updateDatabase(){
      listService.update(JSON.stringify(this.listData)) 
    }, 
    
    updateList(){
      const listDataTampon = this.listData
      this.listData = [{
        id : 1,
        tabName : "liste",
        selected: true,
        content : listDataTampon,
      }]

    this.updateDatabase
    },
    createNewTab(){
      const newTab = {
        id: Date.now(),
        tabName: "nouvelle liste",
        selected: true,
        content: "vide",
      }
      for(const item of this.listData){
        item.selected = false
      }
      this.listData.push(newTab);
      this.updateDatabase()
    },
    
    removeTab(){
      let idMoinsUn = 1, item, done = false
      
      for (item of this.listData){
        if (item.selected && item.id !==1){
          this.listData = this.listData.filter(list => list.id !== item.id);
          this.updateDatabase()
          done = true
        }
        if (item.selected && item.id ===1){
          console.log("vous ne pouvez pas supprimer la liste n°1")
          break
        }
        
        idMoinsUn = !done ? item.id : idMoinsUn
      }
      this.changeSelectedTab(idMoinsUn)
      
    },
    
    changeSelectedTab(id){
      for(const item of this.listData){
        item.selected = item.id == id ? true : false
      }
      //console.log(this.listData)
    }
  }
})
