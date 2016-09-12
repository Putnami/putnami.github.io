$wnd.Documentation.runAsyncCallback12("function Hcc(){pab(this,Jcc(new Kcc(this)))}\nfunction Mcc(a,b){var c;c=new duc;c.a+=UGc;auc(c,X5(a));c.a+=TGc;auc(c,X5(b));c.a+=VGc;return new I5(c.a)}\nfunction Ncc(a){var b;b=new duc;b.a+=UGc;auc(b,X5(a));b.a+=\"'><\\/span> <p class='lead'> <strong title='Putnami Web Toolkit'>PWT<\\/strong> provides a easy way to secure a <code>View<\\/code> or just a part of a view. <\\/p>\";return new I5(b.a)}\nfunction Kcc(a){this.G=a;this.e=cx($doc);this.n=cx($doc);this.p=cx($doc);this.s=cx($doc);this.u=cx($doc);this.w=cx($doc);this.B=cx($doc);this.D=cx($doc);this.f=cx($doc);this.c=cx($doc);this.j=cx($doc);this.i=new B6(this.e);this.o=new B6(this.n);this.r=new B6(this.p);this.t=new B6(this.s);this.v=new B6(this.u);this.A=new B6(this.w);this.C=new B6(this.B);this.F=new B6(this.D);this.g=new B6(this.f);this.d=new B6(this.c);this.k=new B6(this.j);this.a=(Mnc(),Lnc);this.b=(Unc(),Tnc)}\nfunction Lcc(a,b,c,d,e,f,g,h){var i;i=new duc;i.a+=UGc;auc(i,X5(a));i.a+=\"'><\\/span> <p>We use the rebind feature of GWT on <code>View<\\/code> implementing classes.<\\/p> <p>Securing a view means to check if a user has at least one role among a list of authorized roles before presenting the view.<\\/p> <p>If the user has not on of the roles, the application throw a <code>SecurityException<\\/code>.  You can intercept this exception with an <code>ErrorHandler<\\/code> in order to redirect to a sign in page or whatever you want !<\\/p>  <p>Example :<\\/p> <span id='\";auc(i,X5(b));i.a+=\"'><\\/span> <p>And an example of an associated error handler (in the app entry point or elsewhere):<\\/p> <span id='\";auc(i,X5(c));i.a+=hKc;auc(i,X5(d));i.a+=\"'><\\/span> <p>We provide a <code>Secure<\\/code> widget usable in ui templates. <br>The Widget content of the widget is displayed only if the user has the <code>hasRole<\\/code> role, or, if the <code>negate<\\/code> property is set to <code>true<\\/code>, if the user doesn't has the role<\\/p>  <p>Example :<\\/p> <span id='\";auc(i,X5(e));i.a+=\"'><\\/span>  <p>This widget listen to the <code>SignInEvent<\\/code> and <code>SignOutEvent<\\/code> events to display or not the contained widget.<\\/p>  <span id='\";auc(i,X5(f));i.a+=\"'><\\/span> <p>In order to use the security features, you'll have to import the <code>Security<\\/code> module in your module xml file<\\/p> <span id='\";auc(i,X5(g));i.a+=\"'><\\/span>  <p>In order to use the <code>@Secured<\\/code> annotation, you'll have to import the <code>Inject<\\/code> module in your module xml file<\\/p> <span id='\";auc(i,X5(h));i.a+=\"'><\\/span>  <p>Then you'll have to provide a <code>SessionController<\\/code>. <br> By default, the <code>SessionController<\\/code> is replaced by <code>DefaultSessionController<\\/code>, but you can replace it with your own implementation.<\\/p>  <p>The built-in <code>DefaultSessionController<\\/code> needs you to expose a server based service in charge of managing the user session.<br> This service must implement the <code>SessionService<\\/code> interface.<\\/p>\";return new I5(i.a)}\nfunction Jcc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B;c=new otb(Mcc(a.c,a.j).a);jw((J6(),c.L),$Gc,'PWT - Security');b=D6(c.L);A6(a.d);A6(a.k);b.b?Rv(b.b,b.a,b.c):F6(b.a);Nab(c,(d=new rtb(Ncc(a.e).a),e=D6(d.L),A6(a.i),e.b?Rv(e.b,e.a,e.c):F6(e.a),Nab(d,(p=new ytb(1),wtb(p,(q=new duc,q.a+=oIc,new I5(q.a)).a),p),A6(a.i)),a.G.k=d,d),A6(a.d));Nab(c,(f=new otb(Lcc(a.n,a.p,a.s,a.u,a.w,a.B,a.D,a.f).a),g=D6(f.L),A6(a.o),A6(a.r),A6(a.t),A6(a.v),A6(a.A),A6(a.C),A6(a.F),A6(a.g),g.b?Rv(g.b,g.a,g.c):F6(g.a),Nab(f,(h=new ytb(2),wtb(h,(r=new duc,r.a+='Securing the view',new I5(r.a)).a),jw(h.L,dKc,eKc),h),A6(a.o)),Nab(f,(i=new lnc,knc(i,(s=new duc,s.a+=NJc,new I5(s.a)).a),jnc(i,a.a),i),A6(a.r)),Nab(f,(j=new lnc,knc(j,(t=new duc,t.a+='<pre>\\nErrorManager.get().registerErrorHandler(new AbstractErrorHandler() {\\n\\t@Override\\n\\tpublic boolean handle(Throwable error) {\\n\\t\\tif (error instanceof SecurityException) {\\n\\t\\t\\tMvpController.get().goTo(new SigninPlace());\\n\\t\\t\\treturn true;\\n\\t\\t}\\n\\t\\treturn false;\\n\\t}\\n\\n});<\\/pre>',new I5(t.a)).a),jnc(j,a.a),j),A6(a.t)),Nab(f,(k=new ytb(2),wtb(k,(u=new duc,u.a+='Securing part of a view',new I5(u.a)).a),jw(k.L,dKc,eKc),k),A6(a.v)),Nab(f,(l=new lnc,knc(l,(v=new duc,v.a+='<pre>\\n&lt;ui:UiBinder xmlns:ui=\"urn:ui:com.google.gwt.uibinder\"\\n\\txmlns:w=\"urn:import:fr.putnami.pwt.core.widget.client\"\\n\\txmlns:s=\"urn:import:fr.putnami.pwt.core.security.client.widget\"&gt;\\n\\t...\\n\\t&lt;s:Secure hasRole=\"AUTHENTICATED\"&gt;\\n\\t\\t&lt;w:Button type=\"PRIMARY\" text=\"I am authenticated\" /&gt;\\n\\t&lt;/s:Secure&gt;\\n\\t&lt;s:Secure hasRole=\"AUTHENTICATED\" negate=\"true\"&gt;\\n\\t\\t&lt;w:Button type=\"WARNING\" text=\"I am NOT authenticated\" /&gt;\\n\\t&lt;/s:Secure&gt;<\\/pre>',new I5(v.a)).a),jnc(l,a.b),l),A6(a.A)),Nab(f,(m=new ytb(2),wtb(m,(w=new duc,w.a+=OOc,new I5(w.a)).a),jw(m.L,dKc,eKc),m),A6(a.C)),Nab(f,(n=new lnc,knc(n,(A=new duc,A.a+='<pre>\\n\\t&lt;inherits name=\"fr.putnami.pwt.core.security.Security\"/&gt;<\\/pre>',new I5(A.a)).a),jnc(n,a.b),n),A6(a.F)),Nab(f,(o=new lnc,knc(o,(B=new duc,B.a+=POc,new I5(B.a)).a),jnc(o,a.b),o),A6(a.g)),a.G.j=f,f),A6(a.k));return c}\ns3(1366,46,_Jc);var tZ=Erc(NIc,'SecurityPage',1366,UU);s3(905,1366,aKc,Hcc);_.vh=function Icc(a,b){R$b(this);b.xe(this)};var pZ=Erc(NIc,'SecurityPage_Injector',905,tZ);s3(993,1,{},Kcc);var qZ=Erc(NIc,'SecurityPage_SecurityPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets',993,B1);var Occ;s3(649,1,wIc);_.Je=function Ycc(){var a;!(a5(),Occ)&&(Occ=new Hcc);a=new U$b;yjb(a,Occ);rjb(this.a,a)};BEc(Vt)(12);\n//# sourceURL=Documentation-12.js\n")