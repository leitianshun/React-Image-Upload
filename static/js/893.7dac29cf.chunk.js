"use strict";(self.webpackChunkreact_epic=self.webpackChunkreact_epic||[]).push([[893],{5893:function(e,r,n){n.r(r),n.d(r,{default:function(){return S}});var t,i,s,l,d=n(2791),c=n(9023),a=n(4382),u=n(1413),h=n(168),o=n(8042),g=n(4376),x=n(7083),p=n(6776),j=n(5751),f=n(32),m=n(184),b=j.ZP.div(t||(t=(0,h.Z)(["\nmargin-top:40px;\nborder:1px dashed  black; \npadding:20px;\n"]))),v=j.ZP.h1(i||(i=(0,h.Z)(["\ntext-align:center;\n"]))),Z=j.ZP.img(s||(s=(0,h.Z)(["\nmax-width:400px;\n"]))),w=o.Z.Dragger,U=(0,c.Pi)((function(){var e=(0,a.m)(),r=e.ImageStore,n=e.UserStore,t=(0,d.useRef)(),i=(0,d.useRef)(),s=(0,f.hN)((function(){return{width:null,setWidth:function(e){s.width=e},get widthStr(){return s.width?"/w/".concat(s.width):""},height:null,setHeight:function(e){s.height=e},get heightStr(){return s.height?"/h/".concat(s.height):""},get fullStr(){return r.serverFile.attributes.url.attributes.url+"?imageView2/0"+s.widthStr+s.heightStr}}})),l={showUploadList:!1,beforeUpload:function(e){return console.log(e),r.setFile(e),r.setFilename(e.name),null===n.currentUser?(g.ZP.warning("\u8bf7\u767b\u5f55\u540e\u5728\u4e0a\u4f20"),!1):(window.File=e,/(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/gi.test(e.type)?(e.size>1048576&&g.ZP.error("\u56fe\u7247\u6700\u59271M"),r.upload().then((function(e){console.log("\u4e0a\u4f20\u6210\u529f"),console.log(e)})).catch((function(){console.log("\u4e0a\u4f20\u5931\u8d25")})),!1):(g.ZP.error("\u53ea\u80fd\u4e0a\u4f20png/svg/jpg/gif\u683c\u5f0f\u7684\u56fe\u7247"),!1))}};return(0,d.useEffect)((function(){n.currentUser||g.ZP.warning("\u8bf7\u767b\u5f55\u540e\u64cd\u4f5c")}),[]),(0,m.jsxs)("div",{children:[(0,m.jsxs)(x.Z,{tip:"\u4e0a\u4f20\u4e2d",spinning:r.isUpoading,children:["   ",(0,m.jsxs)(w,(0,u.Z)((0,u.Z)({},l),{},{children:[(0,m.jsx)("p",{className:"ant-upload-drag-icon",children:(0,m.jsx)(p.Z,{})}),(0,m.jsx)("p",{className:"ant-upload-text",children:"\u70b9\u51fb\u6216\u8005\u62d6\u62fd\u4e0a\u4f20\u56fe\u7247"}),(0,m.jsx)("p",{className:"ant-upload-hint",children:(0,m.jsx)("a",{children:"  \u4ec5\u652f\u6301.png/.svg/.jpg/.gif/.jpeg\u683c\u5f0f\u7684\u56fe\u7247,\u56fe\u7247\u6700\u59271M "})})]}))]}),r.serverFile?(0,m.jsxs)(b,{children:[(0,m.jsx)(v,{children:"\u4e0a\u4f20\u7ed3\u679c"}),(0,m.jsxs)("dl",{children:[(0,m.jsx)("dt",{children:"\u7ebf\u4e0a\u5730\u5740"}),(0,m.jsx)("dd",{children:(0,m.jsxs)("a",{target:"_blank",href:r.serverFile.attributes.url.attributes.url,children:[r.serverFile.attributes.url.attributes.url," "]})}),(0,m.jsx)("dt",{children:"\u6587\u4ef6\u540d"}),(0,m.jsx)("dd",{children:r.filename}),(0,m.jsx)("dt",{children:"\u56fe\u7247\u9884\u89c8"}),(0,m.jsx)("dd",{children:(0,m.jsx)(Z,{src:r.serverFile.attributes.url.attributes.url})}),(0,m.jsx)("dt",{children:"\u66f4\u591a\u5c3a\u5bf8"}),(0,m.jsxs)("dd",{children:[(0,m.jsx)("input",{ref:t,onChange:function(){s.setWidth(t.current.value)},placeholder:"\u6700\u5927\u5bbd\u5ea6(\u53ef\u9009)"}),(0,m.jsx)("input",{ref:i,onChange:function(){s.setHeight(i.current.value)},placeholder:"\u6700\u5927\u9ad8\u5ea6(\u53ef\u9009)"})]}),(0,m.jsxs)("dd",{children:["\u8bbe\u7f6e\u540e\u7684\u56fe\u7247\u5730\u5740:   ",(0,m.jsxs)("a",{target:"_blank",href:s.fullStr,children:[s.fullStr," "]})]})]})]}):null]})})),F=j.ZP.div(l||(l=(0,h.Z)(["\nbackground:rgb(91, 194, 241);\nmargin:30px 0;\nborder-radius:6px;\npadding:10px;\ncolor:#fff;\n"]))),P=(0,c.Pi)((function(e){var r=e.children,n=(0,a.m)().UserStore;return(0,m.jsx)(m.Fragment,{children:n.currentUser?null:(0,m.jsx)(F,{children:r})})})),S=(0,c.Pi)((function(){var e=(0,a.m)().UserStore;return(0,m.jsxs)(m.Fragment,{children:[e.currentUser?(0,m.jsxs)(m.Fragment,{children:["  ",(0,m.jsxs)("h1",{children:[" Hello ",e.currentUser.attributes.username," "]})]}):(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:"Image Upload"}),(0,m.jsx)(P,{children:"\u8bf7\u5148\u767b\u5f55\u540e\u64cd\u4f5c"})]}),(0,m.jsx)(U,{})]})}))}}]);
//# sourceMappingURL=893.7dac29cf.chunk.js.map