let skillSpans = document.querySelectorAll(".skill-rate");
skillSpans.forEach(function (span) {
  let rate = span.parentElement.parentElement.querySelector(".progress-bar");
  span.textContent = rate.getAttribute("aria-valuenow");
});
let sectionProgress = document.querySelector(".progress-section");
let spans = document.querySelectorAll(".progress-bar");

window.addEventListener("scroll", function () {
  if (
    window.scrollY >=
    sectionProgress.offsetTop - sectionProgress.offsetHeight * 2
  ) {
    spans.forEach((span) => {
      span.style.width = span.getAttribute("aria-valuenow");
    });
  } else {
    spans.forEach((span) => {
      span.style.width = 0;
    });
  }
});
let nums = document.querySelectorAll(".numbers-section .number");
let section = document.querySelector(".numbers-section");
let started = false; // Function Started ? No

window.addEventListener("scroll", function () {
  if (window.scrollY >= section.offsetTop - section.offsetHeight * 2) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
});
function startCount(el) {
  let goal = el.dataset.number;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
let filterButtons = document.querySelectorAll(
  ".portfolio-section .list-group-item"
);
let filterImages = document.querySelectorAll(".portfolio-section figure");
filterButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    filterButtons.forEach((button) => button.classList.remove("active"));
    e.target.classList.add("active");
    filterImages.forEach(
      (image) => (image.style.cssText = "display: none !important;")
    );
    e.target.parentElement.parentElement
      .querySelectorAll("." + e.target.dataset.filter)
      .forEach((item) => (item.style.cssText = "display: flex !important;"));
  });
});
function obs() {
  let animationElements = document.querySelectorAll(".my-anime");
  function viewPort(inView) {
    let animations = ["fadeIn1", "fadeIn2", "fadeIn3"];
    inView.forEach(function (ele) {
      if (ele.isIntersecting) {
        if (
          ele.target.classList.contains("fadeIn1") ||
          ele.target.classList.contains("fadeIn2") ||
          ele.target.classList.contains("fadeIn3")
        ) {} else {
          ele.target.classList.add(
            animations[Math.floor(Math.random() * animations.length)]
          );
        }
      } else {
        ele.target.classList.remove("your-active-class");
      }
    });
  }

  let options = {
    threshold: [0.6],
  };

  let observer = new IntersectionObserver(viewPort, options);

  animationElements.forEach(function (section) {
    observer.observe(section);
  });
}
obs();
