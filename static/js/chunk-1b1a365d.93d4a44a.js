(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b1a365d"],{"1f50":function(e,t,r){"use strict";(function(e){var n=r("4833"),s=(r("96e6"),r("7479"),r("4a32"),r("37de"),r("1e34"),r("6a61"),r("20bb")),a=r("85d4"),i=r("8feb"),o=r.n(i),c=r("be70"),u=r.n(c),d=r("4672"),l=r.n(d),p=r("7921"),m=r.n(p),h="defi";t["a"]={name:"Defi",data:function(){return{searchInput:"",res:"",Balance:"",rpc:"https://http-mainnet-node.huobichain.com",id:128,formAddress:"",toAddress:"",sendamount:"",amount:1,gwei:100,time:"",stime:1e3,icon:""}},created:function(){this.$i18n.getLocaleMessage("en")[h]||(this.$i18n.mergeLocaleMessage("en",s["a"].en),this.$i18n.mergeLocaleMessage("zh",s["a"].zh))},mounted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.icon="coin-heco";case 1:case"end":return t.stop()}}),t)})))()},methods:{onSearch:function(){if(""===this.rpc)return this.$message.error("Rpc cannot be empty"),!1;if(""===this.stime)return this.$message.error("Monitoring frequency cannot be empty"),!1;if(""===this.id)return this.$message.error("Chain Id cannot be empty"),!1;if(""===this.gwei)return this.$message.error("Gwei cannot be empty"),!1;if(""===this.amount)return this.$message.error("The trigger value cannot be empty"),!1;if(""===this.toAddress)return this.$message.error("Receiving address cannot be empty"),!1;if(""===this.searchInput)return this.$message.error("The private key cannot be empty"),!1;if(!l.a.isValidAddress(this.toAddress))return this.$message.error("Receiving address error"),!1;this.toAddress=this.toAddress.trim(),this.searchInput=this.searchInput.trim();try{this.formAddress=l.a.bufferToHex(l.a.privateToAddress(this.searchInput.trim()))}catch(e){return this.$message.error("Private key error"),!1}return!0},run:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.onSearch()){t.next=3;break}return e.$notify.error({title:"Error",message:"Please check the parameters"}),t.abrupt("return",!1);case 3:return t.prev=3,t.next=6,e.checkBalance();case 6:n=t.sent,null!==(r=n[0])&&void 0!==r&&r.result&&(e.Balance=o.a.fromWei(n[0].result,"ether"),s=new Date,e.time=s.toLocaleString(),e.Balance>=e.amount&&e.send(e.toAddress,n[0].result,parseInt(n[1].result),e.searchInput.trim())),t.next=12;break;case 10:t.prev=10,t.t0=t["catch"](3);case 12:setTimeout(e.run,e.stime);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})))()},checkBalance:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r='[{"id":1,"jsonrpc":"2.0","method":"eth_getBalance","params":["'+e.formAddress+'","latest"]},{"id":2,"jsonrpc":"2.0","method":"eth_getTransactionCount","params":["'+e.formAddress+'","latest"]}]',t.next=3,e.$ajax({url:e.rpc,method:"post",data:r});case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))()},send:function(t,r,s,i){var c=this;return Object(n["a"])(regeneratorRuntime.mark((function n(){var d,l,p,h,v,g,f,w;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return d=o.a.toWei(new m.a(c.gwei).times(21e3).toString(10),"gwei"),l="0x"+new m.a(r).minus(d).toString(16),c.sendamount=o.a.fromWei(l,"ether"),p={to:t,value:l,data:"0x",gasPrice:"0x"+(1e9*c.gwei).toString(16),gasLimit:"0x5208",nonce:Object(a["toHex"])(s),chainId:c.id},h=new u.a(p),v=e.from(i.replace("0x",""),"hex"),h.sign(v),g="0x"+h.serialize().toString("hex"),f={method:"eth_sendRawTransaction",params:[g],id:1,jsonrpc:"2.0"},n.next=11,c.$ajax({url:c.rpc,method:"post",data:f});case 11:w=n.sent,c.res=w.result,setTimeout(c.run,1e4);case 14:case"end":return n.stop()}}),n)})))()}}}}).call(this,r("fd40").Buffer)},"20bb":function(e,t,r){"use strict";t["a"]={zh:{uniswap:{title:"Uniswap最新交易对"}},en:{uniswap:{title:"Uniswap latest trading pairs"}}}},6997:function(e,t,r){},b792:function(e,t,r){"use strict";r("6997")},f744:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"containerCenter"},[r("div",{staticClass:"header"},[r("svg-icon",{staticClass:"uniswapIcon",attrs:{"icon-class":e.icon}}),r("div",{staticClass:"inputBox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.rpc,expression:"rpc"}],staticClass:"input",attrs:{placeholder:"RPC"},domProps:{value:e.rpc},on:{input:function(t){t.target.composing||(e.rpc=t.target.value)}}})]),r("div",{staticClass:"inputBox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"id"}],staticClass:"input",attrs:{placeholder:"chain Id"},domProps:{value:e.id},on:{input:function(t){t.target.composing||(e.id=t.target.value)}}})]),r("div",{staticClass:"inputBox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.gwei,expression:"gwei"}],staticClass:"input",attrs:{placeholder:"Gwei"},domProps:{value:e.gwei},on:{input:function(t){t.target.composing||(e.gwei=t.target.value)}}})]),r("div",{staticClass:"inputBox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.stime,expression:"stime"}],staticClass:"input",attrs:{placeholder:"Monitoring Frequency:Milliseconds"},domProps:{value:e.stime},on:{input:function(t){t.target.composing||(e.stime=t.target.value)}}})]),r("div",{staticClass:"inputBox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],staticClass:"input",attrs:{placeholder:"Triggered when the balance is greater than this value"},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=t.target.value)}}})]),r("div",{staticClass:"inputBox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchInput,expression:"searchInput"}],staticClass:"input",attrs:{placeholder:"Private key"},domProps:{value:e.searchInput},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSearch(t)},input:function(t){t.target.composing||(e.searchInput=t.target.value)}}})]),r("div",{staticClass:"inputBox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.toAddress,expression:"toAddress"}],staticClass:"input",attrs:{placeholder:"Receiving Address"},domProps:{value:e.toAddress},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSearch(t)},input:function(t){t.target.composing||(e.toAddress=t.target.value)}}})]),r("div",{staticClass:"inputBox"},[r("el-divider"),r("el-button",{attrs:{type:"primary"},on:{click:e.run}},[e._v("Run")])],1)],1),r("el-alert",{directives:[{name:"show",rawName:"v-show",value:e.formAddress.length>0,expression:"formAddress.length>0"}],attrs:{title:"Monitor Address "+e.formAddress+" Balance "+e.Balance+" Time:"+e.time,type:"success",effect:"dark"}}),r("el-alert",{directives:[{name:"show",rawName:"v-show",value:e.res.length>0,expression:"res.length>0"}],attrs:{title:"Send successfully "+e.sendamount+" Txhash "+e.res,type:"success",effect:"dark"}})],1)])},s=[],a=r("1f50"),i=a["a"],o=(r("b792"),r("5d22")),c=Object(o["a"])(i,n,s,!1,null,"53eda427",null);t["default"]=c.exports}}]);