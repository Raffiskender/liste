<template>
	<section>
		<h1 style = "margin-bottom: 0.5em;">
			Ma liste
		</h1>

    <LoaderView v-if ="! listStore.listData"/>

		<div v-else>
      <div class="vide" v-if="listStore.listData[0] == 'vide'" >
        <p> Votre liste est toute vide ! Remplissez-là !</p>
        <div class="svg">
          <svg
            width="37.754887mm"
            height="64.519531mm"
            viewBox="0 0 37.754887 64.519531"
            version="1.1"
            id="svg8"
            inkscape:version="1.0.2 (e86c870879, 2021-01-15)"
            sodipodi:docname="zero.svg.svg">
            <defs
              id="defs2" />
            <g
              inkscape:label="Calque 1"
              inkscape:groupmode="layer"
              id="layer1"
              transform="translate(-81.569086,-48.910156)">
              <g
                id="g1231">
                <g
                  id="g1176"
                  transform="matrix(0.80237356,0,0,0.87338105,19.85089,10.295552)"
                  style="stroke:#ccc;stroke-width:8.12304;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1">
                  <path
                    id="path1113"
                    style="fill:none;stroke:#ccc;stroke-width:8.12304;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                    d="m 119.91201,81.31131 c 0,-16.069076 -7.43818,-24.048362 -19.46548,-24.048362 -12.0273,0 -19.465479,7.979286 -19.465481,24.048362 -10e-7,16.069081 7.438181,24.04837 19.465481,24.04837 12.0273,0 19.46548,-7.979289 19.46548,-24.04837 z"
                    sodipodi:nodetypes="ccccc" />
                </g>
                <path
                  style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#ccc;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate;stop-color:#000000;stop-opacity:1"
                  d="M 109.62305,48.910156 85.433594,113.42969 h 6.023437 L 115.64844,48.910156 Z"
                  id="path1203"
                  sodipodi:nodetypes="ccccc" />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div v-else >
        <div class="list">
          <ListElement 
            v-for="listElement in listStore.listData"
            v-bind:key="listElement.id"
            :title="listElement.content"
            :id="listElement.id"
            :done="listElement.done"
          />
      </div>
      </div>
			<div class="add-form">
				<form @submit.prevent="this.handleFormSubmit()" >
					<label for="element"></label>
					<input type="text" id="element" v-model="this.newElement" placeholder="Nouvelle ligne" @focus="this.engouthCaracteres = true">
					<button class="button" :disabled="this.disableButton" v-bind:class="{'hide': this.disableButton}">{{this.buttonContent}}</button>
					
					<SpinnerBtn v-if="this.disableButton" />
					
					<input  v-if="this.newCategoryAppear" type="text" id="element" v-model="this.newElement" placeholder="Nouvelle rubrique">
				</form>

				<div v-if="!this.engouthCaracteres" >
					<p>Entrez au moins une lettre</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import ListElement from '@/components/ListElement.vue';
import LoaderView from '@/components/Layout/Loading.vue';
import SpinnerBtn from '@/components/SpinnerButtonComponent.vue'
import {useListStore} from '@/stores/List';
import {useUserStore} from '@/stores/User';
import { userService } from '@/services/userService';

export default{
  name:'ListView',
  components: {
    ListElement,
    LoaderView,
    SpinnerBtn,
  },

  setup() {
    const listStore = useListStore();
    const userStore = useUserStore();
    return{
      listStore,
      userStore,
    }
  },

	// Protected properties
  data()
  {
    //const storeUser = useStore();
    return {
			newElements:[],
			newElement: '',
			allRubriques:'',
			categoryAppear: false,
			newCategoryAppear: false,
			engouthCaracteres: true,
			disableButton: false,
			buttonContent: 'Ajouter',
      //storeUser,
		}
	},
  
  async created() {
    if (await userService.isConnected())
      await this.listStore.findAll();
    else
      this.$router.push( {name: '403'} )  },

	methods : {
		
    //* Cette methode est assynchrone
		async handleFormSubmit(){
			//* Cette variable sert à la gestion d'erreur
			//* Je l'initialise à true 
			this.engouthCaracteres = true;
			
			if (this.newElement.length > 1){
        this.disableButton = true;
        this.buttonContent = ''
        this.newElement = {
          id : Date.now(),
          content : this.newElement,
          done : false
        }
        
        //*envoie de la requête à la base de donnée via un await 
        this.listStore.add(this.newElement);
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
  padding:2px 0;
	padding-bottom: 5em;
	margin: 0;
	overflow: auto;
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
input{
  box-sizing: border-box;
  border:none;
  border-bottom: 2px rgb(216, 226, 253) solid;
  width: calc(100% - 8em);
  margin : 0 3%
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
.vide{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.svg{
  height: calc(100vh - 2.2em - 2.3em - 5em);
  display:flex;
  align-items: center;
  justify-content: center;
  text-align:center;
}
svg{
  height : 75%;
  max-height : calc(450px * 1.70);
  width : auto;
}
.hide{
	display: none;
}
</style>