import{_ as h,u as f,q as k,b as p,c as u,e as s,x as c,m as d,t as m,F as g,k as b,g as x,a8 as y}from"./index-Btd1EPW-.js";import{a as C}from"./axios-BimPEqV4.js";const o=f(),H={data(){return{menu:""}},mounted(){o.appSidebarHide=!0,o.appHeaderHide=!0,o.appContentClass="p-0",o.appContentFullHeight=!0,C.get("/assets/data/pos/menu-stock.json").then(e=>{this.menu=e.data.menu})},beforeUnmount(){o.appSidebarHide=!1,o.appHeaderHide=!1,o.appContentClass="",o.appContentFullHeight=!1},methods:{checkTime(e){return e<10&&(e="0"+e),e},getTime(){var e=new Date,t=e.getHours(),n=e.getMinutes(),r=e.getSeconds(),a;return n=this.checkTime(n),r=this.checkTime(r),a=t>11?"pm":"am",t=t>12?t-12:t,setTimeout(this.getTime,500),t+":"+n+a}}},w={class:"pos pos-vertical pos-with-header",id:"pos"},S={class:"pos-container"},T={class:"pos-header"},F={class:"logo"},B={class:"time",id:"time"},D={class:"nav"},L={class:"nav-item"},N={class:"nav-item"},V={class:"nav-item"},q={class:"pos-content"},z={class:"pos-content-container p-3"},A={class:"row gx-3"},M={class:"col-xl-2 col-lg-3 col-md-4 col-sm-6 pb-3"},O={class:"pos-product"},P={class:"info"},R={class:"title text-truncate"},U={class:"desc text-truncate"},j={class:"d-flex align-items-center mb-3"},E={class:"flex-1"},I=["value"],$={class:"d-flex align-items-center mb-3"},G={class:"flex-1"},J={class:"form-check form-switch"},K=["id","checked"],Q=["for"];function W(e,t,n,r,a,v){const l=k("RouterLink");return p(),u("div",w,[s("div",S,[s("div",T,[s("div",F,[c(l,{to:"/pos/counter-checkout"},{default:d(()=>t[0]||(t[0]=[s("div",{class:"logo-img"},[s("i",{class:"fa fa-bowl-rice",style:{"font-size":"1.5rem"}})],-1),s("div",{class:"logo-text"},"Pine & Dine",-1)])),_:1})]),s("div",B,m(v.getTime()),1),s("div",D,[s("div",L,[c(l,{to:"/pos/kitchen-order",class:"nav-link"},{default:d(()=>t[1]||(t[1]=[s("i",{class:"far fa-clock nav-icon"},null,-1)])),_:1})]),s("div",N,[c(l,{to:"/pos/table-booking",class:"nav-link"},{default:d(()=>t[2]||(t[2]=[s("i",{class:"far fa-calendar-check nav-icon"},null,-1)])),_:1})]),s("div",V,[c(l,{to:"/pos/menu-stock",class:"nav-link"},{default:d(()=>t[3]||(t[3]=[s("i",{class:"fa fa-chart-pie nav-icon"},null,-1)])),_:1})])])]),s("div",q,[s("div",z,[s("div",A,[a.menu?(p(!0),u(g,{key:0},b(a.menu,(i,_)=>(p(),u("div",M,[s("div",O,[s("div",{class:"img",style:y({backgroundImage:"url("+i.image+")"})},null,4),s("div",P,[s("div",R,m(i.title),1),s("div",U,m(i.description),1),s("div",j,[t[4]||(t[4]=s("div",{class:"w-100px"},"Stock:",-1)),s("div",E,[s("input",{type:"text",class:"form-control",value:i.stock},null,8,I)])]),s("div",$,[t[5]||(t[5]=s("div",{class:"w-100px"},"Availability:",-1)),s("div",G,[s("div",J,[s("input",{class:"form-check-input",type:"checkbox",name:"qty",id:"product"+_,checked:i.available,value:"1"},null,8,K),s("label",{class:"form-check-label",for:"product"+_},null,8,Q)])])]),t[6]||(t[6]=s("div",null,[s("a",{href:"#",class:"btn btn-theme d-block mb-2"},"Update"),s("a",{href:"#",class:"btn btn-secondary d-block"},"Cancel")],-1))])])]))),256)):x("",!0)])])])])])}const Z=h(H,[["render",W]]);export{Z as default};
