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
    $(".open-abstract-popup").click(function () {
      $(".abstract-popup").addClass("open");
    });
  
    $(".close-abstract-popup").click(function () {
      $(".abstract-popup").removeClass("open");
    });
  });
  
  gsap.registerPlugin(ScrollTrigger);
  
  function initScrollAnimations() {
    gsap.to(".abstract-popup", {
      scrollTrigger: {
        trigger: ".four",
        start: "top center",
        toggleClass: { targets: ".abstract-popup", className: "open" },
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