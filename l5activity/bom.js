const list = document.querySelector('ul');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', pressButton);

function pressButton() {
    let myInput = input.value;
    
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    if (myInput != '') {
    
        listItem.appendChild(listText);
        listText.textContent = myInput;
        
        listItem.appendChild(listBtn);
        listBtn.textContent = '❌';
        list.appendChild(listItem);
    }

    listBtn.onclick = function(e) {
        list.removeChild(listItem);
    }

    input.focus();
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