"use strict";(self["webpackChunkliste_de_course"]=self["webpackChunkliste_de_course"]||[]).push([[550],{5638:function(e,t,i){i.d(t,{Z:function(){return d}});var s=i(3396);function a(e,t,i,a,n,o){return(0,s.wg)(),(0,s.iD)("div")}var n={name:"SpinnerCpnt"},o=i(89);const r=(0,o.Z)(n,[["render",a],["__scopeId","data-v-0d82b6c3"]]);var d=r},3726:function(e,t,i){i.r(t),i.d(t,{default:function(){return D}});var s=i(3396),a=i(9242),n=i(7139),o=i.p+"img/google.8e413a87.png";const r=e=>((0,s.dD)("data-v-a6505cd0"),e=e(),(0,s.Cn)(),e),d=r((()=>(0,s._)("h2",null,"Connexion",-1))),l=(0,s.Uk)(" Identifiant ou e-mail "),p={key:0,class:"error"},u=(0,s.Uk)(" Mot de passe "),c=["type"],h=(0,s.Uk)("J'ai oublié mon mot de passe !"),m={key:0,class:"error"},g={key:0,class:"error",style:{"font-weight":"bold","margin-bottom":"1em","text-align":"center"}},w={key:1,class:"error",style:{"font-weight":"bold","margin-bottom":"1em","text-align":"center"}},v=["disabled"],f={key:0},_=(0,s.uE)('<div class="google" data-v-a6505cd0><p style="margin-bottom:1em;" data-v-a6505cd0>Vous pouvez aussi vous connecter via</p><a href="https://accounts.google.com/o/oauth2/v2/auth?scope=email profile&amp;access_type=online&amp;redirect_uri=https://liste-v2.raffiskender.com/googleLogin&amp;response_type=code&amp;client_id=270319015769-o80is9ik9r6pop7fmojb46ns28pic1li.apps.googleusercontent.com" data-v-a6505cd0><img src="'+o+'" style="width:180px;height:auto;" data-v-a6505cd0></a></div><div id="g_id_onload" data-client_id="270319015769-o80is9ik9r6pop7fmojb46ns28pic1li.apps.googleusercontent.com" data-context="signin" data-ux_mode="popup" data-login_uri="https://liste-v2.raffiskender.com/googleLogin" data-auto_prompt="false" data-v-a6505cd0></div><div class="g_id_signin" data-type="standard" data-shape="rectangular" data-theme="outline" data-text="signin_with" data-size="large" data-logo_alignment="left" data-v-a6505cd0></div>',3);function y(e,t,i,o,r,y){const k=(0,s.up)("font-awesome-icon"),b=(0,s.up)("router-link"),S=(0,s.up)("SpinnerCpnt");return(0,s.wg)(),(0,s.iD)("section",null,[d,(0,s._)("form",{onSubmit:t[6]||(t[6]=(0,a.iM)(((...e)=>this.handleFormSubmit&&this.handleFormSubmit(...e)),["prevent"]))},[(0,s._)("label",null,[l,(0,s.wy)((0,s._)("input",{type:"text",name:"login","onUpdate:modelValue":t[0]||(t[0]=e=>this.login=e),placeholder:"Paul Position"},null,512),[[a.nr,this.login]]),this.errors.loginEmpty?((0,s.wg)(),(0,s.iD)("div",p," Vous devez saisir un identifiant ! ")):(0,s.kq)("",!0)]),(0,s._)("label",null,[u,(0,s.wy)((0,s._)("input",{type:[y.pwdInputType()],name:"password","onUpdate:modelValue":t[1]||(t[1]=e=>this.password=e),onBlur:t[2]||(t[2]=e=>[this.handleHidePwd()])},null,40,c),[[a.YZ,this.password]]),(0,s.Wm)(k,{class:(0,n.C_)(["eye",{hide:this.seePwd}]),icon:"fa-solid fa-eye",onClick:t[3]||(t[3]=e=>this.handleShowPwd()),alt:"",width:"16"},null,8,["class"]),(0,s.Wm)(k,{class:(0,n.C_)(["eye",{hide:!this.seePwd}]),icon:"fa-solid fa-eye-slash",onClick:t[4]||(t[4]=e=>this.handleHidePwd()),alt:"",width:"16"},null,8,["class"]),(0,s._)("div",null,[(0,s.Wm)(b,{to:{name:"passwordReset"}},{default:(0,s.w5)((()=>[h])),_:1})]),this.errors.passwordEmpty?((0,s.wg)(),(0,s.iD)("div",m," Vous devez saisir un mot de passe ! ")):(0,s.kq)("",!0)]),this.errors.loginFailed?((0,s.wg)(),(0,s.iD)("div",g," Identifiants incorrects ")):(0,s.kq)("",!0),this.errors.unconfirmedUser?((0,s.wg)(),(0,s.iD)("div",w," Vous ne pouvez pas vous connecter car votre email n'a pas été vérifié ! ")):(0,s.kq)("",!0),(0,s._)("button",{onClick:t[5]||(t[5]=(...e)=>this.handleFormSubmit&&this.handleFormSubmit(...e)),disabled:""==this.login||""==this.password||this.awaiting},[this.awaiting?((0,s.wg)(),(0,s.j4)(S,{key:1})):((0,s.wg)(),(0,s.iD)("span",f,"Se connecter"))],8,v)],32),_])}var k=i(9079),b=i(7247),S=i(5638),C=i(3954),P={name:"LoginView",components:{SpinnerCpnt:S.Z},setup(){const e=(0,C.L)();return{userStore:e}},data(){return{login:"",password:"",seePwd:!1,awaiting:!1,errors:{loginEmpty:!1,passwordEmpty:!1,loginFailed:!1,unconfirmedUser:!1}}},methods:{handleShowPwd(){this.seePwd=!0},handleHidePwd(){this.seePwd=!1},pwdInputType(){return this.seePwd?"text":"password"},async handleFormSubmit(){if(this.errors.loginFailed=!1,this.errors.unconfirmedUser=!1,this.awaiting=!0,this.errors.loginEmpty=""==this.login,this.errors.passwordEmpty=""==this.password,!this.errors.loginEmpty&&!this.errors.passwordEmpty){const e=await k.W.login(this.login,this.password);b.t.set("userData",e),null==e?(this.errors.loginFailed=!0,this.awaiting=!1):e.user_confirmed[0]==["0"]?(this.errors.unconfirmedUser=!0,this.awaiting=!1):await k.W.isConnected()&&(this.userStore.userConnection(),this.userStore.createUser(e),this.awaiting=!1,this.$router.push({name:"list"}))}}}},U=i(89);const x=(0,U.Z)(P,[["render",y],["__scopeId","data-v-a6505cd0"]]);var D=x}}]);
//# sourceMappingURL=550.5485d25e.js.map