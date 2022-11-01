<template>
	<p>
	Page de confirmation
	</p>
	
	<LoadingVue v-if = "this.success == null"/>
	<div v-if="this.success == true">Votre mail a bien été confirmé</div>
	<div v-if="this.success == false">Votre mail n'a pas pu être confirmé</div>
</template>

<script>
import userService from '@/Services/userService';
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
			const key =  this.$route.query['key'];
			
			let data = await userService.userConfirmation( user, key );
			
			if(data == 1) {
				this.success = true
			}
			else{
				this.success = false
			}
		}
	}
}

</script>

<style lang="scss" scoped>

</style>