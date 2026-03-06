(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const y of l)if(y.type==="childList")for(const L of y.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&i(L)}).observe(document,{childList:!0,subtree:!0});function o(l){const y={};return l.integrity&&(y.integrity=l.integrity),l.referrerPolicy&&(y.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?y.credentials="include":l.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function i(l){if(l.ep)return;l.ep=!0;const y=o(l);fetch(l.href,y)}})();const K=[{id:1,title:"Semantic Navigation with Dropdown",html_question:`Create a semantic <nav> with:
- Logo div
- 3 menu items
- One dropdown submenu (nested <ul>)
- Proper class names`,html_solution:'<nav class="navbar"><div class="logo"></div><ul><li><a href="#"></a></li><li class="dropdown"><a href="#"></a><ul><li><a href="#"></a></li></ul></li><li><a href="#"></a></li></ul></nav>',python_question:"Write a function that checks if a number is prime.",python_solution:"is_prime()",sql_question:"Select top 5 highest salary employees.",sql_solution:"ORDER BY salary DESC LIMIT 5",logic_question:`
Q1. Three boxes are labeled: Apples, Oranges, Apples & Oranges.
All labels are wrong. You can pick only one fruit from one box.
A) Apples
B) Oranges
C) Apples & Oranges
D) Any box

Q2. Three switches control three bulbs in another room.
You may enter the room only once.
A) Turn all ON
B) Turn one ON, wait, turn OFF, turn another ON, then check heat
C) Random guess
D) Turn all OFF
`,logic_solution:["C","B"]},{id:2,title:"Validated Registration Form",html_question:`Create a form with:
- Username (required)
- Email (type=email)
- Password (minlength 8)
- Submit button
- Proper label association`,html_solution:'<form><label for="u"></label><input id="u" required><label for="e"></label><input type="email" id="e"><label for="p"></label><input type="password" id="p" minlength="8"><button type="submit"></button></form>',python_question:"How to write a recursive factorial function of a number n.",python_solution:"factorial(n)",sql_question:"Join users and orders tables.",sql_solution:"JOIN orders ON users.id = orders.user_id",logic_question:`
Q1. After 100 passes toggling lockers, which remain open?
A) Prime numbers
B) Even numbers
C) Perfect squares
D) Multiples of 10

Q2. Find missing number:
2 6 7
4 8 12
6 ? 17
A) 9
B) 10
C) 11
D) 12
`,logic_solution:["C","B"]},{id:3,title:"Semantic Layout Structure",html_question:`Create layout using:
<header>, <main>, <section>, <aside>, <footer>`,html_solution:"<div><header></header><main><section></section><aside></aside></main><footer></footer></div>",python_question:"How to Reverse a string in python without slicing.",python_solution:"reversed()",sql_question:"Group total sales by customer_id.",sql_solution:"GROUP BY customer_id",logic_question:`
Q1. Bridge crossing 1,2,7,10 minutes. Minimum time?
A) 19
B) 18
C) 17
D) 16

Q2. 9 coins, one heavier. Minimum weighings?
A) 1
B) 2
C) 3
D) 4
`,logic_solution:["C","B"]},{id:4,title:"Table Builder Advanced",html_question:"Create a table with header row and 3 data rows.",html_solution:"<table><tr><th></th></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr></table>",python_question:"How to Ccheck if a given string is palindrome or not in python.",python_solution:"palindrome",sql_question:"Delete users where age < 18. in the users table",sql_solution:"DELETE FROM users WHERE age < 18",logic_question:`
Q1. One guard lies, one tells truth. Best strategy?
A) Ask which door is correct
B) Ask both guards
C) Ask what the other guard would say, choose opposite
D) Random choice

Q2. Father 4x son's age. In 20 years twice. Son’s age?
A) 8
B) 10
C) 12
D) 15
`,logic_solution:["C","B"]},{id:5,title:"Image Card Component",html_question:"Create card with <img>, <h3>, <p>, button.",html_solution:"<div><img><h3></h3><p></p><button></button></div>",python_question:"Find largest number in list [1,2,3,4,5].",python_solution:"max(1,2,3,4,5)",sql_question:"Select distinct city names from customers table.",sql_solution:"SELECT DISTINCT city FROM customers",logic_question:`
Q1. Seating puzzle middle person?
A) A
B) B
C) C
D) D

Q2. Two ropes burn unevenly. Measure 45 min?
A) Burn one rope fully
B) Burn both one end
C) Burn one both ends & other one end
D) Cut rope
`,logic_solution:["A","C"]},{id:6,title:"Video Section",html_question:"Create section with video and source.",html_solution:"<section><video><source></video></section>",python_question:"Create dictionary of first 5 natural numbers.",python_solution:"{1:1,2:2,3:3,4:4,5:5}",sql_question:"Update salary to 50000 where id = 2.",sql_solution:"UPDATE employees SET salary = 50000 WHERE id = 2",logic_question:`
Q1. 2^5 equals?
A) 16
B) 32
C) 64
D) 128

Q2. Pattern: 5,10,20,40,?
A) 60
B) 70
C) 80
D) 90
`,logic_solution:["B","C"]},{id:7,title:"Ordered List Page",html_question:"Create ordered list with 5 items.",html_solution:"<ol><li></li><li></li><li></li><li></li><li></li></ol>",python_question:"Convert string 'Hello' to integer safely.",python_solution:"int(Hello)",sql_question:"How to Count total orders.",sql_solution:"COUNT(*)",logic_question:`
Q1. 7 factorial?
A) 720
B) 5040
C) 40320
D) 840

Q2. 3 machines make 90 items in 6 hrs. Per hour?
A) 10
B) 15
C) 18
D) 20
`,logic_solution:["B","B"]},{id:8,title:"Form Validation Advanced",html_question:"Create form with required validation and pattern attribute.",html_solution:'<form><input required pattern=".{5,}"><button type="submit"></button></form>',python_question:"Check if a number 'n' is even.",python_solution:"n% 2 == 0",sql_question:"Select names starting with 'A'.",sql_solution:"LIKE 'A%'",logic_question:`
Q1. Perfect squares after 100 lockers?
A) Prime
B) Even
C) Perfect squares
D) Multiples of 10

Q2. Missing sequence: 3,9,27,81,?
A) 162
B) 200
C) 243
D) 300
`,logic_solution:["C","C"]}];var re={};(function d(r,o,i,l){var y=!!(r.Worker&&r.Blob&&r.Promise&&r.OffscreenCanvas&&r.OffscreenCanvasRenderingContext2D&&r.HTMLCanvasElement&&r.HTMLCanvasElement.prototype.transferControlToOffscreen&&r.URL&&r.URL.createObjectURL),L=typeof Path2D=="function"&&typeof DOMMatrix=="function",x=(function(){if(!r.OffscreenCanvas)return!1;try{var t=new OffscreenCanvas(1,1),e=t.getContext("2d");e.fillRect(0,0,1,1);var n=t.transferToImageBitmap();e.createPattern(n,"no-repeat")}catch{return!1}return!0})();function f(){}function w(t){var e=o.exports.Promise,n=e!==void 0?e:r.Promise;return typeof n=="function"?new n(t):(t(f,f),null)}var g=(function(t,e){return{transform:function(n){if(t)return n;if(e.has(n))return e.get(n);var s=new OffscreenCanvas(n.width,n.height),c=s.getContext("2d");return c.drawImage(n,0,0),e.set(n,s),s},clear:function(){e.clear()}}})(x,new Map),O=(function(){var t=Math.floor(16.666666666666668),e,n,s={},c=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(u){var m=Math.random();return s[m]=requestAnimationFrame(function a(h){c===h||c+t-1<h?(c=h,delete s[m],u()):s[m]=requestAnimationFrame(a)}),m},n=function(u){s[u]&&cancelAnimationFrame(s[u])}):(e=function(u){return setTimeout(u,t)},n=function(u){return clearTimeout(u)}),{frame:e,cancel:n}})(),D=(function(){var t,e,n={};function s(c){function u(m,a){c.postMessage({options:m||{},callback:a})}c.init=function(a){var h=a.transferControlToOffscreen();c.postMessage({canvas:h},[h])},c.fire=function(a,h,v){if(e)return u(a,null),e;var E=Math.random().toString(36).slice(2);return e=w(function(b){function B(M){M.data.callback===E&&(delete n[E],c.removeEventListener("message",B),e=null,g.clear(),v(),b())}c.addEventListener("message",B),u(a,E),n[E]=B.bind(null,{data:{callback:E}})}),e},c.reset=function(){c.postMessage({reset:!0});for(var a in n)n[a](),delete n[a]}}return function(){if(t)return t;if(!i&&y){var c=["var CONFETTI, SIZE = {}, module = {};","("+d.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([c])))}catch(u){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",u),null}s(t)}return t}})(),ie={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function Be(t,e){return e?e(t):t}function Ce(t){return t!=null}function C(t,e,n){return Be(t&&Ce(t[e])?t[e]:ie[e],n)}function Me(t){return t<0?0:Math.floor(t)}function Ie(t,e){return Math.floor(Math.random()*(e-t))+t}function Q(t){return parseInt(t,16)}function Le(t){return t.map(Te)}function Te(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:Q(e.substring(0,2)),g:Q(e.substring(2,4)),b:Q(e.substring(4,6))}}function ke(t){var e=C(t,"origin",Object);return e.x=C(e,"x",Number),e.y=C(e,"y",Number),e}function qe(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function _e(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function Ae(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}function xe(t,e,n,s,c,u,m,a,h){t.save(),t.translate(e,n),t.rotate(u),t.scale(s,c),t.arc(0,0,1,m,a,h),t.restore()}function Se(t){var e=t.angle*(Math.PI/180),n=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:t.startVelocity*.5+Math.random()*t.startVelocity,angle2D:-e+(.5*n-Math.random()*n),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:t.gravity*3,ovalScalar:.6,scalar:t.scalar,flat:t.flat}}function Pe(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var n=e.tick++/e.totalTicks,s=e.x+e.random*e.tiltCos,c=e.y+e.random*e.tiltSin,u=e.wobbleX+e.random*e.tiltCos,m=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",t.beginPath(),L&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))t.fill(Oe(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(u-s)*.1,Math.abs(m-c)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var a=Math.PI/10*e.wobble,h=Math.abs(u-s)*.1,v=Math.abs(m-c)*.1,E=e.shape.bitmap.width*e.scalar,b=e.shape.bitmap.height*e.scalar,B=new DOMMatrix([Math.cos(a)*h,Math.sin(a)*h,-Math.sin(a)*v,Math.cos(a)*v,e.x,e.y]);B.multiplySelf(new DOMMatrix(e.shape.matrix));var M=t.createPattern(g.transform(e.shape.bitmap),"no-repeat");M.setTransform(B),t.globalAlpha=1-n,t.fillStyle=M,t.fillRect(e.x-E/2,e.y-b/2,E,b),t.globalAlpha=1}else if(e.shape==="circle")t.ellipse?t.ellipse(e.x,e.y,Math.abs(u-s)*e.ovalScalar,Math.abs(m-c)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):xe(t,e.x,e.y,Math.abs(u-s)*e.ovalScalar,Math.abs(m-c)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var p=Math.PI/2*3,T=4*e.scalar,q=8*e.scalar,_=e.x,S=e.y,R=5,A=Math.PI/R;R--;)_=e.x+Math.cos(p)*q,S=e.y+Math.sin(p)*q,t.lineTo(_,S),p+=A,_=e.x+Math.cos(p)*T,S=e.y+Math.sin(p)*T,t.lineTo(_,S),p+=A;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(c)),t.lineTo(Math.floor(u),Math.floor(m)),t.lineTo(Math.floor(s),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}function Fe(t,e,n,s,c){var u=e.slice(),m=t.getContext("2d"),a,h,v=w(function(E){function b(){a=h=null,m.clearRect(0,0,s.width,s.height),g.clear(),c(),E()}function B(){i&&!(s.width===l.width&&s.height===l.height)&&(s.width=t.width=l.width,s.height=t.height=l.height),!s.width&&!s.height&&(n(t),s.width=t.width,s.height=t.height),m.clearRect(0,0,s.width,s.height),u=u.filter(function(M){return Pe(m,M)}),u.length?a=O.frame(B):b()}a=O.frame(B),h=b});return{addFettis:function(E){return u=u.concat(E),v},canvas:t,promise:v,reset:function(){a&&O.cancel(a),h&&h()}}}function le(t,e){var n=!t,s=!!C(e||{},"resize"),c=!1,u=C(e,"disableForReducedMotion",Boolean),m=y&&!!C(e||{},"useWorker"),a=m?D():null,h=n?qe:_e,v=t&&a?!!t.__confetti_initialized:!1,E=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,b;function B(p,T,q){for(var _=C(p,"particleCount",Me),S=C(p,"angle",Number),R=C(p,"spread",Number),A=C(p,"startVelocity",Number),Ne=C(p,"decay",Number),$e=C(p,"gravity",Number),je=C(p,"drift",Number),de=C(p,"colors",Le),Ue=C(p,"ticks",Number),ue=C(p,"shapes"),He=C(p,"scalar"),We=!!C(p,"flat"),me=ke(p),he=_,J=[],ze=t.width*me.x,Qe=t.height*me.y;he--;)J.push(Se({x:ze,y:Qe,angle:S,spread:R,startVelocity:A,color:de[he%de.length],shape:ue[Ie(0,ue.length)],ticks:Ue,decay:Ne,gravity:$e,drift:je,scalar:He,flat:We}));return b?b.addFettis(J):(b=Fe(t,J,h,T,q),b.promise)}function M(p){var T=u||C(p,"disableForReducedMotion",Boolean),q=C(p,"zIndex",Number);if(T&&E)return w(function(A){A()});n&&b?t=b.canvas:n&&!t&&(t=Ae(q),document.body.appendChild(t)),s&&!v&&h(t);var _={width:t.width,height:t.height};a&&!v&&a.init(t),v=!0,a&&(t.__confetti_initialized=!0);function S(){if(a){var A={getBoundingClientRect:function(){if(!n)return t.getBoundingClientRect()}};h(A),a.postMessage({resize:{width:A.width,height:A.height}});return}_.width=_.height=null}function R(){b=null,s&&(c=!1,r.removeEventListener("resize",S)),n&&t&&(document.body.contains(t)&&document.body.removeChild(t),t=null,v=!1)}return s&&!c&&(c=!0,r.addEventListener("resize",S,!1)),a?a.fire(p,_,R):B(p,_,R)}return M.reset=function(){a&&a.reset(),b&&b.reset()},M}var V;function ce(){return V||(V=le(null,{useWorker:!0,resize:!0})),V}function Oe(t,e,n,s,c,u,m){var a=new Path2D(t),h=new Path2D;h.addPath(a,new DOMMatrix(e));var v=new Path2D;return v.addPath(h,new DOMMatrix([Math.cos(m)*c,Math.sin(m)*c,-Math.sin(m)*u,Math.cos(m)*u,n,s])),v}function De(t){if(!L)throw new Error("path confetti are not supported in this browser");var e,n;typeof t=="string"?e=t:(e=t.path,n=t.matrix);var s=new Path2D(e),c=document.createElement("canvas"),u=c.getContext("2d");if(!n){for(var m=1e3,a=m,h=m,v=0,E=0,b,B,M=0;M<m;M+=2)for(var p=0;p<m;p+=2)u.isPointInPath(s,M,p,"nonzero")&&(a=Math.min(a,M),h=Math.min(h,p),v=Math.max(v,M),E=Math.max(E,p));b=v-a,B=E-h;var T=10,q=Math.min(T/b,T/B);n=[q,0,0,q,-Math.round(b/2+a)*q,-Math.round(B/2+h)*q]}return{type:"path",path:e,matrix:n}}function Re(t){var e,n=1,s="#000000",c='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof t=="string"?e=t:(e=t.text,n="scalar"in t?t.scalar:n,c="fontFamily"in t?t.fontFamily:c,s="color"in t?t.color:s);var u=10*n,m=""+u+"px "+c,a=new OffscreenCanvas(u,u),h=a.getContext("2d");h.font=m;var v=h.measureText(e),E=Math.ceil(v.actualBoundingBoxRight+v.actualBoundingBoxLeft),b=Math.ceil(v.actualBoundingBoxAscent+v.actualBoundingBoxDescent),B=2,M=v.actualBoundingBoxLeft+B,p=v.actualBoundingBoxAscent+B;E+=B+B,b+=B+B,a=new OffscreenCanvas(E,b),h=a.getContext("2d"),h.font=m,h.fillStyle=s,h.fillText(e,M,p);var T=1/n;return{type:"bitmap",bitmap:a.transferToImageBitmap(),matrix:[T,0,0,T,-E*T/2,-b*T/2]}}o.exports=function(){return ce().apply(this,arguments)},o.exports.reset=function(){ce().reset()},o.exports.create=le,o.exports.shapeFromPath=De,o.exports.shapeFromText=Re})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),re,!1);const Ve=re.exports;re.exports.create;let U=null,oe=0,$=1,F=0,k=null,j=null,X=null;const ae=document.getElementById("landing-screen"),ee=document.getElementById("auth-screen"),we=document.getElementById("dashboard-screen"),te=document.getElementById("admin-screen"),se=document.getElementById("game-area"),ne=document.getElementById("admin-shortcut-btn"),Je=document.getElementById("auth-title"),fe=document.getElementById("auth-action-btn"),W=document.getElementById("toggle-auth-mode"),Y=document.getElementById("auth-toggle-text"),Z=document.getElementById("register-fields"),G=document.getElementById("confirm-pass-field"),Ye=document.getElementById("email"),Ze=document.getElementById("password"),Ge=document.getElementById("confirm-password"),Ke=document.getElementById("name"),pe=document.getElementById("college"),ge=document.getElementById("phone"),Ee=document.getElementById("user-info"),Xe=document.getElementById("user-email-display"),et=document.getElementById("current-score"),tt=document.getElementById("progress-bar-fill"),nt=document.getElementById("progress-percent"),rt=document.getElementById("notification-container"),ot=document.getElementById("check-answer-btn"),at=document.getElementById("back-to-dash-btn"),H=document.getElementById("html-input"),ye=document.getElementById("html-preview");function st(){it(),z()}function P(d,r="success"){const o=document.createElement("div");o.className=`toast ${r}`,o.innerHTML=`
    <i class="fas ${r==="success"?"fa-check-circle":"fa-exclamation-circle"}"></i>
    <span>${d}</span>
  `,rt.appendChild(o),setTimeout(()=>{o.style.opacity="0",o.style.transform="translateX(100%)",setTimeout(()=>o.remove(),300)},3500)}function N(){[ae,ee,we,te].forEach(d=>d.classList.add("hidden"))}function z(){et.textContent=oe;const d=($-1)/4*100;tt.style.width=`${d}%`,nt.textContent=`${Math.floor(d)}%`,document.querySelectorAll(".level-card").forEach((r,o)=>{o+1<=$?(r.classList.remove("locked"),r.querySelector(".level-status").textContent="Open!"):(r.classList.add("locked"),r.querySelector(".level-status").textContent="Locked")})}function it(){document.getElementById("join-game-btn").addEventListener("click",()=>{N(),ee.classList.remove("hidden"),o(!1)}),document.getElementById("admin-login-btn").addEventListener("click",()=>{N(),ee.classList.remove("hidden"),o(!1,!0)}),document.getElementById("logo").addEventListener("click",()=>{N(),ae.classList.remove("hidden")}),document.getElementById("admin-ptr-link").addEventListener("click",i=>{i.preventDefault(),o(!1,!0)});let d=!1,r=!1;function o(i,l=!1){d=i,r=l,Je.textContent=l?"Admin Portal":i?"Join the Sprint":"Welcome Back Racer",fe.textContent=i?"Create Account":"Login",Y.textContent=i?"Already have an account?":"No account?",W.textContent=i?"Login here":"Register here",i?(Z.classList.remove("hidden"),G.classList.remove("hidden")):(Z.classList.add("hidden"),G.classList.add("hidden")),l?(Z.classList.add("hidden"),G.classList.add("hidden"),W.classList.add("hidden"),Y.classList.add("hidden")):(W.classList.remove("hidden"),Y.classList.remove("hidden"))}W.addEventListener("click",i=>{i.preventDefault(),o(!d)}),fe.addEventListener("click",async i=>{i.preventDefault();const l=Ye.value,y=Ze.value,L=Ke.value,x=pe?pe.value:"",f=ge?ge.value:"";if(d){if(!l||!y||!L||!x||!f)return I("Please fill all fields","error");if(y!==Ge.value)return I("Passwords don't match","error");try{const w=await fetch("https://relay-race-backend-1.onrender.com/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:L,email:l,phone:f,college:x})}),g=await w.json();w.ok?(I("🎉 Registered Successfully! You can now login.","success"),o(!1)):I(g.message||"Registration failed","error")}catch(w){console.error("Registration Error:",w),I("Server error. Please check if backend is running.","error")}}else r&&l==="admin@debug.com"&&y==="admin123"?(N(),te.classList.remove("hidden"),ne.classList.remove("hidden"),I("Access Granted: Admin Control Center Active","success"),be()):r?I("Invalid Credentials provided","error"):(U={name:L||"Racer",email:l},Xe.textContent=l,N(),we.classList.remove("hidden"),Ee.classList.remove("hidden"),I(`Welcome ${U.name}! Start the race.`,"success"),z())}),document.querySelectorAll(".level-card").forEach(i=>{i.addEventListener("click",()=>{const l=parseInt(i.dataset.level);l<=$&&lt(l)})}),at.addEventListener("click",()=>{se.style.display="none",document.querySelector(".levels-grid").style.display="grid"}),ot.addEventListener("click",mt),document.getElementById("logout-btn").addEventListener("click",()=>ve()),document.getElementById("admin-logout").addEventListener("click",()=>ve()),ne.addEventListener("click",()=>{N(),te.classList.remove("hidden"),be()}),H.addEventListener("input",()=>{const i=ye.contentDocument||ye.contentWindow.document;i.open(),i.write(`
      <style>body { font-family: sans-serif; }</style>
      ${H.value}
    `),i.close()})}function ve(){U=null,k=null,$=1,oe=0,j=null,X=null,Ee.classList.add("hidden"),ne.classList.add("hidden"),N(),ae.classList.remove("hidden"),I("Logged out successfully","success")}function lt(d){if(d<1||d>4){I(`Invalid level ${d}.`,"error");return}try{F=d,d===1&&!j&&(j=Date.now(),console.log("⏱️ Timer started at:",new Date(j).toLocaleTimeString())),k||(k=K[Math.floor(Math.random()*K.length)]),document.querySelector(".levels-grid").style.display="none",se.style.display="block";const r=document.getElementById("problem-title"),o=document.getElementById("level-badge"),i=document.getElementById("html-interface"),l=document.getElementById("standard-interface"),y=document.getElementById("html-problem-content"),L=document.getElementById("standard-problem-content"),x=document.getElementById("answer-input");if(r.textContent=k.title,o.textContent=`LEVEL ${d} - ${ct(d)}`,x.value="",d===1)i.classList.remove("hidden"),l.classList.add("hidden"),y.textContent=k.html_question,H.value="",H.dispatchEvent(new Event("input"));else{i.classList.add("hidden"),l.classList.remove("hidden");let f="";d===2&&(f=k.python_question),d===3&&(f=k.sql_question),d===4&&(f=k.logic_question),L.textContent=f}}catch(r){console.error("Error in startLevel:",r),I("An unexpected error occurred while starting the level.","error")}}function ct(d){return["HTML","Python","SQL","Logic"][d-1]}function dt(d,r){const o=i=>i.replace(/<!--.*?-->/gs,"").toLowerCase().replace(/\s/g,"");if(Array.isArray(r)){const i=r.join(",");return o(d)===o(i)}return o(d)===o(r)}function I(d,r="success"){let o=document.getElementById("custom-popup");o||(o=document.createElement("div"),o.id="custom-popup",o.innerHTML=`
            <div class="popup-content">
                <i class="popup-icon fas"></i>
                <p class="popup-message"></p>
                <button class="popup-close">Continue</button>
            </div>`,document.body.appendChild(o),o.querySelector(".popup-close").addEventListener("click",()=>{o.classList.remove("visible")}));const i=o.querySelector(".popup-content"),l=o.querySelector(".popup-icon"),y=o.querySelector(".popup-message");i.className=`popup-content ${r}`,l.className=`popup-icon fas ${r==="success"?"fa-check-circle":"fa-times-circle"}`,y.textContent=d,o.classList.add("visible")}function ut(){F===$&&($=Math.min($+1,5),oe++,z())}function mt(){let d="",r="";if(F===1?(d=H.value,r=k.html_solution):(d=document.getElementById("answer-input").value,F===2&&(r=k.python_solution),F===3&&(r=k.sql_solution),F===4&&(r=k.logic_solution)),dt(d,r)){if(F<4?I("Congratulations! You have qualified to the next level.","success"):I("🎉 Congratulations on becoming a Relay Racer!","success"),ut(),F===4&&U){X=Date.now();const o=(X-j)/1e3;console.log(`⏱️ Race Finished! Total Time: ${o.toFixed(2)}s`),fetch(`https://relay-race-backend-1.onrender.com/complete/${U.email}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({totalTime:o})}).then(i=>i.json()).then(i=>{P("🎉 Your total time has been recorded!","success")}).catch(i=>{console.error("Failed to save race time:",i),P("⚠️ Time was not saved. Please check server.","error")})}Ve({particleCount:150,spread:80,origin:{y:.6},colors:["#6366f1","#10b981","#fbbf24"]}),setTimeout(()=>{document.getElementById("custom-popup").classList.remove("visible"),se.style.display="none",document.querySelector(".levels-grid").style.display="grid",z()},2500)}else I("Better luck next time. Check your code for bugs!","error")}function be(){const d=document.getElementById("problems-list"),r=document.getElementById("users-list"),o=document.getElementById("registered-users-list"),i=async()=>{try{const f=await fetch("https://relay-race-backend-1.onrender.com/admin/users",{headers:{"x-admin-token":"admin123"}});if(!f.ok)throw new Error("Failed to list users");const w=await f.json();o.innerHTML=w.length>0?w.map(g=>`
                <tr>
                  <td>${g.name}</td>
                  <td>${g.email}</td>
                  <td>${new Date(g.registeredAt).toLocaleString()}</td>
                  <td>
                    <button class="delete-registered-user-btn" data-id="${g._id}" style="width: auto; padding: 5px 10px; font-size: 0.8rem; background: #ef4444; color: white; border-radius: 5px; border: none; cursor: pointer;">Delete</button>
                  </td>
                </tr>
            `).join(""):'<tr><td colspan="4" style="text-align: center; opacity: 0.5; padding: 2rem;">No registered users yet.</td></tr>',document.querySelectorAll(".delete-registered-user-btn").forEach(g=>{g.addEventListener("click",async()=>{const O=g.dataset.id;if(confirm("Are you sure you want to delete this user?"))try{(await fetch(`https://relay-race-backend-1.onrender.com/admin/users/${O}`,{method:"DELETE",headers:{"x-admin-token":"admin123"}})).ok?(P("User deleted successfully!","success"),i(),document.getElementById("refresh-leaderboard-btn")&&y()):P("Failed to delete user.","error")}catch(D){console.error("Delete user error:",D),P("Failed to delete user.","error")}})})}catch(f){console.error("Error fetching registered users:",f),o.innerHTML='<tr><td colspan="4" style="text-align: center; color: #ef4444;">Failed to load registered users.</td></tr>'}};i();const l=document.getElementById("refresh-registered-btn");l&&l.addEventListener("click",()=>{P("Refreshing registered users...","success"),i()});const y=async()=>{try{const w=await(await fetch("https://relay-race-backend-1.onrender.com/admin/participants")).json();r.innerHTML=w.length>0?w.map(g=>`
                                < tr class= "${g.winner?"winner-row":""}" >
                  <td>${g.name}</td>
                  <td>${g.college}</td>
                  <td>${g.email}</td>
                  <td style="font-weight: 800; color: #fbbf24;">${g.totalTime>0?g.totalTime.toFixed(2)+"s":"In Progress"}</td>
                  <td>${g.winner?'<span style="font-size: 1.5rem;">👑</span>':"-"}</td>
                  <td>
                    ${g.winner?'<span style="color: #10b981; font-weight: bold;">Confirmed</span>':`<button class="win-btn" data-id="${g._id}" style="width: auto; padding: 5px 10px; font-size: 0.7rem; background: #10b981;">🏆 Winner</button>`}
                  </td>
                </tr >
        `).join(""):'<tr><td colspan="6" style="text-align: center; opacity: 0.5; padding: 2rem;">No participants have joined the race yet.</td></tr>',document.querySelectorAll(".win-btn").forEach(g=>{g.addEventListener("click",async()=>{const O=g.dataset.id;try{(await fetch(`https://relay-race-backend-1.onrender.com/admin/mark-winner/${O}`,{method:"PUT"})).ok&&(P("🏆 Participant marked as winner successfully!","success"),y())}catch(D){console.error("Mark winner error:",D),P("Failed to mark winner.","error")}})})}catch(f){console.error("Error fetching participants:",f),r.innerHTML='<tr><td colspan="5" style="text-align: center; color: #ef4444;">Failed to load leaderboard.</td></tr>'}};y();const L=document.getElementById("refresh-leaderboard-btn");L&&L.addEventListener("click",()=>{P("Refreshing leaderboard...","success"),y()}),d.innerHTML=K.map(f=>`
    <tr id="prob-row-${f.id}">
      <td>#${f.id}</td>
      <td>${f.title}</td>
      <td>Multi-Stage</td>
      <td>
        <button style="width: auto; padding: 5px 10px; font-size: 0.8rem; background: var(--primary); color: white; border-radius: 5px;">Edit</button>
        <button class="delete-prob-btn" data-id="${f.id}" style="width: auto; padding: 10px 10px; font-size: 1rem; background: var(--admin); color: white; border-radius: 5px;">🗑️</button>
      </td>
    </tr>
  `).join(""),document.querySelectorAll(".delete-prob-btn").forEach(f=>{f.addEventListener("click",()=>{const w=f.dataset.id,g=document.getElementById(`prob-row-${w}`);g&&(g.remove(),I(`Problem #${w} removed from the relay race!`,"success"))})});const x=document.getElementById("add-problem-btn");x&&x.addEventListener("click",()=>{I("The Problem Editor is a pro feature. For the IT Fest, please edit src/problems.js directly to add new challenges!","error")}),document.querySelectorAll(".tab-btn").forEach(f=>{f.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(w=>w.classList.remove("active")),document.querySelectorAll(".admin-tab-content").forEach(w=>w.classList.add("hidden")),f.classList.add("active"),document.getElementById(f.dataset.tab).classList.remove("hidden")})}),document.getElementById("save-theme-btn").addEventListener("click",()=>{const f=document.getElementById("theme-primary").value,w=document.getElementById("theme-bg").value,g=document.getElementById("theme-font").value;document.documentElement.style.setProperty("--primary",f),document.documentElement.style.setProperty("--bg",w),document.body.style.fontFamily=g,I("Theme settings applied successfully!","success"),localStorage.setItem("relay_theme",JSON.stringify({primary:f,bg:w,font:g}))})}st();
