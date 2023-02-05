<template>
	<div class="container">
    
    <form
    @submit="handleSave($event, id)"
    >
      <div
        class="input"
        v-bind:class = "{hide: !this.editMode}"
        >
        
        <input
          ref="myInput"
          type="text"
          :id = id
          v-model="this.newTitle"
          @blur="this.handleSave($event, id)"
        >
        <div>
          <button
            @mousedown="handleSave($event, id)"
            style = "margin-right:1em">
          Enregistrer
          </button>
          <button
            @mousedown="handleCancelModify($event, id)"
          >
            Annuler
          </button>
        </div>
      </div>
      <div class="text"
        v-bind:class = "{hide: this.editMode}"
      >
        <p 
          class="title"
          :id = "'p' + id"
          v-bind:class="{'done': this.taskDone}"
          @mousedown="handleSwitchToEditMode(id)"
          v-html=this.title>
        </p>
        <button
          class = "aside-p"
          v-bind:class="{'hide': this.taskDone}"
          @click="this.handleToggleDone(id)"
        >
            <font-awesome-icon
            class="square"
            icon="fa-regular fa-square"
            alt=""
            width=""/>
        </button>
        <button
          class = "aside-p"
          @click="this.handleToggleDone(id)"
          v-bind:class="{'hide': !this.taskDone}"
        >
            <font-awesome-icon
            color="green"
            class="square"
            icon="fa-regular fa-square-check"
            alt=""
            width=""/>
          </button>
          <button
          class = "aside-p"
          @click="handleOnDelete(id)" >
          
          <font-awesome-icon
          color="red"
          class="square"
          icon="fa-regular fa-trash-can"
          alt=""
          width=""/>
        </button>
      </div>
    </form>
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
    done:String,
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
			initialTitle: this.title,
			newTitle: this.title,
      preventBlur: false,
      taskDone : this.done,
		}
	},
	
	methods: {
		cleanMessage(message) {
      return this.$sanitize(message);
    },
    
    handleToggleDone(id){
      this.taskDone = ! this.taskDone;
      this.listStore.updateDone(id, this.taskDone);
    },
    
		handleOnDelete(id){
      this.listStore.delete(id)
		},
	
		handleSwitchToEditMode(id){
			this.editMode = true;
      this.preventBlur = false;
      setTimeout(function(){ document.getElementById(id).focus();})
		},
		
		backToDisplayMode(){
			this.editMode = false;
		},
    
    
		handleCancelModify(event, id){
      event.preventDefault();
      document.getElementById('p' + id).focus();
      this.preventBlur = true;
			this.newTitle = this.initialTitle

		},
		handleReactivateBlur(){
    },
    
		async handleSave(event, id){
      if ((event.type == 'blur' && !this.preventBlur) || event.type=='mousedown' || event.type == 'submit'){
        event.preventDefault();
        
        if(this.initialTitle !== this.newTitle && this.newTitle !== this.initialTitle ){
          this.initialTitle = this.newTitle;
          this.listStore.updateTitle(id, this.newTitle);
        }
        if(this.newTitle === ''){
          this.handleOnDelete(id)
        }
      }
			this.backToDisplayMode();
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
    color: rgb(134, 134, 134)
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
