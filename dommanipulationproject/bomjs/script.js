const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function(){
    let myScripture = input.value;
    input.value = '';

const listScripture = document.createElement('li');
const listText = document.createElement('span');
const listBtn = document.createElement('button');

listScripture.appendChild(listText);
listText.textContent = myScripture;
listScripture.appendChild(listBtn);
listBtn.textContent = '❌';
list.appendChild(listScripture);

listBtn.onclick = function(e){
    list.removeChild(listScripture);
}

input.focus();
})