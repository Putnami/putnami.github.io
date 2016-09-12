$wnd.Documentation.runAsyncCallback27('function Hgc(){oab(this,Kgc(new Lgc(this)))}\nfunction Mgc(a){var b;b=new Ytc;b.a+=PGc;Vtc(b,X5(a));b.a+=QGc;return new I5(b.a)}\nfunction Ogc(a,b){var c;c=new Ytc;c.a+=PGc;Vtc(c,X5(a));c.a+=OGc;Vtc(c,X5(b));c.a+=QGc;return new I5(c.a)}\nfunction Kgc(a){var b,c,d,e,f,g;c=new itb(Ogc(a.c,a.I).a);lw((J6(),c.L),VGc,\'PWT - Tutorial Part 4 - Build a contact form\');b=D6(c.L);A6(a.d);A6(a.T);b.b?Rv(b.b,b.a,b.c):F6(b.a);Mab(c,(d=new ltb(Mgc(a.e).a),e=D6(d.L),A6(a.H),e.b?Rv(e.b,e.a,e.c):F6(e.a),Mab(d,(f=new stb(1),qtb(f,(g=new Ytc,g.a+=\'Part 4 - Build a contact form\',new I5(g.a)).a),f),A6(a.H)),a.gb.k=d,d),A6(a.d));Mab(c,Jgc(a),A6(a.T));return c}\nfunction Lgc(a){this.gb=a;this.e=bx($doc);this.U=bx($doc);this.W=bx($doc);this.Y=bx($doc);this.$=bx($doc);this.ab=bx($doc);this.cb=bx($doc);this.eb=bx($doc);this.f=bx($doc);this.i=bx($doc);this.k=bx($doc);this.o=bx($doc);this.r=bx($doc);this.t=bx($doc);this.v=bx($doc);this.A=bx($doc);this.C=bx($doc);this.F=bx($doc);this.J=bx($doc);this.L=bx($doc);this.N=bx($doc);this.P=bx($doc);this.R=bx($doc);this.c=bx($doc);this.I=bx($doc);this.H=new B6(this.e);this.V=new B6(this.U);this.X=new B6(this.W);this.Z=new B6(this.Y);this._=new B6(this.$);this.bb=new B6(this.ab);this.db=new B6(this.cb);this.fb=new B6(this.eb);this.g=new B6(this.f);this.j=new B6(this.i);this.n=new B6(this.k);this.p=new B6(this.o);this.s=new B6(this.r);this.u=new B6(this.t);this.w=new B6(this.v);this.B=new B6(this.A);this.D=new B6(this.C);this.G=new B6(this.F);this.K=new B6(this.J);this.M=new B6(this.L);this.O=new B6(this.N);this.Q=new B6(this.P);this.S=new B6(this.R);this.d=new B6(this.c);this.T=new B6(this.I);this.a=(Fnc(),Enc);this.b=(Nnc(),Mnc)}\nfunction Ngc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var w;w=new Ytc;w.a+="<ul class=\'pager\'> <li class=\'previous\'><a href=\'#!Tuto3\'>\\u2190 Part 3 : Build more pages<\\/a><\\/li> <li class=\'next\'><a href=\'#!Tuto5\'>Part 5 : Build a simple issues tracker \\u2192<\\/a><\\/li> <\\/ul>  <p>In this tutorial, we will add a contact form to the project inited in <em><a href=\'#!Tuto3\'>Part 3 : Build more pages<\\/a><\\/em><\\/p>   <span id=\'";Vtc(w,X5(a));w.a+="\'><\\/span>  <p>In the Part 3, we\'ve created the <code>ContactView<\\/code>, but you may have noticed that it was empty...<\\/p> <p>Let\'s create the form!<\\/p> <p>The contact form will have the following fields:<\\/p> <ul> <li>Name (a String)<\\/li> <li>Email (an email String)<\\/li> <li>Birthday (a Date)<\\/li> <li>Subject (a String among propositions)<\\/li> <li>Note of this tutorial (a number between 0 and 10)<\\/li> <li>Message (a String)<\\/li> <\\/ul> <p>So add the following the <code>ContactView.ui.xml<\\/code><\\/p> <span id=\'";Vtc(w,X5(b));w.a+="\'><\\/span>  <p>And we add to the <code>ContactView<\\/code> class the following :<\\/p> <span id=\'";Vtc(w,X5(c));w.a+="\'><\\/span>  <p>If you run the app you will see the form.<\\/p>  <span id=\'";Vtc(w,X5(d));w.a+="\'><\\/span>  <p>The DataBinding framework is a great feature of PWT. It allows you to reduce the needed java code to do great apps.<\\/p>  <p>We will bind the following model :<\\/p> <span id=\'";Vtc(w,X5(e));w.a+="\'><\\/span>  <p>Don\'t forget to add the <code>shared<\\/code> path (and the <code>client<\\/code> which was implicit) to the GWT source in the Module xml file :<\\/p> <span id=\'";Vtc(w,X5(f));w.a+="\'><\\/span>  <p>We add the contactEditor in the <code>ContactView<\\/code>. The annotation <code>@Initialize<\\/code> helps to initialize the form with a Model generated from the <code>Contact<\\/code> bean.<\\/p> <span id=\'";Vtc(w,X5(g));w.a+="\'><\\/span>  <p>Don\'t forget to add the dependency to the <code>Model<\\/code> module in the Module xml file (here the <code>fr/putnami/pwt/tutorial/Tutorial.gwt.xml<\\/code>) :<\\/p> <span id=\'";Vtc(w,X5(h));w.a+="\'><\\/span>  <p>If you run the app, you can now use the <code>Reset<\\/code> and <code>Submit<\\/code> buttons, wich are enabled when the edited bean change (ie when you change a field value).<\\/p>  <span id=\'";Vtc(w,X5(i));w.a+=dKc;Vtc(w,X5(j));w.a+="\'><\\/span>  <p>The DataBinding framework can do a lot more for you.<\\/p> <p>In the <code>ContactView.ui.xml<\\/code> we\'ve add only <code>Input...<\\/code> widgets.  But PWT provides a <code>FormGroup<\\/code> component which can auto create a <code>Label<\\/code>, <code>EditorInput<\\/code> or <code>EditorOutput<\\/code>, <code>Tooltip<\\/code>, <code>Help<\\/code>, and <code>ErrorGroup<\\/code> for a property.  If you want a specific Input, you can provide it.<\\/p>  <p>The <code>ContactView.ui.xml<\\/code> becomes :<\\/p> <span id=\'";Vtc(w,X5(k));w.a+="\'><\\/span>  <p>If you run the app now, you\'ll see the Contact form with a better layout, but without any labels. Indeed we have to provide them.<\\/p>  <p>First, we create a Constant class to define them :<\\/p> <span id=\'";Vtc(w,X5(l));w.a+="\'><\\/span>  <p>And now we provide thoses constants to the <code>Form<\\/code> by adding the <code>constantsClass<\\/code> attribute on the <code>@Initialize<\\/code> annotation.<\\/p> <span id=\'";Vtc(w,X5(m));w.a+="\'><\\/span>  <p>If you run the app now, you\'ll see that the Labels are automatically inserted.<\\/p>  <p>But we can also generate some placeholder, tooltips and help ! Just complement the constants with the following :<\\/p> <span id=\'";Vtc(w,X5(n));w.a+="\'><\\/span>  <p>If you run the app now, you\'ll see a complete contact form with inputs, labels, tooltips on inputs, and a help for each input!<\\/p>   <span id=\'";Vtc(w,X5(o));w.a+="\'><\\/span>  <p>Now we will send data to the server. To do that we will use the <code>FlushSuccessEvent<\\/code> fired by the <code>FormSubmitButton<\\/code> to send data to the server.<\\/p> <p>First of all, we add the dependency to the <code>Service<\\/code> module in the Module xml file (here the <code>fr/putnami/pwt/tutorial/Tutorial.gwt.xml<\\/code>) :<\\/p>  <span id=\'";Vtc(w,X5(p));w.a+="\'><\\/span>  <p>Then, we define the service :<\\/p> <span id=\'";Vtc(w,X5(q));w.a+="\'><\\/span>  <p>and the implementation :<\\/p> <span id=\'";Vtc(w,X5(r));w.a+="\'><\\/span>  <p>Now, we register the service in the <code>CommandService<\\/code>.  To do it, we create a <code>BasicCommandService<\\/code> Servlet via the <code>web.xml<\\/code> file, and configure it :<\\/p> <span id=\'";Vtc(w,X5(s));w.a+="\'><\\/span>   <p>In the <code>ContactView<\\/code> we have to declare and inject the service. The service is binded to the view <code>@AsyncHandler<\\/code> methods.<\\/p> <span id=\'";Vtc(w,X5(t));w.a+="\'><\\/span>  <p>Finally we call the service and reset the form when the result returns from server in <code>ContactView<\\/code>:<\\/p> <span id=\'";Vtc(w,X5(u));w.a+="\'><\\/span>  <p>Now run the app and submit some contacts. You\'ll see on the server console the received Contacts.<\\/p> <span id=\'";Vtc(w,X5(v));w.a+="\'><\\/span>   <ul class=\'pager\'> <li class=\'previous\'><a href=\'#!Tuto3\'>\\u2190 Part 3 : Build more pages<\\/a><\\/li> <li class=\'next\'><a href=\'#!Tuto5\'>Part 5 : Build a simple issues tracker \\u2192<\\/a><\\/li> <\\/ul>";return new I5(w.a)}\nfunction Jgc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W;c=new itb(Ngc(a.U,a.W,a.Y,a.$,a.ab,a.cb,a.eb,a.f,a.i,a.k,a.o,a.r,a.t,a.v,a.A,a.C,a.F,a.J,a.L,a.N,a.P,a.R).a);b=D6((J6(),c.L));A6(a.V);A6(a.X);A6(a.Z);A6(a._);A6(a.bb);A6(a.db);A6(a.fb);A6(a.g);A6(a.j);A6(a.n);A6(a.p);A6(a.s);A6(a.u);A6(a.w);A6(a.B);A6(a.D);A6(a.G);A6(a.K);A6(a.M);A6(a.O);A6(a.Q);A6(a.S);b.b?Rv(b.b,b.a,b.c):F6(b.a);Mab(c,(d=new stb(2),qtb(d,(A=new Ytc,A.a+=\'Step 1 : <em>Create the form<\\/em>\',new I5(A.a)).a),lw(d.L,$Jc,_Jc),d),A6(a.V));Mab(c,(e=new enc,dnc(e,(B=new Ytc,B.a+=\'<pre>\\n&lt;!DOCTYPE ui:UiBinder SYSTEM "http://dl.google.com/gwt/DTD/xhtml.ent"&gt;\\n&lt;ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"\\n\\txmlns:w="urn:import:fr.putnami.pwt.core.widget.client"&gt;\\n\\n\\t&lt;ui:with field="noteItems" type="java.util.List" /&gt;\\n\\t&lt;ui:with field="subjectItems" type="java.util.List" /&gt;\\n\\n\\t&lt;w:HTMLPanel&gt;\\n\\t\\t&lt;w:Heading level="1" text="Contact" styleName="page-header"/&gt;\\n\\t\\t&lt;w:Form ui:field="contactEditor" layout="HORIZONTAL"&gt;\\n\\t\\t\\t&lt;fieldset&gt;\\n\\t\\t\\t\\t&lt;legend&gt;You&lt;/legend&gt;\\n\\t\\t\\t\\t&lt;w:InputText path="name" placeholder="Name..."/&gt;\\n\\t\\t\\t\\t&lt;w:InputEmail path="email" placeholder="Email..."/&gt;\\n\\t\\t\\t\\t&lt;w:InputDate path="birthday" /&gt;\\n\\t\\t\\t&lt;/fieldset&gt;\\n\\t\\t\\t&lt;fieldset&gt;\\n\\t\\t\\t\\t&lt;legend&gt;Your interest in this tutorial&lt;/legend&gt;\\n\\t\\t\\t\\t&lt;w:InputSlider path="tutorialNote" items="{noteItems}" /&gt;\\n\\t\\t\\t&lt;/fieldset&gt;\\n\\t\\t\\t&lt;fieldset&gt;\\n\\t\\t\\t\\t&lt;legend&gt;Your message&lt;/legend&gt;\\n\\t\\t\\t\\t&lt;w:InputSelect path="subject" items="{subjectItems}" /&gt;\\n\\t\\t\\t\\t&lt;w:InputTextArea  path="message" /&gt;\\n\\t\\t\\t&lt;/fieldset&gt;\\n\\t\\t\\t&lt;w:Footer&gt;\\n\\t\\t\\t\\t&lt;w:FormResetButton text="Reset" size="LARGE" /&gt;\\n\\t\\t\\t\\t&lt;w:FormSubmitButton text="Submit" size="LARGE" /&gt;\\n\\t\\t\\t&lt;/w:Footer&gt;\\n\\t\\t&lt;/w:Form&gt;\\n\\t&lt;/w:HTMLPanel&gt;\\n&lt;/ui:UiBinder&gt;<\\/pre>\',new I5(B.a)).a),cnc(e,a.b),e),A6(a.X));Mab(c,(f=new enc,dnc(f,(C=new Ytc,C.a+=\'<pre>\\n\\t@UiField(provided = true)\\n\\tList&lt;Integer&gt; noteItems = Arrays.asList(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\\n\\n\\t@UiField(provided = true)\\n\\tList&lt;String&gt; subjectItems = Arrays.asList("About this tutorial", "About PWT", "About Putnami Team", "Other");<\\/pre>\',new I5(C.a)).a),cnc(f,a.a),f),A6(a.Z));Mab(c,(g=new stb(2),qtb(g,(D=new Ytc,D.a+=\'Step 2 : <em>Use DataBinding framework<\\/em>\',new I5(D.a)).a),lw(g.L,$Jc,_Jc),g),A6(a._));Mab(c,(h=new enc,dnc(h,(F=new Ytc,F.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.shared.domain;\\n\\nimport java.io.Serializable;\\nimport java.util.Date;\\n\\npublic class Contact implements Serializable{\\n\\n    private static final long serialVersionUID = 1L;\\n\\n\\tprivate String name;\\n\\tprivate String email;\\n\\tprivate Date birthday;\\n\\n\\tprivate Integer tutorialNote = Integer.valueOf(5); // Default Value\\n\\n\\tprivate String subject = "About PWT"; // Default Value\\n\\tprivate String message;\\n\\n    ... //Getters and Setters\\n}<\\/pre>\',new I5(F.a)).a),cnc(h,a.a),h),A6(a.bb));Mab(c,(i=new enc,dnc(i,(G=new Ytc,G.a+=\'<pre>\\n\\t&lt;source path="client" /&gt;\\n\\t&lt;source path="shared" /&gt;<\\/pre>\',new I5(G.a)).a),cnc(i,a.b),i),A6(a.db));Mab(c,(j=new enc,dnc(j,(H=new Ytc,H.a+=\'<pre>\\n\\t@UiField\\n\\t@Initialize\\n\\tForm&lt;Contact&gt; contactEditor;\\n<\\/pre>\',new I5(H.a)).a),cnc(j,a.a),j),A6(a.fb));Mab(c,(k=new enc,dnc(k,(I=new Ytc,I.a+=\'<pre>\\n\\t&lt;!-- PWT Module to extends in order to use PWT Model features--&gt;\\n\\t&lt;inherits name="fr.putnami.pwt.core.model.Model"/&gt;\\n<\\/pre>\',new I5(I.a)).a),cnc(k,a.b),k),A6(a.g));Mab(c,new imb((J=new Ytc,J.a+=\'<h4>Note : <\\/h4><p><em>The <code>Submit<\\/code> button does nothing for now.<\\/em><\\/p>\',new I5(J.a)).a),A6(a.j));Mab(c,(l=new stb(2),qtb(l,(K=new Ytc,K.a+=\'Step 3 : <em>Go further with DataBinding framework<\\/em>\',new I5(K.a)).a),lw(l.L,$Jc,_Jc),l),A6(a.n));Mab(c,(m=new enc,dnc(m,(L=new Ytc,L.a+=\'<pre>\\n\\t...\\n\\t&lt;w:Form ui:field="contactEditor" layout="HORIZONTAL"&gt;\\n\\t\\t&lt;fieldset&gt;\\n\\t\\t\\t&lt;legend&gt;You&lt;/legend&gt;\\n\\t\\t\\t&lt;w:FormGroup path="name" /&gt;\\n\\t\\t\\t&lt;w:FormGroup path="email" &gt;\\n\\t\\t\\t\\t&lt;w:InputEmail /&gt;\\n\\t\\t\\t&lt;/w:FormGroup&gt;\\n\\t\\t\\t&lt;w:FormGroup path="birthday" /&gt;\\n\\t\\t&lt;/fieldset&gt;\\n\\t\\t&lt;fieldset&gt;\\n\\t\\t\\t&lt;legend&gt;Your interest in this tutorial&lt;/legend&gt;\\n\\t\\t\\t&lt;w:FormGroup path="tutorialNote"&gt;\\n\\t\\t\\t\\t&lt;w:InputSlider items="{noteItems}" /&gt;\\n\\t\\t\\t&lt;/w:FormGroup&gt;\\n\\t\\t&lt;/fieldset&gt;\\n\\t\\t&lt;fieldset&gt;\\n\\t\\t\\t&lt;legend&gt;your message&lt;/legend&gt;\\n\\t\\t\\t&lt;w:FormGroup path="subject"&gt;\\n\\t\\t\\t\\t&lt;w:InputSelect items="{subjectItems}" /&gt;\\n\\t\\t\\t&lt;/w:FormGroup&gt;\\n\\t\\t\\t&lt;w:FormGroup path="message"&gt;\\n\\t\\t\\t\\t&lt;w:InputTextArea /&gt;\\n\\t\\t\\t&lt;/w:FormGroup&gt;\\n\\t\\t&lt;/fieldset&gt;\\n\\t\\t&lt;w:Footer&gt;\\n\\t\\t\\t&lt;w:FormResetButton text="Reset" size="LARGE" /&gt;\\n\\t\\t\\t&lt;w:FormSubmitButton text="Submit" size="LARGE" /&gt;\\n\\t\\t&lt;/w:Footer&gt;\\n\\t&lt;/w:Form&gt;\\n    ...\\n<\\/pre>\',new I5(L.a)).a),cnc(m,a.b),m),A6(a.p));Mab(c,(n=new enc,dnc(n,(M=new Ytc,M.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.shared.constants;\\n\\nimport fr.putnami.pwt.core.editor.shared.constant.ValidationConstants;\\n\\npublic interface ContactConstants extends ValidationConstants {\\n\\n\\t@DefaultStringValue("Name")\\n\\tString name();\\n\\n\\t@DefaultStringValue("Email")\\n\\tString email();\\n\\n\\t@DefaultStringValue("Birthday")\\n\\tString birthday();\\n\\n\\t@DefaultStringValue("Tutorial note")\\n\\tString tutorialnote();\\n\\n\\t@DefaultStringValue("Subject")\\n\\tString subject();\\n\\n\\t@DefaultStringValue("Message")\\n\\tString message();\\n}<\\/pre>\',new I5(M.a)).a),cnc(n,a.a),n),A6(a.s));Mab(c,(o=new enc,dnc(o,(N=new Ytc,N.a+=\'<pre>\\n\\t@UiField\\n\\t@Initialize(constantsClass = ContactConstants.class)\\n\\tForm&lt;Contact&gt; contactEditor;\\n<\\/pre>\',new I5(N.a)).a),cnc(o,a.a),o),A6(a.u));Mab(c,(p=new enc,dnc(p,(O=new Ytc,O.a+=\'<pre>\\n\\t...\\n\\t/* Placeholders */\\n\\n\\t@DefaultStringValue("Your name...")\\n\\tString namePlaceholder();\\n\\n\\t@DefaultStringValue("Your email...")\\n\\tString emailPlaceholder();\\n\\n\\t@DefaultStringValue("Your birthday...")\\n\\tString birthdayPlaceholder();\\n\\n\\t@DefaultStringValue("Your message...")\\n\\tString messagePlaceholder();\\n\\n\\t/* Tooltips */\\n\\n\\t@DefaultStringValue("Enter your name")\\n\\tString nameTooltip();\\n\\n\\t@DefaultStringValue("Enter your email")\\n\\tString emailTooltip();\\n\\n\\t@DefaultStringValue("Enter your birthday")\\n\\tString birthdayTooltip();\\n\\n\\t@DefaultStringValue("Select a note")\\n\\tString tutorialnoteTooltip();\\n\\n\\t@DefaultStringValue("Select a subject")\\n\\tString subjectTooltip();\\n\\n\\t@DefaultStringValue("Enter your message")\\n\\tString messageTooltip();\\n\\n\\t/* Help */\\n\\n\\t@DefaultStringValue("Enter your full name (Lastname and Firstname)")\\n\\tString nameHelp();\\n\\n\\t@DefaultStringValue("Enter your email so we can contact you back")\\n\\tString emailHelp();\\n\\n\\t@DefaultStringValue("Enter your birthday, maybe you\\\'ll have some present")\\n\\tString birthdayHelp();\\n\\n\\t@DefaultStringValue("Select a note for this tutorial")\\n\\tString tutorialnoteHelp();\\n\\n\\t@DefaultStringValue("Select a subject for your message")\\n\\tString subjectHelp();\\n\\n\\t@DefaultStringValue("Enter your message, we will read it!")\\n\\tString messageHelp();\\n<\\/pre>\',new I5(O.a)).a),cnc(p,a.a),p),A6(a.w));Mab(c,(q=new stb(2),qtb(q,(P=new Ytc,P.a+=\'Step 4 : <em>Use ServerCalls framework<\\/em>\',new I5(P.a)).a),lw(q.L,$Jc,_Jc),q),A6(a.B));Mab(c,(r=new enc,dnc(r,(Q=new Ytc,Q.a+=\'<pre>\\n\\t&lt;!-- PWT Module to extends in order to use PWT Service features--&gt;\\n\\t&lt;inherits name="fr.putnami.pwt.core.service.Service"/&gt;\\n<\\/pre>\',new I5(Q.a)).a),cnc(r,a.b),r),A6(a.D));Mab(c,(s=new enc,dnc(s,(R=new Ytc,R.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.shared.service;\\n\\nimport fr.putnami.pwt.tutorial.shared.domain.Contact;\\n\\npublic interface ContactService {\\n\\n\\tvoid sendContact(Contact contact);\\n}\\n<\\/pre>\',new I5(R.a)).a),cnc(s,a.a),s),A6(a.G));Mab(c,(t=new enc,dnc(t,(S=new Ytc,S.a+=\'<pre>\\npackage fr.putnami.pwt.tutorial.server.service;\\n\\nimport fr.putnami.pwt.tutorial.shared.domain.Contact;\\nimport fr.putnami.pwt.tutorial.shared.service.ContactService;\\n\\npublic class ContactServiceImpl implements ContactService {\\n\\n\\t@Override\\n\\tpublic void sendContact(Contact contact) {\\n\\t\\t// Do Something\\n\\t\\tSystem.out.println("Contact received : " + contact.toString());\\n\\t}\\n}<\\/pre>\',new I5(S.a)).a),cnc(t,a.a),t),A6(a.K));Mab(c,(u=new enc,dnc(u,(T=new Ytc,T.a+=\'<pre>\\n&lt;?xml version="1.0" encoding="UTF-8"?&gt;\\n&lt;!DOCTYPE web-app\\n\\tPUBLIC "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"\\n\\t"http://java.sun.com/dtd/web-app_2_3.dtd"&gt;\\n\\n&lt;web-app&gt;\\n\\t&lt;!-- Command service servlet --&gt;\\n\\t&lt;servlet&gt;\\n\\t\\t&lt;servlet-name&gt;commandService&lt;/servlet-name&gt;\\n\\t\\t&lt;servlet-class&gt;fr.putnami.pwt.core.service.server.service.BasicCommandService&lt;/servlet-class&gt;\\n\\t\\t&lt;init-param&gt;\\n\\t\\t\\t&lt;param-name&gt;services&lt;/param-name&gt;\\n\\t\\t\\t&lt;param-value&gt;fr.putnami.pwt.tutorial.server.service.ContactServiceImpl&lt;/param-value&gt;\\n\\t\\t&lt;/init-param&gt;\\n\\t&lt;/servlet&gt;\\n\\t&lt;servlet-mapping&gt;\\n\\t\\t&lt;servlet-name&gt;commandService&lt;/servlet-name&gt;\\n\\t\\t&lt;url-pattern&gt;commandService&lt;/url-pattern&gt;\\n\\t&lt;/servlet-mapping&gt;\\n&lt;/web-app&gt;<\\/pre>\',new I5(T.a)).a),cnc(u,a.b),u),A6(a.M));Mab(c,(v=new enc,dnc(v,(U=new Ytc,U.a+=\'<pre>\\nimport fr.putnami.pwt.core.inject.client.annotation.InjectService;\\nimport fr.putnami.pwt.tutorial.shared.service.ContactService;\\n...\\n@InjectService\\nContactService service;\\n<\\/pre>\',new I5(U.a)).a),cnc(v,a.a),v),A6(a.O));Mab(c,(w=new enc,dnc(w,(V=new Ytc,V.a+=\'<pre>\\n\\t@UiHandler("contactEditor")\\n\\tpublic void onContactSubmit(FlushSuccessEvent event) {\\n\\t\\tservice.sendContact((Contact) event.getValue());\\n\\t}\\n\\n\\t@AsyncHandler\\n\\tpublic void onSendContact(Void result) {\\n\\t\\tcontactEditor.edit(new Contact());\\n\\t}\\n<\\/pre>\',new I5(V.a)).a),cnc(w,a.a),w),A6(a.Q));Mab(c,new imb((W=new Ytc,W.a+=\'<h4>Note :<\\/h4><p>You can see the result in the <code>tutorials/Part4<\\/code> folder in the PWT sources.<\\/p>\',new I5(W.a)).a),A6(a.S));a.gb.j=c;return c}\ns3(1373,46,WJc);var L$=xrc(NIc,\'Tuto4BindAFormPage\',1373,UU);s3(921,1373,XJc,Hgc);_.th=function Igc(a,b){K$b(this);b.xe(this)};var H$=xrc(NIc,\'Tuto4BindAFormPage_Injector\',921,L$);s3(1032,1,{},Lgc);var I$=xrc(NIc,\'Tuto4BindAFormPage_Tuto4BindAFormPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets\',1032,B1);var Pgc;s3(688,1,rIc);_.Je=function Zgc(){var a;!(a5(),Pgc)&&(Pgc=new Hgc);a=new N$b;vjb(a,Pgc);ojb(this.a,a)};uEc(Vt)(27);\n//# sourceURL=Documentation-27.js\n')