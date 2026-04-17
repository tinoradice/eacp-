const items = document.querySelectorAll(".fade-up");

function showOnScroll() {
  const trigger = window.innerHeight * 0.9;

  items.forEach((item) => {
    const top = item.getBoundingClientRect().top;
    if (top < trigger) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
