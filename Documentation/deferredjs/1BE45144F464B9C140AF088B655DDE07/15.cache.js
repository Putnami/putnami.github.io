$wnd.Documentation.runAsyncCallback15("function z_b(a){this.a=a}\nfunction B_b(a){var b;b=new duc;b.a+=pPc;auc(b,X5(a));b.a+=VGc;return new I5(b.a)}\nfunction F_b(a){var b;b=new duc;b.a+=oPc;auc(b,X5(a));b.a+=VGc;return new I5(b.a)}\nfunction D_b(a,b){var c;c=new duc;c.a+=UGc;auc(c,X5(a));c.a+=TGc;auc(c,X5(b));c.a+=VGc;return new I5(c.a)}\nfunction u_b(a,b){if(mtc(bKc,b.a)){F8(a.a,false);F8(a.b,true)}else{F8(a.a,true);F8(a.b,false)}}\nfunction R_b(){this.d=Rq(TF(RF(H1,1),HEc,2,4,[cKc,bKc]));pab(this,x_b(new y_b(this)));Cvb(this.c,cKc);F8(this.b,false)}\nfunction E_b(a){var b;b=new duc;b.a+=UGc;auc(b,X5(a));b.a+=\"'><\\/span> <p class='lead'> As we did, you probably think that <strong>GWT<\\/strong> web apps are not googlizable, you were wrong.  <br> <strong>PWT<\\/strong> provides a plugin making possible to index ajax pages by search engines.  <\\/p>\";return new I5(b.a)}\nfunction x_b(a){var b,c,d,e,f,g;c=new otb(D_b(a.b,a.A).a);jw((J6(),c.L),$Gc,'PWT - Ajax Bot Indexing Plugin');b=D6(c.L);A6(a.c);A6(a.B);b.b?Rv(b.b,b.a,b.c):F6(b.a);Nab(c,(d=new rtb(E_b(a.d).a),e=D6(d.L),A6(a.w),e.b?Rv(e.b,e.a,e.c):F6(e.a),Nab(d,(f=new ytb(1),wtb(f,(g=new duc,g.a+='Ajax bot indexing plugin',new I5(g.a)).a),f),A6(a.w)),a.S.k=d,d),A6(a.c));Nab(c,w_b(a),A6(a.B));return c}\nfunction y_b(a){this.R=new z_b(this);this.S=a;this.P=cx($doc);this.g=cx($doc);this.d=cx($doc);this.C=cx($doc);this.F=cx($doc);this.H=cx($doc);this.J=cx($doc);this.L=cx($doc);this.N=cx($doc);this.e=cx($doc);this.j=cx($doc);this.n=cx($doc);this.p=cx($doc);this.s=cx($doc);this.u=cx($doc);this.b=cx($doc);this.A=cx($doc);this.Q=new B6(this.P);this.i=new B6(this.g);this.w=new B6(this.d);this.D=new B6(this.C);this.G=new B6(this.F);this.I=new B6(this.H);this.K=new B6(this.J);this.M=new B6(this.L);this.O=new B6(this.N);this.f=new B6(this.e);this.k=new B6(this.j);this.o=new B6(this.n);this.r=new B6(this.p);this.t=new B6(this.s);this.v=new B6(this.u);this.c=new B6(this.b);this.B=new B6(this.A);this.a=(Unc(),Tnc)}\nfunction C_b(a,b,c,d,e,f,g,h,i,j,k,l){var m;m=new duc;m.a+=UGc;auc(m,X5(a));m.a+=\"'><\\/span> <p> All main search bots such as google use a protocole for follow all hash links <strong>#!{fragment}<\\/strong>.  <br> Fortunately that <strong>PWT<\\/strong>  <a href='#Navigation'>navigation framework<\\/a> formalizes the MVP history tokens making the places crawlable. <\\/p> <p> Search engine crawlers detects <strong>#!{fragment}<\\/strong> links and recall the server with this fragment in a <code>_escaped_fragment_<\\/code> query parameter. <\\/p> <p> <strong>The url<\\/strong> <a>http://{yourserver}/{yourpage}#!{yourplace}<\\/a> <br> <strong>Becomes<\\/strong> <a>http://{yourserver}/{yourpage}?_escaped_fragment_={yourplace}<\\/a> <\\/p> <p> So we can render the full HTML on the server side and return it to the search bots. <\\/p> <p> Thanks to HtmlUnit and a small filter we handle all requests containing the query parameter <code>_escaped_fragment_<\\/code> and generate a full html with all the indexable content.  <\\/p> <p> All <code>&lt;script&gt;<\\/code> and <code>&lt;iframe&gt;<\\/code> tags are removed from the html.  <\\/p>  <span id='\";auc(m,X5(b));m.a+=hKc;auc(m,X5(c));m.a+=TGc;auc(m,X5(d));m.a+=hKc;auc(m,X5(e));m.a+=\"'><\\/span> <p>First you need to add a dependency on the ajax bot indexing plugin :<\\/p> <div class='clearfix'><\\/div>  <span id='\";auc(m,X5(f));m.a+=TGc;auc(m,X5(g));m.a+=TGc;auc(m,X5(h));m.a+=\"'><\\/span> <p> Then you initialize the filter in the web.xml. <\\/p> <p> <strong>Parameters :<\\/strong> <\\/p> <ul> <li><code>cacheFolder<\\/code> : The folder where the html files are saved. If not set the cache is disable.<\\/li> <li><code>cacheResetOnStartup<\\/code> : If \\\"true\\\" the html cache is cleared on server's startup.<\\/li> <\\/ul> <span id='\";auc(m,X5(i));m.a+=TGc;auc(m,X5(j));m.a+=\"'><\\/span> <p> The last step is to add a meta <code>fragment<\\/code> on the html which host the gwt module.  This meta tag allow search engine crawler to index the first page as an ajax one. <\\/p> <span id='\";auc(m,X5(k));m.a+=TGc;auc(m,X5(l));m.a+=\"'><\\/span> <p> You can easily clean all the html genarated cache by invoking the server on any page with the parameter <code>_ajaxbotfilter_cache_reset_<\\/code>. <br> Example : <a>htp://{yourserver}/{yourpage}?_ajaxbotfilter_cache_reset_<\\/a> <\\/p>\";return new I5(m.a)}\nfunction w_b(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;c=new otb(C_b(a.C,a.F,a.H,a.J,a.L,a.N,a.e,a.j,a.n,a.p,a.s,a.u).a);b=D6((J6(),c.L));A6(a.D);A6(a.G);A6(a.I);A6(a.K);A6(a.M);A6(a.O);A6(a.f);A6(a.k);A6(a.o);A6(a.r);A6(a.t);A6(a.v);b.b?Rv(b.b,b.a,b.c):F6(b.a);Nab(c,(d=new ytb(2),wtb(d,(s=new duc,s.a+=NOc,new I5(s.a)).a),jw(d.L,dKc,eKc),d),A6(a.D));Nab(c,new lmb((t=new duc,t.a+=\"<strong>Google specification<\\/strong> <p> <a href='https://developers.google.com/webmasters/ajax-crawling/docs/specification'>https://developers.google.com/webmasters/ajax-crawling/docs/specification<\\/a> <\\/p>\",new I5(t.a)).a),A6(a.G));Nab(c,(e=new ytb(2),wtb(e,(u=new duc,u.a+='Making it work',new I5(u.a)).a),jw(e.L,dKc,eKc),e),A6(a.I));Nab(c,(f=new ytb(3),wtb(f,(v=new duc,v.a+='Add dependency',new I5(v.a)).a),jw(f.L,dKc,eKc),f),A6(a.K));Nab(c,(g=new nEb,BZb(g,new AVb(fKc)),Fvb(g,a.S.d),U8(g,a.R,(!OB&&(OB=new rA),OB)),a.S.c=g,g),A6(a.M));Nab(c,(h=new otb(F_b(a.P).a),BZb(h,new AVb(nPc)),i=D6(h.L),A6(a.Q),i.b?Rv(i.b,i.a,i.c):F6(i.a),Nab(h,(j=new lnc,knc(j,(w=new duc,w.a+='<pre>\\ndependencies {\\n\\t\"fr.putnami.pwt:pwt-ajax-bot-indexing:$pwtVersion\"\\n}\\n<\\/pre>',new I5(w.a)).a),jnc(j,(Mnc(),Lnc)),j),A6(a.Q)),a.S.a=h,h),A6(a.O));Nab(c,(k=new otb(B_b(a.g).a),BZb(k,new AVb(nPc)),l=D6(k.L),A6(a.i),l.b?Rv(l.b,l.a,l.c):F6(l.a),Nab(k,(m=new lnc,knc(m,(A=new duc,A.a+='<pre>\\n&lt;dependency&gt;\\n\\t&lt;groupId&gt;fr.putnami.pwt&lt;/groupId&gt;\\n\\t&lt;artifactId&gt;pwt-ajax-bot-indexing&lt;/artifactId&gt;\\n\\t&lt;version&gt;${pwt.version}&lt;/version&gt;\\n&lt;/dependency&gt;\\n<\\/pre>',new I5(A.a)).a),jnc(m,a.a),m),A6(a.i)),a.S.b=k,k),A6(a.f));Nab(c,(n=new ytb(3),wtb(n,(B=new duc,B.a+='Web.xml',new I5(B.a)).a),jw(n.L,dKc,eKc),n),A6(a.k));Nab(c,(o=new lnc,knc(o,(C=new duc,C.a+='<pre>\\n&lt;filter&gt;\\n\\t&lt;filter-name&gt;ajax-bot-indexing-filter&lt;/filter-name&gt;\\n\\t&lt;description&gt;Filter making passible to render ajax page as HTML.&lt;/description&gt;\\n\\t&lt;filter-class&gt;fr.putnami.pwt.ajaxbot.AjaxBotIndexingFilter&lt;/filter-class&gt;\\n\\t&lt;init-param&gt;\\n\\t\\t&lt;param-name&gt;cacheFolder&lt;/param-name&gt;\\n\\t\\t&lt;param-value&gt;/tmp/cacheRenderedAjaxPage&lt;/param-value&gt;\\n\\t\\t&lt;description&gt;Rendered html cache folder&lt;/description&gt;\\n\\t&lt;/init-param&gt;\\n\\t&lt;init-param&gt;\\n\\t\\t&lt;param-name&gt;cacheResetOnStartup&lt;/param-name&gt;\\n\\t\\t&lt;param-value&gt;true&lt;/param-value&gt;\\n\\t\\t&lt;description&gt;Clear the html cache on server startup&lt;/description&gt;\\n\\t&lt;/init-param&gt;\\n&lt;/filter&gt;\\n&lt;filter-mapping&gt;\\n\\t&lt;filter-name&gt;ajax-bot-indexing-filter&lt;/filter-name&gt;\\n\\t&lt;url-pattern&gt;*&lt;/url-pattern&gt;\\n&lt;/filter-mapping&gt;\\n<\\/pre>',new I5(C.a)).a),jnc(o,a.a),o),A6(a.o));Nab(c,(p=new ytb(3),wtb(p,(D=new duc,D.a+='Initialize the gwt host page',new I5(D.a)).a),jw(p.L,dKc,eKc),p),A6(a.r));Nab(c,(q=new lnc,knc(q,(F=new duc,F.a+='<pre>\\n&lt;html&gt;\\n\\t&lt;head&gt;\\n\\t\\t...\\n\\t\\t&lt;meta name=\"fragment\" content=\"!\"&gt;\\n\\t\\t...\\n\\t&lt;/head&gt;\\n&lt;/html&gt;\\n<\\/pre>',new I5(F.a)).a),jnc(q,a.a),q),A6(a.t));Nab(c,(r=new ytb(3),wtb(r,(G=new duc,G.a+='Clean html cache',new I5(G.a)).a),jw(r.L,dKc,eKc),r),A6(a.v));a.S.j=c;return c}\ns3(657,46,_Jc);var kV=Erc(vIc,'AjaxBotIndexingPage',657,UU);s3(_Fc,1,{},y_b);var gV=Erc(vIc,'AjaxBotIndexingPage_AjaxBotIndexingPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets',_Fc,B1);s3(1001,1,cGc,z_b);_.jf=function A_b(a){u_b(this.a.S,a)};var fV=Erc(vIc,'AjaxBotIndexingPage_AjaxBotIndexingPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets/1',1001,B1);var G_b;s3(656,1,wIc);_.Je=function Q_b(){var a;!(a5(),G_b)&&(G_b=new R_b);a=new U$b;yjb(a,G_b);rjb(this.a,a)};s3(908,657,aKc,R_b);_.vh=function S_b(a,b){R$b(this);b.xe(this)};var jV=Erc(vIc,'AjaxBotIndexingPage_Injector',908,kV);BEc(Vt)(15);\n//# sourceURL=Documentation-15.js\n")