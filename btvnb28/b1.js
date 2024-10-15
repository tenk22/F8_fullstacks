const dataSlide = [
  {
    id: 1,
    title: "Slide 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.",
    image: "https://placehold.co/800x400?text=Slide+1",
  },
  {
    id: 2,
    title: "Slide 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ratione?",
    image: "https://placehold.co/800x400?text=Slide+2",
  },
  {
    id: 3,
    title: "Slide 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, magnam.",
    image: "https://placehold.co/800x400?text=Slide+3",
  },
  {
    id: 4,
    title: "Slide 4",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, illum?",
    image: "https://placehold.co/800x400?text=Slide+4",
  },
  {
    id: 5,
    title: "Slide 5",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, magnam.",
    image: "https://placehold.co/800x400?text=Slide+5",
  },
];

const carouselInner = document.querySelector(".carousel-inner");
const dotsContainer = document.querySelector(".process");
let currSlide = 0;
let intervalId = null;

dataSlide.forEach((slide, index) => {
  const slideElement = document.createElement("div");
  slideElement.classList.add("slide");
  slideElement.innerHTML = `
        <img src="${slide.image}" alt="Slide ${slide.id}" />
        <div class="slide-content">
          <h2>${slide.title}</h2>
          <p>${slide.content}</p>
        </div>
      `;
  carouselInner.appendChild(slideElement);

  const dotElement = document.createElement("div");
  dotElement.addEventListener("click", () => setSlideByDot(index));
});

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function renderSlide() {
  slides.forEach((slide, index) => {
    slide.style.display = "none";
  });
  slides[currSlide].style.display = "block";

  dots.forEach((dot, index) => {
    dot.style.background = "green";
  });
  dots[currSlide].style.background = "orange";
}

function next() {
  currSlide = (currSlide + 1) % dataSlide.length;
  renderSlide();
}

function prev() {
  currSlide = (currSlide - 1 + dataSlide.length) % dataSlide.length;
  renderSlide();
}

function setSlideByDot(index) {
  currSlide = index;
  renderSlide();
}

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

function startAutoSlide() {
  intervalId = setInterval(next, 3000);
}

function stopAutoSlide() {
  clearInterval(intervalId);
}
startAutoSlide();
renderSlide();
