(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b20ed03","chunk-c7770d26"],{10:function(e,t){},11:function(e,t){},"2ccd":function(e,t,n){},"4bf8":function(e,t,n){"use strict";n.r(t),n.d(t,"export_table_to_excel",(function(){return f})),n.d(t,"export_json_to_excel",(function(){return p}));n("b4fb"),n("fe59"),n("2eeb"),n("b722"),n("3e54"),n("e18c"),n("1c2e"),n("8256"),n("ab6e"),n("927c"),n("3c51"),n("db0a"),n("1cc1"),n("ab0f"),n("fc6e"),n("f30b"),n("cfd1"),n("d104"),n("f74a"),n("3598"),n("b497"),n("2909"),n("a7ef"),n("b523"),n("e671"),n("4140"),n("83db"),n("829d"),n("939f"),n("1bb1"),n("c3ba"),n("08ba");var o=n("4c09"),a=n("d72d"),r=n("3f81"),c=n.n(r);function s(e){for(var t=[],n=e.querySelectorAll("tr"),o=[],a=0;a<n.length;++a){for(var r=[],c=n[a],s=c.querySelectorAll("td"),i=0;i<s.length;++i){var l=s[i],u=l.getAttribute("colspan"),d=l.getAttribute("rowspan"),f=l.innerText;if(""!==f&&f==+f&&(f=+f),o.forEach((function(e){if(a>=e.s.r&&a<=e.e.r&&r.length>=e.s.c&&r.length<=e.e.c)for(var t=0;t<=e.e.c-e.s.c;++t)r.push(null)})),(d||u)&&(d=d||1,u=u||1,o.push({s:{r:a,c:r.length},e:{r:a+d-1,c:r.length+u-1}})),r.push(""!==f?f:null),u)for(var p=0;p<u-1;++p)r.push(null)}t.push(r)}return[t,o]}function i(e,t){t&&(e+=1462);var n=Date.parse(e);return(n-new Date(Date.UTC(1899,11,30)))/864e5}function l(e,t){for(var n={},o={s:{c:1e7,r:1e7},e:{c:0,r:0}},a=0;a!=e.length;++a)for(var r=0;r!=e[a].length;++r){o.s.r>a&&(o.s.r=a),o.s.c>r&&(o.s.c=r),o.e.r<a&&(o.e.r=a),o.e.c<r&&(o.e.c=r);var s={v:e[a][r]};if(null!=s.v){var l=c.a.utils.encode_cell({c:r,r:a});"number"===typeof s.v?s.t="n":"boolean"===typeof s.v?s.t="b":s.v instanceof Date?(s.t="n",s.z=c.a.SSF._table[14],s.v=i(s.v)):s.t="s",n[l]=s}}return o.s.c<1e7&&(n["!ref"]=c.a.utils.encode_range(o)),n}function u(){if(!(this instanceof u))return new u;this.SheetNames=[],this.Sheets={}}function d(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),o=0;o!=e.length;++o)n[o]=255&e.charCodeAt(o);return t}function f(e){var t=document.getElementById(e),n=s(t),o=n[1],r=n[0],i="SheetJS",f=new u,p=l(r);p["!merges"]=o,f.SheetNames.push(i),f.Sheets[i]=p;var h=c.a.write(f,{bookType:"xlsx",bookSST:!1,type:"binary"});Object(a["saveAs"])(new Blob([d(h)],{type:"application/octet-stream"}),"test.xlsx")}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.multiHeader,n=void 0===t?[]:t,r=e.header,s=e.data,i=e.filename,f=e.merges,p=void 0===f?[]:f,h=e.autoWidth,b=void 0===h||h,v=e.bookType,m=void 0===v?"xlsx":v;i=i||"excel-list",s=Object(o["a"])(s),s.unshift(r);for(var w=n.length-1;w>-1;w--)s.unshift(n[w]);var g="SheetJS",k=new u,x=l(s);if(p.length>0&&(x["!merges"]||(x["!merges"]=[]),p.forEach((function(e){x["!merges"].push(c.a.utils.decode_range(e))}))),b){for(var y=s.map((function(e){return e.map((function(e){return null==e?{wch:10}:e.toString().charCodeAt(0)>255?{wch:2*e.toString().length}:{wch:e.toString().length}}))})),S=y[0],A=1;A<y.length;A++)for(var T=0;T<y[A].length;T++)S[T]["wch"]<y[A][T]["wch"]&&(S[T]["wch"]=y[A][T]["wch"]);x["!cols"]=S}k.SheetNames.push(g),k.Sheets[g]=x;var H=c.a.write(k,{bookType:m,bookSST:!1,type:"binary"});Object(a["saveAs"])(new Blob([d(H)],{type:"application/octet-stream"}),"".concat(i,".").concat(m))}},"72f8":function(e,t,n){"use strict";n("2ccd")},9:function(e,t){},b722:function(e,t,n){"use strict";var o=n("1c8b"),a=n("d890"),r=n("1c2e9"),c=n("403f"),s="ArrayBuffer",i=r[s],l=a[s];o({global:!0,forced:l!==i},{ArrayBuffer:i}),c(s)},c983:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"40px"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("svg-icon",{attrs:{"icon-class":"international"}}),n("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e.$t("HecoTokenHoldScan.title")))])],1),n("el-form",{ref:"form",attrs:{"label-width":"160px"}},[n("el-form-item",{attrs:{label:e.$t("HecoTokenHoldScan.tokenAddress")}},[n("el-input",{model:{value:e.tokenAddress,callback:function(t){e.tokenAddress=t},expression:"tokenAddress"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onCheck}},[e._v(e._s(e.$t("HecoTokenHoldScan.check")))]),n("el-button",{on:{click:e.handleDownload}},[e._v(e._s(e.$t("HecoTokenHoldScan.export")))])],1)],1),n("el-input",{attrs:{id:"outdata",row:"20",type:"textarea",autosize:{minRows:3,maxRows:20}},model:{value:e.outdata,callback:function(t){e.outdata=t},expression:"outdata"}})],1)],1)},a=[],r=(n("b4fb"),n("2eeb"),n("6a61"),n("2e91")),c={zh:{HecoTokenHoldScan:{title:"Heco代币持有人扫描(空投快照)",tokenAddress:"代币地址",check:"扫描",export:"导出",exportBtnsuccess:"导出成功"}},en:{HecoTokenHoldScan:{title:"Heco Token Holder Scan (Airdrop Snapshot)",tokenAddress:"Token Address",check:"Scan",export:"Export",exportBtnsuccess:"Export success"}}},s=n("4bf8"),i="HecoTokenHoldScan",l={name:"TokenHoldScan",data:function(){return{resList:[],outdata:"",tokenAddress:""}},created:function(){this.$i18n.getLocaleMessage("en")[i]||(this.$i18n.mergeLocaleMessage("en",c.en),this.$i18n.mergeLocaleMessage("zh",c.zh))},methods:{onCheck:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,o,a,r,c,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.resList=[],n=1e8,o=-1,a=1,r=document.getElementById("outdata"),c=1;case 6:if(!(c<=n)){t.next=17;break}return t.next=9,e.getRes(c);case 9:for(i in s=t.sent,1e8===n&&(n=parseInt(s.data.pageCount)),-1===o&&(o=s.data.totalCount,e.outdata+="TotalCount: ".concat(o,"  Star Scan \r\n")),s.data.data)s.data.data[i].balance>0&&(e.outdata+=a+++"   Address:".concat(s.data.data[i].address," balance:").concat(s.data.data[i].balance,"  \r\n"),e.resList.push({address:s.data.data[i].address,balance:s.data.data[i].balance}));r.scrollTop=r.scrollHeight;case 14:c++,t.next=6;break;case 17:e.outdata+="Done By CoinTool.App! \r\n";case 18:case"end":return t.stop()}}),t)})))()},getRes:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$ajax({url:"https://api-scan.hecochain.com/hsc/listTokenHolder/"+t.tokenAddress+"/"+e+"/100",method:"get"});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()},handleDownload:function(){var e=this.formatJson(["address","balance"],this.resList);Object(s["export_json_to_excel"])({header:["Address","balance"],data:e,filename:"cointool_heco_".concat(parseInt(990001*Math.random()+1e4,10)),autoWidth:!0,bookType:"xlsx"}),this.$message.success(this.$t("HecoTokenHoldScan.exportBtnsuccess"))},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))}}},u=l,d=(n("72f8"),n("5d22")),f=Object(d["a"])(u,o,a,!1,null,"4335eff2",null);t["default"]=f.exports},d72d:function(e,t,n){(function(n){var o,a,r;(function(n,c){a=[],o=c,r="function"===typeof o?o.apply(t,a):o,void 0===r||(e.exports=r)})(0,(function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){s(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function a(e){var t=new XMLHttpRequest;return t.open("HEAD",e,!1),t.send(),200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var c="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,s=c.saveAs||("object"!=typeof window||window!==c?function(){}:"download"in HTMLAnchorElement.prototype?function(e,t,n){var s=c.URL||c.webkitURL,i=document.createElement("a");t=t||e.name||"download",i.download=t,i.rel="noopener","string"==typeof e?(i.href=e,i.origin===location.origin?r(i):a(i.href)?o(e,t,n):r(i,i.target="_blank")):(i.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(i.href)}),4e4),setTimeout((function(){r(i)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,c){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,c),n);else if(a(e))o(e,n,c);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){r(s)}))}}:function(e,t,n,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var r="application/octet-stream"===e.type,s=/constructor/i.test(c.HTMLElement)||c.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||r&&s)&&"object"==typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=i?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},l.readAsDataURL(e)}else{var u=c.URL||c.webkitURL,d=u.createObjectURL(e);a?a.location=d:location.href=d,a=null,setTimeout((function(){u.revokeObjectURL(d)}),4e4)}});c.saveAs=s.saveAs=s,e.exports=s}))}).call(this,n("2409"))}}]);