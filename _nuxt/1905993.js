(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{207:function(t,e,n){"use strict";n.r(e);n(5),n(77);var o={data:function(){return{links:[{title:"Home",to:"/"},{title:"Team",to:"/team"},{title:"Kontakt",to:"/contact"}],icons:[{icon:"mdi-discord",title:"Discord",to:"https://discord.com/"},{icon:"mdi-twitter",title:"Twitter",to:"https://twitter.com/"},{icon:"mdi-youtube",title:"Youtube",to:"https://www.youtube.de/"}]}},methods:{toggleTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,localStorage.setItem("useDarkTheme",this.$vuetify.theme.dark.toString())}}},r=n(50),l=n(51),c=n.n(l),d=n(306),v=n(456),m=n(457),f=n(203),_=n(458),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[t._l(t.links,(function(link){return n("nuxt-link",{key:link.title,attrs:{to:link.to}},[n("v-btn",{key:link.title,staticClass:"my-2",attrs:{text:"",rounded:""}},[t._v("\n        "+t._s(link.title)+"\n      ")])],1)})),t._v(" "),t._l(t.icons,(function(e){return n("a",{key:e.title,attrs:{href:e.to,target:"_blank"}},[n("v-btn",{key:e.icon,staticClass:"mx-4 mt-2",attrs:{title:e.title,icon:""}},[n("v-icon",{attrs:{size:"28px"}},[t._v("\n          "+t._s(e.icon)+"\n        ")])],1)],1)})),t._v(" "),n("v-btn",{staticClass:"mx-4 mt-2",attrs:{icon:""},on:{click:function(e){return t.toggleTheme()}}},[n("v-icon",{attrs:{size:"28px"}},[t._v(" mdi-brightness-6 ")])],1),t._v(" "),n("v-col",{staticClass:"py-4 text-center",attrs:{cols:"12"}},[t._v("\n      "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Aviron")])])],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCol:v.a,VFooter:m.a,VIcon:f.a,VRow:_.a})},208:function(t,e,n){"use strict";n.r(e);var o=n(209),r={components:{federSession:n(210).default,FederNavtop:o.default},data:function(){return{title:"Aviron Feder",clipped:!1,drawer:!1,drawerItems:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Test",to:"/test"}]}}},l=n(50),c=n(51),d=n.n(c),v=n(463),m=n(459),f=n(306),_=n(203),h=n(204),w=n(137),k=n(205),x=n(69),y=n(462),V=n(460),I=n(300),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.drawerItems,(function(e){return n("v-list-item",{key:e.title,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),n("v-app-bar",{staticClass:"primary-darken",attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("nuxt-link",{attrs:{to:"/"}},[n("v-btn",{attrs:{icon:"",size:"50px"}},[n("img",{staticClass:"home-logo",attrs:{width:"50px",alt:"Home",src:"/logo_512_c.svg"}})])],1),t._v(" "),n("v-toolbar-title",[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),n("v-spacer"),t._v(" "),n("feder-navtop"),t._v(" "),n("v-spacer"),t._v(" "),n("feder-session")],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{FederNavtop:n(209).default,FederSession:n(210).default}),d()(component,{VAppBar:v.a,VAppBarNavIcon:m.a,VBtn:f.a,VIcon:_.a,VList:h.a,VListItem:w.a,VListItemAction:k.a,VListItemContent:x.a,VListItemTitle:x.b,VNavigationDrawer:y.a,VSpacer:V.a,VToolbarTitle:I.a})},209:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{navbarItems:[{title:"Test 1",to:"/test",dropdownItems:[{title:"Test 4",to:"/test"},{title:"Test 5",to:"/test"},{title:"Test 6",to:"/test"}]},{title:"Test 2",to:"/test",dropdownItems:[{title:"Test 4",to:"/test"},{title:"Test 5",to:"/test"},{title:"Test 6",to:"/test"}]},{title:"Test 3",to:"/test",dropdownItems:[{title:"Test 4",to:"/test"},{title:"Test 5",to:"/test"},{title:"Test 16",to:"/test"}]}]}}},r=n(50),l=n(51),c=n.n(l),d=n(306),v=n(204),m=n(137),f=n(69),_=n(446),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.navbarItems,(function(e){return n("v-menu",{key:e.title,attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on,l=o.attrs;return[n("v-btn",t._g(t._b({staticClass:"my-2",attrs:{text:"",rounded:""}},"v-btn",l,!1),r),[t._v("\n        "+t._s(e.title)+"\n      ")])]}}],null,!0)},[t._v(" "),n("v-list",t._l(e.dropdownItems,(function(e){return n("nuxt-link",{key:e.title,attrs:{to:e.to}},[n("v-list-item",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VList:v.a,VListItem:m.a,VListItemTitle:f.b,VMenu:_.a})},210:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{loggedin:!1}},mounted:function(){console.log(localStorage.getItem("Authorization")),null!=localStorage.getItem("Authorization")&&(this.loggedin=!0)},methods:{logout:function(){localStorage.removeItem("Authorization"),window.location.href="/"}}},r=n(50),l=n(51),c=n.n(l),d=n(306),v=n(203),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nuxt-link",{attrs:{to:"/register"}},[t.loggedin?t._e():n("v-btn",{staticClass:"my-2",attrs:{text:"",rounded:""}},[t._v(" Registrieren ")])],1),t._v(" "),n("nuxt-link",{attrs:{to:"/login"}},[t.loggedin?t._e():n("v-btn",{staticClass:"my-2",attrs:{text:"",rounded:""}},[t._v(" Anmelden ")])],1),t._v(" "),t.loggedin?n("v-btn",{staticClass:"my-2",attrs:{text:"",rounded:""},on:{click:t.logout}},[t._v("\n    Ausloggen\n  ")]):t._e(),t._v(" "),t.loggedin?n("nuxt-link",{attrs:{to:"/account"}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-account")])],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VIcon:v.a})},215:function(t,e,n){"use strict";var o=n(1),r=n(307);o.a.use(r.a)},216:function(t,e,n){"use strict";n(5),n(11),n(12);var o=n(1),r=n(98),l=n(217),c=n(302),d=n.n(c);r.c.localize("de",d.a),o.a.component("ValidationProvider",r.b),o.a.component("ValidationObserver",r.a),Object.keys(l.a).forEach((function(t){return r.c.extend(t,l.a[t])})),o.a.use(r.d)},305:function(t,e,n){"use strict";var o=n(207),r=n(208),l={name:"DefaultLayout",components:{federFooter:o.default,FederNavigation:r.default},data:function(){return{clipped:!1,drawer:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],right:!0,rightDrawer:!1,title:"Title"}},mounted:function(){var t=localStorage.getItem("useDarkTheme");t&&(this.$vuetify.theme.dark="true"===t)}},c=n(50),d=n(51),v=n.n(d),m=n(455),f=n(464),_=n(461),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[n("feder-navigation"),t._v(" "),n("v-main",[n("v-container",[n("Nuxt")],1)],1),t._v(" "),n("feder-footer")],1)}),[],!1,null,null,null);e.a=component.exports;v()(component,{FederNavigation:n(208).default,FederFooter:n(207).default}),v()(component,{VApp:m.a,VContainer:f.a,VMain:_.a})},312:function(t,e,n){n(313),t.exports=n(314)},90:function(t,e,n){"use strict";var o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=n(50),l=n(51),c=n.n(l),d=n(455),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:d.a})}},[[312,11,2,12]]]);