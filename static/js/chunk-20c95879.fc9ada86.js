(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20c95879"],{"30d5d":function(e,t,a){},"4a46":function(e,t,a){},"4b79":function(e,t,a){"use strict";t["a"]={zh:{transactionSpeed:{cfpf_cannot_cancel:"CFPF 不支持取消交易",increase:"每次增加%",zero_fee:"0 服务费",wallet_mode:"钱包模式",speed_up_count:"加速次数",unlimited_speed_up_tips:"无限加速需要使用私钥模式",speed_up_once:"加速 1 次",unlimited_speed_up:"无限加速",speed_up_max_limit:"加速上限",rbf_not_supported:"当前交易不支持 RBF，已切换为 CFPF。",transaction_already_success:"当前交易已经交易成功，无法加速交易或取消交易！",tx_speed:"加速交易",tx_cancel:"取消交易",enter_transaction_hash:"输入要加速的交易哈希",override_original_gas:"覆盖原来的GAS",some_wallet_plugins_ignore:"一些钱包插件如 MetaMask, 可能会忽略这个值",nonce_cannot_be_empty:"Nonce 不能为空!",gas_price_cannot_be_empty:"Gas Price 不能为空!",missing_tx_info_get_again:"缺少 TX 信息，请重新获取！",transaction_found:"获取交易信息成功",transaction_not_found:"交易未找到，请重试",transaction_online:"交易已上链，无法进行加速",tx_size_for_acceleration:"加速交易的交易大小",tx_size_for_acceleration_desc:"CPFP 加速技术将包括与您想要加速的交易相关的所有未确认交易，并计算交易大小。",pre_acceleration_min_fee_rate:"预加速最低费率",pre_acceleration_fee_rate_desc:"与您想要加速的交易相关的所有未确认交易中的最低费率"}},en:{transactionSpeed:{cfpf_cannot_cancel:"CFPF cannot cancel transactions",increase:"Increase by ?% each time",zero_fee:"0 Fees",wallet_mode:"Wallet Mode",speed_up_count:"Speed Up Count",unlimited_speed_up_tips:"Unlimited Speed Up requires Private Key Mode",speed_up_once:"Once",unlimited_speed_up:"Unlimited",speed_up_max_limit:"Speed Up Max Limit",rbf_not_supported:"RBF is not supported for the current transaction, switched to CFPF.",transaction_already_success:"The current transaction has already been successfully processed and cannot be sped up or canceled.",tx_speed:"Speed Up Transaction",tx_cancel:"Cancel Transaction",enter_transaction_hash:"Enter the transaction hash to accelerate",override_original_gas:"Override original GAS",some_wallet_plugins_ignore:"Some wallet plugins like MetaMask may ignore this value",nonce_cannot_be_empty:"Nonce cannot be empty!",gas_price_cannot_be_empty:"Gas Price cannot be empty!",missing_tx_info_get_again:"Missing TX information. Please get it again!",transaction_found:"Transaction found.",transaction_not_found:"Transaction not found.",transaction_online:"The transaction is on the chain, the transaction speed is not available ",tx_size_for_acceleration:"TX size for acceleration",tx_size_for_acceleration_desc:"CPFP acceleration technology will include all unconfirmed transactions associated with the transaction you want to accelerate and calculate the transaction size.",pre_acceleration_min_fee_rate:"Pre-acceleration min fee rate",pre_acceleration_fee_rate_desc:"The lowest fee rate among all unconfirmed transactions associated with the transaction you want to accelerate"}}}},"86d2":function(e,t,a){"use strict";a("4a46")},"9ac7":function(e,t,a){"use strict";var n=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.gwei>0,expression:"gwei > 0"}],staticClass:"gasBox",on:{click:e.onGoGasPrice}},[t("el-progress",{staticClass:"progressBox",attrs:{type:"circle","stroke-width":4,percentage:e.updateProgress,width:66,color:"#42b983","show-text":!1,height:66}}),t("div",{staticClass:"textBox"},[t("span",{class:{num:!0,font12:369===parseInt(e.chainId)}},[e._v(e._s(e.gwei))]),t("span",{staticClass:"text"},[e._v("Gwei")])])],1)},r=[],s=a("c7eb"),c=a("1da1"),i=a("5530"),o=a("d2c8"),u=a("2f62"),l={components:{},props:{},data:function(){return{gwei:0,updateProgress:0,t1:null}},computed:Object(i["a"])({},Object(u["b"])(["isPc","language","chainId"])),watch:{chainId:function(e){e&&(this.getGasPrice(),this.setProgress())}},deactivated:function(){},beforeDestroy:function(){clearInterval(this.t1)},created:function(){},methods:{onGoGasPrice:function(){var e=this.$ethUtils.chainIdToChainName(this.chainId),t=this.$router.resolve({path:"/gasPrice/".concat(e)});window.open(t.href,"_blank")},setProgress:function(){var e=this;this.t1=setInterval(Object(c["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.updateProgress<100?e.updateProgress+=5:(e.getGasPrice(),e.updateProgress=0);case 1:case"end":return t.stop()}}),t)}))),400)},getGasPrice:function(){var e=this;return Object(c["a"])(Object(s["a"])().mark((function t(){var a,n;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.$ethUtils.chainIdToChainName(e.chainId),t.next=3,Object(o["c"])(a);case 3:n=t.sent,e.gwei=Math.round(n.data["normal"].price/1e9);case 5:case"end":return t.stop()}}),t)})))()}}},p=l,d=(a("86d2"),a("2877")),h=Object(d["a"])(p,n,r,!1,null,"52a87875",null);t["a"]=h.exports},a426:function(e,t,a){"use strict";a("30d5d")},d2c8:function(e,t,a){"use strict";a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return w})),a.d(t,"a",(function(){return F}));var n=a("2909"),r=a("c7eb"),s=a("1da1"),c=(a("d9e2"),a("4e82"),a("caad"),a("d3b7"),a("159b"),a("b64b"),a("2532"),a("99af"),a("14d9"),a("b680"),a("25f0"),a("ab3e")),i=a("e6ce"),o=a("ed08"),u=a("5a50"),l=a("901e"),p=a.n(l),d=a("a835");function h(e){return _.apply(this,arguments)}function _(){return _=Object(s["a"])(Object(r["a"])().mark((function e(t){var a,n,s,o;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(c["a"])({url:i["a"][t].rpcNode,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_gasPrice",params:[]}});case 3:return a=e.sent,n=a.result,s={fast:{price:Math.ceil(1.03*n),estimated_seconds:0},normal:{price:Math.ceil(1.01*n),estimated_seconds:0},slow:{price:Math.ceil(n),estimated_seconds:0}},o={merlin:{slow:.05},b2:{normal:2e-7,slow:1e-7}},o[t]&&Object.keys(o[t]).forEach((function(e){s[e].price=1e9*o[t][e]})),e.abrupt("return",{data:s});case 11:return e.prev=11,e.t0=e["catch"](0),console.log(e.t0,"error"),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])}))),_.apply(this,arguments)}function b(e){return f.apply(this,arguments)}function f(){return f=Object(s["a"])(Object(r["a"])().mark((function e(t){var a,n,s=arguments;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=s.length>1&&void 0!==s[1]?s[1]:null,"aptos"!==t){e.next=7;break}return e.next=4,g();case 4:n=e.sent,e.next=34;break;case 7:if("btc"!==t){e.next=13;break}return e.next=10,P(a||"livenet");case 10:n=e.sent,e.next=34;break;case 13:if("btc_fractal"!==t){e.next=19;break}return e.next=16,P("fractal_mainnet");case 16:n=e.sent,e.next=34;break;case 19:if("sol"!==t){e.next=25;break}return e.next=22,y();case 22:n=e.sent,e.next=34;break;case 25:if("ckb"!==t){e.next=31;break}return e.next=28,O();case 28:n=e.sent,e.next=34;break;case 31:return e.next=33,h(t);case 33:n=e.sent;case 34:return e.abrupt("return",n);case 35:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function m(e){if(e.length<4)throw new Error("inputs len < 4");e=e.sort((function(e,t){return new p.a(e).gt(new p.a(t))?1:-1}));var t=Math.floor(e.length/2);return new p.a(e[t-1]).plus(new p.a(e[t])).plus(new p.a(e[t+1])).dividedToIntegerBy(3)}function w(e){return x.apply(this,arguments)}function x(){return x=Object(s["a"])(Object(r["a"])().mark((function e(t){var a,s,o,l,h,_,b,f,w,x,g,v,y,k,O,j,P;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("number"===typeof t&&(t=d["a"].chainIdToChainName(t)),e.prev=1,![].concat(Object(n["a"])(u["h"]),["opbnb","bsc"]).includes(t)){e.next=4;break}return e.abrupt("return",!1);case 4:return e.next=6,Object(c["a"])({url:i["a"][t].rpcNode,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_feeHistory",params:["0xa","latest",[25,75]]}});case 6:a=e.sent,s=a.result,o=[],l=0;case 10:if(!(l<s.reward.length)){e.next=23;break}h=0;case 12:if(!(h<s.reward[l].length)){e.next=20;break}if(_=new p.a(s.reward[l][h]),!_.lte(0)){e.next=16;break}return e.abrupt("continue",17);case 16:o.push(_);case 17:h++,e.next=12;break;case 20:l++,e.next=10;break;case 23:b=m(o),f=new p.a(0),w=0,x=new p.a(1e19),g=new p.a(0),v=0;case 29:if(!(v<s.baseFeePerGas.length)){e.next=37;break}if(y=new p.a(s.baseFeePerGas[v]),!y.lte(0)){e.next=33;break}return e.abrupt("continue",34);case 33:y.gt(x)?x=y:y.lt(g)?g=y:(f=f.plus(y),w+=1);case 34:v++,e.next=29;break;case 37:if(k=f.dividedToIntegerBy(w),O=k.multipliedBy(1.63).plus(b),j=O.div(1e9).toFixed(),P=b.div(1e9).toFixed(),k=k.div(1e9).toFixed(0),O.toNumber()&&k&&P&&O){e.next=44;break}return e.abrupt("return",!1);case 44:return e.abrupt("return",{maxFee:new p.a(j).toFixed(3),priorityFee:new p.a(P).toFixed(2),baseFee:new p.a(k).toString()});case 47:return e.prev=47,e.t0=e["catch"](1),console.log(e.t0),e.abrupt("return",!1);case 51:case"end":return e.stop()}}),e,null,[[1,47]])}))),x.apply(this,arguments)}function g(){return v.apply(this,arguments)}function v(){return v=Object(s["a"])(Object(r["a"])().mark((function e(){var t,a,n;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=1e3,e.prev=1,e.next=4,Object(c["a"])({url:"https://fullnode.mainnet.aptoslabs.com/v1/estimate_gas_price",method:"get",isProxy:!0,data:{}});case 4:return a=e.sent,n={fast:{price:a.prioritized_gas_estimate*t/Math.pow(10,8),estimated_seconds:0},normal:{price:a.gas_estimate*t/Math.pow(10,8),estimated_seconds:0},slow:{price:a.deprioritized_gas_estimate*t/Math.pow(10,8),estimated_seconds:0}},e.abrupt("return",{data:n});case 9:return e.prev=9,e.t0=e["catch"](1),console.log("error"),e.next=14,g();case 14:return e.abrupt("return",e.sent);case 15:case"end":return e.stop()}}),e,null,[[1,9]])}))),v.apply(this,arguments)}function y(){return k.apply(this,arguments)}function k(){return k=Object(s["a"])(Object(r["a"])().mark((function e(){var t,a,n,s;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(c["a"])({url:i["a"]["sol"].rpcNode,method:"post",data:{jsonrpc:"2.0",id:1,method:"getRecentBlockhash"}});case 3:if(t=e.sent,!t.result||!t.result.value){e.next=12;break}return a=t.result.value.feeCalculator,n=a.lamportsPerSignature,n/Math.pow(10,9),s={fast:{price:.01,estimated_seconds:0},normal:{price:.001,estimated_seconds:0},slow:{price:1e-4,estimated_seconds:0}},e.abrupt("return",{data:s});case 12:e.next=22;break;case 14:return e.prev=14,e.t0=e["catch"](0),console.log("error"),e.next=19,Object(o["G"])(5e3);case 19:return e.next=21,y();case 21:return e.abrupt("return",e.sent);case 22:case"end":return e.stop()}}),e,null,[[0,14]])}))),k.apply(this,arguments)}function O(){return j.apply(this,arguments)}function j(){return j=Object(s["a"])(Object(r["a"])().mark((function e(){var t,a,n;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(c["a"])({url:i["a"]["ckb"].rpcNode,method:"post",data:{id:1,jsonrpc:"2.0",method:"get_fee_rate_statistics",params:[]}});case 3:return t=e.sent,a=parseInt(t.result.mean),n={fast:{price:parseInt(1.5*a),estimated_seconds:0},normal:{price:a,estimated_seconds:0},slow:{price:parseInt(.8*a),estimated_seconds:0}},e.abrupt("return",{data:n});case 9:return e.prev=9,e.t0=e["catch"](0),console.log("error",e.t0),e.next=14,Object(o["G"])(5e3);case 14:return e.next=16,O();case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e,null,[[0,9]])}))),j.apply(this,arguments)}function P(){return N.apply(this,arguments)}function N(){return N=Object(s["a"])(Object(r["a"])().mark((function e(){var t,a,n,s,i=arguments;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=i.length>0&&void 0!==i[0]?i[0]:"livenet",console.log(t),e.prev=2,"livenet"!==t){e.next=10;break}return e.next=6,Object(c["a"])({url:"https://mempool.space/api/v1/fees/recommended",method:"get",data:{}});case 6:n=e.sent,a={fast:{price:n.fastestFee,estimated_seconds:0},normal:{price:n.halfHourFee,estimated_seconds:0},slow:{price:n.hourFee,estimated_seconds:0}},e.next=14;break;case 10:return e.next=12,Object(c["a"])({url:"https://s.1b.tc/888/btc?fee=true&network="+t,method:"get",data:{}});case 12:s=e.sent,a={fast:{price:s.data.list[2].feeRate,estimated_seconds:600},normal:{price:s.data.list[1].feeRate,estimated_seconds:1800},slow:{price:s.data.list[0].feeRate,estimated_seconds:3600}};case 14:return e.abrupt("return",{data:a});case 17:return e.prev=17,e.t0=e["catch"](2),console.log("error"),e.next=22,Object(o["G"])(5e3);case 22:return e.next=24,P(t);case 24:return e.abrupt("return",e.sent);case 25:case"end":return e.stop()}}),e,null,[[2,17]])}))),N.apply(this,arguments)}function F(e){return["cro","iotx","dogechain","ckb"].includes(e)?0:["eth","xdc","scroll","bevm","satoshivm","merlin","linea"].includes(e)?2:["opbnb"].includes(e)?9:["fil"].includes(e)?6:["mode"].includes(e)?5:["taiko"].includes(e)?9:["b2"].includes(e)?7:["aptos","sol","xterio","blast"].includes(e)?4:["op","mantle","arb","arbnova","zksync-era","base","zora","bitlayer"].includes(e)?3:1}},f30b:function(e,t,a){"use strict";a("99af");var n=function(){var e=this,t=e._self._c;return t("el-dialog",{staticClass:"dialog",attrs:{width:e.isPc?"400px":"90%",visible:e.isShowDialog,height:"400px",modal:!0,title:"".concat(e.$t("".concat(e.viewName,".tx_").concat(e.type))," Success !")},on:{"update:visible":function(t){e.isShowDialog=t}}},[t("div",{staticClass:"dialogBox"},[t("el-alert",{staticClass:"smaillBox",attrs:{title:"TX HASH",type:"success",closable:!1,"show-icon":""}},[t("el-link",{staticClass:"link",attrs:{type:"success",target:"_blank",href:e.$ethUtils.getScanLink(e.chainName,"tx",e.tx,e.sonChainName)}},[e._v(e._s(e._f("miniAddress")(e.tx))+" ")]),t("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.tx,expression:"tx",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"copy",attrs:{type:"text"}},[t("svg-icon",{attrs:{"icon-class":"copy"}})],1)],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"success",plain:""},on:{click:e.onDonationFn}},[e._v(e._s(e.$t("common.coffee")))]),t("el-button",{attrs:{type:"success"},on:{click:e.show}},[e._v(e._s(e.$t("common.confirm")))])],1)])},r=[],s=a("5530"),c=a("2f62"),i="transactionSpeed",o={inject:["onCopySuccess","onDonation","onOpenNewTab"],components:{},props:{type:{type:String,require:!0},chainName:{type:String,require:!0},sonChainName:{type:String,require:!1,default:""},tx:{type:String}},data:function(){return{viewName:i,loading:!0,isShowDialog:!1}},computed:Object(s["a"])({},Object(c["b"])(["isPc","account","chainId","btcNetwork"])),watch:{},created:function(){},mounted:function(){},methods:{show:function(){this.isShowDialog=!this.isShowDialog},onDonationFn:function(){"btc"===this.chainName&&this.onOpenNewTab({path:"/tools/donate?chainName=btc"}),"btc_fractal"===this.chainName?this.onOpenNewTab({path:"/tools/donate?chainName=btc_fractal"}):this.onOpenNewTab({path:"/tools/donate?chainName=eth"})}}},u=o,l=(a("a426"),a("2877")),p=Object(l["a"])(u,n,r,!1,null,"ecbdbdec",null);t["a"]=p.exports}}]);