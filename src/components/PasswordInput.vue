<template>
    
  <label>
  <p>{{title}}</p>
  </label>
    <input
      :type="this.inputType(this.seePwd)"
      :name="name"
      @blur="seePwd = false"
      v-model="this.Password"
    >
    
    <font-awesome-icon
      icon="fa-solid fa-eye"
      class="eye"
      @click="toggleSeePwd()"
      v-bind:class="{'hide': seePwd}"
      alt=""
      width="16" />	
      
    <font-awesome-icon
      icon="fa-solid fa-eye-slash"
      class="eye"
      @click="toggleSeePwd"
      v-bind:class="{'hide': !seePwd}"
      alt=""
      width="16" />	

</template>

<script>

export default{
  name:'PasswordInput',
  
  props: 
  {
    label: String,
    name: String,
    placeHolder: String,
  },
  
  data() {
    return{
      email: '',
      username: '',
      // first_name: '',
      // last_name: '',
      password:'',
      //passwordfocus: false,
      seePwd:false,
    }
  },

  methods : {

    inputType(shallISee){
      return (shallISee) ? 'text' : 'password';
    },
    toggleSeePwd(){
      this.seePwd = !this.seePwd;
      setTimeout(()=>{
         document.querySelector('input').focus()
      }, 50)
    },
 
  },
}
</script>

<style lang="scss" scoped>
label {
  margin-bottom: 1em;
  color: #003e7c;
  text-align: left;
  font-weight: normal;
  font-family: 'Quicksand',  Arial, Helvetica, sans-serif;
}
input {
  display: block;
  margin: 5px 0;
  width: 100%;
  padding: 0.75em 1.5em;
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

  .hide{
  display: none;
}

  .eye{
		color:#003e7c;
		font-size: 1.1em;
		position:relative;
		left: calc(100% - 2em);
		top:-2em;
		&:hover{
			cursor:pointer;
		}
		&.hide{
			display: none;
		}
	}
</style>