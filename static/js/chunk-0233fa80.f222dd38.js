(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0233fa80"],{"62f6":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));n("b4fb"),n("513c"),n("20a5");var o=function(t,e){var n=(100*(t/e-1)).toFixed(2);return Number(n)},r=function(t){if(t){var e=t>0?"+":"";return"".concat(e).concat(t.toFixed(2),"%")}}},8189:function(t,e,n){},aa5c:function(t,e,n){"use strict";n("8189")},c074:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"container"},[n("el-tag",{staticClass:"info",attrs:{effect:"dark",type:"danger"}},[t._v(" CoinTool.App ")]),n("grid-layout",{attrs:{layout:t.list,"col-num":12,"row-height":30,"is-draggable":!0,"is-resizable":!1,"is-mirrored":!1,"vertical-compact":!0,margin:[1,1],"use-css-transforms":!0},on:{"update:layout":function(e){t.list=e}}},t._l(t.list,(function(e){return n("grid-item",{key:e.i,attrs:{x:e.x,y:e.y,w:e.w,h:e.h,i:e.i}},[n("div",{staticClass:"gridItem",style:{background:t.getBgColor(e.percent_change_24h),color:t.getTextColor(e.percent_change_24h)}},[n("span",{staticClass:"symbol",style:{fontSize:8*t.getCoinH(e.symbol)+"px"}},[t._v(t._s(e.symbol))]),n("span",{staticClass:"price",style:{fontSize:4+4*t.getCoinH(e.symbol)+"px"}},[t._v("$"+t._s(e.price_usd))]),n("span",{staticClass:"percent",style:{fontSize:8+2*t.getCoinH(e.symbol)+"px"}},[t._v(t._s(t.getRateText(e.percent_change_24h)))])])])})),1)],1)},r=[],a=(n("b4fb"),n("9302"),n("2eeb"),n("513c"),n("e35a"),n("5e9f"),n("0d7a"),n("6a61"),n("2e91")),i=n("d1e0"),s=n.n(i),c=n("62f6"),u=null,l={name:"Market",components:{GridLayout:s.a.GridLayout,GridItem:s.a.GridItem},data:function(){return{loading:!0,list:[]}},mounted:function(){this.init(),this.onConnectWebSocket()},destroyed:function(){console.log("destroyed"),u.close()},deactivated:function(){console.log("deactivated"),u.close()},methods:{getRateText:function(t){return Object(c["b"])(t)},getSocketParams:function(){var t=["BTC","ETH","DOT","XRP","ADA","LINK","LTC","BCH","BNB","XLM","BSV","AAVE","EOS","XMR","XTZ","TRX","XEM","NEO","VET","UNI","THETA","SNX","FIL","ATOM","OKB","MKR","DAI","IOTA","SUSHI","HT","DASH","DOGE","AVAX","YFI","KSM","ETC","ZEC","ZIL","GRT","WAVES","UMA","DCR","REN","COMP","EGLD","OMG","BAT","NEAR","NANO","ICX","TUSD","ONT","LRC","NEXO","ZRX","QTUM","DGB","ENJ","ZEN","CRV","IOST","ALGO","MANA","KNC","REP","XVG","BAND","VGX","SEELE","SC","BTG","LSK","BNT","SNT","BAL","OXT","BCD","MATIC","ANT","GNO","HOT","MONA","CHZ","RLC","KCS","CVC","TOMO","UTK","FTM","FUN","DNT","ARDR","SXP","KAVA","YFII","NEST","GT","WICC","KMD","RVN","BTS","BTM","FET","IRIS","BTT","MLN","STEEM","SOL","IOTX","LOOM","TRAC","SYS","BRC","ETN","STORJ","ARK","VLX","WAN","TRB","ELA"],e=3e3,n=t.map((function(t){return'"'.concat(t.toLowerCase(),"usdt@miniTicker@").concat(e,'ms"')}));return n.join(",")},onConnectWebSocket:function(){var t=this;console.log("行情页面连接socket"),u&&u.close(),u=new WebSocket("wss://stream.yshyqxx.com/stream"),u.onopen=function(){u.send('{"method": "SUBSCRIBE","params":['.concat(t.getSocketParams(),'],"id": 1}'))},u.onmessage=function(e){try{for(var n=JSON.parse(e.data),o=n.stream&&n.stream.split("@")[0].replace("usdt","").toUpperCase(),r=0;r<t.list.length;r++)if(t.list[r].symbol===o){var a=Number(n.data.c),i=Number(n.data.o);t.list[r].price_usd=a,t.list[r].percent_change_24h=Object(c["a"])(a,i);break}}catch(s){console.log(s,"socket 接收消息出错")}},u.onclose=function(){console.log("socket 已关闭")}},getData:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$ajax({url:"https://proxy.cointool.workers.dev/?url=".concat(encodeURIComponent("https://fxhapi.feixiaohao.com/public/v1/ticker?limit=300")),method:"get",timeout:6e4,data:{}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getBgColor:function(t){var e="";return t>=15?e="rgba(0, 153, 51, 1)":t>=10?e="rgba(0, 153, 51, 0.75)":t>=5?e="rgba(0, 153, 51, 0.5)":t>=.2?e="rgba(0, 153, 51, 0.25)":t<.2&&t>-.2?e="rgba(244, 244, 244, 1)":t>=-.2?e="rgba(243, 57, 57, 0.25)":t>=-5?e="rgba(243, 57, 57, 0.5)":t>=-10?e="rgba(243, 57, 57, 0.75)":t<-10&&(e="rgba(243, 57, 57, 0.9)"),e},getTextColor:function(t){var e="";return t>=15||t>=10?e="#fff":t>=5||t>=1||t<1&&t>-1||t>=-1||t>=-5?e="#000":(t>=-10||t<-10)&&(e="#fff"),e},getCoinW:function(t){var e={BTC:8,ETH:4,USDT:4};return e[t]?e[t]:2},getCoinH:function(t){var e={BTC:8,ETH:6};return e[t]?e[t]:2},init:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,o,r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getData();case 2:n=e.sent,t.loading=!1,o=0,r=0,a=[],i=n.map((function(e,n){a.push(e.symbol);var i=Object.assign(e,{x:o,y:r,w:t.getCoinW(e.symbol),h:t.getCoinH(e.symbol),i:n});return o+=t.getCoinW(e.symbol),o>=12&&(o=0,r++),i})),t.list=i;case 9:case"end":return e.stop()}}),e)})))()}}},g=l,d=(n("aa5c"),n("5d22")),f=Object(d["a"])(g,o,r,!1,null,"082c9b48",null);e["default"]=f.exports}}]);