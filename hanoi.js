webpackJsonp([1],[function(n,t,e){function o(n){var t=new THREE.Object3D,e=new THREE.MeshPhongMaterial({color:4227327}),o=new THREE.BoxGeometry(M,y,M),i=new THREE.Mesh(o,e);i.castShadow=!0,i.position.set(0,.5*v+.5*y,0),t.add(i);var u=new THREE.MeshPhongMaterial({color:"yellow"}),a=new THREE.CylinderGeometry(x,x,H,32),c=new THREE.Mesh(a,u);c.position.y+=.5*H,t.add(c),t.name=n;var s=[];return t.newDisk=function(n){var e;e=t.topIsEven()?11184810:2236962;var o=r(n,e);return o.position.x=t.position.x,o.position.y=t.position.y+y+I*(s.length+1),o.position.z=t.position.z,s.push(o),o.index=s.length,o.radius=n,h.add(o),o},t.pushDisk=function(n){s.push(n)},t.popDisk=function(){return s.pop()},t.topIsEven=function(){return 0===s.length||s[s.length-1].index%2===0},t.topSize=function(){return 0===s.length?9999999:s[s.length-1].radius},t.count=function(){return s.length},t.moveTop=function(n,e){d=t.popDisk();var o={x:d.position.x,y:d.position.y},i={x:n.position.x,y:n.position.y+y+I*(n.count()+1)},r={x:d.position.x,y:H+.1*H},u={x:n.position.x,y:H+.1*H},a=new TWEEN.Tween(o).to(r,500/animateSpeed).onUpdate(function(){d.position.y=o.y}).easing(TWEEN.Easing.Cubic.Out),c=new TWEEN.Tween(o).to(u,1e3/animateSpeed).onUpdate(function(){d.position.x=o.x}),s=new TWEEN.Tween(o).to(i,500/animateSpeed).onUpdate(function(){d.position.y=o.y}).onComplete(function(){n.pushDisk(d),void 0!==e&&e()}).easing(TWEEN.Easing.Quadratic.Out);a.chain(c),c.chain(s),a.start()},t}function r(n,t){void 0===t&&(t=util.color_luminance("777",-.019*n));var e=new THREE.MeshPhongMaterial({color:t}),o=new THREE.CylinderGeometry(n,n,I,32),i=new THREE.Mesh(o,e);return i}function u(n,t,e){var o=new THREE.MeshPhongMaterial,i=new THREE.BoxGeometry(n,t,e),r=new THREE.Mesh(i,o);return o.color.set(8421504),r.receiveShadow=!0,r.position.set(0,0,0),r}function a(){function n(n,t,e){function o(n,t){return n.count()>0&&t.topSize()>n.topSize()&&(a[0]!=t||a[1]!=n)&&(0===t.count()||n.topIsEven()!=t.topIsEven())}function i(){if(n.count()===u)return n.topIsEven()?[n,t]:[n,e];if(o(n,t))return 0===t.count()&&o(n,e)?[n,e]:[n,t];if(o(n,e))return 0===e.count()&&o(n,t)?[n,t]:[n,e];if(o(t,n))return 0===n.count()&&o(t,e)?[t,e]:[t,n];if(o(t,e))return 0===e.count()&&o(t,n)?[t,n]:[t,e];if(o(e,n))return 0===n.count()&&o(e,t)?[e,t]:[e,n];if(o(e,t))return 0===t.count()&&o(e,n)?[e,n]:[e,t];throw new Error("No legal moves left")}function r(){t.count()!=u&&e.count()!=u?(a=i(),a[0].moveTop(a[1],r)):console.log("complete")}var u=n.count(),a=null;r()}for(f=new THREE.WebGLRenderer,h=new THREE.Scene,l=new THREE.PerspectiveCamera(35,window.innerWidth/window.innerHeight,1,1e3),cameraTarget=new THREE.Mesh(new THREE.CubeGeometry(0,0,0)),l.position.set(0,40,cameraDistance),l.lookAt(cameraTarget.position),h.add(l),h.add(u(g,v,T)),tower1=o("tower1"),tower1.position.x-=150,h.add(tower1),tower2=o("tower2"),h.add(tower2),tower3=o("tower3"),tower3.position.x+=150,h.add(tower3),i=O;i>=1;i--)tower1.newDisk(5*i);n(tower1,tower2,tower3),p=new THREE.AmbientLight(16777215,.5),h.add(p),w=new THREE.SpotLight(16777215,9),E=new THREE.SpotLightHelper(w),f.shadowMap.enabled=!0,f.shadowMap.type=THREE.PCFSoftShadowMap,f.gammaInput=!0,f.gammaOutput=!0,document.body.appendChild(f.domElement),f.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",c,!1)}function c(){f.setSize(window.innerWidth,window.innerHeight),l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix()}function s(){requestAnimationFrame(s);var n=(new Date).getTime()-m;l.position.x=cameraTarget.position.x+cameraDistance*Math.cos(rotationSpeed*n),l.position.z=cameraTarget.position.z+cameraDistance*Math.sin(rotationSpeed*n),l.position.y=cameraTarget.position.y+cameraDistance*Math.abs(Math.sin(.5*rotationSpeed*n)),l.lookAt(cameraTarget.position),console.log(l.position.x,l.position.z),f.render(h,l),E.update(),TWEEN.update()}THREE=e(2),TWEEN=e(4),util=e(1);var f,h,l,p,w,E,m=(new Date).getTime(),v=10,g=450,T=120,M=100,y=6,I=9,H=100,x=2,O=8;animateSpeed=2,rotationSpeed=1e-4,cameraDistance=600,a(),s()},,,function(n,t){function e(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(n){if(f===setTimeout)return setTimeout(n,0);if((f===e||!f)&&setTimeout)return f=setTimeout,setTimeout(n,0);try{return f(n,0)}catch(t){try{return f.call(null,n,0)}catch(t){return f.call(this,n,0)}}}function r(n){if(h===clearTimeout)return clearTimeout(n);if((h===o||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(n);try{return h(n)}catch(t){try{return h.call(null,n)}catch(t){return h.call(this,n)}}}function u(){w&&p&&(w=!1,p.length?d=p.concat(d):E=-1,d.length&&a())}function a(){if(!w){var n=i(u);w=!0;for(var t=d.length;t;){for(p=d,d=[];++E<t;)p&&p[E].run();E=-1,t=d.length}p=null,w=!1,r(n)}}function c(n,t){this.fun=n,this.array=t}function s(){}var f,h,l=n.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:e}catch(n){f=e}try{h="function"==typeof clearTimeout?clearTimeout:o}catch(n){h=o}}();var p,d=[],w=!1,E=-1;l.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];d.push(new c(n,t)),1!==d.length||w||i(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=s,l.addListener=s,l.once=s,l.off=s,l.removeListener=s,l.removeAllListeners=s,l.emit=s,l.binding=function(n){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(n){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}},function(n,t,e){var o,i;(function(e){var r=r||function(){var n=[];return{getAll:function(){return n},removeAll:function(){n=[]},add:function(t){n.push(t)},remove:function(t){var e=n.indexOf(t);e!==-1&&n.splice(e,1)},update:function(t,e){if(0===n.length)return!1;var o=0;for(t=void 0!==t?t:r.now();o<n.length;)n[o].update(t)||e?o++:n.splice(o,1);return!0}}}();!function(){void 0===this.window&&void 0!==this.process?r.now=function(){var n=e.hrtime();return 1e3*n[0]+n[1]/1e3}:void 0!==this.window&&void 0!==window.performance&&void 0!==window.performance.now?r.now=window.performance.now.bind(window.performance):void 0!==Date.now?r.now=Date.now:r.now=function(){return(new Date).getTime()}}(),r.Tween=function(n){var t=n,e={},o={},i={},u=1e3,a=0,c=!1,s=!1,f=!1,h=0,l=null,p=r.Easing.Linear.None,d=r.Interpolation.Linear,w=[],E=null,m=!1,v=null,g=null,T=null;for(var M in n)e[M]=parseFloat(n[M],10);this.to=function(n,t){return void 0!==t&&(u=t),o=n,this},this.start=function(n){r.add(this),s=!0,m=!1,l=void 0!==n?n:r.now(),l+=h;for(var u in o){if(o[u]instanceof Array){if(0===o[u].length)continue;o[u]=[t[u]].concat(o[u])}void 0!==e[u]&&(e[u]=t[u],e[u]instanceof Array==!1&&(e[u]*=1),i[u]=e[u]||0)}return this},this.stop=function(){return s?(r.remove(this),s=!1,null!==T&&T.call(t),this.stopChainedTweens(),this):this},this.stopChainedTweens=function(){for(var n=0,t=w.length;n<t;n++)w[n].stop()},this.delay=function(n){return h=n,this},this.repeat=function(n){return a=n,this},this.yoyo=function(n){return c=n,this},this.easing=function(n){return p=n,this},this.interpolation=function(n){return d=n,this},this.chain=function(){return w=arguments,this},this.onStart=function(n){return E=n,this},this.onUpdate=function(n){return v=n,this},this.onComplete=function(n){return g=n,this},this.onStop=function(n){return T=n,this},this.update=function(n){var r,s,T;if(n<l)return!0;m===!1&&(null!==E&&E.call(t),m=!0),s=(n-l)/u,s=s>1?1:s,T=p(s);for(r in o)if(void 0!==e[r]){var M=e[r]||0,y=o[r];y instanceof Array?t[r]=d(y,T):("string"==typeof y&&(y="+"===y.charAt(0)||"-"===y.charAt(0)?M+parseFloat(y,10):parseFloat(y,10)),"number"==typeof y&&(t[r]=M+(y-M)*T))}if(null!==v&&v.call(t,T),1===s){if(a>0){isFinite(a)&&a--;for(r in i){if("string"==typeof o[r]&&(i[r]=i[r]+parseFloat(o[r],10)),c){var I=i[r];i[r]=o[r],o[r]=I}e[r]=i[r]}return c&&(f=!f),l=n+h,!0}null!==g&&g.call(t);for(var H=0,x=w.length;H<x;H++)w[H].start(l+u);return!1}return!0}},r.Easing={Linear:{None:function(n){return n}},Quadratic:{In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}},Cubic:{In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}},Quartic:{In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}},Quintic:{In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},Sinusoidal:{In:function(n){return 1-Math.cos(n*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return.5*(1-Math.cos(Math.PI*n))}},Exponential:{In:function(n){return 0===n?0:Math.pow(1024,n-1)},Out:function(n){return 1===n?1:1-Math.pow(2,-10*n)},InOut:function(n){return 0===n?0:1===n?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}},Circular:{In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},Elastic:{In:function(n){return 0===n?0:1===n?1:-Math.pow(2,10*(n-1))*Math.sin(5*(n-1.1)*Math.PI)},Out:function(n){return 0===n?0:1===n?1:Math.pow(2,-10*n)*Math.sin(5*(n-.1)*Math.PI)+1},InOut:function(n){return 0===n?0:1===n?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin(5*(n-1.1)*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin(5*(n-1.1)*Math.PI)+1)}},Back:{In:function(n){var t=1.70158;return n*n*((t+1)*n-t)},Out:function(n){var t=1.70158;return--n*n*((t+1)*n+t)+1},InOut:function(n){var t=2.5949095;return(n*=2)<1?.5*(n*n*((t+1)*n-t)):.5*((n-=2)*n*((t+1)*n+t)+2)}},Bounce:{In:function(n){return 1-r.Easing.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?.5*r.Easing.Bounce.In(2*n):.5*r.Easing.Bounce.Out(2*n-1)+.5}}},r.Interpolation={Linear:function(n,t){var e=n.length-1,o=e*t,i=Math.floor(o),u=r.Interpolation.Utils.Linear;return t<0?u(n[0],n[1],o):t>1?u(n[e],n[e-1],e-o):u(n[i],n[i+1>e?e:i+1],o-i)},Bezier:function(n,t){for(var e=0,o=n.length-1,i=Math.pow,u=r.Interpolation.Utils.Bernstein,a=0;a<=o;a++)e+=i(1-t,o-a)*i(t,a)*n[a]*u(o,a);return e},CatmullRom:function(n,t){var e=n.length-1,o=e*t,i=Math.floor(o),u=r.Interpolation.Utils.CatmullRom;return n[0]===n[e]?(t<0&&(i=Math.floor(o=e*(1+t))),u(n[(i-1+e)%e],n[i],n[(i+1)%e],n[(i+2)%e],o-i)):t<0?n[0]-(u(n[0],n[0],n[1],n[1],-o)-n[0]):t>1?n[e]-(u(n[e],n[e],n[e-1],n[e-1],o-e)-n[e]):u(n[i?i-1:0],n[i],n[e<i+1?e:i+1],n[e<i+2?e:i+2],o-i)},Utils:{Linear:function(n,t,e){return(t-n)*e+n},Bernstein:function(n,t){var e=r.Interpolation.Utils.Factorial;return e(n)/e(t)/e(n-t)},Factorial:function(){var n=[1];return function(t){var e=1;if(n[t])return n[t];for(var o=t;o>1;o--)e*=o;return n[t]=e,e}}(),CatmullRom:function(n,t,e,o,i){var r=.5*(e-n),u=.5*(o-t),a=i*i,c=i*a;return(2*t-2*e+r+u)*c+(-3*t+3*e-2*r-u)*a+r*i+t}}},function(e){o=[],i=function(){return r}.apply(t,o),!(void 0!==i&&(n.exports=i))}(this)}).call(t,e(3))}]);
//# sourceMappingURL=hanoi.js.map