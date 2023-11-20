// Scroll to Top button functionality
let scrollToTop = document.getElementById("scrollToTop");

scrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 250) {
    scrollToTop.classList.add("show-button");
  } else {
    scrollToTop.classList.remove("show-button");
  }
});
