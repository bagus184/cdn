(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bfa769a"],{"0338":function(e,t,a){"use strict";a("ab42")},"5f75":function(e,t){var a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(a){var n=new Uint8Array(16);e.exports=function(){return a(n),n}}else{var s=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),s[t]=e>>>((3&t)<<3)&255;return s}}},6507:function(e,t,a){var n=a("5f75"),s=a("adda");function r(e,t,a){var r=t&&a||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null),e=e||{};var i=e.random||(e.rng||n)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var o=0;o<16;++o)t[r+o]=i[o];return t||s(i)}e.exports=r},"8f8b":function(e,t,a){"use strict";a("bf34")},ab42:function(e,t,a){},adda:function(e,t){for(var a=[],n=0;n<256;++n)a[n]=(n+256).toString(16).substr(1);function s(e,t){var n=t||0,s=a;return[s[e[n++]],s[e[n++]],s[e[n++]],s[e[n++]],"-",s[e[n++]],s[e[n++]],"-",s[e[n++]],s[e[n++]],"-",s[e[n++]],s[e[n++]],"-",s[e[n++]],s[e[n++]],s[e[n++]],s[e[n++]],s[e[n++]],s[e[n++]]].join("")}e.exports=s},b893:function(e,t,a){"use strict";var n=a("1222"),s=a("a3b6"),r=a("55ae"),i=(a("37de"),a("1e34"),a("7479"),a("4a32"),a("22f9"),a("65f0"),a("96e6"),function(){function e(){Object(n["a"])(this,e),Object(r["a"])(this,"chars",["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"])}return Object(s["a"])(e,[{key:"guid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,a="x"===e?t:3&t|8;return a.toString(16)}))}},{key:"generateMixed",value:function(e){for(var t="",a=0;a<e;a++){var n=Math.ceil(61*Math.random());t+=this.chars[n]}return Math.random().toString(36).substr(0)+t+Math.random().toString(36).substr(0)+(new Date).getTime()+Math.random().toString(36).substr(0)}},{key:"numAdd",value:function(e,t){var a,n,s;try{a=e.toString().split(".")[1].length}catch(r){a=0}try{n=t.toString().split(".")[1].length}catch(r){n=0}return s=Math.pow(10,Math.max(a,n)),(this.numMul(e,s)+this.numMul(t,s))/s}},{key:"numSub",value:function(e,t){var a,n,s;try{a=e.toString().split(".")[1].length}catch(r){a=0}try{n=t.toString().split(".")[1].length}catch(r){n=0}return s=Math.pow(10,Math.max(a,n)),(this.numMul(e,s)-this.numMul(t,s))/s}},{key:"numMul",value:function(e,t){var a=0,n=e.toString(),s=t.toString();try{a+=n.split(".")[1].length}catch(r){}try{a+=s.split(".")[1].length}catch(r){}return Number(n.replace(".",""))*Number(s.replace(".",""))/Math.pow(10,a)}},{key:"cleanAsciiText",value:function(e){if(e)return e.replace(/[\x00-\x09\x0b-\x1F]/g,"").trim()}},{key:"numDiv",value:function(e,t){var a,n,s=0,r=0;try{s=e.toString().split(".")[1].length}catch(i){}try{r=t.toString().split(".")[1].length}catch(i){}return a=Number(e.toString().replace(".","")),n=Number(t.toString().replace(".","")),this.numMul(a/n,Math.pow(10,r-s))}}]),e}()),o=new i;t["a"]=o},bf34:function(e,t,a){},c81a:function(e,t,a){var n=a("c194"),s=Math.ceil,r=Math.floor;n({target:"Math",stat:!0},{trunc:function(e){return(e>0?r:s)(e)}})},d52c:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},["zh"!==e.language&&"zh-CN"!==e.navigatorLanguage?[a("h1",[a("svg-icon",{attrs:{"icon-class":e.route_icon}}),e._v(" "+e._s(e.tokenName)+" Pool")],1),a("div",{staticClass:"h2Box"},[a("h2",[a("svg-icon",{attrs:{"icon-class":"code"}}),e._v("IDO Contract : "),a("span",{staticClass:"contract"},[e._v(e._s(e._f("autoAddress")(e.contract)))]),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.contract,expression:"contract",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"copy",attrs:{type:"text"}},[a("svg-icon",{attrs:{"icon-class":"copy"}})],1)],1)]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.init_loading,expression:"init_loading"}],staticClass:"idoExchange"},[a("div",{staticClass:"exchangeInfo"},[a("div",{staticClass:"info"},[a("span",{staticClass:"label"},[e._v(e._s(e.$t("idoExchange.exchangeNumber")))]),a("span",{staticClass:"value"},[e._v(e._s(e.quota)+" "+e._s(e.defSybmol))])]),a("div",{staticClass:"info"},[a("span",{staticClass:"label leftAlign"},[e._v(e._s(e.$t("idoExchange.exchangeRatio")))]),a("span",{staticClass:"value"},[e._v("1 "+e._s(e.defSybmol)+" : "+e._s(e.rate)+" "+e._s(e.tokenName))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isEnd,expression:"isEnd"}],staticClass:"exchangeStatus"},[a("flip-countdown",{attrs:{deadline:e.startTime,labels:{days:e.$t("idoExchange.days"),hours:e.$t("idoExchange.hours"),minutes:e.$t("idoExchange.minutes"),seconds:e.$t("idoExchange.seconds")}}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isEnd,expression:"!isEnd"}],staticClass:"inputBox"},[a("div",{staticClass:"info"},[a("span",{style:{visibility:e.tokenBalance>0?"visible":"hidden"}},[e._v("Claim available:"+e._s(e.tokenBalance))]),a("span",{on:{click:e.BalanceClick}},[e._v(e._s(e.$t("idoExchange.balance"))+": "+e._s(e.Balance)+" "+e._s(e.defSybmol))])]),a("div",{staticClass:"inputContent"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputModel,expression:"inputModel"}],staticClass:"input",attrs:{type:"text",placeholder:e.$t("idoExchange.inputPlaceholder")},domProps:{value:e.inputModel},on:{input:function(t){t.target.composing||(e.inputModel=t.target.value)}}}),a("div",{staticClass:"icon",on:{click:e.onExchange}},[e.loading?a("i",{staticClass:"el-icon-loading"}):a("svg-icon",{attrs:{"icon-class":"exchange2"}})],1)])]),a("div",{staticClass:"progressBox"},[a("el-progress",{attrs:{percentage:e.percentage,"stroke-width":20,color:"#4c4471","text-inside":!0}}),a("div",{staticClass:"textBox"},[a("span",[e._v(e._s(e.self_quota)+" "+e._s(e.defSybmol))]),a("span",[e._v(e._s(e.cap)+" "+e._s(e.defSybmol))])])],1),a("div",{staticClass:"desc"},[a("p",{staticClass:"op",on:{click:e.onChangeUnfold}},[e._v(e._s(e.isUnfold?e.$t("idoExchange.show"):e.$t("idoExchange.hide"))+" "),e.isUnfold?a("i",{staticClass:"el-icon-arrow-down icon"}):a("i",{staticClass:"el-icon-arrow-up icon"})]),a("div",{class:{text:!0,unfold:e.isUnfold}},[a("div",{staticClass:"table"},[a("ul",[a("li",[a("span",{staticClass:"label"},[e._v(e._s("Launch Time"))]),a("span",{staticClass:"value"},[e._v(e._s(e.startTime))])]),a("li",[a("span",{staticClass:"label"},[e._v(e._s("End Time"))]),a("span",{staticClass:"value"},[e._v(e._s(e.endTime))])]),a("li",{directives:[{name:"show",rawName:"v-show",value:1===e.idotype,expression:"idotype===1"}]},[a("span",{staticClass:"label"},[e._v(e._s("Claim Time"))]),a("span",{staticClass:"value"},[e._v(e._s(e.claimTime)),a("span",{directives:[{name:"show",rawName:"v-show",value:e.lockDay>0,expression:"lockDay>0"}]},[e._v("(Lock Day: "+e._s(e.lockDay)+")")])])]),a("li",[a("span",{staticClass:"label"},[e._v(e._s("For Sale"))]),a("span",{staticClass:"value"},[e._v(e._s(e.sale)+" "+e._s(e.tokenName))])]),a("li",[a("span",{staticClass:"label"},[e._v(e._s("To raise")+"("+e._s(e.defSybmol)+")")]),a("span",{staticClass:"value"},[e._v(e._s(e.cap)+" "+e._s(e.defSybmol))])]),a("li",{directives:[{name:"show",rawName:"v-show",value:e.b_amount>0,expression:"b_amount > 0"}]},[a("span",{staticClass:"label"},[e._v(e._s("Amount Limit"))]),a("span",{staticClass:"value"},[e._v(e._s(e.b_amount)+" "+e._s(e.defSybmol))])])])])])]),a("el-divider"),a("div",{directives:[{name:"show",rawName:"v-show",value:1===e.idotype,expression:"idotype===1"}],staticClass:"btnBox"},[a("button",{class:{disabled:e.isdisabledFn},on:{click:e.onClaim}},[e._v(e._s("Claim"))])])],1),a("div",{staticClass:"table"},[a("p",{staticClass:"title"},[e._v(e._s(e.$t("idoExchange.tokenInfo")))]),a("ul",[a("li",[a("span",{staticClass:"label"},[e._v(e._s(e.$t("idoExchange.name")))]),a("span",{staticClass:"value"},[e._v(e._s(e.tokenName))])]),a("li",[a("span",{staticClass:"label"},[e._v(e._s(e.$t("idoExchange.address")))]),a("span",{staticClass:"value"},[e._v(e._s(e._f("autoAddress")(e.tokenContract)))])]),a("li",[a("span",{staticClass:"label"},[e._v(e._s(e.$t("idoExchange.totalSupply")))]),a("span",{staticClass:"value"},[e._v(e._s(e.totalSupply))])]),a("div",{staticStyle:{"text-align":"center",padding:"10px"}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.isPc,expression:"isPc"}],attrs:{type:"warning"},on:{click:function(t){return e.addToMetamask(e.tokenContract)}}},[a("svg-icon",{attrs:{"icon-class":"metamask"}}),e._v(" Add to Metamask")],1)],1)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:56===e.c,expression:"c===56"}],staticClass:"tips"},[e._m(0),e._m(1)])]:a("div",{staticStyle:{"text-align":"center","line-height":"22px"}},[a("p",[e._v("CoinTool不提供任何技术支持！")]),a("p",[e._v("已关闭IDO功能，请勿用于违法活动!")])])],2)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Any consequences of use are not related to "),a("a",{attrs:{href:"https://cointool.app",target:"_blank"}},[e._v("CoinTool.app")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("By "),a("a",{attrs:{href:"https://cointool.app/bnb/bsccreateToken",target:"_blank"}},[e._v("CoinTool.app")]),e._v(" creation")])}],r=a("4833"),i=a("efe2"),o=(a("6a61"),a("37de"),a("1e34"),a("05d6"),a("65f0"),a("7479"),a("4a32"),a("ed08")),c=a("52c1"),l={zh:{idoExchange:{exchangeNumber:"剩余额度",exchangeRatio:"兑换比例",end:"已结束",underway:"进行中",name:"名称",address:"地址",totalSupply:"发行量",tokenInfo:"Token 信息",inputPlaceholder:"请输入要进行兑换的数量",show:"展开",hide:"隐藏",balance:"余额",days:"天",hours:"时",minutes:"分",seconds:"秒",tx_submit:"交易已提交"}},en:{idoExchange:{exchangeNumber:"Remaining limit",exchangeRatio:"Exchange proportion",end:"End",underway:"underway",name:"Name",address:"Address",totalSupply:"Total Supply",tokenInfo:"Token Infomation",inputPlaceholder:"Please enter the exchange quantity",show:"Details",hide:"Hide",balance:"Balance",days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds",tx_submit:"Transaction submitted"}}},u=a("8feb"),d=a.n(u),p=a("b893"),m=a("a835"),h=a("85d4"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flip-clock"},[e._l(e.timeData,(function(t){return[a("span",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"data.show"}],key:t.label,staticClass:"flip-clock__piece",attrs:{id:t.elementId}},[a("span",{staticClass:"flip-clock__card flip-card"},[a("b",{staticClass:"flip-card__top"},[e._v(e._s(e._f("twoDigits")(t.current)))]),a("b",{staticClass:"flip-card__bottom",attrs:{"data-value":e._f("twoDigits")(t.current)}}),a("b",{staticClass:"flip-card__back",attrs:{"data-value":e._f("twoDigits")(t.previous)}}),a("b",{staticClass:"flip-card__back-bottom",attrs:{"data-value":e._f("twoDigits")(t.previous)}})]),a("span",{staticClass:"flip-clock__slot"},[e._v(e._s(t.label))])])]}))],2)},v=[],b=a("a892"),g=(a("c81a"),a("403f"),a("297b"),null),x=a("6507"),_={name:"FlipCountdown",filters:{twoDigits:function(e){return e.toString().length<=1?"0"+e.toString():e.toString()}},props:{deadline:{type:String},stop:{type:Boolean},showDays:{type:Boolean,required:!1,default:!0},showHours:{type:Boolean,required:!1,default:!0},showMinutes:{type:Boolean,required:!1,default:!0},showSeconds:{type:Boolean,required:!1,default:!0},labels:{type:Object,required:!1,default:function(){return{days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds"}}}},data:function(){var e=x();return{now:Math.trunc((new Date).getTime()/1e3),date:null,interval:null,diff:0,show:!1,timeData:[{current:0,previous:0,label:this.labels.days,elementId:"flip-card-days-"+e,show:this.showDays},{current:0,previous:0,label:this.labels.hours,elementId:"flip-card-hours-"+e,show:this.showHours},{current:0,previous:0,label:this.labels.minutes,elementId:"flip-card-minutes-"+e,show:this.showMinutes},{current:0,previous:0,label:this.labels.seconds,elementId:"flip-card-seconds-"+e,show:this.showSeconds}]}},computed:{seconds:function(){return Math.trunc(this.diff)%60},minutes:function(){return Math.trunc(this.diff/60)%60},hours:function(){return Math.trunc(this.diff/60/60)%24},days:function(){return Math.trunc(this.diff/60/60/24)}},watch:{deadline:function(e,t){var a=this,n=e;if(this.date=Math.trunc(Date.parse(n.replace(/-/g,"/"))/1e3),!this.date)throw new Error("时间格式错误'");console.log("触发"),this.interval=setInterval((function(){a.now=Math.trunc((new Date).getTime()/1e3)}),1e3)},now:function(e){this.diff=this.date-this.now,this.diff<=0||this.stop?(this.diff=0,this.updateTime(3,0)):this.updateAllCards()},diff:function(e){0===e&&(this.$emit("timeElapsed"),this.updateAllCards())}},created:function(){},mounted:function(){0!==this.diff&&(this.show=!0)},beforeDestroy:function(){window["cancelAnimationFrame"]&&cancelAnimationFrame(this.frame)},destroyed:function(){clearInterval(g)},methods:{updateAllCards:function(){this.updateTime(0,this.days),this.updateTime(1,this.hours),this.updateTime(2,this.minutes),this.updateTime(3,this.seconds)},updateTime:function(e,t){if(!(e>=this.timeData.length||void 0===t)){window["requestAnimationFrame"]&&(this.frame=requestAnimationFrame(this.updateTime.bind(this)));var a=this.timeData[e],n=t<0?0:t,s=document.querySelector("#".concat(a.elementId));if(n!==a.current&&(a.previous=a.current,a.current=n,s&&(s.classList.remove("flip"),s.offsetWidth,s.classList.add("flip")),0===e)){var r=s.querySelectorAll("span b");if(r){var i,o=Object(b["a"])(r);try{for(o.s();!(i=o.n()).done;){var c=i.value,l=c.classList[0];if(t/1e3>=1){if(!l.includes("-4digits")){var u=l+"-4digits";c.classList.add(u),c.classList.remove(l)}}else if(l.includes("-4digits")){var d=l.replace("-4digits","");c.classList.add(d),c.classList.remove(l)}}}catch(p){o.e(p)}finally{o.f()}}}}}}},w=_,y=(a("0338"),a("5d22")),C=Object(y["a"])(w,f,v,!1,null,"2c551d9f",null),k=C.exports,T="idoExchange",M={name:T,inject:["onCheckConnect","onCopySuccess","metaMaskStateTest"],components:{FlipCountdown:k},data:function(){return{buy:!0,c:56,contract:"",tokenContract:"",init_loading:!0,isEnd:!1,percentage:0,loading:!1,inputModel:"",isUnfold:!0,rate:0,countDown:"",quota:0,cap:0,startTime:"0",b_amount:0,endTime:"",claimTime:0,lockDay:0,Balance:0,startTimeunix:0,endTimeunix:0,claimTimeunix:0,sale:0,idotype:0,defSybmol:"ETH",decimal:18,route_title:"",route_icon:"",tokenBalance:0,tokenName:"CT",totalSupply:0,isdisabledFn:!0,self_quota:0,rpc_node:"https://kovan.infura.io/v3/ef4fee2bd9954c6c8303854e0dce1ffe"}},computed:Object(i["a"])({},Object(c["b"])(["isConnect","account","isPc","language","navigatorLanguage"])),created:function(){this.$i18n.getLocaleMessage("en")[T]||(this.$i18n.mergeLocaleMessage("en",l.en),this.$i18n.mergeLocaleMessage("zh",l.zh))},mounted:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n,s,r,i,c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a={1:"https://mainnet.infura.io/v3/ef4fee2bd9954c6c8303854e0dce1ffe",3:"https://ropsten.infura.io/v3/ef4fee2bd9954c6c8303854e0dce1ffe",4:"https://rinkeby.infura.io/v3/ef4fee2bd9954c6c8303854e0dce1ffe",42:"https://kovan.infura.io/v3/ef4fee2bd9954c6c8303854e0dce1ffe",5:"https://gorli.infura.io/v3/ef4fee2bd9954c6c8303854e0dce1ffe",97:"https://data-seed-prebsc-2-s1.binance.org:8545/",56:"https://bsc-dataseed3.binance.org",65:"http://okexchaintest.okexcn.com:26659",128:"https://http-mainnet-node.huobichain.com",256:"https://http-testnet.hecochain.com"},n={56:{chainId:"0x38",chainName:"BSC Mainnet",nativeCurrency:{name:"Binance Coin",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed.binance.org"],blockExplorerUrls:["https://bscscan.com/"]},128:{chainId:"0x80",chainName:"HECO Mainnet",nativeCurrency:{name:"Huobi Token",symbol:"HT",decimals:18},rpcUrls:["https://http-mainnet.hecochain.com"],blockExplorerUrls:["https://scan.hecochain.com/"]},250:{chainId:"0xfa",chainName:"Ftm Mainnet",nativeCurrency:{name:"FTM Token",symbol:"FTM",decimals:18},rpcUrls:["https://rpcapi.fantom.network"],blockExplorerUrls:["https://ftmscan.com/"]}},s=e.$route.query,r=s.address,i=s.c,e.rpc_node=a[parseInt(i)],e.c=parseInt(i),t.t0=parseInt(i),t.next=56===t.t0?8:97===t.t0?11:250===t.t0?14:128===t.t0?17:137===t.t0?20:256===t.t0?23:26;break;case 8:return e.route_icon="coin-bnb",e.defSybmol="BNB",t.abrupt("break",28);case 11:return e.route_icon="coin-bnb",e.defSybmol="BNB",t.abrupt("break",28);case 14:return e.route_icon="coin-ftm",e.defSybmol="FTM",t.abrupt("break",28);case 17:return e.route_icon="coin-heco",e.defSybmol="HT",t.abrupt("break",28);case 20:return e.route_icon="coin-heco",e.defSybmol="MATIC",t.abrupt("break",28);case 23:return e.route_icon="coin-heco",e.defSybmol="HT",t.abrupt("break",28);case 26:e.defSybmol="ETH",e.route_icon="coin-eth2";case 28:return e.contract=r,t.next=31,e.getData();case 31:return c=t.sent,e.tokenContract=c[0].result.replace("0x000000000000000000000000","0x"),t.next=35,e.getTokenInfo(e.tokenContract);case 35:l=t.sent,e.tokenName=l.symbol,e.decimal=l.decimal,document.title=e.tokenName+" Pool",e.totalSupply=l.totalSupply,e.rate=parseInt(c[3].result);try{e.idotype=parseInt(c[2].result)}catch(u){e.idotype=1}return e.quota=(parseInt(c[4].result)-parseFloat(parseInt(c[8].result)/Math.pow(10,18))).toFixed(2),Number(e.quota)<0&&(e.quota=0),e.self_quota=parseFloat(parseInt(c[8].result)/Math.pow(10,18)).toFixed(2),e.cap=parseInt(c[4].result),Number(e.self_quota)>e.cap&&(e.self_quota=e.cap),e.percentage=Number((Number(e.self_quota)/e.cap*100).toFixed(2)),e.percentage>100&&(e.percentage=100),e.startTime=e.timestampToTime(parseInt(c[1].result)),e.startTimeunix=parseInt(c[1].result),e.endTime=e.timestampToTime(parseInt(c[5].result)),e.endTimeunix=parseInt(c[5].result),e.claimTime=e.timestampToTime(parseInt(c[6].result)),e.claimTimeunix=parseInt(c[6].result),e.lockDay=parseInt(c[7].result),e.sale=e.rate*e.cap,e.b_amount=parseInt(c[9].result),t.next=60,Object(o["i"])(2e3);case 60:if(parseInt(i)!==m["a"].getChainId()&&(e.buy=!1),null===m["a"].getAccount()){t.next=85;break}if(parseInt(i)===m["a"].getChainId()||null===n[parseInt(i)]){t.next=72;break}return t.prev=63,t.next=66,window.ethereum.request({method:"wallet_addEthereumChain",params:[n[parseInt(i)]]});case 66:t.next=70;break;case 68:t.prev=68,t.t1=t["catch"](63);case 70:t.next=84;break;case 72:return t.next=74,e.upBalance();case 74:return t.t2=Number,t.t3=parseInt,t.next=78,e.balanceOf();case 78:t.t4=t.sent,t.t5=(0,t.t3)(t.t4),t.t6=Math.pow(10,l.decimal),t.t7=(t.t5/t.t6).toFixed(2),e.tokenBalance=(0,t.t2)(t.t7),e.tokenBalance>0&&(e.isdisabledFn=!1);case 84:parseInt(m["a"].getChainId())!==parseInt(i)&&e.$message({showClose:!0,duration:0,message:"Wrong network",type:"error"});case 85:(new Date).getTime()/1e3<e.startTimeunix&&(e.isEnd=!0),e.init_loading=!1;case 87:case"end":return t.stop()}}),t,null,[[63,68]])})))()},methods:{onChangeUnfold:function(){this.isUnfold=!this.isUnfold},onClaim:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!((new Date).getTime()/1e3<e.claimTimeunix)){t.next=3;break}return e.$message({showClose:!0,duration:0,message:"Claim time not arrived",type:"error"}),t.abrupt("return");case 3:if(!e.isdisabledFn){t.next=5;break}return t.abrupt("return");case 5:return a={from:m["a"].getAccount(),to:e.contract,gas:Object(h["toHex"])(2e5),value:"0x0",data:"0x4e71d92d"},t.next=8,m["a"].sendTransaction(a);case 8:n=t.sent,n&&e.$message({message:e.$t("idoExchange.tx_submit"),type:"success"});case 10:case"end":return t.stop()}}),t)})))()},BalanceClick:function(){Number(this.Balance)>this.b_amount&&0!==this.b_amount?this.inputModel=this.b_amount:this.inputModel=this.Balance},upBalance:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m["a"].sendEthgetBalance(m["a"].getAccount());case 2:a=t.sent,e.Balance=Number(d.a.fromWei(a,"ether")).toFixed(2);case 4:case"end":return t.stop()}}),t)})))()},balanceOf:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.contract,t.next=3,e.$ajax({url:e.rpc_node,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:a,data:"0x70a08231000000000000000000000000"+m["a"].getAccount().replace("0x","")},"latest"]}});case 3:return n=t.sent,t.abrupt("return",n.result);case 5:case"end":return t.stop()}}),t)})))()},addToMetamask:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,symbol:t.tokenName,decimals:t.decimal}}});case 3:n=a.sent,n?console.log("Thanks for your interest!"):console.log("Your loss!"),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),console.log(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},getData:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.contract,t.next=3,e.$ajax({url:e.rpc_node,method:"post",data:[{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:a,data:"0x9d76ea58"},"latest"]},{jsonrpc:"2.0",id:2,method:"eth_call",params:[{to:a,data:"0xba9a061a"},"latest"]},{jsonrpc:"2.0",id:3,method:"eth_call",params:[{to:a,data:"0x05db3194"},"latest"]},{jsonrpc:"2.0",id:4,method:"eth_call",params:[{to:a,data:"0x664e9704"},"latest"]},{jsonrpc:"2.0",id:5,method:"eth_call",params:[{to:a,data:"0xec81b483"},"latest"]},{jsonrpc:"2.0",id:6,method:"eth_call",params:[{to:a,data:"0x3197cbb6"},"latest"]},{jsonrpc:"2.0",id:7,method:"eth_call",params:[{to:a,data:"0x27b3bf11"},"latest"]},{jsonrpc:"2.0",id:8,method:"eth_call",params:[{to:a,data:"0x242c8e69"},"latest"]},{jsonrpc:"2.0",id:9,method:"eth_call",params:[{to:a,data:"0xc59ee1dc"},"latest"]},{jsonrpc:"2.0",id:10,method:"eth_call",params:[{to:a,data:"0xf97c7d12"},"latest"]}]});case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))()},timestampToTime:function(e){var t=new Date(1e3*e),a=t.getFullYear()+"-",n=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",s=(t.getDate()<10?"0"+t.getDate():t.getDate())+" ",r=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",i=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",o=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return a+n+s+r+i+o},getTokenInfo:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$ajax({url:t.rpc_node,method:"post",data:[{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:e,data:"0x95d89b41"},"latest"]},{jsonrpc:"2.0",id:2,method:"eth_call",params:[{to:e,data:"0x18160ddd"},"latest"]},{jsonrpc:"2.0",id:3,method:"eth_call",params:[{to:e,data:"0x313ce567"},"latest"]}]});case 2:return n=a.sent,s=parseInt(n[2].result),a.abrupt("return",{symbol:p["a"].cleanAsciiText(d.a.toAscii(n[0].result).toString()),totalSupply:parseInt(n[1].result)/Math.pow(10,s),decimal:s});case 5:case"end":return a.stop()}}),a)})))()},onExchange:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.buy||e.$message({showClose:!0,duration:0,message:"Wrong network",type:"error"}),e.loading=!0,!((new Date).getTime()/1e3<e.startTimeunix)){t.next=6;break}return e.$message({showClose:!0,duration:0,message:"It hasn't started yet",type:"error"}),e.loading=!1,t.abrupt("return");case 6:if(!((new Date).getTime()/1e3>e.endTimeunix)){t.next=10;break}return e.$message({showClose:!0,duration:0,message:"It's already over.",type:"error"}),e.loading=!1,t.abrupt("return");case 10:if(m["a"].getAccount()){t.next=14;break}return e.$message({showClose:!0,duration:0,message:"Please connect your wallet",type:"error"}),e.loading=!1,t.abrupt("return");case 14:if(!(Number(e.inputModel)>e.b_amount&&0!==parseInt(e.b_amount))){t.next=18;break}return e.$message({showClose:!0,duration:0,message:"Amount Limit :"+e.b_amount,type:"error"}),e.loading=!1,t.abrupt("return");case 18:return a={from:m["a"].getAccount(),to:e.contract,value:Object(h["toHex"])(d.a.toWei(e.inputModel,"ether")),data:"0xd0febe4c"},t.next=21,m["a"].sendTransaction(a);case 21:n=t.sent,n&&e.$message({message:e.$t("idoExchange.tx_submit"),type:"success"}),e.loading=!1;case 24:case"end":return t.stop()}}),t)})))()}}},S=M,I=(a("8f8b"),Object(y["a"])(S,n,s,!1,null,"03486a47",null));t["default"]=I.exports}}]);