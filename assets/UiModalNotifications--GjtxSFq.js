import{h as p}from"./Highlightjs-DlrQgYvo.js";import{n as h}from"./NavScrollTo-DRJdVWAB.js";import{a as c}from"./axios-BimPEqV4.js";import{_ as y,ad as w,ai as x,ae as S,q as u,b as C,c as T,e as t,z as g,y as a,x as s,m as l,F as M}from"./index-Btd1EPW-.js";w();const _={data(){return{code1:"",code2:"",code3:"",code4:"",code5:""}},components:{highlightjs:p,navScrollTo:h},methods:{showToast(d,o){d.preventDefault();var v=new x(document.getElementById(o));v.show()}},mounted(){c.get("/assets/data/ui/modal-notification-code-1.json").then(d=>{this.code1=d.data}),c.get("/assets/data/ui/modal-notification-code-2.json").then(d=>{this.code2=d.data}),c.get("/assets/data/ui/modal-notification-code-3.json").then(d=>{this.code3=d.data}),c.get("/assets/data/ui/modal-notification-code-4.json").then(d=>{this.code4=d.data}),c.get("/assets/data/ui/modal-notification-code-5.json").then(d=>{this.code5=d.data}),new S(document.body,{target:"#sidebar-bootstrap",offset:200})}},k={class:"container"},B={class:"row justify-content-center"},N={class:"col-xl-10"},j={class:"row"},z={class:"col-xl-9"},E={id:"modal",class:"mb-5"},I={id:"modalSizes",class:"mb-5"},L={id:"modalCover",class:"mb-5"},O={id:"toastsNotification",class:"mb-5"},P={id:"toastsContainer",class:"mb-5"},V={class:"col-xl-3"},F={id:"sidebar-bootstrap",class:"navbar navbar-sticky d-none d-xl-block"},U={class:"nav"};function A(d,o,v,D,e,f){const i=u("card-body"),n=u("highlightjs"),r=u("card"),m=u("nav-scroll-to");return C(),T(M,null,[t("div",k,[t("div",B,[t("div",N,[t("div",j,[t("div",z,[o[16]||(o[16]=g('<ul class="breadcrumb"><li class="breadcrumb-item"><a href="#">UI KITS</a></li><li class="breadcrumb-item active">MODAL &amp; NOTIFICATION</li></ul><h1 class="page-header"> Modal &amp; Notification <small>page header description goes here...</small></h1><hr>',3)),t("div",E,[o[3]||(o[3]=t("h4",null,"Modal",-1)),o[4]||(o[4]=t("p",null,[a("Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content. Please read the "),t("a",{href:"https://getbootstrap.com/docs/5.3/components/modal/",target:"_blank"},"official Bootstrap documentation"),a(" for the full list of options.")],-1)),s(r,null,{default:l(()=>[s(i,null,{default:l(()=>o[2]||(o[2]=[t("div",{class:"modal position-static d-block"},[t("div",{class:"modal-dialog"},[t("div",{class:"modal-content shadow-lg"},[t("div",{class:"modal-header"},[t("h5",{class:"modal-title"},"Modal Title"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"})]),t("div",{class:"modal-body"},[t("p",null,"Modal body text goes here.")]),t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-default","data-bs-dismiss":"modal"},"Close"),t("button",{type:"button",class:"btn btn-primary"},"Save changes")])])])],-1)])),_:1}),s(n,{code:e.code1},null,8,["code"])]),_:1})]),t("div",I,[o[6]||(o[6]=t("h4",null,"Modal Sizes",-1)),o[7]||(o[7]=t("p",null,[a("Modals have three optional sizes, available via modifier classes to be placed on a "),t("code",null,".modal-dialog"),a(". These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.")],-1)),s(r,null,{default:l(()=>[s(i,null,{default:l(()=>o[5]||(o[5]=[t("button",{type:"button",class:"btn btn-default me-2","data-bs-toggle":"modal","data-bs-target":"#modalXl"},"Extra large modal",-1),t("button",{type:"button",class:"btn btn-default me-2","data-bs-toggle":"modal","data-bs-target":"#modalLg"},"Large modal",-1),t("button",{type:"button",class:"btn btn-default me-2","data-bs-toggle":"modal","data-bs-target":"#modalSm"},"Small modal",-1)])),_:1}),s(n,{code:e.code2},null,8,["code"])]),_:1})]),t("div",L,[o[9]||(o[9]=t("h4",null,"Modal Cover",-1)),o[10]||(o[10]=t("p",null,[a("Modal cover is an extended feature from Bootstrap modal. It provide the same background color as the modal content. Place a "),t("code",null,".modal-cover"),a(" css class on "),t("code",null,".modal"),a(" for full cover modal.")],-1)),s(r,null,{default:l(()=>[s(i,null,{default:l(()=>o[8]||(o[8]=[t("button",{type:"button",class:"btn btn-default me-2","data-bs-toggle":"modal","data-bs-target":"#modalCoverExample"},"Modal Cover",-1)])),_:1}),s(n,{code:e.code3},null,8,["code"])]),_:1})]),t("div",O,[o[12]||(o[12]=t("h4",null,"Toasts Notification",-1)),o[13]||(o[13]=t("p",null,[a("Push notifications to your visitors with a toast, a lightweight and easily customizable alert message. Please read the "),t("a",{href:"https://getbootstrap.com/docs/5.3/components/toasts/",target:"_blank"},"official Bootstrap documentation"),a(" for the full list of options.")],-1)),s(r,null,{default:l(()=>[s(i,null,{default:l(()=>o[11]||(o[11]=[t("div",{class:"toast show"},[t("div",{class:"toast-header"},[t("i",{class:"far fa-bell text-muted me-2"}),t("strong",{class:"me-auto"},"Bootstrap"),t("small",null,"11 mins ago"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast"})]),t("div",{class:"toast-body"}," Hello, world! This is a toast message. ")],-1)])),_:1}),s(n,{code:e.code4},null,8,["code"])]),_:1})]),t("div",P,[o[14]||(o[14]=t("h4",null,"Toasts Container",-1)),o[15]||(o[15]=t("p",null,[a("Toasts container is an extended ui from Bootstrap toasts. Wrap the toasts with "),t("code",null,".toasts-container"),a(" will allow toast to float within the right top position.")],-1)),s(r,null,{default:l(()=>[s(i,null,{default:l(()=>[t("a",{href:"#",class:"btn btn-default me-2",onClick:o[0]||(o[0]=b=>f.showToast(b,"toast-1"))},"Show toast 1"),t("a",{href:"#",class:"btn btn-default",onClick:o[1]||(o[1]=b=>f.showToast(b,"toast-2"))},"Show toast 2")]),_:1}),s(n,{code:e.code5},null,8,["code"])]),_:1})])]),t("div",V,[t("nav",F,[t("nav",U,[s(m,{target:"#modal","data-toggle":"scroll-to"},{default:l(()=>o[17]||(o[17]=[a("Modal")])),_:1}),s(m,{target:"#modalSizes","data-toggle":"scroll-to"},{default:l(()=>o[18]||(o[18]=[a("Modal Sizes")])),_:1}),s(m,{target:"#modalCover","data-toggle":"scroll-to"},{default:l(()=>o[19]||(o[19]=[a("Modal Cover")])),_:1}),s(m,{target:"#toastsNotification","data-toggle":"scroll-to"},{default:l(()=>o[20]||(o[20]=[a("Toasts Notification")])),_:1}),s(m,{target:"#toastsContainer","data-toggle":"scroll-to"},{default:l(()=>o[21]||(o[21]=[a("Toasts Container")])),_:1})])])])])])])]),o[22]||(o[22]=g('<div class="toasts-container"><div class="toast fade hide mb-3" data-autohide="false" id="toast-1"><div class="toast-header"><i class="far fa-bell text-muted me-2"></i><strong class="me-auto">Bootstrap</strong><small>11 mins ago</small><button type="button" class="btn-close" data-bs-dismiss="toast"></button></div><div class="toast-body"> Hello, world! This is a toast message. </div></div><div class="toast fade hide mb-3" data-autohide="false" id="toast-2"><div class="toast-header"><i class="far fa-bell text-muted me-2"></i><strong class="me-auto">Bootstrap</strong><small>2 seconds ago</small><button type="button" class="btn-close" data-bs-dismiss="toast"></button></div><div class="toast-body"> See? Just like this. </div></div></div><div class="modal modal-cover fade" id="modalCoverExample"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h3 class="modal-title">Sign Up!</h3><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body"><p class="mb-3"> 25% Off On Your First Purchase* Enter code WELCOME at checkout<br> Discover new apps, things to do &amp; more great news added daily! </p><div class="row mb-5"><div class="col-md-9"><input type="text" placeholder="Your email address here" class="form-control form-control-lg" name="icon-filter"></div><div class="col-md-3"><button type="button" class="btn btn-theme btn-lg btn-block">Continue</button></div></div><div class="pt-3"><a href="#" class="text-muted fs-12px">What is it? Terms and conditions</a></div></div></div></div></div><div class="modal fade" id="modalXl"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">Extra Large Modal</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body"> ... </div></div></div></div><div class="modal fade" id="modalLg"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">Large Modal</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body"> ... </div></div></div></div><div class="modal fade" id="modalSm"><div class="modal-dialog modal-sm"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">Small Modal</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body"> ... </div></div></div></div>',5))],64)}const Y=y(_,[["render",A]]);export{Y as default};
