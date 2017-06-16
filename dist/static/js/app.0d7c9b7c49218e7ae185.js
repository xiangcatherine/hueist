webpackJsonp([1],Array(35).concat([function(t,e,s){function n(t){s(95)}var a=s(0)(s(45),s(119),n,"data-v-46483160",null);t.exports=a.exports},function(t,e,s){"use strict";var n=s(22),a=s(21),o=s(106),i=s.n(o),r=s(35),c=s.n(r),u=s(112),l=s.n(u),d=s(109),p=s.n(d);n.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Home",component:i.a},{path:"/choose",name:"Choose",component:c.a},{path:"/view-history",name:"viewHistory",component:l.a},{path:"/settings",name:"Settings",component:p.a}]})},,,function(t,e,s){function n(t){s(91),s(90)}var a=s(0)(s(42),s(115),n,null,null);t.exports=a.exports},,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var e=s(37),n=s.n(e),a=s(22),o=s(40),i=s(21),r=s(39),c=s.n(r),u=s(36),l=s(38),d=s.n(l);a.a.config.productionTip=!1,a.a.use(o.a),a.a.use(i.a),a.a.use(d.a,{timeout:2e3});var p=new o.a.Store({state:{user:{email:"",authToken:"",id:"",greeting:""}},getters:{isAuthenticated:function(t){return""!==t.user.authToken},getToken:function(t){return t.user.authToken},checkMessage:function(t){return""!==t.user.greeting},checkMessageNull:function(t){return null==t.user.greeting},getMessage:function(t){return t.user.greeting}},mutations:{addWebToken:function(t,e){t.user.authToken=e.user.token,t.user.id=e.user.id,t.user.greeting=e.user.greeting},removeWebToken:function(t){t.user.authToken=""},changeMessage:function(t,e){t.user.greeting=e.user.greeting}},actions:{logIn:function(e,s){return new n.a(function(n,a){t.ajax({url:"https://hueist-backend.herokuapp.com/sign-in",type:"POST",data:{email:s.email,password:s.password},success:function(t){e.commit("addWebToken",t),n(t)},error:function(t){a(t)}})})},updateGreeting:function(e,s){return new n.a(function(n,a){t.ajax({url:"https://hueist-backend.herokuapp.com/users/"+e.state.user.id+"/change-greeting",type:"PATCH",headers:{Authorization:"Token token="+e.state.user.authToken},data:{user:{greeting:s.greeting}},success:function(t){e.commit("changeMessage",t),n(t)},error:function(t){a(t)}})})},changePassword:function(e,s){return new n.a(function(n,a){t.ajax({url:"https://hueist-backend.herokuapp.com/change-password/"+e.state.user.id,type:"PATCH",data:{passwords:{old:s.old,new:s.new}},headers:{Authorization:"Token token="+e.state.user.authToken},success:function(t){n(t)},error:function(t){a(t)}})})},logOut:function(e){t.ajax({url:"https://hueist-backend.herokuapp.com/sign-out/"+e.state.user.id,type:"DELETE",headers:{Authorization:"Token token="+e.state.user.authToken},success:function(){e.commit("removeWebToken")},error:function(){e.commit("removeWebToken")}})}}});new a.a({el:"#app",router:u.a,template:"<App/>",components:{App:c.a},store:p})}.call(e,s(3))},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(105),a=s.n(n);e.default={name:"app",components:{appHeader:a.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ChangeGreeting",data:function(){return{greeting:""}},methods:{updateGreeting:function(){var t=this;t.$store.dispatch("updateGreeting",{greeting:this.greeting}).then(function(){t.$toaster.success("gretting updated")}).catch(function(){t.$toaster.error("greeting couldn't be updated")})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){e.default={name:"ChangePassword",data:function(){return{old:"",password:""}},methods:{closeModal:function(){t(".modal").css("display","none")},changePassword:function(){var t=this;t.$store.dispatch("changePassword",{old:this.old,new:this.password}).then(function(){t.$toaster.success("password updated")}).catch(function(){t.$toaster.error("password couldn't be updated")})}}}}.call(e,s(3))},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var n=s(104),a=s.n(n),o=s(111),i=s.n(o);e.default={name:"choose",data:function(){return{hueType:"neutral",chosenColorId:"",greeting:""}},components:{appGrid:a.a,appToggle:i.a},computed:{checkMessage:function(){return this.$store.getters.checkMessage},checkMessageNull:function(){return this.$store.getters.checkMessageNull},getMessage:function(){return this.$store.getters.getMessage}},methods:{toggleGrid:function(t){this.hueType=t},chooseColor:function(t){this.chosenColorId=t},createMood:function(){var e={mood:{color_id:this.chosenColorId}},s=this;t.ajax({url:"https://hueist-backend.herokuapp.com/moods",method:"POST",headers:{Authorization:"Token token="+this.$store.state.user.authToken},data:e,success:function(){s.$toaster.success("nice")},error:function(){s.$toaster.error("couldn't save mood - try again")}})}}}}.call(e,s(3))},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"grid",props:["hueType"],data:function(){return{palette:{warm:{1:"#C71B20",2:"#DA4120",3:"#EB6A28",4:"#FF9A2D",5:"#FCBE2E",6:"#FFE025",7:"#D21B78",8:"#EB1F84",9:"#FF5D9F"},neutral:{10:"#C5A0CF",11:"#A0A8C9",12:"#9ACCC2",13:"#B0D4A2",14:"#E3DAAB",15:"#FADAA1",16:"#ECA7B6",17:"#E5B1A9",18:"#F7CDA3"},cool:{19:"#C130E3",20:"#8034DE",21:"#3A39ED",22:"#3D8AFF",23:"#33C4EF",24:"#32E3BE",25:"#289C18",26:"#1FBF43",27:"#25D980"}},currSelected:""}},computed:{currPalette:function(){switch(this.hueType){case"warm":return this.$emit("colorId",""),this.palette.warm;case"neutral":return this.$emit("colorId",""),this.palette.neutral;case"cool":return this.$emit("colorId",""),this.palette.cool}}},methods:{isSelected:function(t){return this.currSelected===t},setColor:function(t){this.currSelected=t.target.id,this.$emit("colorId",t.target.id)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var n=s(107),a=s.n(n),o=s(110),i=s.n(o);e.default={components:{appLogIn:a.a,appSignUp:i.a},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}},methods:{logOut:function(){this.$store.dispatch("logOut"),this.$router.push({name:"Home"})},showSignUp:function(){t(".sign-up-modal").css("display","block")},showLogIn:function(){t(".log-in-modal").css("display","block")},goToSettings:function(){this.$router.push({name:"Settings"})}}}}.call(e,s(3))},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(35),a=s.n(n);e.default={name:"home",components:{appChoose:a.a},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){e.default={name:"logIn",data:function(){return{email:"",password:""}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}},methods:{logIn:function(){var e=this;e.$store.dispatch("logIn",{email:this.email,password:this.password}).then(function(t){e.$router.push({name:"Choose"})}).then(t(".sign-in-input").val("")).catch(function(){e.$toaster.error("login failed - try again")})},closeModal:function(){t(".modal").css("display","none")}}}}.call(e,s(3))},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"radio-button",props:["name","label","value"],computed:{paletteValue:{get:function(){return this.value},set:function(){this.$emit("select",this.label)}}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var n=s(103),a=s.n(n),o=s(102),i=s.n(o);e.default={name:"Settings",components:{appChangePassword:a.a,appChangeGreeting:i.a},data:function(){return{old:"",password:""}},methods:{goToMoodHistory:function(){this.$router.push({name:"viewHistory"})},clearHistory:function(){var e=this.$store.state.user.authToken,s=this;t.ajax({url:"https://hueist-backend.herokuapp.com/moods",type:"DELETE",headers:{Authorization:"Token token="+e},success:function(){s.$toaster.success("history cleared")},error:function(){s.$toaster.error("history couldn't be cleared")}})}}}}.call(e,s(3))},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){e.default={name:"signUp",data:function(){return{email:"",password:"",passwordAgain:""}},computed:{doPasswordsMatch:function(){return this.password===this.passwordAgain},checkforPassword:function(){return this.password.length>0&&this.passwordAgain.length>0}},methods:{signUp:function(){var e={email:this.email,password:this.password,passwordAgain:this.passwordAgain},s=this;t.ajax({url:"https://hueist-backend.herokuapp.com/sign-up",method:"POST",data:e,success:function(){s.closeModal(),s.$toaster.success("all set")},error:function(){s.$toaster.error("sign up invalid - try again")}})},closeModal:function(){t(".modal").css("display","none")}}}}.call(e,s(3))},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(108),a=s.n(n);e.default={name:"toggle",components:{radioButton:a.a},data:function(){return{currHueType:"neutral"}},methods:{getPalette:function(t){this.currHueType=t,this.$emit("radioToggled",t)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){e.default={name:"viewHistory",data:function(){return{moods:""}},computed:{colors:function(){for(var t=[],e=0;e<this.moods.length;e++)t.push(this.moods[e].color_value);return t}},methods:{resizeColors:function(){}},beforeMount:function(){var e=this;t.ajax({url:"https://hueist-backend.herokuapp.com/moods",method:"GET",headers:{Authorization:"Token token="+this.$store.state.user.authToken}}).then(function(t){e.moods=t.moods}).catch(function(){e.$toaster.error("couldn't load timeline")})}}}.call(e,s(3))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,s){function n(t){s(97)}var a=s(0)(s(43),s(121),n,"data-v-4f49bf42",null);t.exports=a.exports},function(t,e,s){function n(t){s(101)}var a=s(0)(s(44),s(125),n,"data-v-b6660eb8",null);t.exports=a.exports},function(t,e,s){function n(t){s(99)}var a=s(0)(s(46),s(123),n,"data-v-7506e13f",null);t.exports=a.exports},function(t,e,s){function n(t){s(96)}var a=s(0)(s(47),s(120),n,"data-v-4bc7ae74",null);t.exports=a.exports},function(t,e,s){function n(t){s(94)}var a=s(0)(s(48),s(118),n,"data-v-4516d658",null);t.exports=a.exports},function(t,e,s){function n(t){s(93)}var a=s(0)(s(49),s(117),n,"data-v-450dc760",null);t.exports=a.exports},function(t,e,s){function n(t){s(98)}var a=s(0)(s(50),s(122),n,"data-v-662c24b8",null);t.exports=a.exports},function(t,e,s){function n(t){s(100)}var a=s(0)(s(51),s(124),n,"data-v-aa1179c8",null);t.exports=a.exports},function(t,e,s){function n(t){s(89)}var a=s(0)(s(52),s(114),n,"data-v-0f3165f1",null);t.exports=a.exports},function(t,e,s){function n(t){s(92)}var a=s(0)(s(53),s(116),n,"data-v-316e460d",null);t.exports=a.exports},function(t,e,s){function n(t){s(88)}var a=s(0)(s(54),s(113),n,"data-v-0aeb0874",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"history"},[t._l(t.colors,function(t){return[s("div",{staticClass:"colorCell",style:{background:t}})]})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal"},[s("div",{staticClass:"modal-content"},[s("span",{staticClass:"close",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.closeModal(e)}}},[t._v("×")]),t._v(" "),s("form",{staticClass:"form"},[s("div",{staticClass:"fieldset"},[s("label",{staticClass:"email",attrs:{for:"sign-up-email"}},[t._v("email")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"sign-up-input",attrs:{type:"email",id:"sign-up-email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"fieldset"},[s("label",{staticClass:"password",attrs:{for:"sign-up-password"}},[t._v("password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"sign-up-input",attrs:{id:"sign-up-password",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"fieldset"},[s("label",{staticClass:"password",attrs:{for:"sign-up-password-again"}},[t._v("password again")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordAgain,expression:"passwordAgain"}],staticClass:"sign-up-input",attrs:{id:"sign-up-password-again",type:"password"},domProps:{value:t.passwordAgain},on:{input:function(e){e.target.composing||(t.passwordAgain=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"fieldset"},[t.doPasswordsMatch&&t.checkforPassword?s("button",{on:{click:function(e){e.preventDefault(),t.signUp()}}},[t._v("sign up")]):t._e()]),t._v(" "),s("span",{staticClass:"error-message"})])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("app-header"),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"toggle-container"},[s("div",{staticClass:"toggle"},[s("radio-button",{staticClass:"radio-button",attrs:{name:"gridType",label:"warm",value:t.currHueType},on:{select:t.getPalette}}),t._v(" "),s("radio-button",{staticClass:"radio-button",attrs:{name:"gridType",label:"neutral",value:t.currHueType},on:{select:t.getPalette}}),t._v(" "),s("radio-button",{staticClass:"radio-button",attrs:{name:"gridType",label:"cool",value:t.currHueType},on:{select:t.getPalette}})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal"},[s("div",{staticClass:"modal-content"},[s("span",{staticClass:"close",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.closeModal(e)}}},[t._v("×")]),t._v(" "),s("form",{staticClass:"form",attrs:{id:"sign-in-form"}},[s("div",{staticClass:"fieldset"},[s("label",{staticClass:"email",attrs:{for:"signin-email"}},[t._v("email")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"sign-in-input",attrs:{id:"signin-email",type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"fieldset"},[s("label",{staticClass:"password",attrs:{for:"signin-password"}},[t._v("password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"sign-in-input",attrs:{id:"signin-password",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"fieldset"},[s("button",{on:{click:function(e){e.preventDefault(),t.logIn()}}},[t._v("log in")])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("track your mood"),s("br"),s("br"),t._v("in full color")]),t._v(" "),s("div",{staticClass:"jumping-squares"},[s("div",{staticClass:"jumping-square one"}),t._v(" "),s("div",{staticClass:"jumping-square two"}),t._v(" "),s("div",{staticClass:"jumping-square three"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{attrs:{value:t.chosenColorId}},[s("div",{staticClass:"inline"},[s("app-grid",{attrs:{"hue-type":t.hueType},on:{colorId:t.chooseColor}})],1),t._v(" "),s("div",{staticClass:"inline message"},[t.checkMessage?s("h1",[t._v(t._s(t.getMessage))]):t._e(),t._v(" "),t.checkMessageNull?s("h1",[t._v("how are you?")]):t._e(),t._v(" "),s("app-toggle",{on:{radioToggled:t.toggleGrid}}),t._v(" "),s("div",[s("button",{class:{visible:t.chosenColorId},on:{click:function(e){e.preventDefault(),t.createMood()}}},[t._v("submit")]),s("br")])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",[s("div",[s("transition",{attrs:{name:"fade"}},[t.isAuthenticated?[s("a",{staticClass:"logo",attrs:{href:""},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$router.push("Choose")}}},[t._v("hueist")])]:[s("a",{staticClass:"logo",attrs:{href:""},on:{click:function(t){t.stopPropagation(),t.preventDefault()}}},[t._v("hueist")])]],2)],1),t._v(" "),s("div",{staticClass:"right"},[t.isAuthenticated?[s("a",{staticClass:"settings-link",attrs:{href:""},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.goToSettings()}}},[t._v("settings")]),t._v(" "),s("a",{staticClass:"log-out-link",attrs:{href:""},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.logOut()}}},[t._v("log out")])]:t._e(),t._v(" "),t.isAuthenticated?t._e():[s("app-sign-up",{staticClass:"sign-up-modal"}),t._v(" "),s("app-log-in",{staticClass:"log-in-modal"}),t._v(" "),s("a",{staticClass:"sign-up-link",attrs:{href:""},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.showSignUp(e)}}},[t._v("sign up")]),t._v(" "),s("a",{staticClass:"log-in-link",attrs:{href:""},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.showLogIn(e)}}},[t._v("log in")])]],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h2",[t._v("change greeting")]),t._v(" "),s("form",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.greeting,expression:"greeting"}],staticClass:"change-greeting-input",attrs:{type:"text",placeholder:"the world is my oyster"},domProps:{value:t.greeting},on:{input:function(e){e.target.composing||(t.greeting=e.target.value)}}}),t._v(" "),s("button",{staticClass:"change-greeting-submit",on:{click:function(e){e.preventDefault(),t.updateGreeting()}}},[t._v("\n      do it\n    ")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.paletteValue,expression:"paletteValue"}],attrs:{type:"radio",name:t.name},domProps:{value:t.label,checked:t._q(t.paletteValue,t.label)},on:{__c:function(e){t.paletteValue=t.label}}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid"},[t._l(t.currPalette,function(e,n,a){return[s("a",{staticClass:"gridCell",class:{selectedCell:t.isSelected(n)},style:{background:e},attrs:{href:"",id:n},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.setColor(e)}}})]})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"history"},[s("a",{staticClass:"view-history-link",attrs:{href:""},on:{click:function(e){e.preventDefault(),t.goToMoodHistory()}}},[t._v("\n      view timeline\n    ")]),t._v(" "),s("button",{staticClass:"clear-history-button",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.clearHistory()}}},[t._v("\n      clear history\n    ")])]),t._v(" "),s("div",[s("app-change-password",{staticClass:"app-change-password"})],1),t._v(" "),s("div",[s("app-change-greeting",{staticClass:"app-change-greeting"})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h2",[t._v("change password")]),t._v(" "),s("form",{staticClass:"form"},[s("div",{staticClass:"fieldset"},[s("label",{staticClass:"change-password",attrs:{for:"old-password"}},[t._v("old")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.old,expression:"old"}],staticClass:"change-password-input",attrs:{type:"password",id:"old-password"},domProps:{value:t.old},on:{input:function(e){e.target.composing||(t.old=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"fieldset"},[s("label",{staticClass:"change-password",attrs:{for:"new-password"}},[t._v("new")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"change-password-input",attrs:{id:"new-password",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),s("span",{staticClass:"error-message"})]),t._v(" "),s("div",{staticClass:"fieldset"},[s("button",{on:{click:function(e){e.preventDefault(),t.changePassword()}}},[t._v("do it")])])]),t._v(" "),s("div",{staticClass:"error-message"})])},staticRenderFns:[]}}]),[41]);
//# sourceMappingURL=app.0d7c9b7c49218e7ae185.js.map