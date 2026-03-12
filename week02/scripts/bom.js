const input = document.querySelector('#favchap');
const button = document.querySelector('#addButton');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value.trim() !== ''){
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';
        
                deleteButton.addEventListener('click', function() {
                list.removeChild(li);
                input.value = '';
                input.focus();
                });

        li.appendChild(deleteButton);
        list.appendChild(li);

        input.value = '';
        input.focus();
    }
    else {
    input.focus()
    }
});
