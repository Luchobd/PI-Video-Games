(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(21),r=a.n(c),s=(a(48),a(49),a(4)),i=a(5),l=(a(50),a.p+"static/media/GAMEWORLD2.c4cb1ef7.png"),o=a(0);var d=function(){return Object(o.jsxs)("div",{className:"landingPage",children:[Object(o.jsxs)("picture",{className:"landing__logo",children:[Object(o.jsx)("img",{src:l,alt:"Logo"}),Object(o.jsx)("p",{className:"landing__parragraf",children:"THIS IS YOUR WORLD"})]}),Object(o.jsx)("div",{className:"landing__init",children:Object(o.jsx)(i.c,{to:"/home",children:Object(o.jsx)("button",{className:"landing__init_btn",children:"GAMEWORLD"})})})]})},j=a(12),m=a(7),u=a(14),b=a(24),_=a(25),O=a.n(_),h="GET_VIDEOGAMES",p="GET_GENDERS",g="FILTER_BY_GENDER",x="FILTER_BY_CREATED",f="ORDER_BY_NAME",v="ORDER_BY_RATING",N="GET_NAME_VIDEOGAMES",E="POST_VIDEOGAME",A="GET_DETAILS",y="CLEAN_FILTER",S=function(){return function(e){return fetch("http://localhost:3001/videogames").then((function(e){return e.json()})).then((function(t){e({type:"GET_VIDEOGAMES",payload:t})}))}};function C(){return function(e){return fetch("http://localhost:3001/gender").then((function(e){return e.json()})).then((function(t){e({type:"GET_GENDERS",payload:t})}))}}a(83);var G=function(e){var t=e.name,a=e.genders,n=e.rating,c=e.background_image;return console.log(a),Object(o.jsx)("div",{className:"card__container",children:Object(o.jsxs)("div",{className:"card__content",children:[Object(o.jsx)("picture",{className:"card__img",children:Object(o.jsx)("img",{src:c,alt:t})}),Object(o.jsx)("h2",{className:"card__title",children:t}),Object(o.jsx)("h3",{className:"card__genders",children:"object"===typeof a[0]?a.map((function(e){return e.name+" "})):a.map((function(e){return e+" "}))}),Object(o.jsx)("h4",{className:"card__rating",children:n})]})})};a(84);var D=function(){var e=Object(m.b)(),t=Object(n.useState)(""),a=Object(j.a)(t,2),c=a[0],r=a[1],s=function(t){t.preventDefault(),e(function(e){return function(){var t=Object(b.a)(Object(u.a)().mark((function t(a){var n,c;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="http://localhost:3001/videogames?name=".concat(e),t.next=3,O.a.get(n);case 3:return c=t.sent,t.abrupt("return",a({type:"GET_NAME_VIDEOGAMES",payload:c.data}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(c)),r("")};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("form",{className:"search__form",onSubmit:function(e){return s(e)},children:[Object(o.jsx)("input",{type:"text",placeholder:"Search...",value:c,className:"search__form_input",onChange:function(e){return function(e){e.preventDefault(),r(e.target.value)}(e)}}),Object(o.jsx)("button",{type:"submit",className:"search__form_btn",children:"GO"})]})})},k=(a(85),a.p+"static/media/GAMEWORLD3.c7bdc8b6.png");var R=function(e){for(var t=e.videogamesPerPage,a=e.allVideogames,n=e.paginated,c=[],r=1;r<=Math.ceil(a/t);)c.push(r),r++;return Object(o.jsxs)("div",{className:"paginated__principal_container",children:[Object(o.jsx)("nav",{className:"paginated__container",children:Object(o.jsx)("ul",{className:"paginated",children:c&&c.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:function(){return n(e)},children:"".concat(e)})},e)}))})}),Object(o.jsx)("picture",{className:"paginated__logo",children:Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("img",{src:k,alt:"Logo"})})}),Object(o.jsx)("div",{children:Object(o.jsx)(D,{})})]})},L=(a(86),a.p+"static/media/logo.3c4275df.png");var T=function(){return Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("nav",{className:"nav",children:Object(o.jsxs)("ul",{className:"navUl",children:[Object(o.jsx)("picture",{className:"navbar__logo",children:Object(o.jsx)(i.c,{className:"navbar__link navbar__link_img",exact:!0,to:"/",children:Object(o.jsx)("img",{src:L,alt:"Logo",className:"navbar__link_img"})})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.c,{className:"navbar__link",to:"/home",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.c,{className:"navbar__link",to:"/videogame",children:"Videogame Creation"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.c,{className:"navbar__link",to:"/thanks",children:"Thanks"})})]})})})},V=(a(87),a.p+"static/media/render.2cfe601a.gif");var w=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.videogames})),a=Object(m.c)((function(e){return e.genders})),c=Object(n.useState)(""),r=Object(j.a)(c,2),s=(r[0],r[1]),l=Object(n.useState)(1),d=Object(j.a)(l,2),u=d[0],b=d[1],_=Object(n.useState)(15),O=Object(j.a)(_,1)[0],h=u*O,p=h-O,g=t.slice(p,h);return Object(n.useEffect)((function(){e(S()),e(C())}),[e]),Object(o.jsxs)("div",{children:[Object(o.jsx)(T,{}),"Game not found"===t[0]?Object(o.jsx)("div",{className:"home__not_exist",children:Object(o.jsx)("h2",{children:"Videogame Not Exist!!"})}):Object(o.jsxs)("div",{children:[Object(o.jsx)(R,{videogamesPerPage:O,allVideogames:t.length,paginated:function(e){b(e)}}),Object(o.jsxs)("div",{className:"home__container_select",children:[Object(o.jsxs)("section",{className:"home__selection_select",children:[Object(o.jsx)("h3",{className:"home__title_select",children:"Rating"}),Object(o.jsx)("select",{className:"home__option_select",onChange:function(t){return function(t){t.preventDefault(),e({type:"ORDER_BY_RATING",payload:t.target.value}),b(1),s("Ordenado ".concat(t.target.value))}(t)},children:Object(o.jsxs)("optgroup",{label:"Rating",children:[Object(o.jsx)("option",{value:"ascRtg",children:"1 - 5"}),Object(o.jsx)("option",{value:"descRtg",children:"5 - 1"})]})})]}),Object(o.jsxs)("section",{className:"home__selection_select",children:[Object(o.jsx)("h3",{className:"home__title_select",children:"Alphabetic"}),Object(o.jsx)("select",{className:"home__option_select",onChange:function(t){return function(t){t.preventDefault(),e({type:"ORDER_BY_NAME",payload:t.target.value}),b(1),s("Ordenado ".concat(t.target.value))}(t)},children:Object(o.jsxs)("optgroup",{label:"Alphabetic",children:[Object(o.jsx)("option",{value:"ascAlf",children:"A - Z"}),Object(o.jsx)("option",{value:"descAlf",children:"Z - A"})]})})]}),Object(o.jsx)("button",{className:"home__btn_reset",onClick:function(t){return function(t){t.preventDefault(),e(S()),b(1)}(t)},children:"Reset"}),Object(o.jsxs)("section",{className:"home__selection_select",children:[Object(o.jsx)("h3",{className:"home__title_select",children:"Videogames"}),Object(o.jsxs)("select",{className:"home__option_select",onChange:function(t){return function(t){t.preventDefault(),e({type:"FILTER_BY_CREATED",payload:t.target.value})}(t)},children:[Object(o.jsx)("option",{value:"All",children:"All..."}),Object(o.jsx)("optgroup",{label:"API",children:Object(o.jsx)("option",{value:"VideoGame",children:"Videogames"})}),Object(o.jsx)("optgroup",{label:"Created",children:Object(o.jsx)("option",{value:"VideoGameCreated",children:"Videogames Created"})})]})]}),Object(o.jsxs)("section",{className:"home__selection_select",children:[Object(o.jsx)("h3",{className:"home__title_select",children:"Genders"}),Object(o.jsxs)("select",{className:"home__option_select",onChange:function(t){return function(t){t.preventDefault(),e({type:"FILTER_BY_GENDER",payload:t.target.value})}(t)},children:[Object(o.jsx)("option",{value:"All",children:"All..."}),Object(o.jsx)("optgroup",{label:"Genders",children:null===a||void 0===a?void 0:a.map((function(e){return Object(o.jsx)("option",{value:e.name,children:e.name},e.id)}))})]})]})]}),t.length?Object(o.jsx)("div",{className:"home__render_cards",children:null===g||void 0===g?void 0:g.map((function(e){return Object(o.jsx)("div",{children:Object(o.jsx)(i.c,{to:"/videogame/".concat(e.id),className:"home__link_cards",children:Object(o.jsx)(G,{name:e.name,genders:e.genders.map((function(e){return e})),rating:"Rating: "+e.rating,background_image:e.background_image?e.background_image:Object(o.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjBJWlHCDYQu_KapwEg1c3SFFxYoW3bpvmQ&usqp=CAU",alt:"Default_Image"})})})},e.id)}))}):Object(o.jsx)("picture",{className:"home__loading",children:Object(o.jsx)("img",{src:V,alt:"Loading"})})]})]})};a(88);var I=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(T,{}),Object(o.jsx)("div",{className:"thanks__container"})]})};a(89);var F=function(){var e=Object(m.b)(),t=Object(s.g)().idVideogame;Object(n.useEffect)((function(){return e(function(e){return console.log(e),function(){var t=Object(b.a)(Object(u.a)().mark((function t(a){var n,c;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="http://localhost:3001/videogame/".concat(e),t.next=3,O.a.get(n);case 3:return c=t.sent,console.log(c.data),t.abrupt("return",a({type:"GET_DETAILS",payload:c.data}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t)),function(){e({type:"CLEAN_FILTER",payload:[]})}}),[e,t]);var a=Object(m.c)((function(e){return e.detail}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"detail__container",children:Object(o.jsx)("div",{className:"detail__content",children:Object(o.jsxs)("section",{className:"detail__content_info",children:[Object(o.jsx)("picture",{className:"detail__img",children:Object(o.jsx)("img",{src:a.background_image,alt:"image_detail",width:"200px",weight:"250px"})}),Object(o.jsxs)("article",{children:[Object(o.jsx)("h2",{className:"detail__title",children:a.name}),Object(o.jsx)("h3",{className:"detail__genders",children:a.genres?a.genres.map((function(e){return e+" "})):a.genders}),Object(o.jsx)("h3",{className:"detail__date",children:a.released}),Object(o.jsx)("h3",{className:"detail__rating",children:"\ud83c\udf1f ".concat(a.rating)}),Object(o.jsx)("h3",{className:"detail__platforms",children:a.platforms}),Object(o.jsx)("h5",{className:"detail__texto",children:a.description_raw?a.description_raw:a.description})]})]})})}),Object(o.jsx)("div",{className:"detail__btn",children:Object(o.jsx)(i.c,{to:"/home",children:Object(o.jsx)("button",{className:"btn__back",children:"Home"})})})]})},P=a(13),M=a(19),B=a(2),Y=["PC","PlayStation 5","PlayStation 4","Xbox One","Xbox Series S/X","Nintendo Switch","iOS","Android","Nintendo 3DS","Nintendo DS","Nintendo DSi","macOS","Linux","Xbox 360","Xbox","PlayStation 3","PlayStation 2","PlayStation","PS Vita","PSP","Wii U","Wii","GameCube","Nintendo 64","Game Boy Advance","Game Boy Color","Game Boy","SNES","NES","Classic Macintosh","Apple II","Commodore / Amiga","Atari 7800","Atari 5200","Atari 2600","Atari Flashback","Atari 8-bit","Atari ST","Atari Lynx","Atari XEGS","Genesis","SEGA Saturn","SEGA CD","SEGA 32X","SEGA Master System","Dreamcast","3DO","Jaguar","Game Gear","Neo Geo"];a(90);var W=function(){var e=Object(m.b)(),t=Object(s.f)(),a=Object(m.c)((function(e){return e.videogames})),c=Object(m.c)((function(e){return e.genders})),r=Object(n.useState)({}),i=Object(j.a)(r,2),l=i[0],d=i[1],_=Object(n.useState)({name:"",background_image:"",description:"",released:"",rating:"",gender:[],platforms:[]}),h=Object(j.a)(_,2),p=h[0],g=h[1],x={name:p.name,background_image:p.background_image,description:p.description,released:p.released,rating:p.rating,gender:p.gender,platforms:p.platforms.join(", ")},f=Y.map((function(e){return{name:e}}));Object(n.useEffect)((function(){e(C()),e(S())}),[e]);var v=function(e){console.log(x),g(Object(B.a)(Object(B.a)({},p),{},Object(M.a)({},e.target.name,e.target.value))),d(function(e){var t={};return e.name?a.find((function(t){return t.name.replace(/\s+/g,"").toLowerCase()===e.name.replace(/\s+/g,"").toLowerCase()}))?t.name="the game exists!!":e.description?e.platforms.length?e.background_image||(t.background_image="Please complete the input image"):t.platforms="requires placing at least one platform":t.description="Please complete the input description":t.name="Please complete the input name",t}(Object(B.a)(Object(B.a)({},x),{},Object(M.a)({},e.target.name,e.target.value))))},N=function(a){var n;a.preventDefault(),console.log(x),e((n=x,function(){var e=Object(b.a)(Object(u.a)().mark((function e(t){var a;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,O.a.post("http://localhost:3001/videogames",n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),alert("Persona Creado"),g({name:"",background_image:"",description:"",released:"",rating:"",gender:[],platforms:[]}),t.push("/home")};return Object(o.jsxs)("div",{children:[Object(o.jsx)(T,{}),Object(o.jsx)("div",{className:"create__container",children:Object(o.jsxs)("form",{className:"create__form_container",onSubmit:function(e){return N(e)},children:[Object(o.jsx)("div",{className:"create__title",children:Object(o.jsxs)("h2",{children:["Create ",Object(o.jsx)("span",{children:"Videogame"})]})}),Object(o.jsxs)("aside",{className:"create__error_container",children:[l.name&&Object(o.jsx)("p",{className:"create__error_inputs",children:l.name}),l.description&&Object(o.jsx)("p",{className:"create__error_inputs",children:l.description}),p.platforms.length?" ":l.platforms&&Object(o.jsx)("p",{className:"create__error_inputs",children:l.platforms}),l.background_image&&Object(o.jsx)("p",{className:"create__error_inputs",children:l.background_image})]}),Object(o.jsxs)("div",{className:"create__inputs",children:[Object(o.jsxs)("div",{className:"create__inputs_name-img",children:[Object(o.jsx)("label",{htmlFor:"name",children:" Name "}),Object(o.jsx)("input",{name:"name",type:"text",value:p.name,placeholder:"Enter Name",className:"input__name_form",id:"name",onChange:function(e){return v(e)}})]}),Object(o.jsxs)("div",{className:"create__inputs_name-img",children:[Object(o.jsx)("label",{htmlFor:"image",children:"Image "}),Object(o.jsx)("input",{name:"background_image",type:"text",value:p.background_image,placeholder:"Enter Image",className:"input__image_form",id:"image",onChange:function(e){return v(e)}})]})]}),Object(o.jsxs)("div",{className:"create__inputs",children:[Object(o.jsxs)("div",{className:"create__inputs_rating-released create__input_rating",children:[Object(o.jsx)("label",{htmlFor:"rating",children:"Rating "}),Object(o.jsx)("input",{name:"rating",type:"number",placeholder:"Enter Rating",className:"input__rating_form",min:"1",max:"5",step:"0.01",id:"rating",onChange:function(e){return v(e)}})]}),Object(o.jsxs)("div",{className:"create__inputs_rating-released",children:[Object(o.jsx)("label",{htmlFor:"date",children:"Release Date"}),Object(o.jsx)("input",{name:"released",type:"date",className:"input__date_form",min:"1900-04-01",max:"2022-08-30",id:"date",onChange:function(e){return v(e)}})]})]}),Object(o.jsxs)("div",{className:"create__inputs_message",children:[Object(o.jsx)("label",{htmlFor:"description",children:"Description "}),Object(o.jsx)("textarea",{name:"description",placeholder:"Enter Description",value:p.description,className:"input__description_form",id:"description",onChange:function(e){return v(e)}})]}),Object(o.jsxs)("div",{className:"create__selects",children:[Object(o.jsxs)("div",{className:"create__inputs_selects",children:[Object(o.jsx)("label",{htmlFor:"",children:"Genders"}),Object(o.jsxs)("select",{name:"gender",className:"input__gender_form",onChange:function(e){return function(e){"All"!==e.target.value&&g(Object(B.a)(Object(B.a)({},p),{},{gender:[].concat(Object(P.a)(p.gender),[e.target.value])}))}(e)},children:[Object(o.jsx)("option",{value:"All",children:"All"}),null===c||void 0===c?void 0:c.map((function(e){return Object(o.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),Object(o.jsx)("div",{className:"create__render_content",children:p.gender.map((function(e,t){return Object(o.jsx)("div",{className:"create__render_button",children:Object(o.jsx)("span",{className:"render__btn",onClick:function(){return function(e){g(Object(B.a)(Object(B.a)({},p),{},{gender:p.gender.filter((function(t){return t!==e}))}))}(e)},children:e},t)},t)}))})]}),Object(o.jsxs)("div",{className:"create__inputs_selects",children:[Object(o.jsx)("label",{htmlFor:"",children:"Types of Platforms "}),Object(o.jsxs)("select",{name:"platforms",className:"input__platform_form",onChange:function(e){return function(e){"All"!==e.target.value&&(p.platforms.includes(e.target.value)||g(Object(B.a)(Object(B.a)({},p),{},{platforms:[].concat(Object(P.a)(p.platforms),[e.target.value])})))}(e)},children:[Object(o.jsx)("option",{value:"All",children:"All"}),null===f||void 0===f?void 0:f.map((function(e,t){return Object(o.jsx)("option",{value:e.name,children:e.name},t)}))]}),Object(o.jsx)("div",{className:"create__render_content",children:p.platforms.map((function(e,t){return Object(o.jsx)("div",{className:"create__render_button",children:Object(o.jsx)("span",{className:"render__btn",onClick:function(){return function(e){g(Object(B.a)(Object(B.a)({},p),{},{platforms:p.platforms.filter((function(t){return t!==e}))}))}(e)},children:e})},t)}))})]})]}),Object(o.jsxs)("div",{className:"create__btn",children:[Object(o.jsx)("button",{type:"reset",className:"btn__form_reset",onClick:function(e){return function(e){e.preventDefault(e),g({name:"",background_image:"",description:"",released:"",rating:"",gender:[],platforms:[]})}(e)},children:"RESET"}),Object(o.jsx)("button",{type:"submit",className:"btn__form_submit",onClick:function(e){return N(e)},disabled:0!==Object.entries(l).length||"",children:"Create videogames"})]})]})})]})},X=a.p+"static/media/404.a7ea7627.gif";a(91);var H=function(){return Object(o.jsxs)("div",{className:"not__container",children:[Object(o.jsxs)("div",{className:"not__title",children:["Game Over ",Object(o.jsx)("br",{})," Not Found"]}),Object(o.jsx)("picture",{className:"not__img",children:Object(o.jsx)("img",{src:X,alt:"404"})}),Object(o.jsx)("div",{className:"not__btn",children:Object(o.jsx)(i.c,{to:"/home",children:Object(o.jsx)("button",{children:"Home"})})})]})};var J=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(s.c,{children:[Object(o.jsx)(s.a,{exact:!0,path:"/",component:d}),Object(o.jsx)(s.a,{path:"/home",component:w}),Object(o.jsx)(s.a,{exact:!0,path:"/videogame",component:W}),Object(o.jsx)(s.a,{exact:!0,path:"/videogame/:idVideogame",component:F}),Object(o.jsx)(s.a,{path:"/thanks",component:I}),Object(o.jsx)(s.a,{path:"*",component:H})]})})})},U=a(23),q=a(42),Q=a(43),Z={videogames:[],allVideogames:[],genders:[],detail:[]};var K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(B.a)(Object(B.a)({},e),{},{videogames:Object(P.a)(t.payload),allVideogames:Object(P.a)(t.payload)});case p:return Object(B.a)(Object(B.a)({},e),{},{genders:t.payload});case N:return Object(B.a)(Object(B.a)({},e),{},{videogames:Object(P.a)(t.payload)});case A:return Object(B.a)(Object(B.a)({},e),{},{detail:t.payload});case g:var a=e.allVideogames,n="All"===t.payload?a:a.filter((function(e){return e.genders.find((function(e){return e===t.payload}))}));return Object(B.a)(Object(B.a)({},e),{},{videogames:n});case E:return Object(B.a)({},e);case x:var c="VideoGameCreated"===t.payload?e.allVideogames.filter((function(e){return e.createdInDb})):e.allVideogames.filter((function(e){return!e.createdInDb}));return console.log(e.allVideogames),console.log(c),Object(B.a)(Object(B.a)({},e),{},{videogames:"All"===t.payload?e.allVideogames:c});case f:var r="ascAlf"===t.payload?e.videogames.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:e.name.toLowerCase()<t.name.toLowerCase()?-1:0})):e.videogames.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?-1:e.name.toLowerCase()<t.name.toLowerCase()?1:0}));return Object(B.a)(Object(B.a)({},e),{},{videogames:r});case v:var s="ascRtg"===t.payload?e.videogames.sort((function(e,t){return e.rating>t.rating?1:e.rating<t.rating?-1:0})):e.videogames.sort((function(e,t){return e.rating>t.rating?-1:e.rating<t.rating?1:0}));return Object(B.a)(Object(B.a)({},e),{},{videogames:s});case y:return Object(B.a)(Object(B.a)({},e),{},{detail:t.payload});default:return Object(B.a)({},e)}},z=Object(U.createStore)(K,Object(q.composeWithDevTools)(Object(U.applyMiddleware)(Q.a)));r.a.render(Object(o.jsx)(m.a,{store:z,children:Object(o.jsx)(i.a,{children:Object(o.jsx)(J,{})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.1e6ac9c5.chunk.js.map