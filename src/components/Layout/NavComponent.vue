<template>
  <nav>
			<ul>
        <router-link :to="{name : 'home'}"
        class="li"
        style="display: block;"
        id="deconnect"
        v-if="isConnected"
        @click="this.store.userDisconnection()">
        <span>Déconnexion</span>
      </router-link>  
        <router-link
          :to="{name : 'home'}" 
          class="li">
        Accueil
				</router-link>
        <router-link
          :to="{name : 'login'}" 
          v-if="!isConnected"
          class="li">
					Connexion
				</router-link>
				
        <router-link :to="{name : 'subscribe'}" 
          v-if="!isConnected"
          class="li">
					Inscription
				</router-link>
				
      
      <router-link :to="{name : 'list'}" 
      v-if="isConnected"
      class="li">
      Liste
    </router-link>
    <router-link :to="{name : 'profil'}" 
      v-if="isConnected"
      class="li">
      Profil
    </router-link>
</ul>
</nav>
</template>

<script>
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/User';
export default {
  name: 'NavCpnt',
  
  setup() {
    const store = useUserStore();
    const { isConnected } = storeToRefs(store)
    return{
      store,
      isConnected,
    }
  }
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
.li{
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
.router-link-exact-active{
  display:none;
}
</style>