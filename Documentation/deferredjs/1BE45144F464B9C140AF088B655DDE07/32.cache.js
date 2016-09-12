$wnd.Documentation.runAsyncCallback32("function Fic(){pab(this,Iic(new Jic(this)))}\nfunction Mic(a){var b;b=new duc;b.a+=UGc;auc(b,X5(a));b.a+=VGc;return new I5(b.a)}\nfunction Lic(a,b){var c;c=new duc;c.a+=UGc;auc(c,X5(a));c.a+=TGc;auc(c,X5(b));c.a+=VGc;return new I5(c.a)}\nfunction Iic(a){var b,c,d,e,f,g;c=new otb(Lic(a.c,a.u).a);jw((J6(),c.L),$Gc,'PWT - Tutorial Part 9 - Add Server side Spring support');b=D6(c.L);A6(a.d);A6(a.v);b.b?Rv(b.b,b.a,b.c):F6(b.a);Nab(c,(d=new rtb(Mic(a.e).a),e=D6(d.L),A6(a.t),e.b?Rv(e.b,e.a,e.c):F6(e.a),Nab(d,(f=new ytb(1),wtb(f,(g=new duc,g.a+='Part 9 - Add Server side Spring support',new I5(g.a)).a),f),A6(a.t)),a.O.k=d,d),A6(a.d));Nab(c,Hic(a),A6(a.v));return c}\nfunction Jic(a){this.O=a;this.e=cx($doc);this.w=cx($doc);this.B=cx($doc);this.D=cx($doc);this.G=cx($doc);this.I=cx($doc);this.K=cx($doc);this.M=cx($doc);this.f=cx($doc);this.i=cx($doc);this.k=cx($doc);this.o=cx($doc);this.r=cx($doc);this.c=cx($doc);this.u=cx($doc);this.t=new B6(this.e);this.A=new B6(this.w);this.C=new B6(this.B);this.F=new B6(this.D);this.H=new B6(this.G);this.J=new B6(this.I);this.L=new B6(this.K);this.N=new B6(this.M);this.g=new B6(this.f);this.j=new B6(this.i);this.n=new B6(this.k);this.p=new B6(this.o);this.s=new B6(this.r);this.d=new B6(this.c);this.v=new B6(this.u);this.a=(Mnc(),Lnc);this.b=(Unc(),Tnc)}\nfunction Kic(a,b,c,d,e,f,g,h,i,j,k,l){var m;m=new duc;m.a+=\"<ul class='pager'> <li class='previous'><a href='#!Tuto8'>\\u2190 Part 8 : Add Ajax Bot Filter<\\/a><\\/li> <li class='next'><a href='#!Tuto10'>Part 10 : Add some Security \\u2192<\\/a><\\/li> <\\/ul>  <p>In this tutorial, we will use the <a href='http://projects.spring.io/spring-framework/'>Spring framework<\\/a> to expose our server side services in our app (from <em><a href='#!Tuto8'>Part 8 : Add Ajax Bot Filter<\\/a><\\/em>).<\\/p>  <span id='\";auc(m,X5(a));m.a+=oRc;auc(m,X5(b));m.a+=nRc;auc(m,X5(c));m.a+=hKc;auc(m,X5(d));m.a+=\"'><\\/span>  <p>Spring offers multiple way to configure the application context (xml, component scan, etc..). In this tutorial we choose the java with annotation solution with component scan, but you can do as you want!<\\/p>  <p>First, we create a controller handling the <code>/<\\/code> path in <code>fr/putnami/pwt/tutorial/server/controller/WelcomeController<\\/code> :<\\/p> <span id='\";auc(m,X5(e));m.a+=\"'><\\/span>  <p>Then we create a Spring configuration class in <code>fr/putnami/pwt/tutorial/server/config/MvcConfig<\\/code> :<\\/p> <span id='\";auc(m,X5(f));m.a+=\"'><\\/span>  <p>Finally, in order to use the Spring dispatcher, we need to remove the old <code>CommandController<\\/code> configuration and replace it by the spring configuration.<\\/p> <span id='\";auc(m,X5(g));m.a+=hKc;auc(m,X5(h));m.a+=hKc;auc(m,X5(i));m.a+=\"'><\\/span> <p>In order to have your services exposed to PWT client side, they have to be annotated with the <code>@Service<\\/code> annotation.<\\/p> <p>(In this tutorial the <code>@Service<\\/code> annotation use allows the registration of the services classe in the spring context thanks to component scan)<\\/p>  <span id='\";auc(m,X5(j));m.a+=\"'><\\/span> <p>and<\\/p> <span id='\";auc(m,X5(k));m.a+=\"'><\\/span>  <p>You can go to <a href='http://localhost:8080/putnami-pwt-tutorial/#!Issues'>http://localhost:8080/putnami-pwt-tutorial/#!Issues<\\/a> to try the use of the services.<\\/p>  <span id='\";auc(m,X5(l));m.a+=\"'><\\/span>   <ul class='pager'> <li class='previous'><a href='#!Tuto8'>\\u2190 Part 8 : Add Ajax Bot Filter<\\/a><\\/li> <li class='next'><a href='#!Tuto10'>Part 10 : Add some Security \\u2192<\\/a><\\/li> <\\/ul>\";return new I5(m.a)}\nfunction Hic(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B;c=new otb(Kic(a.w,a.B,a.D,a.G,a.I,a.K,a.M,a.f,a.i,a.k,a.o,a.r).a);b=D6((J6(),c.L));A6(a.A);A6(a.C);A6(a.F);A6(a.H);A6(a.J);A6(a.L);A6(a.N);A6(a.g);A6(a.j);A6(a.n);A6(a.p);A6(a.s);b.b?Rv(b.b,b.a,b.c):F6(b.a);Nab(c,(d=new ytb(2),wtb(d,(n=new duc,n.a+=mRc,new I5(n.a)).a),jw(d.L,dKc,eKc),d),A6(a.A));Nab(c,(e=new lnc,knc(e,(o=new duc,o.a+=\"<pre>\\ndependencies {\\n\\t...\\n\\tcompile 'fr.putnami.pwt:pwt-spring:@snapshotVersion@'\\n}<\\/pre>\",new I5(o.a)).a),jnc(e,a.a),e),A6(a.C));Nab(c,(f=new lnc,knc(f,(p=new duc,p.a+='<pre>\\n&lt;dependency&gt;\\n\\t&lt;groupId&gt;fr.putnami.pwt&lt;/groupId&gt;\\n\\t&lt;artifactId&gt;pwt-spring&lt;/artifactId&gt;\\n\\t&lt;version&gt;@snapshotVersion@&lt;/version&gt;\\n&lt;/dependency&gt;<\\/pre>',new I5(p.a)).a),jnc(f,a.b),f),A6(a.F));Nab(c,(g=new ytb(2),wtb(g,(q=new duc,q.a+='Step 2 : <em>Setting up the Spring configuration<\\/em>',new I5(q.a)).a),jw(g.L,dKc,eKc),g),A6(a.H));Nab(c,(h=new lnc,knc(h,(r=new duc,r.a+='<pre>\\n@Controller\\npublic class WelcomeController {\\n\\n\\t@RequestMapping(value = \"/\", method = RequestMethod.GET)\\n\\tpublic String welcomePage() {\\n\\t\\treturn \"forward:/index.html\";\\n\\t}\\n\\n}<\\/pre>',new I5(r.a)).a),jnc(h,a.a),h),A6(a.J));Nab(c,(i=new lnc,knc(i,(s=new duc,s.a+='<pre>\\n@Configuration\\n@Import(ComandServiceConfig.class)\\n@EnableWebMvc\\n@ComponentScan(basePackages = {\"fr.putnami.pwt.tutorial.server.controller\", \"fr.putnami.pwt.tutorial.server.service\"})\\npublic class MvcConfig extends WebMvcConfigurerAdapter {\\n\\n\\tprivate static final int RESOURCE_CACHE_PERIOD = 60 * 60 * 24 * 7; // 1 week in second\\n\\n\\t@Override\\n\\tpublic void addResourceHandlers(ResourceHandlerRegistry registry) {\\n\\t\\tregistry.addResourceHandler(\"/index.html\").addResourceLocations(\"/index.html\").setCachePeriod(RESOURCE_CACHE_PERIOD);\\n\\t\\tregistry.addResourceHandler(\"/Tutorial/**\").addResourceLocations(\"/Tutorial/\").setCachePeriod(RESOURCE_CACHE_PERIOD);\\n\\t}\\n}<\\/pre>',new I5(s.a)).a),jnc(i,a.a),i),A6(a.L));Nab(c,(j=new lnc,knc(j,(t=new duc,t.a+='<pre>\\n\\t&lt;!-- Spring configuration --&gt;\\n\\t&lt;servlet&gt;\\n\\t\\t&lt;servlet-name&gt;dispatcher&lt;/servlet-name&gt;\\n\\t\\t&lt;servlet-class&gt;org.springframework.web.servlet.DispatcherServlet&lt;/servlet-class&gt;\\n\\t\\t&lt;init-param&gt;\\n\\t\\t\\t&lt;param-name&gt;contextClass&lt;/param-name&gt;\\n\\t\\t\\t&lt;param-value&gt;\\n\\t\\t\\t\\torg.springframework.web.context.support.AnnotationConfigWebApplicationContext\\n\\t\\t\\t&lt;/param-value&gt;\\n\\t\\t&lt;/init-param&gt;\\n\\t\\t&lt;init-param&gt;\\n\\t\\t\\t&lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;\\n\\t\\t\\t&lt;param-value&gt;fr.putnami.pwt.tutorial.server.config&lt;/param-value&gt;\\n\\t\\t&lt;/init-param&gt;\\n\\t\\t&lt;load-on-startup&gt;1&lt;/load-on-startup&gt;\\n\\t&lt;/servlet&gt;\\n\\t&lt;servlet-mapping&gt;\\n\\t\\t&lt;servlet-name&gt;dispatcher&lt;/servlet-name&gt;\\n\\t\\t&lt;url-pattern&gt;/*&lt;/url-pattern&gt;\\n\\t&lt;/servlet-mapping&gt;<\\/pre>',new I5(t.a)).a),jnc(j,a.b),j),A6(a.N));Nab(c,new lmb((u=new duc,u.a+=\"<h4>Note :<\\/h4><p>You can see that we don't register the services in the web.xml anymore<\\/p>\",new I5(u.a)).a),A6(a.g));Nab(c,(k=new ytb(2),wtb(k,(v=new duc,v.a+='Step 3 : <em>Annotate your services<\\/em>',new I5(v.a)).a),jw(k.L,dKc,eKc),k),A6(a.j));Nab(c,(l=new lnc,knc(l,(w=new duc,w.a+='<pre>\\n@Service\\npublic class ContactServiceImpl implements ContactService {\\n\\t...\\n}<\\/pre>',new I5(w.a)).a),jnc(l,a.a),l),A6(a.n));Nab(c,(m=new lnc,knc(m,(A=new duc,A.a+='<pre>\\n@Service\\npublic class IssueServiceImpl implements IssueService {\\n\\t...\\n}<\\/pre>',new I5(A.a)).a),jnc(m,a.a),m),A6(a.p));Nab(c,new lmb((B=new duc,B.a+='<h4>Note :<\\/h4><p>You can see the result in the <code>tutorials/Part9<\\/code> folder in the PWT sources.<\\/p>',new I5(B.a)).a),A6(a.s));a.O.j=c;return c}\ns3(1379,46,_Jc);var n_=Erc(SIc,'Tuto9SpringPage',1379,UU);s3(928,1379,aKc,Fic);_.vh=function Gic(a,b){R$b(this);b.xe(this)};var j_=Erc(SIc,'Tuto9SpringPage_Injector',928,n_);s3(1039,1,{},Jic);var k_=Erc(SIc,'Tuto9SpringPage_Tuto9SpringPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets',1039,B1);var Nic;s3(698,1,wIc);_.Je=function Xic(){var a;!(a5(),Nic)&&(Nic=new Fic);a=new U$b;yjb(a,Nic);rjb(this.a,a)};BEc(Vt)(32);\n//# sourceURL=Documentation-32.js\n")
