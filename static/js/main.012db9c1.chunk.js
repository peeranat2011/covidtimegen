(this.webpackJsonpcovidtimegen=this.webpackJsonpcovidtimegen||[]).push([[0],{10:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(6),s=n.n(a),l=(n(16),n(17),n(2)),r=n(3),d=(n(10),n(4)),j=n(0),o=[],b=[];var u=function(e){var t=e.returnPatientData,n=e.returnTimeLineData,i=Object(c.useState)({}),a=Object(r.a)(i,2),s=a[0],u=a[1],O=Object(c.useState)([]),h=Object(r.a)(O,2),x=h[0],p=h[1];function v(e){var t=e.target,n=s;u(Object(l.a)(Object(l.a)({},n),{},Object(d.a)({},t.name,t.value)))}function m(e){var t=e.target,n=(new Date).getTime(),c=x;p(Object(l.a)(Object(l.a)({},c),{},Object(d.a)({id:n},t.name,t.value)))}return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{class:"col-12",children:Object(j.jsxs)("div",{class:"row input_container",children:[Object(j.jsx)("div",{class:"col-12",style:{height:"3rem"},children:Object(j.jsx)("label",{className:"patient_header",children:"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22"})}),Object(j.jsxs)("div",{class:"col-sm-6 justify-content-center",children:[Object(j.jsx)("label",{children:"\u0e40\u0e1e\u0e28"}),Object(j.jsxs)("select",{name:"gender",onChange:v,class:"gender_option",children:[Object(j.jsx)("option",{value:""}),Object(j.jsx)("option",{value:"\u0e0a\u0e32\u0e22",children:"\u0e0a\u0e32\u0e22"}),Object(j.jsx)("option",{value:"\u0e2b\u0e0d\u0e34\u0e07",children:"\u0e2b\u0e0d\u0e34\u0e07"})]})]}),Object(j.jsxs)("div",{class:"col-sm-6 justify-content-center",children:[Object(j.jsx)("label",{children:"\u0e2d\u0e32\u0e22\u0e38"}),Object(j.jsx)("input",{name:"age",type:"number",onChange:v})]}),Object(j.jsxs)("div",{class:"col-12",style:{paddingTop:"3%",paddingBottom:"9%"},children:[Object(j.jsx)("label",{children:"\u0e2d\u0e32\u0e0a\u0e35\u0e1e"}),Object(j.jsx)("input",{name:"career",type:"text",onChange:v})]})]})}),Object(j.jsx)("div",{class:"col-12",style:{paddingTop:"7%"},children:Object(j.jsxs)("div",{class:"row input_container",children:[Object(j.jsx)("div",{class:"col-12",style:{height:"3rem"},children:Object(j.jsx)("label",{className:"patient_header",children:"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e44\u0e17\u0e21\u0e4c\u0e44\u0e25\u0e19\u0e4c"})}),Object(j.jsxs)("div",{class:"col-12",children:[Object(j.jsx)("label",{children:"\u0e27\u0e31\u0e19\u0e40\u0e27\u0e25\u0e32"}),Object(j.jsx)("input",{name:"datetime",type:"datetime-local",onChange:m,required:"true"})]}),Object(j.jsxs)("div",{class:"col-12",style:{paddingTop:"4%"},children:[Object(j.jsx)("label",{children:"\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14"}),Object(j.jsx)("input",{class:"input_detailed",name:"detail",onChange:m,required:"true"})]}),Object(j.jsx)("div",{class:"col-12",style:{paddingTop:"4%",paddingBottom:"4%"},children:Object(j.jsx)("button",{class:"adding_button",onClick:function(){b.push(s),o.push(x),o.sort((function(e,t){return e.datetime>t.datetime?1:t.datetime>e.datetime?-1:0})),t("patient",b),n("timeline",o)},children:"+ \u0e40\u0e1e\u0e34\u0e48\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"})})]})})]})},O=n(8);function h(e){var t=e.header,n=e.items,c=e.cbDelete;e.data;var i=new Date(t).toLocaleDateString();return Object(j.jsx)("div",{children:Object(j.jsx)("ul",{class:"timeline",children:Object(j.jsx)("li",{class:"event fade-in","data-date":i,children:Object(j.jsx)("li",{class:"fade-in",children:n&&n.map((function(e,t){return Object(j.jsxs)("li",{class:"fade-in detailed_cointainer right",id:e.id,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{style:{color:"rgb(255, 193, 7)"},children:e.datetime.slice(11,16)})," ",e.detail]}),"  ",Object(j.jsx)("button",{onClick:function(t){return n=e.id,c(n),void(document.getElementById(n).className="fade-out-right");var n},style:{background:"transparent",border:"none",color:"white"},children:"x"})]},t)}))})})})})}var x=function(e){var t=e.patientData,n=e.timeLineData,c=e.onDelete;function i(e){return e&&e.slice(0,10)}for(var a=n&&n.map((function(e){return i(e.datetime)})).filter((function(e,t,n){return n.indexOf(e)===t})),s={},l=function(e){var t=[];n.forEach((function(n,c){i(n.datetime)==a[e]&&(t.push(n),s[i(n.datetime)]=t)}))},r=0;r<a.length;r++)l(r);var d=function(e){c(e)};return Object(j.jsxs)("div",{class:"app_container",children:[Object(j.jsx)("h1",{class:"text-center",style:{color:"rgb(255, 193, 7)",padding:"4% 0px 1% 0px"},children:"Timeline"}),Object(j.jsxs)("div",{class:"dis_patient_con",children:[Object(j.jsxs)("h4",{class:"text-center",children:["\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22",t[0]&&Object(O.a)(t).pop().gender," \u0e2d\u0e32\u0e22\u0e38 ",t[0]&&Object(O.a)(t).pop().age," \u0e1b\u0e35"]}),Object(j.jsxs)("p",{style:{fontSize:"14px",fontWeight:"bold"},class:"text-center",children:["\u0e2d\u0e32\u0e0a\u0e35\u0e1e ",t[0]&&Object(O.a)(t).pop().career]})]}),Object.keys(s).map((function(e,t){return Object(j.jsx)(h,{header:e,items:s[e],cbDelete:d,data:s},t)}))]})};var p=function(){var e=Object(c.useState)(),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)({}),s=Object(r.a)(a,2),d=s[0],o=s[1],b=Object(c.useState)([]),O=Object(r.a)(b,2),h=O[0],p=O[1];return Object(j.jsxs)("div",{class:"container-fluid app_container",children:[Object(j.jsx)("label",{class:"topic",children:"COVID Timeline Generator"}),Object(j.jsxs)("div",{class:"row",children:[Object(j.jsx)("div",{class:"col-sm-5",children:Object(j.jsx)(u,{returnPatientData:function(e,t){var c=n;i(Object(l.a)({},c)),o(t)},returnTimeLineData:function(e,t){var c=n;i(Object(l.a)({},c)),p(t)}})}),Object(j.jsx)("div",{div:!0,class:"col-sm-7 app_container",style:{border:"1px solid #ffc107"},children:Object(j.jsx)(x,{patientData:d,timeLineData:h,onDelete:function(e){var t=h;t.splice(t.findIndex((function(t){return t.id===e})),1),p(t)}})})]})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),v()}},[[19,1,2]]]);
//# sourceMappingURL=main.012db9c1.chunk.js.map