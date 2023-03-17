<template>
  <!-- faire un v-for sur le tableau pour avoir le nom des onglets -->
  <div class="container">
    <button class="left-arrow arrow"
    v-bind:class="{'hide': !this.showArrow}"
    @click="handleLeftArrow()"
    
    >
      <font-awesome-icon icon="fa-solid fa-less-than" />
    </button>
    <div class="tab">
      <button 
      v-for="currentTab in this.listStore.listData"
      v-bind:key="currentTab.id"
      class="tablinks"
      v-bind:class="{'active': currentTab.selected}"
      :id = "'tabButton-' + currentTab.id"
      @click="openTab($event, currentTab.id)"
      >
        <form
          :id="'form-' + currentTab.id"
          class='hide'
          @submit="this.handleSaveTitle($event, currentTab.id)"
          >
          <input
          :value="currentTab.tabName"
          :id="'input-' + currentTab.id"
          @blur="this.handleSaveTitle($event, currentTab.id)"
          
          />
        </form>
        <div
        :id="'tab-' + currentTab.id"
        >
          {{ currentTab.tabName }}
        </div>
      </button>
    </div>
    <div class="right-side">
      <button
        class="tablinks"
        @click="this.handleNewTab()">
          <font-awesome-icon icon="fa-solid fa-plus" />
      </button>
      <button
        class="tablinks red"
        @click="this.confirmDeletion = true">
          <font-awesome-icon icon="fa-solid fa-minus" />
      </button>
      <button
      class="right-arrow arrow"
      v-bind:class="{'hide': !this.showArrow}"
      @click="handleRightArrow()"
      >
      <font-awesome-icon icon="fa-solid fa-greater-than" />
      </button>
    </div>
  </div>
<div class="errors" v-if="this.errors.tooLong">
  Ne pas dépasser 25 charactères
</div>
<div class="confirm" v-if="this.confirmDeletion">
    <p>Voulez-vous vraiment supprimer cet onglet ? </p>
    <button
    class="red"
    @click="this.removeTab()">
    oui
    </button>
    <button
    @click="this.confirmDeletion = false">
    non
    </button>
</div>
</template>

<script>
import {useListStore} from '@/stores/List';

export default
{
  name: "TabsCpnt",
 
  created(){
    window.addEventListener("resize", this.resize);
  },
  
  setup() {
    // Setup store
    const listStore = useListStore();    
		return { listStore }
  },
  mounted() {
    this.resize()
    document.querySelector('.tab').addEventListener("scroll", this.disableAnArrow );
    this.disableAnArrow()
    setTimeout( () => {
      this.ajustTabPlace(document.querySelector('.active').id.substring(10))
    }, 100)
    //this.width = window.innerWidth;
  },
  
  data() {
    return {
      showArrow : 0,
      preventEnter : 0,
      newTabTitle : "",
      errors : {
        "tooLong" : false
      },
      confirmDeletion : false
    }
  },
  
  methods : {
    openTab(event, id){
      if (event.currentTarget.className == 'tablinks'){
        // Get all elements with class="tablinks" and remove the class "active"
        let tablinks = document.getElementsByClassName("tablinks");
        for (let i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
       
        event.currentTarget.className += " active";
        //console.log(event.currentTarget)
        this.listStore.changeSelectedTab(id)
        
        setTimeout( () => {
         this.ajustTabPlace(id)
        }, 300, id); 
       
        this.tabIsOpen = 1
      }
      else if(event.currentTarget.className == 'tablinks active' && this.preventEnter == 0) {
        let selectedForm = document.getElementById('form-' + id)
        let selectedTab = document.getElementById('tab-' + id)
        const selectedInput = document.getElementById('input-' + id)
        
        selectedForm.classList.remove('hide')
        selectedTab.classList.add('hide')
        selectedInput.setAttribute("size", 5)
        selectedInput.focus()
        this.preventEnter = 1
           // setTimeout(function(){ document.getElementById('input-' + id).focus();}, 10)
      }
       
    },
    ajustTabPlace(id){
      //* Retrieve selectedButton & tabsBars, theire positions and length.
      const button = document.querySelector('#tabButton-' + id)
      //console.log(button)
      const buttonPosition = button.getBoundingClientRect().x
      //console.log(buttonPosition)
      const buttonWidth = button.scrollWidth
      //console.log(buttonWidth)
      const buttonTotal = buttonPosition + buttonWidth
      //console.log(buttonTotal)
      const tabsBarPosition = document.querySelector('.tab').getBoundingClientRect().x
      //console.log(tabsBarPosition)
      const tabsBarWidth = document.querySelector('.tab').clientWidth
      //console.log(tabsBarWidth)
      const tabsTotal = tabsBarPosition + tabsBarWidth

      // conditionning if our tab is outside by the right...
      if (buttonTotal > tabsTotal){
        //If the tab is too long to be centered
        if ((tabsBarPosition + tabsBarWidth / 2 + buttonWidth / 2) > tabsTotal){
          this.handleRightArrow((buttonTotal - tabsTotal) + 20)
        }
        //If the tab is not too long to be centered
        else{
          this.handleRightArrow(buttonPosition - tabsTotal + (tabsBarWidth / 2) + (buttonWidth / 2))
        }
      }
      // ...or by the left
      else if(buttonPosition < tabsBarPosition){
        //If the tab is too long to be centered
        if ((tabsBarPosition + tabsBarWidth / 2 + buttonWidth / 2) > tabsTotal){
          this.handleLeftArrow((tabsBarPosition - buttonPosition) + 20)
        }
        //If the tab is not too long to be centered
        else{
          this.handleLeftArrow(tabsBarPosition - buttonPosition + (tabsBarWidth / 2) - (buttonWidth / 2))
        }
      }
    },
    
    handleSaveTitle(event, id){
      event.preventDefault();
      this.errors.tooLong = false
      
      this.newTabTitle = document.getElementById('input-' + id).value
      
      
      if (this.newTabTitle == ""){
        this.listStore.removeTab()
      }
      if(this.newTabTitle.length > 25){
        this.errors.tooLong = true
        document.getElementById('input-' + id).value = "coucou !"
        return
      }
      document.querySelector('#form-' + id).classList.add('hide')
      document.querySelector('#tab-' + id).classList.remove('hide')
      setTimeout(()=>{this.preventEnter = 0}, 10)
      
      this.listStore.changeTabName(this.newTabTitle, id)
    },
    
    handleNewTab(){
      this.listStore.createNewTab()
      setTimeout(() => {
        this.resize()
        }, 5)
      //console.log(container.scrollWidth)
      
      //this.activeTab = newTab.id
    },
    
    removeTab() {
      this.listStore.removeTab()
      setTimeout(() => {
        this.resize()
      }, 5)
      this.confirmDeletion = false
    },

    handleLeftArrow(slide = 100){
      document.querySelector('.right-arrow').disabled = false
      const tab = document.querySelector(".tab");
      tab.scrollLeft -= slide
      // setTimeout(() => {
      //   this.disableAnArrow()
      // }, 450); 
      
    },
    handleRightArrow(slide = 100){
      document.querySelector('.left-arrow').disabled = false
      const tab = document.querySelector(".tab");
      tab.scrollLeft += slide
      
      // setTimeout(() => {
      //   this.disableAnArrow()
      // }, 450);
     },
    resize(){
      const container = document.querySelector(".container");
      const tab = document.querySelector(".tab");
      //console.log("container : " + container.scrollWidth)
      //console.log("tab : " + tab.scrollWidth)
      this.showArrow = container.scrollWidth >= tab.scrollWidth ?  0 : 1
    },
    
    disableAnArrow(){
      const tab = document.querySelector(".tab");
      const tabScrollLeftMax = tab.scrollWidth - tab.clientWidth
      let leftArrow = document.querySelector('.left-arrow')
      let rightArrow = document.querySelector('.right-arrow')
      if (tab.scrollLeft == 0){
          leftArrow.disabled  = true
          rightArrow.disabled = false
      }
      else if (tab.scrollLeft == tabScrollLeftMax){
        rightArrow.disabled = true
        leftArrow.disabled  = false
      }
      else{
        rightArrow.disabled = false
        leftArrow.disabled  = false
        
      }
    }

  }
}
</script>

<style lang="scss" scoped>
.container {
  //box-sizing: border-box;
  margin:0;
  height : 40px;
	max-width: 450px;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  //border:red solid 1px;
  border-bottom: 1px solid #ccc;
}
.right-side{
  margin-left:auto;
  display: flex
}
.tab {
  //flex-grow property to 2, flex-shrink to 1 and flex-basis to auto.
  display: flex;
  align-items: center;
  //OverFlow is auto to keep scrolling on touching devices.
  overflow-x: auto;
  //Managing scroll bar
  scroll-behavior: smooth;
  //FireFox
  scrollbar-width: none;
  //Edge
  -ms-overflow-style: none;
  //Chrome & Safari
  &::-webkit-scrollbar{
    display: none;
  }
}
input{
  border:none;
  background: #eee;
  border-bottom:2px rgb(216, 226, 253) solid;
  //width : 400px;
}
/* Style the buttons that are used to open the tab content */
button {
  white-space: nowrap;
  background-color: inherit;
  border: none;
  border-bottom: solid #00000000 5px;
  cursor: pointer;
  padding: 9px 10px;
  transition: 0.3s;
 
  &:hover {
  background-color: #ddd;
  border-bottom: solid 5px #ddd
  }
  &.active {
  //background-color: #ccc;
  border-bottom: blueviolet 5px solid;
  letter-spacing: 0.15em;
  color:blueviolet;

  font-weight: bold;
  }
  &.red{
    color : red;
    font-weight: bold;
  }
  &.arrow{
    margin: 0;
    color:blueviolet;
    border:none
  }

  &:disabled{
    background-color: inherit;
    color : grey;
  }

}
.errors {
  margin-top : 5px;
  color: red;
  font-weight: bold;
  text-align: center;
}
.confirm{
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
  height: 40px;
  >button{
    padding : 7px 10px;
    //border : 1px solid red;
    margin: 0 3px;
    &:hover{
      box-sizing: border-box;
     //background-color: #ccc;
      font-size:1.2em;
      transition: 500;
      padding: 3px 5px;
    }
  }
  
}
.hide{
  display:none;
}

/* Change background color of buttons on hover */

/* Style the tab content */


</style>