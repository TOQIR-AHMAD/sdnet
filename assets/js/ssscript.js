/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),g.push((o?"":"no-")+a.join("-"))}}function s(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(S&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),S?_.className.baseVal=n:_.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):S?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return function(){return e.apply(n,arguments)}}function f(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?l(o,t||n):o);return!1}function u(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=n.body;return e||(e=a(S?"svg":"body"),e.fake=!0),e}function p(e,t,r,o){var s,i,l,f,u="modernizr",p=a("div"),c=d();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=o?o[r]:u+(r+1),p.appendChild(l);return s=a("style"),s.type="text/css",s.id="s"+u,(c.fake?c:p).appendChild(s),c.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),p.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",f=_.style.overflow,_.style.overflow="hidden",_.appendChild(c)),i=t(p,e),c.fake?(c.parentNode.removeChild(c),_.style.overflow=f,_.offsetHeight):p.parentNode.removeChild(p),!!i}function c(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(u(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+u(n[o])+":"+r+")");return s=s.join(" or "),p("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function m(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function h(e,n,o,s){function l(){u&&(delete P.style,delete P.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var f=c(e,o);if(!r(f,"undefined"))return f}for(var u,d,p,h,v,y=["modernizr","tspan","samp"];!P.style&&y.length;)u=!0,P.modElem=a(y.shift()),P.style=P.modElem.style;for(p=e.length,d=0;p>d;d++)if(h=e[d],v=P.style[h],i(h,"-")&&(h=m(h)),P.style[h]!==t){if(s||r(o,"undefined"))return l(),"pfx"==n?h:!0;try{P.style[h]=o}catch(g){}if(P.style[h]!=v)return l(),"pfx"==n?h:!0}return l(),!1}function v(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?h(a,n,o,s):(a=(e+" "+E.join(i+" ")+i).split(" "),f(a,n,t))}function y(e,n,r){return v(e,t,t,n,r)}var g=[],C=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var _=n.documentElement,S="svg"===_.nodeName.toLowerCase(),x="Moz O ms Webkit",b=w._config.usePrefixes?x.split(" "):[];w._cssomPrefixes=b;var E=w._config.usePrefixes?x.toLowerCase().split(" "):[];w._domPrefixes=E;var N={elem:a("modernizr")};Modernizr._q.push(function(){delete N.elem});var P={style:N.elem.style};Modernizr._q.unshift(function(){delete P.style}),w.testAllProps=v,w.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),o(),s(g),delete w.addTest,delete w.addAsyncTest;for(var z=0;z<Modernizr._q.length;z++)Modernizr._q[z]();e.Modernizr=Modernizr}(window,document);

$(function() {
  
  /* Functions for the hero image part */
  addNewItem();
  removeFirstItem();
  setInterval(addNewItem, 2500);
  setInterval(removeFirstItem, 2500);

});

/* Functions for the hero image part */
function removeFirstItem() {
  $('.animation-parts-page.removing').remove();
  $('.animation-parts-page').first().addClass('removing');
}

function addNewItem() {
  // Build a "page" to add to the container
  var newPage = $('<div class="animation-parts-page"><div class="box box1"></div><div class="box box2"></div><div class="box box3"></div><div class="box box4"></div></div>');
  var arrayHeights = randomHeights(),
      arrayWidths = randomWidths();
  $(newPage).find('.box').each(function(index, item) {
    $(item).css({
      height: arrayHeights[index]+'%',
      width: arrayWidths[index]+'%'
    })
  });
  $('.animation-pages-container').append(newPage);
}

function randomHeights() {
  // Produce 4 numbers that add up to 90
  var heights = [],
      total = 0;
  for (var i = 0; i < 4; i++) {
    var randomHeight = rand_10(10, 50);
    if ((total + randomHeight) > (90 - i * 10)) {
      randomHeight = 10;
    }
    if (i === 0) {
      randomHeight = rand_10(10, 20);
    }
    if (i === 3) {
      randomHeight = 90 - total;
    }
    total += randomHeight;
    heights.push(randomHeight);
  }
  return heights;
}

function randomWidths() {
  var widths = [];
  for (var i = 0; i < 4; i++) {
    widths.push(rand_10(50, 90));
  }
  return widths;
}

function rand_10(min, max) {
  return Math.round((Math.random()*(max-min)+min)/10)*10;
}