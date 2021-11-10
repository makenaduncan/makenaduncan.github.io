const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL) //Tells it where it fetch from 
    .then(function (response) { //This is where it will be stored
        if(response.ok) { //This means that everything worked. This is all that we are interested in
            return response.json();
        }
        throw new ERROR('Network response was not ok');
    })

    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];  

        for (let i = 0; i < prophets.length; i++ ) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let birthDate = document.createElement('p');
            let birthPlace = document.createElement('p');
            let image = document.createElement('img');
  
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            card.appendChild(h2);
            birthDate.textContent = "Place of Birth: " + prophets[i].birthplace;
            card.appendChild(birthPlace);
            birthPlace.textContent = "Date of Birth: " + prophets[i].birthdate;
            card.appendChild(birthDate);
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', prophets[i].name + " " + prophets[i].lastname + " - " + (i + 1));
            card.appendChild(image);
      
            document.querySelector('div.cards').appendChild(card);
        }
    })

.catch(function(error){
    console.log('Fetch error: ', error.message);
})