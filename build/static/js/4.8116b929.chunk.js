(this["webpackJsonpefishery-task"]=this["webpackJsonpefishery-task"]||[]).push([[4],{184:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){"use strict";n.r(t),n.d(t,"GetListAPI",(function(){return r})),n.d(t,"PostListAPI",(function(){return a})),n.d(t,"PutListAPI",(function(){return c})),n.d(t,"DeleteListAPI",(function(){return s})),n.d(t,"GetOptionArea",(function(){return i})),n.d(t,"GetOptionSize",(function(){return o}));var r={method:"read",url:"list"},a={method:"append",url:"list"},c={method:"edit",url:"list"},s={method:"delete",url:"list"},i={method:"read",url:"option_area"},o={method:"read",url:"option_size"}},189:function(e,t,n){"use strict";n.r(t),n.d(t,"apiService",(function(){return u}));var r=n(66),a=n.n(r),c=n(67),s=n(26),i=n(11).API_URL,o=new(n(190))(i),u=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],c=t.method,i=t.url,e.next=4,o[c](i,n).then((function(e){r=e})).catch((function(e){s.notify.show("On Error while request data!","error"),r=e.response}));case 4:return e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},195:function(e,t,n){"use strict";n.r(t),n.d(t,"optionObject",(function(){return r}));var r=function(e){return{value:e,label:e}}},204:function(e,t,n){"use strict";n.r(t);var r,a=n(66),c=n.n(a),s=n(67),i=n(198),o=n(1),u=n(15),l=n(196),d=n(28),f=n(11),p=(r={},Object(d.a)(r,f.KOMODITAS,{type:"text",required:!0,placeholder:"Nama Komoditas"}),Object(d.a)(r,f.PROVINSI,{type:"select",required:!0,options:[],placeholder:"Pilih Provinsi"}),Object(d.a)(r,f.KOTA,{type:"select",required:!0,options:[],placeholder:"Pilih Kota"}),Object(d.a)(r,f.UKURAN,{type:"select",required:!0,options:[],placeholder:"Pilih Ukuran (cm)"}),Object(d.a)(r,f.HARGA,{type:"currency",required:!0,placeholder:"IDR."}),Object(d.a)(r,"Simpan Content",{type:"submit"}),r),j=n(17),b=n(14),O=n(106),h=n.n(O),m=n(13),v=n(185),x=n(183),y=n.n(x),N=(n(184),n(2)),A=function(e){var t,n=e.data,r=e.editContent,a=e.deleteContent,c=e.index;return Object(N.jsx)("div",{className:"single-content custom-card mb-20p d-flex align-items-center",children:Object(N.jsxs)(o.Fragment,{children:[Object(N.jsx)("div",{className:"icon d-flex justify-content-center align-items-center",children:Object(N.jsx)(v.a,{})}),Object(N.jsxs)("div",{className:"ml-16p detail-content flex-grow-1",children:[Object(N.jsxs)("h4",{className:"font-16 font-600 mb-8p d-flex justify-content-between",children:[n.komoditas," ",Object(N.jsxs)("span",{className:"font-10 color-grey font-300",children:["(",n.size,"cm)"]})]}),Object(N.jsx)("h6",{className:"font-12 font-300 color-grey text-capitalize",children:"".concat(n.area_provinsi.toLowerCase()," - ").concat(n.area_kota.toLowerCase())}),Object(N.jsx)("h5",{className:"font-14 font-700 color-primary mt-4p",children:(t=n.price,y()(t,{separator:",",symbol:"IDR ",precision:0}).format())}),Object(N.jsx)("h5",{className:"font-12 font-300 color-grey",children:h()(n.tgl_parsed).format("MMM Do YYYY")})]}),Object(N.jsxs)("div",{className:"action-content d-flex font-20",children:[Object(N.jsx)(m.b,{title:"Edit",className:"mr-16p cursor-pointer color-primary",onClick:function(){return r(c)}}),Object(N.jsx)(m.h,{title:"Delete",className:"cursor-pointer color-error",onClick:function(){return a(c)}})]})]})})},w=n(27),g=(n(186),function(e){var t=e.title,n=e.Container,r=e.onLoad,a=Object(u.b)(),c=Object(u.c)((function(e){return e.general})).showModal;return Object(N.jsx)(o.Fragment,{children:Object(N.jsx)("div",{className:"modal-overlay d-flex align-items-center ".concat(c?"":"d-none"),children:Object(N.jsx)("div",{className:"container-fluid",children:Object(N.jsx)("div",{className:"row justify-content-center",children:Object(N.jsxs)("div",{className:"col-lg-4 modal-component d-flex flex-column with-shadow",children:[Object(N.jsxs)("div",{className:"modal-title p-3 d-flex align-items-center justify-content-between with-shadow",children:[Object(N.jsx)("h4",{className:"font-20 font-500",children:t}),Object(N.jsx)(m.i,{onClick:function(){a({type:b.a,data:!1})},className:"font-26 cursor-pointer"})]}),Object(N.jsxs)("div",{className:"modal-body flex-grow-1",children:[Object(N.jsx)(n,{}),r&&Object(N.jsx)("div",{className:"modal-loading",children:Object(N.jsx)(w.a,{})})]})]})})})})})}),k=n(29),S=(n(187),function(e){var t=e.onClick;return Object(N.jsx)(o.Fragment,{children:Object(N.jsxs)("div",{className:"sort-filter-button with-shadow d-flex align-items-center justify-content-center",onClick:function(){return t()},children:[Object(N.jsx)(m.c,{title:"Filter"})," / ",Object(N.jsx)(m.g,{title:"Sort"})]})})}),I=n(10),K=n(26),P=n(205),R=n(188),U=R.GetOptionArea,T=R.GetOptionSize,V=R.GetListAPI,_=R.PostListAPI,C=R.PutListAPI,L=R.DeleteListAPI,q=n(189).apiService,z=n(195).optionObject,D=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,r,a,s,i,o,u,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(U);case 2:return n=e.sent,e.next=5,q(T);case 5:if(r=e.sent,a=[],r&&r.length>0)for(s=0;s<r.length;s++)a.push(z(r[s].size));if(i=[],o=[],n&&n.length>0)for(u=function(e){i.find((function(t){return t.label===n[e].province}))||i.push(z(n[e].province)),o.find((function(t){return t.label===n[e].city}))||o.push(z(n[e].city))},l=0;l<n.length;l++)u(l);return t[f.UKURAN].options=a,t[f.PROVINSI].options=i,t[f.KOTA].options=o,e.abrupt("return",t);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e,t){var n={};return n[f.PROVINSI]=Object(I.a)(Object(I.a)({},e[f.PROVINSI]),{},{required:!1,defaultValue:t[f.PROVINSI]?t[f.PROVINSI].value:""}),n[f.KOTA]=Object(I.a)(Object(I.a)({},e[f.KOTA]),{},{required:!1,defaultValue:t[f.KOTA]?t[f.KOTA].value:""}),n[f.UKURAN]=Object(I.a)(Object(I.a)({},e[f.UKURAN]),{},{required:!1,defaultValue:t[f.UKURAN]?t[f.UKURAN].value:""}),n[f.URUTKAN]={type:"select",required:!1,options:[{value:"komoditas-asc",label:"Komoditas (A-Z)"},{value:"komoditas-desc",label:"Komoditas (Z-A)"},{value:"area_provinsi-asc",label:"Provinsi (A-Z)"},{value:"area_provinsi-desc",label:"Provinsi (Z-A)"},{value:"area_kota-asc",label:"Kota (A-Z)"},{value:"area_kota-desc",label:"Kota (Z-A)"},{value:"price-asc",label:"Harga Termurah"},{value:"price-desc",label:"Harga Termahal"},{value:"size-asc",label:"Ukuran Terkecil"},{value:"size-desc",label:"Ukuran Terbesar"}],placeholder:"Tanggal dibuat (default)",defaultValue:t[f.URUTKAN]?t[f.URUTKAN].value:""},n["Submit Filter / Sort"]={type:"submit"},n},G=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,q(V);case 3:return(n=e.sent)&&n.length>0&&(t=n),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={status:!1},e.prev=1,r={uuid:Object(P.a)(),komoditas:t[f.KOMODITAS],area_provinsi:t[f.PROVINSI].value,area_kota:t[f.KOTA].value,size:t[f.UKURAN].value,price:t[f.HARGA],tgl_parsed:h()().format(),timestamp:h()().unix()},e.next=5,q(_,[r]);case 5:K.notify.show("Success create content","success"),n.status=!0,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),n.status=!1,K.notify.show("On Error on create content","error");case 13:return e.abrupt("return",n);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(s.a)(c.a.mark((function e(t,n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={status:!1},e.prev=1,a={komoditas:t[f.KOMODITAS],area_provinsi:t[f.PROVINSI].value,area_kota:t[f.KOTA].value,size:t[f.UKURAN].value,price:t[f.HARGA],tgl_parsed:h()().format(),timestamp:h()().unix()},e.next=5,q(C,{search:{uuid:n},set:a});case 5:K.notify.show("Success update content","success"),r.status=!0,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),r.status=!1,K.notify.show("On Error on update content","error");case 13:return e.abrupt("return",r);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}(),H=function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={status:!1},e.prev=1,e.next=4,q(L,{search:{uuid:t}});case 4:K.notify.show("Success delete content","success"),n.status=!0,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),n.status=!1,K.notify.show("On Error on delete content","error");case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.content})),n=Object(u.c)((function(e){return e.general})).showModal,r=t.list,a=t.queryList,d=Object(o.useState)(p),O=Object(i.a)(d,2),h=O[0],m=O[1],v=Object(o.useState)({}),x=Object(i.a)(v,2),y=x[0],I=x[1],K=Object(o.useState)(""),P=Object(i.a)(K,2),R=P[0],U=P[1],T=Object(o.useState)(""),V=Object(i.a)(T,2),_=V[0],C=V[1],L=Object(o.useState)(!1),q=Object(i.a)(L,2),z=q[0],Z=q[1],Y=Object(o.useState)(!1),J=Object(i.a)(Y,2),B=J[0],Q=J[1],W=Object(o.useState)(!1),X=Object(i.a)(W,2),$=X[0],ee=X[1],te=Object(o.useState)(!1),ne=Object(i.a)(te,2),re=ne[0],ae=ne[1],ce=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(h);case 2:t=e.sent,m(t),n=M(t,a),I(n),Q(!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var t=Object(s.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Z(!1),t.next=3,G();case 3:n=t.sent,Z(!0),e({type:j.a,data:n.filter((function(e){return e.uuid}))});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ie=function(){var t=Object(s.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return ee(!0),t.next=3,R?E(n,R.uuid):F(n);case 3:t.sent.status&&(se(),e({type:b.a,data:!1})),oe(""),ee(!1);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),oe=function(t){Q(!1);var n=""!==t?r[t]:t,a=function(e,t){return e[f.KOMODITAS].defaultValue=""!==t?t.komoditas:t,e[f.PROVINSI].defaultValue=""!==t?t.area_provinsi:t,e[f.KOTA].defaultValue=""!==t?t.area_kota:t,e[f.UKURAN].defaultValue=""!==t?t.size:t,e[f.HARGA].defaultValue=""!==t?t.price:t,e}(h,n);m(a),Q(!0),U(n),""!==t&&e({type:b.a,data:!0})},ue=function(){var t=Object(s.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=r[n],C(a),e({type:b.a,data:!0});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),le=function(){var t=Object(s.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return ee(!0),t.next=3,H(_.uuid);case 3:t.sent.status&&(C(""),se(),e({type:b.a,data:!1})),ee(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),de=function(t){e({type:b.a,data:!1}),e({type:j.b,data:t})};Object(o.useEffect)((function(){n||(ae(!1),C(""),oe(""))}),[n]),Object(o.useEffect)((function(){ce(),se()}),[]);return Object(N.jsxs)(o.Fragment,{children:[z?Object(N.jsxs)(o.Fragment,{children:[r.length>0?Object(N.jsx)("div",{className:"row",children:r.map((function(e,t){return Object(N.jsx)("div",{className:"col-lg-6",children:Object(N.jsx)(A,{data:e,editContent:oe,deleteContent:ue,index:t})},t)}))}):Object(N.jsx)("div",{className:"h-100 d-flex flex-column justify-content-center align-items-center",children:Object(N.jsx)("h5",{className:"font-400 font-24",children:"Empty List"})}),Object(N.jsx)(S,{onClick:function(){var t=M(y,a);I(t),e({type:b.a,data:!0}),ae(!0)}})]}):Object(N.jsx)(w.a,{}),Object(N.jsx)(g,{title:"".concat(re?"Filter/Sort":"Manage"," Content"),Container:function(){return Object(N.jsxs)(o.Fragment,{children:[!re&&""===_&&B&&Object(N.jsx)(l.a,{model:h,onSubmit:ie}),_&&Object(N.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(N.jsxs)("h5",{className:"mb-32p",children:["Are you sure you want to delete ",Object(N.jsx)("b",{children:_[f.KOMODITAS]})," ?"]}),Object(N.jsxs)("div",{className:"d-flex",children:[Object(N.jsx)(k.a,{type:"default",label:"No",action:function(){return C(""),void e({type:b.a,data:!1})},className:"mr-8p"}),Object(N.jsx)(k.a,{type:"danger",label:"Yes",action:function(){return le()}})]})]}),re&&Object(N.jsx)(l.a,{model:y,onSubmit:de})]})},onLoad:$})]})};Z.displayName="homepageContainer";t.default=Z}}]);
//# sourceMappingURL=4.8116b929.chunk.js.map