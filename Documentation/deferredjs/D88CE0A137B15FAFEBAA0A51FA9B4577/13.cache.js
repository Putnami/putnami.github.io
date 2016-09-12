$wnd.Documentation.runAsyncCallback13("function f6b(){}\nfunction h6b(){}\nfunction j6b(){}\nfunction $5b(){throw new U$b}\nfunction z6b(){rab(this,d6b(new e6b(this)))}\nfunction _5b(){throw new Ts('This is the runtime Exception message')}\nfunction a6b(){throw new esc('This is the illegal state Exception message')}\nfunction U$b(){Ts.call(this,'This is the custom runtime Exception message')}\nfunction m6b(a,b){var c;c=new Stc;c.a+=FGc;Ptc(c,U5(a));c.a+=EGc;Ptc(c,U5(b));c.a+=GGc;return new F5(c.a)}\nfunction n6b(a){var b;b=new Stc;b.a+=FGc;Ptc(b,U5(a));b.a+=\"'><\\/span> <p class='lead'> <strong title='Putnami Web Toolkit'>PWT<\\/strong> provides an easy way to handle errors in the application. <\\/p>\";return new F5(b.a)}\nfunction d6b(a){var b,c,d,e,f,g;c=new ctb(m6b(a.b,a.H).a);jw((G6(),c.L),LGc,'PWT - Errors management');b=A6(c.L);x6(a.c);x6(a.K);b.b?Rv(b.b,b.a,b.c):C6(b.a);Pab(c,(d=new ftb(n6b(a.d).a),e=A6(d.L),x6(a.G),e.b?Rv(e.b,e.a,e.c):C6(e.a),Pab(d,(f=new mtb(1),ktb(f,(g=new Stc,g.a+='Errors Handling',new F5(g.a)).a),f),x6(a.G)),a.ab.k=d,d),x6(a.c));Pab(c,c6b(a),x6(a.K));return c}\nfunction e6b(a){this.Z=new f6b;this.$=new h6b;this._=new j6b;this.ab=a;this.d=_w($doc);this.L=_w($doc);this.N=_w($doc);this.P=_w($doc);this.R=_w($doc);this.T=_w($doc);this.V=_w($doc);this.X=_w($doc);this.e=_w($doc);this.g=_w($doc);this.j=_w($doc);this.n=_w($doc);this.p=_w($doc);this.s=_w($doc);this.u=_w($doc);this.w=_w($doc);this.B=_w($doc);this.D=_w($doc);this.I=_w($doc);this.b=_w($doc);this.H=_w($doc);this.G=new y6(this.d);this.M=new y6(this.L);this.O=new y6(this.N);this.Q=new y6(this.P);this.S=new y6(this.R);this.U=new y6(this.T);this.W=new y6(this.V);this.Y=new y6(this.X);this.f=new y6(this.e);this.i=new y6(this.g);this.k=new y6(this.j);this.o=new y6(this.n);this.r=new y6(this.p);this.t=new y6(this.s);this.v=new y6(this.u);this.A=new y6(this.w);this.C=new y6(this.B);this.F=new y6(this.D);this.J=new y6(this.I);this.c=new y6(this.b);this.K=new y6(this.H);this.a=(znc(),ync)}\nfunction c6b(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N;c=new ctb(l6b(a.L,a.N,a.P,a.R,a.T,a.V,a.X,a.e,a.g,a.j,a.n,a.p,a.s,a.u,a.w,a.B,a.D,a.I).a);b=A6((G6(),c.L));x6(a.M);x6(a.O);x6(a.Q);x6(a.S);x6(a.U);x6(a.W);x6(a.Y);x6(a.f);x6(a.i);x6(a.k);x6(a.o);x6(a.r);x6(a.t);x6(a.v);x6(a.A);x6(a.C);x6(a.F);x6(a.J);b.b?Rv(b.b,b.a,b.c):C6(b.a);Pab(c,(d=new mtb(2),ktb(d,(v=new Stc,v.a+='Error Manager',new F5(v.a)).a),jw(d.L,QJc,RJc),d),x6(a.M));Pab(c,(e=new cmb((w=new Stc,w.a+=\"<p>Note : Exceptions thrown by server-side services don't generate HTTP 500 errors.<\\/p>\",new F5(w.a)).a),amb(e,(omb(),lmb)),e),x6(a.O));Pab(c,(f=new cmb((A=new Stc,A.a+='<p>Note : This <code>ErrorHandler<\\/code> has the lowest priority.<\\/p>',new F5(A.a)).a),amb(f,lmb),f),x6(a.Q));Pab(c,(g=new mtb(2),ktb(g,(B=new Stc,B.a+='Error Handlers',new F5(B.a)).a),jw(g.L,QJc,RJc),g),x6(a.S));Pab(c,(h=new mtb(3),ktb(h,(C=new Stc,C.a+=XOc,new F5(C.a)).a),h),x6(a.U));Pab(c,(i=new $mc,Zmc(i,(D=new Stc,D.a+='<pre>\\npublic class MyExceptionErrorHandler extends AbstractErrorHandler {\\n\\n\\t@Override\\n\\tpublic boolean handle(Throwable error) {\\n\\t\\tif (ErrorManager.get().hasErrorDisplayer()) {\\n\\t\\t\\tErrorManager.get().getErrorDisplayer().display(error, Severity.DANGER);\\n\\t\\t}\\n\\t\\treturn true;\\n\\t}\\n\\n}<\\/pre>',new F5(D.a)).a),Ymc(i,a.a),i),x6(a.W));Pab(c,(j=new $mc,Zmc(j,(F=new Stc,F.a+='<pre>\\n/*\\n* In Entry point\\n*/\\nErrorManager.get().registerHandler(new MyExceptionErrorHandler());<\\/pre>',new F5(F.a)).a),Ymc(j,a.a),j),x6(a.Y));Pab(c,(k=new $mc,Zmc(k,(G=new Stc,G.a+='<pre>\\n\\t@ErrorHandler\\n\\tpublic boolean handleAnError(Throwable error) {\\n\\t\\t...\\n\\t}<\\/pre>',new F5(G.a)).a),Ymc(k,a.a),k),x6(a.f));Pab(c,(l=new mtb(2),ktb(l,(H=new Stc,H.a+='Error Displayer',new F5(H.a)).a),jw(l.L,QJc,RJc),l),x6(a.i));Pab(c,(m=new mtb(3),ktb(m,(I=new Stc,I.a+=XOc,new F5(I.a)).a),jw(m.L,QJc,RJc),m),x6(a.k));Pab(c,(n=new $mc,Zmc(n,(J=new Stc,J.a+='<pre>\\n/*\\n* In Entry point\\n*/\\nSimpleErrorDisplayer errorDisplayer = new SimpleErrorDisplayer();\\n// Eventually set the error constants\\nerrorDisplayer.setConstants((ConstantsWithLookup) GWT.create(ErrorConstants.class));\\nErrorManager.get().setErrorDisplayer(errorDisplayer);<\\/pre>',new F5(J.a)).a),Ymc(n,a.a),n),x6(a.o));Pab(c,(o=new $mc,Zmc(o,(K=new Stc,K.a+='<pre>\\npublic interface ErrorConstants extends ConstantsWithLookup {\\n\\n\\t@DefaultStringValue(\"Runtime error\")\\n\\tString runtimeExceptionTitle();\\n\\n\\t@DefaultStringValue(\"An unknown exception occured. Please contact technical services if this Error is blocking\")\\n\\tString runtimeExceptionMessage();\\n}<\\/pre>',new F5(K.a)).a),Ymc(o,a.a),o),x6(a.r));Pab(c,(p=new mtb(2),ktb(p,(L=new Stc,L.a+=WJc,new F5(L.a)).a),jw(p.L,QJc,RJc),p),x6(a.t));Pab(c,(q=new $mc,Zmc(q,(M=new Stc,M.a+='<pre>\\n@ErrorManagmentDescription(\\n\\t\\terrorDisplay = SimpleErrorDisplayer.class,\\n\\t\\terrorHandlers = {\\n\\t\\t\\t\\tUmbrellaExceptionHandler.class, ApplicationUnreachableExceptionHandler.class\\n\\t\\t})\\npublic class MyApp implements Module {\\n\\n}<\\/pre>',new F5(M.a)).a),Ymc(q,a.a),q),x6(a.v));Pab(c,(r=new mtb(2),ktb(r,(N=new Stc,N.a+='Try it !',new F5(N.a)).a),jw(r.L,QJc,RJc),r),x6(a.A));Pab(c,(s=new Snb,s.r='Runtime Exception',Hnb(s),Gnb(s,a.Z),s),x6(a.C));Pab(c,(t=new Snb,t.r='Custom Runtime Exception',Hnb(t),Gnb(t,a.$),t),x6(a.F));Pab(c,(u=new Snb,u.r='Other Exception',Hnb(u),Gnb(u,a._),u),x6(a.J));a.ab.j=c;return c}\nfunction l6b(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s;s=new Stc;s.a+=FGc;Ptc(s,U5(a));s.a+=\"'><\\/span> <p><strong title='Putnami Web Toolkit'>PWT<\\/strong> use an <code>ErrorManager<\\/code> in wich we register some <code>ErrorHandler<\\/code>s and eventualy a <code>defaultErrorHandler<\\/code> which handle errors after the lower priority handler.<\\/p> <p>It also accepts an <code>ErrorDisplayer<\\/code> to eventually display a message to the end user<\\/p> <p>Default registered <code>ErrorHandler<\\/code>s are<\\/p> <ul> <li><code>ClientErrorHandler<\\/code> handles the 4xx class HTTP errors.<\\/li> <li><code>ServerErrorHandler<\\/code> handles the 5xx class HTTP errors  <span id='\";Ptc(s,U5(b));s.a+=\"'><\\/span> <\\/li> <li><code>DefaultCommandExceptionErrorHandler<\\/code> handles the <code>CommandException<\\/code> (Exceptions occuring server side when calling services method or encapsuling thrown exception). <span id='\";Ptc(s,U5(c));s.a+=\"'><\\/span> <\\/li> <\\/ul> <p>Those provided handlers simply display the error if a <code>ErrorDisplayer<\\/code> is registered.<\\/p>  <span id='\";Ptc(s,U5(d));s.a+=\"'><\\/span> <p>You can register several error<code>ErrorHandler<\\/code>s. They are processed by priority (higher first).<\\/p> <p>To define an <code>ErrorHandler<\\/code> you'll have to define a priority and implement the <code>handle<\\/code> method. If you want to prevent lower priority handlers processing, return <code>true<\\/code>.<\\/p> <p>We provide several base abstract classes to handle Exception, such as<\\/p> <ul> <li><code>AbstractErrorHandler<\\/code> a base class with a default priority.<\\/li> <li><code>AbstractStatusCodeErrorHandler<\\/code> to handle <code>StatusCodeException<\\/code><\\/li> <li><code>AbstractCommandExceptionErrorHandler<\\/code> to handle <code>CommandException<\\/code><\\/li> <li><code>AbstractInvocationExceptionErrorHandler<\\/code> : a particular <code>AbstractCommandExceptionErrorHandler<\\/code> to handle Server side Exception.<\\/li> <\\/ul> <span id='\";Ptc(s,U5(e));s.a+=EGc;Ptc(s,U5(f));s.a+=EGc;Ptc(s,U5(g));s.a+=\"'><\\/span>  <p>Using the <a href='#!Injection'>Injection feature<\\/a> (on <code>Injected<\\/code>, <code>View<\\/code> or <code>Module<\\/code> implementing views), you can define and register <code>ErrorHandler<\\/code> by using the <code>@ErrorHandler<\\/code> annotation :<\\/p> <span id='\";Ptc(s,U5(h));s.a+=UJc;Ptc(s,U5(i));s.a+=\"'><\\/span> <p>In most cases, the errors need to be displayed to the end user. We provide a simple <code>ErrorDisplayer<\\/code> : <code>SimpleErrorDisplayer<\\/code> which display errors with their stacktrace.<\\/p> <p>You can set a <code>ConstantsWithLookup<\\/code> to the <code>SimpleErrorDisplayer<\\/code> to eventually set the error title and message from the error class<\\/p> <ul> <li>When using the <code>display(Throwable, Severity)<\\/code> or the <code>display(String message, Throwable, Severity)<\\/code> method, the title will be extract from the property {classSimpleName}Title in constants.<\\/li> <li>When using the <code>display(Throwable, Severity)<\\/code> method, the message will be extract from the property {classSimpleName}Message in constants.<\\/li> <\\/ul> <br> <p>In order to use this displayer you'll have to set it in the <code>ErrorManager<\\/code><\\/p> <span id='\";Ptc(s,U5(j));s.a+=EGc;Ptc(s,U5(k));s.a+=EGc;Ptc(s,U5(l));s.a+=EGc;Ptc(s,U5(m));s.a+=\"'><\\/span> <p>In the application entry point, if you use the <a href='#!Injection'>Injection feature<\\/a> (the class must implement the <code>Module<\\/code> interface), you can easily init the <code>ErrorManager<\\/code><\\/p> <span id='\";Ptc(s,U5(n));s.a+=EGc;Ptc(s,U5(o));s.a+=EGc;Ptc(s,U5(p));s.a+=EGc;Ptc(s,U5(q));s.a+=EGc;Ptc(s,U5(r));s.a+=GGc;return new F5(s.a)}\np3(1117,39,VEc,U$b);var XU=qrc(dIc,'CustomRuntimeException',1117,z1);p3(1368,46,MJc);var gX=qrc(qIc,'ErrorsPage',1368,RU);p3(995,1,{},e6b);var cX=qrc(qIc,'ErrorsPage_ErrorsPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets',995,y1);p3(996,1,MGc,f6b);_.Mg=function g6b(a){_5b()};var _W=qrc(qIc,'ErrorsPage_ErrorsPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets/1',996,y1);p3(997,1,MGc,h6b);_.Mg=function i6b(a){$5b()};var aX=qrc(qIc,'ErrorsPage_ErrorsPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets/2',997,y1);p3(998,1,MGc,j6b);_.Mg=function k6b(a){a6b()};var bX=qrc(qIc,'ErrorsPage_ErrorsPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets/3',998,y1);var o6b;p3(651,1,hIc);_.Je=function y6b(){var a;!(Z4(),o6b)&&(o6b=new z6b);a=new H$b;pjb(a,o6b);ijb(this.a,a)};p3(907,1368,NJc,z6b);_.th=function A6b(a,b){E$b(this);b.xe(this)};var fX=qrc(qIc,'ErrorsPage_Injector',907,gX);oEc(Vt)(13);\n//# sourceURL=Documentation-13.js\n")
