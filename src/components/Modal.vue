<template>
	
	<Transition name="modal-animation">
		<div v-show="modalActive" class="modale">
			<transition name="modal-inner-animation">
				<div v-show="modalActive" class="modal-inner">
					<font-awesome-icon class="close-btn"  @click="close" icon="fa-regular fa-circle-xmark" />
					<slot>
					</slot>
					<button @click="close">Fermer</button> 
				</div>
			</transition>
		</div>
	</Transition>
		
</template>

<script>
export default {
	name : 'ModalView',
	props : ["modalActive"],
	
	setup(props, {emit}) {
		const close = () => {
			emit("close");
		}
			return { close }
	}
}
</script>

<style lang="scss" scoped>
/*Modale annimation*/
.modale{
	background: rgb(170, 170, 170);
	width: 100%;
	max-width: 450px;
	height: 100vh;
	position: fixed;
	//@at-rootopacity: 1;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	//transition: opacity 2s ease;
	//filter:blur(20px);
}
.modal-animation-enter-from,
.modal-animation-leave-to{
	opacity: 0;
}

.modal-animation-enter-active{
	transition: opacity 0.3s ease;
}
.modal-animation-leave-active{
	transition: opacity 0.3s ease 0.2s;
}

/*Modal inner animation*/

.modal-inner-animation-enter-from, .modal-inner-animation-leave-to{
	opacity: 0;
	transform: scale(0);
}
.modal-inner-animation-enter-active, .modal-inner-animation-leave-active{
	transition: all 0.3s cubic-bezier(0.52, -0.02, 0.19, 1.02);
	
}

.modal-inner{
	height: auto;
	width: 300px;
	background: rgb(255, 213, 213);
	border-radius: 1em;
	padding: 1em;
	>.close-btn{
		position:relative;
		top:00px;
		left: 280px;
		width: 1.5em;
		height: 1.5em;
		color:crimson;
		&:hover{
			color:rgb(243, 137, 158);
			cursor:pointer;
		}
}
	button{
		margin: 0.5em auto;
		display: block;
		padding: 0.5em 1em;
		background: #777;
		border:none;
		color : rgb(255, 255, 255);
		transition: 0.2s ease;
		>a{
			color : white;
			text-decoration: none;
			&:visited{
				color : white;
			}
		}
		&:hover{
			background:rgb(177, 177, 177);
			cursor:pointer;
		}
	}
}



</style>