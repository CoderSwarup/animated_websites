const data = [
  {
    subtitle1: "Ryan Reynolds",
    subtitle2: "Action/Comedy",
    maintxt: "DEADPOOL",
    desc: "Deadpool protects a young mutant Russell from the authorities and gets thrown in prison. However, he escapes and forms a team of mutants to prevent a time-travelling mercenary from killing Russell.",
    src: "./Deadpool.png",
  },
  {
    subtitle1: "Chadwick Boseman",
    subtitle2: "Action/Sci-fi",
    maintxt: "Black Panther",
    desc: "After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.",
    src: "./blackpanther.png",
  },
];

let html = document.querySelector("html");
let subtitle1 = document.querySelector("#st1");
let subtitle2 = document.querySelector("#st2");
let maintext = document.querySelector(".main-text h1");
let img = document.querySelector(".img");
let desc = document.querySelector(".desc");

let index = 0;
let isAnimating = false;

const ChangeData = () => {
  if (index === data.length) index = 0;
  subtitle1.textContent = data[index].subtitle1;
  subtitle2.textContent = data[index].subtitle2;
  maintext.textContent = data[index].maintxt;
  img.src = data[index].src;
  desc.textContent = data[index].desc;
  index++;
};

function Transition() {
  isAnimating = true;
  html.classList.toggle("new");
  ChangeData();
  gsap.from("nav", {
    opacity: 0,
    duration: 2,
  });

  gsap.from(".sub-text p:nth-child(1)", {
    opacity: 0.7,
    x: "-130%",
    duration: 2,
  });

  gsap.from(".sub-text p:nth-child(2)", {
    opacity: 0.7,
    x: "130%",
    duration: 2,
  });
  gsap.from(".main-text", {
    opacity: 0.7,
    y: "-100%",
    duration: 2,
    onComplete: () => {
      isAnimating = false;
    },
  });

  gsap.from(".bottom-section", {
    opacity: 0.3,
    y: "100%",
    duration: 2,
  });

  gsap.from(".circle", {
    scale: 0,
    duration: 1.5,
  });
  gsap.from(".img", {
    y: "100%",
    duration: 1.5,
  });
}

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  if (!isAnimating) {
    Transition();
  }
});

Transition();

// let touchstartY = 0;
// let touchendY = 0;

// function checkDirection() {
//   if (touchendY < touchstartY) {
//     img.classList.toggle("hide");
//   }
// }

// document.addEventListener("touchstart", (e) => {
//   touchstartY = e.changedTouches[0].screenY;
// });

// document.addEventListener("touchend", (e) => {
//   touchendY = e.changedTouches[0].screenY;
//   checkDirection();
// });
