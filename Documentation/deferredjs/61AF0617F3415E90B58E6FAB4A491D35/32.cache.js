$wnd.Documentation.runAsyncCallback32("function yic(){oab(this,Bic(new Cic(this)))}\nfunction Fic(a){var b;b=new Ytc;b.a+=PGc;Vtc(b,X5(a));b.a+=QGc;return new I5(b.a)}\nfunction Eic(a,b){var c;c=new Ytc;c.a+=PGc;Vtc(c,X5(a));c.a+=OGc;Vtc(c,X5(b));c.a+=QGc;return new I5(c.a)}\nfunction Bic(a){var b,c,d,e,f,g;c=new itb(Eic(a.c,a.u).a);lw((J6(),c.L),VGc,'PWT - Tutorial Part 9 - Add Server side Spring support');b=D6(c.L);A6(a.d);A6(a.v);b.b?Rv(b.b,b.a,b.c):F6(b.a);Mab(c,(d=new ltb(Fic(a.e).a),e=D6(d.L),A6(a.t),e.b?Rv(e.b,e.a,e.c):F6(e.a),Mab(d,(f=new stb(1),qtb(f,(g=new Ytc,g.a+='Part 9 - Add Server side Spring support',new I5(g.a)).a),f),A6(a.t)),a.O.k=d,d),A6(a.d));Mab(c,Aic(a),A6(a.v));return c}\nfunction Cic(a){this.O=a;this.e=bx($doc);this.w=bx($doc);this.B=bx($doc);this.D=bx($doc);this.G=bx($doc);this.I=bx($doc);this.K=bx($doc);this.M=bx($doc);this.f=bx($doc);this.i=bx($doc);this.k=bx($doc);this.o=bx($doc);this.r=bx($doc);this.c=bx($doc);this.u=bx($doc);this.t=new B6(this.e);this.A=new B6(this.w);this.C=new B6(this.B);this.F=new B6(this.D);this.H=new B6(this.G);this.J=new B6(this.I);this.L=new B6(this.K);this.N=new B6(this.M);this.g=new B6(this.f);this.j=new B6(this.i);this.n=new B6(this.k);this.p=new B6(this.o);this.s=new B6(this.r);this.d=new B6(this.c);this.v=new B6(this.u);this.a=(Fnc(),Enc);this.b=(Nnc(),Mnc)}\nfunction Dic(a,b,c,d,e,f,g,h,i,j,k,l){var m;m=new Ytc;m.a+=\"<ul class='pager'> <li class='previous'><a href='#!Tuto8'>\\u2190 Part 8 : Add Ajax Bot Filter<\\/a><\\/li> <li class='next'><a href='#!Tuto10'>Part 10 : Add some Security \\u2192<\\/a><\\/li> <\\/ul>  <p>In this tutorial, we will use the <a href='http://projects.spring.io/spring-framework/'>Spring framework<\\/a> to expose our server side services in our app (from <em><a href='#!Tuto8'>Part 8 : Add Ajax Bot Filter<\\/a><\\/em>).<\\/p>  <span id='\";Vtc(m,X5(a));m.a+=iRc;Vtc(m,X5(b));m.a+=hRc;Vtc(m,X5(c));m.a+=cKc;Vtc(m,X5(d));m.a+=\"'><\\/span>  <p>Spring offers multiple way to configure the application context (xml, component scan, etc..). In this tutorial we choose the java with annotation solution with component scan, but you can do as you want!<\\/p>  <p>First, we create a controller handling the <code>/<\\/code> path in <code>fr/putnami/pwt/tutorial/server/controller/WelcomeController<\\/code> :<\\/p> <span id='\";Vtc(m,X5(e));m.a+=\"'><\\/span>  <p>Then we create a Spring configuration class in <code>fr/putnami/pwt/tutorial/server/config/MvcConfig<\\/code> :<\\/p> <span id='\";Vtc(m,X5(f));m.a+=\"'><\\/span>  <p>Finally, in order to use the Spring dispatcher, we need to remove the old <code>CommandController<\\/code> configuration and replace it by the spring configuration.<\\/p> <span id='\";Vtc(m,X5(g));m.a+=cKc;Vtc(m,X5(h));m.a+=cKc;Vtc(m,X5(i));m.a+=\"'><\\/span> <p>In order to have your services exposed to PWT client side, they have to be annotated with the <code>@Service<\\/code> annotation.<\\/p> <p>(In this tutorial the <code>@Service<\\/code> annotation use allows the registration of the services classe in the spring context thanks to component scan)<\\/p>  <span id='\";Vtc(m,X5(j));m.a+=\"'><\\/span> <p>and<\\/p> <span id='\";Vtc(m,X5(k));m.a+=\"'><\\/span>  <p>You can go to <a href='http://localhost:8080/putnami-pwt-tutorial/#!Issues'>http://localhost:8080/putnami-pwt-tutorial/#!Issues<\\/a> to try the use of the services.<\\/p>  <span id='\";Vtc(m,X5(l));m.a+=\"'><\\/span>   <ul class='pager'> <li class='previous'><a href='#!Tuto8'>\\u2190 Part 8 : Add Ajax Bot Filter<\\/a><\\/li> <li class='next'><a href='#!Tuto10'>Part 10 : Add some Security \\u2192<\\/a><\\/li> <\\/ul>\";return new I5(m.a)}\nfunction Aic(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B;c=new itb(Dic(a.w,a.B,a.D,a.G,a.I,a.K,a.M,a.f,a.i,a.k,a.o,a.r).a);b=D6((J6(),c.L));A6(a.A);A6(a.C);A6(a.F);A6(a.H);A6(a.J);A6(a.L);A6(a.N);A6(a.g);A6(a.j);A6(a.n);A6(a.p);A6(a.s);b.b?Rv(b.b,b.a,b.c):F6(b.a);Mab(c,(d=new stb(2),qtb(d,(n=new Ytc,n.a+=gRc,new I5(n.a)).a),lw(d.L,$Jc,_Jc),d),A6(a.A));Mab(c,(e=new enc,dnc(e,(o=new Ytc,o.a+=\"<pre>\\ndependencies {\\n\\t...\\n\\tcompile 'fr.putnami.pwt:pwt-spring:@snapshotVersion@'\\n}<\\/pre>\",new I5(o.a)).a),cnc(e,a.a),e),A6(a.C));Mab(c,(f=new enc,dnc(f,(p=new Ytc,p.a+='<pre>\\n&lt;dependency&gt;\\n\\t&lt;groupId&gt;fr.putnami.pwt&lt;/groupId&gt;\\n\\t&lt;artifactId&gt;pwt-spring&lt;/artifactId&gt;\\n\\t&lt;version&gt;@snapshotVersion@&lt;/version&gt;\\n&lt;/dependency&gt;<\\/pre>',new I5(p.a)).a),cnc(f,a.b),f),A6(a.F));Mab(c,(g=new stb(2),qtb(g,(q=new Ytc,q.a+='Step 2 : <em>Setting up the Spring configuration<\\/em>',new I5(q.a)).a),lw(g.L,$Jc,_Jc),g),A6(a.H));Mab(c,(h=new enc,dnc(h,(r=new Ytc,r.a+='<pre>\\n@Controller\\npublic class WelcomeController {\\n\\n\\t@RequestMapping(value = \"/\", method = RequestMethod.GET)\\n\\tpublic String welcomePage() {\\n\\t\\treturn \"forward:/index.html\";\\n\\t}\\n\\n}<\\/pre>',new I5(r.a)).a),cnc(h,a.a),h),A6(a.J));Mab(c,(i=new enc,dnc(i,(s=new Ytc,s.a+='<pre>\\n@Configuration\\n@Import(ComandServiceConfig.class)\\n@EnableWebMvc\\n@ComponentScan(basePackages = {\"fr.putnami.pwt.tutorial.server.controller\", \"fr.putnami.pwt.tutorial.server.service\"})\\npublic class MvcConfig extends WebMvcConfigurerAdapter {\\n\\n\\tprivate static final int RESOURCE_CACHE_PERIOD = 60 * 60 * 24 * 7; // 1 week in second\\n\\n\\t@Override\\n\\tpublic void addResourceHandlers(ResourceHandlerRegistry registry) {\\n\\t\\tregistry.addResourceHandler(\"/index.html\").addResourceLocations(\"/index.html\").setCachePeriod(RESOURCE_CACHE_PERIOD);\\n\\t\\tregistry.addResourceHandler(\"/Tutorial/**\").addResourceLocations(\"/Tutorial/\").setCachePeriod(RESOURCE_CACHE_PERIOD);\\n\\t}\\n}<\\/pre>',new I5(s.a)).a),cnc(i,a.a),i),A6(a.L));Mab(c,(j=new enc,dnc(j,(t=new Ytc,t.a+='<pre>\\n\\t&lt;!-- Spring configuration --&gt;\\n\\t&lt;servlet&gt;\\n\\t\\t&lt;servlet-name&gt;dispatcher&lt;/servlet-name&gt;\\n\\t\\t&lt;servlet-class&gt;org.springframework.web.servlet.DispatcherServlet&lt;/servlet-class&gt;\\n\\t\\t&lt;init-param&gt;\\n\\t\\t\\t&lt;param-name&gt;contextClass&lt;/param-name&gt;\\n\\t\\t\\t&lt;param-value&gt;\\n\\t\\t\\t\\torg.springframework.web.context.support.AnnotationConfigWebApplicationContext\\n\\t\\t\\t&lt;/param-value&gt;\\n\\t\\t&lt;/init-param&gt;\\n\\t\\t&lt;init-param&gt;\\n\\t\\t\\t&lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;\\n\\t\\t\\t&lt;param-value&gt;fr.putnami.pwt.tutorial.server.config&lt;/param-value&gt;\\n\\t\\t&lt;/init-param&gt;\\n\\t\\t&lt;load-on-startup&gt;1&lt;/load-on-startup&gt;\\n\\t&lt;/servlet&gt;\\n\\t&lt;servlet-mapping&gt;\\n\\t\\t&lt;servlet-name&gt;dispatcher&lt;/servlet-name&gt;\\n\\t\\t&lt;url-pattern&gt;/*&lt;/url-pattern&gt;\\n\\t&lt;/servlet-mapping&gt;<\\/pre>',new I5(t.a)).a),cnc(j,a.b),j),A6(a.N));Mab(c,new imb((u=new Ytc,u.a+=\"<h4>Note :<\\/h4><p>You can see that we don't register the services in the web.xml anymore<\\/p>\",new I5(u.a)).a),A6(a.g));Mab(c,(k=new stb(2),qtb(k,(v=new Ytc,v.a+='Step 3 : <em>Annotate your services<\\/em>',new I5(v.a)).a),lw(k.L,$Jc,_Jc),k),A6(a.j));Mab(c,(l=new enc,dnc(l,(w=new Ytc,w.a+='<pre>\\n@Service\\npublic class ContactServiceImpl implements ContactService {\\n\\t...\\n}<\\/pre>',new I5(w.a)).a),cnc(l,a.a),l),A6(a.n));Mab(c,(m=new enc,dnc(m,(A=new Ytc,A.a+='<pre>\\n@Service\\npublic class IssueServiceImpl implements IssueService {\\n\\t...\\n}<\\/pre>',new I5(A.a)).a),cnc(m,a.a),m),A6(a.p));Mab(c,new imb((B=new Ytc,B.a+='<h4>Note :<\\/h4><p>You can see the result in the <code>tutorials/Part9<\\/code> folder in the PWT sources.<\\/p>',new I5(B.a)).a),A6(a.s));a.O.j=c;return c}\ns3(1378,46,WJc);var n_=xrc(NIc,'Tuto9SpringPage',1378,UU);s3(926,1378,XJc,yic);_.th=function zic(a,b){K$b(this);b.xe(this)};var j_=xrc(NIc,'Tuto9SpringPage_Injector',926,n_);s3(1037,1,{},Cic);var k_=xrc(NIc,'Tuto9SpringPage_Tuto9SpringPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets',1037,B1);var Gic;s3(698,1,rIc);_.Je=function Qic(){var a;!(a5(),Gic)&&(Gic=new yic);a=new N$b;vjb(a,Gic);ojb(this.a,a)};uEc(Vt)(32);\n//# sourceURL=Documentation-32.js\n")