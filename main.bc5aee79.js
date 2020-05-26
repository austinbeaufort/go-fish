parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Q45B":[function(require,module,exports) {
"use strict";const r={any:function(r,e){return"function"==typeof r&&Array.isArray(e)?e.some(r):`Expected: (function, array)\n Actual: (${typeof r}, ${typeof e})`},average:function(r){return r.reduce((r,e)=>r+e,0)/r.length},cond:function(...r){for(let e=0;e<r.length;e++)if(e%2==0){if(e===r.length-1&&"function"==typeof r[e])return r[e]();if(e===r.length-1)return r[e];if(r[e]&&"function"==typeof r[e+1])return r[e+1]();if(r[e])return r[e+1]}},digit:function(r){return[0,1,2,3,4,5,6,7,8,9].includes(r)},drop:function(r,e){if("number"!=typeof r||"string"!=typeof e&&!Array.isArray(e))throw new TypeError(`Expected: (number, (string or array))\n Actual: (${typeof r}, ${typeof e})`);return e.slice(r)},empty:function(r){const e=0===r.length;if("string"==typeof r||Array.isArray(r))return e;if("object"==typeof r){for(prop in r)if(r.hasOwnProperty(prop))return!1;return!0}throw new TypeError(`Expected a string, array, or object.\n Actual: ${typeof r}`)},even:function(r){if("number"==typeof r)return r%2==0;throw Array.isArray(r)?new TypeError("Expected: number.\n Actual: array"):new TypeError(`Expected: number.\n Actual: ${typeof r}`)},flattenAll:function(...r){let e=[];for(let t=0;t<r.length;t++){if(!Array.isArray(r[t])){e.push(r[t]);continue}let n=r[t].flat(1/0);e.push(n)}return e.flat()},freeze:function(r){if(null===r)throw new TypeError("Expected: object or array.\n Cannot freeze null value");if("object"==typeof r||Array.isArray(r))return Object.freeze(r),Object.getOwnPropertyNames(r).forEach(e=>{!r.hasOwnProperty(e)||null===r[e]||"object"!=typeof r[e]&&"function"!=typeof r[e]||Object.isFrozen(r[e])||Object.freeze(r[e])}),r;throw new TypeError(`Can only freeze objects.\n Expected: 'object'\n Actual ${typeof r}`)},frozen:function(r){if("object"==typeof r)return Object.isFrozen(r);throw new TypeError(`Expected: object or array\n Actual: ${typeof r}`)},head:function(r){if("string"!=typeof r&&!Array.isArray(r)||""===r||r===[])throw"string"!=typeof r&&!Array.isArray(r)||""!==r&&r!==[]?new TypeError(`Expected: string or array\n Actual: ${typeof r}`):new Error("Empty input:\nCannot retrieve head of empty string or array");return r[0]},ifThen:function(r,e){return r&&"function"==typeof e?e():r?e:null},ifThenElse:function(r,e,t){return r&&"function"==typeof e?e():r?e:r||"function"!=typeof t?t:t()},init:function(r){if("string"!=typeof r&&!Array.isArray(r)||""===r||r===[])throw"string"!=typeof r&&!Array.isArray(r)||""!==r&&r!==[]?new TypeError(`Expected: string or array\n Actual: ${typeof r}`):new Error("Empty input:\nCannot retrieve init of empty string or array");return r.slice(0,r.length-1)},input:function(r){return readlineSync.question(r)},integer:function(r){return Number.isInteger(r)},is:function(r){return r},last:function(r){if("string"!=typeof r&&!Array.isArray(r)||""===r||r===[])throw"string"!=typeof r&&!Array.isArray(r)||""!==r&&r!==[]?new TypeError(`Expected: string or array\n Actual: ${typeof r}`):new Error("Empty input:\nCannot retrieve last of empty string or array");return r[r.length-1]},nil:function(r){return null==r},not:function(r){if("boolean"==typeof r)return!r;throw new TypeError(`Expected: boolean\n Actual: ${typeof r}`)},number:function(r){return"number"==typeof r&&!isNaN(r)},odd:function(r){if("number"==typeof r)return r%2!=0;throw Array.isArray(r)?new TypeError("Expected: number.\n Actual: array"):new TypeError(`Expected: number.\n Actual: ${typeof r}`)},onlyDigits:function(r){if("string"==typeof r){return r.replace(/[^\d]/g,"")}throw Array.isArray(r)?new TypeError("Expected: number.\n Actual: array"):new TypeError(`@onlyDigits\nExpected: string\n Actual: ${typeof r}`)},onlyLetters:function(r){if("string"==typeof r){return r.replace(/[^a-zA-z]/g,"")}throw Array.isArray(r)?new TypeError("Expected: number.\n Actual: array"):new TypeError(`@onlyLetters\nExpected: string\n Actual: ${typeof r}`)},print:function(r){console.log(r)},randomInt:function(r,e){if("number"==typeof r&&"number"==typeof e)return Math.floor(Math.random()*(e-r+1)+r);throw new TypeError(`Expected: (number, number)\n Actual: (${typeof r}, ${typeof e})`)},randomChoice:function(r){if(Array.isArray(r)){return r[Math.floor(Math.random()*r.length)]}throw new TypeError(`Expected array:\n Actual: ${typeof r}`)},range:function(r,n){if("number"!=typeof r||"number"!=typeof n)throw new TypeError(`Expected: (number, number)\n Actual: (${typeof r}, ${typeof n})`);return r<0&&void 0===n?e(r,n=0):void 0===n?(n=r,e(r=0,n)):r<=n?e(r,n):r>=n?t(r,n):rangeArray},reverse:function(r){if(Array.isArray(r))return r.reverse();if("string"==typeof r){return r.split("").reverse().join("")}throw new TypeError(`Expected: string or array\n Actual: ${typeof r}`)},seal:function(r){if(null===r)throw new TypeError("Expected: object or array.\n Cannot seal null value");if("object"==typeof r||Array.isArray(r))return Object.seal(r);throw new TypeError(`Can only seal objects.\n Expected: 'object'\n Actual ${typeof r}`)},shuffle:function(r){if(Array.isArray(r)){for(let e=r.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[r[e],r[t]]=[r[t],r[e]]}return r}throw new TypeError(`Expected: array\n Actual: ${typeof r}`)},splitEvery:function(r,e){if("number"==typeof r&&Array.isArray(e)){let t=[],n=[];for(let o=1;o<e.length+1;o++)n.push(e[o-1]),o%r==0?(t.push(n),n=[]):o===e.length&&t.push(n);return t}return Array.isArray(r),Array.isArray(e)?"Expected: (number, array)\n Actual: (array, array)":(Array.isArray(r),Array.isArray(e)?`Expected: (number, array)\n Actual: (${typeof r}, array)`:`Expected: (number, array)\n Actual: (${typeof r}, ${typeof e})`)},sum:function(...r){return r.reduce((r,e)=>r.concat(e),[]).map(r=>Number(r)).reduce((r,e)=>r+e)},tail:function(r){if("string"!=typeof r&&!Array.isArray(r)||""===r||r===[])throw"string"!=typeof r&&!Array.isArray(r)||""!==r&&r!==[]?new TypeError(`Expected: string or array\n Actual: ${typeof r}`):new Error("Empty input:\nCannot retrieve init of empty string or array");return r.slice(1,r.length)},take:function(r,e){return e.slice(0,r)},unique:function(r){if(Array.isArray(r)){let e=[];for(let t of r)-1===e.indexOf(t)&&e.push(t);return e}throw new TypeError(`Expected: array\n Actual: ${r}`)}};function e(r,e){let t=[];for(let n=r;n<=e;n++)t.push(n);return t}function t(r,e){let t=[];for(let n=r;n>=e;n--)t.push(n);return t}module.exports=r;
},{}],"VwYB":[function(require,module,exports) {
function o(o,r){const c=[];return o.forEach(o=>{r.forEach(r=>{c.push(`${r}${o}`)})}),c}module.exports=o;
},{}],"Rc6V":[function(require,module,exports) {
const{freeze:s,drop:e,take:t,shuffle:i}=require("ez-read"),c=require("./deck-init");class h{constructor(){this.suits=s(["S","H","D","C"]),this.ranks=s(["2","3","4","5","6","7","8","9","10","J","Q","K","A"]),this.deck=i(c(this.suits,this.ranks))}show(){console.log(this.deck)}shuffleDeck(){this.deck=i(this.deck)}discard(s){this.deck=e(s,this.deck)}deal(s){const i=t(s,this.deck);return this.deck=e(s,this.deck),i}reset(){this.deck=i(c(this.suits,this.ranks))}}module.exports=h;
},{"ez-read":"Q45B","./deck-init":"VwYB"}],"jfNh":[function(require,module,exports) {
module.exports="/go-fish/10_of_clubs.34ba9f95.png";
},{}],"TrQ6":[function(require,module,exports) {
module.exports="/go-fish/10_of_diamonds.be662552.png";
},{}],"Epy7":[function(require,module,exports) {
module.exports="/go-fish/10_of_hearts.f8b07443.png";
},{}],"zsN8":[function(require,module,exports) {
module.exports="/go-fish/10_of_spades.0262b025.png";
},{}],"h883":[function(require,module,exports) {
module.exports="/go-fish/2_of_clubs.a5c42836.png";
},{}],"ChUh":[function(require,module,exports) {
module.exports="/go-fish/2_of_diamonds.683937a2.png";
},{}],"O0Uz":[function(require,module,exports) {
module.exports="/go-fish/2_of_hearts.7a3d1c61.png";
},{}],"zNzH":[function(require,module,exports) {
module.exports="/go-fish/2_of_spades.2cae35cb.png";
},{}],"Y1lU":[function(require,module,exports) {
module.exports="/go-fish/3_of_clubs.66173b17.png";
},{}],"dG6L":[function(require,module,exports) {
module.exports="/go-fish/3_of_diamonds.0b97ac52.png";
},{}],"sl3d":[function(require,module,exports) {
module.exports="/go-fish/3_of_hearts.f5e75f64.png";
},{}],"Z7Mk":[function(require,module,exports) {
module.exports="/go-fish/3_of_spades.73b13fbb.png";
},{}],"mj1v":[function(require,module,exports) {
module.exports="/go-fish/4_of_clubs.8b018ee9.png";
},{}],"msN6":[function(require,module,exports) {
module.exports="/go-fish/4_of_diamonds.d11d9186.png";
},{}],"T3jJ":[function(require,module,exports) {
module.exports="/go-fish/4_of_hearts.a0a170b0.png";
},{}],"w1k1":[function(require,module,exports) {
module.exports="/go-fish/4_of_spades.067660c8.png";
},{}],"mIGv":[function(require,module,exports) {
module.exports="/go-fish/5_of_clubs.7c86be97.png";
},{}],"ds3O":[function(require,module,exports) {
module.exports="/go-fish/5_of_diamonds.8d72350b.png";
},{}],"m8CC":[function(require,module,exports) {
module.exports="/go-fish/5_of_hearts.ba3fc719.png";
},{}],"Jhd8":[function(require,module,exports) {
module.exports="/go-fish/5_of_spades.59154333.png";
},{}],"znAp":[function(require,module,exports) {
module.exports="/go-fish/6_of_clubs.e7453edd.png";
},{}],"SRPF":[function(require,module,exports) {
module.exports="/go-fish/6_of_diamonds.79410a3d.png";
},{}],"yr7Y":[function(require,module,exports) {
module.exports="/go-fish/6_of_hearts.375e7b9e.png";
},{}],"mns2":[function(require,module,exports) {
module.exports="/go-fish/6_of_spades.f0e1aa3f.png";
},{}],"pNIr":[function(require,module,exports) {
module.exports="/go-fish/7_of_clubs.02b80795.png";
},{}],"kpgy":[function(require,module,exports) {
module.exports="/go-fish/7_of_diamonds.6f98a06d.png";
},{}],"x6oH":[function(require,module,exports) {
module.exports="/go-fish/7_of_hearts.b6ac6a89.png";
},{}],"dmb8":[function(require,module,exports) {
module.exports="/go-fish/7_of_spades.f50a874d.png";
},{}],"CqMD":[function(require,module,exports) {
module.exports="/go-fish/8_of_clubs.49c34e8d.png";
},{}],"RRmV":[function(require,module,exports) {
module.exports="/go-fish/8_of_diamonds.af36cb38.png";
},{}],"uYfg":[function(require,module,exports) {
module.exports="/go-fish/8_of_hearts.e2ddac74.png";
},{}],"UkE7":[function(require,module,exports) {
module.exports="/go-fish/8_of_spades.1498487d.png";
},{}],"EpJC":[function(require,module,exports) {
module.exports="/go-fish/9_of_clubs.7a822b9f.png";
},{}],"L66U":[function(require,module,exports) {
module.exports="/go-fish/9_of_diamonds.73d595c3.png";
},{}],"p70r":[function(require,module,exports) {
module.exports="/go-fish/9_of_hearts.0c196e3d.png";
},{}],"Qa9B":[function(require,module,exports) {
module.exports="/go-fish/9_of_spades.33dbaa6d.png";
},{}],"vGmj":[function(require,module,exports) {
module.exports="/go-fish/ace_of_clubs.4307749c.png";
},{}],"FYJp":[function(require,module,exports) {
module.exports="/go-fish/ace_of_diamonds.cbdcd46d.png";
},{}],"nYMz":[function(require,module,exports) {
module.exports="/go-fish/ace_of_hearts.308d0999.png";
},{}],"tTlh":[function(require,module,exports) {
module.exports="/go-fish/ace_of_spades.2990dd7d.png";
},{}],"Q4CK":[function(require,module,exports) {
module.exports="/go-fish/back.86871266.png";
},{}],"LLvG":[function(require,module,exports) {
module.exports="/go-fish/background.81a616f0.png";
},{}],"JX9P":[function(require,module,exports) {
module.exports="/go-fish/black_joker.64147b14.png";
},{}],"dXIa":[function(require,module,exports) {
module.exports="/go-fish/card-deck-1.b7fd1a2c.png";
},{}],"mM2u":[function(require,module,exports) {
module.exports="/go-fish/card-deck-2.76c5cbb3.png";
},{}],"mxEz":[function(require,module,exports) {
module.exports="/go-fish/card-deck-3.3306c92f.png";
},{}],"CVLK":[function(require,module,exports) {
module.exports="/go-fish/card-deck-4.124ac9d8.png";
},{}],"hvLs":[function(require,module,exports) {
module.exports="/go-fish/card-deck.9a98db00.png";
},{}],"IeN3":[function(require,module,exports) {
module.exports="/go-fish/jack_of_clubs.33a19119.png";
},{}],"w0xI":[function(require,module,exports) {
module.exports="/go-fish/jack_of_diamonds.dbd31296.png";
},{}],"lTB1":[function(require,module,exports) {
module.exports="/go-fish/jack_of_hearts.7acad083.png";
},{}],"NtzS":[function(require,module,exports) {
module.exports="/go-fish/jack_of_spades.58dd08dd.png";
},{}],"QWmc":[function(require,module,exports) {
module.exports="/go-fish/king_of_clubs.3e89dca9.png";
},{}],"Tqs2":[function(require,module,exports) {
module.exports="/go-fish/king_of_diamonds.c64a4b30.png";
},{}],"Jtiq":[function(require,module,exports) {
module.exports="/go-fish/king_of_hearts.2687785b.png";
},{}],"NJrX":[function(require,module,exports) {
module.exports="/go-fish/king_of_spades.8686e213.png";
},{}],"KdMa":[function(require,module,exports) {
module.exports="/go-fish/queen_of_clubs.82df1278.png";
},{}],"WjTy":[function(require,module,exports) {
module.exports="/go-fish/queen_of_diamonds.b2b23b7b.png";
},{}],"dNk1":[function(require,module,exports) {
module.exports="/go-fish/queen_of_hearts.fb4c411b.png";
},{}],"kSUd":[function(require,module,exports) {
module.exports="/go-fish/queen_of_spades.436334cd.png";
},{}],"uCkV":[function(require,module,exports) {
module.exports="/go-fish/red_joker.a6868c4d.png";
},{}],"K79I":[function(require,module,exports) {
module.exports={"10_of_clubs":require("./10_of_clubs.png"),"10_of_diamonds":require("./10_of_diamonds.png"),"10_of_hearts":require("./10_of_hearts.png"),"10_of_spades":require("./10_of_spades.png"),"2_of_clubs":require("./2_of_clubs.png"),"2_of_diamonds":require("./2_of_diamonds.png"),"2_of_hearts":require("./2_of_hearts.png"),"2_of_spades":require("./2_of_spades.png"),"3_of_clubs":require("./3_of_clubs.png"),"3_of_diamonds":require("./3_of_diamonds.png"),"3_of_hearts":require("./3_of_hearts.png"),"3_of_spades":require("./3_of_spades.png"),"4_of_clubs":require("./4_of_clubs.png"),"4_of_diamonds":require("./4_of_diamonds.png"),"4_of_hearts":require("./4_of_hearts.png"),"4_of_spades":require("./4_of_spades.png"),"5_of_clubs":require("./5_of_clubs.png"),"5_of_diamonds":require("./5_of_diamonds.png"),"5_of_hearts":require("./5_of_hearts.png"),"5_of_spades":require("./5_of_spades.png"),"6_of_clubs":require("./6_of_clubs.png"),"6_of_diamonds":require("./6_of_diamonds.png"),"6_of_hearts":require("./6_of_hearts.png"),"6_of_spades":require("./6_of_spades.png"),"7_of_clubs":require("./7_of_clubs.png"),"7_of_diamonds":require("./7_of_diamonds.png"),"7_of_hearts":require("./7_of_hearts.png"),"7_of_spades":require("./7_of_spades.png"),"8_of_clubs":require("./8_of_clubs.png"),"8_of_diamonds":require("./8_of_diamonds.png"),"8_of_hearts":require("./8_of_hearts.png"),"8_of_spades":require("./8_of_spades.png"),"9_of_clubs":require("./9_of_clubs.png"),"9_of_diamonds":require("./9_of_diamonds.png"),"9_of_hearts":require("./9_of_hearts.png"),"9_of_spades":require("./9_of_spades.png"),ace_of_clubs:require("./ace_of_clubs.png"),ace_of_diamonds:require("./ace_of_diamonds.png"),ace_of_hearts:require("./ace_of_hearts.png"),ace_of_spades:require("./ace_of_spades.png"),back:require("./back.png"),background:require("./background.png"),black_joker:require("./black_joker.png"),"card-deck-1":require("./card-deck-1.png"),"card-deck-2":require("./card-deck-2.png"),"card-deck-3":require("./card-deck-3.png"),"card-deck-4":require("./card-deck-4.png"),"card-deck":require("./card-deck.png"),jack_of_clubs:require("./jack_of_clubs.png"),jack_of_diamonds:require("./jack_of_diamonds.png"),jack_of_hearts:require("./jack_of_hearts.png"),jack_of_spades:require("./jack_of_spades.png"),king_of_clubs:require("./king_of_clubs.png"),king_of_diamonds:require("./king_of_diamonds.png"),king_of_hearts:require("./king_of_hearts.png"),king_of_spades:require("./king_of_spades.png"),queen_of_clubs:require("./queen_of_clubs.png"),queen_of_diamonds:require("./queen_of_diamonds.png"),queen_of_hearts:require("./queen_of_hearts.png"),queen_of_spades:require("./queen_of_spades.png"),red_joker:require("./red_joker.png")};
},{"./10_of_clubs.png":"jfNh","./10_of_diamonds.png":"TrQ6","./10_of_hearts.png":"Epy7","./10_of_spades.png":"zsN8","./2_of_clubs.png":"h883","./2_of_diamonds.png":"ChUh","./2_of_hearts.png":"O0Uz","./2_of_spades.png":"zNzH","./3_of_clubs.png":"Y1lU","./3_of_diamonds.png":"dG6L","./3_of_hearts.png":"sl3d","./3_of_spades.png":"Z7Mk","./4_of_clubs.png":"mj1v","./4_of_diamonds.png":"msN6","./4_of_hearts.png":"T3jJ","./4_of_spades.png":"w1k1","./5_of_clubs.png":"mIGv","./5_of_diamonds.png":"ds3O","./5_of_hearts.png":"m8CC","./5_of_spades.png":"Jhd8","./6_of_clubs.png":"znAp","./6_of_diamonds.png":"SRPF","./6_of_hearts.png":"yr7Y","./6_of_spades.png":"mns2","./7_of_clubs.png":"pNIr","./7_of_diamonds.png":"kpgy","./7_of_hearts.png":"x6oH","./7_of_spades.png":"dmb8","./8_of_clubs.png":"CqMD","./8_of_diamonds.png":"RRmV","./8_of_hearts.png":"uYfg","./8_of_spades.png":"UkE7","./9_of_clubs.png":"EpJC","./9_of_diamonds.png":"L66U","./9_of_hearts.png":"p70r","./9_of_spades.png":"Qa9B","./ace_of_clubs.png":"vGmj","./ace_of_diamonds.png":"FYJp","./ace_of_hearts.png":"nYMz","./ace_of_spades.png":"tTlh","./back.png":"Q4CK","./background.png":"LLvG","./black_joker.png":"JX9P","./card-deck-1.png":"dXIa","./card-deck-2.png":"mM2u","./card-deck-3.png":"mxEz","./card-deck-4.png":"CVLK","./card-deck.png":"hvLs","./jack_of_clubs.png":"IeN3","./jack_of_diamonds.png":"w0xI","./jack_of_hearts.png":"lTB1","./jack_of_spades.png":"NtzS","./king_of_clubs.png":"QWmc","./king_of_diamonds.png":"Tqs2","./king_of_hearts.png":"Jtiq","./king_of_spades.png":"NJrX","./queen_of_clubs.png":"KdMa","./queen_of_diamonds.png":"WjTy","./queen_of_hearts.png":"dNk1","./queen_of_spades.png":"kSUd","./red_joker.png":"uCkV"}],"j9A4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.userScoreDisplay=exports.userResponse=exports.setsFound=exports.newGameButton=exports.displayHand=exports.deckRemaining=exports.deck=exports.compScoreDisplay=exports.compMessage=exports.compCards=exports.choiceButtonContainer=exports.choiceButtons=exports.cardImages=exports.cardDeck=void 0;var e=r(require("classic-deck"));function r(e){return e&&e.__esModule?e:{default:e}}var o=new e.default;exports.deck=o;var t=document.querySelector(".card-deck");exports.cardDeck=t;var s=require("../images/*.png");exports.cardImages=s;var c=document.querySelector(".choice-buttons");exports.choiceButtons=c;var a=document.querySelector(".choice-button-container");exports.choiceButtonContainer=a;var p=document.querySelector(".comp-cards");exports.compCards=p;var u=document.querySelector(".comp-message");exports.compMessage=u;var n=document.querySelector(".comp-score-display");exports.compScoreDisplay=n;var d=document.querySelector(".deck-remaining");exports.deckRemaining=d;var i=document.querySelector(".player-cards");exports.displayHand=i;var m=document.querySelector(".new-game");exports.newGameButton=m;var x=document.querySelector(".sets-found");exports.setsFound=x;var l=document.querySelector(".user-response");exports.userResponse=l;var y=document.querySelector(".user-score-display");exports.userScoreDisplay=y;
},{"classic-deck":"Rc6V","../images/*.png":"K79I"}],"UlHX":[function(require,module,exports) {
"use strict";function e(e){e.innerHTML=""}function t(e,t){var r=document.createElement("img");r.setAttribute("src",e),r.setAttribute("height","150px"),r.setAttribute("width","100px"),r.style.padding="10px 5px 10px 5px",t.appendChild(r)}function r(e){switch(e){case"J":return"jack";case"Q":return"queen";case"K":return"king";case"A":return"ace";default:return e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.clearCards=e,exports.appendNewCard=t,exports.getRankWord=r;
},{}],"zXeA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("ez-read"),r=require("./model/model"),a=require("./display-util"),t=n(require("./model/user"));function n(e){return e&&e.__esModule?e:{default:e}}function u(){(0,a.clearCards)(r.displayHand),t.default.hand.forEach(function(e){var t=d(e);(0,a.appendNewCard)(t,r.displayHand)})}function d(t){var n=(0,e.init)(t),u=(0,a.getRankWord)(n),d=s((0,e.last)(t));return r.cardImages["".concat(u,"_of_").concat(d)]}function s(e){switch(e){case"S":return"spades";case"H":return"hearts";case"D":return"diamonds";case"C":return"clubs";default:return"broken"}}var o=u;exports.default=o;
},{"ez-read":"Q45B","./model/model":"j9A4","./display-util":"UlHX","./model/user":"NHJT"}],"NHJT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=u(require("../update-user-display")),r=require("./model");function u(e){return e&&e.__esModule?e:{default:e}}var t={hand:[],score:0,updateScore:a,updateCards:e.default};function a(){r.userScoreDisplay.innerHTML="You: ".concat(t.score)}var o=t;exports.default=o;
},{"../update-user-display":"zXeA","./model":"j9A4"}],"oQD7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./model/model"),r=require("./display-util"),a=d(require("./model/comp"));function d(e){return e&&e.__esModule?e:{default:e}}function o(){(0,r.clearCards)(e.compCards),a.default.hand.forEach(function(a){var d=e.cardImages.back;(0,r.appendNewCard)(d,e.compCards)})}var t=o;exports.default=t;
},{"./model/model":"j9A4","./display-util":"UlHX","./model/comp":"zFHj"}],"zFHj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../update-comp-display")),s=require("./model");function t(e){return e&&e.__esModule?e:{default:e}}var o={guessOptions:[2,3,4,5,6,7,8,9,10,"J","Q","K","A"],updatedOptions:[2,3,4,5,6,7,8,9,10,"J","Q","K","A"],guess:"",hand:[],message:s.compMessage,updateCards:e.default,updateScore:u,resetGuessOptions:r,score:0};function u(){s.compScoreDisplay.innerHTML="Computer: ".concat(o.score)}function r(){o.guessOptions=o.updatedOptions}var a=o;exports.default=a;
},{"../update-comp-display":"oQD7","./model":"j9A4"}],"s3Fj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("ez-read"),t=require("./model/model"),r=require("./display-util"),n=u(require("./model/comp"));function u(e){return e&&e.__esModule?e:{default:e}}function i(u){var i=u.hand.map(function(t){return(0,e.init)(t)}),a=d((0,e.unique)(i),u);if(a){u.hand=u.hand.filter(function(t){return a!==(0,e.init)(t)}),n.default.updatedOptions=n.default.updatedOptions.filter(function(e){return e!=a}),u.updateCards(),u.score++,u.updateScore();var o=t.setsFound.innerHTML,f="".concat(o," ").concat((0,r.getRankWord)(a),"s, ");t.setsFound.innerHTML=f}}function d(t,r){for(var n=0,u=0;u<t.length;u++){for(var i=0;i<r.hand.length;i++)t[u]===(0,e.init)(r.hand[i])&&n++;if(4===n)return t[u];n=0}}var a=i;exports.default=a;
},{"ez-read":"Q45B","./model/model":"j9A4","./display-util":"UlHX","./model/comp":"zFHj"}],"nq0U":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./model/model");function a(){switch(e.deck.deck.length){case 38:c(e.cardImages["card-deck"],"150px","155px");break;case 4:c(e.cardImages["card-deck-4"],"150px","153px");break;case 3:c(e.cardImages["card-deck-3"],"150px","151px");break;case 2:c(e.cardImages["card-deck-2"],"150px","149px");break;case 1:c(e.cardImages["card-deck-1"],"150px","147px");break;default:return}}function c(a,c,r){e.cardDeck.setAttribute("src",a),e.cardDeck.setAttribute("height",c),e.cardDeck.setAttribute("width",r)}var r=a;exports.default=r;
},{"./model/model":"j9A4"}],"i7z0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("ez-read"),r=require("./display-util"),t=a(require("./model/comp")),u=a(require("./model/user"));function a(e){return e&&e.__esModule?e:{default:e}}function n(e,r){t.default.message.innerHTML=d(e,r),u.default.hand=u.default.hand.concat(r).sort(),t.default.updateCards(),u.default.updateCards()}function d(t,u){var a="I have ".concat(o(u.length)," ").concat((0,r.getRankWord)(t),"s");return 1===u.length&&(a=(0,e.init)(a)),a}function o(e){switch(e){case 1:return"one";case 2:return"two";case 3:return"three";case 4:return"four";default:return"error in game..."}}var s=n;exports.default=s;
},{"ez-read":"Q45B","./display-util":"UlHX","./model/comp":"zFHj","./model/user":"NHJT"}],"D5ci":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dealCards=r,exports.setInitialDisplay=a;var e=d(require("./model/user")),s=d(require("./model/comp")),t=require("./model/model");function d(e){return e&&e.__esModule?e:{default:e}}function r(t){t.reset(),e.default.hand=t.deal(7),s.default.hand=t.deal(7)}function a(){t.deckRemaining.innerHTML="Number of cards remaining: ".concat(t.deck.deck.length),e.default.updateCards(),t.choiceButtonContainer.classList.add("is-visible"),t.userResponse.classList.remove("is-visible"),setDeckDisplay(),s.default.score=0,e.default.score=0,e.default.updateScore(),s.default.updateScore(),s.default.message.innerHTML="Your Turn.",t.setsFound.innerHTML="Sets Found:"}
},{"./model/user":"NHJT","./model/comp":"zFHj","./model/model":"j9A4"}],"HJDO":[function(require,module,exports) {
"use strict";var e=require("ez-read"),t=l(require("./model/user")),a=l(require("./model/comp")),n=l(require("./take-out-sets")),s=l(require("./set-deck-display")),u=l(require("./correct-user-guess")),i=require("./display-util"),d=require("./init-game"),r=require("./model/model");function l(e){return e&&e.__esModule?e:{default:e}}function o(){(0,d.dealCards)(r.deck),(0,d.setInitialDisplay)()}function c(s){var i=f(s.target.id),d=a.default.hand.filter(function(t){return i!==(0,e.init)(t)}),r=a.default.hand.filter(function(t){return i===(0,e.init)(t)});a.default.hand=d,(0,e.empty)(r)||(0,e.empty)(a.default.hand)?(m(s.target.id),(0,n.default)(t.default),setTimeout(function(){p()},1500)):((0,u.default)(i,r),(0,n.default)(t.default))}function f(t){var a=(0,e.init)(t);return a.length>2&&(a=(0,e.head)(a.toUpperCase())),a}function m(n){t.default.hand=t.default.hand.concat(r.deck.deal(1)).sort(),r.deckRemaining.innerHTML="Number of cards remaining: ".concat(r.deck.deck.length),r.choiceButtonContainer.classList.remove("is-visible"),(0,e.empty)(r.deck.deck)?h():(a.default.message.innerHTML="No ".concat((0,e.init)(n),"s found, Go Fish!"),a.default.updateCards(),t.default.updateCards(),(0,s.default)())}function g(){a.default.hand=a.default.hand.concat(r.deck.deal(1)),r.deckRemaining.innerHTML="Number of cards remaining: ".concat(r.deck.deck.length),r.userResponse.classList.remove("is-visible"),(0,e.empty)(r.deck.deck)?h():(a.default.updateCards(),r.choiceButtonContainer.classList.add("is-visible"),a.default.message.innerHTML="Your Turn.",(0,n.default)(a.default),a.default.resetGuessOptions(),(0,s.default)())}function h(){r.choiceButtonContainer.classList.remove("is-visible"),r.userResponse.classList.remove("is-visible"),t.default.score>a.default.score?a.default.message.innerHTML="You Win!":t.default.score===a.default.score?a.default.message.innerHTML="Tie Game!":a.default.message.innerHTML="Sorry, you Lose :("}function k(n){var s=(0,e.any)(function(t){return(0,e.init)(t)==a.default.guess},t.default.hand),u=n.target.id;switch(!0){case s&&"yes"===u:L();break;case s&&"no"===u:a.default.message.innerHTML='HEY. NO CHEATING! ... try clicking "Yes"...';break;case(0,e.not)(s)&&"yes"===u:a.default.message.innerHTML='HEY. NO CHEATING! ... try clicking "No, Go Fish!"...';break;case(0,e.not)(s)&&"no"===u:g();break;default:console.log("error")}}function p(){a.default.guess=(0,e.randomChoice)(a.default.guessOptions),a.default.message.innerHTML="Computer: Do you have any ".concat((0,i.getRankWord)(a.default.guess),"s?"),r.userResponse.classList.add("is-visible")}function L(){var s=t.default.hand.filter(function(t){return a.default.guess!=(0,e.init)(t)}),u=t.default.hand.filter(function(t){return a.default.guess==(0,e.init)(t)});t.default.hand=s,a.default.hand=a.default.hand.concat(u),a.default.updateCards(),t.default.updateCards(),a.default.guessOptions=a.default.guessOptions.filter(function(e){return a.default.guess!==e}),(0,n.default)(a.default),setTimeout(function(){p()},1500)}r.newGameButton.addEventListener("click",o),r.choiceButtons.addEventListener("click",c),r.userResponse.addEventListener("click",k);
},{"ez-read":"Q45B","./model/user":"NHJT","./model/comp":"zFHj","./take-out-sets":"s3Fj","./set-deck-display":"nq0U","./correct-user-guess":"i7z0","./display-util":"UlHX","./init-game":"D5ci","./model/model":"j9A4"}]},{},["HJDO"], null)
//# sourceMappingURL=/go-fish/main.bc5aee79.js.map