$wnd.Documentation.runAsyncCallback16("function L_b(a){this.a=a}\nfunction Q_b(a){var b;b=new Stc;b.a+=_Oc;Ptc(b,U5(a));b.a+=GGc;return new F5(b.a)}\nfunction R_b(a){var b;b=new Stc;b.a+=aPc;Ptc(b,U5(a));b.a+=GGc;return new F5(b.a)}\nfunction P_b(a,b){var c;c=new Stc;c.a+=FGc;Ptc(c,U5(a));c.a+=EGc;Ptc(c,U5(b));c.a+=GGc;return new F5(c.a)}\nfunction G_b(a,b){if(_sc(OJc,b.a)){J8(a.a,false);J8(a.b,true)}else{J8(a.a,true);J8(a.b,false)}}\nfunction b0b(){this.d=Rq(QF(OF(E1,1),uEc,2,4,[PJc,OJc]));rab(this,J_b(new K_b(this)));pvb(this.c,PJc);J8(this.b,false)}\nfunction N_b(a){var b;b=new Stc;b.a+=FGc;Ptc(b,U5(a));b.a+=\"'><\\/span> <p class='lead'> This plugin tracks your visitor actions. Each visited places are reported in your google analytics account. You can also track user events, social network events, and exception events. The Ecommerce tracking is not supported yet. <\\/p>\";return new F5(b.a)}\nfunction J_b(a){var b,c,d,e,f,g;c=new ctb(P_b(a.b,a.H).a);jw((G6(),c.L),LGc,'PWT - Google Analytics Plugin');b=A6(c.L);x6(a.c);x6(a.K);b.b?Rv(b.b,b.a,b.c):C6(b.a);Pab(c,(d=new ftb(N_b(a.d).a),e=A6(d.L),x6(a.G),e.b?Rv(e.b,e.a,e.c):C6(e.a),Pab(d,(f=new mtb(1),ktb(f,(g=new Stc,g.a+='Google analytics plugin',new F5(g.a)).a),f),x6(a.G)),a.$.k=d,d),x6(a.c));Pab(c,I_b(a),x6(a.K));return c}\nfunction K_b(a){this.Z=new L_b(this);this.$=a;this.R=_w($doc);this.V=_w($doc);this.d=_w($doc);this.L=_w($doc);this.N=_w($doc);this.P=_w($doc);this.T=_w($doc);this.X=_w($doc);this.e=_w($doc);this.g=_w($doc);this.j=_w($doc);this.n=_w($doc);this.p=_w($doc);this.s=_w($doc);this.u=_w($doc);this.w=_w($doc);this.B=_w($doc);this.D=_w($doc);this.I=_w($doc);this.b=_w($doc);this.H=_w($doc);this.S=new y6(this.R);this.W=new y6(this.V);this.G=new y6(this.d);this.M=new y6(this.L);this.O=new y6(this.N);this.Q=new y6(this.P);this.U=new y6(this.T);this.Y=new y6(this.X);this.f=new y6(this.e);this.i=new y6(this.g);this.k=new y6(this.j);this.o=new y6(this.n);this.r=new y6(this.p);this.t=new y6(this.s);this.v=new y6(this.u);this.A=new y6(this.w);this.C=new y6(this.B);this.F=new y6(this.D);this.J=new y6(this.I);this.c=new y6(this.b);this.K=new y6(this.H);this.a=(znc(),ync)}\nfunction O_b(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q;q=new Stc;q.a+=FGc;Ptc(q,U5(a));q.a+=UJc;Ptc(q,U5(b));q.a+=\"'><\\/span> <p>First you need to add a dependency on the google analytics indexing plugin :<\\/p> <div class='clearfix'><\\/div>  <span id='\";Ptc(q,U5(c));q.a+=EGc;Ptc(q,U5(d));q.a+=UJc;Ptc(q,U5(e));q.a+=\"'><\\/span> <p> To setup the plugin you have to call init method on <code>GoogleAnalytics<\\/code> class.  <\\/p> <p> If the domain is not set, the analytics plugin will tracks events even if you are on a localhost server. <\\/p> <p> You can enforce the ssl communication with the <code>forceSSL<\\/code> method. <\\/p> <p> Once initialized, the plugin tracks all visited pages. Plugged on the MVP framework it sends a pageview event for each visited place. <\\/p> <span id='\";Ptc(q,U5(f));q.a+=EGc;Ptc(q,U5(g));q.a+=UJc;Ptc(q,U5(h));q.a+=\"'><\\/span> <p> You can track custom actions by invoking the <code>trackEvent<\\/code> method. <\\/p> <p> <strong>parameters :<\\/strong> <\\/p> <ul> <li><strong>category<\\/strong> : Typically the object that was interacted with (required)<\\/li> <li><strong>actoin<\\/strong> : The type of interaction (required) <\\/li> <li><strong>label<\\/strong> : Useful for categorizing events <\\/li> <li><strong>value<\\/strong> : Values must be non-negative. Useful to pass counts<\\/li> <\\/ul> <span id='\";Ptc(q,U5(i));q.a+=EGc;Ptc(q,U5(j));q.a+=\"'><\\/span> <p> You can track social network actions with the <code>trackSocial<\\/code> method. <\\/p> <p> <strong>parameters :<\\/strong> <\\/p> <ul> <li><strong>socialNetwork<\\/strong> : The network on which the action occurs (e.g. Facebook, Twitter)<\\/li> <li><strong>socialAction<\\/strong> : The type of action that happens (e.g. Like, Send, Tweet).<\\/li> <li><strong>socialTarget<\\/strong> : Specifies the target of a social interaction. This value is typically a URL but can be any text. (e.g. http://mycoolpage.com)<\\/li> <\\/ul> <span id='\";Ptc(q,U5(k));q.a+=EGc;Ptc(q,U5(l));q.a+=\"'><\\/span> <p> You can automatically track uncaught exception by invoking the <code>handleUncaughtException<\\/code> method. <\\/p> <span id='\";Ptc(q,U5(m));q.a+=\"'><\\/span> <p> You can equally manually track exception event with the <code>trackException<\\/code> method. <\\/p> <p> <strong>Parameters :<\\/strong>  <\\/p> <ul> <li><strong>description<\\/strong> : A description of the exception.<\\/li> <li><strong>fatal<\\/strong> : Indicates whether the exception was fatal. true indicates fatal.<\\/li> <\\/ul> <p> <\\/p> <span id='\";Ptc(q,U5(n));q.a+=EGc;Ptc(q,U5(o));q.a+=\"'><\\/span> <p> You can enable the display feature of google analytics with the <code>displayfeatures<\\/code> method. This Feature is quite usefull to report the user demographics profil (Age, Gender, and Interest). You can better understand who your users are. <\\/p> <span id='\";Ptc(q,U5(p));q.a+=GGc;return new F5(q.a)}\nfunction I_b(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O;c=new ctb(O_b(a.L,a.N,a.P,a.T,a.X,a.e,a.g,a.j,a.n,a.p,a.s,a.u,a.w,a.B,a.D,a.I).a);b=A6((G6(),c.L));x6(a.M);x6(a.O);x6(a.Q);x6(a.U);x6(a.Y);x6(a.f);x6(a.i);x6(a.k);x6(a.o);x6(a.r);x6(a.t);x6(a.v);x6(a.A);x6(a.C);x6(a.F);x6(a.J);b.b?Rv(b.b,b.a,b.c):C6(b.a);Pab(c,(d=new mtb(2),ktb(d,(w=new Stc,w.a+=ZOc,new F5(w.a)).a),jw(d.L,QJc,RJc),d),x6(a.M));Pab(c,(e=new aEb,oZb(e,new nVb(SJc)),svb(e,a.$.d),Y8(e,a.Z,(!LB&&(LB=new oA),LB)),a.$.c=e,e),x6(a.O));Pab(c,(f=new ctb(Q_b(a.R).a),oZb(f,new nVb($Oc)),g=A6(f.L),x6(a.S),g.b?Rv(g.b,g.a,g.c):C6(g.a),Pab(f,(h=new $mc,Zmc(h,(A=new Stc,A.a+='<pre>\\ndependencies {\\n\\t\"fr.putnami.pwt:pwt-google-analytics:$pwtVersion\"\\n}\\n<\\/pre>',new F5(A.a)).a),Ymc(h,a.a),h),x6(a.S)),a.$.a=f,f),x6(a.Q));Pab(c,(i=new ctb(R_b(a.V).a),oZb(i,new nVb($Oc)),j=A6(i.L),x6(a.W),j.b?Rv(j.b,j.a,j.c):C6(j.a),Pab(i,(k=new $mc,Zmc(k,(B=new Stc,B.a+='<pre>\\n&lt;dependency&gt;\\n\\t&lt;groupId&gt;fr.putnami.pwt&lt;/groupId&gt;\\n\\t&lt;artifactId&gt;pwt-google-analytics&lt;/artifactId&gt;\\n\\t&lt;version&gt;${pwt.version}&lt;/version&gt;\\n&lt;/dependency&gt;\\n<\\/pre>',new F5(B.a)).a),Ymc(k,(Hnc(),Gnc)),k),x6(a.W)),a.$.b=i,i),x6(a.U));Pab(c,(l=new mtb(2),ktb(l,(C=new Stc,C.a+='Setup',new F5(C.a)).a),jw(l.L,QJc,RJc),l),x6(a.Y));Pab(c,(m=new $mc,Zmc(m,(D=new Stc,D.a+='<pre>\\nGoogleAnalytics analytics = GoogleAnalytics.init(\"{TACK_ID}\", \"{mydomain.com}\");\\nanalytics.forceSSL(true);\\n<\\/pre>',new F5(D.a)).a),Ymc(m,a.a),m),x6(a.f));Pab(c,new cmb((F=new Stc,F.a+=\"<strong>Note<\\/strong> <p>This plugin requires an google analytics account.<\\/p> <p>Please visit google analytics website first : <a href='https://www.google.com/analytics' target='_blank'>https://www.google.com/analytics<\\/a><\\/p>\",new F5(F.a)).a),x6(a.i));Pab(c,(n=new mtb(2),ktb(n,(G=new Stc,G.a+='Events tracking',new F5(G.a)).a),jw(n.L,QJc,RJc),n),x6(a.k));Pab(c,(o=new $mc,Zmc(o,(H=new Stc,H.a+='<pre>\\n@UiHandler(\"myButton\")\\npublic void onMyButtonClick(ClickEvent evt) {\\n\\tanalytics.trackEvent(\"button\", \"click\", \"nav buttons\", 4);\\n}\\n<\\/pre>',new F5(H.a)).a),Ymc(o,a.a),o),x6(a.o));Pab(c,(p=new mtb(2),ktb(p,(I=new Stc,I.a+='Social tracking',new F5(I.a)).a),jw(p.L,QJc,RJc),p),x6(a.r));Pab(c,(q=new $mc,Zmc(q,(J=new Stc,J.a+='<pre>\\n@UiHandler(\"mySocialButton\")\\npublic void onMySocialButtonClick(ClickEvent evt) {\\n\\tanalytics.trackSocial(\"facebook\", \"like\", \"http://mycoolpage.com\"));\\n}\\n<\\/pre>',new F5(J.a)).a),Ymc(q,a.a),q),x6(a.t));Pab(c,(r=new mtb(2),ktb(r,(K=new Stc,K.a+='Exception tracking',new F5(K.a)).a),jw(r.L,QJc,RJc),r),x6(a.v));Pab(c,(s=new $mc,Zmc(s,(L=new Stc,L.a+='<pre>\\nGoogleAnalytics analytics = GoogleAnalytics.init(\"{TACK_ID}\", \"{mydomain.com}\");\\nanalytics.handleUncaughtException(true);\\n<\\/pre>',new F5(L.a)).a),Ymc(s,a.a),s),x6(a.A));Pab(c,(t=new $mc,Zmc(t,(M=new Stc,M.a+='<pre>\\n@AsyncHandler\\nvoid onSavePersonThrown(Throwable thrown) {\\n\\tanalytics.trackException(thrown.getMessage(), false);\\n}\\n<\\/pre>',new F5(M.a)).a),Ymc(t,a.a),t),x6(a.C));Pab(c,(u=new mtb(2),ktb(u,(N=new Stc,N.a+='Display Features',new F5(N.a)).a),jw(u.L,QJc,RJc),u),x6(a.F));Pab(c,(v=new $mc,Zmc(v,(O=new Stc,O.a+='<pre>\\nGoogleAnalytics analytics = GoogleAnalytics.init(\"{TACK_ID}\", \"{mydomain.com}\");\\nanalytics.displayfeatures();\\n<\\/pre>',new F5(O.a)).a),Ymc(v,a.a),v),x6(a.J));a.$.j=c;return c}\np3(660,46,MJc);var oV=qrc(jIc,'GoogleAnalyticsPage',660,RU);p3(1003,1,{},K_b);var kV=qrc(jIc,'GoogleAnalyticsPage_GoogleAnalyticsPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets',1003,y1);p3(1004,1,PFc,L_b);_.jf=function M_b(a){G_b(this.a.$,a)};var jV=qrc(jIc,'GoogleAnalyticsPage_GoogleAnalyticsPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets/1',1004,y1);var S_b;p3(659,1,hIc);_.Je=function a0b(){var a;!(Z4(),S_b)&&(S_b=new b0b);a=new H$b;pjb(a,S_b);ijb(this.a,a)};p3(910,660,NJc,b0b);_.th=function c0b(a,b){E$b(this);b.xe(this)};var nV=qrc(jIc,'GoogleAnalyticsPage_Injector',910,oV);oEc(Vt)(16);\n//# sourceURL=Documentation-16.js\n")