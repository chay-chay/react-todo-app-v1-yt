(this["webpackJsonpreact-todo-app-v1-yt"]=this["webpackJsonpreact-todo-app-v1-yt"]||[]).push([[0],{15:function(t,e,o){},17:function(t,e,o){"use strict";o.r(e);var n=o(2),c=o.n(n),a=o(8),i=o.n(a),r=(o(15),o(6)),d=o(3),s=o(1);var u=function(t){var e=Object(n.useState)(t.edit?t.edit.value:""),o=Object(d.a)(e,2),c=o[0],a=o[1],i=Object(n.useRef)(null);Object(n.useEffect)((function(){i.current.focus()}));var r=function(t){a(t.target.value)};return Object(s.jsx)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:c}),a("")},children:t.edit?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{type:"text",placeholder:"Update your item",value:c,name:"text",className:"todo-input",onChange:r,ref:i}),Object(s.jsx)("button",{className:"todo-button",children:" Update "})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{type:"text",placeholder:"Add a todo",value:c,name:"text",className:"todo-input",onChange:r,ref:i}),Object(s.jsx)("button",{className:"todo-button",children:" Add Todo"})]})})},l=o(9),j=o(10);var b=function(t){var e=t.todos,o=t.completeTodo,c=t.removeTodo,a=t.updateTodo,i=Object(n.useState)({id:null,value:""}),r=Object(d.a)(i,2),b=r[0],p=r[1];return b.id?Object(s.jsx)(u,{edit:b,onSubmit:function(t){a(b.id,t),p({id:null,value:""})}}):e.map((function(t,e){return Object(s.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(s.jsx)("div",{onClick:function(){return o(t.id)},children:t.text},t.id),Object(s.jsxs)("div",{className:"icons",children:[Object(s.jsx)(l.a,{onClick:function(){return c(t.id)},className:"delete-todo"}),Object(s.jsx)(j.a,{onClick:function(){return p({id:t.id,value:t.text})},className:"edit-todo"})]})]},e)}))};var p=function(){var t=Object(n.useState)([]),e=Object(d.a)(t,2),o=e[0],c=e[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"What's the plan for today?"}),Object(s.jsx)(u,{onSubmit:function(t){var e;if(t.text&&!/^\s*$/.test(t.text)){var n=[t].concat(Object(r.a)(o));c(n),(e=console).log.apply(e,Object(r.a)(o))}}}),Object(s.jsx)(b,{todos:o,completeTodo:function(t){var e=o.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));c(e)},removeTodo:function(t){var e=Object(r.a)(o).filter((function(e){return e.id!==t}));c(e)},updateTodo:function(t,e){e.text&&!/^s*$/.test(e.text)&&c((function(o){return o.map((function(o){return o.id===t?e:o}))}))}})]})};var f=function(){return Object(s.jsx)("div",{className:"todo-app",children:Object(s.jsx)(p,{})})};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.13a14fb0.chunk.js.map