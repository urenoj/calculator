let viewfinderContent = document.getElementById('viewfinder-content');

let clearButton = document.getElementById('clear');

clearButton.addEventListener('click', function() {
    viewfinderContent.innerText = '';
});

let deleteButton = document.getElementById('delete');

deleteButton.addEventListener('click', function() {
    let str = viewfinderContent.innerText;
    let newStr = str.slice(0, -1);
    viewfinderContent.innerText = newStr;
});