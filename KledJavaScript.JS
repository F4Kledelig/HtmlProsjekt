// BildeEndring Hover JS
document.addEventListener("DOMContentLoaded", function () {
    var produktBilde = document.querySelectorAll(".Effekt1");

    produktBilde.forEach(function (image) {
        var originSrc = "Assets/" + image.alt + ".png";         /* Eksempel:  Assets/ + capsdalle + .png   = Assets/capsdalle.png */ 
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
// Oopsies, did a bit too much trolling
document.querySelectorAll('.kles-bildebokser2').forEach(function(box) {
    const img = box.querySelector('.Effekt2');
    const gif = box.querySelector('.gif');
  
    box.addEventListener('mouseenter', function() {
      gif.src = img.getAttribute('data-src');
      gif.style.display = 'block';
      img.style.display = 'none';
    });
  
    box.addEventListener('mouseleave', function() {
      gif.src = '';
      gif.style.display = 'none';
      img.style.display = 'block';
    });
  });
// Alle bilder under produkter klikkbar til Abonner.html
const images = document.querySelectorAll('.kles-bildebokser2 img');
images.forEach(img => {
    const anchor = document.createElement('a');
    anchor.href = 'Abonner.html';
    img.parentNode.insertBefore(anchor, img);
    anchor.appendChild(img);
});

// Dropdown meny
// Når bruker trykker på knappen,
// toggle mellom gjemt og visende dropdown innhold
function myFunction() {
  var dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

// Lukk dropdown hvis brukeren trykker utenfor menyen
window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }
}



//lytter etter DOMContentLoaded, sikkrer at koden kjører etter at siden har fullstendig lastet 
document.addEventListener("DOMContentLoaded",function(){
   //velger alle elemnter med klassen"abonnering-type"og legger dem i abonneringdivs.
  var AbonneringDivs = document.querySelectorAll(".abonnering-type");

  AbonneringDivs.forEach(function(div){
    //mousover, hendelselyter som endrer tekst fargen til blå når musepekeren svever over elemntet.
    div.addEventListener("mouseover",function(){
      div.style.color= "blue";
    })
    //mousout,hendelselyter som gjennomretter tekstfargen til svart musepekeren forlater elementet.
    div.addEventListener("mouseout", function(){
      div.style.color = "white";
    })
    // click,hendelselyter som henter mål URLen fra "data-link"  i attributtet og navigere til den når elemente klikkes.  
    div.addEventListener("click",function(){
      var targetURL = div.getAttribute("data-link");
      window.location.href = targetURL;
    })
 })
})