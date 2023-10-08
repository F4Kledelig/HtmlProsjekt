// BildeRotasjon JS
document.addEventListener("DOMContentLoaded", function () {
    var produktBilde = document.querySelectorAll(".Effekt1");

    produktBilde.forEach(function (image) {
        var originSrc = "Assets/" + image.alt + ".png";
        var altSrc = "assets/" + image.alt + "Alt.png";

        image.style.transition = "0.5s"; // Add a 0.5s transition to the image

        image.addEventListener("mouseover", function () {
            image.style.opacity = 0; // Fade out the image
            setTimeout(function () {
                image.src = altSrc; // Change the source after the fade
                image.style.opacity = 1; // Fade in the new image
            }, 500); // Delay changing the source by 0.5 seconds (500 milliseconds)
        });

        image.addEventListener("mouseout", function () {
            image.style.opacity = 0; // Fade out the image
            setTimeout(function () {
                image.src = originSrc; // Change the source after the fade
                image.style.opacity = 1; // Fade in the original image
            }, 500); // Delay changing the source by 0.5 seconds (500 milliseconds)
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
