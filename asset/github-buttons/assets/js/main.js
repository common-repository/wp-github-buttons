(function(){var t,e,n,r,a,o,i,s,c,u,l,f,h,d,p,g,m,y,b,w,v,_,k=[].slice,C=function(t,e){for(var n in e){if(x.call(e,n))t[n]=e[n]}function r(){this.constructor=t}r.prototype=e.prototype;t.prototype=new r;t.__super__=e.prototype;return t},x={}.hasOwnProperty;b=this;m=b.document;o={api:"https://api.github.com",anchorClass:"github-button",iconClass:"octicon",icon:"octicon-mark-github",scriptId:"github-bjs",styles:["default","mega"]};if(o.script=m.getElementById(o.scriptId)){o.url=o.script.src.replace(/buttons\.js([?#].*)?$/,"")}c=function(){var t;function e(){}e.flatten=function(t){var e,n;e=function(t,r){var a,o,i,s,c,u;switch(Object.prototype.toString.call(t)){case"[object Object]":for(i in t){s=t[i];e(s,r?r+"."+i:i)}break;case"[object Array]":for(a=c=0,u=t.length;c<u;a=++c){o=t[a];e(o,r+"["+a+"]")}break;default:n[r]=t}};n={};e(t,"");return n};e.expand=function(e){var n,r,a,o,i,s;o=[];for(n in e){s=e[n];a=n.match(/((?!\[\d+\])[^.])+|\[\d+\]/g);i=o;r=0;while(a.length){if(i[r]==null){i[r]=a[0]===t(a[0])?{}:[]}i=i[r];r=t(a.shift())}i[r]=s}return o[0]};t=function(t){var e;if(e=t.match(/^\[(\d+)\]$/)){return Number(e[1])}else{return t}};return e}();g=function(){function t(){}t.stringify=function(t){var e,n,r;n=[];for(e in t){r=t[e];n.push(e+"="+(r!=null?r:""))}return n.join("&")};t.parse=function(t){var e,n,r,a,o,i,s,c;n={};s=t.split("&");for(o=0,i=s.length;o<i;o++){r=s[o];if(!(r!=="")){continue}c=r.split("="),e=c[0],a=2<=c.length?k.call(c,1):[];if(e!==""){n[e]=a.join("=")}}return n};return t}();h=function(){function t(){}t.encode=function(t){return"#"+encodeURIComponent(g.stringify(c.flatten(t)))};t.decode=function(t){if(t==null){t=m.location.hash}return c.expand(g.parse(decodeURIComponent(t.replace(/^#/,""))))||{}};return t}();s=function(){var t,e,n,r,a,o;function i(t,e){this.$=t&&t.nodeType===1?t:m.createElement(t);if(e){e.call(this,this.$)}}i.prototype.get=function(){return this.$};i.prototype.on=function(){var t,n,r,a,o,i,s;r=2<=arguments.length?k.call(arguments,0,o=arguments.length-1):(o=0,[]),a=arguments[o++];t=function(t){return function(e){return a.call(t,e||b.event)}}(this);for(i=0,s=r.length;i<s;i++){n=r[i];e(this.$,n,t)}};i.prototype.once=function(){var t,n,r,a,i,s,c;r=2<=arguments.length?k.call(arguments,0,i=arguments.length-1):(i=0,[]),a=arguments[i++];t=function(e){return function(n){var i,s,c;for(s=0,c=r.length;s<c;s++){i=r[s];o(e.$,i,t)}return a.call(e,n||b.event)}}(this);for(s=0,c=r.length;s<c;s++){n=r[s];e(this.$,n,t)}};i.prototype.addClass=function(e){if(!n(this.$,e)){t(this.$,e)}};i.prototype.removeClass=function(t){if(n(this.$,t)){a(this.$,t)}};i.prototype.hasClass=function(t){return n(this.$,t)};e=function(t,e,n){if(t.addEventListener){t.addEventListener(""+e,n)}else{t.attachEvent("on"+e,n)}};o=function(t,e,n){if(t.removeEventListener){t.removeEventListener(""+e,n)}else{t.detachEvent("on"+e,n)}};r=/[ \t\n\f\r]+/g;t=function(t,e){t.className+=" "+e};a=function(t,e){t.className=(" "+t.className+" ").replace(r," ").replace(" "+e+" ","").replace(/^ | $/,"")};n=function(t,e){return(" "+t.className+" ").replace(r," ").indexOf(" "+e+" ")>=0};return i}();l=function(t){var e,n;C(r,t);function r(t){r.__super__.constructor.call(this,"iframe",function(e){var n,r,a,o;a={allowtransparency:true,scrolling:"no",frameBorder:0};for(n in a){r=a[n];e.setAttribute(n,r)}o={border:"none",height:"0",width:"1px"};for(n in o){r=o[n];e.style[n]=r}if(t){t.call(this,e)}})}r.prototype.html=function(t){var e;try{e=this.$.contentWindow.document;e.open();e.write(t);e.close()}catch(n){}};r.prototype.load=function(t){return this.$.src=t};r.prototype.size=function(){var t,r,a,o,i,s;try{a=this.$.contentWindow.document;i=a.documentElement;t=a.body;i.style.overflow=t.style.overflow=b.opera?"scroll":"visible";s=t.scrollWidth;o=t.scrollHeight;if(e!==1){t.style.display="inline-block";r=t.getBoundingClientRect();s=Math.max(s,n(r.width));o=Math.max(o,n(r.height));t.style.display=""}i.style.overflow=t.style.overflow="";return{width:s+"px",height:o+"px"}}catch(c){return{}}};r.prototype.resize=function(t){var e,n,r;r=t!=null?t:this.size(),n=r.width,e=r.height;if(n){this.$.style.width=n}if(e){return this.$.style.height=e}};e=b.devicePixelRatio||1;n=function(t){return Math.round(t*e)/e||0};return r}(s);t=function(){var t;function e(){}e.parse=function(e){var n,r,a;return{href:t(e.href),text:e.getAttribute("data-text")||e.textContent||e.innerText,data:{count:{api:(n=e.getAttribute("data-count-api"))&&~n.indexOf("#")?n.replace(/^(?!\/)/,"/"):void 0,href:t(e.getAttribute("data-count-href"))||t(e.href)},style:(a=e.getAttribute("data-style"))?a:void 0,icon:(r=e.getAttribute("data-icon"))?r:void 0}}};t=function(t){if(/^\s*javascript:/i.test(t)){return""}else{return t}};return e}();n=function(t){C(e,t);function e(t,n,r){var a;e.__super__.constructor.call(this,n);a=function(e){return function(){var n;n=e.size();e.once("load",function(){this.resize(n);if(r){r.call(this,this.$)}});e.load(o.url+"buttons.html"+t)}}(this);this.once("load",function(){var t;if(n=this.$.contentWindow.callback){t=n.script;if(t.readyState){new s(t).on("readystatechange",function(){if(/loaded|complete/.test(t.readyState)){a()}})}else{new s(t).on("load","error",function(){a()})}}else{a()}});this.html('<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<title></title>\n<base target="_blank"><!--[if lte IE 6]></base><![endif]-->\n<link rel="stylesheet" href="'+o.url+'assets/css/buttons.css">\n<script>document.location.hash = "'+t+'";</script>\n</head>\n<body>\n<script src="'+o.script.src+'"></script>\n</body>\n</html>')}return e}(l);r=function(){var t,e;function n(n){if(n&&n.data){m.body.className=function(){var t,e,r,a;a=o.styles;for(e=0,r=a.length;e<r;e++){t=a[e];if(t===n.data.style){return t}}}()||o.styles[0];if(n.href){m.getElementsByTagName("base")[0].href=n.href}new t(n,function(t){m.body.appendChild(t)});new e(n,function(t){m.body.appendChild(t)})}}t=function(t){C(e,t);function e(t,n){e.__super__.constructor.call(this,"a",function(e){e.className="button";if(t.href){e.href=t.href}new s("i",function(n){n=m.createElement("i");n.className=(t.data.icon||o.icon)+(o.iconClass?" "+o.iconClass:"");e.appendChild(n)});new s("span",function(t){t.appendChild(m.createTextNode(" "));e.appendChild(t)});new s("span",function(n){if(t.text){n.appendChild(m.createTextNode(t.text))}e.appendChild(n)});if(n){n(e)}})}return e}(s);e=function(t){C(e,t);function e(t,n){if(t.data.count&&t.data.count.api){e.__super__.constructor.call(this,"a",function(e){e.className="count";if(t.data.count.href){e.href=t.data.count.href}new s("b",function(t){e.appendChild(t)});new s("i",function(t){e.appendChild(t)});new s("span",function(r){var a;e.appendChild(r);a=function(){var e,n;n=t.data.count.api.split("#")[0];e=g.parse(n.split("?").slice(1).join("?"));e.callback="callback";return n.split("?")[0]+"?"+g.stringify(e)}();new s("script",function(i){var s;i.async=true;i.src=""+o.api+a;b.callback=function(a){var o;b.callback=null;if(a.meta.status===200){o=c.flatten(a.data)[t.data.count.api.split("#").slice(1).join("#")];if("[object Number]"===Object.prototype.toString.call(o)){o=(""+o).replace(/\B(?=(\d{3})+(?!\d))/g,",")}r.appendChild(m.createTextNode(" "+o+" "));if(n){n(e)}}};b.callback.script=i;this.on("error",function(){b.callback=null});if(i.readyState){this.on("readystatechange",function(){if(i.readyState==="loaded"&&i.children&&i.readyState==="loading"){b.callback=null}})}s=m.getElementsByTagName("head")[0];s.insertBefore(i,s.firstChild)})})})}}return e}(s);return n}();f=function(){function t(){}t.low_rate_limit=false;b.callback=function(e){t.rate_limit=e.data;t.low_rate_limit=t.rate_limit.resources.core.remaining<16};t.update=function(){if(!b.callback.script){new s("script",function(t){var e;t.async=true;t.src="https://api.github.com/rate_limit?callback=callback";b.callback.script=t;this.on("readystatechange","load","error",function(){if(!t.readyState||/loaded|complete/.test(t.readyState)){t.parentNode.removeChild(t);b.callback.script=null}});e=m.getElementsByTagName("head")[0];e.insertBefore(t,e.firstChild)})}};t.update();return t}();u=function(t){C(e,t);function e(){return e.__super__.constructor.apply(this,arguments)}e.prototype.on=function(){var t,n,r,a,o,i,c,u;r=2<=arguments.length?k.call(arguments,0,o=arguments.length-1):(o=0,[]),a=arguments[o++];if(r.indexOf("change")>=0){t=function(t){return function(e){return a.call(t,e||b.event)}}(this);u=this.get().elements;for(i=0,c=u.length;i<c;i++){n=u[i];new s(n).on("change","input",t)}}return e.__super__.on.apply(this,arguments)};e.prototype.serialize=function(){var t,e,n,r,a;t={};a=this.get().elements;for(n=0,r=a.length;n<r;n++){e=a[n];if(e.name){switch(e.type){case"radio":case"checkbox":if(e.checked){t[e.name]=e.value}break;default:t[e.name]=e.value}}}return t};return e}(s);i=function(t){C(e,t);function e(){e.__super__.constructor.apply(this,arguments);this.on("load",function(){var t,e,n,r;r=this.get().contentWindow.document.getElementsByTagName("a");for(e=0,n=r.length;e<n;e++){t=r[e];new s(t).on("click",function(t){t.preventDefault();return false})}new s(this.get().contentWindow.document.body).on("click",function(t){return function(){t.get().parentNode.click()}}(this))})}return e}(s);d=function(t){C(e,t);function e(t,n){var r,a,i;a=t.href,i=t.text,r=t.data;e.__super__.constructor.call(this,"a",function(t){var e,s;t.className=o.anchorClass;t.href=a;t.appendChild(m.createTextNode(""+i));for(e in r){s=r[e];t.setAttribute("data-"+e,s)}if(n){n(t)}})}return e}(s);p=function(t){C(e,t);function e(t){this.$=t;this.on("load",function(){var t,e;if(t=this.get().contentWindow.callback){e=t.script;if(e.readyState){new s(e).on("readystatechange",function(){if(/loaded|complete/.test(e.readyState)){this.resize()}})}else{new s(e).on("load","error",function(){this.resize()})}}else{this.resize()}})}e.prototype.load=function(t){this.get().parentNode.style.height=(t.data.style==="mega"?28:20)+2+"px";this.get().style.width="1px";this.get().style.height="0";this.get().src="buttons.html"+h.encode(t);this.get().contentWindow.document.location.reload()};return e}(l);a=function(t){C(e,t);function e(){e.__super__.constructor.apply(this,arguments);this.on("focus",function(){this.get().select()});this.on("click",function(){this.get().select()});this.on("mouseup",function(t){t.preventDefault();return false})}return e}(s);e=function(e){C(n,e);function n(e,n){var r,a,o,i,s,c,u,l,p;this.$=e;i=n.content,p=n.preview,r=p.button,s=p.frame,o=p.code,l=p.warning,c=n.snippet,u=n.user_repo;c.get().value='<!-- Place this tag right after the last button or just before your close body tag. -->\n<script async defer id="github-bjs" src="https://buttons.github.io/buttons.js"></script>';a=function(e){return function(n){var a,c,p,g,m,y,b,w,v,_;c=n.force;g=e.serialize();if(g.type){i.removeClass("hidden");v=["repo","standard-icon"];for(m=0,b=v.length;m<b;m++){p=v[m];e.get().elements[p].disabled=g.type==="follow"}_=["show-count"];for(y=0,w=_.length;y<w;y++){p=_[y];e.get().elements[p].disabled=g.type==="download"}if(!((!g.user||/^[a-z0-9][a-z0-9-]*$/i.test(g.user))&&(g.type==="follow"||!g.repo||/^[\w.-]+$/.test(g.repo)&&!/^\.\.?$/.test(g.repo)))){u.addClass("has-error")}else{u.removeClass("has-error");if(g.user===""||g.type!=="follow"&&g.repo===""){u.addClass("has-warning")}else{u.removeClass("has-warning")}}if(u.hasClass("has-error")||u.hasClass("has-warning")){g.user="ntkme";g.repo="github-buttons"}if(e.cache!==(a=h.encode(g))||c){e.cache=a;new d(e.parse(g),function(n){var a;o.get().value="<!-- Place this tag where you want the button to render. -->\n"+n.outerHTML;r.addClass("hidden");if(g["show-count"]!=null&&g.type!=="download"){f.update();if(f.low_rate_limit){r.removeClass("hidden");a=new Date(f.rate_limit.resources.core.reset*1e3);if(!e.reset||a>e.reset){e.reset=a;l.removeClass("hidden")}if(c){l.addClass("hidden")}else{n.removeAttribute("data-count-api")}}}s.load(t.parse(n));n=null})}}}}(this);r.on("click",function(t){t.preventDefault();a({force:true});return false});this.on("change",a)}n.prototype.parse=function(t){var e,n,r,a;if(t==null){t=this.serialize()}r=t.type,a=t.user,n=t.repo;e={className:"github-button",href:function(){switch(r){case"follow":return"https://github.com/"+a;case"watch":case"star":return"https://github.com/"+a+"/"+n;case"fork":return"https://github.com/"+a+"/"+n+"/fork";case"issue":return"https://github.com/"+a+"/"+n+"/issues";case"download":return"https://github.com/"+a+"/"+n+"/archive/master.zip";default:return"https://github.com/"}}(),text:function(){switch(r){case"follow":return"Follow @"+a;default:return r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()}}(),data:{icon:function(){switch(r){case"watch":return"octicon-eye";case"star":return"octicon-star";case"fork":return"octicon-git-branch";case"issue":return"octicon-issue-opened";case"download":return"octicon-cloud-download";default:return"octicon-mark-github"}}()}};if(t["large-button"]!=null){e.data.style="mega"}if(t["show-count"]!=null){switch(r){case"follow":e.data["count-href"]="/"+a+"/followers";e.data["count-api"]="/users/"+a+"#followers";break;case"watch":e.data["count-href"]="/"+a+"/"+n+"/watchers";e.data["count-api"]="/repos/"+a+"/"+n+"#subscribers_count";break;case"star":e.data["count-href"]="/"+a+"/"+n+"/stargazers";e.data["count-api"]="/repos/"+a+"/"+n+"#stargazers_count";break;case"fork":e.data["count-href"]="/"+a+"/"+n+"/network";e.data["count-api"]="/repos/"+a+"/"+n+"#forks_count";break;case"issue":e.data["count-api"]="/repos/"+a+"/"+n+"#open_issues_count"}}if(t["standard-icon"]!=null||e.data.icon==="octicon-mark-github"){delete e.data.icon}return e};return n}(u);_=m.getElementsByTagName("iframe");for(w=0,v=_.length;w<v;w++){y=_[w];if(y.parentNode.id!=="preview"){new i(y)}}new e(m.getElementById("button-config"),{content:new s(m.getElementById("content")),user_repo:new s(m.getElementById("user-repo")),preview:{button:new s(m.getElementById("preview-button")),frame:new p(m.getElementById("preview").getElementsByTagName("iframe")[0]),code:new a(m.getElementById("code")),warning:new s(m.getElementById("preview-warning"))},snippet:new a(m.getElementById("snippet"))});this.onbeforeunload=function(){}}).call(this);
//# sourceMappingURL=main.js.map