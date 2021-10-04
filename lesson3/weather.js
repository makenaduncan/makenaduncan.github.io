const yearspan = document.getElementById("year")
const datespan = document.getElementById("date")

let currentDate = new Date();

datespan.innerHTML = `${currentDate.getMonth() +1}/${currentDate.getDate()}/${currentDate.getFullYear()} ${currentDate.toLocaleTimeString()}`; //backtick allows you to inject things with ${} like the f string in python

yearspan.innerHTML = currentDate.getFullYear(); 