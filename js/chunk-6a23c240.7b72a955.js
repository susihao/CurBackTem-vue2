(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a23c240"],{4127:function(e,t,r){"use strict";var n=r("d233"),a=r("b313"),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Array.isArray,l=Array.prototype.push,c=function(e,t){l.apply(e,i(t)?t:[t])},s=Date.prototype.toISOString,u={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return s.call(e)},skipNulls:!1,strictNullHandling:!1},p=function e(t,r,a,o,l,s,p,f,d,y,b,m){var h=t;if("function"===typeof p?h=p(r,h):h instanceof Date&&(h=y(h)),null===h){if(o)return s&&!m?s(r,u.encoder):r;h=""}if("string"===typeof h||"number"===typeof h||"boolean"===typeof h||n.isBuffer(h)){if(s){var g=m?r:s(r,u.encoder);return[b(g)+"="+b(s(h,u.encoder))]}return[b(r)+"="+b(String(h))]}var v,j=[];if("undefined"===typeof h)return j;if(i(p))v=p;else{var O=Object.keys(h);v=f?O.sort(f):O}for(var w=0;w<v.length;++w){var x=v[w];l&&null===h[x]||(i(h)?c(j,e(h[x],a(r,x),a,o,l,s,p,f,d,y,b,m)):c(j,e(h[x],r+(d?"."+x:"["+x+"]"),a,o,l,s,p,f,d,y,b,m)))}return j};e.exports=function(e,t){var r=e,l=t?n.assign({},t):{};if(null!==l.encoder&&"undefined"!==typeof l.encoder&&"function"!==typeof l.encoder)throw new TypeError("Encoder has to be a function.");var s="undefined"===typeof l.delimiter?u.delimiter:l.delimiter,f="boolean"===typeof l.strictNullHandling?l.strictNullHandling:u.strictNullHandling,d="boolean"===typeof l.skipNulls?l.skipNulls:u.skipNulls,y="boolean"===typeof l.encode?l.encode:u.encode,b="function"===typeof l.encoder?l.encoder:u.encoder,m="function"===typeof l.sort?l.sort:null,h="undefined"!==typeof l.allowDots&&l.allowDots,g="function"===typeof l.serializeDate?l.serializeDate:u.serializeDate,v="boolean"===typeof l.encodeValuesOnly?l.encodeValuesOnly:u.encodeValuesOnly;if("undefined"===typeof l.format)l.format=a["default"];else if(!Object.prototype.hasOwnProperty.call(a.formatters,l.format))throw new TypeError("Unknown format option provided.");var j,O,w=a.formatters[l.format];"function"===typeof l.filter?(O=l.filter,r=O("",r)):i(l.filter)&&(O=l.filter,j=O);var x,D=[];if("object"!==typeof r||null===r)return"";x=l.arrayFormat in o?l.arrayFormat:"indices"in l?l.indices?"indices":"repeat":"indices";var A=o[x];j||(j=Object.keys(r)),m&&j.sort(m);for(var k=0;k<j.length;++k){var C=j[k];d&&null===r[C]||c(D,p(r[C],C,A,f,d,y?b:null,O,m,h,g,w,v))}var P=D.join(s),S=!0===l.addQueryPrefix?"?":"";return P.length>0?S+P:""}},4328:function(e,t,r){"use strict";var n=r("4127"),a=r("9e6a"),o=r("b313");e.exports={formats:o,parse:a,stringify:n}},"4ec3":function(e,t,r){"use strict";r.d(t,"f",(function(){return i})),r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s})),r.d(t,"e",(function(){return u})),r.d(t,"d",(function(){return p})),r.d(t,"g",(function(){return f}));var n=r("4bca"),a=r("4328"),o=r.n(a);function i(e){return Object(n["a"])({method:"post",url:"/login",data:e})}function l(e){return Object(n["a"])({method:"get",url:"/students",params:e})}function c(e){return Object(n["a"])({method:"delete",url:"/students/"+e})}function s(e,t){return e=o.a.stringify(e),Object(n["a"])({method:t,url:"/info",data:e})}function u(e){return Object(n["a"])({method:"delete",url:"/info/"+e})}function p(){return Object(n["a"])({method:"get",url:"/dataview"})}function f(){return Object(n["a"])({method:"get",url:"/travel"})}},"77af":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"studentlists"},[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline,size:"mini"}},[t("el-form-item",{attrs:{label:"姓名"}},[t("el-input",{attrs:{placeholder:"请输入姓名查询"},model:{value:e.formInline.name,callback:function(t){e.$set(e.formInline,"name",t)},expression:"formInline.name"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onFind}},[e._v("查询")])],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onReset}},[e._v("重置")])],1)],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.ComData,border:""}},[t("el-table-column",{attrs:{prop:"number",label:"学号",align:"center",width:"180"}}),t("el-table-column",{attrs:{prop:"name",label:"姓名",align:"center",width:"180"}}),t("el-table-column",{attrs:{prop:"age",label:"年龄",align:"center",width:"180"}}),t("el-table-column",{attrs:{prop:"sex_text",label:"性别",align:"center",width:"180"}}),t("el-table-column",{attrs:{prop:"class",label:"班级",align:"center",width:"180"}}),t("el-table-column",{attrs:{prop:"address",width:"180",align:"center",label:"地址"}}),t("el-table-column",{attrs:{prop:"phone",width:"180",align:"center",label:"手机号码"}}),t("el-table-column",{attrs:{prop:"state_text",label:"是否入学",align:"center",width:"180"}}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-button",{attrs:{type:"danger",size:"mini",width:"180",align:"center",icon:"el-icon-delete"},on:{click:function(t){return e.del(r.row)}}},[e._v("删除")])]}}])})],1),t("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[5,10,20,30],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},a=[],o=r("4ec3"),i={data(){return{tableData:[],nowData:[],currentPage:1,pageSize:10,total:0,formInline:{name:""}}},methods:{getData(e){Object(o["c"])(e).then(e=>{200===e.data.status&&(this.total=e.data.total,this.tableData=e.data.data,this.tableData.forEach(e=>{1===e.sex?e.sex_text="男":e.sex_text="女","1"===e.state?e.state_text="已入学":"2"===e.state?e.state_text="未入学":e.state_text="休学中"}))})},handleSizeChange(e){this.pageSize=e,this.currentPage=1,console.log(`每页 ${e} 条`)},handleCurrentChange(e){this.currentPage=e,console.log("当前页: "+e)},del(e){this.$alert("确定删除吗？","提示",{confirmButtonText:"确定",callback:()=>{Object(o["a"])(e.id).then(e=>{200===e.data.status&&(this.$message({message:"删除数据成功！",type:"success"}),this.getData())})}})},onFind(){this.getData(this.formInline)},onReset(){this.formInline.name="",this.getData()}},created(){this.getData()},computed:{ComData(){return this.tableData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)}}},l=i,c=(r("909a"),r("2877")),s=Object(c["a"])(l,n,a,!1,null,null,null);t["default"]=s.exports},"909a":function(e,t,r){"use strict";r("b900")},"9e6a":function(e,t,r){"use strict";var n=r("d233"),a=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t){for(var r={},n=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,l=n.split(t.delimiter,i),c=0;c<l.length;++c){var s,u,p=l[c],f=p.indexOf("]="),d=-1===f?p.indexOf("="):f+1;-1===d?(s=t.decoder(p,o.decoder),u=t.strictNullHandling?null:""):(s=t.decoder(p.slice(0,d),o.decoder),u=t.decoder(p.slice(d+1),o.decoder)),a.call(r,s)?r[s]=[].concat(r[s]).concat(u):r[s]=u}return r},l=function(e,t,r){for(var n=t,a=e.length-1;a>=0;--a){var o,i=e[a];if("[]"===i&&r.parseArrays)o=[].concat(n);else{o=r.plainObjects?Object.create(null):{};var l="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,c=parseInt(l,10);r.parseArrays||""!==l?!isNaN(c)&&i!==l&&String(c)===l&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(o=[],o[c]=n):"__proto__"!==l&&(o[l]=n):o={0:n}}n=o}return n},c=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,c=o.exec(n),s=c?n.slice(0,c.index):n,u=[];if(s){if(!r.plainObjects&&a.call(Object.prototype,s)&&!r.allowPrototypes)return;u.push(s)}var p=0;while(null!==(c=i.exec(n))&&p<r.depth){if(p+=1,!r.plainObjects&&a.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+n.slice(c.index)+"]"),l(u,t,r)}};e.exports=function(e,t){var r=t?n.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!==typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"===typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:o.delimiter,r.depth="number"===typeof r.depth?r.depth:o.depth,r.arrayLimit="number"===typeof r.arrayLimit?r.arrayLimit:o.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"===typeof r.decoder?r.decoder:o.decoder,r.allowDots="boolean"===typeof r.allowDots?r.allowDots:o.allowDots,r.plainObjects="boolean"===typeof r.plainObjects?r.plainObjects:o.plainObjects,r.allowPrototypes="boolean"===typeof r.allowPrototypes?r.allowPrototypes:o.allowPrototypes,r.parameterLimit="number"===typeof r.parameterLimit?r.parameterLimit:o.parameterLimit,r.strictNullHandling="boolean"===typeof r.strictNullHandling?r.strictNullHandling:o.strictNullHandling,""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var a="string"===typeof e?i(e,r):e,l=r.plainObjects?Object.create(null):{},s=Object.keys(a),u=0;u<s.length;++u){var p=s[u],f=c(p,a[p],r);l=n.merge(l,f,r)}return n.compact(l)}},b313:function(e,t,r){"use strict";var n=String.prototype.replace,a=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,a,"+")},RFC3986:function(e){return String(e)}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},b900:function(e,t,r){},d233:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,a=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),o=function(e){var t;while(e.length){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var n=[],a=0;a<t.length;++a)"undefined"!==typeof t[a]&&n.push(t[a]);r.obj[r.prop]=n}}return t},i=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(r[n]=e[n]);return r},l=function e(t,r,a){if(!r)return t;if("object"!==typeof r){if(Array.isArray(t))t.push(r);else{if(!t||"object"!==typeof t)return[t,r];(a&&(a.plainObjects||a.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!==typeof t)return[t].concat(r);var o=t;return Array.isArray(t)&&!Array.isArray(r)&&(o=i(t,a)),Array.isArray(t)&&Array.isArray(r)?(r.forEach((function(r,o){if(n.call(t,o)){var i=t[o];i&&"object"===typeof i&&r&&"object"===typeof r?t[o]=e(i,r,a):t.push(r)}else t[o]=r})),t):Object.keys(r).reduce((function(t,o){var i=r[o];return n.call(t,o)?t[o]=e(t[o],i,a):t[o]=i,t}),o)},c=function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},s=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},u=function(e){if(0===e.length)return e;for(var t="string"===typeof e?e:String(e),r="",n=0;n<t.length;++n){var o=t.charCodeAt(n);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?r+=t.charAt(n):o<128?r+=a[o]:o<2048?r+=a[192|o>>6]+a[128|63&o]:o<55296||o>=57344?r+=a[224|o>>12]+a[128|o>>6&63]+a[128|63&o]:(n+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(n)),r+=a[240|o>>18]+a[128|o>>12&63]+a[128|o>>6&63]+a[128|63&o])}return r},p=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var a=t[n],i=a.obj[a.prop],l=Object.keys(i),c=0;c<l.length;++c){var s=l[c],u=i[s];"object"===typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:i,prop:s}),r.push(u))}return o(t)},f=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},d=function(e){return null!==e&&"undefined"!==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))};e.exports={arrayToObject:i,assign:c,compact:p,decode:s,encode:u,isBuffer:d,isRegExp:f,merge:l}}}]);
//# sourceMappingURL=chunk-6a23c240.7b72a955.js.map