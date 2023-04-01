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
	name : 'ModalNewPwd',
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
	background: rgba(136, 136, 136, 0.9);
	width: 100%;
	max-width: 450px;
	height: 100vh;
	position: fixed;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
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
	width: 80%;
	max-width: 680px;	
	border-radius: 1em;
	padding: 1em;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	>.close-btn{
		align-self: flex-end;
		width: 1.5em;
		height: 1.5em;
		color:blueviolet;
		&:hover{
			color:lighten( blueviolet, 15%);
			cursor:pointer;
		}
}
	button{
		margin: 0.5em auto;
		display: block;
		padding: 0.5em 1em;
		background: blueviolet;
		border-radius: 0.3em;
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
			background: lighten(blueviolet, 15%);
			cursor:pointer;
		}
	}
	

}



</style>