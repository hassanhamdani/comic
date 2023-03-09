// function for landing page Titles
document.addEventListener("click", () => {
  if (document.getElementById("title").innerText == "The") {
    document.getElementById("title").innerText = "USB";
  } else if (document.getElementById("title").innerText == "USB") {
    document.getElementById("title").innerText = "Curse";
  } else if (document.getElementById("title").innerText == "Curse") {
    document.getElementById("mainContainer").style.display = "none";
    document.getElementById("main").style.display = "flex";
  }
});

// function of sidebar
jQuery(document).ready(function ($) {
  $(".open-abstract-popup").click(function () {
    $(".abstract-popup").addClass("open");
  });

  $(".close-abstract-popup").click(function () {
    $(".abstract-popup").removeClass("open");
  });
});

// scroll bar function
gsap.registerPlugin(ScrollTrigger);

function initScrollAnimations() {
  gsap.to(".abstract-popup", {
    scrollTrigger: {
      trigger: ".four",
      start: "top center",
      toggleClass: { targets: ".abstract-popup", className: "open" },
      scrub: true,
      scroller: ".page-content",
    },
  });
}

function init() {
  initScrollAnimations();
}

window.addEventListener("load", function () {
  init();
});

// video function at the 7th frame
var myVideo = document.getElementById("videoplay");
var btn = document.getElementById("btn");
btn.addEventListener(
  "click",
  function () {
    if (myVideo.paused) {
      if (myVideo.requestFullscreen) {
        myVideo.requestFullscreen();
      } else if (myVideo.msRequestFullscreen) {
        myVideo.msRequestFullscreen();
      } else if (myVideo.mozRequestFullScreen) {
        myVideo.mozRequestFullScreen();
      } else if (myVideo.webkitRequestFullScreen) {
        myVideo.webkitRequestFullScreen();
      }
      myVideo.play();
    } else {
      myVideo.pause();
    }
  },
  false
);
myVideo.addEventListener("ended", myHandler, false);
function myHandler(e) {
  myVideo.webkitExitFullScreen();
  document.getElementById("seven").scrollIntoView();
}
