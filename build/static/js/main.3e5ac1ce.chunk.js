(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,a){e.exports=a(38)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),l=a.n(o);a(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(29),a(30);var i=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"log-in please"),r.a.createElement("form",{className:"log-form",action:"/home"},r.a.createElement("input",{type:"text",placeholder:"email"}),r.a.createElement("input",{type:"password",placeholder:"password"}),r.a.createElement("input",{type:"submit",value:"submit"})))},c=a(15),s=a(16),m=a(17),p=a(21),u=a(18),d=a(22),h=(a(31),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={login:"",email:"",password:"",passwordComfirm:"",isLoading:!1},a.handle=function(e){return a.setState(Object(c.a)({},e.target.name,e.target.value))},a.login=function(){(0,a.props.doLogin)({email:a.state.email,password:a.state.password})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("p",null,"register please"),r.a.createElement("div",{className:"reg-form"},r.a.createElement("input",{required:!0,type:"text",name:"login",value:this.state.login,onChange:this.handle,placeholder:"login"}),r.a.createElement("input",{required:!0,type:"text",name:"email",value:this.state.email,onChange:this.handle,placeholder:"email"}),r.a.createElement("input",{required:!0,type:"password",placeholder:"password",name:"password",value:this.state.password,onChange:this.handle}),r.a.createElement("input",{required:!0,type:"password",placeholder:"password comfirm",name:"passwordComfirm",value:this.state.passwordComfirm,onChange:this.handle}),r.a.createElement("span",null,r.a.createElement("button",{onClick:function(){return e.login()}},"Login"))))}}]),t}(r.a.Component)),w=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Here suppose to be main information"))},E=a(8),f=a(5),g=(a(32),["Home","Register","LogIn"]),v=function(){return r.a.createElement("div",{className:"header-wrapper"},g.map(function(e){return r.a.createElement("li",{key:"".concat(e,"-key")},r.a.createElement(E.b,{to:e.toLocaleLowerCase()},e))}))};l.a.render(r.a.createElement(function(){return r.a.createElement(E.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("p",null,"Welcome"),r.a.createElement(v,null),r.a.createElement(f.a,{exact:!0,path:"/home",component:w}),r.a.createElement(f.a,{path:"/login",component:i}),r.a.createElement(f.a,{path:"/register",component:h})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.3e5ac1ce.chunk.js.map