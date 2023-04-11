"use strict";(self["webpackChunkliste_de_course"]=self["webpackChunkliste_de_course"]||[]).push([[556],{5638:function(e,s,i){i.d(s,{Z:function(){return l}});var t=i(3396);function n(e,s,i,n,o,r){return(0,t.wg)(),(0,t.iD)("div")}var o={name:"SpinnerCpnt"},r=i(89);const a=(0,r.Z)(o,[["render",n],["__scopeId","data-v-0d82b6c3"]]);var l=a},1556:function(e,s,i){i.r(s),i.d(s,{default:function(){return F}});var t=i(3396),n=i(9242),o=i(7139);const r=e=>((0,t.dD)("data-v-21b6143a"),e=e(),(0,t.Cn)(),e),a=r((()=>(0,t._)("h2",null,"Connexion",-1))),l=(0,t.Uk)(" Login ou e-mail "),d={key:0,class:"error"},u=(0,t.Uk)(" Mot de passe "),h=["type"],c=(0,t.Uk)("J'ai oublié mon mot de passe !"),p={key:0,class:"error"},w={key:0,class:"error",style:{"font-weight":"bold","margin-bottom":"1em","text-align":"center"}},m={key:1,class:"error",style:{"font-weight":"bold","margin-bottom":"1em","text-align":"center"}},g=["disabled"],f={key:0},y=r((()=>(0,t._)("a",{href:"https://accounts.google.com/o/oauth2/v2/auth?scope=email&access_type=offline&redirect_uri=https://liste-v2.raffiskender.com/googleLogin/&response_type=code&client_id=809993271907-v86i2qfmui89jbe2fueusg3cajnqf826.apps.googleusercontent.com"},"Me connecter via google",-1)));function v(e,s,i,r,v,_){const b=(0,t.up)("font-awesome-icon"),k=(0,t.up)("router-link"),C=(0,t.up)("SpinnerCpnt");return(0,t.wg)(),(0,t.iD)("section",null,[a,(0,t._)("form",{onSubmit:s[6]||(s[6]=(0,n.iM)(((...e)=>this.handleFormSubmit&&this.handleFormSubmit(...e)),["prevent"]))},[(0,t._)("label",null,[l,(0,t.wy)((0,t._)("input",{type:"text",name:"login","onUpdate:modelValue":s[0]||(s[0]=e=>this.login=e),placeholder:"Paul Position"},null,512),[[n.nr,this.login]]),this.errors.loginEmpty?((0,t.wg)(),(0,t.iD)("div",d," Vous devez saisir un identifiant ! ")):(0,t.kq)("",!0)]),(0,t._)("label",null,[u,(0,t.wy)((0,t._)("input",{type:[_.pwdInputType()],name:"password","onUpdate:modelValue":s[1]||(s[1]=e=>this.password=e),onBlur:s[2]||(s[2]=e=>[this.handleHidePwd()])},null,40,h),[[n.YZ,this.password]]),(0,t.Wm)(b,{class:(0,o.C_)(["eye",{hide:this.seePwd}]),icon:"fa-solid fa-eye",onClick:s[3]||(s[3]=e=>this.handleShowPwd()),src:"@/assets/eye-solid.svg",alt:"",width:"16"},null,8,["class"]),(0,t.Wm)(b,{class:(0,o.C_)(["eye",{hide:!this.seePwd}]),icon:"fa-solid fa-eye-slash",onClick:s[4]||(s[4]=e=>this.handleHidePwd()),src:"@/assets/eye-slash-solid.svg",alt:"",width:"16"},null,8,["class"]),(0,t._)("div",null,[(0,t.Wm)(k,{to:{name:"passwordReset"}},{default:(0,t.w5)((()=>[c])),_:1})]),this.errors.passwordEmpty?((0,t.wg)(),(0,t.iD)("div",p," Vous devez saisir un mot de passe ! ")):(0,t.kq)("",!0)]),this.errors.loginFailed?((0,t.wg)(),(0,t.iD)("div",w," Identifiants incorrects ")):(0,t.kq)("",!0),this.errors.unconfirmedUser?((0,t.wg)(),(0,t.iD)("div",m," Vous ne pouvez pas vous connecter car votre email n'a pas été vérifié ! ")):(0,t.kq)("",!0),(0,t._)("button",{onClick:s[5]||(s[5]=(...e)=>this.handleFormSubmit&&this.handleFormSubmit(...e)),disabled:""==this.login||""==this.password||this.awaiting},[this.awaiting?((0,t.wg)(),(0,t.j4)(C,{key:1})):((0,t.wg)(),(0,t.iD)("span",f,"Se connecter"))],8,g)],32),y])}var _=i(9079),b=i(7247),k=i(5638),C=i(3954),P={name:"LoginView",components:{SpinnerCpnt:k.Z},setup(){const e=(0,C.L)();return{store:e}},data(){return{login:"",password:"",seePwd:!1,awaiting:!1,errors:{loginEmpty:!1,passwordEmpty:!1,loginFailed:!1,unconfirmedUser:!1}}},methods:{handleShowPwd(){this.seePwd=!0},handleHidePwd(){this.seePwd=!1},pwdInputType(){return this.seePwd?"text":"password"},async handleFormSubmit(){if(this.errors.loginFailed=!1,this.errors.unconfirmedUser=!1,this.awaiting=!0,this.errors.loginEmpty=""==this.login,this.errors.passwordEmpty=""==this.password,!this.errors.loginEmpty&&!this.errors.passwordEmpty){let e=await _.W.login(this.login,this.password);b.t.set("userData",e),null==e?(this.errors.loginFailed=!0,this.awaiting=!1):e.user_confirmed[0]==["0"]?(this.errors.unconfirmedUser=!0,this.awaiting=!1):await _.W.isConnected()&&(this.store.userConnection(),this.awaiting=!1,this.$router.push({name:"list"}))}}}},S=i(89);const D=(0,S.Z)(P,[["render",v],["__scopeId","data-v-21b6143a"]]);var F=D}}]);
//# sourceMappingURL=556.c5a516a7.js.map