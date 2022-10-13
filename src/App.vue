<template>
	<HeaderView/>
	<router-view v-slot="{ Component }">
		<component :is="Component" />
	</router-view>
	<FooterView />
</template>

<script>
//import HomeView from '@/views/HomeView.vue'
//import HeaderView from './components/Layout/Header.vue';
import FooterView from '@/components/Layout/Footer.vue'
import HeaderView from '@/components/Layout/HeaderView.vue';
import userService from '@/Services/userService';

export default {
  name: 'App',
  components: {
    //HomeView,
    //HeaderView,
    FooterView,
    HeaderView
	},
	
		async created()
  {
		this.$store.commit( "setConnected", await userService.isConnected() );
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Quicksand:wght@300;400;700&display=swap');

h1, h2, h3, p, ul, li{
	font-family: 'quicksand', Arial, Helvetica, sans-serif;
}
#app {
	margin: 0 0 2.2em 0;
	padding: 0;
  text-align: center;
  color: #003e7c;
	width: 100%;
	max-width: 450px;
	//min-height: calc(100vh - 2.2em);
	height: 100%;
	min-height:100vh;
	background-color: white;
	
}
body{
	margin: 0;
	background-color: rgb(138, 138, 138);
	display: flex;
	justify-content: center;
	height: 100%;
	min-height:100vh;
}
</style>
