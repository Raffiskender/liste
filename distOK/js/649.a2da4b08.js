"use strict";(self["webpackChunkliste_de_course"]=self["webpackChunkliste_de_course"]||[]).push([[649],{6603:function(e,n,o){o.d(n,{Z:function(){return p}});var t=o(3396);const c=e=>((0,t.dD)("data-v-34275ed9"),e=e(),(0,t.Cn)(),e),l={class:"loading"},r=c((()=>(0,t._)("div",{class:"loading__circle loading__circle--color-blue"},null,-1))),a=c((()=>(0,t._)("div",{class:"loading__circle loading__circle--color-red"},null,-1))),i=c((()=>(0,t._)("div",{class:"loading__circle loading__circle--color-yellow"},null,-1))),s=c((()=>(0,t._)("div",{class:"loading__circle loading__circle--color-green"},null,-1))),d=[r,a,i,s];function u(e,n,o,c,r,a){return(0,t.wg)(),(0,t.iD)("div",l,d)}var _={name:"LoadingView"},g=o(89);const v=(0,g.Z)(_,[["render",u],["__scopeId","data-v-34275ed9"]]);var p=v},7649:function(e,n,o){o.r(n),o.d(n,{default:function(){return f}});var t=o(3396);const c=(0,t._)("p",null,"Vous êtes en train d'être connecté avec votre compte google, merci de bien vouloir patienter",-1);function l(e,n,o,l,r,a){const i=(0,t.up)("LoaderView");return(0,t.wg)(),(0,t.iD)(t.HY,null,[c,(0,t.Wm)(i)],64)}var r=o(6265),a=o.n(r);const i={base_url:"https://listeback-v2.raffiskender.com/wp-json/",async login(e){const n=await a().post(this.base_url+"liste-de-course/v1/googleLogin",{headers:{"Content-Type":"text/html; charset=UTF-8"},code:e}).catch((function(e){return{data:e}}));return n.data}};var s=o(6603),d=o(7247),u=o(9079),_=o(3954),g={name:"googleLogin",components:{LoaderView:s.Z},async created(){let e=encodeURI(this.$route);console.log(e);let n=await i.login(e);d.t.set("userData",n);const o=(0,_.L)();await u.W.isConnected()&&o.userConnection(),this.$router.push({name:"list"})}},v=o(89);const p=(0,v.Z)(g,[["render",l]]);var f=p}}]);
//# sourceMappingURL=649.a2da4b08.js.map