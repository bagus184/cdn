(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57a37038"],{a4f4:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("approveTemplate",{attrs:{coin:"heco",rpc_node:"https://http-mainnet-node.huobichain.com/"}})},a=[],u=n("e8e5"),i={name:"HecoApprove",components:{approveTemplate:u["a"]},methods:{}},c=i,o=n("2877"),l=Object(o["a"])(c,r,a,!1,null,null,null);e["default"]=l.exports},b893:function(t,e,n){"use strict";n("a9e3"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("1276"),n("498a");var r=n("d4ec"),a=n("bee2"),u=n("ade3"),i=function(){function t(){Object(r["a"])(this,t),Object(u["a"])(this,"chars",["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"])}return Object(a["a"])(t,[{key:"guid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)}))}},{key:"generateMixed",value:function(t){for(var e="",n=0;n<t;n++){var r=Math.ceil(61*Math.random());e+=this.chars[r]}return Math.random().toString(36).substr(0)+e+Math.random().toString(36).substr(0)+(new Date).getTime()+Math.random().toString(36).substr(0)}},{key:"numAdd",value:function(t,e){var n,r,a;try{n=t.toString().split(".")[1].length}catch(u){n=0}try{r=e.toString().split(".")[1].length}catch(u){r=0}return a=Math.pow(10,Math.max(n,r)),(this.numMul(t,a)+this.numMul(e,a))/a}},{key:"numSub",value:function(t,e){var n,r,a;try{n=t.toString().split(".")[1].length}catch(u){n=0}try{r=e.toString().split(".")[1].length}catch(u){r=0}return a=Math.pow(10,Math.max(n,r)),(this.numMul(t,a)-this.numMul(e,a))/a}},{key:"numMul",value:function(t,e){var n=0,r=t.toString(),a=e.toString();try{n+=r.split(".")[1].length}catch(u){}try{n+=a.split(".")[1].length}catch(u){}return Number(r.replace(".",""))*Number(a.replace(".",""))/Math.pow(10,n)}},{key:"cleanAsciiText",value:function(t){if(t)return t.replace(/[\x00-\x09\x0b-\x1F]/g,"").trim()}},{key:"numDiv",value:function(t,e){var n,r,a=0,u=0;try{a=t.toString().split(".")[1].length}catch(i){}try{u=e.toString().split(".")[1].length}catch(i){}return n=Number(t.toString().replace(".","")),r=Number(e.toString().replace(".","")),this.numMul(n/r,Math.pow(10,u-a))}}]),t}(),c=new i;e["a"]=c}}]);