$wnd.Documentation.runAsyncCallback23("function dfc(){sab(this,gfc(new hfc(this)))}\nfunction ifc(a){var b;b=new Utc;b.a+=HGc;Rtc(b,V5(a));b.a+=IGc;return new G5(b.a)}\nfunction kfc(a,b){var c;c=new Utc;c.a+=HGc;Rtc(c,V5(a));c.a+=GGc;Rtc(c,V5(b));c.a+=IGc;return new G5(c.a)}\nfunction gfc(a){var b,c,d,e,f,g;c=new etb(kfc(a.c,a.I).a);jw((H6(),c.L),NGc,'PWT - Tutorial Part 1 - Init a PWT Project with Gradle');b=B6(c.L);y6(a.d);y6(a.J);b.b?Rv(b.b,b.a,b.c):D6(b.a);Qab(c,(d=new htb(ifc(a.e).a),e=B6(d.L),y6(a.H),e.b?Rv(e.b,e.a,e.c):D6(e.a),Qab(d,(f=new otb(1),mtb(f,(g=new Utc,g.a+='Part 1 - Init a PWT Project with Gradle',new G5(g.a)).a),f),y6(a.H)),a.Y.k=d,d),y6(a.d));Qab(c,ffc(a),y6(a.J));return c}\nfunction hfc(a){this.Y=a;this.e=_w($doc);this.K=_w($doc);this.M=_w($doc);this.O=_w($doc);this.Q=_w($doc);this.S=_w($doc);this.U=_w($doc);this.W=_w($doc);this.f=_w($doc);this.i=_w($doc);this.k=_w($doc);this.o=_w($doc);this.r=_w($doc);this.t=_w($doc);this.v=_w($doc);this.A=_w($doc);this.C=_w($doc);this.F=_w($doc);this.c=_w($doc);this.I=_w($doc);this.H=new z6(this.e);this.L=new z6(this.K);this.N=new z6(this.M);this.P=new z6(this.O);this.R=new z6(this.Q);this.T=new z6(this.S);this.V=new z6(this.U);this.X=new z6(this.W);this.g=new z6(this.f);this.j=new z6(this.i);this.n=new z6(this.k);this.p=new z6(this.o);this.s=new z6(this.r);this.u=new z6(this.t);this.w=new z6(this.v);this.B=new z6(this.A);this.D=new z6(this.C);this.G=new z6(this.F);this.d=new z6(this.c);this.J=new z6(this.I);this.a=(Bnc(),Anc);this.b=(Jnc(),Inc)}\nfunction jfc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r;r=new Utc;r.a+=UQc;Rtc(r,V5(a));r.a+=WJc;Rtc(r,V5(b));r.a+=\"'><\\/span> <p>Gradle does not support any official GWT plugin yet. However, Putnami made a nice one for you ;) : <a href='https://github.com/Putnami/putnami-gradle-plugin' target='_BLANK'>putnami-gradle-plugin<\\/a>, and published it on maven central repository.<\\/p>  <p>On this tutorial, we only explains the bases of the plugin. You can refer to the <a href='https://github.com/Putnami/putnami-gradle-plugin' target='_BLANK'>official doc<\\/a> to go furher.<\\/p>    <span id='\";Rtc(r,V5(c));r.a+=VQc;Rtc(r,V5(d));r.a+=\"'><\\/span> <p>In the project folder, create the gradle build file (<code>build.gradle<\\/code>).<\\/p> <p>We will configure the gradle build :<\\/p> <ol> <li>Configure the build script to use the non official putnami-gradle-plugin : <span id='\";Rtc(r,V5(e));r.a+=\"'><\\/span> <\\/li> <li>PWT is available on maven central, so you just have to add the mavenCentral repository. <span id='\";Rtc(r,V5(f));r.a+=\"'><\\/span> <\\/li> <li>Now we add the <strong title='Putnami Web Toolkit'>PWT<\\/strong> dependency : <span id='\";Rtc(r,V5(g));r.a+=\"'><\\/span> <\\/li> <li>In order to use the gwt-gradle-plugin, we have to apply it and configure it : <span id='\";Rtc(r,V5(h));r.a+=\"'><\\/span> <\\/li> <\\/ol>  <span id='\";Rtc(r,V5(i));r.a+=WJc;Rtc(r,V5(j));r.a+=WQc;Rtc(r,V5(k));r.a+=XQc;Rtc(r,V5(l));r.a+='\\'><\\/span> <\\/li> <li>In the build script configuration, we used the \"<em>fr.putnami.pwt.tutorial.Tutorial<\\/em>\" module so we juste have to create it by creating the file <code>fr/putnami/pwt/tutorial/Tutorial.gwt.xml<\\/code> <span id=\\'';Rtc(r,V5(m));r.a+=YQc;Rtc(r,V5(n));r.a+=ZQc;Rtc(r,V5(o));r.a+=WJc;Rtc(r,V5(p));r.a+=\"'><\\/span> <p>In order to run the app in with the super dev mode<\\/p> <p><kbd>gradle gwtDev<\\/kbd><\\/p> <p>To run it in production mode, use<\\/p> <p><kbd>gradle gwtRun<\\/kbd><\\/p> <p>That's it !<\\/p>  <span id='\";Rtc(r,V5(q));r.a+=$Qc;return new G5(r.a)}\nfunction ffc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L;c=new etb(jfc(a.K,a.M,a.O,a.Q,a.S,a.U,a.W,a.f,a.i,a.k,a.o,a.r,a.t,a.v,a.A,a.C,a.F).a);b=B6((H6(),c.L));y6(a.L);y6(a.N);y6(a.P);y6(a.R);y6(a.T);y6(a.V);y6(a.X);y6(a.g);y6(a.j);y6(a.n);y6(a.p);y6(a.s);y6(a.u);y6(a.w);y6(a.B);y6(a.D);y6(a.G);b.b?Rv(b.b,b.a,b.c):D6(b.a);Qab(c,new emb((r=new Utc,r.a+=\"<h4>Note :<\\/h4><p>In this tutorial, we use Gradle to build the project. If you use Maven, you should see the Maven version <a href='#!Tuto1InitMaven'>here<\\/a><\\/p>\",new G5(r.a)).a),y6(a.L));Qab(c,(d=new otb(2),mtb(d,(s=new Utc,s.a+='Gradle and GWT notice',new G5(s.a)).a),jw(d.L,SJc,TJc),d),y6(a.N));Qab(c,(e=new otb(2),mtb(e,(t=new Utc,t.a+=KQc,new G5(t.a)).a),jw(e.L,SJc,TJc),e),y6(a.P));Qab(c,(f=new otb(2),mtb(f,(u=new Utc,u.a+=LQc,new G5(u.a)).a),jw(f.L,SJc,TJc),f),y6(a.R));Qab(c,(g=new anc,_mc(g,(v=new Utc,v.a+=\"<pre>\\nbuildscript {\\n\\trepositories { mavenCentral() }\\n\\tdependencies { classpath 'fr.putnami.gwt:putnami-gradle-plugin:0.2.0' }\\n}<\\/pre>\",new G5(v.a)).a),$mc(g,a.a),g),y6(a.T));Qab(c,(h=new anc,_mc(h,(w=new Utc,w.a+='<pre>\\nrepositories {\\n\\tmavenCentral()\\n}<\\/pre>',new G5(w.a)).a),$mc(h,a.a),h),y6(a.V));Qab(c,(i=new anc,_mc(i,(A=new Utc,A.a+=\"<pre>\\ndependencies {\\n\\tcompile 'fr.putnami.pwt:pwt:@snapshotVersion@'\\n}<\\/pre>\",new G5(A.a)).a),$mc(i,a.a),i),y6(a.X));Qab(c,(j=new anc,_mc(j,(B=new Utc,B.a+=\"<pre>\\napply plugin: 'fr.putnami.gwt'\\n\\nputnami {\\n\\tmodule 'fr.putnami.pwt.tutorial.Tutorial'\\n}<\\/pre>\",new G5(B.a)).a),$mc(j,a.a),j),y6(a.g));Qab(c,new emb((C=new Utc,C.a+='<h4>Note :<\\/h4><p>You should apply all the plugin in the top of the build file in order to avoid unsatisfied dependencies between plugins.<\\/p>',new G5(C.a)).a),y6(a.j));Qab(c,(k=new otb(2),mtb(k,(D=new Utc,D.a+=MQc,new G5(D.a)).a),jw(k.L,SJc,TJc),k),y6(a.n));Qab(c,(l=new otb(2),mtb(l,(F=new Utc,F.a+=NQc,new G5(F.a)).a),jw(l.L,SJc,TJc),l),y6(a.p));Qab(c,(m=new anc,_mc(m,(G=new Utc,G.a+=OQc,new G5(G.a)).a),$mc(m,a.a),m),y6(a.s));Qab(c,(n=new anc,_mc(n,(H=new Utc,H.a+=PQc,new G5(H.a)).a),$mc(n,a.b),n),y6(a.u));Qab(c,(o=new otb(2),mtb(o,(I=new Utc,I.a+=QQc,new G5(I.a)).a),jw(o.L,SJc,TJc),o),y6(a.w));Qab(c,(p=new anc,_mc(p,(J=new Utc,J.a+=RQc,new G5(J.a)).a),$mc(p,a.b),p),y6(a.B));Qab(c,(q=new otb(2),mtb(q,(K=new Utc,K.a+=SQc,new G5(K.a)).a),jw(q.L,SJc,TJc),q),y6(a.D));Qab(c,new emb((L=new Utc,L.a+=TQc,new G5(L.a)).a),y6(a.G));a.Y.j=c;return c}\nq3(1372,46,OJc);var l$=trc(FIc,'Tuto1InitGradlePage',1372,SU);q3(920,1372,PJc,dfc);_.th=function efc(a,b){G$b(this);b.xe(this)};var h$=trc(FIc,'Tuto1InitGradlePage_Injector',920,l$);q3(1032,1,{},hfc);var i$=trc(FIc,'Tuto1InitGradlePage_Tuto1InitGradlePageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets',1032,z1);var lfc;q3(680,1,jIc);_.Je=function vfc(){var a;!($4(),lfc)&&(lfc=new dfc);a=new J$b;rjb(a,lfc);kjb(this.a,a)};qEc(Vt)(23);\n//# sourceURL=Documentation-23.js\n")
