(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Djrq:function(a,t,o){"use strict";o.r(t);var e=o("CcnG"),c=o("r45k"),n=function(){this.item={cols:1,urls:{"zh-CN":"packages/mock/docs/getting-started.md"},content:{"zh-CN":{content:'<article><h2 id="\u5199\u5728\u524d\u9762">\u5199\u5728\u524d\u9762<a onclick="window.location.hash = \'\u5199\u5728\u524d\u9762\'" class="anchor">#</a></h2><p>Mock \u662f\u6307\u901a\u8fc7\u751f\u6210\u6a21\u62df\u6570\u636e\u8ba9\u524d\u7aef\u5f00\u53d1\u4eba\u5458\u72ec\u7acb\u4e8e\u540e\u7aef\u8fdb\u884c\u5f00\u53d1\uff0c\u6709\u65f6\u6211\u4eec\u4e5f\u4f1a\u8fd0\u7528\u5728\u6d4b\u8bd5\u73af\u5883\u4e2d\u3002</p><p><code>@delon/mock</code> \u662f\u4e00\u4e2a\u7b80\u5355 Mock \u529f\u80fd\uff0c\u5305\u62ec\u4ee5\u4e0b\u51e0\u4e2a\u7279\u5f81\uff1a</p><ul><li><p>\u4efb\u610f Angular \u9879\u76ee</p></li><li><p>\u5f00\u53d1\u65e0\u4fb5\u5165</p></li><li><p>\u8d85\u7b80\u5355\u7528\u6cd5</p></li><li><p>\u652f\u6301 <a target="_blank" href="http://mockjs.com/" data-url="http://mockjs.com/">mock.js</a></p></li></ul><h2 id="\u5982\u4f55\u4f7f\u7528\uff1f">\u5982\u4f55\u4f7f\u7528\uff1f<a onclick="window.location.hash = \'\u5982\u4f55\u4f7f\u7528\uff1f\'" class="anchor">#</a></h2><p>\u5b89\u88c5 <code>@delon/mock</code> \u4f9d\u8d56\u5305\uff1a</p><pre class="hljs language-bash"><code>npm install @delon/mock --save-dev</code></pre><p>\u5728\u6839\u6a21\u5757 <code>AppModule</code> \u5bfc\u5165 <a href="/mock/rule" data-url="/mock/rule">Mock \u89c4\u5219\u6570\u636e</a>\u548c <code>DelonMockModule</code>\uff1b</p><pre class="hljs language-$1"><code>import { DelonMockModule } from \'@delon/mock\';\nimport * as MOCKDATA from \'../../_mock\';\n// \u53ea\u5bf9\u5f00\u53d1\u73af\u5883\u6709\u6548\nimport { environment } from \'../environments/environment\';\nconst MOCKMODULE = !environment.production ? [ DelonMockModule.forRoot({ data: MOCKDATA }) ] : [];\n\n@NgModule({\n  imports: [\n    ...MOCKMODULE\n  ]\n})</code></pre><h3 id="MockOptions-\u914d\u7f6e">MockOptions \u914d\u7f6e<a onclick="window.location.hash = \'MockOptions-\u914d\u7f6e\'" class="anchor">#</a></h3><p><code>forRoot</code> \u53c2\u6570\u8fd8\u5305\u62ec\uff1a</p><table><thead><tr><th>\u53c2\u6570\u540d</th><th>\u7c7b\u578b</th><th>\u9ed8\u8ba4\u503c</th><th>\u63cf\u8ff0</th></tr></thead><tbody><tr><td><code>data</code></td><td><code>any</code></td><td>-</td><td>Mock \u6570\u636e\u89c4\u5219</td></tr><tr><td><code>delay</code></td><td><code>number</code></td><td><code>300</code></td><td>\u8bf7\u6c42\u5ef6\u8fdf\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2</td></tr><tr><td><code>force</code></td><td><code>boolean</code></td><td><code>false</code></td><td>\u662f\u5426\u5f3a\u5236\u6240\u6709\u8bf7\u6c42\u90fdMock\uff0c<code>true</code> \u8868\u793a\u5f53\u8bf7\u6c42\u7684URL\u4e0d\u5b58\u5728\u65f6\u76f4\u63a5\u8fd4\u56de 404 \u9519\u8bef\uff0c<code>false</code> \u8868\u793a\u672a\u547d\u4e2d\u65f6\u53d1\u9001\u771f\u5b9eHTTP\u8bf7\u6c42</td></tr><tr><td><code>log</code></td><td><code>boolean</code></td><td><code>true</code></td><td>\u662f\u5426\u6253\u5370 Mock \u8bf7\u6c42\u4fe1\u606f\uff0c\u5f25\u8865\u6d4f\u89c8\u5668\u65e0Network\u4fe1\u606f\uff1b\u5f53\u8bf7\u6c42\u7ecf\u8fc7 Mock \u4f1a\u63a5\u6536\u3010\ud83d\udc7dMock\u3011</td></tr></tbody></table><h3 id="\u4e3a\u4ec0\u4e48\u53ea\u5bf9\u5f00\u53d1\u73af\u5883\u6709\u6548\uff1f">\u4e3a\u4ec0\u4e48\u53ea\u5bf9\u5f00\u53d1\u73af\u5883\u6709\u6548\uff1f<a onclick="window.location.hash = \'\u4e3a\u4ec0\u4e48\u53ea\u5bf9\u5f00\u53d1\u73af\u5883\u6709\u6548\uff1f\'" class="anchor">#</a></h3><p>Mock \u5e76\u975e\u662f\u771f\u5b9e\u6570\u636e\uff0c\u5927\u90e8\u5206\u573a\u666f\u662f\u9488\u5bf9\u5f00\u53d1\u672c\u5730\u6216\u6d4b\u8bd5\u73af\u5883\uff1b\u6240\u4ee5\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4e0d\u5e94\u8be5\u5305\u62ec Mock \u6a21\u5757\u4ee5\u53ca\u89c4\u5219\u6570\u636e\u3002\u56e0\u6b64\u4e0a\u8ff0\u624d\u4f1a\u6839\u636e <code>!environment.production</code> \u4f9d\u636e\u73af\u5883\u6765\u51b3\u5b9a\u662f\u5426\u52a0\u8f7d <code>DelonMockModule</code>\u3002</p><p>\u5f53\u7136\uff0c\u4f60\u4f9d\u7136\u53ef\u4ee5\u5728\u751f\u4ea7\u73af\u5883\u4e5f\u4f7f\u7528\u8fd9\u79cd\u89c4\u5219\uff0c\u5c31\u50cf <a target="_blank" href="https://cipchk.github.io/ng-alain/" data-url="https://cipchk.github.io/ng-alain/">https://cipchk.github.io/ng-alain/</a> \u4e00\u6837\uff0c\u9700\u8981\u4e00\u4e9b\u6a21\u62df\u8bf7\u6c42\u6765\u4fdd\u8bc1\u73af\u5883\u7684\u8fd0\u884c\u3002</p><pre class="hljs language-$1"><code>import { DelonMockModule } from \'@delon/mock\';\nimport * as MOCKDATA from \'../../_mock\';\n@NgModule({\n  imports: [\n    DelonMockModule.forRoot({ data: MOCKDATA })\n  ]\n})</code></pre></article>',meta:{order:1,title:"\u5f00\u59cb\u4f7f\u7528",type:"Documents"},toc:[{href:"#\u5199\u5728\u524d\u9762",title:"\u5199\u5728\u524d\u9762",h:2},{href:"#\u5982\u4f55\u4f7f\u7528\uff1f",title:"\u5982\u4f55\u4f7f\u7528\uff1f",h:2},{href:"#MockOptions-\u914d\u7f6e",title:"MockOptions \u914d\u7f6e",h:3},{href:"#\u4e3a\u4ec0\u4e48\u53ea\u5bf9\u5f00\u53d1\u73af\u5883\u6709\u6548\uff1f",title:"\u4e3a\u4ec0\u4e48\u53ea\u5bf9\u5f00\u53d1\u73af\u5883\u6709\u6548\uff1f",h:3}]}},demo:!1},this.codes=[]},d=function(){this.item={cols:1,urls:{"zh-CN":"packages/mock/docs/rule.md"},content:{"zh-CN":{content:"<article><h2 id=\"\u5199\u5728\u524d\u9762\">\u5199\u5728\u524d\u9762<a onclick=\"window.location.hash = '\u5199\u5728\u524d\u9762'\" class=\"anchor\">#</a></h2><p>Mock \u89c4\u5219\u6570\u636e\u662f\u4e00\u4e2a <code>Object</code> \u5bf9\u8c61\uff0cKey \u4e3a\u8bf7\u6c42\u57df\u58f0\u660e\uff0cValue \u4e3a\u54cd\u5e94\u5185\u5bb9\uff0c\u4f8b\u5982\uff1a</p><pre class=\"hljs language-$1\"><code>export const USERS = {\n  'GET /users': { users: [1, 2], total: 2 },\n}</code></pre><p>\u8868\u793a\u5f53\u901a\u8fc7 <code>HttpClient.get('/users')</code> \u8bbf\u95ee\u65f6\uff0c\u4f1a\u76f4\u63a5\u8fd4\u56de <code>{ users: [1, 2], total: 2 }</code>\uff0c\u5e76\u4e14\u4e0d\u4f1a\u53d1\u9001\u4efb\u4f55 HTTP \u8bf7\u6c42\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 <code>Network</code> \u9762\u677f\u6765\u786e\u8ba4\u3002</p><h2 id=\"Key-\u8bf7\u6c42\u57df\u58f0\u660e\">Key \u8bf7\u6c42\u57df\u58f0\u660e<a onclick=\"window.location.hash = 'Key-\u8bf7\u6c42\u57df\u58f0\u660e'\" class=\"anchor\">#</a></h2><p>\u4f7f\u7528 <code>' '</code> \u7a7a\u683c\u6765\u533a\u9694\u8bf7\u6c42\u65b9\u6cd5\u548cURL\uff0c\u8bf7\u6c42\u65b9\u6cd5\u53ef\u5ffd\u7565\uff0c\u9ed8\u8ba4\u4e3a <code>GET</code>\uff1bURL \u652f\u6301\u8def\u7531\u53c2\u6570\u548c\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u4e00\u4e9b\u6709\u6548\u7684 Key\uff1a</p><pre class=\"hljs language-$1\"><code>export const USERS = {\n    'GET /users': null,\n    // GET \u53ef\u7701\u7565\n    '/users/1': null,\n    // POST \u8bf7\u6c42\n    'POST /users/1': null,\n    // \u8def\u7531\u53c2\u6570\n    '/users/:id': null,\n    // \u4f7f\u7528 () \u8868\u793a\uff1a\u6b63\u5219\u8868\u8fbe\u5f0f\n    '/data/(.*)': null\n};</code></pre><blockquote><p>\u8def\u7531\u53c2\u6570\u503c\u901a\u8fc7 <code>MockRequest</code> \u6765\u83b7\u53d6\u3002</p></blockquote><h2 id=\"Value-\u54cd\u5e94\u5185\u5bb9\">Value \u54cd\u5e94\u5185\u5bb9<a onclick=\"window.location.hash = 'Value-\u54cd\u5e94\u5185\u5bb9'\" class=\"anchor\">#</a></h2><p>\u54cd\u5e94\u5185\u5bb9\u53ea\u652f\u6301\u4e09\u79cd\u7c7b\u578b\uff1a<code>Object</code>\u3001<code>Array</code>\u3001<code>(req: MockRequest) => any</code>\u3002</p><pre class=\"hljs language-$1\"><code>import { MockStatusError } from '@delon/mock';\n\nexport const USERS = {\n    // Array\n    '/users': [ { uid: 1 }, { uid: 2 } ],\n    // Object\n    '/users': { uid: 1 },\n    // Function\n    '/qs': (req: MockRequest) =&gt; req.queryString.pi,\n    // \u53d1\u9001 Status \u9519\u8bef\n    '/404': () =&gt; { throw new MockStatusError(404); }\n};</code></pre><h3 id=\"MockRequest\">MockRequest<a onclick=\"window.location.hash = 'MockRequest'\" class=\"anchor\">#</a></h3><table><thead><tr><th>\u540d\u79f0</th><th>\u7c7b\u578b</th><th>\u63cf\u8ff0</th></tr></thead><tbody><tr><td>params</td><td><code>any</code></td><td>\u8def\u7531\u53c2\u6570\uff0c<code>/:id</code> \u5219 <code>params.id</code></td></tr><tr><td>queryString</td><td><code>any</code></td><td>URL\u53c2\u6570\uff0c<code>/users?pi=1&ps=10</code> \u5219 <code>queryString.pi</code>\u3001<code>queryString.ps</code></td></tr><tr><td>headers</td><td><code>any</code></td><td>Headers \u503c</td></tr><tr><td>body</td><td><code>any</code></td><td>\u8bf7\u6c42 body</td></tr><tr><td>original</td><td><code>HttpRequest&lt;any></code></td><td>\u539f\u59cb <code>HttpRequest</code></td></tr></tbody></table><h3 id=\"MockStatusError\">MockStatusError<a onclick=\"window.location.hash = 'MockStatusError'\" class=\"anchor\">#</a></h3><p>\u5f53\u4f60\u5e0c\u671b\u54cd\u5e94\u4e00\u4e2a <code>404</code> \u5f02\u5e38\u65f6\u3002</p><h2 id=\"\u4e00\u4e9b\u793a\u4f8b\">\u4e00\u4e9b\u793a\u4f8b<a onclick=\"window.location.hash = '\u4e00\u4e9b\u793a\u4f8b'\" class=\"anchor\">#</a></h2><pre class=\"hljs language-$1\"><code>import { MockStatusError } from '@delon/mock';\n\nexport const USERS = {\n    // \u652f\u6301\u503c\u4e3a Object \u548c Array\n    'GET /users': { users: [1, 2], total: 2 },\n    // GET \u53ef\u7701\u7565\n    '/users/1': { users: [1, 2], total: 2 },\n    // POST \u8bf7\u6c42\n    'POST /users/1': { uid: 1 },\n    // \u83b7\u53d6\u8bf7\u6c42\u53c2\u6570 queryString\u3001headers\u3001body\n    '/qs': (req: MockRequest) =&gt; req.queryString.pi,\n    // \u8def\u7531\u53c2\u6570\n    '/users/:id': (req: MockRequest) =&gt; req.params, // /users/100, output: { id: 100 }\n    // \u53d1\u9001 Status \u9519\u8bef\n    '/404': () =&gt; { throw new MockStatusError(404); },\n    // \u4f7f\u7528 () \u8868\u793a\uff1a\u6b63\u5219\u8868\u8fbe\u5f0f\n    '/data/(.*)': (req: MockRequest) =&gt; req\n};</code></pre><h2 id=\"\u5b58\u50a8\u89c4\u5219\">\u5b58\u50a8\u89c4\u5219<a onclick=\"window.location.hash = '\u5b58\u50a8\u89c4\u5219'\" class=\"anchor\">#</a></h2><p>\u4e00\u822c\u6765\u8bf4 Mock \u90fd\u662f\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u9700\u8981\uff0c\u56e0\u6b64\u5efa\u8bae\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a <code>_mock</code> \u76ee\u5f55\uff0c\u5e76\u521b\u5efa\u4e00\u4e2a <code>index.ts</code> \u6587\u4ef6\u7528\u4e8e\u5bfc\u51fa\u6240\u6709\u6570\u636e\u89c4\u5219\uff0c\u53c2\u8003 <a target=\"_blank\" href=\"https://github.com/cipchk/ng-alain/tree/master/_mock\" data-url=\"https://github.com/cipchk/ng-alain/tree/master/_mock\">ng-alain/_mock</a>\u3002</p></article>",meta:{order:2,title:"\u89c4\u5219\u6570\u636e",type:"Documents"},toc:[{href:"#\u5199\u5728\u524d\u9762",title:"\u5199\u5728\u524d\u9762",h:2},{href:"#Key-\u8bf7\u6c42\u57df\u58f0\u660e",title:"Key \u8bf7\u6c42\u57df\u58f0\u660e",h:2},{href:"#Value-\u54cd\u5e94\u5185\u5bb9",title:"Value \u54cd\u5e94\u5185\u5bb9",h:2},{href:"#MockRequest",title:"MockRequest",h:3},{href:"#MockStatusError",title:"MockStatusError",h:3},{href:"#\u4e00\u4e9b\u793a\u4f8b",title:"\u4e00\u4e9b\u793a\u4f8b",h:2},{href:"#\u5b58\u50a8\u89c4\u5219",title:"\u5b58\u50a8\u89c4\u5219",h:2}]}},demo:!1},this.codes=[]},l=function(){},r=o("82da"),s=o("GYi0"),i=o("R6D3"),u=o("WP5L"),Z=o("71F0"),h=o("fE+l"),p=o("0RMT"),k=o("QcbP"),b=o("0D9X"),m=o("SpJI"),g=o("hBP+"),M=o("QPFe"),f=o("RdGh"),y=o("DyZ0"),q=o("TY3c"),S=o("u+Cy"),R=o("8+8K"),w=o("YVZs"),O=o("F/j7"),T=o("/EOF"),D=o("ZKYL"),E=o("SZk1"),j=o("5eO6"),A=o("p+4O"),v=o("bLMo"),C=o("ieBQ"),P=o("651C"),z=o("AKjh"),K=o("Z4UC"),N=o("ZYCi"),Q=o("ZYjt"),U=e.Pa({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}});function x(a){return e.lb(0,[(a()(),e.Ra(0,0,null,null,1,"app-docs",[],null,null,null,C.b,C.a)),e.Qa(1,245760,null,0,P.a,[z.a,K.a,N.n,Q.c],{codes:[0,"codes"],item:[1,"item"]},null)],function(a,t){var o=t.component;a(t,1,0,o.codes,o.item)},null)}var G=e.Na("app-mock-getting-started",n,function(a){return e.lb(0,[(a()(),e.Ra(0,0,null,null,1,"app-mock-getting-started",[],null,null,null,x,U)),e.Qa(1,49152,null,0,n,[],null,null)],null,null)},{},{},[]),V=e.Pa({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}});function Y(a){return e.lb(0,[(a()(),e.Ra(0,0,null,null,1,"app-docs",[],null,null,null,C.b,C.a)),e.Qa(1,245760,null,0,P.a,[z.a,K.a,N.n,Q.c],{codes:[0,"codes"],item:[1,"item"]},null)],function(a,t){var o=t.component;a(t,1,0,o.codes,o.item)},null)}var L=e.Na("app-mock-rule",d,function(a){return e.lb(0,[(a()(),e.Ra(0,0,null,null,1,"app-mock-rule",[],null,null,null,Y,V)),e.Qa(1,49152,null,0,d,[],null,null)],null,null)},{},{},[]),X=o("Ip0R"),F=o("gIcY"),H=o("t/Na"),_=o("M2Lx"),W=o("tn8F"),B=o("Fzqc"),I=o("dWZg"),J=o("qAlS"),$=o("eDkP"),aa=o("EAhq"),ta=o("MmOl"),oa=o("n8Yz"),ea=o("4c35"),ca=o("AXRx"),na=o("CGSU"),da=o("5CFV"),la=o("GTZx"),ra=o("hS58"),sa=o("XZsx"),ia=o("+ndR"),ua=o("EWQH"),Za=o("HjCm"),ha=o("aq9g"),pa=o("7Dpl"),ka=o("ekmu"),ba=o("vjj7"),ma=o("qdwt"),ga=o("l/Xz"),Ma=o("sRo1"),fa=o("mX2v"),ya=o("BQzg"),qa=o("hDaA"),Sa=o("YQXl"),Ra=o("M3JP"),wa=o("WNQ9"),Oa=o("5Oon"),Ta=o("lM9c"),Da=o("OSVY"),Ea=o("MNSj"),ja=o("MZBU"),Aa=o("ev4S"),va=o("G1y0"),Ca=o("zGKZ"),Pa=o("xly9"),za=o("u7PB"),Ka=o("1Ry3"),Na=o("4+vV"),Qa=o("ZgPA"),Ua=o("37MH"),xa=o("fZ1T"),Ga=o("iwTp"),Va=o("mSU2"),Ya=o("4vQL"),La=o("iTTW"),Xa=o("gQlp"),Fa=o("oCVe"),Ha=o("XYAa"),_a=o("ynfG"),Wa=o("A7o+"),Ba=o("gMdr"),Ia=o("6DZm"),Ja=o("ADoS"),$a=o("slxf");o.d(t,"MockModuleNgFactory",function(){return at});var at=e.Oa(l,[],function(a){return e.Ya([e.Za(512,e.j,e.Da,[[8,[r.Sb,r.Tb,r.Ub,r.Vb,r.Wb,r.Xb,s.a,i.a,u.a,Z.a,h.a,p.a,k.a,b.a,m.a,g.a,M.a,f.a,y.a,q.a,S.a,R.a,w.a,O.a,T.a,D.a,E.a,j.a,A.a,v.a,G,L]],[3,e.j],e.w]),e.Za(4608,X.q,X.p,[e.t,[2,X.B]]),e.Za(4608,F.t,F.t,[]),e.Za(4608,F.d,F.d,[]),e.Za(4608,H.m,H.s,[X.e,e.A,H.q]),e.Za(4608,H.t,H.t,[H.m,H.r]),e.Za(5120,H.a,function(a){return[a]},[H.t]),e.Za(4608,H.p,H.p,[]),e.Za(6144,H.n,null,[H.p]),e.Za(4608,H.l,H.l,[H.n]),e.Za(6144,H.b,null,[H.l]),e.Za(4608,H.g,H.o,[H.b,e.q]),e.Za(4608,H.c,H.c,[H.g]),e.Za(4608,_.b,_.b,[]),e.Za(5120,W.Id,W.Kd,[[3,W.Id],W.Jd]),e.Za(4608,X.f,X.f,[e.t]),e.Za(5120,W.fc,W.Ec,[[3,W.fc],W.yd,W.Id,X.f]),e.Za(6144,B.b,null,[X.e]),e.Za(4608,B.c,B.c,[[2,B.b]]),e.Za(4608,I.a,I.a,[]),e.Za(5120,J.c,J.a,[[3,J.c],e.y,I.a]),e.Za(5120,J.f,J.e,[[3,J.f],I.a,e.y]),e.Za(4608,$.k,$.k,[J.c,J.f,e.y,X.e]),e.Za(5120,$.f,$.l,[[3,$.f],X.e]),e.Za(4608,$.i,$.i,[J.f,X.e]),e.Za(5120,$.g,$.o,[[3,$.g],X.e]),e.Za(4608,$.d,$.d,[$.k,$.f,e.j,$.i,$.g,e.g,e.q,e.y,X.e]),e.Za(5120,$.m,$.n,[$.d]),e.Za(5120,W.Q,W.R,[X.e,[3,W.Q]]),e.Za(4608,W.Da,W.Da,[]),e.Za(4608,W.Ya,W.Ya,[]),e.Za(4608,W.gd,W.gd,[$.d,e.q,e.j,e.g]),e.Za(4608,W.md,W.md,[$.d,e.q,e.j,e.g]),e.Za(4608,W.vd,W.vd,[[3,W.vd]]),e.Za(4608,W.xd,W.xd,[$.d,W.Id,W.vd]),e.Za(4608,aa.c,aa.c,[]),e.Za(4608,ta.d,ta.d,[]),e.Za(4608,oa.a,oa.a,[W.e]),e.Za(1073742336,X.c,X.c,[]),e.Za(1073742336,F.r,F.r,[]),e.Za(1073742336,F.h,F.h,[]),e.Za(1073742336,N.r,N.r,[[2,N.w],[2,N.n]]),e.Za(1073742336,F.p,F.p,[]),e.Za(1073742336,H.e,H.e,[]),e.Za(1073742336,H.d,H.d,[]),e.Za(1073742336,_.c,_.c,[]),e.Za(1073742336,W.i,W.i,[]),e.Za(1073742336,W.Nd,W.Nd,[]),e.Za(1073742336,W.Md,W.Md,[]),e.Za(1073742336,W.Pd,W.Pd,[]),e.Za(1073742336,B.a,B.a,[]),e.Za(1073742336,ea.c,ea.c,[]),e.Za(1073742336,I.b,I.b,[]),e.Za(1073742336,J.b,J.b,[]),e.Za(1073742336,$.h,$.h,[]),e.Za(1073742336,W.l,W.l,[]),e.Za(1073742336,W.fb,W.fb,[]),e.Za(1073742336,W.v,W.v,[]),e.Za(1073742336,W.A,W.A,[]),e.Za(1073742336,W.C,W.C,[]),e.Za(1073742336,W.L,W.L,[]),e.Za(1073742336,W.T,W.T,[]),e.Za(1073742336,W.O,W.O,[]),e.Za(1073742336,W.V,W.V,[]),e.Za(1073742336,W.X,W.X,[]),e.Za(1073742336,W.Ea,W.Ea,[]),e.Za(1073742336,W.Ia,W.Ia,[]),e.Za(1073742336,W.Ka,W.Ka,[]),e.Za(1073742336,W.Na,W.Na,[]),e.Za(1073742336,W.Qa,W.Qa,[]),e.Za(1073742336,W.Ua,W.Ua,[]),e.Za(1073742336,W.db,W.db,[]),e.Za(1073742336,W.Wa,W.Wa,[]),e.Za(1073742336,W.hb,W.hb,[]),e.Za(1073742336,W.jb,W.jb,[]),e.Za(1073742336,W.lb,W.lb,[]),e.Za(1073742336,W.nb,W.nb,[]),e.Za(1073742336,W.pb,W.pb,[]),e.Za(1073742336,W.rb,W.rb,[]),e.Za(1073742336,W.yb,W.yb,[]),e.Za(1073742336,W.Db,W.Db,[]),e.Za(1073742336,W.Gb,W.Gb,[]),e.Za(1073742336,W.Jb,W.Jb,[]),e.Za(1073742336,W.Nb,W.Nb,[]),e.Za(1073742336,W.Rb,W.Rb,[]),e.Za(1073742336,W.Tb,W.Tb,[]),e.Za(1073742336,W.Wb,W.Wb,[]),e.Za(1073742336,W.gc,W.gc,[]),e.Za(1073742336,W.ec,W.ec,[]),e.Za(1073742336,W.Ac,W.Ac,[]),e.Za(1073742336,W.Cc,W.Cc,[]),e.Za(1073742336,W.Mc,W.Mc,[]),e.Za(1073742336,W.Qc,W.Qc,[]),e.Za(1073742336,W.Uc,W.Uc,[]),e.Za(1073742336,W.Zc,W.Zc,[]),e.Za(1073742336,W.bd,W.bd,[]),e.Za(1073742336,W.hd,W.hd,[]),e.Za(1073742336,W.nd,W.nd,[]),e.Za(1073742336,W.qd,W.qd,[]),e.Za(1073742336,W.td,W.td,[]),e.Za(1073742336,W.zd,W.zd,[]),e.Za(1073742336,W.Bd,W.Bd,[]),e.Za(1073742336,W.Dd,W.Dd,[]),e.Za(1073742336,W.a,W.a,[]),e.Za(1073742336,ca.a,ca.a,[]),e.Za(1073742336,na.a,na.a,[]),e.Za(1073742336,da.a,da.a,[]),e.Za(1073742336,la.a,la.a,[]),e.Za(1073742336,ra.a,ra.a,[]),e.Za(1073742336,sa.a,sa.a,[]),e.Za(1073742336,ia.a,ia.a,[]),e.Za(1073742336,ua.a,ua.a,[]),e.Za(1073742336,Za.a,Za.a,[]),e.Za(1073742336,ha.a,ha.a,[]),e.Za(1073742336,pa.a,pa.a,[]),e.Za(1073742336,ka.a,ka.a,[]),e.Za(1073742336,ba.a,ba.a,[]),e.Za(1073742336,ma.a,ma.a,[]),e.Za(1073742336,ga.a,ga.a,[]),e.Za(1073742336,Ma.a,Ma.a,[]),e.Za(1073742336,fa.a,fa.a,[]),e.Za(1073742336,ya.a,ya.a,[]),e.Za(1073742336,qa.a,qa.a,[]),e.Za(1073742336,aa.b,aa.b,[]),e.Za(1073742336,Sa.a,Sa.a,[]),e.Za(1073742336,Ra.a,Ra.a,[]),e.Za(1073742336,wa.a,wa.a,[]),e.Za(1073742336,Oa.a,Oa.a,[]),e.Za(1073742336,Ta.a,Ta.a,[]),e.Za(1073742336,Da.a,Da.a,[]),e.Za(1073742336,Ea.a,Ea.a,[]),e.Za(1073742336,ja.a,ja.a,[]),e.Za(1073742336,Aa.a,Aa.a,[]),e.Za(1073742336,va.a,va.a,[]),e.Za(1073742336,Ca.a,Ca.a,[]),e.Za(1073742336,Pa.a,Pa.a,[]),e.Za(1073742336,za.a,za.a,[]),e.Za(1073742336,Ka.a,Ka.a,[]),e.Za(1073742336,Na.a,Na.a,[]),e.Za(1073742336,Qa.a,Qa.a,[]),e.Za(1073742336,Ua.a,Ua.a,[]),e.Za(1073742336,xa.a,xa.a,[]),e.Za(1073742336,Ga.a,Ga.a,[]),e.Za(1073742336,Va.a,Va.a,[]),e.Za(1073742336,Ya.a,Ya.a,[]),e.Za(1073742336,La.a,La.a,[]),e.Za(1073742336,Xa.a,Xa.a,[]),e.Za(1073742336,Fa.a,Fa.a,[]),e.Za(1073742336,Ha.a,Ha.a,[]),e.Za(1073742336,_a.a,_a.a,[]),e.Za(1073742336,Wa.h,Wa.h,[]),e.Za(1073742336,Ba.b,Ba.b,[]),e.Za(1073742336,Ia.a,Ia.a,[]),e.Za(1073742336,ta.c,ta.c,[]),e.Za(1073742336,Ja.c,Ja.c,[]),e.Za(1073742336,$a.a,$a.a,[]),e.Za(1073742336,l,l,[]),e.Za(256,H.q,"XSRF-TOKEN",[]),e.Za(256,H.r,"X-XSRF-TOKEN",[]),e.Za(256,W.Jd,!1,[]),e.Za(256,W.yd,void 0,[]),e.Za(256,W.dd,{nzDuration:3e3,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),e.Za(256,W.kd,{nzTop:"24px",nzBottom:"24px",nzPlacement:"topRight",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[]),e.Za(1024,N.l,function(){return[[{path:"",component:c.a,children:[{path:"",redirectTo:"getting-started",pathMatch:"full"},{path:"getting-started",component:n},{path:"rule",component:d}]}]]},[])])})}}]);