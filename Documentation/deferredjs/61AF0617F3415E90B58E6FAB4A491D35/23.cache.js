$wnd.Documentation.runAsyncCallback23("function hfc(){oab(this,kfc(new lfc(this)))}\nfunction mfc(a){var b;b=new Ytc;b.a+=PGc;Vtc(b,X5(a));b.a+=QGc;return new I5(b.a)}\nfunction ofc(a,b){var c;c=new Ytc;c.a+=PGc;Vtc(c,X5(a));c.a+=OGc;Vtc(c,X5(b));c.a+=QGc;return new I5(c.a)}\nfunction kfc(a){var b,c,d,e,f,g;c=new itb(ofc(a.c,a.I).a);lw((J6(),c.L),VGc,'PWT - Tutorial Part 1 - Init a PWT Project with Gradle');b=D6(c.L);A6(a.d);A6(a.J);b.b?Rv(b.b,b.a,b.c):F6(b.a);Mab(c,(d=new ltb(mfc(a.e).a),e=D6(d.L),A6(a.H),e.b?Rv(e.b,e.a,e.c):F6(e.a),Mab(d,(f=new stb(1),qtb(f,(g=new Ytc,g.a+='Part 1 - Init a PWT Project with Gradle',new I5(g.a)).a),f),A6(a.H)),a.Y.k=d,d),A6(a.d));Mab(c,jfc(a),A6(a.J));return c}\nfunction lfc(a){this.Y=a;this.e=bx($doc);this.K=bx($doc);this.M=bx($doc);this.O=bx($doc);this.Q=bx($doc);this.S=bx($doc);this.U=bx($doc);this.W=bx($doc);this.f=bx($doc);this.i=bx($doc);this.k=bx($doc);this.o=bx($doc);this.r=bx($doc);this.t=bx($doc);this.v=bx($doc);this.A=bx($doc);this.C=bx($doc);this.F=bx($doc);this.c=bx($doc);this.I=bx($doc);this.H=new B6(this.e);this.L=new B6(this.K);this.N=new B6(this.M);this.P=new B6(this.O);this.R=new B6(this.Q);this.T=new B6(this.S);this.V=new B6(this.U);this.X=new B6(this.W);this.g=new B6(this.f);this.j=new B6(this.i);this.n=new B6(this.k);this.p=new B6(this.o);this.s=new B6(this.r);this.u=new B6(this.t);this.w=new B6(this.v);this.B=new B6(this.A);this.D=new B6(this.C);this.G=new B6(this.F);this.d=new B6(this.c);this.J=new B6(this.I);this.a=(Fnc(),Enc);this.b=(Nnc(),Mnc)}\nfunction nfc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r;r=new Ytc;r.a+=_Qc;Vtc(r,X5(a));r.a+=cKc;Vtc(r,X5(b));r.a+=\"'><\\/span> <p>Gradle does not support any official GWT plugin yet. However, Putnami made a nice one for you ;) : <a href='https://github.com/Putnami/putnami-gradle-plugin' target='_BLANK'>putnami-gradle-plugin<\\/a>, and published it on maven central repository.<\\/p>  <p>On this tutorial, we only explains the bases of the plugin. You can refer to the <a href='https://github.com/Putnami/putnami-gradle-plugin' target='_BLANK'>official doc<\\/a> to go furher.<\\/p>    <span id='\";Vtc(r,X5(c));r.a+=aRc;Vtc(r,X5(d));r.a+=\"'><\\/span> <p>In the project folder, create the gradle build file (<code>build.gradle<\\/code>).<\\/p> <p>We will configure the gradle build :<\\/p> <ol> <li>Configure the build script to use the non official putnami-gradle-plugin : <span id='\";Vtc(r,X5(e));r.a+=\"'><\\/span> <\\/li> <li>PWT is available on maven central, so you just have to add the mavenCentral repository. <span id='\";Vtc(r,X5(f));r.a+=\"'><\\/span> <\\/li> <li>Now we add the <strong title='Putnami Web Toolkit'>PWT<\\/strong> dependency : <span id='\";Vtc(r,X5(g));r.a+=\"'><\\/span> <\\/li> <li>In order to use the gwt-gradle-plugin, we have to apply it and configure it : <span id='\";Vtc(r,X5(h));r.a+=\"'><\\/span> <\\/li> <\\/ol>  <span id='\";Vtc(r,X5(i));r.a+=cKc;Vtc(r,X5(j));r.a+=bRc;Vtc(r,X5(k));r.a+=cRc;Vtc(r,X5(l));r.a+='\\'><\\/span> <\\/li> <li>In the build script configuration, we used the \"<em>fr.putnami.pwt.tutorial.Tutorial<\\/em>\" module so we juste have to create it by creating the file <code>fr/putnami/pwt/tutorial/Tutorial.gwt.xml<\\/code> <span id=\\'';Vtc(r,X5(m));r.a+=dRc;Vtc(r,X5(n));r.a+=eRc;Vtc(r,X5(o));r.a+=cKc;Vtc(r,X5(p));r.a+=\"'><\\/span> <p>In order to run the app in with the super dev mode<\\/p> <p><kbd>gradle gwtDev<\\/kbd><\\/p> <p>To run it in production mode, use<\\/p> <p><kbd>gradle gwtRun<\\/kbd><\\/p> <p>That's it !<\\/p>  <span id='\";Vtc(r,X5(q));r.a+=fRc;return new I5(r.a)}\nfunction jfc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L;c=new itb(nfc(a.K,a.M,a.O,a.Q,a.S,a.U,a.W,a.f,a.i,a.k,a.o,a.r,a.t,a.v,a.A,a.C,a.F).a);b=D6((J6(),c.L));A6(a.L);A6(a.N);A6(a.P);A6(a.R);A6(a.T);A6(a.V);A6(a.X);A6(a.g);A6(a.j);A6(a.n);A6(a.p);A6(a.s);A6(a.u);A6(a.w);A6(a.B);A6(a.D);A6(a.G);b.b?Rv(b.b,b.a,b.c):F6(b.a);Mab(c,new imb((r=new Ytc,r.a+=\"<h4>Note :<\\/h4><p>In this tutorial, we use Gradle to build the project. If you use Maven, you should see the Maven version <a href='#!Tuto1InitMaven'>here<\\/a><\\/p>\",new I5(r.a)).a),A6(a.L));Mab(c,(d=new stb(2),qtb(d,(s=new Ytc,s.a+='Gradle and GWT notice',new I5(s.a)).a),lw(d.L,$Jc,_Jc),d),A6(a.N));Mab(c,(e=new stb(2),qtb(e,(t=new Ytc,t.a+=RQc,new I5(t.a)).a),lw(e.L,$Jc,_Jc),e),A6(a.P));Mab(c,(f=new stb(2),qtb(f,(u=new Ytc,u.a+=SQc,new I5(u.a)).a),lw(f.L,$Jc,_Jc),f),A6(a.R));Mab(c,(g=new enc,dnc(g,(v=new Ytc,v.a+=\"<pre>\\nbuildscript {\\n\\trepositories { mavenCentral() }\\n\\tdependencies { classpath 'fr.putnami.gwt:putnami-gradle-plugin:0.2.0' }\\n}<\\/pre>\",new I5(v.a)).a),cnc(g,a.a),g),A6(a.T));Mab(c,(h=new enc,dnc(h,(w=new Ytc,w.a+='<pre>\\nrepositories {\\n\\tmavenCentral()\\n}<\\/pre>',new I5(w.a)).a),cnc(h,a.a),h),A6(a.V));Mab(c,(i=new enc,dnc(i,(A=new Ytc,A.a+=\"<pre>\\ndependencies {\\n\\tcompile 'fr.putnami.pwt:pwt:@snapshotVersion@'\\n}<\\/pre>\",new I5(A.a)).a),cnc(i,a.a),i),A6(a.X));Mab(c,(j=new enc,dnc(j,(B=new Ytc,B.a+=\"<pre>\\napply plugin: 'fr.putnami.gwt'\\n\\nputnami {\\n\\tmodule 'fr.putnami.pwt.tutorial.Tutorial'\\n}<\\/pre>\",new I5(B.a)).a),cnc(j,a.a),j),A6(a.g));Mab(c,new imb((C=new Ytc,C.a+='<h4>Note :<\\/h4><p>You should apply all the plugin in the top of the build file in order to avoid unsatisfied dependencies between plugins.<\\/p>',new I5(C.a)).a),A6(a.j));Mab(c,(k=new stb(2),qtb(k,(D=new Ytc,D.a+=TQc,new I5(D.a)).a),lw(k.L,$Jc,_Jc),k),A6(a.n));Mab(c,(l=new stb(2),qtb(l,(F=new Ytc,F.a+=UQc,new I5(F.a)).a),lw(l.L,$Jc,_Jc),l),A6(a.p));Mab(c,(m=new enc,dnc(m,(G=new Ytc,G.a+=VQc,new I5(G.a)).a),cnc(m,a.a),m),A6(a.s));Mab(c,(n=new enc,dnc(n,(H=new Ytc,H.a+=WQc,new I5(H.a)).a),cnc(n,a.b),n),A6(a.u));Mab(c,(o=new stb(2),qtb(o,(I=new Ytc,I.a+=XQc,new I5(I.a)).a),lw(o.L,$Jc,_Jc),o),A6(a.w));Mab(c,(p=new enc,dnc(p,(J=new Ytc,J.a+=YQc,new I5(J.a)).a),cnc(p,a.b),p),A6(a.B));Mab(c,(q=new stb(2),qtb(q,(K=new Ytc,K.a+=ZQc,new I5(K.a)).a),lw(q.L,$Jc,_Jc),q),A6(a.D));Mab(c,new imb((L=new Ytc,L.a+=$Qc,new I5(L.a)).a),A6(a.G));a.Y.j=c;return c}\ns3(1369,46,WJc);var n$=xrc(NIc,'Tuto1InitGradlePage',1369,UU);s3(917,1369,XJc,hfc);_.th=function ifc(a,b){K$b(this);b.xe(this)};var j$=xrc(NIc,'Tuto1InitGradlePage_Injector',917,n$);s3(1028,1,{},lfc);var k$=xrc(NIc,'Tuto1InitGradlePage_Tuto1InitGradlePageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets',1028,B1);var pfc;s3(680,1,rIc);_.Je=function zfc(){var a;!(a5(),pfc)&&(pfc=new hfc);a=new N$b;vjb(a,pfc);ojb(this.a,a)};uEc(Vt)(23);\n//# sourceURL=Documentation-23.js\n")