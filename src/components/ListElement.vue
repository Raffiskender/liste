<template>
	<div class="container">
    
    <form
    @submit="handleSave($event, id)">
      <div
        class="input"
        v-bind:class = "{hide: !this.editMode}">
        <input
          ref="myInput"
          type="text"
          :id = "'input-' + id"
          v-model="this.newTitle"
          @blur="this.handleSave($event, id)">
        <div class="error" v-if="this.tooMuchCharacteres">
          vous devez entrer moins de 75 charactères...
        </div>
      </div>
    </form>
    <div
      class="input"
      v-bind:class = "{hide: !this.editMode}"
      >
      <button
        style = "margin-right:1em"
        :id = "'save-btn-' + id"
        @mousedown="this.preventBlur = true"
        @click="handleSave($event, id)">
        Enregistrer
      </button>
      <button
        :id = "'cancel-btn-' + id"
        @mousedown="this.preventBlur = true"
        @click="handleCancelModify($event)">
          Annuler
      </button>
    </div>
    <div class="text"
      v-bind:class = "{hide: this.editMode}" >
      <p 
        class="title"
        :id = "'p-' + id"
        v-bind:class="{'done': done}"
        @mousedown="handleSwitchToEditMode(id)"
        v-html=title>
      </p>
      <button
        class = "aside-p"
        v-bind:class="{'hide': done}"
        @click="this.listStore.toggleDone(id);">
          <font-awesome-icon
            class="square"
            icon="fa-regular fa-square"
            alt="Mettre à fait"
        />
      </button>
      <button
        class = "aside-p"
        @click="this.listStore.toggleDone(id);"
        v-bind:class="{'hide': !done}">
          <font-awesome-icon
            color="green"
            class="square"
            icon="fa-regular fa-square-check"
            alt="Mettre en non fait"/>
      </button>
      <button
        class = "aside-p"
        @click="this.listStore.delete(id)" >
          <font-awesome-icon
            color="red"
            class="square"
            icon="fa-regular fa-trash-can"
            alt="supprimer"/>
        </button>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia'
import { useListStore } from '@/stores/List'

export default 
{
  props: 
  {
    title: String,
		id:Number,
    done:Boolean,
  },
  
  setup() {
    const listStore = useListStore();
    const { listData } = storeToRefs(listStore);
    return{
      listStore,
      listData,
    }
  },
  
	data() {
		return {
			editMode: false,
			newTitle: this.title,
      preventBlur: false,
      tooMuchCharacteres:false,
		}
	},
	
	methods: {
		cleanMessage(message) {
      return this.$sanitize(message);
    },
	
		handleSwitchToEditMode(id){
      if (!this.done){
        this.editMode = true;
        this.preventBlur = false;
        setTimeout(function(){ document.getElementById('input-' + id).focus();})
      }
    },
    
    backToDisplayMode(){
      this.editMode = false;
		},
    
    
		handleCancelModify(){
      this.newTitle = this.title
      this.tooMuchCharacteres = false
      this.backToDisplayMode();
		},
    
    handleSave(event, id){
      this.tooMuchCharacteres = false
      event.preventDefault();      
     
      if (!this.preventBlur || event.type == "click"){
        
        if(this.newTitle.length > 75){
          this.tooMuchCharacteres = true
        }
        
        if(this.newTitle === ''){
          this.listStore.delete(id)
          this.backToDisplayMode();
        }
        if(this.title !== this.newTitle && !this.tooMuchCharacteres){
          this.listStore.changeTitle(id, this.newTitle)
          this.backToDisplayMode();
        }
        if(this.title == this.newTitle && !this.tooMuchCharacteres){
          this.backToDisplayMode();
        }
        if (event.type == 'submit'){
          document.getElementById('save-btn-' + id).focus();
        } 
      }
		}
		
	}
}
</script>

<style lang="scss" scoped>
.container{
	margin: 0 0.5em;
}

form{
  width : 100%;
}

.text{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center; 
}

input{
  box-sizing: border-box;
  padding: 0.5em;
  width : 100%;
  margin-bottom: 0.5em;
  border:none;
}
.input {
  margin: auto;
}
.error{
  text-align:center;
  color : red;
  padding-bottom: 0.5em;
}
p{
	width: calc(100% - 4.5em);
	font-size:1.2em;
	font-family:'Quicksand', Arial, Helvetica, sans-serif ;
	color:rgb(0, 89, 255);
  margin : 00.5em 0em;
	&:hover
	{
		cursor:pointer;
	}
  &.done{
    text-decoration: line-through;
    color: rgb(134, 134, 134);
    cursor: default;
  }
}

button{
  font-family: 'Quicksand',  Arial, Helvetica, sans-serif;
	margin-left:0em;
	margin-top:0em;
	padding: 0.2em 0em;
	background: rgb(216, 226, 253);
	color: rgb(0, 11, 163);
	font-weight:800;
	border-radius: 0em;
	border: none;
	width: 6em;
	// box-shadow: 4px 4px 5px #555;
	transition: 0.3s;
	font-size: 1em;
	cursor:pointer;
	
  &:hover{
    background: darken(rgb(216, 226, 253), 7.5%);
  }
  
  &.delete{
    color: rgb(163, 0, 0);
  }
  &.aside-p {
    width:2em;
    border-radius: 1em;
    height:2em
    }	

}
  .hide{
    display:none;
  }
</style>
