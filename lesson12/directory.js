//list-grid toggle button
var cards = document.getElementById("cards");

document.addEventListener("click", function (event) {
  if (!event.target.matches(".list")) return;

  // List view
  event.preventDefault();
  cards.classList.add("list");
});

document.addEventListener("click", function (event) {
  if (!event.target.matches(".grid")) return;

  // List view
  event.preventDefault();
  cards.classList.remove("list");
});

// Pulling info from json file
const requestURL = 'directory.json';

fetch(requestURL)
    .then(function(response) {
        if (response.ok) {
            return response.json();
        }
        throw new ERROR('Network response was not ok');
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const businesses = jsonObject['businesses'];


        for (let i = 0; i < businesses.length; i++) {
            let name = businesses[i].name;
            name = String(name);
              
              let card = document.createElement('section');
              card.classList.add('card');
              
              let data = document.createElement('div');
              data.classList.add('data');
              
              let h2 = document.createElement('h2');
              let cp = document.createElement('p');
              let ar = document.createElement('p');
              let index = document.createElement('p');
              let image = document.createElement('img');

              h2.textContent = businesses[i].name;
              index.textContent = businesses[i].motto;
              cp.textContent = 'Contact business here: ' + businesses[i].contact;
              ar.textContent = 'Website: ' + businesses[i].website;
              if (businesses[i].photo != "null") {
                image.setAttribute('src', businesses[i].photo);
                image.setAttribute('alt', businesses[i].name + ' logo');
              }

              card.appendChild(h2);
              if (businesses[i].photo != "null") {
                card.appendChild(image);
              }
              card.appendChild(data);
              data.appendChild(index);
              data.appendChild(cp);
              data.appendChild(ar);
              
              document.querySelector('.cards').appendChild(card);
            
        }
    })
    .catch(function(error) {
        console.log('Fetch error: ', error.message);
    })