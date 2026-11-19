"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var l=q(function(A,n){
var f=require('@stdlib/ndarray-base-shape2strides/dist'),m=require('@stdlib/ndarray-base-strides2offset/dist'),o=require('@stdlib/ndarray-base-dtype-resolve-str/dist'),c=require('@stdlib/ndarray-base-ctor/dist'),y=require('@stdlib/ndarray-base-numel/dist'),d=require('@stdlib/array-empty/dist'),b=require('@stdlib/buffer-alloc-unsafe/dist');function x(e,r,i){var v,s,a,t,u;return v=r.length,v>0?(a=y(r),t=f(r,i)):(a=1,t=[0]),u=o(e),u==="binary"?s=b(a):s=d(a,u),new c(e,s,r,t,m(r,t),i)}n.exports=x
});var g=l();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
