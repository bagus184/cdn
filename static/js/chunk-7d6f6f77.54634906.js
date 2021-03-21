(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d6f6f77"],{"336a":function(e,t,a){"use strict";a("e301")},4779:function(e,t,a){"use strict";a("f557")},"4aba":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("el-dialog",{attrs:{width:e.isPc?"600px":"auto",title:e.$t("createToken.success"),visible:e.isShowTokenAddressDialog},on:{"update:visible":function(t){e.isShowTokenAddressDialog=t}}},[a("p",[e._v(e._s(e.$t("createToken.tokenaddress")))]),a("el-tag",[a("a",{attrs:{target:"_blank",href:e.blockTxurl+"/token/"+e.createTokenAddress}},[e._v(e._s(e.createTokenAddress))])]),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.isShowTokenAddressDialog=!1}}},[e._v(e._s(e.$t("createToken.confirm")))])],1)],1),a("Card",{attrs:{icon:e.route_icon,title:e.route_title,desc:e.$t("createToken.pageDesc")}},[a("el-form",{ref:"form",staticClass:"form",attrs:{"label-position":e.isPc?"left":"top",rules:e.rules,model:e.form,"label-width":"160px"}},[a("el-form-item",{attrs:{label:e.$t("createToken.tokenName"),prop:"tokenName"}},[a("el-input",{attrs:{placeholder:"e.g. Good Luck Token"},model:{value:e.form.tokenName,callback:function(t){e.$set(e.form,"tokenName",t)},expression:"form.tokenName"}})],1),a("el-form-item",{attrs:{label:e.$t("createToken.symbol"),prop:"symbol"}},[a("el-input",{attrs:{placeholder:"e.g. GLT"},model:{value:e.form.symbol,callback:function(t){e.$set(e.form,"symbol",t)},expression:"form.symbol"}})],1),a("el-form-item",{attrs:{label:e.$t("createToken.initialSupply"),prop:"initialSupply"}},[a("el-input-number",{staticClass:"inputNum",attrs:{min:1},model:{value:e.form.initialSupply,callback:function(t){e.$set(e.form,"initialSupply",t)},expression:"form.initialSupply"}})],1),a("el-form-item",{attrs:{label:e.$t("createToken.decimals"),prop:"decimals"}},[a("el-input-number",{staticClass:"inputNum",attrs:{min:1,max:18},model:{value:e.form.decimals,callback:function(t){e.$set(e.form,"decimals",t)},expression:"form.decimals"}})],1),a("el-form-item",{attrs:{label:e.$t("createToken.config"),prop:"config"}},[a("el-checkbox-group",{model:{value:e.form.config,callback:function(t){e.$set(e.form,"config",t)},expression:"form.config"}},e._l(e.options,(function(t){return a("el-checkbox",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1),a("el-form-item",[a("el-alert",{attrs:{title:e.$t("createToken.alert"),type:"warning",effect:"dark"}})],1),a("el-form-item",{staticClass:"btnBox"},[a("el-button",{staticClass:"item-btn",attrs:{loading:e.loading,size:"medium",type:"primary"},on:{click:e.onCreatToken}},[e._v(" "+e._s(e.$t("createToken.createBtn"))+" ")])],1)],1),a("el-card",{directives:[{name:"show",rawName:"v-show",value:e.txList.length>0,expression:"txList.length > 0"}],staticClass:"box-card",staticStyle:{"margin-top":"40px"}},[a("DealList",{attrs:{list:e.txList,"block-txurl":e.blockTxurl}}),a("el-alert",{directives:[{name:"show",rawName:"v-show",value:e.tx_status,expression:"tx_status"}],staticClass:"tips",attrs:{title:e.$t("createToken.success"),type:"success",closable:!1}})],1)],1)],1)},s=[],r=(a("d81d"),a("b0c0"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("96cf"),a("1da1")),o=a("5530"),i=a("2f62"),c={zh:{createToken:{tokenaddress:"代币地址:",tokenName:"代币名称:",tokenNameValidate:"请输入代币名称",symbol:"缩写符号:",symbolValidate:"请输入缩写符号",initialSupply:"发行数量:",initialSupplyValidate:"请输入发行数量",decimals:"小数位数(1-18):",decimalsValidate:"请输入小数位数",config:"其他配置:",createBtn:"立即创建",alert:"创建成功后会自动把代币转入创建者地址中",success:"代币创建成功，请前往区块浏览器或钱包查看！",pageDesc:"简单、快速、便捷",confirm:"确定",config_0:"可销毁",config_1:"可增发",config_2:"可暂停",config_3:"提取以太",config_4:"提取代币",config_5:"黑名单"}},en:{createToken:{tokenaddress:"Token Address:",tokenName:"Token Name:",tokenNameValidate:"Please enter token name",symbol:"Symbol:",symbolValidate:"Please enter symbol",initialSupply:"Initial Supply:",initialSupplyValidate:"Please enter initial supply",decimals:"Decimals(1-18):",decimalsValidate:"Please enter decimals",config:"Other Config:",createBtn:"Create Token",alert:"After successful creation, the token will be automatically transferred to the creator's address",success:"Token created successfully, please go to the block browser or wallet to check!",pageDesc:"Simple, Fast, Convenient",confirm:"Confirm",config_0:"Can Burn",config_1:"Can Mint",config_2:"Can Pause",config_3:"Extract Eth",config_4:"Extract Token",config_5:"Blacklist"}}},l=a("a835"),u=a("4e2c"),d=a("12f9"),m=a("ed08"),f=a("5ba3"),p=a("6e11"),k=a.n(p),b=a("4360"),g=a("81ad"),h=a.n(g),x="createToken",_=[{constant:!1,inputs:[{name:"_name",type:"string"},{name:"_symbol",type:"string"},{name:"_decimals",type:"uint256"},{name:"_supply",type:"uint256"}],name:"generateToken",outputs:[{name:"",type:"address"}],payable:!0,stateMutability:"payable",type:"function"}],y={name:"CreateToken",inject:["onCheckConnect"],components:{Card:d["a"],DealList:u["a"]},data:function(){return{isShowTokenAddressDialog:!1,createTokenAddress:"",options:[],txList:[],route_title:"",route_icon:"",blockTxurl:"",c_address:"",tx_status:!1,loading:!1,rules:{},form:{tokenName:"",symbol:"",initialSupply:21e6,decimals:18,config:[]}}},computed:Object(o["a"])({},Object(i["b"])(["isConnect","account","isPc"])),created:function(){this.$i18n.getLocaleMessage("en")[x]||(this.$i18n.mergeLocaleMessage("en",c.en),this.$i18n.mergeLocaleMessage("zh",c.zh)),this.rules={tokenName:[{required:!0,message:this.$t("createToken.tokenNameValidate"),trigger:"blur"}],symbol:[{required:!0,message:this.$t("createToken.symbolValidate"),trigger:"blur"}],initialSupply:[{required:!0,message:this.$t("createToken.initialSupplyValidate"),trigger:"blur"}],decimals:[{required:!0,message:this.$t("createToken.decimalsValidate"),trigger:"blur"}]},this.options=[{value:0,label:this.$t("createToken.config_0")},{value:1,label:this.$t("createToken.config_1")},{value:2,label:this.$t("createToken.config_2")},{value:5,label:this.$t("createToken.config_5")}]},mounted:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:window.route_name=e.$route.name,t.t0=window.route_name,t.next="HecocreateToken"===t.t0?4:"BsccreateToken"===t.t0?7:10;break;case 4:return e.route_title=e.$t("route.hecocreateToken"),e.route_icon="coin-heco",t.abrupt("break",12);case 7:return e.route_title=e.$t("route.bsccreateToken"),e.route_icon="coin-bnb",t.abrupt("break",12);case 10:e.route_title=e.$t("route.createToken"),e.route_icon="coin-eth2";case 12:case"end":return t.stop()}}),t)})))()},methods:{resetState:function(){this.blockHash="",console.log(this.isConnect,this.account)},onRecommendAddMetamask:function(){var e=arguments,t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n=e.length>0&&void 0!==e[0]?e[0]:"default",s=window.web3.currentProvider,s.sendAsync({method:"metamask_watchAsset",params:{type:"ERC20",options:{address:n,symbol:t.form.symbol,decimals:t.form.decimals}},id:Math.round(1e5*Math.random())},(function(e,t){console.log("11111",e,t)}));case 3:case"end":return a.stop()}}),a)})))()},onCreatToken:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n,s,r,o,i,c,u,d,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs["form"].validate();case 2:if(e.onCheckConnect()){t.next=4;break}return t.abrupt("return");case 4:t.t0=window.route_name,t.next="HecocreateToken"===t.t0?7:"BsccreateToken"===t.t0?11:15;break;case 7:if(128===l["a"].getChainId()||256===l["a"].getChainId()){t.next=10;break}return e.$notify.info({title:"Alert",message:e.$t("common.no_connect_heconetwork"),duration:0}),t.abrupt("return");case 10:return t.abrupt("break",15);case 11:if(56===l["a"].getChainId()||97===l["a"].getChainId()){t.next=14;break}return e.$notify.info({title:"Alert",message:e.$t("common.no_connect_bsc_network"),duration:0}),t.abrupt("return");case 14:return t.abrupt("break",15);case 15:return e.resetState(),e.loading=!0,e.c_address=l["a"].resolveCreateTokenAddress(),e.blockTxurl=l["a"].resolveLinkOnEtherscan(),t.t1=parseInt,t.next=22,l["a"].sendEthcall({to:e.c_address,data:"0x"+h.a.methodID("txFee",[]).toString("hex")});case 22:return t.t2=t.sent,a=(0,t.t1)(t.t2),e.form.config.length>0&&(a+=a*e.form.config.length*.25),n=new k.a(_,e.c_address),t.next=28,n.methods.generateToken(e.form.tokenName,e.form.symbol,e.form.decimals,e.form.initialSupply).encodeABI({from:l["a"].getAccount()});case 28:return s=t.sent,r=2e6,o={from:l["a"].getAccount(),to:e.c_address,value:Object(f["toHex"])(a),data:s,chainId:l["a"].getChainId(),gas:Object(f["toHex"])(r)},i=e,t.prev=32,t.next=35,l["a"].sendTransaction(o);case 35:c=t.sent,t.next=43;break;case 38:return t.prev=38,t.t3=t["catch"](32),e.$message({message:i.$t("common.transactionError")+": "+t.t3,type:"error"}),e.loading=!1,t.abrupt("return");case 43:return e.txList.push({address:c,status:0}),t.next=46,l["a"].getTransactionSuccess(c);case 46:if(u=t.sent,200!==u.code){t.next=77;break}return d=u.transactionHash,e.txList=e.txList.map((function(e){return e.address===d&&(e.status=1),e})),e.tx_status=!0,e.loading=!1,t.next=54,Object(m["i"])(3e3);case 54:return t.t4=l["a"],t.t5=[],t.t6=["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x0000000000000000000000000000000000000000000000000000000000000000","0x000000000000000000000000"+l["a"].getAccount().replace("0x","")],t.t7=parseInt,t.next=60,l["a"].sendEthblockNumber();case 60:return t.t8=t.sent,t.t9=(0,t.t7)(t.t8),t.t10=(t.t9-1e3).toString(16),t.t11={address:t.t5,topics:t.t6,fromBlock:t.t10,toBlock:"latest"},t.next=66,t.t4.sendEthgetLogs.call(t.t4,t.t11);case 66:if(p=t.sent,!(p.length>0)){t.next=75;break}if(console.log(p[p.length-1]),p[p.length-1].transactionHash!==u.transactionHash){t.next=75;break}if(e.isShowTokenAddressDialog=!0,e.createTokenAddress=p[p.length-1].address,1!==b["a"].state.eth.walletType){t.next=75;break}return t.next=75,e.onRecommendAddMetamask(p[p.length-1].address);case 75:t.next=78;break;case 77:e.$message({message:"Error：".concat(u.message),type:"error"});case 78:case"end":return t.stop()}}),t,null,[[32,38]])})))()}}},T=y,v=(a("336a"),a("2877")),w=Object(v["a"])(T,n,s,!1,null,"f9a00e46",null);t["default"]=w.exports},"4e2c":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{directives:[{name:"show",rawName:"v-show",value:e.list.length>0,expression:"list.length > 0"}],staticClass:"dealList"},e._l(e.list,(function(t,n){return a("li",{key:t.address},[a("div",{staticClass:"left"},[a("span",{staticClass:"index"},[e._v(e._s(n+1))]),a("a",{staticClass:"address",attrs:{target:"_blank",href:e.blockTxurl+"/tx/"+t.address}},[e._v(e._s(t.address))])]),a("div",{staticClass:"right"},[a("span",{staticClass:"status"},[0===t.status?a("i",{staticClass:"el-icon-loading"}):1===t.status?a("i",{staticClass:"el-icon-success"}):2===t.status?a("i",{staticClass:"el-icon-error",staticStyle:{color:"#F05252"}}):e._e()])])])})),0)},s=[],r={props:{list:{type:Array,required:!0},blockTxurl:{type:String,required:!0}},data:function(){return{}},created:function(){},mounted:function(){},methods:{}},o=r,i=(a("4779"),a("2877")),c=Object(i["a"])(o,n,s,!1,null,"cfd1f11a",null);t["a"]=c.exports},e301:function(e,t,a){},f557:function(e,t,a){}}]);