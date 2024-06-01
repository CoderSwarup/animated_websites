import MoivesJSON from "./data/index.js";

const movieIndex = document.querySelector(".movie_name h1");
const movieName = document.querySelector(".movie_name h2");
const movieinfo = document.querySelector(".movie-info");
const DirectorName = document.querySelector(".director");
const ActorName = document.querySelector(".actor");
const tagbtns = document.querySelector(".movie-category");
const btns = document.querySelectorAll(".btns button");
let isAnimating = false;

const DataChgange = (i2) => {
  if (isAnimating) return;
  isAnimating = true;

  const BackWordImage = document.querySelector(".backword");
  const ForWordImage = document.querySelector(".forward");
  let maincard = document.querySelector(".forward ");
  let incomingcard = document.querySelector(".backword");

  const tl = gsap.timeline({
    onComplete: function () {
      incomingcard?.classList.remove("z-[2]");
      incomingcard?.classList.add("z-[3]");
      incomingcard?.classList.remove("backword");

      maincard?.classList.remove("z-[3]");
      maincard?.classList.add("z-[2]");

      gsap.set(maincard, {
        opacity: 1,
        rotateZ: "50deg",
      });

      maincard?.classList.remove("forward");

      maincard?.classList.add("backword");
      incomingcard?.classList.add("forward");
      isAnimating = false;
    },
  });

  incomingcard.querySelector("img").src = MoivesJSON[i2]?.BigBanner;

  tl.to(
    ForWordImage,
    {
      duration: 0.5,
      rotateZ: "-50deg",
      scale: "21",
      opacity: 0,
    },
    "s"
  )
    .to(
      BackWordImage,
      {
        duration: 0.5,
        rotateZ: "0deg",
        scale: "1",
        opacity: 1,
      },
      "s"
    )
    .from(
      movieIndex,
      {
        y: -100,
      },
      "a"
    )
    .from(
      movieName,
      {
        y: 100,
      },
      "a"
    )
    .from(
      movieinfo,
      {
        opacity: 0,
        y: 50,
      },
      "a"
    )
    .from(
      tagbtns,
      {
        opacity: 0,
        x: -100,
      },
      "a"
    )
    .from(
      btns,
      {
        opacity: 0,
        y: -10,
      },
      "a"
    );

  ChangeContent(i2);
};

const ChangeContent = (index) => {
  if (isAnimating) return;
  const stars = document.querySelector(".stars");
  const categorybtns = document.querySelector(".category-btn");
  stars.innerHTML = "";
  categorybtns.innerHTML = "";

  movieIndex.textContent =
    MoivesJSON[index].id <= 9
      ? `0${MoivesJSON[index].id}`
      : MoivesJSON[index].id;
  movieName.textContent = MoivesJSON[index].name;
  let totalStars = Math.floor(MoivesJSON[index].rating);
  for (let index = 0; index <= 5; index++) {
    if (index <= totalStars) {
      stars.innerHTML += `<span class="fa fa-star checked "></span>`;
    } else {
      stars.innerHTML += `<span class="fa fa-star"></span>`;
    }
  }

  MoivesJSON[index].tags.forEach((ele) => {
    categorybtns.innerHTML += `<span>${ele}</span>`;
  });
  DirectorName.textContent = MoivesJSON[index].Director;
  ActorName.textContent = MoivesJSON[index].Actor;
};

const Init = () => {
  // const loader = document.getElementById("loader");

  const SliderBtns = document.querySelectorAll(".Slider-btns button");
  const Slider = document.querySelector(".slider");
  const PercentageToSlide = 100 / 5;
  let index = 1;
  const len = 5;

  SliderBtns[0].addEventListener("click", () => {
    if (isAnimating) return;
    if (index <= 1) return;
    index--;
    DataChgange(index - 1);
    gsap.to(Slider, {
      x: `-${(index - 1) * PercentageToSlide}%`,
    });
  });

  SliderBtns[1].addEventListener("click", () => {
    if (isAnimating) return;
    if (index === len) return;
    gsap.to(Slider, {
      x: `-${index * PercentageToSlide}%`,
    });
    DataChgange(index);
    index++;
  });

  // setTimeout(() => {
  //   loader.style.display = "none";
  // }, 1000);
};

const LoadData = () => {
  const Slider = document.querySelector(".slider");
  Slider.innerHTML = "";
  MoivesJSON.forEach((ele) => {
    let data = `<div class="movie-small-banner">
    <span>${ele.id}</span>
    <img src="${ele.smallBanner}" alt="1_Marvel" />
  </div>`;
    Slider.innerHTML += data;
  });
};
document.addEventListener("DOMContentLoaded", () => {
  LoadData();
  Init();
  ChangeContent(0);
});
