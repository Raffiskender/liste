"use strict";(self["webpackChunkliste_de_course"]=self["webpackChunkliste_de_course"]||[]).push([[540],{4540:function(e,a,t){t.r(a),t.d(a,{default:function(){return x}});var i=t(3396),o=t(7139);const s=e=>((0,i.dD)("data-v-685a12ab"),e=e(),(0,i.Cn)(),e),n={key:0},l=(0,i.uE)('<h3 data-v-685a12ab>Bienvenue sur la liste de course</h3><p class="title" data-v-685a12ab>Présentation</p><p data-v-685a12ab> Ce projet est en cours de développement, et il commence à être assez aboutis. </p><p data-v-685a12ab> Ceci est la version 2. Je me suis surtout attaché à avoir code propre, <a href="https://github.com/Raffiskender" target="blank" data-v-685a12ab>(dispo ici)</a>, et à avoir une gestion des utilisateurs assez fine (sécurisation du front-end sur les formulaires, réinitialisation de mot de passe, token à expiration, activation de compte etc). </p><p class="title" data-v-685a12ab>Le projet (d&#39;un mot)</p><p data-v-685a12ab>Il s&#39;agit d&#39;un gestionnaire de listes. Ça ne paye pas de mine, mais le back-end (WordPress) gère : </p><ul data-v-685a12ab><li data-v-685a12ab>La création des utilisateurs</li><li data-v-685a12ab>L&#39;activation du compte utilisateur</li><li data-v-685a12ab>La réinitialisation du mot de passe utilisateur</li><li data-v-685a12ab>la création d&#39;une table aux données chiffrées pour la confidentialité de la liste de chaque utilisateur (avec une clé perso pour chacun)</li><li data-v-685a12ab>La connexion avec Google OAuth</li><li data-v-685a12ab>La gestion de la connexion est faite par JWT Authentication for wp Rest api</li></ul><p data-v-685a12ab>Le front est pour sa part programmé en Vue.js, framework que j&#39;affectionne pour sa simplicité, sa logique, sa légèreté, son adaptablilité et sa robustesse. On y trouve :</p><ul data-v-685a12ab><li data-v-685a12ab>Deux stores pour la gestion de l&#39;utilisateur et de sa liste</li><li data-v-685a12ab>Un router</li><li data-v-685a12ab>De la sécurisation de formulaires</li><li data-v-685a12ab>Un tas de requêtes à l&#39;api WordPress</li><li data-v-685a12ab>Et aussi tout ce qui se voit dans le navigateur</li></ul><p class="title" data-v-685a12ab>Bientôt viendront : </p>',10),u=s((()=>(0,i._)("li",null,"La page profil utilisateur",-1))),r=s((()=>(0,i._)("li",null,"Des pages 403 et 404 un peu plus glamour",-1))),d=s((()=>(0,i._)("li",null,"La persistance de la connexion via un cookie plutôt que par le localStorage",-1))),c=(0,i.Uk)("La création de rubriques pour gérer plusieurs listes "),p=s((()=>(0,i._)("p",{class:"foot-note"},"Précision : Cette idée s'en va doucement aux oubliettes. En effet, je préfère privilégier la simplicité, plutôt que d'avoir plein de fonctionnalités pouvant géner des utilisateurs pas très à l'aise avec l'outil numérique.",-1))),v={class:"title last",style:{"font-weight":"bold"}},m=(0,i.Uk)(" Pour commencer il faut "),b=(0,i.Uk)("vous connecter"),f=(0,i.Uk)(" ou "),g=(0,i.Uk)("créer un compte"),h=(0,i.Uk)(". "),k={key:1};function y(e,a,t,s,y,_){const q=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("section",null,[s.isConnected?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",n,[l,(0,i._)("ul",null,[u,r,d,(0,i._)("li",null,[c,(0,i._)("a",{onMouseover:a[0]||(a[0]=e=>this.handleDisplayFootnote(e)),onMouseleave:a[1]||(a[1]=e=>this.handleHideFootnote()),onTouchstart:a[2]||(a[2]=e=>this.handleDisplayFootnote()),onScroll:a[3]||(a[3]=e=>this.handleHideFootnote())},"*",32),p])]),(0,i._)("p",v,[m,(0,i.Wm)(q,{to:{name:"login"}},{default:(0,i.w5)((()=>[b])),_:1}),f,(0,i.Wm)(q,{to:{name:"suscribe"}},{default:(0,i.w5)((()=>[g])),_:1}),h])])),s.isConnected?((0,i.wg)(),(0,i.iD)("div",k,[(0,i._)("h3",null,"Bonjour "+(0,o.zw)(_.getCurrentUsername())+" !",1)])):(0,i.kq)("",!0)])}var _=t(7247),q=t(1020),w=t(3954),C={name:"HomeView",setup(){const e=(0,w.L)(),{isConnected:a}=(0,q.Jk)(e);return{store:e,isConnected:a}},methods:{handleDisplayFootnote(e){const a=document.querySelector(".foot-note");a.style.opacity=1,a.style["z-index"]=3,a.style.left="calc((100vw / 2) - 10em)",a.style.top="calc("+e.clientY+"px - 13em)"},handleHideFootnote(){const e=document.querySelector(".foot-note");console.log(e),e.style.opacity=0,e.style["z-index"]=-1},getCurrentUsername(){return _.t.get("userData").user_display_name}}},D=t(89);const L=(0,D.Z)(C,[["render",y],["__scopeId","data-v-685a12ab"]]);var x=L}}]);
//# sourceMappingURL=540.9dd3c374.js.map