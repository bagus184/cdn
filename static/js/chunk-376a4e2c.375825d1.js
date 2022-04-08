(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-376a4e2c"],{"0131":function(t,e,a){"use strict";a("6c61")},"61f1":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"header"},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"nft"}}),a("span",[t._v("NFT Mint - Get timely Mint data")])],1),a("div",{staticClass:"content"},[a("div",{staticClass:"content-header"},[a("div",{staticClass:"header-left"},[a("el-radio-group",{attrs:{size:"small"},model:{value:t.filterType,callback:function(e){t.filterType=e},expression:"filterType"}},[a("el-radio-button",{attrs:{label:0}},[t._v("All")]),a("el-radio-button",{attrs:{label:1}},[t._v("Buy")]),a("el-radio-button",{attrs:{label:2}},[t._v("Free")])],1),a("el-button",{staticStyle:{"margin-left":"14px"},attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:t.onFastMint}},[t._v(t._s(t.$t("nftFreeMint.customMint")))])],1),a("div",{staticClass:"header-right"},t._l(t.chainList,(function(e){return a("el-tag",{key:e,staticClass:"tag",attrs:{effect:t.chainName===e?"dark":"light"},on:{click:function(a){return t.onChangeChainName(e)}}},[t._v(" "+t._s(e.toUpperCase())+" ")])})),1)]),a("ul",{staticClass:"ul"},t._l(t.arr,(function(e,n){return a("li",{directives:[{name:"show",rawName:"v-show",value:0===t.filterType||0!==e.value&&1===t.filterType||0===e.value&&2===t.filterType,expression:"filterType === 0 || (item.value !== 0 && filterType === 1) || (item.value === 0 && filterType === 2)"}],key:n,staticClass:"li"},[a("div",{staticClass:"li-left"},[0===e.total_val||"0xbe8c5922"===e.inputData?a("div",{staticClass:"scam"},[a("el-tooltip",{attrs:{effect:"dark",content:t.$t("nftFreeMint.scam"),placement:"top"}},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"warning"}})],1)],1):t._e(),e.logo?a("img",{attrs:{src:e.logo,alt:"logo"}}):t._e()]),a("div",{staticClass:"li-right"},[a("h3",[a("span",[t._v(t._s(e.name))])]),a("div",{staticClass:"addressBox"},[a("p",{staticClass:"address"},[a("span",{staticClass:"label"},[t._v("Contact: ")]),a("a",{staticClass:"value",attrs:{target:"_blank",href:t.$coinInfo[t.chainName].blockBrowser+"/address/"+e.address}},[t._v(t._s(e.address))])]),a("p",{staticClass:"address"},[a("span",{staticClass:"label"},[t._v("Owner: ")]),a("a",{staticClass:"value",attrs:{target:"_blank",href:t.$coinInfo[t.chainName].blockBrowser+"/address/"+e.owner}},[t._v(t._s(e.owner))])])]),a("p",{staticClass:"desc"},[t._v(" "+t._s(e.description)+" ")]),a("ul",{staticClass:"infoBox"},[a("li",[a("span",{staticClass:"label"},[t._v("Price")]),0!==e.value?a("span",{staticClass:"value"},[t._v(" "+t._s(e.value)+" "+t._s(t.$coinInfo[t.chainName].symbol)+" ")]):a("span",{staticClass:"value"},[a("el-tag",{attrs:{size:"mini"}},[t._v("Free")])],1)]),e.price?a("li",[a("span",{staticClass:"label"},[t._v("Opensea Price")]),a("span",{staticClass:"value"},[t._v(" "+t._s(e.price)+" "+t._s(t.$coinInfo[t.chainName].symbol)+" ")])]):t._e(),e.total_val>=0?a("li",[a("span",{staticClass:"label"},[t._v("Opensea total volume")]),a("span",{staticClass:"value"},[t._v(" "+t._s(e.total_val)+" "+t._s(t.$coinInfo[t.chainName].symbol)+" ")])]):t._e(),a("li",[a("span",{staticClass:"label"},[t._v("Recent mint")]),a("span",{staticClass:"value"},[t._v(t._s(t.hashAmount[e.address]))])]),a("li",[a("span",{staticClass:"label"},[t._v("Gas Price")]),a("span",{staticClass:"value"},[t._v(t._s(e.gasPrice))])]),a("li",[a("span",{staticClass:"label"},[t._v("Mint method")]),a("span",{staticClass:"value"},[t._v(" "+t._s(e.inputData)+" ")])])]),a("div",{staticClass:"btnBox"},[e.blockBrowser?a("a",{staticClass:"iconBox",attrs:{href:e.blockBrowser,target:"_blank"}},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"etherscan"}})],1):t._e(),e.twitter?a("a",{staticClass:"iconBox",attrs:{href:e.twitter,target:"_blank"}},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"twitter"}})],1):t._e(),e.discord_url?a("a",{staticClass:"iconBox",attrs:{href:e.discord_url,target:"_blank"}},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"discord"}})],1):t._e(),e.tg?a("a",{staticClass:"iconBox",attrs:{href:e.tg,target:"_blank"}},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"telegram"}})],1):t._e(),e.link?a("a",{staticClass:"iconBox",attrs:{href:e.link,target:"_blank"}},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"website"}})],1):t._e(),e.slug?a("a",{staticClass:"iconBox",attrs:{href:e.slug,target:"_blank"}},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"opensea"}})],1):t._e(),a("el-button",{staticClass:"tryMint",attrs:{type:"success",size:"mini"},on:{click:function(a){return t.tryMint(e.txData)}}},[t._v("Try Mint")]),a("el-button",{staticClass:"tryMint",staticStyle:{"margin-left":"14px"},attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.onFastMint(e)}}},[t._v(t._s(t.$t("nftFreeMint.fastMint")))])],1)])])})),0)]),a("Loading",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{bg:"#424141"}})],1)},s=[],r=a("4833"),i=a("efe2"),c=(a("37de"),a("1e34"),a("dfe9"),a("29ed"),a("5d80"),a("6a61"),a("781b")),o=a("52c1"),l={zh:{nftFreeMint:{scam:"疑是骗局",customMint:"自定义Mint",fastMint:"快速Mint"}},en:{nftFreeMint:{scam:"Suspected Scam",customMint:"Custom Mint",fastMint:"Fast Mint"}}},u=a("85d4"),p=a("a835"),d="nftFreeMint",h={name:d,inject:["onCopySuccess","onCheckConnect"],components:{Loading:c["a"]},data:function(){return{loading:!1,filterType:0,hashAmount:{},chainName:"eth",chainList:["eth"],arr:[]}},computed:Object(i["a"])({},Object(o["b"])(["isConnect","account","isPc","language"])),created:function(){this.$i18n.getLocaleMessage("en")[d]||(this.$i18n.mergeLocaleMessage("en",l.en),this.$i18n.mergeLocaleMessage("zh",l.zh))},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=t,e.t1=u["toHex"],e.next=4,t.blockNumber();case 4:e.t2=e.sent,e.t3=e.t2-300,e.t4=(0,e.t1)(e.t3),e.t0.getMintData.call(e.t0,e.t4,"latest");case 8:case"end":return e.stop()}}),e)})))()},methods:{onFastMint:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e={};t&&(e={tokenAddress:t.address}),this.$router.push({path:"/nft/customMint/".concat(this.chainName),query:e})},init:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},onChangeChainName:function(t){this.chainName=t},tryMint:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,s,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n={from:p["a"].getAccount()?p["a"].getAccount():window.onwebkitanimationstartaddress,to:t.to,gas:t.gas,value:t.value,data:t.input.toLowerCase().replace(t.from.replace("0x","").toLowerCase(),p["a"].getAccount()?p["a"].getAccount().replace("0x","").toLowerCase():window.onwebkitanimationstartaddress.replace("0x","").toLowerCase())},a.next=3,e.$ajax({url:e.$coinInfo[e.chainName].rpcNode,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[n,"latest"]}});case 3:if(s=a.sent,null===s||void 0===s||!s.error){a.next=7;break}return e.$message.error(s.error.message),a.abrupt("return");case 7:if(e.$message({message:"Seems to work Mint!",type:"success"}),e.onCheckConnect()){a.next=10;break}return a.abrupt("return");case 10:if(1===p["a"].getChainId()){a.next=13;break}return e.$message.error("Network error! "),a.abrupt("return");case 13:return a.next=15,p["a"].sendTransaction(n);case 15:r=a.sent,e.$message({message:r,type:"success"});case 17:case"end":return a.stop()}}),a)})))()},getMintData:function(t){var e=arguments,a=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var s,r,i,c,o,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.length>1&&void 0!==e[1]?e[1]:"latest",n.next=3,a.MintData(t,s);case 3:if(r=n.sent,r){n.next=7;break}return a.getMintData(Object(u["toHex"])(parseInt(t)+50),"latest"),n.abrupt("return");case 7:a.loading=!0,i=r.length-1;case 9:if(!(i>=0)){n.next=57;break}if(n.prev=10,3!==r[i].topics.length){n.next=13;break}return n.abrupt("continue",54);case 13:if(!a.hashAmount[r[i].address]){n.next=18;break}return a.hashAmount[r[i].address]++,n.abrupt("continue",54);case 18:a.hashAmount[r[i].address]=1;case 19:return n.next=21,a.getTransactionByHash(r[i].transactionHash);case 21:return c=n.sent,n.next=24,a.getOpensea(r[i].address);case 24:return o=n.sent,n.next=27,a.getOpenseaPrice(null===o||void 0===o?void 0:o.collection.slug);case 27:return l=n.sent,n.t0=a.arr,n.t1=!(null===o||void 0===o||!o.collection.twitter_username)&&"https://twitter.com/"+o.twitter_username,n.t2=null===o||void 0===o?void 0:o.collection.telegram_url,n.t3=null===o||void 0===o?void 0:o.external_link,n.t4=null===o||void 0===o?void 0:o.collection.discord_url,n.t5="".concat(a.$coinInfo[a.chainName].blockBrowser,"/tx/")+r[i].transactionHash,n.t6=null===o||void 0===o?void 0:o.name,n.t7="https://opensea.io/collection/"+(null===o||void 0===o?void 0:o.collection.slug),n.t8=o.description,n.t9=c.value/Math.pow(10,18),n.t10=c.from,n.t11=c.gasPrice/Math.pow(10,9),n.next=42,a.getInputType(c.input);case 42:n.t12=n.sent,n.t13=r[i].address,n.t14=null===l||void 0===l?void 0:l.floor_price,n.t15=null===l||void 0===l?void 0:l.total_volume,n.t16=c,n.t17=null===o||void 0===o?void 0:o.image_url,n.t18={twitter:n.t1,tg:n.t2,link:n.t3,discord_url:n.t4,blockBrowser:n.t5,name:n.t6,slug:n.t7,description:n.t8,value:n.t9,owner:n.t10,gasPrice:n.t11,inputData:n.t12,address:n.t13,price:n.t14,total_val:n.t15,txData:n.t16,logo:n.t17},n.t0.push.call(n.t0,n.t18),n.next=54;break;case 52:n.prev=52,n.t19=n["catch"](10);case 54:i--,n.next=9;break;case 57:a.loading=!1;case 58:case"end":return n.stop()}}),n,null,[[10,52]])})))()},getOpensea:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,n="https://api.opensea.io/api/v1/asset_contract/".concat(t),a.next=4,e.$ajax({headers:{Accept:"application/json","X-API-KEY":"087158b0d16f4e73a708168cefa9123c"},url:n,method:"get"});case 4:return s=a.sent,a.abrupt("return",s);case 8:a.prev=8,a.t0=a["catch"](0);case 10:case"end":return a.stop()}}),a,null,[[0,8]])})))()},getOpenseaPrice:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,n="https://api.opensea.io/api/v1/collection/"+t+"/stats",a.next=4,e.$ajax({headers:{Accept:"application/json","X-API-KEY":"7f9609f1472b4fe1a6cbf8e375c8529b"},url:n,method:"get"});case 4:return s=a.sent,a.abrupt("return",s.stats);case 8:a.prev=8,a.t0=a["catch"](0);case 10:case"end":return a.stop()}}),a,null,[[0,8]])})))()},getInputType:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$ajax({url:"https://raw.githubusercontent.com/ethereum-lists/4bytes/master/signatures/"+t.substring(0,10).replace("0x",""),method:"get",timeout:2e3});case 3:if(n=a.sent,!n){a.next=8;break}return a.abrupt("return",n);case 8:return a.abrupt("return",t.substring(0,10));case 9:a.next=14;break;case 11:return a.prev=11,a.t0=a["catch"](0),a.abrupt("return",t.substring(0,10));case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))()},blockNumber:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$ajax({url:t.$coinInfo[t.chainName].rpcNode,method:"post",data:{jsonrpc:"2.0",method:"eth_blockNumber",params:[],id:83}});case 2:return a=e.sent,e.abrupt("return",parseInt(a.result));case 4:case"end":return e.stop()}}),e)})))()},MintData:function(t){var e=arguments,a=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var s,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.length>1&&void 0!==e[1]?e[1]:"latest",n.next=3,a.$ajax({url:a.$coinInfo[a.chainName].rpcNode,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_getLogs",params:[{topics:["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x0000000000000000000000000000000000000000000000000000000000000000"],fromBlock:t,toBlock:s}]}});case 3:return r=n.sent,n.abrupt("return",r.result);case 5:case"end":return n.stop()}}),n)})))()},getTransactionByHash:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$ajax({url:e.$coinInfo[e.chainName].rpcNode,method:"post",data:{jsonrpc:"2.0",method:"eth_getTransactionByHash",params:[t],id:1}});case 2:return n=a.sent,a.abrupt("return",n.result);case 4:case"end":return a.stop()}}),a)})))()}}},v=h,m=(a("0131"),a("5d22")),f=Object(m["a"])(v,n,s,!1,null,"29a447bf",null);e["default"]=f.exports},"6c61":function(t,e,a){}}]);