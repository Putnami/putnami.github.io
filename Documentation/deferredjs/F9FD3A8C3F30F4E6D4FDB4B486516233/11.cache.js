$wnd.Documentation.runAsyncCallback11("function Jcc(){lab(this,Mcc(new Ncc(this)))}\nfunction Qcc(a,b){var c;c=new Otc;c.a+=BGc;Ltc(c,a6(a));c.a+=AGc;Ltc(c,a6(b));c.a+=CGc;return new N5(c.a)}\nfunction Mcc(a){var b,c,d,e,f,g;c=new Zsb(Qcc(a.b,a.H).a);jw(c.L,HGc,'PWT - Server Calls RPC Framework');b=I6(c.L);F6(a.c);F6(a.ab);b.b?Rv(b.b,b.a,b.c):K6(b.a);Ykb(c,(d=new atb(Occ(a.d).a),e=I6(d.L),F6(a.G),e.b?Rv(e.b,e.a,e.c):K6(e.a),Ykb(d,(f=new htb(1),ftb(f,(g=new Otc,g.a+=XHc,new N5(g.a)).a),f),F6(a.G)),a.rb.k=d,d),F6(a.c));Ykb(c,Lcc(a),F6(a.ab));return c}\nfunction Occ(a){var b;b=new Otc;b.a+=BGc;Ltc(b,a6(a));b.a+=\"'><\\/span> <p class='lead'> GWT RPC framework makes it easy to invoke service procedure on server. But not easy enough for <strong title='Putnami Web Toolkit'>PWT<\\/strong>. <br> That's why we improved this mechanism in various ways. <\\/p> <ul class='lead'> <li>Writing the full Async interface is no longer required.<\\/li> <li>Use the <code>@AsyncHandler<\\/code> instead to extend <code>AsynCallback<\\/code>.<\\/li> <li>Multiplex your request on a single HttpRequest.<\\/li> <li>Handle <code>CommandEvent<\\/code> to monitor the RPC activity.<\\/li> <li>Delay your request with the <code>@LazyCommand<\\/code> annotation.<\\/li> <\\/ul> <p class='lead'> Without any Async interfaces and inner <code>AsyncCallback<\\/code> declaration,  this feature helps you decrease the number of lines and keep your code readable and simple.  <br> By optimizing the number of HTTP requests, your application is more efficient and reactive. <\\/p>\";return new N5(b.a)}\nfunction Ncc(a){this.rb=a;this.d=$w($doc);this.bb=$w($doc);this.fb=$w($doc);this.hb=$w($doc);this.jb=$w($doc);this.lb=$w($doc);this.nb=$w($doc);this.pb=$w($doc);this.e=$w($doc);this.g=$w($doc);this.j=$w($doc);this.n=$w($doc);this.p=$w($doc);this.s=$w($doc);this.u=$w($doc);this.w=$w($doc);this.B=$w($doc);this.D=$w($doc);this.I=$w($doc);this.K=$w($doc);this.M=$w($doc);this.O=$w($doc);this.Q=$w($doc);this.S=$w($doc);this.U=$w($doc);this.W=$w($doc);this.Y=$w($doc);this.$=$w($doc);this.cb=$w($doc);this.b=$w($doc);this.H=$w($doc);this.G=new G6(this.d);this.eb=new G6(this.bb);this.gb=new G6(this.fb);this.ib=new G6(this.hb);this.kb=new G6(this.jb);this.mb=new G6(this.lb);this.ob=new G6(this.nb);this.qb=new G6(this.pb);this.f=new G6(this.e);this.i=new G6(this.g);this.k=new G6(this.j);this.o=new G6(this.n);this.r=new G6(this.p);this.t=new G6(this.s);this.v=new G6(this.u);this.A=new G6(this.w);this.C=new G6(this.B);this.F=new G6(this.D);this.J=new G6(this.I);this.L=new G6(this.K);this.N=new G6(this.M);this.P=new G6(this.O);this.R=new G6(this.Q);this.T=new G6(this.S);this.V=new G6(this.U);this.X=new G6(this.W);this.Z=new G6(this.Y);this._=new G6(this.$);this.db=new G6(this.cb);this.c=new G6(this.b);this.ab=new G6(this.H);this.a=(vnc(),unc)}\nfunction Lcc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,ab,bb,cb,db,eb,fb,gb,hb,ib;c=new Zsb(Pcc(a.bb,a.fb,a.hb,a.jb,a.lb,a.nb,a.pb,a.e,a.g,a.j,a.n,a.p,a.s,a.u,a.w,a.B,a.D,a.I,a.K,a.M,a.O,a.Q,a.S,a.U,a.W,a.Y,a.$,a.cb).a);b=I6(c.L);F6(a.eb);F6(a.gb);F6(a.ib);F6(a.kb);F6(a.mb);F6(a.ob);F6(a.qb);F6(a.f);F6(a.i);F6(a.k);F6(a.o);F6(a.r);F6(a.t);F6(a.v);F6(a.A);F6(a.C);F6(a.F);F6(a.J);F6(a.L);F6(a.N);F6(a.P);F6(a.R);F6(a.T);F6(a.V);F6(a.X);F6(a.Z);F6(a._);F6(a.db);b.b?Rv(b.b,b.a,b.c):K6(b.a);Ykb(c,(d=new htb(2),ftb(d,(I=new Otc,I.a+=vOc,new N5(I.a)).a),jw(d.L,NJc,OJc),d),F6(a.eb));Ykb(c,(e=new Zlb((J=new Otc,J.a+=\"<h4>Note :<\\/h4> <ul> <li>The CommandService can process more than one request at once.<\\/li> <li>The CommandService doesn't throw any global exception, each exception are wrapped in a CommandResponse.<\\/li> <\\/ul>\",new N5(J.a)).a),Xlb(e,(jmb(),gmb)),e),F6(a.gb));Ykb(c,(f=new htb(2),ftb(f,(K=new Otc,K.a+='On server side',new N5(K.a)).a),jw(f.L,NJc,OJc),f),F6(a.ib));Ykb(c,(g=new Zlb((L=new Otc,L.a+='<h4>Coming soon :<\\/h4> <ul> <li>J2EE CommandService resolving services in the JNDI<\\/li> <li>Spring CommandService resolving services in the ApplicationContext<\\/li> <\\/ul>',new N5(L.a)).a),Xlb(g,gmb),g),F6(a.kb));Ykb(c,(h=new htb(3),ftb(h,(M=new Otc,M.a+='BasicCommandService',new N5(M.a)).a),jw(h.L,NJc,OJc),h),F6(a.mb));Ykb(c,(i=new Wmc,Vmc(i,(N=new Otc,N.a+='<pre>\\n&lt;!-- Command service servlet --&gt;\\n&lt;servlet&gt;\\n  &lt;servlet-name&gt;commandService&lt;/servlet-name&gt;\\n  &lt;servlet-class&gt;fr.putnami.pwt.core.service.server.service.BasicCommandService&lt;/servlet-class&gt;\\n  &lt;init-param&gt;\\n      &lt;param-name&gt;services&lt;/param-name&gt;\\n      &lt;param-value&gt;fr.putnami.pwt.example.sample.server.service.PersonServiceImpl&lt;/param-value&gt;\\n  &lt;/init-param&gt;\\n&lt;/servlet&gt;\\n&lt;servlet-mapping&gt;\\n  &lt;servlet-name&gt;commandService&lt;/servlet-name&gt;\\n  &lt;url-pattern&gt;Sample/commandService&lt;/url-pattern&gt;\\n&lt;/servlet-mapping&gt;\\n<\\/pre>',new N5(N.a)).a),Umc(i,(Dnc(),Cnc)),i),F6(a.ob));Ykb(c,(j=new htb(2),ftb(j,(O=new Otc,O.a+='Service proxy',new N5(O.a)).a),jw(j.L,NJc,OJc),j),F6(a.qb));Ykb(c,(k=new htb(3),ftb(k,(P=new Otc,P.a+='Basic proxy',new N5(P.a)).a),jw(k.L,NJc,OJc),k),F6(a.f));Ykb(c,(l=new Wmc,Vmc(l,(Q=new Otc,Q.a+='<pre>\\n// Remote proxy interface.\\ninterface PersonRemoteService extends ServiceProxy&lt;PersonView, PersonService&gt;, PersonService {}\\n\\npublic PersonView(){\\n\\t// rebind the service in an instance. \\n\\tthis.personService = (PersonRemoteService) GWT.create(PersonRemoteService.class);\\n\\t// Bind callbacks with local handler methods.  \\n\\tthis.personService.bindService(this);\\n}\\n<\\/pre>',new N5(Q.a)).a),Umc(l,a.a),l),F6(a.i));Ykb(c,(m=new Wmc,Vmc(m,(R=new Otc,R.a+='<pre>\\n@InjectService\\nPersonService personService;\\n<\\/pre>',new N5(R.a)).a),Umc(m,a.a),m),F6(a.k));Ykb(c,(n=new htb(3),ftb(n,(S=new Otc,S.a+='Standard async method',new N5(S.a)).a),jw(n.L,NJc,OJc),n),F6(a.o));Ykb(c,(o=new Wmc,Vmc(o,(T=new Otc,T.a+='<pre>\\ninterface PersonRemoteService extends ServiceProxy&lt;PersonView, PersonService&gt;, PersonService {\\n\\tvoid getPeople(String name, AsyncCallback&lt;Person&gt; callback);\\n}\\n<\\/pre>',new N5(T.a)).a),Umc(o,a.a),o),F6(a.r));Ykb(c,(p=new htb(2),ftb(p,(U=new Otc,U.a+='Callbacks',new N5(U.a)).a),jw(p.L,NJc,OJc),p),F6(a.t));Ykb(c,(q=new htb(3),ftb(q,(V=new Otc,V.a+='Success callback',new N5(V.a)).a),jw(q.L,NJc,OJc),q),F6(a.v));Ykb(c,(r=new Wmc,Vmc(r,(W=new Otc,W.a+='<pre>\\n@AsyncHandler\\nvoid onSavePerson(Person result) {\\n\\t// Do something with the result\\n}\\n@AsyncHandler(method=\"savePerson\")\\nvoid customSavePersonCallback(Person result) {\\n\\t// Do an other hing with the result\\n}\\n<\\/pre>',new N5(W.a)).a),Umc(r,a.a),r),F6(a.A));Ykb(c,(s=new htb(3),ftb(s,(X=new Otc,X.a+='Faillure callback',new N5(X.a)).a),jw(s.L,NJc,OJc),s),F6(a.C));Ykb(c,(t=new Wmc,Vmc(t,(Y=new Otc,Y.a+='<pre>\\n@AsyncHandler\\nvoid onSavePersonThrown(Throwable thrown) {\\n\\t// Do something with the exception\\n}\\n@AsyncHandler(method=\"savePerson\")\\nvoid customSavePersonThrown(Throwable thrown) {\\n\\t// Do something with the exception\\n}\\n<\\/pre>',new N5(Y.a)).a),Umc(t,a.a),t),F6(a.F));Ykb(c,(u=new htb(2),ftb(u,(Z=new Otc,Z.a+='Invoke a service',new N5(Z.a)).a),jw(u.L,NJc,OJc),u),F6(a.J));Ykb(c,(v=new htb(3),ftb(v,($=new Otc,$.a+='Single request',new N5($.a)).a),jw(v.L,NJc,OJc),v),F6(a.L));Ykb(c,(w=new Zlb((ab=new Otc,ab.a+='<h4>Note : <\\/h4> <p> All proxy methods return null. the result is be passed to the <code>AsyncHandler<\\/code> <\\/p>',new N5(ab.a)).a),Xlb(w,gmb),w),F6(a.N));Ykb(c,(A=new Wmc,Vmc(A,(bb=new Otc,bb.a+='<pre>\\n@UiHandler(\"saveButton\")\\nvoid onSaveClick(ClickEvent event){\\n\\tPerson personToSave = ...\\n\\t// Call the remote service\\n\\tthis.personService.savePerson(personToSave);\\n}\\n<\\/pre>',new N5(bb.a)).a),Umc(A,a.a),A),F6(a.P));Ykb(c,(B=new htb(3),ftb(B,(cb=new Otc,cb.a+='Multiplex requests',new N5(cb.a)).a),jw(B.L,NJc,OJc),B),F6(a.R));Ykb(c,(C=new Wmc,Vmc(C,(db=new Otc,db.a+='<pre>\\nvoid load100Persons(){\\n\\t// allow to stack requests.\\n\\tCommandController.get().setSuspended(true);\\n\\tfor(int i = 0 ; i &lt; 100 ; i++){\\n\\t\\t// does not make any http request.\\n\\t\\tthis.personService.getPerson(i);\\n\\t}\\n\\t// Send the 100 requests over a single http request.\\n\\t// For each request the callback will be called.\\n\\tCommandController.get().flush();\\n}\\n<\\/pre>',new N5(db.a)).a),Umc(C,a.a),C),F6(a.T));Ykb(c,(D=new htb(3),ftb(D,(eb=new Otc,eb.a+='Lazy commands',new N5(eb.a)).a),jw(D.L,NJc,OJc),D),F6(a.V));Ykb(c,(F=new Wmc,Vmc(F,(fb=new Otc,fb.a+='<pre>\\ninterface PersonRemoteService extends ServiceProxy&lt;PersonView, PersonService&gt;, PersonService {\\n\\t@LazyCommand\\n\\tPerson getPerson(Long id);\\n}\\n<\\/pre>',new N5(fb.a)).a),Umc(F,a.a),F),F6(a.X));Ykb(c,(G=new htb(2),ftb(G,(gb=new Otc,gb.a+='Events',new N5(gb.a)).a),jw(G.L,NJc,OJc),G),F6(a.Z));Ykb(c,new Zlb((hb=new Otc,hb.a+='<h4>Note :<\\/h4> <p> If the method is annotated as <code>@QuietCommand<\\/code> events are not fired. <\\/p>',new N5(hb.a)).a),F6(a._));Ykb(c,(H=new Wmc,Vmc(H,(ib=new Otc,ib.a+='<pre>\\nCommandController.get().addCommandRequestHandler(requestHandler);\\nCommandController.get().addCommandResponseHandler(responseHandler);\\n<\\/pre>',new N5(ib.a)).a),Umc(H,a.a),H),F6(a.db));a.rb.j=c;return c}\nfunction Pcc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F){var G;G=new Otc;G.a+=BGc;Ltc(G,a6(a));G.a+=\"'><\\/span> <p> This framework is based on a invisible command pattern. This pattern allow to pipe all requests on unique servlet. <\\/p> <p> To make it work you need to: <\\/p> <ul> <li>On the client side you just have to generate a <code>ServiceProxy<\\/code> from the service interface.<\\/li> <li>On the server side you just have to instantiate a single servlet implementing the <code>CommandService<\\/code><\\/li> <\\/ul> <p> When you make a service call, the request flow is: <\\/p> <ol> <li>The <code>ServiceProxy<\\/code> builds one <code>CommandRequest<\\/code><\\/li> <li>The <code>CommandRequest<\\/code> is submited to the <code>CommandController<\\/code>.<\\/li> <li>The <code>CommandController<\\/code> sends a <code>CommandRequestEvent<\\/code> to notify handlers.<\\/li> <li>Then <code>CommandController<\\/code> encodes the <code>CommandRequest<\\/code> in a RPC payload.<\\/li> <li>The <code>CommandController<\\/code> sends the payload over one <code>HttpTequest.<\\/code><\\/li> <li>On the server side, the <code>CommandService<\\/code> handles the <code>CommandRequest<\\/code><\\/li> <li>The <code>CommandRequest<\\/code> is dispatched it to the responsive <code>CommandExecutor<\\/code>.<\\/li> <li>The <code>CommandExecutor<\\/code> invokes the service<\\/li> <li>The <code>CommandExecutor<\\/code> builds a <code>CommandResponse<\\/code> with the result or the exception.<\\/li> <li>The <code>CommandExecutor<\\/code> returns the <code>CommandResponse<\\/code><\\/li> <li>Then <code>CommandService<\\/code> writes <code>CommandResponse<\\/code> on the <code>HttpResponse<\\/code>.<\\/li> <li>Back on the client side, the <code>CommandController<\\/code> handles the <code>CommandResponse<\\/code>.<\\/li> <li>The <code>CommandResponse<\\/code> result or exception is dispatched the to differents binded callbacks.<\\/li> <li>Finally the <code>CommandController<\\/code> sends a <code>CommandResponseEvent<\\/code> to notify handlers.<\\/li> <\\/ol> <span id='\";Ltc(G,a6(b));G.a+=AGc;Ltc(G,a6(c));G.a+=\"'><\\/span> <p> On the server side all requests pass through the <code>CommandService<\\/code>.  <br> The <code>CommandService<\\/code> is in charge to dispatch the <code>CommandRequest<\\/code> to a <code>CommandExecutor<\\/code>. <br> Then <code>CommandExecutor<\\/code> handles <code>CommandRequest<\\/code>, invokes the targeted service then returns a <code>CommandResponse<\\/code>. <\\/p> <span id='\";Ltc(G,a6(d));G.a+=AGc;Ltc(G,a6(e));G.a+=\"'><\\/span> <div class='showcase-sample-block'> <div class='showcase-sample'> <p> The <code>BasicCommandService<\\/code> is a basic implementation allowing to instantiate services. <\\/p> <\\/div> <span id='\";Ltc(G,a6(f));G.a+=UJc;Ltc(G,a6(g));G.a+=AGc;Ltc(G,a6(h));G.a+=\"'><\\/span> <div class='showcase-sample-block'> <div class='showcase-sample'> <p> On the client side you first need to generate a proxy with the following steps: <\\/p> <ol> <li>Declare an interface which extends <code>ServiceProxy&lt;HANDLER, SERVICE&gt;<\\/code>.  <br> <strong>SERVICE<\\/strong> is the interface of the remote service. <br> <strong>HANDLER<\\/strong> is the class on which async callbacks are dispatched. <\\/li> <li>Generate the proxy with <code>GWT.create(...)<\\/code>.  <br> The rebind mechanism will generate the code to make commands and callbacks. <\\/li> <li>Then finally then bind the proxy with the handler <code>proxy.bindService(hadler)<\\/code>. <br> Attach the proxy to the handler, in order to properly dispatch the async callbacks. <\\/li> <\\/ol> <\\/div> <span id='\";Ltc(G,a6(i));G.a+=\"'><\\/span> <p>If you use the <a href='#!Injection'>Injection feature<\\/a> (if the view implements the <code>View<\\/code> interface), you can use the ()very simple) following :<\\/p> <span id='\";Ltc(G,a6(j));G.a+=UJc;Ltc(G,a6(k));G.a+=\"'><\\/span> <div class='showcase-sample-block'> <div class='showcase-sample'> <p> To declare standard async method, you have to : <\\/p> <ol> <li>Override the targeted method in the proxy interface.<\\/li> <li>Append an <code>AsyncCallback&lt;RETURN_TYPE&gt;<\\/code> parameter.<\\/li> <li>Set the return type to <strong>void<\\/strong>.<\\/li> <\\/ol> <\\/div> <span id='\";Ltc(G,a6(l));G.a+=UJc;Ltc(G,a6(m));G.a+=\"'><\\/span> <p> Thanks to the <code>@AsyncHandler<\\/code> you don't need to declare the verbose <code>AsyncCallback<\\/code>.  <br> The annoted methods of the handler are scanned and used to generate the callbacks. <\\/p> <div class='showcase-sample-block'> <span id='\";Ltc(G,a6(n));G.a+=\"'><\\/span> <div class='showcase-sample'> <p> The service method name is resolved by convention or with the attribute <code>@AsyncHandler(method=\\\"savePerson\\\")<\\/code>. <\\/p> <p> The convention is : on{methodName with first letter in upper case}[Event]? <\\/p> <p> The method must return void and have one parameter with the expected return type. <br> If the return type is <code>void<\\/code> then the parameter must be <code>Void<\\/code>. <br> If the return type is primitive then the parameter type is the Object type representation. <\\/p> <\\/div> <span id='\";Ltc(G,a6(o));G.a+=AGc;Ltc(G,a6(p));G.a+=\"'><\\/span> <div class='showcase-sample'> <p> The service method name is resolved by convention or with the attribute <code>@AsyncHandler(method=\\\"savePerson\\\")<\\/code>. <\\/p> <p> The convention is : on{methodName with first letter in upper case}[Thrown]? <\\/p> <p> The method return void and must have one Throwable parameter. <\\/p> <\\/div> <span id='\";Ltc(G,a6(q));G.a+=VJc;Ltc(G,a6(r));G.a+=\"'><\\/span> <div class='showcase-sample-block'> <span id='\";Ltc(G,a6(s));G.a+=\"'><\\/span> <div class='showcase-sample'> <p> Server method invokation is a pushover, you just have to invoke the methods on the <code>ServiceProxy<\\/code> then all concerned <code>AsyncHandler<\\/code> are called . <\\/p> <\\/div> <span id='\";Ltc(G,a6(t));G.a+=AGc;Ltc(G,a6(u));G.a+=AGc;Ltc(G,a6(v));G.a+=\"'><\\/span> <div class='showcase-sample'> <p> The <code>CommandController<\\/code> helps you suspend requests. When it is flushed the pending requests are collected and sent in a single HTTP Request to the server. On response, each <code>@AsyncHandler<\\/code> is properly called. <\\/p> <\\/div> <span id='\";Ltc(G,a6(w));G.a+=AGc;Ltc(G,a6(A));G.a+=\"'><\\/span> <div class='showcase-sample'> <p> Use the <code>LazyCommand<\\/code> annotation to stack the request untill the next \\\"no lazy\\\" request is done or <code>CommandController<\\/code> is flushed.  <\\/p> <\\/div> <span id='\";Ltc(G,a6(B));G.a+=VJc;Ltc(G,a6(C));G.a+=\"'><\\/span> <div class='showcase-sample-block'> <div class='showcase-sample'> <p> Events are fired when <code>CommandController<\\/code> sent and received request. <br> <\\/p> <p> Usage examples: <\\/p> <ul> <li>Make stats.<\\/li> <li>Display a request pending modal.<\\/li> <li>Reset timer to close user session.<\\/li> <\\/ul> <span id='\";Ltc(G,a6(D));G.a+=VJc;Ltc(G,a6(F));G.a+=IJc;return new N5(G.a)}\nx3(1369,46,JJc);var EZ=mrc(wIc,'ServerCallsPage',1369,ZU);x3(907,1369,KJc,Jcc);_.uh=function Kcc(a,b){A$b(this);b.xe(this)};var AZ=mrc(wIc,'ServerCallsPage_Injector',907,EZ);x3(995,1,{},Ncc);var BZ=mrc(wIc,'ServerCallsPage_ServerCallsPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets',995,G1);var Rcc;x3(647,1,eIc);_.Je=function _cc(){var a;!(f5(),Rcc)&&(Rcc=new Jcc);a=new D$b;ijb(a,Rcc);bjb(this.a,a)};kEc(Vt)(11);\n//# sourceURL=Documentation-11.js\n")
