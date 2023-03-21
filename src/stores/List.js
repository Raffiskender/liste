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
      this.listData = JSON.parse(await listService.findAll())
    },
    
    updateDatabase(){
      listService.update(JSON.stringify(this.listData)) 
    },
     
    //* this function is call to switch the list to V2.
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
    
    //* function to manage lines of the list.
    add(newElement){
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
    delete(id)
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
      this.updateDatabase()
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
    
    //* functions to manage Tabs
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
      return newTab.id
    },
    removeTab(){
      let idMoinsUn = 1, item, done = false
      
      for (item of this.listData){
        if (item.selected && item.id !==1){
          this.listData = this.listData.filter(list => list.id !== item.id);
          this.updateDatabase()
          done = true
        }
        if (item.selected && item.id === 1){
          return false
        }
        
        idMoinsUn = !done ? item.id : idMoinsUn
      }
      this.changeSelectedTab(idMoinsUn)
      return idMoinsUn
    },
    changeSelectedTab(id){
      for(const item of this.listData){
        item.selected = item.id == id ? true : false
      }
      this.updateDatabase()
    },
    changeTabName(name, id){
      for (const item of this.listData){
        if (item.id ===id){
          item.tabName = name
          this.updateDatabase()
          return
        }
      }
    },
    
    //*return selected tab
    selectedTab(){
      return(this.listData.filter(item => item.selected == true)[0].id)
    }
  }
})
