(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-781e0f71"],{"0bd5":function(e,t,a){},"3c1a":function(e,t,a){},"8d42":function(e,t,a){"use strict";a("3c1a")},a9c0:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("SendSuccessDialog",{ref:"SendSuccessDialog",attrs:{"chain-name":e.chainName,link:e.blockTxurl+"/tx/"+e.blockHash}}),a("div",{staticClass:"content"},[a("NetworkError",{staticStyle:{"margin-bottom":"20px"}}),a("Card",{attrs:{"is-show-admin-btn":!1,title:e.chainName.toUpperCase()+" "+e.$t("route.chainRecord"),desc:e.$t("chainRecord.pageDesc")}},[a("div",{staticClass:"box-card"},[a("div",{staticClass:"stepBox"},[a("el-steps",{attrs:{space:200,active:e.stepActive,"process-status":"wait","finish-status":"success","align-center":!0}},[a("el-step",{attrs:{title:e.$t("chainRecord.step_1")}}),a("el-step",{attrs:{title:e.$t("chainRecord.step_2")}}),a("el-step",{attrs:{title:e.$t("chainRecord.step_3")}})],1)],1),a("el-form",{ref:"form",staticClass:"form",attrs:{"label-suffix":":",model:e.form,"label-width":"zh"===e.language?"100px":"140px","label-position":e.isPc?"right":"top",rules:e.rules}},[a("el-form-item",{style:"textAlign: "+(e.isPc?"left":"center"),attrs:{label:"Demo",prop:"demo"}},[a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{src:e.chainRecordDemoPic,"preview-src-list":[e.chainRecordDemoPic]}}),a("el-link",{staticClass:"link",attrs:{type:"primary",target:"_blank",href:"https://etherscan.io/tx/0xd239b01026c49b234d075e3d23a07efd1c3234239cfb440c0f90d5e84836fbe2"}},[e._v("Link")])],1),a("el-form-item",{attrs:{label:e.$t("chainRecord.desc"),prop:"desc"}},[a("el-input",{attrs:{type:"textarea",rows:8,placeholder:""},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),a("el-form-item",{attrs:{label:e.$t("chainRecord.eth_num"),prop:"eth_num"}},[a("el-input",{attrs:{type:"input"},model:{value:e.form.eth_num,callback:function(t){e.$set(e.form,"eth_num",t)},expression:"form.eth_num"}})],1),a("el-form-item",{style:"textAlign: "+(e.isPc?"left":"center"),attrs:{label:e.$t("chainRecord.receive_address"),prop:"receive_address"}},[e.isEdit?a("el-input",{style:"width: "+(e.isPc,"100%"),attrs:{clearable:"",placeholder:e.$t("chainRecord.receive_address_placeholder")},model:{value:e.form.receive_address,callback:function(t){e.$set(e.form,"receive_address",t)},expression:"form.receive_address"}}):a("span",{staticClass:"text"},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"certified"}}),e._v("CoinTool.App")],1),e.isEdit?a("div",{staticStyle:{display:"inline-block"}},[a("el-link",{staticClass:"edit",attrs:{type:"primary"},on:{click:function(t){e.isEdit=!1}}},[e._v(e._s(e.$t("chainRecord.cancelEdit")))]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"mini",type:"danger",plain:""},on:{click:e.onHacker}},[e._v(e._s(e.$t("chainRecord.hackers")))])],1):a("el-link",{staticClass:"edit",attrs:{type:"primary"},on:{click:function(t){e.isEdit=!0}}},[e._v(e._s(e.$t("chainRecord.edit")))])],1),a("el-form-item",{style:"textAlign: "+(e.isPc?"left":"center")},[a("el-button",{staticClass:"item-btn",attrs:{size:"medium",type:"primary",loading:2===e.stepActive},on:{click:e.onCreateRecord}},[e._v(" "+e._s(e.$t("chainRecord.createBtn"))+" ")])],1)],1)],1)])],1)],1)},c=[],r=a("4833"),i=a("efe2"),n=(a("6a61"),a("37de"),a("1e34"),a("b420")),o=a.n(n),l={zh:{chainRecord:{step_1:"填写上链信息",step_2:"等待打包上链",step_3:"完成",wallet:"钱包",desc:"内容",notEmpty:"不能为空",eth_num:"发送数量",contract_address:"合约地址",send_txidok:"信息已成功登记上区块链网络",loading_text:"区块链网络正在打包您的信息，请耐心等待.....",cancelOperation:"您取消了此次上链操作",cancel:"Close",createBtn:"立即创建",pageDesc:"去中心化、不可更改、永久记录",receive_address:"\b接收地址",receive_address_placeholder:"请输入接收地址",addressError:"地址格式错误",edit:"修改",cancelEdit:"取消",hackers:"Poly Network 黑客地址(ETH)",coffee:"请CoinTool喝杯咖啡",thank_coffee:"谢谢您捐助的咖啡☕️"}},en:{chainRecord:{step_1:"Fill in the information",step_2:"Waiting for packing",step_3:"complete",wallet:"wallet",desc:"Content",descValidate:"Please enter info",eth_num:"Send Number",contract_address:"Contract address",send_txidok:"The information has been successfully registered on the blockchain network",loading_text:"The blockchain network is packing your information, please wait patiently.....",cancelOperation:"You cancelled the operation",cancel:"Close",createBtn:"Create",pageDesc:"Decentralized, Unchangeable, Permanent record",receive_address:"Receive Address",receive_address_placeholder:"Please enter the address for receiving messages",addressError:"Address Error",edit:"Edit",cancelEdit:"Cancel",hackers:"Poly Network hacker address(ETH)",coffee:"Buy my a coffee",thank_coffee:"Thanks for the coffee☕️"}}},d=a("a835"),p=a("b6ed"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{"append-to-body":!0,width:e.isPc?"360px":"90%",title:"Success",visible:e.isShowDialog,"close-on-click-modal":!1,center:""},on:{"update:visible":function(t){e.isShowDialog=t}}},[a("div",{staticClass:"dialogBox"},[a("div",{staticClass:"icon"},[a("i",{staticClass:"el-icon-success"})]),a("p",{staticClass:"desc"},[e._v(e._s(e.$t("chainRecord.send_txidok")))]),a("el-link",{staticClass:"link",attrs:{type:"primary",target:"_blank",href:e.link}},[e._v(e._s(e.link))])],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.onCoffee}},[e._v("☕️ "+e._s(e.$t("chainRecord.coffee")))]),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.link,expression:"link",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopySuccess,expression:"onCopySuccess",arg:"success"}],attrs:{type:"primary"}},[e._v(" "+e._s(e.$t("common.copy"))+" ")])],1)])},u=[],f=a("8feb"),m=a.n(f),g=a("85d4"),b=a("52c1"),v={inject:["onCopySuccess"],components:{},props:{link:{require:!0,type:String},chainName:{require:!0,type:String}},data:function(){return{isShowDialog:!1,newUnLockDate:""}},computed:Object(i["a"])({},Object(b["b"])(["isPc","language"])),created:function(){},methods:{show:function(){this.isShowDialog=!this.isShowDialog},onCoffee:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,s,c,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=!1,1===d["a"].getChainId()&&(a=Object(g["toHex"])(5e5)),s=e.$coinInfo[e.chainName].approveDonateCost,c={from:d["a"].getAccount(),to:"0x11111111686b45EB94D9688F715815fc0CC0e5Ec",value:Object(g["toHex"])(m.a.toWei(s,"ether")),gas:a},e.stepActive=2,t.next=7,d["a"].createChainTx(c);case 7:r=t.sent,200===r.code?e.$message.success(e.$t("chainRecord.thank_coffee")):e.$message.error("Transaction failed");case 9:case"end":return t.stop()}}),t)})))()}}},_=v,k=(a("abe5"),a("5d22")),x=Object(k["a"])(_,h,u,!1,null,"b731d7aa",null),C=x.exports,y=a("12f9"),w="chainRecord",$={name:w,inject:["onCheckConnect"],components:{Card:y["a"],SendSuccessDialog:C,NetworkError:p["a"]},data:function(){return{form:{receive_address:"",contract_address:"",eth_num:.01,gas_price:"",hex:"",desc:""},chainRecordDemoPic:"https://cdn.jsdelivr.net/gh/CoinTool-App/cdn/pic/chain-record-demo.png",isEdit:!1,chainName:"",rules:{},dialogFormVisible:!1,stepActive:0,blockTxurl:"",blockHash:""}},computed:Object(i["a"])({},Object(b["b"])(["isPc","language"])),watch:{"form.desc":function(e,t){this.stepActive=""!==e?1:0}},created:function(){this.$i18n.getLocaleMessage("en")[w]||(this.$i18n.mergeLocaleMessage("en",l.en),this.$i18n.mergeLocaleMessage("zh",l.zh)),this.chainName=this.$route.path.replace("/".concat(w,"/"),"").replace("/",""),this.rules={desc:[{required:!0,message:this.$t("chainRecord.notEmpty"),trigger:"change"}],eth_num:[{required:!0,message:this.$t("chainRecord.notEmpty"),trigger:"change"}]}},mounted:function(){},methods:{onHacker:function(){this.form.receive_address="0xC8a65Fadf0e0dDAf421F28FEAb69Bf6E2E589963"},resetState:function(){this.blockHash=""},onCreateRecord:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=""===e.form.receive_address?"0x11111111686b45EB94D9688F715815fc0CC0e5Ec":e.form.receive_address,t.next=3,e.$refs["form"].validate();case 3:if(o.a.validate(a,"eth")){t.next=6;break}return e.$message.error(e.$t("chainRecord.addressError")),t.abrupt("return");case 6:if(e.onCheckConnect()){t.next=8;break}return t.abrupt("return");case 8:e.resetState(),e.blockTxurl=d["a"].resolveLinkOnEtherscan(),e.createTxByMetaMask(a,e.form.eth_num);case 11:case"end":return t.stop()}}),t)})))()},createTxByMetaMask:function(e,t){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var c,r,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return c=!1,1===d["a"].getChainId()&&(c=Object(g["toHex"])(5e5)),r={from:d["a"].getAccount(),to:e,value:Object(g["toHex"])(m.a.toWei(t,"ether")),gas:c,data:Object(g["toHex"])(a.form.desc)},a.stepActive=2,s.next=6,d["a"].createChainTx(r);case 6:i=s.sent,a.stepActive=3,200===i.code?(a.blockHash=i.transactionHash,a.stepActive=3,a.$refs.SendSuccessDialog.show()):4001===i.code?(a.stepActive=1,a.$message.error(a.$t("chainRecord.cancelOperation"))):(console.log("res.message"),a.$message({message:"Transaction failed",type:"error"}),a.stepActive=1);case 9:case"end":return s.stop()}}),s)})))()}}},R=$,E=(a("8d42"),Object(k["a"])(R,s,c,!1,null,"6d70f6e1",null));t["default"]=E.exports},abe5:function(e,t,a){"use strict";a("0bd5")}}]);