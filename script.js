const navToggle = document.querySelector(".nav-toggle");
/* const navLinks = document.querySelectorAll(".nav__link"); */
const translate = document.querySelectorAll(".translate");

/* Toggle Menu open */

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

/* $(".nav-toggle").click(function () {
  $(".nav").toggleClass("nav-open", 500);
   $(this).toggleClass("open");
}); */


/* Intro Parallax */

window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset;
  
  translate.forEach(element => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });
});


