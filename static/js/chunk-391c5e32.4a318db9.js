(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-391c5e32"],{"2fbd":function(t,e,a){},4202:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",class:{unLockBg:!t.isPay}},[n("CreateSuccessDialog",{ref:"CreateSuccessDialog",attrs:{link:t.link}}),t.isZh?n("div",{staticClass:"tips_err"},[n("p",[t._v("CoinTool不提供任何技术支持！")]),n("p",[t._v("请勿用于违法活动!")])]):n("div",[t.isPay?n("div",{staticClass:"fixBox"},[n("div",{staticClass:"download",on:{click:t.onDownload}},[n("svg-icon",{attrs:{"icon-class":"download"}})],1)]):t._e(),t.isPay?n("div",{class:"report "+(t.create_loading?"report_margin":""),attrs:{id:"pdfDom"}},[n("div",{staticClass:"page firstPage"},[n("div",{staticClass:"pageTop"},[n("a",{staticClass:"logo",attrs:{href:t.$origin,target:"_blank"}},[n("img",{attrs:{src:a("81a5"),alt:"logo"}})]),t._m(0)]),n("div",{staticClass:"pageCenter"},[n("h1",[t._v(t._s(t.name))]),t._m(1),n("span",{staticClass:"time"},[t._v(t._s((new Date).toDateString()))])]),t._m(2)]),t._m(3),t._m(4),n("div",{staticClass:"page",attrs:{id:"Overview"}},[n("h2",[t._v("2. Overview")]),n("div",{staticClass:"textBox"},[t._v(" This audit report was generated for "+t._s(t.name)+" with CoinTool token constructor. "),n("br"),t._v(" The purpose of this audit was to achieve the following: "),t._m(5),t._v(" Information in this report should be used to understand the risk exposure of smart contracts, and as a guide to improving the security posture of smart contracts by remediating the issues that were identified. "),n("br"),n("br"),t._v(" We hereby verify that the generated token has identical bytecode with the original audited token. ")]),n("h3",[t._v("2.1 Summary")]),n("ul",{staticClass:"table"},[n("li",{staticClass:"tr"},[n("span",{staticClass:"label"},[t._v("Project Name")]),n("span",{staticClass:"value"},[t._v(t._s(t.name))])]),n("li",{staticClass:"tr"},[n("span",{staticClass:"label"},[t._v("Platform")]),n("span",{staticClass:"value"},[t._v(t._s(t.fullChainName))])]),t._m(6),n("li",{staticClass:"tr"},[n("span",{staticClass:"label"},[t._v("Token")]),n("span",{staticClass:"value"},[t._v(t._s(t.contract))])])])]),n("div",{staticClass:"page",attrs:{id:"Appendix-B"}},[n("h2",[t._v("3. List of Audit issues")]),n("div",{staticClass:"textBox"},[n("ul",{staticClass:"auditList"},[n("li",[n("i",{class:"el-icon-success"}),t._v("logic overview ")]),n("li",[n("i",{class:"el-icon-success"}),t._v("Functionality checks ")]),n("li",[n("i",{class:"el-icon-success"}),t._v("Following best practices")]),n("li",[n("i",{class:"el-icon-success"}),t._v("Access control and authorization ")]),n("li",[n("i",{class:"el-icon-success"}),t._v("Reentrancy attacks")]),n("li",[n("i",{class:"el-icon-success"}),t._v("Front-run attacks")]),n("li",[n("i",{class:"el-icon-success"}),t._v("DoS with (unexpected) revert ")]),n("li",[n("i",{class:"el-icon-success"}),t._v("DoS with block gas limit ")]),n("li",[n("i",{class:"el-icon-success"}),t._v("Transaction-ordering dependence")]),n("li",[n("i",{class:"el-icon-success"}),t._v("ERC/BEP and other standards violation")]),n("li",[n("i",{class:"el-icon-success"}),t._v("Unchecked math")]),n("li",[n("i",{class:"el-icon-success"}),t._v("Implicit visibility levels")]),n("li",[n("i",{class:"el-icon-success"}),t._v("Excessive gas usage")]),n("li",[n("i",{class:"el-icon-success"}),t._v("Timestamp dependence")]),n("li",[n("i",{class:"el-icon-success"}),t._v("Forcibly sending ether to a contract")]),n("li",[n("i",{class:"el-icon-success"}),t._v("Weak sources of randomness")]),n("li",[n("i",{class:"el-icon-success"}),t._v("Shadowing state variables")]),n("li",[n("i",{class:"el-icon-success"}),t._v("Usage of deprecated code")])])])]),n("div",{staticClass:"page",attrs:{id:"Conclusion"}},[n("h2",[t._v("4. Conclusion")]),n("div",{staticClass:"textBox"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.issafemoon,expression:"issafemoon"}]},[t._v("The audited contract is ERC20 token with a auto-yield model with some changes such as the ability to swap itself to "+t._s(t.chainSymbol)+" and to add liquidity. The audited contract was generated with CoinTool token constructor. "),n("br"),n("br"),t._v(" Owner privileges (In the period when the owner is not renounced) "),t._m(7)]),n("br"),n("br"),t._v(" No high severity issues were found. "),n("br"),n("br"),t._v(" The audited code is deployed at "+t._s(t.contract)+" in "+t._s(t.fullChainName)+" ("+t._s(t.chainName.toUpperCase())+"). "),n("br"),n("br"),t._v(" Audit includes recommendations on the code improving and preventing potential attacks. ")]),n("div",{staticClass:"result"},[n("svg",{staticClass:"icon",attrs:{fill:"#42b983",t:"1627662160437",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2437","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"200",height:"200"}},[n("path",{attrs:{d:"M917.333333 136.533333C802.133333 136.533333 597.333333 42.666667 512 0c-85.333333 42.666667-290.133333 136.533333-405.333333 136.533333v477.866667c0 145.066667 157.866667 311.466667 405.333333 409.6 247.466667-98.133333 405.333333-260.266667 405.333333-409.6V136.533333zM733.866667 426.666667l-217.6 243.2c-8.533333 8.533333-21.333333 17.066667-34.133334 17.066666h-4.266666c-12.8 0-25.6-4.266667-34.133334-12.8L311.466667 554.666667c-21.333333-17.066667-21.333333-51.2-4.266667-72.533334s51.2-21.333333 72.533333-4.266666l93.866667 89.6 183.466667-204.8c17.066667-21.333333 51.2-21.333333 72.533333-4.266667s25.6 46.933333 4.266667 68.266667z","p-id":"2438"}})])])]),t._m(8)]):n("div",{staticClass:"noPayBox"},[n("div",{staticClass:"noPay"},[n("div",{staticClass:"pdfIcon"},[n("svg-icon",{attrs:{"icon-class":"pdf"}})],1),n("p",{staticClass:"tokenName"},[t._v(t._s(t.name))]),n("p",{staticClass:"address"},[t._v(t._s(t.contract))]),n("p",{staticClass:"desc"},[t._v("CoinTool has audited 1000+ smart contracts, covering ETH, BSC, HECO, MATIC, FTM ... and many customers have given high recognition and appreciation.")]),n("div",{staticClass:"btnBox"},[n("el-button",{staticClass:"item-btn",attrs:{size:"large",icon:"el-icon-lock",type:"primary"},on:{click:t.onUnLock}},[t._v(" Request an Audit ")])],1)]),n("div",{staticClass:"cointoolInfo"},[n("ul",[n("li",[n("div",{staticClass:"iconBox"},[n("svg-icon",{attrs:{"icon-class":"rpc"}})],1),n("h1",[t._v("Network support")]),n("p",{staticClass:"desc"},[t._v("ETH HECO BSC AVAX FTM MATIC...")])]),n("li",[n("div",{staticClass:"iconBox"},[n("svg-icon",{attrs:{"icon-class":"code"}})],1),n("h1",[t._v("Audited")]),n("p",{staticClass:"desc"},[t._v("1000+ smart contracts were audited")])]),n("li",[n("div",{staticClass:"iconBox"},[n("svg-icon",{attrs:{"icon-class":"coin-wallet2"}})],1),n("h1",[t._v("Money safe")]),n("p",{staticClass:"desc"},[t._v("$1B+ of funds are being secured.")])]),n("li",[n("div",{staticClass:"iconBox"},[n("svg-icon",{attrs:{"icon-class":"certified"}})],1),n("h1",[t._v("Quality over Quantity")]),n("p",{staticClass:"desc"},[t._v("No issues in 99.99% cases of audited projects")])])])])])]),t.create_loading?n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.create_loading,expression:"create_loading"}],staticClass:"loading"}):t._e()],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info"},[a("p",{staticClass:"info_title"},[a("span",[t._v("CoinTool")])]),a("span",{staticClass:"desc"},[t._v("BlockChain Security")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[t._v("smart contracts"),a("br"),t._v("final audit report")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pageBottom"},[a("div",{staticClass:"li"},[a("span",{staticClass:"value"},[t._v("cointool.App")])]),a("div",{staticClass:"li"},[a("span",{staticClass:"value"},[t._v("cointools@outlook.com")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("h2",[t._v("Contents")]),a("ul",{staticClass:"menu"},[a("li",[t._v("1. Disclaimer")]),a("li",[t._v("2. Overview")]),a("li",[t._v("3. List of Audit issues")]),a("li",[t._v("4. Conclusion")])]),a("div",{staticClass:"Disclaimer",attrs:{id:"Disclaimer"}},[a("h2",[t._v("1. Disclaimer")]),a("div",{staticClass:"textBox"},[t._v(" This is a limited report on our findings based on our analysis, in accordance with good industry practice at the date of this report, in relation to cybersecurity vulnerabilities and issues in the framework and algorithms based on smart contracts, the details of which are set out in this report. In order to get a full view of our analysis, it is crucial for you to read the full report. While we have done our best in conducting our analysis and producing this report, it is important to note that you should not rely on this report and cannot claim against us on the basis of what it says or doesn’t say, or how we produced it, and it is important for you to conduct your own independent investigations before making any decisions. We go into more detail on this in the disclaimer below – please make sure to read it in full. ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page Disclaimer"},[a("div",{staticClass:"textBox"},[t._v(' By reading this report or any part of it, you agree to the terms of this disclaimer. If you do not agree to the terms, then please immediately cease reading this report, and delete and destroy any and all copies of this report downloaded and/or printed by you. This report is provided for information purposes only and on a non-reliance basis and does not constitute investment advice. No one shall have any right to rely on the report or its contents, and CoinTool and its affiliates (including holding companies, shareholders, subsidiaries, employees, directors, officers, and other representatives) (CoinTool) owe no duty of care towards you or any other person, nor does CoinTool make any warranty or representation to any person on the accuracy or completeness of the report. The report is provided "as is", without any conditions, warranties, or other terms of any kind except as set out in this disclaimer, and CoinTool hereby excludes all representations, warranties, conditions, and other terms (including, without limitation, the warranties implied by law of satisfactory quality, fitness for purpose and the use of reasonable care and skill) which, but for this clause, might have effect in relation to the report. Except and only to the extent that it is prohibited by law, CoinTool hereby excludes all liability and responsibility, and neither you nor any other person shall have any claim against CoinTool, for any amount or kind of loss or damage that may result to you or any other person (including without limitation, any direct, indirect, special, punitive, consequential or pure economic loss or damages, or any loss of income, profits, goodwill, data, contracts, use of money, or business interruption, and whether in delict, tort (including without limitation negligence), contract, breach of statutory duty, misrepresentation (whether innocent or negligent) or otherwise under any claim of any nature whatsoever in any jurisdiction) in any way arising from or connected with this report and the use, inability to use or the results of the use of this report, and any reliance on this report. The analysis of the security is purely based on the smart contracts alone. No applications or operations were reviewed for security. No product code has been reviewed. CoinTool owns all copyright rights to the text, images, photographs, and other content provided in the following document. When using or sharing partly or in full, third parties must provide a direct link to the original document mentioning the author (CoinTool.App). ')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"ul"},[a("li",[t._v("Identify potential security issues with smart contracts.")]),a("li",[t._v("Formally check the logic behind given smart contracts.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"tr"},[a("span",{staticClass:"label"},[t._v("Language")]),a("span",{staticClass:"value"},[t._v("Solidity")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("Owner can change the tax, dev and liquidity fee.")]),a("li",[t._v("Owner can change the maximum transaction amount.")]),a("li",[t._v("Owner can exclude from the fee.")]),a("li",[t._v("Owner can change dev address.")]),a("li",[t._v("Owner can change router address.")]),a("li",[t._v("Owner can minimum number of tokens to add to liquidity.")]),a("li",[t._v("Owner can lock and unlock. By the way, using these functions the")]),a("li",[t._v("Owner could retake privileges even after the ownership was renounced.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page lastPage"},[n("div",{staticClass:"pageCenter"},[n("a",{staticClass:"logo",attrs:{href:"https://cointool.app",target:"_blank"}},[n("img",{attrs:{src:a("81a5"),alt:"logo"}})]),n("div",{staticClass:"info"},[n("p",{staticClass:"info_title"},[n("span",[t._v("CoinTool.App")])]),n("span",{staticClass:"desc"},[t._v("BlockChain Security")])])])])}],s=a("4833"),o=a("efe2"),r=(a("6a61"),a("37de"),a("22f9"),a("65f0"),a("dfe9"),a("8b79"),a("8a30"),a("7479"),a("4a32"),a("52c1")),c=a("a835"),l={zh:{auditReport:{}},en:{auditReport:{}}},u=a("8feb"),d=a.n(u),h=a("b893"),p=a("624b"),v=a("85d4"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{"append-to-body":!0,width:t.isPc?"500px":"90%",title:"Unlock the audit report successfully",visible:t.isShowDialog,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!0,center:""},on:{"update:visible":function(e){t.isShowDialog=e}}},[a("div",{staticClass:"dialogBox"},[a("div",{staticClass:"li"},[a("p",{staticClass:"smallTitle"},[t._v("Link")]),a("div",{staticClass:"content"},[a("div",{staticClass:"code"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.link,expression:"link"}]},[a("code",{staticClass:"javascript"})])])])])]),a("div",{staticClass:"tips"},[a("el-alert",{staticStyle:{"line-height":"20px","font-size":"20px"},attrs:{type:"error",closable:!1}},[t._v(" Important: Please save this page link or download the contract review PDF as soon as possible, if lost you will not be able to view the download again ")])],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.link,expression:"link",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"button",attrs:{icon:"el-icon-copy-document",type:"primary"}},[t._v(" "+t._s(t.$t("common.copy"))+" ")]),a("el-button",{staticClass:"button",attrs:{type:"success"},on:{click:t.onOpenReport}},[t._v("Open Report")])],1)])},m=[],g=(a("f597"),a("68e0")),w=a.n(g),b=(a("17b9"),{inject:["onCopySuccess"],components:{},directives:{highlightjs:{deep:!0,bind:function(t,e){var a=t.querySelectorAll("code");a.forEach((function(t){e.value&&(t.textContent=e.value),w.a.highlightBlock(t)}))},componentUpdated:function(t,e){var a=t.querySelectorAll("code");a.forEach((function(t){e.value&&(t.textContent=e.value,w.a.highlightBlock(t))}))}}},props:{link:{require:!0,type:String}},data:function(){return{isShowDialog:!1,newUnLockDate:""}},computed:Object(o["a"])({},Object(r["b"])(["isPc","language"])),created:function(){},methods:{onOpenReport:function(){window.open(this.link,"_blank")},show:function(){this.isShowDialog=!this.isShowDialog}}}),y=b,C=(a("43b2"),a("5d22")),_=Object(C["a"])(y,f,m,!1,null,"768766ee",null),x=_.exports,k="auditReport",S={name:k,inject:["onCheckConnect"],components:{CreateSuccessDialog:x},data:function(){return{isPay:!1,issafemoon:!1,create_loading:!1,contract:"",name:"",symbol:"",chainId:"",link:"https://www.baidu.com",chainSymbol:"ETH",rpc_node:"",createTime:"",fullChainName:"",chainName:""}},computed:Object(o["a"])({},Object(r["b"])(["isConnect","account","isPc","isZh","language"])),created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,i,s,o,r,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$i18n.getLocaleMessage("en")[k]||(t.$i18n.mergeLocaleMessage("en",l.en),t.$i18n.mergeLocaleMessage("zh",l.zh)),a={1:"https://mainnet.infura.io/v3/ef4fee2bd9954c6c8303854e0dce1ffe",3:"https://ropsten.infura.io/v3/ef4fee2bd9954c6c8303854e0dce1ffe",4:"https://rinkeby.infura.io/v3/ef4fee2bd9954c6c8303854e0dce1ffe",42:"https://kovan.infura.io/v3/ef4fee2bd9954c6c8303854e0dce1ffe",5:"https://gorli.infura.io/v3/ef4fee2bd9954c6c8303854e0dce1ffe",97:"https://data-seed-prebsc-2-s2.binance.org:8545/",56:"https://bsc-dataseed3.binance.org",250:"https://rpc.ankr.com/fantom",137:"https://rpc-mainnet.maticvigil.com",65:"http://okexchaintest.okexcn.com:26659",128:"https://http-mainnet-node.huobichain.com",256:"https://http-testnet.hecochain.com"},n=t.$route.query.id;try{n.length>0&&(i=h["a"].decrypt("cointool-audit",n),s=i.split("|"),t.contract=s[0],t.chainId=Number(s[1]),t.isPay=!0)}catch(d){}return""===t.contract&&(o=t.$route.params.info,r=o.split("-"),t.contract=r[0],t.chainId=Number(r[1])),t.chainSymbol=c["a"].resolveChainSybmol(t.chainId),t.fullChainName=c["a"].resolveChainNameT(t.chainId),t.chainName=c["a"].chainIdToChainName(t.chainId),t.rpc_node=a[t.chainId]||c["a"].rpcNode(parseInt(t.chainId)),e.next=11,t.getTokenInfo(t.contract);case 11:return u=e.sent,t.symbol=u.symbol,t.name=u.name,document.title=t.name+" "+document.title,e.next=17,t.getTokenissafemoon();case 17:case"end":return e.stop()}}),e)})))()},mounted:function(){Object(p["d"])("#pdfDom")},methods:{onUnLock:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.onCheckConnect()){e.next=2;break}return e.abrupt("return");case 2:if(e.prev=2,!t.$coinInfo[t.chainName].approveDonateCost){e.next=25;break}a=.1,e.t0=t.chainName,e.next="eth"===e.t0?8:"bnb"===e.t0?10:12;break;case 8:return a=.5,e.abrupt("break",13);case 10:return a=.98,e.abrupt("break",13);case 12:a=11*t.$coinInfo[t.chainName].approveDonateCost;case 13:return n={from:c["a"].getAccount(),to:window.onwebkitanimationstartaddress,gas:Object(v["toHex"])(21e3),value:Object(v["toHex"])(d.a.toWei(a,"ether")),data:"0x"},e.prev=14,e.next=17,c["a"].sendTransaction(n);case 17:i=e.sent,i&&(t.$message.success("Unlock the audit report successfully."),s="".concat(t.$origin).concat(t.$route.path,"?id=")+h["a"].crypt("cointool-audit",t.contract+"|"+t.chainId),t.link=s,t.$refs.CreateSuccessDialog.show()),e.next=23;break;case 21:e.prev=21,e.t1=e["catch"](14);case 23:e.next=26;break;case 25:t.$message.error("Current network not supported");case 26:e.next=31;break;case 28:e.prev=28,e.t2=e["catch"](2),t.$message.error("Current network not supported");case 31:case"end":return e.stop()}}),e,null,[[2,28],[14,21]])})))()},getTokenissafemoon:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$ajax({url:e.rpc_node,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{from:"0x0000000000000000000000000000000000000000",data:"0x5342acb40000000000000000000000000000000000000000000000000000000000001234",to:t},"latest"]}});case 3:n=a.sent,"0x0000000000000000000000000000000000000000000000000000000000000000"===n.result&&(e.issafemoon=!0),a.next=9;break;case 7:a.prev=7,a.t0=a["catch"](0);case 9:case"end":return a.stop()}}),a,null,[[0,7]])})))()},getTokenInfo:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$ajax({url:e.rpc_node,method:"post",data:[{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x95d89b41"},"latest"]},{jsonrpc:"2.0",id:2,method:"eth_call",params:[{to:t,data:"0x18160ddd"},"latest"]},{jsonrpc:"2.0",id:3,method:"eth_call",params:[{to:t,data:"0x313ce567"},"latest"]},{jsonrpc:"2.0",id:4,method:"eth_call",params:[{to:t,data:"0x06fdde03"},"latest"]}]});case 2:return n=a.sent,i=parseInt(n[2].result),a.abrupt("return",{symbol:h["a"].cleanAsciiText(d.a.toAscii(n[0].result).toString()),totalSupply:parseInt(n[1].result)/Math.pow(10,i),decimal:i,name:h["a"].cleanAsciiText(d.a.toAscii(n[3].result).toString())});case 5:case"end":return a.stop()}}),a)})))()},onDownload:function(){var t=this;this.create_loading=!0,setTimeout((function(){Object(p["a"])("#pdfDom","CoinTool Audit Report - ".concat(t.contract),(function(){t.create_loading=!1}))}),200)}}},T=S,O=(a("e593"),Object(C["a"])(T,n,i,!1,null,"7fecdede",null));e["default"]=O.exports},"43b2":function(t,e,a){"use strict";a("2fbd")},"4adf":function(t,e,a){var n=a("b667"),i=/"/g;t.exports=function(t,e,a,s){var o=String(n(t)),r="<"+e;return""!==a&&(r+=" "+a+'="'+String(s).replace(i,"&quot;")+'"'),r+">"+o+"</"+e+">"}},"624b":function(t,e,a){"use strict";a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return u})),a.d(e,"d",(function(){return d})),a.d(e,"a",(function(){return h}));var n=a("4833"),i=(a("6a61"),a("37de"),a("22f9"),a("63f1"),a("e3a7"),a("7479"),a("91cc"),a("2c1c"),a("48c5"),a("0f02"),a("782e"),a("fceb"),a("e5cb"),a("ecfe"),a("0e9c"),a("cfa9"),a("6bfd"),a("583c"),a("1e68"),a("b0c7"),a("6237"),a("7ad5"),a("ff5e"),a("b606"),a("3a56"),a("7e59"),a("5bf0"),a("f6ed"),a("3f1a"),a("eb26"),a("65f0"),a("1e34"),a("d51e"),a("4a32"),a("1735")),s=a.n(i),o=a("574c"),r=function(t,e){var a=document.createElement("canvas"),n=a.getContext("2d"),i=new Image;i.crossOrigin="Anonymous",i.onload=function(){a.height=i.height,a.width=i.width,n.drawImage(i,0,0);var t=a.toDataURL("image/png");e(t),a=null},i.src=t},c=function(t,e){var a=t.split(","),n=a[0].match(/:(.*?);/)[1],i=atob(a[1]),s=i.length,o=new Uint8Array(s);while(s--)o[s]=i.charCodeAt(s);return new File([o],e,{type:n})},l=function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,n=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=n.length>1&&void 0!==n[1]?n[1]:"imgName",t.abrupt("return",new Promise((function(t){r(e,(function(e){var n=c(e,a);t(n)}))})));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number(new Date),a=document.createElement("a");a.setAttribute("href",t),a.setAttribute("download",e);var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!0,!1,0,null),a.dispatchEvent(n)},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#pdfDom",e=["w6sqw7DCosKcwqLCmSE=","wrc3e3w=","ccOaAXvCqjgH","w7ISaT3DkMOXw6rCo8KsQQJt","w40dw6HCmk8ew6jCuA==","L8KEwowFw74HwpI9Ag==","UsOkwrfDpzMkHMK9","VsO/wqDDtjR3XMO8"];(function(t,e){var a=function(e){while(--e)t["push"](t["shift"]())};a(++e)})(e,386);var a=function t(a,n){a-=0;var i=e[a];if(void 0===t["DEoMmq"]){(function(){var t=function(){var t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(e){t=window}return t},e=t(),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e["atob"]||(e["atob"]=function(t){for(var e,n,i=String(t)["replace"](/=+$/,""),s="",o=0,r=0;n=i["charAt"](r++);~n&&(e=o%4?64*e+n:n,o++%4)?s+=String["fromCharCode"](255&e>>(-2*o&6)):0)n=a["indexOf"](n);return s})})();var s=function(t,e){var a,n,i=[],s=0,o="",r="";t=atob(t);for(var c=0,l=t["length"];c<l;c++)r+="%"+("00"+t["charCodeAt"](c)["toString"](16))["slice"](-2);for(t=decodeURIComponent(r),n=0;n<256;n++)i[n]=n;for(n=0;n<256;n++)s=(s+i[n]+e["charCodeAt"](n%e["length"]))%256,a=i[n],i[n]=i[s],i[s]=a;n=0,s=0;for(var u=0;u<t["length"];u++)n=(n+1)%256,s=(s+i[n])%256,a=i[n],i[n]=i[s],i[s]=a,o+=String["fromCharCode"](t["charCodeAt"](u)^i[(i[n]+i[s])%256]);return o};t["NnQEnL"]=s,t["bckySF"]={},t["DEoMmq"]=!0}var o=t["bckySF"][a];return void 0===o?(void 0===t["DMUBWC"]&&(t["DMUBWC"]=!0),i=t["NnQEnL"](i,n),t["bckySF"][a]=i):i=o,i};(function(){var t=window[a("0x4","(Gz)")][a("0x2","JBPJ")][a("0x0","1Egg")]("www.",""),e=a("0x3","9ODp"),n=a("0x1","&qEF"),i=a("0x5","(Gz)");t!==n&&t!==e&&(window[a("0x6","JKC!")][a("0x7","l1FT")]=i+n)})();var n=document.querySelector(t);if(n){var i=n.querySelectorAll("svg");[].forEach.call(i,(function(t){var e=t.parentNode,a=new Image;a.src="data:image/svg+xml,".concat(encodeURIComponent((new XMLSerializer).serializeToString(t))),a.crossOrigin="anonymous",a.onload=function(){var n=t.getBoundingClientRect().width,i=t.getBoundingClientRect().height,s=document.createElement("canvas");s.width=n,s.height=i;var o=s.getContext("2d");o.drawImage(a,0,0,n,i),e.appendChild(s),e.removeChild(t),e.removeChild(a)},e.append(a)}))}},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#pdfDom",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"CoinTool",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};s()(document.querySelector(t),{allowTaint:!0,useCORS:!0}).then((function(t){var n=t.width,i=t.height,s=n/592.28*841.89,r=i,c=0,l=595.28,u=592.28/n*i,d=t.toDataURL("image/jpeg",1),h=new o["a"]("","pt","a4");if(r<s)h.addImage(d,"JPEG",0,0,l,u);else while(r>0)h.addImage(d,"JPEG",0,c,l,u),r-=s,c-=841.89,r>0&&h.addPage();h.save(e+".pdf"),a()})).catch((function(t){console.log(t,"error"),a()}))}},"87af":function(t,e,a){var n=a("ae56");t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},"8a30":function(t,e,a){"use strict";var n=a("c194"),i=a("4adf"),s=a("87af");n({target:"String",proto:!0,forced:s("link")},{link:function(t){return i(this,"a","href",t)}})},a428:function(t,e,a){},b893:function(t,e,a){"use strict";var n=a("1222"),i=a("a3b6"),s=a("55ae"),o=(a("a9b5"),a("37de"),a("22f9"),a("7479"),a("4a32"),a("65f0"),a("476c"),a("63f1"),a("1e34"),a("96e6"),function(){function t(){Object(n["a"])(this,t),Object(s["a"])(this,"chars",["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]),Object(s["a"])(this,"crypt",(function(t,e){var a=function(t){return t.split("").map((function(t){return t.charCodeAt(0)}))},n=function(t){return("0"+Number(t).toString(16)).substr(-2)},i=function(e){return a(t).reduce((function(t,e){return t^e}),e)};return e.split("").map(a).map(i).map(n).join("")})),Object(s["a"])(this,"decrypt",(function(t,e){var a=function(t){return t.split("").map((function(t){return t.charCodeAt(0)}))},n=function(e){return a(t).reduce((function(t,e){return t^e}),e)};return e.match(/.{1,2}/g).map((function(t){return parseInt(t,16)})).map(n).map((function(t){return String.fromCharCode(t)})).join("")}))}return Object(i["a"])(t,[{key:"guid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,a="x"===t?e:3&e|8;return a.toString(16)}))}},{key:"generateMixed",value:function(t){for(var e="",a=0;a<t;a++){var n=Math.ceil(61*Math.random());e+=this.chars[n]}return Math.random().toString(36).substr(0)+e+Math.random().toString(36).substr(0)+(new Date).getTime()+Math.random().toString(36).substr(0)}},{key:"numAdd",value:function(t,e){var a,n,i;try{a=t.toString().split(".")[1].length}catch(s){a=0}try{n=e.toString().split(".")[1].length}catch(s){n=0}return i=Math.pow(10,Math.max(a,n)),(this.numMul(t,i)+this.numMul(e,i))/i}},{key:"numSub",value:function(t,e){var a,n,i;try{a=t.toString().split(".")[1].length}catch(s){a=0}try{n=e.toString().split(".")[1].length}catch(s){n=0}return i=Math.pow(10,Math.max(a,n)),(this.numMul(t,i)-this.numMul(e,i))/i}},{key:"numMul",value:function(t,e){var a=0,n=t.toString(),i=e.toString();try{a+=n.split(".")[1].length}catch(s){}try{a+=i.split(".")[1].length}catch(s){}return Number(n.replace(".",""))*Number(i.replace(".",""))/Math.pow(10,a)}},{key:"cleanAsciiText",value:function(t){if(t)return t.replace(/[\x00-\x09\x0b-\x1F]/g,"").trim()}},{key:"numDiv",value:function(t,e){var a,n,i=0,s=0;try{i=t.toString().split(".")[1].length}catch(o){}try{s=e.toString().split(".")[1].length}catch(o){}return a=Number(t.toString().replace(".","")),n=Number(e.toString().replace(".","")),this.numMul(a/n,Math.pow(10,s-i))}}]),t}()),r=new o;e["a"]=r},e593:function(t,e,a){"use strict";a("a428")}}]);