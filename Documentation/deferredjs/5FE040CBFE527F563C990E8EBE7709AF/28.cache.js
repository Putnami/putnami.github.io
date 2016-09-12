$wnd.Documentation.runAsyncCallback28('function Xgc(){sab(this,$gc(new _gc(this)))}\nfunction ahc(a){var b;b=new Utc;b.a+=HGc;Rtc(b,V5(a));b.a+=IGc;return new G5(b.a)}\nfunction chc(a,b){var c;c=new Utc;c.a+=HGc;Rtc(c,V5(a));c.a+=GGc;Rtc(c,V5(b));c.a+=IGc;return new G5(c.a)}\nfunction $gc(a){var b,c,d,e,f,g;c=new etb(chc(a.c,a.I).a);jw((H6(),c.L),NGc,\'PWT - Tutorial Part 5 - Build a simple issues tracker\');b=B6(c.L);y6(a.d);y6(a.bb);b.b?Rv(b.b,b.a,b.c):D6(b.a);Qab(c,(d=new htb(ahc(a.e).a),e=B6(d.L),y6(a.H),e.b?Rv(e.b,e.a,e.c):D6(e.a),Qab(d,(f=new otb(1),mtb(f,(g=new Utc,g.a+=\'Part 5 - Build a simple issues tracker\',new G5(g.a)).a),f),y6(a.H)),a.Cb.k=d,d),y6(a.d));Qab(c,Zgc(a),y6(a.bb));return c}\nfunction _gc(a){this.Cb=a;this.e=_w($doc);this.cb=_w($doc);this.qb=_w($doc);this.sb=_w($doc);this.ub=_w($doc);this.wb=_w($doc);this.yb=_w($doc);this.Ab=_w($doc);this.f=_w($doc);this.i=_w($doc);this.k=_w($doc);this.o=_w($doc);this.r=_w($doc);this.t=_w($doc);this.v=_w($doc);this.A=_w($doc);this.C=_w($doc);this.F=_w($doc);this.J=_w($doc);this.L=_w($doc);this.N=_w($doc);this.P=_w($doc);this.R=_w($doc);this.T=_w($doc);this.V=_w($doc);this.X=_w($doc);this.Z=_w($doc);this._=_w($doc);this.db=_w($doc);this.fb=_w($doc);this.hb=_w($doc);this.jb=_w($doc);this.lb=_w($doc);this.nb=_w($doc);this.c=_w($doc);this.I=_w($doc);this.H=new z6(this.e);this.pb=new z6(this.cb);this.rb=new z6(this.qb);this.tb=new z6(this.sb);this.vb=new z6(this.ub);this.xb=new z6(this.wb);this.zb=new z6(this.yb);this.Bb=new z6(this.Ab);this.g=new z6(this.f);this.j=new z6(this.i);this.n=new z6(this.k);this.p=new z6(this.o);this.s=new z6(this.r);this.u=new z6(this.t);this.w=new z6(this.v);this.B=new z6(this.A);this.D=new z6(this.C);this.G=new z6(this.F);this.K=new z6(this.J);this.M=new z6(this.L);this.O=new z6(this.N);this.Q=new z6(this.P);this.S=new z6(this.R);this.U=new z6(this.T);this.W=new z6(this.V);this.Y=new z6(this.X);this.$=new z6(this.Z);this.ab=new z6(this._);this.eb=new z6(this.db);this.gb=new z6(this.fb);this.ib=new z6(this.hb);this.kb=new z6(this.jb);this.mb=new z6(this.lb);this.ob=new z6(this.nb);this.d=new z6(this.c);this.bb=new z6(this.I);this.a=(Bnc(),Anc);this.b=(Jnc(),Inc)}\nfunction bhc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K){var L;L=new Utc;L.a+="<ul class=\'pager\'> <li class=\'previous\'><a href=\'#!Tuto4\'>\\u2190 Part 4 : Build a contact form<\\/a><\\/li> <li class=\'next\'><a href=\'#!Tuto6\'>Part 6 : Build a theme \\u2192<\\/a><\\/li> <\\/ul>  <p>In this tutorial, we will create a simple issue tracker in our project with its contact form <em><a href=\'#!Tuto4\'>Part 4 : Build a contact form<\\/a><\\/em><\\/p>  <span id=\'";Rtc(L,V5(a));L.a+="\'><\\/span>  <p>We already know how to create a place so let\'s do it :<\\/p>  <span id=\'";Rtc(L,V5(b));L.a+="\'><\\/span>  <p>And the view :<\\/p>  <span id=\'";Rtc(L,V5(c));L.a+="\'><\\/span>  <p>We will create the ui.xml file in the next step.<\\/p>  <p>Now we register the place in the application entry point (here <code>TutorialApp<\\/code>) :<\\/p> <span id=\'";Rtc(L,V5(d));L.a+="\'><\\/span>  <p>And now, we add an entry in the NavBar in the <code>PageDecorator.ui.xml<\\/code> :<\\/p> <span id=\'";Rtc(L,V5(e));L.a+=WJc;Rtc(L,V5(f));L.a+="\'><\\/span>  <p>In the model, we will use somme validation annotaions such as <code>NotNull<\\/code>. To do it, we have to add the dependency to the javax.validation api.<\\/p>   <p>For gradle :<\\/p> <span id=\'";Rtc(L,V5(g));L.a+="\'><\\/span>   <p>For maven :<\\/p> <span id=\'";Rtc(L,V5(h));L.a+="\'><\\/span>  <p>We will use the following model :<\\/p> <span id=\'";Rtc(L,V5(i));L.a+="\'><\\/span>  <p>And the <code>Type<\\/code> enum :<\\/p> <span id=\'";Rtc(L,V5(j));L.a+="\'><\\/span>  <p>And we create the associated constants :<\\/p> <span id=\'";Rtc(L,V5(k));L.a+=XJc;Rtc(L,V5(l));L.a+="\'><\\/span>  <p>We will now display a list of the issues. We have to create the view :<\\/p> <span id=\'";Rtc(L,V5(m));L.a+="\'><\\/span>  <p>We have to initialize the <code>TableEditor<\\/code> in the <code>IssuesView<\\/code> :<\\/p> <span id=\'";Rtc(L,V5(n));L.a+="\'><\\/span>  <p>To display some issues, we have to retrieve them from server. We define the Service interface :<\\/p> <span id=\'";Rtc(L,V5(o));L.a+="\'><\\/span>  <p>We create the implementation too :<\\/p> <span id=\'";Rtc(L,V5(p));L.a+="\'><\\/span>  <p>And we have to register the service to the <code>CommandService<\\/code> in the <code>web.xml<\\/code> :<\\/p> <span id=\'";Rtc(L,V5(q));L.a+="\'><\\/span>  <p>Now we can bind it on the client <code>IssuesView<\\/code> :<\\/p> <span id=\'";Rtc(L,V5(r));L.a+="\'><\\/span>  <p>Now, on the place presenting (<code>@PresentHandler<\\/code> methods), we will retrieve the list of issues from the server :<\\/p> <span id=\'";Rtc(L,V5(s));L.a+=XJc;Rtc(L,V5(t));L.a+="\'><\\/span> <p>Now we will add a search form to search by name and / or label.<\\/p>  <p>We add two fields on the ui :<\\/p> <span id=\'";Rtc(L,V5(u));L.a+="\'><\\/span>  <p>And now we define the bean, the constants and init the search form with it in the <code>IssuesView<\\/code> :<\\/p> <span id=\'";Rtc(L,V5(v));L.a+="\'><\\/span>  <p>And now, we add the handlers to the view :<\\/p> <span id=\'";Rtc(L,V5(w));L.a+="\'><\\/span>  <p>And That\'s it !!<\\/p>   <span id=\'";Rtc(L,V5(A));L.a+="\'><\\/span> <p>Now we will add a Popup to edit and create the issue.<\\/p>  <p>First in the <code>IssuesView.ui.xml<\\/code> file we add :<\\/p> <ol> <li>A <code>ui:with<\\/code> tag : <span id=\'";Rtc(L,V5(B));L.a+="\'><\\/span> <\\/li> <li>A Button to open the popup : <span id=\'";Rtc(L,V5(C));L.a+="\'><\\/span> <\\/li> <li>The modal : <span id=\'";Rtc(L,V5(D));L.a+="\'><\\/span> <\\/li> <\\/ol> <p>Then in the <code>IssuesView<\\/code> class :<\\/p> <ol> <li><p>The <code>UiField<\\/code>s used in the class :<\\/p> <span id=\'";Rtc(L,V5(F));L.a+=\'\\\'><\\/span> <\\/li> <li>We add a method to open the popup on click on the "Declare an issue" button : <span id=\\\'\';Rtc(L,V5(G));L.a+=\'\\\'><\\/span> <\\/li> <li>We add a method to open the popup on click on the "View issue" button : <span id=\\\'\';Rtc(L,V5(H));L.a+="\'><\\/span> <\\/li> <li>We add a method to save the issue on flush the popup content : <span id=\'";Rtc(L,V5(I));L.a+="\'><\\/span> <\\/li> <li>We add a method to reload the issues on issue save : <span id=\'";Rtc(L,V5(J));L.a+="\'><\\/span> <\\/li> <\\/ol>  <p>That\'s it !<\\/p> <span id=\'";Rtc(L,V5(K));L.a+="\'><\\/span>   <ul class=\'pager\'> <li class=\'previous\'><a href=\'#!Tuto4\'>\\u2190 Part 4 : Build a contact form<\\/a><\\/li> <li class=\'next\'><a href=\'#!Tuto6\'>Part 6 : Build a theme \\u2192<\\/a><\\/li> <\\/ul>";return new G5(L.a)}\nfunction Zgc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb;c=new etb(bhc(a.cb,a.qb,a.sb,a.ub,a.wb,a.yb,a.Ab,a.f,a.i,a.k,a.o,a.r,a.t,a.v,a.A,a.C,a.F,a.J,a.L,a.N,a.P,a.R,a.T,a.V,a.X,a.Z,a._,a.db,a.fb,a.hb,a.jb,a.lb,a.nb).a);b=B6((H6(),c.L));y6(a.pb);y6(a.rb);y6(a.tb);y6(a.vb);y6(a.xb);y6(a.zb);y6(a.Bb);y6(a.g);y6(a.j);y6(a.n);y6(a.p);y6(a.s);y6(a.u);y6(a.w);y6(a.B);y6(a.D);y6(a.G);y6(a.K);y6(a.M);y6(a.O);y6(a.Q);y6(a.S);y6(a.U);y6(a.W);y6(a.Y);y6(a.$);y6(a.ab);y6(a.eb);y6(a.gb);y6(a.ib);y6(a.kb);y6(a.mb);y6(a.ob);b.b?Rv(b.b,b.a,b.c):D6(b.a);Qab(c,(d=new otb(2),mtb(d,(N=new Utc,N.a+=\'Step 1 : <em>Create the place, register it and add the item in the NavBar<\\/em>\',new G5(N.a)).a),jw(d.L,SJc,TJc),d),y6(a.pb));Qab(c,(e=new anc,_mc(e,(O=new Utc,O.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.client.issues;\\n\\nimport fr.putnami.pwt.core.mvp.client.ViewPlace;\\nimport fr.putnami.pwt.core.mvp.client.annotation.ActivityDescription;\\n\\n@ActivityDescription(view = IssuesView.class)\\npublic class IssuesPlace extends ViewPlace {\\n}\\n<\\/pre>\',new G5(O.a)).a),$mc(e,a.a),e),y6(a.rb));Qab(c,(f=new anc,_mc(f,(P=new Utc,P.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.client.issues;\\n\\nimport com.google.gwt.core.client.GWT;\\nimport com.google.gwt.user.client.ui.Composite;\\nimport com.google.gwt.user.client.ui.Widget;\\n\\nimport fr.putnami.pwt.core.inject.client.annotation.Templated;\\nimport fr.putnami.pwt.core.mvp.client.View;\\nimport fr.putnami.pwt.core.widget.client.binder.UiBinderLocalized;\\n\\n@Templated\\npublic class IssuesView extends Composite implements View {\\n}\\n<\\/pre>\',new G5(P.a)).a),$mc(f,a.a),f),y6(a.tb));Qab(c,(g=new anc,_mc(g,(Q=new Utc,Q.a+=\'<pre>\\n@MvpDescription(\\n\\t\\t...\\n\\t\\tactivities = {\\n\\t\\t\\t\\t...,\\n\\t\\t\\t\\tIssuesPlace.class\\n\\t\\t})\\n<\\/pre>\',new G5(Q.a)).a),$mc(g,a.a),g),y6(a.vb));Qab(c,(h=new anc,_mc(h,(R=new Utc,R.a+=\'<pre>\\n\\t...\\n\\t&lt;w:Nav&gt;\\n\\t\\t&lt;w:NavLink label="Issues Tracker" link="#!Issues"/&gt;\\n\\t\\t&lt;w:NavLink label="Contact" link="#!Contact"/&gt;\\n\\t...\\n<\\/pre>\',new G5(R.a)).a),$mc(h,a.b),h),y6(a.xb));Qab(c,(i=new otb(2),mtb(i,(S=new Utc,S.a+=\'Step 2 : <em>Define the model<\\/em>\',new G5(S.a)).a),jw(i.L,SJc,TJc),i),y6(a.zb));Qab(c,(j=new anc,_mc(j,(T=new Utc,T.a+="<pre>\\ndependencies {\\n\\t...\\n\\tprovidedCompile \'javax.validation:validation-api:1.0.0.GA\'\\n}<\\/pre>",new G5(T.a)).a),$mc(j,a.a),j),y6(a.Bb));Qab(c,(k=new anc,_mc(k,(U=new Utc,U.a+=\'<pre>\\n\\t&lt;dependency&gt;\\n\\t\\t&lt;groupId&gt;javax.validation&lt;/groupId&gt;\\n\\t\\t&lt;artifactId&gt;validation-api&lt;/artifactId&gt;\\n\\t\\t&lt;version&gt;1.0.0.GA&lt;/version&gt;\\n\\t\\t&lt;scope&gt;provided&lt;/scope&gt;\\n\\t&lt;/dependency&gt;<\\/pre>\',new G5(U.a)).a),$mc(k,a.b),k),y6(a.g));Qab(c,(l=new anc,_mc(l,(V=new Utc,V.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.shared.domain;\\n\\nimport java.io.Serializable;\\nimport java.util.List;\\n\\nimport javax.validation.constraints.NotNull;\\nimport javax.validation.constraints.Size;\\n\\nimport com.google.common.collect.Lists;\\n\\npublic class Issue implements Serializable {\\n\\n\\tprivate static final long serialVersionUID = 1L;\\n\\n\\tprivate Long id;\\n\\t@NotNull\\n\\t@Size(min = 5, max = 50)\\n\\tprivate String name;\\n\\t@NotNull\\n\\tprivate Type type = Type.MINOR;\\n\\tprivate List&lt;String&gt; labels = Lists.newArrayList();\\n\\t@NotNull\\n\\t@Size(min = 10, max = 500)\\n\\tprivate String description;\\n\\n    ... // Getters and Setters\\n}<\\/pre>\',new G5(V.a)).a),$mc(l,a.a),l),y6(a.j));Qab(c,(m=new anc,_mc(m,(W=new Utc,W.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.shared.domain;\\n\\npublic enum Type {\\n\\n\\tOPTIONAL,\\n\\tMINOR,\\n\\tMAJOR,\\n\\tCRITICAL,\\n\\tBLOCKER;\\n}<\\/pre>\',new G5(W.a)).a),$mc(m,a.a),m),y6(a.n));Qab(c,(n=new anc,_mc(n,(X=new Utc,X.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.shared.constants;\\n\\nimport fr.putnami.pwt.core.editor.shared.constant.ValidationConstants;\\n\\npublic interface IssueConstants extends ValidationConstants {\\n\\n\\t@DefaultStringValue("ID")\\n\\tString id();\\n\\n\\t@DefaultStringValue("Name")\\n\\tString name();\\n\\n\\t@DefaultStringValue("Type")\\n\\tString type();\\n\\n\\t@DefaultStringValue("Labels")\\n\\tString labels();\\n\\n\\t@DefaultStringValue("Description")\\n\\tString description();\\n\\n\\t/* Enum */\\n\\n\\t@DefaultStringValue("Optional")\\n\\tString typeOptionalEnum();\\n\\n\\t@DefaultStringValue("Minor")\\n\\tString typeMinorEnum();\\n\\n\\t@DefaultStringValue("Major")\\n\\tString typeMajorEnum();\\n\\n\\t@DefaultStringValue("Critical")\\n\\tString typeCriticalEnum();\\n\\n\\t@DefaultStringValue("Blocker")\\n\\tString typeBlockerEnum();\\n\\n\\t/* Placeholders */\\n\\n\\t@DefaultStringValue("Simple name of the issue...")\\n\\tString namePlaceholder();\\n\\n\\t@DefaultStringValue("Describe the issue here...")\\n\\tString descriptionPlaceholder();\\n\\n\\t/* Tooltips */\\n\\n\\t@DefaultStringValue("Enter the issue name")\\n\\tString nameTooltip();\\n\\n\\t@DefaultStringValue("Select the issue type")\\n\\tString typeTooltip();\\n\\n\\t@DefaultStringValue("Select the applying labels")\\n\\tString labelsTooltip();\\n\\n\\t@DefaultStringValue("Enter the issue descriptionDescription")\\n\\tString descriptionTooltip();\\n\\n\\t/* Help */\\n\\n\\t@DefaultStringValue("Enter a short name of the issue.")\\n\\tString nameHelp();\\n\\n\\t@DefaultStringValue("Select labels to apply to this issue.")\\n\\tString labelsHelp();\\n\\n}<\\/pre>\',new G5(X.a)).a),$mc(n,a.a),n),y6(a.p));Qab(c,(o=new otb(2),mtb(o,(Y=new Utc,Y.a+=\'Step 3 : <em>Display the list of issues<\\/em>\',new G5(Y.a)).a),jw(o.L,SJc,TJc),o),y6(a.s));Qab(c,(p=new anc,_mc(p,(Z=new Utc,Z.a+=\'<pre>\\n&lt;!DOCTYPE ui:UiBinder SYSTEM "http://dl.google.com/gwt/DTD/xhtml.ent"&gt;\\n&lt;!DOCTYPE ui:UiBinder SYSTEM "http://dl.google.com/gwt/DTD/xhtml.ent"&gt;\\n&lt;ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\\n\\txmlns:w="urn:import:fr.putnami.pwt.core.widget.client"&gt;\\n\\n\\t&lt;w:HTMLPanel&gt;\\n\\t\\t&lt;w:Heading level="1" text="Issues Tracker" styleName="page-header"/&gt;\\n\\t\\t&lt;w:GridRow&gt;\\n\\t\\t\\t&lt;w:GridColumn size="8" offset="4"&gt;\\n\\t\\t\\t\\t&lt;w:TableEditor ui:field="issuesTable" readonly="true"&gt;\\n\\t\\t\\t\\t\\t&lt;w:Pagination pageSize="6" /&gt;\\n\\t\\t\\t\\t\\t&lt;w:TableColumn path="id" /&gt;\\n\\t\\t\\t\\t\\t&lt;w:TableColumn path="type"&gt;\\n\\t\\t\\t\\t\\t\\t&lt;w:TableSort /&gt;\\n\\t\\t\\t\\t\\t&lt;/w:TableColumn&gt;\\n\\t\\t\\t\\t\\t&lt;w:TableColumn path="name"&gt;\\n\\t\\t\\t\\t\\t\\t&lt;w:TableSort /&gt;\\n\\t\\t\\t\\t\\t&lt;/w:TableColumn&gt;\\n\\t\\t\\t\\t\\t&lt;w:TableColumn path="labels"&gt;\\n\\t\\t\\t\\t\\t\\t&lt;w:OutputList &gt;\\n\\t\\t\\t\\t\\t\\t\\t&lt;w:OutputText /&gt;\\n\\t\\t\\t\\t\\t\\t&lt;/w:OutputList&gt;\\n\\t\\t\\t\\t\\t&lt;/w:TableColumn&gt;\\n\\t\\t\\t\\t\\t&lt;w:TableColumn &gt;\\n\\t\\t\\t\\t\\t\\t&lt;w:Button ui:field="viewBoutton" type="ICON" iconType="VIEW" /&gt;\\n\\t\\t\\t\\t\\t&lt;/w:TableColumn&gt;\\n\\t\\t\\t\\t&lt;/w:TableEditor&gt;\\n\\t\\t\\t&lt;/w:GridColumn&gt;\\n\\t\\t&lt;/w:GridRow&gt;\\n\\t&lt;/w:HTMLPanel&gt;\\n&lt;/ui:UiBinder&gt;<\\/pre>\',new G5(Z.a)).a),$mc(p,a.b),p),y6(a.u));Qab(c,(q=new anc,_mc(q,($=new Utc,$.a+=\'<pre>\\n@UiField\\n@Initialize(constantsClass = IssueConstants.class)\\nTableEditor&lt;Issue&gt; issuesTable;\\n<\\/pre>\',new G5($.a)).a),$mc(q,a.a),q),y6(a.w));Qab(c,(r=new anc,_mc(r,(ab=new Utc,ab.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.shared.service;\\n\\nimport java.util.List;\\n\\nimport fr.putnami.pwt.tutorial.shared.domain.Issue;\\n\\npublic interface IssueService {\\n\\n\\tList&lt;Issue&gt; listIssues();\\n\\n\\tIssue createIssue(Issue issue);\\n\\n\\tIssue editIssue(Issue issue);\\n\\n}<\\/pre>\',new G5(ab.a)).a),$mc(r,a.a),r),y6(a.B));Qab(c,(s=new anc,_mc(s,(bb=new Utc,bb.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.server.service;\\n\\nimport java.util.List;\\n\\nimport com.google.common.collect.Lists;\\n\\nimport fr.putnami.pwt.tutorial.shared.domain.Issue;\\nimport fr.putnami.pwt.tutorial.shared.service.IssueService;\\n\\npublic class IssueServiceImpl implements IssueService {\\n\\n\\t@Override\\n\\tpublic List&lt;Issue&gt; listIssues() {\\n\\t\\t// Do your implementation\\n\\t\\treturn Lists.newArrayList();\\n\\t}\\n\\n\\t@Override\\n\\tpublic Issue createIssue(Issue issue) {\\n\\t\\t// Do your implementation\\n\\t\\treturn issue;\\n\\t}\\n\\n\\t@Override\\n\\tpublic Issue editIssue(Issue issue) {\\n\\t\\t// Do your implementation\\n\\t\\treturn issue;\\n\\t}\\n}\\n<\\/pre>\',new G5(bb.a)).a),$mc(s,a.a),s),y6(a.D));Qab(c,(t=new anc,_mc(t,(cb=new Utc,cb.a+=\'<pre>\\n...\\n&lt;init-param&gt;\\n\\t&lt;param-name&gt;services&lt;/param-name&gt;\\n\\t&lt;param-value&gt;fr.putnami.pwt.tutorial.server.service.ContactServiceImpl;fr.putnami.pwt.tutorial.server.service.IssueServiceImpl&lt;/param-value&gt;\\n&lt;/init-param&gt;\\n...\\n<\\/pre>\',new G5(cb.a)).a),$mc(t,a.b),t),y6(a.G));Qab(c,(u=new anc,_mc(u,(db=new Utc,db.a+=\'<pre>\\n@InjectService\\nIssueService service;\\n<\\/pre>\',new G5(db.a)).a),$mc(u,a.a),u),y6(a.K));Qab(c,(v=new anc,_mc(v,(eb=new Utc,eb.a+=\'<pre>\\n@PresentHandler\\nvoid present(IssuesPlace place) {\\n\\tservice.listIssues();\\n}\\n\\n@AsyncHandler\\nvoid onListIssues(List&lt;Issue&gt; issues) {\\n\\tissuesTable.edit(issues);\\n}\\n<\\/pre>\',new G5(eb.a)).a),$mc(v,a.a),v),y6(a.M));Qab(c,(w=new otb(2),mtb(w,(fb=new Utc,fb.a+=\'Step 4 : <em>Create a search form<\\/em>\',new G5(fb.a)).a),jw(w.L,SJc,TJc),w),y6(a.O));Qab(c,(A=new anc,_mc(A,(gb=new Utc,gb.a+=\'<pre>\\n...\\n&lt;w:GridRow&gt;\\n\\t&lt;w:GridColumn size="4"&gt;\\n\\t\\t&lt;w:Form ui:field="searchEditor" layout="BASIC"&gt;\\n\\t\\t\\t&lt;w:FormGroup path="label"/&gt;\\n\\t\\t\\t&lt;w:FormGroup path="name"/&gt;\\n\\t\\t\\t&lt;w:FormResetButton text="Reset" /&gt;\\n\\t\\t\\t&lt;w:FormSubmitButton text="Search" /&gt;\\n\\t\\t&lt;/w:Form&gt;\\n\\t&lt;/w:GridColumn&gt;\\n\\t&lt;w:GridColumn size="8"&gt;\\n\\t\\t&lt;w:TableEditor ui:field="issuesTable" readonly="true"&gt;\\n...\\n<\\/pre>\',new G5(gb.a)).a),$mc(A,a.b),A),y6(a.Q));Qab(c,(B=new anc,_mc(B,(hb=new Utc,hb.a+=\'<pre>\\npublic static class SearchBean {\\n\\tpublic String label;\\n\\tpublic String name;\\n}\\n\\ninterface SearchConstants extends ConstantsWithLookup {\\n\\t@DefaultStringValue("Label")\\n\\tString label();\\n\\n\\t@DefaultStringValue("Issue label...")\\n\\tString labelPlaceholder();\\n\\n\\t@DefaultStringValue("Name")\\n\\tString name();\\n\\n\\t@DefaultStringValue("Issue name...")\\n\\tString namePlaceholder();\\n}\\n\\n@UiField\\n@Initialize(constantsClass = SearchConstants.class)\\nForm&lt;SearchBean&gt; searchEditor;\\n\\n@PresentHandler\\nvoid present(IssuesPlace place) {\\n\\t...\\n\\tsearchEditor.edit(new SearchBean());\\n}\\n<\\/pre>\',new G5(hb.a)).a),$mc(B,a.a),B),y6(a.S));Qab(c,(C=new anc,_mc(C,(ib=new Utc,ib.a+=\'<pre>\\n@UiHandler("searchEditor")\\nvoid onSearchSubmit(FlushSuccessEvent event) {\\n\\tSearchBean search = (SearchBean) event.getValue();\\n\\tservice.searchIssues(search.name, search.label);\\n}\\n\\n@UiHandler("searchEditor")\\nvoid onSearchReset(ResetDisplayEvent event) {\\n\\tservice.listIssues();\\n}\\n\\n@AsyncHandler\\nvoid onSearchIssues(List&lt;Issue&gt; issues) {\\n\\tissuesTable.edit(issues);\\n}\\n<\\/pre>\',new G5(ib.a)).a),$mc(C,a.a),C),y6(a.U));Qab(c,(D=new otb(2),mtb(D,(jb=new Utc,jb.a+=\'Step 5 : <em>Create a popup (to declare a new issue)<\\/em>\',new G5(jb.a)).a),jw(D.L,SJc,TJc),D),y6(a.W));Qab(c,(F=new anc,_mc(F,(kb=new Utc,kb.a+=\'<pre>\\n&lt;ui:Binder ...&gt;\\n\\t&lt;ui:with field="labelItems" type="java.util.List" /&gt;\\n\\t ...\\n<\\/pre>\',new G5(kb.a)).a),$mc(F,a.b),F),y6(a.Y));Qab(c,(G=new anc,_mc(G,(lb=new Utc,lb.a+=\'<pre>\\n\\t&lt;w:GridRow&gt;\\n\\t\\t&lt;w:GridColumn size="4"&gt;\\n\\t\\t\\t&lt;w:Button ui:field="addIssue" iconType="ADD" text="Declare an issue" type="LINK"/&gt;\\n\\t\\t\\t&lt;w:Form ui:field="searchEditor" layout="BASIC"&gt;\\n\\t...\\n<\\/pre>\',new G5(lb.a)).a),$mc(G,a.b),G),y6(a.$));Qab(c,(H=new anc,_mc(H,(mb=new Utc,mb.a+=\'<pre>\\n&lt;w:Modal ui:field="modal" title="Edit an Issue" dismissable="true"&gt;\\n\\t&lt;w:Form ui:field="issueEditor" layout="HORIZONTAL"&gt;\\n\\t\\t&lt;w:FormGroup path="id" readonly="true" /&gt;\\n\\t\\t&lt;w:FormGroup path="name" /&gt;\\n\\t\\t&lt;w:FormGroup path="type" /&gt;\\n\\t\\t&lt;w:FormGroup path="labels" &gt;\\n\\t\\t\\t&lt;w:InputMultiSelect items="{labelItems}" /&gt;\\n\\t\\t\\t&lt;w:OutputList &gt;\\n\\t\\t\\t\\t&lt;w:OutputText /&gt;\\n\\t\\t\\t&lt;/w:OutputList&gt;\\n\\t\\t&lt;/w:FormGroup&gt;\\n\\t\\t&lt;w:FormGroup path="description" &gt;\\n\\t\\t\\t&lt;w:InputTextArea /&gt;\\n\\t\\t&lt;/w:FormGroup&gt;\\n\\t\\t&lt;w:Footer&gt;\\n\\t\\t\\t&lt;w:FormResetButton text="Reset" /&gt;\\n\\t\\t\\t&lt;w:FormSubmitButton text="Save" /&gt;\\n\\t\\t&lt;/w:Footer&gt;\\n\\t&lt;/w:Form&gt;\\n&lt;/w:Modal&gt;\\n<\\/pre>\',new G5(mb.a)).a),$mc(H,a.b),H),y6(a.ab));Qab(c,(I=new anc,_mc(I,(nb=new Utc,nb.a+=\'<pre>\\n@UiField(provided = true)\\nfinal List&lt;String&gt; labelItems = Arrays.asList("Bug", "Enhancement", "Question", "Duplicate", "Invalid", "WontFix");\\n\\n@UiField\\n@Initialize(constantsClass = IssueConstants.class)\\nForm&lt;Issue&gt; issueEditor;\\n\\n@UiField\\nModal modal;\\n<\\/pre>\',new G5(nb.a)).a),$mc(I,a.a),I),y6(a.eb));Qab(c,(J=new anc,_mc(J,(ob=new Utc,ob.a+=\'<pre>\\n@UiHandler("addIssue")\\nvoid onAddIssueButton(ButtonEvent event) {\\n\\tissueEditor.edit(new Issue());\\n\\tmodal.show();\\n}\\n<\\/pre>\',new G5(ob.a)).a),$mc(J,a.a),J),y6(a.gb));Qab(c,(K=new anc,_mc(K,(pb=new Utc,pb.a+=\'<pre>\\n@UiHandler("viewBoutton")\\nvoid onViewButton(ButtonEvent event) {\\n\\tIssue issue = event.getValue();\\n\\tissueEditor.edit(issue);\\n\\tmodal.show();\\n}\\n<\\/pre>\',new G5(pb.a)).a),$mc(K,a.a),K),y6(a.ib));Qab(c,(L=new anc,_mc(L,(qb=new Utc,qb.a+=\'<pre>\\n@UiHandler("issueEditor")\\nvoid onSaveIssueEditor(FlushSuccessEvent event) {\\n\\tmodal.hide();\\n\\tIssue issue = event.getValue();\\n\\tservice.saveIssue(issue);\\n}\\n<\\/pre>\',new G5(qb.a)).a),$mc(L,a.a),L),y6(a.kb));Qab(c,(M=new anc,_mc(M,(rb=new Utc,rb.a+=\'<pre>\\n@AsyncHandler\\nvoid onSaveIssue(Issue issue) {\\n\\tsearchEditor.edit(new SearchBean());\\n\\tservice.listIssues();\\n}\\n<\\/pre>\',new G5(rb.a)).a),$mc(M,a.a),M),y6(a.mb));Qab(c,new emb((sb=new Utc,sb.a+=\'<h4>Note :<\\/h4><p>You can see the result in the <code>tutorials/Part5<\\/code> folder in the PWT sources.<\\/p>\',new G5(sb.a)).a),y6(a.ob));a.Cb.j=c;return c}\nq3(1377,46,OJc);var P$=trc(FIc,\'Tuto5IssueTrackerPage\',1377,SU);q3(925,1377,PJc,Xgc);_.th=function Ygc(a,b){G$b(this);b.xe(this)};var L$=trc(FIc,\'Tuto5IssueTrackerPage_Injector\',925,P$);q3(1037,1,{},_gc);var M$=trc(FIc,\'Tuto5IssueTrackerPage_Tuto5IssueTrackerPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets\',1037,z1);var dhc;q3(690,1,jIc);_.Je=function nhc(){var a;!($4(),dhc)&&(dhc=new Xgc);a=new J$b;rjb(a,dhc);kjb(this.a,a)};qEc(Vt)(28);\n//# sourceURL=Documentation-28.js\n')
