parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"sQRd":[function(require,module,exports) {
function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){for(var h=0;h<i.length;h++){var o=i[h];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function h(t,h,o){return h&&i(t.prototype,h),o&&i(t,o),t}function o(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];function h(t,i,h,o,e){var s=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=t.body;i.setScale(.7),i.setActive(!0),i.setVisible(!0);var p=Math.cos(t.rotation+h)*e,n=sin(t.rotation+h)*e;i.setVelocityX(a.velocity.x*o-p),i.setVelocityY(a.velocity.y*o-n),s&&(i.setVelocityX(-1*i.body.velocity.x),i.setVelocityY(-1*i.body.velocity.y)),i.setDepth(-1),i.shooter=t.texture.key}var o=badshots;"player1"!==t.texture.key&&"player2"!==t.texture.key||(o=goodshots);var e=t.body;if(t.active&&t.visible)if(i)for(var s=0,a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];s<a.length;s++){var p=a[s],n=o.get(e.position.x+t.width/2,e.position.y+t.height/2);n&&h(t,n,(p-.5)*(pi/16),.1,100,!0)}else{var r=o.get(e.position.x+t.width/2,e.position.y+t.height/2);r&&h(t,r,pi/2,.3,600)}}function e(t,i,h,o,e){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:.5,a=pmath.Angle.Between(i,h,o,e);if(min=pmath.Angle.Normalize(t-s),max=pmath.Angle.Normalize(t+s),a=pmath.Angle.Normalize(a),max-min<0){min;min=max,max=min}return min<a&&max>a}function s(t,i,h,o){var e=pmath.Angle.Between(t.ph.body.position.x,t.ph.body.position.y,i,h),s=pmath.Angle.RotateTo(t.ph.rotation,e,o);t.ph.setRotation(s+pi/2),t.ph.setAngle(180/pi*(s+pi/2))}function a(t,i,h,o,e,a){s(t,i,h,a),t.move(o,0,e,!1)}function p(t,i,h,o,s,a){var p=(Date.now()-this.createTime+this.nonceTime)/500;this.rotate(sin(p-pi/4)),this.move(10,3,200,!1);var n=ships;demoMode&&(n=[demoShip]);var r=!0,y=!1,l=void 0;try{for(var v,d=n[Symbol.iterator]();!(r=(v=d.next()).done);r=!0)sh=v.value,sh.ph.active&&sh.ph.visible&&e(this.ph.rotation-pi/2,this.ph.body.position.x,this.ph.body.position.y,sh.ph.body.position.x,sh.ph.body.position.y,.1)&&pmath.Between(0,2e4)<300&&this.shoot(!1)}catch(b){y=!0,l=b}finally{try{r||null==d.return||d.return()}finally{if(y)throw l}}}function n(t,i,h,o,e,p){if(void 0===this.targetShip||!1===this.targetShip.ph.active)return this.targetShip=ships[Math.floor(Math.random(2))],void(void 0===this.targetShip&&(this.targetShip={ph:{active:!1}}));var n=this.targetShip.ph.body.position.x-this.ph.body.position.x,r=this.targetShip.ph.body.position.y-this.ph.body.position.y,y=Math.sqrt(Math.pow(n,2)+Math.pow(r,2));s(this,this.targetShip.ph.body.position.x,this.targetShip.ph.body.position.y,60),y>100?(a(this,this.targetShip.ph.body.position.x,this.targetShip.ph.body.position.y,2,120,60),pmath.Between(0,6e3)>5990&&this.shoot(!1)):y<80&&this.move(5,0,100,!0)}function r(t,i,h,o,e,s){this.ph.body.position.x===this.ptx&&this.ph.body.position.y===this.pty&&(this.ptx=pmath.Between(100,700),this.pty=pmath.Between(100,500)),a(this,this.ptx,this.pty,5,400,10)}function y(t,i,h,o,e,p){var n=this.targetShip.ph.body.position.x-this.ph.body.position.x,r=this.targetShip.ph.body.position.y-this.ph.body.position.y,y=Math.sqrt(Math.pow(n,2)+Math.pow(r,2)),l=offscreen(this.ph.body.position.x,this.ph.body.position.y);if(!1!==this.targetShip.ph.active)if((y<300||l)&&null==this.ptx&&null==this.pty&&(this.ptx=pmath.Between(100,700),this.pty=pmath.Between(100,500)),y<300||l){var v=this.ph.body.position.x,d=this.ph.body.position.y,b=Math.abs(v-this.ptx),c=Math.abs(d-this.pty);b<30&&c<30&&(this.ptx=pmath.Between(100,700),this.pty=pmath.Between(100,500)),a(this,this.ptx,this.pty,20,300,10)}else this.ptx=null,this.pty=null,s(this,this.targetShip.ph.body.position.x,this.targetShip.ph.body.position.y,10),this.move(3,2,20,!1),pmath.Between(0,6e3)>5990&&this.shoot(!1);else this.targetShip=ships[Math.floor(Math.random(2))]}function l(t,i,h,o,e,p){if(!1!==this.targetShip.ph.active){this.ptx&&this.pty&&a(this,this.ptx,this.pty,10,400,10);var n=this.ph.body.position.x,r=this.ph.body.position.y,y=Math.abs(n-this.ptx),l=Math.abs(r-this.pty);if(y<30&&l<30&&(this.ptx=!1,this.pty=!1),y=Math.abs(n-this.targetShip.ph.body.position.x),l=Math.abs(r-this.targetShip.ph.body.position.y),y>300&&l>300){var v=pmath.Between(-100,-50);this.targetShip.ph.body.position.x-this.ptx<0&&(v=pmath.Between(50,100)),this.ptx=this.targetShip.ph.body.position.x+v,this.pty=this.targetShip.ph.body.position.y}this.ptx&&this.pty||(s(this,this.targetShip.ph.body.x,this.targetShip.ph.body.y,10),this.move(3,0,200,!0),this.burst=this.burst||10,this.burst<10&&(this.shoot(!1),this.burst=this.burst+1),pmath.Between(0,1e5)<300&&(this.burst=1))}else this.targetShip=ships[Math.floor(Math.random(2))]}var v=function(){function i(h,o,e,s,a){t(this,i),this.ph=h,this.scale=s,this.vel_max=500,this.shotspeed=1e3,this.rotate(a)}return h(i,[{key:"update",value:function(t,i){var h=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],e=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]&&arguments[5];o?this.move(10,3,this.vel_max,!0):h&&this.move(10,3,this.vel_max,!1),s?this.rotate(-5):e&&this.rotate(5),(t||i)&&this.shoot(i)}},{key:"move",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,h=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.vel_max,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],e=this.ph.rotation,s=Math.cos(e+Math.PI/2)*t,a=Math.sin(e+Math.PI/2)*t;Math.cos(e+Math.PI/2),Math.sin(e+Math.PI/2);o?this.accel(s,a,h):this.accel(-s,-a,h),this.decel(i)}},{key:"accel",value:function(t,i,h){var o=this.ph.body.velocity.x+t+1e-6,e=this.ph.body.velocity.y+i+1e-6,s=o*h/Math.sqrt(Math.pow(o,2)+Math.pow(e,2)),a=e*h/Math.sqrt(Math.pow(o,2)+Math.pow(e,2));Math.abs(s)<Math.abs(o)&&(o=s),Math.abs(a)<Math.abs(e)&&(e=a),this.ph.setVelocityX(o),this.ph.setVelocityY(e)}},{key:"decel",value:function(t){var i=this.ph.body.velocity.x,h=this.ph.body.velocity.y,o=Math.abs(i)+1e-5,e=Math.abs(h)+1e-5,s=Math.sqrt(Math.pow(o,2)+Math.pow(e,2)),a=Math.max(s-t,0),p=a*i/s,n=a*h/s,r=Math.max,y=Math.max;i<0&&(r=Math.min),h<0&&(y=Math.min),i=r(p,0),h=y(n,0),this.ph.setVelocityX(i),this.ph.setVelocityY(h)}},{key:"rotate",value:function(t){var i=this.ph.angle+t;i>180&&(i-=360),i<-180&&(i+=360),this.ph.setAngle(i),i=i/180*Math.PI,this.ph.setRotation(i)}},{key:"scale",value:function(t){}},{key:"shoot",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t?o(this.ph,t):o(this.ph)}}]),i}();
},{}]},{},["sQRd"], null)
//# sourceMappingURL=/ship.2465e00a.js.map