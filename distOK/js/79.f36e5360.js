"use strict";(self["webpackChunkliste_de_course"]=self["webpackChunkliste_de_course"]||[]).push([[79],{6603:function(e,n,o){o.d(n,{Z:function(){return p}});var c=o(3396);const t=e=>((0,c.dD)("data-v-34275ed9"),e=e(),(0,c.Cn)(),e),l={class:"loading"},r=t((()=>(0,c._)("div",{class:"loading__circle loading__circle--color-blue"},null,-1))),a=t((()=>(0,c._)("div",{class:"loading__circle loading__circle--color-red"},null,-1))),i=t((()=>(0,c._)("div",{class:"loading__circle loading__circle--color-yellow"},null,-1))),s=t((()=>(0,c._)("div",{class:"loading__circle loading__circle--color-green"},null,-1))),d=[r,a,i,s];function u(e,n,o,t,r,a){return(0,c.wg)(),(0,c.iD)("div",l,d)}var _={name:"LoadingView"},g=o(89);const v=(0,g.Z)(_,[["render",u],["__scopeId","data-v-34275ed9"]]);var p=v},5079:function(e,n,o){o.r(n),o.d(n,{default:function(){return f}});var c=o(3396);const t=(0,c._)("p",null,"Vous êtes en train d'être connecté avec votre compte google, merci de bien vouloir patienter",-1);function l(e,n,o,l,r,a){const i=(0,c.up)("LoaderView");return(0,c.wg)(),(0,c.iD)(c.HY,null,[t,(0,c.Wm)(i)],64)}var r=o(6265),a=o.n(r);const i={base_url:"https://listeback-v2.raffiskender.com/wp-json/",async login(e){const n=await a().post(this.base_url+"liste-de-course/v1/googleLogin",{headers:{"Content-Type":"text/html; charset=UTF-8"},code:e}).catch((function(e){return{data:e}}));return n.data}};var s=o(6603),d=o(7247),u=o(9079),_=o(3954),g={name:"googleLogin",components:{LoaderView:s.Z},async created(){let e=encodeURI(this.$route.query["code"]);console.log(typeof e),e="coucou"+e,console.log(e);let n=await i.login(e);d.t.set("userData",n);const o=(0,_.L)();await u.W.isConnected()&&o.userConnection(),this.$router.push({name:"list"})}},v=o(89);const p=(0,v.Z)(g,[["render",l]]);var f=p}}]);
//# sourceMappingURL=79.f36e5360.js.map