import {defineStore} from 'pinia'

export const usePasswordCheckStore = defineStore('passwordCheck', {
  state: () => ({
    password : '',
    regMail:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    regPassword : /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(^.{8,22}$)/,
    regNumberOfCaracteres:/(^.{8,22}$)/,
    regSpecialCaractere:/(?=.*[^A-Za-z0-9])/,
    regCapitilizeCaractere: /(?=.*[A-Z])/,
    regMinimizeCaractere:/(?=.*[a-z])/,
    regNumber: /(?=.*[0-9])/,
  }),

  actions : 
  {
    updatePassword(promptedPassword){
      this.password = promptedPassword
      //console.log(promptedPassword)
    },
    
    isNumberOfCaracteresValid() {
      return (this.password == "") ? "has-error" : (this.regNumberOfCaracteres.test(this.password)) ? 'has-success' : 'has-error';
    },
    
    isSpecialCaractereValid() {
      return (this.password == "") ? "has-error" : (this.regSpecialCaractere.test(this.password)) ? 'has-success' : 'has-error';
    },
    
    isCapitilizeCaractereValid() {
      return (this.password == "") ? "has-error" : (this.regCapitilizeCaractere.test(this.password)) ? 'has-success' : 'has-error';
    },
    
    isMinimizeCaractereValid() {
      return (this.password == "") ? "has-error" : (this.regMinimizeCaractere.test(this.password)) ? 'has-success' : 'has-error';
    },
    
    isNumberValid() {
      return (this.password == "") ? "has-error" : (this.regNumber.test(this.password)) ? 'has-success' : 'has-error';
    },
    
    
    isPasswordValid() {
      return (this.password == "") ? "has-error" : (this.regPassword.test(this.password)) ? 'has-success' : 'has-error';
    },
    
    isPasswordValidationOk(passwordVerify) {
      if (passwordVerify!="" && this.regPassword.test(this.password)){
        return (this.password == passwordVerify) ? 'has-success' : 'has-error';
      }
      return 'has-error'
    },
  }
})