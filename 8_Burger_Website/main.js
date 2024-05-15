let sec = gsap.utils.toArray(".page");
// let color = [
//   {
//     color: rgb(255, 51, 51),
//   },
//   {
//     color: rgb(0, 151, 43),
//   },
// ];
gsap.to(sec, {
  xPercent: -100 * (sec.length - 1),
  ease: "ease.Power3",
  scrollTrigger: {
    trigger: "#content",
    // markers: true,
    start: "top top",
    scrub: true,
    end: "+=1",
    pin: true,
  },
});

window.addEventListener("wheel", (det) => {
  if (det.deltaY > 0) {
    document.querySelector("#page1").style.backgroundColor = "rgb(0, 151, 43)";
  } else {
    document.querySelector("#page1").style.backgroundColor =
      " rgb(255, 51, 51)";
  }
});

const NonVegAnimation = () => {
  let isAnimating = false;
  let isPlaying = false;
  let tl = gsap.timeline({
    paused: true,
    onStart: () => {
      isPlaying = true;
    },
    onComplete: () => {
      isPlaying = false;
    },

    onReverseComplete: function () {
      isPlaying = false;
    },
  });
  const nonveg_burger = document.querySelector(".nonveg-burger");
  const left_lines = gsap.utils.toArray(".nonveg .left-lines .line-container");
  const right_lines = gsap.utils.toArray(
    ".nonveg .Right-lines .line-container"
  );

  tl.to(
    ".nonveg .heading",
    {
      y: -100,
      opacity: 0,
    },
    "."
  );
  tl.to(
    ".nonveg button",
    {
      y: 100,
      opacity: 0,
    },
    "."
  );
  tl.to(
    ".nonveg-burger",
    {
      animation: "none",
    },
    "."
  );

  tl.to(
    left_lines,
    {
      opacity: 1,
      stagger: 0.3,
    },
    "a"
  );
  tl.from(
    left_lines,
    {
      y: 100,
    },
    "a"
  );
  tl.to(
    right_lines,
    {
      opacity: 1,
      stagger: 0.3,
    },
    "a"
  );
  tl.from(
    right_lines,
    {
      y: -100,
    },
    "a"
  );

  tl.to(
    ".nonveg .b-img",
    {
      margin: "8px 0",
    },
    "."
  );

  nonveg_burger.addEventListener("click", () => {
    console.log(isPlaying);
    if (isPlaying) return;
    if (isAnimating) {
      isPlaying = true;
      tl.reverse();
      isAnimating = false;
      return;
    }
    tl.play();
    isAnimating = true;
  });
};

NonVegAnimation();

const VegAnimation = () => {
  let isAnimating = false;
  let isPlaying = false;
  let tl = gsap.timeline({
    paused: true,
    onStart: () => {
      isPlaying = true;
    },
    onComplete: () => {
      isPlaying = false;
    },

    onReverseComplete: function () {
      isPlaying = false;
    },
  });
  const nonveg_burger = document.querySelector(".veg-burger");
  const left_lines = gsap.utils.toArray(".veg .left-lines .line-container");
  const right_lines = gsap.utils.toArray(".veg .Right-lines .line-container");

  tl.to(
    ".veg .heading",
    {
      y: -100,
      opacity: 0,
    },
    "."
  );
  tl.to(
    ".veg button",
    {
      y: 100,
      opacity: 0,
    },
    "."
  );
  tl.to(
    ".veg-burger",
    {
      animation: "none",
    },
    "."
  );

  tl.to(
    left_lines,
    {
      opacity: 1,
      stagger: 0.3,
    },
    "a"
  );
  tl.from(
    left_lines,
    {
      y: 100,
    },
    "a"
  );
  tl.to(
    right_lines,
    {
      opacity: 1,
      stagger: 0.3,
    },
    "a"
  );
  tl.from(
    right_lines,
    {
      y: -100,
    },
    "a"
  );

  tl.to(
    ".veg .b-img",
    {
      margin: "8px 0",
    },
    "."
  );

  nonveg_burger.addEventListener("click", () => {
    console.log("Nnveg");
    if (isPlaying) return;
    if (isAnimating) {
      isPlaying = true;
      tl.reverse();
      isAnimating = false;
      return;
    }
    tl.play();
    isAnimating = true;
  });
};

VegAnimation();
