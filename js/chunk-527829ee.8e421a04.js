(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-527829ee"],{"32a9":function(e,t,s){"use strict";s("9e7a")},"9e7a":function(e,t,s){},c0b4:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"user"},[t("el-tree",{ref:"tree",attrs:{data:e.menus,props:e.defaultProps,"node-key":"name","show-checkbox":""}}),t("el-button",{on:{click:e.getCheckedNodes}},[e._v("获取")]),t("div",{staticClass:"imgBox"},e._l([1,2,3,4,5],(function(s){return t("img",{key:s,attrs:{src:e.imgUrl,alt:s}})})),0)],1)},o=[],l={data(){return{menus:[],defaultProps:{label:"name",children:"children"},imgUrl:"https://gd-hbimg.huaban.com/7378f66599670a3614ce38edf79bf1551dacd8d0f5c70-53yvFv_fw658",ObserList:[]}},created(){this.menus=[...this.$router.options.routes]},methods:{getCheckedNodes(){let e=this.$refs.tree.getCheckedNodes();console.log(e)},handleScroll(){console.log(this.$refs.list)}},mounted(){this.$nextTick((function(){window.addEventListener("scroll",this.onScroll),console.log(this.onScroll)}))}},c=l,r=(s("32a9"),s("2877")),i=Object(r["a"])(c,n,o,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-527829ee.8e421a04.js.map