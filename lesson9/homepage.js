// Allows the menu to expand and retract
function toggleMenu() {
    var hamburger = document.querySelector("#main-navigation");
    if (hamburger.className === "main-nav") {
        hamburger.className += " responsive";
    } 
    else {
        hamburger.className = "main-nav";
    }
}

let d = new Date(document.lastModified);

// Keeps copyright date up to date
document.getElementById('current-year').innerText = "\u00A9" + d.getFullYear() + " Silver Lining Weather | Makena Duncan |";

// Updates "Last Updated" on mist pages with correct formatting
let months = [ "January", "February", "March",
               "April", "May", "June", "July",
               "August", "September", "October",
               "November", "December" ];

let days = [ "Sunday", "Monday", "Tuesday",
             "Wednesday", "Thursday",
             "Friday", "Saturday" ];

let monthName = months[d.getMonth()];
let dayName = days[d.getDay()];
let year = d.getFullYear();
let lastUpdated = `${dayName}, ${d.getDate()} ${monthName} ${year}`;

document.getElementById("last-updated").innerHTML = "Last Updated: " + lastUpdated;  