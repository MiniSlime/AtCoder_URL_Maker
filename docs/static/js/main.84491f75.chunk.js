(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),a=n.n(r),i=n(3),o=n.n(i),s=(n(13),n(4)),h=n(5),l=n(7),u=n(6),d=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(s.a)(this,n),(c=e.call(this,t)).state={url:"\u3053\u3053\u306b\u30ea\u30f3\u30af\u304c\u304f\u308b"},c}return Object(h.a)(n,[{key:"randomInt",value:function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t)+t)}},{key:"handleClick",value:function(){var t=this.randomInt(212,249),e=String.fromCharCode(this.randomInt(0,4)+"a".charCodeAt(0));console.log("\u30b3\u30f3\u30c6\u30b9\u30c8:"+t+" \u554f\u984c:"+e),this.setState({url:"https://atcoder.jp/contests/abc"+t+"/tasks/abc"+t+"_"+e})}},{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"AtCoder URL Maker(LT\u7528)"}),Object(c.jsx)("p",{children:"\u4ee4\u548cABC\u306eA~D\u554f\u984c\u306eURL\u304c\u30e9\u30f3\u30c0\u30e0\u306b\u751f\u6210\u3055\u308c\u307e\u3059"}),Object(c.jsx)("h1",{children:"\u767a\u8868\u6642\u9593\u4e2d\u306bAC\u3067\u304d\u305f\u3089\u52dd\u3061\uff01"}),Object(c.jsx)("div",{children:Object(c.jsx)("a",{href:this.state.url,children:this.state.url})}),Object(c.jsx)("button",{onClick:function(){t.handleClick()},children:"\u30ea\u30f3\u30af\u751f\u6210"})]})}}]),n}(a.a.Component),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),j()}},[[14,1,2]]]);
//# sourceMappingURL=main.84491f75.chunk.js.map