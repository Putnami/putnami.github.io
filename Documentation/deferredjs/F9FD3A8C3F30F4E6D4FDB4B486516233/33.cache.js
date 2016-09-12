$wnd.Documentation.runAsyncCallback33("function Fec(){lab(this,Tec(new Uec(this)))}\nfunction Vec(a){var b;b=new Otc;b.a+=BGc;Ltc(b,a6(a));b.a+=CGc;return new N5(b.a)}\nfunction Xec(a,b){var c;c=new Otc;c.a+=BGc;Ltc(c,a6(a));c.a+=AGc;Ltc(c,a6(b));c.a+=CGc;return new N5(c.a)}\nfunction Tec(a){var b,c,d,e,f,g;c=new Zsb(Xec(a.c,a.I).a);jw(c.L,HGc,'PWT - Tutorial Part 10 - Add some security');b=I6(c.L);F6(a.d);F6(a.X);b.b?Rv(b.b,b.a,b.c):K6(b.a);Ykb(c,(d=new atb(Vec(a.e).a),e=I6(d.L),F6(a.H),e.b?Rv(e.b,e.a,e.c):K6(e.a),Ykb(d,(f=new htb(1),ftb(f,(g=new Otc,g.a+='Part 10 - Add some security',new N5(g.a)).a),f),F6(a.H)),a.kb.k=d,d),F6(a.d));Ykb(c,Sec(a),F6(a.X));return c}\nfunction Uec(a){this.kb=a;this.e=$w($doc);this.Y=$w($doc);this.$=$w($doc);this.ab=$w($doc);this.cb=$w($doc);this.eb=$w($doc);this.gb=$w($doc);this.ib=$w($doc);this.f=$w($doc);this.i=$w($doc);this.k=$w($doc);this.o=$w($doc);this.r=$w($doc);this.t=$w($doc);this.v=$w($doc);this.A=$w($doc);this.C=$w($doc);this.F=$w($doc);this.J=$w($doc);this.L=$w($doc);this.N=$w($doc);this.P=$w($doc);this.R=$w($doc);this.T=$w($doc);this.V=$w($doc);this.c=$w($doc);this.I=$w($doc);this.H=new G6(this.e);this.Z=new G6(this.Y);this._=new G6(this.$);this.bb=new G6(this.ab);this.db=new G6(this.cb);this.fb=new G6(this.eb);this.hb=new G6(this.gb);this.jb=new G6(this.ib);this.g=new G6(this.f);this.j=new G6(this.i);this.n=new G6(this.k);this.p=new G6(this.o);this.s=new G6(this.r);this.u=new G6(this.t);this.w=new G6(this.v);this.B=new G6(this.A);this.D=new G6(this.C);this.G=new G6(this.F);this.K=new G6(this.J);this.M=new G6(this.L);this.O=new G6(this.N);this.Q=new G6(this.P);this.S=new G6(this.R);this.U=new G6(this.T);this.W=new G6(this.V);this.d=new G6(this.c);this.X=new G6(this.I);this.a=(vnc(),unc);this.b=(Dnc(),Cnc)}\nfunction Wec(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A){var B;B=new Otc;B.a+=\"<ul class='pager'> <li class='previous'><a href='#!Tuto9'>\\u2190 Part 9 : Add Server side Spring support<\\/a><\\/li> <\\/ul>  <p>In this tutorial, we will will add some security to our app (from <em><a href='#!Tuto9'>Part 9 : Add Server side Spring support<\\/a><\\/em>).<\\/p> <p>To do that, we will use Spring security.<\\/p>  <span id='\";Ltc(B,a6(a));B.a+=\"'><\\/span>  <p>Simply add the following dependency in the <code>build.gradle<\\/code> file :<\\/p>  <span id='\";Ltc(B,a6(b));B.a+=XQc;Ltc(B,a6(c));B.a+=RJc;Ltc(B,a6(d));B.a+=\"'><\\/span> <p><a href='http://projects.spring.io/spring-security/'>Spring security<\\/a> need some configuration. we will simply configure it with one user with the following credentials : admin / 123456<\\/p>  <p>So we create the following config file <code>fr.putnami.pwt.tutorial.server.config.SecurityConfig<\\/code>:<\\/p> <span id='\";Ltc(B,a6(e));B.a+=\"'><\\/span>  <p>We import it in the <code>MvcConfig<\\/code> config and register a <code>RequestContextInterceptor<\\/code> needed for our custom session service :<\\/p> <span id='\";Ltc(B,a6(f));B.a+=RJc;Ltc(B,a6(g));B.a+=\"'><\\/span> <p>Now in order to use the security features of PWT, we have to expose a SessionService. We will create it in the <code>server.service<\\/code> package wich isused by the spring plugin to expose the services (see <a href='#!Tuto9'>our previous configuration<\\/a>) <\\/p>  <span id='\";Ltc(B,a6(h));B.a+=RJc;Ltc(B,a6(i));B.a+=\"'><\\/span> <p>On the clien side, to use the security features, we first have to inherit the corresponding module in the module gwt.xml file :<\\/p> <span id='\";Ltc(B,a6(j));B.a+=\"'><\\/span>  <p>Then to secure a view, simply annotate it withe the PWT's <code>@Secured<\\/code> annotation.<\\/p> <p>We will secure the IssuesView :<\\/p> <span id='\";Ltc(B,a6(k));B.a+=\"'><\\/span>  <p>Now, if you run the app, you won't be able to access the IssuesView anymore !<\\/p>  <span id='\";Ltc(B,a6(l));B.a+=\"'><\\/span> <p>We have to create a login form in order to access to the IssuesView.<\\/p> <p>We create the following in the <code>fr.putnami.pwt.tutorial.client.user<\\/code> package :<\\/p> <span id='\";Ltc(B,a6(m));B.a+=\"'><\\/span>  <p>With the corresponding template :<\\/p> <span id='\";Ltc(B,a6(n));B.a+=\"'><\\/span>  <p>And the place :<\\/p> <span id='\";Ltc(B,a6(o));B.a+=\"'><\\/span>  <p>And we register the activity in the entry point <code>TutorialApp<\\/code> :<\\/p> <span id='\";Ltc(B,a6(p));B.a+=\"'><\\/span>  <p>Finally we just need to catch the <code>SecurityError<\\/code> to redirect to the <code>SigninPlace<\\/code>. To do it, add an entry point method in the <code>TutorialApp<\\/code> :<\\/p> <span id='\";Ltc(B,a6(q));B.a+=\"'><\\/span>  <p>Now you can try to access the <code>IssuesPlace<\\/code> and sign-in.<\\/p>  <span id='\";Ltc(B,a6(r));B.a+=\"'><\\/span> <p>PWT allows you secure just one widget by encapsuling it in a <code>Secure<\\/code> widget.<\\/p> <p> In the NavBar, we will add a logout link displayed only if the user is logged in.<\\/p>  <p>In the <code>PageDecorator.ui.xml<\\/code> template, we add in the navbar :<\\/p> <span id='\";Ltc(B,a6(s));B.a+=\"'><\\/span>  <p>Now you can see the the button is displayed only when the user is logged in.<\\/p>  <span id='\";Ltc(B,a6(t));B.a+=\"'><\\/span> <p>Finally we just need a way to log out!<\\/p> <p>To do it, PWT provide some nice activities : <code>ActionPlace<\\/code>. Such places have a <code>run()<\\/code> method to execute an action.<\\/p> <p>We just creat the following place in the <code>client.user<\\/code> package :<\\/p>  <span id='\";Ltc(B,a6(u));B.a+=\"'><\\/span>  <p>and we register it in the <code>MvpController<\\/code> as an activity in the entry point <code>TutorialApp<\\/code><\\/p>  <span id='\";Ltc(B,a6(v));B.a+=\"'><\\/span>  <p> You can now logout !<\\/p>  <span id='\";Ltc(B,a6(w));B.a+=RJc;Ltc(B,a6(A));B.a+=\"'><\\/span> <p>You have created a very nice app using PWT.<\\/p> <p>There are a lot of other very nice components described in the <a href='#!Components'>Components doc<\\/a>.<\\/p> <p>Now you can build your own app using PWT and be incredibly productive with GWT !<\\/p> <p>We hope to see you soon.<\\/p> <p>@Putnami Team<\\/p>  <ul class='pager'> <li class='previous'><a href='#!Tuto9'>\\u2190 Part 9 : Add Server side Spring support<\\/a><\\/li> <\\/ul>\";return new N5(B.a)}\nfunction Sec(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,ab;c=new Zsb(Wec(a.Y,a.$,a.ab,a.cb,a.eb,a.gb,a.ib,a.f,a.i,a.k,a.o,a.r,a.t,a.v,a.A,a.C,a.F,a.J,a.L,a.N,a.P,a.R,a.T,a.V).a);b=I6(c.L);F6(a.Z);F6(a._);F6(a.bb);F6(a.db);F6(a.fb);F6(a.hb);F6(a.jb);F6(a.g);F6(a.j);F6(a.n);F6(a.p);F6(a.s);F6(a.u);F6(a.w);F6(a.B);F6(a.D);F6(a.G);F6(a.K);F6(a.M);F6(a.O);F6(a.Q);F6(a.S);F6(a.U);F6(a.W);b.b?Rv(b.b,b.a,b.c):K6(b.a);Ykb(c,(d=new htb(2),ftb(d,(D=new Otc,D.a+='Step 1 : <em>Add the dependencies in the build script<\\/em>',new N5(D.a)).a),jw(d.L,NJc,OJc),d),F6(a.Z));Ykb(c,(e=new Wmc,Vmc(e,(F=new Otc,F.a+=\"<pre>\\ndependencies {\\n\\t...\\n\\tcompile 'org.springframework.security:spring-security-config:3.2.5.RELEASE'\\n\\tcompile 'org.springframework.security:spring-security-web:3.2.5.RELEASE'\\n}<\\/pre>\",new N5(F.a)).a),Umc(e,a.a),e),F6(a._));Ykb(c,(f=new Wmc,Vmc(f,(G=new Otc,G.a+='<pre>\\n&lt;dependency&gt;\\n\\t&lt;groupId&gt;org.springframework.security&lt;/groupId&gt;\\n\\t&lt;artifactId&gt;spring-security-config&lt;/artifactId&gt;\\n\\t&lt;version&gt;3.2.5.RELEASE&lt;/version&gt;\\n&lt;/dependency&gt;\\n&lt;dependency&gt;\\n\\t&lt;groupId&gt;org.springframework.security&lt;/groupId&gt;\\n\\t&lt;artifactId&gt;spring-security-web&lt;/artifactId&gt;\\n\\t&lt;version&gt;3.2.5.RELEASE&lt;/version&gt;\\n&lt;/dependency&gt;<\\/pre>',new N5(G.a)).a),Umc(f,a.b),f),F6(a.bb));Ykb(c,(g=new htb(2),ftb(g,(H=new Otc,H.a+='Step 2 : <em>Configure Spring security<\\/em>',new N5(H.a)).a),jw(g.L,NJc,OJc),g),F6(a.db));Ykb(c,(h=new Wmc,Vmc(h,(I=new Otc,I.a+='<pre>\\n@Configuration\\n@EnableWebSecurity\\n@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)\\npublic class SecurityConfig extends WebSecurityConfigurerAdapter {\\n \\n\\t@Autowired\\n\\tpublic void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {\\n\\t  auth.inMemoryAuthentication().withUser(\"admin\").password(\"123456\").roles(\"ADMIN\");\\n\\t}\\n \\n\\t@Override\\n\\tprotected void configure(HttpSecurity http) throws Exception {\\n\\t\\thttp.authorizeRequests().anyRequest().anonymous();\\n\\t}\\n\\t\\n\\t@Bean(name=\"authenticationManager\")\\n   @Override\\n   public AuthenticationManager authenticationManagerBean() throws Exception {\\n       return super.authenticationManagerBean();\\n   }\\n\\t\\n\\t// Auto configure the sevlet filter\\n\\tpublic static class SpringSecurityInitializer extends AbstractSecurityWebApplicationInitializer {\\n\\t   //do nothing\\n\\t}\\n}<\\/pre>',new N5(I.a)).a),Umc(h,a.a),h),F6(a.fb));Ykb(c,(i=new Wmc,Vmc(i,(J=new Otc,J.a+='<pre>\\n@Import({ComandServiceConfig.class, SecurityConfig.class})\\n...\\n\\n\\t...\\n\\t@Override\\n\\tpublic void addInterceptors(InterceptorRegistry registry) {\\n\\t\\tregistry.addInterceptor(new RequestContextInterceptor());\\n\\t}<\\/pre>',new N5(J.a)).a),Umc(i,a.a),i),F6(a.hb));Ykb(c,(j=new htb(2),ftb(j,(K=new Otc,K.a+='Step 3 : <em>Create a server side SessionService<\\/em>',new N5(K.a)).a),jw(j.L,NJc,OJc),j),F6(a.jb));Ykb(c,(k=new Wmc,Vmc(k,(L=new Otc,L.a+='<pre>\\n@Service\\npublic class SessionServiceImpl implements SessionService {\\n\\n\\t@Autowired\\n\\tprivate AuthenticationManager authenticationManager;\\n\\n\\t@Override\\n\\tpublic SessionDto getCurrentSession() {\\n\\t\\tSessionDto session = new SessionDto();\\n\\n\\t\\tAuthentication authentication = SecurityContextHolder.getContext().getAuthentication();\\n\\t\\tObject principal = authentication.getPrincipal();\\n\\n\\t\\tif (principal instanceof UserDetails) {\\n\\t\\t\\tUserDetails userDetails = (UserDetails) principal;\\n\\t\\t\\tsession.setUsername(userDetails.getUsername());\\n\\t\\t}\\n\\t\\telse {\\n\\t\\t\\tsession.setUsername(principal.toString());\\n\\t\\t}\\n\\n\\t\\tsession.getRoles().addAll(AuthorityUtils.authorityListToSet(authentication.getAuthorities()));\\n\\n\\t\\treturn session;\\n\\t}\\n\\n\\t@Override\\n\\tpublic SessionDto signIn(SigninDto request) {\\n\\t\\tString username = request.getUsername();\\n\\t\\tString password = request.getPassword();\\n\\n\\t\\tUsernamePasswordAuthenticationToken authRequest =\\n\\t\\t\\t\\tnew UsernamePasswordAuthenticationToken(username, password);\\n\\n\\t\\tauthRequest.setDetails(new WebAuthenticationDetails(RequestThreadLocalUtils.getRequest()));\\n\\n\\t\\tAuthentication authResponse = authenticationManager.authenticate(authRequest);\\n\\t\\tSecurityContextHolder.getContext().setAuthentication(authResponse);\\n\\n\\t\\treturn getCurrentSession();\\n\\t}\\n\\n\\t@Override\\n\\tpublic SessionDto signOut() {\\n\\t\\tRequestThreadLocalUtils.getSession().invalidate();\\n\\t\\tSecurityContextHolder.clearContext();\\n\\n\\t\\tAnonymousAuthenticationToken authRequest = new AnonymousAuthenticationToken(\\n\\t\\t\\t\\tSecurityConstants.USER_ANONYMOUS, SecurityConstants.USER_ANONYMOUS,\\n\\t\\t\\t\\tAuthorityUtils.createAuthorityList(SecurityConstants.ROLE_ANONYMOUS));\\n\\n\\t\\tauthRequest.setDetails(new WebAuthenticationDetails(RequestThreadLocalUtils.getRequest()));\\n\\n\\t\\tSecurityContextHolder.getContext().setAuthentication(authRequest);\\n\\n\\t\\treturn getCurrentSession();\\n\\t}\\n\\n}<\\/pre>',new N5(L.a)).a),Umc(k,a.a),k),F6(a.g));Ykb(c,(l=new htb(2),ftb(l,(M=new Otc,M.a+='Step 5 : <em>Secure a view<\\/em>',new N5(M.a)).a),jw(l.L,NJc,OJc),l),F6(a.j));Ykb(c,(m=new Wmc,Vmc(m,(N=new Otc,N.a+='<pre>\\n    &lt;!-- PWT Module to extends in order to use PWT Security features--&gt;\\n\\t&lt;inherits name=\"fr.putnami.pwt.core.security.Security\"/&gt;<\\/pre>',new N5(N.a)).a),Umc(m,a.b),m),F6(a.n));Ykb(c,(n=new Wmc,Vmc(n,(O=new Otc,O.a+='<pre>\\n@Templated\\n@Secured(\"ROLE_ADMIN\")\\npublic class IssuesView extends Composite implements View {\\n\\t...<\\/pre>',new N5(O.a)).a),Umc(n,a.a),n),F6(a.p));Ykb(c,(o=new htb(2),ftb(o,(P=new Otc,P.a+='Step 4 : <em>Create the login page<\\/em>',new N5(P.a)).a),jw(o.L,NJc,OJc),o),F6(a.s));Ykb(c,(p=new Wmc,Vmc(p,(Q=new Otc,Q.a+='<pre>\\n@Templated\\npublic class SigninPage extends Composite implements View {\\n\\n\\n\\tpublic interface Constants extends ConstantsWithLookup, ValidationConstants {\\n\\t\\t@DefaultStringValue(\"Username (admin)\")\\n\\t\\tString username();\\n\\n\\t\\t@DefaultStringValue(\"Password (123456)\")\\n\\t\\tString password();\\n\\n\\t\\t@DefaultStringValue(\"admin\")\\n\\t\\tString usernamePlaceholder();\\n\\n\\t\\t@DefaultStringValue(\"123456\")\\n\\t\\tString passwordPlaceholder();\\n\\n\\t\\t@DefaultStringValue(\"Vos identifiant sont incorrect!\")\\n\\t\\tString messageSigninFailed();\\n\\t}\\n\\n\\tprivate final SessionController sessionController = SessionController.get();\\n\\n\\t@InjectResource\\n\\tConstants constants;\\n\\n\\t@InjectService\\n\\tSessionService service;\\n\\n\\t@UiField\\n\\t@Initialize(constantsClass = Constants.class)\\n\\tForm&lt;SigninDto&gt; signinForm;\\n\\t\\n\\tprivate Place fallback;\\n\\n\\t@PresentHandler\\n\\tvoid onPresent(SigninPlace place) {\\n\\t\\tthis.fallback = place.getFallback();\\n\\t\\tsigninForm.edit(new SigninDto());\\n\\t}\\n\\n\\t@UiHandler(\"signinForm\")\\n\\tvoid onSubmitSignIn(FlushSuccessEvent event) {\\n\\t\\tservice.signIn(event.&lt;SigninDto&gt; getValue());\\n\\t}\\n\\n\\t@AsyncHandler\\n\\tvoid onSignIn(SessionDto session) {\\n\\t\\tsessionController.setSession(session);\\n\\t\\tif (fallback != null) {\\n\\t\\t\\tMvpController.get().goTo(fallback);\\n\\t\\t}\\n\\t\\telse {\\n\\t\\t\\tMvpController.get().goToDefaultPlace();\\n\\t\\t}\\n\\t}\\n\\n}<\\/pre>',new N5(Q.a)).a),Umc(p,a.a),p),F6(a.u));Ykb(c,(q=new Wmc,Vmc(q,(R=new Otc,R.a+='<pre>\\n&lt;!DOCTYPE ui:UiBinder SYSTEM \"http://dl.google.com/gwt/DTD/xhtml.ent\"&gt;\\n&lt;ui:UiBinder xmlns:ui=\"urn:ui:com.google.gwt.uibinder\"\\n\\txmlns:w=\"urn:import:fr.putnami.pwt.core.widget.client\"&gt;\\n\\t\\n\\t&lt;w:HTMLPanel title=\"Putnami CPQ - Indentifiez vous!\"&gt;\\n\\t\\t&lt;w:Form ui:field=\"signinForm\" layout=\"HORIZONTAL\"&gt;\\n\\t\\t\\t&lt;w:Header&gt;\\n\\t\\t\\t\\t&lt;w:Heading level=\"2\"&gt;Connecting&lt;/w:Heading&gt;\\n\\t\\t\\t&lt;/w:Header&gt;\\n\\t\\t\\t&lt;w:FormGroup path=\"username\" &gt;\\n\\t\\t\\t\\t&lt;w:InputText /&gt;\\n\\t\\t\\t&lt;/w:FormGroup&gt;\\n\\t\\t\\t&lt;w:FormGroup path=\"password\" &gt;\\n\\t\\t\\t\\t&lt;w:InputPassword /&gt;\\n\\t\\t\\t&lt;/w:FormGroup&gt;\\n\\t\\t\\t&lt;w:ErrorGroup /&gt;\\n\\t\\t\\t&lt;w:Footer&gt;\\n\\t\\t\\t\\t&lt;w:FormSubmitButton text=\"Login\" /&gt;\\n\\t\\t\\t&lt;/w:Footer&gt;\\n\\t\\t&lt;/w:Form&gt;\\n\\t&lt;/w:HTMLPanel&gt;\\n&lt;/ui:UiBinder&gt;<\\/pre>',new N5(R.a)).a),Umc(q,a.b),q),F6(a.w));Ykb(c,(r=new Wmc,Vmc(r,(S=new Otc,S.a+='<pre>\\n@ActivityDescription(view = SigninPage.class)\\npublic class SigninPlace extends ViewPlace {\\n\\n\\tprivate Place fallback;\\n\\n\\tpublic SigninPlace() {\\n\\t}\\n\\n\\tpublic SigninPlace(Place fallback) {\\n\\t\\tthis.fallback = fallback;\\n\\t}\\n\\n\\tpublic Place getFallback() {\\n\\t\\treturn fallback;\\n\\t}\\n\\n}<\\/pre>',new N5(S.a)).a),Umc(r,a.a),r),F6(a.B));Ykb(c,(s=new Wmc,Vmc(s,(T=new Otc,T.a+='<pre>\\n@MvpDescription(\\n\\t\\t...\\n\\t\\tactivities = {\\n\\t\\t\\t\\t...,\\n\\t\\t\\t\\tSigninPlace.class\\n\\t\\t})<\\/pre>',new N5(T.a)).a),Umc(s,a.a),s),F6(a.D));Ykb(c,(t=new Wmc,Vmc(t,(U=new Otc,U.a+='<pre>\\n\\t@EntryPointHandler\\n\\tvoid catchSecurityError() {\\n\\t\\tErrorManager.get().registerErrorHandler(new AbstractErrorHandler() {\\n\\t\\t\\t@Override\\n\\t\\t\\tpublic boolean handle(Throwable error) {\\n\\t\\t\\t\\tif (error instanceof SecurityException) {\\n\\t\\t\\t\\t\\tMvpController.get().goTo(new SigninPlace(((SecurityException) error).getFallback()));\\n\\t\\t\\t\\t\\treturn true;\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\treturn false;\\n\\t\\t\\t}\\n\\t\\t});\\n\\t}<\\/pre>',new N5(U.a)).a),Umc(t,a.a),t),F6(a.G));Ykb(c,(u=new htb(2),ftb(u,(V=new Otc,V.a+='Step 6 : <em>Secure a widget<\\/em>',new N5(V.a)).a),jw(u.L,NJc,OJc),u),F6(a.K));Ykb(c,(v=new Wmc,Vmc(v,(W=new Otc,W.a+='<pre>\\n&lt;ui:UiBinder xmlns:ui=\"urn:ui:com.google.gwt.uibinder\"\\n\\txmlns:w=\"urn:import:fr.putnami.pwt.core.widget.client\"\\n\\txmlns:s=\"urn:import:fr.putnami.pwt.core.security.client.widget\"\\n\\t&gt;\\n\\t...\\n\\t\\t&lt;/w:Nav&gt;\\n\\t\\t&lt;w:right&gt;\\n\\t\\t\\t&lt;w:Nav&gt;\\n\\t\\t\\t\\t&lt;s:Secure hasRole=\"ADMIN\"&gt;\\n\\t\\t\\t\\t\\t&lt;w:NavLink label=\"logout\" link=\"#!Signout\" /&gt;\\n\\t\\t\\t\\t&lt;/s:Secure&gt;\\n\\t\\t\\t&lt;/w:Nav&gt;\\n\\t\\t&lt;/w:right&gt;\\n\\t&lt;/w:Navbar&gt;<\\/pre>',new N5(W.a)).a),Umc(v,a.b),v),F6(a.M));Ykb(c,(w=new htb(2),ftb(w,(X=new Otc,X.a+='Step 7 : <em>Add a logout place<\\/em>',new N5(X.a)).a),jw(w.L,NJc,OJc),w),F6(a.O));Ykb(c,(A=new Wmc,Vmc(A,(Y=new Otc,Y.a+='<pre>\\npublic class SignoutPlace extends ActionPlace {\\n\\n\\t@Override\\n\\tpublic void run() {\\n\\t\\tSessionController.get().signOut();\\n\\t\\tMvpController.get().goToDefaultPlace();\\n\\t}\\n}<\\/pre>',new N5(Y.a)).a),Umc(A,a.a),A),F6(a.Q));Ykb(c,(B=new Wmc,Vmc(B,(Z=new Otc,Z.a+='<pre>\\n@MvpDescription(\\n\\t\\t...\\n\\t\\tactivities = {\\n\\t\\t\\t\\t...,\\n\\t\\t\\t\\tSignoutPlace.class\\n\\t\\t})<\\/pre>',new N5(Z.a)).a),Umc(B,a.a),B),F6(a.S));Ykb(c,new Zlb(($=new Otc,$.a+='<h4>Note :<\\/h4><p>You can see the result in the <code>tutorials/Part10<\\/code> folder in the PWT sources.<\\/p>',new N5($.a)).a),F6(a.U));Ykb(c,(C=new htb(2),ftb(C,(ab=new Otc,ab.a+=\"That's it !\",new N5(ab.a)).a),jw(C.L,NJc,OJc),C),F6(a.W));a.kb.j=c;return c}\nx3(1384,46,JJc);var m$=mrc(AIc,BIc,1384,ZU);x3(932,1384,KJc,Fec);_.uh=function Gec(a,b){A$b(this);b.xe(this)};var i$=mrc(AIc,'Tuto10Security_Injector',932,m$);var Hec;x3(700,1,eIc);_.Je=function Rec(){var a;!(f5(),Hec)&&(Hec=new Fec);a=new D$b;ijb(a,Hec);bjb(this.a,a)};x3(1044,1,{},Uec);var l$=mrc(AIc,'Tuto10Security_Tuto10SecurityTemplateBinder_UiBinderLocalized_BinderImpl/Widgets',1044,G1);kEc(Vt)(33);\n//# sourceURL=Documentation-33.js\n")