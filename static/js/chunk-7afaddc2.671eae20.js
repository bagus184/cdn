(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7afaddc2"],{10:function(e,t){},11:function(e,t){},12:function(e,t){},"12ee":function(e,t,n){"use strict";n("816e")},"248d":function(e,t,n){"use strict";n("a091")},3530:function(e,t,n){},"3a3f":function(e,t,n){"use strict";n("3530")},"5abe":function(e,t,n){"use strict";n.r(t);var s,a,r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("OneToMoreHeader",{attrs:{"support-networks":e.supportNetworks,title:e.$t("trxOneToMore.welcome",{appName:e.$shortName})}}),n("div",{staticClass:"containerBg"},[n("div",{staticClass:"oneToMoreBox"},[n("div",{staticClass:"stepBox"},[n("el-steps",{attrs:{active:e.stepActive,"align-center":"","process-status":"finish","finish-status":"finish"}},[n("el-step",{attrs:{title:e.$t("trxOneToMore.prepare")}}),n("el-step",{attrs:{title:e.$t("trxOneToMore.confirm")}}),n("el-step",{attrs:{title:e.$t("trxOneToMore.send")}})],1)],1),0===e.stepActive?n("Step1",{on:{onStep1Confirm:e.onStep1Confirm}}):1===e.stepActive?n("Step2",{attrs:{"queue-list":e.queueList,address:e.address,decimals:e.decimals},on:{onStep2Prev:e.onStep2Prev,onStep2Next:e.onStep2Next,onStep2Confirm:e.onStep2Confirm}}):2===e.stepActive?n("Step3",{attrs:{send_tx:e.send_tx,c_abi:e.c_abi,"current-fee":e.currentFee,"array-limit":e.arrayLimit,c_address:e.c_address,"queue-list":e.queueList,address:e.address,decimals:e.decimals},on:{onStep3Prev:e.onStep3Prev}}):e._e()],1)])],1)},i=[],o=n("4833"),l=(n("6a61"),{zh:{trxOneToMore:{token:"代币",welcome:"欢迎使用{appName} TRX批量发送",token_address_err:"代币地址错误",address_amount:"收款地址和数量",auto_amount:"自动添加数量",upload_file:"上传文件",iinsert_manually:"手动输入",download_examples:"下载例子",show_examples:"查看例子",delete_err:"删除无效地址",next:"下一步",address:"地址",slow:"慢",standard:"快",instant:"极速",inputAlert_1:"输入代币地址自动添加",inputAlert_2:"支持文件类型： CSV / Excel / Txt",inputAlert_3:"每一行应包括地址和数量，逗号分隔",inputAlert_4:"以下地址或金额不能发送",inputAlert_5:"可自动在每个地址后面添加数量",inputAlert_6:"请至少输入一条地址信息",inputAlert_7:"第 {line} 行: {str} 无效的钱包地址",inputAlert_8:"第 {line} 行: {str} 无效的数量",inputAlert_9:"第 {line} 行: {str} 请输入正确的格式，地址和数量以逗号分隔。例: address,number",inputAlert_10:"授信成功，请点击下一步！",inputAlert_11:"第 {line} 行: {str} 重复的地址",inputAlert_12:"发现重复地址",repeat_1:"保留第一个",repeat_2:"合并重复地址",repeat_3:"保留重复地址",step3_alert_1:"总共需要发送 {a} 次,还需要发送 {b} 次",step3_alert_2:"交易已全部发出，请等待交易被确认。",step3_alert_3:"祝贺，您的代币全部发送成功！",step3_alert_4:"您手动取消了交易，如需继续，请点击发送",step3_alert_5:"继续第 {d} 次交易",decimals:"位数",wallet_select_mainnet:"您的TRON钱包已选择 Mainnet网络",wallet_select_shasta:"您的TRON钱包已选择 Shasta网络",wallet_select:"请把您钱包的网络切换为 Mainnet 或者 Shasta网络",summary:"摘要",total_address_num:"地址总数",total_send_token_num:"代币发送总数",total_send_tx_num:"交易总数",token_balance:"代币余额",y_fee:"预估费用",you_balance:"你的 {symbol} 余额",d_allowance_b:"当前授信额度",y_allowance_b:"需授信额度",approve_amount:"授权额度",send_amount:"发送数量({amount} {symbol})",send_amount_b:"代币余额({amount} {symbol})",insufficient_balance:"{symbol} 余额不足",prepare:"准备",confirm:"确认",close:"关闭",send:"发送"}},en:{trxOneToMore:{token:"Token",welcome:"Welcome to {appName} TRX Bulk Sender",token_address_err:"Token address error",address_amount:"Addresses with Amounts",auto_amount:"Auto add amounts",upload_file:"Upload file",iinsert_manually:"Insert manually",download_examples:"Download examples",show_examples:"Show examples",delete_err:"Delete them",next:"Next",address:"Address",slow:"Slow",standard:"Standard",instant:"Instant",inputAlert_1:"Input token address to add automatically",inputAlert_2:"Accepted: CSV / Excel / Txt",inputAlert_3:"The address and amount are separated by commas",inputAlert_4:"The below addresses cannot be processed",inputAlert_5:"Amount can be automatically added after each address",inputAlert_6:"Please enter at least one address information",inputAlert_7:"Line {line} : {str}  is a invalid wallet address",inputAlert_8:"Line {line} : {str}  is a invalid wrong amount",inputAlert_9:"Line {line} : {str}  is a invalid wallet address and wrong amount. E.g:address,number",inputAlert_10:"Request approve succeeded ! Please click next",inputAlert_11:"Line {line}: {str} is duplicate address",inputAlert_12:"Duplicated wallet addresses",repeat_1:"Keep the first one",repeat_2:"Merge balances",repeat_3:"Keep duplicate addresses",step3_alert_1:"A total of {a} needs to be sent,You need to send {b} more times",step3_alert_2:"All transactions have been sent out. Please wait for the transaction to be confirmed.",step3_alert_3:"Congratulations, all your tokens have been sent successfully!",step3_alert_4:"You have manually cancelled the transaction, to continue, please click send",step3_alert_5:"Continue with the {d} first transaction",decimals:"Decimals",summary:"Summary",wallet_select_mainnet:"Your TRON wallet has selected the Mainnet network",wallet_select_shasta:"Your TRON wallet has selected the Shasta network",wallet_select:"Please switch your wallet network to Mainnet or Shasta network",total_address_num:"Total number of addresses",total_send_token_num:"Total number of tokens to be sent",total_send_tx_num:"Total number of transactions needed",token_balance:"Your token balance",y_fee:"Approximate cost of operation",you_balance:"Your {symbol} balance",d_allowance_b:"Your current allowance",y_allowance_b:"Request approve amount",prepare:"Prepare",approve_amount:"Amount to approve",send_amount:"Exact amount to be sent ({amount} {symbol})",send_amount_b:"Your token balance({amount} {symbol})",insufficient_balance:"Insufficient {symbol} balance",confirm:"Confirm",close:"Close",send:"Send"}}}),u=n("850d"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"step1"},[n("div",{staticClass:"inputBox"},[n("div",{staticClass:"inputContext inputContextAddress"},[n("div",{staticClass:"label"},[n("span",[e._v(e._s(e.$t("trxOneToMore.token")))])]),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.$t("trxOneToMore.inputAlert_1"),placement:e.isPc?"left-start":"top"}},[n("el-select",{directives:[{name:"loading",rawName:"v-loading",value:e.loading_address,expression:"loading_address"}],staticStyle:{width:"100%"},attrs:{size:"large",filterable:"","filter-method":e.handleFilterAddress},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}},e._l(e.addressOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[n("span",{staticStyle:{float:"left"}},[e._v(e._s(t.label))]),n("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.value))])])})),1)],1)],1),n("div",{staticClass:"inputContext inputContextDecimals"},[n("div",{staticClass:"label"},[n("span",[e._v(e._s(e.$t("trxOneToMore.decimals")))])]),n("el-input",{attrs:{size:"large",oninput:"value=value.replace(/[^\\d]/g,'')","max-length":"9"},model:{value:e.decimals,callback:function(t){e.decimals=t},expression:"decimals"}})],1)]),n("div",{staticClass:"label"},[n("span",[e._v(e._s(e.$t("trxOneToMore.address_amount")))]),n("span",{staticClass:"btnText",on:{click:e.onBulkAmount}},[e._v(e._s(e.$t("trxOneToMore.auto_amount")))]),e.isInput?n("span",{staticClass:"btnText",on:{click:e.onToggleInputType}},[e._v(e._s(e.$t("trxOneToMore.upload_file")))]):n("span",{staticClass:"btnText",on:{click:e.onToggleInputType}},[e._v(e._s(e.$t("trxOneToMore.iinsert_manually")))])]),n("el-row",[n("el-col",{attrs:{xs:{span:24}}},[e.isInput?n("Editor",{ref:"editor",on:{changed:e.onChangeEditor},model:{value:e.editorValue,callback:function(t){e.editorValue=t},expression:"editorValue"}}):n("upload-excel-component",{attrs:{"on-success":e.onUploadFileSuccess,"before-upload":e.beforeUpload}})],1)],1),n("div",{staticClass:"label label-remark"},[e.isInput?n("span",[e._v(e._s(e.$t("trxOneToMore.inputAlert_3")))]):n("span",[e._v(e._s(e.$t("trxOneToMore.inputAlert_2")))]),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.isInput,expression:"!isInput"}],staticClass:"btnText"},[n("a",{attrs:{target:"_blank",href:"/example_trx.xlsx"}},[e._v(e._s(e.$t("trxOneToMore.download_examples")))])]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.isInput,expression:"isInput"}],staticClass:"btnText",on:{click:e.onExample}},[e._v(e._s(e.$t("trxOneToMore.show_examples")))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.errInfoList.length>0,expression:"errInfoList.length > 0"}],staticClass:"errInfoBox"},[n("div",{staticClass:"label label-remark"},[n("span",{directives:[{name:"show",rawName:"v-show",value:!e.repeat,expression:"!repeat"}]},[e._v(e._s(e.$t("trxOneToMore.inputAlert_4")))]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.repeat,expression:"repeat"}]},[e._v(e._s(e.$t("trxOneToMore.inputAlert_12")))]),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.repeat,expression:"!repeat"}],staticClass:"btnText",on:{click:e.onDeleteErr}},[e._v(e._s(e.$t("trxOneToMore.delete_err")))]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.repeat,expression:"repeat"}],staticClass:"btnText",on:{click:function(t){return e.onRepeat(1)}}},[e._v(e._s(e.$t("trxOneToMore.repeat_1")))]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.repeat,expression:"repeat"}],staticClass:"btnText",on:{click:function(t){return e.onRepeat(2)}}},[e._v(e._s(e.$t("trxOneToMore.repeat_2")))]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.repeat,expression:"repeat"}],staticClass:"btnText",on:{click:function(t){return e.onRepeat(3)}}},[e._v(e._s(e.$t("trxOneToMore.repeat_3")))])]),n("ul",e._l(e.errInfoList,(function(t){return n("li",{key:t},[e._v(e._s(t))])})),0)]),n("el-button",{attrs:{size:"large",type:"primary"},on:{click:e.onNext}},[e._v(e._s(e.$t("trxOneToMore.next")))])],1)},d=[],p=n("efe2"),_=(n("37de"),n("22f9"),n("f597"),n("476c"),n("c9f2"),n("96e6"),n("7479"),n("8b79"),n("3796")),m=n("fa7e"),h=n("914a"),b=n("986e"),f=n("52c1"),v={},w={name:"Step1",inject:["tronwalletStateTest"],components:{UploadExcelComponent:_["a"],Editor:m["a"]},computed:Object(p["a"])({},Object(f["b"])(["isPc"])),data:function(){return{balance:{},repeat:!1,repeat_status:!1,loading_address:!1,stepActive:1,addressOptions:[],address:"TRX",decimals:6,isInput:!0,editorValue:"",queueList:[],errInfoList:[]}},watch:{address:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(localStorage.setItem("trxOneToMore_address",e),"TRX"===e)t.decimals=6;else for(s in v)s===e&&(t.decimals=v[s].decimals);case 2:case"end":return n.stop()}}),n)})))()},editorValue:function(e){this.onEditCheck(e)}},created:function(){b["f"].$on(b["e"],(function(e){console.log(e,"step_state")}))},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.tronwalletStateTest();case 2:if(t.sent){t.next=4;break}return t.abrupt("return");case 4:if(e.setNetwork(window.tronWeb.fullNode.host),e.addressOptions.push({value:"TRX",label:"TRX",decimals:6}),localStorage.getItem("trx_tokenConTract"))for(s in n=JSON.parse(localStorage.getItem("trx_tokenConTract")),v=n,n)e.addressOptions.push({value:n[s].address,label:n[s].symbol,decimals:n[s].decimals});localStorage.getItem("trxOneToMore_address")&&(e.address=localStorage.getItem("trxOneToMore_address"));case 8:case"end":return t.stop()}}),t)})))()},methods:{setNetwork:function(e){switch(e){case"https://api.shasta.trongrid.io":window.isMainnet=!1,this.$message({message:this.$t("trxOneToMore.wallet_select_shasta"),type:"success"});break;case"https://api.trongrid.io":window.isMainnet=!0,this.$message({message:this.$t("trxOneToMore.wallet_select_mainnet"),type:"success"});break;case"https://api.tronstack.io":window.isMainnet=!0,this.$message({message:this.$t("trxOneToMore.wallet_select_mainnet"),type:"success"});break;default:this.$message.error(this.$t("trxOneToMore.wallet_select"));break}},onExample:function(){this.editorValue="TVYL4aKxe87Niq9nKwc6d7957nc7Ubiz44,0.001\nTB7wXKnjyxjyUQ9sdKRFaL1UacsKb2N89m,1\nTQKjWTZ12b6vxnikAeVctU5US8hGZzTFVE,3.45"},onBulkAmount:function(){var e=this;this.$prompt(this.$t("trxOneToMore.auto_amount"),this.$t("trxOneToMore.inputAlert_5"),{confirmButtonText:this.$t("trxOneToMore.confirm"),cancelButtonText:this.$t("trxOneToMore.close")}).then((function(t){var n=t.value,s=e.editorValue.split("\n"),a="";for(var r in s){var i=s[r].split(",");i[1]&&(s[r]=i[0]),parseInt(r)+1===s.length?a+=s[r]+","+n:a+=s[r]+","+n+"\n"}e.editorValue=a})).catch((function(){}))},onNext:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.tronwalletStateTest();case 2:if(t.sent){t.next=4;break}return t.abrupt("return");case 4:if(""!==e.editorValue){t.next=7;break}return e.$message.error(e.$t("trxOneToMore.inputAlert_6")),t.abrupt("return");case 7:if(n=e.onEditCheck(e.editorValue),!n){t.next=10;break}return t.abrupt("return");case 10:e.$emit("onStep1Confirm",{queueList:e.queueList,address:e.address,decimals:e.decimals});case 11:case"end":return t.stop()}}),t)})))()},onDeleteErr:function(){var e=this,t="",n=[];for(var s in this.queueList)n.push(this.queueList[s]);this.queueList=n,this.queueList.forEach((function(n,s){var a=s===e.queueList.length-1?"":"\n";t+=e.queueList[s].join()+a})),this.editorValue=t},onRepeat:function(e){var t=this,n="",s=[],a=[];for(var r in this.queueList)s[this.queueList[r][0]]&&1===e?delete this.queueList[r]:s[this.queueList[r][0]]&&2===e?(a[this.queueList[r][0]]+=parseFloat(this.queueList[r][1]),delete this.queueList[r]):(s[this.queueList[r][0]]=!0,2===e&&(a[this.queueList[r][0]]=parseFloat(this.queueList[r][1]),delete this.queueList[r]));if(2===e)for(var i in a)this.queueList.push([i,a[i]]);3===e&&(this.repeat_status=!0,this.repeat=!1,this.errInfoList=[]);var o=[];for(var l in this.queueList)o.push(this.queueList[l]);this.queueList=o,this.queueList.forEach((function(e,s){var a=s===t.queueList.length-1?"":"\n";n+=t.queueList[s].join()+a})),this.editorValue=n},onEditCheck:function(e){if(""===e)return this.queueList=[],this.errInfoList=[],void(this.repeat_status=!1);var t=e.split("\n"),n=[],s=[],a=[],r=!1,i=!1;for(var o in t){var l=parseInt(o)+1,u=t[o].trim().split(",");2===u.length?window.tronWeb.isAddress(u[0])?parseFloat(u[1])<0||!parseFloat(u[1])?(r=!0,s.push(this.$t("trxOneToMore.inputAlert_8",{line:l,str:u[1]}))):(a[u[0]]&&!this.repeat_status?(i=!0,r=!0,s.push(this.$t("trxOneToMore.inputAlert_11",{line:l,str:u[0]}))):a[u[0]]=!0,n.push(u)):(r=!0,s.push(this.$t("trxOneToMore.inputAlert_7",{line:l,str:u[0]}))):(r=!0,s.push(this.$t("trxOneToMore.inputAlert_9",{line:l,str:u[0]})))}return this.repeat=i,this.queueList=n,this.errInfoList=s,r},handleFilterAddress:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var s,a,r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.tronwalletStateTest();case 2:if(n.sent){n.next=4;break}return n.abrupt("return");case 4:if(t.loading_address=!0,e=e.trim(),!(parseInt(e)<=1e6||isNaN(parseInt(e)))||window.tronWeb.isAddress(e)){n.next=9;break}return t.loading_address=!1,n.abrupt("return");case 9:if(!v[e]){n.next=13;break}return t.address=e,t.loading_address=!1,n.abrupt("return");case 13:if(n.prev=13,s="",a="",!window.tronWeb.isAddress(e)){n.next=22;break}return n.next=19,t.getInforTRONToken(e);case 19:r=n.sent,s=r.symbol,a=r.decimals;case 22:if(!(parseInt(e)>=1e6)){n.next=28;break}return n.next=25,window.tronWeb.trx.getTokenByID(parseInt(e));case 25:i=n.sent,s=i.abbr,a=i.precision;case 28:if(""!==s){n.next=32;break}return t.$message.error(t.$t("trxOneToMore.token_address_err")),t.loading_address=!1,n.abrupt("return");case 32:v[e]={symbol:"",decimals:""},v[e].symbol=s,v[e].decimals=parseInt(a),v[e].address=e,t.addressOptions.push({value:e,label:v[e].symbol,decimals:v[e].decimals}),t.address=e,t.decimals=v[e].decimals,localStorage.setItem("trx_tokenConTract",JSON.stringify(v)),n.next=45;break;case 42:n.prev=42,n.t0=n["catch"](13),t.$message.error(t.$t("trxOneToMore.token_address_err"));case 45:t.loading_address=!1;case 46:case"end":return n.stop()}}),n,null,[[13,42]])})))()},getInforTRONToken:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return window.tronWeb.setAddress("TVJ6njG5EpUwJt4N9xjTrqU5za78cgadS2"),t.abrupt("return",new Promise(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n,s){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.tronWeb.contract().at(e);case 3:a=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),s(t.t0);case 9:return t.prev=9,t.next=12,Object(h["a"])([a.symbol().call().catch((function(e){return null})),a.decimals().call().catch((function(e){return null}))]).subscribe((function(e){var t={symbol:e[0],decimals:e[1]};n(t)}));case 12:t.next=17;break;case 14:t.prev=14,t.t1=t["catch"](9),s(t.t1);case 17:case"end":return t.stop()}}),t,null,[[0,6],[9,14]])})));return function(e,n){return t.apply(this,arguments)}}()));case 2:case"end":return t.stop()}}),t)})))()},onToggleInputType:function(){this.isInput=!this.isInput},beforeUpload:function(e){var t=e.size/1024/1024<10;return!!t||(this.$message({message:"Please do not upload files larger than 10m in size.",type:"warning"}),!1)},onChangeEditor:function(e){this.editorValue=e},onUploadFileSuccess:function(e){var t=e.results,n=(e.header,"");t.forEach((function(e,s){var a=s===t.length-1?"":"\n";n+="".concat(e.Address,",").concat(e.Amount).concat(a)})),this.editorValue=n,this.onToggleInputType()}}},x=w,g=(n("6ed9"),n("5d22")),y=Object(g["a"])(x,c,d,!1,null,"71eb1522",null),T=y.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"step2"},[n("div",{staticClass:"label"},[n("span",[e._v(e._s(e.$t("trxOneToMore.summary")))])]),n("ul",{directives:[{name:"loading",rawName:"v-loading",value:e.step2_loading,expression:"step2_loading"}],staticClass:"abstract"},[n("li",{directives:[{name:"show",rawName:"v-show",value:e.allowance_b<e.allowance_a&&"TRX"!==e.address,expression:"allowance_b < allowance_a && address !== 'TRX'"}]},[n("span",{staticClass:"number"},[e._v(e._s(e.allowance_a)+" "+e._s(e.symbol))]),n("span",{staticClass:"remark"},[e._v(e._s(e.$t("trxOneToMore.y_allowance_b")))])]),n("li",{directives:[{name:"show",rawName:"v-show",value:e.allowance_b<e.allowance_a&&"TRX"!==e.address,expression:"allowance_b < allowance_a && address !== 'TRX'"}]},[n("span",{staticClass:"number"},[e._v(e._s(e.allowance_b)+" "+e._s(e.symbol))]),n("span",{staticClass:"remark"},[e._v(e._s(e.$t("trxOneToMore.d_allowance_b")))])]),n("li",[n("span",{staticClass:"number"},[e._v(e._s(e.address_count))]),n("span",{staticClass:"remark"},[e._v(e._s(e.$t("trxOneToMore.total_address_num")))])]),n("li",[n("span",{staticClass:"number"},[e._v(e._s(e.send_amount)+" "+e._s(e.symbol))]),n("span",{staticClass:"remark"},[e._v(e._s(e.$t("trxOneToMore.total_send_token_num")))])]),n("li",[n("span",{staticClass:"number"},[e._v(e._s(e.send_tx))]),n("span",{staticClass:"remark"},[e._v(e._s(e.$t("trxOneToMore.total_send_tx_num")))])]),n("li",[n("span",{staticClass:"number"},[e._v(e._s(e.tokenBalance)+" "+e._s(e.symbol))]),n("span",{staticClass:"remark"},[e._v(e._s(e.$t("trxOneToMore.token_balance")))])]),n("li",[n("span",{staticClass:"number"},[e._v(e._s(e.fee)+" TRX")]),n("span",{staticClass:"remark"},[e._v(e._s(e.$t("trxOneToMore.y_fee")))])]),n("li",[n("span",{staticClass:"number"},[e._v(e._s(e.ethBalance)+" TRX")]),n("span",{staticClass:"remark"},[e._v(e._s(e.$t("trxOneToMore.you_balance",{symbol:"TRX"})))])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.allowance_b<e.allowance_a&&"TRX"!==e.address&&0===e.approveList.length&&0===e.errInfoList.length,expression:"allowance_b < allowance_a && address !== 'TRX' && approveList.length === 0 && errInfoList.length ===0"}],staticStyle:{"margin-bottom":"20px"}},[n("div",{staticClass:"label"},[n("span",[e._v(e._s(e.$t("trxOneToMore.approve_amount")))])]),n("el-radio-group",{model:{value:e.allowance_select,callback:function(t){e.allowance_select=t},expression:"allowance_select"}},[n("el-radio",{attrs:{label:1}},[e._v(e._s(e.$t("trxOneToMore.send_amount",{amount:e.send_amount,symbol:e.symbol})))]),n("el-radio",{attrs:{label:2}},[e._v(e._s(e.$t("trxOneToMore.send_amount_b",{amount:e.tokenBalance,symbol:e.symbol}))+" ")])],1)],1),n("DealList",{attrs:{list:e.approveList}}),n("el-alert",{directives:[{name:"show",rawName:"v-show",value:e.approve_status,expression:"approve_status"}],staticClass:"tips",attrs:{title:e.$t("trxOneToMore.inputAlert_10"),type:"success",closable:!1,effect:"dark"}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.errInfoList.length>0,expression:"errInfoList.length > 0"}],staticClass:"errInfoBox"},[n("ul",e._l(e.errInfoList,(function(t){return n("li",{key:t},[e._v(e._s(t))])})),0)]),n("div",{staticClass:"btnBox"},[n("el-button",{attrs:{size:"large",type:"primary",icon:"el-icon-arrow-left"},on:{click:e.onPrev}}),n("el-button",{attrs:{loading:e.step2_loading,size:"large",type:"primary",disabled:e.send_btn},on:{click:e.onNext}},[e._v(e._s(e.$t("trxOneToMore.next")))])],1)],1)},S=[],M=(n("65f0"),n("4a32"),n("a9b5"),n("b893")),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{directives:[{name:"show",rawName:"v-show",value:e.list.length>0,expression:"list.length > 0"}],staticClass:"dealList"},e._l(e.list,(function(t,s){return n("li",{key:t.address},[n("div",{staticClass:"left"},[n("span",{staticClass:"index"},[e._v(e._s(s+1))]),n("a",{staticClass:"address",attrs:{target:"_blank",href:e.blockTxurl+"/#/transaction/"+t.address}},[e._v(e._s(t.address))])]),n("div",{staticClass:"right"},[n("span",{staticClass:"status"},[0===t.status?n("i",{staticClass:"el-icon-loading"}):1===t.status?n("i",{staticClass:"el-icon-success"}):2===t.status?n("i",{staticClass:"el-icon-error",staticStyle:{color:"#F05252"}}):e._e()])])])})),0)},C=[],L={props:{list:{type:Array,required:!0}},data:function(){return{blockTxurl:""}},created:function(){},mounted:function(){this.blockTxurl=window.isMainnet?"https://tronscan.org":"https://shasta.tronscan.org"},methods:{}},A=L,$=(n("12ee"),Object(g["a"])(A,O,C,!1,null,"b4f577ea",null)),R=$.exports,I=n("7921"),N=n.n(I),q=[{constant:!1,inputs:[{name:"token",type:"address"},{name:"_contributors",type:"address[]"},{name:"_balances",type:"uint256[]"}],name:"multisendToken",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"spender",type:"address"},{name:"value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],W={name:"Step2",components:{DealList:R},props:{queueList:{type:Array,required:!0},address:{type:String,required:!0},decimals:{type:Number,required:!0}},data:function(){return{c_address:"",web3:{},send_tx:0,symbol:"TRX",approve_status:!1,send_amount:0,address_count:0,step2_loading:!1,fee:0,d_fee:0,allowance_select:2,currentFee:"",tokenBalance:0,ethBalance:0,send_btn:!1,approveList:[],errInfoList:[],allowance_a:0,allowance_b:0,arrayLimit:200,sliderMarks:{}}},watch:{step2_loading:function(e){b["f"].$emit(b["e"],e)}},created:function(){},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r,i,o,l,u,c,d,p,_;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e,e.step2_loading=!0,e.c_address=window.isMainnet?"TBgEFwQkrZUv3U25rUSWLt7TbP2N9WebiM":"TF8UnF1rZjGFd3ZLwvKGZ5xmtDThjfwYLx",t.next=5,e.onUpdateBalance(e.address);case 5:for(a in e.address_count=e.queueList.length,e.arrayLimit=30,e.send_tx=Math.ceil(e.queueList.length/e.arrayLimit),n=0,e.queueList)n=M["a"].numAdd(n,e.queueList[a][1]);return e.send_amount=n,t.next=13,window.tronWeb.contract().at(e.c_address);case 13:return r=t.sent,t.next=16,r.txFee().call();case 16:if(i=t.sent,e.currentFee=parseInt(i.toString()),console.log("currentFee",e.currentFee),o=window.tronWeb.fromSun(e.currentFee),e.d_fee=parseFloat(o),l=e.d_fee+50,e.fee=l,"TRX"!==e.address){t.next=31;break}if(!(e.ethBalance<e.send_amount+l)){t.next=29;break}return e.step2_loading=!1,e.errInfoList.push(e.$t("trxOneToMore.insufficient_balance",{symbol:"TRX"})),e.send_btn=!0,t.abrupt("return");case 29:t.next=53;break;case 31:if(localStorage.getItem("trx_tokenConTract"))for(c in u=JSON.parse(localStorage.getItem("trx_tokenConTract")),u)u[c].address===e.address&&(e.symbol=u[c].symbol);if(!(e.ethBalance<l)){t.next=37;break}return e.step2_loading=!1,e.errInfoList.push(e.$t("trxOneToMore.insufficient_balance",{symbol:"TRX"})),e.send_btn=!0,t.abrupt("return");case 37:if(!(e.tokenBalance<n)){t.next=42;break}return e.step2_loading=!1,e.errInfoList.push(e.$t("trxOneToMore.insufficient_balance",{symbol:e.symbol})),e.send_btn=!0,t.abrupt("return");case 42:if(!window.tronWeb.isAddress(e.address)){t.next=52;break}return t.next=45,window.tronWeb.contract().at(e.address);case 45:return p=t.sent,t.next=48,p.allowance(null===(d=window.tronWeb)||void 0===d?void 0:d.defaultAddress.base58,e.c_address).call();case 48:_=t.sent,e.allowance_b=parseInt(_.remaining._hex)/Math.pow(10,e.decimals),t.next=53;break;case 52:e.allowance_b=1e31;case 53:e.allowance_a=n,e.step2_loading=!1;case 55:case"end":return t.stop()}}),t)})))()},methods:{onNext:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r,i,o,l,u,c,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!("TRX"!==e.address&&e.allowance_b<e.allowance_a)){t.next=15;break}return a={feeLimit:1e9,callValue:0},r=window.tronWeb.address.toHex(e.address),i="approve(address,uint256)",o=window.tronWeb.address.toHex(null===(n=window.tronWeb)||void 0===n?void 0:n.defaultAddress.base58),u=0,1===e.allowance_select?(u=e.send_amount,l=[{type:"address",value:e.c_address},{type:"uint256",value:new N.a(e.send_amount).times(new N.a(10).pow(Number(e.decimals))).toString(10)}]):(u=e.tokenBalance,l=[{type:"address",value:e.c_address},{type:"uint256",value:new N.a(e.tokenBalance).times(new N.a(10).pow(Number(e.decimals))).toString(10)}]),t.next=9,window.tronWeb.transactionBuilder.triggerSmartContract(r,i,a,l,o);case 9:return c=t.sent,t.next=12,window.tronWeb.trx.multiSign(c.transaction);case 12:return d=t.sent,window.tronWeb.trx.sendRawTransaction(d).then((function(e){var t=null,n=e.transaction.txID;s.approveList.push({address:n,status:0}),s.send_btn=!0,t=setInterval((function(){window.tronWeb.trx.getTransaction(n).then((function(e){e.ret&&e.ret.length>0&&"SUCCESS"===e.ret[0].contractRet&&(clearInterval(t),s.approveList=s.approveList.map((function(e){return e.address===n&&(e.status=1),e})),s.approve_status=!0,s.send_btn=!1,s.allowance_b=u)}))}),5e3)})).catch((function(e){console.log(e)})),t.abrupt("return");case 15:e.$emit("onStep2Confirm",{queueList:e.queueList,address:e.address,decimals:e.decimals,send_tx:e.send_tx,arrayLimit:e.arrayLimit,currentFee:e.currentFee,c_address:e.c_address,c_abi:q});case 16:case"end":return t.stop()}}),t)})))()},onPrev:function(){this.$emit("onStep2Prev")},onUpdateBalance:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var s,a,r,i,o,l,u,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,window.tronWeb.trx.getBalance(null===(s=window.tronWeb)||void 0===s?void 0:s.defaultAddress.base58);case 2:if(a=n.sent,t.ethBalance=parseFloat(window.tronWeb.fromSun(a)),"TRX"===e){n.next=18;break}if(r=t.decimals,!window.tronWeb.isAddress(e)){n.next=11;break}return n.next=9,window.tronWeb.transactionBuilder.triggerSmartContract(window.tronWeb.address.toHex(e),"balanceOf(address)",{},[{type:"address",value:null===(i=window.tronWeb)||void 0===i?void 0:i.defaultAddress.base58}],"417946F66D0FC67924DA0AC9936183AB3B07C81126");case 9:o=n.sent,t.tokenBalance=parseFloat(window.tronWeb.toDecimal("0x"+o.constant_result[0])/Math.pow(10,r));case 11:if(!(parseInt(e)>=1e6)){n.next=16;break}return n.next=14,window.tronWeb.trx.getAccount(null===(l=window.tronWeb)||void 0===l?void 0:l.defaultAddress.base58);case 14:for(c in u=n.sent,u.assetV2)parseInt(u.assetV2[c].key)===parseInt(e)&&(t.tokenBalance=parseFloat(u.assetV2[c].value/Math.pow(10,r)));case 16:n.next=19;break;case 18:t.tokenBalance=t.ethBalance;case 19:case"end":return n.stop()}}),n)})))()}}},B=W,j=(n("e806"),Object(g["a"])(B,k,S,!1,null,"3f6171f6",null)),F=j.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"step3"},[n("div",{staticClass:"label"},[n("span",[e._v(" "+e._s(e.$t("trxOneToMore.step3_alert_1",{a:e.send_status.a,b:e.send_status.b})))]),n("span",{directives:[{name:"show",rawName:"v-show",value:0===e.send_status.b&&!e.all_send,expression:"send_status.b === 0 && !all_send"}]},[e._v(e._s(e.$t("trxOneToMore.step3_alert_2")))])]),n("DealList",{attrs:{list:e.dealList}}),n("el-alert",{directives:[{name:"show",rawName:"v-show",value:0===e.send_status.b&&e.all_send,expression:"send_status.b ===0 && all_send"}],staticClass:"tips",attrs:{title:e.$t("trxOneToMore.step3_alert_3"),type:"success",closable:!1,effect:"dark"}}),n("el-alert",{directives:[{name:"show",rawName:"v-show",value:e.send_close,expression:"send_close"}],staticClass:"tips",attrs:{title:e.$t("trxOneToMore.step3_alert_4"),type:"success",closable:!1,effect:"dark"}}),n("div",{staticClass:"btnBox"},[n("el-button",{attrs:{size:"large",type:"primary",icon:"el-icon-arrow-left"},on:{click:e.onPrev}}),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.send_close,expression:"send_close"}],attrs:{size:"large",type:"primary"},on:{click:e.onSend}},[e._v(e._s(e.$t("trxOneToMore.step3_alert_5",{d:e.d_slice})))])],1)],1)},V=[],X=(n("d51e"),{name:"Step3",components:{DealList:R},props:{send_tx:{type:Number,required:!0},arrayLimit:{type:Number,required:!0},currentFee:{type:Number,required:!0},c_address:{type:String,required:!0},c_abi:{type:Array,required:!0},queueList:{type:Array,required:!0},address:{type:String,required:!0},decimals:{type:Number,required:!0}},data:function(){return{dealList:[],send_close:!1,addresses_to_send:[],balances_to_send:[],send_status:{},all_send:!1,d_slice:0,d_slice_s:0,web3:{}}},created:function(){},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(n in a=e,e.addresses_to_send=[],e.balances_to_send=[],e.queueList)e.addresses_to_send.push(e.queueList[n][0]),e.balances_to_send.push(new N.a(10).pow(e.decimals).times(e.queueList[n][1]).toString(10));return t.next=6,e._multisend(e.send_tx,e.arrayLimit);case 6:case"end":return t.stop()}}),t)})))()},methods:{onPrev:function(){this.$emit("onStep3Prev")},onSend:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.send_close=!1,t.next=3,e._multisend(e.d_slice_s,e.arrayLimit);case 3:case"end":return t.stop()}}),t)})))()},_multisend:function(e,t){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var r,i,o,l,u,c,d,p,_,m,h,b,f,v,w;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,n.d_slice=n.send_tx-e===0?1:n.send_tx-e+1,n.d_slice_s=e,n.send_status={a:n.send_tx,b:e},i=(e-1)*t,o=e*t,l=n.addresses_to_send.slice(i,o),u=n.balances_to_send.slice(i,o),"TRX"===n.address?(d=u.reduce((function(e,t){return new N.a(e).plus(new N.a(t))})),p=d.toString(),c=new N.a(n.currentFee).plus(p),console.log(n.currentFee,p,c.toString())):c=new N.a(n.currentFee),_={feeLimit:1e9,callValue:c},m=window.tronWeb.address.toHex(n.c_address),h=window.tronWeb.address.toHex(null===(r=window.tronWeb)||void 0===r?void 0:r.defaultAddress.base58),b="",f="",l.unshift("TK21BHkSvTrzSmgjQ933PPpnMybumy8Syn"),u.unshift(0),"TRX"===n.address?(b="bulksendEther(address[],uint256[])",f=[{type:"address[]",value:l},{type:"uint256[]",value:u}]):(window.tronWeb.isAddress(n.address)&&(b="bulksendToken(address,address[],uint256[])",f=[{type:"address",value:n.address},{type:"address[]",value:l},{type:"uint256[]",value:u}]),parseInt(n.address)>1e6&&(b="bulksendTRC10(uint256,address[],uint256[])",f=[{type:"uint256",value:n.address},{type:"address[]",value:l},{type:"uint256[]",value:u}])),s.next=19,window.tronWeb.transactionBuilder.triggerSmartContract(m,b,_,f,h);case 19:return v=s.sent,s.next=22,window.tronWeb.trx.multiSign(v.transaction);case 22:w=s.sent,window.tronWeb.trx.sendRawTransaction(w).then((function(s){var r=null,i=s.transaction.txID;a.dealList.push({address:i,status:0}),a.send_status={a:n.send_tx,b:e-1},r=setInterval((function(){window.tronWeb.trx.getTransaction(i).then((function(n){n.ret&&n.ret.length>0&&"SUCCESS"===n.ret[0].contractRet&&(clearInterval(r),a.dealList=a.dealList.map((function(e){return e.address===i&&(e.status=1),e})),e--,e>0?a._multisend(e,t):a.all_send=!0)}))}),5e3)})).catch((function(e){console.log("wwwwww",e)})),s.next=30;break;case 26:s.prev=26,s.t0=s["catch"](0),console.log("xxx",s.t0),"Confirmation declined by user"===s.t0&&(n.send_close=!0);case 30:case"end":return s.stop()}}),s,null,[[0,26]])})))()}}}),P=X,U=(n("3a3f"),Object(g["a"])(P,E,V,!1,null,"8b210a8c",null)),D=U.exports,z="trxOneToMore",K="multiSender",Y={name:K,components:{OneToMoreHeader:u["a"],Step1:T,Step2:F,Step3:D},data:function(){return{supportNetworks:[{icon:"coin-trx",name:"TRX Mainnet"},{icon:"coin-debug1",name:"Shasta TestNet"}],stepActive:0,c_abi:[],send_tx:0,arrayLimit:0,c_address:"",currentFee:0,queueList:[],address:"TRX",decimals:6}},watch:{},created:function(){this.$i18n.getLocaleMessage("en")[z]||(this.$i18n.mergeLocaleMessage("en",l.en),this.$i18n.mergeLocaleMessage("zh",l.zh))},mounted:function(){return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{onStep1Confirm:function(e){var t=e.queueList,n=e.address,s=e.decimals;this.queueList=t,this.address=n,this.decimals=s,this.stepActive=1},onStep2Confirm:function(e){var t=e.queueList,n=e.address,s=e.decimals,a=e.send_tx,r=e.arrayLimit,i=e.currentFee,o=e.c_address,l=e.c_abi;this.queueList=t,this.address=n,this.decimals=s,this.send_tx=a,this.arrayLimit=r,this.currentFee=i,this.c_address=o,this.c_abi=l,this.stepActive=2},onStep2Prev:function(){this.stepActive=0},onStep2Next:function(){this.stepActive=2},onStep3Prev:function(){this.stepActive=1},onChangeEditor:function(e){this.editorValue=e}}},H=Y,J=(n("248d"),Object(g["a"])(H,r,i,!1,null,"48b2c523",null));t["default"]=J.exports},"6ed9":function(e,t,n){"use strict";n("8650")},"816e":function(e,t,n){},8650:function(e,t,n){},a091:function(e,t,n){},b893:function(e,t,n){"use strict";var s=n("1222"),a=n("a3b6"),r=n("55ae"),i=(n("a9b5"),n("37de"),n("22f9"),n("7479"),n("4a32"),n("65f0"),n("476c"),n("63f1"),n("1e34"),n("96e6"),function(){function e(){Object(s["a"])(this,e),Object(r["a"])(this,"chars",["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]),Object(r["a"])(this,"crypt",(function(e,t){var n=function(e){return e.split("").map((function(e){return e.charCodeAt(0)}))},s=function(e){return("0"+Number(e).toString(16)).substr(-2)},a=function(t){return n(e).reduce((function(e,t){return e^t}),t)};return t.split("").map(n).map(a).map(s).join("")})),Object(r["a"])(this,"decrypt",(function(e,t){var n=function(e){return e.split("").map((function(e){return e.charCodeAt(0)}))},s=function(t){return n(e).reduce((function(e,t){return e^t}),t)};return t.match(/.{1,2}/g).map((function(e){return parseInt(e,16)})).map(s).map((function(e){return String.fromCharCode(e)})).join("")}))}return Object(a["a"])(e,[{key:"guid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)}))}},{key:"generateMixed",value:function(e){for(var t="",n=0;n<e;n++){var s=Math.ceil(61*Math.random());t+=this.chars[s]}return Math.random().toString(36).substr(0)+t+Math.random().toString(36).substr(0)+(new Date).getTime()+Math.random().toString(36).substr(0)}},{key:"numAdd",value:function(e,t){var n,s,a;try{n=e.toString().split(".")[1].length}catch(r){n=0}try{s=t.toString().split(".")[1].length}catch(r){s=0}return a=Math.pow(10,Math.max(n,s)),(this.numMul(e,a)+this.numMul(t,a))/a}},{key:"numSub",value:function(e,t){var n,s,a;try{n=e.toString().split(".")[1].length}catch(r){n=0}try{s=t.toString().split(".")[1].length}catch(r){s=0}return a=Math.pow(10,Math.max(n,s)),(this.numMul(e,a)-this.numMul(t,a))/a}},{key:"numMul",value:function(e,t){var n=0,s=e.toString(),a=t.toString();try{n+=s.split(".")[1].length}catch(r){}try{n+=a.split(".")[1].length}catch(r){}return Number(s.replace(".",""))*Number(a.replace(".",""))/Math.pow(10,n)}},{key:"cleanAsciiText",value:function(e){if(e)return e.replace(/[\x00-\x09\x0b-\x1F]/g,"").trim()}},{key:"numDiv",value:function(e,t){var n,s,a=0,r=0;try{a=e.toString().split(".")[1].length}catch(i){}try{r=t.toString().split(".")[1].length}catch(i){}return n=Number(e.toString().replace(".","")),s=Number(t.toString().replace(".","")),this.numMul(n/s,Math.pow(10,r-a))}}]),e}()),o=new i;t["a"]=o},c9f2:function(e,t,n){var s=n("c194"),a=n("5960");s({target:"String",proto:!0},{repeat:a})},d41d:function(e,t,n){},e806:function(e,t,n){"use strict";n("d41d")}}]);