const slider = document.querySelector(".slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slides = document.querySelectorAll(".slider img");
const progressBars = document.querySelectorAll(".progress-bar");

let currentSlide = 0;
const totalSlides = slides.length;

function updateSlide() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateProgressBars();
}

function updateProgressBars() {
  progressBars.forEach((bar, index) => {
    bar.classList.toggle("active", index === currentSlide);
  });
}

function goToSlide(index) {
  currentSlide = index;
  updateSlide();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlide();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

progressBars.forEach((bar, index) => {
  bar.addEventListener("click", () => goToSlide(index));
});

updateSlide();
