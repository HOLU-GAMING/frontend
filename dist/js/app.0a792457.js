(function(){"use strict";var t={7483:function(t,e,a){var s=a(144),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-overlay",attrs:{id:"app"}},[a("v-app",[a("router-view")],1)],1)},i=[],n=a(1001),l={},o=(0,n.Z)(l,r,i,!1,null,null,null),c=o.exports,u=a(8345),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"justify-center":""}},[a("v-row",{attrs:{"no-gutters":"",align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-form",{ref:"form",staticClass:"pa-md-12 mx-lg-auto",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("h1",{staticClass:"pb-8 font-weight-bold"},[t._v("REGISTRO DE EQUIPOS")]),a("v-text-field",{attrs:{"prepend-inner-icon":"mdi-account-group-outline",rules:t.nameRules,required:"",placeholder:"Nombre del equipo"},model:{value:t.nameTeam,callback:function(e){t.nameTeam=e},expression:"nameTeam"}}),t.statusLoading?a("v-progress-circular",{attrs:{indeterminate:"",color:"success"}}):a("v-btn",{staticClass:"pa-6 font-weight-bold",attrs:{color:"success",block:"",dark:"",tile:"",elevation:"0"},on:{click:t.validate}},[t._v("CONTINUAR")])],1)],1)],1),a("DialogCreate",{attrs:{visible:t.dialog,data:t.nameTeam},on:{close:function(e){t.dialog=!1}}})],1)},p=[],m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{"max-width":"800px"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[s("v-card",{attrs:{color:"#1E2938",dark:""}},[s("v-card-title",{staticClass:"text-h6 font-weight-regular justify-space-between"},[s("span",[t._v(t._s(t.currentTitle))]),s("v-avatar",{staticClass:"subheading white--text",attrs:{color:"primary lighten-2",size:"24"},domProps:{textContent:t._s(t.step)}})],1),1===t.step?s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-btn",{staticClass:"mx-2",attrs:{disabled:1===t.players.length,dark:"",tile:"",color:"primary"},on:{click:t.removePlayer}},[t._v(" Eliminar un jugador "),s("v-icon",{attrs:{right:""}},[t._v(" mdi-minus ")])],1)],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-btn",{staticClass:"mx-2",attrs:{disabled:t.players.length===t.cantCaptain+t.cantPlayers+t.cantPlayersReplacements,dark:"",tile:"",color:"success"},on:{click:t.addPlayer}},[s("v-icon",{attrs:{left:""}},[t._v(" mdi-plus ")]),t._v(" Agregar un jugador ")],1)],1)],1):t._e(),s("v-window",{model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[s("v-window-item",{attrs:{value:1}},[s("v-card-text",[s("v-card",{staticClass:"overflow-y-auto",attrs:{color:"#1E2938",dark:"","max-height":"300"}},t._l(t.players,(function(e,a){return s("v-col",{key:a,attrs:{cols:12,id:"list-item-"+(a+1)}},[s("v-card-title",{staticClass:"text-h6 font-weight-regular justify-space-between"},[s("span",[t._v(t._s(a+1)+"º Jugador")])]),s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"12",md:"3"}},[s("v-text-field",{staticClass:"pa-md-4 mx-lg-auto",attrs:{label:"Nombres",rules:t.firstNameRules,required:""},model:{value:t.players[a].first_name,callback:function(e){t.$set(t.players[a],"first_name",e)},expression:"players[i].first_name"}})],1),s("v-col",{attrs:{cols:"12",md:"3"}},[s("v-text-field",{staticClass:"pa-md-4 mx-lg-auto",attrs:{label:"Apellidos",rules:t.lastNameRules,required:""},model:{value:t.players[a].last_name,callback:function(e){t.$set(t.players[a],"last_name",e)},expression:"players[i].last_name"}})],1),s("v-col",{attrs:{cols:"12",md:"3"}},[s("v-text-field",{staticClass:"pa-md-4 mx-lg-auto",attrs:{label:"Nick",rules:t.nickNameRules,required:""},model:{value:t.players[a].nick_name,callback:function(e){t.$set(t.players[a],"nick_name",e)},expression:"players[i].nick_name"}})],1),s("v-col",{attrs:{cols:"12",md:"3"}},[s("v-text-field",{staticClass:"pa-md-4 mx-lg-auto",attrs:{label:"CI",rules:t.dniNameRules,required:""},model:{value:t.players[a].dni,callback:function(e){t.$set(t.players[a],"dni",e)},expression:"players[i].dni"}})],1)],1),s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{staticClass:"pa-md-4 mx-lg-auto",attrs:{label:"Teléfono",rules:t.phoneRules,required:""},model:{value:t.players[a].phone_number,callback:function(e){t.$set(t.players[a],"phone_number",e)},expression:"players[i].phone_number"}})],1),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{staticClass:"pa-md-4 mx-lg-auto",attrs:{label:"Correo",rules:t.emailRules,required:""},model:{value:t.players[a].email,callback:function(e){t.$set(t.players[a],"email",e)},expression:"players[i].email"}})],1),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-menu",{ref:"menu",refInFor:!0,attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[s("v-text-field",t._g(t._b({attrs:{label:"Fecha de nacimiento","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.players[a].date_birth,callback:function(e){t.$set(t.players[a],"date_birth",e)},expression:"players[i].date_birth"}},"v-text-field",i,!1),r))]}}],null,!0),model:{value:t.players[a].menu,callback:function(e){t.$set(t.players[a],"menu",e)},expression:"players[i].menu"}},[s("v-date-picker",{attrs:{max:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),min:"1950-01-01"},on:{change:function(e){return t.$refs.menu[a].save(t.players[a].activePicker)}},model:{value:t.players[a].date_birth,callback:function(e){t.$set(t.players[a],"date_birth",e)},expression:"players[i].date_birth"}})],1)],1)],1)],1)})),1),s("span",{staticClass:"text-caption white--text text--darken-1"},[t._v(" Enviaremos un correo para confirmar la participación de cada participante ")])],1)],1),s("v-window-item",{attrs:{value:2}},[s("v-card-text",[s("v-card",{staticClass:"overflow-y-auto",attrs:{color:"#1E2938",dark:"","max-height":"300"}},[s("v-row",{attrs:{"no-gutters":""}},t._l(t.players,(function(e,r){return s("v-col",{key:r,attrs:{cols:"12",md:12/t.players.length}},[s("v-card",{attrs:{color:"#1E2938",dark:""}},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"12",md:"3"}},[s("v-card-title",{staticClass:"text-h5 justify-center",staticStyle:{height:"100px",position:"relative"},attrs:{"primary-title":""}},[s("v-avatar",{attrs:{size:"100"}},[s("v-img",{attrs:{src:a(8412),height:"150px",width:"150px"}})],1)],1)],1)],1),s("v-card-title",{staticClass:"text-h5 justify-center"},[t._v(" "+t._s(t.players[r].first_name)+" ")]),s("v-card-actions",[s("v-combobox",{attrs:{items:t.itemsRol,label:"Rol"},model:{value:t.players[r].rol,callback:function(e){t.$set(t.players[r],"rol",e)},expression:"players[i].rol"}})],1)],1)],1)})),1)],1),s("span",{staticClass:"text-caption white--text text--darken-1"},[t._v(" Recuerda que solo puede ver "+t._s(t.cantCaptain)+" Capitan, "+t._s(t.cantPlayers)+" Jugadores y "+t._s(t.cantPlayersReplacements)+" Sustituto ")])],1)],1),s("v-window-item",{attrs:{value:3}},[s("v-card-text",[s("v-row",{attrs:{"no-gutters":"",align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-card-title",{staticClass:"text-h5 justify-center",staticStyle:{height:"280px",position:"relative"},attrs:{"primary-title":""}},[s("v-avatar",{attrs:{size:"200"}},[t.imageUrl?s("v-img",{attrs:{src:t.imageUrl,height:"150px",width:"150px"}}):s("v-img",{attrs:{src:a(633),height:"250px",width:"250px"}})],1),s("v-btn",{attrs:{color:"pink",dark:"",small:"",absolute:"",right:"",fab:""},on:{click:function(e){return t.$refs.image.click()}}},[s("input",{ref:"image",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFilePickedOne}}),s("v-icon",[t._v("mdi-plus")])],1)],1)],1)],1),s("h3",{staticClass:"text-h6 font-weight-light mb-2"},[t._v(" Ingresa un logo que identifique a tu equipo ")]),s("span",{staticClass:"text-caption white--text text--darken-1"},[t._v(" Bienvenido a HoluGaming ")])],1)],1)],1),s("v-divider"),t.stateLoading?s("v-progress-circular",{attrs:{indeterminate:"",color:"success"}}):s("v-card-actions",[s("v-btn",{attrs:{disabled:1===t.step,text:""},on:{click:function(e){t.step--}}},[t._v(" Atras ")]),s("v-spacer"),t.step<3?s("v-btn",{attrs:{disabled:t.stateBtn,color:"primary",depressed:""},on:{click:function(e){return t.nextStep()}}},[t._v(" Siguiente ")]):s("v-btn",{attrs:{color:"success",depressed:""},on:{click:function(e){return t.suscribe()}}},[t._v(" Registrarme ")])],1)],1)],1)},h=[],g={data:()=>({stateLoading:!1,msgError:"",position:"top-right",indexItem:0,imageName:"",imageUrl:"",imageFile:"",cantPlayersReplacements:2,cantPlayers:4,cantCaptain:1,step:1,players:[],firstNameRules:[t=>!!t||"El nombre es requerido"],lastNameRules:[t=>!!t||"El apellido es requerido"],nickNameRules:[t=>!!t||"El nick es requerido"],dniNameRules:[t=>!!t||"El documento de identidad es requerido"],phoneRules:[t=>10!==Number(t)&&20!==Number(t)||"El númoero de telefono es requerido"],emailRules:[t=>!!t||"El Correo es requerido",t=>/.+@.+/.test(t)||"El Correo es requerido"],itemsRol:["Capitan","Jugador","Sustituto"]}),props:["visible","nameTeam"],computed:{getEndDate(){return this.dateNow.toISOString().slice(0,10)},getYearMin(){var t=new Date(this.dateNow.getFullYear()-1,this.dateNow.getMonth(),this.dateNow.getDate());return t.toISOString().slice(0,10)},stateBtn(){return 1===this.step?this.players.length!=this.cantCaptain+this.cantPlayers+this.cantPlayersReplacements||!this.stateBtnStep1:!this.stateBtnStep2},stateBtnStep1(){let t=!1;for(let e=0;e<this.players.length;e++){if(!(this.players[e].first_name.length>0))return t=!1,t;if(!(this.players[e].last_name.length>0))return t=!1,t;if(!(this.players[e].nick_name.length>0))return t=!1,t;if(!(this.players[e].dni.length>0))return t=!1,t;if(!(this.players[e].phone_number.length>0))return t=!1,t;if(!(this.players[e].email.length>0))return t=!1,t;if(!(this.players[e].date_birth.length>0))return t=!1,t;t=!0}return t},stateBtnStep2(){let t=!1,e=0,a=0,s=0;for(let r=0;r<this.players.length;r++)"Capitan"==this.players[r].rol&&e++,"Jugador"==this.players[r].rol&&a++,"Sustituto"==this.players[r].rol&&s++,e==this.cantCaptain&&a==this.cantPlayers&&s==this.cantPlayersReplacements&&(t=!0);return t},show:{get(){return this.visible},set(t){t||this.$emit("close")}},currentTitle(){switch(this.step){case 1:return"Crear Jugadores";case 2:return"Ajustes de jugadores";default:return"Ajustes del equipo"}}},created(){this.addPlayer()},methods:{addErrorNotification(){this.$toast.error(this.msgError,{position:this.position,timeout:6e3,closeOnClick:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0})},onFilePickedOne(t){const e=t.target.files;if(void 0!==e[0]){if(this.imageName=e[0].name,this.imageName.lastIndexOf(".")<=0)return;const t=new FileReader;t.readAsDataURL(e[0]),t.addEventListener("load",(()=>{this.imageUrl=t.result,this.imageFile=e[0]}))}else this.imageName="",this.imageFile="",this.imageUrl=""},addPlayer(){this.players.push({first_name:"Moises",last_name:"Ochoa",nick_name:"mos123es22"+this.players.length,dni:"831291232215LP"+this.players.length,phone_number:"7321232735766"+this.players.length,email:"moi22123sic.mo@gmail.com"+this.players.length,date_birth:"2022-05-04",menu:!1,rol:""}),this.players.length>1&&setTimeout((()=>{document.getElementById("list-item-"+this.players.length).scrollIntoView()}),50)},removePlayer(){this.players.pop()},validatePlayer(){},nextStep(){this.stateLoading=!0,this.$http.post("players/verify",this.players).then((()=>{this.stateLoading=!1,this.step++})).catch((t=>{this.stateLoading=!1,this.msgError=t.response.data.msg,this.addErrorNotification()}))},suscribe(){let t=new FormData;t.append("archivo",this.imageFile),t.append("name_team",this.nameTeam),t.append("players",JSON.stringify(this.players)),this.$http.post("form/create/team/players",t).then((t=>{console.log(t)})).catch((t=>{this.stateLoading=!1,this.msgError=t.response.data.msg,this.addErrorNotification()}))}}},v=g,f=(0,n.Z)(v,m,h,!1,null,null,null),y=f.exports,b={components:{DialogCreate:y},data:()=>({statusLoading:!1,msgError:"",position:"top-right",dialog:!1,nameTeam:"",valid:!0,nameRules:[t=>!!t||"El nombre es requerido"]}),computed:{},methods:{addErrorNotification(){this.$toast.error(this.msgError,{position:this.position,timeout:6e3,closeOnClick:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0})},validate(){this.$refs.form.validate()&&(this.statusLoading=!0,this.validateTeam(this.nameTeam.toUpperCase()))},validateTeam(t){this.$http.get("teams/name/"+t).then((()=>{console.log("errr"),this.msgError="El equipo "+t+" ya se encuentra registrado",this.statusLoading=!1,this.addErrorNotification()})).catch((()=>{this.statusLoading=!1,this.dialog=!0}))}}},x=b,_=(0,n.Z)(x,d,p,!1,null,null,null),k=_.exports;s["default"].use(u.Z);const w=[{path:"/",name:"registro",component:k}],C=new u.Z({mode:"history",base:"/",routes:w});var S=C,E=a(629);const P={currentSignUpStep:1,isSignInPanelActive:!1,formData:{username:null,password:null,firstName:null,lastName:null,email:null,address:null,phoneNumber:null}},N={setIsSignInPanelActive(t,e){t.isSignInPanelActive=e},setCurrentSignUpStep(t,e){t.currentSignUpStep=e},setFormData(t,e){t.formData={...t.formData,...e}}};var O=a(9669),R=a.n(O);const j={loginAndSaveToken(t){R().post("https://fake-url.com/api/auth",t).then((t=>{localStorage.setItem("auth_token",t.datatoken),S.push("/profile")})).catch((t=>{S.push("/profile")}))}},T={getIsSignInPanelActive:t=>t.isSignInPanelActive,getCurrentSignUpStep:t=>t.currentSignUpStep,getFormData:t=>t.formData},$={namespaced:!0,state:P,getters:T,mutations:N,actions:j};s["default"].use(E.ZP);const q=new E.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{authPageModule:$}});var I=a(5464),D=a.n(I);a(243);s["default"].use(D());var B=new(D())({icons:{iconfont:"mdi"},breakpoint:{thresholds:{xs:340,sm:540,md:800,lg:1280},scrollBarWidth:24},theme:{options:{customProperties:!0},themes:{dark:{primary:"#E71D36",success:"#0EBC73",background:"#07111E"}},dark:!0}}),L=(a(6981),a(1151));s["default"].use(L.ZP);const U=R().create({baseURL:"http://localhost:8080/api/"});s["default"].config.productionTip=!1,s["default"].prototype.$http=U,new s["default"]({vuetify:B,router:S,render:t=>t(c),store:q}).$mount("#app")},633:function(t,e,a){t.exports=a.p+"img/logoTeam.f717b35b.jpg"},8412:function(t,e,a){t.exports=a.p+"img/user.ead4e568.jpg"}},e={};function a(s){var r=e[s];if(void 0!==r)return r.exports;var i=e[s]={exports:{}};return t[s].call(i.exports,i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,s,r,i){if(!s){var n=1/0;for(u=0;u<t.length;u++){s=t[u][0],r=t[u][1],i=t[u][2];for(var l=!0,o=0;o<s.length;o++)(!1&i||n>=i)&&Object.keys(a.O).every((function(t){return a.O[t](s[o])}))?s.splice(o--,1):(l=!1,i<n&&(n=i));if(l){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[s,r,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,i,n=s[0],l=s[1],o=s[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(o)var u=o(a)}for(e&&e(s);c<n.length;c++)i=n[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(u)},s=self["webpackChunkholu_gaming"]=self["webpackChunkholu_gaming"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(7483)}));s=a.O(s)})();
//# sourceMappingURL=app.0a792457.js.map