$wnd.Documentation.runAsyncCallback9("function E6b(){rab(this,B6b(new C6b))}\nfunction H6b(){rab(this,J6b(new K6b(this)))}\nfunction M6b(a){var b;b=new Stc;b.a+=FGc;Ptc(b,U5(a));b.a+=GGc;return new F5(b.a)}\nfunction N6b(a,b){var c;c=new Stc;c.a+=FGc;Ptc(c,U5(a));c.a+=EGc;Ptc(c,U5(b));c.a+=GGc;return new F5(c.a)}\nfunction K6b(a){this.j=a;this.c=_w($doc);this.g=_w($doc);this.a=_w($doc);this.e=_w($doc);this.d=new y6(this.c);this.i=new y6(this.g);this.b=new y6(this.a);this.f=new y6(this.e)}\nfunction C6b(){this.b=_w($doc);this.d=_w($doc);this.f=_w($doc);this.i=_w($doc);this.c=new y6(this.b);this.e=new y6(this.d);this.g=new y6(this.f);this.j=new y6(this.i);this.a=(znc(),ync)}\nfunction L6b(a){var b;b=new Stc;b.a+=FGc;Ptc(b,U5(a));b.a+=\"'><\\/span> <p class='lead'><strong title='Putnami Web Toolkit'>PWT<\\/strong> extends the native GWT I18N capabilities to make it more easy to use.<\\/p>\";return new F5(b.a)}\nfunction J6b(a){var b,c,d,e,f,g,h,i;c=new ctb(N6b(a.a,a.e).a);jw((G6(),c.L),LGc,'PWT - Internationalization Framework');b=A6(c.L);x6(a.b);x6(a.f);b.b?Rv(b.b,b.a,b.c):C6(b.a);Pab(c,(d=new ftb(L6b(a.c).a),e=A6(d.L),x6(a.d),e.b?Rv(e.b,e.a,e.c):C6(e.a),Pab(d,(h=new mtb(1),ktb(h,(i=new Stc,i.a+='Internationalization (I18N)',new F5(i.a)).a),h),x6(a.d)),a.j.k=d,d),x6(a.b));Pab(c,(f=new ctb(M6b(a.g).a),g=A6(f.L),x6(a.i),g.b?Rv(g.b,g.a,g.c):C6(g.a),Pab(f,new E6b,x6(a.i)),a.j.j=f,f),x6(a.f));return c}\nfunction B6b(a){var b,c,d,e,f,g,h,i,j,k;c=new ctb(D6b(a.b,a.d,a.f,a.i).a);b=A6((G6(),c.L));x6(a.c);x6(a.e);x6(a.g);x6(a.j);b.b?Rv(b.b,b.a,b.c):C6(b.a);Pab(c,(d=new mtb(2),ktb(d,(h=new Stc,h.a+='Localized templates',new F5(h.a)).a),jw(d.L,QJc,RJc),d),x6(a.c));Pab(c,(e=new mtb(3),ktb(e,(i=new Stc,i.a+=XOc,new F5(i.a)).a),jw(e.L,QJc,RJc),e),x6(a.e));Pab(c,(f=new $mc,Zmc(f,(j=new Stc,j.a+='<pre>\\ninterface Binder extends UiBinderLocalized&lt;Widget, TemplateView&gt; {\\n\\tBinder BINDER = GWT.create(Binder.class);\\n}<\\/pre>',new F5(j.a)).a),Ymc(f,a.a),f),x6(a.g));Pab(c,(g=new $mc,Zmc(g,(k=new Stc,k.a+='<pre>\\n@Templated\\npublic TemplateView implements View {\\n\\t...\\n}<\\/pre>',new F5(k.a)).a),Ymc(g,a.a),g),x6(a.j));return c}\nfunction D6b(a,b,c,d){var e;e=new Stc;e.a+=FGc;Ptc(e,U5(a));e.a+=\"'><\\/span> <p class='lead'>Use one Ui template per locale!<\\/p>  <p>Instead of using <code>Constants<\\/code> to translate your application, you can use one template per locale. It allows you to change the Ui between locales. It makes also easier to maintain some translations.<\\/p> <p>However you can still use the GWT <code>Constants<\\/code> in your locale based templates.<\\/p> <p>To use the localised templates, suffix the template name with the locale. If no one is found for the locale, the default one is used (without suffix) : It follow the same rules as the constants i18n functionnality.<\\/p>  <span id='\";Ptc(e,U5(b));e.a+=EGc;Ptc(e,U5(c));e.a+=\"'><\\/span> <p>And if you use the <a href='#!Injection'>Injection feature<\\/a> (if your view implements the <code>View<\\/code> interface), you can just annotate your view with <code>@Templated<\\/code> :<\\/p> <span id='\";Ptc(e,U5(d));e.a+=\"'><\\/span> <p>And create the following templates :<\\/p> <ul> <li><strong>TemplateView.ui.xml<\\/strong> : The default template<\\/li> <li><strong>TemplateView_fr.ui.xml<\\/strong> : The French locale template<\\/li> <li><strong>TemplateView_fr_CA.ui.xml<\\/strong> : The French-speaking Canada locale template<\\/li> <\\/ul>\";return new F5(e.a)}\np3(1439,19,pGc);var jX=qrc(rIc,'I18NTemplateView',1439,CM);p3(1270,1,{},C6b);var hX=qrc(rIc,'I18NTemplateView_I18NTemplateViewTemplateBinder_UiBinderLocalized_BinderImpl/Widgets',1270,y1);p3(1170,1439,KJc,E6b);_.th=function F6b(a,b){b.xe(this)};var iX=qrc(rIc,'I18NTemplateView_Injector',1170,jX);p3(1364,46,MJc);var pX=qrc(rIc,'InternationalizationPage',1364,RU);p3(903,1364,NJc,H6b);_.th=function I6b(a,b){E$b(this);b.xe(this)};var lX=qrc(rIc,'InternationalizationPage_Injector',903,pX);p3(991,1,{},K6b);var mX=qrc(rIc,'InternationalizationPage_InternationalizationPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets',991,y1);var O6b;p3(643,1,hIc);_.Je=function Y6b(){var a;!(Z4(),O6b)&&(O6b=new H6b);a=new H$b;pjb(a,O6b);ijb(this.a,a)};oEc(Vt)(9);\n//# sourceURL=Documentation-9.js\n")
