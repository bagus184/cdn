(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-516d8f28"],{"034b":function(t,e,i){"use strict";var r=i("b622"),n=i("b261");function o(t){var e=r("sha256").update(t).digest();return r("sha256").update(e).digest()}t.exports=n(o)},"5dec":function(t,e,i){var r=i("2c98"),n="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";t.exports=r(n)},"710a":function(t,e,i){"use strict";(function(e,r){var n="undefined"===typeof e||!e.nextTick||Boolean(e.browser),o=i("e51a"),s=i("d1a18"),a=i("11ec"),c=i("3dfc"),h=i("89eb");function f(t){return"function"===typeof t}function d(t){return c("keccak256").update(t).digest()}t.exports={version:"1.1.0",browser:n,scrypt:null,crypto:i("7b04"),constants:{cipher:"aes-128-ctr",ivBytes:16,keyBytes:32,pbkdf2:{c:262144,dklen:32,hash:"sha256",prf:"hmac-sha256"},scrypt:{memory:28e7,dklen:32,n:262144,r:8,p:1}},isHex:function(t){return!(t.length%2!==0||!t.match(/^[0-9a-f]+$/i))},isBase64:function(t){var e;return!(t.length%4>0||t.match(/[^0-9a-z+\/=]/i))&&(e=t.indexOf("="),!(-1!==e&&!t.slice(e).match(/={1,2}/)))},str2buf:function(t,e){return t&&t.constructor===String?(!e&&this.isHex(t)&&(e="hex"),!e&&this.isBase64(t)&&(e="base64"),r.from(t,e)):t},isCipherAvailable:function(t){return this.crypto.getCiphers().some((function(e){return e===t}))},encrypt:function(t,e,i,n){var o,s;if(n=n||this.constants.cipher,!this.isCipherAvailable(n))throw new Error(n+" is not available");return o=this.crypto.createCipheriv(n,this.str2buf(e),this.str2buf(i)),s=o.update(this.str2buf(t)),r.concat([s,o.final()])},decrypt:function(t,e,i,n){var o,s;if(n=n||this.constants.cipher,!this.isCipherAvailable(n))throw new Error(n+" is not available");return o=this.crypto.createDecipheriv(n,this.str2buf(e),this.str2buf(i)),s=o.update(this.str2buf(t)),r.concat([s,o.final()])},privateKeyToAddress:function(t){var e,i;return e=this.str2buf(t),e.length<32&&(e=r.concat([r.alloc(32-e.length,0),e])),i=r.from(a.publicKeyCreate(e,!1).slice(1)),"0x"+d(i).slice(-20).toString("hex")},getMAC:function(t,e){if(void 0!==t&&null!==t&&void 0!==e&&null!==e)return d(r.concat([this.str2buf(t).slice(16,32),this.str2buf(e)])).toString("hex")},deriveKeyUsingScrypt:function(t,e,i,n){var o=i.kdfparams.n||this.constants.scrypt.n,s=i.kdfparams.r||this.constants.scrypt.r,a=i.kdfparams.p||this.constants.scrypt.p,c=i.kdfparams.dklen||this.constants.scrypt.dklen;if(!f(n))return r.from(h.syncScrypt(t,e,o,s,a,c));h.scrypt(t,e,o,s,a,c).then((function(t){n(r.from(t))})).catch(n)},deriveKey:function(t,e,i,n){var s,a=this;if("undefined"===typeof t||null===t||!e)throw new Error("Must provide password and salt to derive a key");return i=i||{},i.kdfparams=i.kdfparams||{},t=this.str2buf(t,"utf8"),e=this.str2buf(e),"scrypt"===i.kdf?this.deriveKeyUsingScrypt(t,e,i,n):(s=i.kdfparams.prf||this.constants.pbkdf2.prf,"hmac-sha256"===s&&(s="sha256"),f(n)?void(this.crypto.pbkdf2?this.crypto.pbkdf2(t,e,i.kdfparams.c||this.constants.pbkdf2.c,i.kdfparams.dklen||this.constants.pbkdf2.dklen,s,(function(t,e){if(t)return n(t);n(e)})):setTimeout((function(){n(r.from(o.codec.hex.fromBits(o.misc.pbkdf2(t.toString("utf8"),o.codec.hex.toBits(e.toString("hex")),i.kdfparams.c||a.constants.pbkdf2.c,8*(i.kdfparams.dklen||a.constants.pbkdf2.dklen))),"hex"))}),0)):this.crypto.pbkdf2Sync?this.crypto.pbkdf2Sync(t,e,i.kdfparams.c||this.constants.pbkdf2.c,i.kdfparams.dklen||this.constants.pbkdf2.dklen,s):r.from(o.codec.hex.fromBits(o.misc.pbkdf2(t.toString("utf8"),o.codec.hex.toBits(e.toString("hex")),i.kdfparams.c||a.constants.pbkdf2.c,8*(i.kdfparams.dklen||a.constants.pbkdf2.dklen))),"hex"))},create:function(t,e){var i,r,n=this;function o(o){var s=o.slice(0,i);return a.privateKeyVerify(s)?{privateKey:s,iv:o.slice(i,i+r),salt:o.slice(i+r)}:n.create(t,e)}if(t=t||{},i=t.keyBytes||this.constants.keyBytes,r=t.ivBytes||this.constants.ivBytes,!f(e))return o(this.crypto.randomBytes(i+r+i));this.crypto.randomBytes(i+r+i,(function(t,i){if(t)return e(t);e(o(i))}))},marshal:function(t,e,i,r,n){var o,a,c;return n=n||{},n.kdfparams=n.kdfparams||{},c=n.cipher||this.constants.cipher,o=this.encrypt(e,t.slice(0,16),r,c).toString("hex"),a={address:this.privateKeyToAddress(e).slice(2),crypto:{cipher:n.cipher||this.constants.cipher,ciphertext:o,cipherparams:{iv:r.toString("hex")},mac:this.getMAC(t,o)},id:s.v4(),version:3},"scrypt"===n.kdf?(a.crypto.kdf="scrypt",a.crypto.kdfparams={dklen:n.kdfparams.dklen||this.constants.scrypt.dklen,n:n.kdfparams.n||this.constants.scrypt.n,r:n.kdfparams.r||this.constants.scrypt.r,p:n.kdfparams.p||this.constants.scrypt.p,salt:i.toString("hex")}):(a.crypto.kdf="pbkdf2",a.crypto.kdfparams={c:n.kdfparams.c||this.constants.pbkdf2.c,dklen:n.kdfparams.dklen||this.constants.pbkdf2.dklen,prf:n.kdfparams.prf||this.constants.pbkdf2.prf,salt:i.toString("hex")}),a},dump:function(t,e,i,r,n,o){if(n=n||{},r=this.str2buf(r),e=this.str2buf(e),!f(o))return this.marshal(this.deriveKey(t,i,n),e,i,r,n);this.deriveKey(t,i,n,function(t){o(this.marshal(t,e,i,r,n))}.bind(this))},recover:function(t,e,i){var r,n,o,s,a,c=this;function h(t,i,n,o,s){var a;if(c.getMAC(t,o)!==r.mac)throw new Error("message authentication code mismatch");return a="1"===e.version?d(t.slice(0,16)).slice(0,16):t.slice(0,16),c.decrypt(o,a,n,s)}if(r=e.Crypto||e.crypto,n=this.str2buf(r.cipherparams.iv),o=this.str2buf(r.kdfparams.salt),s=this.str2buf(r.ciphertext),a=r.cipher,"pbkdf2"===r.kdf&&"hmac-sha256"!==r.kdfparams.prf)throw new Error("PBKDF2 only supported with HMAC-SHA256");if(!f(i))return h(this.deriveKey(t,o,r),o,n,s,a);this.deriveKey(t,o,r,(function(t){try{i(h(t,o,n,s,a))}catch(e){i(e)}}))},generateKeystoreFilename:function(t){var i="UTC--"+(new Date).toISOString()+"--"+t;return"win32"===e.platform&&(i=i.split(":").join("-")),i},exportToFile:function(t,e,r){var n,o,s,a;return e=e||"keystore",n=this.generateKeystoreFilename(t.address),s=JSON.stringify(t),this.browser?f(r)?r(s):s:(o=i("6266").join(e,n),a=i("f1ac"),f(r)?void a.writeFile(o,s,(function(t){if(t)return r(t);r(o)})):(a.writeFileSync(o,s),o))},importFromFile:function(t,e,r){var n,o,s,a;if(this.browser)throw new Error("method only available in Node.js");function c(t,e,i){var r,n,o=null;for(r=0,n=i.length;r<n;++r)if(i[r].indexOf(e)>-1){o=s.join(t,i[r]),a.lstatSync(o).isDirectory()&&(o=s.join(o,i[r]));break}return o}if(s=i("6266"),a=i("f1ac"),t=t.replace("0x",""),t=t.toLowerCase(),e=e||s.join(Object({VUE_APP_BASE_API:"/prod-api",NODE_ENV:"production",BASE_URL:"https://cdn.jsdelivr.net/gh/CoinTool-App/cdn/"}).HOME,".ethereum"),n=s.join(e,"keystore"),!f(r)){if(o=c(n,t,a.readdirSync(n)),!o)throw new Error("could not find key file for address "+t);return JSON.parse(a.readFileSync(o))}a.readdir(n,(function(e,i){var o;return e?r(e):(o=c(n,t,i),r(o?JSON.parse(a.readFileSync(o)):new Error("could not find key file for address "+t)))}))}}}).call(this,i("eef6"),i("fd40").Buffer)},"8b22":function(t,e,i){(function(e){var i,r=e.crypto||e.msCrypto;if(r&&r.getRandomValues){var n=new Uint8Array(16);i=function(){return r.getRandomValues(n),n}}if(!i){var o=new Array(16);i=function(){for(var t,e=0;e<16;e++)0===(3&e)&&(t=4294967296*Math.random()),o[e]=t>>>((3&e)<<3)&255;return o}}t.exports=i}).call(this,i("2409"))},b261:function(t,e,i){"use strict";var r=i("5dec"),n=i("fa0f").Buffer;t.exports=function(t){function e(e){var i=t(e);return r.encode(n.concat([e,i],e.length+4))}function i(e){var i=e.slice(0,-4),r=e.slice(-4),n=t(i);if(!(r[0]^n[0]|r[1]^n[1]|r[2]^n[2]|r[3]^n[3]))return i}function o(t){var e=r.decodeUnsafe(t);if(e)return i(e)}function s(e){var n=r.decode(e),o=i(n,t);if(!o)throw new Error("Invalid checksum");return o}return{encode:e,decode:s,decodeUnsafe:o}}},c9f2:function(t,e,i){var r=i("c194"),n=i("5960");r({target:"String",proto:!0},{repeat:n})},d1a18:function(t,e,i){for(var r=i("8b22"),n=[],o={},s=0;s<256;++s)n[s]=(s+256).toString(16).substr(1),o[n[s]]=s;function a(t,e){var i=e||0,r=n;return r[t[i++]]+r[t[i++]]+r[t[i++]]+r[t[i++]]+"-"+r[t[i++]]+r[t[i++]]+"-"+r[t[i++]]+r[t[i++]]+"-"+r[t[i++]]+r[t[i++]]+"-"+r[t[i++]]+r[t[i++]]+r[t[i++]]+r[t[i++]]+r[t[i++]]+r[t[i++]]}var c=r(),h=[1|c[0],c[1],c[2],c[3],c[4],c[5]],f=16383&(c[6]<<8|c[7]),d=0,p=0;function u(t,e,i){var r=e&&i||0,n=e||[];t=t||{};var o=void 0!==t.clockseq?t.clockseq:f,s=void 0!==t.msecs?t.msecs:(new Date).getTime(),c=void 0!==t.nsecs?t.nsecs:p+1,u=s-d+(c-p)/1e4;if(u<0&&void 0===t.clockseq&&(o=o+1&16383),(u<0||s>d)&&void 0===t.nsecs&&(c=0),c>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");d=s,p=c,f=o,s+=122192928e5;var l=(1e4*(268435455&s)+c)%4294967296;n[r++]=l>>>24&255,n[r++]=l>>>16&255,n[r++]=l>>>8&255,n[r++]=255&l;var y=s/4294967296*1e4&268435455;n[r++]=y>>>8&255,n[r++]=255&y,n[r++]=y>>>24&15|16,n[r++]=y>>>16&255,n[r++]=o>>>8|128,n[r++]=255&o;for(var m=t.node||h,v=0;v<6;++v)n[r+v]=m[v];return e||a(n)}function l(t,e,i){var n=e&&i||0;"string"==typeof t&&(e="binary"==t?new Array(16):null,t=null),t=t||{};var o=t.random||(t.rng||r)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e)for(var s=0;s<16;++s)e[n+s]=o[s];return e||a(o)}var y=l;y.v1=u,y.v4=l,t.exports=y},e4f0:function(t,e,i){var r=i("e1e8"),n=i("fa0f").Buffer,o=i("7b04"),s=i("034b"),a=i("11ec"),c=n.from("Bitcoin seed","utf8"),h=2147483648,f=78,d={private:76066276,public:76067358};function p(t){this.versions=t||d,this.depth=0,this.index=0,this._privateKey=null,this._publicKey=null,this.chainCode=null,this._fingerprint=0,this.parentFingerprint=0}function u(t,e,i){var r=n.allocUnsafe(f);r.writeUInt32BE(e,0),r.writeUInt8(t.depth,4);var o=t.depth?t.parentFingerprint:0;return r.writeUInt32BE(o,5),r.writeUInt32BE(t.index,9),t.chainCode.copy(r,13),i.copy(r,45),r}function l(t){var e=o.createHash("sha256").update(t).digest();return o.createHash("ripemd160").update(e).digest()}Object.defineProperty(p.prototype,"fingerprint",{get:function(){return this._fingerprint}}),Object.defineProperty(p.prototype,"identifier",{get:function(){return this._identifier}}),Object.defineProperty(p.prototype,"pubKeyHash",{get:function(){return this.identifier}}),Object.defineProperty(p.prototype,"privateKey",{get:function(){return this._privateKey},set:function(t){r.equal(t.length,32,"Private key must be 32 bytes."),r(!0===a.privateKeyVerify(t),"Invalid private key"),this._privateKey=t,this._publicKey=n.from(a.publicKeyCreate(t,!0)),this._identifier=l(this.publicKey),this._fingerprint=this._identifier.slice(0,4).readUInt32BE(0)}}),Object.defineProperty(p.prototype,"publicKey",{get:function(){return this._publicKey},set:function(t){r(33===t.length||65===t.length,"Public key must be 33 or 65 bytes."),r(!0===a.publicKeyVerify(t),"Invalid public key"),this._publicKey=n.from(a.publicKeyConvert(t,!0)),this._identifier=l(this.publicKey),this._fingerprint=this._identifier.slice(0,4).readUInt32BE(0),this._privateKey=null}}),Object.defineProperty(p.prototype,"privateExtendedKey",{get:function(){return this._privateKey?s.encode(u(this,this.versions.private,n.concat([n.alloc(1,0),this.privateKey]))):null}}),Object.defineProperty(p.prototype,"publicExtendedKey",{get:function(){return s.encode(u(this,this.versions.public,this.publicKey))}}),p.prototype.derive=function(t){if("m"===t||"M"===t||"m'"===t||"M'"===t)return this;var e=t.split("/"),i=this;return e.forEach((function(t,e){if(0!==e){var n=t.length>1&&"'"===t[t.length-1],o=parseInt(t,10);r(o<h,"Invalid index"),n&&(o+=h),i=i.deriveChild(o)}else r(/^[mM]{1}/.test(t),'Path must start with "m" or "M"')})),i},p.prototype.deriveChild=function(t){var e,i=t>=h,s=n.allocUnsafe(4);if(s.writeUInt32BE(t,0),i){r(this.privateKey,"Could not derive hardened child key");var c=this.privateKey,f=n.alloc(1,0);c=n.concat([f,c]),e=n.concat([c,s])}else e=n.concat([this.publicKey,s]);var d=o.createHmac("sha512",this.chainCode).update(e).digest(),u=d.slice(0,32),l=d.slice(32),y=new p(this.versions);if(this.privateKey)try{y.privateKey=n.from(a.privateKeyTweakAdd(n.from(this.privateKey),u))}catch(m){return this.deriveChild(t+1)}else try{y.publicKey=n.from(a.publicKeyTweakAdd(n.from(this.publicKey),u,!0))}catch(m){return this.deriveChild(t+1)}return y.chainCode=l,y.depth=this.depth+1,y.parentFingerprint=this.fingerprint,y.index=t,y},p.prototype.sign=function(t){return n.from(a.ecdsaSign(t,this.privateKey).signature)},p.prototype.verify=function(t,e){return a.ecdsaVerify(Uint8Array.from(e),Uint8Array.from(t),Uint8Array.from(this.publicKey))},p.prototype.wipePrivateData=function(){return this._privateKey&&o.randomBytes(this._privateKey.length).copy(this._privateKey),this._privateKey=null,this},p.prototype.toJSON=function(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}},p.fromMasterSeed=function(t,e){var i=o.createHmac("sha512",c).update(t).digest(),r=i.slice(0,32),n=i.slice(32),s=new p(e);return s.chainCode=n,s.privateKey=r,s},p.fromExtendedKey=function(t,e){e=e||d;var i=new p(e),n=s.decode(t),o=n.readUInt32BE(0);r(o===e.private||o===e.public,"Version mismatch: does not match private or public"),i.depth=n.readUInt8(4),i.parentFingerprint=n.readUInt32BE(5),i.index=n.readUInt32BE(9),i.chainCode=n.slice(13,45);var a=n.slice(45);return 0===a.readUInt8(0)?(r(o===e.private,"Version mismatch: version does not match private"),i.privateKey=a.slice(1)):(r(o===e.public,"Version mismatch: version does not match public"),i.publicKey=a),i},p.fromJSON=function(t){return p.fromExtendedKey(t.xpriv)},p.HARDENED_OFFSET=h,t.exports=p},e51a:function(t,e,i){"use strict";var r,n,o={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(t){this.toString=function(){return"CORRUPT: "+this.message},this.message=t},invalid:function(t){this.toString=function(){return"INVALID: "+this.message},this.message=t},bug:function(t){this.toString=function(){return"BUG: "+this.message},this.message=t},notReady:function(t){this.toString=function(){return"NOT READY: "+this.message},this.message=t}}};function s(t,e,i){if(4!==e.length)throw new o.exception.invalid("invalid aes block size");var r=t.b[i],n=e[0]^r[0],s=e[i?3:1]^r[1],a=e[2]^r[2];e=e[i?1:3]^r[3];var c,h,f,d,p=r.length/4-2,u=4,l=[0,0,0,0];c=t.s[i],t=c[0];var y=c[1],m=c[2],v=c[3],b=c[4];for(d=0;d<p;d++)c=t[n>>>24]^y[s>>16&255]^m[a>>8&255]^v[255&e]^r[u],h=t[s>>>24]^y[a>>16&255]^m[e>>8&255]^v[255&n]^r[u+1],f=t[a>>>24]^y[e>>16&255]^m[n>>8&255]^v[255&s]^r[u+2],e=t[e>>>24]^y[n>>16&255]^m[s>>8&255]^v[255&a]^r[u+3],u+=4,n=c,s=h,a=f;for(d=0;4>d;d++)l[i?3&-d:d]=b[n>>>24]<<24^b[s>>16&255]<<16^b[a>>8&255]<<8^b[255&e]^r[u++],c=n,n=s,s=a,a=e,e=c;return l}function a(t,e){var i,r,n,o=t.F,s=t.b,a=o[0],c=o[1],h=o[2],f=o[3],d=o[4],p=o[5],u=o[6],l=o[7];for(i=0;64>i;i++)16>i?r=e[i]:(r=e[i+1&15],n=e[i+14&15],r=e[15&i]=(r>>>7^r>>>18^r>>>3^r<<25^r<<14)+(n>>>17^n>>>19^n>>>10^n<<15^n<<13)+e[15&i]+e[i+9&15]|0),r=r+l+(d>>>6^d>>>11^d>>>25^d<<26^d<<21^d<<7)+(u^d&(p^u))+s[i],l=u,u=p,p=d,d=f+r|0,f=h,h=c,c=a,a=r+(c&h^f&(c^h))+(c>>>2^c>>>13^c>>>22^c<<30^c<<19^c<<10)|0;o[0]=o[0]+a|0,o[1]=o[1]+c|0,o[2]=o[2]+h|0,o[3]=o[3]+f|0,o[4]=o[4]+d|0,o[5]=o[5]+p|0,o[6]=o[6]+u|0,o[7]=o[7]+l|0}function c(t,e){var i,r=o.random.K[t],n=[];for(i in r)r.hasOwnProperty(i)&&n.push(r[i]);for(i=0;i<n.length;i++)n[i](e)}function h(t,e){"undefined"!==typeof window&&window.performance&&"function"===typeof window.performance.now?t.addEntropy(window.performance.now(),e,"loadtime"):t.addEntropy((new Date).valueOf(),e,"loadtime")}function f(t){t.b=d(t).concat(d(t)),t.L=new o.cipher.aes(t.b)}function d(t){for(var e=0;4>e&&(t.h[e]=t.h[e]+1|0,!t.h[e]);e++);return t.L.encrypt(t.h)}function p(t,e){return function(){e.apply(t,arguments)}}o.cipher.aes=function(t){this.s[0][0][0]||this.O();var e,i,r,n,s=this.s[0][4],a=this.s[1];e=t.length;var c=1;if(4!==e&&6!==e&&8!==e)throw new o.exception.invalid("invalid aes key size");for(this.b=[r=t.slice(0),n=[]],t=e;t<4*e+28;t++)i=r[t-1],(0===t%e||8===e&&4===t%e)&&(i=s[i>>>24]<<24^s[i>>16&255]<<16^s[i>>8&255]<<8^s[255&i],0===t%e&&(i=i<<8^i>>>24^c<<24,c=c<<1^283*(c>>7))),r[t]=r[t-e]^i;for(e=0;t;e++,t--)i=r[3&e?t:t-4],n[e]=4>=t||4>e?i:a[0][s[i>>>24]]^a[1][s[i>>16&255]]^a[2][s[i>>8&255]]^a[3][s[255&i]]},o.cipher.aes.prototype={encrypt:function(t){return s(this,t,0)},decrypt:function(t){return s(this,t,1)},s:[[[],[],[],[],[]],[[],[],[],[],[]]],O:function(){var t,e,i,r,n,o,s,a=this.s[0],c=this.s[1],h=a[4],f=c[4],d=[],p=[];for(t=0;256>t;t++)p[(d[t]=t<<1^283*(t>>7))^t]=t;for(e=i=0;!h[e];e^=r||1,i=p[i]||1)for(o=i^i<<1^i<<2^i<<3^i<<4,o=o>>8^255&o^99,h[e]=o,f[o]=e,n=d[t=d[r=d[e]]],s=16843009*n^65537*t^257*r^16843008*e,n=257*d[o]^16843008*o,t=0;4>t;t++)a[t][e]=n=n<<24^n>>>8,c[t][o]=s=s<<24^s>>>8;for(t=0;5>t;t++)a[t]=a[t].slice(0),c[t]=c[t].slice(0)}},o.bitArray={bitSlice:function(t,e,i){return t=o.bitArray.$(t.slice(e/32),32-(31&e)).slice(1),void 0===i?t:o.bitArray.clamp(t,i-e)},extract:function(t,e,i){var r=Math.floor(-e-i&31);return(-32&(e+i-1^e)?t[e/32|0]<<32-r^t[e/32+1|0]>>>r:t[e/32|0]>>>r)&(1<<i)-1},concat:function(t,e){if(0===t.length||0===e.length)return t.concat(e);var i=t[t.length-1],r=o.bitArray.getPartial(i);return 32===r?t.concat(e):o.bitArray.$(e,r,0|i,t.slice(0,t.length-1))},bitLength:function(t){var e=t.length;return 0===e?0:32*(e-1)+o.bitArray.getPartial(t[e-1])},clamp:function(t,e){if(32*t.length<e)return t;t=t.slice(0,Math.ceil(e/32));var i=t.length;return e&=31,0<i&&e&&(t[i-1]=o.bitArray.partial(e,t[i-1]&2147483648>>e-1,1)),t},partial:function(t,e,i){return 32===t?e:(i?0|e:e<<32-t)+1099511627776*t},getPartial:function(t){return Math.round(t/1099511627776)||32},equal:function(t,e){if(o.bitArray.bitLength(t)!==o.bitArray.bitLength(e))return!1;var i,r=0;for(i=0;i<t.length;i++)r|=t[i]^e[i];return 0===r},$:function(t,e,i,r){var n;for(n=0,void 0===r&&(r=[]);32<=e;e-=32)r.push(i),i=0;if(0===e)return r.concat(t);for(n=0;n<t.length;n++)r.push(i|t[n]>>>e),i=t[n]<<32-e;return n=t.length?t[t.length-1]:0,t=o.bitArray.getPartial(n),r.push(o.bitArray.partial(e+t&31,32<e+t?i:r.pop(),1)),r},i:function(t,e){return[t[0]^e[0],t[1]^e[1],t[2]^e[2],t[3]^e[3]]},byteswapM:function(t){var e,i;for(e=0;e<t.length;++e)i=t[e],t[e]=i>>>24|i>>>8&65280|(65280&i)<<8|i<<24;return t}},o.codec.utf8String={fromBits:function(t){var e,i,r="",n=o.bitArray.bitLength(t);for(e=0;e<n/8;e++)0===(3&e)&&(i=t[e/4]),r+=String.fromCharCode(i>>>24),i<<=8;return decodeURIComponent(escape(r))},toBits:function(t){t=unescape(encodeURIComponent(t));var e,i=[],r=0;for(e=0;e<t.length;e++)r=r<<8|t.charCodeAt(e),3===(3&e)&&(i.push(r),r=0);return 3&e&&i.push(o.bitArray.partial(8*(3&e),r)),i}},o.codec.hex={fromBits:function(t){var e,i="";for(e=0;e<t.length;e++)i+=(0xf00000000000+(0|t[e])).toString(16).substr(4);return i.substr(0,o.bitArray.bitLength(t)/4)},toBits:function(t){var e,i,r=[];for(t=t.replace(/\s|0x/g,""),i=t.length,t+="00000000",e=0;e<t.length;e+=8)r.push(0^parseInt(t.substr(e,8),16));return o.bitArray.clamp(r,4*i)}},o.codec.base32={B:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",X:"0123456789ABCDEFGHIJKLMNOPQRSTUV",BITS:32,BASE:5,REMAINING:27,fromBits:function(t,e,i){var r=o.codec.base32.BASE,n=o.codec.base32.REMAINING,s="",a=0,c=o.codec.base32.B,h=0,f=o.bitArray.bitLength(t);for(i&&(c=o.codec.base32.X),i=0;s.length*r<f;)s+=c.charAt((h^t[i]>>>a)>>>n),a<r?(h=t[i]<<r-a,a+=n,i++):(h<<=r,a-=r);for(;7&s.length&&!e;)s+="=";return s},toBits:function(t,e){t=t.replace(/\s|=/g,"").toUpperCase();var i,r,n=o.codec.base32.BITS,s=o.codec.base32.BASE,a=o.codec.base32.REMAINING,c=[],h=0,f=o.codec.base32.B,d=0,p="base32";for(e&&(f=o.codec.base32.X,p="base32hex"),i=0;i<t.length;i++){if(r=f.indexOf(t.charAt(i)),0>r){if(!e)try{return o.codec.base32hex.toBits(t)}catch(u){}throw new o.exception.invalid("this isn't "+p+"!")}h>a?(h-=a,c.push(d^r>>>h),d=r<<n-h):(h+=s,d^=r<<n-h)}return 56&h&&c.push(o.bitArray.partial(56&h,d,1)),c}},o.codec.base32hex={fromBits:function(t,e){return o.codec.base32.fromBits(t,e,1)},toBits:function(t){return o.codec.base32.toBits(t,1)}},o.codec.base64={B:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fromBits:function(t,e,i){var r="",n=0,s=o.codec.base64.B,a=0,c=o.bitArray.bitLength(t);for(i&&(s=s.substr(0,62)+"-_"),i=0;6*r.length<c;)r+=s.charAt((a^t[i]>>>n)>>>26),6>n?(a=t[i]<<6-n,n+=26,i++):(a<<=6,n-=6);for(;3&r.length&&!e;)r+="=";return r},toBits:function(t,e){t=t.replace(/\s|=/g,"");var i,r,n=[],s=0,a=o.codec.base64.B,c=0;for(e&&(a=a.substr(0,62)+"-_"),i=0;i<t.length;i++){if(r=a.indexOf(t.charAt(i)),0>r)throw new o.exception.invalid("this isn't base64!");26<s?(s-=26,n.push(c^r>>>s),c=r<<32-s):(s+=6,c^=r<<32-s)}return 56&s&&n.push(o.bitArray.partial(56&s,c,1)),n}},o.codec.base64url={fromBits:function(t){return o.codec.base64.fromBits(t,1,1)},toBits:function(t){return o.codec.base64.toBits(t,1)}},o.hash.sha256=function(t){this.b[0]||this.O(),t?(this.F=t.F.slice(0),this.A=t.A.slice(0),this.l=t.l):this.reset()},o.hash.sha256.hash=function(t){return(new o.hash.sha256).update(t).finalize()},o.hash.sha256.prototype={blockSize:512,reset:function(){return this.F=this.Y.slice(0),this.A=[],this.l=0,this},update:function(t){"string"===typeof t&&(t=o.codec.utf8String.toBits(t));var e,i=this.A=o.bitArray.concat(this.A,t);if(e=this.l,t=this.l=e+o.bitArray.bitLength(t),9007199254740991<t)throw new o.exception.invalid("Cannot hash more than 2^53 - 1 bits");if("undefined"!==typeof Uint32Array){var r=new Uint32Array(i),n=0;for(e=512+e-(512+e&511);e<=t;e+=512)a(this,r.subarray(16*n,16*(n+1))),n+=1;i.splice(0,16*n)}else for(e=512+e-(512+e&511);e<=t;e+=512)a(this,i.splice(0,16));return this},finalize:function(){var t,e=this.A,i=this.F;e=o.bitArray.concat(e,[o.bitArray.partial(1,1)]);for(t=e.length+2;15&t;t++)e.push(0);for(e.push(Math.floor(this.l/4294967296)),e.push(0|this.l);e.length;)a(this,e.splice(0,16));return this.reset(),i},Y:[],b:[],O:function(){function t(t){return 4294967296*(t-Math.floor(t))|0}for(var e,i,r=0,n=2;64>r;n++){for(i=!0,e=2;e*e<=n;e++)if(0===n%e){i=!1;break}i&&(8>r&&(this.Y[r]=t(Math.pow(n,.5))),this.b[r]=t(Math.pow(n,1/3)),r++)}}},o.mode.ccm={name:"ccm",G:[],listenProgress:function(t){o.mode.ccm.G.push(t)},unListenProgress:function(t){t=o.mode.ccm.G.indexOf(t),-1<t&&o.mode.ccm.G.splice(t,1)},fa:function(t){var e,i=o.mode.ccm.G.slice();for(e=0;e<i.length;e+=1)i[e](t)},encrypt:function(t,e,i,r,n){var s,a=e.slice(0),c=o.bitArray,h=c.bitLength(i)/8,f=c.bitLength(a)/8;if(n=n||64,r=r||[],7>h)throw new o.exception.invalid("ccm: iv must be at least 7 bytes");for(s=2;4>s&&f>>>8*s;s++);return s<15-h&&(s=15-h),i=c.clamp(i,8*(15-s)),e=o.mode.ccm.V(t,e,i,r,n,s),a=o.mode.ccm.C(t,a,i,e,n,s),c.concat(a.data,a.tag)},decrypt:function(t,e,i,r,n){n=n||64,r=r||[];var s=o.bitArray,a=s.bitLength(i)/8,c=s.bitLength(e),h=s.clamp(e,c-n),f=s.bitSlice(e,c-n);c=(c-n)/8;if(7>a)throw new o.exception.invalid("ccm: iv must be at least 7 bytes");for(e=2;4>e&&c>>>8*e;e++);if(e<15-a&&(e=15-a),i=s.clamp(i,8*(15-e)),h=o.mode.ccm.C(t,h,i,f,n,e),t=o.mode.ccm.V(t,h.data,i,r,n,e),!s.equal(h.tag,t))throw new o.exception.corrupt("ccm: tag doesn't match");return h.data},na:function(t,e,i,r,n,s){var a=[],c=o.bitArray,h=c.i;if(r=[c.partial(8,(e.length?64:0)|r-2<<2|s-1)],r=c.concat(r,i),r[3]|=n,r=t.encrypt(r),e.length)for(i=c.bitLength(e)/8,65279>=i?a=[c.partial(16,i)]:4294967295>=i&&(a=c.concat([c.partial(16,65534)],[i])),a=c.concat(a,e),e=0;e<a.length;e+=4)r=t.encrypt(h(r,a.slice(e,e+4).concat([0,0,0])));return r},V:function(t,e,i,r,n,s){var a=o.bitArray,c=a.i;if(n/=8,n%2||4>n||16<n)throw new o.exception.invalid("ccm: invalid tag length");if(4294967295<r.length||4294967295<e.length)throw new o.exception.bug("ccm: can't deal with 4GiB or more data");for(i=o.mode.ccm.na(t,r,i,n,a.bitLength(e)/8,s),r=0;r<e.length;r+=4)i=t.encrypt(c(i,e.slice(r,r+4).concat([0,0,0])));return a.clamp(i,8*n)},C:function(t,e,i,r,n,s){var a,c=o.bitArray;a=c.i;var h=e.length,f=c.bitLength(e),d=h/50,p=d;if(i=c.concat([c.partial(8,s-1)],i).concat([0,0,0]).slice(0,4),r=c.bitSlice(a(r,t.encrypt(i)),0,n),!h)return{tag:r,data:[]};for(a=0;a<h;a+=4)a>d&&(o.mode.ccm.fa(a/h),d+=p),i[3]++,n=t.encrypt(i),e[a]^=n[0],e[a+1]^=n[1],e[a+2]^=n[2],e[a+3]^=n[3];return{tag:r,data:c.clamp(e,f)}}},o.mode.ocb2={name:"ocb2",encrypt:function(t,e,i,r,n,s){if(128!==o.bitArray.bitLength(i))throw new o.exception.invalid("ocb iv must be 128 bits");var a,c=o.mode.ocb2.S,h=o.bitArray,f=h.i,d=[0,0,0,0];i=c(t.encrypt(i));var p,u=[];for(r=r||[],n=n||64,a=0;a+4<e.length;a+=4)p=e.slice(a,a+4),d=f(d,p),u=u.concat(f(i,t.encrypt(f(i,p)))),i=c(i);return p=e.slice(a),e=h.bitLength(p),a=t.encrypt(f(i,[0,0,0,e])),p=h.clamp(f(p.concat([0,0,0]),a),e),d=f(d,f(p.concat([0,0,0]),a)),d=t.encrypt(f(d,f(i,c(i)))),r.length&&(d=f(d,s?r:o.mode.ocb2.pmac(t,r))),u.concat(h.concat(p,h.clamp(d,n)))},decrypt:function(t,e,i,r,n,s){if(128!==o.bitArray.bitLength(i))throw new o.exception.invalid("ocb iv must be 128 bits");n=n||64;var a,c,h=o.mode.ocb2.S,f=o.bitArray,d=f.i,p=[0,0,0,0],u=h(t.encrypt(i)),l=o.bitArray.bitLength(e)-n,y=[];for(r=r||[],i=0;i+4<l/32;i+=4)a=d(u,t.decrypt(d(u,e.slice(i,i+4)))),p=d(p,a),y=y.concat(a),u=h(u);if(c=l-32*i,a=t.encrypt(d(u,[0,0,0,c])),a=d(a,f.clamp(e.slice(i),c).concat([0,0,0])),p=d(p,a),p=t.encrypt(d(p,d(u,h(u)))),r.length&&(p=d(p,s?r:o.mode.ocb2.pmac(t,r))),!f.equal(f.clamp(p,n),f.bitSlice(e,l)))throw new o.exception.corrupt("ocb: tag doesn't match");return y.concat(f.clamp(a,c))},pmac:function(t,e){var i,r=o.mode.ocb2.S,n=o.bitArray,s=n.i,a=[0,0,0,0],c=t.encrypt([0,0,0,0]);c=s(c,r(r(c)));for(i=0;i+4<e.length;i+=4)c=r(c),a=s(a,t.encrypt(s(c,e.slice(i,i+4))));return i=e.slice(i),128>n.bitLength(i)&&(c=s(c,r(c)),i=n.concat(i,[-2147483648,0,0,0])),a=s(a,i),t.encrypt(s(r(s(c,r(c))),a))},S:function(t){return[t[0]<<1^t[1]>>>31,t[1]<<1^t[2]>>>31,t[2]<<1^t[3]>>>31,t[3]<<1^135*(t[0]>>>31)]}},o.mode.gcm={name:"gcm",encrypt:function(t,e,i,r,n){var s=e.slice(0);return e=o.bitArray,r=r||[],t=o.mode.gcm.C(!0,t,s,r,i,n||128),e.concat(t.data,t.tag)},decrypt:function(t,e,i,r,n){var s=e.slice(0),a=o.bitArray,c=a.bitLength(s);if(n=n||128,r=r||[],n<=c?(e=a.bitSlice(s,c-n),s=a.bitSlice(s,0,c-n)):(e=s,s=[]),t=o.mode.gcm.C(!1,t,s,r,i,n),!a.equal(t.tag,e))throw new o.exception.corrupt("gcm: tag doesn't match");return t.data},ka:function(t,e){var i,r,n,s,a,c=o.bitArray.i;for(n=[0,0,0,0],s=e.slice(0),i=0;128>i;i++){for((r=0!==(t[Math.floor(i/32)]&1<<31-i%32))&&(n=c(n,s)),a=0!==(1&s[3]),r=3;0<r;r--)s[r]=s[r]>>>1|(1&s[r-1])<<31;s[0]>>>=1,a&&(s[0]^=-520093696)}return n},j:function(t,e,i){var r,n=i.length;for(e=e.slice(0),r=0;r<n;r+=4)e[0]^=4294967295&i[r],e[1]^=4294967295&i[r+1],e[2]^=4294967295&i[r+2],e[3]^=4294967295&i[r+3],e=o.mode.gcm.ka(e,t);return e},C:function(t,e,i,r,n,s){var a,c,h,f,d,p,u,l,y=o.bitArray;for(p=i.length,u=y.bitLength(i),l=y.bitLength(r),c=y.bitLength(n),a=e.encrypt([0,0,0,0]),96===c?(n=n.slice(0),n=y.concat(n,[1])):(n=o.mode.gcm.j(a,[0,0,0,0],n),n=o.mode.gcm.j(a,n,[0,0,Math.floor(c/4294967296),4294967295&c])),c=o.mode.gcm.j(a,[0,0,0,0],r),d=n.slice(0),r=c.slice(0),t||(r=o.mode.gcm.j(a,c,i)),f=0;f<p;f+=4)d[3]++,h=e.encrypt(d),i[f]^=h[0],i[f+1]^=h[1],i[f+2]^=h[2],i[f+3]^=h[3];return i=y.clamp(i,u),t&&(r=o.mode.gcm.j(a,c,i)),t=[Math.floor(l/4294967296),4294967295&l,Math.floor(u/4294967296),4294967295&u],r=o.mode.gcm.j(a,r,t),h=e.encrypt(n),r[0]^=h[0],r[1]^=h[1],r[2]^=h[2],r[3]^=h[3],{tag:y.bitSlice(r,0,s),data:i}}},o.misc.hmac=function(t,e){this.W=e=e||o.hash.sha256;var i,r=[[],[]],n=e.prototype.blockSize/32;for(this.w=[new e,new e],t.length>n&&(t=e.hash(t)),i=0;i<n;i++)r[0][i]=909522486^t[i],r[1][i]=1549556828^t[i];this.w[0].update(r[0]),this.w[1].update(r[1]),this.R=new e(this.w[0])},o.misc.hmac.prototype.encrypt=o.misc.hmac.prototype.mac=function(t){if(this.aa)throw new o.exception.invalid("encrypt on already updated hmac called!");return this.update(t),this.digest(t)},o.misc.hmac.prototype.reset=function(){this.R=new this.W(this.w[0]),this.aa=!1},o.misc.hmac.prototype.update=function(t){this.aa=!0,this.R.update(t)},o.misc.hmac.prototype.digest=function(){var t=this.R.finalize();t=new this.W(this.w[1]).update(t).finalize();return this.reset(),t},o.misc.pbkdf2=function(t,e,i,r,n){if(i=i||1e4,0>r||0>i)throw new o.exception.invalid("invalid params to pbkdf2");"string"===typeof t&&(t=o.codec.utf8String.toBits(t)),"string"===typeof e&&(e=o.codec.utf8String.toBits(e)),n=n||o.misc.hmac,t=new n(t);var s,a,c,h,f=[],d=o.bitArray;for(h=1;32*f.length<(r||1);h++){for(n=s=t.encrypt(d.concat(e,[h])),a=1;a<i;a++)for(s=t.encrypt(s),c=0;c<s.length;c++)n[c]^=s[c];f=f.concat(n)}return r&&(f=d.clamp(f,r)),f},o.prng=function(t){this.c=[new o.hash.sha256],this.m=[0],this.P=0,this.H={},this.N=0,this.U={},this.Z=this.f=this.o=this.ha=0,this.b=[0,0,0,0,0,0,0,0],this.h=[0,0,0,0],this.L=void 0,this.M=t,this.D=!1,this.K={progress:{},seeded:{}},this.u=this.ga=0,this.I=1,this.J=2,this.ca=65536,this.T=[0,48,64,96,128,192,256,384,512,768,1024],this.da=3e4,this.ba=80},o.prng.prototype={randomWords:function(t,e){var i,r,n=[];if(i=this.isReady(e),i===this.u)throw new o.exception.notReady("generator isn't seeded");if(i&this.J){i=!(i&this.I),r=[];var s,a=0;for(this.Z=r[0]=(new Date).valueOf()+this.da,s=0;16>s;s++)r.push(4294967296*Math.random()|0);for(s=0;s<this.c.length&&(r=r.concat(this.c[s].finalize()),a+=this.m[s],this.m[s]=0,i||!(this.P&1<<s));s++);for(this.P>=1<<this.c.length&&(this.c.push(new o.hash.sha256),this.m.push(0)),this.f-=a,a>this.o&&(this.o=a),this.P++,this.b=o.hash.sha256.hash(this.b.concat(r)),this.L=new o.cipher.aes(this.b),i=0;4>i&&(this.h[i]=this.h[i]+1|0,!this.h[i]);i++);}for(i=0;i<t;i+=4)0===(i+1)%this.ca&&f(this),r=d(this),n.push(r[0],r[1],r[2],r[3]);return f(this),n.slice(0,t)},setDefaultParanoia:function(t,e){if(0===t&&"Setting paranoia=0 will ruin your security; use it only for testing"!==e)throw new o.exception.invalid("Setting paranoia=0 will ruin your security; use it only for testing");this.M=t},addEntropy:function(t,e,i){i=i||"user";var r,n,s=(new Date).valueOf(),a=this.H[i],h=this.isReady(),f=0;switch(r=this.U[i],void 0===r&&(r=this.U[i]=this.ha++),void 0===a&&(a=this.H[i]=0),this.H[i]=(this.H[i]+1)%this.c.length,typeof t){case"number":void 0===e&&(e=1),this.c[a].update([r,this.N++,1,e,s,1,0|t]);break;case"object":if(i=Object.prototype.toString.call(t),"[object Uint32Array]"===i){for(n=[],i=0;i<t.length;i++)n.push(t[i]);t=n}else for("[object Array]"!==i&&(f=1),i=0;i<t.length&&!f;i++)"number"!==typeof t[i]&&(f=1);if(!f){if(void 0===e)for(i=e=0;i<t.length;i++)for(n=t[i];0<n;)e++,n>>>=1;this.c[a].update([r,this.N++,2,e,s,t.length].concat(t))}break;case"string":void 0===e&&(e=t.length),this.c[a].update([r,this.N++,3,e,s,t.length]),this.c[a].update(t);break;default:f=1}if(f)throw new o.exception.bug("random: addEntropy only supports number, array of numbers or string");this.m[a]+=e,this.f+=e,h===this.u&&(this.isReady()!==this.u&&c("seeded",Math.max(this.o,this.f)),c("progress",this.getProgress()))},isReady:function(t){return t=this.T[void 0!==t?t:this.M],this.o&&this.o>=t?this.m[0]>this.ba&&(new Date).valueOf()>this.Z?this.J|this.I:this.I:this.f>=t?this.J|this.u:this.u},getProgress:function(t){return t=this.T[t||this.M],this.o>=t||this.f>t?1:this.f/t},startCollectors:function(){if(!this.D){if(this.a={loadTimeCollector:p(this,this.ma),mouseCollector:p(this,this.oa),keyboardCollector:p(this,this.la),accelerometerCollector:p(this,this.ea),touchCollector:p(this,this.qa)},window.addEventListener)window.addEventListener("load",this.a.loadTimeCollector,!1),window.addEventListener("mousemove",this.a.mouseCollector,!1),window.addEventListener("keypress",this.a.keyboardCollector,!1),window.addEventListener("devicemotion",this.a.accelerometerCollector,!1),window.addEventListener("touchmove",this.a.touchCollector,!1);else{if(!document.attachEvent)throw new o.exception.bug("can't attach event");document.attachEvent("onload",this.a.loadTimeCollector),document.attachEvent("onmousemove",this.a.mouseCollector),document.attachEvent("keypress",this.a.keyboardCollector)}this.D=!0}},stopCollectors:function(){this.D&&(window.removeEventListener?(window.removeEventListener("load",this.a.loadTimeCollector,!1),window.removeEventListener("mousemove",this.a.mouseCollector,!1),window.removeEventListener("keypress",this.a.keyboardCollector,!1),window.removeEventListener("devicemotion",this.a.accelerometerCollector,!1),window.removeEventListener("touchmove",this.a.touchCollector,!1)):document.detachEvent&&(document.detachEvent("onload",this.a.loadTimeCollector),document.detachEvent("onmousemove",this.a.mouseCollector),document.detachEvent("keypress",this.a.keyboardCollector)),this.D=!1)},addEventListener:function(t,e){this.K[t][this.ga++]=e},removeEventListener:function(t,e){var i,r,n=this.K[t],o=[];for(r in n)n.hasOwnProperty(r)&&n[r]===e&&o.push(r);for(i=0;i<o.length;i++)r=o[i],delete n[r]},la:function(){h(this,1)},oa:function(t){var e,i;try{e=t.x||t.clientX||t.offsetX||0,i=t.y||t.clientY||t.offsetY||0}catch(r){i=e=0}0!=e&&0!=i&&this.addEntropy([e,i],2,"mouse"),h(this,0)},qa:function(t){t=t.touches[0]||t.changedTouches[0],this.addEntropy([t.pageX||t.clientX,t.pageY||t.clientY],1,"touch"),h(this,0)},ma:function(){h(this,2)},ea:function(t){if(t=t.accelerationIncludingGravity.x||t.accelerationIncludingGravity.y||t.accelerationIncludingGravity.z,window.orientation){var e=window.orientation;"number"===typeof e&&this.addEntropy(e,1,"accelerometer")}t&&this.addEntropy(t,2,"accelerometer"),h(this,0)}},o.random=new o.prng(6);t:try{var u,l,y,m;if(m=t.exports){var v;try{v=i("7b04")}catch(b){v=null}m=l=v}if(m&&l.randomBytes)u=l.randomBytes(128),u=new Uint32Array(new Uint8Array(u).buffer),o.random.addEntropy(u,1024,"crypto['randomBytes']");else if("undefined"!==typeof window&&"undefined"!==typeof Uint32Array){if(y=new Uint32Array(32),window.crypto&&window.crypto.getRandomValues)window.crypto.getRandomValues(y);else{if(!window.msCrypto||!window.msCrypto.getRandomValues)break t;window.msCrypto.getRandomValues(y)}o.random.addEntropy(y,1024,"crypto['getRandomValues']")}}catch(b){"undefined"!==typeof window&&window.console&&(console.log("There was an error collecting entropy from the browser:"),console.log(b))}o.json={defaults:{v:1,iter:1e4,ks:128,ts:64,mode:"ccm",adata:"",cipher:"aes"},ja:function(t,e,i,r){i=i||{},r=r||{};var n,s=o.json,a=s.g({iv:o.random.randomWords(4,0)},s.defaults);if(s.g(a,i),i=a.adata,"string"===typeof a.salt&&(a.salt=o.codec.base64.toBits(a.salt)),"string"===typeof a.iv&&(a.iv=o.codec.base64.toBits(a.iv)),!o.mode[a.mode]||!o.cipher[a.cipher]||"string"===typeof t&&100>=a.iter||64!==a.ts&&96!==a.ts&&128!==a.ts||128!==a.ks&&192!==a.ks&&256!==a.ks||2>a.iv.length||4<a.iv.length)throw new o.exception.invalid("json encrypt: invalid parameters");return"string"===typeof t?(n=o.misc.cachedPbkdf2(t,a),t=n.key.slice(0,a.ks/32),a.salt=n.salt):o.ecc&&t instanceof o.ecc.elGamal.publicKey&&(n=t.kem(),a.kemtag=n.tag,t=n.key.slice(0,a.ks/32)),"string"===typeof e&&(e=o.codec.utf8String.toBits(e)),"string"===typeof i&&(a.adata=i=o.codec.utf8String.toBits(i)),n=new o.cipher[a.cipher](t),s.g(r,a),r.key=t,a.ct="ccm"===a.mode&&o.arrayBuffer&&o.arrayBuffer.ccm&&e instanceof ArrayBuffer?o.arrayBuffer.ccm.encrypt(n,e,a.iv,i,a.ts):o.mode[a.mode].encrypt(n,e,a.iv,i,a.ts),a},encrypt:function(t,e,i,r){var n=o.json,s=n.ja.apply(n,arguments);return n.encode(s)},ia:function(t,e,i,r){i=i||{},r=r||{};var n,s,a=o.json;if(e=a.g(a.g(a.g({},a.defaults),e),i,!0),n=e.adata,"string"===typeof e.salt&&(e.salt=o.codec.base64.toBits(e.salt)),"string"===typeof e.iv&&(e.iv=o.codec.base64.toBits(e.iv)),!o.mode[e.mode]||!o.cipher[e.cipher]||"string"===typeof t&&100>=e.iter||64!==e.ts&&96!==e.ts&&128!==e.ts||128!==e.ks&&192!==e.ks&&256!==e.ks||!e.iv||2>e.iv.length||4<e.iv.length)throw new o.exception.invalid("json decrypt: invalid parameters");return"string"===typeof t?(s=o.misc.cachedPbkdf2(t,e),t=s.key.slice(0,e.ks/32),e.salt=s.salt):o.ecc&&t instanceof o.ecc.elGamal.secretKey&&(t=t.unkem(o.codec.base64.toBits(e.kemtag)).slice(0,e.ks/32)),"string"===typeof n&&(n=o.codec.utf8String.toBits(n)),s=new o.cipher[e.cipher](t),n="ccm"===e.mode&&o.arrayBuffer&&o.arrayBuffer.ccm&&e.ct instanceof ArrayBuffer?o.arrayBuffer.ccm.decrypt(s,e.ct,e.iv,e.tag,n,e.ts):o.mode[e.mode].decrypt(s,e.ct,e.iv,n,e.ts),a.g(r,e),r.key=t,1===i.raw?n:o.codec.utf8String.fromBits(n)},decrypt:function(t,e,i,r){var n=o.json;return n.ia(t,n.decode(e),i,r)},encode:function(t){var e,i="{",r="";for(e in t)if(t.hasOwnProperty(e)){if(!e.match(/^[a-z0-9]+$/i))throw new o.exception.invalid("json encode: invalid property name");switch(i+=r+'"'+e+'":',r=",",typeof t[e]){case"number":case"boolean":i+=t[e];break;case"string":i+='"'+escape(t[e])+'"';break;case"object":i+='"'+o.codec.base64.fromBits(t[e],0)+'"';break;default:throw new o.exception.bug("json encode: unsupported type")}}return i+"}"},decode:function(t){if(t=t.replace(/\s/g,""),!t.match(/^\{.*\}$/))throw new o.exception.invalid("json decode: this isn't json!");t=t.replace(/^\{|\}$/g,"").split(/,/);var e,i,r={};for(e=0;e<t.length;e++){if(!(i=t[e].match(/^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i)))throw new o.exception.invalid("json decode: this isn't json!");null!=i[3]?r[i[2]]=parseInt(i[3],10):null!=i[4]?r[i[2]]=i[2].match(/^(ct|adata|salt|iv)$/)?o.codec.base64.toBits(i[4]):unescape(i[4]):null!=i[5]&&(r[i[2]]="true"===i[5])}return r},g:function(t,e,i){if(void 0===t&&(t={}),void 0===e)return t;for(var r in e)if(e.hasOwnProperty(r)){if(i&&void 0!==t[r]&&t[r]!==e[r])throw new o.exception.invalid("required parameter overridden");t[r]=e[r]}return t},sa:function(t,e){var i,r={};for(i in t)t.hasOwnProperty(i)&&t[i]!==e[i]&&(r[i]=t[i]);return r},ra:function(t,e){var i,r={};for(i=0;i<e.length;i++)void 0!==t[e[i]]&&(r[e[i]]=t[e[i]]);return r}},o.encrypt=o.json.encrypt,o.decrypt=o.json.decrypt,o.misc.pa={},o.misc.cachedPbkdf2=function(t,e){var i,r=o.misc.pa;return e=e||{},i=e.iter||1e3,r=r[t]=r[t]||{},i=r[i]=r[i]||{firstSalt:e.salt&&e.salt.length?e.salt.slice(0):o.random.randomWords(2,0)},r=void 0===e.salt?i.firstSalt:e.salt,i[r]=i[r]||o.misc.pbkdf2(t,r,e.iter),{key:i[r].slice(0),salt:r.slice(0)}},t.exports&&(t.exports=o),r=[],n=function(){return o}.apply(e,r),void 0===n||(t.exports=n)},f1ac:function(t,e){}}]);