<template>
	<div>
		<p class="title">{{title}}</p>
		<p class="rubrique">{{rubrique}}</p>
		<p class="urgence">{{urgence}}</p>
		<button @click="handleDelete({id})" >X</button>
	</div>
</template>

<script>
import listService from '@/Services/listService';

export default 
{
  props: 
  {
    title: String,
		rubrique: String,
		urgence: String,
		id:Number,
  },
	methods: {
		handleDelete(number){
			listService.delete(number.id)
				this.$emit('element-deleted', number.id)
				return true;
		}
	}
}
</script>

<style lang="scss" scoped>
div{
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 0.5em;
}
p{
	width: calc(100vw / 3);
	font-size:1.2em;
	font-family:'Quicksand', Arial, Helvetica, sans-serif ;
	color:rgb(0, 89, 255);
	margin: 0 0 0.5em 0;
}

.rubrique{
	text-align: center;
}
.urgence{
	text-align: right;
}

button{

	font-family: 'Quicksand',  Arial, Helvetica, sans-serif;
	margin-left:0.2em;
	padding: 0.2em 0em;
	background: rgb(216, 226, 253);
	color: rgb(163, 0, 0);
	font-weight:800;
	border-radius: 0px;
	border: none;
	width: 6em;
	// box-shadow: 4px 4px 5px #555;
	transition: 0.3s;
	font-size: 1em;
	cursor:pointer;
		&:hover{
			background: darken(rgb(216, 226, 253), 7.5%);
		}
}
</style>