const cursorAnimation = () => {
  document.addEventListener("mousemove", (dets) => {
    gsap.to("#cursor", {
      x: dets.x,
      y: dets.y,
      ease: "back.out",
    });
  });
};

const CircleAnimation = () => {
  // Get the total height of the page
  let totalPageHeight = document.body.scrollHeight;
  let svg = document.querySelector("#svg");
  let main = document.querySelector("#main");

  window.addEventListener("wheel", (dets) => {
    // Get the current vertical scroll position
    let scrollPosition = window.scrollY;

    // Calculate the percentage scrolled
    let scrollPercentage =
      (scrollPosition / (totalPageHeight - window.innerHeight)) * 100;

    if (dets.deltaY > 0 && scrollPercentage.toFixed() < 99) {
      gsap.to(svg, {
        rotate: "+=100deg",
      });
    } else if (dets.deltaY < 0 && scrollPercentage.toFixed() > 0) {
      gsap.to(svg, {
        rotate: "-=100deg",
      });
    }
    // Log the scroll position and percentage
    // console.log("Scroll Position:", scrollPosition);
    // console.log("Scroll Percentage:", scrollPercentage.toFixed(2) + "%");
    document.querySelector(".inner").style.height = `${scrollPercentage.toFixed(
      2
    )}%`;

    if (scrollPercentage > 50) {
      document.querySelector(".arrow").style.color = "#000";
    } else {
      document.querySelector(".arrow").style.color = "#fff";
    }
  });
};

const MenuAnimation = () => {
  // Select all menu items
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      gsap.to(item.querySelector(".menu-item-content"), {
        y: "-100%", // Move text to its normal position
        duration: 0.3,
        ease: "power1.out",
      });
      gsap.to(item.querySelector(".menu-item-content-2"), {
        y: "-100%", // Move text to its normal position
        duration: 0.3,
        ease: "power1.out",
      });
    });

    item.addEventListener("mouseout", () => {
      gsap.to(item.querySelector(".menu-item-content"), {
        y: 0, // Move text to its normal position
        duration: 0.3,
        ease: "power1.out",
      });
      gsap.to(item.querySelector(".menu-item-content-2"), {
        y: 0, // Move text to its normal position
        duration: 0.3,
        ease: "power1.out",
      });
    });
  });
};

const SVGAnimation = () => {
  let initPath = "M 0 80 Q 500 80 1080 80";
  let finalPath = "M 0 80 Q 500 80 1080 80";

  let svgs = document.querySelectorAll(".line-svg");

  svgs.forEach((main) => {
    main.addEventListener("mousemove", (e) => {
      path = `M 0 80 Q ${e.x} ${Math.abs(e.y - 440)} 1080 80`; // Keep start and end points fixed, adjust only the control point

      // Update the path of the SVG using GSAP
      gsap.to(".line-svg path", {
        attr: {
          d: path,
        },
      });
    });

    main.addEventListener("mouseleave", (e) => {
      gsap.to(".line-svg path", {
        ease: "elastic",
        duration: 0.5,
        attr: {
          d: finalPath,
        },
      });
    });
  });
};

const BtnAnimation = () => {
  let btns = document.querySelectorAll(".btn");

  btns.forEach((btn) => {
    let animated_btn = btn.querySelector(`.animated-btn`);
    let arrow = btn.querySelector(".arr");
    btn.addEventListener("mouseover", () => {
      gsap.to(animated_btn, {
        duration: 0.2,
        ease: "power1.out",
        width: "100%",
        height: "200%",
        borderRadius: "0",
        right: 0,
      });
      arrow.style.animation = `arrowMove 0.8s infinite`;
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(animated_btn, {
        duration: 0.2,
        ease: "power1.out",
        width: "20px",
        height: "20px",
        borderRadius: "100%",
        right: "10%",
      });

      arrow.style.opacity = "0";
      arrow.style.animation = `none`;
    });
  });
};

const marqueAnimation = () => {
  window.addEventListener("wheel", (dets) => {
    if (dets.deltaY > 0) {
      gsap.to(".mq-content", {
        transform: `translateX(-100%)`,
        repeat: -1,
        duration: 3,
        ease: "none",
      });
      gsap.to(".mq-item img", {
        rotate: "180deg",
      });
    } else {
      gsap.to(".mq-content", {
        transform: `translateX(0%)`,
        repeat: -1,
        duration: 3,
        ease: "none",
      });
      gsap.to(".mq-item img", {
        rotate: "0deg",
      });
    }
  });
};

const HeadingTextAnimation = () => {
  gsap.to("#hero1 .cover h1", {
    transform: `translateY(0)`,
    stagger: 0.2,
    ease: "ease.Power4",
    duration: 0.8,
  });

  gsap.to("#hero2 .cover h1", {
    transform: `translateY(0)`,
    stagger: 0.2,
    ease: "ease.Power4",
    duration: 0.8,
    scrollTrigger: {
      trigger: "#hero2",
      scroller: "body",
      start: "top top",
      // OR,
      // scrub: 4,
    },
  });

  gsap.to("#work .cover h1", {
    transform: `translateY(0)`,
    stagger: 0.2,
    ease: "ease.Power4",
    duration: 0.8,
    scrollTrigger: {
      trigger: "#work",
      scroller: "body",
      start: "5% top",
      // OR,
      // scrub: 4,
    },
  });
  gsap.from("#info-details .cover h3", {
    transform: `translateY(100%)`,
    stagger: 0.2,
    ease: "ease.Power4",
    duration: 0.8,
    scrollTrigger: {
      trigger: "#info-details",
      scroller: "body",
      start: "top 10%",
      // OR,
      // scrub: 4,
    },
  });
};

const WorkAnimation = () => {
  gsap.from(".item-line", {
    width: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
      trigger: ".item-line",
      scroller: "body",
      strat: "top top",
    },
  });

  const img = document.querySelector(".horizontal-menu img");
  const horizontal_menu = document.querySelectorAll(".horizontal-menu .item");
  const horizontalmenu = document.querySelector(".horizontal-menu");
  horizontalmenu.addEventListener("mousemove", (e) => {
    gsap.to(img, {
      x: e.x,
      opacity: 1,
      display: "block",
    });
  });
  horizontalmenu.addEventListener("mouseleave", (e) => {
    gsap.to(img, {
      x: e.x,
      opacity: 0,
      display: "none",
    });
  });

  horizontal_menu.forEach((i) => {
    let src = i.getAttribute("data-imgsrc");

    i.addEventListener("mousemove", (e) => {
      img.src = src;
    });
  });
};

const newsAnimation = () => {
  const img = document.querySelector(".letest-news img");
  const horizontal_menu = document.querySelectorAll(
    ".letest-news .news-details"
  );
  let letestnews = document.querySelector(".letest-news");
  horizontal_menu.forEach((i) => {
    let src = i.getAttribute("data-imgsrc");
    let color = i.getAttribute("data-color");

    i.addEventListener("mouseover", (e) => {
      letestnews.style.background = color;
      img.src = src;
      gsap.to(img, {
        x: e.x,
        opacity: 1,
        display: "block",
      });
    });

    i.addEventListener("mouseleave", (e) => {
      letestnews.style.background = "#fff";
      gsap.to(img, {
        x: e.x,
        opacity: 0,
        display: "hidden",
      });
    });
  });
};

const ImageHoverAnimation = () => {
  const images = document.querySelectorAll(".img-container");
  const cursor = document.querySelector("#cursor");
  images.forEach((ele) => {
    ele.addEventListener("mousemove", (e) => {
      cursor.querySelector("span").style.opacity = 1;
      gsap.to(cursor, {
        width: "100px",
        height: "50px",
        borderRadius: "15px",
      });
    });

    ele.addEventListener("mouseleave", (e) => {
      cursor.querySelector("span").style.opacity = 0;

      gsap.to(cursor, {
        width: "15px",
        height: "15px",
        borderRadius: "100%",
      });
    });
  });
};
cursorAnimation();
CircleAnimation();
MenuAnimation();
SVGAnimation();
BtnAnimation();
marqueAnimation();
HeadingTextAnimation();
WorkAnimation();
newsAnimation();
ImageHoverAnimation();
