<template>
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
</template>

<script>
import listService from '@/Services/listService';
import SpinnerBtn from '@/components/SpinnerButtonComponent.vue'

export default {
	name:'AddNewCpnt',
	components :{
		SpinnerBtn,
	},

	data(){
		return{
			engouthCaracteres: true,
			
		}
	},

	methods:{
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
		},	},
	
		
} 


</script>