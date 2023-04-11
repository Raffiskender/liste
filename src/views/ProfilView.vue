<template>
  <Modal @close = "toggleChangeLastNameModal()" :modalActive="showChangeLastNameModal"
  title="Modifier votre nom">
    <form @submit.prevent="handleChangeUserLastName()">
      <input
        type="text" 
        id="name"
        v-model="lastName"
        placeholder="Entrez votre nom">
      <div class="modale-buttons">
        <button>
          <span v-if="!awaiting">Changer</span>
          <SpinnerCpnt v-else />
        </button>
        <button @click.prevent="toggleChangeLastNameModal()">Annuler</button>
      </div>
      
    </form>
  </Modal>
  <Modal @close="closeChangePasswordModal" :modalActive="showChangePasswordModal"
    title='Modifiez votre mot de passe'>
    <div class="modal-content">
    <form @submit.prevent="handleChangePassword()">
      <InputPassword
        title="Mot de passe actuel"
        @new-value="recordCurrentPwd($event)"
        name="current-password"
      />
      <div class="error" v-if="errors.currentPasswordEmpty">
        Vous devez saisir votre mot de passe !
      </div>
      <div class="error" v-else-if="errors.currentPasswordIsWrong">
        Le mot de passe est incorret
      </div>
      <div class="error" v-else>
      </div>
      <InputPassword
        title="Nouveau mot de passe"
        :theClass="passwordCheck.isPasswordValid()"
        @new-value="check($event)"
        name="new-password"
      />
      <div class="error" v-if="errors.passwordEmpty">
        Vous devez saisir un mot de passe !
      </div>
      <div class="error" v-else-if="errors.invalidPassword">
        Votre mot de passe n'est pas assez fort !
      </div>
      <div class="error" v-else>
      </div>
      <PasswordCheckView />
      <InputPassword
        title="Confirmez"
        :theClass="passwordCheck.isPasswordValidationOk(passwordVerify)"
        @new-value="recordPasswordValidation($event)"
        name="password-Validation"
      />
      <div class="error" v-if="errors.passwordVerifyEmpty">
        Vous devez saisir une deuxième fois votre mot de passe !
      </div>
      <div class="error" v-else-if="errors.passwordsDoesNotMatch">
        Les 2 mots de passe ne sont pas identiques !
      </div>
      <div class="error" v-else-if="errorMessage">
        Il y a eu un problème. Message : {{errorMessage}}
      </div>
      <div class="error" v-else>
      </div>
      <div class="modale-buttons">
        
        <button :disabled="currentPassword == '' || passwordCheck.password == '' || passwordVerify == '' || awaiting">
          <span v-if="!awaiting">Ok</span>
          <SpinnerCpnt v-else />
        </button>
        <button @click.prevent="closeChangePasswordModal()">Annuler</button>
        </div>
    </form>
    </div>
  </Modal>
  <Modal  @close="toggleChangePasswordIsValidateModal" :modalActive="showChangePasswordIsValidate"
  title="Votre mot de passe a été changé">
    <button
      @click="toggleChangePasswordIsValidateModal"
      style="margin: 1em auto 0;">
      Fermer
    </button>
  </Modal>
  <Modal  @close="userWasDeleted ? closeAndQuit() : toggleDeleteAccountModal()" :modalActive="showDeleteAccountModal"
  title="Supprimer votre compte">
  <div v-if="! userWasDeleted">
    <p>Êtes-vous certain de vouloir supprimer votre compte ? </p>
    <p>Cette action n'est pas réversible</p>
    <CheckBox
      @toggled="toggleDeleteConfirme()"
      name="ConfirmDeletion"
      :checked="deleteConfirme"
    >
    <p style="display:inline; margin-left: 0.5em; font-size: 1.2em; color:#c00;">Oui je le veux</p>
  </CheckBox>
  <div v-if="errorMessageForDeleteAccount" class="error">{{ errorMessageForDeleteAccount }}</div>
</div>
<div v-else>
  <p>votre compte a bien été supprimé. Vous pouvez fermer cette fenêtre.</p>
</div>

    <div class="modale-buttons">
    <button
    v-if="!userWasDeleted"
    class="delete-btn"
    :disabled = "!deleteConfirme"
    @click="deleteAccount"
    style="margin: 1em auto 0;">
    Supprimer
  </button>
  <button
    @click="userWasDeleted ? closeAndQuit() : toggleDeleteAccountModal()"
    style="margin: 1em auto 0;">
    Fermer
  </button>
  </div>

  </Modal>
    <h2>Mon profil</h2>
  
  <LoaderView v-if ="! userStore.user"/>
  <div class="page" v-else>
    <div class="container">
      <div class="left">
        <p v-if="date">Enregistré le : <br>
          <span class="unchangeable">{{ date.getDate() }} {{ getReadableMonth() }} {{ date.getFullYear() }}</span></p>
        <p>Identifiant : <br><span class="unchangeable">{{ userStore.user['username'] }}</span></p>
        <!-- <p>Nom d'affichage :  <br>{{ userStore.user['slug'] }}</p> -->
        <p>E-mail : <br><span class="unchangeable">{{ userStore.user['email'] }}</span></p>
        <p>Nom d'affichage : <br>
          <span @click="toggleChangeLastNameModal()" v-if="userStore.user.name != ''">{{ userStore.user.name }}</span>
          <span @click="toggleChangeLastNameModal()" v-else class="link">non défini</span>
        </p>

        <!-- <p>Prénom :  <br><span v-if="userStore.user['first_name'] != ''">{{ userStore.user['first_name'] }}</span><span v-else class="link">non défini</span></p> -->
        
        <p>
          <span class="link"
          @click="toggleChangePasswordModal()">
            Modifier mon mot de passe
          </span>
        </p>
        
        <p>
          <span class="link red"
          @click="toggleDeleteAccountModal()">
            Supprimer mon compte
          </span>
        </p>
      </div>
      <div class="right">
        <div v-if="userStore.user['avatar_urls'] != undefined ">
          <img :src="userStore.user['avatar_urls']['96']" alt="Avatar">
        </div>
        <div v-else>
          <SpinnerCpnt/>
        </div>
        <p class="mini">créez votre avatar sur <a href="https://gravatar.com" target="blank">gravatar.com</a></p>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default{
    name:'ProfilView',
  }
</script>

<script setup>
  import { useUserStore }  from '@/stores/User';
  import { userService }   from '@/services/userService'
  import LoaderView        from '@/components/Layout/Loading.vue';
  import InputPassword     from '@/components/InputPassword.vue';
  import {usePasswordCheckStore} from '@/stores/PasswordChecking';
  import SpinnerCpnt       from '@/components/SpinnerCpnt.vue'
  import CheckBox          from '@/components/InputCheck.vue'
  import PasswordCheckView from '@/components/PasswordCheckView.vue'
  import Modal from '@/components/Modal.vue'
  import { ref, onBeforeMount } from 'vue'
  import router from '@/router'
  
  onBeforeMount(async() => {
    if ( await userService.isConnected() ){
      date.value = new Date(userStore.user['registered_date'])
    }
    else{
      router.push( {name: '403'})
    }
  })
  const userStore = useUserStore()
  const passwordCheck = usePasswordCheckStore()
  
  const date = ref(false)
  
  const getReadableMonth = () => {
    switch (date.value.getMonth()) {
      case 1 : {
        return 'janvier'
      }
        case 2 : {
          return 'février'
        }
        case 3 : {
          return 'mars'
        }
        case 4 : {
          return 'avril'
        }
        case 5 : {
          return 'mai'
        }
        case 6 : {
          return 'juin'
        }
        case 7 : {
          return 'juillet'
        }
        case 8 : {
          return 'août'
        }
        case 9 : {
          return 'septembre'
        }
        case 10 : {
          return 'octobre'
        }
        case 11 : {
          return 'novembre'
        }
        case 12 : {
          return 'décembre'
        }
        default: {
          return 'mois'
        }
      }
  }
  
  const showChangeLastNameModal = ref(false)
  const toggleChangeLastNameModal = () => {
    showChangeLastNameModal.value = !showChangeLastNameModal.value;
  }
  const lastName=ref('')
  const handleChangeUserLastName = async() => {
    if (lastName.value != ''){
      awaiting.value = true
      const data = await userService.changeUserLastName(lastName.value)

      if(data.success == '1'){
        toggleChangeLastNameModal()
        userStore.changeUserLastName(lastName.value)
        awaiting.value = false
        lastName.value = ''
      }
    }
  }
  
  const showChangePasswordModal = ref(false)
  const closeChangePasswordModal = () => {
    toggleChangePasswordModal()
    let allInputs = document.querySelectorAll('input')
    for (const input of allInputs){
      input.value = ''
    }
    passwordCheck.password = '';
  }
  
  const toggleChangePasswordModal = () => {
    showChangePasswordModal.value = !showChangePasswordModal.value;
  }
  
  
  const check = (value) => {
    passwordCheck.updatePassword(value)
  }
  
  const recordPasswordValidation = (value) => {
    passwordVerify.value = value
  }
  
  const recordCurrentPwd = (value) => {
    currentPassword.value = value
  }
  
  const passwordVerify = ref('')
  const currentPassword = ref('')
  const errors = ref({    
    currentPasswordEmpty : ref(false),
    passwordEmpty : ref(false),
    passwordVerifyEmpty : ref(false), 
    invalidPassword : ref(false),
    passwordsDoesNotMatch : ref(false),
    currentPasswordIsWrong : ref(false),
  })
  const awaiting = ref(false)
  const errorMessage = ref('')
  
  const showChangePasswordIsValidate = ref(false)
  const toggleChangePasswordIsValidateModal = () =>{
    showChangePasswordIsValidate.value = !showChangePasswordIsValidate.value;
  }
  
  
  const handleChangePassword = async () => {
    errors.value.invalidPassword = false;
    errors.value.currentPasswordIsWrong = false
    
    // --- Vérification des données du formulaire --- //
    // En version raccourcie : on stocke le résultat de la condition dans la variable

    errors.value.currentPasswordEmpty  = ( currentPassword.value == "" );
    errors.value.passwordEmpty  = ( passwordCheck.password == "" );
    errors.value.passwordsDoesNotMatch = ( passwordCheck.password != passwordVerify.value )
    errors.value.invalidPassword = ( !passwordCheck.regPassword.test(passwordCheck.password) );
          
    // Si une erreur est rencontrée, on n'envoi pas la requete au serveur !
    if( !errors.value.currentPasswordEmpty &&
        !errors.value.passwordEmpty &&
        !errors.value.passwordVerifyEmpty &&
        !errors.value.passwordsDoesNotMatch &&
        !errors.value.invalidPassword)
    {

      awaiting.value = true;

      const data = await userService.passwordResetFromProfil( currentPassword.value, passwordCheck.password )
      
      if (data.success == 1){
        toggleChangePasswordModal()
        toggleChangePasswordIsValidateModal()
        awaiting.value = false
        errors.value.currentPasswordEmpty = false
        errors.value.passwordEmpty = false
        errors.value.passwordVerifyEmpty = false
        errors.value.invalidPassword = false
        errors.value.passwordsDoesNotMatch = false
        errors.value.currentPasswordIsWrong = false
        currentPassword.value = ''
        passwordVerify.value = ''
        passwordCheck.updatePassword('')
        let allInputs = document.querySelectorAll('input')
        for (const input of allInputs){
          input.value = ''
        }
      }
    
      else{
        awaiting.value = false
        //console.log(data.response.message == 'Password is wrong')
        if (data.response.message == 'Password is wrong')
          errors.value.currentPasswordIsWrong = true
        else
        errorMessage.value = data.response.data.message          
      }
    }
  }
  
  
  const showDeleteAccountModal = ref(false)
  const toggleDeleteAccountModal = () =>{
    showDeleteAccountModal.value = !showDeleteAccountModal.value;
    deleteConfirme.value = false;
  }
  
  const deleteConfirme = ref(false)
  const toggleDeleteConfirme = () => {
    deleteConfirme.value = !deleteConfirme.value;
    //console.log(deleteConfirme.value)
  }
  
  const userWasDeleted = ref(false);
  const errorMessageForDeleteAccount = ref(false)
  const deleteAccount = async() => {
    errorMessageForDeleteAccount.value = false
    if (deleteConfirme.value){
      const data = await userService.deleteAccount()
      
      if (data.success === 1){
        userWasDeleted.value = true
      }
      else{
        errorMessageForDeleteAccount.value = 'Il y a eu une erreur. Message : ' + data.response.message
      }
      
    }
    else{
      errorMessageForDeleteAccount.value = "Vous devez cocher la case"
    }
  }
  const closeAndQuit = () => {
    userStore.userDisconnection()
        toggleDeleteAccountModal()
        router.push({name: 'home'})
  
  }
</script>

<style lang="scss" scoped>
  h1, h2, h3, p, ul, li{
    font-family: 'quicksand', Arial, Helvetica, sans-serif;
    color:blueviolet;
  }

	h2 {
    text-align: center;
    padding-top: 1em;
    font-size: 2em;
    font-weight: bold;
    text-transform: uppercase;
  }

  p {
    font-size:1.2em;
    font-family:'Quicksand', Arial, Helvetica, sans-serif ;
    color:rgb(0, 89, 255);
    margin : 0.5em 0em;
    // overflow: hidden;
    line-height: 1.3em;
    word-wrap:break-word;
    & span{
      &.link{
        cursor: pointer
      }
      &.red{
        color : rgb(252, 80, 80)
      }
      &.unchangeable{
        color:grey;
        cursor:default;
      }
    }
  } 
  .page{
    margin : 2em;
  }
  .container{
    width : 100%;
    //border:1px solid red;
    display: flex;
    justify-content: right;
  }
  .left{
    width: calc(100% - 105px);
  }
  .right{
    border-left:1px solid rgb(116, 116, 116);
    border-top-left-radius:48px;
    //border:1px solid red;
    
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 105px;
    & .mini{
      font-size: 0.8em;
      text-align: center;
    }
    & img{
      border-radius: 50%;
      margin-top:5px;
    }
  }

  button{
		margin: 0.5em;
		display: block;
		padding: 0.5em 1em;
		background: blueviolet;
		border-radius: 0.3em;
		border:none;
		color : rgb(255, 255, 255);
    font-size: 1.2em;
		transition: 0.2s ease;
		&:hover{
      background: lighten(blueviolet, 15%);
			cursor:pointer;
		}
    &:disabled{
      background-color:#444;
      cursor:default;
    }
    &.delete-btn{
      background: red;
      &:disabled {
        background: rgb(143, 143, 143);
        cursor:default;
      }
    }
	}
  .modal-content{
    margin-top:1em;
  }
.modale-buttons{
  width: 100%;
  display: flex;
  align-items : center;
  justify-content: center;
}

input {
  display: block;
  margin: 1.2em 0;
  width: 100%;
  padding: 0.75em 1.5em;
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
}
.error {
  color : rgb(133, 0, 0);
		font-weight: bold;
    font-size:1.2em;
		margin: 0.2em auto 0.3em;
		text-align: center;
    min-height:1em;
	}
</style>