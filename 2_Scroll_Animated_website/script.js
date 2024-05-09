let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-2", //
    start: "0% 95%",
    end: "60% 50%",
    scrub: true,
    // markers: true,
  },
});
tl.to(
  "#fanta",
  {
    top: "150%",
    left: "25%",
  },
  "orange"
);
tl.to(
  "#orange-cut",
  {
    top: "170%",
    left: "35%",
  },
  "orange"
);
tl.to(
  "#orange",
  {
    width: "15%",
    top: "160%",
    right: "10%",
  },
  "orange"
);
tl.to(
  "#leaf",
  {
    top: "110%",
    rotate: "130deg",
    left: "70%",
  },
  "orange"
);
tl.to(
  "#leaf2",
  {
    top: "110%",
    rotate: "130deg",
    left: "0%",
  },
  "orange"
);
tl.from(
  ".svg",
  {
    opacity: 0,
    duration: 2,
  },
  "orange"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-3",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
  },
});

tl2.from(
  ".lemon1",
  {
    rotate: "-90deg",
    left: "-100%",
    top: "110%",
  },
  "ca"
);
tl2.from(
  "#cocacola",
  {
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
  },
  "ca"
);

tl2.from(
  ".lemon2",
  {
    rotate: "90deg",
    left: "100%",
    top: "110%",
  },
  "ca"
);
tl2.from(
  "#pepsi",
  {
    rotate: "90deg",
    top: "110%",
    left: "100%",
  },
  "ca"
);

tl2.to(
  "#orange-cut",
  {
    width: "18%",
    left: "50%",
    top: "220%",
  },
  "ca"
);
tl2.to(
  "#fanta",
  {
    width: "35%",
    top: "234%",
    left: "50%",
  },
  "ca"
);
