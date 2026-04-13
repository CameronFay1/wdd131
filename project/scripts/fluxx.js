const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

let visits = Number(localStorage.getItem("visits")) || 0;
visits++;
localStorage.setItem("visits", visits);
document.getElementById('visits').textContent = `pages viewed: ${visits}`;

let games = getlist() || [];
const input = document.querySelector('#game');
const list = document.querySelector('#list');
const button = document.querySelector('#button');

games.forEach(element => {
    displaylist(element);
});
if (button) {
    button.addEventListener('click', function() {
        if (input.value.trim() !== ''){
            displaylist(input.value)
            games.push(input.value);
            setList();
            input.focus();
        }
        else {
        input.focus()
        }
    });
}
function displaylist(element){
            const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = element;
        deleteButton.textContent = '❌';
        li.appendChild(deleteButton);
        list.appendChild(li);
        deleteButton.addEventListener('click', function() {
        list.removeChild(li);
        delet(li.textContent);
        input.focus();
            });
};

function getlist() {
    return JSON.parse(localStorage.getItem('gameList')) || [];
};
function setList() {
localStorage.setItem('gameList', JSON.stringify(games));
};
function delet(element) {
    element = element.slice(0, element.length - 1);
    games = games.filter(item => item !== element);
    setList();
}