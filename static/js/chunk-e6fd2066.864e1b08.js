(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e6fd2066"],{"0809":function(t,e,n){"use strict";n("e18a")},ca46:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"rpcServer"}},[n("AddLineDialog",{ref:"AddLineDialog",attrs:{list:t.list},on:{onAddRPC:t.onAddRPC}}),n("div",{staticClass:"header"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"faucets"}}),n("span",[t._v("CoinTool - Faucets List")])],1),n("div",{staticClass:"content"},[n("ul",{staticClass:"box"},t._l(t.list,(function(e,a){return n("li",{key:a},[n("div",{staticClass:"left"},[n("div",{staticClass:"nameBox"},[n("svg-icon",{staticClass:"icon",style:{color:e.color?e.color:""},attrs:{"icon-class":e.icon}}),n("span",{staticClass:"name"},[t._v(t._s(e.name))])],1),n("div",{staticClass:"urlText"},[t._v(" "+t._s(e.url)+" "),n("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.url,expression:"item.url",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"copy_icon",attrs:{type:"text"}},[n("svg-icon",{attrs:{"icon-class":"copy"}})],1)],1)]),n("div",{staticClass:"right"},[n("el-button",{attrs:{type:"primary",size:t.isPc?"large":"mini",plain:""},on:{click:function(n){return t.onOpenUrl(e.url)}}},[n("svg-icon",{attrs:{"icon-class":"skip"}}),t._v(" "+t._s("Open")+" ")],1)],1)])})),0)])],1)},o=[],s=n("efe2"),c=n("52c1"),i={zh:{rpcServer:{addLineTitle:"添加自定义RPC节点",duplicateRPC:"重复的节点"}},en:{rpcServer:{addLineTitle:"Add a custom RPC node",duplicateRPC:"Duplicate RPC nodes"}}},r=n("ed08"),l="faucets",u={name:l,inject:["onCopySuccess"],components:{},data:function(){return{list:[{icon:"coin-go",name:"Görli",url:"https://faucet.goerli.mudit.blog"},{icon:"coin-debug1",name:"Rinkeby",url:"https://faucet.goerli.mudit.blog"},{icon:"coin-debug1",name:"Ropsten",url:"https://faucet.metamask.io"},{icon:"bug",name:"Kovan",url:"https://gitter.im/kovan-testnet/faucet"},{icon:"coin-bnb",color:"rgba(240, 185, 11, 1)",name:"BSC Testnet",url:"https://testnet.binance.org/faucet-smart"},{icon:"coin-xdai",name:"Gnosis Chain (xDai)",url:"https://stakely.io/faucet/xdai-chain"},{icon:"coin-ftm",color:"rgba(24, 144, 255, 1)",name:"Fantom Testnet",url:"https://faucet.fantom.network"},{icon:"coin-heco",color:"rgba(107, 177, 241, 1)",name:"HECO Testnet",url:"https://scan-testnet.hecochain.com/faucet"},{icon:"avax",name:"Avalanche Testnet",url:"https://faucet.avax-test.network"},{icon:"matic",name:"Polygon Testnet",url:"https://faucet.polygon.technology"},{icon:"harmony",name:"Harmony Testnet",url:"https://faucet.pops.one"},{icon:"coin-xdai",name:"Gnosis Chain (xDai)",url:"https://www.gimlu.com/faucet"},{icon:"aurora",color:"rgba(34,225,9, 1)",name:"Aurora Testnet",url:"https://aurora.dev/faucet"},{icon:"celo",name:"Celo",url:"https://celo.org/developers/faucet"},{icon:"movr",name:"Moonbase",url:"https://discord.com/invite/PfpUATX"},{icon:"coin-sol",color:"rgba(107, 177, 241, 1)",name:"Solana Testnet",url:"https://spl-token-faucet.com/"}]}},computed:Object(s["a"])({},Object(c["b"])(["isConnect","account","isPc","language"])),created:function(){this.$i18n.getLocaleMessage("en")[l]||(this.$i18n.mergeLocaleMessage("en",i.en),this.$i18n.mergeLocaleMessage("zh",i.zh)),this.chainName=this.$route.meta.chainName,this.chainList=Object(r["i"])(l),this.initQueue(),this.getList()},mounted:function(){},methods:{onOpenUrl:function(t){window.open(t,"_blank")}}},p=u,m=(n("0809"),n("5d22")),d=Object(m["a"])(p,a,o,!1,null,"68579cb0",null);e["default"]=d.exports},e18a:function(t,e,n){}}]);