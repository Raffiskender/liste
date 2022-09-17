<template>
	<section>
		<div v-if="!this.$store.state.isConnected">
			<ul>
					<li>
						<router-link :to="{name : 'login'}" >
						Connection
						</router-link>
					</li>
					<li>
						<router-link :to="{name : 'suscribe'}" >
						Inscription
						</router-link>
					</li>
			</ul>
		</div>
		<div v-if="this.$store.state.isConnected">
			<ul>
				<li @click="this.$store.dispatch('userDisconnected')">
          <span>Déconnexion</span>
        </li>
				<li>
          <router-link :to="{name : 'list'}" >
						Liste
						</router-link>
        </li>
				<li>
          Profil
        </li>
			</ul>
		</div>
	</section>
</template>

<script>
export default {
	name: 'FooterView'
}
</script>

<style lang="scss" scoped>
section{
	//border: 1px solid #f0f;
	height:2.2em;
	background: rgb(216, 226, 253);
	
	width: 100%;
	max-width: 450px;
	padding:0;
	position: fixed;
	top: calc(100% - 2.2em);
	// background-color: white;
}
ul{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	padding: 0;
	margin:0;
	margin-top: 0em;
}
a{
	color :rgb(0, 0, 0);
	text-decoration: none
}
li{
	font-family: 'Quicksand',  Arial, Helvetica, sans-serif;
	margin:0;
	padding: 0.5em 1em;
	background: rgb(216, 226, 253);
	list-style-type: none;
	color: rgb(0, 0, 0);
	font-weight:800;
	border-radius: 0px;
	// border: 1px solid   darken(rgb(216, 226, 253), 7.5%);
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

</style>