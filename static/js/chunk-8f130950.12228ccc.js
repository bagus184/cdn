(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8f130950"],{16:function(t,e){},3974:function(t,e,a){t.exports=a.p+"static/img/pixiu.be978f03.png"},"3db91":function(t,e,a){},"3f16":function(t,e,a){},"624b":function(t,e,a){"use strict";a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return d})),a.d(e,"d",(function(){return u})),a.d(e,"a",(function(){return p}));var s=a("4833"),n=(a("6a61"),a("37de"),a("22f9"),a("63f1"),a("e3a7"),a("7479"),a("91cc"),a("2c1c"),a("48c5"),a("0f02"),a("782e"),a("fceb"),a("e5cb"),a("ecfe"),a("0e9c"),a("cfa9"),a("6bfd"),a("583c"),a("1e68"),a("b0c7"),a("6237"),a("7ad5"),a("ff5e"),a("b606"),a("3a56"),a("7e59"),a("5bf0"),a("f6ed"),a("3f1a"),a("eb26"),a("65f0"),a("1735")),i=a.n(n),o=a("574c"),r=function(t,e){var a=document.createElement("canvas"),s=a.getContext("2d"),n=new Image;n.crossOrigin="Anonymous",n.onload=function(){a.height=n.height,a.width=n.width,s.drawImage(n,0,0);var t=a.toDataURL("image/png");e(t),a=null},n.src=t},c=function(t,e){var a=t.split(","),s=a[0].match(/:(.*?);/)[1],n=atob(a[1]),i=n.length,o=new Uint8Array(i);while(i--)o[i]=n.charCodeAt(i);return new File([o],e,{type:s})},l=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a,s=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:"imgName",t.abrupt("return",new Promise((function(t){r(e,(function(e){var s=c(e,a);t(s)}))})));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number(new Date),a=document.createElement("a");a.setAttribute("href",t),a.setAttribute("download",e);var s=document.createEvent("MouseEvents");s.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!0,!1,0,null),a.dispatchEvent(s)},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#pdfDom",e=document.querySelector(t);if(e){var a=e.querySelectorAll("svg");[].forEach.call(a,(function(t){var e=t.parentNode,a=new Image;a.src="data:image/svg+xml,".concat(encodeURIComponent((new XMLSerializer).serializeToString(t))),a.crossOrigin="anonymous",a.onload=function(){var s=t.getBoundingClientRect().width,n=t.getBoundingClientRect().height,i=document.createElement("canvas");i.width=s,i.height=n;var o=i.getContext("2d");o.drawImage(a,0,0,s,n),e.appendChild(i),e.removeChild(t),e.removeChild(a)},e.append(a)}))}},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#pdfDom",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"CoinTool",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};i()(document.querySelector(t),{allowTaint:!0,useCORS:!0}).then((function(t){var s=t.width,n=t.height,i=s/592.28*841.89,r=n,c=0,l=595.28,d=592.28/s*n,u=t.toDataURL("image/jpeg",1),p=new o["a"]("","pt","a4");if(r<i)p.addImage(u,"JPEG",0,0,l,d);else while(r>0)p.addImage(u,"JPEG",0,c,l,d),r-=i,c-=841.89,r>0&&p.addPage();p.save(e+".pdf"),a()})).catch((function(t){console.log(t,"error"),a()}))}},"66ce":function(t,e,a){"use strict";a("3db91")},"95a7":function(t,e,a){"use strict";a("c724")},"96b8":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:"container "+(t.isLoadComplete?"miniContainer":"")},[a("div",{staticClass:"createBox"},[a("div",{staticClass:"boxCenter"},[a("div",{staticClass:"coinIcon"},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"certified"}})],1),a("h1",{staticClass:"title"},[t._v("CoinTool "+t._s(t.$t("route.auditContract")))]),a("div",{staticClass:"switchBox"},[a("el-select",{staticStyle:{width:"100%"},attrs:{size:t.isPc?"large":"medium"},model:{value:t.chainName,callback:function(e){t.chainName=e},expression:"chainName"}},t._l(t.chainList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[a("span",{staticStyle:{float:"left"}},[t._v(t._s(e.label))]),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"16px"}},[a("svg-icon",{staticClass:"icon",style:"color:"+t.$coinInfo[e.value].color,attrs:{"icon-class":t.$coinInfo[e.value].icon}})],1)])})),1)],1),a("div",{staticClass:"inputBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"input",attrs:{type:"text",size:t.isPc?"large":"mini",placeholder:t.$t("auditContract.inputPlaceholder")},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.address,expression:"address"}],staticClass:"clearBox",on:{click:function(e){t.address=""}}},[a("i",{staticClass:"el-icon-error icon"})]),a("div",{staticClass:"icon",on:{click:t.onStartCheck}},[a("i",{class:t.loading?"el-icon-loading":"el-icon-search"})])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoadComplete,expression:"!isLoadComplete"}],staticClass:"desc"},[a("el-alert",{staticStyle:{"line-height":"18px"},attrs:{type:"success",closable:!1}},[a("div",{domProps:{innerHTML:t._s(t.$t("auditContract.desc",{chain:t.supportChainListStr}))}})])],1)])]),t.isLoadComplete?a("div",{staticClass:"scrollBox"},[a("div",{staticClass:"contentBox"},[a("div",{staticClass:"backBox",on:{click:t.onBack}},[a("i",{staticClass:"el-icon-back icon"})]),a("ul",{staticClass:"tabs"},t._l(t.tabsList,(function(e){return a("li",{key:e.value,class:{on:e.value===t.tabsActive},on:{click:function(a){t.tabsActive=e.value}}},[t._v(" "+t._s(e.label)+" ")])})),0),a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.tabsActive,expression:"tabsActive === 0"}],staticClass:"downloadBox"},[a("div",{staticClass:"download",on:{click:t.onDownloadImg}},[t.downloadImgLoading?a("i",{staticClass:"el-icon-loading"}):a("svg-icon",{attrs:{"icon-class":"downloadImage"}})],1),a("div",{staticClass:"download",on:{click:t.onDownloadPdf}},[t.downloadPdfLoading?a("i",{staticClass:"el-icon-loading"}):a("svg-icon",{attrs:{"icon-class":"downloadPdf"}})],1),a("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.shareLink,expression:"shareLink",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"download"},[a("i",{staticClass:"el-icon-share"})])]),a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.tabsActive,expression:"tabsActive === 0"}],ref:"imageTofile",staticClass:"tabBox",attrs:{id:"pdfDom"}},[a("div",{staticClass:"report_header"},[t._m(0),a("div",{directives:[{name:"show",rawName:"v-show",value:t.downloadImgLoading||t.downloadPdfLoading,expression:"downloadImgLoading || downloadPdfLoading"}],staticClass:"time"},[t._v(t._s(t.create_time))])]),a("div",{staticClass:"box"},[a("p",{staticClass:"title"},[t._v(t._s(t.$t("auditContract.baseInfo")))]),a("ul",{staticClass:"list"},[a("li",[a("span",{staticClass:"label"},[t._v("Token Name")]),a("span",{staticClass:"value"},[t._v(t._s(t.tokenInfo.name))])]),a("li",[a("span",{staticClass:"label"},[t._v("Symbol")]),a("span",{staticClass:"value"},[t._v(t._s(t.tokenInfo.symbol))])]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("auditContract.chain")))]),a("span",{staticClass:"value"},[a("img",{staticClass:"chainNameIcon",attrs:{src:"https://cdn.jsdelivr.net/gh/CoinTool-App/cdn/pic/token/"+t.$coinInfo[t.chainName].symbol.toLowerCase()+".png"}}),t._v(" "+t._s(t.tokenInfo.fullChainName)+" ")])]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("auditContract.contractAddress")))]),a("span",{staticClass:"value"},[a("el-tag",{attrs:{size:"mini"}},[t._v(t._s(t._f("autoAddress")(t.address)))])],1)]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("auditContract.supply")))]),a("span",{staticClass:"value"},[t._v(t._s(t.tokenInfo.totalSupply))])]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("auditContract.decimal")))]),a("span",{staticClass:"value"},[t._v(t._s(t.tokenInfo.decimal))])]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("auditContract.lp_holder_count")))]),a("span",{staticClass:"value"},[t._v(t._s(t.chainInfo.lp_holder_count?t.chainInfo.lp_holder_count:0))])]),t.chainInfo.lp_total_supply?a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("auditContract.lp_total_supply")))]),a("span",{staticClass:"value"},[t._v(t._s(t.chainInfo.lp_total_supply.split(".")[0]))])]):t._e(),t.chainInfo.dex&&t.chainInfo.dex.length>0?a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("auditContract.swap_dex")))]),a("span",{staticClass:"value"},[t._v(t._s(t.chainInfo.dex[0].name))])]):t._e(),t.chainInfo.dex&&t.chainInfo.dex.length>0?a("li",[a("span",{staticClass:"label"},[t._v("Pair")]),a("span",{staticClass:"value"},[t._v(t._s(t._f("autoAddress")(t.chainInfo.dex[0].pair)))])]):t._e(),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("auditContract.owner_address")))]),a("span",{staticClass:"value"},[t._v(t._s(t._f("autoAddress")(t.chainInfo.owner_address)))])]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("auditContract.creator_address")))]),a("span",{staticClass:"value"},[t._v(t._s(t._f("autoAddress")(t.chainInfo.creator_address)))])]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("auditContract.is_open_source")))]),a("span",{staticClass:"result"},[a("IsSafe",{attrs:{"is-safe":Boolean(Number(t.chainInfo.is_open_source))}})],1),a("span",{staticClass:"value"},[a("YESNO",{attrs:{view:Boolean(Number(t.chainInfo.is_open_source))}})],1)])])]),a("div",{staticClass:"box"},[a("p",{staticClass:"title"},[t._v(t._s(t.$t("auditContract.risk_analysis")))]),a("ul",{staticClass:"list ventureAnalysis"},[a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("auditContract.buy_tax")))]),a("span",{staticClass:"value"},[t._v(t._s(t.chainInfo.buy_tax?(100*t.chainInfo.buy_tax).toFixed(3):0)+"%")])]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("auditContract.sell_tax")))]),a("span",{staticClass:"value"},[t._v(t._s(t.chainInfo.sell_tax?(100*t.chainInfo.sell_tax).toFixed(3):0)+"%")])]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("auditContract.is_honeypot")))]),a("span",{staticClass:"result"},[a("IsSafe",{attrs:{"is-show-pi-xiu":!0,"is-safe":!Boolean(Number(t.chainInfo.is_honeypot))}})],1),a("YESNO",{attrs:{view:Boolean(Number(t.chainInfo.is_honeypot))}})],1),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("auditContract.edit_tax")))]),a("span",{staticClass:"result"},[a("IsSafe",{attrs:{"is-show-pi-xiu":!0,"is-safe":!Boolean(Number(t.chainInfo.slippage_modifiable))}})],1),a("span",{staticClass:"value"},[a("YESNO",{attrs:{view:Boolean(Number(t.chainInfo.slippage_modifiable))}})],1)]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("auditContract.is_anti_whale")))]),a("span",{staticClass:"result"},[a("IsSafe",{attrs:{"is-safe":!Boolean(Number(t.chainInfo.is_anti_whale)),"is-warning":!0}})],1),a("span",{staticClass:"value"},[a("YESNO",{attrs:{view:Boolean(Number(t.chainInfo.is_anti_whale))}})],1)]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("auditContract.can_take_back_ownership")))]),a("span",{staticClass:"result"},[a("IsSafe",{attrs:{"is-safe":!Boolean(Number(t.chainInfo.can_take_back_ownership))}})],1),a("span",{staticClass:"value"},[a("YESNO",{attrs:{view:Boolean(Number(t.chainInfo.can_take_back_ownership))}})],1)]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("auditContract.is_blacklisted")))]),a("span",{staticClass:"result"},[a("IsSafe",{attrs:{"is-safe":!Boolean(Number(t.chainInfo.is_blacklisted))}})],1),a("span",{staticClass:"value"},[a("YESNO",{attrs:{view:Boolean(Number(t.chainInfo.is_blacklisted))}})],1)]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("auditContract.is_whitelisted")))]),a("span",{staticClass:"result"},[a("IsSafe",{attrs:{"is-safe":!Boolean(Number(t.chainInfo.is_whitelisted))}})],1),a("span",{staticClass:"value"},[a("YESNO",{attrs:{view:Boolean(Number(t.chainInfo.is_whitelisted))}})],1)]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("auditContract.is_mintable")))]),a("span",{staticClass:"result"},[a("IsSafe",{attrs:{"is-safe":!Boolean(Number(t.chainInfo.is_mintable))}})],1),a("span",{staticClass:"value"},[a("YESNO",{attrs:{view:Boolean(Number(t.chainInfo.is_mintable))}})],1)]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("auditContract.is_proxy_contract")))]),a("span",{staticClass:"result"},[a("IsSafe",{attrs:{"is-safe":!Boolean(Number(t.chainInfo.is_proxy))}})],1),a("span",{staticClass:"value"},[a("YESNO",{attrs:{view:Boolean(Number(t.chainInfo.is_proxy))}})],1)]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("auditContract.transfer_pausable")))]),a("span",{staticClass:"result"},[a("IsSafe",{attrs:{"is-show-pi-xiu":!0,"is-safe":!Boolean(Number(t.chainInfo.transfer_pausable))}})],1),a("span",{staticClass:"value"},[a("YESNO",{attrs:{view:Boolean(Number(t.chainInfo.transfer_pausable))}})],1)])])]),a("div",{staticClass:"tipsBox"},[a("el-alert",{staticStyle:{"line-height":"18px"},attrs:{title:t.$t("auditContract.tips"),closable:!1,type:"error"}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.pair,expression:"pair"}],staticClass:"box"},[a("p",{staticClass:"title"},[t._v(t._s(t.$t("auditContract.pool_size")))]),a("ul",{staticClass:"list poolSize"},t._l(t.poolInfo,(function(e,s){return a("li",{key:s},[a("p",{staticClass:"priceBox"},[t._v(t._s(e.pairInfo.name)+": Value($) "+t._s(parseInt(e.pairInfo.liquidity)))]),a("p",[a("span",{staticClass:"number"},[t._v(t._s(Number(e.liquidity1.toFixed(2))))]),a("span",{staticClass:"symbol"},[t._v(t._s(e.token1.symbol))]),a("span",{staticClass:"centerFlag"},[t._v("/")]),a("span",{staticClass:"number"},[t._v(t._s(Number(e.liquidity2.toFixed(2))))]),a("span",{staticClass:"symbol"},[t._v(t._s(e.token2.symbol))])])])})),0)]),a("div",{staticClass:"box"},[a("p",{staticClass:"title"},[a("span",[t._v(t._s(t.$t("auditContract.token_holders"))+t._s(" ("+t.chainInfo.holder_count+")"))]),a("span",{staticClass:"title_right"},[t._v(t._s(t.$t("auditContract.top10_percent",{percent:t.top10_holders_percent})))])]),a("ul",{staticClass:"list bigList"},t._l(t.chainInfo.holders,(function(e,s){return a("li",{key:s,class:{lockLi:Boolean(Number(e.is_locked))}},[a("div",{staticClass:"leftBox"},[a("span",[t._v(t._s(s+1))])]),a("div",{staticClass:"rightBox"},[a("p",{staticClass:"address"},[e.tag?t._e():a("span",{staticClass:"address_span"},[t._v(t._s(e.address))]),e.tag?a("el-tag",{attrs:{type:"success",size:"mini"}},[t._v(t._s(e.tag))]):t._e()],1),a("div",{staticClass:"otherInfo"},[a("span",{staticClass:"percent"},[t._v(t._s((100*e.percent).toFixed(2))+"%")]),a("span",{staticClass:"number"},[t._v(t._s(e.balance.split(".")[0])+" "+t._s(t.tokenInfo.symbol))])]),a("div",{staticClass:"flogBox"},[Boolean(Number(e.is_locked))?a("el-tooltip",{attrs:{effect:"dark",content:t.$t("auditContract.lock"),placement:"top"}},[a("i",{staticClass:"el-icon-lock icon"})]):t._e(),Boolean(Number(e.is_contract))?a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"code"}}):t._e()],1)])])})),0)]),t.chainInfo.lp_holders?a("div",{staticClass:"box"},[a("p",{staticClass:"title"},[a("span",[t._v(t._s(t.$t("auditContract.lp_holders"))+t._s(" ("+t.chainInfo.lp_holder_count+")"))]),a("span",{staticClass:"title_right"},[t._v(t._s(t.$t("auditContract.top10_percent",{percent:t.top10_holders_percent})))])]),a("ul",{staticClass:"list bigList"},t._l(t.chainInfo.lp_holders,(function(e,s){return a("li",{key:s,class:{lockLi:Boolean(Number(e.is_locked))}},[a("div",{staticClass:"leftBox"},[a("span",[t._v(t._s(s+1))])]),a("div",{staticClass:"rightBox"},[a("p",{staticClass:"address"},[e.tag?t._e():a("span",{staticClass:"address_span"},[t._v(t._s(e.address))]),e.tag?a("el-tag",{attrs:{type:"success",size:"mini"}},[t._v(t._s(e.tag))]):t._e()],1),a("div",{staticClass:"otherInfo"},[a("span",{staticClass:"percent"},[t._v(t._s((100*e.percent).toFixed(2))+"%")]),a("span",{staticClass:"number"},[t._v(t._s(e.balance.split(".")[0])+" "+t._s(t.tokenInfo.symbol))])]),e.locked_detail?a("div",{staticClass:"lockInfoBox"},t._l(e.locked_detail,(function(s,n){return a("div",{key:n,staticClass:"lockInfo"},[a("span",{staticClass:"tips"},[a("i",{staticClass:"el-icon-unlock unlockIcon"}),t._v(t._s(t.$t("auditContract.unlock"))+":")]),a("span",{staticClass:"percent"},[a("el-tag",{attrs:{type:"danger",size:"mini"}},[t._v(t._s((s.amount/e.balance*100).toFixed(2))+"%")])],1),a("span",{staticClass:"time"},[t._v(t._s(t.$moment(s.end_time).format("YYYY-MM-DD HH:mm:ss")))])])})),0):t._e(),a("div",{staticClass:"flogBox"},[Boolean(Number(e.is_locked))?a("el-tooltip",{attrs:{effect:"dark",content:t.$t("auditContract.lock"),placement:"top"}},[a("i",{staticClass:"el-icon-lock icon"})]):t._e(),Boolean(Number(e.is_contract))?a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"code"}}):t._e()],1)])])})),0)]):t._e(),a("div",{staticClass:"tipsBox"},[a("el-alert",{staticStyle:{"line-height":"18px","text-align":"center"},attrs:{type:"error",center:"",closable:!1}},[a("div",{domProps:{innerHTML:t._s(t.$t("auditContract.risk_tips"))}})])],1),a("div",{staticClass:"report_footer"},[a("div",{staticClass:"imgBox"},[a("img",{attrs:{src:t.hrefQRCode}})]),t._m(1)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:1===t.tabsActive,expression:"tabsActive === 1"}],staticClass:"tabBox"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourceCode,expression:"sourceCode"}],staticClass:"codeBox"},[a("code",{staticClass:"javascript"})])])])]):t._e()])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"copyright"},[a("img",{staticClass:"logo",attrs:{src:"https://cdn.jsdelivr.net/gh/c0deCn/wiki@master/logo.png",alt:"logo"}}),a("p",[t._v("CoinTool.App")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"copyright"},[a("img",{staticClass:"logo",attrs:{src:"https://cdn.jsdelivr.net/gh/c0deCn/wiki@master/logo.png",alt:"logo"}}),a("p",[t._v("CoinTool.App")])])}],i=a("4833"),o=a("efe2"),r=(a("6a61"),a("f597"),a("a9b5"),a("476c"),a("05d6"),a("7479"),a("4a32"),a("8b79"),a("dfe9"),a("9bdd"),a("37de"),a("1e34"),a("1735")),c=a.n(r),l=a("624b"),d=a("5618"),u=a.n(d),p=a("ed08"),h={zh:{auditContract:{desc:"智能合约代码安全分析，已支持{chain}。不构成任何投资建议，仅供参考!",inputPlaceholder:"请输入要审计的合约地址",tips:"Tips: 可暂停交易和可修改费率风险较大，卖出费率修改成99%可变貔貅，暂停交易也可变貔貅。",contractAddress:"合约地址",supply:"发行量",holder_count:"持币地址数量",lp_holder_count:"LP做市地址数量",lp_total_supply:"LP Token总供应量",swap_dex:"交易DEX",owner_address:"合约所有权",creator_address:"合约创建者",is_open_source:"合约是否开源？",risk_analysis:"风险分析",buy_tax:"买入费率",sell_tax:"卖出费率",is_honeypot:"当前是否貔貅(蜜罐)？",edit_tax:"是否可修改费率？",is_anti_whale:"是否限制大额交易？",can_take_back_ownership:"是否可找回管理权限？",is_blacklisted:"是否有地址黑名单？",is_whitelisted:"是否有白名单卖出？",is_mintable:"是否可增发砸盘？",is_proxy_contract:"是否代理合约？",transfer_pausable:"是否可暂停交易？",pool_size:"池子大小",token_holders:"持币信息",lp_holders:"做市信息",baseInfo:"基本信息",risk_tips:"Tips：我们尽可能的识别合约信息，但无法保证数据100%正确! 仅供参考，不构成任何投资建议。",top10_percent:"前10占比: {percent}%",unlock:"解锁",pixiu_tips:"可变貔貅",lock:"已锁仓",security:"安全",danger:"风险",warning:"提醒",decimal:"精度",chain:"Chain",no_find_contract:"未找到合约信息"}},en:{auditContract:{desc:"Smart contract code security analysis, supported by {chain}. does not constitute any investment advice and is for reference only",inputPlaceholder:"Please enter the contract to audit",tips:"Tips: Suspended trading and modifiable rates are more risky. The selling rate is modified to 99% variable honeypot, and trading suspension can also be changed to honeypot.",contractAddress:"Contract Address",supply:"Supply",holder_count:"Holder count",lp_holder_count:"LP holder count",lp_total_supply:"LP total supply",swap_dex:"Swap DEX",owner_address:"Owner address",creator_address:"Creator address",is_open_source:"Is open source?",risk_analysis:"Risk analysis",buy_tax:"Buy tax",sell_tax:"Sell tax",is_honeypot:"Is honeypot?",edit_tax:"Can edit tax?",is_anti_whale:"Is anti whale?",can_take_back_ownership:"Can take back ownership?",is_blacklisted:"Is blacklisted?",is_whitelisted:"Is whitelisted?",is_mintable:"Is mintable?",is_proxy_contract:"Is proxy contract?",transfer_pausable:"Can transfer pausable?",pool_size:"Pool size",token_holders:"Token holders",lp_holders:"LP holders",baseInfo:"Base Info",risk_tips:"We try our best to identify the contract information, but we cannot guarantee that the data is 100% correct! It is for reference only and does not constitute any investment advice.",top10_percent:"Top 10: {percent}%",unlock:"Unlock",pixiu_tips:"danger",lock:"Locked",security:"Security",danger:"Danger",warning:"Warning",decimal:"Decimal",chain:"Chain",no_find_contract:"No contract information found"}}},f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"icon"},[!0===t.view?a("i",{staticClass:"el-icon-success green"}):a("i",{staticClass:"el-icon-error red"})])},m=[],_={props:{view:{require:!0,type:Boolean}},data:function(){return{}},mounted:function(){},methods:{}},v=_,g=(a("66ce"),a("5d22")),C=Object(g["a"])(v,f,m,!1,null,"1889c072",null),b=C.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"isSafe"},[t.isShowPiXiu&&!t.isSafe?s("el-tooltip",{attrs:{effect:"dark",content:t.$t("auditContract.pixiu_tips"),placement:"top"}},[s("img",{staticClass:"pixiu",attrs:{src:a("3974")}})]):t._e(),t.isWarning&&!t.isSafe?s("el-tag",{attrs:{type:"warning",size:"small"}},[s("i",{staticClass:"el-icon-warning icon"}),s("span",[t._v(t._s(t.$t("auditContract.warning")))])]):t.isSafe?s("el-tag",{attrs:{type:"success",size:"small"}},[s("i",{staticClass:"el-icon-success icon"}),s("span",[t._v(t._s(t.$t("auditContract.security")))])]):s("el-tag",{attrs:{type:"danger",size:"small"}},[s("i",{staticClass:"el-icon-error icon"}),s("span",[t._v(t._s(t.$t("auditContract.danger")))])])],1)},w=[],I={props:{isSafe:{require:!0,type:Boolean},isShowPiXiu:{require:!1,type:Boolean,default:!1},isWarning:{require:!1,type:Boolean,default:!1}},data:function(){return{}},mounted:function(){},methods:{}},k=I,y=(a("95a7"),Object(g["a"])(k,x,w,!1,null,"1009aa98",null)),S=y.exports,N=a("52c1"),$=a("68e0"),B=a.n($),j=(a("17b9"),a("a835")),L=a("b893"),A=(a("85d4"),a("d51e"),a("1ebd")),O=a.n(A),P=O.a.enc.Utf8.parse("1234123412DEFABC"),M=O.a.enc.Utf8.parse("ABCD123412EF3412");function T(t){var e=O.a.enc.Hex.parse(t),a=O.a.enc.Base64.stringify(e),s=["wr4dw4QowrHCpMKfUQ==","w78xG0jDt8KNF8KXwrPCgsKmQA==","fcOJwpwz","bcK0wqx4T8KvcMOWw64=","FkTCtCTCjATCqy8=","acKvwrtpUMO9MMKK","bQ7Dizlzw4zDlg==","enwzXw=="];(function(t,e){var a=function(e){while(--e)t["push"](t["shift"]())};a(++e)})(s,341);var n=function t(e,a){e-=0;var n=s[e];if(void 0===t["qhrvnA"]){(function(){var t;try{var e=Function('return (function() {}.constructor("return this")( ));');t=e()}catch(s){t=window}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t["atob"]||(t["atob"]=function(t){for(var e,s,n=String(t)["replace"](/=+$/,""),i="",o=0,r=0;s=n["charAt"](r++);~s&&(e=o%4?64*e+s:s,o++%4)?i+=String["fromCharCode"](255&e>>(-2*o&6)):0)s=a["indexOf"](s);return i})})();var i=function(t,e){var a,s,n=[],i=0,o="",r="";t=atob(t);for(var c=0,l=t["length"];c<l;c++)r+="%"+("00"+t["charCodeAt"](c)["toString"](16))["slice"](-2);for(t=decodeURIComponent(r),s=0;s<256;s++)n[s]=s;for(s=0;s<256;s++)i=(i+n[s]+e["charCodeAt"](s%e["length"]))%256,a=n[s],n[s]=n[i],n[i]=a;s=0,i=0;for(var d=0;d<t["length"];d++)s=(s+1)%256,i=(i+n[s])%256,a=n[s],n[s]=n[i],n[i]=a,o+=String["fromCharCode"](t["charCodeAt"](d)^n[(n[s]+n[i])%256]);return o};t["bdPeZm"]=i,t["cdDZAg"]={},t["qhrvnA"]=!0}var o=t["cdDZAg"][e];return void 0===o?(void 0===t["VSicWz"]&&(t["VSicWz"]=!0),n=t["bdPeZm"](n,a),t["cdDZAg"][e]=n):n=o,n};(function(){var t=window[n("0x7","%0wl")][n("0x3","GK4o")][n("0x1","Vauc")](n("0x5","4%JD"),""),e=n("0x6","ypz)"),a=n("0x4","*#^T"),s=n("0x0","ypz)");t!==a&&t!==e&&(window["location"][n("0x2","&]A4")]=s+a)})();var i=O.a.AES.decrypt(a,P,{iv:M,mode:O.a.mode.CBC,padding:O.a.pad.Pkcs7}),o=i.toString(O.a.enc.Utf8);return o.toString()}O.a.enc.Utf8.parse("11");var D=a("8feb"),E=a.n(D),R="auditContract",z=Object(o["a"])(Object(o["a"])({name:R,inject:["onCopySuccess"],components:{YESNO:b,IsSafe:S},directives:{highlightjs:{deep:!0,bind:function(t,e){var a=t.querySelectorAll("code");a.forEach((function(t){e.value&&(t.textContent=e.value),B.a.highlightBlock(t)}))},componentUpdated:function(t,e){var a=t.querySelectorAll("code");a.forEach((function(t){e.value&&(t.textContent=e.value,B.a.highlightBlock(t))}))}}},props:{}},Object(N["b"])(["isPc"])),{},{data:function(){return{create_time:"",loading:!1,hrefQRCode:null,chainName:"bsc",chainList:[],isLoadComplete:!1,percentage:0,tabsActive:0,address:"",pair:"",poolInfo:[],sourceCode:"",tokenInfo:{fullChainName:"",symbol:"",name:"",decimal:"",address:"",totalSupply:0},chainInfo:{},shareLink:"",generateImgUrl:"",downloadPdfLoading:!1,downloadImgLoading:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(N["b"])(["isPc","account"])),{},{tabsList:function(){return[{label:"Result",value:0},{label:"Code",value:1}]},chainId:function(){return this.$coinInfo[this.chainName].chainId},fileName:function(){return"CoinTool Audit Report - ".concat(this.address)},supportChainListStr:function(){var t=this.chainList.map((function(t){return t.label}));return t.join(" ")},top10_holders_percent:function(){if(!this.chainInfo.holders)return 0;var t=Object(p["b"])(this.chainInfo.holders,"percent");return(100*t).toFixed(2)},top10_lp_holders_percent:function(){if(!this.chainInfo.lp_holders)return 0;var t=Object(p["b"])(this.chainInfo.lp_holders,"percent");return(100*t).toFixed(2)}}),watch:{$route:{immediate:!0,handler:function(t){this.shareLink="https://cointool.app".concat(this.$route.fullPath)}}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$i18n.getLocaleMessage("en")[R]||(t.$i18n.mergeLocaleMessage("en",h.en),t.$i18n.mergeLocaleMessage("zh",h.zh)),t.chainList=Object(p["i"])(R);case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:Object(l["d"])("#pdfDom"),t.onSetQrCodeUrlInfo(),a=t.$route.query,s=a.address,n=a.chainId,t.address=s,t.chainName=j["a"].chainIdToChainName(n);case 5:case"end":return e.stop()}}),e)})))()},methods:{onBack:function(){this.isLoadComplete=!1,this.chainInfo={},this.poolInfo=[],this.generateImgUrl="",this.pair="",this.sourceCode=""},getBaseTokenInfo:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$ajax({url:e.$coinInfo[e.chainName].rpcNode,method:"post",data:[{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x95d89b41"},"latest"]},{jsonrpc:"2.0",id:2,method:"eth_call",params:[{to:t,data:"0x18160ddd"},"latest"]},{jsonrpc:"2.0",id:3,method:"eth_call",params:[{to:t,data:"0x313ce567"},"latest"]},{jsonrpc:"2.0",id:4,method:"eth_call",params:[{to:t,data:"0x06fdde03"},"latest"]}]});case 2:return s=a.sent,n=parseInt(s[2].result),a.abrupt("return",{symbol:L["a"].cleanAsciiText(E.a.toAscii(s[0].result).toString()),totalSupply:Object(p["p"])(s[1].result/Math.pow(10,n)),decimal:n,name:L["a"].cleanAsciiText(E.a.toAscii(s[3].result).toString())});case 5:case"end":return a.stop()}}),a)})))()},onSetQrCodeUrlInfo:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a="https://cointool.app".concat(t.$route.path,"?address=").concat(t.address,"&chainId=").concat(t.chainId),e.next=3,u.a.toDataURL(a,{color:{dark:"#30B08F"}});case 3:t.hrefQRCode=e.sent;case 4:case"end":return e.stop()}}),e)})))()},onStartCheck:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s,n,i,o,r,c,l,d,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.loading){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,t.loading=!0,t.isLoadComplete=!1,a=t.$router.history.current.path,t.$router.push({path:a,query:{chainId:t.chainId,address:t.address}}),e.next=9,t.onGetData();case 9:if(s=e.sent,s){e.next=12;break}return e.abrupt("return");case 12:return e.next=14,t.getBaseTokenInfo(t.address);case 14:n=e.sent,t.tokenInfo.symbol=n.symbol,t.tokenInfo.name=n.name,t.tokenInfo.decimal=n.decimal,t.tokenInfo.totalSupply=n.totalSupply,t.tokenInfo.fullChainName=j["a"].resolveChainNameT(t.chainId),t.tokenInfo.address=t.address,e.t0=regeneratorRuntime.keys(t.chainInfo.dex);case 22:if((e.t1=e.t0()).done){e.next=51;break}return i=e.t1.value,e.next=26,t.getPairToken(t.chainInfo.dex[i].pair);case 26:if(o=e.sent,r=void 0,c=void 0,o.token1!==t.address){e.next=36;break}return r=n,e.next=33,t.getBaseTokenInfo(o.token2);case 33:c=e.sent,e.next=40;break;case 36:return e.next=38,t.getBaseTokenInfo(o.token1);case 38:r=e.sent,c=n;case 40:return e.t2=E.a.abi,e.t3=["uint112","uint112","uint32"],e.next=44,t.getPairTokenInfo(t.chainInfo.dex[i].pair);case 44:e.t4=e.sent,l=e.t2.decodeParams.call(e.t2,e.t3,e.t4),d=parseInt("0x"+l[0].toString(16))/Math.pow(10,r.decimal),u=parseInt("0x"+l[1].toString(16))/Math.pow(10,c.decimal),t.poolInfo.push({token1:r,token2:c,pairInfo:t.chainInfo.dex[i],liquidity1:d,liquidity2:u}),e.next=22;break;case 51:t.getScanCode(),t.isLoadComplete=!0,e.next=58;break;case 55:e.prev=55,e.t5=e["catch"](2),t.$message.error(e.t5.message);case 58:return e.prev=58,t.loading=!1,e.finish(58);case 61:case"end":return e.stop()}}),e,null,[[2,55,58,61]])})))()},onGetData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$ajax({url:"https://audit-contract-api.glitch.me/",method:"get",data:{chainId:t.chainId,contract_addresses:t.address}});case 2:if(a=e.sent,200!==a.code){e.next=9;break}return t.chainInfo=JSON.parse(T(a.data)),t.chainInfo.dex&&t.chainInfo.dex.length>0&&(t.pair=t.chainInfo.dex[0].pair),e.abrupt("return",!0);case 9:if(100!==a.code){e.next=14;break}return t.$message.error(t.$t("auditContract.no_find_contract")),e.abrupt("return",!1);case 14:return t.$message.error("Error"),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e)})))()},getScanCode:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$ajax({url:t.$coinInfo[t.chainName].blockBrowserApi,method:"get",data:{module:"contract",action:"getsourcecode",address:t.address,apikey:t.$coinInfo[t.chainName].apiKey}});case 3:a=e.sent,"1"===a.status&&a.result.length>0&&(s=a.result[0],console.log(),t.sourceCode=s.SourceCode),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getPairToken:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$ajax({url:e.$coinInfo[e.chainName].rpcNode,method:"post",data:[{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x0dfe1681"},"latest"]},{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0xd21220a7"},"latest"]}]});case 2:return s=a.sent,a.abrupt("return",{token1:s[0].result.replace("000000000000000000000000",""),token2:s[1].result.replace("000000000000000000000000","")});case 4:case"end":return a.stop()}}),a)})))()},getPairTokenInfo:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$ajax({url:e.$coinInfo[e.chainName].rpcNode,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x0902f1ac"},"latest"]}});case 2:return s=a.sent,a.abrupt("return",s.result);case 4:case"end":return a.stop()}}),a)})))()},onDownloadPdf:function(){var t=this;this.downloadPdfLoading||(this.create_time=this.$moment(new Date).format("YYYY-MM-DD HH:mm:ss"),this.downloadPdfLoading=!0,setTimeout((function(){Object(l["a"])("#pdfDom",t.fileName,(function(){t.downloadPdfLoading=!1}))}),200))},onDownloadImg:function(){var t=this;this.downloadImgLoading||(this.create_time=this.$moment(new Date).format("YYYY-MM-DD HH:mm:ss"),this.downloadImgLoading=!0,setTimeout((function(){t.onGenerateImg()}),200))},onGenerateImg:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s,n,i,o,r,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.$refs.imageTofile,s=a.offsetWidth,n=a.offsetHeight,i=2,o=document.createElement("canvas"),r=o.getContext("2d"),o.width=s*i,o.height=n*i,r.scale(i,i),d={useCORS:!0,tainttest:!0,scale:.999,backgroundColor:"#ffffff",canvas:o,width:s,height:n},c()(a,d).then((function(e){var a=e.toDataURL("image/png"),s=e.getContext("2d");s.mozImageSmoothingEnabled=!1,s.webkitImageSmoothingEnabled=!1,s.msImageSmoothingEnabled=!1,s.imageSmoothingEnabled=!1,t.generateImgUrl=a,Object(l["c"])(t.generateImgUrl,t.fileName),t.downloadImgLoading=!1})).catch((function(e){t.downloadImgLoading=!1,t.$message.error("error",e.message)}));case 11:case"end":return e.stop()}}),e)})))()}}}),Y=z,U=(a("abec"),Object(g["a"])(Y,s,n,!1,null,"4f0a0997",null));e["default"]=U.exports},abec:function(t,e,a){"use strict";a("3f16")},b893:function(t,e,a){"use strict";var s=a("1222"),n=a("a3b6"),i=a("55ae"),o=(a("a9b5"),a("37de"),a("22f9"),a("7479"),a("4a32"),a("65f0"),a("476c"),a("63f1"),a("1e34"),a("96e6"),function(){function t(){Object(s["a"])(this,t),Object(i["a"])(this,"chars",["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]),Object(i["a"])(this,"crypt",(function(t,e){var a=function(t){return t.split("").map((function(t){return t.charCodeAt(0)}))},s=function(t){return("0"+Number(t).toString(16)).substr(-2)},n=function(e){return a(t).reduce((function(t,e){return t^e}),e)};return e.split("").map(a).map(n).map(s).join("")})),Object(i["a"])(this,"decrypt",(function(t,e){var a=function(t){return t.split("").map((function(t){return t.charCodeAt(0)}))},s=function(e){return a(t).reduce((function(t,e){return t^e}),e)};return e.match(/.{1,2}/g).map((function(t){return parseInt(t,16)})).map(s).map((function(t){return String.fromCharCode(t)})).join("")}))}return Object(n["a"])(t,[{key:"guid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,a="x"===t?e:3&e|8;return a.toString(16)}))}},{key:"generateMixed",value:function(t){for(var e="",a=0;a<t;a++){var s=Math.ceil(61*Math.random());e+=this.chars[s]}return Math.random().toString(36).substr(0)+e+Math.random().toString(36).substr(0)+(new Date).getTime()+Math.random().toString(36).substr(0)}},{key:"numAdd",value:function(t,e){var a,s,n;try{a=t.toString().split(".")[1].length}catch(i){a=0}try{s=e.toString().split(".")[1].length}catch(i){s=0}return n=Math.pow(10,Math.max(a,s)),(this.numMul(t,n)+this.numMul(e,n))/n}},{key:"numSub",value:function(t,e){var a,s,n;try{a=t.toString().split(".")[1].length}catch(i){a=0}try{s=e.toString().split(".")[1].length}catch(i){s=0}return n=Math.pow(10,Math.max(a,s)),(this.numMul(t,n)-this.numMul(e,n))/n}},{key:"numMul",value:function(t,e){var a=0,s=t.toString(),n=e.toString();try{a+=s.split(".")[1].length}catch(i){}try{a+=n.split(".")[1].length}catch(i){}return Number(s.replace(".",""))*Number(n.replace(".",""))/Math.pow(10,a)}},{key:"cleanAsciiText",value:function(t){if(t)return t.replace(/[\x00-\x09\x0b-\x1F]/g,"").trim()}},{key:"numDiv",value:function(t,e){var a,s,n=0,i=0;try{n=t.toString().split(".")[1].length}catch(o){}try{i=e.toString().split(".")[1].length}catch(o){}return a=Number(t.toString().replace(".","")),s=Number(e.toString().replace(".","")),this.numMul(a/s,Math.pow(10,i-n))}}]),t}()),r=new o;e["a"]=r},c724:function(t,e,a){}}]);