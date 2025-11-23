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
        let obrazek = show.image.medium;


        // Vytvoření obalového divu
        const cardDiv = document.createElement("div");
        cardDiv.style.display = "inline-block";
        cardDiv.style.margin = "14px";
        cardDiv.style.textAlign = "center";

        // Vytvoření img a nastavení atributů
        const imgEl = document.createElement("img");
        imgEl.src = obrazek;
        imgEl.style.width = "200px";
        imgEl.style.height = "280px";

        // Vytvoření názvu
        const titleDiv = document.createElement("div");
        titleDiv.style.color = "white";

        // Sestavení karty
        cardDiv.appendChild(imgEl);
        cardDiv.appendChild(titleDiv);

        // Přidání karty do výsledků
        vysledkyDiv.appendChild(cardDiv);
      }
    });
});
