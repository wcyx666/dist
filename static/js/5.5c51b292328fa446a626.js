webpackJsonp([5],{eJSA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){return{userList:[],roles:""}},created:function(){this.getUser(),this.roles=this.$store.state.userInfo.roles},methods:{getUser:function(){var t=this,e=this,n="/api"+this.$common.user_all;this.$http.post(n).then(function(n){"200"==n.code?e.userList=n.data:"404"==n.code&&(sessionStorage.clear(),t.$router.push({path:"/login"}))}).catch(function(t){})},handleEdit:function(){},handleDelete:function(){}},mounted:function(){}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user"},[[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.userList}},[n("el-table-column",{attrs:{prop:"openid",label:"微信编号"}}),t._v(" "),n("el-table-column",{attrs:{prop:"id",label:"用户编号"}}),t._v(" "),n("el-table-column",{attrs:{prop:"times",label:"注册日期"}}),t._v(" "),"admin"==t.roles?n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}],null,!1,268720131)}):t._e()],1)]],2)},staticRenderFns:[]};var l=n("VU/8")(r,s,!1,function(t){n("rupq")},"data-v-39328846",null);e.default=l.exports},rupq:function(t,e){}});
//# sourceMappingURL=5.5c51b292328fa446a626.js.map