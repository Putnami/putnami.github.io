$wnd.Documentation.runAsyncCallback8("function Yic(){}\nfunction hjc(){this.a=new GAc}\nfunction cjc(){_ic();qhb.call(this,o_)}\nfunction jfb(a){return drc((brc(),arc),a)}\nfunction yfb(a){if(!a){return true}return uE(a,new BE)}\nfunction uE(a,b){return Y3(U3(a.r.getTime()),U3(b.r.getTime()))}\nfunction Bfb(a,b){var c;c=F5(a.a,b);if(!c){return false}return c[0].length==b.length}\nfunction zfb(){ffb();gfb.call(this,'{javax.validation.constraints.Past.message}')}\nfunction kfb(){ffb();gfb.call(this,'{javax.validation.constraints.AssertTrue.message}')}\nfunction tfb(a){ffb();gfb.call(this,'{javax.validation.constraints.Max.message}');this.a=V3(a.a)}\nfunction Cfb(){ffb();gfb.call(this,'{javax.validation.constraints.Pattern.message}');this.a=new RegExp(aPc,'');this.b=aPc}\nfunction jjc(){var a;pab(this,ljc(new mjc(this)));a=new Veb(new hjc);Elb(this.a,a);Clb(this.a,new cjc,TF(RF(DN,1),nNc,51,0,[]))}\nfunction njc(a,b){var c;c=new duc;c.a+=UGc;auc(c,X5(a));c.a+=TGc;auc(c,X5(b));c.a+=VGc;return new I5(c.a)}\nfunction bjc(a,b,c){mtc(bPc,b)&&(a.b=$F(c,64));mtc(cPc,b)&&(a.d=$F(c,138));mtc(dPc,b)&&(a.a=$F(c,110));mtc(pMc,b)&&(a.c=aG(c))}\nfunction ajc(a,b){if(mtc(bPc,b)){return a.b}if(mtc(cPc,b)){return a.d}if(mtc(dPc,b)){return a.a}if(mtc(pMc,b)){return a.c}return null}\nfunction sfb(a,b){if(!b){return true}return cG(b,101)?tuc($F(b,101),Quc(a.a))<=0:cG(b,58)?_uc($F(b,58),Dvc(a.a))<=0:Z3(b.Ni(),a.a)}\nfunction pjc(a,b,c,d,e,f){var g;g=new duc;g.a+=UGc;auc(g,X5(a));g.a+=TGc;auc(g,X5(b));g.a+=TGc;auc(g,X5(c));g.a+=TGc;auc(g,X5(d));g.a+=TGc;auc(g,X5(e));g.a+=TGc;auc(g,X5(f));g.a+=VGc;return new I5(g.a)}\nfunction ojc(a){var b;b=new duc;b.a+=UGc;auc(b,X5(a));b.a+=\"'><\\/span> <p class='lead'> <strong title='Putnami Web Toolkit'>PWT<\\/strong>'s bean model is compliant with commons JSR303 bean validation annotations. <\\/p>\";return new I5(b.a)}\nfunction _ic(){_ic=t3;new cjc;$ic=(Sq(),new GAc);$ic.Bd(bPc,Ahb(bPc,v2,null,TF(RF(UN,1),HEc,33,0,[new wfb,new zfb])));$ic.Bd(cPc,Ahb(cPc,w1,null,TF(RF(UN,1),HEc,33,0,[new tfb(Jsc(12))])));$ic.Bd(dPc,Ahb(dPc,k1,null,TF(RF(UN,1),HEc,33,0,[new kfb])));$ic.Bd(pMc,Ahb(pMc,H1,null,TF(RF(UN,1),HEc,33,0,[new Cfb])))}\nfunction mjc(a){this.I=a;this.B=cx($doc);this.D=cx($doc);this.G=cx($doc);this.d=cx($doc);this.f=cx($doc);this.i=cx($doc);this.c=cx($doc);this.p=cx($doc);this.s=cx($doc);this.u=cx($doc);this.w=cx($doc);this.a=cx($doc);this.n=cx($doc);this.C=new B6(this.B);this.F=new B6(this.D);this.H=new B6(this.G);this.e=new B6(this.d);this.g=new B6(this.f);this.j=new B6(this.i);this.k=new B6(this.c);this.r=new B6(this.p);this.t=new B6(this.s);this.v=new B6(this.u);this.A=new B6(this.w);this.b=new B6(this.a);this.o=new B6(this.n)}\nfunction ljc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B;c=new otb(njc(a.a,a.n).a);jw((J6(),c.L),$Gc,'PWT - Bean validation');b=D6(c.L);A6(a.b);A6(a.o);b.b?Rv(b.b,b.a,b.c):F6(b.a);Nab(c,(d=new rtb(ojc(a.c).a),e=D6(d.L),A6(a.k),e.b?Rv(e.b,e.a,e.c):F6(e.a),Nab(d,(m=new ytb(1),wtb(m,(n=new duc,n.a+=lIc,new I5(n.a)).a),m),A6(a.k)),a.I.k=d,d),A6(a.b));Nab(c,(f=new otb(qjc(a.p,a.s,a.u,a.w).a),g=D6(f.L),A6(a.r),A6(a.t),A6(a.v),A6(a.A),g.b?Rv(g.b,g.a,g.c):F6(g.a),Nab(f,(h=new ytb(2),wtb(h,(o=new duc,o.a+=NOc,new I5(o.a)).a),jw(h.L,dKc,eKc),h),A6(a.r)),Nab(f,(i=new ytb(2),wtb(i,(p=new duc,p.a+=kPc,new I5(p.a)).a),jw(i.L,dKc,eKc),i),A6(a.t)),Nab(f,(j=new lnc,knc(j,(q=new duc,q.a+='<pre>\\npublic class BeanToValidate {\\n\\n\\t@Past\\n\\t@NotNull\\n\\tprivate Date birthday;\\n\\n\\t@Max(12)\\n\\tprivate Integer monthNumber;\\n\\n\\t@AssertTrue\\n\\tprivate Boolean agree;\\n\\n\\t@Pattern(regexp = \"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\\\\\.[a-zA-Z]{2,4}$\")\\n\\tprivate String email;\\n\\t\\n\\t...\\n}<\\/pre>',new I5(q.a)).a),jnc(j,(Mnc(),Lnc)),j),A6(a.v)),Nab(f,(k=new Prb(pjc(a.B,a.D,a.G,a.d,a.f,a.i).a),l=D6(k.L),A6(a.C),A6(a.F),A6(a.H),A6(a.e),A6(a.g),A6(a.j),l.b?Rv(l.b,l.a,l.c):F6(l.a),Nab(k,(r=new bsb,r.u=bPc,r),A6(a.C)),Nab(k,(s=new bsb,s.u=cPc,s),A6(a.F)),Nab(k,(t=new bsb,t.u=pMc,t),A6(a.H)),Nab(k,(u=new bsb,u.u=dPc,u),A6(a.e)),Nab(k,(v=new zsb,Wnb(v,(w=new duc,w.a+='Reset',new I5(w.a)).a),v),A6(a.g)),Nab(k,(A=new Lsb,Wnb(A,(B=new duc,B.a+=VOc,new I5(B.a)).a),A),A6(a.j)),a.I.a=k,k),A6(a.A)),a.I.j=f,f),A6(a.o));return c}\nfunction qjc(a,b,c,d){var e;e=new duc;e.a+=UGc;auc(e,X5(a));e.a+=\"'><\\/span> In the <a href='#DataBinding'><strong title='Putnami Web Toolkit'>PWT<\\/strong>'s data binding framework<\\/a> we generate bean model. This model can handle the commons JSR303 Bean Validation annotation on fields.  <p>The supported annotations are:<\\/p> <ul> <li><code>AssertTrue<\\/code> on <code>Boolean<\\/code> fields.<\\/li> <li><code>AssertFalse<\\/code> on <code>Boolean<\\/code> fields.<\\/li> <li><code>Future<\\/code> on <code>Date<\\/code> fields.<\\/li> <li><code>Past<\\/code> on <code>Date<\\/code> fields.<\\/li> <li><code>Min<\\/code> on <code>Number<\\/code> fields.<\\/li> <li><code>Max<\\/code> on <code>Number<\\/code> fields.<\\/li> <li><code>NotNull<\\/code> on all fields.<\\/li> <li><code>Null<\\/code> on all fields.<\\/li> <li><code>Size<\\/code> on <code>String<\\/code>, <code>Collection<\\/code> or <code>Map<\\/code> fields.<\\/li> <li><code>Pattern<\\/code> on <code>String<\\/code> fields.<\\/li> <\\/ul> <p> When you use a Validation annotated bean in the data binding framework, the bean is automatically validated on editor flush. If the bean isn't valid, the flush fails and the corresponding error message is displayed near the invalid fields. <\\/p>  <span id='\";auc(e,X5(b));e.a+=\"'><\\/span> <p>You can see the result of the bean validation on flush on the following form.<\\/p> <p>We use the following bean definition :<\\/p> <span id='\";auc(e,X5(c));e.a+=\"'><\\/span>  <div class='showcase-sample-block'> <div class='showcase-sample'> <span id='\";auc(e,X5(d));e.a+=PNc;return new I5(e.a)}\nvar cPc='monthNumber',dPc='agree',ePc='Birth date',gPc='Date of birth...',hPc='monthnumber',iPc=\"Number of month until new year's eve\",jPc=\"I've tried this\";s3(955,243,$Oc,kfb);_.Jg=function lfb(a){return jfb($F(a,110))};var NN=Erc(_Oc,'AssertTrueValidator',955,MN);s3(954,243,$Oc,tfb);_.Ig=function ufb(){return TF(RF(B1,1),HEc,1,3,[Vsc(this.a)])};_.Jg=function vfb(a){return sfb(this,$F(a,175))};_.a={l:0,m:0,h:0};var PN=Erc(_Oc,'MaxValidator',954,MN);s3(953,243,$Oc,zfb);_.Jg=function Afb(a){return yfb($F(a,64))};var RN=Erc(_Oc,'PastValidator',953,MN);s3(956,243,$Oc,Cfb);_.Ig=function Dfb(){return TF(RF(B1,1),HEc,1,3,[this.b])};_.Jg=function Efb(a){var b,c;if(a==null){return true}if(gG(a)){return Bfb(this,aG(a))}if(cG(a,34)){for(c=$F(a,34).sd();c.fd();){b=c.gd();if(!gG(b)){return false}if(!Bfb(this,aG(b))){return false}}return true}return false};var SN=Erc(_Oc,'PatternValidator',956,MN);s3(1362,46,_Jc);var w_=Erc(UIc,'ValidationPage',1362,UU);s3(372,1,{372:1},Yic);var o_=Erc(UIc,'ValidationPage/BeanToValidate',372,B1);s3(526,142,{},cjc);_.mh=function djc(){return $ic};_.ph=function ejc(a,b){return ajc($F(a,372),b)};_.qh=function fjc(a,b,c){bjc($F(a,372),b,c)};_.sh=function gjc(){return new Yic};var $ic;var q_=Erc(UIc,'ValidationPage_BeanToValidate_Model',526,sO);s3(935,1,WGc,hjc);_.mf=function ijc(a){var b;b=aG(this.a.yd(a));if(b!=null){return b}if(mtc(a,bPc)){this.a.Bd(bPc,ePc);return ePc}if(mtc(a,fPc)){this.a.Bd(fPc,gPc);return gPc}if(mtc(a,hPc)){this.a.Bd(hPc,iPc);return iPc}if(mtc(a,pMc)){this.a.Bd(pMc,QOc);return QOc}if(mtc(a,ROc)){this.a.Bd(ROc,SOc);return SOc}if(mtc(a,dPc)){this.a.Bd(dPc,jPc);return jPc}if(mtc(a,CMc)){this.a.Bd(CMc,DMc);return DMc}if(mtc(a,EMc)){this.a.Bd(EMc,FMc);return FMc}if(mtc(a,GMc)){this.a.Bd(GMc,HMc);return HMc}if(mtc(a,IMc)){this.a.Bd(IMc,JMc);return JMc}if(mtc(a,KMc)){this.a.Bd(KMc,LMc);return LMc}if(mtc(a,MMc)){this.a.Bd(MMc,HMc);return HMc}if(mtc(a,NMc)){this.a.Bd(NMc,JMc);return JMc}if(mtc(a,OMc)){this.a.Bd(OMc,PMc);return PMc}if(mtc(a,QMc)){this.a.Bd(QMc,RMc);return RMc}if(mtc(a,SMc)){this.a.Bd(SMc,TMc);return TMc}if(mtc(a,UMc)){this.a.Bd(UMc,VMc);return VMc}if(mtc(a,WMc)){this.a.Bd(WMc,XMc);return XMc}if(mtc(a,YMc)){this.a.Bd(YMc,ZMc);return ZMc}if(mtc(a,$Mc)){this.a.Bd($Mc,_Mc);return _Mc}throw new rDc(aNc+a+bNc)};var r_=Erc(UIc,'ValidationPage_Constants_',935,B1);s3(901,1362,aKc,jjc);_.vh=function kjc(a,b){R$b(this);b.xe(this)};var s_=Erc(UIc,'ValidationPage_Injector',901,w_);s3(989,1,{},mjc);var t_=Erc(UIc,'ValidationPage_ValidationPageTemplateBinder_UiBinderLocalized_BinderImpl/Widgets',989,B1);var rjc;s3(641,1,wIc);_.Je=function Bjc(){var a;!(a5(),rjc)&&(rjc=new jjc);a=new U$b;yjb(a,rjc);rjb(this.a,a)};BEc(Vt)(8);\n//# sourceURL=Documentation-8.js\n")
