(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{533:function(t,e,r){"use strict";r.r(e);r(13),r(11),r(14),r(4),r(16),r(12),r(17);var n=r(2),c=r(27),o=(r(94),r(122));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={name:"JournalLettersPage",fetch:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("loadJournalLetters");case 3:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["journalLetters"]))},f=v,d=r(43),_=r(44),O=r.n(_),j=r(481),h=r(480),w=r(470),y=r(472),m=r(526),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"8"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v(" Journal Letters Page ")]),t._v(" "),r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v(" Issue ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v(" Article ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v(" Author ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v(" Submission ")])])]),t._v(" "),r("tbody",t._l(t.journalLetters,(function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.article.issue.date))]),t._v(" "),r("td",[t._v(t._s(e.article.title))]),t._v(" "),r("td",[t._v(t._s(e.author.name))]),t._v(" "),r("td",[t._v(t._s(e.dateTime))])])})),0)]},proxy:!0}])})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{VCard:j.a,VCardTitle:h.c,VCol:w.a,VRow:y.a,VSimpleTable:m.a})}}]);