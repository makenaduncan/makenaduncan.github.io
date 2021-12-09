// Last Updated Code
let d = new Date(document.lastModified);

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