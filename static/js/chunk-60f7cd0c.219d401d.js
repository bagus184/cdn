(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60f7cd0c"],{"0124":function(t,e,s){},"0fef":function(t,e,s){"use strict";s("143a")},"143a":function(t,e,s){},"15f6":function(t,e,s){},"16d1":function(t,e,s){"use strict";s("15f6")},"28e9":function(t,e,s){"use strict";s("0124")},"38cf":function(t,e,s){var r=s("23e7"),i=s("1148");r({target:"String",proto:!0},{repeat:i})},7842:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"remodal-bg render",attrs:{id:"app"}},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12,offset:6}},[s("userInput",{attrs:{running:t.running,cores:t.cores},on:{start:t.startGen,stop:t.stopGen,"input-change":t.setInput}})],1)],1),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12,offset:6}},[s("statistics",{ref:"statistics",attrs:{hex:t.input.hex,checksum:t.input.checksum,status:t.status,"first-tick":t.firstTick}})],1)],1),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12,offset:6}},[s("result",{attrs:{address:t.result.address,"private-key":t.result.privateKey}})],1)],1)],1)},i=[],n=(s("fb6a"),s("38cf"),{zh:{vanityEth:{number:"数量:",title:"ETH单位转换",tableKey:"私钥",tableAddress:"地址",createBtn:"立即创建",exportBtn:"导出",case_sensitive:"区分大小写",generate:"生成",threads:"线程",difficulty:"难度",probability:"可能性",speed:"速度",status:"状态",suffix:"后缀",prefix:"前缀"}},en:{vanityEth:{number:"Number:",title:"ETthereum Unit Converter",tableKey:"Key",tableAddress:"tableAddress",createBtn:"Create",exportBtn:"export",case_sensitive:"Case-sensitive",generate:"Generate",threads:"Threads",difficulty:"Difficulty",probability:"probability",speed:"Speed",status:"Status",suffix:"Suffix",prefix:"Prefix"}}});function a(){return new Worker(s.p+"static/js/vanity.5eb09646.worker.js")}var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel",attrs:{id:"input-panel"}},[s("form",{class:{error:t.inputError},on:{submit:function(e){return e.preventDefault(),t.startGen(e)}}},[s("div",{staticClass:"error-text"},[t._v("Numbers and letters from A to F only")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.hex,expression:"hex"}],staticClass:"text-input-large",attrs:{id:"input",type:"text",placeholder:t.suffix?"Suffix":"Prefix",disabled:t.running},domProps:{value:t.hex},on:{input:function(e){e.target.composing||(t.hex=e.target.value)}}}),t._m(0),s("div",{staticClass:"example hide-prerender"},[t._v(" E.g. "),s("span",{staticClass:"monospace"},[t._v(" 0x"),t.suffix?t._e():s("b",{domProps:{textContent:t._s(t.example.chosen)}}),s("span",{domProps:{textContent:t._s(t.example.random)}}),t.suffix?s("b",{domProps:{textContent:t._s(t.example.chosen)}}):t._e()])]),s("div",{staticClass:"row controls hide-prerender"},[s("div",{staticClass:"col-12 col-sm-6 col-md-12 col-lg-6"},[s("el-form",{ref:"form",attrs:{"label-width":"160px"}},[s("el-form-item",{attrs:{label:t.$t("vanityEth.case_sensitive")}},[s("el-switch",{model:{value:t.checksum,callback:function(e){t.checksum=e},expression:"checksum"}})],1),s("el-form-item",{attrs:{label:""}},[s("el-radio-group",{model:{value:t.suffix,callback:function(e){t.suffix=e},expression:"suffix"}},[s("el-radio",{attrs:{label:!0}},[t._v(t._s(t.$t("vanityEth.suffix")))]),s("el-radio",{attrs:{label:!1}},[t._v(t._s(t.$t("vanityEth.prefix")))])],1)],1),s("el-form-item",{attrs:{label:t.$t("vanityEth.threads")}},[s("el-input-number",{staticClass:"inputNum",attrs:{min:0,max:999},model:{value:t.threads,callback:function(e){t.threads=e},expression:"threads"}})],1)],1)],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 col-sm-12"},[s("input",{staticClass:"button-large hide-render",attrs:{type:"button",value:t.$t("vanityEth.generate"),disabled:""}}),s("input",{staticClass:"button-large hide-prerender",attrs:{type:"button",value:t.$t("vanityEth.generate"),disabled:t.running||t.inputError||t.error},on:{click:t.startGen}})]),s("div",{staticClass:"col-lg-6 col-sm-12",staticStyle:{"margin-top":"20px"}},[s("input",{staticClass:"button-large",attrs:{type:"button",value:"Stop",disabled:!t.running},on:{click:t.stopGen}})])])])])},u=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-content-center hide-render"},[s("div",{staticClass:"spinner"},[s("div"),s("div"),s("div"),s("div")])])}],c=(s("a9e3"),s("d3b7"),s("25f0"),function(t){return!t.length||/^[0-9A-F]+$/g.test(t.toUpperCase())});function h(t){for(var e="",s=0;s<t.length;s++){var r=t.substr(s,1);e+=Math.random()<.5?r.toUpperCase():r.toLowerCase()}return e}var l={props:{running:Boolean,cores:Number},data:function(){return{threads:4,hex:"",checksum:!0,suffix:!1,error:!1}},computed:{inputError:function(){return!c(this.hex)},example:function(){if(this.inputError)return"N/A";for(var t=this.checksum?this.hex:h(this.hex),e="",s=0;s<40-this.hex.length;s++)e+=h(Math.floor(16*Math.random()).toString(16));return{random:e,chosen:t}}},watch:{hex:function(){this.$emit("input-change","hex",this.hex)},checksum:function(){this.$emit("input-change","checksum",this.checksum)},suffix:function(){this.$emit("input-change","suffix",this.suffix)},threads:function(){this.$emit("input-change","threads",this.threads)}},methods:{startGen:function(){this.running||this.inputError||this.error||this.$emit("start")},stopGen:function(){this.$emit("stop")}}},d=l,f=(s("28e9"),s("2877")),p=Object(f["a"])(d,o,u,!1,null,"e6d2149c",null),m=p.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel"},[s("div",[t._v(t._s(t.$t("vanityEth.difficulty"))+": "),s("span",{staticClass:"output",domProps:{textContent:t._s(t.formatNum(t.difficulty))}},[t._v("1")])]),s("div",[t._v(t._s(t.$t("vanityEth.generate"))+" : "),s("span",{staticClass:"output",domProps:{textContent:t._s(t.formatNum(t.count)+(1===t.count?" address":" addresses"))}},[t._v("0 addresses")])]),s("div",[t._v("50% "+t._s(t.$t("vanityEth.probability"))+": "),s("span",{staticClass:"output",domProps:{textContent:t._s(t.probability50)}},[t._v("0 addresses")])]),s("div",[t._v(t._s(t.$t("vanityEth.speed"))+" : "),s("span",{staticClass:"output",domProps:{textContent:t._s(t.speed+" addr/s")}},[t._v("0 addr/s")])]),s("div",[t._v(t._s(t.$t("vanityEth.status"))+": "),s("span",{staticClass:"output",domProps:{textContent:t._s(t.status)}},[t._v("Waiting")])]),s("el-progress",{attrs:{"text-inside":!0,"stroke-width":26,percentage:t.probability}})],1)},g=[],x=(s("ac1f"),s("5319"),function(t,e){var s=Math.pow(16,t.length);return e?s*Math.pow(2,t.replace(/[^a-f]/gi,"").length):s}),b=function(t,e){return 1-Math.pow(1-1/t,e)},k={props:{hex:String,checksum:Boolean,status:String,firstTick:Number},data:function(){return{speed:0,count:0}},computed:{difficulty:function(){return this.inputError?"N/A":x(this.hex,this.checksum)},probability50:function(){return this.inputError?"N/A":this.formatNum(Math.floor(Math.log(.5)/Math.log(1-1/this.difficulty)))+" addresses"},probability:function(){return Math.round(1e4*b(this.difficulty,this.count))/100}},watch:{hex:function(){this.count=0},checksum:function(){this.count=0}},created:function(){},methods:{emitEvent:function(t){this.count+=t>0?t:-this.count,this.speed=t>0?Math.floor(1e3*this.count/(performance.now()-this.firstTick)):0},formatNum:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}}},w=k,y=(s("0fef"),Object(f["a"])(w,v,g,!1,null,"53ca9756",null)),_=y.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:""!==t.address&&""!==t.privateKey,expression:"address !=='' && privateKey !== ''"}],staticClass:"panel"},[s("KeyAddress",{attrs:{img:t.img,keys:t.privateKey,address:t.address}})],1)},E=[],$=(s("96cf"),s("1da1")),M=s("060a"),S=s("d055"),K=s.n(S),N={components:{KeyAddress:M["a"]},props:{address:String,privateKey:String},data:function(){return{reveal:!1,img:""}},watch:{address:function(t){var e=this;return Object($["a"])(regeneratorRuntime.mark((function s(){var r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(t){s.next=2;break}return s.abrupt("return");case 2:return e.reveal=!1,s.next=5,K.a.toDataURL(t);case 5:r=s.sent,e.img=r;case 7:case"end":return s.stop()}}),s)})))()}},methods:{revealKey:function(){this.reveal=!0,this.$root.$emit("event","Reveal")}}},A=N,G=(s("16d1"),Object(f["a"])(A,C,E,!1,null,"5d127b5e",null)),P=G.exports;s.p="/";var R="vanityEth",W={components:{UserInput:m,Statistics:_,Result:P},data:function(){return{running:!1,status:"Waiting",workers:[],threads:4,cores:0,result:{address:"",privateKey:""},input:{hex:"",checksum:!0,suffix:!1},firstTick:null,error:null}},watch:{threads:function(){this.running||this.initWorkers()}},created:function(){this.$i18n.getLocaleMessage("en")[R]||(this.$i18n.mergeLocaleMessage("en",n.en),this.$i18n.mergeLocaleMessage("zh",n.zh)),this.initWorkers(),window["benchmark"]=this.benchmark,this.$root.$on("event",(function(t){window["umami"]&&window["umami"].trackEvent(t,"click")}))},methods:{setInput:function(t,e){switch(t){case"hex":this.input.hex=e;break;case"checksum":this.input.checksum=e;break;case"suffix":this.input.suffix=e;break;case"threads":this.threads=e}},displayResult:function(t){this.$refs.statistics.emitEvent(t.attempts),this.result.address=t.address,this.result.privateKey=t.privKey,this.status="Address found"},clearResult:function(){this.result.address="",this.result.privateKey="",this.$refs.statistics.emitEvent(-1)},initWorkers:function(){var t=this;if(this.workers.length!==this.threads)if(this.workers.length>this.threads){for(var e=this.threads;e<this.workers.length;e++)this.workers[e].terminate();this.workers=this.workers.slice(0,this.threads)}else for(var s=this.workers.length;s<this.threads;s++)try{this.workers[s]=new a,this.workers[s].onmessage=function(e){return t.parseWorkerMessage(e.data)}}catch(r){this.error=r,this.status="Error",console.error(this.error);break}},parseWorkerMessage:function(t){return t.error?(this.stopGen(),this.error=t.error,this.status="Error",void console.error(this.error)):t.address?(this.stopGen(),this.displayResult(t)):void this.$refs.statistics.emitEvent(t.attempts)},startGen:function(){if(window.Worker){this.clearResult(),this.running=!0;for(var t=0;t<this.workers.length;t++)this.workers[t].postMessage(this.input);this.status="Running",this.firstTick=performance.now()}else this.error="workers_unsupported"},stopGen:function(){this.running=!1,this.status="Stopped";for(var t=0;t<this.workers.length;t++)this.workers[t].terminate();this.workers=[],this.initWorkers()},benchmark:function(t){t=t||1e4;var e=500,s=new a,r=0,i=[],n=[],o=function(t,e){return Math.round(1e3*t/e)};s.onmessage=function(){i.push(performance.now()),1!==i.length&&(n.push(i[i.length-1]-i[i.length-2]),r+=e,console.info(r+"/"+t+"..."+o(e,n[n.length-1])+" addr/s"),r>=t&&(console.info("\nSpeed range: "+o(e,Math.max.apply(Math,n))+" - "+o(e,Math.min.apply(Math,n))+" addr/s"),console.info("Average: "+o(r,i[i.length-1]-i[0])+" addr/s"),s.terminate()))};var u={checksum:!0,hex:"f".repeat(5),suffix:!1};console.info("Starting benchmark with 1 core..."),s.postMessage(u)}}},j=W,T=(s("9190"),Object(f["a"])(j,r,i,!1,null,null,null));e["default"]=T.exports},9190:function(t,e,s){"use strict";s("e461")},e461:function(t,e,s){}}]);