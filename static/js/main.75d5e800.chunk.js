(this.webpackJsonpmonster=this.webpackJsonpmonster||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),s=(n(12),n(3)),l=n(4),i=n(6),u=n(5),m=(n(13),n(14),function(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),o.a.createElement("h2",null,e.monster.name),o.a.createElement("p",null,e.monster.email))}),h=(n(15),function(e){return console.log(e),o.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return o.a.createElement(m,{key:e.id,monster:e})})))}),d=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return o.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,a=t.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return console.log("Filtered Monster: ",r),o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Monsters Collection"),o.a.createElement(d,{placeholder:"search monsters",handleChange:function(t){e.setState({searchField:t.target.value},(function(){return console.log("the state updated: ",e.state)}))}}),o.a.createElement(h,{monsters:r}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.75d5e800.chunk.js.map