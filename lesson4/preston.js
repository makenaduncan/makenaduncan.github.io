function toggleMenu() {
    var hamburger = document.querySelector("#main-navigation");
    if (hamburger.className === "main-nav") {
        hamburger.className += " responsive";
    } else {
        hamburger.className = "main-nav";
    }
}

const yearspan = document.getElementById("year")

let currentDate = new Date();

yearspan.innerHTML = currentDate.getFullYear(); 