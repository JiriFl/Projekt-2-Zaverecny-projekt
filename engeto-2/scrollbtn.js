// Odkaz na tlačítko
const scrollBtn = document.querySelector(".fa-circle-up");

// Funkce pro detekci srolování
window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Akce po kliknutí na tlačítko
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
