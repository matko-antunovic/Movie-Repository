(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,a,t){e.exports=t(82)},43:function(e,a,t){},44:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},82:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(33),o=t.n(c),i=(t(43),t(44),t(83)),l=function(){return r.a.createElement("div",{className:"rmdb-header"},r.a.createElement("div",{className:"rmdb-header-content"},r.a.createElement(i.a,{to:"/"},r.a.createElement("img",{className:"rmdb-logo",src:"../images/reactMovie_logo.png",alt:"rmdb-logo"}),r.a.createElement("img",{className:"rmdb-tmdb-logo",src:"../images/tmdb_logo.png",alt:"tmdb-logo"}))))},m=t(10),s=t(11),u=t(14),d=t(12),p=t(15),v=t(13),g=(t(50),"https://api.themoviedb.org/3/"),h="da70681c8adf61ebb276dc1660aded55",E="http://image.tmdb.org/t/p/",b=(t(51),function(e){return r.a.createElement("div",{className:"rmdb-heroimage",style:{background:'linear-gradient(to bottom, rgba(0,0,0,0)\n            39%,rgba(0,0,0,0)\n            41%,rgba(0,0,0,0.65)\n            100%),\n            url("'.concat(e.image,'"), #1c1c1c')}},r.a.createElement("div",{className:"rmdb-heroimage-content"},r.a.createElement("div",{className:"rmdb-heroimage-text"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.text))))}),f=t(16),y=t.n(f),O=(t(53),function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={value:""},t.timeout=null,t.handleInput=function(e){t.setState({value:e.target.value}),clearTimeout(t.timeout),t.timeout=setTimeout(function(){t.props.search(t.state.value)},500)},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"rmdb-searchbar"},r.a.createElement("div",{className:"rmdb-searchbar-content"},r.a.createElement(y.a,{className:"rmdb-fa-search",name:"search",size:"2x"}),r.a.createElement("input",{type:"text",className:"rmdb-searchbar-input",onChange:this.handleInput,value:this.state.value})))}}]),a}(n.Component)),N=(t(54),t(55),function(e){var a=e.image,t=e.movieId,n=e.movieName,c=e.clickable;return r.a.createElement("div",{className:"rmdb-moviethumb"},c?r.a.createElement(i.a,{to:{pathname:"/".concat(t),movieName:"".concat(n)}},r.a.createElement("img",{src:a,alt:"moviethumb"})):r.a.createElement("img",{src:a,alt:"moviethumb"}))}),_=(t(56),function(e){return r.a.createElement("div",{className:"rmdb-actor"},r.a.createElement("img",{src:e.actor.profile_path?"".concat(E).concat("w154").concat(e.actor.profile_path):"./images/no_image.jpg",alt:"actor"}),r.a.createElement("span",{className:"rmdb-actor-name"},e.actor.name),r.a.createElement("span",{className:"rmdb-actor-character"},e.actor.character))}),M=function(e){var a;return a=e.movies?e.movies.map(function(e,a){return r.a.createElement("div",{key:a,className:"rmdb-grid-element"}," ",r.a.createElement(N,{clickable:!0,image:e.poster_path?"".concat(E).concat("w500").concat(e.poster_path):"./images/no_image.jpg",movieId:e.id,movieName:e.original_title}))}):e.actors.map(function(e,a){return r.a.createElement("div",{key:a,className:"rmdb-grid-element"}," ",r.a.createElement(_,{key:a,actor:e}))}),r.a.createElement("div",{className:"rmdb-grid"},e.header&&!e.loading?r.a.createElement("h1",null,e.header):null,r.a.createElement("div",{className:"rmdb-grid-content"},a))},j=(t(57),function(e){return r.a.createElement("div",{className:"rmdb-loadmorebtn",onClick:e.onClick},r.a.createElement("p",null,e.text))}),k=(t(58),function(){return r.a.createElement("div",{className:"loader"})}),I=function(e){var a=e.movies,t=e.heroImage,n=e.loading,c=e.currentPage,o=e.totalPages,i=e.searchTerm,l=e.searchMovies,m=e.loadMoreMovies;return r.a.createElement("div",{className:"rmdb-home"},t?r.a.createElement("div",null,r.a.createElement(b,{image:"".concat(E).concat("w1280").concat(t.backdrop_path),title:t.original_title,text:t.overview}),r.a.createElement(O,{search:l})):null,r.a.createElement("div",{className:"rmdb-home-grid"},r.a.createElement(M,{header:i?"Search Result":"Popular Movies",loading:n,movies:a}),n?r.a.createElement(k,null):null,c<=o&&!n?r.a.createElement(j,{text:"Load more",onClick:m}):null))},w=t(6),S=t(7),x=t.n(S),P=t(17),R=t(9),L=t.n(R),A=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).getMovies=function(){t.props.showLoadingSpinner(),t.props.getPopularMovies()},t.searchMovies=function(e){t.props.clearMovies(),t.props.showLoadingSpinner(),t.props.searchMovies(e)},t.loadMoreMovies=function(){var e=t.props.home,a=e.searchTerm,n=e.currentPage;t.props.showLoadingSpinner(),t.props.loadMoreMovies(a,n)},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I,Object.assign({},this.props.home,{searchMovies:this.searchMovies,loadMoreMovies:this.loadMoreMovies})))}}]),a}(n.Component),T=Object(v.b)(function(e){return{home:e.home}},function(e){return{getPopularMovies:function(){e(function(){var e=Object(P.a)(x.a.mark(function e(a,t){var n,r;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(g,"movie/popular?api_key=").concat(h,"&language=en-US&page=1"),e.next=3,L()(n);case 3:r=e.sent,a({type:"GET_POPULAR_MOVIES",payload:r.data});case 5:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}())},showLoadingSpinner:function(){e({type:"SHOW_LOADING_SPINNER",payload:null})},searchMovies:function(a){e(function(e){return function(){var a=Object(P.a)(x.a.mark(function a(t){var n,r,c;return x.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=""===e?"".concat(g,"movie/popular?api_key=").concat(h,"&language=en-US&page=1"):"".concat(g,"search/movie?api_key=").concat(h,"&language=en-US&query=").concat(e),a.next=3,L()(n);case 3:r=a.sent,c=Object(w.a)({},r,{searchTerm:e}),t({type:"SEARCH_MOVIES",payload:c.data});case 6:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}(a))},clearMovies:function(){e({type:"CLEAR_MOVIES",payload:null})},loadMoreMovies:function(a,t){e(function(e,a){return function(){var t=Object(P.a)(x.a.mark(function t(n){var r,c;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=""===e?"".concat(g,"movie/popular?api_key=").concat(h,"&language=en-US&page=").concat(a+1):"".concat(g,"search/movie?api_key=").concat(h,"&language=en-US&query=").concat(e,"&page=").concat(a+1),t.next=3,L()(r);case 3:c=t.sent,n({type:"LOAD_MORE_MOVIES",payload:c.data});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}(a,t))}}})(A),C=(t(77),function(e){return r.a.createElement("div",{className:"rmdb-navigation"},r.a.createElement("div",{className:"rmdb-navigation-content"},r.a.createElement(i.a,{to:"/"},r.a.createElement("p",null,"Home")),r.a.createElement("p",null,"/"),r.a.createElement("p",null,e.movie)))}),D=(t(78),function(e){var a=e.movie,t=e.directors;return r.a.createElement("div",{className:"rmdb-movieinfo",style:{background:a.backdrop_path?'url("'.concat(E).concat("w1280").concat(a.backdrop_path,'")'):"#000"}},r.a.createElement("div",{className:"rmdb-movieinfo-content"},r.a.createElement("div",{className:"rmdb-movieinfo-thumb"},r.a.createElement(N,{image:a.poster_path?"".concat(E).concat("w500").concat(a.poster_path):"./images/no_image. jpg",clickable:!1})),r.a.createElement("div",{className:"rmdb-movieinfo-text"},r.a.createElement("h1",null,a.title),r.a.createElement("h3",null,"PLOT"),r.a.createElement("p",null,a.overview),r.a.createElement("h3",null,"IMDB RATING"),r.a.createElement("div",{className:"rmdb-rating"},r.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"40",high:"75",value:10*a.vote_average}),r.a.createElement("p",{className:"rmdb-score"},a.vote_average)),t.length>1?r.a.createElement("h3",null,"DIRECTORS"):r.a.createElement("h3",null,"DIRECTOR"),t.map(function(e,a){return r.a.createElement("p",{key:a,className:"rmdb-director"},e.name)}))))}),U=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(e)},V=(t(79),function(e){var a=e.time,t=e.budget,n=e.revenue;return r.a.createElement("div",{className:"rmdb-movieinfobar"},r.a.createElement("div",{className:"rmdb-movieinfobar-content"},r.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},r.a.createElement(y.a,{className:"fa-time",name:"clock-o",size:"2x"}),r.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Running time:",function(e){var a=Math.floor(e/60),t=e%60;return"".concat(a,"h ").concat(t,"m")}(a))),r.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},r.a.createElement(y.a,{className:"fa-budget",name:"money",size:"2x"}),r.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Budget: ",U(t))),r.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},r.a.createElement(y.a,{className:"fa-revenue",name:"ticket",size:"2x"}),r.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Revenue:",U(n)))))}),G=(t(80),function(e){var a=e.movie,t=e.directors,n=e.actors,c=e.loading;return r.a.createElement("div",{className:"rmdb-movie"},a?r.a.createElement("div",null,r.a.createElement(C,{movie:a.original_title}),r.a.createElement(D,{movie:a,directors:t}),r.a.createElement(V,{time:a.runtime,budget:a.budget,revenue:a.revenue})):null,n?r.a.createElement("div",{className:"rmdb-movie-grid"},r.a.createElement(M,{header:"Actors",actors:n}),">"):null,n||c?null:r.a.createElement("h1",null," No movie found! "),c?r.a.createElement(k,null):null)}),H=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).getMovie=function(e){t.props.clearMovie(),t.props.showLoadingSpinner(),t.props.getMovie(e)},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.movieId;this.getMovie(e)}},{key:"render",value:function(){return console.log("U KONTEJNERU",this.props.movie),r.a.createElement("div",null,r.a.createElement(G,{movie:this.props.movie.movie,directors:this.props.movie.directors,actors:this.props.movie.actors,loading:this.props.movie.loading}))}}]),a}(n.Component),z=Object(v.b)(function(e){return{movie:e.movie}},function(e){return{getMovie:function(a){e(function(e){return function(){var a=Object(P.a)(x.a.mark(function a(t){var n,r,c,o,i;return x.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n="".concat(g,"movie/").concat(e,"?api_key=").concat(h,"&language=eng-US"),r={},a.next=4,L.a.get(n);case 4:if(!(c=a.sent).status_code){a.next=9;break}r={},a.next=17;break;case 9:return r={movie:c.data},n="".concat(g,"movie/").concat(e,"/credits?api_key=").concat(h),a.next=13,L.a.get(n);case 13:o=a.sent,i=o.data.crew.filter(function(e){return"Director"===e.job}),r.actors=o.data.cast,r.directors=i;case 17:t({type:"GET_MOVIE",payload:r});case 18:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}(a))},showLoadingSpinner:function(){e({type:"SHOW_LOADING_SPINNER",payload:null})},clearMovie:function(){e({type:"CLEAR_MOVIE",payload:null})}}})(H),W=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Ooops.This page does not exist..."))},B=t(86),J=t(85),q=function(){return r.a.createElement("div",null,r.a.createElement(l,null),r.a.createElement(B.a,null,r.a.createElement(J.a,{exact:!0,path:"/",component:T}),r.a.createElement(J.a,{exact:!0,path:"/:movieId",component:z}),r.a.createElement(J.a,{component:W})))},F=t(84),K=t(8),Q=t(23),X={movies:[],heroImage:null,loading:!1,currentPage:0,totalPages:0,searchTerm:""},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_POPULAR_MOVIES":return Object(w.a)({},e,{movies:a.payload.results,heroImage:e.heroImage||a.payload.results[0],loading:!1,currentPage:a.payload.page,totalPages:a.payload.total_pages,searchTerm:""});case"LOAD_MORE_MOVIES":return Object(w.a)({},e,{movies:[].concat(Object(Q.a)(e.movies),Object(Q.a)(a.payload.results)),loading:!1,currentPage:a.payload.page,totalPages:a.payload.total_pages});case"SEARCH_MOVIES":return Object(w.a)({},e,{movies:a.payload.results,loading:!1,currentPage:a.payload.page,totalPages:a.payload.total_pages,searchTerm:a.payload.searchTerm});case"CLEAR_MOVIES":return Object(w.a)({},e,{movies:[]});case"SHOW_LOADING_SPINNER":return Object(w.a)({},e,{loading:!0});default:return e}},Z={movie:null,actors:null,directors:[],loading:!1},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_MOVIE":return Object(w.a)({},e,{movie:a.payload.movie,actors:a.payload.actors,loading:!1,directors:a.payload.directors});case"SHOW_LOADING_SPINNER":return Object(w.a)({},e,{loading:!0});case"CLEAR_MOVIE":return Object(w.a)({},e,{movie:null,actors:null,directors:[]});default:return e}},ee=Object(K.c)({home:Y,movie:$}),ae=t(37),te=Object(K.a)(ae.a)(K.d);o.a.render(r.a.createElement(v.a,{store:te(ee)},r.a.createElement(F.a,null,r.a.createElement(q,null))),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.d69e0c9b.chunk.js.map