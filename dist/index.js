"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=f(function(g,n){
var l=require('@stdlib/ndarray-base-shape2strides/dist'),q=require('@stdlib/ndarray-base-strides2offset/dist'),m=require('@stdlib/ndarray-base-ctor/dist'),c=require('@stdlib/ndarray-base-numel/dist'),o=require('@stdlib/array-empty/dist'),y=require('@stdlib/buffer-alloc-unsafe/dist');function b(e,r,t){var u,s,i,a;return u=r.length,u>0?(i=c(r),a=l(r,t)):(i=1,a=[0]),e==="binary"?s=y(i):s=o(i,e),new m(e,s,r,a,q(r,a),t)}n.exports=b
});var x=v();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
