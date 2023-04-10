<template>
  <div>
    <div v-if="userStore.user['avatar_urls'] != undefined ">
      <img :src="userStore.user['avatar_urls']['96']" alt="Avatar">
    </div>
    <div v-else>
      <SpinnerCpntVue/>
    </div>
    
  </div>
</template>

<script>
export default{
  
}
</script>

<script setup>
  import { onBeforeMount, onMounted } from 'vue';
  import SpinnerCpntVue from '@/components/SpinnerCpnt.vue';
  import { useUserStore } from '@/stores/User';
  import { userService } from '@/services/userService'
  import router from '@/router'

  const userStore = useUserStore()
  console.log('setup')

  onBeforeMount(async () => {
    console.log('onBeforeMounted')
    if ( await userService.isConnected() ){
      userStore.createUser(await userService.getUserInfos())
    }
    else{
        router.push( {name: '403'})
      }
  })

  onMounted(() => {
    console.log('onMountedHook')
  })
</script>

<style lang="scss" scoped>

</style>