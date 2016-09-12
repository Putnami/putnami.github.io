$wnd.Documentation.runAsyncCallback32("function oic(){lab(this,ric(new sic(this)))}\nfunction vic(a){var b;b=new Otc;b.a+=BGc;Ltc(b,a6(a));b.a+=CGc;return new N5(b.a)}\nfunction uic(a,b){var c;c=new Otc;c.a+=BGc;Ltc(c,a6(a));c.a+=AGc;Ltc(c,a6(b));c.a+=CGc;return new N5(c.a)}\nfunction ric(a){var b,c,d,e,f,g;c=new Zsb(uic(a.c,a.u).a);jw(c.L,HGc,'PWT - Tutorial Part 9 - Add Server side Spring support');b=I6(c.L);F6(a.d);F6(a.v);b.b?Rv(b.b,b.a,b.c):K6(b.a);Ykb(c,(d=new atb(vic(a.e).a),e=I6(d.L),F6(a.t),e.b?Rv(e.b,e.a,e.c):K6(e.a),Ykb(d,(f=new htb(1),ftb(f,(g=new Otc,g.a+='Part 9 - Add Server side Spring support',new N5(g.a)).a),f),F6(a.t)),a.O.k=d,d),F6(a.d));Ykb(c,qic(a),F6(a.v));return c}\nfunction sic(a){this.O=a;this.e=$w($doc);this.w=$w($doc);this.B=$w($doc);this.D=$w($doc);this.G=$w($doc);this.I=$w($doc);this.K=$w($doc);this.M=$w($doc);this.f=$w($doc);this.i=$w($doc);this.k=$w($doc);this.o=$w($doc);this.r=$w($doc);this.c=$w($doc);this.u=$w($doc);this.t=new G6(this.e);this.A=new G6(this.w);this.C=new G6(this.B);this.F=new G6(this.D);this.H=new G6(this.G);this.J=new G6(this.I);this.L=new G6(this.K);this.N=new G6(this.M);this.g=new G6(this.f);this.j=new G6(this.i);this.n=new G6(this.k);this.p=new G6(this.o);this.s=new G6(this.r);this.d=new G6(this.c);this.v=new G6(this.u);this.a=(vnc(),unc);this.b=(Dnc(),Cnc)}\nfunction tic(a,b,c,d,e,f,g,h,i,j,k,l){var m;m=new Otc;m.a+=\"<ul class='pager'> <li class='previous'><a href='#!Tuto8'>\\u2190 Part 8 : Add Ajax Bot Filter<\\/a><\\/li> <li class='next'><a href='#!Tuto10'>Part 10 : Add some Security \\u2192<\\/a><\\/li> <\\/ul>  <p>In this tutorial, we will use the <a href='http://projects.spring.io/spring-framework/'>Spring framework<\\/a> to expose our server side services in our app (from <em><a href='#!Tuto8'>Part 8 : Add Ajax Bot Filter<\\/a><\\/em>).<\\/p>  <span id='\";Ltc(m,a6(a));m.a+=YQc;Ltc(m,a6(b));m.a+=XQc;Ltc(m,a6(c));m.a+=RJc;Ltc(m,a6(d));m.a+=\"'><\\/span>  <p>Spring offers multiple way to configure the application context (xml, component scan, etc..). In this tutorial we choose the java with annotation solution with component scan, but you can do as you want!<\\/p>  <p>First, we create a controller handling the <code>/<\\/code> path in <code>fr/putnami/pwt/tutorial/server/controller/WelcomeController<\\/code> :<\\/p> <span id='\";Ltc(m,a6(e));m.a+=\"'><\\/span>  <p>Then we create a Spring configuration class in <code>fr/putnami/pwt/tutorial/server/config/MvcConfig<\\/code> :<\\/p> <span id='\";Ltc(m,a6(f));m.a+=\"'><\\/span>  <p>Finally, in order to use the Spring dispatcher, we need to remove the old <code>CommandController<\\/code> configuration and replace it by the spring configuration.<\\/p> <span id='\";Ltc(m,a6(g));m.a+=RJc;Ltc(m,a6(h));m.a+=RJc;Ltc(m,a6(i));m.a+=\"'><\\/span> <p>In order to have your services exposed to PWT client side, they have to be annotated with the <code>@Service<\\/code> annotation.<\\/p> <p>(In this tutorial the <code>@Service<\\/code> annotation use allows the registration of the services classe in the spring context thanks to component scan)<\\/p>  <span id='\";Ltc(m,a6(j));m.a+=\"'><\\/span> <p>and<\\/p> <span id='\";Ltc(m,a6(k));m.a+=\"'><\\/span>  <p>You can go to <a href='http://localhost:8080/putnami-pwt-tutorial/#!Issues'>http://localhost:8080/putnami-pwt-tutorial/#!Issues<\\/a> to try the use of the services.<\\/p>  <span id='\";Ltc(m,a6(l));m.a+=\"'><\\/span>   <ul class='pager'> <li class='previous'><a href='#!Tuto8'>\\u2190 Part 8 : Add Ajax Bot Filter<\\/a><\\/li> <li class='next'><a href='#!Tuto10'>Part 10 : Add some Security \\u2192<\\/a><\\/li> <\\/ul>\";return new N5(m.a)}\nfunction qic(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B;c=new Zsb(tic(a.w,a.B,a.D,a.G,a.I,a.K,a.M,a.f,a.i,a.k,a.o,a.r).a);b=I6(c.L);F6(a.A);F6(a.C);F6(a.F);F6(a.H);F6(a.J);F6(a.L);F6(a.N);F6(a.g);F6(a.j);F6(a.n);F6(a.p);F6(a.s);b.b?Rv(b.b,b.a,b.c):K6(b.a);Ykb(c,(d=new htb(2),ftb(d,(n=new Otc,n.a+=WQc,new N5(n.a)).a),jw(d.L,NJc,OJc),d),F6(a.A));Ykb(c,(e=new Wmc,Vmc(e,(o=new Otc,o.a+=\"<pre>\\ndependencies {\\n\\t...\\n\\tcompile 'fr.putnami.pwt:pwt-spring:@snapshotVersion@'\\n}<\\/pre>\",new N5(o.a)).a),Umc(e,a.a),e),F6(a.C));Ykb(c,(f=new Wmc,Vmc(f,(p=new Otc,p.a+='<pre>\\n&lt;dependency&gt;\\n\\t&lt;groupId&gt;fr.putnami.pwt&lt;/groupId&gt;\\n\\t&lt;artifactId&gt;pwt-spring&lt;/artifactId&gt;\\n\\t&lt;version&gt;@snapshotVersion@&lt;/version&gt;\\n&lt;/dependency&gt;<\\/pre>',new N5(p.a)).a),Umc(f,a.b),f),F6(a.F));Ykb(c,(g=new htb(2),ftb(g,(q=new Otc,q.a+='Step 2 : <em>Setting up the Spring configuration<\\/em>',new N5(q.a)).a),jw(g.L,NJc,OJc),g),F6(a.H));Ykb(c,(h=new Wmc,Vmc(h,(r=new Otc,r.a+='<pre>\\n@Controller\\npublic class WelcomeController {\\n\\n\\t@RequestMapping(value = \"/\", method = RequestMethod.GET)\\n\\tpublic String welcomePage() {\\n\\t\\treturn \"forward:/index.html\";\\n\\t}\\n\\n}<\\/pre>',new N5(r.a)).a),Umc(h,a.a),h),F6(a.J));Ykb(c,(i=new Wmc,Vmc(i,(s=new Otc,s.a+='<pre>\\n@Configuration\\n@Import(ComandServiceConfig.class)\\n@EnableWebMvc\\n@ComponentScan(basePackages = {\"fr.putnami.pwt.tutorial.server.controller\", \"fr.putnami.pwt.tutorial.server.service\"})\\npublic class MvcConfig extends WebMvcConfigurerAdapter {\\n\\n\\tprivate static final int RESOURCE_CACHE_PERIOD = 60 * 60 * 24 * 7; // 1 week in second\\n\\n\\t@Override\\n\\tpublic void addResourceHandlers(ResourceHandlerRegistry registry) {\\n\\t\\tregistry.addResourceHandler(\"/index.html\").addResourceLocations(\"/index.html\").setCachePeriod(RESOURCE_CACHE_PERIOD);\\n\\t\\tregistry.addResourceHandler(\"/Tutorial/**\").addResourceLocations(\"/Tutorial/\").setCachePeriod(RESOURCE_CACHE_PERIOD);\\n\\t}\\n}<\\/pre>',new N5(s.a)).a),Umc(i,a.a),i),F6(a.L));Ykb(c,(j=new Wmc,Vmc(j,(t=new Otc,t.a+='<pre>\\n\\t&lt;!-- Spring configuration --&gt;\\n\\t&lt;servlet&gt;\\n\\t\\t&lt;servlet-name&gt;dispatcher&lt;/servlet-name&gt;\\n\\t\\t&lt;servlet-class&gt;org.springframework.web.servlet.DispatcherServlet&lt;/servlet-class&gt;\\n\\t\\t&lt;init-param&gt;\\n\\t\\t\\t&lt;param-name&gt;contextClass&lt;/param-name&gt;\\n\\t\\t\\t&lt;param-value&gt;\\n\\t\\t\\t\\torg.springframework.web.context.support.AnnotationConfigWebApplicationContext\\n\\t\\t\\t&lt;/param-value&gt;\\n\\t\\t&lt;/init-param&gt;\\n\\t\\t&lt;init-param&gt;\\n\\t\\t\\t&lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;\\n\\t\\t\\t&lt;param-value&gt;fr.putnami.pwt.tutorial.server.config&lt;/param-value&gt;\\n\\t\\t&lt;/init-param&gt;\\n\\t\\t&lt;load-on-startup&gt;1&lt;/load-on-startup&gt;\\n\\t&lt;/servlet&gt;\\n\\t&lt;servlet-mapping&gt;\\n\\t\\t&lt;servlet-name&gt;dispatcher&lt;/servlet-name&gt;\\n\\t\\t&lt;url-pattern&gt;/*&lt;/url-pattern&gt;\\n\\t&lt;/servlet-mapping&gt;<\\/pre>',new N5(t.a)).a),Umc(j,a.b),j),F6(a.N));Ykb(c,new Zlb((u=new Otc,u.a+=\"<h4>Note :<\\/h4><p>You can see that we don't register the services in the web.xml anymore<\\/p>\",new N5(u.a)).a),F6(a.g));Ykb(c,(k=new htb(2),ftb(k,(v=new Otc,v.a+='Step 3 : <em>Annotate your services<\\/em>',new N5(v.a)).a),jw(k.L,NJc,OJc),k),F6(a.j));Ykb(c,(l=new Wmc,Vmc(l,(w=new Otc,w.a+='<pre>\\n@Service\\npublic class ContactServiceImpl implements ContactService {\\n\\t...\\n}<\\/pre>',new N5(w.a)).a),Umc(l,a.a),l),F6(a.n));Ykb(c,(m=new Wmc,Vmc(m,(A=new Otc,A.a+='<pre>\\n@Service\\npublic class IssueServiceImpl implements IssueService {\\n\\t...\\n}<\\/pre>',new N5(A.a)).a),Umc(m,a.a),m),F6(a.p));Ykb(c,new Zlb((B=new Otc,B.a+='<h4>Note :<\\/h4><p>You can see the result in the <code>tutorials/Part9<\\/code> folder in the PWT sources.<\\/p>',new N5(B.a)).a),F6(a.s));a.O.j=c;return c}\nx3(1383,46,JJc);var s_=mrc(AIc,'Tuto9SpringPage',1383,ZU);x3(931,1383,KJc,oic);_.uh=function pic(a,b){A$b(this);b.xe(this)};var o_=mrc(AIc,'Tuto9SpringPage_Injector',931,s_);x3(1043,1,{},sic);var p_=mrc(AIc,'Tuto9SpringPage_Tuto9SpringPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets',1043,G1);var wic;x3(698,1,eIc);_.Je=function Gic(){var a;!(f5(),wic)&&(wic=new oic);a=new D$b;ijb(a,wic);bjb(this.a,a)};kEc(Vt)(32);\n//# sourceURL=Documentation-32.js\n")