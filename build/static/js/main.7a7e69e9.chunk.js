(this.webpackJsonpinstagram_clone=this.webpackJsonpinstagram_clone||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var s=c(3),a=c.n(s),n=c(15),r=c.n(n),i=(c(21),c(22),c(1));var l=function(){return Object(i.jsx)("div",{className:"NavBar",children:Object(i.jsx)("p",{className:"Heading",children:"Instagram"})})},o=c(7),j=(c(24),c(25),c(12)),d=c.n(j),b=c(16),u=c(10);c(34),c(35);u.a.initializeApp({apiKey:"AIzaSyDSTkQSDN1O-eHP7Lg1dBAxXYKd5P2SHl4",authDomain:"instagram-clone-7cb68.firebaseapp.com",databaseURL:"https://instagram-clone-7cb68-default-rtdb.firebaseio.com",projectId:"instagram-clone-7cb68",storageBucket:"instagram-clone-7cb68.appspot.com",messagingSenderId:"356124607095",appId:"1:356124607095:web:debe5fc4ad4c8167a3fc72",measurementId:"G-S6Q7D0BGMG"});var m=u.a.storage(),h=u.a.firestore(),p=u.a.firestore.FieldValue.serverTimestamp;var O=function(e){var t=Object(s.useState)(0),c=Object(o.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(null),i=Object(o.a)(r,2),l=i[0],j=i[1],u=Object(s.useState)(null),O=Object(o.a)(u,2),f=O[0],v=O[1];return Object(s.useEffect)((function(){var t=m.ref(e.name),c=h.collection("image");t.put(e).on("state_changed,()",(function(e){var t=e.bytesTransferred/e.tatalBytes*100;n(t)}),(function(e){j(e)}),Object(b.a)(d.a.mark((function e(){var s,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:s=e.sent,a=p(),c.add({url:s,createdAt:a}),v(s);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:a,url:f,error:l}};function f(e){var t=e.file,c=(e.setFile,O(t)),s=c.url,a=c.progress;return console.log(a,s),Object(i.jsx)("div",{className:"Progress-Bar"})}c(28),c(29);var v=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(null),r=Object(o.a)(n,2),l=r[0],j=r[1],d=["image/png","image/jpeg"];return Object(i.jsxs)("div",{children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"Upload-button",type:"file",onChange:function(e){var t=e.target.files[0];t&&d.includes(t.type)?(a(t),j(null)):(a(null),j(" Please select Jpeg or Png type image"))}}),Object(i.jsx)("span",{className:"Upload-button-label",children:"upload"})]}),Object(i.jsxs)("div",{className:"output",children:[l&&Object(i.jsxs)("div",{className:"error",children:[" ",l," "]}),c&&Object(i.jsx)(f,{file:c,setFile:a})]})]})},g=c(13);function x(e){var t=Object(s.useState)([]),c=Object(o.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(0),i=Object(o.a)(r,2),l=i[0],j=i[1];return Object(s.useEffect)((function(){var t=h.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(g.a)(Object(g.a)({},e.data()),{},{id:e.id}))})),n(t),j(Object.keys(t).length)}));return function(){return t()}}),[e]),{docs:a,count:l}}var N=c.p+"static/media/DP.0f348aef.jpeg";var S=function(){var e=x("image").count;return console.log(typeof e),Object(i.jsxs)("div",{className:"Profile_Top",children:[Object(i.jsx)("div",{className:"profile_picture",children:Object(i.jsx)("img",{className:"profile_picture_img",src:N,alt:""})}),Object(i.jsx)("div",{className:"UserName",children:Object(i.jsx)("span",{children:"KHS_Hemanth"})}),Object(i.jsx)("div",{className:"Upload_post",children:Object(i.jsx)(v,{className:"Upload_post"})}),Object(i.jsx)("div",{className:"Profile-Numbers",children:Object(i.jsxs)("p",{children:[" ",Object(i.jsxs)("span",{style:{fontWeight:"bold"},children:[" ",e," "]})," Posts"]})}),Object(i.jsx)("div",{className:"Profile-Bio",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{style:{fontWeight:"bold"},children:"Web Developper | Full stack"})," ",Object(i.jsx)("br",{}),Object(i.jsx)("span",{className:"grey-font",children:"NIT Warangal | 3rd Year Mechanical "})," ",Object(i.jsx)("br",{}),"This is intagram Profile page clone made ",Object(i.jsx)("br",{}),"as a part of ",Object(i.jsx)("span",{style:{fontWeight:"bold"},children:"OMBRE task"}),Object(i.jsx)("br",{}),"created using react.js ,firebase(storage, firestore) ",Object(i.jsx)("br",{}),"check Gitub link below for code ",Object(i.jsx)("br",{}),"link : ",Object(i.jsx)("a",{href:"https://github.com/HemanthKHS/InstagramProfile-clone",target:"_blank",id:"link",children:"https://github.com/HemanthKHS/In....."})]})})]})};c(30);var P=function(e){var t=e.setSelectedimg,c=x("image").docs;return Object(i.jsxs)("div",{className:"post-total",children:[Object(i.jsx)("div",{className:"Profile_Navigation",children:Object(i.jsxs)("div",{className:"posts-icon",children:[Object(i.jsx)("svg",{"aria-label":"Posts",class:"_8-yf5 ",fill:"#262626",height:"12",viewBox:"0 0 48 48",width:"12",children:Object(i.jsx)("path",{"clip-rule":"evenodd",d:"M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z","fill-rule":"evenodd"})}),Object(i.jsx)("p",{children:"POSTS"})]})}),Object(i.jsx)("div",{className:"Post-space",children:c&&c.map((function(e){return Object(i.jsx)("img",{className:"insta_post",onClick:function(){t(e.url)},src:e.url,alt:""},e.id)}))})]})};c(31);var k=function(e){var t=e.selectedimg,c=e.setSelectedimg;return Object(i.jsx)("div",{className:"Preview",onClick:function(e){e.target.classList.contains("backdrop")&&c(null),c(null)},children:Object(i.jsx)("img",{src:t,alt:"Unable to Load Preview"})})};var y=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(i.jsxs)("div",{className:"Profile",children:[Object(i.jsx)(S,{}),Object(i.jsx)(P,{className:"posts-div",setSelectedimg:a}),c&&Object(i.jsx)(k,{selectedimg:c,setSelectedimg:a})]})};c(32);var _=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{}),Object(i.jsx)(y,{})]})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(_,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.7a7e69e9.chunk.js.map