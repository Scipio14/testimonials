const d = document;
const slides = d.querySelectorAll(".slide-container");
const $next = d.getElementById("next");
const $prev = d.getElementById("prev");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

//console.log(slides, $next, $prev);

$next.addEventListener("click", () => next());
$prev.addEventListener("click", () => prev());
