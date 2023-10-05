// BildeRotasjon JS
document.addEventListener("DOMContentLoaded", function () {
    var produktBilde = document.querySelectorAll(".Effekt1");

    produktBilde.forEach(function (image) {
        var originSrc = image.src;
        var altSrc = "assets/" + image.alt + "Alt.png";

        image.addEventListener("mouseover", function () {
            image.src = altSrc;
        });

        image.addEventListener("mouseout", function () {
            image.src = originSrc;
        });
    });
});

// Søkefelt for å filtrere produkter
document.addEventListener("DOMContentLoaded", function () {
    var searchInput = document.getElementById("searchInput");
    var produkter = document.querySelectorAll(".produkt");

    searchInput.addEventListener("input", function () {
        var searchText = searchInput.value.toLowerCase();

        produkter.forEach(function (produkt) {
            var produktDesc = produkt.querySelector("p").textContent.toLowerCase();

            if (produktDesc.includes(searchText)) {
                produkt.style.display = "block";
            } else {
                produkt.style.display = "none";
            }
        });
    });
});
