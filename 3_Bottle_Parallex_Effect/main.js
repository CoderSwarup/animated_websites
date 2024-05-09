let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "10% 10%",
    end: "80% 50%",
    scrub: true,
    // markers: true,
    pin: true,
  },
});

t1.to(".scroll", {
  opacity: 0,
});
t1.to(
  ".content",
  {
    scale: 1,
  },
  "."
);
t1.to(
  "#bottle-cap",
  {
    top: "55%",
  },
  "."
);
t1.to(
  "#bottle",
  {
    top: "140%",
  },
  "."
);
let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    start: "50% 70%",
    end: "80% 60%",
    scrub: true,
    // markers: true,
  },
});
t2.to(
  "#bottle-cap",
  {
    width: "120px",
    top: "168%",
  },
  "<"
);

t2.to(
  "#bottle",
  {
    width: "150px",
    top: "196%",
  },
  "<"
);
