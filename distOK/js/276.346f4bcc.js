"use strict";(self["webpackChunkliste_de_course"]=self["webpackChunkliste_de_course"]||[]).push([[276],{1024:function(s,e,a){a.d(e,{b:function(){return i}});var r=a(1020);const i=(0,r.Q_)("passwordCheck",{state:()=>({password:"",regMail:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,regPassword:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(^.{8,22}$)/,regNumberOfCaracteres:/(^.{8,22}$)/,regSpecialCaractere:/(?=.*[^A-Za-z0-9])/,regCapitilizeCaractere:/(?=.*[A-Z])/,regMinimizeCaractere:/(?=.*[a-z])/,regNumber:/(?=.*[0-9])/}),actions:{updatePassword(s){this.password=s},isNumberOfCaracteresValid(){return""==this.password?"has-error":this.regNumberOfCaracteres.test(this.password)?"has-success":"has-error"},isSpecialCaractereValid(){return""==this.password?"has-error":this.regSpecialCaractere.test(this.password)?"has-success":"has-error"},isCapitilizeCaractereValid(){return""==this.password?"has-error":this.regCapitilizeCaractere.test(this.password)?"has-success":"has-error"},isMinimizeCaractereValid(){return""==this.password?"has-error":this.regMinimizeCaractere.test(this.password)?"has-success":"has-error"},isNumberValid(){return""==this.password?"has-error":this.regNumber.test(this.password)?"has-success":"has-error"},isPasswordValid(){return""==this.password?"has-error":this.regPassword.test(this.password)?"has-success":"has-error"},isPasswordValidationOk(s){return""!=s&&this.regPassword.test(this.password)&&this.password==s?"has-success":"has-error"}}})},5462:function(s,e,a){a.d(e,{Z:function(){return u}});var r=a(3396),i=a(7139);const l=["for"],t=["type","name","id","placeholder"];function o(s,e,a,o,c,d){const n=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("label",{for:a.name},[(0,r._)("p",null,(0,i.zw)(a.title),1)],8,l),(0,r._)("input",{type:d.inputType(),name:a.name,id:a.name,class:(0,i.C_)(a.theClass),placeholder:a.thePlaceHolder,onBlur:e[0]||(e[0]=s=>c.seePwd=!1),onInput:e[1]||(e[1]=s=>d.updateValue(s.target.value))},null,42,t),(0,r._)("span",null,[(0,r.Wm)(n,{icon:"fa-solid fa-eye",class:(0,i.C_)(["eye",{hide:c.seePwd}]),onClick:e[2]||(e[2]=s=>d.toggleSeePwd()),alt:"oeil ouvert",width:"16"},null,8,["class"]),(0,r.Wm)(n,{icon:"fa-solid fa-eye-slash",class:(0,i.C_)(["eye",{hide:!c.seePwd}]),onMousedown:d.toggleSeePwd,alt:"oeil fermé",width:"16"},null,8,["onMousedown","class"])])],64)}var c={name:"InputPassword",emits:{newValue:null},props:{thePlaceHolder:String,theClass:String,title:String,label:String,name:String,placeHolder:String,value:String},data(){return{email:"",username:"",password:"",seePwd:!1}},methods:{inputType(){return this.seePwd?"text":"password"},toggleSeePwd(){this.seePwd=!this.seePwd,setTimeout((()=>{document.querySelector("#"+this.name).focus()}),100)},updateValue(s){this.$emit("newValue",s)}}},d=a(89);const n=(0,d.Z)(c,[["render",o],["__scopeId","data-v-002de03e"]]);var u=n},3193:function(s,e,a){a.d(e,{Z:function(){return u}});var r=a(3396),i=a(7139);const l=(0,r.Uk)("Doit contenir ");function t(s,e,a,t,o,c){const d=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("ul",null,[l,(0,r._)("div",{class:(0,i.C_)([t.passwordCheck.isNumberOfCaracteresValid()])},[(0,r.Wm)(d,{icon:"fa-regular fa-circle-check",class:(0,i.C_)({hide:"has-error"==t.passwordCheck.isNumberOfCaracteresValid()||""==t.passwordCheck.password})},null,8,["class"]),(0,r.Wm)(d,{icon:"fa-regular fa-circle-xmark",class:(0,i.C_)({hide:"has-success"==t.passwordCheck.isNumberOfCaracteresValid()})},null,8,["class"]),(0,r._)("li",{class:(0,i.C_)([t.passwordCheck.isNumberOfCaracteresValid()])}," entre 8 et 22 caractères, ",2)],2),(0,r._)("div",{class:(0,i.C_)([t.passwordCheck.isCapitilizeCaractereValid()])},[(0,r.Wm)(d,{icon:"fa-regular fa-circle-check",class:(0,i.C_)({hide:"has-error"==t.passwordCheck.isCapitilizeCaractereValid()||""==t.passwordCheck.password}),style:{color:"green"}},null,8,["class"]),(0,r.Wm)(d,{icon:"fa-regular fa-circle-xmark",class:(0,i.C_)({hide:"has-success"==t.passwordCheck.isCapitilizeCaractereValid()}),style:{color:"red"}},null,8,["class"]),(0,r._)("li",{class:(0,i.C_)([t.passwordCheck.isCapitilizeCaractereValid()])}," une majuscule, ",2)],2),(0,r._)("div",{class:(0,i.C_)([t.passwordCheck.isMinimizeCaractereValid()])},[(0,r.Wm)(d,{icon:"fa-regular fa-circle-check",class:(0,i.C_)({hide:"has-error"==t.passwordCheck.isMinimizeCaractereValid()||""==t.passwordCheck.password}),style:{color:"green"}},null,8,["class"]),(0,r.Wm)(d,{icon:"fa-regular fa-circle-xmark",class:(0,i.C_)({hide:"has-success"==t.passwordCheck.isMinimizeCaractereValid()}),style:{color:"red"}},null,8,["class"]),(0,r._)("li",{class:(0,i.C_)([t.passwordCheck.isMinimizeCaractereValid()])}," une minuscule ",2)],2),(0,r._)("div",{class:(0,i.C_)([t.passwordCheck.isNumberValid()])},[(0,r.Wm)(d,{icon:"fa-regular fa-circle-check",class:(0,i.C_)({hide:"has-error"==t.passwordCheck.isNumberValid()||""==t.passwordCheck.password}),style:{color:"green"}},null,8,["class"]),(0,r.Wm)(d,{icon:"fa-regular fa-circle-xmark",class:(0,i.C_)({hide:"has-success"==t.passwordCheck.isNumberValid()}),style:{color:"red"}},null,8,["class"]),(0,r._)("li",{class:(0,i.C_)([t.passwordCheck.isNumberValid()])}," un chiffre ",2)],2),(0,r._)("div",{class:(0,i.C_)([t.passwordCheck.isSpecialCaractereValid()])},[(0,r.Wm)(d,{icon:"fa-regular fa-circle-check",class:(0,i.C_)({hide:"has-error"==t.passwordCheck.isSpecialCaractereValid()||""==t.passwordCheck.password}),style:{color:"green"}},null,8,["class"]),(0,r.Wm)(d,{icon:"fa-regular fa-circle-xmark",class:(0,i.C_)({hide:"has-success"==t.passwordCheck.isSpecialCaractereValid()}),style:{color:"red"}},null,8,["class"]),(0,r._)("li",{class:(0,i.C_)([t.passwordCheck.isSpecialCaractereValid()])}," un caractère spécial ",2)],2)])])}var o=a(1024),c={name:"PasswordCheckView",setup(){const s=(0,o.b)();return{passwordCheck:s}}},d=a(89);const n=(0,d.Z)(c,[["render",t],["__scopeId","data-v-46e5da47"]]);var u=n},5638:function(s,e,a){a.d(e,{Z:function(){return c}});var r=a(3396);function i(s,e,a,i,l,t){return(0,r.wg)(),(0,r.iD)("div")}var l={name:"SpinnerCpnt"},t=a(89);const o=(0,t.Z)(l,[["render",i],["__scopeId","data-v-0d82b6c3"]]);var c=o},4276:function(s,e,a){a.r(e),a.d(e,{default:function(){return Z}});var r=a(3396),i=a(9242),l=a(4870),t=a(7139),o=a(9079),c=a(5638),d=a(3193),n=a(5462),u=a(1024),p=a(2483);const w=s=>((0,r.dD)("data-v-6259db7e"),s=s(),(0,r.Cn)(),s),h=w((()=>(0,r._)("h1",null,"Réinitialisation du mot de passe",-1))),C={key:0,class:"error"},m={key:1,class:"error"},v={key:2,class:"error"},f={key:3,class:"error"},g=["disabled"],k={key:0},_={key:4,class:"error"},y=w((()=>(0,r._)("p",null,"Il y eu un pb",-1))),V={key:5,class:"success",style:{"font-weight":"bold","margin-bottom":"1em","text-align":"center"}},b=(0,r.Uk)(" Votre mot de passe vient d'être remplacé. Vous pouvez aller "),P=(0,r.Uk)("vous connecter"),z=(0,r.Uk)(" ! "),S={name:"PasswordChange"};var N=Object.assign(S,{setup(s){const e=(0,u.b)(),a=(0,l.iH)(""),w=(0,l.iH)({passwordEmpty:(0,l.iH)(!1),passwordVerifyEmpty:(0,l.iH)(!1),invalidPassword:(0,l.iH)(!1),sendingFailed:(0,l.iH)(!1),passwordsDoesNotMatch:(0,l.iH)(!1)}),S=(0,l.iH)(!1),N=(0,l.iH)(""),H=(0,l.iH)(!1),W=(0,p.yj)(),Z=(0,l.iH)(W.query["user"]),D=(0,l.iH)(W.query["key"]),M=s=>{e.updatePassword(s)},E=s=>{a.value=s},O=async()=>{if(w.value.passwordEmpty=!1,w.value.passwordVerifyEmpty=!1,w.value.invalidPassword=!1,w.value.sendingFailed=!1,N.value="",H.value=!1,w.value.passwordEmpty=""==e.password,w.value.passwordVerifyEmpty=""==a.value,w.value.invalidPassword=!e.regPassword.test(e.password),w.value.passwordsDoesNotMatch=e.password!=a.value,!w.value.passwordEmpty&&!w.value.passwordVerifyEmpty&&!w.value.invalidPassword){S.value=!0;const s=await o.W.passwordReset(e.password,D.value,Z.value);1==s.success?(H.value=!0,S.value=!1):(N.value=s.response,w.value.sendingFailed=!0,S.value=!1,H.value=!1)}};return(s,o)=>{const u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[h,(0,r._)("form",{onSubmit:o[2]||(o[2]=(0,i.iM)((s=>O()),["prevent"]))},[(0,r.Wm)(n.Z,{title:"Mot de passe",theClass:(0,l.SU)(e).isPasswordValid(),onNewValue:o[0]||(o[0]=s=>M(s)),name:"password"},null,8,["theClass"]),w.value.passwordEmpty?((0,r.wg)(),(0,r.iD)("div",C," Vous devez saisir un mot de passe ! ")):(0,r.kq)("",!0),w.value.invalidPassword&&!w.value.passwordEmpty?((0,r.wg)(),(0,r.iD)("div",m," Votre mot de passe n'est pas assez fort ! ")):(0,r.kq)("",!0),(0,r._)("div",null,[(0,r.Wm)(d.Z)]),(0,r.Wm)(n.Z,{title:"Confirmez",theClass:(0,l.SU)(e).isPasswordValidationOk(a.value),onNewValue:o[1]||(o[1]=s=>E(s)),name:"password-validation"},null,8,["theClass"]),w.value.passwordVerifyEmpty?((0,r.wg)(),(0,r.iD)("div",v," Vous devez saisir une deuxième fois votre mot de passe ! ")):(0,r.kq)("",!0),w.value.passwordsDoesNotMatch&&!w.value.passwordVerifyEmpty?((0,r.wg)(),(0,r.iD)("div",f," Les 2 mots de passe ne sont pas identiques ! ")):(0,r.kq)("",!0),(0,r._)("button",{disabled:""==(0,l.SU)(e).password||"has-error"==(0,l.SU)(e).isPasswordValid()||"has-error"==(0,l.SU)(e).isPasswordValidationOk(a.value)},[S.value?((0,r.wg)(),(0,r.j4)(c.Z,{key:1})):((0,r.wg)(),(0,r.iD)("span",k,"Réinitialiser"))],8,g),w.value.sendingFailed?((0,r.wg)(),(0,r.iD)("div",_,[y,(0,r._)("p",null,"Message : "+(0,t.zw)(N.value),1)])):(0,r.kq)("",!0),this.success?((0,r.wg)(),(0,r.iD)("div",V,[b,(0,r.Wm)(u,{to:{name:"login"}},{default:(0,r.w5)((()=>[P])),_:1}),z])):(0,r.kq)("",!0)],32)],64)}}}),H=a(89);const W=(0,H.Z)(N,[["__scopeId","data-v-6259db7e"]]);var Z=W}}]);
//# sourceMappingURL=276.346f4bcc.js.map