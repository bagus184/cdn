(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07101a70"],{"2c23":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return h}));var r=n("e7e7"),a=n("4833"),o=n("1222"),i=n("a3b6"),s=(n("7479"),n("7fe9"),n("9bdd"),n("a9b5"),n("8b79"),n("4a32"),n("f597"),n("6a61"),n("ebbc")),c=n("5274"),u=n("2e9e"),l=n("beba"),d=n("ab9c"),p=new c["d"]("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),f="Failed to find account",m="Invalid account owner",h=function(){function t(e,n,r){Object(o["a"])(this,t),Object.assign(this,{connection:r,publicKey:n,programId:e})}return Object(i["a"])(t,[{key:"createMint",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,r,a,o){var i,u,l,f,m,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=new c["f"],u=new c["c"],e.next=4,s["d"].getMinBalanceRentForExemptMint(this.connection);case 4:return l=e.sent,i.add(c["e"].createAccount({fromPubkey:t,newAccountPubkey:u.publicKey,lamports:l,space:s["b"].span,programId:a})),i.add(s["d"].createInitMintInstruction(a,u.publicKey,r,t,n)),e.next=9,s["d"].getMinBalanceRentForExemptAccount(this.connection);case 9:return f=e.sent,m=new c["c"],i.add(c["e"].createAccount({fromPubkey:t,newAccountPubkey:m.publicKey,lamports:f,space:s["a"].span,programId:a})),e.next=14,Object(d["d"])(t,u.publicKey);case 14:return h=e.sent,i.add(s["d"].createAssociatedTokenAccountInstruction(p,s["c"],u.publicKey,h,t,t)),e.abrupt("return",{transaction:i,mintAccount:u,tokenAccount:m});case 17:case"end":return e.stop()}}),e,this)})));function t(t,n,r,a,o){return e.apply(this,arguments)}return t}()},{key:"createNFT",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,o,i,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new c["f"],o=new c["c"],e.next=4,s["d"].getMinBalanceRentForExemptMint(this.connection);case 4:return i=e.sent,a.add(c["e"].createAccount({fromPubkey:t,newAccountPubkey:o.publicKey,lamports:i,space:s["b"].span,programId:r})),a.add(s["d"].createInitMintInstruction(r,o.publicKey,0,t,n)),e.next=9,s["d"].getMinBalanceRentForExemptAccount(this.connection);case 9:return u=e.sent,l=new c["c"],a.add(c["e"].createAccount({fromPubkey:t,newAccountPubkey:l.publicKey,lamports:u,space:s["a"].span,programId:r})),a.add(s["d"].createInitAccountInstruction(r,o.publicKey,l.publicKey,t)),a.add(s["d"].createMintToInstruction(this.programId,o.publicKey,l.publicKey,t,[],1)),a.add(s["d"].createSetAuthorityInstruction(this.programId,o.publicKey,null,"MintTokens",t,[])),e.abrupt("return",{transaction:a,mintAccount:o,tokenAccount:l});case 16:case"end":return e.stop()}}),e,this)})));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:"transfer",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=this.isAccount(n)?n.publicKey:n,e.abrupt("return",Promise.all(r.map((function(e){var n=e.destination,r=e.amount;return s["d"].createTransferInstruction(o.programId,t,n,a,[],r)}))));case 2:case"end":return e.stop()}}),e,this)})));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:"transferOne",value:function(e,t,n){var r;return r=this.isAccount(t)?t.publicKey:t,s["d"].createTransferInstruction(this.programId,e,n.destination,r,[],n.amount)}},{key:"mintTo",value:function(e,t,n,r){var a;return a=this.isAccount(t)?t.publicKey:t,(new c["f"]).add(s["d"].createMintToInstruction(this.programId,this.publicKey,e,a,n,r))}},{key:"burn",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,r,a){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=this.isAccount(n)?n.publicKey:n,e.abrupt("return",(new c["f"]).add(s["d"].createBurnInstruction(this.programId,this.publicKey,t,o,r,a)));case 2:case"end":return e.stop()}}),e,this)})));function t(t,n,r,a){return e.apply(this,arguments)}return t}()},{key:"setAuthority",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,r,a,o,i){var u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=this.isAccount(a)?a.publicKey:a,e.abrupt("return",(new c["f"]).add(s["d"].createSetAuthorityInstruction(this.programId,t,n,r,u,o)));case 2:case"end":return e.stop()}}),e,this)})));function t(t,n,r,a,o,i){return e.apply(this,arguments)}return t}()},{key:"freezeAccount",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,r,a){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=this.isAccount(n)?n.publicKey:n,e.abrupt("return",(new c["f"]).add(s["d"].createFreezeAccountInstruction(this.programId,t,this.publicKey,o,r)));case 2:case"end":return e.stop()}}),e,this)})));function t(t,n,r,a){return e.apply(this,arguments)}return t}()},{key:"thawAccount",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,r,a){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=this.isAccount(n)?n.publicKey:n,e.abrupt("return",(new c["f"]).add(s["d"].createThawAccountInstruction(this.programId,t,this.publicKey,o,r)));case 2:case"end":return e.stop()}}),e,this)})));function t(t,n,r,a){return e.apply(this,arguments)}return t}()},{key:"isAccount",value:function(e){return"publicKey"in e}},{key:"getMintInfo",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.connection.getAccountInfo(this.publicKey);case 2:if(n=t.sent,null!==n){t.next=5;break}throw new Error("Failed to find mint account");case 5:if(n.owner.equals(this.programId)){t.next=7;break}throw new Error("Invalid mint owner: ".concat(JSON.stringify(n.owner)));case 7:if(n.data.length===s["b"].span){t.next=9;break}throw new Error("Invalid mint size");case 9:return r=e.from(n.data),a=s["b"].decode(r),0===a.mintAuthorityOption?a.mintAuthority=null:a.mintAuthority=new c["d"](a.mintAuthority),a.supply=s["e"].fromBuffer(a.supply),a.isInitialized=0!==a.isInitialized,0===a.freezeAuthorityOption?a.freezeAuthority=null:a.freezeAuthority=new c["d"](a.freezeAuthority),t.abrupt("return",a);case 16:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()},{key:"getAccountInfo",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n,r){var a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.connection.getAccountInfo(n,r);case 2:if(a=t.sent,null!==a){t.next=5;break}throw new Error(f);case 5:if(a.owner.equals(this.programId)){t.next=7;break}throw new Error(m);case 7:if(a.data.length===s["a"].span){t.next=9;break}throw new Error("Invalid account size");case 9:return o=e.from(a.data),i=s["a"].decode(o),i.address=n,i.mint=new c["d"](i.mint),i.owner=new c["d"](i.owner),i.amount=s["e"].fromBuffer(i.amount),0===i.delegateOption?(i.delegate=null,i.delegatedAmount=new s["e"](0)):(i.delegate=new c["d"](i.delegate),i.delegatedAmount=s["e"].fromBuffer(i.delegatedAmount)),i.isInitialized=0!==i.state,i.isFrozen=2===i.state,1===i.isNativeOption?(i.rentExemptReserve=s["e"].fromBuffer(i.isNative),i.isNative=!0):(i.rentExemptReserve=null,i.isNative=!1),0===i.closeAuthorityOption?i.closeAuthority=null:i.closeAuthority=new c["d"](i.closeAuthority),t.abrupt("return",i);case 21:case"end":return t.stop()}}),t,this)})));function n(e,n){return t.apply(this,arguments)}return n}()},{key:"signAndSendTransaction",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,a,o){var i,s,c,u,l=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=l.length>4&&void 0!==l[4]&&l[4],e.next=3,t.getRecentBlockhash("max");case 3:return n.recentBlockhash=e.sent.blockhash,(i=n).setSigners.apply(i,[a.publicKey].concat(Object(r["a"])(o.map((function(e){return e.publicKey}))))),o.length>0&&(c=n).partialSign.apply(c,Object(r["a"])(o)),e.next=8,a.signTransaction(n);case 8:return n=e.sent,u=n.serialize(),e.next=12,t.sendRawTransaction(u,{skipPreflight:s,preflightCommitment:"single"});case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})));function t(t,n,r,a){return e.apply(this,arguments)}return t}()}],[{key:"createTransferCheckedInstruction",value:function(t,n,r,a,o,i,d,p){var f=u["struct"]([u["u8"]("instruction"),l["a"]("amount"),u["u8"]("decimals")]),m=e.alloc(f.span);f.encode({instruction:12,amount:new s["e"](d.toString()).toBuffer(),decimals:p},m);var h=[{pubkey:n,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!0}];return 0===i.length?h.push({pubkey:o,isSigner:!0,isWritable:!1}):(h.push({pubkey:o,isSigner:!1,isWritable:!1}),i.forEach((function(e){return h.push({pubkey:e.publicKey,isSigner:!0,isWritable:!1})}))),new c["g"]({keys:h,programId:t,data:m})}}]),t}()}).call(this,n("fd40").Buffer)},4779:function(e,t,n){"use strict";n("7502")},"4e2c":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{directives:[{name:"show",rawName:"v-show",value:e.list.length>0,expression:"list.length > 0"}],staticClass:"dealList"},e._l(e.list,(function(t,r){return n("li",{key:t.address},[n("div",{staticClass:"left"},[n("span",{staticClass:"index"},[e._v(e._s(r+1))]),n("a",{staticClass:"address",attrs:{target:"_blank",href:e.blockTxurl+"/tx/"+t.address}},[e._v(e._s(t.address))])]),n("div",{staticClass:"right"},[n("span",{staticClass:"status"},[0===t.status?n("i",{staticClass:"el-icon-loading"}):1===t.status?n("i",{staticClass:"el-icon-success"}):2===t.status?n("i",{staticClass:"el-icon-error",staticStyle:{color:"#F05252"}}):e._e()])])])})),0)},a=[],o={props:{list:{type:Array,required:!0},blockTxurl:{type:String,required:!0}},data:function(){return{}},created:function(){},mounted:function(){},methods:{}},i=o,s=(n("4779"),n("5d22")),c=Object(s["a"])(i,r,a,!1,null,"cfd1f11a",null);t["a"]=c.exports},5475:function(e,t,n){},"56f9":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("CreateSuccessDialog",{ref:"CreateSuccessDialog"}),e.isZh?n("div",{staticClass:"tips_err"},[n("p",[e._v("CoinTool不提供任何技术支持！")]),n("p",[e._v("已关闭创建代币功能，请勿用于违法活动!")])]):n("Card",{attrs:{icon:"coin-trx",title:e.$t("route.solCreateToken"),desc:e.$t("solCreateToken.pageDesc")}},[n("div",{staticClass:"flexCenter"},[n("el-form",{ref:"form",staticClass:"form",attrs:{"label-position":e.isPc?"left":"top",rules:e.rules,model:e.form,"label-width":"160px"}},[n("el-form-item",{attrs:{label:e.$t("solCreateToken.tokenName"),prop:"tokenName"}},[n("el-input",{model:{value:e.form.tokenName,callback:function(t){e.$set(e.form,"tokenName",t)},expression:"form.tokenName"}})],1),n("el-form-item",{attrs:{label:e.$t("solCreateToken.symbol"),prop:"symbol"}},[n("el-input",{model:{value:e.form.symbol,callback:function(t){e.$set(e.form,"symbol",t)},expression:"form.symbol"}})],1),n("el-form-item",{attrs:{label:e.$t("solCreateToken.decimals"),prop:"decimals"}},[n("el-input-number",{staticClass:"inputNum",attrs:{min:0,max:9},model:{value:e.form.decimals,callback:function(t){e.$set(e.form,"decimals",t)},expression:"form.decimals"}})],1),n("el-form-item",{attrs:{label:e.$t("solCreateToken.mintAuthority"),prop:"mintAuthority"}},[n("el-input",{model:{value:e.form.mintAuthority,callback:function(t){e.$set(e.form,"mintAuthority",t)},expression:"form.mintAuthority"}})],1),n("el-form-item",{attrs:{label:e.$t("solCreateToken.freezeAuthority"),prop:"freezeAuthority"}},[n("el-input",{model:{value:e.form.freezeAuthority,callback:function(t){e.$set(e.form,"freezeAuthority",t)},expression:"form.freezeAuthority"}})],1),n("el-form-item",{staticClass:"btnBox"},[n("el-button",{staticClass:"item-btn",attrs:{loading:e.loading,size:"medium",type:"primary"},on:{click:e.onCreatToken}},[e._v(" "+e._s(e.$t("solCreateToken.createBtn"))+" ")])],1)],1),n("el-card",{directives:[{name:"show",rawName:"v-show",value:e.txList.length>0,expression:"txList.length > 0"}],staticClass:"box-card",staticStyle:{"margin-top":"40px"}},[n("DealList",{attrs:{list:e.txList,"block-txurl":e.blockTxurl}}),n("el-alert",{directives:[{name:"show",rawName:"v-show",value:e.tx_status,expression:"tx_status"}],staticClass:"tips",attrs:{title:e.$t("solCreateToken.success"),type:"success",closable:!1}})],1)],1)])],1)},a=[],o=n("4833"),i=n("efe2"),s=(n("65f0"),n("6a61"),n("2c23")),c=n("5874"),u=n("ebbc"),l=n("5274"),d=n("ab9c"),p=n("52c1"),f={zh:{solCreateToken:{tokenName:"代币名称:",tokenNameValidate:"请输入代币名称",symbol:"缩写符号:",symbolValidate:"请输入缩写符号",initialSupply:"发行数量:",initialSupplyValidate:"请输入发行数量",decimals:"小数位数(0-9):",decimalsValidate:"请输入小数位数",config:"其他配置:",createBtn:"立即创建",success:"代币创建成功，请前往区块浏览器或钱包查看！",pageDesc:"简单、快速、便捷",adminAddress:"管理员地址",mintAuthority:"增发权限地址",freezeAuthority:"冻结权限地址",alert_text:"抱歉，TRC20 Token自动创建功能暂未开通，请前往首页联系我们，由我们代为您发布TRC20 Token"}},en:{solCreateToken:{tokenName:"Token Name:",tokenNameValidate:"Please enter token name",symbol:"Symbol:",symbolValidate:"Please enter symbol",initialSupply:"Initial Supply:",initialSupplyValidate:"Please enter initial supply",decimals:"Decimals(0-9):",decimalsValidate:"Please enter decimals",adminAddress:"Admin Address",mintAuthority:"Mint authority",freezeAuthority:"Freeze authority",config:"Other Config:",createBtn:"Create Token",success:"Token created successfully, please go to the block browser or wallet to check!",pageDesc:"Simple, Fast, Convenient",alert_text:"Sorry, the automatic creation function of trc20 has not been activated yet. Please contact us on the home page and we will release the trc20 token for you"}}},m=n("4e2c"),h=n("12f9"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{staticClass:"dialog",attrs:{width:e.isPc?"550px":"90%",height:"800px",visible:e.isShowDialog,modal:!0,"modal-append-to-body":!1,"close-on-click-modal":!1,title:e.$t("solCreateToken.success")},on:{"update:visible":function(t){e.isShowDialog=t}}},[n("div",{staticClass:"tokenCreatesuccessDialog"},[n("el-alert",{staticClass:"smaillBox",attrs:{title:"Token Address",type:"success",closable:!1,"show-icon":""}},[n("el-link",{staticClass:"link",attrs:{type:"success",target:"_blank",href:e.blockTxurl+"/address/"+e.createTokenAddress}},[e._v(e._s(e.createTokenAddress)+" ")]),n("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.createTokenAddress,expression:"createTokenAddress",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"copy",attrs:{type:"text"}},[n("svg-icon",{attrs:{"icon-class":"copy"}})],1)],1),n("el-alert",{staticClass:"smaillBox",attrs:{title:"TX",type:"success",closable:!1,"show-icon":""}},[n("el-link",{staticClass:"link",attrs:{type:"success",target:"_blank",href:e.blockTxurl+"/tx/"+e.tx}},[e._v(e._s(e._f("maxStrLen")(e.blockTxurl+"/tx/"+e.tx,35))+" ")]),n("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.blockTxurl+"/tx/"+e.tx,expression:"`${blockTxurl}/tx/${tx}`",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"copy",attrs:{type:"text"}},[n("svg-icon",{attrs:{"icon-class":"copy"}})],1)],1),n("div",{staticClass:"btnBox"},[n("el-button",{attrs:{type:"primary",icon:"el-icon-setting"},on:{click:function(t){return e.onToManagePane(0)}}},[e._v(" To Manage pane ")])],1)],1)])},g=[],w={components:{},inject:["onCopySuccess"],props:{},data:function(){return{createTokenAddress:"",tx:"",blockTxurl:"",loading:!0,isShowDialog:!1}},computed:Object(i["a"])({},Object(p["b"])(["isPc","solNetwork"])),watch:{},created:function(){},mounted:function(){},methods:{show:function(e,t){this.isShowDialog=!this.isShowDialog,this.blockTxurl=Object(d["j"])(this.solNetwork),this.createTokenAddress=e,this.tx=t},onToManagePane:function(){this.$router.push({name:"tokenAdmin",query:{address:this.createTokenAddress,chainName:"sol"}})}}},y=w,k=(n("c312"),n("5d22")),v=Object(k["a"])(y,b,g,!1,null,"0043218a",null),x=v.exports,A="solCreateToken",T="createToken",C={name:T,inject:["solwalletStateTest"],components:{CreateSuccessDialog:x,Card:h["a"],DealList:m["a"]},data:function(){return{txList:[],blockTxurl:"",c_address:"",tx_status:!1,loading:!1,rules:{},form:{tokenName:"kkkkkkk122",symbol:"kkk",initialSupply:21e6,adminAddress:"",mintAuthority:"",freezeAuthority:"",decimals:9}}},computed:Object(i["a"])({},Object(p["b"])(["isConnect","solNetwork","account","solAccount","navigatorLanguage","language","isZh","isPc"])),created:function(){this.$i18n.getLocaleMessage("en")[A]||(this.$i18n.mergeLocaleMessage("en",f.en),this.$i18n.mergeLocaleMessage("zh",f.zh)),this.rules={tokenName:[{required:!0,message:this.$t("solCreateToken.tokenNameValidate"),trigger:"blur"}],symbol:[{required:!0,message:this.$t("solCreateToken.symbolValidate"),trigger:"blur"}],initialSupply:[{required:!1,message:this.$t("solCreateToken.initialSupplyValidate"),trigger:"blur"}],decimals:[{required:!0,message:this.$t("solCreateToken.decimalsValidate"),trigger:"blur"}],mintAuthority:[{required:!0,message:this.$t("common.not_empty"),trigger:"blur"}],freezeAuthority:[{required:!0,message:this.$t("common.not_empty"),trigger:"blur"}]}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return setTimeout((function(){window.solana&&""===e.solAccount?(console.log("1111"),window.solana.on("connect",(function(){return e.init()}))):(console.log("22222"),e.init())}),1500),t.next=3,e.solwalletStateTest();case 3:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:case"end":return t.stop()}}),t)})))()},methods:{init:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=d["b"][e.solNetwork],window.solConnection=new l["b"](i,"confirmed"),e.form.mintAuthority=null===(n=window.solana)||void 0===n||null===(r=n.publicKey)||void 0===r?void 0:r.toBase58(),e.form.freezeAuthority=null===(a=window.solana)||void 0===a||null===(o=a.publicKey)||void 0===o?void 0:o.toBase58();case 4:case"end":return t.stop()}}),t)})))()},recordTokenInfo:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={Mainnet:c["a"].MainnetBeta,Testnet:c["a"].Testnet,Devnet:c["a"].Devnet},n.next=3,t.$ajax({url:"https://debonair-tricky-umbrella.glitch.me/setTokenInfo",method:"get",data:{address:e,chainId:r[t.solNetwork],name:t.form.tokenName,symbol:t.form.symbol}});case 3:a=n.sent,200===a.code&&console.log("记录成功");case 5:case"end":return n.stop()}}),n)})))()},onCreatToken:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o,i,c,p,f,m,h,b,g;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o=null===(n=window.solana)||void 0===n?void 0:n.publicKey,o){t.next=4;break}return e.$message.error("Please connect your wallet."),t.abrupt("return");case 4:return console.log(null===(r=window.solana)||void 0===r||null===(a=r.publicKey)||void 0===a?void 0:a.toBase58()),e.loading=!0,t.next=8,Object(d["l"])(1);case 8:if(i=t.sent,i){t.next=13;break}return e.$message.error("Insufficient wallet balance"),e.loading=!1,t.abrupt("return");case 13:return c=new s["a"](u["c"],o,window.solConnection),t.next=16,c.createMint(o,new l["d"](e.form.freezeAuthority),Number(e.form.decimals),u["c"],window.solana);case 16:return p=t.sent,f=p.transaction,m=p.mintAccount,h=p.tokenAccount,b=m.publicKey.toBase58(),t.prev=21,t.next=24,Object(d["k"])("CREATE",f,[m,h]);case 24:if(g=t.sent,!g){t.next=30;break}return console.log(g,"txID"),t.next=29,e.recordTokenInfo(b);case 29:e.$refs.CreateSuccessDialog.show(b,g);case 30:t.next=35;break;case 32:t.prev=32,t.t0=t["catch"](21),console.log("error",t.t0);case 35:return t.prev=35,e.loading=!1,t.finish(35);case 38:case"end":return t.stop()}}),t,null,[[21,32,35,38]])})))()}}},I=C,S=(n("e8f6"),Object(k["a"])(I,r,a,!1,null,"049e7e19",null));t["default"]=S.exports},7502:function(e,t,n){},9:function(e,t){},ab9c:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return m})),n.d(t,"h",(function(){return h})),n.d(t,"d",(function(){return b})),n.d(t,"g",(function(){return k})),n.d(t,"a",(function(){return v})),n.d(t,"c",(function(){return x})),n.d(t,"i",(function(){return A})),n.d(t,"e",(function(){return T})),n.d(t,"l",(function(){return I})),n.d(t,"k",(function(){return S})),n.d(t,"m",(function(){return O})),n.d(t,"f",(function(){return j})),n.d(t,"j",(function(){return M}));var r=n("e7e7"),a=n("4833"),o=(n("6a61"),n("4898"),n("7479"),n("4a32"),n("8b79"),n("37de"),n("1e34"),n("96e6"),n("8a3f"),n("98ef"),n("22f9"),n("a9b5"),n("f597"),n("403f"),n("297b"),n("fdea"),n("ebbc")),i=n("5874"),s=n("5274"),c=n("53a7"),u=n.n(c),l=n("5dec"),d=n.n(l),p=n("ab3e"),f=n("51c0"),m={Mainnet:"https://solana-api.projectserum.com",Testnet:"https://api.testnet.solana.com",Devnet:"https://api.devnet.solana.com"},h={Mainnet:101,Testnet:102,Devnet:103};function b(e,t){return g.apply(this,arguments)}function g(){return g=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["d"].findProgramAddress([t.toBuffer(),o["c"].toBuffer(),n.toBuffer()],w);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}var w=new s["d"]("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),y=function(e){if(e.length!==o["b"].span)throw new Error("Not a valid Mint");var t=o["b"].decode(e);return 0===t.mintAuthorityOption?t.mintAuthority=null:t.mintAuthority=new s["d"](t.mintAuthority),t.supply=o["e"].fromBuffer(t.supply),t.isInitialized=0!==t.isInitialized,0===t.freezeAuthorityOption?t.freezeAuthority=null:t.freezeAuthority=new s["d"](t.freezeAuthority),t},k=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n,r,a){var o,c,u,l,d,f,m,h;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.getAccountInfo(new s["d"](n));case 2:if(o=t.sent,c={},!a){t.next=25;break}return t.next=7,(new i["b"]).resolve();case 7:if(u=t.sent,console.log(u,"TokenListProvider"),l=u.filterByChainId(a.chainID).excludeByTag("nft").getList(),d=n.toBase58(),f=l.find((function(e){return e.address===d})),f){t.next=23;break}return t.prev=13,t.next=16,Object(p["a"])({url:"https://debonair-tricky-umbrella.glitch.me/getTokenInfo",method:"get",data:{address:n.toBase58(),chainId:a.chainID}});case 16:m=t.sent,200===m.code&&(f=m.data),t.next=23;break;case 20:t.prev=20,t.t0=t["catch"](13),console.log("cointool get tokenInfo error",t.t0);case 23:c=f||{name:"Unknown",symbol:"Unknown"},console.log("metadata",c);case 25:if(null===o||void 0===o?void 0:o.data){t.next=27;break}return t.abrupt("return");case 27:return h=y(e.from(o.data)),t.abrupt("return",Object.assign(Object.assign({},h),{metadata:c,tokenAddress:n}));case 29:case"end":return t.stop()}}),t,null,[[13,20]])})));return function(e,n,r){return t.apply(this,arguments)}}(),v={Mainnet:{name:"mainnet-beta",endpoint:"https://solana-api.projectserum.com",chainID:i["a"].MainnetBeta},Testnet:{name:"testnet",endpoint:Object(s["h"])("testnet"),chainID:i["a"].Testnet},Devnet:{name:"devnet",endpoint:Object(s["h"])("devnet"),chainID:i["a"].Devnet},localnet:{name:"localnet",endpoint:"http://127.0.0.1:8899",chainID:i["a"].Devnet}},x=function(e,t){var n=e.div(t).toString(),r=e.mod(t).toString();if(e.lt(t)){for(var a=t.toString().length-e.toString().length,o="",i=0;i<a-1;i++)o+="0";return"".concat(n,".").concat(o).concat(r)}return"0"===r?"".concat(n):"".concat(n,".").concat(r)},A=function(e,t){var n=null===e||void 0===e?void 0:e.toString().trim().replace(/,/gi,"");if(n.indexOf(".")===n.length-1&&(n=n.replace(".","")),!new RegExp(/^[\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$/).test(n))throw Error("Not a number");var r=C(n);if(r>t)throw Error("Decimals of your token are ".concat(t,". Please enter the amount with correct decimals"));if(0!==r){var a=n.replace(".","");return new o["e"](new o["e"](a).mul(new o["e"](Math.pow(10,t-r))).toString())}return new o["e"](new o["e"](n).mul(new o["e"](Math.pow(10,t))).toString())},T=function(e){var t=new u.a(Math.pow(2,64).toString());return new o["e"](t.sub(e).sub(new u.a(100)).toString())},C=function(e){var t=e.toString().split(".");return t[1]?t[1].length:0},I=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=.01,e.next=3,window.solConnection.getBalance(window.solana.publicKey);case 3:return r=e.sent,a=parseFloat(r/Math.pow(10,9)),e.abrupt("return",a-n>t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,a,o){var i,s,c,u,l,d,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(window.solana.publicKey){e.next=3;break}return f["Message"].error("Please connect your wallet."),e.abrupt("return");case 3:if(!t){e.next=10;break}if(i=R(t),!i){e.next=9;break}n.add(i),e.next=10;break;case 9:return e.abrupt("return");case 10:return n.setSigners.apply(n,[window.solana.publicKey].concat(Object(r["a"])(a.map((function(e){return e.publicKey}))))),e.next=13,window.solConnection.getRecentBlockhash("max");case 13:if(n.recentBlockhash=e.sent.blockhash,a.forEach((function(e){n.partialSign(e)})),s="",e.prev=16,!window.solana.signTransaction){e.next=28;break}return e.next=20,window.solana.signTransaction(n);case 20:return c=e.sent,console.log("signed",c),e.next=24,window.solConnection.sendRawTransaction(c.serialize(),{skipPreflight:!1,preflightCommitment:"singleGossip"});case 24:return s=e.sent,console.log("txidtxidtxidtxid",s),e.next=28,window.solConnection.confirmTransaction(s,"singleGossip");case 28:e.next=36;break;case 30:e.prev=30,e.t0=e["catch"](16),u="Something went wrong.",e.t0.message&&(l=e.t0.message,u=l.includes("Attempt to debit an account but found no record of a prior credit")?"Insufficient balance in your wallet..":e.t0.message),e.t0["logs"]&&(d=e.t0["logs"],p=d.filter((function(e){return e.includes("Error")})),p.length&&(u=p[0].split(":")[2]||p[0].split(":")[1]||p[0])),f["Message"].error(u);case 36:return e.abrupt("return",s);case 37:case"end":return e.stop()}}),e,null,[[16,30]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),R=function(e){console.log("transactionType",e);try{if(!window.solana.publicKey)throw new Error("Missing master wallet");return s["e"].transfer({fromPubkey:window.solana.publicKey,toPubkey:"GZMctrNbRHxA4JoDfMxiwhsPMmEGzv8EgMMZy7FzN94P",lamports:.001*Math.pow(10,9)})}catch(t){return f["Message"].error("err.message"),!1}},O=function(e){var t=new u.a("");try{if("string"===typeof e){var n=new RegExp("[a-km-zA-HJ-NP-Z1-9]{32,44}$");if(!n.test(e))return;var r=d.a.decode(e);if(32!==r.length)return;t=new u.a(r)}else t=new u.a(e);if(t.byteLength()>32)return}catch(a){return!1}return!0},j=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n,r){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.getAccountInfo(n);case 2:if(a=t.sent,null!==a){t.next=5;break}return t.abrupt("return");case 5:if(console.log(a.owner,o["c"]),a.owner.equals(o["c"])){t.next=9;break}return console.log("return1"),t.abrupt("return");case 9:if(a.data.length===o["a"].span){t.next=12;break}return console.log("return2"),t.abrupt("return");case 12:return i=o["a"].decode(e.from(a.data)),t.abrupt("return",i);case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Mainnet",t={Mainnet:"https://explorer.solana.com",Testnet:"https://explorer.solana.com",Devnet:"https://explorer.solana.com"};return t[e]||t["Mainnet"]}}).call(this,n("fd40").Buffer)},ba14:function(e,t,n){},beba:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var r=n("e7e7"),a=(n("476c"),n("a9b5"),n("d51e"),n("7479"),n("4a32"),n("5274"),n("53a7")),o=n.n(a),i=n("2e9e"),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uint64",n=i["blob"](8,t),a=n.decode.bind(n),s=n.encode.bind(n);return n.decode=function(e,t){var n=a(e,t);return new o.a(Object(r["a"])(n).reverse().map((function(e){return"00".concat(e.toString(16)).slice(-2)})).join(""),16)},n.encode=function(t,n,r){var a=t.toArray().reverse(),o=e.from(a);if(8!==o.length){var i=e.alloc(8);o.copy(i),o=i}return s(o,n,r)},n}}).call(this,n("fd40").Buffer)},c312:function(e,t,n){"use strict";n("5475")},e8f6:function(e,t,n){"use strict";n("ba14")}}]);