System.register("chunks:///_virtual/BeanFall.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var e,t,n,o,a,s,r,l,c,h,u,d,y,p,g;return{setters:[function(i){e=i.applyDecoratedDescriptor,t=i.inheritsLoose,n=i.initializerDefineProperty,o=i.assertThisInitialized},function(i){a=i.cclegacy,s=i._decorator,r=i.Node,l=i.PhysicsSystem2D,c=i.RigidBody2D,h=i.Animation,u=i.Collider2D,d=i.Contact2DType,y=i.UITransform,p=i.Vec2,g=i.Component}],execute:function(){var f,B,m,w,b,T,v;a._RF.push({},"34dfcZ0+JBJ+oLulcsAF4Cl","BeanFall",void 0);var C=s.ccclass,A=s.property;i("BeanFall",(f=C("BeanFall"),B=A(r),m=A(r),f((T=e((b=function(i){function e(){for(var e,t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return e=i.call.apply(i,[this].concat(a))||this,n(e,"bean",T,o(e)),n(e,"seesaw",v,o(e)),e.rigidBody=null,e.seesawCollider=null,e.seesawAnimation=null,e}t(e,i);var a=e.prototype;return a.onLoad=function(){l.instance.enable||(l.instance.enable=!0),this.rigidBody=this.bean.getComponent(c),this.rigidBody?(this.rigidBody.gravityScale=0,this.node.on(r.EventType.TOUCH_START,this.onTouchStart,this),this.seesawAnimation=this.seesaw.getComponent(h)):console.error("RigidBody2D component is not found on the bean.")},a.onDestroy=function(){var i=this.bean.getComponent(u);i&&i.off(d.BEGIN_CONTACT,this.onBeginContact,this),this.node.off(r.EventType.TOUCH_START,this.onTouchStart,this)},a.onTouchStart=function(i){this.scheduleOnce(this.startFalling,0)},a.startFalling=function(){if(this.rigidBody){var i=this.bean.scale,e=5*(i.x*i.y*i.z);this.rigidBody.fixedRotation=!0,this.rigidBody.gravityScale=50*e}},a.onBeginContact=function(i,e,t){if(e.node===this.seesaw){var n=this.bean.getWorldPosition(),o=this.seesaw.getWorldPosition(),a=this.seesaw.getComponent(y).height;n.y>o.y+a/2?this.playSeesawAnimation():n.y<o.y-a/2&&this.stopBean()}},a.playSeesawAnimation=function(){this.seesawAnimation&&this.seesawAnimation.play()},a.stopBean=function(){this.rigidBody.gravityScale=0,this.rigidBody.linearVelocity=new p(0,0)},e}(g)).prototype,"bean",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=e(b.prototype,"seesaw",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=b))||w));a._RF.pop()}}}));

System.register("chunks:///_virtual/CameraFollow.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,r,o,n,l,a,s,c,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,l=e._decorator,a=e.Node,s=e.view,c=e.Vec3,u=e.Component}],execute:function(){var f,p,h,y,d,g,w;n._RF.push({},"85949WuEmJLDLqANdmVNYWB","CameraFollow",void 0);var b=l.ccclass,m=l.property;e("CameraFollow",(f=b("CameraFollow"),p=m(a),f((d=t((y=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return t=e.call.apply(e,[this].concat(n))||this,r(t,"player",d,o(t)),r(t,"offset",g,o(t)),r(t,"followSpeed",w,o(t)),t.screenHeight=0,t.halfScreenHeight=0,t}i(t,e);var n=t.prototype;return n.onLoad=function(){this.screenHeight=s.getVisibleSize().height,this.halfScreenHeight=this.screenHeight/2},n.update=function(e){if(this.player){var t=this.player.getWorldPosition(),i=this.node.getWorldPosition();if(t.y>this.halfScreenHeight){var r=i.y+(t.y+this.offset.y-i.y)*e*this.followSpeed;this.node.setWorldPosition(new c(i.x,r,i.z))}}},t}(u)).prototype,"player",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=t(y.prototype,"offset",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new c(0,0,0)}}),w=t(y.prototype,"followSpeed",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),h=y))||h));n._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Global.ts"],(function(t){var n,e,a,r,o,i,l,u,s,c,p;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,a=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){o=t.cclegacy,i=t._decorator,l=t.Label,u=t.Button,s=t.director,c=t.Component},function(t){p=t.Global}],execute:function(){var y,b,f,h,g,m,C;o._RF.push({},"4ba65pFmQlEua9BI9cVb/Cz","GameManager",void 0);var d=i.ccclass,B=i.property;t("GameManager",(y=d("GameManager"),b=B(l),f=B(u),y((m=n((g=function(t){function n(){for(var n,e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];return n=t.call.apply(t,[this].concat(o))||this,a(n,"playCountLabel",m,r(n)),a(n,"startButton",C,r(n)),n}e(n,t);var o=n.prototype;return o.onLoad=function(){p.playCount>0?this.playCountLabel.string="Bạn có "+p.playCount+" lượt":this.playCountLabel.string="Bạn đã hết lượt chơi",this.startButton?this.startButton.node.on(u.EventType.CLICK,this.startGame,this):console.error("Start button is not assigned.")},o.onDestroy=function(){},o.startGame=function(){p.playCount>0&&s.loadScene("InGame")},n}(c)).prototype,"playCountLabel",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=n(g.prototype,"startButton",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=g))||h));o._RF.pop()}}}));

System.register("chunks:///_virtual/Global.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){var t,n,r,e;return{setters:[function(o){t=o.inheritsLoose},function(o){n=o.cclegacy,r=o._decorator,e=o.Component}],execute:function(){var l,a;n._RF.push({},"27043dFL7hPLpqDoQAQm5ww","Global",void 0);var c=r.ccclass;r.property,o("Global",c("Global")(((a=function(o){function n(){return o.apply(this,arguments)||this}return t(n,o),n}(e)).playCount=Math.floor(4*Math.random())+3,l=a))||l);n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Global.ts","./GameManager.ts","./BeanFall.ts","./CameraFollow.ts","./ScreenTouchHandler.ts"],(function(){return{setters:[null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/ScreenTouchHandler.ts",["./rollupPluginModLoBabelHelpers.js","cc","./CameraFollow.ts","./Global.ts"],(function(e){var t,n,i,o,a,r,l,s,c,h,u,p,d,y,f,T,b,g,m;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){a=e.cclegacy,r=e._decorator,l=e.Node,s=e.Label,c=e.Button,h=e.RigidBody2D,u=e.Collider2D,p=e.Contact2DType,d=e.director,y=e.tween,f=e.Vec3,T=e.view,b=e.Component},function(e){g=e.CameraFollow},function(e){m=e.Global}],execute:function(){var S,C,v,w,B,E,L,_,H,z,D,A,O,P,R;a._RF.push({},"13d51fEuJlA95W98jZ0znPA","ScreenTouchHandler",void 0);var x=r.ccclass,N=r.property;e("ScreenTouchHandler",(S=x("ScreenTouchHandler"),C=N(l),v=N(l),w=N(l),B=N(l),E=N(s),L=N(c),S((z=t((H=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return t=e.call.apply(e,[this].concat(a))||this,i(t,"bean",z,o(t)),i(t,"seesaw",D,o(t)),i(t,"player",A,o(t)),i(t,"camera",O,o(t)),i(t,"resultLabel",P,o(t)),i(t,"replayButton",R,o(t)),t.minScale=1,t.maxScale=5,t.duration=4,t.rigidBody=null,t.scalingTween=null,t.isPlayerLaunched=!1,t}n(t,e);var a=t.prototype;return a.onLoad=function(){if(m.playCount--,this.resultLabel&&(this.resultLabel.node.active=!1),this.replayButton&&(this.replayButton.node.active=!1),this.node.on(l.EventType.TOUCH_START,this.onTouchStart,this),this.node.on(l.EventType.TOUCH_END,this.onTouchEnd,this),this.node.on(l.EventType.TOUCH_CANCEL,this.onTouchEnd,this),this.rigidBody=this.bean.getComponent(h),this.rigidBody){this.rigidBody.gravityScale=0,this.node.on(l.EventType.TOUCH_START,this.onTouchStart,this);var e=this.bean.getComponent(u);e?e.on(p.BEGIN_CONTACT,this.onBeginContact,this):console.error("Collider2D component is not found on the bean."),this.replayButton.node.on(c.EventType.CLICK,this.replayGame,this)}else console.error("RigidBody2D component is not found on the bean.")},a.onDestroy=function(){this.node.off(l.EventType.TOUCH_START,this.onTouchStart,this),this.node.off(l.EventType.TOUCH_END,this.onTouchEnd,this),this.node.off(l.EventType.TOUCH_CANCEL,this.onTouchEnd,this);var e=this.bean.getComponent(u);e&&e.off(p.BEGIN_CONTACT,this.onBeginContact,this)},a.replayGame=function(){d.loadScene("StartGame")},a.onTouchStart=function(){this.startScaling()},a.onTouchEnd=function(){this.stopScaling()},a.startScaling=function(){this.bean?(this.scalingTween&&this.scalingTween.stop(),this.scalingTween=y(this.bean).to(this.duration,{scale:new f(this.maxScale,this.maxScale,this.maxScale)}).to(this.duration,{scale:new f(this.minScale,this.minScale,this.minScale)}).union().repeatForever().start()):console.error("Button node is not set.")},a.stopScaling=function(){this.scalingTween&&(this.scalingTween.stop(),this.scalingTween=null);var e=this.bean.scale,t=10*(e.x*e.y*e.z);this.rigidBody.fixedRotation=!0,this.rigidBody.gravityScale=t},a.onBeginContact=function(e,t,n){t.node===this.seesaw&&this.launchPlayer()},a.launchPlayer=function(){var e=this;if(this.player){if(!this.isPlayerLaunched){this.isPlayerLaunched=!0;var t=(this.bean.scale.x-this.minScale)/(this.maxScale-this.minScale)*8+1,n=Math.floor(t),i=T.getVisibleSize().height,o=this.player.getPosition().clone();o.y+=n*i,y(this.player).to(1,{position:o},{easing:"quadOut"}).call((function(){e.showResultLabel(n)})).start();var a=this.camera.getComponent(g);a&&(a.player=this.player)}}else console.error("Player node is not set.")},a.showResultLabel=function(e){this.resultLabel&&(this.resultLabel.node.active=!0,this.resultLabel.string="+ "+e+" điểm"),this.replayButton&&(this.replayButton.node.active=!0)},t}(b)).prototype,"bean",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=t(H.prototype,"seesaw",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=t(H.prototype,"player",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=t(H.prototype,"camera",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=t(H.prototype,"resultLabel",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=t(H.prototype,"replayButton",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=H))||_));a._RF.pop()}}}));

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