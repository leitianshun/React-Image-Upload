"use strict";(self.webpackChunkreact_epic=self.webpackChunkreact_epic||[]).push([[756],{756:function(e,s,r){r.r(s);var n,a,o=r(168),i=(r(2791),r(4376)),t=r(7496),l=r(2425),c=r(1358),u=r(5751),d=r(4382),m=r(9271),p=r(184),h=u.ZP.div(n||(n=(0,o.Z)(["\nmax-width:600px;\nbox-shadow:2px 2px 4px 0 rgba(0, 0, 0, 0.2);\nborder-radius:8px;\npadding:20px;\nmargin:30px auto\n"]))),x=u.ZP.h1(a||(a=(0,o.Z)(["\ntext-align:center;\n\n"])));s.default=function(){var e=(0,d.m)().AuthStore,s=(0,m.k6)();return(0,p.jsxs)(h,{children:[(0,p.jsx)(x,{children:"\u6ce8\u518c"}),(0,p.jsxs)(t.Z,{name:"basic",labelCol:{span:5},wrapperCol:{span:16},onFinish:function(r){console.log("Success:",r),e.setUsername(r.Username),e.setPassword(r.password),e.register().then((function(){console.log("\u6ce8\u518c\u6210\u529f"),i.ZP.success("\u6ce8\u518c\u6210\u529f"),s.push("/")})).catch((function(){console.log("\u6ce8\u518c\u5931\u8d25"),i.ZP.warning("\u6ce8\u518c\u5931\u8d25")}))},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[(0,p.jsx)(t.Z.Item,{label:"\u7528\u6237\u540d",name:"Username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f60\u7684\u7528\u6237\u540d!"},{validator:function(e,s){return/\W/.test(s)?Promise.reject("\u53ea\u80fd\u662f\u5b57\u6bcd\u6570\u5b57\u4e0b\u5212\u7ebf"):s.length<4||s.length>10?Promise.reject("\u957f\u5ea6\u4e3a4~10\u4e2a\u5b57\u7b26"):Promise.resolve()}}],children:(0,p.jsx)(l.Z,{})}),(0,p.jsx)(t.Z.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f60\u7684\u5bc6\u7801!"},{min:4,message:"\u6700\u5c114\u4e2a\u5b57\u7b26"},{max:10,message:"\u6700\u591a10\u4e2a\u5b57\u7b26"}],children:(0,p.jsx)(l.Z.Password,{})}),(0,p.jsx)(t.Z.Item,{label:"\u786e\u8ba4\u5bc6\u7801",name:"Confirmpassword",rules:[{required:!0,message:"\u8bf7\u5728\u6b21\u786e\u8ba4\u5bc6\u7801!"},function(e){var s=e.getFieldValue;return{validator:function(e,r){return s("password")===r?Promise.resolve():Promise.reject("\u4e24\u6b21\u5bc6\u7801\u4e0d\u5339\u914d")}}}],children:(0,p.jsx)(l.Z.Password,{})}),(0,p.jsx)(t.Z.Item,{wrapperCol:{offset:11,span:16},children:(0,p.jsx)(c.Z,{type:"primary",htmlType:"submit",children:"\u63d0\u4ea4"})})]})]})}}}]);
//# sourceMappingURL=756.44452370.chunk.js.map