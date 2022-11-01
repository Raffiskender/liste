"use strict";(self["webpackChunkliste_de_course"]=self["webpackChunkliste_de_course"]||[]).push([[515],{7515:function(s,e,r){r.r(e),r.d(e,{default:function(){return U}});var a=r(3396),i=r(9242),t=r(7139);const l=s=>((0,a.dD)("data-v-aa7499c4"),s=s(),(0,a.Cn)(),s),o=l((()=>(0,a._)("h2",null,"S'enregistrer",-1))),d=(0,a.Uk)(" Email "),c={key:0,class:"error"},n={key:1,class:"error"},h=(0,a.Uk)(" Login "),u={key:0,class:"error"},p=(0,a.Uk)(" Mot de passe "),w=["type"],m=(0,a.Uk)("Doit contenir "),f=l((()=>(0,a._)("li",null,"entre 8 et 22 caractères,",-1))),y={key:0,class:"error"},C={key:1,class:"error"},V=(0,a.Uk)(" Vérification du mot de passe "),_=["type"],g={key:0,class:"error"},k={key:1,class:"error"},v={key:0,class:"error"},P=["disabled"],b={key:1,class:"error"},z=l((()=>(0,a._)("p",null,"Il y eu un pb lors de votre enregistrement",-1))),M={key:2,class:"success",style:{"font-weight":"bold","margin-bottom":"1em","text-align":"center"}},E=(0,a.Uk)(" Félicitation, vous êtes à présent enregistré sur notre site. Vous pouvez dès à présent vous connecter sur la "),S=(0,a.Uk)("page de connection"),D=(0,a.Uk)(" ! ");function N(s,e,r,l,N,I){const W=(0,a.up)("font-awesome-icon"),q=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("section",null,[o,(0,a._)("form",{onSubmit:e[11]||(e[11]=(0,i.iM)(((...s)=>this.handleFormSubmit&&this.handleFormSubmit(...s)),["prevent"]))},[(0,a._)("label",null,[d,(0,a.wy)((0,a._)("input",{type:"mail",name:"Email","onUpdate:modelValue":e[0]||(e[0]=s=>this.email=s),placeholder:"Email",class:(0,t.C_)([I.isEmailValid()]),required:""},null,2),[[i.nr,this.email]]),this.errors.emailEmpty?((0,a.wg)(),(0,a.iD)("div",c," Vous devez saisir un mail ! ")):(0,a.kq)("",!0),this.errors.invalidMail?((0,a.wg)(),(0,a.iD)("div",n," E-mail invalide ! ")):(0,a.kq)("",!0)]),(0,a._)("label",null,[h,(0,a.wy)((0,a._)("input",{type:"text",name:"username","onUpdate:modelValue":e[1]||(e[1]=s=>this.username=s),placeholder:"username",required:""},null,512),[[i.nr,this.username]]),this.errors.usernameEmpty?((0,a.wg)(),(0,a.iD)("div",u," Vous devez saisir un login ! ")):(0,a.kq)("",!0)]),(0,a._)("label",null,[p,(0,a.wy)((0,a._)("input",{class:(0,t.C_)(["pwdInput",I.isPasswordValid()]),type:[this.pwdInputType()],name:"password","onUpdate:modelValue":e[2]||(e[2]=s=>this.password=s),onFocus:e[3]||(e[3]=(...s)=>this.handleFocusPasswordInput&&this.handleFocusPasswordInput(...s)),onBlur:e[4]||(e[4]=(...s)=>this.handleBlurPasswordInput&&this.handleBlurPasswordInput(...s))},null,42,w),[[i.YZ,this.password]]),(0,a.Wm)(W,{icon:"fa-solid fa-eye",class:(0,t.C_)(["eye",{hide:this.seePwd}]),onClick:e[5]||(e[5]=s=>this.handleSeePwd()),alt:"",width:"16"},null,8,["class"]),(0,a.Wm)(W,{icon:"fa-solid fa-eye-slash",class:(0,t.C_)(["eye",{hide:!this.seePwd}]),onClick:e[6]||(e[6]=s=>this.handleSeePwd()),alt:"",width:"16"},null,8,["class"]),(0,a._)("div",null,[(0,a._)("ul",null,[m,(0,a._)("div",{class:(0,t.C_)([I.isNumberOfCaracteresValid()])},[(0,a.Wm)(W,{icon:"fa-regular fa-circle-check",class:(0,t.C_)({hide:"has-error"==I.isNumberOfCaracteresValid()||""==this.password})},null,8,["class"]),(0,a.Wm)(W,{icon:"fa-regular fa-circle-xmark",class:(0,t.C_)({hide:"has-success"==I.isNumberOfCaracteresValid()})},null,8,["class"]),f],2),(0,a._)("div",{class:(0,t.C_)([I.isCapitilizeCaractereValid()])},[(0,a.Wm)(W,{icon:"fa-regular fa-circle-check",class:(0,t.C_)({hide:"has-error"==I.isCapitilizeCaractereValid()||""==this.password}),style:{color:"green"}},null,8,["class"]),(0,a.Wm)(W,{icon:"fa-regular fa-circle-xmark",class:(0,t.C_)({hide:"has-success"==I.isCapitilizeCaractereValid()}),style:{color:"red"}},null,8,["class"]),(0,a._)("li",{class:(0,t.C_)([I.isCapitilizeCaractereValid()])},"une majuscule,",2)],2),(0,a._)("div",{class:(0,t.C_)([I.isMinimizeCaractereValid()])},[(0,a.Wm)(W,{icon:"fa-regular fa-circle-check",class:(0,t.C_)({hide:"has-error"==I.isMinimizeCaractereValid()||""==this.password}),style:{color:"green"}},null,8,["class"]),(0,a.Wm)(W,{icon:"fa-regular fa-circle-xmark",class:(0,t.C_)({hide:"has-success"==I.isMinimizeCaractereValid()}),style:{color:"red"}},null,8,["class"]),(0,a._)("li",{class:(0,t.C_)([I.isMinimizeCaractereValid()])},"une minuscule",2)],2),(0,a._)("div",{class:(0,t.C_)([I.isNumberValid()])},[(0,a.Wm)(W,{icon:"fa-regular fa-circle-check",class:(0,t.C_)({hide:"has-error"==I.isNumberValid()||""==this.password}),style:{color:"green"}},null,8,["class"]),(0,a.Wm)(W,{icon:"fa-regular fa-circle-xmark",class:(0,t.C_)({hide:"has-success"==I.isNumberValid()}),style:{color:"red"}},null,8,["class"]),(0,a._)("li",{class:(0,t.C_)([I.isNumberValid()])},"un chiffre",2)],2),(0,a._)("div",{class:(0,t.C_)([I.isSpecialCaractereValid()])},[(0,a.Wm)(W,{icon:"fa-regular fa-circle-check",class:(0,t.C_)({hide:"has-error"==I.isSpecialCaractereValid()||""==this.password}),style:{color:"green"}},null,8,["class"]),(0,a.Wm)(W,{icon:"fa-regular fa-circle-xmark",class:(0,t.C_)({hide:"has-success"==I.isSpecialCaractereValid()}),style:{color:"red"}},null,8,["class"]),(0,a._)("li",{class:(0,t.C_)([I.isSpecialCaractereValid()])},"un caractère spécial",2)],2)])]),this.errors.passwordEmpty?((0,a.wg)(),(0,a.iD)("div",y," Vous devez saisir un mot de passe ! ")):(0,a.kq)("",!0),this.errors.invalidPassword?((0,a.wg)(),(0,a.iD)("div",C," Votre mot de passe n'est pas assez fort ! ")):(0,a.kq)("",!0)]),(0,a._)("label",null,[V,(0,a.wy)((0,a._)("input",{class:(0,t.C_)(["pwdInput",I.isPasswordValidationOk()]),type:[this.pwdVerifInputType()],name:"passwordVerify",onBlur:e[7]||(e[7]=s=>this.handleBlurPwdVerif()),"onUpdate:modelValue":e[8]||(e[8]=s=>this.passwordVerify=s)},null,42,_),[[i.YZ,this.passwordVerify]]),(0,a.Wm)(W,{icon:"fa-solid fa-eye",class:(0,t.C_)(["eye",{hide:this.seePwdVerif}]),onClick:e[9]||(e[9]=s=>this.handleSeePwdVerif()),alt:"",width:"16"},null,8,["class"]),(0,a.Wm)(W,{icon:"fa-solid fa-eye-slash",class:(0,t.C_)(["eye",{hide:!this.seePwdVerif}]),onClick:e[10]||(e[10]=s=>this.handleSeePwdVerif()),alt:"",width:"16"},null,8,["class"]),this.errors.passwordVerifyEmpty?((0,a.wg)(),(0,a.iD)("div",g," Vous devez saisir une deuxième fois votre mot de passe ! ")):(0,a.kq)("",!0),this.errors.passwordsDoesNotMatch?((0,a.wg)(),(0,a.iD)("div",k," Les 2 mots de passe ne sont pas identiques ! ")):(0,a.kq)("",!0)]),this.errors.loginFailed?((0,a.wg)(),(0,a.iD)("div",v," Identifiants incorrects ")):(0,a.kq)("",!0),(0,a._)("button",{disabled:""==this.email||""==this.username||""==this.password||""==this.passwordVerify}," S'inscrire ",8,P),this.errors.suscribeFailed?((0,a.wg)(),(0,a.iD)("div",b,[z,(0,a._)("p",null,"Message : "+(0,t.zw)(this.errorMessage),1)])):(0,a.kq)("",!0),this.success.suscribeSuccessfull?((0,a.wg)(),(0,a.iD)("div",M,[E,(0,a.Wm)(q,{to:{name:"login"}},{default:(0,a.w5)((()=>[S])),_:1}),D])):(0,a.kq)("",!0)],32)])}var I=r(9005),W={name:"LoginView",data(){return{email:"",username:"",password:"",passwordVerify:"",passwordfocus:!1,seePwd:!1,seePwdVerif:!1,errors:{suscribeFailed:!1,emailEmpty:!1,usernameEmpty:!1,fisrt_nameEmpty:!1,last_nameEmpty:!1,passwordEmpty:!1,passwordVerifyEmpty:!1,passwordsDoesNotMatch:!1,invalidMail:!1,invalidPassword:!1},success:{suscribeSuccessfull:!1},errorMessage:"",regMail:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,regPassword:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(^.{8,22}$)/,regNumberOfCaracteres:/(^.{8,22}$)/,regSpecialCaractere:/(?=.*[^A-Za-z0-9])/,regCapitilizeCaractere:/(?=.*[A-Z])/,regMinimizeCaractere:/(?=.*[a-z])/,regNumber:/(?=.*[0-9])/}},methods:{isEmailValid(){return""==this.email?"":this.regMail.test(this.email)?"has-success":"has-error"},handleSeePwd(){this.seePwd=!this.seePwd,this.passwordfocus=!0},handleSeePwdVerif(){this.seePwdVerif=!this.seePwdVerif},handleBlurPwdVerif(){this.seePwdVerif=!1},pwdVerifInputType(){return this.seePwdVerif?"text":"password"},pwdInputType(){return this.seePwd?"text":"password"},isNumberOfCaracteresValid(){return""==this.password?"has-error":this.regNumberOfCaracteres.test(this.password)?"has-success":"has-error"},isSpecialCaractereValid(){return""==this.password?"has-error":this.regSpecialCaractere.test(this.password)?"has-success":"has-error"},isCapitilizeCaractereValid(){return""==this.password?"has-error":this.regCapitilizeCaractere.test(this.password)?"has-success":"has-error"},isMinimizeCaractereValid(){return""==this.password?"has-error":this.regMinimizeCaractere.test(this.password)?"has-success":"has-error"},isNumberValid(){return""==this.password?"has-error":this.regNumber.test(this.password)?"has-success":"has-error"},isPasswordValid(){return""==this.password?"has-error":this.regPassword.test(this.password)?"has-success":"has-error"},isPasswordValidationOk(){if(""!=this.passwordVerify&&this.regPassword.test(this.password))return this.password==this.passwordVerify?"has-success":"has-error"},handleFocusPasswordInput(){this.errors.invalidPassword=!1,this.passwordfocus=!0},handleBlurPasswordInput(){this.seePwd=!1,this.passwordfocus=!1},async handleFormSubmit(){if(this.errors.suscribeFailed=!1,this.errors.invalidMail=!1,this.errors.invalidPassword=!1,this.errors.emailEmpty=""==this.email,this.errors.usernameEmpty=""==this.username,this.errors.passwordEmpty=""==this.password,this.errors.passwordsDoesNotMatch=this.password!=this.passwordVerify,this.errors.invalidMail=!this.regMail.test(this.email),this.errors.invalidPassword=!this.regPassword.test(this.password),!this.errors.usernameEmpty&&!this.errors.passwordEmpty&&!this.emailEmpty&&!this.errors.passwordsDoesNotMatch&&!this.errors.invalidMail&&!this.errors.invalidPassword){let s=await I.Z.suscribe(this.email,this.username,this.password);1==s.success?this.success.suscribeSuccessfull=!0:(this.errorMessage=s.response.message,this.errors.suscribeFailed=!0)}}}},q=r(89);const F=(0,q.Z)(W,[["render",N],["__scopeId","data-v-aa7499c4"]]);var U=F}}]);
//# sourceMappingURL=515.ff4eeebb.js.map