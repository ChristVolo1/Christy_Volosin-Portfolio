const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
const translate = document.querySelectorAll(".translate");

/* const window = document.querySelectorAll("window"); */

/* Toggle Menu open */

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

/* Close Toggle Menu when link is clicked */

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

/* Detect all clicks on the document and close toggle menu*/

/* window.addEventListener('click', () => {
  if
  document.body.classList.remove('nav-open');
}); */

/* Intro Parallax */

window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset;
  
  translate.forEach(element => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });
});


