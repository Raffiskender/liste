<template>
	<router-view v-slot="{ Component }">
		<component :is="Component" />
	</router-view>
	<NavCpnt />
</template>

<script>
import NavCpnt from '@/components/Layout/NavComponent.vue'
import {useUserStore} from '@/stores/User'
import {userService} from '@/services/userService';

export default{
  name: 'App',
  
  components: {
    NavCpnt,
  },
  
  setup() {
    const userStore = useUserStore();
    return {
      userStore,
    }
  },
  async created(){
    this.userStore.setConnected( await userService.isConnected() )
  }
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
	min-height: calc(100vh + 0.05em);
	width: 100%;
	max-width: 450px;
	background-color: rgb(236, 236, 236);
	box-shadow: 0px 0px 15px rgb(136, 136, 136) ;
	margin: 0 auto;
	
	
}

h1, h2, h3, p, ul, li{
	font-family: 'quicksand', Arial, Helvetica, sans-serif;
}

	h1{
		color: blueviolet;
		text-align: center;
	}

</style>
