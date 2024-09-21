import{_ as B,u as C,af as S,q as g,b as i,c as d,e as s,x as p,m as v,t as m,z as V,F as h,k as b,l as A,g as x,n as H,w as F,y as M,f as D,v as T}from"./index-Btd1EPW-.js";import{a as N}from"./axios-BimPEqV4.js";import{_ as U}from"./Datepicker.vue_vue_type_script_setup_true_lang-Db4XaR5j.js";const _=C(),P={data(){return{tables:"",currentHour:"",modal:"",modalData:""}},components:{datepicker:U},mounted(){_.appSidebarHide=!0,_.appHeaderHide=!0,_.appContentClass="p-0",_.appContentFullHeight=!0,N.get("/assets/data/pos/table-booking.json").then(e=>{this.tables=e.data.tables})},beforeUnmount(){_.appSidebarHide=!1,_.appHeaderHide=!1,_.appContentClass="",_.appContentFullHeight=!1},methods:{checkTime(e){return e<10&&(e="0"+e),e},getTime(){var e=new Date,t=e.getHours(),l=e.getMinutes(),r=e.getSeconds(),a;return l=this.checkTime(l),r=this.checkTime(r),a=t>11?"pm":"am",t=t>12?t-12:t,setTimeout(this.getTime,500),t+":"+l+a},getAvailableTable(){var e=0,t=new Date,l=t.getHours(),r;r=l>11?"pm":"am",l=l>12?l-12:l,this.currentHour=this.checkTime(l)+":00"+r;for(var a=0;a<this.tables.length;a++)for(var o=0;o<this.tables[a].reservation.length;o++)this.tables[a].reservation[o].time==this.currentHour&&!this.tables[a].reservation[o].text&&e++;return e},getStatus(l,t){var l=l.split(":"),r=l[1].split("00"),a=r[1],o=parseInt(l[0]),u=a=="pm"&&o<12?o+12:o,k=new Date,f=k.getHours();return u==f&&t?"in-progress":f>u&&t?"completed":f<u&&t?"upcoming":""},checkSameHour(e){var t=new Date,l=t.getHours(),r=l>12?"pm":"am",a=l>12?l-12:l,a=a<10?"0"+a:a,o=a+":00"+r;return o==e},checkAvailable(e){for(var t=0;t<e.length;t++){var l=e[t].time.split(":"),r=parseInt(l[0]),a=new Date,o=a.getHours();if(o=o>12?o-12:o,o==r&&e.text)return!0}return!1},showBookingModal(e,t){e.preventDefault(),this.modalData=t,this.modal=new S(this.$refs.modalPosBooking),this.modal.show()},submitBooking(){for(var e=0;e<this.tables.length;e++)this.tables[e].id==this.modalData.id&&(this.tables[e]=this.modalData);this.modal.hide()}}},L={class:"pos pos-vertical pos-with-header",id:"pos"},z={class:"pos-container"},I={class:"pos-header"},E={class:"logo"},O={class:"time",id:"time"},R={class:"nav"},j={class:"nav-item"},q={class:"nav-item"},G={class:"nav-item"},J={class:"pos-content"},K={class:"pos-content-container h-100 p-4","data-scrollbar":"true","data-height":"100%"},Q={class:"d-md-flex align-items-center mb-4"},W={class:"flex-1"},X={class:"fs-24px mb-1"},Y={class:"w-250px"},Z={class:"row gx-4"},$={class:"col-xl-2 col-lg-3 col-md-4 col-sm-6"},ss={class:"pos-table-booking-container"},ts={class:"pos-table-booking-header"},es={class:"d-flex align-items-center"},as={class:"flex-1"},os={class:"no"},ls={class:"desc"},is={key:0,class:"pe-1 text-success"},ns={key:1,class:"text-inverse text-opacity-25"},ds={class:"pos-table-booking-body"},cs={class:"time"},rs={class:"info"},ms={key:0,class:"fa fa-circle"},us=["onClick"],ps={key:1,class:"col-xl-2 col-lg-3 col-md-4 col-sm-6"},vs={class:"modal modal-pos fade",ref:"modalPosBooking"},_s={class:"modal-dialog modal-lg"},hs={class:"modal-content border-0"},fs={class:"modal-header align-items-center"},gs={class:"modal-title d-flex align-items-end"},bs={class:"fs-14px ms-2 text-inverse text-opacity-50"},xs={class:"modal-body"},ks={class:"row"},ws={class:"col-lg-6"},ys={key:0,class:"form-group mb-2"},Hs={class:"input-group"},Ds={class:"input-group-text fw-bold w-90px fs-13px"},Ts=["onUpdate:modelValue"],Bs={class:"col-lg-6"},Cs={key:0,class:"form-group mb-2"},Ss={class:"input-group"},Vs={class:"input-group-text fw-bold w-90px fs-13px"},As=["onUpdate:modelValue"];function Fs(e,t,l,r,a,o){const u=g("RouterLink"),k=g("datepicker"),f=g("card-body"),y=g("card");return i(),d(h,null,[s("div",L,[s("div",z,[s("div",I,[s("div",E,[p(u,{to:"/pos/counter-checkout"},{default:v(()=>t[1]||(t[1]=[s("div",{class:"logo-img"},[s("i",{class:"fa fa-bowl-rice",style:{"font-size":"1.5rem"}})],-1),s("div",{class:"logo-text"},"Pine & Dine",-1)])),_:1})]),s("div",O,m(o.getTime()),1),s("div",R,[s("div",j,[p(u,{to:"/pos/kitchen-order",class:"nav-link"},{default:v(()=>t[2]||(t[2]=[s("i",{class:"far fa-clock nav-icon"},null,-1)])),_:1})]),s("div",q,[p(u,{to:"/pos/table-booking",class:"nav-link"},{default:v(()=>t[3]||(t[3]=[s("i",{class:"far fa-calendar-check nav-icon"},null,-1)])),_:1})]),s("div",G,[p(u,{to:"/pos/menu-stock",class:"nav-link"},{default:v(()=>t[4]||(t[4]=[s("i",{class:"fa fa-chart-pie nav-icon"},null,-1)])),_:1})])])]),s("div",J,[s("div",K,[s("div",Q,[s("div",W,[s("div",X,"Available Table ("+m(o.getAvailableTable())+"/"+m(a.tables.length)+")",1),t[5]||(t[5]=V('<div class="mb-2 mb-md-0 d-flex"><div class="d-flex align-items-center me-3"><i class="fa fa-circle fa-fw text-inverse text-opacity-25 fs-9px me-1"></i> Completed </div><div class="d-flex align-items-center me-3"><i class="fa fa-circle fa-fw text-warning fs-9px me-1"></i> Upcoming </div><div class="d-flex align-items-center me-3"><i class="fa fa-circle fa-fw text-success fs-9px me-1"></i> In-progress </div></div>',1))]),s("div",Y,[p(k)])]),s("div",Z,[a.tables?(i(!0),d(h,{key:0},b(a.tables,n=>(i(),d("div",$,[p(y,{class:"pos-table-booking"},{default:v(()=>[p(f,{class:"p-1"},{default:v(()=>[s("div",ss,[s("div",ts,[s("div",es,[s("div",as,[t[6]||(t[6]=s("div",{class:"title"},"TABLE",-1)),s("div",os,m(n.name),1),s("div",ls,"max "+m(n.pax)+" pax",1)]),o.checkAvailable(n.reservation)?(i(),d("div",is,t[7]||(t[7]=[s("i",{class:"bi bi-check2-circle fa-3x"},null,-1)]))):(i(),d("div",ns,t[8]||(t[8]=[s("i",{class:"bi bi-dash-circle fa-3x"},null,-1)])))])]),s("div",ds,[(i(!0),d(h,null,b(n.reservation,c=>(i(),d("div",{class:H(["booking",{highlight:o.checkSameHour(c.time)}])},[s("div",cs,m(c.time),1),s("div",rs,m(c.text?c.text:"-"),1),s("div",{class:H(["status",o.getStatus(c.time,c.text)])},[c.text?(i(),d("i",ms)):x("",!0)],2)],2))),256))])]),s("a",{href:"#",class:"stretched-link",onClick:c=>o.showBookingModal(c,n)},null,8,us)]),_:2},1024)]),_:2},1024)]))),256)):(i(),d("div",ps," No records found "))])])])])]),s("div",vs,[s("div",_s,[s("div",hs,[a.modalData?(i(),A(y,{key:0},{default:v(()=>[s("form",{onSubmit:t[0]||(t[0]=F((...n)=>o.submitBooking&&o.submitBooking(...n),["prevent"]))},[p(f,{class:"p-0"},{default:v(()=>[s("div",fs,[s("h5",gs,[M(" Table "+m(a.modalData.name)+" ",1),s("small",bs,"max "+m(a.modalData.pax)+" pax",1)]),t[9]||(t[9]=s("a",{href:"#","data-bs-dismiss":"modal",class:"ms-auto btn-close"},null,-1))]),s("div",xs,[s("div",ks,[s("div",ws,[(i(!0),d(h,null,b(a.modalData.reservation,(n,c)=>(i(),d(h,null,[c<=7?(i(),d("div",ys,[s("div",Hs,[s("div",Ds,m(n.time),1),D(s("input",{type:"text",class:"form-control",placeholder:"","onUpdate:modelValue":w=>n.text=w},null,8,Ts),[[T,n.text]])])])):x("",!0)],64))),256))]),s("div",Bs,[(i(!0),d(h,null,b(a.modalData.reservation,(n,c)=>(i(),d(h,null,[c>7?(i(),d("div",Cs,[s("div",Ss,[s("div",Vs,m(n.time),1),D(s("input",{type:"text",class:"form-control",placeholder:"","onUpdate:modelValue":w=>n.text=w},null,8,As),[[T,n.text]])])])):x("",!0)],64))),256))])])]),t[10]||(t[10]=s("div",{class:"modal-footer"},[s("a",{href:"#",class:"btn btn-default w-100px","data-bs-dismiss":"modal"},"Cancel"),s("button",{type:"submit",class:"btn btn-success w-100px"},"Book")],-1))]),_:1})],32)]),_:1})):x("",!0)])])],512)],64)}const Ps=B(P,[["render",Fs]]);export{Ps as default};
