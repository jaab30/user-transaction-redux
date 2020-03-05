(this["webpackJsonpuser-registration"]=this["webpackJsonpuser-registration"]||[]).push([[0],{27:function(e,t,a){e.exports=a(40)},32:function(e,t,a){},37:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),u=(a(32),a(12)),o=a(9),i=a(2),m=a(8),s=a(16),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_USER":return[].concat(Object(s.a)(e),[t.payload]).sort((function(e,t){return e.id>t.id?1:-1}));default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TRANSACTION":return[].concat(Object(s.a)(e),[t.payload]);case"DELETE_TRANSACTION":return t.payload;default:return e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CURRENT_USER":return t.payload;default:return e}},p=a(17),f={update:!1,ticket:!1,edit:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;return"TICKET_SWITCH"===t.type?Object(p.a)({},e,{ticket:t.payload}):"UPDATE_SWITCH"===t.type?Object(p.a)({},e,{update:t.payload}):"EDIT_SWITCH"===t.type?Object(p.a)({},e,{edit:t.payload}):e},O=Object(m.c)({userReducer:E,transactionReducer:d,chosenReducer:b,switchReducer:j}),h=a(25),v=Object(m.e)(O,Object(m.d)(Object(m.a)(h.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),g=a(1);function S(e){return r.a.createElement("form",e,e.children)}function N(e){return r.a.createElement("input",Object.assign({className:"form-control inputRound"},e))}function y(e){return r.a.createElement("textarea",Object.assign({className:"form-control textRound"},e))}function I(e){return r.a.createElement("button",{type:"submit",className:"btn btn-".concat(e.color)},e.children)}function T(e){return r.a.createElement("button",Object.assign({},e,{className:"btn btn-".concat(e.color)}),e.children)}var R=function(e){var t=e.title,a=e.text;return r.a.createElement("div",{className:"jumbotron jumbotron-fluid text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-5"},t),r.a.createElement("p",{className:"lead"},a)))};function D(e){return r.a.createElement("div",Object.assign({},e,{className:"container"}),e.children)}function C(e){return r.a.createElement("div",{className:"row"},e.children)}function w(e){return r.a.createElement("div",e,e.children)}function x(e){return r.a.createElement("p",e,e.children)}var _=function(e){return r.a.createElement("div",{className:"alert alert-success mt-3 mb-3 alertRound",role:"alert"},e.children)},k=function(e){return{type:"NEW_USER",payload:e}},U=function(e){return{type:"CURRENT_USER",payload:e}},F=function(e){return{type:"ADD_TRANSACTION",payload:e}},M=function(e){return{type:"UPDATE_SWITCH",payload:e}},Y=function(e){return{type:"TICKET_SWITCH",payload:e}},A=function(e){return{type:"EDIT_SWITCH",payload:e}};a(37);var W=function(){var e=Object(i.c)((function(e){return e.userReducer})),t=Object(i.b)(),a=Object(o.e)(),c=Object(n.useState)(""),l=Object(g.a)(c,2),u=l[0],m=l[1],s=Object(n.useState)(""),E=Object(g.a)(s,2),d=E[0],b=E[1],p=Object(n.useState)(!1),f=Object(g.a)(p,2),j=f[0],O=f[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{title:"User Registration",text:"Please Enter Your Credentials"}),r.a.createElement(D,null,r.a.createElement(S,{className:"mx-auto logInForm",onSubmit:function(n){var r;if(n.preventDefault(),u&&d)if(e.forEach((function(e){e.username===u&&e.email===d&&(r=e)})),r)t(U(r)),a.push("/details");else{var c=e.slice(-1)[0];t(k({id:e.length?c.id+1:1,username:u,email:d})),t(U({id:e.length?c.id+1:1,username:u,email:d})),O(!1),a.push("/details")}else O(!0)}},r.a.createElement(x,{className:"p_login"},"Username:"),r.a.createElement(N,{id:"username",type:"text",value:u,onChange:function(e){return m(e.target.value)},placeholder:"Enter Username"}),r.a.createElement(x,{className:"p_login"},"Email:"),r.a.createElement(N,{id:"email",type:"email",value:d,onChange:function(e){return b(e.target.value)},placeholder:"Enter email"}),r.a.createElement(I,{color:"primary round"},"Submit"),j?r.a.createElement(_,null,"Please Enter Username and Email"):"")))},L=a(11),P=a.n(L);function H(e){var t=e.children;return r.a.createElement("table",{className:"table"},t)}function X(e){var t=e.children;return r.a.createElement("thead",null,t)}function K(e){var t=e.children;return r.a.createElement("th",{scope:"col"},t)}function V(e){var t=e.children;return r.a.createElement("tbody",null,t)}function B(e){var t=e.children;return r.a.createElement("tr",null,t)}function J(e){var t=e.children;return r.a.createElement("td",{className:"td"},t)}var $=function(e){var t=e.transId,a=Object(i.c)((function(e){return e.transactionReducer})),c=Object(i.c)((function(e){return e.chosenReducer})),l=a.filter((function(e){return e.ticketId===t})),u=Object(i.c)((function(e){return e.switchReducer})),o=Object(i.b)(),m=Object(n.useState)(l[0].ticketId),s=Object(g.a)(m,1)[0],E=Object(n.useState)(l[0].date),d=Object(g.a)(E,1)[0],b=Object(n.useState)(l[0].subject),p=Object(g.a)(b,2),f=p[0],j=p[1],O=Object(n.useState)(l[0].description),h=Object(g.a)(O,2),v=h[0],T=h[1],R=Object(n.useState)(l[0].followUp),D=Object(g.a)(R,2),C=D[0],w=D[1],x=Object(n.useState)(!0),k=Object(g.a)(x,2),U=k[0],M=k[1],Y=Object(n.useState)(!1),W=Object(g.a)(Y,2),L=W[0],H=W[1],X=d;return r.a.createElement(r.a.Fragment,null,L?r.a.createElement(_,null,"Please Enter Subject and Description"):"",U?r.a.createElement(S,{onSubmit:function(e){if(e.preventDefault(),f&&v){var t=a.findIndex((function(e){return e.ticketId===l[0].ticketId}));a.splice(t,1),o(F({userId:c.id,ticketId:s,date:d,subject:f,description:v,followUp:C})),M(!U)}else H(!0);o(A(!u.edit))}},r.a.createElement("h2",null,"Edit Transaction"),r.a.createElement("p",null,"TICKET ID: ",s),r.a.createElement("p",null,"Date: ",r.a.createElement(P.a,{format:"MMMM Do YYYY, h:mm a"},X)),r.a.createElement("p",null,"Subject:"),r.a.createElement(N,{type:"text",value:f,onChange:function(e){return j(e.target.value)},placeholder:"Enter Subject"}),r.a.createElement("p",null,"Description:"),r.a.createElement(y,{type:"textarea",value:v,onChange:function(e){return T(e.target.value)},placeholder:"Enter Description"}),r.a.createElement("p",null,"Follow Up:"),r.a.createElement(y,{type:"textarea",value:C,onChange:function(e){return w(e.target.value)},placeholder:"Enter Follow Up"}),r.a.createElement(I,{color:"success"},"Submit")):"")};var q=function(){var e=Object(i.c)((function(e){return e.transactionReducer})),t=Object(i.c)((function(e){return e.chosenReducer})),a=Object(i.c)((function(e){return e.switchReducer})),c=Object(i.b)(),l=Object(n.useState)(!1),u=Object(g.a)(l,2),o=u[0],m=u[1],s=Object(n.useState)(""),E=Object(g.a)(s,2),d=E[0],b=E[1],p=e.filter((function(e){return e.userId===t.id})),f=function(t){var a,n=e.findIndex((function(e){return e.ticketId===t}));e.splice(n,1),c((a=e,function(e){setTimeout((function(){e({type:"DELETE_TRANSACTION",payload:a})}),2e3)})),m(!o)};return r.a.createElement(r.a.Fragment,null,a.edit?r.a.createElement($,{transId:d}):"",r.a.createElement(H,null,r.a.createElement(X,null,r.a.createElement(B,null,r.a.createElement(K,null,"ID"),r.a.createElement(K,null,"Date"),r.a.createElement(K,null,"Subject"),r.a.createElement(K,null),r.a.createElement(K,null))),r.a.createElement(V,null,p.map((function(e,t){var n=e.date;return r.a.createElement(B,{key:t},r.a.createElement(J,null,e.ticketId),r.a.createElement(J,null,r.a.createElement(P.a,{format:"MMMM Do YYYY"},n)),r.a.createElement(J,null,e.subject),r.a.createElement(J,null,r.a.createElement(T,{onClick:function(){return t=e.ticketId,b(t),void c(A(!a.edit));var t},color:"success"},"Edit")),r.a.createElement(J,null,r.a.createElement(T,{onClick:function(){return f(e.ticketId)},color:"danger"},"Delete")))})))))};var z=function(){var e=Object(i.c)((function(e){return e.chosenReducer})),t=Object(i.c)((function(e){return e.switchReducer})),a=Object(i.b)(),c=Object(n.useState)("".concat(e.username,"-000").concat(Math.floor(1e3*Math.random()+1))),l=Object(g.a)(c,1)[0],u=Object(n.useState)(Date.now()),o=Object(g.a)(u,1)[0],m=Object(n.useState)(""),s=Object(g.a)(m,2),E=s[0],d=s[1],b=Object(n.useState)(""),p=Object(g.a)(b,2),f=p[0],j=p[1],O=Object(n.useState)(""),h=Object(g.a)(O,2),v=h[0],T=h[1],R=Object(n.useState)(t.ticket),D=Object(g.a)(R,2),C=D[0],w=D[1],x=Object(n.useState)(!1),k=Object(g.a)(x,2),U=k[0],M=k[1],A=o;return r.a.createElement(r.a.Fragment,null,U?r.a.createElement(_,null,"Please Enter Subject and Description"):"",C?r.a.createElement(S,{className:"tixForm",onSubmit:function(n){n.preventDefault(),E&&f?(a(F({userId:e.id,ticketId:l,date:o,subject:E,description:f,followUp:v})),w(!C),a(Y(!t.ticket))):M(!0)}},r.a.createElement("p",null,"TICKET ID: ",l),r.a.createElement("p",null,"Date: ",r.a.createElement(P.a,{format:"MMMM Do YYYY, h:mm a"},A)),r.a.createElement("p",null,"Subject:"),r.a.createElement(N,{type:"text",value:E,onChange:function(e){return d(e.target.value)},placeholder:"Enter Subject"}),r.a.createElement("p",null,"Description:"),r.a.createElement(y,{type:"textarea",value:f,onChange:function(e){return j(e.target.value)},placeholder:"Enter Description"}),r.a.createElement("p",null,"Follow Up:"),r.a.createElement(y,{type:"textarea",value:v,onChange:function(e){return T(e.target.value)},placeholder:"Enter Follow Up"}),r.a.createElement(I,{color:"success mt-3"},"Submit")):"")};var G=function(){var e=Object(i.c)((function(e){return e.chosenReducer})),t=Object(i.c)((function(e){return e.switchReducer})),a=Object(i.b)(),c=Object(n.useState)(e.firstName?e.firstName:""),l=Object(g.a)(c,1)[0],u=Object(n.useState)(e.lastName?e.lastName:""),o=Object(g.a)(u,1)[0],m=Object(n.useState)(e.phone?e.phone:""),s=Object(g.a)(m,1)[0],E=Object(n.useState)(e.location?e.location:""),d=Object(g.a)(E,1)[0],b=Object(n.useState)(e),p=Object(g.a)(b,1)[0];return r.a.createElement(C,null,r.a.createElement(w,{className:"col-12"},r.a.createElement(S,{className:"userInfo",onSubmit:function(e){e.preventDefault(),a(M(!t.update))}},r.a.createElement("p",null,r.a.createElement("strong",null,"Username:")," ",p.username),r.a.createElement("p",null,r.a.createElement("strong",null,"email:")," ",p.email),r.a.createElement("p",null,r.a.createElement("strong",null,"First Name:")," ",l||p.firstName),r.a.createElement("p",null,r.a.createElement("strong",null,"Last Name:")," ",o||p.lastName),r.a.createElement("p",null,r.a.createElement("strong",null,"Phone Number:")," ",s||p.phone),r.a.createElement("p",null,r.a.createElement("strong",null,"Location:")," ",d||p.location),r.a.createElement(I,{color:"success"},"Update"))))};var Q=function(){var e=Object(i.c)((function(e){return e.userReducer})),t=Object(i.c)((function(e){return e.chosenReducer})),a=Object(i.c)((function(e){return e.switchReducer})),c=Object(i.b)(),l=Object(n.useState)(t.username),u=Object(g.a)(l,2),o=u[0],m=u[1],s=Object(n.useState)(t.email),E=Object(g.a)(s,2),d=E[0],b=E[1],p=Object(n.useState)(t.firstName?t.firstName:""),f=Object(g.a)(p,2),j=f[0],O=f[1],h=Object(n.useState)(t.lastName?t.lastName:""),v=Object(g.a)(h,2),y=v[0],T=v[1],R=Object(n.useState)(t.phone?t.phone:""),D=Object(g.a)(R,2),x=D[0],_=D[1],F=Object(n.useState)(t.location?t.location:""),Y=Object(g.a)(F,2),A=Y[0],W=Y[1];return r.a.createElement(C,null,r.a.createElement(w,{className:"col-12"},r.a.createElement(S,{onSubmit:function(n){n.preventDefault();var r=e.findIndex((function(e){return e.id===t.id}));e.splice(r,1),c(k({id:t.id,username:o,email:d,firstName:j,lastName:y,phone:x,location:A})),c(U({id:t.id,username:o,email:d,firstName:j,lastName:y,phone:x,location:A})),c(M(!a.update))}},r.a.createElement("p",null,"Username:"),r.a.createElement(N,{type:"text",value:o,onChange:function(e){return m(e.target.value)},placeholder:"Enter Username"}),r.a.createElement("p",null,"email:"),r.a.createElement(N,{type:"email",value:d,onChange:function(e){return b(e.target.value)},placeholder:"Enter Email"}),r.a.createElement("p",null,"First Name:"),r.a.createElement(N,{type:"text",value:j,onChange:function(e){return O(e.target.value)},placeholder:"Enter First Name"}),r.a.createElement("p",null,"Last Name:"),r.a.createElement(N,{type:"text",value:y,onChange:function(e){return T(e.target.value)},placeholder:"Enter Last name"}),r.a.createElement("p",null,"Phone Number:"),r.a.createElement(N,{type:"phone",value:x,onChange:function(e){return _(e.target.value)},placeholder:"Enter Phone Number ex. 4072223344"}),r.a.createElement("p",null,"Location:"),r.a.createElement(N,{type:"text",value:A,onChange:function(e){return W(e.target.value)},placeholder:"Enter State"}),r.a.createElement(I,{color:"success"},"Submit"))))};var Z=function(){var e=Object(i.c)((function(e){return e.chosenReducer})),t=Object(i.c)((function(e){return e.switchReducer})),a=Object(i.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null,r.a.createElement(C,null,r.a.createElement(w,{className:"col-6 text-center"},r.a.createElement(R,{title:"Welcome "+e.username,text:"Please review and Update your user information"})),r.a.createElement(w,{className:"col-6 text-center"},r.a.createElement(R,{title:"Your Tickets",text:"View and Create Tickets"}))),r.a.createElement(C,null,r.a.createElement(w,{className:"col-6 userInfo"},r.a.createElement(u.b,{to:"/"},r.a.createElement(T,{color:"danger mb-3"},"Log Out")),t.update?r.a.createElement(Q,null):r.a.createElement(G,null)),r.a.createElement(w,{className:"col-6 userInfo"},r.a.createElement(S,{className:"updateForm",onSubmit:function(e){e.preventDefault(),a(Y(!t.ticket))}},t.ticket?r.a.createElement(I,{color:"primary"},"X"):r.a.createElement(I,{color:"warning"},"Create Ticket")),t.ticket?r.a.createElement(z,null):"",r.a.createElement(q,null)))))};var ee=function(){return r.a.createElement(i.a,{store:v},r.a.createElement(u.a,{basename:"/user-transaction-redux"},r.a.createElement(o.a,{exact:!0,path:"/",component:W}),r.a.createElement(o.a,{exact:!0,path:"/details",component:Z})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.25855cce.chunk.js.map