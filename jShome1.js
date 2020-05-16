/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("myTopnav").style.left = "0";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("myTopnav").style.left = "-250px";
}

// Add active class to the current button (highlight it)
var btns = document.getElementsByClassName("dropbtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {  
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropbtn");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('active')) {
        openDropdown.classList.remove('active');
      }
    }
  }
}
function menuoverlayOn() {
    document.getElementById("menuoverlay").style.display = "block";
}

function menuoverlayOff() {
    document.getElementById("menuoverlay").style.display = "none";
}

function addClassBody() {
    var element, name, arr;
    element = document.body;
    name = "flow";
    arr = element.className.split(" ");
    if (arr.indexOf(name) == -1) {
        element.className += " " + name;
    }
}
function removeClassBody() {
    var element = document.body;
    element.className = element.className.replace(/\bflow\b/g, "");
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*! lazysizes - v5.1.0 */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}("undefined"!=typeof window?window:{},function(a,b){"use strict";var c,d;if(function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};d=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in d||(d[b]=c[b])}(),!b||!b.getElementsByClassName)return{init:function(){},cfg:d,noSupport:!0};var e=b.documentElement,f=a.Date,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h],k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,d,e,f,g){var h=b.createEvent("Event");return e||(e={}),e.instance=c,h.initEvent(d,!f,!g),h.detail=e,a.dispatchEvent(h),h},w=function(b,c){var e;!g&&(e=a.picturefill||d.pf)?(c&&c.src&&!b[i]("srcset")&&b.setAttribute("srcset",c.src),e({reevaluate:!0,elements:[b]})):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<d.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,c=0,e=d.throttleDelay,g=d.ricTimeout,h=function(){b=!1,c=f.now(),a()},i=m&&g>49?function(){m(h,{timeout:g}),g!==d.ricTimeout&&(g=d.ricTimeout)}:A(function(){k(h)},!0);return function(a){var d;(a=!0===a)&&(g=33),b||(b=!0,d=e-(f.now()-c),d<0&&(d=0),a||d<9?i():k(i,d))}},C=function(a){var b,c,d=99,e=function(){b=null,a()},g=function(){var a=f.now()-c;a<d?k(g,d-a):(m||e)(e)};return function(){c=f.now(),b||(b=k(g,d))}},D=function(){var g,l,m,o,p,y,D,F,G,H,I,J,K=/^img$/i,L=/^iframe$/i,M="onscroll"in a&&!/(gle|ing)bot/.test(navigator.userAgent),N=0,O=0,P=0,Q=-1,R=function(a){P--,(!a||P<0||!a.target)&&(P=0)},S=function(a){return null==J&&(J="hidden"==x(b.body,"visibility")),J||"hidden"!=x(a.parentNode,"visibility")&&"hidden"!=x(a,"visibility")},T=function(a,c){var d,f=a,g=S(a);for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=e;)(g=(x(f,"opacity")||1)>0)&&"visible"!=x(f,"overflow")&&(d=f.getBoundingClientRect(),g=H>d.left&&G<d.right&&I>d.top-1&&F<d.bottom+1);return g},U=function(){var a,f,h,j,k,m,n,p,q,r,s,t,u=c.elements;if((o=d.loadMode)&&P<8&&(a=u.length)){for(f=0,Q++;f<a;f++)if(u[f]&&!u[f]._lazyRace)if(!M||c.prematureUnveil&&c.prematureUnveil(u[f]))aa(u[f]);else if((p=u[f][i]("data-expand"))&&(m=1*p)||(m=O),r||(r=!d.expand||d.expand<1?e.clientHeight>500&&e.clientWidth>500?500:370:d.expand,c._defEx=r,s=r*d.expFactor,t=d.hFac,J=null,O<s&&P<1&&Q>2&&o>2&&!b.hidden?(O=s,Q=0):O=o>1&&Q>1&&P<6?r:N),q!==m&&(y=innerWidth+m*t,D=innerHeight+m,n=-1*m,q=m),h=u[f].getBoundingClientRect(),(I=h.bottom)>=n&&(F=h.top)<=D&&(H=h.right)>=n*t&&(G=h.left)<=y&&(I||H||G||F)&&(d.loadHidden||S(u[f]))&&(l&&P<3&&!p&&(o<3||Q<4)||T(u[f],m))){if(aa(u[f]),k=!0,P>9)break}else!k&&l&&!j&&P<4&&Q<4&&o>2&&(g[0]||d.preloadAfterLoad)&&(g[0]||!p&&(I||H||G||F||"auto"!=u[f][i](d.sizesAttr)))&&(j=g[0]||u[f]);j&&!k&&aa(j)}},V=B(U),W=function(a){var b=a.target;if(b._lazyCache)return void delete b._lazyCache;R(a),s(b,d.loadedClass),t(b,d.loadingClass),u(b,Y),v(b,"lazyloaded")},X=A(W),Y=function(a){X({target:a.target})},Z=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},$=function(a){var b,c=a[i](d.srcsetAttr);(b=d.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},_=A(function(a,b,c,e,f){var g,h,j,l,o,p;(o=v(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(c?s(a,d.autosizesClass):a.setAttribute("sizes",e)),h=a[i](d.srcsetAttr),g=a[i](d.srcAttr).replace(/.*?:\/\//g,"//"),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),o={target:a},s(a,d.loadingClass),p&&(clearTimeout(m),m=k(R,2500),u(a,Y,!0)),l&&q.call(j.getElementsByTagName("source"),$),h?a.setAttribute("srcset",h):g&&!l&&(L.test(a.nodeName)?Z(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,d.lazyClass),z(function(){var b=a.complete&&a.naturalWidth>1;p&&!b||(b&&s(a,"ls-is-cached"),W(o),a._lazyCache=!0,k(function(){"_lazyCache"in a&&delete a._lazyCache},9)),"lazy"==a.loading&&P--},!0)}),aa=function(a){if(!a._lazyRace){var b,c=K.test(a.nodeName),e=c&&(a[i](d.sizesAttr)||a[i]("sizes")),f="auto"==e;(!f&&l||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,d.errorClass)||!r(a,d.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,P++,_(a,b,f,e,c))}},ba=C(function(){d.loadMode=3,V()}),ca=function(){3==d.loadMode&&(d.loadMode=2),ba()},da=function(){if(!l){if(f.now()-p<999)return void k(da,999);l=!0,d.loadMode=3,V(),j("scroll",ca,!0)}};return{_:function(){p=f.now(),c.elements=b.getElementsByClassName(d.lazyClass),g=b.getElementsByClassName(d.lazyClass+" "+d.preloadClass),j("scroll",V,!0),j("resize",V,!0),a.MutationObserver?new MutationObserver(V).observe(e,{childList:!0,subtree:!0,attributes:!0}):(e[h]("DOMNodeInserted",V,!0),e[h]("DOMAttrModified",V,!0),setInterval(V,999)),j("hashchange",V,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(a){b[h](a,V,!0)}),/d$|^c/.test(b.readyState)?da():(j("load",da),b[h]("DOMContentLoaded",V),k(da,2e4)),c.elements.length?(U(),z._lsFlush()):V()},checkElems:V,unveil:aa,_aLSL:ca}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;f<g;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),e=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width)&&d!==a._lazysizesWidth&&c(a,f,e,d))},f=function(){var b,c=a.length;if(c)for(b=0;b<c;b++)e(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(d.autosizesClass),j("resize",g)},checkElems:g,updateElem:e}}(),F=function(){!F.i&&b.getElementsByClassName&&(F.i=!0,E._(),D._())};return k(function(){d.init&&F()}),c={cfg:d,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}});

var x=document.querySelectorAll(".lazyloadimg"),i;for(i=0;i<x.length;i++)x[i].innerHTML=x[i].innerHTML.replace("<!--","").replace("-->","");

var _0xe455=["YWRk","PGEgY2xhc3M9ImpzLWxvYWQiPlVkYWggYWghPC9hPg==","dGFyZ2V0","aW5zZXJ0QWRqYWNlbnRIVE1M","cG9zdHM=","YW5jaG9ycw==","WE1MSHR0cFJlcXVlc3Q=","bG9hZA==","b2Zmc2V0SGVpZ2h0","b2Zm","LmJsb2ctcG9zdHM=","ZG9jdW1lbnRFbGVtZW50","PHNwYW4gY2xhc3M9ImZpIiBpZD0iI2ZpOg==","dGl0bGU=","cXVlcnlTZWxlY3RvckFsbA==","dGV4dA==","dHlwZQ==","Ym9keQ==","aW5uZXJIVE1M","bGVuZ3Ro","bG9hZGVk","PHNwYW4gY2xhc3M9ImZpIiBpZD0iI2ZpOjAiPjwvc3Bhbj4=","cmVzcG9uc2VUZXh0","YWZ0ZXJlbmQ=","Y2xhc3NOYW1l","c2V0VGltZW91dA==","LmJsb2ctcGFnZXItb2xkZXItbGluaw==","cG9zdA==","YW5jaG9y","aHJlZg==","cHVzaA==","c2Nyb2xs","c2Nyb2xsVG9w","R0VU","aW5uZXJIZWlnaHQ=","ZGl2","YWRkRXZlbnRMaXN0ZW5lcg==","LnBvc3Rz","PGEgY2xhc3M9ImpzLWxvYWQiIGhyZWY9ImphdmFzY3JpcHQ6OyI+QXJ0aWtlbCBMYWlubnlhPC9hPg==","b25jbGljaw==","PHNwYW4gY2xhc3M9ImpzLWxvYWQiPkxvYWRpbmcuLi48L3NwYW4+","LmFuY2hvcnM=","b25yZWFkeXN0YXRlY2hhbmdl","SW5maW5pdGVTY3JvbGw=","PGEgY2xhc3M9ImpzLWxvYWQiPkxvYWRpbmcuLi48L2E+","Ij48L3NwYW4+","c3RhdGU=","cmVhZHlTdGF0ZQ==","Y3JlYXRlRWxlbWVudA==","ZXJyb3I=","Y2xlYXJUaW1lb3V0","ZnVuY3Rpb24=","b2Zmc2V0VG9w","LnBvc3Qtb3V0ZXI=","bG9hZGluZw==","LmJsb2ctcGFnZXI=","Y2xhc3NMaXN0","b2JqZWN0"];!function(e){!function(x){for(;--x;)e.push(e.shift())}(381)}(_0xe455);var _0x43e1=function(x,e){var n,t=_0xe455[x=+x];void 0===_0x43e1.CebdxH&&((n=function(){var e;try{e=Function('return (function() {}.constructor("return this")( ));')()}catch(x){e=window}return e}()).atob||(n.atob=function(x){for(var e,n,t=String(x).replace(/=+$/,""),_="",c=0,o=0;n=t.charAt(o++);~n&&(e=c%4?64*e+n:n,c++%4)&&(_+=String.fromCharCode(255&e>>(-2*c&6))))n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return _}),_0x43e1.EXAblO=function(x){for(var e=atob(x),n=[],t=0,_=e.length;t<_;t++)n+="%"+("00"+e.charCodeAt(t).toString(16)).slice(-2);return decodeURIComponent(n)},_0x43e1.DVbksg={},_0x43e1.CebdxH=!0);var _=_0x43e1.DVbksg[x];return void 0===_?(t=_0x43e1.EXAblO(t),_0x43e1.DVbksg[x]=t):t=_,t};!function(m,I){m[_0x43e1("0xb")]=function(x){function a(x,e){return(e=e||I)[_0x43e1("0x28")](x)}function t(x){return void 0!==x}function _(x){return _0x43e1("0x13")==typeof x}function d(x,e){if(t(c[x]))for(var n in c[x])c[x][n](e)}function n(){return i[_0x43e1("0x2c")]=u[_0x43e1("0x29")].loading,f=!0,h?(Y[_0x43e1("0x18")][_0x43e1("0x1a")](u[_0x43e1("0xe")].loading),d("loading",[u]),void e(h,function(x,e){Y[_0x43e1("0x32")]=s+" "+u[_0x43e1("0xe")][_0x43e1("0x21")],(b=I.createElement("div"))[_0x43e1("0x2c")]=x;var n=a("title",b),t=a(u[_0x43e1("0x1c")][_0x43e1("0x35")],b),_=a(u.target[_0x43e1("0x1f")]+" "+u[_0x43e1("0x1c")].anchor,b),c=a(u[_0x43e1("0x1c")].post,W),n=n&&n[0]?n[0][_0x43e1("0x2c")]:"";if(t[_0x43e1("0x2d")]&&c[_0x43e1("0x2d")]){var o=c[c.length-1];I[_0x43e1("0x27")]=n,o[_0x43e1("0x1d")](_0x43e1("0x31"),_0x43e1("0x26")+V+_0x43e1("0xd")),b=I[_0x43e1("0x10")](_0x43e1("0x3"));for(var r=0,i=t[_0x43e1("0x2d")];r<i;++r)b.appendChild(t[r]);o.insertAdjacentHTML(_0x43e1("0x31"),b[_0x43e1("0x2c")]),l(),h=!!_[_0x43e1("0x2d")]&&_[0][_0x43e1("0x37")],f=!1,V++,d(_0x43e1("0x21"),[u,x,e])}},function(x,e){Y[_0x43e1("0x18")].add(u[_0x43e1("0xe")][_0x43e1("0x11")]),f=!1,l(1),d(_0x43e1("0x11"),[u,x,e])})):(Y[_0x43e1("0x18")][_0x43e1("0x1a")](u[_0x43e1("0xe")].loaded),i.innerHTML=u[_0x43e1("0x29")][_0x43e1("0x2e")],d(_0x43e1("0x2e"),[u]))}function l(x){var e;i[_0x43e1("0x2c")]="",r&&(b[_0x43e1("0x2c")]=u.text[_0x43e1(x?"0x11":"0x21")],(e=b.firstChild)[_0x43e1("0x7")]=function(){return 2===u[_0x43e1("0x2a")]&&(r=!1),n(),!1},i.appendChild(e))}var e="infinite-scroll-state-",u={target:{posts:_0x43e1("0x5"),post:".post",anchors:_0x43e1("0x9"),anchor:".anchor"},text:{load:"%s",loading:"%s",loaded:"%s",error:"%s"},state:{load:e+_0x43e1("0x21"),loading:e+_0x43e1("0x16"),loaded:e+_0x43e1("0x2e"),error:e+_0x43e1("0x11")}},c={load:[],loading:[],loaded:[],error:[]};(u=function x(e,n){for(var t in e=e||{},n)e[t]=_0x43e1("0x19")==typeof n[t]?x(e[t],n[t]):n[t];return e}(u,x||{})).on=function(x,e,n){return t(x)?t(e)?void(t(n)?c[x][n]=e:c[x][_0x43e1("0x38")](e)):c[x]:c},u[_0x43e1("0x23")]=function(x,e){t(e)?delete c[x][e]:c[x]=[]};var o,b=null,e=function(x,e,n){var t;m[_0x43e1("0x20")]&&((t=new XMLHttpRequest)[_0x43e1("0xa")]=function(){if(4===t[_0x43e1("0xf")]){if(200!==t.status)return void(n&&_(n)&&n(t[_0x43e1("0x30")],t));e&&_(e)&&e(t[_0x43e1("0x30")],t)}},t.open(_0x43e1("0x1"),x),t.send())},r=1!==u[_0x43e1("0x2a")],f=!1,W=a(u[_0x43e1("0x1c")][_0x43e1("0x1e")])[0],i=a(u[_0x43e1("0x1c")][_0x43e1("0x1f")])[0],h=a(u[_0x43e1("0x1c")][_0x43e1("0x36")],i),Z=I[_0x43e1("0x2b")],Y=I[_0x43e1("0x25")],s=Y[_0x43e1("0x32")]||"",p=W[_0x43e1("0x14")]+W[_0x43e1("0x22")],v=m[_0x43e1("0x2")],G=0,g=null,V=1;return h[_0x43e1("0x2d")]&&(h=h[0][_0x43e1("0x37")],W[_0x43e1("0x1d")]("afterbegin",_0x43e1("0x2f")),b=I[_0x43e1("0x10")](_0x43e1("0x3")),l(),(o=function(){p=W[_0x43e1("0x14")]+W.offsetHeight,v=m[_0x43e1("0x2")],G=Z[_0x43e1("0x0")]||Y.scrollTop,f||G+v<p||n()})(),0!==u[_0x43e1("0x2a")]&&m[_0x43e1("0x4")](_0x43e1("0x39"),function(){r||(g&&m[_0x43e1("0x12")](g),g=m[_0x43e1("0x33")](o,200))},!1)),u}}(window,document);var infinite_scroll=new InfiniteScroll({type:0,target:{posts:_0x43e1("0x24"),post:_0x43e1("0x15"),anchors:_0x43e1("0x17"),anchor:_0x43e1("0x34")},text:{load:_0x43e1("0x6"),loading:_0x43e1("0xc"),loaded:_0x43e1("0x8"),error:_0x43e1("0x1b")}});
