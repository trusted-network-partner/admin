import{_ as r}from"./CategoryDetails.vue_vue_type_script_setup_true_lang-VVbeHdpt.js";import{d as n,r as p,b as i,c,x as u,T as l}from"./index-Btd1EPW-.js";import{u as d}from"./categories-D-WNszC5.js";import"./QuillEditor.vue_vue_type_script_setup_true_lang-ixhiCXj6.js";import"./formatDate-BTl2i0hr.js";const x=n({__name:"UpdateCategory",setup(m){const s=d(),a=`${l().params.categoryId}`,e=p({title:"",description:"",updatedAt:""});return(async()=>{const{status:o,category:t}=await s.getCategoryById(a);o===1&&(e.value.title=(t==null?void 0:t.title)||"",e.value.description=(t==null?void 0:t.title)||"")})(),(o,t)=>(i(),c("div",null,[u(r,{payloadInputs:e.value,categoryId:a,type:"Update"},null,8,["payloadInputs"])]))}});export{x as default};
