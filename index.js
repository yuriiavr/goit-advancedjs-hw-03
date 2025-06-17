import{S as f,i}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="50907676-d0d9b555ff9217a4c5273e1b0",m="https://pixabay.com/api/";async function h(o){const r=new URL(m);r.searchParams.append("key",p),r.searchParams.append("q",o),r.searchParams.append("image_type","photo"),r.searchParams.append("orientation","horizontal"),r.searchParams.append("safesearch","true");const s=await fetch(r);if(!s.ok)throw new Error("Network error");return await s.json()}function y(o){return o.map(({webformatURL:r,largeImageURL:s,tags:a,likes:e,views:t,comments:n,downloads:u})=>`
      <a class="gallery__item" href="${s}">
        <div class="photo-card">
          <img src="${r}" alt="${a}" loading="lazy" />
          <div class="info">
            <p><b>Likes</b> ${e}</p>
            <p><b>Views</b> ${t}</p>
            <p><b>Comments</b> ${n}</p>
            <p><b>Downloads</b> ${u}</p>
          </div>
        </div>
      </a>
    `).join("")}function g(o){o.innerHTML=""}const c=document.querySelector("#search-form"),l=document.querySelector(".gallery"),d=document.querySelector(".loader"),b=new f(".gallery a");c.addEventListener("submit",async o=>{o.preventDefault();const r=c.elements.searchQuery.value.trim();if(!r){i.warning({title:"Warning",message:"Please enter a search query!"});return}g(l),L();try{const s=await h(r);if(s.hits.length===0)i.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});else{const a=y(s.hits);l.insertAdjacentHTML("beforeend",a),b.refresh()}}catch(s){i.error({title:"Error",message:s.message})}finally{w()}});function L(){d.classList.remove("hidden")}function w(){d.classList.add("hidden")}
//# sourceMappingURL=index.js.map
