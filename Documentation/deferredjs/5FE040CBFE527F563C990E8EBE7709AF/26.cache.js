$wnd.Documentation.runAsyncCallback26('function jgc(){sab(this,mgc(new ngc(this)))}\nfunction ogc(a){var b;b=new Utc;b.a+=HGc;Rtc(b,V5(a));b.a+=IGc;return new G5(b.a)}\nfunction qgc(a,b){var c;c=new Utc;c.a+=HGc;Rtc(c,V5(a));c.a+=GGc;Rtc(c,V5(b));c.a+=IGc;return new G5(c.a)}\nfunction mgc(a){var b,c,d,e,f,g;c=new etb(qgc(a.c,a.I).a);jw((H6(),c.L),NGc,\'PWT - Tutorial Part 3 - Build more pages\');b=B6(c.L);y6(a.d);y6(a.T);b.b?Rv(b.b,b.a,b.c):D6(b.a);Qab(c,(d=new htb(ogc(a.e).a),e=B6(d.L),y6(a.H),e.b?Rv(e.b,e.a,e.c):D6(e.a),Qab(d,(f=new otb(1),mtb(f,(g=new Utc,g.a+=\'Part 3 - Build more pages\',new G5(g.a)).a),f),y6(a.H)),a.gb.k=d,d),y6(a.d));Qab(c,lgc(a),y6(a.T));return c}\nfunction ngc(a){this.gb=a;this.e=_w($doc);this.U=_w($doc);this.W=_w($doc);this.Y=_w($doc);this.$=_w($doc);this.ab=_w($doc);this.cb=_w($doc);this.eb=_w($doc);this.f=_w($doc);this.i=_w($doc);this.k=_w($doc);this.o=_w($doc);this.r=_w($doc);this.t=_w($doc);this.v=_w($doc);this.A=_w($doc);this.C=_w($doc);this.F=_w($doc);this.J=_w($doc);this.L=_w($doc);this.N=_w($doc);this.P=_w($doc);this.R=_w($doc);this.c=_w($doc);this.I=_w($doc);this.H=new z6(this.e);this.V=new z6(this.U);this.X=new z6(this.W);this.Z=new z6(this.Y);this._=new z6(this.$);this.bb=new z6(this.ab);this.db=new z6(this.cb);this.fb=new z6(this.eb);this.g=new z6(this.f);this.j=new z6(this.i);this.n=new z6(this.k);this.p=new z6(this.o);this.s=new z6(this.r);this.u=new z6(this.t);this.w=new z6(this.v);this.B=new z6(this.A);this.D=new z6(this.C);this.G=new z6(this.F);this.K=new z6(this.J);this.M=new z6(this.L);this.O=new z6(this.N);this.Q=new z6(this.P);this.S=new z6(this.R);this.d=new z6(this.c);this.T=new z6(this.I);this.a=(Bnc(),Anc);this.b=(Jnc(),Inc)}\nfunction pgc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var w;w=new Utc;w.a+="<ul class=\'pager\'> <li class=\'previous\'><a href=\'#!Tuto2\'>\\u2190 Part 2 : Build the Welcome Page<\\/a><\\/li> <li class=\'next\'><a href=\'#!Tuto4\'>Part 4 : Build a contact form \\u2192<\\/a><\\/li> <\\/ul>  <p>In this tutorial, we will add some static content to the project inited in <em><a href=\'#!Tuto2\'>Part 2 : Build the Welcome Page<\\/a><\\/em><\\/p>  <span id=\'";Rtc(w,V5(a));w.a+="\'><\\/span> <p>In the <em>Part 2<\\/em> we\'ve seen how to add some place and views, so just add those two views / Places :<\\/p>  <span id=\'";Rtc(w,V5(b));w.a+=WJc;Rtc(w,V5(c));w.a+=WJc;Rtc(w,V5(d));w.a+=WJc;Rtc(w,V5(e));w.a+="\'><\\/span>  <p>Then the places :<\\/p>  <span id=\'";Rtc(w,V5(f));w.a+=WJc;Rtc(w,V5(g));w.a+="\'><\\/span>  <p>Finally, we declare the activities to the <code>MvpDescription<\\/code> in the entry point :<\\/p>  <span id=\'";Rtc(w,V5(h));w.a+=XJc;Rtc(w,V5(i));w.a+=\'\\\'><\\/span>  <p>To navigate between pages, you have to use the <code>MvpController.goTo(Place)<\\/code> method.<\\/p> <p>So add a button to the "Welcome" view to navigate to the "About" view :<\\/p> <span id=\\\'\';Rtc(w,V5(j));w.a+="\'><\\/span>  <p>and in the java class :<\\/p> <span id=\'";Rtc(w,V5(k));w.a+=XJc;Rtc(w,V5(l));w.a+="\'><\\/span>  <p>At this point, when you navigate between pages, all the content of the page is replaced by the new content.<\\/p> <p>You may want to keep some static content beetween pages. To do so, we will create a decorator (implementing <code>AcceptOneWidget<\\/code>)  and set it as display associated with the <code>ActivityManager<\\/code>.<\\/p>  <span id=\'";Rtc(w,V5(m));w.a+="\'><\\/span>  <p>And the associated ui.xml file :<\\/p> <span id=\'";Rtc(w,V5(n));w.a+="\'><\\/span>   <p>And set the decorator as <code>ActivityManager<\\/code>\'s display in the <code>TutorialApp<\\/code> class :<\\/p> <span id=\'";Rtc(w,V5(o));w.a+=XJc;Rtc(w,V5(p));w.a+="\'><\\/span>  <p>In the page decorator, we add a <code>NavBar<\\/code> to navigate between places :<\\/p> <span id=\'";Rtc(w,V5(q));w.a+="\'><\\/span>  <p>And if you want this NavBar to be static on the top when you scroll, simply put the NavBar in an <code>Affix<\\/code> :<\\/p> <span id=\'";Rtc(w,V5(r));w.a+=XJc;Rtc(w,V5(s));w.a+="\'><\\/span>  <p>With PWT, you can use different templates for different locales. We will use a different template for the french locale (the button is out of the Jumbotron with a different icon) in the file <code>fr/putnami/pwt/tutorial/client/welcome/WelcomeView_fr.ui.xml<\\/code><\\/p> <span id=\'";Rtc(w,V5(t));w.a+="\'><\\/span> <p>Then add the <code>fr<\\/code> locale in the module xml file (<code>fr/putnami/pwt/tutorial/Tutorial.gwt.xml<\\/code>):<\\/p> <span id=\'";Rtc(w,V5(u));w.a+="\'><\\/span>  <p>Then go to <a href=\'http://localhost:8080/putnami-pwt-tutorial/?locale=fr\'>http://localhost:8080/putnami-pwt-tutorial/?locale=fr<\\/a> to see the french version of the welcome page.<\\/p> <p>Go to <a href=\'http://localhost:8080/putnami-pwt-tutorial/?locale=en\'>http://localhost:8080/putnami-pwt-tutorial/?locale=en<\\/a> to see the default version.<\\/p>  <span id=\'";Rtc(w,V5(v));w.a+="\'><\\/span>   <ul class=\'pager\'> <li class=\'previous\'><a href=\'#!Tuto2\'>\\u2190 Part 2 : Build the Welcome Page<\\/a><\\/li> <li class=\'next\'><a href=\'#!Tuto4\'>Part 4 : Build a contact form \\u2192<\\/a><\\/li> <\\/ul>";return new G5(w.a)}\nfunction lgc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X;c=new etb(pgc(a.U,a.W,a.Y,a.$,a.ab,a.cb,a.eb,a.f,a.i,a.k,a.o,a.r,a.t,a.v,a.A,a.C,a.F,a.J,a.L,a.N,a.P,a.R).a);b=B6((H6(),c.L));y6(a.V);y6(a.X);y6(a.Z);y6(a._);y6(a.bb);y6(a.db);y6(a.fb);y6(a.g);y6(a.j);y6(a.n);y6(a.p);y6(a.s);y6(a.u);y6(a.w);y6(a.B);y6(a.D);y6(a.G);y6(a.K);y6(a.M);y6(a.O);y6(a.Q);y6(a.S);b.b?Rv(b.b,b.a,b.c):D6(b.a);Qab(c,(d=new otb(2),mtb(d,(B=new Utc,B.a+=\'Step 1 : <em>Add new places and views<\\/em>\',new G5(B.a)).a),jw(d.L,SJc,TJc),d),y6(a.V));Qab(c,(e=new anc,_mc(e,(C=new Utc,C.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.client.contact;\\n\\nimport com.google.gwt.user.client.ui.Composite;\\n\\nimport fr.putnami.pwt.core.inject.client.annotation.Templated;\\nimport fr.putnami.pwt.core.mvp.client.View;\\n\\n@Templated\\npublic class ContactView extends Composite implements View {\\n}\\n<\\/pre>\',new G5(C.a)).a),$mc(e,a.a),e),y6(a.X));Qab(c,(f=new anc,_mc(f,(D=new Utc,D.a+=\'<pre>\\n&lt;!DOCTYPE ui:UiBinder SYSTEM "http://dl.google.com/gwt/DTD/xhtml.ent"&gt;\\n&lt;ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\\n\\txmlns:w="urn:import:fr.putnami.pwt.core.widget.client"&gt;\\n\\n\\t&lt;w:HTMLPanel&gt;\\n\\t\\t&lt;w:Heading level="1" text="Contact" styleName="page-header"/&gt;\\n\\t&lt;/w:HTMLPanel&gt;\\n&lt;/ui:UiBinder&gt;<\\/pre>\',new G5(D.a)).a),$mc(f,a.b),f),y6(a.Z));Qab(c,(g=new anc,_mc(g,(F=new Utc,F.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.client.about;\\n\\nimport com.google.gwt.user.client.ui.Composite;\\n\\nimport fr.putnami.pwt.core.inject.client.annotation.Templated;\\nimport fr.putnami.pwt.core.mvp.client.View;\\n\\n@Templated\\npublic class AboutView extends Composite implements View {\\n}\\n<\\/pre>\',new G5(F.a)).a),$mc(g,a.a),g),y6(a._));Qab(c,(h=new anc,_mc(h,(G=new Utc,G.a+=\'<pre>\\n&lt;!DOCTYPE ui:UiBinder SYSTEM "http://dl.google.com/gwt/DTD/xhtml.ent"&gt;\\n&lt;ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\\n\\txmlns:w="urn:import:fr.putnami.pwt.core.widget.client"&gt;\\n\\n\\t&lt;w:HTMLPanel&gt;\\n\\t\\t&lt;w:Heading level="1" text="About" styleName="page-header"/&gt;\\n\\t\\t&lt;w:Heading level="2" text="About this application"/&gt;\\n\\t\\t&lt;w:GridRow&gt;\\n\\t\\t\\t&lt;w:GridColumn size="10" offset="1"&gt;\\n\\t\\t\\t\\t&lt;p&gt;This application is the result of a step-by-step tutorial demonstrating the &lt;strong title="Putnami Web Toolkit"&gt;PWT&lt;/strong&gt; features.&lt;/p&gt;\\n\\t\\t\\t\\t&lt;p&gt;For more informations go to the &lt;a href="https://github.com/putnami/putnami-pwt-tutorial" target="_blank"&gt;&lt;i class="icon icon-github-squared" /&gt;repo hosting this tutorial&lt;/a&gt;&lt;/p&gt;\\n\\t\\t\\t&lt;/w:GridColumn&gt;\\n\\t\\t&lt;/w:GridRow&gt;\\n\\n\\t\\t&lt;w:Heading level="2" text="About PWT"/&gt;\\n\\t\\t&lt;w:GridRow&gt;\\n\\t\\t\\t&lt;w:GridColumn size="10" offset="1"&gt;\\n\\t\\t\\t\\t&lt;p&gt;If you want to know more about the &lt;strong title="Putnami Web Toolkit"&gt;PWT&lt;/strong&gt; framework, visit the &lt;a href="http://pwt.putnami.org" target="_blank"&gt;project\\\'s page&lt;/a&gt;.&lt;/p&gt;\\n\\t\\t\\t&lt;/w:GridColumn&gt;\\n\\t\\t&lt;/w:GridRow&gt;\\n\\t&lt;/w:HTMLPanel&gt;\\n&lt;/ui:UiBinder&gt;\\n<\\/pre>\',new G5(G.a)).a),$mc(h,a.b),h),y6(a.bb));Qab(c,(i=new anc,_mc(i,(H=new Utc,H.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.client.contact;\\n\\nimport fr.putnami.pwt.core.mvp.client.ViewPlace;\\nimport fr.putnami.pwt.core.mvp.client.annotation.ActivityDescription;\\n\\n@ActivityDescription(view = ContactView.class)\\npublic class ContactPlace extends ViewPlace {\\n}\\n<\\/pre>\',new G5(H.a)).a),$mc(i,a.a),i),y6(a.db));Qab(c,(j=new anc,_mc(j,(I=new Utc,I.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.client.about;\\n\\nimport fr.putnami.pwt.core.mvp.client.ViewPlace;\\nimport fr.putnami.pwt.core.mvp.client.annotation.ActivityDescription;\\n\\n@ActivityDescription(view = AboutView.class)\\npublic class AboutPlace extends ViewPlace {\\n}\\n<\\/pre>\',new G5(I.a)).a),$mc(j,a.a),j),y6(a.fb));Qab(c,(k=new anc,_mc(k,(J=new Utc,J.a+=\'<pre>\\n@MvpDescription(\\n\\t\\tdisplay = OneWidgetPanel.class,\\n\\t\\tdefaultPlace = WelcomePlace.class,\\n\\t\\tactivities = {\\n\\t\\t\\t\\tWelcomePlace.class,\\n\\t\\t\\t\\tAboutPlace.class,\\n\\t\\t\\t\\tContactPlace.class\\n\\t\\t})\\npublic class TutorialApp implements Module {\\n\\n}<\\/pre>\',new G5(J.a)).a),$mc(k,a.a),k),y6(a.g));Qab(c,(l=new otb(2),mtb(l,(K=new Utc,K.a+=\'Step 2 : <em>Navigate between pages<\\/em>\',new G5(K.a)).a),jw(l.L,SJc,TJc),l),y6(a.j));Qab(c,(m=new anc,_mc(m,(L=new Utc,L.a+=\'<pre>\\n&lt;w:Button ui:field="aboutButton" text="About" iconType="HELP" /&gt;\\n<\\/pre>\',new G5(L.a)).a),$mc(m,a.b),m),y6(a.n));Qab(c,(n=new anc,_mc(n,(M=new Utc,M.a+=\'<pre>\\n@UiHandler("aboutButton")\\npublic void onAboutButton(ButtonEvent event) {\\n\\tMvpController.get().goTo(new AboutPlace());\\n}\\n<\\/pre>\',new G5(M.a)).a),$mc(n,a.a),n),y6(a.p));Qab(c,(o=new otb(2),mtb(o,(N=new Utc,N.a+=\'Step 3 : <em>Create a page decorator<\\/em>\',new G5(N.a)).a),jw(o.L,SJc,TJc),o),y6(a.s));Qab(c,(p=new anc,_mc(p,(O=new Utc,O.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.client.application;\\n\\nimport com.google.gwt.uibinder.client.UiField;\\nimport com.google.gwt.user.client.ui.AcceptsOneWidget;\\nimport com.google.gwt.user.client.ui.Composite;\\nimport com.google.gwt.user.client.ui.IsWidget;\\n\\nimport fr.putnami.pwt.core.inject.client.annotation.Templated;\\nimport fr.putnami.pwt.core.mvp.client.View;\\nimport fr.putnami.pwt.core.widget.client.OneWidgetPanel;\\n\\n@Templated\\npublic class PageDecorator extends Composite implements AcceptsOneWidget, View {\\n\\n\\t@UiField\\n\\tOneWidgetPanel viewContainer;\\n\\n\\t@Override\\n\\tpublic void setWidget(IsWidget w) {\\n\\t\\tif (w == null) {\\n\\t\\t\\treturn;\\n\\t\\t}\\n\\t\\tviewContainer.setWidget(w);\\n\\t}\\n}\\n<\\/pre>\',new G5(O.a)).a),$mc(p,a.a),p),y6(a.u));Qab(c,(q=new anc,_mc(q,(P=new Utc,P.a+=\'<pre>\\n&lt;!DOCTYPE ui:UiBinder SYSTEM "http://dl.google.com/gwt/DTD/xhtml.ent"&gt;\\n&lt;ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\\n\\txmlns:w="urn:import:fr.putnami.pwt.core.widget.client" &gt;\\n\\n\\t&lt;ui:style&gt;\\n\\t\\t.tutorialHeader {\\n\\t\\t\\theight : 65px;\\n\\t\\t\\tfont-size: 30px;\\n\\t\\t\\tbackground-color:#EEE;\\n\\t\\t}\\n\\t\\t.tutorialFooter {\\n\\t\\t\\ttext-align : center;\\n\\t\\t\\tbackground-color:#EEE;\\n\\t\\t\\theight: 80px;\\n\\t\\t\\tpadding-top: 35px;\\n\\t\\t}\\n\\t&lt;/ui:style&gt;\\n\\t&lt;w:HTMLPanel&gt;\\n\\t\\t&lt;w:Header styleName="{style.tutorialHeader}"&gt;\\n\\t\\t\\t&lt;div class="container"&gt;\\n\\t\\t\\t\\t&lt;a href="#!Welcome"&gt;&lt;img src="assets/img/putnami.png" alt="Putnami Logo" /&gt; PWT &lt;small class="hidden-xs"&gt;Putnami Web Toolkit Tutorial App&lt;/small&gt;&lt;/a&gt;\\n\\t\\t\\t&lt;/div&gt;\\n\\t\\t&lt;/w:Header&gt;\\n\\t\\t&lt;w:OneWidgetPanel tag="div" ui:field="viewContainer"  styleName="container tutorialContent" /&gt;\\n\\n\\t\\t&lt;w:Footer styleName="{style.tutorialFooter}"&gt;\\n\\t\\t\\t&lt;ul class="list-inline"&gt;\\n\\t\\t\\t\\t&lt;li&gt;&lt;a href="https://github.com/putnami" target="_blank"&gt;@PutnamiTeam&lt;/a&gt;&lt;/li&gt;\\n\\t\\t\\t\\t&lt;li&gt;&lt;a href="https://github.com/putnami/putnami-pwt-tutorial" target="_blank"&gt;&lt;i class="icon icon-github-squared" /&gt;Tutorial GitHub repo&lt;/a&gt;&lt;/li&gt;\\n\\t\\t\\t\\t&lt;li&gt;&lt;a href="https://github.com/putnami/putnami-pwt-tutorial" target="_blank"&gt;&lt;i class="icon icon-github-squared" /&gt;PWT GitHub repo&lt;/a&gt;&lt;/li&gt;\\n\\t\\t\\t\\t&lt;li&gt;&lt;a href="https://groups.google.com/forum/#!forum/putnami-web-toolkit" target="_blank"&gt;&lt;i class="icon icon-coffee" /&gt;PWT Google Group&lt;/a&gt;&lt;/li&gt;\\n\\t\\t\\t\\t&lt;li&gt;&lt;a href="#!Contact"&gt;&lt;i class="icon icon-users" /&gt;Contact&lt;/a&gt;&lt;/li&gt;\\n\\t\\t\\t\\t&lt;li&gt;&lt;a href="#!About"&gt;&lt;i class="icon icon-help" /&gt;About&lt;/a&gt;&lt;/li&gt;\\n\\t\\t\\t&lt;/ul&gt;\\n\\t\\t&lt;/w:Footer&gt;\\n\\t&lt;/w:HTMLPanel&gt;\\n&lt;/ui:UiBinder&gt;<\\/pre>\',new G5(P.a)).a),$mc(q,a.b),q),y6(a.w));Qab(c,(r=new anc,_mc(r,(Q=new Utc,Q.a+=\'<pre>\\n@MvpDescription(\\n\\t\\tdisplay = PageDecorator.class,\\n\\t\\t...\\n\\t\\t)\\npublic class TutorialApp implements Module {\\n\\n}<\\/pre>\',new G5(Q.a)).a),$mc(r,a.a),r),y6(a.B));Qab(c,(s=new otb(2),mtb(s,(R=new Utc,R.a+=\'Step 4 : <em>Add a NavBar<\\/em>\',new G5(R.a)).a),jw(s.L,SJc,TJc),s),y6(a.D));Qab(c,(t=new anc,_mc(t,(S=new Utc,S.a+=\'<pre>\\n&lt;w:Header ...&gt;\\n\\t...\\n&lt;/w:Header&gt;\\n&lt;w:Navbar position="STATIC_TOP"&gt;\\n\\t&lt;w:Brand&gt;\\n\\t\\t&lt;w:Anchor text="PWT Tutorial" link="#!" /&gt;\\n\\t&lt;/w:Brand&gt;\\n\\t&lt;w:Nav&gt;\\n\\t\\t&lt;w:NavLink label="Contact" link="#!Contact"/&gt;\\n\\t\\t&lt;w:NavLink label="About" link="#!About"/&gt;\\n\\t&lt;/w:Nav&gt;\\n&lt;/w:Navbar&gt;<\\/pre>\',new G5(S.a)).a),$mc(t,a.b),t),y6(a.G));Qab(c,(u=new anc,_mc(u,(T=new Utc,T.a+=\'<pre>\\n&lt;w:Affix&gt;\\n\\t&lt;w:Navbar position="STATIC_TOP"&gt;\\n\\t\\t&lt;w:Brand&gt;\\n\\t\\t\\t&lt;w:Anchor text="PWT Tutorial" link="#!" /&gt;\\n\\t\\t&lt;/w:Brand&gt;\\n\\t\\t&lt;w:Nav&gt;\\n\\t\\t\\t&lt;w:NavLink label="Contact" link="#!Contact"/&gt;\\n\\t\\t\\t&lt;w:NavLink label="About" link="#!About"/&gt;\\n\\t\\t&lt;/w:Nav&gt;\\n\\t&lt;/w:Navbar&gt;\\n&lt;/w:Affix&gt;<\\/pre>\',new G5(T.a)).a),$mc(u,a.b),u),y6(a.K));Qab(c,(v=new otb(2),mtb(v,(U=new Utc,U.a+=\'Step 5 : <em>Create I18N template<\\/em>\',new G5(U.a)).a),jw(v.L,SJc,TJc),v),y6(a.M));Qab(c,(w=new anc,_mc(w,(V=new Utc,V.a+=\'<pre>\\n&lt;!DOCTYPE ui:UiBinder SYSTEM "http://dl.google.com/gwt/DTD/xhtml.ent"&gt;\\n&lt;ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\\n\\txmlns:w="urn:import:fr.putnami.pwt.core.widget.client"&gt;\\n\\n\\t&lt;w:HTMLPanel styleName="container"&gt;\\n\\t\\t&lt;w:Heading level="1" text="Putnami Web Toolkit : tutoriel" subtext="D\\xE9couvrez PWT" styleName="page-header"/&gt;\\n \\t\\t&lt;w:Container tag="div" styleName="jumbotron text-center"&gt;\\n\\t\\t\\t&lt;w:GridRow&gt;\\n\\t\\t\\t\\t&lt;w:GridColumn size="10" offset="1"&gt;\\n\\t\\t\\t\\t\\t&lt;p&gt;Bienvenue sur l\\\'application de tutoriel de PWT.&lt;/p&gt;\\n\\t\\t\\t\\t&lt;/w:GridColumn&gt;\\n\\t\\t\\t&lt;/w:GridRow&gt;\\n\\t\\t&lt;/w:Container&gt;\\n\\t\\t&lt;w:Container tag="div" styleName="text-center"&gt;\\n\\t\\t\\t&lt;w:Button ui:field="aboutButton" text="A propos" iconType="HELP_CIRCLED" /&gt;\\n\\t\\t&lt;/w:Container&gt;\\n\\t&lt;/w:HTMLPanel&gt;\\n&lt;/ui:UiBinder&gt;<\\/pre>\',new G5(V.a)).a),$mc(w,a.b),w),y6(a.O));Qab(c,(A=new anc,_mc(A,(W=new Utc,W.a+=\'<pre>\\n\\t&lt;extend-property name="locale" values="fr"/&gt;<\\/pre>\',new G5(W.a)).a),$mc(A,a.b),A),y6(a.Q));Qab(c,new emb((X=new Utc,X.a+=\'<h4>Note :<\\/h4><p>You can see the result in the <code>tutorials/Part3<\\/code> folder in the PWT sources.<\\/p>\',new G5(X.a)).a),y6(a.S));a.gb.j=c;return c}\nq3(1375,46,OJc);var D$=trc(FIc,\'Tuto3MorePagesPage\',1375,SU);q3(923,1375,PJc,jgc);_.th=function kgc(a,b){G$b(this);b.xe(this)};var z$=trc(FIc,\'Tuto3MorePagesPage_Injector\',923,D$);q3(1035,1,{},ngc);var A$=trc(FIc,\'Tuto3MorePagesPage_Tuto3MorePagesPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets\',1035,z1);var rgc;q3(686,1,jIc);_.Je=function Bgc(){var a;!($4(),rgc)&&(rgc=new jgc);a=new J$b;rjb(a,rgc);kjb(this.a,a)};qEc(Vt)(26);\n//# sourceURL=Documentation-26.js\n')