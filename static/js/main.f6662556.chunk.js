(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{36:function(n,e,t){},40:function(n,e,t){"use strict";t.r(e);var r,o,c,a,i,s,d,u,l,b,j,p,x,f,h,m,g,O,k,v,w=t(1),y=t.n(w),z=t(16),D=t.n(z),T=t(5),C=t(9),F=(t(36),t(26)),S=t(14),H=t(6),I=T.c.form(r||(r=Object(H.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-gap: 20px;\n\n    @media (max-width: ","px) {\n        grid-template-columns: 1fr;\n    }\n"])),(function(n){return n.theme.breakpoint.mobile})),P=T.c.input(o||(o=Object(H.a)(["\n    padding: 10px;\n    border: 1px solid ",";\n"])),(function(n){return n.theme.color.alto})),E=T.c.button(c||(c=Object(H.a)(["\n    padding: 10px;\n    background: hsl(180, 100%, 25%);\n    color: white;\n    border: none;\n    transition: 0.5s;\n\n    &:hover {\n        transform: scale(1.2);\n        background-color: rgb(45, 150, 150);\n    }\n    \n    &:active {\n        background: hsl(180, 100%, 35%)\n    }\n"]))),L=t(24),B="tasks",J=Object(S.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(B))||[],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks.findIndex((function(n){return n.id===e.payload}));n.tasks[t].done=!n.tasks[t].done},removeTask:function(n,e){var t=n.tasks.findIndex((function(n){return n.id===e.payload}));n.tasks.splice(t,1)},setAllDone:function(n){var e,t=n.tasks,r=Object(L.a)(t);try{for(r.s();!(e=r.n()).done;){e.value.done=!0}}catch(o){r.e(o)}finally{r.f()}},fetchExampleTasks:function(){},setTasks:function(n,e){var t=e.payload;n.tasks=t}}}),A=J.actions,N=A.addTask,U=A.toggleHideDone,q=A.toggleTaskDone,M=A.removeTask,R=A.setAllDone,G=A.fetchExampleTasks,K=A.setTasks,Q=function(n){return n.tasks},V=J.reducer,W=t(3),X=function(){var n=Object(w.useState)(""),e=Object(F.a)(n,2),t=e[0],r=e[1],o=Object(w.useRef)(null),c=Object(C.b)();return Object(W.jsxs)(I,{className:"form",onSubmit:function(n){n.preventDefault(),""!==t.trim()&&(c(N({content:t.trim(),done:!1,id:Object(S.c)()})),r(""),o.current.focus())},children:[Object(W.jsx)(P,{ref:o,value:t,placeholder:"Co jest do zrobienia?",required:!0,onChange:function(n){var e=n.target;return r(e.value)}}),Object(W.jsx)(E,{id:"myTestButton",children:"Dodaj zadanie "})]})},Y=T.c.ul(a||(a=Object(H.a)(["\n    padding: 10px;\n    margin: 2px 0;\n    background-color: ",";\n    max-width: auto;\n"])),(function(n){return n.theme.color.white})),Z=T.c.li(i||(i=Object(H.a)(["\n    display: grid;\n    grid-template-columns: 35px 1fr 35px;\n    justify-content: center;\n    align-items: center;\n    border-bottom: 1px solid ",";\n    margin-bottom: 10px;\n    padding: 10px 10px 10px 10px;\n\n    ","\n"])),(function(n){return n.theme.color.silver}),(function(n){return n.hidden&&Object(T.b)(s||(s=Object(H.a)(["\n        display:none;\n    "])))})),$=T.c.span(d||(d=Object(H.a)(["\n    justify-content: center;\n    overflow-wrap: anywhere;\n    margin: 10px;\n\n    ","\n"])),(function(n){return n.done&&Object(T.b)(u||(u=Object(H.a)(["\n        text-decoration: line-through;\n    "])))})),_=T.c.button(l||(l=Object(H.a)(["\n    margin: 10px 0;\n    padding: 5px;\n    font-size: 25px;\n    height: 38px;\n    border: none;\n    color: white;\n    transition: background 0.3s;\n    display: flex;\n    justify-content: center;\n\n    ","    \n\n    ","\n\n"])),(function(n){return n.toggleDone&&Object(T.b)(b||(b=Object(H.a)(["\n        transition: 1s;\n        background-color: green;\n        grid-column: 1;\n    \n\n        &:hover {\n            background-color: rgb(9, 145, 9);\n            transform: scale (1.5);\n        }\n    "])))}),(function(n){return n.remove&&Object(T.b)(j||(j=Object(H.a)(["\n        transition: 1s;\n        background-color: red;\n        grid-column: 3;\n        justify-content: center;\n\n        &:hover {\n            background-color: rgb(172, 46, 46);\n            transform: scale (1.5);\n        }\n    "])))})),nn=function(){var n=Object(C.c)(Q),e=n.tasks,t=n.hideDone,r=Object(C.b)();return Object(W.jsx)(Y,{children:e.map((function(n){return Object(W.jsxs)(Z,{hidden:n.done&&t,children:[Object(W.jsx)(_,{toggleDone:!0,onClick:function(){return r(q(n.id))},children:n.done?" \u2714  ":" "}),Object(W.jsx)($,{done:n.done,children:n.content}),Object(W.jsx)(_,{remove:!0,onClick:function(){return r(M(n.id))},children:"\ud83d\uddd1"})]},n.id)}))})},en=T.c.div(p||(p=Object(H.a)(["\n    display: flex;\n    flex-wrap: wrap;\n"]))),tn=T.c.button(x||(x=Object(H.a)(["\n    border: none;\n    background-color: ",";\n    color: teal;\n    padding: 10px;\n    transition: color 0.5s;\n    margin: 0 0 0 20px;\n\n    @media(max-width: ","px) {\n        flex-basis: 100%;\n        margin: 10px;\n    }\n\n    ","\n\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakpoint.mobile}),(function(n){return n.disabled&&Object(T.b)(f||(f=Object(H.a)(["\n        color: grey;\n    "])))})),rn=function(){var n=Object(C.c)(Q),e=n.tasks,t=n.hideDone,r=Object(C.b)();return 0===e.length?Object(W.jsx)(tn,{onClick:function(){return r(G())},children:"Pobierz przyk\u0142adowe zadania"}):Object(W.jsxs)(en,{children:[Object(W.jsx)(tn,{onClick:function(){return r(G())},children:"Pobierz przyk\u0142adowe zadania"}),Object(W.jsxs)(tn,{onClick:function(){return r(U())},children:[t?"Pokaz":"Ukryj"," uko\u0144czone"]}),Object(W.jsx)(tn,{onClick:function(){return r(R())},disabled:e.every((function(n){return n.done})),children:"Uko\u0144cz wszystkie"})]})},on=T.c.section(h||(h=Object(H.a)(["\n    margin: 10px 0;\n    background: white;\n    box-shadow: 0 0 5px ",";\n"])),(function(n){return n.theme.color.alto})),cn=T.c.header(m||(m=Object(H.a)(["\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-gap: 20px;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    border-bottom: 1px solid ",";\n\n    @media (max-width:","px) {\n        grid-template-columns: 1fr;\n    }\n"])),(function(n){return n.theme.color.alto}),(function(n){return n.theme.breakpoint.mobile})),an=T.c.h2(g||(g=Object(H.a)(["\n    font-size: 20px;\n    margin: 0;\n"]))),sn=T.c.div(O||(O=Object(H.a)(["\n    padding: 20px;\n"]))),dn=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(W.jsxs)(on,{children:[Object(W.jsxs)(cn,{children:[Object(W.jsxs)(an,{children:[" ",e," "]}),r]}),Object(W.jsx)(sn,{children:t})]})},un=function(n){var e=n.title;return Object(W.jsx)("header",{children:Object(W.jsxs)("h1",{children:[" ",e]})})},ln=T.c.main(k||(k=Object(H.a)(["\n    background-color: ",";\n    margin: 0 auto;\n    padding: 20px;\n    max-width: 900px;\n"])),(function(n){return n.theme.color.silver})),bn=function(n){return Object(W.jsx)(ln,{children:n.children})},jn=T.c.button(v||(v=Object(H.a)(["\n    border: none;\n    background-color: ",";\n    color: teal;\n    padding: 10px;\n    transition: color 0.5s;\n    margin: 0 0 0 20px;\n\n    @media(max-width: ","px) {\n    flex-basis: 100%;\n    margin: 10px;\n    }\n\n    &:hover {\n        filter: brightness(110%);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n\n    &:disabled {\n        color: ",";\n    }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakpoint.mobile}),(function(n){return n.theme.color.silver}));var pn=function(){return Object(W.jsxs)(bn,{children:[Object(W.jsx)(un,{title:"Lista zada\u0144"}),Object(W.jsx)(dn,{title:"Dodaj nowe zadanie",extraHeaderContent:Object(W.jsx)(jn,{}),body:Object(W.jsx)(X,{})}),Object(W.jsx)(dn,{title:"Lista zada\u0144",extraHeaderContent:Object(W.jsx)(rn,{}),body:Object(W.jsx)(nn,{})})]})},xn=function(){return Object(W.jsx)(pn,{})},fn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),o(n),c(n),a(n)}))},hn=t(27),mn=t(10),gn=t.n(mn),On=t(12),kn=t(25),vn=function(){var n=Object(kn.a)(gn.a.mark((function n(){var e;return gn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/todos-list-react/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),wn=gn.a.mark(Dn),yn=gn.a.mark(Tn),zn=gn.a.mark(Cn);function Dn(){var n;return gn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(On.b)(1e3);case 3:return e.next=5,Object(On.a)(vn);case 5:return n=e.sent,e.next=8,Object(On.c)(K(n));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(On.a)(alert,"co\u015b posz\u0142o nie tak!");case 14:case"end":return e.stop()}}),wn,null,[[0,10]])}function Tn(){var n;return gn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(On.d)(Q);case 2:return n=e.sent,e.next=5,Object(On.a)(Tn,n);case 5:case"end":return e.stop()}}),yn)}function Cn(){return gn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(On.f)(G.type,Dn);case 2:return n.next=4,Object(On.e)("*",Tn);case 4:case"end":return n.stop()}}),zn)}var Fn=Object(hn.a)(),Sn=Object(S.a)({reducer:{tasks:V},middleware:[Fn]});Fn.run(Cn);var Hn=Sn;D.a.render(Object(W.jsx)(y.a.StrictMode,{children:Object(W.jsx)(C.a,{store:Hn,children:Object(W.jsx)(T.a,{theme:{color:{white:"#FFFFFF",silver:"#eee",alto:"#ddd"},breakpoint:{mobile:767}},children:Object(W.jsx)(xn,{})})})}),document.getElementById("root")),fn()}},[[40,1,2]]]);
//# sourceMappingURL=main.f6662556.chunk.js.map