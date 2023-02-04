<template>
	<h1>Page de confirmation</h1>
	
	<LoadingVue v-if = "this.success == null"/>
	<div v-if="this.success == true">
		<p>Félicitations ! Votre mail a bien été confirmé</p>
		<p>Vous pouvez à présent fermer cette fenêtre ou <router-link :to="{name : 'login'}" >vous connecter </router-link>!.</p>
	</div>
	<div v-if="this.success == false">
		<p>Votre mail n'a pas pu être confirmé</p>
	</div>
</template>

<script>
import { userService } from '@/services/userService';
import LoadingVue from '@/components/Layout/Loading.vue';

export default {
	name : 'ConfirmeView',
	components:{
		LoadingVue,
	},
	
	data(){
		return{
			success: null,
		}
	},
	
	created(){
		this.confirmUser();
	},
	
	methods:{
		async confirmUser(){
			const user = this.$route.query['user'];
			const key  = this.$route.query['key'];
			
			if(user && key){
				let data = await userService.userConfirmation( user, key );
				
				if(data == 2) {
					this.success = true;
				}
				else{
					this.success = false;
				}
			}else{				
				this.success = false;
			}
		}
	}
}

</script>

<style lang="scss" scoped>
h1{
	text-align: center;
}
</style>