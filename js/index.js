const testimonials = document.querySelectorAll(".testimonial");

let index = 0;
setInterval(() => {
  testimonials.forEach((testimonial) => {
    testimonial.classList.remove("active");
  });
  testimonials[index].classList.add("active");
  index = index === testimonials.length - 1 ? 0 : index + 1;
}, 3000);
