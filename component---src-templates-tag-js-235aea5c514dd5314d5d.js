(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{209:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return o});a(24);var r=a(0),n=a.n(r),i=a(225),l=a(221),s=a(218);t.default=function(e){var t=e.data,a=e.pageContext,r=t.allMarkdownRemark.edges,o=a.tag;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row",style:{margin:15}},n.a.createElement(s.a,null),n.a.createElement("div",{className:"col-xl-10 col-lg-7 col-md-12 col-xs-12 order-2"},n.a.createElement("div",{className:"col-12",style:{fontSize:20,margin:15}},r.length," Articles in ",o),r.map(function(e){var t=e.node;return n.a.createElement(i.a,Object.assign({},t.frontmatter,{key:t.id}))})),n.a.createElement("div",{className:"col-xl-2 col-lg-1 order-3"})),n.a.createElement(l.a,{title:o,url:"/tag/"+o,siteTitleAlt:"Calpa's Blog",isPost:!1,description:o,image:"https://i.imgur.com/M795H8A.jpg"}))};var o="704583718"},217:function(e){e.exports={data:{all:{totalCount:6},limited:{latestPosts:[{node:{fields:{slug:"/geekbang/重学前端/javascript运行时"},frontmatter:{id:"https://MuRongJs.github.io/geekbang/重学前端/javascript运行时",title:"geekbang--javascript运行时",url:"/geekbang/重学前端/javascript运行时",date:"2019/4/22 9:22:26",tags:["geekbang"],description:"geekbang--javascript运行时",headerImage:""}}},{node:{fields:{slug:"/geekbang/重学前端/HTML语义化"},frontmatter:{id:"https://MuRongJs.github.io/geekbang/重学前端/HTML语义化",title:"geekbang--HTML语义化",url:"/geekbang/重学前端/HTML语义化",date:"2019/3/27 18:05:22",tags:["geekbang"],description:"geekbang--HTML语义化",headerImage:""}}},{node:{fields:{slug:"/geekbang/重学前端/前端思考"},frontmatter:{id:"https://MuRongJs.github.io/geekbang/重学前端/前端思考",title:"geekbang--前端思考",url:"/geekbang/重学前端/前端思考",date:"2019/3/25 17:23:06",tags:["geekbang"],description:"geekbang--前端思考",headerImage:""}}},{node:{fields:{slug:"/css/cssOutline"},frontmatter:{id:"https://MuRongJs.github.io/css/cssOutline",title:"css大纲",url:"/css/cssOutline",date:"2019/3/18 17:26:20",tags:["css"],description:"css大纲",headerImage:""}}},{node:{fields:{slug:"/css/flexLayout"},frontmatter:{id:"https://MuRongJs.github.io/css/flexLayout",title:"flex布局",url:"/css/flexLayout",date:"2019/2/19 8:49:44",tags:["css","flex"],description:"flex布局",headerImage:""}}},{node:{fields:{slug:"/git/gitTool"},frontmatter:{id:"https://MuRongJs.github.io/git/gitTool",title:"git的用法",url:"/git/gitTool",date:"2018/9/26 22:34:48",tags:["git"],description:"git工具的基本用法",headerImage:""}}}]}}}},218:function(e,t,a){"use strict";a(24);var r=a(217),n=a(0),i=a.n(n),l=a(19),s=a(1),o=a.n(s),c=a(67),m=a(2),g=a(45),u=(a(197),m.config.friends),p=void 0===u?[]:u,d=function(){return i.a.createElement("div",{className:"friend"},i.a.createElement("p",null,"博客模版"),p.map(function(e){return i.a.createElement(g.a,{href:e.href,title:e.title,key:e.title,rel:"noopener"})}))},f=(a(198),function(e){var t=e.posts;return i.a.createElement("div",{className:"latest-post"},i.a.createElement("p",null,"最新文章"),t.map(function(e){var t=e.node;return i.a.createElement(l.Link,{to:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,key:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,href:t.frontmatter.url||t.frontmatter.slug||t.fields.slug},t.frontmatter.title)}))});f.propTypes={posts:o.a.arrayOf(o.a.object).isRequired};var h=f,E=(a(199),function(e){var t=e.totalCount,a=e.posts;return i.a.createElement("div",{className:"d-none d-lg-block information my-2"},i.a.createElement("hr",null),i.a.createElement("p",null,"共 ",t," 篇文章"),i.a.createElement("hr",null),i.a.createElement(h,{posts:a}),i.a.createElement("hr",null),i.a.createElement(d,null))});E.propTypes={totalCount:o.a.number.isRequired,posts:o.a.array},E.defaultProps={posts:[]};var b=E,v=(a(200),m.config.wordings),y=void 0===v?[]:v,k=m.config.githubUsername,N=m.config.zhihuUsername,x=m.config.email,T=m.config.iconUrl,w=m.config.about,R=function(e){var t=e.href,a=e.icon;return i.a.createElement("a",{target:"_blank",href:t,rel:"external nofollow noopener noreferrer",className:"custom-icon"},i.a.createElement("span",{className:"fa-layers fa-fw fa-2x"},i.a.createElement(c.a,{icon:a})))},I=function(e){var t=e.totalCount,a=e.latestPosts;return i.a.createElement("header",{className:"intro-header site-heading text-center col-xl-2 col-lg-3 col-xs-12 order-lg-1"},i.a.createElement("div",{className:"about-me"},i.a.createElement(l.Link,{to:w,href:w,className:"name"},i.a.createElement("img",{className:"avatar",src:T,alt:"Calpa"}),i.a.createElement("h4",null,"MuRong")),i.a.createElement("p",{className:"mb-1"},y[0]),i.a.createElement("p",{className:"mb-3"},y[1]),i.a.createElement(R,{href:"https://www.zhihu.com/people/"+N,icon:["fab","zhihu"]}),i.a.createElement(R,{href:"https://github.com/"+k,icon:["fab","github"]}),i.a.createElement(R,{href:"mailto:"+x,icon:["far","envelope"]}),i.a.createElement(b,{totalCount:t,posts:a})))};R.propTypes={href:o.a.string.isRequired,icon:o.a.arrayOf(o.a.string).isRequired},I.propTypes={totalCount:o.a.number,latestPosts:o.a.array},I.defaultProps={totalCount:0,latestPosts:[]};t.a=function(){return i.a.createElement(l.StaticQuery,{query:"1307080370",render:function(e){return i.a.createElement(I,Object.assign({},e.all,e.limited))},data:r})}},219:function(e,t,a){"use strict";a(95);var r=a(0),n=a.n(r),i=a(1),l=a.n(i),s=function(e){var t=e.name,a=e.count;return n.a.createElement("a",{href:"/tag/"+t,className:"header-tag"},t," ",a)};s.propTypes={name:l.a.string.isRequired,count:l.a.oneOfType([l.a.string,l.a.number])},s.defaultProps={count:""},t.a=s},220:function(e,t,a){a(44),a(68);var r=function(e,t){if(void 0===t&&(t="large"),!e)return"https://i.imgur.com/M795H8A.jpg";if(e.match("(png)|(gif)"))return e.match("http")?e:"https://i.imgur.com/"+e;var a=e.replace(/(.*)\.(.*)/,"$1"+{"small-square":"s","big-square":"b",small:"t",medium:"m",large:"l",huge:"h"}[t]+".$2");return a.match("http")?a:"https://i.imgur.com/"+a},n=function(e){var t=e.href,a=e.title,n=e.text;return'<img class="lozad d-block mx-auto" data-src='+r(t,"large")+" "+function(e,t){return'title="'+(e||t)+'"'}(a,n)+" />"};e.exports={parseImgur:r,parseImageTag:n,getGalleryImage:function(e){var t=e.href,a=e.title,i=e.text;return'<a data-fancybox="gallery" href="'+r(t,"huge")+'">'+n({href:t,title:a,text:i})+"</a>"}}},221:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(69),l=a.n(i),s=a(1),o=a.n(s),c=a(2),m=a.n(c),g=function(e){var t=e.url,a=e.title,r=e.description,i=e.image,s=(e.siteTitleAlt,e.isPost);return n.a.createElement(l.a,null,n.a.createElement("title",null,a),n.a.createElement("meta",{name:"description",content:r}),n.a.createElement("meta",{name:"image",content:i}),n.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var t=e.url,a=e.title,r=e.siteTitleAlt,n=e.isPost,i=e.image,l=e.description;return[{"@context":"http://schema.org","@type":"WebSite",url:t,name:a,alternateName:r||""},n?{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":t,name:a,image:i}}]}:"",n?{"@context":"http://schema.org","@type":"BlogPosting",url:t,name:a,alternateName:r||"",headline:a,image:{"@type":"ImageObject",url:i},description:l}:""]}(t))),n.a.createElement("meta",{property:"og:url",content:t}),s?n.a.createElement("meta",{property:"og:type",content:"article"}):n.a.createElement("meta",{property:"og:type",content:"website"}),n.a.createElement("meta",{property:"og:title",content:a}),n.a.createElement("meta",{property:"og:description",content:r}),n.a.createElement("meta",{property:"og:image",content:i}),n.a.createElement("meta",{property:"fb:app_id",content:m.a.siteFBAppID?m.a.siteFBAppID:""}),n.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.a.createElement("meta",{name:"twitter:creator",content:m.a.twitter_username?m.a.twitter_username:""}),n.a.createElement("meta",{name:"twitter:title",content:a}),n.a.createElement("meta",{name:"twitter:description",content:r}),n.a.createElement("meta",{name:"twitter:image",content:i}))};g.propTypes={url:o.a.string.isRequired,title:o.a.string,description:o.a.string.isRequired,image:o.a.string.isRequired,siteTitleAlt:o.a.string.isRequired,isPost:o.a.bool.isRequired},g.defaultProps={title:m.a.title},t.a=g},225:function(e,t,a){"use strict";a(96);var r=a(0),n=a.n(r),i=a(19),l=a(1),s=a.n(l),o=a(219),c=a(220),m=(a(201),function(e){var t,a,r=e.url,l=e.image,s=e.backgroundColor;return n.a.createElement(i.Link,{to:r,href:r},n.a.createElement("div",{className:"wrapper",style:(t=l,a=s,{backgroundColor:"#"+a,backgroundImage:" url("+Object(c.parseImgur)(t,"large")+")"})}))}),g=function(e){var t=e.title,a=e.date,r=e.url,l=e.headerImage,s=e.headerBackgroundColor,c=e.description,g=e.tags,u=void 0===g?[]:g;return n.a.createElement("div",{className:"col-sm-12 pb-4"},n.a.createElement("div",{className:"custom-card"},l&&n.a.createElement(m,{url:r,image:l,backgroundColor:s}),n.a.createElement("div",{className:"data"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"stats"},n.a.createElement("span",{className:"date"},a.split("T")[0]),u.map(function(e){return n.a.createElement(o.a,{name:e,key:e})})),n.a.createElement(i.Link,{to:r,href:r},n.a.createElement("h4",{className:"title"},t)),n.a.createElement("p",null,c),n.a.createElement(i.Link,{to:r,href:r},"....阅读全文內容")))))};g.propTypes={title:s.a.string.isRequired,date:s.a.string,url:s.a.string.isRequired,headerImage:s.a.string,headerBackgroundColor:s.a.string,description:s.a.string.isRequired,tags:s.a.arrayOf(s.a.string)},m.propTypes=g.propTypes,g.defaultProps={headerImage:"",tags:[],date:"",headerBackgroundColor:""},t.a=g}}]);
//# sourceMappingURL=component---src-templates-tag-js-235aea5c514dd5314d5d.js.map