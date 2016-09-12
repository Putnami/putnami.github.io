$wnd.Documentation.runAsyncCallback9("function A6b(){lab(this,x6b(new y6b))}\nfunction D6b(){lab(this,F6b(new G6b(this)))}\nfunction I6b(a){var b;b=new Otc;b.a+=BGc;Ltc(b,a6(a));b.a+=CGc;return new N5(b.a)}\nfunction J6b(a,b){var c;c=new Otc;c.a+=BGc;Ltc(c,a6(a));c.a+=AGc;Ltc(c,a6(b));c.a+=CGc;return new N5(c.a)}\nfunction G6b(a){this.j=a;this.c=$w($doc);this.g=$w($doc);this.a=$w($doc);this.e=$w($doc);this.d=new G6(this.c);this.i=new G6(this.g);this.b=new G6(this.a);this.f=new G6(this.e)}\nfunction y6b(){this.b=$w($doc);this.d=$w($doc);this.f=$w($doc);this.i=$w($doc);this.c=new G6(this.b);this.e=new G6(this.d);this.g=new G6(this.f);this.j=new G6(this.i);this.a=(vnc(),unc)}\nfunction H6b(a){var b;b=new Otc;b.a+=BGc;Ltc(b,a6(a));b.a+=\"'><\\/span> <p class='lead'><strong title='Putnami Web Toolkit'>PWT<\\/strong> extends the native GWT I18N capabilities to make it more easy to use.<\\/p>\";return new N5(b.a)}\nfunction F6b(a){var b,c,d,e,f,g,h,i;c=new Zsb(J6b(a.a,a.e).a);jw(c.L,HGc,'PWT - Internationalization Framework');b=I6(c.L);F6(a.b);F6(a.f);b.b?Rv(b.b,b.a,b.c):K6(b.a);Ykb(c,(d=new atb(H6b(a.c).a),e=I6(d.L),F6(a.d),e.b?Rv(e.b,e.a,e.c):K6(e.a),Ykb(d,(h=new htb(1),ftb(h,(i=new Otc,i.a+='Internationalization (I18N)',new N5(i.a)).a),h),F6(a.d)),a.j.k=d,d),F6(a.b));Ykb(c,(f=new Zsb(I6b(a.g).a),g=I6(f.L),F6(a.i),g.b?Rv(g.b,g.a,g.c):K6(g.a),Ykb(f,new A6b,F6(a.i)),a.j.j=f,f),F6(a.f));return c}\nfunction x6b(a){var b,c,d,e,f,g,h,i,j,k;c=new Zsb(z6b(a.b,a.d,a.f,a.i).a);b=I6(c.L);F6(a.c);F6(a.e);F6(a.g);F6(a.j);b.b?Rv(b.b,b.a,b.c):K6(b.a);Ykb(c,(d=new htb(2),ftb(d,(h=new Otc,h.a+='Localized templates',new N5(h.a)).a),jw(d.L,NJc,OJc),d),F6(a.c));Ykb(c,(e=new htb(3),ftb(e,(i=new Otc,i.a+=UOc,new N5(i.a)).a),jw(e.L,NJc,OJc),e),F6(a.e));Ykb(c,(f=new Wmc,Vmc(f,(j=new Otc,j.a+='<pre>\\ninterface Binder extends UiBinderLocalized&lt;Widget, TemplateView&gt; {\\n\\tBinder BINDER = GWT.create(Binder.class);\\n}<\\/pre>',new N5(j.a)).a),Umc(f,a.a),f),F6(a.g));Ykb(c,(g=new Wmc,Vmc(g,(k=new Otc,k.a+='<pre>\\n@Templated\\npublic TemplateView implements View {\\n\\t...\\n}<\\/pre>',new N5(k.a)).a),Umc(g,a.a),g),F6(a.j));return c}\nfunction z6b(a,b,c,d){var e;e=new Otc;e.a+=BGc;Ltc(e,a6(a));e.a+=\"'><\\/span> <p class='lead'>Use one Ui template per locale!<\\/p>  <p>Instead of using <code>Constants<\\/code> to translate your application, you can use one template per locale. It allows you to change the Ui between locales. It makes also easier to maintain some translations.<\\/p> <p>However you can still use the GWT <code>Constants<\\/code> in your locale based templates.<\\/p> <p>To use the localised templates, suffix the template name with the locale. If no one is found for the locale, the default one is used (without suffix) : It follow the same rules as the constants i18n functionnality.<\\/p>  <span id='\";Ltc(e,a6(b));e.a+=AGc;Ltc(e,a6(c));e.a+=\"'><\\/span> <p>And if you use the <a href='#!Injection'>Injection feature<\\/a> (if your view implements the <code>View<\\/code> interface), you can just annotate your view with <code>@Templated<\\/code> :<\\/p> <span id='\";Ltc(e,a6(d));e.a+=\"'><\\/span> <p>And create the following templates :<\\/p> <ul> <li><strong>TemplateView.ui.xml<\\/strong> : The default template<\\/li> <li><strong>TemplateView_fr.ui.xml<\\/strong> : The French locale template<\\/li> <li><strong>TemplateView_fr_CA.ui.xml<\\/strong> : The French-speaking Canada locale template<\\/li> <\\/ul>\";return new N5(e.a)}\nx3(1442,19,lGc);var rX=mrc(oIc,'I18NTemplateView',1442,JM);x3(1273,1,{},y6b);var pX=mrc(oIc,'I18NTemplateView_I18NTemplateViewTemplateBinder_UiBinderLocalized_BinderImpl/Widgets',1273,G1);x3(1173,1442,HJc,A6b);_.uh=function B6b(a,b){b.xe(this)};var qX=mrc(oIc,'I18NTemplateView_Injector',1173,rX);x3(1367,46,JJc);var xX=mrc(oIc,'InternationalizationPage',1367,ZU);x3(905,1367,KJc,D6b);_.uh=function E6b(a,b){A$b(this);b.xe(this)};var tX=mrc(oIc,'InternationalizationPage_Injector',905,xX);x3(993,1,{},G6b);var uX=mrc(oIc,'InternationalizationPage_InternationalizationPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets',993,G1);var K6b;x3(643,1,eIc);_.Je=function U6b(){var a;!(f5(),K6b)&&(K6b=new D6b);a=new D$b;ijb(a,K6b);bjb(this.a,a)};kEc(Vt)(9);\n//# sourceURL=Documentation-9.js\n")