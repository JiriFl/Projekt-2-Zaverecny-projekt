const filmDropdown = document.getElementById("select-film");
const vysledkyDiv = document.getElementById("vysledky");

filmDropdown.addEventListener("change", function () {
  const hledaneSlovo = filmDropdown.value;
  const apiUrl = "https://api.tvmaze.com/search/shows?q=" + hledaneSlovo;

  // Získání dat z API
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      vysledkyDiv.innerHTML = ""; // Vymaž předchozí výsledky

      for (let i = 0; i < data.length; i++) {
        let show = data[i].show;
        let obrazek = show.image ? show.image.medium : 'img/placeholder.png';

        // Vytvoření obalového divu
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("film-card");

        // Vytvoření img a nastavení atributů
        const imgEl = document.createElement("img");
        imgEl.src = obrazek;
        imgEl.alt = show.name || "";
        imgEl.classList.add("film-card__img");

        // Vytvoření názvu
        const titleDiv = document.createElement("div");
        titleDiv.textContent = show.name || "";
        titleDiv.classList.add("film-card__title");

        // Sestavení karty
        cardDiv.appendChild(imgEl);
        cardDiv.appendChild(titleDiv);

         // Přidání karty do výsledků
        vysledkyDiv.appendChild(cardDiv);

      }
    });
});
