$wnd.Documentation.runAsyncCallback28('function Vgc(){rab(this,Ygc(new Zgc(this)))}\nfunction $gc(a){var b;b=new Stc;b.a+=FGc;Ptc(b,U5(a));b.a+=GGc;return new F5(b.a)}\nfunction ahc(a,b){var c;c=new Stc;c.a+=FGc;Ptc(c,U5(a));c.a+=EGc;Ptc(c,U5(b));c.a+=GGc;return new F5(c.a)}\nfunction Ygc(a){var b,c,d,e,f,g;c=new ctb(ahc(a.c,a.I).a);jw((G6(),c.L),LGc,\'PWT - Tutorial Part 5 - Build a simple issues tracker\');b=A6(c.L);x6(a.d);x6(a.bb);b.b?Rv(b.b,b.a,b.c):C6(b.a);Pab(c,(d=new ftb($gc(a.e).a),e=A6(d.L),x6(a.H),e.b?Rv(e.b,e.a,e.c):C6(e.a),Pab(d,(f=new mtb(1),ktb(f,(g=new Stc,g.a+=\'Part 5 - Build a simple issues tracker\',new F5(g.a)).a),f),x6(a.H)),a.Cb.k=d,d),x6(a.d));Pab(c,Xgc(a),x6(a.bb));return c}\nfunction Zgc(a){this.Cb=a;this.e=_w($doc);this.cb=_w($doc);this.qb=_w($doc);this.sb=_w($doc);this.ub=_w($doc);this.wb=_w($doc);this.yb=_w($doc);this.Ab=_w($doc);this.f=_w($doc);this.i=_w($doc);this.k=_w($doc);this.o=_w($doc);this.r=_w($doc);this.t=_w($doc);this.v=_w($doc);this.A=_w($doc);this.C=_w($doc);this.F=_w($doc);this.J=_w($doc);this.L=_w($doc);this.N=_w($doc);this.P=_w($doc);this.R=_w($doc);this.T=_w($doc);this.V=_w($doc);this.X=_w($doc);this.Z=_w($doc);this._=_w($doc);this.db=_w($doc);this.fb=_w($doc);this.hb=_w($doc);this.jb=_w($doc);this.lb=_w($doc);this.nb=_w($doc);this.c=_w($doc);this.I=_w($doc);this.H=new y6(this.e);this.pb=new y6(this.cb);this.rb=new y6(this.qb);this.tb=new y6(this.sb);this.vb=new y6(this.ub);this.xb=new y6(this.wb);this.zb=new y6(this.yb);this.Bb=new y6(this.Ab);this.g=new y6(this.f);this.j=new y6(this.i);this.n=new y6(this.k);this.p=new y6(this.o);this.s=new y6(this.r);this.u=new y6(this.t);this.w=new y6(this.v);this.B=new y6(this.A);this.D=new y6(this.C);this.G=new y6(this.F);this.K=new y6(this.J);this.M=new y6(this.L);this.O=new y6(this.N);this.Q=new y6(this.P);this.S=new y6(this.R);this.U=new y6(this.T);this.W=new y6(this.V);this.Y=new y6(this.X);this.$=new y6(this.Z);this.ab=new y6(this._);this.eb=new y6(this.db);this.gb=new y6(this.fb);this.ib=new y6(this.hb);this.kb=new y6(this.jb);this.mb=new y6(this.lb);this.ob=new y6(this.nb);this.d=new y6(this.c);this.bb=new y6(this.I);this.a=(znc(),ync);this.b=(Hnc(),Gnc)}\nfunction _gc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K){var L;L=new Stc;L.a+="<ul class=\'pager\'> <li class=\'previous\'><a href=\'#!Tuto4\'>\\u2190 Part 4 : Build a contact form<\\/a><\\/li> <li class=\'next\'><a href=\'#!Tuto6\'>Part 6 : Build a theme \\u2192<\\/a><\\/li> <\\/ul>  <p>In this tutorial, we will create a simple issue tracker in our project with its contact form <em><a href=\'#!Tuto4\'>Part 4 : Build a contact form<\\/a><\\/em><\\/p>  <span id=\'";Ptc(L,U5(a));L.a+="\'><\\/span>  <p>We already know how to create a place so let\'s do it :<\\/p>  <span id=\'";Ptc(L,U5(b));L.a+="\'><\\/span>  <p>And the view :<\\/p>  <span id=\'";Ptc(L,U5(c));L.a+="\'><\\/span>  <p>We will create the ui.xml file in the next step.<\\/p>  <p>Now we register the place in the application entry point (here <code>TutorialApp<\\/code>) :<\\/p> <span id=\'";Ptc(L,U5(d));L.a+="\'><\\/span>  <p>And now, we add an entry in the NavBar in the <code>PageDecorator.ui.xml<\\/code> :<\\/p> <span id=\'";Ptc(L,U5(e));L.a+=UJc;Ptc(L,U5(f));L.a+="\'><\\/span>  <p>In the model, we will use somme validation annotaions such as <code>NotNull<\\/code>. To do it, we have to add the dependency to the javax.validation api.<\\/p>   <p>For gradle :<\\/p> <span id=\'";Ptc(L,U5(g));L.a+="\'><\\/span>   <p>For maven :<\\/p> <span id=\'";Ptc(L,U5(h));L.a+="\'><\\/span>  <p>We will use the following model :<\\/p> <span id=\'";Ptc(L,U5(i));L.a+="\'><\\/span>  <p>And the <code>Type<\\/code> enum :<\\/p> <span id=\'";Ptc(L,U5(j));L.a+="\'><\\/span>  <p>And we create the associated constants :<\\/p> <span id=\'";Ptc(L,U5(k));L.a+=VJc;Ptc(L,U5(l));L.a+="\'><\\/span>  <p>We will now display a list of the issues. We have to create the view :<\\/p> <span id=\'";Ptc(L,U5(m));L.a+="\'><\\/span>  <p>We have to initialize the <code>TableEditor<\\/code> in the <code>IssuesView<\\/code> :<\\/p> <span id=\'";Ptc(L,U5(n));L.a+="\'><\\/span>  <p>To display some issues, we have to retrieve them from server. We define the Service interface :<\\/p> <span id=\'";Ptc(L,U5(o));L.a+="\'><\\/span>  <p>We create the implementation too :<\\/p> <span id=\'";Ptc(L,U5(p));L.a+="\'><\\/span>  <p>And we have to register the service to the <code>CommandService<\\/code> in the <code>web.xml<\\/code> :<\\/p> <span id=\'";Ptc(L,U5(q));L.a+="\'><\\/span>  <p>Now we can bind it on the client <code>IssuesView<\\/code> :<\\/p> <span id=\'";Ptc(L,U5(r));L.a+="\'><\\/span>  <p>Now, on the place presenting (<code>@PresentHandler<\\/code> methods), we will retrieve the list of issues from the server :<\\/p> <span id=\'";Ptc(L,U5(s));L.a+=VJc;Ptc(L,U5(t));L.a+="\'><\\/span> <p>Now we will add a search form to search by name and / or label.<\\/p>  <p>We add two fields on the ui :<\\/p> <span id=\'";Ptc(L,U5(u));L.a+="\'><\\/span>  <p>And now we define the bean, the constants and init the search form with it in the <code>IssuesView<\\/code> :<\\/p> <span id=\'";Ptc(L,U5(v));L.a+="\'><\\/span>  <p>And now, we add the handlers to the view :<\\/p> <span id=\'";Ptc(L,U5(w));L.a+="\'><\\/span>  <p>And That\'s it !!<\\/p>   <span id=\'";Ptc(L,U5(A));L.a+="\'><\\/span> <p>Now we will add a Popup to edit and create the issue.<\\/p>  <p>First in the <code>IssuesView.ui.xml<\\/code> file we add :<\\/p> <ol> <li>A <code>ui:with<\\/code> tag : <span id=\'";Ptc(L,U5(B));L.a+="\'><\\/span> <\\/li> <li>A Button to open the popup : <span id=\'";Ptc(L,U5(C));L.a+="\'><\\/span> <\\/li> <li>The modal : <span id=\'";Ptc(L,U5(D));L.a+="\'><\\/span> <\\/li> <\\/ol> <p>Then in the <code>IssuesView<\\/code> class :<\\/p> <ol> <li><p>The <code>UiField<\\/code>s used in the class :<\\/p> <span id=\'";Ptc(L,U5(F));L.a+=\'\\\'><\\/span> <\\/li> <li>We add a method to open the popup on click on the "Declare an issue" button : <span id=\\\'\';Ptc(L,U5(G));L.a+=\'\\\'><\\/span> <\\/li> <li>We add a method to open the popup on click on the "View issue" button : <span id=\\\'\';Ptc(L,U5(H));L.a+="\'><\\/span> <\\/li> <li>We add a method to save the issue on flush the popup content : <span id=\'";Ptc(L,U5(I));L.a+="\'><\\/span> <\\/li> <li>We add a method to reload the issues on issue save : <span id=\'";Ptc(L,U5(J));L.a+="\'><\\/span> <\\/li> <\\/ol>  <p>That\'s it !<\\/p> <span id=\'";Ptc(L,U5(K));L.a+="\'><\\/span>   <ul class=\'pager\'> <li class=\'previous\'><a href=\'#!Tuto4\'>\\u2190 Part 4 : Build a contact form<\\/a><\\/li> <li class=\'next\'><a href=\'#!Tuto6\'>Part 6 : Build a theme \\u2192<\\/a><\\/li> <\\/ul>";return new F5(L.a)}\nfunction Xgc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb;c=new ctb(_gc(a.cb,a.qb,a.sb,a.ub,a.wb,a.yb,a.Ab,a.f,a.i,a.k,a.o,a.r,a.t,a.v,a.A,a.C,a.F,a.J,a.L,a.N,a.P,a.R,a.T,a.V,a.X,a.Z,a._,a.db,a.fb,a.hb,a.jb,a.lb,a.nb).a);b=A6((G6(),c.L));x6(a.pb);x6(a.rb);x6(a.tb);x6(a.vb);x6(a.xb);x6(a.zb);x6(a.Bb);x6(a.g);x6(a.j);x6(a.n);x6(a.p);x6(a.s);x6(a.u);x6(a.w);x6(a.B);x6(a.D);x6(a.G);x6(a.K);x6(a.M);x6(a.O);x6(a.Q);x6(a.S);x6(a.U);x6(a.W);x6(a.Y);x6(a.$);x6(a.ab);x6(a.eb);x6(a.gb);x6(a.ib);x6(a.kb);x6(a.mb);x6(a.ob);b.b?Rv(b.b,b.a,b.c):C6(b.a);Pab(c,(d=new mtb(2),ktb(d,(N=new Stc,N.a+=\'Step 1 : <em>Create the place, register it and add the item in the NavBar<\\/em>\',new F5(N.a)).a),jw(d.L,QJc,RJc),d),x6(a.pb));Pab(c,(e=new $mc,Zmc(e,(O=new Stc,O.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.client.issues;\\n\\nimport fr.putnami.pwt.core.mvp.client.ViewPlace;\\nimport fr.putnami.pwt.core.mvp.client.annotation.ActivityDescription;\\n\\n@ActivityDescription(view = IssuesView.class)\\npublic class IssuesPlace extends ViewPlace {\\n}\\n<\\/pre>\',new F5(O.a)).a),Ymc(e,a.a),e),x6(a.rb));Pab(c,(f=new $mc,Zmc(f,(P=new Stc,P.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.client.issues;\\n\\nimport com.google.gwt.core.client.GWT;\\nimport com.google.gwt.user.client.ui.Composite;\\nimport com.google.gwt.user.client.ui.Widget;\\n\\nimport fr.putnami.pwt.core.inject.client.annotation.Templated;\\nimport fr.putnami.pwt.core.mvp.client.View;\\nimport fr.putnami.pwt.core.widget.client.binder.UiBinderLocalized;\\n\\n@Templated\\npublic class IssuesView extends Composite implements View {\\n}\\n<\\/pre>\',new F5(P.a)).a),Ymc(f,a.a),f),x6(a.tb));Pab(c,(g=new $mc,Zmc(g,(Q=new Stc,Q.a+=\'<pre>\\n@MvpDescription(\\n\\t\\t...\\n\\t\\tactivities = {\\n\\t\\t\\t\\t...,\\n\\t\\t\\t\\tIssuesPlace.class\\n\\t\\t})\\n<\\/pre>\',new F5(Q.a)).a),Ymc(g,a.a),g),x6(a.vb));Pab(c,(h=new $mc,Zmc(h,(R=new Stc,R.a+=\'<pre>\\n\\t...\\n\\t&lt;w:Nav&gt;\\n\\t\\t&lt;w:NavLink label="Issues Tracker" link="#!Issues"/&gt;\\n\\t\\t&lt;w:NavLink label="Contact" link="#!Contact"/&gt;\\n\\t...\\n<\\/pre>\',new F5(R.a)).a),Ymc(h,a.b),h),x6(a.xb));Pab(c,(i=new mtb(2),ktb(i,(S=new Stc,S.a+=\'Step 2 : <em>Define the model<\\/em>\',new F5(S.a)).a),jw(i.L,QJc,RJc),i),x6(a.zb));Pab(c,(j=new $mc,Zmc(j,(T=new Stc,T.a+="<pre>\\ndependencies {\\n\\t...\\n\\tprovidedCompile \'javax.validation:validation-api:1.0.0.GA\'\\n}<\\/pre>",new F5(T.a)).a),Ymc(j,a.a),j),x6(a.Bb));Pab(c,(k=new $mc,Zmc(k,(U=new Stc,U.a+=\'<pre>\\n\\t&lt;dependency&gt;\\n\\t\\t&lt;groupId&gt;javax.validation&lt;/groupId&gt;\\n\\t\\t&lt;artifactId&gt;validation-api&lt;/artifactId&gt;\\n\\t\\t&lt;version&gt;1.0.0.GA&lt;/version&gt;\\n\\t\\t&lt;scope&gt;provided&lt;/scope&gt;\\n\\t&lt;/dependency&gt;<\\/pre>\',new F5(U.a)).a),Ymc(k,a.b),k),x6(a.g));Pab(c,(l=new $mc,Zmc(l,(V=new Stc,V.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.shared.domain;\\n\\nimport java.io.Serializable;\\nimport java.util.List;\\n\\nimport javax.validation.constraints.NotNull;\\nimport javax.validation.constraints.Size;\\n\\nimport com.google.common.collect.Lists;\\n\\npublic class Issue implements Serializable {\\n\\n\\tprivate static final long serialVersionUID = 1L;\\n\\n\\tprivate Long id;\\n\\t@NotNull\\n\\t@Size(min = 5, max = 50)\\n\\tprivate String name;\\n\\t@NotNull\\n\\tprivate Type type = Type.MINOR;\\n\\tprivate List&lt;String&gt; labels = Lists.newArrayList();\\n\\t@NotNull\\n\\t@Size(min = 10, max = 500)\\n\\tprivate String description;\\n\\n    ... // Getters and Setters\\n}<\\/pre>\',new F5(V.a)).a),Ymc(l,a.a),l),x6(a.j));Pab(c,(m=new $mc,Zmc(m,(W=new Stc,W.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.shared.domain;\\n\\npublic enum Type {\\n\\n\\tOPTIONAL,\\n\\tMINOR,\\n\\tMAJOR,\\n\\tCRITICAL,\\n\\tBLOCKER;\\n}<\\/pre>\',new F5(W.a)).a),Ymc(m,a.a),m),x6(a.n));Pab(c,(n=new $mc,Zmc(n,(X=new Stc,X.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.shared.constants;\\n\\nimport fr.putnami.pwt.core.editor.shared.constant.ValidationConstants;\\n\\npublic interface IssueConstants extends ValidationConstants {\\n\\n\\t@DefaultStringValue("ID")\\n\\tString id();\\n\\n\\t@DefaultStringValue("Name")\\n\\tString name();\\n\\n\\t@DefaultStringValue("Type")\\n\\tString type();\\n\\n\\t@DefaultStringValue("Labels")\\n\\tString labels();\\n\\n\\t@DefaultStringValue("Description")\\n\\tString description();\\n\\n\\t/* Enum */\\n\\n\\t@DefaultStringValue("Optional")\\n\\tString typeOptionalEnum();\\n\\n\\t@DefaultStringValue("Minor")\\n\\tString typeMinorEnum();\\n\\n\\t@DefaultStringValue("Major")\\n\\tString typeMajorEnum();\\n\\n\\t@DefaultStringValue("Critical")\\n\\tString typeCriticalEnum();\\n\\n\\t@DefaultStringValue("Blocker")\\n\\tString typeBlockerEnum();\\n\\n\\t/* Placeholders */\\n\\n\\t@DefaultStringValue("Simple name of the issue...")\\n\\tString namePlaceholder();\\n\\n\\t@DefaultStringValue("Describe the issue here...")\\n\\tString descriptionPlaceholder();\\n\\n\\t/* Tooltips */\\n\\n\\t@DefaultStringValue("Enter the issue name")\\n\\tString nameTooltip();\\n\\n\\t@DefaultStringValue("Select the issue type")\\n\\tString typeTooltip();\\n\\n\\t@DefaultStringValue("Select the applying labels")\\n\\tString labelsTooltip();\\n\\n\\t@DefaultStringValue("Enter the issue descriptionDescription")\\n\\tString descriptionTooltip();\\n\\n\\t/* Help */\\n\\n\\t@DefaultStringValue("Enter a short name of the issue.")\\n\\tString nameHelp();\\n\\n\\t@DefaultStringValue("Select labels to apply to this issue.")\\n\\tString labelsHelp();\\n\\n}<\\/pre>\',new F5(X.a)).a),Ymc(n,a.a),n),x6(a.p));Pab(c,(o=new mtb(2),ktb(o,(Y=new Stc,Y.a+=\'Step 3 : <em>Display the list of issues<\\/em>\',new F5(Y.a)).a),jw(o.L,QJc,RJc),o),x6(a.s));Pab(c,(p=new $mc,Zmc(p,(Z=new Stc,Z.a+=\'<pre>\\n&lt;!DOCTYPE ui:UiBinder SYSTEM "http://dl.google.com/gwt/DTD/xhtml.ent"&gt;\\n&lt;!DOCTYPE ui:UiBinder SYSTEM "http://dl.google.com/gwt/DTD/xhtml.ent"&gt;\\n&lt;ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\\n\\txmlns:w="urn:import:fr.putnami.pwt.core.widget.client"&gt;\\n\\n\\t&lt;w:HTMLPanel&gt;\\n\\t\\t&lt;w:Heading level="1" text="Issues Tracker" styleName="page-header"/&gt;\\n\\t\\t&lt;w:GridRow&gt;\\n\\t\\t\\t&lt;w:GridColumn size="8" offset="4"&gt;\\n\\t\\t\\t\\t&lt;w:TableEditor ui:field="issuesTable" readonly="true"&gt;\\n\\t\\t\\t\\t\\t&lt;w:Pagination pageSize="6" /&gt;\\n\\t\\t\\t\\t\\t&lt;w:TableColumn path="id" /&gt;\\n\\t\\t\\t\\t\\t&lt;w:TableColumn path="type"&gt;\\n\\t\\t\\t\\t\\t\\t&lt;w:TableSort /&gt;\\n\\t\\t\\t\\t\\t&lt;/w:TableColumn&gt;\\n\\t\\t\\t\\t\\t&lt;w:TableColumn path="name"&gt;\\n\\t\\t\\t\\t\\t\\t&lt;w:TableSort /&gt;\\n\\t\\t\\t\\t\\t&lt;/w:TableColumn&gt;\\n\\t\\t\\t\\t\\t&lt;w:TableColumn path="labels"&gt;\\n\\t\\t\\t\\t\\t\\t&lt;w:OutputList &gt;\\n\\t\\t\\t\\t\\t\\t\\t&lt;w:OutputText /&gt;\\n\\t\\t\\t\\t\\t\\t&lt;/w:OutputList&gt;\\n\\t\\t\\t\\t\\t&lt;/w:TableColumn&gt;\\n\\t\\t\\t\\t\\t&lt;w:TableColumn &gt;\\n\\t\\t\\t\\t\\t\\t&lt;w:Button ui:field="viewBoutton" type="ICON" iconType="VIEW" /&gt;\\n\\t\\t\\t\\t\\t&lt;/w:TableColumn&gt;\\n\\t\\t\\t\\t&lt;/w:TableEditor&gt;\\n\\t\\t\\t&lt;/w:GridColumn&gt;\\n\\t\\t&lt;/w:GridRow&gt;\\n\\t&lt;/w:HTMLPanel&gt;\\n&lt;/ui:UiBinder&gt;<\\/pre>\',new F5(Z.a)).a),Ymc(p,a.b),p),x6(a.u));Pab(c,(q=new $mc,Zmc(q,($=new Stc,$.a+=\'<pre>\\n@UiField\\n@Initialize(constantsClass = IssueConstants.class)\\nTableEditor&lt;Issue&gt; issuesTable;\\n<\\/pre>\',new F5($.a)).a),Ymc(q,a.a),q),x6(a.w));Pab(c,(r=new $mc,Zmc(r,(ab=new Stc,ab.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.shared.service;\\n\\nimport java.util.List;\\n\\nimport fr.putnami.pwt.tutorial.shared.domain.Issue;\\n\\npublic interface IssueService {\\n\\n\\tList&lt;Issue&gt; listIssues();\\n\\n\\tIssue createIssue(Issue issue);\\n\\n\\tIssue editIssue(Issue issue);\\n\\n}<\\/pre>\',new F5(ab.a)).a),Ymc(r,a.a),r),x6(a.B));Pab(c,(s=new $mc,Zmc(s,(bb=new Stc,bb.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.server.service;\\n\\nimport java.util.List;\\n\\nimport com.google.common.collect.Lists;\\n\\nimport fr.putnami.pwt.tutorial.shared.domain.Issue;\\nimport fr.putnami.pwt.tutorial.shared.service.IssueService;\\n\\npublic class IssueServiceImpl implements IssueService {\\n\\n\\t@Override\\n\\tpublic List&lt;Issue&gt; listIssues() {\\n\\t\\t// Do your implementation\\n\\t\\treturn Lists.newArrayList();\\n\\t}\\n\\n\\t@Override\\n\\tpublic Issue createIssue(Issue issue) {\\n\\t\\t// Do your implementation\\n\\t\\treturn issue;\\n\\t}\\n\\n\\t@Override\\n\\tpublic Issue editIssue(Issue issue) {\\n\\t\\t// Do your implementation\\n\\t\\treturn issue;\\n\\t}\\n}\\n<\\/pre>\',new F5(bb.a)).a),Ymc(s,a.a),s),x6(a.D));Pab(c,(t=new $mc,Zmc(t,(cb=new Stc,cb.a+=\'<pre>\\n...\\n&lt;init-param&gt;\\n\\t&lt;param-name&gt;services&lt;/param-name&gt;\\n\\t&lt;param-value&gt;fr.putnami.pwt.tutorial.server.service.ContactServiceImpl;fr.putnami.pwt.tutorial.server.service.IssueServiceImpl&lt;/param-value&gt;\\n&lt;/init-param&gt;\\n...\\n<\\/pre>\',new F5(cb.a)).a),Ymc(t,a.b),t),x6(a.G));Pab(c,(u=new $mc,Zmc(u,(db=new Stc,db.a+=\'<pre>\\n@InjectService\\nIssueService service;\\n<\\/pre>\',new F5(db.a)).a),Ymc(u,a.a),u),x6(a.K));Pab(c,(v=new $mc,Zmc(v,(eb=new Stc,eb.a+=\'<pre>\\n@PresentHandler\\nvoid present(IssuesPlace place) {\\n\\tservice.listIssues();\\n}\\n\\n@AsyncHandler\\nvoid onListIssues(List&lt;Issue&gt; issues) {\\n\\tissuesTable.edit(issues);\\n}\\n<\\/pre>\',new F5(eb.a)).a),Ymc(v,a.a),v),x6(a.M));Pab(c,(w=new mtb(2),ktb(w,(fb=new Stc,fb.a+=\'Step 4 : <em>Create a search form<\\/em>\',new F5(fb.a)).a),jw(w.L,QJc,RJc),w),x6(a.O));Pab(c,(A=new $mc,Zmc(A,(gb=new Stc,gb.a+=\'<pre>\\n...\\n&lt;w:GridRow&gt;\\n\\t&lt;w:GridColumn size="4"&gt;\\n\\t\\t&lt;w:Form ui:field="searchEditor" layout="BASIC"&gt;\\n\\t\\t\\t&lt;w:FormGroup path="label"/&gt;\\n\\t\\t\\t&lt;w:FormGroup path="name"/&gt;\\n\\t\\t\\t&lt;w:FormResetButton text="Reset" /&gt;\\n\\t\\t\\t&lt;w:FormSubmitButton text="Search" /&gt;\\n\\t\\t&lt;/w:Form&gt;\\n\\t&lt;/w:GridColumn&gt;\\n\\t&lt;w:GridColumn size="8"&gt;\\n\\t\\t&lt;w:TableEditor ui:field="issuesTable" readonly="true"&gt;\\n...\\n<\\/pre>\',new F5(gb.a)).a),Ymc(A,a.b),A),x6(a.Q));Pab(c,(B=new $mc,Zmc(B,(hb=new Stc,hb.a+=\'<pre>\\npublic static class SearchBean {\\n\\tpublic String label;\\n\\tpublic String name;\\n}\\n\\ninterface SearchConstants extends ConstantsWithLookup {\\n\\t@DefaultStringValue("Label")\\n\\tString label();\\n\\n\\t@DefaultStringValue("Issue label...")\\n\\tString labelPlaceholder();\\n\\n\\t@DefaultStringValue("Name")\\n\\tString name();\\n\\n\\t@DefaultStringValue("Issue name...")\\n\\tString namePlaceholder();\\n}\\n\\n@UiField\\n@Initialize(constantsClass = SearchConstants.class)\\nForm&lt;SearchBean&gt; searchEditor;\\n\\n@PresentHandler\\nvoid present(IssuesPlace place) {\\n\\t...\\n\\tsearchEditor.edit(new SearchBean());\\n}\\n<\\/pre>\',new F5(hb.a)).a),Ymc(B,a.a),B),x6(a.S));Pab(c,(C=new $mc,Zmc(C,(ib=new Stc,ib.a+=\'<pre>\\n@UiHandler("searchEditor")\\nvoid onSearchSubmit(FlushSuccessEvent event) {\\n\\tSearchBean search = (SearchBean) event.getValue();\\n\\tservice.searchIssues(search.name, search.label);\\n}\\n\\n@UiHandler("searchEditor")\\nvoid onSearchReset(ResetDisplayEvent event) {\\n\\tservice.listIssues();\\n}\\n\\n@AsyncHandler\\nvoid onSearchIssues(List&lt;Issue&gt; issues) {\\n\\tissuesTable.edit(issues);\\n}\\n<\\/pre>\',new F5(ib.a)).a),Ymc(C,a.a),C),x6(a.U));Pab(c,(D=new mtb(2),ktb(D,(jb=new Stc,jb.a+=\'Step 5 : <em>Create a popup (to declare a new issue)<\\/em>\',new F5(jb.a)).a),jw(D.L,QJc,RJc),D),x6(a.W));Pab(c,(F=new $mc,Zmc(F,(kb=new Stc,kb.a+=\'<pre>\\n&lt;ui:Binder ...&gt;\\n\\t&lt;ui:with field="labelItems" type="java.util.List" /&gt;\\n\\t ...\\n<\\/pre>\',new F5(kb.a)).a),Ymc(F,a.b),F),x6(a.Y));Pab(c,(G=new $mc,Zmc(G,(lb=new Stc,lb.a+=\'<pre>\\n\\t&lt;w:GridRow&gt;\\n\\t\\t&lt;w:GridColumn size="4"&gt;\\n\\t\\t\\t&lt;w:Button ui:field="addIssue" iconType="ADD" text="Declare an issue" type="LINK"/&gt;\\n\\t\\t\\t&lt;w:Form ui:field="searchEditor" layout="BASIC"&gt;\\n\\t...\\n<\\/pre>\',new F5(lb.a)).a),Ymc(G,a.b),G),x6(a.$));Pab(c,(H=new $mc,Zmc(H,(mb=new Stc,mb.a+=\'<pre>\\n&lt;w:Modal ui:field="modal" title="Edit an Issue" dismissable="true"&gt;\\n\\t&lt;w:Form ui:field="issueEditor" layout="HORIZONTAL"&gt;\\n\\t\\t&lt;w:FormGroup path="id" readonly="true" /&gt;\\n\\t\\t&lt;w:FormGroup path="name" /&gt;\\n\\t\\t&lt;w:FormGroup path="type" /&gt;\\n\\t\\t&lt;w:FormGroup path="labels" &gt;\\n\\t\\t\\t&lt;w:InputMultiSelect items="{labelItems}" /&gt;\\n\\t\\t\\t&lt;w:OutputList &gt;\\n\\t\\t\\t\\t&lt;w:OutputText /&gt;\\n\\t\\t\\t&lt;/w:OutputList&gt;\\n\\t\\t&lt;/w:FormGroup&gt;\\n\\t\\t&lt;w:FormGroup path="description" &gt;\\n\\t\\t\\t&lt;w:InputTextArea /&gt;\\n\\t\\t&lt;/w:FormGroup&gt;\\n\\t\\t&lt;w:Footer&gt;\\n\\t\\t\\t&lt;w:FormResetButton text="Reset" /&gt;\\n\\t\\t\\t&lt;w:FormSubmitButton text="Save" /&gt;\\n\\t\\t&lt;/w:Footer&gt;\\n\\t&lt;/w:Form&gt;\\n&lt;/w:Modal&gt;\\n<\\/pre>\',new F5(mb.a)).a),Ymc(H,a.b),H),x6(a.ab));Pab(c,(I=new $mc,Zmc(I,(nb=new Stc,nb.a+=\'<pre>\\n@UiField(provided = true)\\nfinal List&lt;String&gt; labelItems = Arrays.asList("Bug", "Enhancement", "Question", "Duplicate", "Invalid", "WontFix");\\n\\n@UiField\\n@Initialize(constantsClass = IssueConstants.class)\\nForm&lt;Issue&gt; issueEditor;\\n\\n@UiField\\nModal modal;\\n<\\/pre>\',new F5(nb.a)).a),Ymc(I,a.a),I),x6(a.eb));Pab(c,(J=new $mc,Zmc(J,(ob=new Stc,ob.a+=\'<pre>\\n@UiHandler("addIssue")\\nvoid onAddIssueButton(ButtonEvent event) {\\n\\tissueEditor.edit(new Issue());\\n\\tmodal.show();\\n}\\n<\\/pre>\',new F5(ob.a)).a),Ymc(J,a.a),J),x6(a.gb));Pab(c,(K=new $mc,Zmc(K,(pb=new Stc,pb.a+=\'<pre>\\n@UiHandler("viewBoutton")\\nvoid onViewButton(ButtonEvent event) {\\n\\tIssue issue = event.getValue();\\n\\tissueEditor.edit(issue);\\n\\tmodal.show();\\n}\\n<\\/pre>\',new F5(pb.a)).a),Ymc(K,a.a),K),x6(a.ib));Pab(c,(L=new $mc,Zmc(L,(qb=new Stc,qb.a+=\'<pre>\\n@UiHandler("issueEditor")\\nvoid onSaveIssueEditor(FlushSuccessEvent event) {\\n\\tmodal.hide();\\n\\tIssue issue = event.getValue();\\n\\tservice.saveIssue(issue);\\n}\\n<\\/pre>\',new F5(qb.a)).a),Ymc(L,a.a),L),x6(a.kb));Pab(c,(M=new $mc,Zmc(M,(rb=new Stc,rb.a+=\'<pre>\\n@AsyncHandler\\nvoid onSaveIssue(Issue issue) {\\n\\tsearchEditor.edit(new SearchBean());\\n\\tservice.listIssues();\\n}\\n<\\/pre>\',new F5(rb.a)).a),Ymc(M,a.a),M),x6(a.mb));Pab(c,new cmb((sb=new Stc,sb.a+=\'<h4>Note :<\\/h4><p>You can see the result in the <code>tutorials/Part5<\\/code> folder in the PWT sources.<\\/p>\',new F5(sb.a)).a),x6(a.ob));a.Cb.j=c;return c}\np3(1376,46,MJc);var O$=qrc(DIc,\'Tuto5IssueTrackerPage\',1376,RU);p3(925,1376,NJc,Vgc);_.th=function Wgc(a,b){E$b(this);b.xe(this)};var K$=qrc(DIc,\'Tuto5IssueTrackerPage_Injector\',925,O$);p3(1036,1,{},Zgc);var L$=qrc(DIc,\'Tuto5IssueTrackerPage_Tuto5IssueTrackerPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets\',1036,y1);var bhc;p3(690,1,hIc);_.Je=function lhc(){var a;!(Z4(),bhc)&&(bhc=new Vgc);a=new H$b;pjb(a,bhc);ijb(this.a,a)};oEc(Vt)(28);\n//# sourceURL=Documentation-28.js\n')
