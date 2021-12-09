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

// Slideshow Code
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Second Slideshow
var photoIndex = 1;
showPhotos(photoIndex);

// Next/previous controls
function plusPhotos(n) {
  showPhotos(photoIndex += n);
}

// Thumbnail image controls
function currentPhoto(n) {
  showPhotos(photoIndex = n);
}

function showPhotos(n) {
  var i;
  var photos = document.getElementsByClassName("town-carousel");
  var circle = document.getElementsByClassName("circle");
  if (n > photos.length) {photoIndex = 1}
  if (n < 1) {photoIndex = photos.length}
  for (i = 0; i < photos.length; i++) {
      photos[i].style.display = "none";
  }
  for (i = 0; i < circle.length; i++) {
      circle[i].className = circle[i].className.replace(" active", "");
  }
  photos[photoIndex-1].style.display = "block";
  circle[photoIndex-1].className += " active";
}

// Insert Weather API code for IF (3 Day Forecast)

const weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=43.4927&lon=112.0408&exclude=minutely,hourly&units=imperial&appid=d62090c152500bb24998f65e1b56640a";

fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log('API loaded successfully');
        // console.log(jsObject);

        // Currently
        let currentTemp = jsObject.current.temp.toFixed(0);
        let condition = jsObject.current.weather[0].main;
        let humidity = jsObject.current.humidity;

        document.querySelector('#temp').innerText = currentTemp;
        document.querySelector('#condition').innerText = condition;
        document.querySelector('#humidity').innerText = humidity;

        // 3-day Forecast
        let index = 1;
        let dayName = "Day";

        for(let i = 0; i < 3; i++) {
            // Day
            let date = new Date(jsObject.daily[i].dt * 1000)
            let dayValue = date.getDay()    
            switch(dayValue) {
                case 0: dayName = 'SUN'; break;
                case 1: dayName = 'MON'; break;
                case 2: dayName = 'TUE'; break;
                case 3: dayName = 'WED'; break;
                case 4: dayName = 'THU'; break;
                case 5: dayName = 'FRI'; break;
                case 6: dayName = 'SAT'; break;
                default: dayName = 'Error';
            }

            let dayID = 'forecast-day-' + index;
            document.getElementById(dayID).innerText = dayName;

            // Temperature
            let tempValue = jsObject.daily[i].temp.day.toFixed(0);
            let tempID = 'forecast-temp-' + index;
            document.getElementById(tempID).innerText = tempValue + '°F';
            index++;
        }

    });

