(function(){var e={4866:function(e,t,n){"use strict";var s=n(9242),o=n(3396);function r(e,t,n,s,r,c){const a=(0,o.up)("router-view"),i=(0,o.up)("NavCpnt");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(a,null,{default:(0,o.w5)((({Component:e})=>[((0,o.wg)(),(0,o.j4)((0,o.LL)(e)))])),_:1}),(0,o.Wm)(i)],64)}const c=e=>((0,o.dD)("data-v-f5b0d53c"),e=e(),(0,o.Cn)(),e),a=c((()=>(0,o._)("span",null,"Déconnexion",-1))),i=(0,o.Uk)(" Accueil "),u=(0,o.Uk)(" Connexion "),d=(0,o.Uk)(" Inscription "),l=(0,o.Uk)(" Liste "),f=(0,o.Uk)(" Profil ");function p(e,t,n,s,r,c){const p=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",null,[(0,o._)("ul",null,[s.isConnected?((0,o.wg)(),(0,o.j4)(p,{key:0,to:{name:"home"},class:"li",style:{display:"block"},id:"deconnect",onClick:t[0]||(t[0]=e=>this.store.userDisconnection())},{default:(0,o.w5)((()=>[a])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(p,{to:{name:"home"},class:"li"},{default:(0,o.w5)((()=>[i])),_:1}),s.isConnected?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(p,{key:1,to:{name:"login"},class:"li"},{default:(0,o.w5)((()=>[u])),_:1})),s.isConnected?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(p,{key:2,to:{name:"subscribe"},class:"li"},{default:(0,o.w5)((()=>[d])),_:1})),s.isConnected?((0,o.wg)(),(0,o.j4)(p,{key:3,to:{name:"list"},class:"li"},{default:(0,o.w5)((()=>[l])),_:1})):(0,o.kq)("",!0),s.isConnected?((0,o.wg)(),(0,o.j4)(p,{key:4,to:{name:"profil"},class:"li"},{default:(0,o.w5)((()=>[f])),_:1})):(0,o.kq)("",!0)])])}var h=n(1020),m=n(3954),b={name:"NavCpnt",setup(){const e=(0,m.L)(),{isConnected:t}=(0,h.Jk)(e);return{store:e,isConnected:t}}},v=n(89);const w=(0,v.Z)(b,[["render",p],["__scopeId","data-v-f5b0d53c"]]);var g=w,y=n(9079),k={name:"App",components:{NavCpnt:g},setup(){const e=(0,m.L)();return{userStore:e}},async created(){this.userStore.setConnected(await y.W.isConnected())}};const C=(0,v.Z)(k,[["render",r]]);var _=C,j=n(1120),A=n(2615),O=n.n(A),P=n(3494),S=n(7749),L=n(8539),D=n(8429);let N=O().defaults;N.allowedTags=[],P.vI.add(D.fV7,D.WA2,L.Mdf,L.Aq,D.pL1,D.chG,D.Vui,L.GQf,L.WqQ,L.r8p,L.Kl4);const E=(0,h.WB)();(0,s.ri)(_).use(E).use(j.Z).use(O(),N).component("font-awesome-icon",S.GN).mount("#app")},1120:function(e,t,n){"use strict";var s=n(2483);const o=[{path:"/",name:"home",component:()=>n.e(863).then(n.bind(n,3863))},{path:"/login",name:"login",component:()=>n.e(550).then(n.bind(n,3726))},{path:"/subscribe",name:"subscribe",component:()=>n.e(829).then(n.bind(n,2829))},{path:"/list",name:"list",component:()=>n.e(288).then(n.bind(n,2288))},{path:"/profil",name:"profil",component:()=>n.e(311).then(n.bind(n,7311))},{path:"/confirmation",name:"confirmation",component:()=>n.e(512).then(n.bind(n,7512))},{path:"/passwordReset",name:"passwordReset",component:()=>n.e(187).then(n.bind(n,3187))},{path:"/passwordChange",name:"passwordChange",component:()=>n.e(276).then(n.bind(n,4276))},{path:"/googleLogin",name:"googleLogin",component:()=>n.e(502).then(n.bind(n,9502))},{path:"/403",name:"403",component:()=>n.e(985).then(n.bind(n,1985))},{path:"/:pathMatch(.*)",name:"404",component:()=>n.e(178).then(n.bind(n,2178))}],r=(0,s.p7)({history:(0,s.PO)(),routes:o});t["Z"]=r},9079:function(e,t,n){"use strict";n.d(t,{W:function(){return a}});var s=n(6265),o=n.n(s),r=n(7247),c=n(3954);const a={base_url:"https://listeback-v2.raffiskender.com/wp-json/",success:"",async login(e,t){const n=await o().post(this.base_url+"jwt-auth/v1/token",{username:e,password:t}).catch((function(){return{data:null}}));return n.data},async isConnected(){const e=(0,c.L)(),t=r.t.get("userData");return!(null==t||!t.token)&&(await o().post(this.base_url+"jwt-auth/v1/token/validate",null,{headers:{Authorization:"Bearer "+t.token}}).catch((function(){return!1})),e.userConnection(),!0)},async subscribe(e,t,n){this.success=1;const s=await o().post(this.base_url+"liste-de-course/v1/create-user",{username:t,email:e,password:n}).catch((e=>(this.success=0,e)));return 1==this.success?{success:1,response:s.data}:{success:0,response:s.response.data}},async getUserInfos(){const e=r.t.get("userData"),t=await o().post(this.base_url+"wp/v2/users/me",null,{headers:{Authorization:"Bearer "+e.token}}).catch((function(){return!1}));return t.data},async userConfirmation(e,t){const n=await o().post(this.base_url+"liste-de-course/v1/confirm",{user:e,key:t}).catch((function(){return{data:null}}));return n.data},async userAsksForPasswordReset(e){this.success=1;const t=await o().post(this.base_url+"liste-de-course/v1/askForPasswordReset",{email:e}).catch((function(e){return this.success=0,e}));return 1==this.success?{success:1,response:t.data}:{success:0,response:t.response.data}},async passwordReset(e,t,n){this.success=1;const s=await o().post(this.base_url+"liste-de-course/v1/resetPassword",{password:e,userId:n,key:t}).catch((function(e){return this.success=0,e}));if(1==this.success)return"1"==s.data?{success:1}:{success:0,response:s.data}},async passwordResetFromProfil(e,t){const n=r.t.get("userData");this.success=1;const s=await o().post(this.base_url+"liste-de-course/v1/resetPasswordFromProfil",{currentPassword:e,newPassword:t,userId:n.user_id},{headers:{Authorization:"Bearer "+n.token}}).catch((e=>(this.success=0,e)));return 1!=this.success?{success:0,response:s.response.data}:"1"==s.data?{success:1}:void 0},async deleteAccount(){const e=r.t.get("userData");this.success=1;const t=await o()["delete"](this.base_url+"liste-de-course/v1/delete-user",{headers:{Authorization:"Bearer "+e.token}}).catch((e=>(this.success=0,e)));return 1!=this.success?{success:0,response:t.response.data}:"1"==t.data?{success:1}:void 0}}},3954:function(e,t,n){"use strict";n.d(t,{L:function(){return r}});var s=n(1020),o=n(7247);const r=(0,s.Q_)("User",{state:()=>({isConnected:!1,user:!1}),actions:{userConnection(){this.isConnected=!0},userDisconnection(){this.isConnected=!1,o.t.unset("userData")},setConnected(e){e?this.userConnection():this.userDisconnection()},createUser(e){this.user=e}}})},7247:function(e,t,n){"use strict";n.d(t,{t:function(){return s}});const s={set:function(e,t){window.localStorage.setItem(e,JSON.stringify(t))},get:function(e){return JSON.parse(window.localStorage.getItem(e))},unset:function(e){window.localStorage.removeItem(e)}}},2868:function(){},6349:function(){},9830:function(){},209:function(){},7414:function(){}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var r=t[s]={exports:{}};return e[s].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,s,o,r){if(!s){var c=1/0;for(d=0;d<e.length;d++){s=e[d][0],o=e[d][1],r=e[d][2];for(var a=!0,i=0;i<s.length;i++)(!1&r||c>=r)&&Object.keys(n.O).every((function(e){return n.O[e](s[i])}))?s.splice(i--,1):(a=!1,r<c&&(c=r));if(a){e.splice(d--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[s,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,s){return n.f[s](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{178:"e7008739",187:"0c7b75d8",276:"346f4bcc",288:"7bf2e5cf",311:"207ea974",502:"540387b0",512:"fafe6889",550:"39f327e8",829:"8c47261e",863:"fde0b318",985:"2f2378a1"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{187:"de259cb7",276:"406b0f79",288:"40ad4777",311:"96c4d528",502:"04189a5b",512:"d904c331",550:"79b7c12d",829:"4cdf36e9",863:"2d17896b"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="liste-de-course:";n.l=function(s,o,r,c){if(e[s])e[s].push(o);else{var a,i;if(void 0!==r)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==s||l.getAttribute("data-webpack")==t+r){a=l;break}}a||(i=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+r),a.src=s),e[s]=[o];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[s];if(delete e[s],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),i&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,s){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var r=function(r){if(o.onerror=o.onload=null,"load"===r.type)n();else{var c=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=c,i.request=a,o.parentNode.removeChild(o),s(i)}};return o.onerror=o.onload=r,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),s=0;s<n.length;s++){var o=n[s],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var c=document.getElementsByTagName("style");for(s=0;s<c.length;s++){o=c[s],r=o.getAttribute("data-href");if(r===e||r===t)return o}},s=function(s){return new Promise((function(o,r){var c=n.miniCssF(s),a=n.p+c;if(t(c,a))return o();e(s,a,o,r)}))},o={143:0};n.f.miniCss=function(e,t){var n={187:1,276:1,288:1,311:1,502:1,512:1,550:1,829:1,863:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=s(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,s){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)s.push(o[2]);else{var r=new Promise((function(n,s){o=e[t]=[n,s]}));s.push(o[2]=r);var c=n.p+n.u(t),a=new Error,i=function(s){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=s&&("load"===s.type?"missing":s.type),c=s&&s.target&&s.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",a.name="ChunkLoadError",a.type=r,a.request=c,o[1](a)}};n.l(c,i,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,r,c=s[0],a=s[1],i=s[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(i)var d=i(n)}for(t&&t(s);u<c.length;u++)r=c[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},s=self["webpackChunkliste_de_course"]=self["webpackChunkliste_de_course"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(4866)}));s=n.O(s)})();
//# sourceMappingURL=app.9e05fd0e.js.map