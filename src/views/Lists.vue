<template>
<section>
	<h1>
		Ma liste
	</h1>

	<!-- <div  v-if="this.list.length == 0" class="list" >
		Commencez en ajoutant un élément dans votre liste !
	</div> -->
	
	<div  v-if="this.list" class="list" >
		<div v-if="this.list.length == 0">
			Commencez en créant votre premier élément !
		</div>
		<div v-else>
			<ListElement 
				v-for="listElement in this.newElements"
				v-bind:key="listElement.id"
				:title="listElement"
				/>
		
			<ListElement 
				v-for="listElement in this.list"
				v-bind:key="listElement.id"
				:title="listElement.title.rendered"
				:urgence="this.getTheUrgence( listElement )"
				:id="listElement.id"
				@element-deleted="this.handleRemoveFromList"
				/>
		</div>
	</div>
		<LoaderView v-else/>
	
	
	
	
	<div class="add-form">
		<form @submit.prevent="this.handleFormSubmit" >
			<label for="element"></label>
			<input type="text" id="element" v-model="this.newElement" placeholder="Nouvel élément">
			<button>Ajouter</button>
			<!-- <select @change="handleOnChange" name="catégorie" id="catégorie">
				<option value="0">Catégoriser ?</option>
				<option
				v-for="currentRubrique of this.allRubriques"
				v-bind:key="currentRubrique.id"
				:value="currentRubrique.id">{{currentRubrique.name}}</option>
				<option class = "new" value="new">Nouvelle</option>
			</select> -->
			<input  v-if="this.newCategoryAppear" type="text" id="element" v-model="this.newElement" placeholder="Nouvelle rubrique">

	<div v-if="!this.engouthCaracteres" >
		<p>entrez au moins une lettre</p>
	</div>
		</form>
	</div>
	
	</section>
</template>

<script>
import listService from '@/Services/listService';
import ListElement from '@/components/ListElement';
import LoaderView from '@/components/Layout/Loading.vue';
//import rubriqueService from '@/Services/rubriqueService';

export default{
		name:'ListView',
		components: {
    ListElement,
		LoaderView,
	},
	// Protected properties
  data()
  {
    return {
      list: null,
			newElements:[],
			newElement: '',
			allRubriques:'',
			categoryAppear: false,
			newCategoryAppear: false,
			engouthCaracteres: true,
		}
	},
  async created()
  {
    this.list = await listService.findAll();
		for (const listElement of this.list){
			//* Les posts étant private, ils apparaissent avec "Private: " devant leur title.rendered. ici on éfface le "Private : " 
			listElement.title.rendered = listElement.title.rendered.replace("Private: ", '');			
		}
		
		//this.allRubriques = await rubriqueService.findAll();
		
		//console.log(this.list)
	},
	
	methods : {
		// getTheRubrique( oneListElmt ){
		// 	return oneListElmt.rubrique.length === 0 ? '' : oneListElmt._embedded['wp:term'][0][0].name;
		// },
		
		getTheUrgence( oneListElmt ){
			return oneListElmt.urgence.length === 0 ? '' : oneListElmt._embedded['wp:term'][1][0].name;
		},
		
		handleRemoveFromList(elementId){
			//* on recrée le tableau d'objet en retirant celui dont l'id est en paramètre
			this.list = this.list.filter((item) => item.id !== elementId);
			//console.log(this.list);
		},
		
		//* Cette methode est assynchrone
		async handleFormSubmit(){
			//* Cette variable sert à la gestion d'erreur
			//* Je l'initialise à true 
			this.engouthCaracteres = true
			
			if (this.newElement.length > 1){
			//*envoie de la requête à la base de donnée via un await 
				await listService.create(this.newElement);
				//* quand le nouvel élément est entré dans l
				this.list = await listService.findAll()
				//console.log(this.list);
				if (this.list != null){
					for (const listElement of this.list){
						//* Les posts étant private, ils apparaissent avec "Private: " devant leur title.rendered. ici on éfface le "Private : " 
						listElement.title.rendered = listElement.title.rendered.replace("Private: ", '');			
					}
				}
			this.newElement= '';
			}
			else{
				this.engouthCaracteres = null;
			}
		},

		handleToggleCategory(){
			this.categoryAppear = !this.categoryAppear
			//console.log(this.categoryAppear)
		},
		handleOnChange(event){
			const optionElement = event.currentTarget
			if (optionElement.value === "new"){
				this.newCategoryAppear = true
			}
			else{
				this.newCategoryAppear = false				
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.list{
	text-align: left;
	margin: 0;
	height:auto;
	overflow: auto;
}
h1{
	text-align: center;
	font-family: Arial, Helvetica, sans-serif;
}

// select{
// 	font-family: 'Quicksand',  Arial, Helvetica, sans-serif;
// 	margin:.2em 0.5em 0.2em 0.5em;
// 	padding: 0.5em 1em;
// 	font-weight:800;
// 	background: rgb(216, 226, 253);
// 	border: none;
// }
// select option{
//         background-color:#0F0;}

// .new{
// 	color: red;
// }

button{

	font-family: 'Quicksand',  Arial, Helvetica, sans-serif;
	margin:.2em 0.5em 0.2em 0.5em;
	background: rgb(216, 226, 253);
	padding: 0.5em 1em;
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
 .add-form{
	width:100%;
	max-width: 450px;
	position:absolute;
	bottom: 2.5em;
}
</style>