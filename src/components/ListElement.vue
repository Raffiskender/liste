<template>
	<div class="container">
		<p 
			
			class="title"
			@click="handleSwitchToEditMode"
			v-bind:class = "{hide: this.editMode}"
			v-html="this.initialTitle">
		</p>
		<form @submit.prevent="handleSave({id})">
			<input
				ref="myInput"
				v-bind:class = "{hide: !this.editMode}"
				type="text"
				v-model="this.newTitle"
				@blur="handleSave({id})"
			>
		</form>
			
		<!-- <p class="rubrique">{{rubrique}}</p>
		<p class="urgence">{{urgence}}</p> -->
		<div>
		<button
			class = "delete"
			v-bind:class = "{hide: this.editMode}"
			@click="handleDelete({id})" >X</button>
		<button
			v-bind:class = "{hide: !this.editMode}"
			@click="handleSave({id})">Enregistrer</button>
		<button
			v-bind:class = "{hide: !this.editMode}"
			@click="handleCancelModify">Annuler</button>
		</div>
	</div>
</template>

<script>
import listService from '@/Services/listService';

export default 
{
  props: 
  {
    title: String,
		rubrique: String,
		urgence: String,
		id:Number,
  },
	
	data() {
		return {
			editMode: false,
			initialTitle: this.title,
			newTitle: this.title
		}
	},
	
	methods: {
		async handleDelete(number){

			await listService.delete(number.id)
									
			this.$emit('element-deleted', number.id)
			// 	return true;
			// }else{
			// 	console.log('ERREUR INTERNE BLA BLA BLA')
			// 	return false;
			//}
		
		},
	
		handleSwitchToEditMode(){
			this.editMode = true;
			this.$nextTick(() => {
				this.$refs.myInput.focus()
			});
		},
		
		BackToDisplayMode(){
			this.editMode = false;
		},
		
		
		handleCancelModify(){
			this.newTitle = this.initialTitle
			this.BackToDisplayMode();
		},
		
		async handleSave(number){
			
			if(this.initialTitle !== this.newTitle){
				await listService.patch(number.id, this.newTitle);
				this.initialTitle = this.newTitle;
			}
			if(this.newTitle === ''){
				this.handleDelete(number)
			}

			this.BackToDisplayMode();
		}
		
	}
}
</script>

<style lang="scss" scoped>
div.container{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	margin: 0 0.5em;
}

.hide{
	display:none;
}

p{
	width: calc(100% / 3);
	font-size:1.2em;
	font-family:'Quicksand', Arial, Helvetica, sans-serif ;
	color:rgb(0, 89, 255);
	margin: 0 0 0.5em 0;
	&:hover
	{
		cursor:pointer;
	}
}

// .rubrique{
// 	text-align: center;
// }
// .urgence{
// 	text-align: right;
// }

button{

	font-family: 'Quicksand',  Arial, Helvetica, sans-serif;
	margin-left:0.2em;
	margin-top:0.3em;
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
</style>