(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e1861f8"],{"19d8":function(e,t,s){},d2f0:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"header"},[e._v(" buyFans ")]),s("div",{staticClass:"content"},[s("div",{staticClass:"card"},[s("div",{staticClass:"iconBox"},[s("svg-icon",{staticClass:"icon",attrs:{"icon-class":"twitter"}})],1),s("el-form",{ref:"form",attrs:{model:e.form,"label-position":"top",rules:e.rules}},[s("el-form-item",{staticClass:"item",attrs:{label:e.$t("buyFans.category")}},[s("el-select",{staticStyle:{width:"100%"},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}},e._l(e.categoryList,(function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),s("el-form-item",{staticClass:"item",attrs:{label:e.$t("buyFans.service")}},[s("el-select",{staticStyle:{width:"100%"},model:{value:e.form.service,callback:function(t){e.$set(e.form,"service",t)},expression:"form.service"}},e._l(e.serviceList,(function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1)])])},c=[],i=s("efe2"),n=s("52c1"),l={zh:{buyFans:{category:"分类",service:"服务"}},en:{buyFans:{category:"Category",service:"Service"}}},r="buyFans",o={name:r,inject:["onCheckConnect"],components:{},data:function(){return{form:{category:1,service:1,link:"https://twitter.com/username",number:""},categoryList:[],serviceList:[],rules:{}}},computed:Object(i["a"])({},Object(n["b"])(["isConnect","account","isPc","language"])),created:function(){this.$i18n.getLocaleMessage("en")[r]||(this.$i18n.mergeLocaleMessage("en",l.en),this.$i18n.mergeLocaleMessage("zh",l.zh)),this.categoryList=[{label:"Twitter Fans",value:1},{label:"Telegram Fans",value:2}],this.serviceList=[{label:"Twitter - 🪙关注者｜加密货币活动｜速度1k/天｜稳定售后30天",value:1}]},mounted:function(){},methods:{}},u=o,f=(s("f924"),s("5d22")),m=Object(f["a"])(u,a,c,!1,null,"21b133da",null);t["default"]=m.exports},f924:function(e,t,s){"use strict";s("19d8")}}]);