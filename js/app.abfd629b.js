(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)o=s[u],r[o]&&p.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0884":function(t,e,a){"use strict";var n=a("1a5e"),r=a.n(n);r.a},"0d29":function(t,e,a){t.exports=a.p+"img/linkedin.85ef3158.svg"},"0fff":function(t,e,a){"use strict";var n=a("ba86"),r=a.n(n);r.a},"1a5e":function(t,e,a){},"4ffd":function(t,e,a){t.exports=a.p+"img/logo.c711a491.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{name:"slide-y-transition"}},[t.loaded_truth_logo?t._e():a("LoadLogo",{on:{loaded:t.loaded}})],1),a("transition",{attrs:{name:"fade-transition",tag:"v-app"}},[t.loaded_truth_app?a("v-app",[a("NavigationDrawer",{attrs:{drawer_truth:t.drawer_truth},on:{drawer_:t.drawerToggle_}}),a("AppBar",{attrs:{drawer_truth:t.drawer_truth},on:{drawer:t.drawerToggle}}),a("v-content",[a("v-container",{attrs:{fluid:""}},[a("transition",{attrs:{name:"scroll-y-transition"}},[a("router-view")],1)],1)],1)],1):t._e()],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"","elevate-on-scroll":"","hide-on-scroll":"","scroll-threshold":"576",height:"72",color:"#191919"}},[n("v-btn",{class:{"ml-1":t.$vuetify.breakpoint.smAndDown,"pl-5, ml-5":t.$vuetify.breakpoint.mdAndUp},attrs:{icon:"",color:"amber lighten-4"},on:{click:t.goTo}},[n("v-img",{attrs:{src:a("4ffd"),"aspect-ratio":"1",contain:""}})],1),n("v-spacer"),"index"===t.$route.name?n("div",{class:["pr-5","mr-5","mt-4"]},[n("transition-group",{attrs:{name:"slide-y-transition"}},t._l(t.items,function(e){return n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],key:e.title,class:["hidden-sm-and-down","app-bar-font","amber--text","text--lighten-4"],attrs:{text:""},on:{click:function(a){return t.linkTo(e.link)}}},[t._v("\n      "+t._s(e.title)+"\n    ")])}),1)],1):t._e(),"index"===t.$route.name?n("v-btn",{class:["mr-1","hidden-md-and-up"],attrs:{icon:"",color:"amber lighten-4"},on:{click:function(e){t.drawer=!t.drawer}}},[n("v-icon",[t._v("mdi-chevron-left")])],1):t._e()],1)},s=[],l=(a("a481"),{props:["drawer_truth"],data:function(){return{drawer:null,items:[{title:"ABOUT",link:"#about"},{title:"PROJECTS",link:"#projects"},{title:"CONTACT",link:"#contact"}],loaded:!1}},methods:{goTo:function(){window.location.replace("https://davebaraka.dev")},linkTo:function(t){document.querySelector(t).scrollIntoView({behavior:"smooth"})}},watch:{drawer_truth:function(){this.drawer=this.drawer_truth},drawer:function(){this.$emit("drawer",this.drawer)}},mounted:function(){this.loaded=!0}}),c=l,d=a("2877"),u=a("6544"),p=a.n(u),h=a("40dc"),v=a("8336"),m=a("132d"),f=a("adda"),b=a("2fa4"),g=Object(d["a"])(c,o,s,!1,null,null,null),w=g.exports;p()(g,{VAppBar:h["a"],VBtn:v["a"],VIcon:m["a"],VImg:f["a"],VSpacer:b["a"]});var y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{staticClass:"hidden-md-and-up",attrs:{app:"",temporary:!0,color:"amber lighten-4",right:!0},model:{value:t.drawer_,callback:function(e){t.drawer_=e},expression:"drawer_"}},[a("v-container",{attrs:{fluid:"","fill-height":"","justify-center":"","align-center":""}},[a("v-list",t._l(t.items,function(e){return a("v-list-item",{key:e.title,staticClass:"text-center",attrs:{link:""},on:{click:function(a){return t.linkTo(e.link)}}},[a("v-list-item-title",{class:["myColor-text","evolve-evo-b","py-5"]},[t._v(t._s(e.title)+"\n    ")])],1)}),1)],1)],1)},_=[],k={props:["drawer_truth"],data:function(){return{drawer_:null,items:[{title:"ABOUT",link:"#about"},{title:"PROJECTS",link:"#projects"},{title:"CONTACT",link:"#contact"}]}},methods:{linkTo:function(t){document.querySelector(t).scrollIntoView({behavior:"smooth"}),this.drawer_=!1}},watch:{drawer_truth:function(){this.drawer_truth?document.documentElement.setAttribute("style","overscroll-behavior: none;"):document.documentElement.setAttribute("style","overscroll-behavior: auto;"),this.drawer_=this.drawer_truth},drawer_:function(){this.$emit("drawer_",this.drawer_)}}},C=k,x=a("a523"),T=a("8860"),A=a("da13"),O=a("5d23"),V=a("f774"),j=Object(d["a"])(C,y,_,!1,null,null,null),I=j.exports;p()(j,{VContainer:x["a"],VList:T["a"],VListItem:A["a"],VListItemTitle:O["a"],VNavigationDrawer:V["a"]});var S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-container",{staticClass:"animated fadeIn",attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-img",{staticClass:"animated infinite pulse",attrs:{src:a("4ffd"),"aspect-ratio":"1","max-width":"125","max-height":"75",contain:""}})],1)],1)],1)},E=[],P={data:function(){return{loaded:!1}},watch:{loaded:function(){this.$emit("loaded",this.loaded)}},mounted:function(){var t=this;setTimeout(function(){return t.loaded=!0},3e3)}},L=P,N=a("7496"),M=a("a722"),D=Object(d["a"])(L,S,E,!1,null,null,null),R=D.exports;p()(D,{VApp:N["a"],VContainer:x["a"],VImg:f["a"],VLayout:M["a"]});var B={name:"App",components:{AppBar:w,NavigationDrawer:I,LoadLogo:R},data:function(){return{drawer_truth:null,loaded_truth_logo:!1,loaded_truth_app:!1,hide:!1}},methods:{drawerToggle:function(t){this.drawer_truth=t},drawerToggle_:function(t){this.drawer_truth=t},loaded:function(t){var e=this;this.loaded_truth_logo=t,setTimeout(function(){return e.loaded_truth_app=t},1500)}}},$=B,F=(a("a8de"),a("a75b")),G=Object(d["a"])($,r,i,!1,null,null,null),U=G.exports;p()(G,{VApp:N["a"],VContainer:x["a"],VContent:F["a"]});var H=a("8c4f"),J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Preamble"),a("About"),a("FeaturedProjects"),a("ContactMe")],1)},q=[],z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"fill-main",attrs:{"align-start":""}},[a("v-flex",[a("transition",{attrs:{name:"slide-y-reverse-transition"}},[t.loaded?a("div",[a("p",{staticClass:"font-0 hidden-sm-and-down"},[t._v("Hi, my name is")]),a("p",{staticClass:"font-0-0 hidden-md-and-up"},[t._v("Hi, my name is")])]):t._e()]),a("transition",{attrs:{name:"slide-y-reverse-transition",tag:"div"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded1,expression:"loaded1"}]},[a("p",{staticClass:"font-1 hidden-sm-and-down"},[t._v("DAVID BARAKA.")]),a("p",{staticClass:"font-1-2 hidden-md-and-up"},[t._v("DAVID BARAKA.")])])]),a("transition",{attrs:{name:"slide-y-reverse-transition"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded2,expression:"loaded2"}]},[a("p",{staticClass:"font-0 hidden-sm-and-down"},[a("em",[t._v('"The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less."')]),t._v(" - Socrates")]),a("p",{staticClass:"font-0-0 hidden-md-and-up"},[a("em",[t._v('"The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less."')]),t._v(" - Socrates")])])]),a("div",{attrs:{id:"about"}})],1)],1)},W=[],Y={data:function(){return{loaded:!1,loaded1:!1,loaded2:!1}},methods:{onLoaded:function(){var t=this;setTimeout(function(){return t.loaded=!0},500),setTimeout(function(){return t.loaded1=!0},750),setTimeout(function(){return t.loaded2=!0},1e3)}},mounted:function(){this.onLoaded()}},K=Y,Q=(a("ec8f"),a("0e8f")),X=Object(d["a"])(K,z,W,!1,null,"e05d1d6c",null),Z=X.exports;p()(X,{VFlex:Q["a"],VLayout:M["a"]});var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"fill",attrs:{"align-start":"",column:""}},[a("transition",{attrs:{name:"slide-y-reverse-transition",tag:"div"}},[a("div",[a("v-flex",{attrs:{shrink:""}},[a("h2",{staticClass:"sub-heading"},[t._v("ABOUT ME")])]),a("p",{staticClass:"font-0"},[t._v("Do you take at least 2 hours to find the perfect wallpaper for your device? I do!")]),a("v-btn",{attrs:{large:"",color:"amber lighten-4"},on:{click:function(e){return t.$router.push("about")}}},[t._v("Learn More")]),a("br"),a("v-flex",{staticClass:"move hidden-sm-and-down",attrs:{shrink:""}},[a("div",{staticClass:"rectangle"}),a("v-img",{staticClass:"grey lighten-2",staticStyle:{"box-shadow":"0px 3px 15px rgba(0,0,0,0.2)"},attrs:{src:"https://picsum.photos/id/11/500/300","lazy-src":"https://picsum.photos/id/11/10/6","aspect-ratio":"1",width:"500",height:"300"}})],1),a("v-flex",{staticClass:"hidden-md-and-up",attrs:{shrink:""}},[a("br"),a("div",{staticClass:"rectangle-sm"}),a("v-img",{staticClass:"grey lighten-2",staticStyle:{"box-shadow":"0px 3px 15px rgba(0,0,0,0.2)"},attrs:{src:"https://picsum.photos/id/11/500/300","lazy-src":"https://picsum.photos/id/11/10/6","aspect-ratio":"1",width:"250",height:"150"}})],1)],1)]),a("div",{attrs:{id:"projects"}})],1)},et=[],at={data:function(){return{loaded:!1}},methods:{}},nt=at,rt=(a("0fff"),Object(d["a"])(nt,tt,et,!1,null,"f8f51b66",null)),it=rt.exports;p()(rt,{VBtn:v["a"],VFlex:Q["a"],VImg:f["a"],VLayout:M["a"]});var ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"fill",attrs:{"align-start":"",column:""}},[n("transition",{attrs:{name:"slide-y-reverse-transition",tag:"div"}},[n("div",[n("v-flex",{attrs:{shrink:""}},[n("h2",{staticClass:"sub-heading"},[t._v("SOME THINGS I'VE BUILT")]),n("br")]),n("v-flex",{staticClass:"move hidden-sm-and-down",attrs:{shrink:""}},[n("v-img",{staticClass:"black lighten-2 photo",attrs:{src:a("eb9c"),"aspect-ratio":"1",width:"500",height:"300"}}),n("div",{staticClass:"rectangle",staticStyle:{padding:"3%"}},[n("h3",[t._v("OurCampus")]),n("p",[t._v("Android app for campus events, professor ratings, and student utilities.")]),n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"#191919"},on:{click:function(e){return t.linkTo("https://github.com/davebaraka/projects/tree/master/ourcampus")}}},[t._v("Learn More")])],1),n("br"),n("br"),n("br"),n("br")],1),n("v-flex",{staticClass:"hidden-md-and-up",attrs:{shrink:""}},[n("br"),n("v-img",{staticClass:"black lighten-2",attrs:{src:a("eb9c"),"aspect-ratio":"1",width:"250",height:"150"}}),n("div",{staticClass:"rectangle-sm",staticStyle:{padding:"3%"}},[n("h3",{staticClass:"sm1"},[t._v("OurCampus")]),n("p",{staticClass:"sm"},[t._v("Android app for campus events, professor ratings, and student utilities.")]),n("v-btn",{staticClass:"ma-2 sm",attrs:{small:"",outlined:"",color:"#191919"},on:{click:function(e){return t.linkTo("https://github.com/davebaraka/projects/tree/master/ourcampus")}}},[t._v("Learn More")])],1),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],1),n("v-flex",{staticClass:"move hidden-sm-and-down",attrs:{shrink:""}},[n("v-img",{staticClass:"black lighten-2 photo",attrs:{src:a("b735"),"aspect-ratio":"1",width:"500",height:"300"}}),n("div",{staticClass:"rectangle",staticStyle:{padding:"3%"}},[n("h3",[t._v("Compliance Traceability: Privacy Policies as Software Development Artifacts")]),n("p",[t._v("Privacy policy generator that automatically generates a privacy policy based on a developer's code.")]),n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"#191919"},on:{click:function(e){return t.linkTo("mailto:dbaraka@wesleyan.edu")}}},[t._v("Learn More")])],1),n("br"),n("br"),n("br"),n("br")],1),n("v-flex",{staticClass:"hidden-md-and-up",attrs:{shrink:""}},[n("br"),n("v-img",{staticClass:"black lighten-2",attrs:{src:a("b735"),"aspect-ratio":"1",width:"250",height:"150"}}),n("div",{staticClass:"rectangle-sm",staticStyle:{padding:"3%"}},[n("h3",{staticClass:"sm1"},[t._v("Compliance Traceability: Privacy Policies as Software Development Artifacts")]),n("p",{staticClass:"sm"},[t._v("Privacy policy generator that automatically generates a privacy policy based on a developer's code. ")]),n("v-btn",{staticClass:"ma-2 sm",attrs:{small:"",outlined:"",color:"#191919"},on:{click:function(e){return t.linkTo("mailto:dbaraka@wesleyan.edu")}}},[t._v("Learn More")])],1),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],1),n("v-flex",{staticClass:"move hidden-sm-and-down",attrs:{shrink:""}},[n("v-img",{staticClass:"black lighten-2 photo",attrs:{src:a("8b8a"),"aspect-ratio":"1",width:"500",height:"300"}}),n("div",{staticClass:"rectangle",staticStyle:{padding:"3%"}},[n("h3",[t._v("GRAPHIC DESIGN PORTFOLIO")]),n("p",[t._v("Several projects created using Adobe InDesign. Featuring a re-creation of the book jacket, "),n("em",[t._v("Things Not Seen")]),t._v(", by Andrew Clements.")]),n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"#191919"},on:{click:function(e){return t.linkTo("https://github.com/davebaraka/projects/tree/master/graphic-design-portfolio")}}},[t._v("See My Portfolio")])],1),n("br"),n("br"),n("br")],1),n("v-flex",{staticClass:"hidden-md-and-up",attrs:{shrink:""}},[n("br"),n("v-img",{staticClass:"black lighten-2",attrs:{src:a("8b8a"),"aspect-ratio":"1",width:"250",height:"150"}}),n("div",{staticClass:"rectangle-sm",staticStyle:{padding:"3%"}},[n("h3",{staticClass:"sm1"},[t._v("GRAPHIC DESIGN PORTFOLIO")]),n("p",{staticClass:"sm"},[t._v("Several projects created using Adobe InDesign. Featuring a re-creation of the book jacket, "),n("em",[t._v("Things Not Seen")]),t._v(", by Andrew Clements.")]),n("v-btn",{staticClass:"ma-2 sm",attrs:{small:"",outlined:"",color:"#191919"},on:{click:function(e){return t.linkTo("https://github.com/davebaraka/projects/tree/master/graphic-design-portfolio")}}},[t._v("See My Portfolio")])],1),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],1),n("v-btn",{attrs:{large:"",color:"amber lighten-4"},on:{click:function(e){t.loaded=!t.loaded}}},[t._v("MORE")]),n("br"),n("br")],1)]),t.loaded?n("MoreProjects"):t._e()],1)},st=[],lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade-transition",tag:"v-container"}},[n("v-container",{attrs:{"grid-list-xl":""}},[n("h2",{staticClass:"sub-heading"},[t._v("MORE PROJECTS")]),n("v-layout",{attrs:{wrap:""}},t._l(t.items,function(e){return n("v-flex",{key:e.title,attrs:{shrink:"","pr-4":""}},[n("v-card",{staticClass:"amber lighten-4",attrs:{elevation:"12","min-height":"250",width:"500",hover:""}},[n("v-card-title",{staticClass:"cardTitle"},[t._v(" "+t._s(e.title)+" ")]),n("v-card-text",{staticClass:"cardText"},[t._v(" "+t._s(e.text)+" ")]),n("v-card-actions",[n("v-btn",{attrs:{icon:""},on:{click:function(a){return t.linkTo(e.link)}}},[n("v-img",{attrs:{src:a("6b08"),"aspect-ratio":"1",contain:""}})],1)],1)],1)],1)}),1)],1)],1)},ct=[],dt={data:function(){return{loaded:!1,items:[{title:"STANDARD ML OF NEW JERSEY IMPLEMENTATION",text:"An implementation of the programming language SML including lexcial analysis, parsing, type-checking and type-inference, interpretation, and compilation.",link:"mailto:dbaraka@wesleyan.edu"},{title:"THE EVOLVING NBA",text:'R Project examining the diffusion of the "Golden State Warriors style of basketball" across the NBA.',link:"https://github.com/davebaraka/projects/blob/master/data-analysis/evolving-nba.pdf"},{title:"PROPOSITIONAL SEQUENT CALCULUS PROVER",text:"Python program that automatically detects whether a given logcial statement is a tautology. Ohterwise, provides a counterexample.",link:"https://github.com/davebaraka/projects/blob/master/sequent-calculus-prover/propositional-sequent-calculus-prover.py"},{title:"DIGITAL ART PROTFOLIO",text:"Various art projects utilizing laser-cutting, Adobe Photoshop, and Adobe Illustrator.",link:"https://github.com/davebaraka/projects/tree/master/digital-art-portfolio"},{title:"HOPPER",text:"A biologically-inspired hopper constructed from a limited set of materials. “Fail early and fail often.”",link:"https://github.com/davebaraka/projects/blob/master/hopper-portfolio/hopper-portfolio.pdf"},{title:"PYTHON GAMES",text:"A collection of games created in python.",link:"https://github.com/davebaraka/projects/tree/master/python-games"},{title:"BAYESIAN INFERENCE",text:"SML program that performs statistical analysis on text.",link:"https://github.com/davebaraka/projects/tree/master/bayesian-inference"},{title:"ENVIRONMENTAL ADOVOCACY POSTER",text:"Poster created as an initiaive to heighten environmental awareness.",link:"https://github.com/davebaraka/projects/blob/master/environmental-awareness/advocacy.pdf"},{title:"FLOATING GARDEN",text:"Portable garden for plants that requires minimal maintenance.",link:"https://github.com/davebaraka/projects/blob/master/environmental-awareness/floating-garden.pdf"}]}},methods:{linkTo:function(t){"mailto:dbaraka@wesleyan.edu"==t?window.location.href=t:window.open(t,"_blank")}}},ut=dt,pt=(a("58ef"),a("b0af")),ht=a("99d9"),vt=Object(d["a"])(ut,lt,ct,!1,null,"c55d60e6",null),mt=vt.exports;p()(vt,{VBtn:v["a"],VCard:pt["a"],VCardActions:ht["a"],VCardText:ht["b"],VCardTitle:ht["c"],VContainer:x["a"],VFlex:Q["a"],VImg:f["a"],VLayout:M["a"]});var ft={components:{MoreProjects:mt},data:function(){return{loaded:!1}},methods:{linkTo:function(t){"mailto:dbaraka@wesleyan.edu"==t?window.location.href=t:window.open(t,"_blank")}}},bt=ft,gt=(a("826c"),Object(d["a"])(bt,ot,st,!1,null,"b713dc1a",null)),wt=gt.exports;p()(gt,{VBtn:v["a"],VFlex:Q["a"],VImg:f["a"],VLayout:M["a"]});var yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"fill",attrs:{"align-start":"",column:"",id:"contact"}},[n("v-flex",{attrs:{shrink:""}},[n("h2",{staticClass:"sub-heading"},[t._v("LET'S GET IN TOUCH")]),n("br")]),n("v-flex",{staticStyle:{"margin-left":"5%"},attrs:{grow:""}},[n("v-btn",{staticClass:"space",attrs:{icon:""},on:{click:function(e){return t.linkTo("mailto:dbaraka@wesleyan.edu")}}},[n("v-img",{attrs:{src:a("d870"),"aspect-ratio":"1",contain:""}})],1),n("v-btn",{staticClass:"space",attrs:{icon:""},on:{click:function(e){return t.linkTo("https://www.linkedin.com/in/davebaraka/")}}},[n("v-img",{attrs:{src:a("0d29"),"aspect-ratio":"1",contain:""}})],1),n("v-btn",{staticClass:"space",attrs:{icon:""},on:{click:function(e){return t.linkTo("https://github.com/davebaraka/projects")}}},[n("v-img",{attrs:{src:a("6bff"),"aspect-ratio":"1",contain:""}})],1),n("v-btn",{staticClass:"space",attrs:{icon:""},on:{click:function(e){return t.linkTo("tel:802-222-0849")}}},[n("v-img",{attrs:{src:a("7a08"),"aspect-ratio":"1",contain:""}})],1)],1),n("v-flex",{attrs:{grow:""}},[n("p",{staticClass:"font2"},[t._v("Designed & Built By "),n("br"),t._v("David Baraka")])])],1)},_t=[],kt={data:function(){return{loaded:!1}},methods:{},linkTo:function(t){"mailto:dbaraka@wesleyan.edu"==t||"tel:802-222-0849"==t?window.location.href=t:window.open(t,"_blank")}},Ct=kt,xt=(a("0884"),Object(d["a"])(Ct,yt,_t,!1,null,"4eaccfc4",null)),Tt=xt.exports;p()(xt,{VBtn:v["a"],VFlex:Q["a"],VImg:f["a"],VLayout:M["a"]});var At={components:{Preamble:Z,About:it,FeaturedProjects:wt,ContactMe:Tt}},Ot=At,Vt=Object(d["a"])(Ot,J,q,!1,null,"388267b8",null),jt=Vt.exports,It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"confine",attrs:{"align-center":"","justify-center":"","fill-height":""}},[a("v-card",{staticClass:"mx-auto amber lighten-4 move",attrs:{"max-width":"500"}},[a("v-card-title",{staticClass:"heading textColor"},[t._v("ABOUT ME")]),a("v-card-text",[a("br"),a("p",[t._v("I’m a third year undergraduate at Wesleyan University pursing a Bachelor’s Degree in Computer Science and a minor in Integrated Design, Engineering, and Applied Sciences. ")]),a("p",[t._v("I enjoy designing, creating, and coding intuitive applications that focus on simplicity and elegance, while maintaining or improving the performance and functionality of the project. In searching for new and creative ideas, many times I find myself coming back to old ideas—expanding, extracting, and discovering things you only see when you love what you do.")]),a("p",[t._v("In the case of finding “the perfect wallpaper,” I would have never realized the value of the default wallpaper. ")]),a("p",[t._v("When I’m not writing code or staring at pixels, you’ll find me spending time with friends, listening to music, or enjoying my inner foodie. ")])])],1)],1)},St=[],Et={components:{}},Pt=Et,Lt=(a("8e9b"),Object(d["a"])(Pt,It,St,!1,null,"2fca5447",null)),Nt=Lt.exports;p()(Lt,{VCard:pt["a"],VCardText:ht["b"],VCardTitle:ht["c"],VLayout:M["a"]}),n["a"].use(H["a"]);var Mt=new H["a"]({mode:"history",base:"/",routes:[{path:"/",name:"index",component:jt},{path:"/about",name:"about",component:Nt}]}),Dt=a("f309");n["a"].use(Dt["a"]);var Rt=new Dt["a"]({icons:{iconfont:"mdi"}}),Bt=(a("77ed"),a("7707")),$t=a.n(Bt);$t.a.polyfill(),n["a"].config.productionTip=!1,new n["a"]({router:Mt,vuetify:Rt,render:function(t){return t(U)}}).$mount("#app")},"58ef":function(t,e,a){"use strict";var n=a("7049"),r=a.n(n);r.a},"6b08":function(t,e,a){t.exports=a.p+"img/link.707f61b3.svg"},"6bff":function(t,e,a){t.exports=a.p+"img/github.b4b7885a.svg"},"6e50":function(t,e,a){},7049:function(t,e,a){},"71ce":function(t,e,a){},"777b":function(t,e,a){},"7a08":function(t,e,a){t.exports=a.p+"img/phone.c1140411.svg"},"826c":function(t,e,a){"use strict";var n=a("71ce"),r=a.n(n);r.a},"8b8a":function(t,e,a){t.exports=a.p+"img/gd.3176da9a.png"},"8e9b":function(t,e,a){"use strict";var n=a("6e50"),r=a.n(n);r.a},a8d0:function(t,e,a){},a8de:function(t,e,a){"use strict";var n=a("a8d0"),r=a.n(n);r.a},b735:function(t,e,a){t.exports=a.p+"img/screenshot1.0c0d95ca.png"},ba86:function(t,e,a){},d870:function(t,e,a){t.exports=a.p+"img/envelope.acd15839.svg"},eb9c:function(t,e,a){t.exports=a.p+"img/screenshot.8df59414.png"},ec8f:function(t,e,a){"use strict";var n=a("777b"),r=a.n(n);r.a}});
//# sourceMappingURL=app.abfd629b.js.map