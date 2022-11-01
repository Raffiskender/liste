<template>
	<section>
		<h1>
			Ma liste
		</h1>

		<!-- <div  v-if="this.list.length == 0" class="list" >
			Commencez en ajoutant un élément dans votre liste !
		</div> -->
		<div v-if="this.list" >
			<div class="list">
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
						:id="listElement.id"
						@element-deleted="this.handleRemoveFromList"
						/>
				</div>
			</div>
			<div class="add-form">
				<form @submit.prevent="this.handleFormSubmit" >
					<label for="element"></label>
					<input type="text" id="element" v-model="this.newElement" placeholder="Nouvel élément">
					<button class="button" :disabled="this.disableButton" v-bind:class="{'hide': this.disableButton}">{{this.buttonContent}}</button>
					
					<SpinnerBtn v-if="this.disableButton" />
					
					<!-- <select @change="handleOnChange" name="catégorie" id="catégorie">
						<option value="0">Catégoriser ?</option>
						<option
						v-for="currentRubrique of this.allRubriques"
						v-bind:key="currentRubrique.id"
						:value="currentRubrique.id">{{currentRubrique.name}}</option>
						<option class = "new" value="new">Nouvelle</option>
					</select> -->
					<input  v-if="this.newCategoryAppear" type="text" id="element" v-model="this.newElement" placeholder="Nouvelle rubrique">
				</form>

				<div v-if="!this.engouthCaracteres" >
					<p>Entrez au moins une lettre</p>
				</div>
			</div>
		</div>
		<LoaderView v-else/>
	</section>
</template>

<script>
import listService from '@/Services/listService';
import ListElement from '@/components/ListElement';
import LoaderView from '@/components/Layout/Loading.vue';
import SpinnerBtn from '@/components/SpinnerButtonComponent.vue'
//import rubriqueService from '@/Services/rubriqueService';

export default{
		name:'ListView',
		components: {
    ListElement,
		LoaderView,
		SpinnerBtn,
		
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
			disableButton: false,
			buttonContent: 'Ajouter',
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
		
		// getTheUrgence( oneListElmt ){
		// 	return oneListElmt.urgence.length === 0 ? '' : oneListElmt._embedded['wp:term'][1][0].name;
		// },
		
		handleRemoveFromList(elementId){
			//* on recrée le tableau d'objet en retirant celui dont l'id est en paramètre
			this.list = this.list.filter((item) => item.id !== elementId);
			//console.log(this.list);
		},
		
		//* Cette methode est assynchrone
		async handleFormSubmit(){
			//* Cette variable sert à la gestion d'erreur
			//* Je l'initialise à true 
			this.engouthCaracteres = true;
			
			if (this.newElement.length > 1){
			this.disableButton = true;
			this.buttonContent = ''
			
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
			this.disableButton = false;
			this.buttonContent = 'Ajouter'
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

section{
	min-height: calc(100vh + 0.05em);
}

.list{
	text-align: left;
	margin: 0;
	//max-height:60vh;
	overflow: auto;
	//border : 1px solid #0f0
	padding-bottom: 5em;
}
h1{
	text-align: center;
	font-family: Arial, Helvetica, sans-serif;
	padding-top: 1.0em;
}

form{
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}

.button{

	font-family: 'Quicksand',  Arial, Helvetica, sans-serif;
	margin:.2em .5em .2em .5em;
	background: rgb(216, 226, 253);
	padding: 0.5em 1em;
	list-style-type: none;
	color: rgb(0, 0, 0);
	font-weight:800;
	border-radius: 0px;
	border: none;
	width: 8em;
	height: 2.5em;
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
	background: #fff;
	width:100%;
	max-width: 450px;
	position:fixed;
	bottom: 2.2em;
	// border: solid 1px #f0f;
}

.hide{
	display: none;
}
</style>