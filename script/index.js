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
    document.getElementById("loading-scr").style.display = "none";
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
      videosRev[i].currentTime = 0;
    }
    videos[videoNum].addEventListener("ended", () => {
      scrollSection = nextScrollSec;
      for (let i = 0; i < videos.length; i++) {
        if (i != videoNum) {
          videos[i].style.opacity = 0;
          videos[i].currentTime = 0;
        }
      }
      setTimeout(() => {
        triger = false;
      }, 1000);
    });
    triger = true;
  }
}
function scrollVideoRev(videoNum, prevScrollSec) {
  if (!triger) {
    videosRev[videoNum].play();
    videosRev[videoNum].style.opacity = 1;
    for (let i = 0; i < videos.length; i++) {
      // videos[i].style.opacity = 0;
      videos[i].currentTime = 0;
    }
    videosRev[videoNum].addEventListener("ended", () => {
      scrollSection = prevScrollSec;
      for (let i = 0; i < videosRev.length; i++) {
        if (i != videoNum) {
          videosRev[i].style.opacity = 0;
          videosRev[i].currentTime = 0;
        }
        videos[i].style.opacity = 0;
      }
      setTimeout(() => {
        triger = false;
      }, 1000);
    });
    triger = true;
  }
}
//VIDEO
let videos = document.getElementsByClassName("videos");
let videosRev = document.getElementsByClassName("videosRev");
let intervalPlay = setInterval(() => {
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
        videos[0].play();
        videos[0].style.opacity = 1;
        for (let i = 0; i < videosRev.length; i++) {
          videosRev[i].style.opacity = 0;
          videosRev[i].currentTime = 0;
        }
        videos[0].addEventListener("ended", () => {
          scrollSection = 2;
          for (let i = 0; i < videos.length; i++) {
            if (i != 0) {
              videos[i].style.opacity = 0;
              videos[i].currentTime = 0;
            }
          }
          setTimeout(() => {
            triger = false;
          }, 1000);
        });
        triger = true;
      }
    }
    if (scrollSection == 2) {
      setDisplayCounter(2, counterLine, 1);
      scrollVideo(1, 3);
    }
    if (scrollSection == 3) {
      setDisplayCounter(3, counterLine, 2);
      scrollVideo(2, 4);
    }
    if (scrollSection == 4) {
      setDisplayCounter(4, counterLine, 3);
      scrollVideo(3, 5);
    }
    if (scrollSection == 5) {
      setDisplayCounter(5, counterLine, 4);
      scrollVideo(4, 6);
    }
    if (scrollSection == 6) {
      setDisplayCounter(6, counterLine, 5);
      scrollVideo(5, 7);
    }
    if (scrollSection == 7) {
      setDisplayCounter(7, counterLine, 6);
      scrollVideo(6, 8);
    }
    if (scrollSection == 8) {
      setDisplayCounter(8, counterLine, 7);
      scrollVideo(7, 9);
    }
    if (scrollSection == 9) {
      setDisplayCounter(9, counterLine, 8);
      scrollVideo(8, 10);
    }
    if (scrollSection == 10) {
      setDisplayCounter(10, counterLine, 9);
      scrollVideo(9, 11);
    }
  } else {
    console.log("up", "kurac");
    if (scrollSection == 2) {
      setDisplayCounter(1, counterLine, 0);
      scrollVideoRev(9, 1);
    }
    if (scrollSection == 3) {
      setDisplayCounter(1, counterLine, 0);
      scrollVideoRev(8, 2);
    }
    if (scrollSection == 4) {
      setDisplayCounter(2, counterLine, 1);
      scrollVideoRev(7, 3);
    }
    if (scrollSection == 5) {
      setDisplayCounter(3, counterLine, 2);
      scrollVideoRev(6, 4);
    }
    if (scrollSection == 6) {
      setDisplayCounter(4, counterLine, 3);
      scrollVideoRev(5, 5);
    }
    if (scrollSection == 7) {
      setDisplayCounter(5, counterLine, 4);
      scrollVideoRev(4, 6);
    }
    if (scrollSection == 8) {
      setDisplayCounter(6, counterLine, 5);
      scrollVideoRev(3, 7);
    }
    if (scrollSection == 9) {
      setDisplayCounter(7, counterLine, 6);
      scrollVideoRev(2, 8);
    }
    if (scrollSection == 10) {
      setDisplayCounter(8, counterLine, 7);
      scrollVideoRev(1, 9);
    }
    if (scrollSection == 11) {
      setDisplayCounter(9, counterLine, 8);
      scrollVideoRev(0, 10);
    }
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});
document.getElementById("arrowUpSect").onclick = () => {
  console.log("upBtn");
  if (scrollSection == 2) {
    setDisplayCounter(1, counterLine, 0);
    scrollVideoRev(9, 1);
  }
  if (scrollSection == 3) {
    setDisplayCounter(1, counterLine, 0);
    scrollVideoRev(8, 2);
  }
  if (scrollSection == 4) {
    setDisplayCounter(2, counterLine, 1);
    scrollVideoRev(7, 3);
  }
  if (scrollSection == 5) {
    setDisplayCounter(3, counterLine, 2);
    scrollVideoRev(6, 4);
  }
  if (scrollSection == 6) {
    setDisplayCounter(4, counterLine, 3);
    scrollVideoRev(5, 5);
  }
  if (scrollSection == 7) {
    setDisplayCounter(5, counterLine, 4);
    scrollVideoRev(4, 6);
  }
  if (scrollSection == 8) {
    setDisplayCounter(6, counterLine, 5);
    scrollVideoRev(3, 7);
  }
  if (scrollSection == 9) {
    setDisplayCounter(7, counterLine, 6);
    scrollVideoRev(2, 8);
  }
  if (scrollSection == 10) {
    setDisplayCounter(8, counterLine, 7);
    scrollVideoRev(1, 9);
  }
  if (scrollSection == 11) {
    setDisplayCounter(9, counterLine, 8);
    scrollVideoRev(0, 10);
  }
};
document.getElementById("arrowDownSect").onclick = () => {
  console.log("downBtn");
  if (scrollSection == 1) {
    if (!triger) {
      setDisplayCounter(1, counterLine, 0);
      videos[0].play();
      videos[0].style.opacity = 1;
      for (let i = 0; i < videosRev.length; i++) {
        videosRev[i].style.opacity = 0;
        videosRev[i].currentTime = 0;
      }
      videos[0].addEventListener("ended", () => {
        scrollSection = 2;
        for (let i = 0; i < videos.length; i++) {
          if (i != 0) {
            videos[i].style.opacity = 0;
            videos[i].currentTime = 0;
          }
        }
        setTimeout(() => {
          triger = false;
        }, 1000);
      });
      triger = true;
    }
  }
  if (scrollSection == 2) {
    setDisplayCounter(2, counterLine, 1);
    scrollVideo(1, 3);
  }
  if (scrollSection == 3) {
    setDisplayCounter(3, counterLine, 2);
    scrollVideo(2, 4);
  }
  if (scrollSection == 4) {
    setDisplayCounter(4, counterLine, 3);
    scrollVideo(3, 5);
  }
  if (scrollSection == 5) {
    setDisplayCounter(5, counterLine, 4);
    scrollVideo(4, 6);
  }
  if (scrollSection == 6) {
    setDisplayCounter(6, counterLine, 5);
    scrollVideo(5, 7);
  }
  if (scrollSection == 7) {
    setDisplayCounter(7, counterLine, 6);
    scrollVideo(6, 8);
  }
  if (scrollSection == 8) {
    setDisplayCounter(8, counterLine, 7);
    scrollVideo(7, 9);
  }
  if (scrollSection == 9) {
    setDisplayCounter(9, counterLine, 8);
    scrollVideo(8, 10);
  }
  if (scrollSection == 10) {
    setDisplayCounter(10, counterLine, 9);
    scrollVideo(9, 11);
  }
};
setInterval(() => {
  console.log(scrollSection);
  console.log(triger);
  console.log(
    videos[0].currentTime,
    videos[1].currentTime,
    videos[2].currentTime
  );
  console.log(
    videosRev[9].currentTime,
    videosRev[8].currentTime,
    videosRev[7].currentTime
  );
}, 100);
