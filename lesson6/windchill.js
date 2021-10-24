let temp = document.querySelector('#curTemp').innerText;
let speed = document.querySelector('#curSpeed').innerText;

buildWC(speed, temp);

function buildWC(speed, temp) {
    let wcTemp = document.getElementById('windchill');
   
    // Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log('windchill 01: ' + wc);
   
    // Round the answer down to integer
    wc = Math.floor(wc);
    console.log('windchill 02: ' + wc);
   console.log(temp);
    // If chill is greater than temp, return the temp
    wc = (wc > temp) ? temp : wc;
    console.log('windchill 03: ' + wc);
   
    // Display the windchill
    console.log('windchill 04: ' + wc);
    wc = wc+'°F';
    wcTemp.innerHTML = wc;
    }