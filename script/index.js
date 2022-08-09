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
function scrollVideoRev(videoNum, prevScrollSec) {
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
//FUNCTION VIDEO FORVARD
function videoForvard() {
  ///////////////   1
  if (scrollSection == 1 && !triger) {
    //start video
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
    //content display
    setTimeout(() => {
      sectionContainer[0].style.display = "block";
    }, 2100);
    setTimeout(() => {
      sectionContainer[0].style.opacity = 1;
      sectionTitle[0].classList.add("fade-in-title");
    }, 3100);
    setTimeout(() => {
      text[0].classList.add("fade-in-text");
    }, 3200);
    setTimeout(() => {
      text[1].classList.add("fade-in-text");
    }, 3300);
    setTimeout(() => {
      text[2].classList.add("fade-in-text");
    }, 3400);
    setTimeout(() => {
      text[3].classList.add("fade-in-text");
    }, 3500);
  }

  ///////////////   2
  if (scrollSection == 2 && !triger) {
    //content remove
    sectionContainer[0].style.opacity = 0;
    sectionTitle[0].classList.remove("fade-in-title");
    text[0].classList.remove("fade-in-text");
    text[1].classList.remove("fade-in-text");
    text[2].classList.remove("fade-in-text");
    text[3].classList.remove("fade-in-text");
    setTimeout(() => {
      sectionContainer[0].style.display = "none";
    }, 500);
    //start video
    setDisplayCounter(2, counterLine, 1);
    scrollVideo(1, 3);
    //content display
    setTimeout(() => {
      sectionContainer[1].style.display = "block";
    }, 3100);
    setTimeout(() => {
      sectionContainer[1].style.opacity = 1;
      sectionTitle[1].classList.add("fade-in-title");
    }, 4100);
    setTimeout(() => {
      text[4].classList.add("fade-in-text");
    }, 4200);
  }
  ///////////////   3
  if (scrollSection == 3 && !triger) {
    //content remove
    sectionContainer[1].style.opacity = 0;
    sectionTitle[1].classList.remove("fade-in-title");
    text[4].classList.remove("fade-in-text");
    setTimeout(() => {
      sectionContainer[1].style.display = "none";
    }, 500);
    //start video
    setDisplayCounter(3, counterLine, 2);
    scrollVideo(2, 4);
    //content display
    setTimeout(() => {
      sectionContainer[2].style.display = "block";
    }, 4100);
    setTimeout(() => {
      sectionContainer[2].style.opacity = 1;
      sectionTitle[2].classList.add("fade-in-title");
    }, 5100);

    setTimeout(() => {
      text[5].classList.add("fade-in-text");
    }, 5200);
  }
  ///////////// 4
  if (scrollSection == 4 && !triger) {
    //content remove
    sectionContainer[2].style.opacity = 0;
    sectionTitle[2].classList.remove("fade-in-title");
    text[5].classList.remove("fade-in-text");
    setTimeout(() => {
      sectionContainer[2].style.display = "none";
    }, 500);
    //start video
    setDisplayCounter(4, counterLine, 3);
    scrollVideo(3, 5);
    //content display
    setTimeout(() => {
      sectionContainer[3].style.display = "block";
    }, 5100);
    setTimeout(() => {
      sectionContainer[3].style.opacity = 1;
      sectionTitle[3].classList.add("fade-in-title");
    }, 6100);
    setTimeout(() => {
      text[6].classList.add("fade-in-text");
    }, 6200);
    setTimeout(() => {
      text[7].classList.add("fade-in-text");
    }, 6300);
  }
  //////////   5
  if (scrollSection == 5 && !triger) {
    //content remove
    sectionContainer[3].style.opacity = 0;
    sectionTitle[3].classList.remove("fade-in-title");
    text[6].classList.remove("fade-in-text");
    text[7].classList.remove("fade-in-text");
    setTimeout(() => {
      sectionContainer[3].style.display = "none";
    }, 500);
    //start video
    setDisplayCounter(5, counterLine, 4);
    scrollVideo(4, 6);
    //content display
    setTimeout(() => {
      sectionContainer[4].style.display = "block";
    }, 5100);
    setTimeout(() => {
      sectionContainer[4].style.opacity = 1;
      sectionTitle[4].classList.add("fade-in-title");
    }, 6100);
    setTimeout(() => {
      text[8].classList.add("fade-in-text");
    }, 6200);
    setTimeout(() => {
      text[9].classList.add("fade-in-text");
    }, 6300);
  }
  ////////// 6
  if (scrollSection == 6 && !triger) {
    //content remove
    sectionContainer[4].style.opacity = 0;
    sectionTitle[4].classList.remove("fade-in-title");
    text[8].classList.remove("fade-in-text");
    text[9].classList.remove("fade-in-text");
    setTimeout(() => {
      sectionContainer[4].style.display = "none";
    }, 500);
    //start video
    setDisplayCounter(6, counterLine, 5);
    scrollVideo(5, 7);
    //content display
    setTimeout(() => {
      sectionContainer[5].style.display = "block";
    }, 3100);
    setTimeout(() => {
      sectionContainer[5].style.opacity = 1;
      sectionTitle[5].classList.add("fade-in-title");
    }, 4100);
    setTimeout(() => {
      text[10].classList.add("fade-in-text");
    }, 4200);
    setTimeout(() => {
      text[11].classList.add("fade-in-text");
    }, 4300);
  }
  ////////// 7
  if (scrollSection == 7 && !triger) {
    //content remove
    sectionContainer[5].style.opacity = 0;
    sectionTitle[5].classList.remove("fade-in-title");
    text[10].classList.remove("fade-in-text");
    text[11].classList.remove("fade-in-text");
    setTimeout(() => {
      sectionContainer[5].style.display = "none";
    }, 500);
    //start video
    setDisplayCounter(7, counterLine, 6);
    scrollVideo(6, 8);
    //content display
    setTimeout(() => {
      sectionContainer[6].style.display = "block";
    }, 9100);
    setTimeout(() => {
      sectionContainer[6].style.opacity = 1;
      sectionTitle[6].classList.add("fade-in-title");
    }, 10100);
    setTimeout(() => {
      text[12].classList.add("fade-in-text");
    }, 10200);
    setTimeout(() => {
      text[13].classList.add("fade-in-text");
    }, 10300);
  }
  ////////// 8
  if (scrollSection == 8 && !triger) {
    //content remove
    sectionContainer[6].style.opacity = 0;
    sectionTitle[6].classList.remove("fade-in-title");
    text[12].classList.remove("fade-in-text");
    text[13].classList.remove("fade-in-text");
    setTimeout(() => {
      sectionContainer[6].style.display = "none";
    }, 500);
    //start video
    setDisplayCounter(8, counterLine, 7);
    scrollVideo(7, 9);
    //content display
    setTimeout(() => {
      sectionContainer[7].style.display = "block";
    }, 3100);
    setTimeout(() => {
      sectionContainer[7].style.opacity = 1;
      sectionTitle[7].classList.add("fade-in-title");
    }, 4100);
    setTimeout(() => {
      text[14].classList.add("fade-in-text");
    }, 4200);
    setTimeout(() => {
      text[15].classList.add("fade-in-text");
    }, 4300);
    setTimeout(() => {
      text[16].classList.add("fade-in-text");
    }, 4400);
  }
  ///////// 9
  if (scrollSection == 9 && !triger) {
    //content remove
    sectionContainer[7].style.opacity = 0;
    sectionTitle[7].classList.remove("fade-in-title");
    text[14].classList.remove("fade-in-text");
    text[15].classList.remove("fade-in-text");
    text[16].classList.remove("fade-in-text");
    setTimeout(() => {
      sectionContainer[7].style.display = "none";
    }, 500);
    //start video
    setDisplayCounter(9, counterLine, 8);
    scrollVideo(8, 10);
  }
  ////////// 10
  if (scrollSection == 10 && !triger) {
    setDisplayCounter(10, counterLine, 9);
    scrollVideo(9, 11);
  }
}
//FUNCTION VIDEO REVERSE
function videoReverse() {
  ////////// 1
  if (scrollSection == 2 && !triger) {
    //content remove
    sectionContainer[0].style.opacity = 0;
    sectionTitle[0].classList.remove("fade-in-title");
    text[0].classList.remove("fade-in-text");
    text[1].classList.remove("fade-in-text");
    text[2].classList.remove("fade-in-text");
    text[3].classList.remove("fade-in-text");
    //start video
    setDisplayCounter(1, counterLine, 0);
    scrollVideoRev(9, 1);
  }
  //////////  2
  if (scrollSection == 3 && !triger) {
    //content remove
    sectionContainer[1].style.opacity = 0;
    sectionTitle[1].classList.remove("fade-in-title");
    text[4].classList.remove("fade-in-text");
    setTimeout(() => {
      sectionContainer[1].style.display = "none";
    }, 500);
    // start video
    setDisplayCounter(1, counterLine, 0);
    scrollVideoRev(8, 2);
    //content display
    setTimeout(() => {
      sectionContainer[0].style.display = "block";
    }, 2100);
    setTimeout(() => {
      sectionContainer[0].style.opacity = 1;
      sectionTitle[0].classList.add("fade-in-title");
    }, 3100);
    setTimeout(() => {
      text[0].classList.add("fade-in-text");
    }, 3200);
    setTimeout(() => {
      text[1].classList.add("fade-in-text");
    }, 3300);
    setTimeout(() => {
      text[2].classList.add("fade-in-text");
    }, 3400);
    setTimeout(() => {
      text[3].classList.add("fade-in-text");
    }, 3500);
  }
  //////// 3
  if (scrollSection == 4 && !triger) {
    //content remove
    sectionContainer[2].style.opacity = 0;
    sectionTitle[2].classList.remove("fade-in-title");
    text[5].classList.remove("fade-in-text");
    setTimeout(() => {
      sectionContainer[2].style.display = "none";
    }, 500);
    //start video
    setDisplayCounter(2, counterLine, 1);
    scrollVideoRev(7, 3);
    //content display
    setTimeout(() => {
      sectionContainer[1].style.display = "block";
    }, 3100);
    setTimeout(() => {
      sectionContainer[1].style.opacity = 1;
      sectionTitle[1].classList.add("fade-in-title");
    }, 4100);
    setTimeout(() => {
      text[4].classList.add("fade-in-text");
    }, 4200);
  }
  //////// 4
  if (scrollSection == 5 && !triger) {
    //content remove
    sectionContainer[3].style.opacity = 0;
    sectionTitle[3].classList.remove("fade-in-title");
    text[6].classList.remove("fade-in-text");
    text[7].classList.remove("fade-in-text");
    setTimeout(() => {
      sectionContainer[3].style.display = "none";
    }, 500);
    //start video
    //start video
    setDisplayCounter(3, counterLine, 2);
    scrollVideoRev(6, 4);
    //content display
    setTimeout(() => {
      sectionContainer[2].style.display = "block";
    }, 4100);
    setTimeout(() => {
      sectionContainer[2].style.opacity = 1;
      sectionTitle[2].classList.add("fade-in-title");
    }, 5100);
    setTimeout(() => {
      text[5].classList.add("fade-in-text");
    }, 5200);
  }
  ///////  5
  if (scrollSection == 6 && !triger) {
    //content remove
    sectionContainer[4].style.opacity = 0;
    sectionTitle[4].classList.remove("fade-in-title");
    text[8].classList.remove("fade-in-text");
    text[9].classList.remove("fade-in-text");
    setTimeout(() => {
      sectionContainer[4].style.display = "none";
    }, 500);
    setDisplayCounter(4, counterLine, 3);
    scrollVideoRev(5, 5);
    //content display
    setTimeout(() => {
      sectionContainer[3].style.display = "block";
    }, 5100);
    setTimeout(() => {
      sectionContainer[3].style.opacity = 1;
      sectionTitle[3].classList.add("fade-in-title");
    }, 6100);
    setTimeout(() => {
      text[6].classList.add("fade-in-text");
    }, 6200);
    setTimeout(() => {
      text[7].classList.add("fade-in-text");
    }, 6300);
  }
  ///////  6
  if (scrollSection == 7 && !triger) {
    //content remove
    sectionContainer[5].style.opacity = 0;
    sectionTitle[5].classList.remove("fade-in-title");
    text[10].classList.remove("fade-in-text");
    text[11].classList.remove("fade-in-text");
    setTimeout(() => {
      sectionContainer[5].style.display = "none";
    }, 500);
    // start video
    setDisplayCounter(5, counterLine, 4);
    scrollVideoRev(4, 6);
    //content display
    setTimeout(() => {
      sectionContainer[4].style.display = "block";
    }, 5100);
    setTimeout(() => {
      sectionContainer[4].style.opacity = 1;
      sectionTitle[4].classList.add("fade-in-title");
    }, 6100);
    setTimeout(() => {
      text[8].classList.add("fade-in-text");
    }, 6200);
    setTimeout(() => {
      text[9].classList.add("fade-in-text");
    }, 6300);
  }
  ///////  7
  if (scrollSection == 8 && !triger) {
    //content remove
    sectionContainer[6].style.opacity = 0;
    sectionTitle[6].classList.remove("fade-in-title");
    text[12].classList.remove("fade-in-text");
    text[13].classList.remove("fade-in-text");
    setTimeout(() => {
      sectionContainer[6].style.display = "none";
    }, 500);
    //start video
    setDisplayCounter(6, counterLine, 5);
    scrollVideoRev(3, 7);
    //content display
    setTimeout(() => {
      sectionContainer[5].style.display = "block";
    }, 9100);
    setTimeout(() => {
      sectionContainer[5].style.opacity = 1;
      sectionTitle[5].classList.add("fade-in-title");
    }, 10100);
    setTimeout(() => {
      text[10].classList.add("fade-in-text");
    }, 10200);
    setTimeout(() => {
      text[11].classList.add("fade-in-text");
    }, 10300);
  }
  //////// 8
  if (scrollSection == 9 && !triger) {
    //content remove
    sectionContainer[7].style.opacity = 0;
    sectionTitle[7].classList.remove("fade-in-title");
    text[14].classList.remove("fade-in-text");
    text[15].classList.remove("fade-in-text");
    text[16].classList.remove("fade-in-text");
    setTimeout(() => {
      sectionContainer[7].style.display = "none";
    }, 500);
    //start video
    setDisplayCounter(7, counterLine, 6);
    scrollVideoRev(2, 8);
    //content display
    setTimeout(() => {
      sectionContainer[6].style.display = "block";
    }, 3100);
    setTimeout(() => {
      sectionContainer[6].style.opacity = 1;
      sectionTitle[6].classList.add("fade-in-title");
    }, 4100);
    setTimeout(() => {
      text[12].classList.add("fade-in-text");
    }, 4200);
    setTimeout(() => {
      text[13].classList.add("fade-in-text");
    }, 4300);
  }
  //////// 9
  if (scrollSection == 10 && !triger) {
    //start video
    setDisplayCounter(8, counterLine, 7);
    scrollVideoRev(1, 9);
    //content display
    setTimeout(() => {
      sectionContainer[7].style.display = "block";
    }, 4100);
    setTimeout(() => {
      sectionContainer[7].style.opacity = 1;
      sectionTitle[7].classList.add("fade-in-title");
    }, 5100);
    setTimeout(() => {
      text[14].classList.add("fade-in-text");
    }, 5200);
    setTimeout(() => {
      text[15].classList.add("fade-in-text");
    }, 5300);
    setTimeout(() => {
      text[16].classList.add("fade-in-text");
    }, 5400);
  }
  ////////// 10
  if (scrollSection == 11 && !triger) {
    setDisplayCounter(9, counterLine, 8);
    scrollVideoRev(0, 10);
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

//SCROLL EVENT
let scrollSection = 1;
var lastScrollTop = 0;
document.addEventListener("scroll", () => {
  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop) {
    console.log("down");
    videoForvard();
  } else {
    console.log("up", "kurac");
    videoReverse();
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});
document.getElementById("arrowUpSect").onclick = () => {
  console.log("upBtn");
  videoReverse();
};
document.getElementById("arrowDownSect").onclick = () => {
  console.log("downBtn");
  videoForvard();
};
setInterval(() => {
  console.log(scrollSection);
  console.log(triger);
}, 100);
