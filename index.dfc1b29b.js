!function(){var e,t,n,o;document.addEventListener("DOMContentLoaded",(function(){["data-modal"].forEach((function(e){var t=e+"-open",n=e+"-close",o=document.querySelectorAll("["+t+"]"),a=document.querySelectorAll("["+n+"]"),d=document.querySelector("["+e+"]");function l(){document.body.classList.toggle("modal-open"),d.classList.toggle("is-hidden")}o.forEach((function(e){return e.addEventListener("click",l)})),a.forEach((function(e){return e.addEventListener("click",l)}))}))})),e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)},t.addEventListener("click",o),n.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),function(){var e={openModalBtn:document.querySelector("[data-modal-open-loc]"),closeModalBtn:document.querySelector("[data-modal-close-loc]"),modal:document.querySelector("[data-modal-loc]")};function t(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-open-franchise]"),closeModalBtn:document.querySelector("[data-modal-close-franchise]"),modal:document.querySelector("[data-modal-franchise]")};function t(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),window.addEventListener("load",(function(){var e=document.querySelectorAll('[data-slider="response-slider"]');e&&e.forEach((function(e){var t=e.querySelector(".swiper-pagination");swiper=new Swiper(e.querySelector(".swiper"),{speed:1500,centeredSlides:!0,autoplay:{delay:3e3,disableOnInteraction:!1},slidesPerView:1,spaceBetween:32,pagination:{el:t,clickable:!0,renderBullet:function(e,t){return'<li class="'+t+'"></li>'}},on:{transitionStart:function(){var t=this.previousIndex,n=e.getElementsByClassName("swiper-slide")[t];n&&setTimeout((function(){n.classList.remove("is-play")}),1e3)},transitionEnd:function(){var t=this.activeIndex;e.getElementsByClassName("swiper-slide")[t].classList.add("is-play")}}})}))}),!1)}();
//# sourceMappingURL=index.dfc1b29b.js.map
