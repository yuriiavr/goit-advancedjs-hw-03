import{a as f,S as m,i}from"./assets/vendor-DWXSRYDZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function p(s){return(await f.get("https://pixabay.com/api/",{params:{key:"50907676-d0d9b555ff9217a4c5273e1b0",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}function y(s){return s.map(({webformatURL:t,largeImageURL:o,tags:a,likes:e,views:r,comments:n,downloads:u})=>`
      <a class="gallery__item" href="${o}">
        <div class="photo-card">
          <img src="${t}" alt="${a}" loading="lazy" />
          <div class="info">
            <p><b>Likes</b> ${e}</p>
            <p><b>Views</b> ${r}</p>
            <p><b>Comments</b> ${n}</p>
            <p><b>Downloads</b> ${u}</p>
          </div>
        </div>
      </a>
    `).join("")}function h(s){s.innerHTML=""}const c=document.querySelector("#search-form"),l=document.querySelector(".gallery"),d=document.querySelector(".loader"),g=new m(".gallery a");c.addEventListener("submit",async s=>{s.preventDefault();const t=c.elements.searchQuery.value.trim();if(!t){i.warning({title:"Warning",message:"Please enter a search query!"});return}h(l),b();try{const o=await p(t);if(o.hits.length===0)i.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});else{const a=y(o.hits);l.insertAdjacentHTML("beforeend",a),g.refresh()}}catch(o){i.error({title:"Error",message:o.message})}finally{L()}});function b(){d.classList.remove("hidden")}function L(){d.classList.add("hidden")}
//# sourceMappingURL=index.js.map
