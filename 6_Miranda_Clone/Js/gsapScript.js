const scroll = new LocomotiveScroll({
  el: document.querySelector("#Outer"),
  smooth: true,
});

let t1 = gsap.timeline();

t1.to("#main", {
  y: "100vh",
  scale: 0.4,
});

t1.to("#main", {
  y: "-230vh",
  duration: 1,
  delay: 1,
});
t1.to("#main", {
  rotate: 360,
  duration: 2,
  delay: 0.6,
  y: 0,
  scale: 1,
});

let FeedBackCards = document.querySelectorAll(".feedback-card");

// function to move elements forward
function Move(elementNo) {
  for (let i = elementNo; i < FeedBackCards.length; i++) {
    FeedBackCards[i].style.transform = `translateX(40%)`;
  }
}

// function to move elements backward
function MoveReverse(elementNo) {
  for (let i = elementNo; i < FeedBackCards.length; i++) {
    FeedBackCards[i].style.transform = `translateX(0)`;
  }
}

// Add event listeners to all feedback cards dynamically
FeedBackCards.forEach((card, index) => {
  card.addEventListener("mouseover", () => {
    Move(index + 1);
  });

  card.addEventListener("mouseout", () => {
    MoveReverse(index + 1);
  });
});
