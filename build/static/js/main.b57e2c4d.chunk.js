(this.webpackJsonpinstagram_clone=this.webpackJsonpinstagram_clone||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(3),s=c.n(a),i=c(15),n=c.n(i),r=(c(21),c(22),c(1));var l=function(){return Object(r.jsx)("div",{className:"NavBar",children:Object(r.jsx)("p",{className:"Heading",children:"Instagram"})})},o=c(7),d=(c(24),c(25),c(12)),b=c.n(d),j=c(16),A=c(10);c(34),c(35);A.a.initializeApp({apiKey:"AIzaSyDSTkQSDN1O-eHP7Lg1dBAxXYKd5P2SHl4",authDomain:"instagram-clone-7cb68.firebaseapp.com",databaseURL:"https://instagram-clone-7cb68-default-rtdb.firebaseio.com",projectId:"instagram-clone-7cb68",storageBucket:"instagram-clone-7cb68.appspot.com",messagingSenderId:"356124607095",appId:"1:356124607095:web:debe5fc4ad4c8167a3fc72",measurementId:"G-S6Q7D0BGMG"});var h=A.a.storage(),m=A.a.firestore(),u=A.a.firestore.FieldValue.serverTimestamp;var O=function(e){var t=Object(a.useState)(0),c=Object(o.a)(t,2),s=c[0],i=c[1],n=Object(a.useState)(null),r=Object(o.a)(n,2),l=r[0],d=r[1],A=Object(a.useState)(null),O=Object(o.a)(A,2),p=O[0],g=O[1];return Object(a.useEffect)((function(){var t=h.ref(e.name),c=m.collection("image");t.put(e).on("state_changed,()",(function(e){var t=e.bytesTransferred/e.tatalBytes*100;i(t)}),(function(e){d(e)}),Object(j.a)(b.a.mark((function e(){var a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:a=e.sent,s=u(),c.add({url:a,createdAt:s}),g(a);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:s,url:p,error:l}};function p(e){var t=e.file,c=(e.setFile,O(t)),a=c.url,s=c.progress;return console.log(s,a),Object(r.jsx)("div",{className:"Progress-Bar"})}c(28),c(29);var g=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(null),n=Object(o.a)(i,2),l=n[0],d=n[1],b=["image/png","image/jpeg"];return Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"Upload-button",type:"file",onChange:function(e){var t=e.target.files[0];t&&b.includes(t.type)?(s(t),d(null)):(s(null),d(" Please select Jpeg or Png type image"))}}),Object(r.jsx)("span",{className:"Upload-button-label",children:"upload"})]}),Object(r.jsxs)("div",{className:"output",children:[l&&Object(r.jsxs)("div",{className:"error",children:[" ",l," "]}),c&&Object(r.jsx)(p,{file:c,setFile:s})]})]})},x=c(13);function S(e){var t=Object(a.useState)([]),c=Object(o.a)(t,2),s=c[0],i=c[1],n=Object(a.useState)(0),r=Object(o.a)(n,2),l=r[0],d=r[1];return Object(a.useEffect)((function(){var t=m.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(x.a)(Object(x.a)({},e.data()),{},{id:e.id}))})),i(t),d(Object.keys(t).length)}));return function(){return t()}}),[e]),{docs:s,count:l}}var k=function(){var e=S("image").count;return console.log(typeof e),Object(r.jsxs)("div",{className:"Profile_Top",children:[Object(r.jsx)("div",{className:"profile_picture",children:Object(r.jsx)("img",{className:"profile_picture_img",src:"data:image/jpeg;base64,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",alt:""})}),Object(r.jsx)("div",{className:"UserName",children:Object(r.jsx)("span",{children:"KHS_Hemanth"})}),Object(r.jsx)("div",{className:"Upload_post",children:Object(r.jsx)(g,{className:"Upload_post"})}),Object(r.jsx)("div",{className:"Profile-Numbers",children:Object(r.jsxs)("p",{children:[" ",Object(r.jsxs)("span",{style:{fontWeight:"bold"},children:[" ",e," "]})," Posts"]})}),Object(r.jsx)("div",{className:"Profile-Bio",children:Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{style:{fontWeight:"bold"},children:"Web Developper | Full stack"})," ",Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"grey-font",children:"NIT Warangal | 3rd Year Mechanical "})," ",Object(r.jsx)("br",{}),"This is intagram Profile page clone made ",Object(r.jsx)("br",{}),"as a part of ",Object(r.jsx)("span",{style:{fontWeight:"bold"},children:"OMBRE task"}),Object(r.jsx)("br",{}),"created using react.js ,firebase(storage, firestore) ",Object(r.jsx)("br",{}),"check Gitub link below for code ",Object(r.jsx)("br",{}),"link : ",Object(r.jsx)("a",{href:"",id:"link",children:"www.github.com"})]})})]})};c(30);var f=function(e){var t=e.setSelectedimg,c=S("image").docs;return Object(r.jsxs)("div",{className:"post-total",children:[Object(r.jsx)("div",{className:"Profile_Navigation",children:Object(r.jsxs)("div",{className:"posts-icon",children:[Object(r.jsx)("svg",{"aria-label":"Posts",class:"_8-yf5 ",fill:"#262626",height:"12",viewBox:"0 0 48 48",width:"12",children:Object(r.jsx)("path",{"clip-rule":"evenodd",d:"M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z","fill-rule":"evenodd"})}),Object(r.jsx)("p",{children:"POSTS"})]})}),Object(r.jsx)("div",{className:"Post-space",children:c&&c.map((function(e){return Object(r.jsx)("img",{className:"insta_post",onClick:function(){t(e.url)},src:e.url,alt:""},e.id)}))})]})};c(31);var E=function(e){var t=e.selectedimg,c=e.setSelectedimg;return Object(r.jsx)("div",{className:"Preview",onClick:function(e){e.target.classList.contains("backdrop")&&c(null),c(null)},children:Object(r.jsx)("img",{src:t,alt:"Unable to Load Preview"})})};var K=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(r.jsxs)("div",{className:"Profile",children:[Object(r.jsx)(k,{}),Object(r.jsx)(f,{className:"posts-div",setSelectedimg:s}),c&&Object(r.jsx)(E,{selectedimg:c,setSelectedimg:s})]})};c(32);var y=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{}),Object(r.jsx)(K,{})]})};n.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.b57e2c4d.chunk.js.map