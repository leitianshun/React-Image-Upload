"use strict";(self.webpackChunkreact_epic=self.webpackChunkreact_epic||[]).push([[490],{3490:function(e,s,n){n.r(s);var r,a,i=n(168),t=(n(2791),n(4376)),o=n(7496),l=n(2425),c=n(1358),p=n(5751),u=n(4382),m=n(9271),d=n(184),h=p.ZP.div(r||(r=(0,i.Z)(["\nmax-width:600px;\nbox-shadow:2px 2px 4px 0 rgba(0, 0, 0, 0.2);\nborder-radius:8px;\npadding:20px;\nmargin:30px auto\n"]))),x=p.ZP.h1(a||(a=(0,i.Z)(["\ntext-align:center;\n\n"])));s.default=function(){var e=(0,u.m)().AuthStore,s=(0,m.k6)();return(0,d.jsxs)(h,{children:[(0,d.jsx)(x,{children:"\u767b\u5f55"}),(0,d.jsxs)(o.Z,{name:"basic",labelCol:{span:5},wrapperCol:{span:16},onFinish:function(n){console.log("Success:",n),e.setUsername(n.Username),e.setPassword(n.password),e.login().then((function(){t.ZP.success("\u767b\u5f55\u6210\u529f"),s.push("/")})).catch((function(){t.ZP.warning("\u767b\u5f55\u5931\u8d25")}))},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[(0,d.jsx)(o.Z.Item,{label:"\u7528\u6237\u540d",name:"Username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f60\u7684\u7528\u6237\u540d!"},{validator:function(e,s){return/\W/.test(s)?Promise.reject("\u53ea\u80fd\u662f\u5b57\u6bcd\u6570\u5b57\u4e0b\u5212\u7ebf"):s.length<4||s.length>10?Promise.reject("\u957f\u5ea6\u4e3a4~10\u4e2a\u5b57\u7b26"):Promise.resolve()}}],children:(0,d.jsx)(l.Z,{})}),(0,d.jsx)(o.Z.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f60\u7684\u5bc6\u7801!"},{min:4,message:"\u6700\u5c114\u4e2a\u5b57\u7b26"},{max:10,message:"\u6700\u591a10\u4e2a\u5b57\u7b26"}],children:(0,d.jsx)(l.Z.Password,{})}),(0,d.jsx)(o.Z.Item,{wrapperCol:{offset:11,span:16},children:(0,d.jsx)(c.Z,{type:"primary",htmlType:"submit",children:"\u63d0\u4ea4"})})]})]})}}}]);
//# sourceMappingURL=490.cf4b79f0.chunk.js.map