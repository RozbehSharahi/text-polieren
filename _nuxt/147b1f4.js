(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{335:function(t,n,e){var content=e(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(56).default)("0e34cc02",content,!0,{sourceMap:!1})},338:function(t,n,e){"use strict";e.r(n);e(342),e(76),e(39),e(22);var c=e(0).a.extend({props:{spacingX:{type:Number,default:20},spacingY:{type:Number,default:20},unit:{type:String,default:"px"}},computed:{spaceFix:function(){return{marginLeft:"".concat(-this.spacingX/2).concat(this.unit),marginRight:"".concat(-this.spacingX/2).concat(this.unit),marginTop:"".concat(-this.spacingY/2).concat(this.unit),marginBottom:"".concat(-this.spacingY/2).concat(this.unit)}}},watch:{spacingX:function(){this.setSpacesOnChildren()},spacingY:function(){this.setSpacesOnChildren()}},mounted:function(){this.setSpacesOnChildren()},methods:{setSpacesOnChildren:function(){for(var t=0,n=Array.from(this.$refs.grid.children);t<n.length;t++){var e=n[t];e.style.paddingLeft="".concat(this.spacingX/2).concat(this.unit),e.style.paddingRight="".concat(this.spacingX/2).concat(this.unit),e.style.paddingTop="".concat(this.spacingY/2).concat(this.unit),e.style.paddingBottom="".concat(this.spacingY/2).concat(this.unit)}}}}),r=(e(344),e(38)),component=Object(r.a)(c,(function(){var t=this,n=t._self._c;t._self._setupProxy;return n("div",[n("div",{ref:"grid",staticClass:"the-grid",style:t.spaceFix},[t._t("default")],2)])}),[],!1,null,"7cffa5f7",null);n.default=component.exports},342:function(t,n,e){"use strict";var c=e(11),r=e(4),o=e(5),f=e(123),h=e(19),l=e(14),d=e(231),N=e(51),m=e(91),v=e(230),y=e(3),I=e(92).f,_=e(40).f,E=e(18).f,w=e(343),x=e(232).trim,S="Number",A=r[S],O=A.prototype,T=r.TypeError,F=o("".slice),X=o("".charCodeAt),Y=function(t){var n=v(t,"number");return"bigint"==typeof n?n:C(n)},C=function(t){var n,e,c,r,o,f,h,code,l=v(t,"number");if(m(l))throw T("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=x(l),43===(n=X(l,0))||45===n){if(88===(e=X(l,2))||120===e)return NaN}else if(48===n){switch(X(l,1)){case 66:case 98:c=2,r=49;break;case 79:case 111:c=8,r=55;break;default:return+l}for(f=(o=F(l,2)).length,h=0;h<f;h++)if((code=X(o,h))<48||code>r)return NaN;return parseInt(o,c)}return+l};if(f(S,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var M,L=function(t){var n=arguments.length<1?0:A(Y(t)),e=this;return N(O,e)&&y((function(){w(e)}))?d(Object(n),e,L):n},k=c?I(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;k.length>R;R++)l(A,M=k[R])&&!l(L,M)&&E(L,M,_(A,M));L.prototype=O,O.constructor=L,h(r,S,L,{constructor:!0})}},343:function(t,n,e){var c=e(5);t.exports=c(1..valueOf)},344:function(t,n,e){"use strict";e(335)},345:function(t,n,e){var c=e(55)(!1);c.push([t.i,".the-grid[data-v-7cffa5f7]{display:flex;flex-wrap:wrap}.the-grid>*[data-v-7cffa5f7]{width:100%}",""]),t.exports=c}}]);