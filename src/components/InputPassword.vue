<template>
    
  <label :for="name">
  <p>{{ title }}</p>
  </label>
    <input
    :type="inputType()"
      :name="name"
      :id="name"
      :class="theClass"
      :placeholder="thePlaceHolder"
      @blur="seePwd = false"
      @input="updateValue($event.target.value)"
    >
    <span>
      <font-awesome-icon
      icon="fa-solid fa-eye"
      class="eye"
      @click="toggleSeePwd()"
      v-bind:class="{'hide': seePwd}"
      alt="oeil ouvert"
      width="16" />	
      
      <font-awesome-icon
      icon="fa-solid fa-eye-slash"
      class="eye"
      @mousedown="toggleSeePwd"
      v-bind:class="{'hide': !seePwd}"
      alt="oeil fermé"
      width="16" />	
    </span>      
</template>

<script>

export default{
  name:'InputPassword',
  
  emits: {
    'newValue':null,
  },
  
  props: 
  {
    thePlaceHolder: String,
    theClass: String,
    title: String,
    label: String,
    name: String,
    placeHolder: String,
    value: String,
  },
  
  data() {
    return{
      email: '',
      username: '',
      password:'',
      seePwd:false,
    }
  },

  methods : {

    inputType(){
      return (this.seePwd) ? 'text' : 'password';
    },
    
    toggleSeePwd(){
      this.seePwd = !this.seePwd;
      setTimeout(()=>{
         document.querySelector('#' + this.name).focus()
      }, 100)
    },
    
    updateValue(value) {
      this.$emit('newValue', value)
    }
  },
}
</script>

<style lang="scss" scoped>
label {
  font-size:1.2em;
	font-family:'Quicksand', Arial, Helvetica, sans-serif ;
	color:rgb(0, 89, 255);
  // overflow: hidden;
  line-height: 1.3em;
}
  
input {
  //display: block;
  margin-top:0.5em;
  width: 100%;
  padding: 0.7em 2.5em 0.7em 0.5em;
  transition: background-color 0.5s ease;
  // border-radius: 0.5em;
  background: #ffffff;;
  border: none;
  border-bottom: #00aeff 2px solid;
  border-left:  #00aeff 2px solid;;
  box-sizing: border-box;
  &:hover{
  background: #e0e0e0;;
  }
  &:focus{
  background: #e0e0e0;;
  }
  &.has-error{
    background: rgb(255, 156, 156);
  }
  &.has-success{
    background: rgb(159, 206, 159);
  }
}


.eye{
  color:#003e7c;
  font-size: 1.1em;
  float:right;
  position:relative;
  left: -0.6em;
  top:-1.5em;
  //background-color: #ffffff;
  //padding: 0em 0em;
  //margin: 5px 0;
    
    //border-bottom: #00aeff 2px solid;
    
		&:hover{
      cursor:pointer;
		}
		&.hide{
			display: none;
		}
	}
  .hide{
    display: none;
  }
</style>