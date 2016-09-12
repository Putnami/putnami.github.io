$wnd.Documentation.runAsyncCallback12("function ucc(){rab(this,wcc(new xcc(this)))}\nfunction zcc(a,b){var c;c=new Stc;c.a+=FGc;Ptc(c,U5(a));c.a+=EGc;Ptc(c,U5(b));c.a+=GGc;return new F5(c.a)}\nfunction Acc(a){var b;b=new Stc;b.a+=FGc;Ptc(b,U5(a));b.a+=\"'><\\/span> <p class='lead'> <strong title='Putnami Web Toolkit'>PWT<\\/strong> provides a easy way to secure a <code>View<\\/code> or just a part of a view. <\\/p>\";return new F5(b.a)}\nfunction xcc(a){this.G=a;this.e=_w($doc);this.n=_w($doc);this.p=_w($doc);this.s=_w($doc);this.u=_w($doc);this.w=_w($doc);this.B=_w($doc);this.D=_w($doc);this.f=_w($doc);this.c=_w($doc);this.j=_w($doc);this.i=new y6(this.e);this.o=new y6(this.n);this.r=new y6(this.p);this.t=new y6(this.s);this.v=new y6(this.u);this.A=new y6(this.w);this.C=new y6(this.B);this.F=new y6(this.D);this.g=new y6(this.f);this.d=new y6(this.c);this.k=new y6(this.j);this.a=(znc(),ync);this.b=(Hnc(),Gnc)}\nfunction ycc(a,b,c,d,e,f,g,h){var i;i=new Stc;i.a+=FGc;Ptc(i,U5(a));i.a+=\"'><\\/span> <p>We use the rebind feature of GWT on <code>View<\\/code> implementing classes.<\\/p> <p>Securing a view means to check if a user has at least one role among a list of authorized roles before presenting the view.<\\/p> <p>If the user has not on of the roles, the application throw a <code>SecurityException<\\/code>.  You can intercept this exception with an <code>ErrorHandler<\\/code> in order to redirect to a sign in page or whatever you want !<\\/p>  <p>Example :<\\/p> <span id='\";Ptc(i,U5(b));i.a+=\"'><\\/span> <p>And an example of an associated error handler (in the app entry point or elsewhere):<\\/p> <span id='\";Ptc(i,U5(c));i.a+=UJc;Ptc(i,U5(d));i.a+=\"'><\\/span> <p>We provide a <code>Secure<\\/code> widget usable in ui templates. <br>The Widget content of the widget is displayed only if the user has the <code>hasRole<\\/code> role, or, if the <code>negate<\\/code> property is set to <code>true<\\/code>, if the user doesn't has the role<\\/p>  <p>Example :<\\/p> <span id='\";Ptc(i,U5(e));i.a+=\"'><\\/span>  <p>This widget listen to the <code>SignInEvent<\\/code> and <code>SignOutEvent<\\/code> events to display or not the contained widget.<\\/p>  <span id='\";Ptc(i,U5(f));i.a+=\"'><\\/span> <p>In order to use the security features, you'll have to import the <code>Security<\\/code> module in your module xml file<\\/p> <span id='\";Ptc(i,U5(g));i.a+=\"'><\\/span>  <p>In order to use the <code>@Secured<\\/code> annotation, you'll have to import the <code>Inject<\\/code> module in your module xml file<\\/p> <span id='\";Ptc(i,U5(h));i.a+=\"'><\\/span>  <p>Then you'll have to provide a <code>SessionController<\\/code>. <br> By default, the <code>SessionController<\\/code> is replaced by <code>DefaultSessionController<\\/code>, but you can replace it with your own implementation.<\\/p>  <p>The built-in <code>DefaultSessionController<\\/code> needs you to expose a server based service in charge of managing the user session.<br> This service must implement the <code>SessionService<\\/code> interface.<\\/p>\";return new F5(i.a)}\nfunction wcc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B;c=new ctb(zcc(a.c,a.j).a);jw((G6(),c.L),LGc,'PWT - Security');b=A6(c.L);x6(a.d);x6(a.k);b.b?Rv(b.b,b.a,b.c):C6(b.a);Pab(c,(d=new ftb(Acc(a.e).a),e=A6(d.L),x6(a.i),e.b?Rv(e.b,e.a,e.c):C6(e.a),Pab(d,(p=new mtb(1),ktb(p,(q=new Stc,q.a+=_Hc,new F5(q.a)).a),p),x6(a.i)),a.G.k=d,d),x6(a.d));Pab(c,(f=new ctb(ycc(a.n,a.p,a.s,a.u,a.w,a.B,a.D,a.f).a),g=A6(f.L),x6(a.o),x6(a.r),x6(a.t),x6(a.v),x6(a.A),x6(a.C),x6(a.F),x6(a.g),g.b?Rv(g.b,g.a,g.c):C6(g.a),Pab(f,(h=new mtb(2),ktb(h,(r=new Stc,r.a+='Securing the view',new F5(r.a)).a),jw(h.L,QJc,RJc),h),x6(a.o)),Pab(f,(i=new $mc,Zmc(i,(s=new Stc,s.a+=yJc,new F5(s.a)).a),Ymc(i,a.a),i),x6(a.r)),Pab(f,(j=new $mc,Zmc(j,(t=new Stc,t.a+='<pre>\\nErrorManager.get().registerErrorHandler(new AbstractErrorHandler() {\\n\\t@Override\\n\\tpublic boolean handle(Throwable error) {\\n\\t\\tif (error instanceof SecurityException) {\\n\\t\\t\\tMvpController.get().goTo(new SigninPlace());\\n\\t\\t\\treturn true;\\n\\t\\t}\\n\\t\\treturn false;\\n\\t}\\n\\n});<\\/pre>',new F5(t.a)).a),Ymc(j,a.a),j),x6(a.t)),Pab(f,(k=new mtb(2),ktb(k,(u=new Stc,u.a+='Securing part of a view',new F5(u.a)).a),jw(k.L,QJc,RJc),k),x6(a.v)),Pab(f,(l=new $mc,Zmc(l,(v=new Stc,v.a+='<pre>\\n&lt;ui:UiBinder xmlns:ui=\"urn:ui:com.google.gwt.uibinder\"\\n\\txmlns:w=\"urn:import:fr.putnami.pwt.core.widget.client\"\\n\\txmlns:s=\"urn:import:fr.putnami.pwt.core.security.client.widget\"&gt;\\n\\t...\\n\\t&lt;s:Secure hasRole=\"AUTHENTICATED\"&gt;\\n\\t\\t&lt;w:Button type=\"PRIMARY\" text=\"I am authenticated\" /&gt;\\n\\t&lt;/s:Secure&gt;\\n\\t&lt;s:Secure hasRole=\"AUTHENTICATED\" negate=\"true\"&gt;\\n\\t\\t&lt;w:Button type=\"WARNING\" text=\"I am NOT authenticated\" /&gt;\\n\\t&lt;/s:Secure&gt;<\\/pre>',new F5(v.a)).a),Ymc(l,a.b),l),x6(a.A)),Pab(f,(m=new mtb(2),ktb(m,(w=new Stc,w.a+=zOc,new F5(w.a)).a),jw(m.L,QJc,RJc),m),x6(a.C)),Pab(f,(n=new $mc,Zmc(n,(A=new Stc,A.a+='<pre>\\n\\t&lt;inherits name=\"fr.putnami.pwt.core.security.Security\"/&gt;<\\/pre>',new F5(A.a)).a),Ymc(n,a.b),n),x6(a.F)),Pab(f,(o=new $mc,Zmc(o,(B=new Stc,B.a+=AOc,new F5(B.a)).a),Ymc(o,a.b),o),x6(a.g)),a.G.j=f,f),x6(a.k));return c}\np3(1367,46,MJc);var qZ=qrc(yIc,'SecurityPage',1367,RU);p3(906,1367,NJc,ucc);_.th=function vcc(a,b){E$b(this);b.xe(this)};var mZ=qrc(yIc,'SecurityPage_Injector',906,qZ);p3(994,1,{},xcc);var nZ=qrc(yIc,'SecurityPage_SecurityPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets',994,y1);var Bcc;p3(649,1,hIc);_.Je=function Lcc(){var a;!(Z4(),Bcc)&&(Bcc=new ucc);a=new H$b;pjb(a,Bcc);ijb(this.a,a)};oEc(Vt)(12);\n//# sourceURL=Documentation-12.js\n")