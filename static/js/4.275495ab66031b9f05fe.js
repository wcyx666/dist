webpackJsonp([4],{H6RF:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{loading:!0,tableData5:[],roles:"",formInline:{searchIup:"",region:""}}},mounted:function(){this.orderList(),this.roles=this.$store.state.userInfo.roles},methods:{orderList:function(){var e="/api"+this.$common.order_all,t=this;this.$http.post(e).then(function(e){console.log(e),"200"==e.code?(t.tableData5=e.data,setTimeout(function(){t.loading=!1},2e3)):"404"==e.code&&(sessionStorage.clear(),t.$router.push({path:"/login"}))}).catch(function(e){})},handleEdit:function(e,t){var o=this,n=this;this.loading=!0,n.$prompt("请输入接单人姓名","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(e){var a=e.value;console.log(a);var s="/api"+n.$common.project,r={order_oid:t,project:a};n.$http.post(s,r).then(function(e){console.log(e),1==e.code?(setTimeout(function(){o.loading=!1},2e3),o.$message({message:"增加接单人成功",type:"success"})):o.$message({message:"增加接单人失败",type:"success"})}).catch(function(e){o.$message({message:"增加接单人失败",type:"success"})})}).catch(function(){})},handleDone:function(e,t){var o=this,n=this;this.loading=!0,this.$confirm("是否已经完成订单","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e="/api"+n.$common.done,a={order_oid:t};n.$http.post(e,a).then(function(e){console.log(e),1==e.status?(setTimeout(function(){this.loading=!1},2e3),n.$message({message:"完成订单",type:"success"})):n.$message({message:"完成订单失败",type:"success"})}).catch(function(e){o.$message({message:"完成订单失败",type:"success"})})}).catch(function(){})},onSubmit:function(){var e=this,t=void 0,o={order_oid:this.formInline.searchIup};this.loading=!0,"id"==this.formInline.region?t="/api"+this.$common.orderSearchId:"mobile"==this.formInline.region&&(t="/api"+this.$common.orderSearchMobile),""==this.formInline.searchIup?(this.orderList(),setTimeout(function(){e.loading=!1},2e3)):this.$http.post(t,o).then(function(t){console.log(t),1==t.status&&(setTimeout(function(){e.loading=!1},2e3),e.tableData5=t.data)}).catch(function(t){e.$message({message:"搜索失败",type:"success"})})}}},a={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"order"},[o("div",{staticClass:"order_search"},[o("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[o("el-form-item",{attrs:{label:"查询方式"}},[o("el-select",{attrs:{placeholder:"请选择查询方式"},model:{value:e.formInline.region,callback:function(t){e.$set(e.formInline,"region",t)},expression:"formInline.region"}},[o("el-option",{attrs:{label:"订单编号",value:"id"}}),e._v(" "),o("el-option",{attrs:{label:"用户手机号",value:"mobile"}})],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"内容"}},[o("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.formInline.searchIup,callback:function(t){e.$set(e.formInline,"searchIup",t)},expression:"formInline.searchIup"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1),e._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData5}},[o("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[o("el-form-item",{attrs:{label:"商品编号"}},[o("span",[e._v(e._s(t.row.order_oid))])]),e._v(" "),o("el-form-item",{attrs:{label:"用户编号"}},[o("span",[e._v(e._s(t.row.user_id))])]),e._v(" "),o("el-form-item",{attrs:{label:"商品类型"}},[o("span",[e._v(e._s(t.row.comm_type))])]),e._v(" "),o("el-form-item",{attrs:{label:"商品名称"}},[o("span",[e._v(e._s(t.row.order_name))])]),e._v(" "),o("el-form-item",{attrs:{label:"房屋面积"}},[o("span",[e._v(e._s(t.row.order_per))])]),e._v(" "),o("el-form-item",{attrs:{label:"预约时间"}},[o("span",[e._v(e._s(t.row.make_date))])]),e._v(" "),o("el-form-item",{attrs:{label:"下单时间"}},[o("span",[e._v(e._s(t.row.place_time))])]),e._v(" "),o("el-form-item",{attrs:{label:"小区地址"}},[o("span",[e._v(e._s(t.row.user_addree))])]),e._v(" "),o("el-form-item",{attrs:{label:"号楼门牌"}},[o("span",[e._v(e._s(t.row.user_num))])]),e._v(" "),o("el-form-item",{attrs:{label:"用户姓名"}},[o("span",[e._v(e._s(t.row.user_name))])]),e._v(" "),o("el-form-item",{attrs:{label:"手机号码"}},[o("span",[e._v(e._s(t.row.user_mobile))])]),e._v(" "),o("el-form-item",{attrs:{label:"支付方式"}},[0==t.row.play_way?o("span",[e._v("微信支付")]):e._e(),e._v(" "),1==t.row.play_way?o("span",[e._v("线下支付")]):e._e()]),e._v(" "),o("el-form-item",{attrs:{label:"支付价格"}},[o("span",[e._v(e._s(t.row.order_price))])]),e._v(" "),o("el-form-item",{attrs:{label:"接单人"}},[o("span",[e._v(e._s(t.row.project))])])],1)]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"商品编号",prop:"order_oid"}}),e._v(" "),o("el-table-column",{attrs:{label:"下单时间",prop:"place_time"}}),e._v(" "),o("el-table-column",{attrs:{label:"商品类型",prop:"comm_type"}}),e._v(" "),o("el-table-column",{attrs:{label:"支付方式"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.play_way?o("span",[e._v("微信支付")]):e._e(),e._v(" "),1==t.row.play_way?o("span",[e._v("线下支付")]):e._e()]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"订单状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.order_type?o("span",[e._v("未支付")]):e._e(),e._v(" "),1==t.row.order_type?o("span",[e._v("进行中")]):e._e(),e._v(" "),2==t.row.order_type?o("span",[e._v("已完成")]):e._e(),e._v(" "),3==t.row.order_type?o("span",[e._v("已取消")]):e._e()]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:"mini"},on:{click:function(o){return e.handleEdit(t.$index,t.row.order_oid)}}},[e._v("接单")]),e._v(" "),o("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(o){return e.handleDone(t.$index,t.row.order_oid)}}},[e._v("完成")]),e._v(" "),"admin"==e.roles?o("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(o){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")]):e._e()]}}])})],1)],1)},staticRenderFns:[]};var s=o("VU/8")(n,a,!1,function(e){o("O6CQ")},null,null);t.default=s.exports},O6CQ:function(e,t){}});
//# sourceMappingURL=4.275495ab66031b9f05fe.js.map