import{j as t,a as e,c as F,R as k}from"./main.d243d75c.js";import{S as a,T as r,B as i,a as p,F as c,C as g,P as N,I as v,b as w,c as f,d as y,e as d,f as l,g as C,h as b,i as u,j as S}from"./index.112a023d.js";import{S as T,a as x,b as E,c as B,d as s}from"./Play.9333d7b4.js";import{S as _}from"./WarningO.ba004483.js";const z=["React","Vant","Next"],A=()=>{const[n,o]=k.useState(0);return e(i.Group,{className:"_home-button-group",round:!0,block:!0,type:"primary",children:z.map((h,m)=>e(i,{plain:m!==n,onClick:()=>o(m),children:h},h))})},j=()=>{const[n,o]=k.useState([20,50]);return e(S,{barHeight:4,range:!0,value:n,onChange:o,vertical:!0})};var D=()=>t("div",{className:"_home-container",children:[e("div",{className:"_home-container-left",children:t(a,{direction:"vertical",block:!0,align:"end",children:[e(r.Title,{level:1,children:"React Vant"}),t(r.Title,{level:2,children:["\u6027\u80FD\u6781\u4F73\u7684\u9AD8\u8D28\u91CF\u7EC4\u4EF6\u5E93\uFF0C\u8986\u76D6",e("span",{className:"_home-primary-color",children:"\u79FB\u52A8\u7AEF"}),"\u4E3B\u6D41\u573A\u666F"]}),t(r.Text,{type:"secondary",size:"lg",children:[e(r.Text,{style:{cursor:"pointer"},onClick:()=>window.open("https://github.com/youzan/vant","_blank"),strong:!0,type:"primary",children:"Vant"})," ","\u662F\u6709\u8D5E\u524D\u7AEF\u56E2\u961F\u5F00\u6E90\u7684\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93\uFF0C\u4E8E 2017 \u5E74\u5F00\u6E90\u3002"]}),t(a,{gap:16,style:{marginTop:30},children:[e(i,{round:!0,size:"large",icon:e(T,{}),style:{width:148},onClick:()=>{window.location.href="/components"},children:"\u7EC4\u4EF6\u5217\u8868"}),e(i,{size:"large",onClick:()=>{window.location.href="/guide/quickstart"},round:!0,type:"primary",icon:e(p,{}),iconPosition:"right",style:{width:148},children:"\u5F00\u59CB\u4F7F\u7528"})]})]})}),e("div",{className:"_home-container-right",children:t(c,{className:"_home-container-right-content",gutter:40,children:[e(c.Item,{span:12,children:t(a,{direction:"vertical",block:!0,gap:40,children:[e(g,{className:"_home-card",round:!0,children:e(g.Body,{children:t(a,{direction:"vertical",children:[t(r.Text,{type:"light",children:[e(x,{})," March 25th"]}),e(i,{round:!0,plain:!0,size:"mini",icon:e(E,{style:{fontSize:18,color:"#3f45ff",fontWeight:"bold"}})}),e(r.Text,{strong:!0,size:"xl",type:"light",children:"Check the docs for getting every component API"}),e(N,{showPivot:!1,color:"#fff",trackColor:"rgba(255, 255, 255, 0.32)",percentage:"75"})]})})}),t(c,{className:"_home-music-card",children:[e(v,{fit:"cover",style:{width:124,height:124,margin:"0 10px 0 0",borderRadius:4,overflow:"hidden",flex:"none"},src:"https://cdn.jsdelivr.net/gh/3lang3/react-vant@main/public/home-music-card-1.jpg"}),t(a,{style:{padding:"10px 0"},direction:"vertical",justify:"between",children:[t("div",{children:[e(r.Title,{level:4,children:"Ultraviolet"}),e(r.Text,{children:"Basement \u2022 Beside Myself"})]}),t(a,{children:[e(i,{size:"small",icon:e(w,{}),round:!0}),e(i,{size:"small",icon:e(B,{}),round:!0}),e(i,{size:"small",icon:e(p,{}),round:!0})]})]})]}),e(A,{}),t(a,{className:"_home-switch",align:"center",block:!0,justify:"between",children:[e(f,{defaultChecked:!0}),e(f,{loading:!0}),e(y,{defaultChecked:!0,children:"React "}),e(y,{children:"Typescript"})]}),t(d,{className:"_home-collapse",initExpanded:["1"],children:[e(d.Item,{size:"large",icon:e(s,{}),title:"Fonts",label:"Typefaces used in this branding project.",name:"1",children:"Tag line headings (h1, h2) use Plus Jakarta Sans, whereas the rest of the elements use IBM Plex Sans."}),e(d.Item,{disabled:!0,size:"large",icon:e(s,{}),title:"Hacks",label:"Some of our secrets to make this website.",name:"2",children:"Some of our secrets to make this website."})]}),t(l.Group,{className:"_home-cell",children:[e(l,{title:"Folder Name",value:"size"}),e(l,{icon:e(s,{}),title:"Dependencies",value:e(r.Text,{type:"success",children:"44MB"})}),e(l,{icon:e(s,{}),title:"Fonts",value:e(r.Text,{type:"success",children:"125.6kb"})}),e(l,{icon:e(s,{}),title:"Libs",value:e(r.Text,{type:"success",children:"134MB"})}),e(l,{icon:e(s,{}),title:"Source",value:e(r.Text,{type:"success",children:"200MB"})})]})]})}),e(c.Item,{span:12,children:t(a,{direction:"vertical",gap:40,block:!0,children:[e(C,{className:"_home-calendar",showConfirm:!1,poppable:!1}),e(b,{className:"_home-tabs",children:["Yesterday","Today","Tomorrow"].map(n=>e(b.TabPane,{title:n},n))}),t(c,{gutter:20,className:"_home-slider",children:[e(c.Item,{span:12,children:e("div",{className:F("_home-box"),children:e(j,{})})}),e(c.Item,{span:12,children:t(a,{gap:20,direction:"vertical",block:!0,children:[e(i,{size:"large",block:!0,type:"primary",children:"Buy now"}),e(i,{size:"large",block:!0,type:"primary",plain:!0,children:"Buy now"})]})})]}),t(a,{className:"_home-steps",justify:"between",direction:"vertical",block:!0,children:[t(a,{justify:"between",block:!0,children:[e(r.Title,{level:5,children:"Add these properties:"}),e(_,{style:{fontSize:24,color:"#888"}})]}),t(u,{activeColor:"#3f45ff",direction:"vertical",active:2,children:[e(u.Item,{children:"Margin Top"}),e(u.Item,{children:"Padding Bottom"}),e(u.Item,{children:"Flexbox"})]})]}),e(l,{isLink:!0,center:!0,title:"Avatar",label:"Typefaces used in this branding project.",icon:e(v,{width:44,height:44,src:"https://cdn.jsdelivr.net/gh/3lang3/react-vant@main/public/home-music-card-1.jpg",round:!0})})]})})]})})]});const I=function({previewer:n=()=>null,api:o=()=>null}){return e("div",{children:e(D,{})})},M=[],P={className:"_home-full-page",blank:!0},R=[],V="/docs/README.md",G="undefined",L="1650251914000";var J=n=>n.children({MdContent:I,demos:M,frontmatter:P,slugs:R,filePath:V,title:G,updatedTime:L});export{I as MdContent,J as default,M as demos,V as filePath,P as frontmatter,R as slugs,G as title,L as updatedTime};
