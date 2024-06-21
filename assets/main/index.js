System.register("chunks:///_virtual/BackgroundScroller.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,r,n,o,a,c,s,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,c=e.Node,s=e.view,u=e.Component}],execute:function(){var l,g,h,d,p,b,k,f;o._RF.push({},"2e2a7GkC+5OVav58tKiMTem","BackgroundScroller",void 0);var y=a.ccclass,v=a.property;e("BackgroundScroller",(l=y("BackgroundScroller"),g=v(c),h=v(c),l((b=t((p=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,r(t,"background1",b,n(t)),r(t,"background2",k,n(t)),r(t,"speed",f,n(t)),t.bgHeight=0,t.isPlayerLaunched=!1,t}i(t,e);var o=t.prototype;return o.onLoad=function(){var e=s.getVisibleSize();this.bgHeight=e.height,this.background1.setPosition(0,0,0),this.background2.setPosition(0,this.bgHeight,0)},o.update=function(e){this.isPlayerLaunched&&(this.moveBackground(this.background1,e),this.moveBackground(this.background2,e),this.resetBackground(this.background1),this.resetBackground(this.background2))},o.moveBackground=function(e,t){var i=e.position.y-this.speed*t;e.setPosition(0,i,0)},o.resetBackground=function(e){e.position.y<=-this.bgHeight&&e.setPosition(0,this.bgHeight,0)},o.startScrolling=function(){this.isPlayerLaunched=!0},o.stopScrolling=function(){this.isPlayerLaunched=!1},t}(u)).prototype,"background1",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=t(p.prototype,"background2",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=t(p.prototype,"speed",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 100}}),d=p))||d));o._RF.pop()}}}));

System.register("chunks:///_virtual/BeanFall.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var e,t,n,o,a,s,r,l,c,h,u,d,y,p,g;return{setters:[function(i){e=i.applyDecoratedDescriptor,t=i.inheritsLoose,n=i.initializerDefineProperty,o=i.assertThisInitialized},function(i){a=i.cclegacy,s=i._decorator,r=i.Node,l=i.PhysicsSystem2D,c=i.RigidBody2D,h=i.Animation,u=i.Collider2D,d=i.Contact2DType,y=i.UITransform,p=i.Vec2,g=i.Component}],execute:function(){var f,B,m,w,b,T,v;a._RF.push({},"34dfcZ0+JBJ+oLulcsAF4Cl","BeanFall",void 0);var C=s.ccclass,A=s.property;i("BeanFall",(f=C("BeanFall"),B=A(r),m=A(r),f((T=e((b=function(i){function e(){for(var e,t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return e=i.call.apply(i,[this].concat(a))||this,n(e,"bean",T,o(e)),n(e,"seesaw",v,o(e)),e.rigidBody=null,e.seesawCollider=null,e.seesawAnimation=null,e}t(e,i);var a=e.prototype;return a.onLoad=function(){l.instance.enable||(l.instance.enable=!0),this.rigidBody=this.bean.getComponent(c),this.rigidBody?(this.rigidBody.gravityScale=0,this.node.on(r.EventType.TOUCH_START,this.onTouchStart,this),this.seesawAnimation=this.seesaw.getComponent(h)):console.error("RigidBody2D component is not found on the bean.")},a.onDestroy=function(){var i=this.bean.getComponent(u);i&&i.off(d.BEGIN_CONTACT,this.onBeginContact,this),this.node.off(r.EventType.TOUCH_START,this.onTouchStart,this)},a.onTouchStart=function(i){this.scheduleOnce(this.startFalling,0)},a.startFalling=function(){if(this.rigidBody){var i=this.bean.scale,e=5*(i.x*i.y*i.z);this.rigidBody.fixedRotation=!0,this.rigidBody.gravityScale=50*e}},a.onBeginContact=function(i,e,t){if(e.node===this.seesaw){var n=this.bean.getWorldPosition(),o=this.seesaw.getWorldPosition(),a=this.seesaw.getComponent(y).height;n.y>o.y+a/2?this.playSeesawAnimation():n.y<o.y-a/2&&this.stopBean()}},a.playSeesawAnimation=function(){this.seesawAnimation&&this.seesawAnimation.play()},a.stopBean=function(){this.rigidBody.gravityScale=0,this.rigidBody.linearVelocity=new p(0,0)},e}(g)).prototype,"bean",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=e(b.prototype,"seesaw",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=b))||w));a._RF.pop()}}}));

System.register("chunks:///_virtual/CameraFollow.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var i,t,o,r,n,l,a,s,c,u;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,o=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){n=e.cclegacy,l=e._decorator,a=e.Node,s=e.view,c=e.Vec3,u=e.Component}],execute:function(){var f,h,p,g,y,w,d;n._RF.push({},"85949WuEmJLDLqANdmVNYWB","CameraFollow",void 0);var b=l.ccclass,m=l.property;e("CameraFollow",(f=b("CameraFollow"),h=m(a),f((y=i((g=function(e){function i(){for(var i,t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return i=e.call.apply(e,[this].concat(n))||this,o(i,"player",y,r(i)),o(i,"offset",w,r(i)),o(i,"followSpeed",d,r(i)),i.screenHeight=0,i.halfScreenHeight=0,i.isFollowing=!1,i}t(i,e);var n=i.prototype;return n.onLoad=function(){this.screenHeight=s.getVisibleSize().height,this.halfScreenHeight=this.screenHeight/2},n.update=function(e){if(this.isFollowing&&this.player){var i=this.player.getWorldPosition(),t=this.node.getWorldPosition();if(i.y>this.halfScreenHeight){var o=t.y+(i.y+this.offset.y-t.y)*e*this.followSpeed;Math.abs(o-t.y)>.01&&this.node.setWorldPosition(new c(t.x,o,t.z))}}},n.setFollowing=function(e){this.isFollowing=e},i}(u)).prototype,"player",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=i(g.prototype,"offset",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new c(0,0,0)}}),d=i(g.prototype,"followSpeed",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),p=g))||p));n._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Global.ts"],(function(t){var n,e,a,r,o,i,l,u,s,c,p;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,a=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){o=t.cclegacy,i=t._decorator,l=t.Label,u=t.Button,s=t.director,c=t.Component},function(t){p=t.Global}],execute:function(){var y,b,f,h,g,m,C;o._RF.push({},"4ba65pFmQlEua9BI9cVb/Cz","GameManager",void 0);var d=i.ccclass,B=i.property;t("GameManager",(y=d("GameManager"),b=B(l),f=B(u),y((m=n((g=function(t){function n(){for(var n,e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];return n=t.call.apply(t,[this].concat(o))||this,a(n,"playCountLabel",m,r(n)),a(n,"startButton",C,r(n)),n}e(n,t);var o=n.prototype;return o.onLoad=function(){p.playCount>0?this.playCountLabel.string="Bạn có "+p.playCount+" lượt":this.playCountLabel.string="Bạn đã hết lượt chơi",this.startButton?this.startButton.node.on(u.EventType.CLICK,this.startGame,this):console.error("Start button is not assigned.")},o.onDestroy=function(){},o.startGame=function(){p.playCount>0&&s.loadScene("InGame")},n}(c)).prototype,"playCountLabel",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=n(g.prototype,"startButton",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=g))||h));o._RF.pop()}}}));

System.register("chunks:///_virtual/Global.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){var t,n,r,e;return{setters:[function(o){t=o.inheritsLoose},function(o){n=o.cclegacy,r=o._decorator,e=o.Component}],execute:function(){var l,a;n._RF.push({},"27043dFL7hPLpqDoQAQm5ww","Global",void 0);var c=r.ccclass;r.property,o("Global",c("Global")(((a=function(o){function n(){return o.apply(this,arguments)||this}return t(n,o),n}(e)).playCount=Math.floor(4*Math.random())+3,a.totalPoints=0,l=a))||l);n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Global.ts","./BackgroundScroller.ts","./GameManager.ts","./BeanFall.ts","./CameraFollow.ts","./ScreenTouchHandler.ts"],(function(){return{setters:[null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/ScreenTouchHandler.ts",["./rollupPluginModLoBabelHelpers.js","cc","./CameraFollow.ts","./Global.ts"],(function(t){var i,e,n,a,o,s,l,r,c,h,u,g,p,y,f,b,d,m,w,S,P;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){o=t.cclegacy,s=t._decorator,l=t.Node,r=t.Label,c=t.Button,h=t.RigidBody2D,u=t.Collider2D,g=t.Contact2DType,p=t.director,y=t.tween,f=t.Vec3,b=t.view,d=t.UITransform,m=t.ERigidBody2DType,w=t.Component},function(t){S=t.CameraFollow},function(t){P=t.Global}],execute:function(){var I,T,v,C,R,B,O,E,L,z,D,F,A,N,_,x,H,G,U,j,M,V,k,q,J;o._RF.push({},"13d51fEuJlA95W98jZ0znPA","ScreenTouchHandler",void 0);var K=s.ccclass,W=s.property;t("ScreenTouchHandler",(I=K("ScreenTouchHandler"),T=W(l),v=W(l),C=W(l),R=W(l),B=W(l),O=W(l),E=W(r),L=W(c),z=W(l),D=W(r),F=W(r),I((_=i((N=function(t){function i(){for(var i,e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return i=t.call.apply(t,[this].concat(o))||this,n(i,"bean",_,a(i)),n(i,"seesaw",x,a(i)),n(i,"legOfSeesaw",H,a(i)),n(i,"grass",G,a(i)),n(i,"player",U,a(i)),n(i,"camera",j,a(i)),n(i,"resultLabel",M,a(i)),n(i,"replayButton",V,a(i)),n(i,"accumulatedPoints",k,a(i)),n(i,"point",q,a(i)),n(i,"tornLabel",J,a(i)),i.minScale=1,i.maxScale=5,i.duration=4,i.rigidBean=null,i.rigidSeesaw=null,i.scalingTween=null,i.isPlayerLaunched=!1,i.beanInitialPosition=null,i.beanInitialRotation=null,i.seesawInitialPosition=null,i.seesawInitialRotation=null,i.legOfSeesawInitialPosition=null,i.legOfSeesawInitialRotation=null,i.grassInitialPosition=null,i.grassInitialRotation=null,i.playerInitialPosition=null,i.cameraInitialPosition=null,i}e(i,t);var o=i.prototype;return o.onLoad=function(){this.onInitData(),this.onInitController()},o.onInitController=function(){this.node.on(l.EventType.TOUCH_START,this.onTouchStart,this),this.node.on(l.EventType.TOUCH_END,this.onTouchEnd,this),this.rigidBean=this.bean.getComponent(h),this.rigidSeesaw=this.seesaw.getComponent(h),this.rigidBean.gravityScale=0,this.bean.getComponent(u).on(g.BEGIN_CONTACT,this.onBeginContact,this),this.replayButton.node.on(c.EventType.CLICK,this.replayGame,this)},o.onInitData=function(){this.resultLabel.node.active=!1,this.replayButton.node.active=!1,this.accumulatedPoints.active=!1,this.beanInitialPosition=this.bean.getPosition().clone(),this.beanInitialRotation=this.bean.getPosition().clone(),this.seesawInitialPosition=this.seesaw.getPosition().clone(),this.seesawInitialRotation=this.seesaw.eulerAngles.clone(),this.legOfSeesawInitialPosition=this.legOfSeesaw.getPosition().clone(),this.legOfSeesawInitialRotation=this.legOfSeesaw.eulerAngles.clone(),this.grassInitialPosition=this.grass.getPosition().clone(),this.grassInitialRotation=this.grass.eulerAngles.clone(),this.playerInitialPosition=this.player.getPosition().clone(),this.cameraInitialPosition=this.camera.getPosition().clone()},o.onDestroy=function(){this.node.off(l.EventType.TOUCH_START,this.onTouchStart,this),this.node.off(l.EventType.TOUCH_END,this.onTouchEnd,this);var t=this.bean.getComponent(u);t&&t.off(g.BEGIN_CONTACT,this.onBeginContact,this)},o.replayGame=function(){if(P.playCount>0){this.player.setPosition(this.playerInitialPosition),this.camera.setPosition(this.cameraInitialPosition);var t=this.camera.getComponent(S);t&&t.setFollowing(!1),this.resetNodes(),this.resultLabel.node.active=!1,this.replayButton.node.active=!1}else p.loadScene("StartGame")},o.onTouchStart=function(){this.startScaling()},o.onTouchEnd=function(){this.stopScaling()},o.startScaling=function(){this.bean&&(this.scalingTween&&this.scalingTween.stop(),P.playCount--,this.tornLabel.string=""+P.playCount.toString(),this.scalingTween=y(this.bean).to(this.duration,{scale:new f(this.maxScale,this.maxScale,this.maxScale)}).to(this.duration,{scale:new f(this.minScale,this.minScale,this.minScale)}).union().repeatForever().start())},o.stopScaling=function(){this.scalingTween&&(this.scalingTween.stop(),this.scalingTween=null);var t=this.bean.scale,i=10*(t.x*t.y*t.z);this.rigidBean.fixedRotation=!0,this.rigidBean.gravityScale=i},o.onBeginContact=function(t,i,e){i.node===this.seesaw&&this.launchPlayer()},o.launchPlayer=function(){var t=this;if(!this.isPlayerLaunched){this.isPlayerLaunched=!0;var i=this.bean.scale.x,e=Math.floor((i-this.minScale)/(this.maxScale-this.minScale)*8+1);P.totalPoints+=e;var n=b.getVisibleSize().height,a=this.player.getPosition().clone(),o=this.player.getComponent(d).height*this.player.scale.y,s=e*n+o;a.y+=s,y(this.player).to(1,{position:a},{easing:"quadOut"}).call((function(){y(t.node).delay(1).call((function(){t.showResult(e),t.resetNodes()})).start()})).start();var l=this.camera.getComponent(S);l&&(l.player=this.player,l.setFollowing(!0))}},o.showResult=function(t){this.resultLabel.node.active=!0,this.replayButton.node.active=!0,this.accumulatedPoints.active=!0,this.resultLabel.string="+"+t+" điểm",this.point.string=""+P.totalPoints},o.resetNodes=function(){this.rigidBean.gravityScale=0,this.rigidBean.type=m.Static,this.rigidSeesaw.type=m.Static,this.bean.setPosition(this.beanInitialPosition),this.bean.setRotationFromEuler(this.beanInitialRotation),this.bean.setScale(new f(this.minScale,this.minScale,this.minScale)),this.seesaw.setPosition(this.seesawInitialPosition),this.seesaw.setRotationFromEuler(this.seesawInitialRotation),this.legOfSeesaw.setPosition(this.legOfSeesawInitialPosition),this.legOfSeesaw.setRotationFromEuler(this.legOfSeesawInitialRotation),this.grass.setPosition(this.grassInitialPosition),this.grass.setRotationFromEuler(this.grassInitialRotation),this.rigidBean.type=m.Dynamic,this.rigidSeesaw.type=m.Dynamic,this.isPlayerLaunched=!1},i}(w)).prototype,"bean",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=i(N.prototype,"seesaw",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=i(N.prototype,"legOfSeesaw",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=i(N.prototype,"grass",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=i(N.prototype,"player",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=i(N.prototype,"camera",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=i(N.prototype,"resultLabel",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=i(N.prototype,"replayButton",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=i(N.prototype,"accumulatedPoints",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),q=i(N.prototype,"point",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),J=i(N.prototype,"tornLabel",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=N))||A));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
//# sourceMappingURL=index.js.map