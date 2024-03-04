// Hent referanse til scroll-to-top-knappen
var scrollToTopButton = document.getElementById("scroll-to-top");

// Legg til en lytter for å sjekke scrollposisjonen
window.addEventListener("scroll", function() {
    // Hvis scrollposisjonen er større enn 300 piksler, vis knappen
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Legg til en klikk-lytter for knappen
scrollToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", function() {
  var navbar = document.querySelector("");
  if (window.scrollY > 100) { 
      navbar.classList.add("sticky");
  } else {
      navbar.classList.remove("sticky");
  }
});

