const portfolioContainer = document.querySelector(".portfolio")

portfolioContainer.addEventListener('click', e => {
    /* console.log(e) */
    /* e.preventDefault() */

    const modalToggle = e.target.closest('.portfolio-btn')
    /* console.log(modalToggle) */
    if (! modalToggle) return

    const modal = modalToggle.nextElementSibling
    /* console.log(modal) */
    const closeButton = document.querySelector(".modal-close")

    modal.classList.add("is-open")

    /* closeButton.addEventListener('click', _ => {
        modal.classList.remove('is-open') */
        closeButton.forEach((button) => {
            button.addEventListener("click", _ => {
              modal.classList.remove("is-open");
            });
    });

});
