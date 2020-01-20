"use strict";var _slicedToArray=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var s,l=e[Symbol.iterator]();!(o=(s=l.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&l.return&&l.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}!function(){return function e(t,n,o){function r(s,l){if(!n[s]){if(!t[s]){var a="function"==typeof require&&require;if(!l&&a)return a(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var m=n[s]={exports:{}};t[s][0].call(m.exports,function(e){var n=t[s][1][e];return r(n||e)},m,m.exports,e,t,n,o)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)r(o[s]);return r}}()({1:[function(e,t,n){var o=e("./Symbol"),r=e("./enums/SymbolTypes"),i=function(e){function t(e,n,o,i,s){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,o,i,s,r.ALPHANUMERIC))}return _inherits(t,o),t}();t.exports=i},{"./Symbol":9,"./enums/SymbolTypes":15}],2:[function(e,t,n){var o=e("./Symbol"),r=e("./enums/SymbolTypes"),i=e("./enums/BracketTypes"),s=function(e){function t(e,n,o,s,l){_classCallCheck(this,t);var a=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,o,s,l,r.BRACKET));a.bracketType=i.CLOSE;var u=["lbracket","(",")","rbracket"];return u.indexOf(l)<u.length/2&&(a.minX-=o,a.maxX-=o,a.x-=o,a.bracketType=i.OPEN),a}return _inherits(t,o),t}();t.exports=s},{"./Symbol":9,"./enums/BracketTypes":13,"./enums/SymbolTypes":15}],3:[function(e,t,n){e("./enums/SymbolTypes");var o=e("./enums/RegionTypes"),r=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.ROOT;_classCallCheck(this,e),this.region_type=t,this.region_name=t,this.wall={left:0,bottom:1/0,right:1/0,top:0},this.symbols=[]}return _createClass(e,[{key:"addSymbol",value:function(e){this.symbols.push(e)}},{key:"setWall",value:function(e,t,n,o){if(!e.left)return e.length&&3==e.length?(this.wall.left=e[0][0],this.wall.bottom=e[0][1],this.wall.right=e[1][0],void(this.wall.top=e[1][1])):void(this.wall={left:e,bottom:o,right:n,top:t});this.wall=e}},{key:"hasElement",value:function(){return this.symbols.length>0}},{key:"apply",value:function(e,t,n){n||(n=function(){return!0}),t||(t=function(){return!0});for(var o=0;o<this.symbols.length;o++)if("lim"===this.symbols[o].value){for(var r=!1,i=0;i<this.symbols[o].subSymbols.length;i++)n(this.symbols[o].subSymbols[i])?(e(this.symbols[o].subSymbols[i]),this.symbols[o].subSymbols[i].apply(e,function(e){return!0},n),r=!0):this.symbols[o].subSymbols[i].apply(e,t,n);r?this.symbols[o].apply(e,function(e){return!0},n):this.symbols[o].apply(e,t,n)}else n(this.symbols[o])?(e(this.symbols[o]),this.symbols[o].apply(e,function(e){return!0},n)):this.symbols[o].apply(e,t,n)}}]),e}();t.exports=r},{"./enums/RegionTypes":14,"./enums/SymbolTypes":15}],4:[function(e,t,n){var o=e("./Symbol"),r=e("./enums/SymbolTypes"),i=function(e){function t(e,n,o,i,s){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,o,i,s,r.FRACTION))}return _inherits(t,o),t}();t.exports=i},{"./Symbol":9,"./enums/SymbolTypes":15}],5:[function(e,t,n){var o=e("./Symbol"),r=e("./enums/SymbolTypes"),i=function(e){function t(e,n,o,i,s){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,o,i,s,r.LIMIT))}return _inherits(t,o),t}();t.exports=i},{"./Symbol":9,"./enums/SymbolTypes":15}],6:[function(e,t,n){var o=e("./Symbol"),r=e("./enums/SymbolTypes"),i=function(e){function t(e,n,o,i,s){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,o,i,s,r.OPERATOR))}return _inherits(t,o),t}();t.exports=i},{"./Symbol":9,"./enums/SymbolTypes":15}],7:[function(e,t,n){var o=e("./enums/SymbolTypes"),r=e("./enums/BracketTypes"),i=e("./Expression"),s=(e("./Symbol"),e("./enums/RegionTypes")),l=e("./constant"),a=e("./SymbolFactory"),u=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"hor",value:function(t,n){if(t[n].type===o.FRACTION||t[n].type===o.BRACKET&&t[n].bracketType==r.OPEN||t[n].type===o.OPERATOR){var i=t[n].getWallCopy();i.left=t[n].maxX;var s=e.start(t,i);return-1==s?-1:e.overlap(s,t[n].wall,t)}for(var l=0;l<t.length;){if(e.isInRegion(t[n].wall,t[l])&&!t[l].marked&&t[n].maxX<=t[l].minX&&t[n].minY+.4*t[n].height<=t[l].y&&t[l].y<t[n].maxY-1*t[n].height/5)return e.overlap(l,t[n].wall,t);l++}return-1}},{key:"start",value:function(t,n){for(var r=-1,i=-1,s=0,l=-1,a=t.length;-1==r&&s<a;)!t[s].marked&&e.isInRegion(n,t[s])?r=s:s+=1;if(-1==r||i==r)return r;for(;s<a&&-1==i;)!t[s].marked&&t[s].type===o.LIMIT&&e.isInRegion(n,t[s])?i=s:s+=1;if(-1==i||i==r)return e.overlap(r,n,t);for(var u=t[i].maxY,m=t[i].minY;s>r;)t[s-=1].y<u&&t[s].y>=m&&(l=s);return l<i&&-1!=l?e.overlap(r,n,t):e.overlap(i,n,t)}},{key:"overlap",value:function(e,t,n){var r,i=e,s=t.top,l=t.bottom,a=!1,u=n.length;r=(n[e].type,o.FRACTION,n[e].width);for(var m=-1;i>0&&!a;)n[i-1].maxX<n[e].minX?a=!0:i-=1;for(;i<u&&n[i].minX<n[e].maxX;)!n[i].marked&&n[i].type===o.Fraction&&n[i].y>s&&n[i].y<=l&&n[i].minX<=n[e].x&&n[i].width>r?(r=n[i].width,m=i):i++;return-1==m?e:m}},{key:"isInRegion",value:function(e,t){return e.left<=t.x&&t.x<e.right&&e.top<=t.y&&t.y<=e.bottom}},{key:"parse",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!t){t=[];var n=svgCanvas.getSelectedElems().slice(0);0==n.__proto__.length&&(n=document.querySelectorAll('[id^="svg_eqn_"]'));for(var r=0;r<n.length;r++){var u=a.make(n[r]);u&&t.push(u)}}t.sort(function(e,t){var n=e.minX-t.minX;return 0==n?e.minY-t.minY:n});var m,y,c,h,T,p=new i,f=[],b=[],g=p.wall,E=e.start(t,g);for(-1!=E&&(t[E].setWall(g),b.push([E,p]),t[E].marked=!0);0!=b.length;)for(;0!=b.length;){var O=b.shift(),S=_slicedToArray(O,2);for(m=S[0],c=S[1],(h=t[m]).marked=!0,c.symbols.push(h),f.push([m,h]),g=t[m].wall,y=e.hor(t,m);-1!=y;){var R=t[m].wall;t[y].setWall(R),h=t[y];c.symbols.length;c.symbols.push(h),f.push([y,h]),t[m].wall.right=t[y].minX,t[y].type!==o.LIMIT||t[m].type!==o.BRACKET&&t[m].type!==o.FRACTION||(t[y].wall.left=t[m].maxX),t[m=y].marked=!0,y=e.hor(t,m)}for(f.push("EOBL");0!=f.length;){"EOBL"===f[f.length-1]&&f.pop();var C=f.pop(),v=_slicedToArray(C,2);m=v[0];var _=(h=v[1]).wall.top,x=h.wall.bottom,A=c.symbols.indexOf(h),B=A==c.symbols.length-1?h.wall.right:c.symbols[A+1].minX,w=h.minX;h.type===l.SYMBOL_TYPES.LIMIT&&(0==A?w=g.left:c.symbols[A-1].type===l.SYMBOL_TYPES.BRACKET?w=c.symbols[A-1].maxX:c.symbols[A-1].type===l.SYMBOL_TYPES.FRACTION&&(w=c.symbols[A-1].maxX));for(var k=h.minX,L=h.maxX,d=h.minY,I=h.maxY,P=d+.4*(I-d),N=I-.4*(I-d),X=[[[k,d],[L,_],s.ABOVE],[[k,x],[L,I],s.BELOW],[[L,P],[B,_],s.SUPER],[[L,x],[B,N],s.SUBSC],[[w,P],[k,_],s.TLEFT],[[w,x],[k,N],s.BLEFT],[[k,I],[L,d],s.CONTAINS]],U=[s.ABOVE,s.BELOW,s.SUPER,s.SUBSC,s.TLEFT,s.BLEFT,s.CONTAINS],F=0;F<U.length;F++)h.region[U[F]].setWall(X[F]),-1!=(y=e.start(t,h.region[U[F]].wall))&&(t[y].marked=!0,t[y].setWall(h.region[U[F]].wall),T=h.region[U[F]],b.push([y,T]))}}return p}},{key:"getTex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.parse(),n="";if(t.symbols){t.region_name==s.ROOT&&(n+="$$");for(var r=0;r<t.symbols.length;r++){n+=e.getTex(t.symbols[r])}return n.indexOf("lim")>=0&&(n=n.replace("li "," ")),t.region_name==s.ROOT&&(n=(n+="$$").replace(/arcsin|arccos|arctan|cosh|sinh|tanh|cos|sin|tan/gi,function(e){return" \\"+e+" "})),n}var i=t.value,a=t,u=t.type;return u===o.LIMIT?(n+=l.TEX_TEXT[i]+" ",t.hasAnyBottom()&&(n+="_{"+e.getTex(t.region[s.BLEFT])+e.getTex(t.region[s.BELOW])+e.getTex(t.region[s.SUBSC])+"} "),t.hasAnyTop()&&(n+="^{"+e.getTex(t.region[s.TLEFT])+e.getTex(t.region[s.ABOVE])+e.getTex(t.region[s.SUPER])+"} ")):u===o.FRACTION?t.hasAnyTop()&&t.hasAnyBottom()?(n+=l.TEX_TEXT.fraction,n+="{",n+=e.getTex(t.region[s.TLEFT])+e.getTex(t.region[s.ABOVE])+e.getTex(t.region[s.SUPER]),n+="}{",n+=e.getTex(t.region[s.BLEFT])+e.getTex(t.region[s.BELOW])+e.getTex(t.region[s.SUBSC]),n+="} "):t.hasAnyBottom()?(n+=l.TEX_TEXT.overline,n+="{"+e.getTex(t.region[s.BLEFT])+e.getTex(t.region[s.BELOW])+e.getTex(t.region[s.SUBSC])+"}"):t.hasAnyTop()?(n+=l.TEX_TEXT.underline,n+="{"+e.getTex(t.region[s.TLEFT])+e.getTex(t.region[s.ABOVE])+e.getTex(t.region[s.SUPER])+"}"):n+=" - ":u===o.ROOT?(n+=l.TEX_TEXT[i]+"{"+e.getTex(t.region[s.CONTAINS])+"} ",t.region[s.SUPER].hasElement()&&(n+="^{"+e.getTex(t.region[s.SUPER])+"} "),t.region[s.SUBSC].hasElement()&&(n+="_{"+e.getTex(t.region[s.SUBSC])+"} ")):u===o.BRACKET?(n+=l.TEX_TEXT[i],a.bracketType==l.BRACKET_TYPES.CLOSE&&(t.region[s.SUPER].hasElement()&&(n+="^{"+e.getTex(t.region[s.SUPER])+"}"),t.region[s.SUBSC].hasElement()&&(n+="_{"+e.getTex(t.region[s.SUBSC])+"} "))):u==o.OPERATOR?n+=l.TEX_TEXT[i]:(n+=i,t.region[s.SUPER].hasElement()&&(n+="^{"+e.getTex(t.region[s.SUPER])+"}"),t.region[s.SUBSC].hasElement()&&(n+="_{"+e.getTex(t.region[s.SUBSC])+"}")),n}}]),e}();t.exports=u},{"./Expression":3,"./Symbol":9,"./SymbolFactory":10,"./constant":12,"./enums/BracketTypes":13,"./enums/RegionTypes":14,"./enums/SymbolTypes":15}],8:[function(e,t,n){var o=e("./Symbol"),r=e("./enums/SymbolTypes"),i=function(e){function t(e,n,o,i,s){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,o,i,s,r.ROOT))}return _inherits(t,o),t}();t.exports=i},{"./Symbol":9,"./enums/SymbolTypes":15}],9:[function(e,t,n){e("./enums/SymbolTypes");var o=e("./enums/RegionTypes"),r=e("./Expression"),i=function(){function e(t,n,i,s,l,a){if(_classCallCheck(this,e),this.constructor===e)throw new Error("Abstract Class Instatiation Error");this.type=a,this.minX=t,this.minY=n,this.maxX=t+i,this.maxY=n+s,this.value=l,this.width=i,this.height=s,this.x=(this.minX+this.maxX)/2,this.y=(this.minY+this.maxY)/2,this.region={};for(var u in o)this.region[o[u]]=new r(o[u]);this.wall={},this.size=i*s}return _createClass(e,[{key:"hasAnyTop",value:function(){return this.region[o.TLEFT].hasElement()||this.region[o.ABOVE].hasElement()||this.region[o.SUPER].hasElement()}},{key:"hasAnyBottom",value:function(){return this.region[o.BLEFT].hasElement()||this.region[o.BELOW].hasElement()||this.region[o.SUBSC].hasElement()}},{key:"setWall",value:function(e){this.wall.top=e.top,this.wall.bottom=e.bottom,this.wall.left=e.left,this.wall.right=e.right}},{key:"getWallCopy",value:function(){return{top:this.wall.top,bottom:this.wall.bottom,left:this.wall.left,right:this.wall.right}}},{key:"apply",value:function(e,t,n){for(var o in this.region)if(this.region[o].hasElement()){var r=t(this.region[o]);this.region[o].apply(e,t,function(e){return r&&n(e)})}}}]),e}();t.exports=i},{"./Expression":3,"./enums/RegionTypes":14,"./enums/SymbolTypes":15}],10:[function(e,t,n){e("./Symbol");var o=e("./AlphanumericSymbol"),r=e("./BracketSymbol"),i=e("./FractionSymbol"),s=e("./LimitSymbol"),l=e("./OperatorSymbol"),a=e("./RootSymbol"),u=e("./enums/SymbolTypes"),m=e("./constant");var y=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"make",value:function(e){if(" "==e.textContent||"g"==e.tagName)return null;var t,n,y=svgedit.utilities.getBBox(e),c=y.x,h=y.y,T=y.width,p=y.height,f="path"==e.nodeName?e.id.split("_")[3]:e.textContent;switch(t=f,-1!=m.BRACKET.indexOf(t)?u.BRACKET:-1!=m.LINE.indexOf(t)?u.FRACTION:-1!=m.ROOT.indexOf(t)?u.ROOT:-1!=m.LIMIT.indexOf(t)?u.LIMIT:-1!=m.OPERATOR.indexOf(t)?u.OPERATOR:u.ALPHANUMERIC){case u.BRACKET:n=new r(c,h,T,p,f);break;case u.FRACTION:n=new i(c,h,T,p,f);break;case u.ROOT:n=new a(c,h,T,p,f);break;case u.LIMIT:n=new s(c,h,T,p,f);break;case u.ALPHANUMERIC:n=new o(c,h,T,p,f);break;case u.OPERATOR:n=new l(c,h,T,p,f);break;default:throw"Cannot have any other symbol than type."}return n.id=e.id,n}}]),e}();t.exports=y},{"./AlphanumericSymbol":1,"./BracketSymbol":2,"./FractionSymbol":4,"./LimitSymbol":5,"./OperatorSymbol":6,"./RootSymbol":8,"./Symbol":9,"./constant":12,"./enums/SymbolTypes":15}],11:[function(e,t,n){window.Tool={RecognitionTool:e("./RecognitionTool")}},{"./RecognitionTool":7}],12:[function(e,t,n){var o;t.exports={REGION_NAMES:{ROOT:"root",TLEFT:"tleft",ABOVE:"above",SUPERS:"supers",CONTAINS:"contains",BLEFT:"bleft",BELOW:"below",SUSC:"subsc"},SYMBOL_TYPES:{ALPHANUMERIC:"text",TEXT:"text",LIMIT:"limit",FRACTION:"fraction",BRACKET:"bracket",ROOT:"root",OPERATOR:"operator"},BRACKET_TYPES:{OPEN:"open",CLOSE:"close"},TEX_TEXT:(o={sum:" \\sum ",lim:" \\lim ","∑":" \\sum ",fraction:" \\frac ",root:" \\sqrt ",integral:" \\int","∫":" \\int ",lbracket:" \\left( ",rbracket:" \\right) ","(":" \\left( ",")":" \\right) ","±":" \\pm ","∓":" \\mp ","+":" + ","×":" \\times ","—":" - ",overline:" \\overline ",underline:" \\underline ","<":" \\lt ","≤":" \\le ",">":" \\gt ","≥":" \\ge ","=":" = ","→":" \\to "},_defineProperty(o,"lim"," \\lim "),_defineProperty(o,"->","\\to "),o),BRACKET:["lbracket","(",")","rbracket"],LINE:["fraction","—"],ROOT:["root"],LIMIT:["sum","∑","integral","∫","lim"],OPERATOR:["+","±","∓","<",">","≤","≥","=","×","→"]}},{}],13:[function(e,t,n){t.exports={OPEN:"open",CLOSE:"close"}},{}],14:[function(e,t,n){t.exports={ROOT:"ROOT",TLEFT:"TLEFT",ABOVE:"ABOVE",SUPER:"SUPER",CONTAINS:"CONTAINS",BLEFT:"BLEFT",BELOW:"BELOW",SUBSC:"SUBSC"}},{}],15:[function(e,t,n){t.exports={ALPHANUMERIC:"ALPHANUMERIC",BRACKET:"BRACKET",FRACTION:"FRACTION",LIMIT:"LIMIT",OPERATOR:"OPERATION",ROOT:"ROOT"}},{}]},{},[11]);