<template>
  <section>
		<div v-if="!isConnected">
			<h3>Bienvenue sur la liste de course</h3>
			<p class="title">Présentation</p>
			<p>
				Ce projet est en cours de développement, et il commence à être assez aboutis.
			</p>
			<p>
				Ceci est la version 2. Je me suis surtout attaché à avoir code propre, <a href = "https://github.com/Raffiskender" target="blank">(dispo ici)</a>, et à avoir une gestion des utilisateurs assez fine (sécurisation du front-end sur les formulaires, réinitialisation de mot de passe, token à expiration, activation de compte etc).
			</p>
			<p class="title">Le projet (d'un mot)</p>
			
			<p>Il s'agit d'une liste de course. Çà ne paye pas de mine, mais le back-end (WordPress) gère :
			</p>
			<ul>
        <li>La création des utilisateurs</li>
        <li>L'activation du compte utilisateur</li>
				<li>La réinitialisation du mot de passe utilisateur</li>
				<li>la création d'une table aux données chiffrées pour la confidentialité de la liste de chaque utilisateur (avec une clé perso pour chacun)</li>
				<li>La connexion avec Google OAuth</li>
				<li>La gestion de la connexion est faite par JWT Authentication for wp Rest api</li>
			</ul>
			
      <p>Le front est pour sa part programmé en Vue.js, framework que j'affetionne pour sa simplicité, sa logique, sa légèreté et son adaptablilité et sa robustesse. On y trouve :</p>
      <ul>
        <li>Deux stores pour la gestion de l'utilisateur et de sa liste</li>
        <li>Un router</li>
        <li>De la sécurisation de formulaires</li>
        <li>Un tas de requêtes à l'api WordPress</li>
        <li>Et aussi tout ce qui se voit dans le navigateur</li>
      </ul>
			<p class="title">Bientôt viendront : </p>
			<ul>
				<li>La page profil utilisateur</li>
				<li>Des pages 403 et 404 un peu plus glamour</li>
				<li>La persistance de la connexion via un cookie plutôt que par le localStorage</li>
				<li>La création de rubriques pour gérer plusieurs listes <a @mouseover="this.handleDisplayFootnote($event)" @mouseleave="this.handleHideFootnote()" @touchstart="this.handleDisplayFootnote()" @scroll="this.handleHideFootnote()">*</a>
          <p class="foot-note">Précision : Cette idée s'en va doucement aux oubliettes. En effet, je préfère privilégier la simplicité, plutôt que d'avoir plein de fonctionnalités pouvant géner des utilisateurs pas très à l'aise avec l'outil numérique.</p>
        </li>
        </ul>
			<p class="title last" style="font-weight: bold;">
				Pour commencer il faut <router-link :to="{name : 'login'}">vous connecter</router-link> ou  <router-link :to="{name : 'suscribe'}">créer un compte</router-link>.
			</p>
		</div>
		<div v-if="isConnected">
			<h3>Bonjour {{ getCurrentUsername() }} !</h3>
      
		</div>
	</section>
</template>

<script>
import { storage }      from '@/utils/storage';
import { storeToRefs }  from 'pinia';
import { useUserStore } from '@/stores/User';

export default {
	name: 'HomeView',
  setup() {
    const store = useUserStore();
    const { isConnected } = storeToRefs(store);
    return {
      store,
      isConnected
    }
  },
	methods:{
    handleDisplayFootnote(event) {
      const p = document.querySelector('.foot-note')
      p.style.opacity = 1
      p.style['z-index'] = 3;
      p.style.left = "calc((100vw / 2) - 10em)"
      p.style.top = "calc(" + event.clientY + "px - 13em)"
    },
    
    handleHideFootnote(){
      const p = document.querySelector('.foot-note')
      console.log(p);
      p.style.opacity = 0;
      p.style['z-index'] = -1;
    },
    
		getCurrentUsername()
			{
				return storage.get( "userData" ).user_display_name;
			},
	}
}
</script>
<style lang="scss" scoped>
section{
	min-height: calc(100vh + 0.05em);
}
h3{
  padding-top:1em;
	text-align: center;
	font-weight: bold;
	font-size: 1.5em;
	color: blueviolet
}

.list{
	color: blueviolet;
	text-align:left;
	padding: 0 1em;
}

ul{
	list-style-type:none;
	//color: ;
	text-align: left;
	padding: 0em;
}

li::before{
	margin-left: 1em;
	content: "• ";
	word-spacing: 0.5em;
	color: blueviolet;
}

li{
	color:black;
	text-align: left;
  margin: 0 2em;
	padding:0 0.5em;
	text-indent: -2em;
}

a {
  cursor: pointer;
} 

p.foot-note {
  //display: none;
  //clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 30% 80%, 20% 100%, 10% 80%, 0 80%);
  opacity:0;
  z-index: -1;
  height : 10em;
  width : 15em;
  position:fixed;
  top : calc((100vw / 2) - 10em);
  padding:14px 20px;
  border-radius:4px;
  box-shadow: 5px 5px 8px rgb(68, 68, 68);
  border:1px solid #DCA;
  background-color: #eaffe4;
  transition: all 0.5s ease;
  cursor:text;
}

a:hover + p.foot-note-hovered {
   opacity: 1;
   transition: all 0.5s ease;
}

a{
	text-decoration: none;
	color: blueviolet;
	transition: 0.3s;
	&:hover{
		color:darken($color: blueviolet, $amount: 50%)
	}
	
	}
p{
	text-align: left;
	text-indent: 1em;
	margin:0.5em;
	color:rgb(0, 0, 0);
}
p.title{
	text-align: center;
	text-indent: 0;
	color: blueviolet;
	margin-top: 2em; 
	&.last{
		padding-bottom: 2.5em;
	}
}



</style>
