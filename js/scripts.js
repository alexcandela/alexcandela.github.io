document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute("href"));
    const offset = targetElement.offsetTop;
    const windowHeight = window.innerHeight;
    const targetPosition = offset - (windowHeight / 2) + (targetElement.offsetHeight / 2);

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

