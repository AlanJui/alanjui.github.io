(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1429:function(t,n,a){"use strict";a.r(n);a(183),a(66),a(0);var i=a(5),e=a(190),r={components:{NavigationIcon:i.k,ClockIcon:i.a},data:function(){return{paginationComponent:null}},created:function(){this.paginationComponent=this.getPaginationComponent()},computed:{pages:function(){return this.$pagination.pages}},methods:{getPaginationComponent:function(){return e.b},resovlePostDate:function(t){return new Date(t.replace(/\-/g,"/").trim()).toDateString()}}},o=(a(454),a(180),a(4)),s=Object(o.a)(r,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"base-list-layout"}},[a("div",{staticClass:"ui-posts"},t._l(t.pages,(function(n){return a("div",{staticClass:"ui-post"},[a("div",{staticClass:"ui-post-title"},[a("NavLink",{attrs:{link:n.path}},[t._v(t._s(n.title))])],1),t._v(" "),a("div",{staticClass:"ui-post-summary"},[t._v("\n        "+t._s(n.frontmatter.summary||n.summary)+"\n        ")]),t._v(" "),n.frontmatter.author?a("div",{staticClass:"ui-post-author"},[a("NavigationIcon"),t._v(" "),a("span",[t._v(t._s(n.frontmatter.author)+" in "+t._s(n.frontmatter.location))])],1):t._e(),t._v(" "),n.frontmatter.date?a("div",{staticClass:"ui-post-date"},[a("ClockIcon"),t._v(" "),a("span",[t._v(t._s(t.resovlePostDate(n.frontmatter.date)))])],1):t._e()])})),0),t._v(" "),t.$pagination.length>1&&t.paginationComponent?a(t.paginationComponent,{tag:"component"}):t._e()],1)}),[],!1,null,null,null);n.default=s.exports},183:function(t,n,a){"use strict";var i=a(21),e=a(55),r=a(25),o=a(28),s=a(61),u=a(62),c=Math.max,l=Math.min,v=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g;a(63)("replace",2,(function(t,n,a,d){return[function(i,e){var r=t(this),o=null==i?void 0:i[n];return void 0!==o?o.call(i,r,e):a.call(String(r),i,e)},function(t,n){var e=d(a,t,this,n);if(e.done)return e.value;var v=i(t),p=String(this),f="function"==typeof n;f||(n=String(n));var h=v.global;if(h){var m=v.unicode;v.lastIndex=0}for(var _=[];;){var C=u(v,p);if(null===C)break;if(_.push(C),!h)break;""===String(C[0])&&(v.lastIndex=s(p,r(v.lastIndex),m))}for(var k,b="",$=0,w=0;w<_.length;w++){C=_[w];for(var S=String(C[0]),I=c(l(o(C.index),p.length),0),x=[],y=1;y<C.length;y++)x.push(void 0===(k=C[y])?k:String(k));var D=C.groups;if(f){var P=[S].concat(x,I,p);void 0!==D&&P.push(D);var A=String(n.apply(void 0,P))}else A=g(S,p,I,x,D,n);I>=$&&(b+=p.slice($,I)+A,$=I+S.length)}return b+p.slice($)}];function g(t,n,i,r,o,s){var u=i+t.length,c=r.length,l=f;return void 0!==o&&(o=e(o),l=p),a.call(s,l,(function(a,e){var s;switch(e.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,i);case"'":return n.slice(u);case"<":s=o[e.slice(1,-1)];break;default:var l=+e;if(0===l)return a;if(l>c){var p=v(l/10);return 0===p?a:p<=c?void 0===r[p-1]?e.charAt(1):r[p-1]+e.charAt(1):a}s=r[l-1]}return void 0===s?"":s}))}}))},185:function(t,n,a){},454:function(t,n,a){"use strict";var i=a(185);a.n(i).a}}]);