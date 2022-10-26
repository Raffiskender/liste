<template>
		<nav>
			<ul>
				<li v-if="!this.$store.state.isConnected">
					<router-link :to="{name : 'login'}" >
					Connection
					</router-link>
				</li>
				<li v-if="!this.$store.state.isConnected">
					<router-link :to="{name : 'suscribe'}" >
					Inscription
					</router-link>
				</li>
				<li v-if="this.$store.state.isConnected" @click="this.$store.dispatch('userDisconnected')">
					<router-link :to="{name : 'home'}">
						<span>Déconnexion</span>
					</router-link>  
				</li>
				<li v-if="this.$store.state.isConnected">
					<router-link :to="{name : 'list'}" >
						Liste
						</router-link>
				</li>
				<li v-if="this.$store.state.isConnected">
					Profil
				</li>
			</ul>
		</nav>
</template>

<script>
export default {
	name: 'NavCpnt'
}
</script>

<style lang="scss" scoped>

// /* apply a natural box layout model to all elements */
//  *, *:before, *:after {
//   -moz-box-sizing : border-box;
//   -webkit-box-sizing: border-box;
//   box-sizing: border-box;
// }
nav{
	//border: 1px solid #f0f;
	height:2.3em;
	background: rgb(216, 226, 253);
	position: fixed;
	bottom:0px;
	width: 100%;
	max-width: 450px;
	padding:0;

	// background-color: white;
}

ul{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	// align-items: center;
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
		&:hover{
			background: darken(rgb(216, 226, 253), 7.5%);
		}
}
span{
			color: rgb(180, 0, 0);
		}

</style>