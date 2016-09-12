$wnd.Documentation.runAsyncCallback23("function Zec(){lab(this,afc(new bfc(this)))}\nfunction cfc(a){var b;b=new Otc;b.a+=BGc;Ltc(b,a6(a));b.a+=CGc;return new N5(b.a)}\nfunction efc(a,b){var c;c=new Otc;c.a+=BGc;Ltc(c,a6(a));c.a+=AGc;Ltc(c,a6(b));c.a+=CGc;return new N5(c.a)}\nfunction afc(a){var b,c,d,e,f,g;c=new Zsb(efc(a.c,a.I).a);jw(c.L,HGc,'PWT - Tutorial Part 1 - Init a PWT Project with Gradle');b=I6(c.L);F6(a.d);F6(a.J);b.b?Rv(b.b,b.a,b.c):K6(b.a);Ykb(c,(d=new atb(cfc(a.e).a),e=I6(d.L),F6(a.H),e.b?Rv(e.b,e.a,e.c):K6(e.a),Ykb(d,(f=new htb(1),ftb(f,(g=new Otc,g.a+='Part 1 - Init a PWT Project with Gradle',new N5(g.a)).a),f),F6(a.H)),a.Y.k=d,d),F6(a.d));Ykb(c,_ec(a),F6(a.J));return c}\nfunction bfc(a){this.Y=a;this.e=$w($doc);this.K=$w($doc);this.M=$w($doc);this.O=$w($doc);this.Q=$w($doc);this.S=$w($doc);this.U=$w($doc);this.W=$w($doc);this.f=$w($doc);this.i=$w($doc);this.k=$w($doc);this.o=$w($doc);this.r=$w($doc);this.t=$w($doc);this.v=$w($doc);this.A=$w($doc);this.C=$w($doc);this.F=$w($doc);this.c=$w($doc);this.I=$w($doc);this.H=new G6(this.e);this.L=new G6(this.K);this.N=new G6(this.M);this.P=new G6(this.O);this.R=new G6(this.Q);this.T=new G6(this.S);this.V=new G6(this.U);this.X=new G6(this.W);this.g=new G6(this.f);this.j=new G6(this.i);this.n=new G6(this.k);this.p=new G6(this.o);this.s=new G6(this.r);this.u=new G6(this.t);this.w=new G6(this.v);this.B=new G6(this.A);this.D=new G6(this.C);this.G=new G6(this.F);this.d=new G6(this.c);this.J=new G6(this.I);this.a=(vnc(),unc);this.b=(Dnc(),Cnc)}\nfunction dfc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r;r=new Otc;r.a+=PQc;Ltc(r,a6(a));r.a+=RJc;Ltc(r,a6(b));r.a+=\"'><\\/span> <p>Gradle does not support any official GWT plugin yet. However, Putnami made a nice one for you ;) : <a href='https://github.com/Putnami/putnami-gradle-plugin' target='_BLANK'>putnami-gradle-plugin<\\/a>, and published it on maven central repository.<\\/p>  <p>On this tutorial, we only explains the bases of the plugin. You can refer to the <a href='https://github.com/Putnami/putnami-gradle-plugin' target='_BLANK'>official doc<\\/a> to go furher.<\\/p>    <span id='\";Ltc(r,a6(c));r.a+=QQc;Ltc(r,a6(d));r.a+=\"'><\\/span> <p>In the project folder, create the gradle build file (<code>build.gradle<\\/code>).<\\/p> <p>We will configure the gradle build :<\\/p> <ol> <li>Configure the build script to use the non official putnami-gradle-plugin : <span id='\";Ltc(r,a6(e));r.a+=\"'><\\/span> <\\/li> <li>PWT is available on maven central, so you just have to add the mavenCentral repository. <span id='\";Ltc(r,a6(f));r.a+=\"'><\\/span> <\\/li> <li>Now we add the <strong title='Putnami Web Toolkit'>PWT<\\/strong> dependency : <span id='\";Ltc(r,a6(g));r.a+=\"'><\\/span> <\\/li> <li>In order to use the gwt-gradle-plugin, we have to apply it and configure it : <span id='\";Ltc(r,a6(h));r.a+=\"'><\\/span> <\\/li> <\\/ol>  <span id='\";Ltc(r,a6(i));r.a+=RJc;Ltc(r,a6(j));r.a+=RQc;Ltc(r,a6(k));r.a+=SQc;Ltc(r,a6(l));r.a+='\\'><\\/span> <\\/li> <li>In the build script configuration, we used the \"<em>fr.putnami.pwt.tutorial.Tutorial<\\/em>\" module so we juste have to create it by creating the file <code>fr/putnami/pwt/tutorial/Tutorial.gwt.xml<\\/code> <span id=\\'';Ltc(r,a6(m));r.a+=TQc;Ltc(r,a6(n));r.a+=UQc;Ltc(r,a6(o));r.a+=RJc;Ltc(r,a6(p));r.a+=\"'><\\/span> <p>In order to run the app in with the super dev mode<\\/p> <p><kbd>gradle gwtDev<\\/kbd><\\/p> <p>To run it in production mode, use<\\/p> <p><kbd>gradle gwtRun<\\/kbd><\\/p> <p>That's it !<\\/p>  <span id='\";Ltc(r,a6(q));r.a+=VQc;return new N5(r.a)}\nfunction _ec(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L;c=new Zsb(dfc(a.K,a.M,a.O,a.Q,a.S,a.U,a.W,a.f,a.i,a.k,a.o,a.r,a.t,a.v,a.A,a.C,a.F).a);b=I6(c.L);F6(a.L);F6(a.N);F6(a.P);F6(a.R);F6(a.T);F6(a.V);F6(a.X);F6(a.g);F6(a.j);F6(a.n);F6(a.p);F6(a.s);F6(a.u);F6(a.w);F6(a.B);F6(a.D);F6(a.G);b.b?Rv(b.b,b.a,b.c):K6(b.a);Ykb(c,new Zlb((r=new Otc,r.a+=\"<h4>Note :<\\/h4><p>In this tutorial, we use Gradle to build the project. If you use Maven, you should see the Maven version <a href='#!Tuto1InitMaven'>here<\\/a><\\/p>\",new N5(r.a)).a),F6(a.L));Ykb(c,(d=new htb(2),ftb(d,(s=new Otc,s.a+='Gradle and GWT notice',new N5(s.a)).a),jw(d.L,NJc,OJc),d),F6(a.N));Ykb(c,(e=new htb(2),ftb(e,(t=new Otc,t.a+=FQc,new N5(t.a)).a),jw(e.L,NJc,OJc),e),F6(a.P));Ykb(c,(f=new htb(2),ftb(f,(u=new Otc,u.a+=GQc,new N5(u.a)).a),jw(f.L,NJc,OJc),f),F6(a.R));Ykb(c,(g=new Wmc,Vmc(g,(v=new Otc,v.a+=\"<pre>\\nbuildscript {\\n\\trepositories { mavenCentral() }\\n\\tdependencies { classpath 'fr.putnami.gwt:putnami-gradle-plugin:0.2.0' }\\n}<\\/pre>\",new N5(v.a)).a),Umc(g,a.a),g),F6(a.T));Ykb(c,(h=new Wmc,Vmc(h,(w=new Otc,w.a+='<pre>\\nrepositories {\\n\\tmavenCentral()\\n}<\\/pre>',new N5(w.a)).a),Umc(h,a.a),h),F6(a.V));Ykb(c,(i=new Wmc,Vmc(i,(A=new Otc,A.a+=\"<pre>\\ndependencies {\\n\\tcompile 'fr.putnami.pwt:pwt:@snapshotVersion@'\\n}<\\/pre>\",new N5(A.a)).a),Umc(i,a.a),i),F6(a.X));Ykb(c,(j=new Wmc,Vmc(j,(B=new Otc,B.a+=\"<pre>\\napply plugin: 'fr.putnami.gwt'\\n\\nputnami {\\n\\tmodule 'fr.putnami.pwt.tutorial.Tutorial'\\n}<\\/pre>\",new N5(B.a)).a),Umc(j,a.a),j),F6(a.g));Ykb(c,new Zlb((C=new Otc,C.a+='<h4>Note :<\\/h4><p>You should apply all the plugin in the top of the build file in order to avoid unsatisfied dependencies between plugins.<\\/p>',new N5(C.a)).a),F6(a.j));Ykb(c,(k=new htb(2),ftb(k,(D=new Otc,D.a+=HQc,new N5(D.a)).a),jw(k.L,NJc,OJc),k),F6(a.n));Ykb(c,(l=new htb(2),ftb(l,(F=new Otc,F.a+=IQc,new N5(F.a)).a),jw(l.L,NJc,OJc),l),F6(a.p));Ykb(c,(m=new Wmc,Vmc(m,(G=new Otc,G.a+=JQc,new N5(G.a)).a),Umc(m,a.a),m),F6(a.s));Ykb(c,(n=new Wmc,Vmc(n,(H=new Otc,H.a+=KQc,new N5(H.a)).a),Umc(n,a.b),n),F6(a.u));Ykb(c,(o=new htb(2),ftb(o,(I=new Otc,I.a+=LQc,new N5(I.a)).a),jw(o.L,NJc,OJc),o),F6(a.w));Ykb(c,(p=new Wmc,Vmc(p,(J=new Otc,J.a+=MQc,new N5(J.a)).a),Umc(p,a.b),p),F6(a.B));Ykb(c,(q=new htb(2),ftb(q,(K=new Otc,K.a+=NQc,new N5(K.a)).a),jw(q.L,NJc,OJc),q),F6(a.D));Ykb(c,new Zlb((L=new Otc,L.a+=OQc,new N5(L.a)).a),F6(a.G));a.Y.j=c;return c}\nx3(1374,46,JJc);var s$=mrc(AIc,'Tuto1InitGradlePage',1374,ZU);x3(922,1374,KJc,Zec);_.uh=function $ec(a,b){A$b(this);b.xe(this)};var o$=mrc(AIc,'Tuto1InitGradlePage_Injector',922,s$);x3(1034,1,{},bfc);var p$=mrc(AIc,'Tuto1InitGradlePage_Tuto1InitGradlePageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets',1034,G1);var ffc;x3(680,1,eIc);_.Je=function pfc(){var a;!(f5(),ffc)&&(ffc=new Zec);a=new D$b;ijb(a,ffc);bjb(this.a,a)};kEc(Vt)(23);\n//# sourceURL=Documentation-23.js\n")
