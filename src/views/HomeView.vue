<template>
	<section>
		<div v-if="!this.$store.state.isConnected">
			<h3>Bienvenue sur la liste de course</h3>
			<p class="title">Présentation</p>
			<p>
				Ce projet est en cours de développement, et bien qu'étant opérationnel, il n'est pas encore tout à fait aboutis. 
			</p>
			<p>
				Ceci est donc la version v0.1. Il s'agit du MVP (minimum viable product). Par minimum, j'entends la création de compte utilisateur (pas encore la suppression), la connexion au compte utilisateur, et la gestion <span style="text-decoration: underline;">d'une</span> liste de course.
			</p>
			<p class="title">Le projet (d'un mot)</p>
			
			<p>Il s'agit d'une liste de course. Le back-end est géré par WordPress (avec un plugin que j'ai programmé). J'ai aussi programmé le front avec Vue.js que j'affectionne pour sa simplicité, sa logique, sa légèreté et son adaptablilité et sa robustesse.
			</p>
			<p>
			Je n'ai pas jugé utile de faire un versionning très poussé sur ce projet étant donné sa taille (c'est pas non plus gigantesque) et le fait que j'y travaille seul.</p>
			
			<p class="title">Bientôt viendront : </p>
			<ul>
				<li>Un meilleur visuel (je vais demander de l'aide à Mme mon épouse)</li>
				<li>La page profil utilisateur</li>
				<li>Une connexion via Google</li>
				<li>La création de rubriques pour gérer plusieurs listes</li>
				<li>Le cryptage des informations dans la base de donnée (j'ai pas encore la solution mais j'y travaille).</li>
			</ul>
			<p class="title last" style="font-weight: bold;">
				Pour commencer il faut <router-link :to="{name : 'login'}">vous connecter</router-link> ou  <router-link :to="{name : 'suscribe'}">créer un compte</router-link>.
			</p>
		</div>
		<div v-if="this.$store.state.isConnected">
			<h3>Bonjour {{this.getCurrentUsername()}}</h3>
		</div>
	</section>
</template>

<script>
import storage   from '@/utils/storage'

export default {
	name: 'HomeView',

	methods:{
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
