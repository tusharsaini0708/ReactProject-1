(this["webpackJsonpvidly-app"]=this["webpackJsonpvidly-app"]||[]).push([[0],{23:function(e,t,a){e.exports=a(36)},28:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c);a(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(10),i=(a(29),a(30),a(1)),s=a(2),u=a(4),m=a(3),b=[{_id:"5b21ca3eeb7f6fbccd471822",name:"All Genres"},{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"}];function d(){return b.filter((function(e){return e}))}var p=[{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z",liked:!0},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5,liked:!1},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5,liked:!0},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5,liked:!1},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5,liked:!1},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5,liked:!0},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5,liked:!0},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5,liked:!1},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5,liked:!1}];function f(){return p}var h=a(11),v=a.n(h),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.totalItems,a=e.pageSize,n=e.currentPage,c=e.onPageChange,l=Math.ceil(t/a);if(1===l)return null;var o=v.a.range(1,l+1);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},o.map((function(e){return r.a.createElement("li",{key:e,className:n===e?"page-item active":"page-item"},r.a.createElement("a",{onClick:function(){return c(e)},className:"page-link"},e))}))))}}]),a}(n.Component);var k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"list-group mt-5"},this.props.genre.map((function(t){return r.a.createElement("li",{key:t._id,className:t.name===e.props.currentGenre?"list-group-item active":"list-group-item",onClick:function(){return e.props.onGenreChange(t.name)}},t.name)})))}}]),a}(n.Component);var y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e="fa fa-heart";return this.props.liked||(e+="-o"),r.a.createElement("i",{onClick:this.props.onClick,className:e,"aria-hidden":"true"})}}]),a}(n.Component),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).renderCell=function(e,t){return t.content?t.content(e):v.a.get(e,t.path)},e.createKey=function(e,t){return e._id+(t.path||t.key)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.columns;return r.a.createElement("tbody",null,a.map((function(t){return r.a.createElement("tr",{key:t._id},n.map((function(a){return"title"===a.path?r.a.createElement("td",{key:e.createKey(t,a)},r.a.createElement(o.b,{to:"/movieDetails/".concat(t._id),key:e.createKey(t,a)},e.renderCell(t,a))):r.a.createElement("td",{key:e.createKey(t,a)},e.renderCell(t,a))})))})))}}]),a}(n.Component),C=a(14),O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).raiseSort=function(t){var a=Object(C.a)({},e.props.sortColumn);t===a.path?a.order="asc"===a.order?"desc":"asc":(a.path=t,a.order="asc"),e.props.onSort(a)},e.sortIcon=function(t){return t.path!==e.props.sortColumn.path||t.content?null:"asc"===e.props.sortColumn.order?r.a.createElement("i",{className:"fa fa-sort-asc ml-2"}):r.a.createElement("i",{className:"fa fa-sort-desc ml-2"})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("thead",{className:"Title"},r.a.createElement("tr",null,this.props.columns.map((function(t){return r.a.createElement("th",{key:t.path||t.key,onClick:function(){return e.raiseSort(t.path)}},t.label,e.sortIcon(t))}))))}}]),a}(n.Component),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).columns=[{path:"title",label:"Title"},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rating"},{key:"like",label:"Like",content:function(t){return r.a.createElement(y,{liked:t.liked,onClick:function(){return e.props.onLike(t)}})}},{key:"delete",content:function(t){return r.a.createElement("button",{onClick:function(){e.props.onDelete(t._id)},className:"btn btn-sm btn-danger text-light"},"Delete")}}],e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.paginateMovie,a=e.onSort,n=e.sortColumn;return r.a.createElement("table",{className:"table"},r.a.createElement(O,{columns:this.columns,sortColumn:n,onSort:a}),r.a.createElement(E,{columns:this.columns,data:t}))}}]),a}(n.Component),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movie:f(),genre:d(),pageSize:4,currentPage:1,currentGenre:"All Genres",sortColumn:{path:"title",order:"asc"}},e.handleDelete=function(t){var a=e.state.movie.filter((function(e){return e._id!==t}));e.setState({movie:a})},e.handleLike=function(t){t.liked=!t.liked,e.setState({movie:e.state.movie})},e.handleSort=function(t){e.setState({sortColumn:t})},e.onPageChange=function(t){e.setState({currentPage:t})},e.onGenreChange=function(t){e.setState({currentGenre:t}),e.setState({currentPage:1})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.pageSize,a=e.currentPage,n=e.currentGenre,c=e.sortColumn,l=function(e,t){return"All Genres"===t?e:e.filter((function(e){return e.genre.name===t}))}(this.state.movie,n),o=function(e,t,a){var n=(t-1)*a;return v()(e).slice(n).take(a).value()}(v.a.orderBy(l,[c.path],[c.order]),a,t);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement(k,{genre:this.state.genre,currentGenre:n,onGenreChange:this.onGenreChange})),r.a.createElement("div",{className:"col-9"},r.a.createElement("h3",null,"There are ",this.state.movie.length," Movies in Database"),r.a.createElement(j,{paginateMovie:o,onDelete:this.handleDelete,onLike:this.handleLike,onSort:this.handleSort,sortColumn:c}),r.a.createElement(g,{totalItems:l.length,pageSize:t,currentPage:a,onPageChange:this.onPageChange}))))}}]),a}(n.Component),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Customer")}}]),a}(n.Component),_=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Rental")}}]),a}(n.Component),R=function(){return r.a.createElement("h1",null,"Not Found")},w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.name,n=e.label,c=e.error,l=e.onChange;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},n),r.a.createElement("input",{value:t,onChange:l,className:"form-control",type:"text",name:a,id:a}),c&&r.a.createElement("div",{className:"alert alert-danger"},c))}}]),a}(n.Component),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={account:{username:"",password:""},errors:{}},e.validate=function(){var t={};return""===e.state.account.username.trim()&&(t.username="Username is Required"),""===e.state.account.password.trim()&&(t.password="password is Required"),console.log(t),0===Object.keys(t).length?{}:t},e.validateOnChange=function(e){return"username"===e.name&&""===e.value.trim()?"Username is required":"password"===e.name&&""===e.value.trim()?"Password is required":void 0},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();e.setState({errors:a})},e.inputChange=function(t){var a=Object(C.a)({},e.state.account),n=Object(C.a)({},e.state.errors),r=e.validateOnChange(t.currentTarget);r?n[t.currentTarget.name]=r:delete n[t.currentTarget.name],a[t.currentTarget.name]=t.currentTarget.value,e.setState({account:a,errors:n})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(w,{value:this.state.account.username,name:"username",label:"Username",error:this.state.errors.username,onChange:this.inputChange}),r.a.createElement(w,{value:this.state.account.password,name:"password",label:"Password",error:this.state.errors.password,onChange:this.inputChange}),r.a.createElement("button",{className:"btn btn-primary "},"Submit")))}}]),a}(n.Component),T=a(5),G=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(o.b,{className:"navbar-brand",to:"#"},"Navbar"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(o.b,{className:"nav-link nav-item active",to:"/movies"},"Movies"),r.a.createElement(o.b,{className:"nav-link nav-item",to:"/customer"},"Customers"),r.a.createElement(o.b,{className:"nav-link nav-item",to:"/rental"},"Rental"))))}}]),a}(n.Component);var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(G,null),r.a.createElement(T.c,null,r.a.createElement(T.a,{path:"/customer",component:N}),r.a.createElement(T.a,{path:"/rental",component:_}),r.a.createElement(T.a,{path:"/not-found",component:R}),r.a.createElement(T.a,{path:"/movieDetails/:id",component:A}),r.a.createElement(T.a,{path:"/",component:S})))};l.a.render(r.a.createElement(o.a,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.2d7f5b51.chunk.js.map