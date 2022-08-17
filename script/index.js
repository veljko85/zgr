// window.onload = function () {
//   console.log("loaded");
// };

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
// let stateCheck = setInterval(() => {
//   console.log(document.readyState);
//   if (document.readyState === "complete") {
//     setTimeout(() => {
//       document.getElementById("loading-scr").style.display = "none";
//       console.log(document.readyState);
//     }, 1000);

//     clearInterval(stateCheck);
//   }
// }, 100);

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

//scroll btn
let scrollBtn = document.getElementById("mouse-scroll");

let text = document.getElementsByClassName("text");
// let textTen = document.getElementsByClassName("text-ten");
let sectionContainer = document.getElementsByClassName("section-container");
let sectionTitle = document.getElementsByClassName("section-title");
let joinUsContainer = document.getElementsByClassName("join-us-container");
let titleTen = document.getElementsByClassName("title-ten");
let textTen = document.getElementsByClassName("text-ten");
let textTenTwo = document.getElementsByClassName("text-ten-two");

let triger = true;

function setDisplayCounter(scrollSectionDisplay, counterLine, counterLineNum) {
  if (scrollSection < 10) {
    counterUp.innerHTML = "0" + scrollSectionDisplay;
  } else {
    counterUp.innerHTML = scrollSectionDisplay;
  }
  for (let i = 0; i < counterLine.length; i++) {
    counterLine[i].style.backgroundColor = "#c9c9c9";
  }
  if (scrollSectionDisplay == 1) {
    setTimeout(() => {
      scrollBtn.style.opacity = 1;
    }, 4000);
  }
  if (scrollSectionDisplay > 1) {
    scrollBtn.style.opacity = 0;
  }
  if (scrollSectionDisplay > 0) {
    counterLine[counterLineNum].style.backgroundColor = "#ee4123";
  }
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
    }, 2000);
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
    }
    for (const video of videos) {
      video.style.opacity = 0;
    }
    setTimeout(() => {
      triger = false;
    }, 2000);
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
      }, 2000);
    });
    triger = true;
    //content display
    setTimeout(() => {
      sectionContainer[0].style.display = "block";
    }, 1100);
    setTimeout(() => {
      sectionContainer[0].style.opacity = 1;
    }, 2100);
    setTimeout(() => {
      sectionTitle[0].classList.add("fade-in-title");
    }, 2400);
    setTimeout(() => {
      text[0].classList.add("fade-in-text");
    }, 2700);
    setTimeout(() => {
      text[1].classList.add("fade-in-text");
    }, 3000);
    setTimeout(() => {
      text[2].classList.add("fade-in-text");
    }, 3300);
    setTimeout(() => {
      text[3].classList.add("fade-in-text");
    }, 3600);
    setTimeout(() => {
      document
        .getElementsByClassName("partners-container")[0]
        .classList.add("partners-fade-in");
    }, 3900);
    setTimeout(() => {
      joinUsContainer[0].classList.add("join-us-container-fade-in");
    }, 4200);
  }

  ///////////////   2
  if (scrollSection == 2 && !triger) {
    //content remove
    sectionContainer[0].style.opacity = 0;
    setTimeout(() => {
      sectionTitle[0].classList.remove("fade-in-title");
      text[0].classList.remove("fade-in-text");
      text[1].classList.remove("fade-in-text");
      text[2].classList.remove("fade-in-text");
      text[3].classList.remove("fade-in-text");
      document
        .getElementsByClassName("partners-container")[0]
        .classList.remove("partners-fade-in");
      joinUsContainer[0].classList.remove("join-us-container-fade-in");
      sectionContainer[0].style.display = "none";
    }, 1100);
    //start video
    setDisplayCounter(2, counterLine, 1);
    scrollVideo(1, 3);
    //content display
    setTimeout(() => {
      sectionContainer[1].style.display = "block";
    }, 3100);
    setTimeout(() => {
      sectionContainer[1].style.opacity = 1;
    }, 4100);
    setTimeout(() => {
      sectionTitle[1].classList.add("fade-in-title");
    }, 4400);
    setTimeout(() => {
      text[4].classList.add("fade-in-text");
    }, 4700);
    setTimeout(() => {
      joinUsContainer[1].classList.add("join-us-container-fade-in");
    }, 5000);
  }
  ///////////////   3
  if (scrollSection == 3 && !triger) {
    //content remove
    sectionContainer[1].style.opacity = 0;
    setTimeout(() => {
      sectionTitle[1].classList.remove("fade-in-title");
      text[4].classList.remove("fade-in-text");
      joinUsContainer[1].classList.remove("join-us-container-fade-in");
      sectionContainer[1].style.display = "none";
    }, 1100);
    //start video
    setDisplayCounter(3, counterLine, 2);
    scrollVideo(2, 4);
    //content display
    setTimeout(() => {
      sectionContainer[2].style.display = "block";
    }, 3100);
    setTimeout(() => {
      sectionContainer[2].style.opacity = 1;
    }, 4100);
    setTimeout(() => {
      sectionTitle[2].classList.add("fade-in-title");
    }, 4400);
    setTimeout(() => {
      text[5].classList.add("fade-in-text");
    }, 4700);
    setTimeout(() => {
      joinUsContainer[2].classList.add("join-us-container-fade-in");
    }, 5000);
  }
  ///////////// 4
  if (scrollSection == 4 && !triger) {
    //content remove
    sectionContainer[2].style.opacity = 0;
    setTimeout(() => {
      sectionTitle[2].classList.remove("fade-in-title");
      text[5].classList.remove("fade-in-text");
      joinUsContainer[2].classList.remove("join-us-container-fade-in");
      sectionContainer[2].style.display = "none";
    }, 1100);
    //start video
    setDisplayCounter(4, counterLine, 3);
    scrollVideo(3, 5);
    //content display
    setTimeout(() => {
      sectionContainer[3].style.display = "block";
    }, 5100);
    setTimeout(() => {
      sectionContainer[3].style.opacity = 1;
    }, 6100);
    setTimeout(() => {
      sectionTitle[3].classList.add("fade-in-title");
    }, 6400);
    setTimeout(() => {
      text[6].classList.add("fade-in-text");
    }, 6700);
    setTimeout(() => {
      text[7].classList.add("fade-in-text");
    }, 7000);
    setTimeout(() => {
      joinUsContainer[3].classList.add("join-us-container-fade-in");
    }, 7300);
  }
  //////////   5
  if (scrollSection == 5 && !triger) {
    //content remove
    sectionContainer[3].style.opacity = 0;
    setTimeout(() => {
      sectionTitle[3].classList.remove("fade-in-title");
      text[6].classList.remove("fade-in-text");
      text[7].classList.remove("fade-in-text");
      joinUsContainer[3].classList.remove("join-us-container-fade-in");
      sectionContainer[3].style.display = "none";
    }, 1100);
    //start video
    setDisplayCounter(5, counterLine, 4);
    scrollVideo(4, 6);
    //content display
    setTimeout(() => {
      sectionContainer[4].style.display = "block";
    }, 5100);
    setTimeout(() => {
      sectionContainer[4].style.opacity = 1;
    }, 6100);
    setTimeout(() => {
      sectionTitle[4].classList.add("fade-in-title");
    }, 6400);
    setTimeout(() => {
      text[8].classList.add("fade-in-text");
    }, 6700);
    setTimeout(() => {
      text[9].classList.add("fade-in-text");
    }, 7000);
    setTimeout(() => {
      joinUsContainer[4].classList.add("join-us-container-fade-in");
    }, 7300);
  }
  ////////// 6
  if (scrollSection == 6 && !triger) {
    //content remove
    sectionContainer[4].style.opacity = 0;
    setTimeout(() => {
      sectionTitle[4].classList.remove("fade-in-title");
      text[8].classList.remove("fade-in-text");
      text[9].classList.remove("fade-in-text");
      joinUsContainer[4].classList.remove("join-us-container-fade-in");
      sectionContainer[4].style.display = "none";
    }, 1100);
    //start video
    setDisplayCounter(6, counterLine, 5);
    scrollVideo(5, 7);
    //content display
    setTimeout(() => {
      sectionContainer[5].style.display = "block";
    }, 2600);
    setTimeout(() => {
      sectionContainer[5].style.opacity = 1;
    }, 3600);
    setTimeout(() => {
      sectionTitle[5].classList.add("fade-in-title");
    }, 3900);
    setTimeout(() => {
      text[10].classList.add("fade-in-text");
    }, 4200);
    setTimeout(() => {
      text[11].classList.add("fade-in-text");
    }, 4500);
    setTimeout(() => {
      joinUsContainer[5].classList.add("join-us-container-fade-in");
    }, 4800);
  }
  ////////// 7
  if (scrollSection == 7 && !triger) {
    //content remove
    sectionContainer[5].style.opacity = 0;
    setTimeout(() => {
      sectionTitle[5].classList.remove("fade-in-title");
      text[10].classList.remove("fade-in-text");
      text[11].classList.remove("fade-in-text");
      joinUsContainer[5].classList.remove("join-us-container-fade-in");
      sectionContainer[5].style.display = "none";
    }, 1100);
    //start video
    setDisplayCounter(7, counterLine, 6);
    scrollVideo(6, 8);
    //content display
    setTimeout(() => {
      sectionContainer[6].style.display = "block";
    }, 8100);
    setTimeout(() => {
      sectionContainer[6].style.opacity = 1;
    }, 9100);
    setTimeout(() => {
      sectionTitle[6].classList.add("fade-in-title");
    }, 9400);
    setTimeout(() => {
      text[12].classList.add("fade-in-text");
    }, 9700);
    setTimeout(() => {
      text[13].classList.add("fade-in-text");
    }, 10000);
    setTimeout(() => {
      joinUsContainer[6].classList.add("join-us-container-fade-in");
    }, 10300);
  }
  ////////// 8
  if (scrollSection == 8 && !triger) {
    //content remove
    sectionContainer[6].style.opacity = 0;
    setTimeout(() => {
      sectionTitle[6].classList.remove("fade-in-title");
      text[12].classList.remove("fade-in-text");
      text[13].classList.remove("fade-in-text");
      joinUsContainer[6].classList.remove("join-us-container-fade-in");
      sectionContainer[6].style.display = "none";
    }, 1100);
    //start video
    setDisplayCounter(8, counterLine, 7);
    scrollVideo(7, 9);
    //content display
    setTimeout(() => {
      sectionContainer[7].style.display = "block";
    }, 4100);
    setTimeout(() => {
      sectionContainer[7].style.opacity = 1;
    }, 5100);
    setTimeout(() => {
      sectionTitle[7].classList.add("fade-in-title");
    }, 5400);
    setTimeout(() => {
      text[14].classList.add("fade-in-text");
    }, 5700);
    setTimeout(() => {
      text[15].classList.add("fade-in-text");
    }, 6000);
    setTimeout(() => {
      text[16].classList.add("fade-in-text");
    }, 6300);
    setTimeout(() => {
      joinUsContainer[7].classList.add("join-us-container-fade-in");
    }, 6600);
  }
  ///////// 9
  if (scrollSection == 9 && !triger) {
    //content remove
    sectionContainer[7].style.opacity = 0;
    setTimeout(() => {
      sectionTitle[7].classList.remove("fade-in-title");
      text[14].classList.remove("fade-in-text");
      text[15].classList.remove("fade-in-text");
      text[16].classList.remove("fade-in-text");
      joinUsContainer[7].classList.remove("join-us-container-fade-in");
      sectionContainer[7].style.display = "none";
    }, 1100);
    //start video
    setDisplayCounter(9, counterLine, 8);
    scrollVideo(8, 10);
    //content display
    setTimeout(() => {
      sectionContainer[8].style.display = "block";
    }, 4100);
    setTimeout(() => {
      sectionContainer[8].style.opacity = 1;
    }, 5100);
    setTimeout(() => {
      sectionTitle[8].classList.add("fade-in-title");
    }, 5400);
    setTimeout(() => {
      text[17].classList.add("fade-in-text");
    }, 5700);
    setTimeout(() => {
      text[18].classList.add("fade-in-text");
    }, 6000);
    setTimeout(() => {
      text[19].classList.add("fade-in-text");
    }, 6300);
    setTimeout(() => {
      joinUsContainer[8].classList.add("join-us-container-fade-in");
    }, 6600);
  }
  ////////// 10
  if (scrollSection == 10 && !triger) {
    //content remove
    sectionContainer[8].style.opacity = 0;
    setTimeout(() => {
      sectionTitle[8].classList.remove("fade-in-title");
      text[17].classList.remove("fade-in-text");
      text[18].classList.remove("fade-in-text");
      text[19].classList.remove("fade-in-text");
      joinUsContainer[8].classList.remove("join-us-container-fade-in");

      sectionContainer[8].style.display = "none";
    }, 1100);
    //start video
    setDisplayCounter(10, counterLine, 9);
    scrollVideo(9, 11);
    //content display
    setTimeout(() => {
      sectionContainer[9].style.display = "block";
    }, 4100);
    setTimeout(() => {
      sectionContainer[9].style.opacity = 1;
    }, 5100);
    setTimeout(() => {
      titleTen[0].classList.add("fade-in-title-ten");
      textTen[0].classList.add("fade-in-text-ten");
    }, 5400);
    setTimeout(() => {
      textTenTwo[0].classList.add("fade-in-text-ten-two");
    }, 5700);
    setTimeout(() => {
      joinUsContainer[9].style.opacity = 1;
    }, 6000);
  }
  ////////// 11
  if (scrollSection == 11 && !triger) {
    // content remove
    sectionContainer[9].style.opacity = 0;
    setTimeout(() => {
      titleTen[0].classList.remove("fade-in-title-ten");
      textTen[0].classList.remove("fade-in-text-ten");
      textTenTwo[0].classList.remove("fade-in-text-ten-two");
      joinUsContainer[9].style.opacity = 0;
      sectionContainer[9].style.display = "none";
    }, 1100);
    //start video
    setDisplayCounter(11, counterLine, 10);
    scrollVideo(10, 12);
    //content display
    setTimeout(() => {
      sectionContainer[10].style.display = "block";
    }, 4100);
    setTimeout(() => {
      sectionContainer[10].style.opacity = 1;
      // titleTen[0].classList.add("fade-in-title-ten");
      // textTen[0].classList.add("fade-in-text-ten");
    }, 5100);
    // setTimeout(() => {
    //   textTenTwo[0].classList.add("fade-in-text-ten-two");
    // }, 5200);
  }
}
//FUNCTION VIDEO REVERSE
function videoReverse() {
  ////////// 1
  // if (scrollSection == 2 && !triger) {
  //   //content remove
  //   sectionContainer[0].style.opacity = 0;
  //   setTimeout(() => {
  //     sectionTitle[0].classList.remove("fade-in-title");
  //     text[0].classList.remove("fade-in-text");
  //     text[1].classList.remove("fade-in-text");
  //     text[2].classList.remove("fade-in-text");
  //     text[3].classList.remove("fade-in-text");
  //     document
  //       .getElementsByClassName("partners-container")[0]
  //       .classList.remove("partners-fade-in");
  //     joinUsContainer[0].classList.remove("join-us-container-fade-in");
  //     sectionContainer[0].style.display = "none";
  //   }, 1100);
  //   //start video
  //   setDisplayCounter(0, counterLine, 0);
  //   scrollVideoRev(10, 1);
  // }
  //////////  2
  if (scrollSection == 3 && !triger) {
    //content remove
    sectionContainer[1].style.opacity = 0;
    setTimeout(() => {
      sectionTitle[1].classList.remove("fade-in-title");
      text[4].classList.remove("fade-in-text");
      joinUsContainer[1].classList.remove("join-us-container-fade-in");
      sectionContainer[1].style.display = "none";
    }, 1100);
    // start video
    setDisplayCounter(1, counterLine, 0);
    scrollVideoRev(9, 2);
    //content display
    setTimeout(() => {
      sectionContainer[0].style.display = "block";
    }, 2100);
    setTimeout(() => {
      sectionContainer[0].style.opacity = 1;
    }, 3100);
    setTimeout(() => {
      sectionTitle[0].classList.add("fade-in-title");
    }, 3300);
    setTimeout(() => {
      text[0].classList.add("fade-in-text");
    }, 3600);
    setTimeout(() => {
      text[1].classList.add("fade-in-text");
    }, 3900);
    setTimeout(() => {
      text[2].classList.add("fade-in-text");
    }, 4200);
    setTimeout(() => {
      text[3].classList.add("fade-in-text");
    }, 4500);
    setTimeout(() => {
      document
        .getElementsByClassName("partners-container")[0]
        .classList.add("partners-fade-in");
    }, 4800);
    setTimeout(() => {
      joinUsContainer[0].classList.add("join-us-container-fade-in");
    }, 5100);
  }
  //////// 3
  if (scrollSection == 4 && !triger) {
    //content remove
    sectionContainer[2].style.opacity = 0;
    setTimeout(() => {
      sectionTitle[2].classList.remove("fade-in-title");
      text[5].classList.remove("fade-in-text");
      joinUsContainer[2].classList.remove("join-us-container-fade-in");
      sectionContainer[2].style.display = "none";
    }, 1100);
    //start video
    setDisplayCounter(2, counterLine, 1);
    scrollVideoRev(8, 3);
    //content display
    setTimeout(() => {
      sectionContainer[1].style.display = "block";
    }, 3600);
    setTimeout(() => {
      sectionContainer[1].style.opacity = 1;
    }, 4600);
    setTimeout(() => {
      sectionTitle[1].classList.add("fade-in-title");
    }, 4900);
    setTimeout(() => {
      text[4].classList.add("fade-in-text");
    }, 5400);
    setTimeout(() => {
      joinUsContainer[1].classList.add("join-us-container-fade-in");
    }, 5500);
  }
  //////// 4
  if (scrollSection == 5 && !triger) {
    //content remove
    sectionContainer[3].style.opacity = 0;
    setTimeout(() => {
      sectionTitle[3].classList.remove("fade-in-title");
      text[6].classList.remove("fade-in-text");
      text[7].classList.remove("fade-in-text");
      joinUsContainer[3].classList.remove("join-us-container-fade-in");
      sectionContainer[3].style.display = "none";
    }, 1100);
    //start video
    setDisplayCounter(3, counterLine, 2);
    scrollVideoRev(7, 4);
    //content display
    setTimeout(() => {
      sectionContainer[2].style.display = "block";
    }, 4100);
    setTimeout(() => {
      sectionContainer[2].style.opacity = 1;
    }, 5100);
    setTimeout(() => {
      sectionTitle[2].classList.add("fade-in-title");
    }, 5400);
    setTimeout(() => {
      text[5].classList.add("fade-in-text");
    }, 5700);
    setTimeout(() => {
      joinUsContainer[2].classList.add("join-us-container-fade-in");
    }, 6000);
  }
  ///////  5
  if (scrollSection == 6 && !triger) {
    //content remove
    sectionContainer[4].style.opacity = 0;
    setTimeout(() => {
      sectionTitle[4].classList.remove("fade-in-title");
      text[8].classList.remove("fade-in-text");
      text[9].classList.remove("fade-in-text");
      joinUsContainer[4].classList.remove("join-us-container-fade-in");
      sectionContainer[4].style.display = "none";
    }, 1100);
    //start video
    setDisplayCounter(4, counterLine, 3);
    scrollVideoRev(6, 5);
    //content display
    setTimeout(() => {
      sectionContainer[3].style.display = "block";
    }, 3600);
    setTimeout(() => {
      sectionContainer[3].style.opacity = 1;
    }, 4600);
    setTimeout(() => {
      sectionTitle[3].classList.add("fade-in-title");
    }, 4900);
    setTimeout(() => {
      text[6].classList.add("fade-in-text");
    }, 5200);
    setTimeout(() => {
      text[7].classList.add("fade-in-text");
    }, 5500);
    setTimeout(() => {
      joinUsContainer[3].classList.add("join-us-container-fade-in");
    }, 5800);
  }
  ///////  6
  if (scrollSection == 7 && !triger) {
    //content remove
    sectionContainer[5].style.opacity = 0;
    setTimeout(() => {
      sectionTitle[5].classList.remove("fade-in-title");
      text[10].classList.remove("fade-in-text");
      text[11].classList.remove("fade-in-text");
      joinUsContainer[5].classList.remove("join-us-container-fade-in");
      sectionContainer[5].style.display = "none";
    }, 1100);
    // start video
    setDisplayCounter(5, counterLine, 4);
    scrollVideoRev(5, 6);
    //content display
    setTimeout(() => {
      sectionContainer[4].style.display = "block";
    }, 3600);
    setTimeout(() => {
      sectionContainer[4].style.opacity = 1;
    }, 4600);
    setTimeout(() => {
      sectionTitle[4].classList.add("fade-in-title");
    }, 4900);
    setTimeout(() => {
      text[8].classList.add("fade-in-text");
    }, 5200);
    setTimeout(() => {
      text[9].classList.add("fade-in-text");
    }, 5500);
    setTimeout(() => {
      joinUsContainer[4].classList.add("join-us-container-fade-in");
    }, 5800);
  }
  ///////  7
  if (scrollSection == 8 && !triger) {
    //content remove
    sectionContainer[6].style.opacity = 0;
    setTimeout(() => {
      sectionTitle[6].classList.remove("fade-in-title");
      text[12].classList.remove("fade-in-text");
      text[13].classList.remove("fade-in-text");
      joinUsContainer[6].classList.remove("join-us-container-fade-in");
      sectionContainer[6].style.display = "none";
    }, 1100);
    //start video
    setDisplayCounter(6, counterLine, 5);
    scrollVideoRev(4, 7);
    //content display
    setTimeout(() => {
      sectionContainer[5].style.display = "block";
    }, 8100);
    setTimeout(() => {
      sectionContainer[5].style.opacity = 1;
    }, 9100);
    setTimeout(() => {
      sectionTitle[5].classList.add("fade-in-title");
    }, 9400);
    setTimeout(() => {
      text[10].classList.add("fade-in-text");
    }, 9700);
    setTimeout(() => {
      text[11].classList.add("fade-in-text");
    }, 10000);
    setTimeout(() => {
      joinUsContainer[5].classList.add("join-us-container-fade-in");
    }, 10300);
  }
  //////// 8
  if (scrollSection == 9 && !triger) {
    //content remove
    sectionContainer[7].style.opacity = 0;
    setTimeout(() => {
      sectionTitle[7].classList.remove("fade-in-title");
      text[14].classList.remove("fade-in-text");
      text[15].classList.remove("fade-in-text");
      text[16].classList.remove("fade-in-text");
      joinUsContainer[7].classList.remove("join-us-container-fade-in");
      sectionContainer[7].style.display = "none";
    }, 1100);
    //start video
    setDisplayCounter(7, counterLine, 6);
    scrollVideoRev(3, 8);
    //content display
    setTimeout(() => {
      sectionContainer[6].style.display = "block";
    }, 4100);
    setTimeout(() => {
      sectionContainer[6].style.opacity = 1;
    }, 5100);
    setTimeout(() => {
      sectionTitle[6].classList.add("fade-in-title");
    }, 5400);
    setTimeout(() => {
      text[12].classList.add("fade-in-text");
    }, 5700);
    setTimeout(() => {
      text[13].classList.add("fade-in-text");
    }, 6000);
    setTimeout(() => {
      joinUsContainer[6].classList.add("join-us-container-fade-in");
    }, 6300);
  }
  //////// 9
  if (scrollSection == 10 && !triger) {
    //content remove
    sectionContainer[8].style.opacity = 0;
    setTimeout(() => {
      sectionTitle[8].classList.remove("fade-in-title");
      text[17].classList.remove("fade-in-text");
      text[18].classList.remove("fade-in-text");
      text[19].classList.remove("fade-in-text");
      joinUsContainer[8].classList.remove("join-us-container-fade-in");

      sectionContainer[8].style.display = "none";
    }, 1100);
    //start video
    setDisplayCounter(8, counterLine, 7);
    scrollVideoRev(2, 9);
    //content display
    setTimeout(() => {
      sectionContainer[7].style.display = "block";
    }, 4100);
    setTimeout(() => {
      sectionContainer[7].style.opacity = 1;
    }, 5100);
    setTimeout(() => {
      sectionTitle[7].classList.add("fade-in-title");
    }, 5400);
    setTimeout(() => {
      text[14].classList.add("fade-in-text");
    }, 5700);
    setTimeout(() => {
      text[15].classList.add("fade-in-text");
    }, 6000);
    setTimeout(() => {
      text[16].classList.add("fade-in-text");
    }, 6300);
    setTimeout(() => {
      joinUsContainer[7].classList.add("join-us-container-fade-in");
    }, 6600);
  }
  ////////// 10
  if (scrollSection == 11 && !triger) {
    // content remove
    sectionContainer[9].style.opacity = 0;
    setTimeout(() => {
      titleTen[0].classList.remove("fade-in-title-ten");
      textTen[0].classList.remove("fade-in-text-ten");
      textTenTwo[0].classList.remove("fade-in-text-ten-two");
      joinUsContainer[9].style.opacity = 0;
      sectionContainer[9].style.display = "none";
    }, 1100);
    //start video
    setDisplayCounter(9, counterLine, 8);
    scrollVideoRev(1, 10);
    //content display
    setTimeout(() => {
      sectionContainer[8].style.display = "block";
    }, 3600);
    setTimeout(() => {
      sectionContainer[8].style.opacity = 1;
    }, 4600);
    setTimeout(() => {
      sectionTitle[8].classList.add("fade-in-title");
    }, 4900);
    setTimeout(() => {
      text[17].classList.add("fade-in-text");
    }, 5200);
    setTimeout(() => {
      text[18].classList.add("fade-in-text");
    }, 5500);
    setTimeout(() => {
      text[19].classList.add("fade-in-text");
    }, 5800);
    setTimeout(() => {
      joinUsContainer[8].classList.add("join-us-container-fade-in");
    }, 6100);
  }
  ////////// 11
  if (scrollSection == 12 && !triger) {
    //content remove
    sectionContainer[10].style.opacity = 0;
    setTimeout(() => {
      sectionContainer[10].style.display = "none";
    }, 500);
    //start video
    setDisplayCounter(10, counterLine, 9);
    scrollVideoRev(0, 11);
    //content display
    setTimeout(() => {
      sectionContainer[9].style.display = "block";
    }, 3600);
    setTimeout(() => {
      sectionContainer[9].style.opacity = 1;
    }, 4600);
    setTimeout(() => {
      titleTen[0].classList.add("fade-in-title-ten");
      textTen[0].classList.add("fade-in-text-ten");
    }, 4900);
    setTimeout(() => {
      textTenTwo[0].classList.add("fade-in-text-ten-two");
    }, 5200);
    setTimeout(() => {
      joinUsContainer[9].style.opacity = 1;
    }, 5500);
  }
}

// document.onclick = () => {
//   scrollVideoRev(0, 11);
// };

//VIDEO
let videos = document.getElementsByClassName("videos");
let videosRev = document.getElementsByClassName("videosRev");
let intervalPlay = setInterval(() => {
  console.log("not done");
  if (videos[0].currentTime > 0.01) {
    clearInterval(intervalPlay);
    videos[0].pause();
    videos[0].currentTime = 0;
    setTimeout(() => {
      document.getElementById("loading-scr").style.opacity = 0;
      console.log("loaded");
    }, 1000);
    setTimeout(() => {
      document.getElementById("loading-scr").style.display = "none";
    }, 2500);
    setTimeout(() => {
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
        }, 2000);
      });
      triger = true;
      //content display
      setTimeout(() => {
        sectionContainer[0].style.display = "block";
      }, 1100);
      setTimeout(() => {
        sectionContainer[0].style.opacity = 1;
      }, 2100);
      setTimeout(() => {
        sectionTitle[0].classList.add("fade-in-title");
      }, 2400);
      setTimeout(() => {
        text[0].classList.add("fade-in-text");
      }, 2700);
      setTimeout(() => {
        text[1].classList.add("fade-in-text");
      }, 3000);
      setTimeout(() => {
        text[2].classList.add("fade-in-text");
      }, 3300);
      setTimeout(() => {
        text[3].classList.add("fade-in-text");
      }, 3600);
      setTimeout(() => {
        document
          .getElementsByClassName("partners-container")[0]
          .classList.add("partners-fade-in");
      }, 3900);
      setTimeout(() => {
        joinUsContainer[0].classList.add("join-us-container-fade-in");
      }, 4200);
    }, 2000);
    // if (videos[1].currentTime > 0.01) {
    //   // clearInterval(intervalPlay);
    //   videos[1].pause();
    //   videos[1].currentTime = 0;
    //   console.log("done 2");
    // }
    // if (videosRev[9].currentTime > 0.01) {
    //   clearInterval(intervalPlay);
    //   videos[9].pause();
    //   videos[9].currentTime = 0;
    //   console.log("done 3");
    // }
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
    console.log("up");
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
// setInterval(() => {
//   console.log(scrollSection);
//   console.log(triger);
// }, 100);
