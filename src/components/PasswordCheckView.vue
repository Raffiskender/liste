<template>
    <div>
    <ul>Doit contenir
      <div :class="[passwordCheck.isNumberOfCaracteresValid()]">
        <font-awesome-icon	
          icon="fa-regular fa-circle-check"
          v-bind:class="{'hide': passwordCheck.isNumberOfCaracteresValid()=='has-error' || passwordCheck.password == ''}"
          />
        <font-awesome-icon
          icon="fa-regular fa-circle-xmark"
          v-bind:class="{ 'hide': passwordCheck.isNumberOfCaracteresValid() == 'has-success' }"
          />
        <li :class="[passwordCheck.isNumberOfCaracteresValid()]">
          entre 8 et 22 caractères,
        </li>
      </div>
      
      <div :class="[passwordCheck.isCapitilizeCaractereValid()]">
        <font-awesome-icon	
          icon="fa-regular fa-circle-check"
          v-bind:class="{ 'hide': passwordCheck.isCapitilizeCaractereValid() == 'has-error' || passwordCheck.password == '' }"
          style="color:green" />
        <font-awesome-icon
          icon="fa-regular fa-circle-xmark"
          v-bind:class="{'hide': passwordCheck.isCapitilizeCaractereValid() == 'has-success' }"
          style="color:red" />
        <li :class="[passwordCheck.isCapitilizeCaractereValid()]">
          une majuscule,
        </li>
      </div>
      
      <div :class ="[passwordCheck.isMinimizeCaractereValid()]">
        <font-awesome-icon	
          icon="fa-regular fa-circle-check"
          v-bind:class="{ 'hide': passwordCheck.isMinimizeCaractereValid() == 'has-error' || passwordCheck.password == '' }"
          style="color:green" />
        <font-awesome-icon
          icon="fa-regular fa-circle-xmark"
          v-bind:class="{ 'hide': passwordCheck.isMinimizeCaractereValid() == 'has-success' }"
          style="color:red" />
        <li :class="[passwordCheck.isMinimizeCaractereValid()]">
          une minuscule
        </li>
      </div>
      
      <div :class ="[passwordCheck.isNumberValid()]">
        <font-awesome-icon	
          icon="fa-regular fa-circle-check"
          v-bind:class="{ 'hide': passwordCheck.isNumberValid() == 'has-error' || passwordCheck.password == '' }"
          style="color:green" />
        <font-awesome-icon
          icon="fa-regular fa-circle-xmark"
          v-bind:class="{ 'hide': passwordCheck.isNumberValid() == 'has-success' }"
          style="color:red" />
        <li :class="[passwordCheck.isNumberValid()]">
          un chiffre
        </li>
      </div>
      
      <div :class="[passwordCheck.isSpecialCaractereValid()]">
        <font-awesome-icon	
          icon="fa-regular fa-circle-check"
          v-bind:class="{'hide': passwordCheck.isSpecialCaractereValid()=='has-error' || passwordCheck.password == '' }"
          style="color:green" />
        <font-awesome-icon
          icon="fa-regular fa-circle-xmark"
          v-bind:class="{ 'hide': passwordCheck.isSpecialCaractereValid() == 'has-success' }"
          style="color:red" />
        <li :class="[passwordCheck.isSpecialCaractereValid()]">
          un caractère spécial
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import { usePasswordCheckStore } from '@/stores/PasswordChecking'
export default {
  name: "PasswordCheckView",
  
  setup(){
    const passwordCheck = usePasswordCheckStore()
    return{
      passwordCheck,
    }
  }
}

</script>

<style lang="scss" scoped>
.container{
  margin-bottom:1.5em;
  margin-left: 0;
}
ul{
		list-style-type: none;
		font-size: 0.9em;
		color:rgb(0, 128, 0);
    margin:0;
    margin-bottom:1em;
		&>div{
			display: flex;
			align-items: center;
				&.has-error{
				color:red;
				transition: 0.5s;
				transform: rotateX(0deg)
				}
			
			&.has-success{
				color:green;
				transition: 0.5s;
				transform: rotateX(360deg)

			}
		}
	}
	
	li{
			margin-left: 0.5em;
	}
  .hide{
		display: none;
	}
</style>
