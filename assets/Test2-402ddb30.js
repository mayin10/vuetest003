import{a as m}from"./axios-c0bebe37.js";import{c as f}from"./constant-adb2729d.js";import{_ as z,r as s,o as w,c as P,f as t,g as o,a as n,h as c,t as S,k as A,j as x}from"./index-85211e2e.js";const F={data(){return{doc_api:"http://127.0.0.1:8000/dmsAPi/document/1",document:{},forder_api:"http://127.0.0.1:8000/dmsAPi/folder/",forderList:[],file_api:"http://127.0.0.1:8000/dmsAPi/uploadFile/",filelist:[],selected_filelist:[],document_id:0,forder_id:0,defaultProps:{children:"children",label:"name"},path:"",dataList:[],fileData:{create_by:localStorage.username,update_by:localStorage.username,type:2,note:"note",document:1,folder:5},headerObj:{Authorization:"Token "+localStorage.token},previewPath:"",previewVisible:!1}},created(){this.getDocument(),this.getForderList(),this.getFileList()},methods:{getDocument(){m({url:f.document+"1",method:"get",headers:{Authorization:"Token "+localStorage.token}}).then(e=>{this.document=e.data,this.document_id=this.document.id,this.fileData.document=this.document.id}).catch(e=>{})},getForderList(){m({url:f.folder,method:"get",headers:{Authorization:"Token "+localStorage.token},params:{page:1,pagesize:60,keyword:" "}}).then(e=>{let a=e.data.results.filter(l=>l.p_id==0);this.forderList=a,a.forEach(l=>{l.children=e.data.results.filter(g=>g.p_id==l.id),console.log(l.children)}),console.log(this.forderList)}).catch(e=>{})},getFileList(){m({url:f.file,method:"get",headers:{Authorization:"Token "+localStorage.token}}).then(e=>{this.filelist=e.data.results}).catch(e=>{})},handleNodeClick(e){this.fileData.folder=e.id,this.forder_id=e.id,this.path=e.name;let a="";this.forderList.forEach(l=>{e.p_id==l.id&&(a=l.name+"/")}),this.selected_filelist=this.filelist.filter(l=>l.folder==this.forder_id&&l.document==this.document_id),a==""?this.path="/"+e.name:this.path="/"+a+"/"+e.name},submitUpload(){this.$refs.upload.submit()},onchange(e,a){console.log(e),this.fileData.file_name=e.name,this.fileData.size=e.size},onSuccess(){this.$message.success("uploaded successfully")}}},V={class:"grid-content bg-purple"},B={class:"grid-content bg-purple"},T={class:"grid-content bg-purple-light"},j=n("i",{class:"el-icon-upload"},null,-1),U=n("div",{class:"el-upload__text"},[c("Drop file here or "),n("em",null,"click to upload")],-1),E=["href"];function I(e,a,l,g,i,p){const h=s("el-descriptions"),k=s("el-tree"),_=s("el-col"),y=s("el-descriptions-item"),v=s("el-upload"),C=s("el-input"),u=s("el-button"),r=s("el-table-column"),D=s("el-table"),L=s("el-row"),N=s("el-card");return w(),P("div",null,[t(N,null,{default:o(()=>[t(L,null,{default:o(()=>[t(_,{span:6},{default:o(()=>[t(h,{title:"Site/Project/Document"}),n("div",V,[t(k,{data:i.forderList,accordion:"",onNodeClick:p.handleNodeClick,props:i.defaultProps},null,8,["data","onNodeClick","props"])])]),_:1}),t(_,{span:6},{default:o(()=>[t(h,{title:"Folder"}),n("div",B,[t(k,{data:i.forderList,accordion:"",onNodeClick:p.handleNodeClick,props:i.defaultProps},null,8,["data","onNodeClick","props"])])]),_:1}),t(_,{span:12},{default:o(()=>[t(h,{title:"File"},{default:o(()=>[t(y,{label:"the selected path"},{default:o(()=>[c(S(i.path),1)]),_:1})]),_:1}),n("div",T,[n("div",null,[t(v,{ref:"upload",drag:"",class:"upload-demo",name:"upload",action:"http://127.0.0.1:8000/dmsAPi/uploadFile/",headers:i.headerObj,data:i.fileData,"auto-upload":!1,"on-success":p.onSuccess,"on-preview":e.imgPreview,"on-change":p.onchange,style:{padding:"30px"}},{default:o(()=>[j,U]),_:1},8,["headers","data","on-success","on-preview","on-change"]),t(C,{modelValue:i.fileData.note,"onUpdate:modelValue":a[0]||(a[0]=d=>i.fileData.note=d),type:"textarea"},null,8,["modelValue"]),t(u,{style:{"margin-left":"800px"},type:"success",onClick:p.submitUpload},{default:o(()=>[c("Upload ")]),_:1},8,["onClick"]),i.path!=""?(w(),A(D,{key:0,data:i.selected_filelist,style:{width:"100%"}},{default:o(()=>[t(r,{fixed:"",prop:"name",label:"name",width:"350"}),t(r,{prop:"version",label:"version",width:"150"}),t(r,{prop:"note",label:"note",width:"350"}),t(r,{prop:"create_by",label:"create_by",width:"120"}),t(r,{prop:"update_by",label:"update_by",width:"100"}),t(r,{fixed:"right",label:"Operations",width:"360"},{default:o(d=>[n("a",{href:d.row.upload,target:"view_window"},[t(u,{type:"success",size:"mini",onClick:b=>e.removeuserById(d.row.id)},{default:o(()=>[c(" Ansehen")]),_:2},1032,["onClick"])],8,E),t(u,{type:"primary",size:"mini",onClick:b=>e.removeuserById(d.row.id)},{default:o(()=>[c(" Download")]),_:2},1032,["onClick"]),t(u,{type:"danger",size:"mini",onClick:b=>e.removeuserById(d.row.id)},{default:o(()=>[c(" Delete")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])):x("",!0)])])]),_:1})]),_:1})]),_:1})])}const H=z(F,[["render",I]]);export{H as default};
