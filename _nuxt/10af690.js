(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{212:function(t,e,n){"use strict";n.r(e);n(4),n(77);var r={data:function(){return{links:[{title:"Home",to:"/"},{title:"Team",to:"/team"},{title:"Kontakt",to:"/contact"}],icons:[{icon:"mdi-discord",title:"Discord",to:"https://discord.com/"},{icon:"mdi-twitter",title:"Twitter",to:"https://twitter.com/"},{icon:"mdi-youtube",title:"Youtube",to:"https://www.youtube.de/"}]}},methods:{toggleTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,localStorage.setItem("useDarkTheme",this.$vuetify.theme.dark.toString())}}},o=n(43),c=n(44),l=n.n(c),d=n(314),v=n(470),f=n(471),m=n(208),_=n(472),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[t._l(t.links,(function(link){return n("nuxt-link",{key:link.title,attrs:{to:link.to}},[n("v-btn",{key:link.title,staticClass:"my-2",attrs:{text:"",rounded:""}},[t._v("\n        "+t._s(link.title)+"\n      ")])],1)})),t._v(" "),t._l(t.icons,(function(e){return n("a",{key:e.title,attrs:{href:e.to,target:"_blank"}},[n("v-btn",{key:e.icon,staticClass:"mx-4 mt-2",attrs:{title:e.title,icon:""}},[n("v-icon",{attrs:{size:"28px"}},[t._v("\n          "+t._s(e.icon)+"\n        ")])],1)],1)})),t._v(" "),n("v-btn",{staticClass:"mx-4 mt-2",attrs:{icon:""},on:{click:function(e){return t.toggleTheme()}}},[n("v-icon",{attrs:{size:"28px"}},[t._v(" mdi-brightness-6 ")])],1),t._v(" "),n("v-col",{staticClass:"py-4 text-center",attrs:{cols:"12"}},[t._v("\n      "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Aviron")])])],2)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCol:v.a,VFooter:f.a,VIcon:m.a,VRow:_.a})},213:function(t,e,n){"use strict";n.r(e);var r=n(214),o={components:{federSession:n(215).default,FederNavtop:r.default},data:function(){return{title:"Aviron Feder",clipped:!1,drawer:!1,drawerItems:[{icon:"mdi-apps",title:"Home",to:"/"}]}}},c=n(43),l=n(44),d=n.n(l),v=n(478),f=n(473),m=n(314),_=n(208),h=n(209),k=n(139),x=n(210),w=n(70),y=n(477),V=n(474),E=n(308),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-navigation-drawer",{attrs:{clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",t._l(t.drawerItems,(function(e){return r("v-list-item",{key:e.title,attrs:{to:e.to,router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),r("v-app-bar",{staticClass:"primary-darken",attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("nuxt-link",{attrs:{to:"/"}},[r("v-btn",{attrs:{icon:"",size:"64px"}},[r("img",{attrs:{src:n(403),width:"48px"}})])],1),t._v(" "),r("v-toolbar-title",[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),r("v-spacer"),t._v(" "),r("feder-navtop"),t._v(" "),r("v-spacer"),t._v(" "),r("feder-session")],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{FederNavtop:n(214).default,FederSession:n(215).default}),d()(component,{VAppBar:v.a,VAppBarNavIcon:f.a,VBtn:m.a,VIcon:_.a,VList:h.a,VListItem:k.a,VListItemAction:x.a,VListItemContent:w.a,VListItemTitle:w.b,VNavigationDrawer:y.a,VSpacer:V.a,VToolbarTitle:E.a})},214:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{navbarItems:[{title:"Test Ausgaben",dropdownItems:[{title:"Users",to:"/users"},{title:"Figures",to:"/figures"}]}]}}},o=n(43),c=n(44),l=n.n(c),d=n(314),v=n(209),f=n(139),m=n(70),_=n(459),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.navbarItems,(function(e){return n("v-menu",{key:e.title,attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,c=r.attrs;return[n("v-btn",t._g(t._b({staticClass:"my-2",attrs:{text:"",rounded:""}},"v-btn",c,!1),o),[t._v("\n        "+t._s(e.title)+"\n      ")])]}}],null,!0)},[t._v(" "),n("v-list",t._l(e.dropdownItems,(function(e){return n("nuxt-link",{key:e.title,attrs:{to:e.to}},[n("v-list-item",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VList:v.a,VListItem:f.a,VListItemTitle:m.b,VMenu:_.a})},215:function(t,e,n){"use strict";n.r(e);var r={},o=n(43),c=n(44),l=n.n(c),d=n(314),v=n(208),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("client-only",[n("nuxt-link",{attrs:{to:"/register"}},[t.$auth.loggedIn?t._e():n("v-btn",{staticClass:"my-2",attrs:{text:"",rounded:""}},[t._v(" Registrieren ")])],1),t._v(" "),n("nuxt-link",{attrs:{to:"/login"}},[t.$auth.loggedIn?t._e():n("v-btn",{staticClass:"my-2",attrs:{text:"",rounded:""}},[t._v(" Anmelden ")])],1),t._v(" "),t.$auth.loggedIn?n("v-btn",{staticClass:"my-2",attrs:{text:"",rounded:""},on:{click:function(e){return t.$auth.logout()}}},[t._v("\n      Ausloggen\n    ")]):t._e(),t._v(" "),t.$auth.loggedIn?n("nuxt-link",{attrs:{to:"/account"}},[n("v-btn",{attrs:{text:"",rounded:""}},[t._v("\n        "+t._s(t.$auth.user)+"\n        "),n("v-icon",[t._v("mdi-account")])],1)],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VIcon:v.a})},216:function(t,e,n){"use strict";n.r(e);var r={computed:{snackbars:function(){return this.$store.state.snackbars.snackbars}}},o=n(43),c=n(44),l=n.n(c),d=n(314),v=n(475),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},t._l(t.snackbars,(function(e,r){return n("v-snackbar",{key:r,style:"bottom: "+60*r+"px",attrs:{color:e.type,timeout:e.timeout},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.attrs;return[n("v-btn",t._b({attrs:{text:""},on:{click:function(e){return t.$store.dispatch("snackbars/delSnackbar")}}},"v-btn",r,!1),[t._v("\n        Close\n      ")])]}}],null,!0),model:{value:e.visible,callback:function(n){t.$set(e,"visible",n)},expression:"snackbar.visible"}},[t._v("\n    "+t._s(e.text)+"\n    ")])})),1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VSnackbar:v.a})},220:function(t,e,n){"use strict";var r=n(1),o=n(315);r.a.use(o.a)},221:function(t,e,n){"use strict";n(4),n(12),n(13);var r=n(1),o=n(100),c=n(222),l=n(310),d=n.n(l);o.c.localize("de",d.a),r.a.component("ValidationProvider",o.b),r.a.component("ValidationObserver",o.a),Object.keys(c.a).forEach((function(t){return o.c.extend(t,c.a[t])})),r.a.use(o.d)},313:function(t,e,n){"use strict";var r=n(212),o=n(213),c=n(216),l={name:"DefaultLayout",components:{federFooter:r.default,FederNavigation:o.default,FederSnackbar:c.default},data:function(){return{clipped:!1,drawer:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],right:!0,rightDrawer:!1,title:"Title"}},mounted:function(){var t=localStorage.getItem("useDarkTheme");t&&(this.$vuetify.theme.dark="true"===t)}},d=n(43),v=n(44),f=n.n(v),m=n(469),_=n(479),h=n(476),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[n("feder-navigation"),t._v(" "),n("v-main",[n("v-container",[n("Nuxt")],1)],1),t._v(" "),n("feder-footer"),t._v(" "),n("feder-snackbar")],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{FederNavigation:n(213).default,FederFooter:n(212).default,FederSnackbar:n(216).default}),f()(component,{VApp:m.a,VContainer:_.a,VMain:h.a})},320:function(t,e,n){n(321),t.exports=n(322)},403:function(t,e,n){t.exports=n.p+"img/logo_512_color.02d1cef.svg"},436:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return l})),n.d(e,"getters",(function(){return d}));var r=n(27),o=(n(94),function(){return{healthcheck:!0,users:[],figures:[]}}),c={SET_HEALTHCHECK:function(t,e){t.healthcheck=e},SET_USERS:function(t,e){t.users=e},SET_FIGURES:function(t,e){t.figures=e}},l={healthCheck:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,n.prev=1,n.next=4,e.$axios.get("/health");case 4:r("SET_HEALTHCHECK",!0),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),r("SET_HEALTHCHECK",!1);case 10:case"end":return n.stop()}}),n,null,[[1,7]])})))()},loadUsers:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,n.next=3,e.$axios.get("/abakus/user/all");case 3:o=n.sent,r("SET_USERS",o.data);case 5:case"end":return n.stop()}}),n)})))()},loadFigures:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,n.next=3,e.$axios.get("/abakus/figure/all");case 3:o=n.sent,r("SET_FIGURES",o.data);case 5:case"end":return n.stop()}}),n)})))()}},d={}},437:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o})),n.d(e,"actions",(function(){return c})),n.d(e,"getters",(function(){return l}));n(28);var r=function(){return{snackbars:[]}},o={ADD_SNACKBAR:function(t,e){t.snackbars=t.snackbars.concat(e)},DEL_SNACKBAR:function(t,e){t.snackbars=[]}},c={addSnackbar:function(t,e){(0,t.commit)("ADD_SNACKBAR",e)},delSnackbar:function(t,e){(0,t.commit)("DEL_SNACKBAR",e)}},l={}},92:function(t,e,n){"use strict";var r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=n(43),c=n(44),l=n.n(c),d=n(469),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:d.a})}},[[320,15,3,16]]]);