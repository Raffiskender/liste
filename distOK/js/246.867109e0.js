"use strict";(self["webpackChunkliste_de_course"]=self["webpackChunkliste_de_course"]||[]).push([[246],{6603:function(t,e,i){i.d(e,{Z:function(){return g}});var n=i(3396);const a=t=>((0,n.dD)("data-v-34275ed9"),t=t(),(0,n.Cn)(),t),s={class:"loading"},l=a((()=>(0,n._)("div",{class:"loading__circle loading__circle--color-blue"},null,-1))),o=a((()=>(0,n._)("div",{class:"loading__circle loading__circle--color-red"},null,-1))),r=a((()=>(0,n._)("div",{class:"loading__circle loading__circle--color-yellow"},null,-1))),d=a((()=>(0,n._)("div",{class:"loading__circle loading__circle--color-green"},null,-1))),c=[l,o,r,d];function u(t,e,i,a,l,o){return(0,n.wg)(),(0,n.iD)("div",s,c)}var h={name:"LoadingView"},p=i(89);const m=(0,p.Z)(h,[["render",u],["__scopeId","data-v-34275ed9"]]);var g=m},5246:function(t,e,i){i.r(e),i.d(e,{default:function(){return K}});var n=i(3396),a=i(9242),s=i(7139);const l=t=>((0,n.dD)("data-v-3af842b0"),t=t(),(0,n.Cn)(),t),o=l((()=>(0,n._)("h1",{style:{"margin-bottom":"0.5em"}}," Ma liste ",-1))),r={key:1},d={key:0,class:"vide"},c=l((()=>(0,n._)("p",null," Votre liste est toute vide ! Remplissez-là !",-1))),u=l((()=>(0,n._)("div",{class:"svg"},[(0,n._)("svg",{width:"37.754887mm",height:"64.519531mm",viewBox:"0 0 37.754887 64.519531",version:"1.1",id:"svg8","inkscape:version":"1.0.2 (e86c870879, 2021-01-15)","sodipodi:docname":"zero.svg.svg"},[(0,n._)("defs",{id:"defs2"}),(0,n._)("g",{"inkscape:label":"Calque 1","inkscape:groupmode":"layer",id:"layer1",transform:"translate(-81.569086,-48.910156)"},[(0,n._)("g",{id:"g1231"},[(0,n._)("g",{id:"g1176",transform:"matrix(0.80237356,0,0,0.87338105,19.85089,10.295552)",style:{stroke:"#ccc","stroke-width":"8.12304","stroke-miterlimit":"4","stroke-dasharray":"none","stroke-opacity":"1"}},[(0,n._)("path",{id:"path1113",style:{fill:"none",stroke:"#ccc","stroke-width":"8.12304","stroke-miterlimit":"4","stroke-dasharray":"none","stroke-opacity":"1"},d:"m 119.91201,81.31131 c 0,-16.069076 -7.43818,-24.048362 -19.46548,-24.048362 -12.0273,0 -19.465479,7.979286 -19.465481,24.048362 -10e-7,16.069081 7.438181,24.04837 19.465481,24.04837 12.0273,0 19.46548,-7.979289 19.46548,-24.04837 z","sodipodi:nodetypes":"ccccc"})]),(0,n._)("path",{style:{color:"#000000","font-style":"normal","font-variant":"normal","font-weight":"normal","font-stretch":"normal","font-size":"medium","line-height":"normal","font-family":"sans-serif","font-variant-ligatures":"normal","font-variant-position":"normal","font-variant-caps":"normal","font-variant-numeric":"normal","font-variant-alternates":"normal","font-variant-east-asian":"normal","font-feature-settings":"normal","font-variation-settings":"normal","text-indent":"0","text-align":"start","text-decoration":"none","text-decoration-line":"none","text-decoration-style":"solid","text-decoration-color":"#000000","letter-spacing":"normal","word-spacing":"normal","text-transform":"none","writing-mode":"lr-tb",direction:"ltr","text-orientation":"mixed","dominant-baseline":"auto","baseline-shift":"baseline","text-anchor":"start","white-space":"normal","shape-padding":"0","shape-margin":"0","inline-size":"0","clip-rule":"nonzero",display:"inline",overflow:"visible",visibility:"visible",opacity:"1",isolation:"auto","mix-blend-mode":"normal","color-interpolation":"sRGB","color-interpolation-filters":"linearRGB","solid-color":"#000000","solid-opacity":"1","vector-effect":"none",fill:"#ccc","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"4","stroke-dasharray":"none","stroke-dashoffset":"0","stroke-opacity":"1","color-rendering":"auto","image-rendering":"auto","shape-rendering":"auto","text-rendering":"auto","enable-background":"accumulate","stop-color":"#000000","stop-opacity":"1"},d:"M 109.62305,48.910156 85.433594,113.42969 h 6.023437 L 115.64844,48.910156 Z",id:"path1203","sodipodi:nodetypes":"ccccc"})])])])],-1))),h=[c,u],p={key:1},m={class:"list"},g={class:"add-form"},v=l((()=>(0,n._)("label",{for:"element"},null,-1))),w=["disabled"],f={key:0},_=l((()=>(0,n._)("p",null,"Entrez au moins une lettre",-1))),y=[_];function b(t,e,i,l,c,u){const _=(0,n.up)("LoaderView"),b=(0,n.up)("ListElement"),k=(0,n.up)("SpinnerBtn");return(0,n.wg)(),(0,n.iD)("section",null,[o,l.listStore.listData?((0,n.wg)(),(0,n.iD)("div",r,["vide"==l.listStore.listData[0]?((0,n.wg)(),(0,n.iD)("div",d,h)):((0,n.wg)(),(0,n.iD)("div",p,[(0,n._)("div",m,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.listStore.listData,(t=>((0,n.wg)(),(0,n.j4)(b,{key:t.id,title:t.content,id:t.id},null,8,["title","id"])))),128))])])),(0,n._)("div",g,[(0,n._)("form",{onSubmit:e[3]||(e[3]=(0,a.iM)(((...t)=>this.handleFormSubmit&&this.handleFormSubmit(...t)),["prevent"]))},[v,(0,n.wy)((0,n._)("input",{type:"text",id:"element","onUpdate:modelValue":e[0]||(e[0]=t=>this.newElement=t),placeholder:"Nouvelle ligne",onFocus:e[1]||(e[1]=t=>this.engouthCaracteres=!0)},null,544),[[a.nr,this.newElement]]),(0,n._)("button",{class:(0,s.C_)(["button",{hide:this.disableButton}]),disabled:this.disableButton},(0,s.zw)(this.buttonContent),11,w),this.disableButton?((0,n.wg)(),(0,n.j4)(k,{key:0})):(0,n.kq)("",!0),this.newCategoryAppear?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:1,type:"text",id:"element","onUpdate:modelValue":e[2]||(e[2]=t=>this.newElement=t),placeholder:"Nouvelle rubrique"},null,512)),[[a.nr,this.newElement]]):(0,n.kq)("",!0)],32),this.engouthCaracteres?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",f,y))])])):((0,n.wg)(),(0,n.j4)(_,{key:0}))])}const k={class:"container"},D=["id"],S=["id","innerHTML"];function C(t,e,i,l,o,r){return(0,n.wg)(),(0,n.iD)("div",k,[(0,n._)("form",{onSubmit:e[6]||(e[6]=(0,a.iM)((t=>r.handleSave(i.id)),["prevent"]))},[(0,n._)("div",{class:(0,s.C_)(["input",{hide:!this.editMode}])},[(0,n.wy)((0,n._)("input",{ref:"myInput",type:"text",id:i.id,"onUpdate:modelValue":e[0]||(e[0]=t=>this.newTitle=t),onBlur:e[1]||(e[1]=t=>this.handleSave(t,i.id))},null,40,D),[[a.nr,this.newTitle]]),(0,n._)("div",null,[(0,n._)("button",{onMousedown:e[2]||(e[2]=t=>r.handleSave(t,i.id)),style:{"margin-right":"1em"}}," Enregistrer ",32),(0,n._)("button",{onMousedown:e[3]||(e[3]=t=>r.handleCancelModify(t,i.id))}," Annuler ",32)])],2),(0,n._)("div",{class:(0,s.C_)(["text",{hide:this.editMode}])},[(0,n._)("p",{class:"title",id:"p"+i.id,onMousedown:e[4]||(e[4]=t=>r.handleSwitchToEditMode(i.id)),innerHTML:this.title},null,40,S),(0,n._)("button",{class:"delete",onClick:e[5]||(e[5]=t=>r.handleOnDelete(i.id))}," X ")],2)],32)])}var B=i(1020),T=i(6265),M=i.n(T),E=i(7247);const x={base_url:"https://listeback-v2.raffiskender.com/wp-json/",async findAll(){const t=E.t.get("userData"),e=await M().get(this.base_url+"liste-de-course/v1/data/"+t.user_id,{headers:{Authorization:"Bearer "+t.token}}).catch((function(){return{data:null}}));return e.data},async update(t){const e=E.t.get("userData"),i=await M().put(this.base_url+"liste-de-course/v1/data/"+e.user_id,{json:t},{headers:{Authorization:"Bearer "+e.token}}).catch((function(){return{data:null}}));return i.data},async patch(t,e){const i=E.t.get("userData"),n=await M().patch(this.base_url+"wp/v2/list_element/"+t,{title:e},{headers:{Authorization:"Bearer "+i.token}}).catch((function(){return{data:null}}));return console.log(n.data),n.data},async delete(t){const e=E.t.get("userData");return await M()["delete"](this.base_url+"wp/v2/list_element/"+t,{headers:{Authorization:"Bearer "+e.token}}).catch((function(){return!1})),!0}},A=(0,B.Q_)("list",{state:()=>({listData:!1}),actions:{async findAll(){const t=await x.findAll();this.listData=JSON.parse(t)},async delete(t){this.listData=this.listData.filter((e=>e.id!==t)),0==this.listData.length&&(this.listData[0]="vide"),await x.update(JSON.stringify(this.listData))},async add(t){"vide"==this.listData[0]&&(this.listData=[]),this.listData.push(t),await x.update(JSON.stringify(this.listData))},async update(t,e){for(const i in this.listData)this.listData[i].id===t&&(this.listData[i].content=e);await x.update(JSON.stringify(this.listData))}}});var z={props:{title:String,id:Number},setup(){const t=A(),{listData:e}=(0,B.Jk)(t);return{listStore:t,listData:e}},data(){return{editMode:!1,initialTitle:this.title,newTitle:this.title,preventBlur:!1}},methods:{cleanMessage(t){return this.$sanitize(t)},handleOnDelete(t){this.listStore.delete(t)},handleSwitchToEditMode(t){this.editMode=!0,this.preventBlur=!1,setTimeout((function(){document.getElementById(t).focus()}))},backToDisplayMode(){this.editMode=!1},handleOnBlur(){this.preventBlur?console.log("blur unactive"):console.log("blur fired")},handleCancelModify(t,e){t.preventDefault(),document.getElementById("p"+e).focus(),this.preventBlur=!0,this.newTitle=this.initialTitle},handleReactivateBlur(){},async handleSave(t,e){("blur"==t.type&&!this.preventBlur||"mousedown"==t.type)&&(t.preventDefault(),this.initialTitle!==this.newTitle&&this.newTitle!==this.initialTitle&&(this.listStore.update(e,this.newTitle),this.initialTitle=this.newTitle),""===this.newTitle&&this.handleOnDelete(e)),this.backToDisplayMode()}}},L=i(89);const O=(0,L.Z)(z,[["render",C],["__scopeId","data-v-67678622"]]);var j=O,V=i(6603);const I=t=>((0,n.dD)("data-v-7a63cf51"),t=t(),(0,n.Cn)(),t),N={disabled:""},Z=I((()=>(0,n._)("div",null,null,-1))),q=[Z];function J(t,e,i,a,s,l){return(0,n.wg)(),(0,n.iD)("button",N,q)}var R={name:"SpinnerBtn"};const F=(0,L.Z)(R,[["render",J],["__scopeId","data-v-7a63cf51"]]);var H=F,U=i(3954),G={name:"ListView",components:{ListElement:j,LoaderView:V.Z,SpinnerBtn:H},setup(){const t=A(),e=(0,U.L)();return{listStore:t,userStore:e}},data(){return{newElements:[],newElement:"",allRubriques:"",categoryAppear:!1,newCategoryAppear:!1,engouthCaracteres:!0,disableButton:!1,buttonContent:"Ajouter"}},async created(){this.userStore.isConnected?await this.listStore.findAll():this.$router.push({name:"403"})},methods:{async handleFormSubmit(){this.engouthCaracteres=!0,this.newElement.length>1?(this.disableButton=!0,this.buttonContent="",this.newElement={id:Date.now(),content:this.newElement},this.listStore.add(this.newElement),this.newElement="",this.disableButton=!1,this.buttonContent="Ajouter"):this.engouthCaracteres=null},handleToggleCategory(){this.categoryAppear=!this.categoryAppear},handleOnChange(t){const e=t.currentTarget;"new"===e.value?this.newCategoryAppear=!0:this.newCategoryAppear=!1}}};const $=(0,L.Z)(G,[["render",b],["__scopeId","data-v-3af842b0"]]);var K=$}}]);
//# sourceMappingURL=246.867109e0.js.map