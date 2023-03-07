document.addEventListener('click', () => {
    if(document.getElementById("title").innerText=="The"){
        document.getElementById("title").innerText="USB"
    }
    else if (document.getElementById("title").innerText=="USB"){
        document.getElementById("title").innerText="Curse"
    }
    else if(document.getElementById("title").innerText=="Curse"){
        document.getElementById("mainContainer").style.display = 'none'
        document.getElementById("main").style.display = 'flex'
    }
});

jQuery(document).ready(function ($) {
    $(".open-contact-popup").click(function () {
      $(".contact-popup").addClass("open");
    });
  
    $(".close-contact-popup").click(function () {
      $(".contact-popup").removeClass("open");
    });
  });
  
  gsap.registerPlugin(ScrollTrigger);
  
  function initScrollAnimations() {
    gsap.to(".contact-popup", {
      scrollTrigger: {
        trigger: ".four",
        start: "top center",
        toggleClass: { targets: ".contact-popup", className: "open" },
        scrub: true,
        scroller: ".page-content"
      }
    });
  }
  
  function init() {
    initScrollAnimations();
  }
  
  window.addEventListener("load", function () {
    init();
  });