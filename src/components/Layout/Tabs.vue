<template>
  <div class="tab">
    <!-- faire un v-for sur le tableau pour avoir le nom des onglets -->
    <button 
      v-for="currentTab in this.listStore.listData"
      v-bind:key="currentTab.id"
      class="tablinks"
      v-bind:class="{'active': currentTab.selected}"
      :id = "'tabButton-' + currentTab.id"
      @click="openTab($event, currentTab.id)"
    >
    {{currentTab.tabName}}
    </button>
    <button class="tablinks" @click="this.handleNewTab()">+</button>
    <button class="tablinks red" @click="this.handleRemoveTab()">-</button>
    <!-- fin du v-for -->
  </div>
</template>

<script>
import {useListStore} from '@/stores/List';

export default{
  name : 'TabsCpnt',
  
  setup() {
    const listStore = useListStore();
    return{
      listStore,
    }
  },
  methods : {
    openTab(event, id){
      // Get all elements with class="tablinks" and remove the class "active"
      let tablinks = document.getElementsByClassName("tablinks");
      for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

      // Show the current tab, and add an "active" class to the button that opened the tab
      //document.getElementById("window-" + id).style.display = "block";
      
      event.currentTarget.className += " active";
      this.listStore.changeSelectedTab(id)
    },
    
    handleNewTab(){
      this.listStore.createNewTab()

    //this.activeTab = newTab.id
    },
    handleRemoveTab(){
      this.listStore.removeTab()

    //this.activeTab = newTab.id
    },
  }
}
</script>

<style lang="scss" scoped>
.tab {
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  
}

/* Style the buttons that are used to open the tab content */
.tab button {
  box-sizing: border-box;
  background-color: inherit;
  float: left;
  border: none;
  border-bottom: solid #00000000 5px;
  outline: none;
  cursor: pointer;
  padding: 9px 16px;
  transition: 0.3s;
 
  &:hover {
  background-color: #ddd;
  border-bottom: solid 5px #ddd
  }
  &.active {
  background-color: #ccc;
  border-bottom: white;
  }
  &.red{
    color : red;
    font-weight: bold;
  }
}

/* Change background color of buttons on hover */

/* Style the tab content */


</style>