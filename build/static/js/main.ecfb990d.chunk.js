(this["webpackJsonpefishery-task"]=this["webpackJsonpefishery-task"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t),n.d(t,"API_URL",(function(){return c})),n.d(t,"LOGO_ALT",(function(){return a})),n.d(t,"KOMODITAS",(function(){return r})),n.d(t,"PROVINSI",(function(){return i})),n.d(t,"KOTA",(function(){return s})),n.d(t,"UKURAN",(function(){return o})),n.d(t,"HARGA",(function(){return l})),n.d(t,"URUTKAN",(function(){return u}));var c="https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/",a="Logo",r="komoditas",i="provinsi",s="kota",o="ukuran",l="harga",u="urutkan"},14:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}));var c="TOGGLE_MENU",a="SET_MODAL_STATUS"},17:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));var c="SET_LIST",a="SET_QUERY_LIST"},27:function(e,t,n){"use strict";n(1);var c=n(2);t.a=function(){return Object(c.jsx)("div",{className:"loading-general d-flex justify-content-center align-items-center",style:{height:"100vh"},children:Object(c.jsxs)("div",{className:"lds-ripple",children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})})}},29:function(e,t,n){"use strict";n(1);var c=n(2);t.a=function(e){var t=e.type,n=e.label,a=e.action,r=e.className,i=e.Icon;return Object(c.jsxs)("button",{onClick:function(){return a()},className:"btn custom-btn ".concat(t,"-btn ").concat(r),children:[i&&Object(c.jsx)(i,{}),n]})}},41:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(16),r=n.n(a),i=(n(41),n(36)),s=n(5),o=n(17),l=[{title:"Content List",container:Object(c.lazy)((function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,204))})),exact:!0,path:"/",searchAction:o.b}],u=n(15),d=n(19),j=n(31),b=n(10),h=n(11),f={list:[],originalList:[],queryList:{}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.a:return Object(b.a)(Object(b.a)({},e),{},{list:t.data,originalList:t.data});case o.b:var n=Object(b.a)(Object(b.a)({},e.queryList),t.data),c=e.originalList,a=n.search?n.search.toLowerCase():"",r=c.filter((function(e){return e.komoditas&&e.komoditas.toLowerCase().indexOf(a)>-1||e.area_provinsi&&e.area_provinsi.toLowerCase().indexOf(a)>-1||e.area_kota&&e.area_kota.toLowerCase().indexOf(a)>-1||(e.size&&e.size.toLowerCase().indexOf(a))>-1||(e.price&&e.price.toLowerCase().indexOf(a))>-1})),i=n[h.PROVINSI]?n[h.PROVINSI].value.toLowerCase():"",s=n[h.KOTA]?n[h.KOTA].value.toLowerCase():"",l=n[h.UKURAN]?n[h.UKURAN].value.toLowerCase():"",u=r.filter((function(e){return e.area_provinsi&&e.area_provinsi.toLowerCase().indexOf(i)>-1&&e.area_kota&&e.area_kota.toLowerCase().indexOf(s)>-1&&(e.size&&e.size.toLowerCase().indexOf(l))>-1})),d=n[h.URUTKAN];if(d){var j=d.value.split("-");u.sort((function(e,t){var n="size"===j[0]||"price"===j[0]?parseInt(e[j[0]]):e[j[0]],c="size"===j[0]||"price"===j[0]?parseInt(t[j[0]]):t[j[0]];return"asc"===j[1]?n<c?-1:n>c?1:0:n>c?-1:n<c?1:0}))}return Object(b.a)(Object(b.a)({},e),{},{queryList:n,list:u});default:return e}},x=n(13),m=n(14),v={menuList:[{title:"Dashboard",icon:x.d,url:"#"},{title:"Content",icon:x.a,url:"/"}],showMenu:!1,showModal:!1},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.b:return Object(b.a)(Object(b.a)({},e),{},{showMenu:!e.showMenu});case m.a:return Object(b.a)(Object(b.a)({},e),{},{showModal:t.data});default:return e}},g=Object(d.b)({content:O,general:p});var w=n(32),N=n(26),y=n.n(N),L=n(27),k=n(29),A=n(2),C=function(e){var t=e.title,n=e.searchAction,c=Object(u.b)();return Object(A.jsxs)("div",{className:"header-layout background-white d-flex with-shadow",children:[Object(A.jsx)("h1",{className:"font-600 color-primary font-22",children:t}),Object(A.jsxs)("div",{className:"d-flex align-items-center flex-grow-1 justify-content-end align-items-center",children:[Object(A.jsx)(k.a,{type:"primary",label:"+ Add New",action:function(){c({type:m.a,data:!0})}}),Object(A.jsxs)("div",{className:"search-form d-flex with-shadow",children:[Object(A.jsx)(x.f,{className:"color-greyLight mr-8p font-20"}),Object(A.jsx)("input",{type:"text",placeholder:"Looking for...",className:"form-control form-control-custom",onChange:function(e){return t=e.target.value,void c({type:n,data:{search:t}});var t}})]})]})]})},_=n.p+"static/media/logo.a6dfcd55.png",T=function(){var e=Object(s.f)(),t=Object(s.g)(),n=Object(u.b)(),c=Object(u.c)((function(e){return e.general})),a=c.menuList,r=c.showMenu;return Object(A.jsxs)("div",{className:"sidebar-layout background-white",children:[Object(A.jsxs)("div",{className:"logo-content d-flex align-items-center background-primary",children:[Object(A.jsx)("img",{src:_,alt:h.LOGO_ALT}),Object(A.jsx)("div",{className:"mobile-menu color-white font-32",children:Object(A.jsx)(x.e,{onClick:function(){return n({type:m.b})}})})]}),Object(A.jsx)("ul",{className:"sidebar-menu ".concat(r?"show":""),children:a.map((function(n,c){return Object(A.jsxs)("li",{onClick:function(){return e.push(n.url)},className:"d-flex align-items-center font-18 font-400 ".concat(n.url===t.pathname?"active":""),children:[Object(A.jsx)("span",{className:"mr-20p",children:Object(A.jsx)(n.icon,{})})," ",n.title]},c)}))})]})},I=(n(50),function(e){var t=e.Container,n=e.title,a=e.searchAction;return Object(A.jsxs)(c.Fragment,{children:[Object(A.jsx)(w.a,{children:Object(A.jsxs)("title",{children:["Efishery Management System - ",n]})}),Object(A.jsx)(c.Suspense,{fallback:Object(A.jsx)(L.a,{}),children:Object(A.jsxs)("div",{className:"main-layout d-flex",children:[Object(A.jsx)(y.a,{}),Object(A.jsx)(T,{}),Object(A.jsxs)("div",{className:"main-content",children:[Object(A.jsx)(C,{title:n,searchAction:a}),Object(A.jsx)("div",{className:"main-container",children:Object(A.jsx)(t,{})})]})]})})]})}),S=function(){return Object(A.jsx)("div",{className:"container",children:Object(A.jsx)("div",{className:"col-md-12 text-center d-flex align-items-center justify-content-center",style:{height:"100vh"},children:Object(A.jsxs)("div",{className:"d-inline-block",children:[Object(A.jsx)("span",{style:{borderRight:"1px solid #000000"},className:"d-inline-block py-1 px-4",children:"404"}),Object(A.jsx)("span",{className:"d-inline-block px-4",style:{letterSpacing:1},children:"Page Not Found!"})]})})})},U=function(){return Object(A.jsx)(c.Fragment,{children:Object(A.jsx)(u.a,{store:Object(d.c)(g,Object(d.a)(j.a)),children:Object(A.jsx)(i.a,{children:Object(A.jsxs)(s.c,{children:[l.map((function(e,t){var n=e.path,c=e.exact,a=e.container,r=e.title,i=e.searchAction;return Object(A.jsx)(s.a,{path:n,exact:c,render:function(){return Object(A.jsx)(I,{Container:a,title:r,searchAction:i})}},t)})),Object(A.jsx)(s.a,{render:function(){return Object(A.jsx)(S,{})}})]})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(A.jsx)(U,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,3]]]);
//# sourceMappingURL=main.ecfb990d.chunk.js.map