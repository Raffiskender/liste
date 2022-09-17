<template>
<div v-if="!this.$store.state.isConnected">
	<h3>Bienvenue sur la liste de course</h3>
	<p>Vous ne pouvez pas utliser ce site sans vous connecter...</p>
</div>
<div v-if="this.$store.state.isConnected">
<h3>Bonjour {{this.getCurrentUsername()}}</h3><p></p>
</div>
</template>

<script>
import storage   from '@/utils/storage'

export default {
	name: 'HomeView',

	methods:{
		getCurrentUsername()
			{
				return storage.get( "userData" ).user_display_name;
			},
	}
}
</script>
<style scoped>
h3{
	text-align: center;
	font-weight: bold;
	font-size: 1.5em;
	color: rgb(0, 40, 78);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p{
	color:rgb(0, 0, 0);
}
</style>
