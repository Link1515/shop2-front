(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["orders"],{"159d":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{id:"orders"}},[r("b-table",{attrs:{items:e.orders,fields:e.fields},scopedSlots:e._u([{key:"cell(data)",fn:function(t){return[e._v(e._s(new Date(t.item.date).toLocaleString("zh-tw")))]}},{key:"cell(products)",fn:function(t){return[r("ul",e._l(t.item.products,(function(t){return r("li",{key:t._id},[e._v(e._s(t.product.name)+" x "+e._s(t.quantity))])})),0)]}}])})],1)},a=[],s=r("1da1"),o=(r("96cf"),{data:function(){return{orders:[],fields:[{key:"_id",label:"單號"},{key:"date",label:"日期"},{key:"products",label:"商品"}]}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.get("/orders/me",{headers:{authorization:"Bearer "+e.user.token}});case 3:r=t.sent,n=r.data,e.orders=n.result,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$swal({icon:"error",title:"失敗",text:"取得訂單失敗"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}),u=o,c=r("2877"),i=Object(c["a"])(u,n,a,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=orders.283b623e.js.map