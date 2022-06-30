const testimonials = document.querySelectorAll(".testimonial");
const indicators = document.querySelectorAll(".indicator");

let index = 0;
setInterval(() => {
  testimonials.forEach((testimonial) => {
    testimonial.classList.remove("active");
  });
  indicators.forEach((indicator) => {
    indicator.classList.remove("active");
  });
  testimonials[index].classList.add("active");
  indicators[index].classList.add("active");
  index = index === testimonials.length - 1 ? 0 : index + 1;
}, 3000);
