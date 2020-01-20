"use strict";var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function(){return function e(t,i,n){function o(s,l){if(!i[s]){if(!t[s]){var a="function"==typeof require&&require;if(!l&&a)return a(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var h=i[s]={exports:{}};t[s][0].call(h.exports,function(e){var i=t[s][1][e];return o(i||e)},h,h.exports,e,t,i,n)}return i[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}}()({1:[function(e,t,i){var n=e("./factories/SvgEditorElementFactory"),o=e("./enums/SvgEditorElementTypes"),r=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;_classCallCheck(this,e),this._canvas=null==t?svgCanvas:t,this._elements={}}return _createClass(e,[{key:"createElement",value:function(t,i){var r=n.make(t,i);switch(r.type){case o.SYMBOL:r.id=this._canvas.getNextId()+"_"+r.getSymbol(),r.dom=this._canvas.addSvgElementFromJson({element:"path",curStyles:!0,attr:{d:r.getPathData(),id:r.id}});var s=r.getSize(),l=e.getRelativeScale(s.width,i.width),a=e.getRelativeScale(s.height,i.height);r.dom.setAttribute("transform","scale("+l+","+a+")"),this._canvas.recalculateDimensions(r.dom);var u=r.getPosition();this._canvas.moveSelectedElements(i.x-u.x,i.y-u.y,!1,[r.dom]);break;case o.IMAGE:r.id=this._canvas.getNextId()+"_image",r.dom=this._canvas.addSvgElementFromJson({element:"image",attr:{x:i.x,y:i.y,width:i.width,height:i.height,id:r.id,style:"pointer-events:inherit"}}),this._canvas.setHref(r.dom,i.base64),r.dom.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink")}return this._elements[r.id]=r,r}},{key:"findElementById",value:function(e){return!!this._elements[e]&&this._elements[e]}},{key:"findElementsByType",value:function(e){var t=[];for(var i in this._elements)this._elements[i].type===e&&t.push(this._elements[i]);return t}},{key:"getAllElements",value:function(){var e=[];for(var t in this._elements)e.push(this._elements[t]);return e}}],[{key:"getRelativeScale",value:function(e,t){return t/e}}]),e}();t.exports=r},{"./enums/SvgEditorElementTypes":9,"./factories/SvgEditorElementFactory":12}],2:[function(e,t,i){var n=e("../enums/SvgEditorSymbols"),o={};o[n.SUM]="m126.45467,174.437l-113.5001,134.29466c-2.49984,2.87774 -3,3.35722 -3,4.79624c0,3.35722 3,3.35722 8.99999,3.35722l263.99986,0l27.50014,-76.26003l-7.99999,0c-7.99999,23.02194 -28.99998,41.72712 -56.50014,50.36034c-4.99999,1.91849 -26.99998,9.113 -73.99996,9.113l-135.49978,0l110.99995,-131.41692c2,-2.87774 2.49984,-3.35752 2.49984,-4.79624c0,-1.43902 0,-1.43902 -2,-4.31676l-103.49978,-136.21315l125.99993,0c36.49982,0 109.99995,1.91849 131.99994,58.99388l7.99999,0l-27.50014,-71.46411l-263.99986,0c-8.99999,0 -8.99999,0.47977 -8.99999,9.59248l116.5001,153.95939l0,-0.00001zm0,0",o[n.SQRT]="M133.45757,302.23514L127.90965,175.37415L507.30505,174.22819L129.33541,174.2829C130.70946,215.61172 132.08352,256.94053 133.45757,298.26935L115.52818,284.66933L133.45757,302.23514z",t.exports=o},{"../enums/SvgEditorSymbols":10}],3:[function(e,t,i){window.Driver={SvgEditorDriver:e("./SvgEditorDriver"),SvgEditorElement:e("./elements/SvgEditorElement"),SvgEditorElementSize:e("./elements/SvgEditorElementSize"),SvgEditorElementPosition:e("./elements/SvgEditorElementPosition"),SvgEditorElementTypes:e("./enums/SvgEditorElementTypes"),SvgEditorSymbols:e("./enums/SvgEditorSymbols")}},{"./SvgEditorDriver":1,"./elements/SvgEditorElement":4,"./elements/SvgEditorElementPosition":5,"./elements/SvgEditorElementSize":6,"./enums/SvgEditorElementTypes":9,"./enums/SvgEditorSymbols":10}],4:[function(e,t,i){var n=function(){function e(t,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;_classCallCheck(this,e),this._width=t,this._height=i,this._x=n,this._y=o,this.dom=null,this.type=-1}return _createClass(e,[{key:"getSize",value:function(){throw"Method getSize not implemented"}},{key:"getPosition",value:function(){throw"Method getPosition not implemented"}}]),e}();t.exports=n},{}],5:[function(e,t,i){t.exports=function e(t,i){_classCallCheck(this,e),this.x=t,this.y=i}},{}],6:[function(e,t,i){t.exports=function e(t,i){_classCallCheck(this,e),this.width=t,this.height=i}},{}],7:[function(e,t,i){var n=e("../enums/SvgEditorElementTypes"),o=e("./SvgEditorElement"),r=e("./SvgEditorElementSize"),s=e("./SvgEditorElementPosition"),l=function(e){function t(e,i,o,r,s){_classCallCheck(this,t);var l=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,o,r));return l._base64=s,l.type=n.IMAGE,l}return _inherits(t,o),_createClass(t,[{key:"getSize",value:function(){return this._reloadSize(),new r(this._width,this._height)}},{key:"getPosition",value:function(){return this._reloadPosition(),new s(this._x,this._y)}},{key:"_reloadSize",value:function(){this.dom&&(this._width=this.dom.getBoundingClientRect().width,this._height=this.dom.getBoundingClientRect().height)}},{key:"_reloadPosition",value:function(){this.dom&&(this._x=this.dom.getBoundingClientRect().left,this._y=this.dom.getBoundingClientRect().top)}}]),t}();t.exports=l},{"../enums/SvgEditorElementTypes":9,"./SvgEditorElement":4,"./SvgEditorElementPosition":5,"./SvgEditorElementSize":6}],8:[function(e,t,i){var n=e("../enums/SvgEditorSymbols"),o=e("../enums/SvgEditorElementTypes"),r=e("./SvgEditorElement"),s=e("../exceptions/SvgEditorDriverSymbolNotDefinedError"),l=e("./SvgEditorElementSize"),a=e("./SvgEditorElementPosition"),u=e("../data/Symbols"),h=function(e){function t(e,i,r,l){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n.SUM;_classCallCheck(this,t);var h=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,r,l));if(!u[a])throw new s;return h._symbol=a,h._symbolData=u[a],h.type=o.SYMBOL,h}return _inherits(t,r),_createClass(t,[{key:"getPathData",value:function(){return this._symbolData}},{key:"getSymbol",value:function(){return this._symbol}},{key:"getSize",value:function(){return this._reloadSize(),new l(this._width,this._height)}},{key:"getPosition",value:function(){return this._reloadPosition(),new a(this._x,this._y)}},{key:"_reloadSize",value:function(){this.dom&&(this._width=this.dom.getBoundingClientRect().width,this._height=this.dom.getBoundingClientRect().height)}},{key:"_reloadPosition",value:function(){this.dom&&(this._x=this.dom.getBoundingClientRect().left,this._y=this.dom.getBoundingClientRect().top)}}]),t}();t.exports=h},{"../data/Symbols":2,"../enums/SvgEditorElementTypes":9,"../enums/SvgEditorSymbols":10,"../exceptions/SvgEditorDriverSymbolNotDefinedError":11,"./SvgEditorElement":4,"./SvgEditorElementPosition":5,"./SvgEditorElementSize":6}],9:[function(e,t,i){t.exports={SYMBOL:0,IMAGE:1,PATH:2}},{}],10:[function(e,t,i){t.exports={SUM:0,SQRT:1}},{}],11:[function(e,t,i){t.exports=function e(){_classCallCheck(this,e)}},{}],12:[function(e,t,i){var n=e("../enums/SvgEditorElementTypes"),o=e("../elements/SvgEditorSymbolElement"),r=e("../elements/SvgEditorImageElement"),s=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"make",value:function(e,t){switch(e){case n.SYMBOL:return new o(t.width,t.height,t.x,t.y,t.symbol);case n.IMAGE:return new r(t.width,t.height,t.x,t.y,t.base64)}}}]),e}();t.exports=s},{"../elements/SvgEditorImageElement":7,"../elements/SvgEditorSymbolElement":8,"../enums/SvgEditorElementTypes":9}]},{},[3]);