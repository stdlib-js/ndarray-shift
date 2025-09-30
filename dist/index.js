"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=s(function(l,a){
var u=require('@stdlib/assert-is-plain-object/dist'),o=require('@stdlib/assert-is-integer/dist').isPrimitive,m=require('@stdlib/assert-is-ndarray-like/dist'),d=require('@stdlib/assert-has-own-property/dist'),v=require('@stdlib/ndarray-base-shift/dist'),t=require('@stdlib/error-tools-fmtprodmsg/dist');function p(e){var r,i;if(!m(e))throw new TypeError(t('null4f',e));if(i={dim:-1},arguments.length>1){if(r=arguments[1],!u(r))throw new TypeError(t('null2V',r));if(d(r,"dim")){if(!o(r.dim))throw new TypeError(t('null8M',"dim",r.dim));i.dim=r.dim}}return v(e,i.dim,!1)}a.exports=p
});var f=n();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
