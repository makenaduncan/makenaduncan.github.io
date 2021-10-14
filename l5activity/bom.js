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