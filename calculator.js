let firstOperand = '';
let secondOperand = '';
let operator = '';
let selected = false;

let viewfinderContent = document.getElementById('viewfinder-content');
let clearButton = document.getElementById('clear');

clearButton.addEventListener('click', function() {
    viewfinderContent.innerText = '';
    firstOperand = 0;
    secondOperand = 0;
    operator = '';
    selected = false;
});

let deleteButton = document.getElementById('delete');

deleteButton.addEventListener('click', function() {
    let str = viewfinderContent.innerText;
    let newStr = str.slice(0, -1);
    viewfinderContent.innerText = newStr;
    firstOperand = Number(viewfinderContent.innerText);
});

let buttons = document.querySelectorAll('.button');

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        if(selected) {
            if(viewfinderContent.innerText === '') {
                viewfinderContent.innerText += buttons[i].innerText;
            }
            else {
                viewfinderContent.innerText = '';
                viewfinderContent.innerText += buttons[i].innerText;
            }
            firstOperand = Number(viewfinderContent.innerText);
            operate(firstOperand, secondOperand);
            selected = false;
            operator = '';
        }
        else {
            viewfinderContent.innerText += buttons[i].innerText;
            firstOperand = Number(viewfinderContent.innerText);
        }
    });
}

function operate(first, second) {
   if(operator === '+') {
       viewfinderContent.innerText = second + first;
   }
   else if(operator === '-') {
       viewfinderContent.innerText = second - first;
   }
   else if(operator === '÷') {
       viewfinderContent.innerText = second / first;
   }
   else if(operator === '*') {
       viewfinderContent.innerText = second * first;
   }
}

let operators = document.querySelectorAll('.operator');

for(let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function() {
        if(selected) {
            secondOperand = firstOperand;
            firstOperand = '';
        }
        else {
            selected = true;
            operator = operators[i].innerText;
            secondOperand = firstOperand;
        }
    });
}

let equals = document.querySelector('#equals');

equals.addEventListener('click', function() {
    operate(firstOperand, secondOperand);
});
