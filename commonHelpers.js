import{a as b,S as w,i as l}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function d(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=d(e);fetch(e.href,i)}})();const S="43389081-54498f1f4f67c480986af9037",P="https://pixabay.com",M="/api/";async function p(s,t,d){const a=new URLSearchParams({key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15});try{return await b.get(`${P}${M}?${a}`)}catch(e){console.log(e)}}function f(s){return s.map(({largeImageURL:t,webformatURL:d,tags:a,likes:e,views:i,comments:c,downloads:v})=>`<li class="gallery-item">
         <div class ="foto">
          <a href="${t}">
           <img src="${d}" alt="${a}"></a></div>
         <div class = "under-photo">
          <div class ="info">
           <h3>Likes</h3>
            <p>${e}</p></div>
          <div class ="info">
           <h3>Views</h3>
            <p>${i}</p></div>
          <div class ="info">
           <h3>Comments</h3>
            <p>${c}</p></div>
          <div class ="info"> 
           <h3>Downloads</h3>
            <p>${v}</p></div>
        </div>
      </li>`).join("")}const y=document.querySelector(".js-form"),q=document.querySelector(".input"),n=document.querySelector(".gallery"),o=document.querySelector(".loader"),r=document.querySelector(".load-more-btn");let h=1;const m=15;let u=0;const $={captionsData:"alt",captionDelay:250},g=new w(".gallery a",$);r.classList.add("is-hidden");r.addEventListener("click",H);y.addEventListener("submit",L);async function L(s){if(s.preventDefault(),h=1,u=q.value.trim(),!u)return n.innerHTML="",o.classList.add("is-hidden"),r.classList.add("is-hidden"),s.target.reset(),l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:300});n.innerHTML="";try{o.classList.remove("is-hidden"),r.classList.add("is-hidden");const t=await p(u,1);if(t.data.hits.length===0)return n.innerHTML="",o.classList.add("is-hidden"),r.classList.add("is-hidden"),y.reset(),l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:300});if(t.data.total<=m){n.insertAdjacentHTML("beforeend",f(t.data.hits)),r.classList.add("is-hidden"),o.classList.add("is-hidden"),r.removeEventListener("click",L),l.warning({position:"topRight",message:"We're sorry, but you've reached the end of search results.",color:"yellow"});return}n.insertAdjacentHTML("beforeend",f(t.data.hits)),r.classList.remove("is-hidden"),o.classList.add("is-hidden"),g.refresh()}catch(t){console.log(t),r.classList.add("is-hidden"),o.classList.add("is-hidden")}}async function H(){h+=1,r.classList.add("is-hidden"),o.classList.remove("is-hidden");try{const{data:s}=await p(u,h,m),t=Math.ceil(s.total/m);if(h===t){r.classList.add("is-hidden"),o.classList.add("is-hidden"),n.insertAdjacentHTML("beforeend",f(s.hits)),l.warning({position:"topRight",message:"We're sorry, but you've reached the end of search results.",color:"yellow"}),g.refresh();const{height:a}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"});return}n.insertAdjacentHTML("beforeend",f(s.hits));const{height:d}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:d*2,behavior:"smooth"}),g.refresh(),r.classList.remove("is-hidden"),o.classList.add("is-hidden")}catch(s){console.log(s),r.classList.add("is-hidden"),o.classList.add("is-hidden")}}
//# sourceMappingURL=commonHelpers.js.map