import{_ as w,u as C,r as u,c as v,o as S,a as n,b as s,d as t,e as P,F as g,f as m,g as I,n as x,t as d,p as F,h as M}from"./index-XK0isMMp.js";const f=i=>(F("data-v-15737127"),i=i(),M(),i),V={class:"flex flex-col min-h-[100vh] bg-[rgb(0,0,0)] justify-center py-4 ssm:pb-12 px-8"},N=f(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2.5",stroke:"currentColor",class:"w-8 h-8"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5 8.25 12l7.5-7.5"})],-1)),R=[N],K=f(()=>t("span",{class:"text-center font-montserrat font-extrabold tracking-wide text-3xl sm:text-4xl relative mt-16"},"Team Natayaka",-1)),q={class:"flex flex-col gap-8 w-full justify-center relative mt-6"},A={"aria-label":"team-parent-nav",class:"flex justify-center"},B={class:"border-b-2 border-gray-300 border-opacity-50 px-8 flex flex-wrap justify-center gap-8 pb-2"},G=["onClick"],W={key:0,"aria-label":"team-children-nav",class:"flex justify-center"},D={class:"border-b-2 border-gray-300 border-opacity-50 px-8 flex flex-wrap justify-center gap-8 pb-2"},T=["onClick"],X={class:"flex relative min-[100vh] mt-12 justify-center"},Y={class:"flex sm:gap-14 gap-10 flex-wrap justify-evenly"},$=["src","alt"],H={class:"flex rounded-r-lg group-hover:bg-[rgb(0,0,0)] group-hover:translate-x-0 group-hover:transition-all group-hover:duration-700 -translate-x-10 group-hover:backdrop:blur-xl flex-col px-4 py-2 absolute opacity-0 group-hover:opacity-100 bg-transparent bottom-3 text-center"},J={class:"text-lg text-gray-300 font-semibold font-merriweather"},L={class:"text-md text-gray-400 font-robotoslab"},Q={__name:"PageFourView",setup(i){const _=C(),r=[{parent:"Chiefs",children:[{role:"",members:[{name:"Chuda Mani Kakarla",image:"https://i.postimg.cc/sssY56wh/Chuda-Mani-Kakarla-2200031389.jpg"},{name:"Yogendra N",image:"https://i.postimg.cc/VfXtCntg/N-Yogendra-2200031946.jpg"}]}]},{parent:"Associate Chief's",children:[{role:"",members:[{name:"Pavan Kumar Maram",image:"https://i.postimg.cc/9FQwKkng/Pavan-Maram-2200032392.jpg"},{name:"Anuhya Sri CH",image:"https://i.postimg.cc/QM1FcZFC/Ch-Sri-Anuhya-2300570007.jpg"},{name:"Sivaji Vadduri",image:"https://i.postimg.cc/19qnkwvS/Sivaji-Vadduri-2200030186.jpg"},{name:"Santhosh Reddy S",image:"https://i.postimg.cc/t9gFM10R/S-Santhosh-Reddy-2300031052.jpg"},{name:"Sanjeev Sappa",image:"https://i.postimg.cc/x0JM9WTW/Sanjeev-Sappa-2200030049.jpg"},{name:"Pardhav G",image:"https://i.postimg.cc/wg2h2XGb/G-Pardhav-2200570013.jpg"},{name:"Kavya Priya R",image:"https://i.postimg.cc/SyB8RDnj/R-Kavya-Priya-2300570029.jpg"},{name:"Sailaga",image:"https://i.postimg.cc/qqbqpk5b/Sailaga-2200031778.jpg"}]}]},{parent:"Website",children:[{role:"",members:[{name:"Dinesh SriSanth Adari",image:"https://i.postimg.cc/4Xf17FmL/photo-2024-02-11-19-24-06.jpg"},{name:"Harsha Vardhan Polamarsetty",image:"https://i.postimg.cc/bqfCFJGM/Whats-App-Image-2024-02-11-at-19-15-52.jpg"}]}]}],h=u("Chiefs"),o=v(()=>r.findIndex(a=>a.parent===h.value)),l=u(r[o.value].children[0].role||""),y=v(()=>{const a=o.value,c=l.value;return a!==-1?r[a].children.findIndex(j=>j.role===c):-1}),b=a=>{h.value=a,l.value=r[o.value].children[0].role},k=a=>{l.value=a.role};return S(()=>{document.title="Team - Natayaka"}),(a,c)=>(n(),s("div",V,[t("button",{onClick:c[0]||(c[0]=e=>P(_).back()),class:"arrow-icon-prev fixed top-5 left-5 duration-500"},R),K,t("div",q,[t("nav",A,[t("div",B,[(n(),s(g,null,m(r,e=>t("button",{class:x([h.value==e.parent?"text-gray-50":"text-gray-400","text-xl hover:text-gray-300 font-semibold transition-all tracking-wider"]),key:e.parent,onClick:p=>b(e.parent)},d(e.parent),11,G)),64))])]),r[o.value].children[0].role.length>0?(n(),s("nav",W,[t("div",D,[(n(!0),s(g,null,m(r[o.value].children,e=>(n(),s("button",{class:x([l.value==e.role?"text-gray-50":"text-gray-400","text-xl hover:text-gray-300 font-semibold transition-all tracking-wider"]),key:e,onClick:p=>k(e)},d(e.role),11,T))),128))])])):I("",!0)]),t("div",X,[t("div",Y,[(n(!0),s(g,null,m(r[o.value].children[y.value].members,(e,p)=>(n(),s("div",{class:"group rounded-2xl cursor-pointer scale-95 hover:scale-100 transition-all bg-[#1d1e2a] max-w-[250px] max-h-[350px] md:max-w-[300px] md:max-h-[400px] overflow-hidden",key:p},[t("img",{class:"group-hover:bg-opacity-20",src:e.image,alt:e.name},null,8,$),t("div",H,[t("span",J,d(e.name),1),t("span",L,d(e.designation),1)])]))),128))])])]))}},E=w(Q,[["__scopeId","data-v-15737127"]]);export{E as default};