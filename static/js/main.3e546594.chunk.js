(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),i=n(7),s=n.n(i),a=(n(13),n(8)),r=n(4),u=n(3),d=(n(14),n(0)),l=function(t){var e=t.addNewTask,n=Object(c.useState)(""),o=Object(u.a)(n,2),i=o[0],s=o[1];return Object(d.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),e(i.trim()),s("")},children:[Object(d.jsx)("input",{value:i,className:"form__input",placeholder:"Co jest do zrobienia?",required:!0,onChange:function(t){var e=t.target;return s(e.value)}}),Object(d.jsx)("button",{className:"form__button",id:"myTestButton",children:"Dodaj zadanie "})]})},j=(n(16),function(t){var e=t.tasks,n=t.hideDone,c=t.removeTask,o=t.toggleTaskDone;return Object(d.jsx)("ul",{className:" list__container",children:e.map((function(t){return Object(d.jsxs)("li",{className:"list__item".concat(t.done&&n?" list__item--hidden":""),children:[Object(d.jsx)("button",{className:"list__button list__button--done",onClick:function(){return o(t.id)},children:t.done?" \u2714  ":" "}),Object(d.jsx)("span",{className:"list__content".concat(t.done?" list__content--done":""),children:t.content}),Object(d.jsx)("button",{className:"list__button list__button--remove",onClick:function(){return c(t.id)},children:"\ud83d\uddd1"})]},t.id)}))})}),b=(n(17),function(t){var e=t.tasks,n=t.hideDone,c=t.toggleHideDone,o=t.setAllDone;return 0===e.length?null:Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsxs)("button",{onClick:c,className:"buttons__button",disabled:e.every((function(t){return t.done})),children:[n?"Pokaz":"Ukryj"," uko\u0144czone"]}),Object(d.jsx)("button",{onClick:o,className:"buttons__button",disabled:e.every((function(t){return t.done})),children:"Uko\u0144cz wszystkie"})]})}),f=(n(18),function(t){var e=t.title,n=t.body,c=t.extraHeaderContent;return Object(d.jsxs)("section",{className:"section",children:[Object(d.jsxs)("header",{className:"section__header",children:[Object(d.jsxs)("h2",{className:"section__title",children:[" ",e," "]}),c]}),Object(d.jsx)("div",{className:"section__body",children:n})]})}),h=function(t){var e=t.title;return Object(d.jsx)("header",{children:Object(d.jsxs)("h1",{children:[" ",e]})})},O=(n(19),function(t){return Object(d.jsx)("main",{className:"container",children:t.children})});var m=function(){var t=Object(c.useState)(!1),e=Object(u.a)(t,2),n=e[0],o=e[1],i=Object(c.useState)([{id:1,content:"przej\u015b\u0107 na Reacta",done:!1},{id:2,content:"zje\u015b\u0107 kolacj\u0119",done:!0}]),s=Object(u.a)(i,2),m=s[0],_=s[1];return Object(d.jsxs)(O,{children:[Object(d.jsx)(h,{title:"Lista zada\u0144"}),Object(d.jsx)(f,{title:"Dodaj nowe zadanie",body:Object(d.jsx)(l,{addNewTask:function(t){_((function(e){return[].concat(Object(a.a)(e),[{content:t,done:!1,id:0===e.length?1:e[e.length-1].id+1}])}))}})}),Object(d.jsx)(f,{title:"Lista zada\u0144",extraHeaderContent:Object(d.jsx)(b,{tasks:m,hideDone:n,toggleHideDone:function(){o((function(t){return!t}))},setAllDone:function(){_((function(t){return t.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{done:!0})}))}))}}),body:Object(d.jsx)(j,{tasks:m,hideDone:n,removeTask:function(t){_((function(e){return e.filter((function(e){return e.id!==t}))}))},toggleTaskDone:function(t){_((function(e){return e.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{done:!e.done}):e}))}))}})})]})},_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),o(t),i(t),s(t)}))};s.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),_()}],[[20,1,2]]]);
//# sourceMappingURL=main.3e546594.chunk.js.map