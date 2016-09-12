$wnd.Documentation.runAsyncCallback29("function Ahc(){pab(this,Chc(new Dhc(this)))}\nfunction Ghc(a){var b;b=new duc;b.a+=UGc;auc(b,X5(a));b.a+=VGc;return new I5(b.a)}\nfunction Fhc(a,b){var c;c=new duc;c.a+=UGc;auc(c,X5(a));c.a+=TGc;auc(c,X5(b));c.a+=VGc;return new I5(c.a)}\nfunction Hhc(a){var b;b=new duc;b.a+=\"<h4>Note :<\\/h4><p>If you just have css in your theme (no Icon set customization), you can simply use the following annotation in your entry point :<\\/p> <span id='\";auc(b,X5(a));b.a+=VGc;return new I5(b.a)}\nfunction Dhc(a){this.F=a;this.v=cx($doc);this.d=cx($doc);this.k=cx($doc);this.o=cx($doc);this.r=cx($doc);this.t=cx($doc);this.A=cx($doc);this.C=cx($doc);this.e=cx($doc);this.b=cx($doc);this.i=cx($doc);this.w=new B6(this.v);this.g=new B6(this.d);this.n=new B6(this.k);this.p=new B6(this.o);this.s=new B6(this.r);this.u=new B6(this.t);this.B=new B6(this.A);this.D=new B6(this.C);this.f=new B6(this.e);this.c=new B6(this.b);this.j=new B6(this.i);this.a=(Mnc(),Lnc)}\nfunction Ehc(a,b,c,d,e,f,g){var h;h=new duc;h.a+=\"<ul class='pager'> <li class='previous'><a href='#!Tuto5'>\\u2190 Part 5 : Build a simple issues tracker<\\/a><\\/li> <li class='next'><a href='#!Tuto7'>Part 7 : Add Google Analytics to your app \\u2192<\\/a><\\/li> <\\/ul>  <p>In this tutorial, we will create a theme to customize our app look-and-feel after the previous part <em><a href='#!Tuto5'>Part 5 : Build a simple issues tracker<\\/a><\\/em><\\/p>  <span id='\";auc(h,X5(a));h.a+=\"'><\\/span> <p>PWT is great and so is Bootstrap, but you may want to customize a little the app style.<\\/p> <p>To do it, we are going to create a <code>Theme<\\/code>, by simply create a css file overriding Bootstrap classes and creating some custom ones.<\\/p>   <p>Create the <code>fr/putnami/pwt/tutorial/public/theme/tutorial/style/pwt-tutorial.css<\\/code> file :<\\/p> <span id='\";auc(h,X5(b));h.a+=\"'><\\/span>  <p>To configure the theme, add to the application entry point (here <code>TutorialApp<\\/code>) :<\\/p> <span id='\";auc(h,X5(c));h.a+=hKc;auc(h,X5(d));h.a+=hKc;auc(h,X5(e));h.a+=\"'><\\/span>  <p>PWT provides a lot of icons (from <a href='http://fontello.com/'>Fontello<\\/a>).<\\/p> <p>You may want to provide your own webfont. To do it, put the corresponding files in the module public repository (here we put the css file in the <code>fr/putnami/pwt/tutorial/public/theme/tutorial/style<\\/code> folder and the font files in the <code>fr/putnami/pwt/tutorial/public/theme/tutorial/font<\\/code> folder)<\\/p>  <span id='\";auc(h,X5(f));h.a+=\"'><\\/span>  <p>And that's it !<\\/p> <span id='\";auc(h,X5(g));h.a+=\"'><\\/span>   <ul class='pager'> <li class='previous'><a href='#!Tuto5'>\\u2190 Part 5 : Build a simple issues tracker<\\/a><\\/li> <li class='next'><a href='#!Tuto7'>Part 7 : Add Google Analytics to your app \\u2192<\\/a><\\/li> <\\/ul>\";return new I5(h.a)}\nfunction Chc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A;c=new otb(Fhc(a.b,a.i).a);jw((J6(),c.L),$Gc,'PWT - Tutorial Part 6 : Build a theme');b=D6(c.L);A6(a.c);A6(a.j);b.b?Rv(b.b,b.a,b.c):F6(b.a);Nab(c,(d=new rtb(Ghc(a.d).a),e=D6(d.L),A6(a.g),e.b?Rv(e.b,e.a,e.c):F6(e.a),Nab(d,(o=new ytb(1),wtb(o,(p=new duc,p.a+='Part 6 : Build a theme',new I5(p.a)).a),o),A6(a.g)),a.F.k=d,d),A6(a.c));Nab(c,(f=new otb(Ehc(a.k,a.o,a.r,a.t,a.A,a.C,a.e).a),g=D6(f.L),A6(a.n),A6(a.p),A6(a.s),A6(a.u),A6(a.B),A6(a.D),A6(a.f),g.b?Rv(g.b,g.a,g.c):F6(g.a),Nab(f,(h=new ytb(2),wtb(h,(q=new duc,q.a+='Step 1 : <em>Customize CSS<\\/em>',new I5(q.a)).a),jw(h.L,dKc,eKc),h),A6(a.n)),Nab(f,(i=new lnc,knc(i,(r=new duc,r.a+='<pre>\\n/** Overriding Bootstrap style */\\na {\\n\\tcolor: #EE6644;\\n}\\n\\n.btn {\\n\\tcolor: #EE6644;\\n}\\n\\n/** Tutorial Css */\\n.tutorialContent {\\n\\tmargin-bottom: 20px;\\n}<\\/pre>',new I5(r.a)).a),jnc(i,a.a),i),A6(a.p)),Nab(f,(j=new lnc,knc(j,(s=new duc,s.a+='<pre>\\n\\t@EntryPointHandler\\n\\tvoid installTheme() {\\n\\t\\tTheme theme = new Theme();\\n\\t\\ttheme.addLink(new CssLink(\"theme/tutorial/style/pwt-tutorial.css\", 0));\\n\\t\\tThemeController.get().installTheme(theme);\\n\\t}<\\/pre>',new I5(s.a)).a),jnc(j,a.a),j),A6(a.s)),Nab(f,(k=new lmb(Hhc(a.v).a),l=D6(k.L),A6(a.w),l.b?Rv(l.b,l.a,l.c):F6(l.a),Nab(k,(t=new lnc,knc(t,(u=new duc,u.a+='<pre>\\n@ThemeDescription(\\n\\tstyleSheets = {\"theme/tutorial/style/pwt-tutorial.css\", \"other/css.css\"})\\npublic class TutorialApp implements Module {\\n\\t...<\\/pre>',new I5(u.a)).a),jnc(t,a.a),t),A6(a.w)),k),A6(a.u)),Nab(f,(m=new ytb(2),wtb(m,(v=new duc,v.a+='Step 2 : <em>Customize Webfont Icon Set<\\/em>',new I5(v.a)).a),jw(m.L,dKc,eKc),m),A6(a.B)),Nab(f,(n=new lnc,knc(n,(w=new duc,w.a+='<pre>\\n\\t@EntryPointHandler\\n\\tvoid installTheme() {\\n\\t\\tTheme theme = new Theme();\\n\\t\\ttheme.addLink(new CssLink(\"theme/tutorial/style/pwt-tutorial.css\", 0));\\n\\t\\tIconFont font = new IconFont(\"theme/tutorial/style/pwt-tutorial-font.css\", \"icon-\");\\n\\t\\t//Eventually add aliases :\\n\\t\\tfont.addAlias(\"add\", \"plus\");\\n\\t\\tfont.addAlias(\"view\", \"search\");\\n\\t\\n\\t\\ttheme.setIconFont(font);\\n\\t\\tThemeController.get().installTheme(theme);\\n\\t}<\\/pre>',new I5(w.a)).a),jnc(n,a.a),n),A6(a.D)),Nab(f,new lmb((A=new duc,A.a+='<h4>Note :<\\/h4><p>You can see the result in the <code>tutorials/Part6<\\/code> folder in the PWT sources.<\\/p>',new I5(A.a)).a),A6(a.f)),a.F.j=f,f),A6(a.j));return c}\ns3(1376,46,_Jc);var X$=Erc(SIc,'Tuto6ThemePage',1376,UU);s3(925,1376,aKc,Ahc);_.vh=function Bhc(a,b){R$b(this);b.xe(this)};var T$=Erc(SIc,'Tuto6ThemePage_Injector',925,X$);s3(1036,1,{},Dhc);var U$=Erc(SIc,'Tuto6ThemePage_Tuto6ThemePageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets',1036,B1);var Ihc;s3(692,1,wIc);_.Je=function Shc(){var a;!(a5(),Ihc)&&(Ihc=new Ahc);a=new U$b;yjb(a,Ihc);rjb(this.a,a)};BEc(Vt)(29);\n//# sourceURL=Documentation-29.js\n")