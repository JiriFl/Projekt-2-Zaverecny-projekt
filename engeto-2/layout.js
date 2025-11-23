// Funkce pro načítání části kódu – header a footer
function loadFragment(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((html) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = html;
    })
    .catch((err) => console.error("Chyba při načítání", file, err));
}

// Provedení funkce
document.addEventListener("DOMContentLoaded", () => {
  loadFragment("header", "header.html");
  loadFragment("footer", "footer.html");
});
