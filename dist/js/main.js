!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";window.addEventListener("load",(function(){!function(){if(!document.querySelector(".counter__wrap"))return;const e=new Date(2021,8,5),t=document.querySelector(".counter__item.mins"),n=document.querySelector(".counter__item.hours"),r=document.querySelector(".counter__item.days");function o(e,t){const n=t.toString();if(n.length<2)return e.children[0].innerHTML="0",void(e.children[1].innerHTML=n);e.children[0].innerHTML=n[0],e.children[1].innerHTML=n[1]}function u(){const u=new Date,i=(c=e,l=new Date(u.getFullYear(),u.getMonth()+1,u.getDate()),(c-l)/864e5);var c,l;const f=23-u.getHours(),a=60-u.getMinutes();o(r,i),o(n,f),o(t,a)}u(),setInterval(()=>{u()},6e4)}()}))}]);