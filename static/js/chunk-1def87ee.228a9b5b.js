(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1def87ee"],{"7f44c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"introduce"},[a("div",{staticClass:"progress"},[a("el-progress",{attrs:{"show-text":!1,type:"circle",percentage:t.updateProgress,width:t.isPc?140:100,"stroke-width":t.isPc?14:10,color:t.$coinInfo[t.chainName].color}}),a("svg-icon",{staticClass:"icon",style:{color:t.$coinInfo[t.chainName].color},attrs:{"icon-class":t.$coinInfo[t.chainName].icon}})],1),a("div",{staticClass:"switchBox"},[a("el-select",{staticStyle:{width:"100%"},attrs:{value:t.chainName,size:t.isPc?"medium":"mini"},on:{change:t.onChangeChain}},t._l(t.chainList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[a("span",{staticStyle:{float:"left"}},[t._v(t._s(e.label))]),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"16px"}},[a("svg-icon",{staticClass:"icon",style:"color:"+t.$coinInfo[e.value].color,attrs:{"icon-class":t.$coinInfo[e.value].icon}})],1)])})),1)],1),a("div",{staticClass:"left"},[a("h2",[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"fee"}}),t._v(" "+t._s(t.chainName.toUpperCase())+" "+t._s(t.$t("gasPrice.title"))+" "),a("span",{directives:[{name:"show",rawName:"v-show",value:"eth"===t.chainName,expression:"chainName === 'eth'"}]},[t._v("(Gwei)")])],1),a("p",{staticClass:"desc"},[a("span",[t._v(t._s(t.$t("gasPrice.desc")))])]),a("p",{staticClass:"desc"},[a("span",[t._v(t._s(t.lastUpdateTime))])])])]),a("ul",{staticClass:"ul"},t._l(t.list,(function(e){return a("li",{key:e.type,class:e.type+"-img imgBg"},[a("h5",{staticClass:"speed"},[t._v(t._s(t.$t("gasPrice."+e.type)))]),a("div",{staticClass:"numBox"},[a("count-to",{class:"num",attrs:{"start-val":e.oPrice,decimals:["cro","iotx"].includes(t.chainName)?0:1,"end-val":e.nPrice,duration:2e3}})],1),a("p",{staticClass:"time"},[t._v(t._s(t.secondToDate(e.seconds)))]),a("p",{directives:[{name:"show",rawName:"v-show",value:0!==t.usd_price&&"xdc"!==t.chainName,expression:"usd_price !== 0 && chainName !== 'xdc'"}],staticClass:"price"},[t._v(" $"),"eth"!==t.chainName?a("span",[t._v(t._s(t._f("autoFixed")(21e3*e.nPrice/Math.pow(10,9)*t.usd_price)))]):a("span",[t._v(t._s((21e3*e.nPrice/Math.pow(10,9)*t.usd_price).toFixed(2)))])]),a("div",{staticClass:"iconBox"},[a("svg-icon",{class:"icon "+e.type+"-animation-bg",attrs:{"icon-class":e.icon}})],1)])})),0),a("div",{staticClass:"tips"},[a("el-link",{attrs:{href:t.$origin,target:"_blank"}},[t._v(t._s(t.$t("gasPrice.alert_2")))])],1),t.isShowChrome?a("div",{staticClass:"chrome"},[a("i",{staticClass:"el-icon-close closeIcon",on:{click:function(e){t.isShowChrome=!1}}}),a("svg-icon",{staticClass:"chromeIcon",attrs:{"icon-class":"chrome"}}),a("p",[t._v("Google extended - Gas Price")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.onDownload}},[t._v("Download")])],1):t._e()])},i=[],s=a("4833"),r=a("efe2"),o=(a("8b79"),a("403f"),a("a9b5"),a("6a61"),a("9e2e")),c=a.n(o),l={zh:{gasPrice:{title:"Gas Price",desc:"最新实时报价",instant:"极速",fast:"高速",normal:"标准",slow:"缓慢",hour:"小时",second:"秒",minute:"分钟",alert_1:"所有报价基于矿池的待处理交易队列（包含全网交易），比其他基于链上数据的统计更实时和准确",alert_2:"CoinTool.APP"}},en:{gasPrice:{title:"Gas Price Last",desc:"Real-time latest price",instant:"Rapid",fast:"Fast",normal:"Normal",slow:"Slow",hour:"Hour",second:"Second",minute:"Minute",alert_1:"All quotations are based on the pending transaction queue of the mine pool (including the whole network transactions), which is more real-time and accurate than other statistics based on the data on the chain",alert_2:"CoinTool.APP"}}},u=a("ed08"),d=a("52c1"),h="gasPrice",m={name:h,components:{CountTo:c.a},data:function(){return{isShowChrome:!0,chainName:"eth",updateProgress:0,list:[{icon:"speed-transaction",type:"fast",nPrice:0,oPrice:0,seconds:0},{icon:"car",type:"normal",nPrice:0,oPrice:0,seconds:0},{icon:"tortoise",type:"slow",nPrice:0,oPrice:0,seconds:0}],coingecko:{btc:"bitcoin",eth:"ethereum",trx:"tron",arb:"ethereum",doge:"dogecoin",shib:"shiba-inu",bsc:"binancecoin",heco:"huobi-token",matic:"matic-network",ftm:"fantom",xdai:"xdai",okt:"oec-token",avax:"avalanche-2",celo:"celo",movr:"moonriver",cro:"crypto-com-chain",iotx:"iotex",bch:"bitcoin-cash",sbch:"bitcoin-cash",glmr:"moonbeam",xdc:"xdce-crowd-sale",sdn:"shiden",fuse:"fuse-network-token",aac:"acute-angle-cloud"},cny_price:0,usd_price:0,title:"",t1:null,lastUpdateTime:"",isFirstData:!0,fast_old_price:0,normal_old_price:0,slow_old_price:0}},computed:Object(r["a"])({},Object(d["b"])(["isPc"])),watch:{$route:{handler:function(t,e){},immediate:!0}},created:function(){this.$i18n.getLocaleMessage("en")[h]||(this.$i18n.mergeLocaleMessage("en",l.en),this.$i18n.mergeLocaleMessage("zh",l.zh)),this.chainName=this.$route.meta.chainName,this.chainList=Object(u["i"])(h)},beforeDestroy:function(){},destroyed:function(){clearInterval(this.t1)},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.getCoinPrice(),e.next=3,t.getGasPrice();case 3:t.setProgress(),t.title=document.title;case 5:case"end":return e.stop()}}),e)})))()},methods:{onDownload:function(){window.open("https://chrome.google.com/webstore/detail/cointool-gas-price/ehbppccdhiehpnnhjmahlkpfgnkejngb/related","_blank")},getGasRPC:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$ajax({url:t.$coinInfo[t.chainName].rpcNode,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_gasPrice",params:[]}});case 3:return a=e.sent,n=a.result,console.log(a.result/Math.pow(10,9)),i={fast:{price:Math.ceil(1.03*n),estimated_seconds:0},normal:{price:Math.ceil(1.01*n),estimated_seconds:0},slow:{price:n,estimated_seconds:0}},e.abrupt("return",{data:i});case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0,"error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},getCoinPrice:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.coingecko[t.chainName],e.next=3,t.$ajax({url:"https://api.coingecko.com/api/v3/simple/price",method:"get",data:{ids:a,vs_currencies:"cny,usd"}});case 3:n=e.sent,t.usd_price=n[a]["usd"],t.cny_price=n[a]["cny"];case 6:case"end":return e.stop()}}),e)})))()},secondToDate:function(t){var e=Math.floor(t/60%60),a=Math.floor(t%60);if(t<60)return"".concat(a," ").concat(this.$t("gasPrice.second"));var n=0!==a?" ".concat(a," ").concat(this.$t("gasPrice.second")):"";return"".concat(e," ").concat(this.$t("gasPrice.minute")).concat(n)},onChangeChain:function(t){this.$router.push({path:"/".concat(h,"/").concat(t),query:this.$route.query})},setProgress:function(){var t=this;this.t1=setInterval(Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.updateProgress<100?t.updateProgress+=5:(t.getGasPrice(),t.getCoinPrice(),t.updateProgress=0),document.title=t.list[2].nPrice+" Gwei - "+t.list[0].nPrice+" Gwei "+t.title;case 2:case"end":return e.stop()}}),e)}))),400)},getGasPrice:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a="https://api.debank.com/chain/gas_price_dict_v2",n=t.$route.query.plugin,n&&(a="https://proxy.cointool.workers.dev/?url=".concat(encodeURIComponent("https://api.debank.com/chain/gas_price_dict_v2"))),!["iotx","glmr","sdn","xdc"].includes(t.chainName)){e.next=9;break}return e.next=6,t.getGasRPC();case 6:i=e.sent,e.next=12;break;case 9:return e.next=11,t.$ajax({url:a,method:"get",data:{chain:t.chainName}});case 11:i=e.sent;case 12:t.lastUpdateTime=t.$moment(new Date).format("YYYY-MM-DD HH:mm:ss"),s={fast:15,normal:60,slow:180},t.list=t.list.map((function(t){return Object(r["a"])(Object(r["a"])({},t),{},{oPrice:t.nPrice,nPrice:i.data[t.type].price/1e9,seconds:0!==i.data[t.type].estimated_seconds?i.data[t.type].estimated_seconds:s[t.type]})}));case 15:case"end":return e.stop()}}),e)})))()}}},p=m,f=(a("8a2c"),a("5d22")),g=Object(f["a"])(p,n,i,!1,null,"efb54eac",null);e["default"]=g.exports},"8a2c":function(t,e,a){"use strict";a("d29e")},"9e2e":function(t,e,a){!function(e,a){t.exports=a()}(0,(function(){return function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var n=a(4)(a(1),a(5),null,null);t.exports=n.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),a=e[0],n=e.length>1?this.decimal+e[1]:"",i=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;i.test(a);)a=a.replace(i,"$1"+this.separator+"$2");return this.prefix+a+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=i.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",i.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,i="webkit moz ms o".split(" "),s=void 0,r=void 0;if("undefined"==typeof window)e.requestAnimationFrame=s=function(){},e.cancelAnimationFrame=r=function(){};else{e.requestAnimationFrame=s=window.requestAnimationFrame,e.cancelAnimationFrame=r=window.cancelAnimationFrame;for(var o=void 0,c=0;c<i.length&&(!s||!r);c++)o=i[c],e.requestAnimationFrame=s=s||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=r=r||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];s&&r||(e.requestAnimationFrame=s=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-n)),i=window.setTimeout((function(){t(e+a)}),a);return n=e+a,i},e.cancelAnimationFrame=r=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=s,e.cancelAnimationFrame=r},function(t,e){t.exports=function(t,e,a,n){var i,s=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(i=t,s=t.default);var o="function"==typeof s?s.options:s;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),a&&(o._scopeId=a),n){var c=Object.create(o.computed||null);Object.keys(n).forEach((function(t){var e=n[t];c[t]=function(){return e}})),o.computed=c}return{esModule:i,exports:s,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))},d29e:function(t,e,a){}}]);