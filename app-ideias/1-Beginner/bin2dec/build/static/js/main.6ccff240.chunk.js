(this.webpackJsonpbin2dec=this.webpackJsonpbin2dec||[]).push([[0],{20:function(e,t,a){e.exports=a(29)},25:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),u=(a(25),a(11)),i=a.n(u),s=a(14),m=a(15),o=a(19),b=a(7);function p(e){var t=e.name,a=Object(o.a)(e,["name"]),l=Object(n.useRef)(null),c=Object(b.c)(t),u=c.fieldName,i=c.registerField,s=c.defaultValue,m=c.error;return Object(n.useEffect)((function(){i({name:u,ref:l.current,path:"value"})}),[u,i]),r.a.createElement("div",null,r.a.createElement("input",Object.assign({ref:l,defaultValue:s},a)),m&&r.a.createElement("span",{style:{color:"#f00"}},m))}var E=a(9);a(28);var f=function(){var e=Object(n.useRef)(null);function t(){return(t=Object(s.a)(i.a.mark((function t(a,n){var r,l,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.reset,t.prev=1,l=E.b().shape({binvalue:E.c().required("Bin is required").matches(/\b[01]+\b/,"Invalid Bin value")}),t.next=5,l.validate(a,{abortEarly:!1});case 5:console.log("BIN Length: "+a.binvalue.length),console.log("BIN [0] :"+parseInt(a.binvalue,2)),e.current.setData({decvalue:parseInt(a.binvalue,2)}),e.current.setErrors({}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),t.t0 instanceof E.a&&(c={},t.t0.inner.forEach((function(e){c[e.path]=e.message})),e.current.setErrors(c),r());case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"}),r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"title"},"Bin2Dec"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(m.a,{ref:e,onSubmit:function(e,a){return t.apply(this,arguments)}},"Binary Value",r.a.createElement(p,{name:"binvalue"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),"Decimal Value",r.a.createElement(p,{name:"decvalue"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Submit"))))};c.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.6ccff240.chunk.js.map