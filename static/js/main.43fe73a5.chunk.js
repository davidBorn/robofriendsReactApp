(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(30)},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),i=n(9),l=n(5),s=(n(27),n(6)),u=n(7),h=n(10),d=n(8),m=n(11),f=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(a,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},b=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(f,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email})}))},p=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},E=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid Black",height:"500px"}},e.children)},v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this))).state={hasError:!1},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"oops that is not good"):this.props.children}}]),t}(a.Component),g=(n(28),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).state={robots:[]},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this.state.robots,t=this.props,n=t.searchfield,a=t.onSearchChange,o=e.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return e.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(p,{searchChange:a}),r.a.createElement(E,null,r.a.createElement(v,null,r.a.createElement(b,{robots:o})))):r.a.createElement("h1",null,"Loading")}}]),t}(a.Component)),w=Object(i.b)(function(e){return{searchfield:e.searchfield}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})}}})(g);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j={searchfield:""},y=(n(29),Object(l.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchfield:t.payload});default:return e}}));c.a.render(r.a.createElement(i.a,{store:y},r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.43fe73a5.chunk.js.map