function toggleMenu() {
    var hamburger = document.querySelector("#main-navigation");
    if (hamburger.className === "main-nav") {
        hamburger.className += " responsive";
    } else {
        hamburger.className = "main-nav";
    }
}

// Current year for copyright in Footer
const yearspan = document.getElementById("year")

let currentDate = new Date();

yearspan.innerHTML = currentDate.getFullYear(); 


const lastModified = new Date(document.lastModified);

// Last Updated Code for Footer
var weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", "Saturday");
var months = new Array("January", "February", "March",
"April", "May", "June", "July", "August", "September",
 "October", "November", "December");
var day = lastModified.getDay();
var day = weekday[day];
var month = lastModified.getMonth();
var month = months[month];

var lastUpdated = day + ', ' + lastModified.getDate() + ' ' + month + " " + lastModified.getFullYear();

document.getElementById("lastModified").textContent = lastUpdated;