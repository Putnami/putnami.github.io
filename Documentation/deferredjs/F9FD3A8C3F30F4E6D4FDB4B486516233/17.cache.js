$wnd.Documentation.runAsyncCallback17("function ydc(a){this.a=a}\nfunction Ddc(a){var b;b=new Otc;b.a+=YOc;Ltc(b,a6(a));b.a+=CGc;return new N5(b.a)}\nfunction Edc(a){var b;b=new Otc;b.a+=ZOc;Ltc(b,a6(a));b.a+=CGc;return new N5(b.a)}\nfunction Bdc(a,b){var c;c=new Otc;c.a+=BGc;Ltc(c,a6(a));c.a+=AGc;Ltc(c,a6(b));c.a+=CGc;return new N5(c.a)}\nfunction sdc(a,b){if(Xsc(LJc,b.a)){E8(a.a,false);E8(a.b,true)}else{E8(a.a,true);E8(a.b,false)}}\nfunction udc(){this.d=Rq(VF(TF(M1,1),qEc,2,4,[MJc,LJc]));lab(this,wdc(new xdc(this)));kvb(this.c,MJc);E8(this.b,false)}\nfunction Cdc(a){var b;b=new Otc;b.a+=BGc;Ltc(b,a6(a));b.a+=\"'><\\/span> <p class='lead'> We provide a <strong>Spring<\\/strong> integration making easier the server calls handling and providing InputFile widget server side support.  <\\/p>\";return new N5(b.a)}\nfunction xdc(a){this.D=new ydc(this);this.F=a;this.s=$w($doc);this.w=$w($doc);this.c=$w($doc);this.j=$w($doc);this.n=$w($doc);this.p=$w($doc);this.u=$w($doc);this.B=$w($doc);this.d=$w($doc);this.a=$w($doc);this.g=$w($doc);this.t=new G6(this.s);this.A=new G6(this.w);this.f=new G6(this.c);this.k=new G6(this.j);this.o=new G6(this.n);this.r=new G6(this.p);this.v=new G6(this.u);this.C=new G6(this.B);this.e=new G6(this.d);this.b=new G6(this.a);this.i=new G6(this.g)}\nfunction Adc(a,b,c,d,e,f){var g;g=new Otc;g.a+=BGc;Ltc(g,a6(a));g.a+=RJc;Ltc(g,a6(b));g.a+=_Oc;Ltc(g,a6(c));g.a+=AGc;Ltc(g,a6(d));g.a+=RJc;Ltc(g,a6(e));g.a+=\"'><\\/span> <p>Without spring, you have to register all the remote accessible services in the web.xml file.<\\/p> <p>Spring provides powerful annotation such as <code>@Service<\\/code>. We provide a <code>CommandServiceController<\\/code> which scan @Service annotated beans and inject them in the <code>CommandExecutor<\\/code>.<\\/p> <p>The only thing you have to do is to inject the <code>CommandServiceController<\\/code> in the spring configuration instead of configuring the command controller in the web.xml<\\/p>  <span id='\";Ltc(g,a6(f));g.a+=\"'><\\/span> <p>In <strong>PWT<\\/strong>, we provide a <code>FileInput<\\/code> widget. But this specific widget need a server side.<\\/p> <p>That's why we provide a spring controller handling the three methods (upload, status and download) out of the box.<\\/p> <p>The upload dir is defined by the <code>filetransfertcontroller.tempdir<\\/code> property.<\\/p> <p>You just have to inject the <code>FileTransfertController<\\/code> in the spring configuration.<\\/p>\";return new N5(g.a)}\nfunction wdc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A;c=new Zsb(Bdc(a.a,a.g).a);jw(c.L,HGc,'PWT - Spring Plugin');b=I6(c.L);F6(a.b);F6(a.i);b.b?Rv(b.b,b.a,b.c):K6(b.a);Ykb(c,(d=new atb(Cdc(a.c).a),e=I6(d.L),F6(a.f),e.b?Rv(e.b,e.a,e.c):K6(e.a),Ykb(d,(r=new htb(1),ftb(r,(s=new Otc,s.a+='Spring plugin',new N5(s.a)).a),r),F6(a.f)),a.F.k=d,d),F6(a.b));Ykb(c,(f=new Zsb(Adc(a.j,a.n,a.p,a.u,a.B,a.d).a),g=I6(f.L),F6(a.k),F6(a.o),F6(a.r),F6(a.v),F6(a.C),F6(a.e),g.b?Rv(g.b,g.a,g.c):K6(g.a),Ykb(f,(h=new htb(2),ftb(h,(t=new Otc,t.a+='How to use?',new N5(t.a)).a),jw(h.L,NJc,OJc),h),F6(a.k)),Ykb(f,(i=new XDb,kZb(i,new jVb(PJc)),nvb(i,a.F.d),S8(i,a.D,(!QB&&(QB=new tA),QB)),a.F.c=i,i),F6(a.o)),Ykb(f,(j=new Zsb(Ddc(a.s).a),kZb(j,new jVb(XOc)),k=I6(j.L),F6(a.t),k.b?Rv(k.b,k.a,k.c):K6(k.a),Ykb(j,(l=new Wmc,Vmc(l,(u=new Otc,u.a+='<pre>\\ndependencies {\\n\\t\"fr.putnami.pwt:pwt-spring:$pwtVersion\"\\n}\\n<\\/pre>',new N5(u.a)).a),Umc(l,(vnc(),unc)),l),F6(a.t)),a.F.a=j,j),F6(a.r)),Ykb(f,(m=new Zsb(Edc(a.w).a),kZb(m,new jVb(XOc)),n=I6(m.L),F6(a.A),n.b?Rv(n.b,n.a,n.c):K6(n.a),Ykb(m,(o=new Wmc,Vmc(o,(v=new Otc,v.a+='<pre>\\n&lt;dependency&gt;\\n\\t&lt;groupId&gt;fr.putnami.pwt&lt;/groupId&gt;\\n\\t&lt;artifactId&gt;pwt-spring&lt;/artifactId&gt;\\n\\t&lt;version&gt;${pwt.version}&lt;/version&gt;\\n&lt;/dependency&gt;\\n<\\/pre>',new N5(v.a)).a),Umc(o,(Dnc(),Cnc)),o),F6(a.A)),a.F.b=m,m),F6(a.v)),Ykb(f,(p=new htb(2),ftb(p,(w=new Otc,w.a+='CommandServiceController',new N5(w.a)).a),jw(p.L,NJc,OJc),p),F6(a.C)),Ykb(f,(q=new htb(2),ftb(q,(A=new Otc,A.a+='InputFile server side support',new N5(A.a)).a),jw(q.L,NJc,OJc),q),F6(a.e)),a.F.j=f,f),F6(a.i));return c}\nx3(663,46,JJc);var RZ=mrc(yIc,'SpringPage',663,ZU);x3(913,663,KJc,udc);_.uh=function vdc(a,b){A$b(this);b.xe(this)};var MZ=mrc(yIc,'SpringPage_Injector',913,RZ);x3(1007,1,{},xdc);var OZ=mrc(yIc,'SpringPage_SpringPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets',1007,G1);x3(1008,1,MFc,ydc);_.jf=function zdc(a){sdc(this.a.F,a)};var NZ=mrc(yIc,'SpringPage_SpringPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets/1',1008,G1);var Fdc;x3(662,1,eIc);_.Je=function Pdc(){var a;!(f5(),Fdc)&&(Fdc=new udc);a=new D$b;ijb(a,Fdc);bjb(this.a,a)};kEc(Vt)(17);\n//# sourceURL=Documentation-17.js\n")