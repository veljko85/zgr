console.log("radi");

window.onload = function () {
  console.log("loaded");
};

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
let stateCheck = setInterval(() => {
  console.log(document.readyState);
  if (document.readyState === "complete") {
    clearInterval(stateCheck);
    console.log(document.readyState);
  }
}, 100);

// //HAMBURGER
const icons = document.querySelectorAll(".icon");
icons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    icon.classList.toggle("open");
  });
});
//SECTION COUNTER DISPLAY
let counterLine = document.getElementsByClassName("counter-line");
counterLine[0].style.backgroundColor = "#ee4123";

let counterUp = document.getElementById("counter-up");

let text = document.getElementsByClassName("text");
let sectionContainer = document.getElementsByClassName("section-container");
let sectionTitle = document.getElementsByClassName("section-title");

let triger = false;

function setDisplayCounter(scrollSectionDisplay, counterLine, counterLineNum) {
  if (scrollSection < 10) {
    counterUp.innerHTML = "0" + scrollSectionDisplay;
  } else {
    counterUp.innerHTML = scrollSectionDisplay;
  }
  for (let i = 0; i < counterLine.length; i++) {
    counterLine[i].style.backgroundColor = "#c9c9c9";
  }
  counterLine[counterLineNum].style.backgroundColor = "#ee4123";
}

function scrollVideo(videoNum, nextScrollSec) {
  if (!triger) {
    videos[videoNum].play();
    videos[videoNum].style.opacity = 1;
    for (let i = 0; i < videosRev.length; i++) {
      videosRev[i].style.opacity = 0;
    }

    videos[videoNum].addEventListener("ended", () => {
      scrollSection = nextScrollSec;
      for (let i = 0; i < videos.length; i++) {
        if (i != videoNum) videos[i].style.opacity = 0;
      }
      triger = false;
    });
    triger = true;
  }
}
function scrollVideoRev(videoNum, prevScrollSec) {
  if (!triger) {
    videosRev[videoNum].play();
    for (let i = 0; i < videosRev.length; i++) {
      videosRev[i].style.opacity = 0;
    }
    for (let i = 0; i < videos.length; i++) {
      videos[i].style.opacity = 0;
    }
    videosRev[videoNum].style.opacity = 1;

    videosRev[videoNum].addEventListener("ended", () => {
      scrollSection = prevScrollSec;
      for (let i = 0; i < videosRev.length; i++) {
        if (i != videoNum) videosRev[i].style.opacity = 0;
      }
      triger = false;
    });
    triger = true;
  }
}
//VIDEO
let videos = document.getElementsByClassName("videos");
let videosRev = document.getElementsByClassName("videosRev");
let intervalPlay = setInterval(() => {
  console.log(video01.currentTime, scrollSection, window.pageYOffset);
  if (videos[0].currentTime > 0.01) {
    clearInterval(intervalPlay);
    videos[0].pause();
    videos[0].currentTime = 0;
  }
}, 100);
let scrollSection = 1;
var lastScrollTop = 0;
document.addEventListener("scroll", () => {
  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop) {
    console.log("down");
    if (scrollSection == 1) {
      if (!triger) {
        setDisplayCounter(1, counterLine, 0);
        videosRev[0].style.opacity = 0;
        videos[0].play();
        videos[0].style.opacity = 1;
        videos[0].addEventListener("ended", () => {
          scrollSection = 2;
          for (let i = 0; i < videos.length; i++) {
            if (i != 0) videos[i].style.opacity = 0;
          }
          triger = false;
        });
        triger = true;
      }
    }
    if (scrollSection == 2) {
      scrollVideo(1, 3);
      setDisplayCounter(2, counterLine, 1);
    }
    if (scrollSection == 3) {
      scrollVideo(2, 4);
      setDisplayCounter(3, counterLine, 2);
    }
    if (scrollSection == 4) {
      scrollVideo(3, 5);
      setDisplayCounter(4, counterLine, 3);
    }
    if (scrollSection == 5) {
      scrollVideo(4, 6);
      setDisplayCounter(5, counterLine, 4);
    }
    if (scrollSection == 6) {
      scrollVideo(5, 7);
      setDisplayCounter(6, counterLine, 5);
    }
    if (scrollSection == 7) {
      scrollVideo(6, 8);
      setDisplayCounter(7, counterLine, 6);
    }
    if (scrollSection == 8) {
      scrollVideo(7, 9);
      setDisplayCounter(8, counterLine, 7);
    }
    if (scrollSection == 9) {
      scrollVideo(8, 10);
      setDisplayCounter(9, counterLine, 8);
    }
    if (scrollSection == 10) {
      scrollVideo(9, 11);
      setDisplayCounter(10, counterLine, 9);
    }
  } else {
    console.log("up", "kurac");
    if (scrollSection == 2) {
      scrollVideoRev(0, 1);
      setDisplayCounter(1, counterLine, 0);
    }
    if (scrollSection == 3) {
      scrollVideoRev(1, 2);
      setDisplayCounter(1, counterLine, 0);
    }
    if (scrollSection == 4) {
      scrollVideoRev(2, 3);
      setDisplayCounter(2, counterLine, 1);
    }
    if (scrollSection == 5) {
      scrollVideoRev(3, 4);
      setDisplayCounter(3, counterLine, 2);
    }
    if (scrollSection == 6) {
      scrollVideoRev(4, 5);
      setDisplayCounter(4, counterLine, 3);
    }
    if (scrollSection == 7) {
      scrollVideoRev(5, 6);
      setDisplayCounter(5, counterLine, 4);
    }
    if (scrollSection == 8) {
      scrollVideoRev(6, 7);
      setDisplayCounter(6, counterLine, 5);
    }
    if (scrollSection == 9) {
      scrollVideoRev(7, 8);
      setDisplayCounter(7, counterLine, 6);
    }
    if (scrollSection == 10) {
      scrollVideoRev(8, 9);
      setDisplayCounter(8, counterLine, 7);
    }
    if (scrollSection == 11) {
      scrollVideoRev(9, 10);
      setDisplayCounter(9, counterLine, 8);
    }
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});
setInterval(() => {
  console.log(scrollSection);
  console.log(triger);
}, 100);
