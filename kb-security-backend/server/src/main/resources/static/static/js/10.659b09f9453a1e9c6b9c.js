webpackJsonp([10],{YTmJ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("fZjL"),n=a.n(r),s=a("AX/i"),l=a("orfX"),i=a("rJEH"),o=a("C7S3"),c=a("J5w5"),d=a("nNTE");e.default={name:"comp_chatlist_catalog",mixins:[s.a],data:function(){return{table_class:"flex items-center ",order_by_type:1,search_key:"",sql_hack:!1,contentStyle:{backgroundColor:"#e3f2fd!important",fontSize:"18px",textAlign:"left"},table_columns:[{name:"id",align:"left",field:"id",label:"ID",renderData:{staticClass:"text-tertiary ",style:{minWidth:"50px",fontWeight:"700"}}},{name:"title",align:"left",field:"title",label:"标题",renderData:{staticClass:"text-primary nowrap ellipsis overflow-hidden",style:{maxWidth:"600px",fontWeight:"700"}},render:function(t,e,a){return t("div",{staticClass:"cursor-pointer",on:{click:function(){return a.expand=!a.expand}}},l.a.ofNullable(e).orElse("--"))}},{name:"praise_count",align:"left",field:"praise_count",label:"获赞数",renderData:{staticClass:"text-tertiary",style:{minWidth:"100px",fontWeight:"700"}},render:function(t,e,a){return l.a.ofNullable(e).orElse("0")}},{name:"login_name",align:"left",field:"login_name",label:"创建人",renderData:{staticClass:"text-tertiary",style:{minWidth:"100px",fontWeight:"700"}},render:function(t,e,a){return l.a.ofNullable(e).orElse("--")}},{name:"create_time",align:"left",field:"create_time",label:"创建时间",renderData:{staticClass:"text-tertiary",style:{minWidth:"100px",fontWeight:"700"}},render:function(t,e,a){return l.a.ofNullable(e).orElse("--")}}]}},methods:{render_search:function(t){var e=this;return t("div",{staticClass:"q-mb-sm"},[t(o.a,{props:{value:this.search_key,placeholder:"按标题搜索",width:245},on:{input:function(t){e.search_key=t,e.$nextTick(e.refresh_catalog)}}})])},render_order_btn:function(t,e){var a=this;return t("div",{staticClass:"q-ml-md",style:{marginTop:"5px"}},[t("q-btn",{staticClass:"no-shadow",props:{label:e.label,color:"deep-orange-1",textColor:this.order_by_type===e.type?"deep-orange":e.color,flat:this.order_by_type!==e.type},nativeOn:{click:function(){a.order_by_type=e.type,a.refresh_catalog()}}})])},render_sql_hack_btn:function(t){var e=this;return t("div",{staticClass:"q-ml-md",style:{marginTop:"5px"}},[t("q-btn",{staticClass:"no-shadow",props:{label:this.sql_hack?"关闭":"开启",color:"deep-orange-1",textColor:this.sql_hack?"deep-orange":"dark",flat:!this.sql_hack},nativeOn:{click:function(){e.sql_hack=!e.sql_hack}}},[t("q-tooltip",{staticClass:"font-md q-pa-sm",props:{self:"bottom left",anchor:"top right",offset:[0,0]}},["注入开关"])])])},render_table_expand:function(t,e){return e.row.content&&0!==e.row.content.length?t(d.a,{props:{editorStyle:this.editorStyle,contentStyle:this.contentStyle,desText:e.row.content,border:!1,readonly:!0,toolBarHide:!0}}):t("span",{staticClass:"text-faded q-pl-lg"},"无聊天内容信息！")},request:function(){this.refresh_catalog()},refresh_catalog:function(){var t=this;Object(c.b)(this.search_key,this.page,this.order_by_type,this.sql_hack).then(function(e){t.rows=e.data.dataList||[],t.rowsNumber=e.data.count}).catch(function(){return t.$q.err("获取聊天列表异常")})}},render:function(t){var e=this;return t("div",{staticClass:"q-ml-md q-mr-md"},[t("div",{staticClass:"row col-12 flex q-pt-md"},[this.render_search(t),t("div",{staticClass:"row q-ml-md"},[n()(i.a).map(function(a){return[e.render_order_btn(t,i.a[a])]})]),this.render_sql_hack_btn(t)]),t("q-table",{staticClass:"shadow-0 overflow-hidden"+this.table_class,props:{color:"primary",data:this.rows,columns:this.table_columns,rowKey:this.table_row_key,pagination:this.pagination_ctl,rowsPerPageOptions:[10],rowsPerPageLabel:this.rowsPerPageLabel,noDataLabel:this.noDataLabel,hideBottom:!this.rowsNumber},scopedSlots:this.__render_scope_slot(t),on:{request:this.__request}})])}}}});
//# sourceMappingURL=10.659b09f9453a1e9c6b9c.js.map