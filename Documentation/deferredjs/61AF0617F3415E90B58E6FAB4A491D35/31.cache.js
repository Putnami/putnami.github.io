$wnd.Documentation.runAsyncCallback31("function fic(){oab(this,hic(new iic(this)))}\nfunction kic(a){var b;b=new Ytc;b.a+=PGc;Vtc(b,X5(a));b.a+=QGc;return new I5(b.a)}\nfunction jic(a,b){var c;c=new Ytc;c.a+=PGc;Vtc(c,X5(a));c.a+=OGc;Vtc(c,X5(b));c.a+=QGc;return new I5(c.a)}\nfunction iic(a){this.A=a;this.d=bx($doc);this.i=bx($doc);this.k=bx($doc);this.o=bx($doc);this.r=bx($doc);this.t=bx($doc);this.v=bx($doc);this.b=bx($doc);this.f=bx($doc);this.e=new B6(this.d);this.j=new B6(this.i);this.n=new B6(this.k);this.p=new B6(this.o);this.s=new B6(this.r);this.u=new B6(this.t);this.w=new B6(this.v);this.c=new B6(this.b);this.g=new B6(this.f);this.a=(Nnc(),Mnc)}\nfunction lic(a,b,c,d,e,f){var g;g=new Ytc;g.a+=\"<ul class='pager'> <li class='previous'><a href='#!Tuto7'>\\u2190 Part 7 : Add Google Analytics to your app<\\/a><\\/li> <li class='next'><a href='#!Tuto9'>Part 9 : Add Server side Spring support \\u2192<\\/a><\\/li> <\\/ul>  <p>In this tutorial, we will add the ajax bot plugin allowing our app (from <em><a href='#!Tuto7'>Part 7 : Add Google Analytics to your app<\\/a><\\/em>) to be indexed by the search engine bots.<\\/p>  <span id='\";Vtc(g,X5(a));g.a+=iRc;Vtc(g,X5(b));g.a+=hRc;Vtc(g,X5(c));g.a+=cKc;Vtc(g,X5(d));g.a+=\"'><\\/span>  <p>In order to add the filter, it's very easy ! simply add the following to the <code>web.xml<\\/code> :<\\/p> <span id='\";Vtc(g,X5(e));g.a+=\"'><\\/span>  <p>You can go to <a href='http://localhost:8080/putnami-pwt-tutorial/?_escaped_fragment_=About'>http://localhost:8080/putnami-pwt-tutorial/?_escaped_fragment_=About<\\/a> to watch it<\\/p> <p>You'll find detailed informations about this plugin in the <a href='#!AjaxBotIndexing'>plugin doc<\\/a>.<\\/p>    <span id='\";Vtc(g,X5(f));g.a+=\"'><\\/span>   <ul class='pager'> <li class='previous'><a href='#!Tuto7'>\\u2190 Part 7 : Add Google Analytics to your app<\\/a><\\/li> <li class='next'><a href='#!Tuto9'>Part 9 : Add Server side Spring support \\u2192<\\/a><\\/li> <\\/ul>\";return new I5(g.a)}\nfunction hic(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=new itb(jic(a.b,a.f).a);lw((J6(),c.L),VGc,'PWT - Tutorial Part 8 - Add Ajax Bot Filter');b=D6(c.L);A6(a.c);A6(a.g);b.b?Rv(b.b,b.a,b.c):F6(b.a);Mab(c,(d=new ltb(kic(a.d).a),e=D6(d.L),A6(a.e),e.b?Rv(e.b,e.a,e.c):F6(e.a),Mab(d,(m=new stb(1),qtb(m,(n=new Ytc,n.a+='Part 8 - Add Ajax Bot Filter',new I5(n.a)).a),m),A6(a.e)),a.A.k=d,d),A6(a.c));Mab(c,(f=new itb(lic(a.i,a.k,a.o,a.r,a.t,a.v).a),g=D6(f.L),A6(a.j),A6(a.n),A6(a.p),A6(a.s),A6(a.u),A6(a.w),g.b?Rv(g.b,g.a,g.c):F6(g.a),Mab(f,(h=new stb(2),qtb(h,(o=new Ytc,o.a+=gRc,new I5(o.a)).a),lw(h.L,$Jc,_Jc),h),A6(a.j)),Mab(f,(i=new enc,dnc(i,(p=new Ytc,p.a+=\"<pre>\\ndependencies {\\n\\t...\\n\\tcompile 'fr.putnami.pwt:pwt-ajax-bot-indexing:@snapshotVersion@'\\n}<\\/pre>\",new I5(p.a)).a),cnc(i,(Fnc(),Enc)),i),A6(a.n)),Mab(f,(j=new enc,dnc(j,(q=new Ytc,q.a+='<pre>\\n&lt;dependency&gt;\\n\\t&lt;groupId&gt;fr.putnami.pwt&lt;/groupId&gt;\\n\\t&lt;artifactId&gt;pwt-ajax-bot-indexing&lt;/artifactId&gt;\\n\\t&lt;version&gt;@snapshotVersion@&lt;/version&gt;\\n&lt;/dependency&gt;<\\/pre>',new I5(q.a)).a),cnc(j,a.a),j),A6(a.p)),Mab(f,(k=new stb(2),qtb(k,(r=new Ytc,r.a+='Step 2 : <em>Add the servlet filter<\\/em>',new I5(r.a)).a),lw(k.L,$Jc,_Jc),k),A6(a.s)),Mab(f,(l=new enc,dnc(l,(s=new Ytc,s.a+='<pre>\\n\\t&lt;filter&gt;\\n\\t\\t&lt;filter-name&gt;ajax-bot-indexing-filter&lt;/filter-name&gt;\\n\\t\\t&lt;description&gt;Filter making passible to render ajax page as HTML.&lt;/description&gt;\\n\\t\\t&lt;filter-class&gt;fr.putnami.pwt.ajaxbot.AjaxBotIndexingFilter&lt;/filter-class&gt;\\n\\t\\t&lt;init-param&gt;\\n\\t\\t\\t&lt;param-name&gt;cacheFolder&lt;/param-name&gt;\\n\\t\\t\\t&lt;!-- Use a valid temp file --&gt;\\n\\t\\t\\t&lt;param-value&gt;/tmp/cacheRenderedAjaxPage&lt;/param-value&gt;\\n\\t\\t\\t&lt;description&gt;Rendered html cache folder&lt;/description&gt;\\n\\t\\t&lt;/init-param&gt;\\n\\t\\t&lt;init-param&gt;\\n\\t\\t\\t&lt;param-name&gt;cacheResetOnStartup&lt;/param-name&gt;\\n\\t\\t\\t&lt;param-value&gt;true&lt;/param-value&gt;\\n\\t\\t\\t&lt;description&gt;Clear the html cache on server startup&lt;/description&gt;\\n\\t\\t&lt;/init-param&gt;\\n\\t&lt;/filter&gt;\\n\\t&lt;filter-mapping&gt;\\n\\t\\t&lt;filter-name&gt;ajax-bot-indexing-filter&lt;/filter-name&gt;\\n\\t\\t&lt;url-pattern&gt;*&lt;/url-pattern&gt;\\n\\t&lt;/filter-mapping&gt;<\\/pre>',new I5(s.a)).a),cnc(l,a.a),l),A6(a.u)),Mab(f,new imb((t=new Ytc,t.a+='<h4>Note :<\\/h4><p>You can see the result in the <code>tutorials/Part8<\\/code> folder in the PWT sources.<\\/p>',new I5(t.a)).a),A6(a.w)),a.A.j=f,f),A6(a.g));return c}\ns3(1377,46,WJc);var h_=xrc(NIc,'Tuto8AjaxBotPage',1377,UU);s3(925,1377,XJc,fic);_.th=function gic(a,b){K$b(this);b.xe(this)};var d_=xrc(NIc,'Tuto8AjaxBotPage_Injector',925,h_);s3(1036,1,{},iic);var e_=xrc(NIc,'Tuto8AjaxBotPage_Tuto8AjaxBotPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets',1036,B1);var mic;s3(696,1,rIc);_.Je=function wic(){var a;!(a5(),mic)&&(mic=new fic);a=new N$b;vjb(a,mic);ojb(this.a,a)};uEc(Vt)(31);\n//# sourceURL=Documentation-31.js\n")