<template>
<h3>Mon profil</h3>


</template>

<script>
import {useUserStore} from '@/stores/User';
import { userService } from '@/services/userService'
export default{
  name:'ProfilView',
  
  setup() {
    const userStore = useUserStore();
    return{
      userStore,
    }
  },
  
  async created() {
    const connected = await userService.isConnected();
    if (! connected)
      this.$router.push( {name: '403'} )  },
  }
</script>

<style lang="scss" scoped>
h1, h2, h3, p, ul, li{
	font-family: 'quicksand', Arial, Helvetica, sans-serif;
}

	h3{
		color: blueviolet;
		text-align: center;
	}
</style>