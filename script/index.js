window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

//VIDEO
let videos = document.getElementsByClassName("videos");
let videosRev = document.getElementsByClassName("videosRev");
if (window.innerHeight / window.innerWidth > 1.4) {
  videos[0].src = "videos/eli720_a.mp4";
  videosRev[0].src = "videos/eli720_r.mp4";
  document.getElementsByClassName("text")[1].innerHTML =
    "The mission: Build safer, faster and better with technology solutions," +
    "<br />" +
    "enable new era of living, working and being experiences, and" +
    "<br />" +
    "transform the future of real estate.";
  // document.getElementsByClassName("section-title")[1].innerHTML =
  //   "PLANNING &" + " <br /> " + "DESIGN";
  document.getElementsByClassName("text")[4].innerHTML =
    "Using BIM method, we include data collected during the planning" +
    "<br />" +
    "and design phases. The digital twin extends data capturing" +
    "<br />" +
    "throughout the assets construction and operational phases," +
    "<br />" +
    "as well as future planning and design.";

  // TURN OFF CAUNTER DISPLAY ON FOCUS ON MOBILE AND TABLET BECAUSE OF ANDROID KEYBORD
  for (
    let i = 0;
    i < document.getElementsByClassName("form-inputs").length;
    i++
  ) {
    document
      .getElementsByClassName("form-inputs")
      [i].addEventListener("focus", () => {
        document.getElementsByClassName(
          "section-counter-container"
        )[0].style.display = "none";
      });
  }

  for (
    let i = 0;
    i < document.getElementsByClassName("form-inputs").length;
    i++
  ) {
    document
      .getElementsByClassName("form-inputs")
      [i].addEventListener("blur", () => {
        document.getElementsByClassName(
          "section-counter-container"
        )[0].style.display = "flex";
      });
  }
} else {
  videos[0].src = "videos/eli1920_a.mp4";
  videosRev[0].src = "videos/eli1920_r.mp4";
}

// //HAMBURGER
let hamOpened = false;
const icons = document.querySelectorAll(".icon");
icons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    icon.classList.toggle("open");
    navContainer[0].classList.toggle("fade-in-nav");
    !hamOpened ? (hamOpened = true) : (hamOpened = false);
  });
});
//NAV MENU
let hamContainer = document.getElementById("ham-container");
let navContainer = document.getElementsByClassName("navigation-container");
let navItems = document.getElementsByClassName("nav-item");

//JUMP TO VIDEO FROM NAV
for (const navItem of navItems) {
  navItem.addEventListener("click", () => {
    if (!triger) {
      // close nav bar
      icons.forEach((icon) => {
        icon.classList.toggle("open");
        !hamOpened ? (hamOpened = true) : (hamOpened = false);
      });
      setTimeout(() => {
        navContainer[0].classList.toggle("fade-in-nav");
      }, 200);
      //remove content for all
      for (const sectionTitles of sectionTitle) {
        sectionTitles.classList.remove("fade-in-title");
      }
      for (const texts of text) {
        texts.classList.remove("fade-in-text");
      }
      for (const joinUsContainers of joinUsContainer) {
        joinUsContainers.classList.remove("join-us-container-fade-in");
      }
      for (const sectionContainers of sectionContainer) {
        sectionContainers.style.opacity = 0;
        sectionContainers.style.display = "none";
      }
      document
        .getElementsByClassName("partners-container")[0]
        .classList.remove("partners-fade-in");
      titleTen[0].classList.remove("fade-in-title-ten");
      textTen[0].classList.remove("fade-in-text-ten");
      textTenTwo[0].classList.remove("fade-in-text-ten-two");
      joinUsContainer[9].style.opacity = 0;
      wellBeingPageContainer.style.display = "none";
      wellBeingPageOpen = false;
    }
  });
}
//////////////// 1
navItems[0].addEventListener("click", () => {
  if (!triger) {
    //start video
    setDisplayCounter(1, counterLine, 0);
    videos[0].currentTime = 0;
    scrollVideo(2, 5, 6, 0);
    //content display
    setTimeout(() => {
      sectionContainer[0].style.display = "block";
    }, 100);
    setTimeout(() => {
      sectionContainer[0].style.opacity = 1;
    }, 1600);
    setTimeout(() => {
      sectionTitle[0].classList.add("fade-in-title");
    }, 1900);
    setTimeout(() => {
      text[0].classList.add("fade-in-text");
    }, 2200);
    setTimeout(() => {
      text[1].classList.add("fade-in-text");
    }, 2500);
    setTimeout(() => {
      text[2].classList.add("fade-in-text");
    }, 2800);
    setTimeout(() => {
      text[3].classList.add("fade-in-text");
    }, 3100);
    setTimeout(() => {
      document
        .getElementsByClassName("partners-container")[0]
        .classList.add("partners-fade-in");
    }, 3400);
    setTimeout(() => {
      joinUsContainer[0].classList.add("join-us-container-fade-in");
    }, 3700);
  }
});
////////////// 2
navItems[2].addEventListener("click", () => {
  if (!triger) {
    //start video
    setDisplayCounter(2, counterLine, 1);
    videos[0].currentTime = 5;
    scrollVideo(3, 12.5, 13.5, 71.7);
    //content display
    setTimeout(() => {
      sectionContainer[1].style.display = "block";
    }, 4100);
    setTimeout(() => {
      sectionContainer[1].style.opacity = 1;
    }, 5100);
    setTimeout(() => {
      sectionTitle[1].classList.add("fade-in-title");
    }, 5400);
    setTimeout(() => {
      text[4].classList.add("fade-in-text");
    }, 5700);
    setTimeout(() => {
      joinUsContainer[1].classList.add("join-us-container-fade-in");
    }, 6000);
  }
});
////////////// 3
navItems[4].addEventListener("click", () => {
  if (!triger) {
    //start video
    setDisplayCounter(3, counterLine, 2);
    videos[0].currentTime = 12.5;
    scrollVideo(4, 18.5, 19.5, 65.6);
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
});
////////////// 4
navItems[6].addEventListener("click", () => {
  if (!triger) {
    //start video
    setDisplayCounter(4, counterLine, 3);
    videos[0].currentTime = 18.5;
    scrollVideo(5, 28.1, 28.5, 56.4);
    //content display
    setTimeout(() => {
      sectionContainer[3].style.display = "block";
    }, 5600);
    setTimeout(() => {
      sectionContainer[3].style.opacity = 1;
    }, 6600);
    setTimeout(() => {
      sectionTitle[3].classList.add("fade-in-title");
    }, 6900);
    setTimeout(() => {
      text[6].classList.add("fade-in-text");
    }, 7200);
    setTimeout(() => {
      text[7].classList.add("fade-in-text");
    }, 7500);
    setTimeout(() => {
      joinUsContainer[3].classList.add("join-us-container-fade-in");
    }, 7800);
  }
});
////////////// 5
navItems[8].addEventListener("click", () => {
  if (!triger) {
    //start video
    setDisplayCounter(5, counterLine, 4);
    videos[0].currentTime = 28.1;
    scrollVideo(6, 36.2, 36.5, 48.5);
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
});
////////////// 6
navItems[1].addEventListener("click", () => {
  if (!triger) {
    //start video
    setDisplayCounter(6, counterLine, 5);
    videos[0].currentTime = 36.2;
    scrollVideo(7, 41.5, 42.5, 42.5);
    //content display
    setTimeout(() => {
      sectionContainer[5].style.display = "block";
    }, 2100);
    setTimeout(() => {
      sectionContainer[5].style.opacity = 1;
    }, 3100);
    setTimeout(() => {
      sectionTitle[5].classList.add("fade-in-title");
    }, 3400);
    setTimeout(() => {
      text[10].classList.add("fade-in-text");
    }, 3700);
    setTimeout(() => {
      text[11].classList.add("fade-in-text");
    }, 4000);
    setTimeout(() => {
      joinUsContainer[5].classList.add("join-us-container-fade-in");
    }, 4300);
  }
});
////////////// 7
navItems[3].addEventListener("click", () => {
  if (!triger) {
    //start video
    setDisplayCounter(7, counterLine, 6);
    videos[0].currentTime = 41.5;
    scrollVideo(8, 53.5, 54.5, 30.3);
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
});
////////////// 8
navItems[5].addEventListener("click", () => {
  if (!triger) {
    //start video
    setDisplayCounter(8, counterLine, 7);
    videos[0].currentTime = 53.5;
    scrollVideo(9, 61.5, 62.5, 23.2);
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
});
////////////// 9
navItems[7].addEventListener("click", () => {
  if (!triger) {
    //start video
    setDisplayCounter(9, counterLine, 8);
    videos[0].currentTime = 61.5;
    scrollVideo(10, 69.9, 71, 14.1);
    //content display
    setTimeout(() => {
      sectionContainer[8].style.display = "block";
    }, 5100);
    setTimeout(() => {
      sectionContainer[8].style.opacity = 1;
    }, 6100);
    setTimeout(() => {
      sectionTitle[8].classList.add("fade-in-title");
    }, 6400);
    setTimeout(() => {
      text[17].classList.add("fade-in-text");
    }, 6700);
    setTimeout(() => {
      text[18].classList.add("fade-in-text");
    }, 7000);
    setTimeout(() => {
      text[19].classList.add("fade-in-text");
    }, 7300);
    setTimeout(() => {
      joinUsContainer[8].classList.add("join-us-container-fade-in");
    }, 7600);
  }
});
//WELL BEING PAGE
let wellBeingPageContainer = document.getElementById(
  "well-being-page-container"
);
let closeWellBeingPage = document.getElementById("close-well-being-page");
let wellBeingPageOpen = false;
document
  .getElementsByClassName("nav-item-well-being-page")[0]
  .addEventListener("click", () => {
    // close nav bar
    icons.forEach((icon) => {
      icon.classList.toggle("open");
      !hamOpened ? (hamOpened = true) : (hamOpened = false);
    });
    setTimeout(() => {
      navContainer[0].classList.toggle("fade-in-nav");
    }, 200);
    wellBeingPageContainer.style.display = "block";
    wellBeingPageOpen = true;
  });
closeWellBeingPage.onclick = () => {
  wellBeingPageContainer.style.display = "none";
  wellBeingPageOpen = false;
};

//POP UP
let popUp = document.getElementById("contact-pop-up-container");
let popUpBlurBg = document.getElementsByClassName("blur-bg");
let showPopUps = document.getElementsByClassName("show-pop-up");
let closePopUpBtn = document.getElementById("close-pop-up");
let popUpCont = document.getElementById("pop-up");
let popUpOpen = false;
for (const showPopUp of showPopUps) {
  showPopUp.addEventListener("click", () => {
    popUpBlurBg[0].style.display = "block";
    popUp.style.display = "block";
    popUpOpen = true;
  });
}

closePopUpBtn.onclick = () => {
  popUpBlurBg[0].style.display = "none";
  popUp.style.display = "none";
  popUpOpen = false;
};
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

function scrollVideo(nextScrollSec, from, to, sectCurTime) {
  videosRev[0].style.opacity = 0;
  videosRev[0].currentTime = sectCurTime;
  videos[0].play();
  triger = true;
  scrollSection = nextScrollSec;
  let intervalPlaySrollA = setInterval(() => {
    if (videos[0].currentTime > from && videos[0].currentTime < to) {
      clearInterval(intervalPlaySrollA);
      videos[0].pause();
      setTimeout(() => {
        triger = false;
      }, 100);
    }
  }, 100);
}
function scrollVideoRev(nextScrollSec, from, to, sectCurTime) {
  videosRev[0].style.opacity = 1;
  videos[0].currentTime = sectCurTime;
  videosRev[0].play();
  triger = true;
  scrollSection = nextScrollSec;
  let intervalPlaySrollR = setInterval(() => {
    if (videosRev[0].currentTime > from && videosRev[0].currentTime < to) {
      clearInterval(intervalPlaySrollR);
      videosRev[0].pause();
      // videos[0].style.opacity = 0;
      setTimeout(() => {
        triger = false;
      }, 100);
    }
  }, 100);
}
//FUNCTION VIDEO FORVARD
function videoForvard() {
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
    scrollVideo(3, 12.5, 13.5, 71.7);
    //content display
    setTimeout(() => {
      sectionContainer[1].style.display = "block";
    }, 4100);
    setTimeout(() => {
      sectionContainer[1].style.opacity = 1;
    }, 5100);
    setTimeout(() => {
      sectionTitle[1].classList.add("fade-in-title");
    }, 5400);
    setTimeout(() => {
      text[4].classList.add("fade-in-text");
    }, 5700);
    setTimeout(() => {
      joinUsContainer[1].classList.add("join-us-container-fade-in");
    }, 6000);
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
    scrollVideo(4, 18.5, 19.5, 65.6);
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
    scrollVideo(5, 28.1, 28.5, 56.4);
    //content display
    setTimeout(() => {
      sectionContainer[3].style.display = "block";
    }, 5600);
    setTimeout(() => {
      sectionContainer[3].style.opacity = 1;
    }, 6600);
    setTimeout(() => {
      sectionTitle[3].classList.add("fade-in-title");
    }, 6900);
    setTimeout(() => {
      text[6].classList.add("fade-in-text");
    }, 7200);
    setTimeout(() => {
      text[7].classList.add("fade-in-text");
    }, 7500);
    setTimeout(() => {
      joinUsContainer[3].classList.add("join-us-container-fade-in");
    }, 7800);
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
    scrollVideo(6, 36.2, 36.5, 48.5);
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
    scrollVideo(7, 41.5, 42.5, 42.5);
    //content display
    setTimeout(() => {
      sectionContainer[5].style.display = "block";
    }, 2100);
    setTimeout(() => {
      sectionContainer[5].style.opacity = 1;
    }, 3100);
    setTimeout(() => {
      sectionTitle[5].classList.add("fade-in-title");
    }, 3400);
    setTimeout(() => {
      text[10].classList.add("fade-in-text");
    }, 3700);
    setTimeout(() => {
      text[11].classList.add("fade-in-text");
    }, 4000);
    setTimeout(() => {
      joinUsContainer[5].classList.add("join-us-container-fade-in");
    }, 4300);
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
    scrollVideo(8, 53.5, 54.5, 30.3);
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
    scrollVideo(9, 61.5, 62.5, 23.2);
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
    scrollVideo(10, 69.9, 71, 14.1);
    //content display
    setTimeout(() => {
      sectionContainer[8].style.display = "block";
    }, 5100);
    setTimeout(() => {
      sectionContainer[8].style.opacity = 1;
    }, 6100);
    setTimeout(() => {
      sectionTitle[8].classList.add("fade-in-title");
    }, 6400);
    setTimeout(() => {
      text[17].classList.add("fade-in-text");
    }, 6700);
    setTimeout(() => {
      text[18].classList.add("fade-in-text");
    }, 7000);
    setTimeout(() => {
      text[19].classList.add("fade-in-text");
    }, 7300);
    setTimeout(() => {
      joinUsContainer[8].classList.add("join-us-container-fade-in");
    }, 7600);
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
    scrollVideo(11, 76.6, 77.5, 7.2);
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
    scrollVideo(12, 83.5, 84, 0.5);
    //content display
    setTimeout(() => {
      sectionContainer[10].style.display = "block";
    }, 4600);
    setTimeout(() => {
      sectionContainer[10].style.opacity = 1;
    }, 5600);
  }
}
//FUNCTION VIDEO REVERSE
function videoReverse() {
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
    scrollVideoRev(2, 79.7, 80.2, 5);
    //content display
    setTimeout(() => {
      sectionContainer[0].style.display = "block";
    }, 4100);
    setTimeout(() => {
      sectionContainer[0].style.opacity = 1;
    }, 5100);
    setTimeout(() => {
      sectionTitle[0].classList.add("fade-in-title");
    }, 5300);
    setTimeout(() => {
      text[0].classList.add("fade-in-text");
    }, 5600);
    setTimeout(() => {
      text[1].classList.add("fade-in-text");
    }, 5900);
    setTimeout(() => {
      text[2].classList.add("fade-in-text");
    }, 6200);
    setTimeout(() => {
      text[3].classList.add("fade-in-text");
    }, 6500);
    setTimeout(() => {
      document
        .getElementsByClassName("partners-container")[0]
        .classList.add("partners-fade-in");
    }, 6800);
    setTimeout(() => {
      joinUsContainer[0].classList.add("join-us-container-fade-in");
    }, 7100);
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
    scrollVideoRev(3, 71.7, 72.7, 12.5);
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
    scrollVideoRev(4, 65.6, 66.6, 18.5);
    //content display
    setTimeout(() => {
      sectionContainer[2].style.display = "block";
    }, 6600);
    setTimeout(() => {
      sectionContainer[2].style.opacity = 1;
    }, 7600);
    setTimeout(() => {
      sectionTitle[2].classList.add("fade-in-title");
    }, 7900);
    setTimeout(() => {
      text[5].classList.add("fade-in-text");
    }, 8200);
    setTimeout(() => {
      joinUsContainer[2].classList.add("join-us-container-fade-in");
    }, 8500);
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
    scrollVideoRev(5, 56.4, 57.3, 28.1);
    //content display
    setTimeout(() => {
      sectionContainer[3].style.display = "block";
    }, 4600);
    setTimeout(() => {
      sectionContainer[3].style.opacity = 1;
    }, 5600);
    setTimeout(() => {
      sectionTitle[3].classList.add("fade-in-title");
    }, 5900);
    setTimeout(() => {
      text[6].classList.add("fade-in-text");
    }, 6200);
    setTimeout(() => {
      text[7].classList.add("fade-in-text");
    }, 6500);
    setTimeout(() => {
      joinUsContainer[3].classList.add("join-us-container-fade-in");
    }, 6800);
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
    scrollVideoRev(6, 48.5, 49.5, 36.2);
    //content display
    setTimeout(() => {
      sectionContainer[4].style.display = "block";
    }, 3100);
    setTimeout(() => {
      sectionContainer[4].style.opacity = 1;
    }, 4100);
    setTimeout(() => {
      sectionTitle[4].classList.add("fade-in-title");
    }, 4400);
    setTimeout(() => {
      text[8].classList.add("fade-in-text");
    }, 4700);
    setTimeout(() => {
      text[9].classList.add("fade-in-text");
    }, 5000);
    setTimeout(() => {
      joinUsContainer[4].classList.add("join-us-container-fade-in");
    }, 5300);
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
    scrollVideoRev(7, 42.5, 43.3, 41.5);
    //content display
    setTimeout(() => {
      sectionContainer[5].style.display = "block";
    }, 9100);
    setTimeout(() => {
      sectionContainer[5].style.opacity = 1;
    }, 10100);
    setTimeout(() => {
      sectionTitle[5].classList.add("fade-in-title");
    }, 10400);
    setTimeout(() => {
      text[10].classList.add("fade-in-text");
    }, 10700);
    setTimeout(() => {
      text[11].classList.add("fade-in-text");
    }, 11000);
    setTimeout(() => {
      joinUsContainer[5].classList.add("join-us-container-fade-in");
    }, 11300);
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
    scrollVideoRev(8, 30.3, 31.3, 53.5);
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
    scrollVideoRev(9, 23.2, 24, 61.5);
    //content display
    setTimeout(() => {
      sectionContainer[7].style.display = "block";
    }, 6100);
    setTimeout(() => {
      sectionContainer[7].style.opacity = 1;
    }, 7100);
    setTimeout(() => {
      sectionTitle[7].classList.add("fade-in-title");
    }, 7400);
    setTimeout(() => {
      text[14].classList.add("fade-in-text");
    }, 7700);
    setTimeout(() => {
      text[15].classList.add("fade-in-text");
    }, 8000);
    setTimeout(() => {
      text[16].classList.add("fade-in-text");
    }, 8300);
    setTimeout(() => {
      joinUsContainer[7].classList.add("join-us-container-fade-in");
    }, 8600);
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
    scrollVideoRev(10, 14.1, 14.8, 69.9);
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
    scrollVideoRev(11, 7.2, 7.8, 76.6);
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

let loaded = false;

console.log(location.href.split("/").pop());
let locationHref = location.href.split("/").pop();

let intervalPlay = setInterval(() => {
  if (videos[0].currentTime > 0.01) {
    clearInterval(intervalPlay);
    videos[0].pause();
    videos[0].currentTime = 0;

    setTimeout(() => {
      document.getElementById("loading-scr").style.opacity = 0;
    }, 1000);
    setTimeout(() => {
      document.getElementById("loading-scr").style.display = "none";
      loaded = true;
    }, 2500);
    if (locationHref == "") {
      setTimeout(() => {
        //content display
        setTimeout(() => {
          sectionContainer[0].style.display = "block";
        }, 100);
        setTimeout(() => {
          sectionContainer[0].style.opacity = 1;
        }, 1600);
        setTimeout(() => {
          sectionTitle[0].classList.add("fade-in-title");
        }, 1900);
        setTimeout(() => {
          text[0].classList.add("fade-in-text");
        }, 2200);
        setTimeout(() => {
          text[1].classList.add("fade-in-text");
        }, 2500);
        setTimeout(() => {
          text[2].classList.add("fade-in-text");
        }, 2800);
        setTimeout(() => {
          text[3].classList.add("fade-in-text");
        }, 3100);
        setTimeout(() => {
          document
            .getElementsByClassName("partners-container")[0]
            .classList.add("partners-fade-in");
        }, 3400);
        setTimeout(() => {
          joinUsContainer[0].classList.add("join-us-container-fade-in");
        }, 3700);
      }, 2500);
    }
    if (locationHref == "#planing&design") {
      //start video
      setDisplayCounter(2, counterLine, 1);
      videos[0].currentTime = 5;
      scrollVideo(3, 12.5, 13.5, 71.7);
      //content display
      setTimeout(() => {
        sectionContainer[1].style.display = "block";
      }, 4100);
      setTimeout(() => {
        sectionContainer[1].style.opacity = 1;
      }, 5100);
      setTimeout(() => {
        sectionTitle[1].classList.add("fade-in-title");
      }, 5400);
      setTimeout(() => {
        text[4].classList.add("fade-in-text");
      }, 5700);
      setTimeout(() => {
        joinUsContainer[1].classList.add("join-us-container-fade-in");
      }, 6000);
    }
    if (locationHref == "#construction") {
      //start video
      setDisplayCounter(3, counterLine, 2);
      videos[0].currentTime = 12.5;
      scrollVideo(4, 18.5, 19.5, 65.6);
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
    if (locationHref == "#iot&sensors") {
      //start video
      setDisplayCounter(4, counterLine, 3);
      videos[0].currentTime = 18.5;
      scrollVideo(5, 28.1, 28.5, 56.4);
      //content display
      setTimeout(() => {
        sectionContainer[3].style.display = "block";
      }, 5600);
      setTimeout(() => {
        sectionContainer[3].style.opacity = 1;
      }, 6600);
      setTimeout(() => {
        sectionTitle[3].classList.add("fade-in-title");
      }, 6900);
      setTimeout(() => {
        text[6].classList.add("fade-in-text");
      }, 7200);
      setTimeout(() => {
        text[7].classList.add("fade-in-text");
      }, 7500);
      setTimeout(() => {
        joinUsContainer[3].classList.add("join-us-container-fade-in");
      }, 7800);
    }
    if (locationHref == "#management&maintenance") {
      //start video
      setDisplayCounter(5, counterLine, 4);
      videos[0].currentTime = 28.1;
      scrollVideo(6, 36.2, 36.5, 48.5);
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
    if (locationHref == "#marketing") {
      //start video
      setDisplayCounter(6, counterLine, 5);
      videos[0].currentTime = 36.2;
      scrollVideo(7, 41.5, 42.5, 42.5);
      //content display
      setTimeout(() => {
        sectionContainer[5].style.display = "block";
      }, 2100);
      setTimeout(() => {
        sectionContainer[5].style.opacity = 1;
      }, 3100);
      setTimeout(() => {
        sectionTitle[5].classList.add("fade-in-title");
      }, 3400);
      setTimeout(() => {
        text[10].classList.add("fade-in-text");
      }, 3700);
      setTimeout(() => {
        text[11].classList.add("fade-in-text");
      }, 4000);
      setTimeout(() => {
        joinUsContainer[5].classList.add("join-us-container-fade-in");
      }, 4300);
    }
    if (locationHref == "#landscapingandgreen") {
      //start video
      setDisplayCounter(7, counterLine, 6);
      videos[0].currentTime = 41.5;
      scrollVideo(8, 53.5, 54.5, 30.3);
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
    if (locationHref == "#renewableenergy&suitability-netzero") {
      //start video
      setDisplayCounter(8, counterLine, 7);
      videos[0].currentTime = 53.5;
      scrollVideo(9, 61.5, 62.5, 23.2);
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
    if (locationHref == "#mobility&delivery") {
      //start video
      setDisplayCounter(9, counterLine, 8);
      videos[0].currentTime = 61.5;
      scrollVideo(10, 69.9, 71, 14.1);
      //content display
      setTimeout(() => {
        sectionContainer[8].style.display = "block";
      }, 5100);
      setTimeout(() => {
        sectionContainer[8].style.opacity = 1;
      }, 6100);
      setTimeout(() => {
        sectionTitle[8].classList.add("fade-in-title");
      }, 6400);
      setTimeout(() => {
        text[17].classList.add("fade-in-text");
      }, 6700);
      setTimeout(() => {
        text[18].classList.add("fade-in-text");
      }, 7000);
      setTimeout(() => {
        text[19].classList.add("fade-in-text");
      }, 7300);
      setTimeout(() => {
        joinUsContainer[8].classList.add("join-us-container-fade-in");
      }, 7600);
    }
    if (locationHref == "#wellbeing") {
      //start video
      scrollSection = 10;
      setDisplayCounter(10, counterLine, 9);
      videos[0].currentTime = 71;
      scrollVideo(11, 76.6, 77.5, 7.2);
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
  }
}, 100);
if (locationHref == "") {
  let intervalPlay2 = setInterval(() => {
    if (loaded) {
      videos[0].play();
      // triger = true;
      scrollSection = 2;
      if (videos[0].currentTime > 5 && videos[0].currentTime < 6) {
        clearInterval(intervalPlay2);
        videos[0].pause();
        // videosRev[0].pause();
        setTimeout(() => {
          triger = false;
        }, 100);
      }
    }
  }, 100);
}

//SCROLL EVENT
let scrollSection = 1;
var lastScrollTop = 0;

document.addEventListener("scroll", () => {
  if (!hamOpened && !popUpOpen && !wellBeingPageOpen) {
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
      videoForvard();
    } else {
      videoReverse();
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }
});

document.getElementById("arrowUpSect").onclick = () => {
  videoReverse();
};
document.getElementById("arrowDownSect").onclick = () => {
  videoForvard();
};
