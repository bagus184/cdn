(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6707102a"],{"0349":function(e,t,o){e.exports=o.p+"static/img/models.4fbcd1c0.png"},"166d":function(e,t,o){e.exports=o.p+"static/img/modely.9b5c7e48.png"},"34f3":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container",class:{loading_container:e.loading}},[o("div",{staticClass:"filterBox"},[o("el-form",{staticClass:"form-inline",attrs:{inline:!!e.isPc,model:e.form,"label-suffix":":"}},[o("el-form-item",{attrs:{label:"Coin"}},[o("el-select",{staticClass:"select",attrs:{placeholder:""},model:{value:e.form.goods1_name,callback:function(t){e.$set(e.form,"goods1_name",t)},expression:"form.goods1_name"}},e._l(e.goods1_list,(function(e){return o("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})})),1)],1),o("el-form-item",{attrs:{label:"Goods"}},[o("el-select",{staticClass:"select",attrs:{placeholder:""},model:{value:e.form.goods2_name,callback:function(t){e.$set(e.form,"goods2_name",t)},expression:"form.goods2_name"}},e._l(e.goods2_list,(function(t){return o("el-option",{key:t.label,attrs:{label:t.label,value:t.value}},[o("span",{staticStyle:{float:"left","font-size":"13px"}},[e._v(" "+e._s(t.label))]),o("span",{staticStyle:{float:"right",color:"#8492a6"}},[e._v("$"+e._s(e._f("toThousandFilter")(e.goodsInfo[t.value].price)))])])})),1)],1)],1)],1),o("div",{ref:"imageTofile",staticClass:"content"},[o("div",{directives:[{name:"show",rawName:"v-show",value:""===e.generateImgUrl,expression:"generateImgUrl === ''"}],staticClass:"renderDom"},[o("div",{staticClass:"other"},[o("div",{staticClass:"now_price"},[o("div",{staticClass:"li"},[o("span",{staticClass:"label"},[o("img",{staticClass:"icon",attrs:{src:"https://cdn.jsdelivr.net/gh/CoinTool-App/cdn/pic/token/"+e.form.goods1_name.toLowerCase()+".png"}}),e._v(" "+e._s(e.form.goods1_name)+" ")]),o("span",{staticClass:"value"},[e._v(" $"+e._s(e._f("autoFixed")(e.list[e.$moment().year()].goods1_price))+" ")])]),o("div",{staticClass:"li"},[o("span",{staticClass:"label"},[o("img",{staticClass:"icon",attrs:{src:e.goodsInfo[e.form.goods2_name].img}}),e._v(" "+e._s(e.form.goods2_name)+" ")]),o("span",{staticClass:"value"},[e._v("$"+e._s(e.goodsInfo[e.form.goods2_name].price))])])]),o("p",{staticClass:"time"},[e._v(e._s(e.nowDate))])]),o("ul",e._l(e.listArr,(function(t){return o("li",{key:t},[o("span",{staticClass:"time"},[e._v(e._s(t))]),o("div",{staticClass:"imgBox"},[o("img",{style:e.goodsInfo[e.form.goods2_name].style,attrs:{src:e.goodsInfo[e.form.goods2_name].img}})]),o("p",{staticClass:"goods_name"},[e._v(e._s(e.form.goods2_name))]),0!=e.list[t].goods1_price?o("p",{staticClass:"goods_price"},[e._v(" "+e._s(e._f("toThousandFilter")((e.goodsInfo[e.form.goods2_name].price/e.list[t].goods1_price).toFixed(e.toFixedNum)))+" "+e._s(e.form.goods1_name.toUpperCase())+" "),o("img",{staticClass:"icon",attrs:{src:"https://cdn.jsdelivr.net/gh/CoinTool-App/cdn/pic/token/"+e.form.goods1_name.toLowerCase()+".png"}})]):o("p",{staticClass:"goods_price"},[e._v("???")])])})),0),e._m(0)]),o("div",{directives:[{name:"show",rawName:"v-show",value:""!==e.generateImgUrl,expression:"generateImgUrl !== ''"}],staticClass:"result"},[o("img",{staticClass:"resultImg",attrs:{src:e.generateImgUrl}})])]),o("div",{staticClass:"btnBox"},[o("el-button",{attrs:{loading:e.loading,type:"success",icon:"el-icon-download"},on:{click:e.onDownLoadPic}},[e._v("DownLoad")])],1)])},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"footer"},[o("div",{staticClass:"tips"},[e._v(" Today's prices in different years ")]),o("div",{staticClass:"logoBox"},[o("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/c0deCn/wiki@master/logo.png"}}),o("span",[e._v("CoinTool.App")])])])}],i=o("4833"),s=o("efe2"),r=(o("6a61"),o("5502"),o("a9b5"),o("65f0"),o("f597"),o("8b79"),o("52c1")),c=o("1735"),l=o.n(c),d=(o("624b"),{zh:{tesla:{}},en:{tesla:{}}}),m=o("7832"),g=o.n(m),u=o("166d"),f=o.n(u),p=o("0349"),h=o.n(p),v=o("537c"),_=o.n(v),b="goodsPrice",w={name:b,inject:["onCheckConnect"],components:{},data:function(){return{loading:!1,coingecko:{btc:"bitcoin",eth:"ethereum",doge:"dogecoin",shib:"shiba-inu",bnb:"binancecoin",heco:"huobi-token",matic:"matic-network",trx:"tron",ftm:"fantom",xdai:"xdai",ht:"huobi-token",okt:"oec-token",avax:"avalanche-2",celo:"celo",movr:"moonriver",cro:"crypto-com-chain"},goodsInfo:{"iPhone 13 Pro":{price:999,style:"width: 34%; margin: 10px auto 0 auto;",img:_.a},"Tesla Model 3":{price:39940,style:"width: 90%; margin: 10px auto 0 auto;",img:g.a},"Tesla Model Y":{price:53940,style:"width: 90%; margin: 14px auto 0 auto;",img:f.a},"Tesla Model S":{price:88740,style:"width: 100%; margin: 10px auto 0 auto;",img:h.a}},form:{goods1_name:"DOGE",goods2_name:"Tesla Model 3"},list:{2019:{goods1_price:11},2020:{goods1_price:11},2021:{goods1_price:11},2022:{goods1_price:0}},generateImgUrl:"",nowDate:"",nextYear:2022}},computed:Object(s["a"])(Object(s["a"])({},Object(r["b"])(["isConnect","account","isPc","language"])),{},{listArr:function(){return Object.keys(this.list)},goods1_list:function(){return["btc","eth","bnb","doge","trx","avax","ftm","ht"].map((function(e){return{label:e.toUpperCase(),value:e.toUpperCase()}}))},toFixedNum:function(){return"iPhone 13 Pro"===this.form.goods2_name&&"BNB"===this.form.goods1_name?2:"BTC"===this.form.goods1_name?3:"ETH"===this.form.goods1_name?2:0},goods2_list:function(){return Object.keys(this.goodsInfo).map((function(e){return{label:e,value:e}}))}}),watch:{"form.goods1_name":function(e){this.getCoinData()}},created:function(){this.$i18n.getLocaleMessage("en")[b]||(this.$i18n.mergeLocaleMessage("en",d.en),this.$i18n.mergeLocaleMessage("zh",d.zh)),this.nextYear=Number(this.$moment().year())+1,this.nowDate=this.$moment(new Date).format("DD/MM/YYYY")},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getCoinData();case 1:case"end":return t.stop()}}),t)})))()},methods:{handleSvgToCanvas:function(){var e=this.$refs.imageTofile;if(e){var t=e.querySelectorAll("svg");[].forEach.call(t,(function(e){var t=e.parentNode,o=new Image;o.src="data:image/svg+xml,".concat(encodeURIComponent((new XMLSerializer).serializeToString(e))),o.crossOrigin="anonymous",o.onload=function(){var n=e.getBoundingClientRect().width,a=e.getBoundingClientRect().height,i=document.createElement("canvas");i.width=n,i.height=a;var s=i.getContext("2d");s.drawImage(o,0,0,n,a),t.appendChild(i),t.removeChild(e),t.removeChild(o)},t.append(o)}))}},getCoinData:function(){var e=this;this.listArr.forEach((function(t){e.getCoinPrice(Number(t))}))},getCoinPrice:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function o(){var n,a,i,s;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(n=t.$moment(new Date).format("DD-MM-"),t.nextYear===e){o.next=8;break}return o.next=4,t.$ajax({url:"https://api.coingecko.com/api/v3/coins/".concat(t.coingecko[t.form.goods1_name.toLowerCase()],"/history"),method:"get",data:{date:"".concat(n).concat(e)}});case 4:s=o.sent,t.list[e]={goods1_price:null===s||void 0===s||null===(a=s.market_data)||void 0===a||null===(i=a.current_price)||void 0===i?void 0:i.usd},o.next=9;break;case 8:t.list[e]={goods1_price:0};case 9:case"end":return o.stop()}}),o)})))()},onDownLoadPic:function(){var e=this;this.loading||(this.loading=!0,setTimeout((function(){e.onGenerateImg()}),400))},onGenerateImg:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var o,n,a,i,s,r,c,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o=e.$refs.imageTofile,n=o.offsetWidth,a=o.offsetHeight,i=2,s=document.createElement("canvas"),r=s.getContext("2d"),s.width=n*i,s.height=a*i,r.scale(i,i),o.getBoundingClientRect(),c=document.documentElement.scrollTop||document.body.scrollTop,console.log(c," -scrollTop"),r.translate(0,-c),console.log(window.pageYOffset),console.log(o.getBoundingClientRect().top),d={useCORS:!0,tainttest:!0,scale:.999,backgroundColor:"#ffffff",canvas:s,width:n,height:a},l()(o,d).then((function(t){var o=t.toDataURL("image/png"),n=t.getContext("2d");n.mozImageSmoothingEnabled=!1,n.webkitImageSmoothingEnabled=!1,n.msImageSmoothingEnabled=!1,n.imageSmoothingEnabled=!1,e.generateImgUrl=o,e.loading=!1})).catch((function(t){e.loading=!1,e.$message.error("error")}));case 17:case"end":return t.stop()}}),t)})))()}}},C=w,x=(o("edde"),o("5d22")),k=Object(x["a"])(C,n,a,!1,null,"e59766ae",null);t["default"]=k.exports},"537c":function(e,t,o){e.exports=o.p+"static/img/iphone13.d156e731.png"},"624b":function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return r}));var n=o("4833"),a=(o("6a61"),o("37de"),o("22f9"),o("63f1"),o("e3a7"),o("7479"),o("91cc"),o("2c1c"),o("48c5"),o("0f02"),o("782e"),o("fceb"),o("e5cb"),o("ecfe"),o("0e9c"),o("cfa9"),o("6bfd"),o("583c"),o("1e68"),o("b0c7"),o("6237"),o("7ad5"),o("ff5e"),o("b606"),o("3a56"),o("7e59"),o("5bf0"),o("f6ed"),o("3f1a"),o("eb26"),o("65f0"),function(e,t){var o=document.createElement("canvas"),n=o.getContext("2d"),a=new Image;a.crossOrigin="Anonymous",a.onload=function(){o.height=a.height,o.width=a.width,n.drawImage(a,0,0);var e=o.toDataURL("image/png");t(e),o=null},a.src=e}),i=function(e,t){var o=e.split(","),n=o[0].match(/:(.*?);/)[1],a=atob(o[1]),i=a.length,s=new Uint8Array(i);while(i--)s[i]=a.charCodeAt(i);return new File([s],t,{type:n})},s=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var o,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=n.length>1&&void 0!==n[1]?n[1]:"imgName",e.abrupt("return",new Promise((function(e){a(t,(function(t){var n=i(t,o);e(n)}))})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number(new Date),o=document.createElement("a");o.setAttribute("href",e),o.setAttribute("download",t);var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!0,!1,0,null),o.dispatchEvent(n)}},7832:function(e,t,o){e.exports=o.p+"static/img/model3.2743f1c4.png"},"97d6":function(e,t,o){},edde:function(e,t,o){"use strict";o("97d6")}}]);