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

// setInterval(() => {
//   console.log(videoRev.currentTime);
// }, 100);
// videoRev.currentTime = 72;
// let aaa = false;
// document.onclick = () => {
//   if (!aaa) {
//     video.style.opacity = 0;
//     videoRev.style.opacity = 1;
//     aaa = true;
//   } else {
//     video.style.opacity = 1;
//     videoRev.style.opacity = 0;
//     aaa = false;
//   }
// };

// let scrollSection = 1;
// function pauseVideo() {
//   video.pause();
//   //   video.currentTime = 0;
// }
// function playVideo() {
//   video.play();
//   //   video.currentTime = 0;
// }
let text = document.getElementsByClassName("text");
let sectionContainer = document.getElementsByClassName("section-container");
let sectionTitle = document.getElementsByClassName("section-title");

let triger = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
// var lastScrollTop = 0;
// document.addEventListener("scroll", () => {
//   console.log(window.pageYOffset);
//   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//   if (st > lastScrollTop) {
//     console.log("down");

//     video.style.opacity = 1;
//     videoRev.style.opacity = 0;
//     // forvardInterval();
//     counterUp.innerHTML = "0" + scrollSection;
//     for (let i = 0; i < counterLine.length; i++) {
//       counterLine[i].style.backgroundColor = "#c9c9c9";
//     }
//     counterLine[scrollSection - 1].style.backgroundColor = "#ee4123";
//     /////////////    1
//     if (scrollSection == 1) {
//       playVideo();
//       if (!triger[0]) {
//         let intervalPlay = setInterval(() => {
//           // console.log(
//           //   video.currentTime,
//           //   scrollSection,
//           //   window.pageYOffset,
//           //   triger[0]
//           // );
//           if (
//             video.currentTime > 3 &&
//             video.currentTime < 4 &&
//             scrollSection == 1
//           ) {
//             sectionContainer[0].style.display = "block";
//             setTimeout(() => {
//               sectionContainer[0].style.opacity = 1;
//               sectionTitle[0].classList.add("fade-in-title");
//             }, 100);
//             setTimeout(() => {
//               text[0].classList.add("fade-in-text");
//             }, 200);
//             setTimeout(() => {
//               text[1].classList.add("fade-in-text");
//             }, 300);
//             setTimeout(() => {
//               text[2].classList.add("fade-in-text");
//             }, 400);
//             setTimeout(() => {
//               text[3].classList.add("fade-in-text");
//             }, 500);
//           }
//           if (
//             video.currentTime > 5 &&
//             video.currentTime < 6 &&
//             scrollSection == 1
//           ) {
//             clearInterval(intervalPlay);
//             pauseVideo();
//             scrollSection = 2;
//             console.log("stop");
//           }
//         }, 100);
//         triger.forEach((elm) => {
//           elm = false;
//         });
//         triger[0] = true;
//         // setTimeout(() => {
//         //   triger[0] = false;
//         // }, 1000);
//       }
//     }
//     ////////////       2
//     if (scrollSection == 2) {
//       videoRev.currentTime = 72;
//       playVideo();
//       if (!triger[1]) {
//         let intervalPlay = setInterval(() => {
//           // console.log(
//           //   video.currentTime,
//           //   scrollSection,
//           //   window.pageYOffset,
//           //   triger[1]
//           // );
//           if (
//             video.currentTime > 10 &&
//             video.currentTime < 11 &&
//             scrollSection == 2
//           ) {
//             sectionContainer[1].style.display = "block";
//             setTimeout(() => {
//               sectionContainer[1].style.opacity = 1;
//               sectionTitle[1].classList.add("fade-in-title");
//             }, 100);
//             setTimeout(() => {
//               text[4].classList.add("fade-in-text");
//             }, 200);
//           }
//           if (
//             video.currentTime > 12 &&
//             video.currentTime < 13 &&
//             scrollSection == 2
//           ) {
//             clearInterval(intervalPlay);
//             pauseVideo();
//             scrollSection = 3;
//             console.log("stop");
//           }
//         }, 100);
//       }
//       triger.forEach((elm) => {
//         elm = false;
//       });
//       triger[1] = true;
//       // setTimeout(() => {
//       //   triger[1] = false;
//       // }, 100);
//     }
//     //////////////     3
//     if (scrollSection == 3) {
//       playVideo();
//       if (!triger[2]) {
//         let intervalPlay = setInterval(() => {
//           // console.log(
//           //   video.currentTime,
//           //   scrollSection,
//           //   window.pageYOffset,
//           //   triger[2]
//           // );
//           if (
//             video.currentTime > 17 &&
//             video.currentTime < 18 &&
//             scrollSection == 3
//           ) {
//             sectionContainer[2].style.display = "block";
//             setTimeout(() => {
//               sectionContainer[2].style.opacity = 1;
//               sectionTitle[2].classList.add("fade-in-title");
//             }, 100);

//             setTimeout(() => {
//               text[5].classList.add("fade-in-text");
//             }, 100);
//           }
//           if (
//             video.currentTime > 19 &&
//             video.currentTime < 20 &&
//             scrollSection == 3
//           ) {
//             clearInterval(intervalPlay);
//             pauseVideo();
//             scrollSection = 4;
//             console.log("stop");
//           }
//         }, 100);
//       }
//       triger.forEach((elm) => {
//         elm = false;
//       });
//       triger[2] = true;
//       // setTimeout(() => {
//       //   triger[2] = false;
//       // }, 100);
//     }
//   } else {
//     console.log("up");
//     video.currentTime = 5;

//     videoRev.play();
//     setInterval(() => {
//       if (videoRev.currentTime > 79 && videoRev.currentTime < 80) {
//         videoRev.pause();
//         scrollSection = 2;
//       }
//     }, 100);
//     video.style.opacity = 0;
//     videoRev.style.opacity = 1;
//     // if (scrollSection == 2) {

//     // }
//   }
//   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

//   /////////////////////////////////////////
//   if (scrollSection != 1) {
//     sectionContainer[0].style.opacity = 0;
//     setTimeout(() => {
//       sectionContainer[0].style.display = "none";
//     }, 500);
//   }
//   if (scrollSection != 2) {
//     sectionContainer[1].style.opacity = 0;
//     setTimeout(() => {
//       sectionContainer[1].style.display = "none";
//     }, 500);
//   }
//   if (scrollSection != 3) {
//     sectionContainer[2].style.opacity = 0;
//     setTimeout(() => {
//       sectionContainer[2].style.display = "none";
//     }, 500);
//   }
//   console.log("play");
// });

// // setInterval(() => {
// //   console.log(triger);
// // }, 5000);
//VIDEO
let videos = document.getElementsByClassName("videos");
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
  console.log(window.pageYOffset);
  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop) {
    console.log("down");
    console.log(triger[0]);
    if (scrollSection == 1) {
      if (!triger[0]) {
        videos[0].play();
        videos[0].addEventListener("ended", () => {
          scrollSection = 2;
        });
        triger.forEach((elm) => {
          elm = false;
        });
        triger[0] = true;
      }
    }
    if (scrollSection == 2) {
      if (!triger[1]) {
        for (let i = 0; i < videos.length; i++) {
          videos[i].style.opacity = 0;
        }
        videos[1].style.opacity = 1;
        videos[1].play();
        videos[1].addEventListener("ended", () => {
          scrollSection = 3;
        });
        triger.forEach((elm) => {
          elm = false;
        });
        triger[1] = true;
      }
    }
    if (scrollSection == 3) {
      if (!triger[2]) {
        for (let i = 0; i < videos.length; i++) {
          videos[i].style.opacity = 0;
        }
        videos[2].style.opacity = 1;
        videos[2].play();
        videos[2].addEventListener("ended", () => {
          scrollSection = 4;
        });
        triger.forEach((elm) => {
          elm = false;
        });
        triger[2] = true;
      }
    }
    if (scrollSection == 4) {
      if (!triger[3]) {
        for (let i = 0; i < videos.length; i++) {
          videos[i].style.opacity = 0;
        }
        videos[3].style.opacity = 1;
        videos[3].play();
        videos[3].addEventListener("ended", () => {
          scrollSection = 5;
        });
        triger.forEach((elm) => {
          elm = false;
        });
        triger[3] = true;
      }
    }
    if (scrollSection == 5) {
      if (!triger[4]) {
        for (let i = 0; i < videos.length; i++) {
          videos[i].style.opacity = 0;
        }
        videos[4].style.opacity = 1;
        videos[4].play();
        videos[4].addEventListener("ended", () => {
          scrollSection = 6;
        });
        triger.forEach((elm) => {
          elm = false;
        });
        triger[4] = true;
      }
    }
    if (scrollSection == 6) {
      if (!triger[5]) {
        for (let i = 0; i < videos.length; i++) {
          videos[i].style.opacity = 0;
        }
        videos[5].style.opacity = 1;
        videos[5].play();
        videos[5].addEventListener("ended", () => {
          scrollSection = 7;
        });
        triger.forEach((elm) => {
          elm = false;
        });
        triger[5] = true;
      }
    }
    if (scrollSection == 7) {
      if (!triger[6]) {
        for (let i = 0; i < videos.length; i++) {
          videos[i].style.opacity = 0;
        }
        videos[6].style.opacity = 1;
        videos[6].play();
        videos[6].addEventListener("ended", () => {
          scrollSection = 8;
        });
        triger.forEach((elm) => {
          elm = false;
        });
        triger[6] = true;
      }
    }
    if (scrollSection == 8) {
      if (!triger[7]) {
        for (let i = 0; i < videos.length; i++) {
          videos[i].style.opacity = 0;
        }
        videos[7].style.opacity = 1;
        videos[7].play();
        videos[7].addEventListener("ended", () => {
          scrollSection = 9;
        });
        triger.forEach((elm) => {
          elm = false;
        });
        triger[7] = true;
      }
    }
    if (scrollSection == 9) {
      if (!triger[8]) {
        for (let i = 0; i < videos.length; i++) {
          videos[i].style.opacity = 0;
        }
        videos[8].style.opacity = 1;
        videos[8].play();
        videos[8].addEventListener("ended", () => {
          scrollSection = 10;
        });
        triger.forEach((elm) => {
          elm = false;
        });
        triger[8] = true;
      }
    }
    if (scrollSection == 10) {
      if (!triger[9]) {
        for (let i = 0; i < videos.length; i++) {
          videos[i].style.opacity = 0;
        }
        videos[9].style.opacity = 1;
        videos[9].play();
        videos[9].addEventListener("ended", () => {
          scrollSection = 11;
        });
        triger.forEach((elm) => {
          elm = false;
        });
        triger[9] = true;
      }
    }
  } else {
    console.log("up");
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});
// video02.play();
