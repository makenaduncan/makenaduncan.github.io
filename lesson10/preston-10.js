// Toggle Menu Code
function toggleMenu() {
    var hamburger = document.querySelector("#main-navigation");
    if (hamburger.className === "main-nav") {
        hamburger.className += " responsive";
    } 
    else {
        hamburger.className = "main-nav";
    }
}

// Weather API Code
const apiKey = "2a7fa7e1f8aad6f5d62a78519050b029";
let cityId = "5604473";

let prestonLink = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=imperial`;

fetch(prestonLink)
.then(response => {
    if (response.ok) {
        return response.json();
    }
    else {
        throw new Error("Network Response was Not Ok");
    }
})
.then(data => {
    console.log(data);
    let tempContent = document.querySelector("#temp");
    let windSpeedContent = document.querySelector("#windSpeed");
    let humidityContent = document.querySelector("#humidity");
    let descriptionContent = document.querySelector("#description");

    let windSpeed = Math.round(data.wind.speed);
    let temp = Math.round(data.main.temp);
    let humidity = data.main.humidity;
    let description = data.weather[0].description;

    windSpeedContent.textContent = windSpeed;
    tempContent.textContent = temp;
    humidityContent.textContent = humidity;
    descriptionContent.textContent = description;
    buildWC(windSpeed, temp);
});

// Wind Chill Code

function buildWC(speed, temp) {
    let wcTemp = document.querySelector('#windchill');

    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    wc = Math.floor(wc);

    wc = (wc > temp)?temp:wc;
    wcTemp.innerHTML = wc;
}

// 5 Day Forecast Code


let forecastLink = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=imperial`;

fetch(forecastLink)
.then(response => {
    if (response.ok) {
        return response.json();
    }
    else {
        throw new Error("Network Response was Not Ok");
    }
})
.then(data => {
    console.log(data);
    var dayIndex = new Date().getDay() + 1;
    var weekdayForecast = new Array(
            "Sun", 
            "Mon", 
            "Tues", 
            "Wed",
            "Thurs", 
            "Fri", 
            "Sat"
            );
    
    var forecastIndex = 6;

    for (i=0; i < 5; i++) {
        
        // Day of the week
        let dayForecast = weekdayForecast[dayIndex]
        let forecast = document.querySelector("#five-day-forecast");
        let day = document.createElement("div");
        let dayOfWeek = document.createElement("h2");
        dayOfWeek.innerHTML = dayForecast;

        // Image
        let imagesrc = 'https://openweathermap.org/img/w/' + data.list[forecastIndex].weather[0].icon + '.png'; 
        let desc = data.list[forecastIndex].weather[0].description;  
        let icon = document.createElement("img");
        icon.setAttribute("src", imagesrc);
        icon.setAttribute("alt", desc);

        // Forecast temperature
        let temp = document.createElement("p");

        let forecastTemp = `${Math.round(data.list[forecastIndex].main.temp)} &deg;F`

        temp.innerHTML = forecastTemp;

        // Append elements to forecast
        day.appendChild(dayOfWeek);
        day.appendChild(icon);
        day.appendChild(temp);
        forecast.appendChild(day);

        // Adjust indexes for next loop
        forecastIndex += 8;
        dayIndex++;
        
        if (dayIndex > 6) {
            dayIndex = 0;
        }
    }


})

// Lazy Loading Code
let imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
  threshold: 0.1
}
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);

  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

// Pancake Banner Code
let literallyToday = new Date()
let today = literallyToday.getDay();

if (today == 5) {
    document.querySelector(".pancake").innerHTML = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion"
}
else {
    document.querySelector(".pancake").classList.remove("pancake");
}

// Last Updated Code
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