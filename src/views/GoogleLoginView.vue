<template>

<p>Vous êtes en train d'être connecté avec votre compte google, merci de bien vouloir patienter</p>

<LoaderView />

</template>

<script>
import { googleService } from '@/services/googleService';
import LoaderView from '@/components/Layout/Loading.vue';
import { storage } from '@/utils/storage';
import { userService } from '@/services/userService';
import { useUserStore } from "@/stores/User";

export default{
  name : 'googleLogin',
  components : {
    LoaderView,
  },
  
  async created()
  {
    let code  = this.$route.query['code'];
    
    const data = await googleService.login(code);
    
    storage.set( "userData", data );
    
    const userStore = useUserStore();
        
    if( await userService.isConnected() )
    {
      userStore.userConnection();
    }
    
    this.$router.push( { name : 'list' } );

  }  
}
</script>

<style lang="scss" scoped>

</style>