<template>
	<div class="container">
    
    <form
    @submit.prevent="handleSave(id)"
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
        @mousedown="handleSwitchToEditMode(id)"
        v-html=this.title>
      </p>
        <button
          class = "delete"
          @click="handleOnDelete(id)" >
          X
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
		}
	},
	
	methods: {
		cleanMessage(message) {
      return this.$sanitize(message);
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
    
		handleOnBlur(){
      if (!this.preventBlur)
        console.log('blur fired');
      else console.log('blur unactive');
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
      if ((event.type == 'blur' && !this.preventBlur) || event.type=='mousedown'){
        event.preventDefault();
        
        if(this.initialTitle !== this.newTitle && this.newTitle !== this.initialTitle ){
          this.listStore.update(id, this.newTitle);
          this.initialTitle = this.newTitle;
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
	width: calc(100% - 6em);
	font-size:1.2em;
	font-family:'Quicksand', Arial, Helvetica, sans-serif ;
	color:rgb(0, 89, 255);
  margin : 00.5em 0em;
	&:hover
	{
		cursor:pointer;
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
	border-radius: 0px;
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
}
  .hide{
    display:none;
  }
</style>
