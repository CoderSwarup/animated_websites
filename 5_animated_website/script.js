gsap.from("a", {
  y: -100,
  duration: 1,
  stagger: 0.3,
  delay: 0.5,
});

Shery.textAnimate(".text h2", {
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.imageEffect(".plant-img", {
  style: 1,
  //   debug: true,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: 0.7, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.7500061587789223 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.79, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  gooey: true,
});

// image sencond Efect
Shery.imageEffect(".leaf-img", {
  style: 3,
  config: {
    uFrequencyX: { value: 6.87, range: [0, 100] },
    uFrequencyY: { value: 23.66, range: [0, 100] },
    uFrequencyZ: { value: 11.45, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 23.6 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.6666666666666666 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.52, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

Shery.imageEffect(".sea-img", {
  style: 2,
  // debug: true,
  config: {
    resolutionXY: { value: 100 },
    distortion: { value: true },
    mode: { value: -3 },
    mousemove: { value: 0 },
    modeA: { value: 1 },
    modeN: { value: 0 },
    speed: { value: 1.92, range: [-500, 500], rangep: [-10, 10] },
    frequency: { value: 50, range: [-800, 800], rangep: [-50, 50] },
    angle: { value: 0.5, range: [0, 3.141592653589793] },
    waveFactor: { value: 1.4, range: [-3, 3] },
    color: { value: 10212607 },
    pixelStrength: { value: 3, range: [-20, 100], rangep: [-20, 20] },
    quality: { value: 5, range: [0, 10] },
    contrast: { value: 1, range: [-25, 25] },
    brightness: { value: 1, range: [-1, 25] },
    colorExposer: { value: 0.18, range: [-5, 5] },
    strength: { value: 0.2, range: [-40, 40], rangep: [-5, 5] },
    exposer: { value: 8, range: [-100, 100] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.625 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

Shery.imageEffect(".cloud-img", {
  style: 4,
  // debug: true,
});

Shery.imageEffect(".gallary-img", {
  style: 3,

  scrollSnapping: true,
  scrollSpeed: 8,
  touchSpeed: 8,
  damping: 7,
  pin: true,
});

let overlay = document.querySelector(".overlay");

document
  .querySelector(".future-button")
  .addEventListener("mouseover", function () {
    overlay.classList.toggle("new");
  });
document
  .querySelector(".future-button")
  .addEventListener("mouseout", function () {
    overlay.classList.toggle("new");
  });
