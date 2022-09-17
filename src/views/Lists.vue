<template>
<section>
	<h1>
		Ma liste
	</h1>
	<div class="list">
	<ListElement 
		v-for="listElement in this.list"
		v-bind:key="listElement.id"
		:title="listElement.title.rendered"
		:rubrique="this.getTheRubrique( listElement )"
		:urgence="this.getTheUrgence( listElement )"
		:id="listElement.id"
		@element-deleted="this.handleRemoveFromList"
		/>
	</div>
	<div class="button">
		<form @submit.prevent="this.handleFormSubmit">
			<label for="element"></label>
			<input type="text" id="element" v-model="this.newElement">
			<button>ajouter</button>
		</form>
		<button>ajouter une rubrique</button>
	</div>
	</section>
</template>

<script>
import listService from '@/Services/listService';
import ListElement from '@/components/ListElement.vue';

export default{
		name:'ListView',
		components: {
    ListElement
	},
	// Protected properties
  data()
  {
    return {
      list: null,
			newElement: '',
		}
	},
  async created()
  {
    this.list = await listService.findAll();
		for (const listElement of this.list){
			//* Les posts étant private, ils apparaissent avec "Private: " devant leur title.rendered. ici on éfface le "Private : " 
			listElement.title.rendered = listElement.title.rendered.replace("Private: ", '');			
		}
		//console.log(this.list)
	},
	
	methods : {
	getTheRubrique( oneListElmt ){
		return oneListElmt.classement.length === 0 ? '' : oneListElmt._embedded['wp:term'][0][0].name;
	},
	
	getTheUrgence( oneListElmt ){
		return oneListElmt.urgence.length === 0 ? '' : oneListElmt._embedded['wp:term'][1][0].name;
	},
	
	handleRemoveFromList(elementId){
		this.list = this.list.filter((item) => item.id !== elementId);
	},
	handleFormSubmit(){
		console.log(this.newElement);
	}
	}
}
</script>

<style lang="scss" scoped>
.list{
	text-align: left;
	margin: 0;
}
h1{
	text-align: center;
	font-family: Arial, Helvetica, sans-serif;
}


button{

	font-family: 'Quicksand',  Arial, Helvetica, sans-serif;
	margin:.2em 0.5em 0.2em 0.5em;
	padding: 0.5em 1em;
	background: rgb(216, 226, 253);
	list-style-type: none;
	color: rgb(0, 0, 0);
	font-weight:800;
	border-radius: 0px;
	border: none;
	width: 12em;
	// box-shadow: 4px 4px 5px #555;
	transition: 0.3s;
	cursor:pointer;
		>span{
			color: rgb(180, 0, 0);
		}
		&:hover{
			background: darken(rgb(216, 226, 253), 7.5%);
		}
}
.button{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-end;	
}
</style>