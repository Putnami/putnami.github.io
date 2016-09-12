$wnd.Documentation.runAsyncCallback28('function ghc(){pab(this,jhc(new khc(this)))}\nfunction lhc(a){var b;b=new duc;b.a+=UGc;auc(b,X5(a));b.a+=VGc;return new I5(b.a)}\nfunction nhc(a,b){var c;c=new duc;c.a+=UGc;auc(c,X5(a));c.a+=TGc;auc(c,X5(b));c.a+=VGc;return new I5(c.a)}\nfunction jhc(a){var b,c,d,e,f,g;c=new otb(nhc(a.c,a.I).a);jw((J6(),c.L),$Gc,\'PWT - Tutorial Part 5 - Build a simple issues tracker\');b=D6(c.L);A6(a.d);A6(a.bb);b.b?Rv(b.b,b.a,b.c):F6(b.a);Nab(c,(d=new rtb(lhc(a.e).a),e=D6(d.L),A6(a.H),e.b?Rv(e.b,e.a,e.c):F6(e.a),Nab(d,(f=new ytb(1),wtb(f,(g=new duc,g.a+=\'Part 5 - Build a simple issues tracker\',new I5(g.a)).a),f),A6(a.H)),a.Cb.k=d,d),A6(a.d));Nab(c,ihc(a),A6(a.bb));return c}\nfunction khc(a){this.Cb=a;this.e=cx($doc);this.cb=cx($doc);this.qb=cx($doc);this.sb=cx($doc);this.ub=cx($doc);this.wb=cx($doc);this.yb=cx($doc);this.Ab=cx($doc);this.f=cx($doc);this.i=cx($doc);this.k=cx($doc);this.o=cx($doc);this.r=cx($doc);this.t=cx($doc);this.v=cx($doc);this.A=cx($doc);this.C=cx($doc);this.F=cx($doc);this.J=cx($doc);this.L=cx($doc);this.N=cx($doc);this.P=cx($doc);this.R=cx($doc);this.T=cx($doc);this.V=cx($doc);this.X=cx($doc);this.Z=cx($doc);this._=cx($doc);this.db=cx($doc);this.fb=cx($doc);this.hb=cx($doc);this.jb=cx($doc);this.lb=cx($doc);this.nb=cx($doc);this.c=cx($doc);this.I=cx($doc);this.H=new B6(this.e);this.pb=new B6(this.cb);this.rb=new B6(this.qb);this.tb=new B6(this.sb);this.vb=new B6(this.ub);this.xb=new B6(this.wb);this.zb=new B6(this.yb);this.Bb=new B6(this.Ab);this.g=new B6(this.f);this.j=new B6(this.i);this.n=new B6(this.k);this.p=new B6(this.o);this.s=new B6(this.r);this.u=new B6(this.t);this.w=new B6(this.v);this.B=new B6(this.A);this.D=new B6(this.C);this.G=new B6(this.F);this.K=new B6(this.J);this.M=new B6(this.L);this.O=new B6(this.N);this.Q=new B6(this.P);this.S=new B6(this.R);this.U=new B6(this.T);this.W=new B6(this.V);this.Y=new B6(this.X);this.$=new B6(this.Z);this.ab=new B6(this._);this.eb=new B6(this.db);this.gb=new B6(this.fb);this.ib=new B6(this.hb);this.kb=new B6(this.jb);this.mb=new B6(this.lb);this.ob=new B6(this.nb);this.d=new B6(this.c);this.bb=new B6(this.I);this.a=(Mnc(),Lnc);this.b=(Unc(),Tnc)}\nfunction mhc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K){var L;L=new duc;L.a+="<ul class=\'pager\'> <li class=\'previous\'><a href=\'#!Tuto4\'>\\u2190 Part 4 : Build a contact form<\\/a><\\/li> <li class=\'next\'><a href=\'#!Tuto6\'>Part 6 : Build a theme \\u2192<\\/a><\\/li> <\\/ul>  <p>In this tutorial, we will create a simple issue tracker in our project with its contact form <em><a href=\'#!Tuto4\'>Part 4 : Build a contact form<\\/a><\\/em><\\/p>  <span id=\'";auc(L,X5(a));L.a+="\'><\\/span>  <p>We already know how to create a place so let\'s do it :<\\/p>  <span id=\'";auc(L,X5(b));L.a+="\'><\\/span>  <p>And the view :<\\/p>  <span id=\'";auc(L,X5(c));L.a+="\'><\\/span>  <p>We will create the ui.xml file in the next step.<\\/p>  <p>Now we register the place in the application entry point (here <code>TutorialApp<\\/code>) :<\\/p> <span id=\'";auc(L,X5(d));L.a+="\'><\\/span>  <p>And now, we add an entry in the NavBar in the <code>PageDecorator.ui.xml<\\/code> :<\\/p> <span id=\'";auc(L,X5(e));L.a+=hKc;auc(L,X5(f));L.a+="\'><\\/span>  <p>In the model, we will use somme validation annotaions such as <code>NotNull<\\/code>. To do it, we have to add the dependency to the javax.validation api.<\\/p>   <p>For gradle :<\\/p> <span id=\'";auc(L,X5(g));L.a+="\'><\\/span>   <p>For maven :<\\/p> <span id=\'";auc(L,X5(h));L.a+="\'><\\/span>  <p>We will use the following model :<\\/p> <span id=\'";auc(L,X5(i));L.a+="\'><\\/span>  <p>And the <code>Type<\\/code> enum :<\\/p> <span id=\'";auc(L,X5(j));L.a+="\'><\\/span>  <p>And we create the associated constants :<\\/p> <span id=\'";auc(L,X5(k));L.a+=iKc;auc(L,X5(l));L.a+="\'><\\/span>  <p>We will now display a list of the issues. We have to create the view :<\\/p> <span id=\'";auc(L,X5(m));L.a+="\'><\\/span>  <p>We have to initialize the <code>TableEditor<\\/code> in the <code>IssuesView<\\/code> :<\\/p> <span id=\'";auc(L,X5(n));L.a+="\'><\\/span>  <p>To display some issues, we have to retrieve them from server. We define the Service interface :<\\/p> <span id=\'";auc(L,X5(o));L.a+="\'><\\/span>  <p>We create the implementation too :<\\/p> <span id=\'";auc(L,X5(p));L.a+="\'><\\/span>  <p>And we have to register the service to the <code>CommandService<\\/code> in the <code>web.xml<\\/code> :<\\/p> <span id=\'";auc(L,X5(q));L.a+="\'><\\/span>  <p>Now we can bind it on the client <code>IssuesView<\\/code> :<\\/p> <span id=\'";auc(L,X5(r));L.a+="\'><\\/span>  <p>Now, on the place presenting (<code>@PresentHandler<\\/code> methods), we will retrieve the list of issues from the server :<\\/p> <span id=\'";auc(L,X5(s));L.a+=iKc;auc(L,X5(t));L.a+="\'><\\/span> <p>Now we will add a search form to search by name and / or label.<\\/p>  <p>We add two fields on the ui :<\\/p> <span id=\'";auc(L,X5(u));L.a+="\'><\\/span>  <p>And now we define the bean, the constants and init the search form with it in the <code>IssuesView<\\/code> :<\\/p> <span id=\'";auc(L,X5(v));L.a+="\'><\\/span>  <p>And now, we add the handlers to the view :<\\/p> <span id=\'";auc(L,X5(w));L.a+="\'><\\/span>  <p>And That\'s it !!<\\/p>   <span id=\'";auc(L,X5(A));L.a+="\'><\\/span> <p>Now we will add a Popup to edit and create the issue.<\\/p>  <p>First in the <code>IssuesView.ui.xml<\\/code> file we add :<\\/p> <ol> <li>A <code>ui:with<\\/code> tag : <span id=\'";auc(L,X5(B));L.a+="\'><\\/span> <\\/li> <li>A Button to open the popup : <span id=\'";auc(L,X5(C));L.a+="\'><\\/span> <\\/li> <li>The modal : <span id=\'";auc(L,X5(D));L.a+="\'><\\/span> <\\/li> <\\/ol> <p>Then in the <code>IssuesView<\\/code> class :<\\/p> <ol> <li><p>The <code>UiField<\\/code>s used in the class :<\\/p> <span id=\'";auc(L,X5(F));L.a+=\'\\\'><\\/span> <\\/li> <li>We add a method to open the popup on click on the "Declare an issue" button : <span id=\\\'\';auc(L,X5(G));L.a+=\'\\\'><\\/span> <\\/li> <li>We add a method to open the popup on click on the "View issue" button : <span id=\\\'\';auc(L,X5(H));L.a+="\'><\\/span> <\\/li> <li>We add a method to save the issue on flush the popup content : <span id=\'";auc(L,X5(I));L.a+="\'><\\/span> <\\/li> <li>We add a method to reload the issues on issue save : <span id=\'";auc(L,X5(J));L.a+="\'><\\/span> <\\/li> <\\/ol>  <p>That\'s it !<\\/p> <span id=\'";auc(L,X5(K));L.a+="\'><\\/span>   <ul class=\'pager\'> <li class=\'previous\'><a href=\'#!Tuto4\'>\\u2190 Part 4 : Build a contact form<\\/a><\\/li> <li class=\'next\'><a href=\'#!Tuto6\'>Part 6 : Build a theme \\u2192<\\/a><\\/li> <\\/ul>";return new I5(L.a)}\nfunction ihc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb;c=new otb(mhc(a.cb,a.qb,a.sb,a.ub,a.wb,a.yb,a.Ab,a.f,a.i,a.k,a.o,a.r,a.t,a.v,a.A,a.C,a.F,a.J,a.L,a.N,a.P,a.R,a.T,a.V,a.X,a.Z,a._,a.db,a.fb,a.hb,a.jb,a.lb,a.nb).a);b=D6((J6(),c.L));A6(a.pb);A6(a.rb);A6(a.tb);A6(a.vb);A6(a.xb);A6(a.zb);A6(a.Bb);A6(a.g);A6(a.j);A6(a.n);A6(a.p);A6(a.s);A6(a.u);A6(a.w);A6(a.B);A6(a.D);A6(a.G);A6(a.K);A6(a.M);A6(a.O);A6(a.Q);A6(a.S);A6(a.U);A6(a.W);A6(a.Y);A6(a.$);A6(a.ab);A6(a.eb);A6(a.gb);A6(a.ib);A6(a.kb);A6(a.mb);A6(a.ob);b.b?Rv(b.b,b.a,b.c):F6(b.a);Nab(c,(d=new ytb(2),wtb(d,(N=new duc,N.a+=\'Step 1 : <em>Create the place, register it and add the item in the NavBar<\\/em>\',new I5(N.a)).a),jw(d.L,dKc,eKc),d),A6(a.pb));Nab(c,(e=new lnc,knc(e,(O=new duc,O.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.client.issues;\\n\\nimport fr.putnami.pwt.core.mvp.client.ViewPlace;\\nimport fr.putnami.pwt.core.mvp.client.annotation.ActivityDescription;\\n\\n@ActivityDescription(view = IssuesView.class)\\npublic class IssuesPlace extends ViewPlace {\\n}\\n<\\/pre>\',new I5(O.a)).a),jnc(e,a.a),e),A6(a.rb));Nab(c,(f=new lnc,knc(f,(P=new duc,P.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.client.issues;\\n\\nimport com.google.gwt.core.client.GWT;\\nimport com.google.gwt.user.client.ui.Composite;\\nimport com.google.gwt.user.client.ui.Widget;\\n\\nimport fr.putnami.pwt.core.inject.client.annotation.Templated;\\nimport fr.putnami.pwt.core.mvp.client.View;\\nimport fr.putnami.pwt.core.widget.client.binder.UiBinderLocalized;\\n\\n@Templated\\npublic class IssuesView extends Composite implements View {\\n}\\n<\\/pre>\',new I5(P.a)).a),jnc(f,a.a),f),A6(a.tb));Nab(c,(g=new lnc,knc(g,(Q=new duc,Q.a+=\'<pre>\\n@MvpDescription(\\n\\t\\t...\\n\\t\\tactivities = {\\n\\t\\t\\t\\t...,\\n\\t\\t\\t\\tIssuesPlace.class\\n\\t\\t})\\n<\\/pre>\',new I5(Q.a)).a),jnc(g,a.a),g),A6(a.vb));Nab(c,(h=new lnc,knc(h,(R=new duc,R.a+=\'<pre>\\n\\t...\\n\\t&lt;w:Nav&gt;\\n\\t\\t&lt;w:NavLink label="Issues Tracker" link="#!Issues"/&gt;\\n\\t\\t&lt;w:NavLink label="Contact" link="#!Contact"/&gt;\\n\\t...\\n<\\/pre>\',new I5(R.a)).a),jnc(h,a.b),h),A6(a.xb));Nab(c,(i=new ytb(2),wtb(i,(S=new duc,S.a+=\'Step 2 : <em>Define the model<\\/em>\',new I5(S.a)).a),jw(i.L,dKc,eKc),i),A6(a.zb));Nab(c,(j=new lnc,knc(j,(T=new duc,T.a+="<pre>\\ndependencies {\\n\\t...\\n\\tprovidedCompile \'javax.validation:validation-api:1.0.0.GA\'\\n}<\\/pre>",new I5(T.a)).a),jnc(j,a.a),j),A6(a.Bb));Nab(c,(k=new lnc,knc(k,(U=new duc,U.a+=\'<pre>\\n\\t&lt;dependency&gt;\\n\\t\\t&lt;groupId&gt;javax.validation&lt;/groupId&gt;\\n\\t\\t&lt;artifactId&gt;validation-api&lt;/artifactId&gt;\\n\\t\\t&lt;version&gt;1.0.0.GA&lt;/version&gt;\\n\\t\\t&lt;scope&gt;provided&lt;/scope&gt;\\n\\t&lt;/dependency&gt;<\\/pre>\',new I5(U.a)).a),jnc(k,a.b),k),A6(a.g));Nab(c,(l=new lnc,knc(l,(V=new duc,V.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.shared.domain;\\n\\nimport java.io.Serializable;\\nimport java.util.List;\\n\\nimport javax.validation.constraints.NotNull;\\nimport javax.validation.constraints.Size;\\n\\nimport com.google.common.collect.Lists;\\n\\npublic class Issue implements Serializable {\\n\\n\\tprivate static final long serialVersionUID = 1L;\\n\\n\\tprivate Long id;\\n\\t@NotNull\\n\\t@Size(min = 5, max = 50)\\n\\tprivate String name;\\n\\t@NotNull\\n\\tprivate Type type = Type.MINOR;\\n\\tprivate List&lt;String&gt; labels = Lists.newArrayList();\\n\\t@NotNull\\n\\t@Size(min = 10, max = 500)\\n\\tprivate String description;\\n\\n    ... // Getters and Setters\\n}<\\/pre>\',new I5(V.a)).a),jnc(l,a.a),l),A6(a.j));Nab(c,(m=new lnc,knc(m,(W=new duc,W.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.shared.domain;\\n\\npublic enum Type {\\n\\n\\tOPTIONAL,\\n\\tMINOR,\\n\\tMAJOR,\\n\\tCRITICAL,\\n\\tBLOCKER;\\n}<\\/pre>\',new I5(W.a)).a),jnc(m,a.a),m),A6(a.n));Nab(c,(n=new lnc,knc(n,(X=new duc,X.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.shared.constants;\\n\\nimport fr.putnami.pwt.core.editor.shared.constant.ValidationConstants;\\n\\npublic interface IssueConstants extends ValidationConstants {\\n\\n\\t@DefaultStringValue("ID")\\n\\tString id();\\n\\n\\t@DefaultStringValue("Name")\\n\\tString name();\\n\\n\\t@DefaultStringValue("Type")\\n\\tString type();\\n\\n\\t@DefaultStringValue("Labels")\\n\\tString labels();\\n\\n\\t@DefaultStringValue("Description")\\n\\tString description();\\n\\n\\t/* Enum */\\n\\n\\t@DefaultStringValue("Optional")\\n\\tString typeOptionalEnum();\\n\\n\\t@DefaultStringValue("Minor")\\n\\tString typeMinorEnum();\\n\\n\\t@DefaultStringValue("Major")\\n\\tString typeMajorEnum();\\n\\n\\t@DefaultStringValue("Critical")\\n\\tString typeCriticalEnum();\\n\\n\\t@DefaultStringValue("Blocker")\\n\\tString typeBlockerEnum();\\n\\n\\t/* Placeholders */\\n\\n\\t@DefaultStringValue("Simple name of the issue...")\\n\\tString namePlaceholder();\\n\\n\\t@DefaultStringValue("Describe the issue here...")\\n\\tString descriptionPlaceholder();\\n\\n\\t/* Tooltips */\\n\\n\\t@DefaultStringValue("Enter the issue name")\\n\\tString nameTooltip();\\n\\n\\t@DefaultStringValue("Select the issue type")\\n\\tString typeTooltip();\\n\\n\\t@DefaultStringValue("Select the applying labels")\\n\\tString labelsTooltip();\\n\\n\\t@DefaultStringValue("Enter the issue descriptionDescription")\\n\\tString descriptionTooltip();\\n\\n\\t/* Help */\\n\\n\\t@DefaultStringValue("Enter a short name of the issue.")\\n\\tString nameHelp();\\n\\n\\t@DefaultStringValue("Select labels to apply to this issue.")\\n\\tString labelsHelp();\\n\\n}<\\/pre>\',new I5(X.a)).a),jnc(n,a.a),n),A6(a.p));Nab(c,(o=new ytb(2),wtb(o,(Y=new duc,Y.a+=\'Step 3 : <em>Display the list of issues<\\/em>\',new I5(Y.a)).a),jw(o.L,dKc,eKc),o),A6(a.s));Nab(c,(p=new lnc,knc(p,(Z=new duc,Z.a+=\'<pre>\\n&lt;!DOCTYPE ui:UiBinder SYSTEM "http://dl.google.com/gwt/DTD/xhtml.ent"&gt;\\n&lt;!DOCTYPE ui:UiBinder SYSTEM "http://dl.google.com/gwt/DTD/xhtml.ent"&gt;\\n&lt;ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\\n\\txmlns:w="urn:import:fr.putnami.pwt.core.widget.client"&gt;\\n\\n\\t&lt;w:HTMLPanel&gt;\\n\\t\\t&lt;w:Heading level="1" text="Issues Tracker" styleName="page-header"/&gt;\\n\\t\\t&lt;w:GridRow&gt;\\n\\t\\t\\t&lt;w:GridColumn size="8" offset="4"&gt;\\n\\t\\t\\t\\t&lt;w:TableEditor ui:field="issuesTable" readonly="true"&gt;\\n\\t\\t\\t\\t\\t&lt;w:Pagination pageSize="6" /&gt;\\n\\t\\t\\t\\t\\t&lt;w:TableColumn path="id" /&gt;\\n\\t\\t\\t\\t\\t&lt;w:TableColumn path="type"&gt;\\n\\t\\t\\t\\t\\t\\t&lt;w:TableSort /&gt;\\n\\t\\t\\t\\t\\t&lt;/w:TableColumn&gt;\\n\\t\\t\\t\\t\\t&lt;w:TableColumn path="name"&gt;\\n\\t\\t\\t\\t\\t\\t&lt;w:TableSort /&gt;\\n\\t\\t\\t\\t\\t&lt;/w:TableColumn&gt;\\n\\t\\t\\t\\t\\t&lt;w:TableColumn path="labels"&gt;\\n\\t\\t\\t\\t\\t\\t&lt;w:OutputList &gt;\\n\\t\\t\\t\\t\\t\\t\\t&lt;w:OutputText /&gt;\\n\\t\\t\\t\\t\\t\\t&lt;/w:OutputList&gt;\\n\\t\\t\\t\\t\\t&lt;/w:TableColumn&gt;\\n\\t\\t\\t\\t\\t&lt;w:TableColumn &gt;\\n\\t\\t\\t\\t\\t\\t&lt;w:Button ui:field="viewBoutton" type="ICON" iconType="VIEW" /&gt;\\n\\t\\t\\t\\t\\t&lt;/w:TableColumn&gt;\\n\\t\\t\\t\\t&lt;/w:TableEditor&gt;\\n\\t\\t\\t&lt;/w:GridColumn&gt;\\n\\t\\t&lt;/w:GridRow&gt;\\n\\t&lt;/w:HTMLPanel&gt;\\n&lt;/ui:UiBinder&gt;<\\/pre>\',new I5(Z.a)).a),jnc(p,a.b),p),A6(a.u));Nab(c,(q=new lnc,knc(q,($=new duc,$.a+=\'<pre>\\n@UiField\\n@Initialize(constantsClass = IssueConstants.class)\\nTableEditor&lt;Issue&gt; issuesTable;\\n<\\/pre>\',new I5($.a)).a),jnc(q,a.a),q),A6(a.w));Nab(c,(r=new lnc,knc(r,(ab=new duc,ab.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.shared.service;\\n\\nimport java.util.List;\\n\\nimport fr.putnami.pwt.tutorial.shared.domain.Issue;\\n\\npublic interface IssueService {\\n\\n\\tList&lt;Issue&gt; listIssues();\\n\\n\\tIssue createIssue(Issue issue);\\n\\n\\tIssue editIssue(Issue issue);\\n\\n}<\\/pre>\',new I5(ab.a)).a),jnc(r,a.a),r),A6(a.B));Nab(c,(s=new lnc,knc(s,(bb=new duc,bb.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.server.service;\\n\\nimport java.util.List;\\n\\nimport com.google.common.collect.Lists;\\n\\nimport fr.putnami.pwt.tutorial.shared.domain.Issue;\\nimport fr.putnami.pwt.tutorial.shared.service.IssueService;\\n\\npublic class IssueServiceImpl implements IssueService {\\n\\n\\t@Override\\n\\tpublic List&lt;Issue&gt; listIssues() {\\n\\t\\t// Do your implementation\\n\\t\\treturn Lists.newArrayList();\\n\\t}\\n\\n\\t@Override\\n\\tpublic Issue createIssue(Issue issue) {\\n\\t\\t// Do your implementation\\n\\t\\treturn issue;\\n\\t}\\n\\n\\t@Override\\n\\tpublic Issue editIssue(Issue issue) {\\n\\t\\t// Do your implementation\\n\\t\\treturn issue;\\n\\t}\\n}\\n<\\/pre>\',new I5(bb.a)).a),jnc(s,a.a),s),A6(a.D));Nab(c,(t=new lnc,knc(t,(cb=new duc,cb.a+=\'<pre>\\n...\\n&lt;init-param&gt;\\n\\t&lt;param-name&gt;services&lt;/param-name&gt;\\n\\t&lt;param-value&gt;fr.putnami.pwt.tutorial.server.service.ContactServiceImpl;fr.putnami.pwt.tutorial.server.service.IssueServiceImpl&lt;/param-value&gt;\\n&lt;/init-param&gt;\\n...\\n<\\/pre>\',new I5(cb.a)).a),jnc(t,a.b),t),A6(a.G));Nab(c,(u=new lnc,knc(u,(db=new duc,db.a+=\'<pre>\\n@InjectService\\nIssueService service;\\n<\\/pre>\',new I5(db.a)).a),jnc(u,a.a),u),A6(a.K));Nab(c,(v=new lnc,knc(v,(eb=new duc,eb.a+=\'<pre>\\n@PresentHandler\\nvoid present(IssuesPlace place) {\\n\\tservice.listIssues();\\n}\\n\\n@AsyncHandler\\nvoid onListIssues(List&lt;Issue&gt; issues) {\\n\\tissuesTable.edit(issues);\\n}\\n<\\/pre>\',new I5(eb.a)).a),jnc(v,a.a),v),A6(a.M));Nab(c,(w=new ytb(2),wtb(w,(fb=new duc,fb.a+=\'Step 4 : <em>Create a search form<\\/em>\',new I5(fb.a)).a),jw(w.L,dKc,eKc),w),A6(a.O));Nab(c,(A=new lnc,knc(A,(gb=new duc,gb.a+=\'<pre>\\n...\\n&lt;w:GridRow&gt;\\n\\t&lt;w:GridColumn size="4"&gt;\\n\\t\\t&lt;w:Form ui:field="searchEditor" layout="BASIC"&gt;\\n\\t\\t\\t&lt;w:FormGroup path="label"/&gt;\\n\\t\\t\\t&lt;w:FormGroup path="name"/&gt;\\n\\t\\t\\t&lt;w:FormResetButton text="Reset" /&gt;\\n\\t\\t\\t&lt;w:FormSubmitButton text="Search" /&gt;\\n\\t\\t&lt;/w:Form&gt;\\n\\t&lt;/w:GridColumn&gt;\\n\\t&lt;w:GridColumn size="8"&gt;\\n\\t\\t&lt;w:TableEditor ui:field="issuesTable" readonly="true"&gt;\\n...\\n<\\/pre>\',new I5(gb.a)).a),jnc(A,a.b),A),A6(a.Q));Nab(c,(B=new lnc,knc(B,(hb=new duc,hb.a+=\'<pre>\\npublic static class SearchBean {\\n\\tpublic String label;\\n\\tpublic String name;\\n}\\n\\ninterface SearchConstants extends ConstantsWithLookup {\\n\\t@DefaultStringValue("Label")\\n\\tString label();\\n\\n\\t@DefaultStringValue("Issue label...")\\n\\tString labelPlaceholder();\\n\\n\\t@DefaultStringValue("Name")\\n\\tString name();\\n\\n\\t@DefaultStringValue("Issue name...")\\n\\tString namePlaceholder();\\n}\\n\\n@UiField\\n@Initialize(constantsClass = SearchConstants.class)\\nForm&lt;SearchBean&gt; searchEditor;\\n\\n@PresentHandler\\nvoid present(IssuesPlace place) {\\n\\t...\\n\\tsearchEditor.edit(new SearchBean());\\n}\\n<\\/pre>\',new I5(hb.a)).a),jnc(B,a.a),B),A6(a.S));Nab(c,(C=new lnc,knc(C,(ib=new duc,ib.a+=\'<pre>\\n@UiHandler("searchEditor")\\nvoid onSearchSubmit(FlushSuccessEvent event) {\\n\\tSearchBean search = (SearchBean) event.getValue();\\n\\tservice.searchIssues(search.name, search.label);\\n}\\n\\n@UiHandler("searchEditor")\\nvoid onSearchReset(ResetDisplayEvent event) {\\n\\tservice.listIssues();\\n}\\n\\n@AsyncHandler\\nvoid onSearchIssues(List&lt;Issue&gt; issues) {\\n\\tissuesTable.edit(issues);\\n}\\n<\\/pre>\',new I5(ib.a)).a),jnc(C,a.a),C),A6(a.U));Nab(c,(D=new ytb(2),wtb(D,(jb=new duc,jb.a+=\'Step 5 : <em>Create a popup (to declare a new issue)<\\/em>\',new I5(jb.a)).a),jw(D.L,dKc,eKc),D),A6(a.W));Nab(c,(F=new lnc,knc(F,(kb=new duc,kb.a+=\'<pre>\\n&lt;ui:Binder ...&gt;\\n\\t&lt;ui:with field="labelItems" type="java.util.List" /&gt;\\n\\t ...\\n<\\/pre>\',new I5(kb.a)).a),jnc(F,a.b),F),A6(a.Y));Nab(c,(G=new lnc,knc(G,(lb=new duc,lb.a+=\'<pre>\\n\\t&lt;w:GridRow&gt;\\n\\t\\t&lt;w:GridColumn size="4"&gt;\\n\\t\\t\\t&lt;w:Button ui:field="addIssue" iconType="ADD" text="Declare an issue" type="LINK"/&gt;\\n\\t\\t\\t&lt;w:Form ui:field="searchEditor" layout="BASIC"&gt;\\n\\t...\\n<\\/pre>\',new I5(lb.a)).a),jnc(G,a.b),G),A6(a.$));Nab(c,(H=new lnc,knc(H,(mb=new duc,mb.a+=\'<pre>\\n&lt;w:Modal ui:field="modal" title="Edit an Issue" dismissable="true"&gt;\\n\\t&lt;w:Form ui:field="issueEditor" layout="HORIZONTAL"&gt;\\n\\t\\t&lt;w:FormGroup path="id" readonly="true" /&gt;\\n\\t\\t&lt;w:FormGroup path="name" /&gt;\\n\\t\\t&lt;w:FormGroup path="type" /&gt;\\n\\t\\t&lt;w:FormGroup path="labels" &gt;\\n\\t\\t\\t&lt;w:InputMultiSelect items="{labelItems}" /&gt;\\n\\t\\t\\t&lt;w:OutputList &gt;\\n\\t\\t\\t\\t&lt;w:OutputText /&gt;\\n\\t\\t\\t&lt;/w:OutputList&gt;\\n\\t\\t&lt;/w:FormGroup&gt;\\n\\t\\t&lt;w:FormGroup path="description" &gt;\\n\\t\\t\\t&lt;w:InputTextArea /&gt;\\n\\t\\t&lt;/w:FormGroup&gt;\\n\\t\\t&lt;w:Footer&gt;\\n\\t\\t\\t&lt;w:FormResetButton text="Reset" /&gt;\\n\\t\\t\\t&lt;w:FormSubmitButton text="Save" /&gt;\\n\\t\\t&lt;/w:Footer&gt;\\n\\t&lt;/w:Form&gt;\\n&lt;/w:Modal&gt;\\n<\\/pre>\',new I5(mb.a)).a),jnc(H,a.b),H),A6(a.ab));Nab(c,(I=new lnc,knc(I,(nb=new duc,nb.a+=\'<pre>\\n@UiField(provided = true)\\nfinal List&lt;String&gt; labelItems = Arrays.asList("Bug", "Enhancement", "Question", "Duplicate", "Invalid", "WontFix");\\n\\n@UiField\\n@Initialize(constantsClass = IssueConstants.class)\\nForm&lt;Issue&gt; issueEditor;\\n\\n@UiField\\nModal modal;\\n<\\/pre>\',new I5(nb.a)).a),jnc(I,a.a),I),A6(a.eb));Nab(c,(J=new lnc,knc(J,(ob=new duc,ob.a+=\'<pre>\\n@UiHandler("addIssue")\\nvoid onAddIssueButton(ButtonEvent event) {\\n\\tissueEditor.edit(new Issue());\\n\\tmodal.show();\\n}\\n<\\/pre>\',new I5(ob.a)).a),jnc(J,a.a),J),A6(a.gb));Nab(c,(K=new lnc,knc(K,(pb=new duc,pb.a+=\'<pre>\\n@UiHandler("viewBoutton")\\nvoid onViewButton(ButtonEvent event) {\\n\\tIssue issue = event.getValue();\\n\\tissueEditor.edit(issue);\\n\\tmodal.show();\\n}\\n<\\/pre>\',new I5(pb.a)).a),jnc(K,a.a),K),A6(a.ib));Nab(c,(L=new lnc,knc(L,(qb=new duc,qb.a+=\'<pre>\\n@UiHandler("issueEditor")\\nvoid onSaveIssueEditor(FlushSuccessEvent event) {\\n\\tmodal.hide();\\n\\tIssue issue = event.getValue();\\n\\tservice.saveIssue(issue);\\n}\\n<\\/pre>\',new I5(qb.a)).a),jnc(L,a.a),L),A6(a.kb));Nab(c,(M=new lnc,knc(M,(rb=new duc,rb.a+=\'<pre>\\n@AsyncHandler\\nvoid onSaveIssue(Issue issue) {\\n\\tsearchEditor.edit(new SearchBean());\\n\\tservice.listIssues();\\n}\\n<\\/pre>\',new I5(rb.a)).a),jnc(M,a.a),M),A6(a.mb));Nab(c,new lmb((sb=new duc,sb.a+=\'<h4>Note :<\\/h4><p>You can see the result in the <code>tutorials/Part5<\\/code> folder in the PWT sources.<\\/p>\',new I5(sb.a)).a),A6(a.ob));a.Cb.j=c;return c}\ns3(1375,46,_Jc);var R$=Erc(SIc,\'Tuto5IssueTrackerPage\',1375,UU);s3(924,1375,aKc,ghc);_.vh=function hhc(a,b){R$b(this);b.xe(this)};var N$=Erc(SIc,\'Tuto5IssueTrackerPage_Injector\',924,R$);s3(1035,1,{},khc);var O$=Erc(SIc,\'Tuto5IssueTrackerPage_Tuto5IssueTrackerPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets\',1035,B1);var ohc;s3(690,1,wIc);_.Je=function yhc(){var a;!(a5(),ohc)&&(ohc=new ghc);a=new U$b;yjb(a,ohc);rjb(this.a,a)};BEc(Vt)(28);\n//# sourceURL=Documentation-28.js\n')
