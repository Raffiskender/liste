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
    console.log(code);
    
    let data = await googleService.login(code);
    
    storage.set( "userData", data );
    
    const store = useUserStore();
        
    if( await userService.isConnected() )
    {
      store.userConnection();
    }
    
    this.$router.push( { name : 'list' } );

  }  
}
</script>

<style lang="scss" scoped>

</style>