!function(){var e,t,n,o;document.addEventListener("DOMContentLoaded",(function(){["data-modal"].forEach((function(e){var t=e+"-open",n=e+"-close",o=document.querySelectorAll("["+t+"]"),c=document.querySelectorAll("["+n+"]"),d=document.querySelector("["+e+"]");function r(){document.body.classList.toggle("modal-open"),d.classList.toggle("is-hidden")}o.forEach((function(e){return e.addEventListener("click",r)})),c.forEach((function(e){return e.addEventListener("click",r)}))}))})),e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)},t.addEventListener("click",o),n.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=index.0b29d8a5.js.map
