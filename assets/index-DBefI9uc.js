import{t as Te,c as Ie,r as n,j as e,S as Fe,a as de,u as ue,b as Le,L as he,d as b,U as Oe,e as Re,C as Ue,K as _e,B as Ve,i as qe,g as A,f as Me,G as Be,h as ze,k as He,s as Ke,F as Ge,R as xe,q as B,l as S,w,m as Q,o as Ye,n as Je,p as Qe,v as j,x as oe,T as We,y as Xe,z as W,A as $e,D as Ze,E as et}from"./vendor-CyLdnccH.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function r(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(i){if(i.ep)return;i.ep=!0;const c=r(i);fetch(i.href,c)}})();function y(...t){return Te(Ie(t))}const tt=de("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-[#f66435] text-white border-2 border-[#f4efca] hover:bg-[#f4efca] hover:text-[#f66435] hover:border-[#f66435] hover:shadow-lg active:scale-95",outline:"border-2 border-[#f66435] text-[#f66435] bg-[#f4efca] hover:border-[#f4efca] hover:text-[#f4efca] hover:bg-[#f66435] hover:shadow-lg active:scale-95",secondary:"bg-orange-400 text-[#f4efca] hover:bg-orange-500",ghost:"text-orange-600 hover:bg-orange-100",link:"text-orange-600 underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),p=n.forwardRef(({className:t,variant:s,size:r,asChild:o=!1,...i},c)=>{const u=o?Fe:"button";return e.jsx(u,{className:y(tt({variant:s,size:r,className:t})),ref:c,...i})});p.displayName="Button";const me=()=>{const t=ue(),s=Le(),r=s.pathname==="/",o=s.pathname.startsWith("/auth"),i=!r&&!o,c=()=>{t("/")};return e.jsx("nav",{className:"bg-[#f4efca] border-b-2 border-[#f66435] ",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16 items-center",children:[e.jsxs("h2",{className:" flex items-center gap-2 text-2xl font-extrabold text-gray-900 tracking-tight hover:opacity-80 transition-opacity",children:[e.jsx(he,{className:"w-10 h-9 text-[#f66435]"}),"EncryptoLock"]}),e.jsx("div",{className:"flex gap-4 items-center",children:i?e.jsx(p,{onClick:c,children:"Log Out"}):r&&e.jsx(p,{onClick:()=>t("/auth/signIn"),children:"Sign Up / Login"})})]})})})},st=()=>e.jsx("footer",{className:"bg-[#f66435] text-[#f4efca] py-12 mt-20",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsxs("div",{className:"grid md:grid-cols-2 gap-12",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx(b,{to:"/",className:"block",children:e.jsx("h2",{className:"text-3xl font-bold",children:"EncryptoLock"})}),e.jsx("p",{className:"text-lg text-gray-700 font-semibold",children:"Secure your sensitive data with industry-grade encryption."}),e.jsx("p",{className:"text-gray-700 font-semibold",children:"EncryptoLock empowers you to store and manage credentials safely while maintaining full control over your encrypted secrets."})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-bold",children:"Features"}),e.jsxs("nav",{className:"space-y-3",children:[e.jsx(b,{to:"/",className:"block text-gray-700 hover:text-[#f4efca]/80 transition-colors",children:"Encrypt Data"}),e.jsx(b,{to:"/",className:"block text-gray-700 hover:text-[#f4efca]/80 transition-colors",children:"Decrypt Data"}),e.jsx(b,{to:"/",className:"block text-gray-700 hover:text-[#f4efca]/80 transition-colors",children:"Audit Logs"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-bold",children:"Support"}),e.jsxs("nav",{className:"space-y-3",children:[e.jsx(b,{to:"/faq",className:"block text-gray-700 hover:text-[#f4efca]/80 transition-colors",children:"FAQs"}),e.jsx(b,{to:"/contact",className:"block text-gray-700 hover:text-[#f4efca]/80 transition-colors",children:"Contact Support"}),e.jsx(b,{to:"/privacy",className:"block text-gray-700 hover:text-[#f4efca]/80 transition-colors",children:"Privacy Policy"})]})]})]})]}),e.jsx("div",{className:"mt-12 pt-8 border-t border-[#f4efca] text-center text-gray-600 text-sm",children:e.jsxs("p",{children:["© ",new Date().getFullYear()," EncryptoLock. All rights reserved."]})})]})}),rt=()=>{const t=[{title:"Secure Encrypted Storage",description:"Your secrets are encrypted using AES-256 encryption with a unique key derived from your passphrase using PBKDF2 and a secure salt.",icon:e.jsx(he,{className:"w-8 h-8 mb-4 text-orange-600"})},{title:"User Authentication & Access Control",description:"Only authenticated users can encrypt and decrypt their stored secrets. Secrets are linked to user accounts securely.",icon:e.jsx(Oe,{className:"w-8 h-8 mb-4 text-orange-600"})},{title:"HMAC Integrity Verification",description:"Each secret is protected with HMAC verification, ensuring its integrity and detecting unauthorized modifications or tampering.",icon:e.jsx(Re,{className:"w-8 h-8 mb-4 text-orange-600"})},{title:"Audit Trail & Logging",description:"Every encryption, decryption, and failed access attempt is logged in the audit trail for security monitoring and compliance.",icon:e.jsx(Ue,{className:"w-8 h-8 mb-4 text-orange-600"})},{title:"Strong Key Derivation",description:"Keys are derived using PBKDF2 with a randomly generated salt, preventing brute-force attacks and enhancing security.",icon:e.jsx(_e,{className:"w-8 h-8 mb-4 text-orange-600"})},{title:"Real-time User Feedback",description:"Get instant notifications on encryption, decryption, and errors through user-friendly toast messages.",icon:e.jsx(Ve,{className:"w-8 h-8 mb-4 text-orange-600"})}];return e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-[#f4efca]",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[e.jsxs("h1",{className:"text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900",children:["Secure Your Secrets with "," ",e.jsx("span",{className:"text-[#f66435] relative",children:"EncryptoLock"})]}),e.jsx("br",{}),e.jsx("p",{className:"text-xl md:text-2xl text-gray-700 mb-20 max-w-3xl mx-auto",children:"Protect and organize your sensitive credentials with cutting-edge encryption. Experience security, simplicity, and reliability—without compromise."}),e.jsx("section",{className:"grid md:grid-cols-3 gap-8 mb-20",children:t.map((s,r)=>e.jsx("div",{className:"bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300",children:e.jsxs("div",{className:"flex flex-col items-center text-center",children:[s.icon,e.jsx("h3",{className:"text-xl font-semibold mb-3 text-gray-900",children:s.title}),e.jsx("p",{className:"text-gray-700 leading-relaxed",children:s.description})]})},r))})]})})},at=()=>e.jsxs("div",{className:"min-h-screen bg-#f4efca",children:[e.jsx(me,{}),e.jsx("main",{children:e.jsx(rt,{})}),e.jsx(st,{})]}),pe={apiKey:"AIzaSyBDkQDJbXIP19Tt-zm3waBwsXtwsju4FDY",authDomain:"encryptolock.firebaseapp.com",projectId:"encryptolock",storageBucket:"encryptolock.firebasestorage.app",messagingSenderId:"204047820682",appId:"1:204047820682:web:d16114d606e6d9e6de0a73"};Object.entries(pe).forEach(([t,s])=>{if(!s)throw new Error(`Firebase configuration error: ${t} is not set. Please check your .env file.`)});const fe=qe(pe),ct=A(fe),E=Me(fe),K=new Be;K.addScope("profile");K.addScope("email");K.setCustomParameters({prompt:"select_account"});const C=n.forwardRef(({className:t,...s},r)=>e.jsx("div",{ref:r,className:y("rounded-lg border bg-card text-card-foreground shadow-sm",t),...s}));C.displayName="Card";const P=n.forwardRef(({className:t,...s},r)=>e.jsx("div",{ref:r,className:y("flex flex-col space-y-1.5 p-6",t),...s}));P.displayName="CardHeader";const ge=n.forwardRef(({className:t,...s},r)=>e.jsx("h3",{ref:r,className:y("text-2xl font-semibold leading-none tracking-tight",t),...s}));ge.displayName="CardTitle";const ye=n.forwardRef(({className:t,...s},r)=>e.jsx("p",{ref:r,className:y("text-sm text-muted-foreground",t),...s}));ye.displayName="CardDescription";const T=n.forwardRef(({className:t,...s},r)=>e.jsx("div",{ref:r,className:y("p-6 pt-0",t),...s}));T.displayName="CardContent";const it=n.forwardRef(({className:t,...s},r)=>e.jsx("div",{ref:r,className:y("flex items-center p-6 pt-0",t),...s}));it.displayName="CardFooter";const nt=1,ot=1e6;let X=0;function lt(){return X=(X+1)%Number.MAX_SAFE_INTEGER,X.toString()}const $=new Map,le=t=>{if($.has(t))return;const s=setTimeout(()=>{$.delete(t),R({type:"REMOVE_TOAST",toastId:t})},ot);$.set(t,s)},dt=(t,s)=>{switch(s.type){case"ADD_TOAST":return{...t,toasts:[s.toast,...t.toasts].slice(0,nt)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(r=>r.id===s.toast.id?{...r,...s.toast}:r)};case"DISMISS_TOAST":{const{toastId:r}=s;return r?le(r):t.toasts.forEach(o=>{le(o.id)}),{...t,toasts:t.toasts.map(o=>o.id===r||r===void 0?{...o,open:!1}:o)}}case"REMOVE_TOAST":return s.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(r=>r.id!==s.toastId)}}},z=[];let H={toasts:[]};function R(t){H=dt(H,t),z.forEach(s=>{s(H)})}function ut({...t}){const s=lt(),r=i=>R({type:"UPDATE_TOAST",toast:{...i,id:s}}),o=()=>R({type:"DISMISS_TOAST",toastId:s});return R({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:i=>{i||o()}}}),{id:s,dismiss:o,update:r}}function be(){const[t,s]=n.useState(H);return n.useEffect(()=>(z.push(s),()=>{const r=z.indexOf(s);r>-1&&z.splice(r,1)}),[t]),{...t,toast:ut,dismiss:r=>R({type:"DISMISS_TOAST",toastId:r})}}function ht(){const t=ue(),[s,r]=n.useState(!1),{toast:o}=be(),i=async()=>{try{r(!0),console.log("Starting Google authentication...");const c=await Ke(ct,K);if(!c.user.email)throw new Error("No email provided from authentication provider");const u={name:c.user.displayName||"",email:c.user.email,photoURL:c.user.photoURL||"",uid:c.user.uid};t("/storage",{state:u,replace:!0})}catch(c){if(console.error("Auth error:",c),c instanceof Ge)switch(console.error("Firebase Auth Error:",c.code,c.message),c.code){case"auth/popup-closed-by-user":o({title:"Authentication Cancelled",description:"You closed the authentication window. Please try again.",variant:"default"});break;case"auth/popup-blocked":o({title:"Popup Blocked",description:"Please allow popups for this site and try again.",variant:"destructive"});break;case"auth/unauthorized-domain":o({title:"Domain Not Authorized",description:'Please add "localhost:5173" to authorized domains in Firebase Console.',variant:"destructive"}),console.error(`
              Firebase Domain Error: Please follow these steps:
              1. Go to Firebase Console
              2. Select your project
              3. Go to Authentication > Settings
              4. Add these domains:
                 - localhost
                 - localhost:5173
                 - 127.0.0.1
            `);break;default:o({title:"Authentication Error",description:c.message||"Failed to sign in. Please try again.",variant:"destructive"})}else o({title:"Authentication Error",description:"An unexpected error occurred. Please try again.",variant:"destructive"})}finally{r(!1)}};return e.jsx("div",{className:"min-h-screen bg-[#f4efca] flex items-center justify-center px-4",children:e.jsxs(C,{className:"w-full max-w-md bg-[#e5dbb5] shadow-lg border border-[#f66435]",children:[e.jsxs(P,{className:"text-center",children:[e.jsx(ge,{className:"text-3xl text-[#f66435] font-bold",children:"Sign Up"}),e.jsx(ye,{className:"text-gray-700",children:"Secure your secrets with EncryptoLock"})]}),e.jsx(T,{className:"space-y-6",children:e.jsxs(p,{variant:"outline",className:"w-full h-12 transition-all",onClick:i,disabled:s,children:[s?e.jsx(ze,{className:"mr-2 h-5 w-5 animate-spin"}):e.jsx(He,{className:"mr-2 h-5 w-5"}),"Continue with Google"]})})]})})}const xt=de("text-sm text-gray-800 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),D=n.forwardRef(({className:t,...s},r)=>e.jsx(xe,{ref:r,className:y(xt(),t),...s}));D.displayName=xe.displayName;const k=n.forwardRef(({className:t,type:s,...r},o)=>e.jsx("input",{type:s,className:y("flex h-10 w-full rounded-md border border-[#f66435] bg-white text-gray-900 placeholder-[#f66435] px-3 py-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f66435] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:o,...r}));k.displayName="Input";const mt=()=>{const{toast:t}=be(),[s,r]=n.useState(""),[o,i]=n.useState([]),[c,u]=n.useState(!0),[je,U]=n.useState(!1),[Ne,_]=n.useState(!1),[V,Z]=n.useState(""),[q,x]=n.useState(!1),[N,G]=n.useState(""),[ee,I]=n.useState(""),[F,Y]=n.useState(null),[te,J]=n.useState(""),[ve,M]=n.useState(!1),[se,Se]=n.useState([]),[v,L]=n.useState(""),O=async(a,l,d={})=>{try{await oe(S(E,"audit_logs"),{userId:a,action:l,timestamp:We.now(),metadata:d})}catch(m){console.error("Error logging audit trail:",m)}};function re(a,l){return j.PBKDF2(a,l,{keySize:256/32,iterations:1e5}).toString()}const we=async a=>{if(a.preventDefault(),!s||!V||!v){t({title:"Missing Fields",description:"Please fill out all fields.",variant:"destructive"});return}try{x(!0);const d=A().currentUser;if(!d){t({title:"Authentication Error",description:"User is not authenticated.",variant:"destructive"}),x(!1);return}const m=j.lib.WordArray.random(16).toString(),f=re(v,m),h=j.HmacSHA256(V,f).toString(),g=j.AES.encrypt(V+"::"+h,f).toString();await oe(S(E,"Secrets"),{userId:d.uid,secretName:s,secretValue:g,salt:m,createdAt:new Date().toISOString()}),t({title:"Success!",description:"Your secret has been encrypted and stored securely.",variant:"default"}),r(""),Z(""),L(""),await O(d.uid,"Secret Encrypted",{secretName:s})}catch(l){console.error("Error saving secret:",l),t({title:"Error",description:"An error occurred while saving the secret. Please try again.",variant:"destructive"})}finally{x(!1)}},Ee=async a=>{if(a.preventDefault(),!N||!v){t({title:"Missing Fields",description:"Please provide the secret name and passphrase.",variant:"destructive"});return}try{x(!0);const d=A().currentUser;if(!d){t({title:"Authentication Error",description:"User is not authenticated.",variant:"destructive"}),x(!1);return}const m=B(S(E,"Secrets"),w("userId","==",d.uid),w("secretName","==",N)),f=await Q(m);if(f.empty){t({title:"Not Found",description:"No secret found with the given name.",variant:"destructive"}),G(""),L(""),x(!1);return}const h=f.docs[0].data(),g=h.secretValue,ke=h.salt,ce=re(v,ke),ie=j.AES.decrypt(g,ce).toString(j.enc.Utf8);if(!ie){await O(d.uid,"Secret Decryption Failed",{secretName:N}),t({title:"Decryption Failed",description:"Incorrect passphrase. Please try again.",variant:"destructive"}),x(!1);return}const[ne,Ce]=ie.split("::"),Pe=j.HmacSHA256(ne,ce).toString();if(Ce!==Pe){await O(d.uid,"Secret Integrity Check Failed",{secretName:N}),t({title:"Integrity Check Failed",description:"Secret integrity check failed. Possible tampering detected.",variant:"destructive"}),x(!1);return}I(ne),await O(d.uid,"Secret Decrypted",{secretName:N}),t({title:"Success!",description:"Secret decrypted successfully.",variant:"default"})}catch(l){console.error("Error decrypting secret:",l),t({title:"Error",description:"An error occurred while decrypting the secret. Please try again.",variant:"destructive"})}finally{G(""),L(""),x(!1)}},ae=async()=>{try{x(!0),u(!1),U(!1),_(!1),M(!1);const l=A().currentUser;if(!l){alert("User is not authenticated."),x(!1);return}const d=B(S(E,"Secrets"),w("userId","==",l.uid)),m=await Q(d);if(m.empty){i([]),u(!0),x(!1);return}const f=m.docs.map(h=>h.data().secretName);i(f),u(!0)}catch(a){console.error("Error fetching secrets:",a),alert("An error occurred while fetching the secrets. Please try again.")}finally{x(!1)}};n.useEffect(()=>{ae()},[]);const Ae=async()=>{if(te!=="delete"){alert('You must type "delete" to confirm deletion.');return}try{const l=A().currentUser;if(!l){alert("User is not authenticated.");return}const d=B(S(E,"Secrets"),w("userId","==",l.uid),w("secretName","==",F)),m=await Q(d);if(m.empty){alert("Secret not found.");return}const f=m.docs.map(h=>Qe(h.ref));await Promise.all(f),i(h=>h.filter(g=>g!==F)),Y(""),J(""),await O(l.uid,"Secret Deleted",{secretName:F})}catch(a){console.error("Error deleting secret:",a),alert("An error occurred while deleting the secret. Please try again.")}},De=async()=>{const l=A().currentUser;if(l)try{const d=B(S(E,"audit_logs"),w("userId","==",l.uid),Ye("timestamp","desc"));return Je(d,f=>{try{const h=f.docs.map(g=>({id:g.id,userId:g.data().userId,action:g.data().action,timestamp:g.data().timestamp,metadata:g.data().metadata||{}}));Se(h)}catch(h){console.error("Error processing audit logs:",h)}})}catch(d){console.error("Error fetching audit logs:",d)}};return e.jsxs(e.Fragment,{children:[e.jsx(me,{}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#f4efca]",children:[e.jsx("div",{className:"flex justify-between items-center mb-8",children:e.jsx("h1",{className:"text-4xl font-bold text-[#f66435]",children:"Store Sensitive Credentials"})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(p,{onClick:()=>{ae(),I("")},children:"Home"}),e.jsx(p,{onClick:()=>{U(!0),_(!1),u(!1),M(!1),I("")},children:"Encrypt"}),e.jsx(p,{onClick:()=>{_(!0),U(!1),u(!1),M(!1),I("")},children:"Decrypt"}),e.jsx(p,{onClick:()=>{M(!0),U(!1),_(!1),u(!1),De(),I("")},children:"Audit Trail"})]}),e.jsx("br",{}),c&&e.jsxs(C,{className:"border-[#f66435] shadow-xl",children:[e.jsx(P,{className:"border-b border-[#f66435] bg-[#e5dbb5]",children:e.jsx("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",children:e.jsx("h2",{className:"text-2xl font-bold text-[#f66435]",children:"Stored Secrets"})})}),e.jsxs(T,{className:"bg-[#e5dbb5]",children:[e.jsx("br",{}),o.length>0?e.jsx("ul",{className:"space-y-2",children:o.map((a,l)=>e.jsxs("li",{className:"flex justify-between items-center p-2 border rounded-lg shadow-sm transition bg-[#f4efca]",children:[e.jsx("span",{className:"text-gray-700",children:a}),e.jsx(p,{className:"bg-red-600 text-white hover:border-red-600 hover:text-red-600 px-3 py-1",onClick:()=>Y(a),children:"Delete"})]},l))}):e.jsx("p",{className:"text-gray-600",children:"No secrets found."}),F&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",children:e.jsxs("div",{className:"bg-white rounded-lg p-6 space-y-4 w-96",children:[e.jsx("h3",{className:"text-lg font-bold text-gray-900",children:"Confirm Delete Secret"}),e.jsxs("p",{className:"text-gray-600",children:["To delete the secret"," ",e.jsx("strong",{children:F}),", type"," ",e.jsx("strong",{children:"delete"})," below:"]}),e.jsx("input",{type:"text",placeholder:"Type 'delete' to confirm",value:te,onChange:a=>J(a.target.value),className:"w-full border rounded p-2"}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(p,{className:"bg-gray-300 border-gray-300 text-gray-800 hover:bg-gray-400 hover:border-gray-400 hover:text-gray-900 px-4 py-2 rounded",onClick:()=>{Y(null),J("")},children:"Cancel"}),e.jsx(p,{className:"bg-red-600 border-red-600 text-white hover:bg-red-800 hover:text-white hover:border-red-800 px-4 py-2 rounded",onClick:Ae,children:"Confirm Delete"})]})]})})]})]}),je&&e.jsx(C,{className:"border-[#f66435] shadow-xl",children:e.jsxs("form",{onSubmit:we,children:[e.jsx(P,{className:"border-b border-[#f66435] bg-[#e5dbb5]",children:e.jsx("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",children:e.jsx("h2",{className:"text-2xl font-bold text-[#f66435]",children:"Encryption Section"})})}),e.jsx(T,{className:"space-y-8 bg-[#e5dbb5]",children:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsxs("div",{className:"space-y-2 ",children:[e.jsx("br",{}),e.jsx(D,{htmlFor:"secretName",className:"text-left block",children:"Secret Name"}),e.jsx(k,{id:"secretName",placeholder:"Enter Secret Name",value:s,onChange:a=>r(a.target.value),required:!0})]}),e.jsx("br",{}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(D,{htmlFor:"secretValue",className:"text-left block",children:"Secret Value"}),e.jsx(k,{id:"secretValue",placeholder:"Secret to Encrypt",value:V,onChange:a=>Z(a.target.value),required:!0})]}),e.jsx("br",{}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(D,{htmlFor:"passPhrase",className:"text-left block",children:"Enter Passphrase"}),e.jsx(k,{id:"passPhrase",type:"password",placeholder:"Enter PassPhrase",value:v,onChange:a=>L(a.target.value),required:!0})]}),e.jsx("br",{}),e.jsx("div",{className:"flex gap-2",children:e.jsx(p,{type:"submit",disabled:q,children:q?"Saving...":"Encrypt & Store"})})]})})})]})}),Ne&&e.jsx(C,{className:"border-[#f66435] shadow-xl",children:e.jsxs("form",{onSubmit:Ee,children:[e.jsx(P,{className:"border-b border-[#f66435] bg-[#e5dbb5]",children:e.jsx("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",children:e.jsx("h2",{className:"text-2xl font-bold text-[#f66435]",children:"Decryption Section"})})}),e.jsx(T,{className:"space-y-8 bg-[#e5dbb5]",children:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("br",{}),e.jsx(D,{htmlFor:"decryptionSecretName",className:"text-left block",children:"Secret Name to Decrypt"}),e.jsx(k,{id:"decryptionSecretName",placeholder:"Enter Secret Name",value:N,onChange:a=>G(a.target.value),required:!0})]}),e.jsx("br",{}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(D,{htmlFor:"passPhrase",className:"text-left block",children:"Enter Passphrase"}),e.jsx(k,{id:"passPhrase",type:"password",placeholder:"Enter PassPhrase",value:v,onChange:a=>L(a.target.value),required:!0})]}),e.jsx("br",{}),e.jsx("div",{className:"flex gap-2",children:e.jsx(p,{type:"submit",disabled:q,children:q?"Decrypting...":"Decrypt"})}),e.jsx("br",{}),ee&&e.jsx("div",{className:"mt-4",children:e.jsxs("pre",{className:"bg-[#d6c79f] p-2 rounded-md text-gray-900 text-sm text-left whitespace-pre-wrap break-words max-w-auto",children:["Decrypted Secret : ",ee]})})]})})})]})}),ve&&e.jsxs(C,{className:"border-[#f66435] bg-[#e5dbb5] shadow-xl ",children:[e.jsx(P,{className:"border-b border-[#f66435]",children:e.jsx("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",children:e.jsx("h2",{className:"text-2xl font-bold bg-[#e5dbb5] text-[#f66435]",children:"Audit Trail"})})}),e.jsx("br",{}),e.jsx(T,{className:"space-y-6",children:se.length===0?e.jsx("p",{className:"text-gray-500 text-center",children:"No logs available."}):e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border border-[#f66435] shadow-sm rounded-lg overflow-hidden",children:[e.jsx("thead",{className:" bg-[#e5dbb5] text-[#f66435]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 text-left font-bold text-[#f66435]",children:"Action"}),e.jsx("th",{className:"px-4 py-2 text-left font-bold text-[#f66435]",children:"Timestamp"}),e.jsx("th",{className:"px-4 py-2 text-left font-bold text-[#f66435]",children:"Details"})]})}),e.jsx("tbody",{children:se.map((a,l)=>e.jsxs("tr",{className:`border-b border-[#f66435] ${l%2===0,"bg-[#e5dbb5]"} `,children:[e.jsx("td",{className:"px-4 py-2 bg-[#e5dbb5] text-gray-900 text-left",children:a.action}),e.jsx("td",{className:"px-4 py-2 bg-[#e5dbb5] text-gray-900 text-left",children:new Date(a.timestamp.seconds*1e3).toLocaleString()}),e.jsx("td",{className:"px-4 py-2 border-[#f66435] text-left block",children:Object.keys(a.metadata).length>0?e.jsx("pre",{className:"bg-[#d6c79f] p-2 rounded-md text-gray-900 text-sm whitespace-pre-wrap break-words max-w-xs",children:JSON.stringify(a.metadata,null,2)}):"N/A"})]},a.id))})]})})})]})]})]})};function pt(){return e.jsx(e.Fragment,{children:e.jsx("div",{className:"min-h-screen",children:e.jsxs(Xe,{children:[e.jsx(W,{path:"/",element:e.jsx(at,{})}),e.jsx(W,{path:"/auth/signIn",element:e.jsx(ht,{})}),e.jsx(W,{path:"/storage",element:e.jsx(mt,{})})]})})})}$e.createRoot(document.getElementById("root")).render(e.jsx(Ze.StrictMode,{children:e.jsx(et,{children:e.jsx(pt,{})})}));
