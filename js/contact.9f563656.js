(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact"],{1681:function(t,e,i){},"2db4":function(t,e,i){"use strict";var a=i("ade3"),n=(i("a9e3"),i("caad"),i("ca71"),i("8dd9")),s=i("a9ad"),r=i("7560"),o=i("f2e7"),c=i("fe6c"),u=i("58df"),l=i("80d2"),d=i("d9bd");e["a"]=Object(u["a"])(n["a"],s["a"],o["a"],Object(c["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:r["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,i=t.bottom,a=t.footer,n=t.insetFooter,s=t.left,r=t.right,o=t.top;return{paddingBottom:Object(l["g"])(i+a+n),paddingLeft:this.app?Object(l["g"])(s):void 0,paddingRight:this.app?Object(l["g"])(r):void 0,paddingTop:Object(l["g"])(e+o)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(d["e"])("auto-height",this),0==this.timeout&&Object(d["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(l["r"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(a["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(l["r"])(this)])},genWrapper:function(){var t=this,e=this.hasBackground?this.setBackgroundColor:this.setTextColor,i=e(this.color,{staticClass:"v-snack__wrapper",class:n["a"].options.computed.classes.call(this),style:n["a"].options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{mouseenter:function(){return window.clearTimeout(t.activeTimeout)},mouseleave:this.setTimeout}});return this.$createElement("div",i,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},"4bd4":function(t,e,i){"use strict";var a=i("5530"),n=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("159b"),i("7db0"),i("58df")),s=i("7e2b"),r=i("3206");e["a"]=Object(n["a"])(s["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"8ce9":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return c}));var a=i("b0af"),n=i("80d2"),s=Object(n["h"])("v-card__actions"),r=Object(n["h"])("v-card__subtitle"),o=Object(n["h"])("v-card__text"),c=Object(n["h"])("v-card__title");a["a"]},a844:function(t,e,i){"use strict";var a=i("5530"),n=(i("a9e3"),i("1681"),i("8654")),s=i("58df"),r=Object(s["a"])(n["a"]);e["a"]=r.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(a["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},n["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=n["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){n["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},b8fa:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mt-5"},[i("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(e){var a=e.attrs;return[i("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",a,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.text)+" ")]),i("v-row",{staticClass:"mx-auto"},[i("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",order:"3","order-sm":"2"}},[i("v-card",{staticClass:"pa-5 text-center",attrs:{height:"450px"}},[i("h2",{},[t._v("Contact Us:")]),i("div",{staticClass:"pt-15"},[i("span",{staticClass:"d-block",attrs:{title:"Kinplus Technologies"}},[t._v("Kinplus Technologies")]),i("span",{staticClass:"d-block",attrs:{title:"Adress"}},[t._v("2nd Floor, 68B Christore Building,")]),i("span",{staticClass:"d-block",attrs:{title:"Adress"}},[t._v("Opp. Ekiti State University Teaching Hospital")]),i("span",{staticClass:"d-block",attrs:{title:"Adress"}},[t._v("Similoluwa, Ado-Ekiti,")]),i("span",{staticClass:"d-block",attrs:{title:"Location"}},[t._v("Ekiti State, Nigeria.")]),i("span",{staticClass:"d-block"},[t._v("Email: info@kinplusgroup.com")]),i("span",{attrs:{title:"Kinplus Technologies, contact line."}},[t._v("Phone: +2347069718643, +2348071572767")])])])],1),i("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",order:"1"}},[i("v-card",[i("v-container",[t.showForm?i("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-text-field",{attrs:{label:"Name",required:"",rules:t.nameRules,counter:30,"prepend-icon":"mdi-account-circle"},model:{value:t.form.fullname,callback:function(e){t.$set(t.form,"fullname",e)},expression:"form.fullname"}}),i("v-text-field",{attrs:{label:"E-mail",rules:t.emailRules,required:"","prepend-icon":"mdi-email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),i("v-text-field",{attrs:{label:"Phone Number",counter:11,rules:t.phoneRules,hint:"Enter only numbers","prepend-icon":"mdi-cellphone",required:""},model:{value:t.form.phoneno,callback:function(e){t.$set(t.form,"phoneno",e)},expression:"form.phoneno"}}),i("v-text-field",{attrs:{label:"Subject",required:"","prepend-icon":"mdi-comment-text"},model:{value:t.form.subject,callback:function(e){t.$set(t.form,"subject",e)},expression:"form.subject"}}),i("v-textarea",{attrs:{rows:"2",label:"Message",required:"","prepend-icon":"mdi-comment-text"},model:{value:t.form.msg,callback:function(e){t.$set(t.form,"msg",e)},expression:"form.msg"}}),i("v-divider"),i("v-card-actions",[i("v-btn",{attrs:{to:"/",dark:""}},[t._v("Cancel")]),i("v-spacer"),i("v-btn",{attrs:{disabled:!t.valid,color:"blue",loading:t.loading},on:{click:t.submitForm}},[t._v("Submit")])],1)],1):t._e()],1)],1)],1)],1)],1)},n=[],s=i("dde5"),r={name:"Contact",data:function(){return{form:this.initializeForm(),snackbar:!1,loading:!1,text:"Message submitted successfully",valid:!0,showForm:!0,firstname:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=30||"Name must be less than 30 letters"}],phonenumber:"",phoneRules:[function(t){return t&&t.length<=11||"Number must be less 12 digit "}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}]}},methods:{submitForm:function(){var t=this;this.loading=!0,s["a"].post("/contacts",this.form).then((function(e){e.data.ok&&(t.loading=!1,t.snackbar=!0,t.form=t.initializeForm(),t.showForm=!1,t.$nextTick((function(){return t.showForm=!0})))}))},initializeForm:function(){return{id:"",fullname:"",email:"",phoneno:"",subject:"",msg:""}}}},o=r,c=i("2877"),u=i("6544"),l=i.n(u),d=i("8336"),h=i("b0af"),m=i("99d9"),f=i("62ad"),v=i("a523"),p=i("ce7e"),b=i("4bd4"),g=i("0fd9"),k=i("2db4"),w=i("2fa4"),_=i("8654"),x=i("a844"),B=Object(c["a"])(o,a,n,!1,null,null,null);e["default"]=B.exports;l()(B,{VBtn:d["a"],VCard:h["a"],VCardActions:m["a"],VCol:f["a"],VContainer:v["a"],VDivider:p["a"],VForm:b["a"],VRow:g["a"],VSnackbar:k["a"],VSpacer:w["a"],VTextField:_["a"],VTextarea:x["a"]})},ca71:function(t,e,i){},ce7e:function(t,e,i){"use strict";var a=i("5530"),n=(i("8ce9"),i("7560"));e["a"]=n["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(a["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(a["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=contact.9f563656.js.map