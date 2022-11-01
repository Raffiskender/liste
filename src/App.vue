<template>
	<HeaderView/>
	<router-view v-slot="{ Component }">
		<component :is="Component" />
	</router-view>
	<NavCpnt />
</template>

<script>
//import HomeView from '@/views/HomeView.vue'
//import HeaderView from './components/Layout/Header.vue';
import NavCpnt from '@/components/Layout/NavComponent.vue'
// import HeaderView from '@/components/Layout/HeaderView.vue';
import userService from '@/Services/userService';

export default {
  name: 'App',
  components: {
    //HomeView,
    //HeaderView,
    NavCpnt,
    // HeaderView
	},
	
		async created()
  {
		this.$store.commit( "setConnected", await userService.isConnected() );
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Quicksand:wght@300;400;700&display=swap');

*{
	margin: 0;
}

html{
	margin: 0;
	padding: 0;
	background-color: rgb(212, 212, 212);
}

body{
	padding: 0;
	min-height: 100vh;
	width: 100%;
	max-width: 450px;
	background-color: rgb(236, 236, 236);
	box-shadow: 0px 0px 15px rgb(136, 136, 136) ;
	margin: 0 auto;
	
	
}

h1, h2, h3, p, ul, li{
	font-family: 'quicksand', Arial, Helvetica, sans-serif;
}

</style>
