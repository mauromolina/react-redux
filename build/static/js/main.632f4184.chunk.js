(this["webpackJsonpredux-crud"]=this["webpackJsonpredux-crud"]||[]).push([[0],{41:function(e,t,a){e.exports=a(70)},46:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),l=(a(46),a(12)),u=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary justify-content-between"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,r.a.createElement(l.b,{to:"/",className:"text-light"},"CRUD React Redux REST API y Axios"))),r.a.createElement(l.b,{to:"/products/new",className:"btn btn-danger nuevo-post d-block d-md-inline-block"},"Agregar Producto +"))},s=a(4),i=a(10),d=a.n(i),p=a(18),m=a(38),E=a.n(m).a.create({baseURL:"http://localhost:4000/"}),b=a(14),f=a.n(b);var O=function(){return{type:"ADD_PRODUCT",payload:!0}},D=function(e){return{type:"SUCCESSFULL_ADD_PRODUCT",payload:e}},v=function(e){return{type:"FAILED_ADD_PRODUCT",payload:e}};var g=function(){return{type:"START_PRODUCTS_DOWNLOAD",payload:!0}},y=function(e){return{type:"SUCCESSFULL_PRODUCTS_DOWNLOAD",payload:e}},h=function(){return{type:"FAILED_PRODUCTS_DOWNLOAD",payload:!0}};var _=function(e){return{type:"GET_DELETE_PRODUCT",payload:e}},T=function(){return{type:"SUCCESSFULL_DELETE_PRODUCT"}},j=function(){return{type:"FAILED_DELETE_PRODUCT",payload:!0}};var N=function(e){return{type:"GET_UPDATE_PRODUCT",payload:e}};var C=function(e){return{type:"START_UPDATE_PRODUCT"}},U=function(e){return{type:"SUCCESSFULL_UPDATE_PRODUCT",payload:e}},P=function(){return{type:"FAILED_UPDATE_PRODUCT",payload:!0}},S=a(3),L=function(e){var t=e.product,a=t.name,n=t.price,c=t.id,o=Object(s.b)(),l=Object(S.f)(),u=function(e){f.a.fire({title:"Est\xe1s seguro?",text:"El producto se eliminar\xe1 permanentemente",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar!",cancelButtonText:"Cancelar"}).then((function(t){t.value&&o(function(e){return function(){var t=Object(p.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(_(e)),t.prev=1,t.next=4,E.delete("/productos/".concat(e));case 4:a(T()),f.a.fire("Eliminado!","El producto se elimin\xf3 correctamente","success"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),a(j());case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(e))}))},i=function(e){o(function(e){return function(t){t(N(e))}}(e)),l.push("/products/edit/".concat(c))};return r.a.createElement("tr",null,r.a.createElement("td",null,a),r.a.createElement("td",null,r.a.createElement("span",{className:"font-weight-bold"}," $",n)),r.a.createElement("td",{className:"acciones"},r.a.createElement("button",{type:"button",className:"btn btn-primary mr-2",onClick:function(){return i(t)}},"Editar"),r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return u(c)}},"Eliminar")))},w=function(){var e=Object(s.b)();Object(n.useEffect)((function(){e(function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g()),e.prev=1,e.next=4,E.get("/productos");case 4:a=e.sent,t(y(a.data)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(h());case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var t=Object(s.c)((function(e){return e.products.products})),a=Object(s.c)((function(e){return e.products.error})),c=Object(s.c)((function(e){return e.products.loading}));return r.a.createElement(n.Fragment,null,r.a.createElement("h2",{className:"text-center my-5"},"Listado de productos"),a?r.a.createElement("p",{className:"font-weight-bold alert alert-danger text-center mt-4"},"Error al descargar los productos"):null,c?r.a.createElement("p",{className:"text-center font-weight-bold"},"Buscando productos..."):null,0===t.length?r.a.createElement("p",{className:"alert alert-info text-center font-weight-bold"},"No hay productos"):null,r.a.createElement("table",{className:"table table-stripped"},r.a.createElement("thead",{className:"bg-primary table-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Nombre"),r.a.createElement("th",{scope:"col"},"Precio"),r.a.createElement("th",{scope:"col"},"Acci\xf3n"))),r.a.createElement("tbody",null,0===t.length?null:t.map((function(e){return r.a.createElement(L,{key:e.id,product:e})})))))},A=a(17);var x=function(e){return{type:"SHOW_ALERT",payload:e}},R=function(){return{type:"HIDE_ALERT"}},k=function(e){var t=e.history,a=Object(n.useState)(""),c=Object(A.a)(a,2),o=c[0],l=c[1],u=Object(n.useState)(0),i=Object(A.a)(u,2),m=i[0],b=i[1],g=Object(s.b)(),y=Object(s.c)((function(e){return e.products.loading})),h=Object(s.c)((function(e){return e.products.error})),_=Object(s.c)((function(e){return e.alerts.alert})),T=function(e){return g(function(e){return function(){var t=Object(p.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(O()),t.prev=1,t.next=4,E.post("/productos",e);case 4:a(D(e)),f.a.fire("Correcto!","El producto se agreg\xf3 correctamente!","success"),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),a(v(!0)),f.a.fire({icon:"error",title:"Hubo un error",text:"Ocurri\xf3 un error! Intente de nuevo m\xe1s tarde..."});case 13:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(e))};return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"text-center mb-4 font-weight-bold"},"Agregar nuevo producto"),_?r.a.createElement("p",{className:_.classes},_.msg):null,r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""===o.trim()||m<=0){g(function(e){return function(t){t(x(e))}}({msg:"Ambos campos son obligatorios",classes:"alert alert-danger text-center text-uppercase p3"}))}else g((function(e){e(R())})),T({name:o,price:m}),t.push("/")}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Nombre del producto"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre producto",name:"name",onChange:function(e){return l(e.target.value)},value:o})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Precio"),r.a.createElement("input",{type:"number",className:"form-control",placeholder:"Precio producto",name:"price",onChange:function(e){return b(Number(e.target.value))},value:m})),r.a.createElement("button",{type:"submit",className:"btn btn-primary font-weight-bold text-uppercase d-block w-100"},"Agregar")),y?r.a.createElement("p",null,"Cargando..."):null,h?r.a.createElement("p",{className:"alert alert-danger p-2 mt-4 text-center"},"Hubo un error! No se pudo agregar el producto"):null))))},F=a(22),I=a(2),W=function(){var e=Object(S.f)(),t=Object(s.b)(),a=Object(n.useState)({name:"",price:""}),c=Object(A.a)(a,2),o=c[0],l=c[1],u=Object(s.c)((function(e){return e.products.updateProduct}));Object(n.useEffect)((function(){l(u)}),[u]);var i=function(e){l(Object(I.a)(Object(I.a)({},o),{},Object(F.a)({},e.target.name,e.target.value)))},m=o.name,b=o.price;return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"text-center mb-4 font-weight-bold"},"Editar Producto"),r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),t(function(e){return function(){var t=Object(p.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(C()),t.prev=1,t.next=4,E.put("productos/".concat(e.id),e);case 4:a(U(e)),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0),a(P());case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()}(o)),e.push("/")}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Nombre del producto"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre producto",name:"name",value:m,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Precio"),r.a.createElement("input",{type:"number",className:"form-control",placeholder:"Precio producto",name:"price",value:b,onChange:i})),r.a.createElement("button",{type:"submit",className:"btn btn-primary font-weight-bold text-uppercase d-block w-100"},"Guardar"))))))},B=a(11),H=a(39),G=a(40),X={products:[],error:null,loading:!1,deleteProduct:null,updateProduct:null},J={alert:null},V=Object(B.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_PRODUCTS_DOWNLOAD":case"ADD_PRODUCT":return Object(I.a)(Object(I.a)({},e),{},{loading:t.payload});case"SUCCESSFULL_ADD_PRODUCT":return Object(I.a)(Object(I.a)({},e),{},{loading:!1,products:[].concat(Object(G.a)(e.products),[t.payload])});case"FAILED_PRODUCTS_DOWNLOAD":case"FAILED_ADD_PRODUCT":case"FAILED_DELETE_PRODUCT":case"FAILED_UPDATE_PRODUCT":return Object(I.a)(Object(I.a)({},e),{},{loading:!1,error:t.payload});case"SUCCESSFULL_PRODUCTS_DOWNLOAD":return Object(I.a)(Object(I.a)({},e),{},{loading:!1,error:null,products:t.payload});case"GET_DELETE_PRODUCT":return Object(I.a)(Object(I.a)({},e),{},{deleteProduct:t.payload});case"SUCCESSFULL_DELETE_PRODUCT":return Object(I.a)(Object(I.a)({},e),{},{products:e.products.filter((function(t){return t.id!==e.deleteProduct})),deleteProduct:null});case"GET_UPDATE_PRODUCT":return Object(I.a)(Object(I.a)({},e),{},{updateProduct:t.payload});case"SUCCESSFULL_UPDATE_PRODUCT":return Object(I.a)(Object(I.a)({},e),{},{updateProduct:null,products:e.products.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},alerts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_ALERT":return Object(I.a)(Object(I.a)({},e),{},{alert:t.payload});case"HIDE_ALERT":return Object(I.a)(Object(I.a)({},e),{},{alert:null});default:return e}}}),$=Object(B.e)(V,Object(B.d)(Object(B.a)(H.a),"object"===typeof window&&"undefined"!==typeof window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));var M=function(){return r.a.createElement(l.a,null,r.a.createElement(s.a,{store:$},r.a.createElement(u,null),r.a.createElement("div",{className:"container mt-5"},r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/",component:w}),r.a.createElement(S.a,{exact:!0,path:"/products/new",component:k}),r.a.createElement(S.a,{exact:!0,path:"/products/edit/:id",component:W})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.632f4184.chunk.js.map