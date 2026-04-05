const input = document.querySelector('#favchap');
const button = document.querySelector('#addButton');
const list = document.querySelector('#list');

let chapterArray = getChapterList() || [];

chapterArray.forEach(chapter => {
  displaylist(chapter);
});

button.addEventListener('click', function() {
    if (input.value.trim() !== ''){
        displaylist(input.value)
        chapterArray.push(input.value);
        setChapterList();
        // input.value = '';
        input.focus();
    }
    else {
    input.focus()
    }
});

function displaylist(item) {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = item;
        deleteButton.textContent = '❌';
        li.appendChild(deleteButton);
        list.appendChild(li);
            deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            deletChapter(li.textContent);
            input.focus();
            });
};

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chapterArray));
}
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList')) || [];
}
function deletChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chapterArray = chapterArray.filter(item => item !== chapter);
    setChapterList();
}