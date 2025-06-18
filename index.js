import{a as u,S as f,i}from"./assets/vendor-DWXSRYDZ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function m(r){return(await u.get("https://pixabay.com/api/",{params:{key:"50907676-d0d9b555ff9217a4c5273e1b0",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}function p(r){return r.map(({webformatURL:o,largeImageURL:s,tags:a,likes:e,views:t,comments:n,downloads:d})=>`
      <a class="gallery__item" href="${s}">
        <div class="photo-card">
          <img src="${o}" alt="${a}" loading="lazy" />
          <div class="info">
            <p><b>Likes</b> ${e}</p>
            <p><b>Views</b> ${t}</p>
            <p><b>Comments</b> ${n}</p>
            <p><b>Downloads</b> ${d}</p>
          </div>
        </div>
      </a>
    `).join("")}function y(r){r.innerHTML=""}function h(){const r=document.querySelector(".loader");r&&r.classList.remove("hidden")}function g(){const r=document.querySelector(".loader");r&&r.classList.add("hidden")}const c=document.querySelector("#search-form"),l=document.querySelector(".gallery");document.querySelector(".loader");const b=new f(".gallery a");c.addEventListener("submit",async r=>{r.preventDefault();const o=c.elements.searchQuery.value.trim();if(!o){i.warning({title:"Warning",message:"Please enter a search query!"});return}y(l),h();try{const s=await m(o);if(s.hits.length===0)i.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});else{const a=p(s.hits);l.insertAdjacentHTML("beforeend",a),b.refresh()}}catch(s){i.error({title:"Error",message:s.message})}finally{g()}});
//# sourceMappingURL=index.js.map
