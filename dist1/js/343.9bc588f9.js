"use strict";(self["webpackChunkliste_de_course"]=self["webpackChunkliste_de_course"]||[]).push([[343],{343:function(e,t,i){i.r(t),i.d(t,{default:function(){return Q}});var n=i(3396),l=i(9242),a=i(7139);const s=e=>((0,n.dD)("data-v-6fcc6959"),e=e(),(0,n.Cn)(),e),r=s((()=>(0,n._)("h1",null," Ma liste ",-1))),d={key:0},o={class:"list"},c={key:0},u={key:1},h={class:"add-form"},p=s((()=>(0,n._)("label",{for:"element"},null,-1))),g=["disabled"],w={key:0},_=s((()=>(0,n._)("p",null,"Entrez au moins une lettre",-1))),m=[_];function v(e,t,i,s,_,v){const b=(0,n.up)("ListElement"),y=(0,n.up)("SpinnerBtn"),f=(0,n.up)("LoaderView");return(0,n.wg)(),(0,n.iD)("section",null,[r,this.list?((0,n.wg)(),(0,n.iD)("div",d,[(0,n._)("div",o,[0==this.list.length?((0,n.wg)(),(0,n.iD)("div",c," Commencez en créant votre premier élément ! ")):((0,n.wg)(),(0,n.iD)("div",u,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(this.newElements,(e=>((0,n.wg)(),(0,n.j4)(b,{key:e.id,title:e},null,8,["title"])))),128)),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(this.list,(e=>((0,n.wg)(),(0,n.j4)(b,{key:e.id,title:e.title.rendered,urgence:this.getTheUrgence(e),id:e.id,onElementDeleted:this.handleRemoveFromList},null,8,["title","urgence","id","onElementDeleted"])))),128))]))]),(0,n._)("div",h,[(0,n._)("form",{onSubmit:t[2]||(t[2]=(0,l.iM)(((...e)=>this.handleFormSubmit&&this.handleFormSubmit(...e)),["prevent"]))},[p,(0,n.wy)((0,n._)("input",{type:"text",id:"element","onUpdate:modelValue":t[0]||(t[0]=e=>this.newElement=e),placeholder:"Nouvel élément"},null,512),[[l.nr,this.newElement]]),(0,n._)("button",{class:(0,a.C_)(["button",{hide:this.disableButton}]),disabled:this.disableButton},(0,a.zw)(this.buttonContent),11,g),this.disableButton?((0,n.wg)(),(0,n.j4)(y,{key:0})):(0,n.kq)("",!0),this.newCategoryAppear?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:1,type:"text",id:"element","onUpdate:modelValue":t[1]||(t[1]=e=>this.newElement=e),placeholder:"Nouvelle rubrique"},null,512)),[[l.nr,this.newElement]]):(0,n.kq)("",!0)],32),this.engouthCaracteres?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",w,m))])])):((0,n.wg)(),(0,n.j4)(f,{key:1}))])}var b=i(6265),y=i.n(b),f=i(7247);const C={base_url:"https://listeback.raffiskender.com/wp-json/",async findAll(){const e=f.Z.get("userData"),t=await y().get(this.base_url+"wp/v2/list_element?author="+e.user_id+"&status=private&_embed=true&per_page=100",{headers:{Authorization:"Bearer "+e.token}}).catch((function(){return{data:null}}));return t.data},async create(e){const t=f.Z.get("userData"),i=await y().post(this.base_url+"wp/v2/list_element",{title:e,status:"private",classement:""},{headers:{Authorization:"Bearer "+t.token}}).catch((function(){return{data:null}}));return i.data},async patch(e,t){const i=f.Z.get("userData"),n=await y().patch(this.base_url+"wp/v2/list_element/"+e,{title:t},{headers:{Authorization:"Bearer "+i.token}}).catch((function(){return{data:null}}));return console.log(n.data),n.data},async delete(e){const t=f.Z.get("userData");return await y()["delete"](this.base_url+"wp/v2/list_element/"+e,{headers:{Authorization:"Bearer "+t.token}}).catch((function(){return!1})),!0}};var k=C;const D={class:"container"},T=["innerHTML"];function M(e,t,i,s,r,d){return(0,n.wg)(),(0,n.iD)("div",D,[(0,n._)("p",{class:(0,a.C_)(["title",{hide:this.editMode}]),onClick:t[0]||(t[0]=(...e)=>d.handleSwitchToEditMode&&d.handleSwitchToEditMode(...e)),innerHTML:this.cleanMessage(this.initialTitle)},null,10,T),(0,n._)("form",{onSubmit:t[3]||(t[3]=(0,l.iM)((e=>d.handleSave({id:i.id})),["prevent"]))},[(0,n.wy)((0,n._)("input",{ref:"myInput",class:(0,a.C_)({hide:!this.editMode}),type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>this.newTitle=e),onBlur:t[2]||(t[2]=e=>d.handleSave({id:i.id}))},null,34),[[l.nr,this.newTitle]])],32),(0,n._)("div",null,[(0,n._)("button",{class:(0,a.C_)(["delete",{hide:this.editMode}]),onClick:t[4]||(t[4]=e=>d.handleDelete({id:i.id}))},"X",2),(0,n._)("button",{class:(0,a.C_)({hide:!this.editMode}),onClick:t[5]||(t[5]=e=>d.handleSave({id:i.id}))},"Enregistrer",2),(0,n._)("button",{class:(0,a.C_)({hide:!this.editMode}),onClick:t[6]||(t[6]=(...e)=>d.handleCancelModify&&d.handleCancelModify(...e))},"Annuler",2)])])}var E={props:{title:String,rubrique:String,urgence:String,id:Number},data(){return{editMode:!1,initialTitle:this.title,newTitle:this.cleanMessage(this.title)}},methods:{cleanMessage(e){return this.$sanitize(e)},async handleDelete(e){await k["delete"](e.id),this.$emit("element-deleted",e.id)},handleSwitchToEditMode(){this.editMode=!0,this.$nextTick((()=>{this.$refs.myInput.focus()}))},BackToDisplayMode(){this.editMode=!1},handleCancelModify(){this.newTitle=this.initialTitle,this.BackToDisplayMode()},async handleSave(e){this.initialTitle!==this.newTitle&&(await k.patch(e.id,this.newTitle),this.initialTitle=this.newTitle),""===this.newTitle&&this.handleDelete(e),this.BackToDisplayMode()}}},S=i(89);const A=(0,S.Z)(E,[["render",M],["__scopeId","data-v-7bc8f6e2"]]);var B=A;const L=e=>((0,n.dD)("data-v-34275ed9"),e=e(),(0,n.Cn)(),e),z={class:"loading"},Z=L((()=>(0,n._)("div",{class:"loading__circle loading__circle--color-blue"},null,-1))),j=L((()=>(0,n._)("div",{class:"loading__circle loading__circle--color-red"},null,-1))),V=L((()=>(0,n._)("div",{class:"loading__circle loading__circle--color-yellow"},null,-1))),q=L((()=>(0,n._)("div",{class:"loading__circle loading__circle--color-green"},null,-1))),I=[Z,j,V,q];function F(e,t,i,l,a,s){return(0,n.wg)(),(0,n.iD)("div",z,I)}var U={name:"LoadingView"};const x=(0,S.Z)(U,[["render",F],["__scopeId","data-v-34275ed9"]]);var H=x;const $=e=>((0,n.dD)("data-v-0c1ade7a"),e=e(),(0,n.Cn)(),e),N={disabled:""},R=$((()=>(0,n._)("div",null,null,-1))),K=[R];function P(e,t,i,l,a,s){return(0,n.wg)(),(0,n.iD)("button",N,K)}var Y={name:"SpinnerBtn"};const O=(0,S.Z)(Y,[["render",P],["__scopeId","data-v-0c1ade7a"]]);var X=O,G={name:"ListView",components:{ListElement:B,LoaderView:H,SpinnerBtn:X},data(){return{list:null,newElements:[],newElement:"",allRubriques:"",categoryAppear:!1,newCategoryAppear:!1,engouthCaracteres:!0,disableButton:!1,buttonContent:"Ajouter"}},async created(){this.list=await k.findAll();for(const e of this.list)e.title.rendered=e.title.rendered.replace("Private: ","")},methods:{getTheUrgence(e){return 0===e.urgence.length?"":e._embedded["wp:term"][1][0].name},handleRemoveFromList(e){this.list=this.list.filter((t=>t.id!==e))},async handleFormSubmit(){if(this.engouthCaracteres=!0,this.newElement.length>1){if(this.disableButton=!0,this.buttonContent="",await k.create(this.newElement),this.list=await k.findAll(),null!=this.list)for(const e of this.list)e.title.rendered=e.title.rendered.replace("Private: ","");this.newElement="",this.disableButton=!1,this.buttonContent="Ajouter"}else this.engouthCaracteres=null},handleToggleCategory(){this.categoryAppear=!this.categoryAppear},handleOnChange(e){const t=e.currentTarget;"new"===t.value?this.newCategoryAppear=!0:this.newCategoryAppear=!1}}};const J=(0,S.Z)(G,[["render",v],["__scopeId","data-v-6fcc6959"]]);var Q=J}}]);
//# sourceMappingURL=343.9bc588f9.js.map