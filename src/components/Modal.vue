<template>
	
	<Transition name="modal-animation">
		<div v-show="modalActive" class="modale">
			<transition name="modal-frame-animation">
        <div v-show="modalActive" class="modal-frame">
          <font-awesome-icon class="close-btn"  @click="close" icon="fa-regular fa-circle-xmark" />
          <h1>{{ title }}</h1>
          <div class="modal-content">
            <slot>
            </slot> 
          </div>
				</div>
			</transition>
		</div>
	</Transition>
  
</template>

<script>
export default {
	name : 'ModalView',
	props : {
    modalActive : Boolean,
    title: String,
    },

  setup(props, {emit}) {
		const close = () => {
			emit("close");
		}
    
    return { 
      close,
    }
	}
}
</script>

<style lang="scss" scoped>
/*Modale annimation*/

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

.modal-frame-animation-enter-from, .modal-frame-animation-leave-to{
	opacity: 0;
	transform: scale(0);
}
.modal-frame-animation-enter-active, .modal-frame-animation-leave-active{
	transition: all 0.3s cubic-bezier(0.52, -0.02, 0.19, 1.02);
}

/*modal mise en forme*/
.modale{  
  position:fixed;
  top:0;
  left: 00;
	background: rgba(140, 140, 140, 0.75);
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
  
}
.modal-frame{
  //border : dashed red 2px;
  position: relative;
	width: 80%;
	min-width: 230px;
  max-width: 350px;
	max-height: 80vh;
  overflow: visible;
  
	background:#e5e5e5;
	border-top-left-radius: 1em;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  box-sizing:border-box;
	padding: 1em;
  padding-top:0em;
  margin: 3em;
}

h1{
  margin-top:0.5em;
  font-size: 1.5em;
  //border:dashed 2px red;
  text-align:center;
}
.close-btn{

  margin: auto;
  position: absolute;
  right: -17px;
  top: -17px;
  text-align: center;
  border: none;
  border-radius: 0.75em;
  padding: 0.25em;
  background-color: #e5e5e5;
  color: blueviolet;
  font-size: 1.7em;
  transition: color 0.5s ease;
  &:hover{
    color: lighten(blueviolet, 15%);
    cursor:pointer;
  }
}
.modal-content{
  //border: 2px dashed red;
  max-height: calc(80vh - 7.5em);
  overflow-y: auto;
  //FireFox
  scrollbar-width: none;
  //Edge
  -ms-overflow-style: none;
}
</style>