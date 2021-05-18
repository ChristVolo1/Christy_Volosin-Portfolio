const portfolioContainer = document.querySelector(".portfolio")

portfolioContainer.addEventListener("click", (e) => {
  const modalToggle = e.target.closest(".portfolio-btn");

  if (!modalToggle) return;

  const modal = modalToggle.nextElementSibling;

  const closeButton = document.querySelectorAll(".modal-close");

  modal.classList.add("is-open");

  closeButton.forEach((button) => {
    button.addEventListener("click", (_) => {
      modal.classList.remove("is-open");
    });
  });
});
