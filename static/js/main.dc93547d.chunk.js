(this["webpackJsonpfood-order-app"]=this["webpackJsonpfood-order-app"]||[]).push([[0],[,,function(e,t,n){e.exports={cart:"CartItem_cart__1ACXg","background-blur":"CartItem_background-blur__28JK-","cart-item":"CartItem_cart-item__39IaN",amount:"CartItem_amount__1dJeW","add-remove":"CartItem_add-remove__1lrCC","total-amount":"CartItem_total-amount__1Y-KC","confirm-close":"CartItem_confirm-close__1jdeU"}},function(e,t,n){e.exports={"food-item":"ItemsCard_food-item__2ZjXP","food-details":"ItemsCard_food-details__n6oPD","required-amount":"ItemsCard_required-amount__1kDjm",quantity:"ItemsCard_quantity__3-xMC","increase-quantity":"ItemsCard_increase-quantity__2rHTx"}},function(e,t,n){e.exports={"main-section":"Main_main-section__1SJFq","image-container":"Main_image-container__3AjTe","bg-image":"Main_bg-image__2Bvx5","about-container":"Main_about-container__35j7z",about:"Main_about__3nylf"}},,,,,,,function(e,t,n){e.exports={"view-cart":"ViewCart_view-cart__1Uaa5",count:"ViewCart_count__37OBZ"}},function(e,t,n){e.exports={header:"Header_header__1MOL-","header-container":"Header_header-container__2fEcn"}},,function(e,t,n){e.exports={main:"App_main__3ZkGI"}},function(e,t,n){e.exports={items:"Items_items__30lnn"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(13),r=n.n(c),o=(n(20),n(8)),s=n(14),d=n.n(s),m=n(9),u=n(6),l=n(0),j=i.a.createContext({addItem:function(){},removeItem:function(){},cart:{}}),b={items:[],totalCartItems:0,totalPrice:0},p=function(e){var t=0,n=0;return e.forEach((function(e){t+=e.amount,n+=e.price*e.amount})),{totalItems:t,totalPrice:Math.floor(n)}},O=function(e,t){if("ADD"===t.type){var n,a=e.items.findIndex((function(e){return e.name===t.val.name})),i=e.items[a];if(i){var c=Object(u.a)(Object(u.a)({},i),{},{amount:i.amount+t.val.amount});(n=Object(m.a)(e.items))[a]=c}else n=e.items.concat(t.val);var r=p(n);return{items:n,totalCartItems:r.totalItems,totalPrice:r.totalPrice}}if("DEL"===t.type){var o,s=e.items.findIndex((function(e){return e.name===t.val.name})),d=e.items[s];if(1===d.amount)e.items.splice(s,1),o=Object(m.a)(e.items);else{var l=Object(u.a)(Object(u.a)({},d),{},{amount:d.amount-t.val.amount});(o=Object(m.a)(e.items))[s]=l}var j=p(o);return{items:o,totalCartItems:j.totalItems,totalPrice:j.totalPrice}}return b},h=function(e){var t=Object(a.useReducer)(O,b),n=Object(o.a)(t,2),i=n[0],c=n[1];return Object(l.jsx)(j.Provider,{value:{addItem:function(e){console.log("item added"),e.amount>0&&void 0!==e.amount&&c({type:"ADD",val:e})},removeItem:function(e){console.log("removed item"),e.amount>0&&void 0!==e.amount&&c({type:"DEL",val:e})},cart:i},children:e.children})},x=j,f=n(2),v=n.n(f),_=function(e){var t=Object(a.useContext)(x),n=function(e,n){var a={name:e,amount:1,price:n};t.removeItem(a)},c=function(e,n){var a={name:e,amount:1,price:n};t.addItem(a)},r=t.cart.items.map((function(e,t){return Object(l.jsxs)("div",{className:v.a["cart-item"],children:[Object(l.jsxs)("div",{className:v.a["food-item"],children:[Object(l.jsx)("h2",{children:e.name}),Object(l.jsxs)("div",{className:v.a.amount,children:[Object(l.jsx)("p",{children:"$ ".concat(e.price)}),Object(l.jsx)("div",{children:"x ".concat(e.amount)})]})]}),Object(l.jsxs)("div",{className:v.a["add-remove"],children:[Object(l.jsx)("button",{onClick:n.bind(null,e.name,e.price),children:"-"}),Object(l.jsx)("button",{onClick:c.bind(null,e.name,e.price),children:"+"})]})]},t)}));return Object(l.jsxs)(i.a.Fragment,{children:[Object(l.jsxs)("div",{id:v.a.cart,children:[r,Object(l.jsxs)("div",{id:v.a["total-amount"],children:[Object(l.jsx)("p",{children:"Total Amount"}),Object(l.jsx)("p",{children:"$ ".concat(t.cart.totalPrice)})]}),Object(l.jsxs)("div",{id:v.a["confirm-close"],children:[Object(l.jsx)("button",{type:"button",onClick:function(){e.popupClose(!1)},children:"Close"}),Object(l.jsx)("button",{type:"button",onClick:function(){console.log("Ordering...")},children:"Order"})]})]}),Object(l.jsx)("div",{id:v.a["background-blur"]})]})},C=n(11),I=n.n(C),g=function(e){var t=Object(a.useContext)(x);return Object(l.jsxs)("button",{id:I.a["view-cart"],onClick:function(){e.popupOpen(!0)},children:[Object(l.jsx)("i",{className:"fas fa-shopping-cart"}),Object(l.jsx)("p",{children:"Your Cart"}),Object(l.jsx)("div",{id:I.a.count,children:t.cart.totalCartItems})]})},y=n(12),N=n.n(y),k=function(e){return Object(l.jsx)("header",{id:N.a.header,children:Object(l.jsxs)("div",{className:"container",id:N.a["header-container"],children:[Object(l.jsx)("h1",{children:"React Meals"}),Object(l.jsx)(g,{popupOpen:e.popupOpen})]})})},P=n(15),q=n.n(P),A=n(3),D=n.n(A),w=function(e){var t=Object(a.useContext)(x),n=Object(a.useRef)();return Object(l.jsxs)("div",{className:D.a["food-item"],children:[Object(l.jsxs)("div",{className:D.a["food-details"],children:[Object(l.jsx)("h3",{children:e.itemName}),Object(l.jsx)("p",{children:Object(l.jsx)("em",{children:e.description})}),Object(l.jsx)("p",{children:e.price})]}),Object(l.jsxs)("div",{className:D.a["required-amount"],children:[Object(l.jsxs)("div",{className:D.a.quantity,children:[Object(l.jsx)("label",{htmlFor:"amount",children:"Amount"}),Object(l.jsx)("input",{ref:n,type:"number",defaultValue:"0",min:"1",step:"1",id:"amount",autoComplete:"off"})]}),Object(l.jsx)("div",{className:D.a["increase-quantity"],children:Object(l.jsx)("button",{onClick:function(a){var i={name:e.itemName,amount:+n.current.value,price:e.price};t.addItem(i),n.current.value="0"},children:"+ Add"})})]})]})},F=function(e){var t=e.items.map((function(e,t){return Object(l.jsx)(w,{itemName:e.itemName,description:e.description,price:e.price},t)}));return Object(l.jsx)("div",{id:q.a.items,className:"container",children:t})},M=n(4),B=n.n(M),E=function(){return Object(l.jsxs)("main",{id:B.a["main-section"],children:[Object(l.jsx)("div",{id:B.a["image-container"],children:Object(l.jsx)("div",{alt:"store",id:B.a["bg-image"]})}),Object(l.jsx)("div",{className:"container",id:B.a["about-container"],children:Object(l.jsxs)("div",{id:B.a.about,children:[Object(l.jsx)("h1",{children:"Delicious Food, Delivered to you"}),Object(l.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home"}),Object(l.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})})]})};var J=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(l.jsxs)("div",{id:d.a.main,children:[n&&Object(l.jsx)(_,{popupClose:i}),Object(l.jsx)(k,{popupOpen:i}),Object(l.jsx)(E,{}),Object(l.jsx)(F,{items:[{itemName:"Sushi",description:"Finest fish and veggies",price:22.99},{itemName:"Schnitzel",description:"A German speciality!",price:16.5},{itemName:"Barbecue Burger",description:"American, rawn meaty",price:12.99},{itemName:"Green Bowl",description:"Healthy and green",price:18.99}]})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(l.jsx)(h,{children:Object(l.jsx)(J,{})}),document.getElementById("root")),L()}],[[22,1,2]]]);
//# sourceMappingURL=main.dc93547d.chunk.js.map