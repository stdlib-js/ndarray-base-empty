"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=q(function(A,n){
var f=require('@stdlib/ndarray-base-shape2strides/dist'),m=require('@stdlib/ndarray-base-strides2offset/dist'),o=require('@stdlib/ndarray-base-dtype-resolve-str/dist'),c=require('@stdlib/ndarray-base-ctor/dist'),y=require('@stdlib/ndarray-base-numel/dist'),d=require('@stdlib/array-empty/dist'),b=require('@stdlib/buffer-alloc-unsafe/dist');function x(e,r,u){var v,t,i,a,s;return v=r.length,v>0?(i=y(r),a=f(r,u)):(i=1,a=[0]),s=o(e),s==="binary"?t=b(i):t=d(i,s),new c(e,t,r,a,m(r,a),u)}n.exports=x
});var g=l();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
