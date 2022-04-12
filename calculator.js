let activeOperand = '';
let storedOperand = '';
let operator = '';
let selected = false;

let displayContent = document.getElementById('display-content');
let clearButton = document.getElementById('clear');

clearButton.addEventListener('click', function() {
    displayContent.innerText = '';
    activeOperand = '';
    storedOperand = '';
    operator = '';
    selected = false;
});

let deleteButton = document.getElementById('delete');

deleteButton.addEventListener('click', function() {
    let str = displayContent.innerText;
    let newStr = str.slice(0, -1);
    displayContent.innerText = newStr;
    activeOperand = Number(displayContent.innerText);
});

let numbers = document.querySelectorAll('.number');

for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
        if(selected) {
            if(displayContent.innerText === '') {
                displayContent.innerText += numbers[i].innerText;
            }
            else {
                displayContent.innerText = '';
                displayContent.innerText += numbers[i].innerText;
            }
            selected = false;            
            activeOperand = Number(displayContent.innerText);
        }
        else {
            if(displayContent.innerText === '0') {
                displayContent.innerText = '';
                displayContent.innerText += numbers[i].innerText;
                activeOperand = Number(displayContent.innerText);
            }
            else {
                displayContent.innerText += numbers[i].innerText;
                activeOperand = Number(displayContent.innerText);
            }
        }
    });
}

function round(num) {
    return Math.round(num * 100)/ 100;
}

function operate(first, second) {
   if(operator === '+') {
       displayContent.innerText = round(second + first);
   }
   else if(operator === '-') {
       displayContent.innerText = round(second - first);
   }
   else if(operator === '÷') {
       if(activeOperand === 0) {
           console.log('test');
           alert('You can\'t divide by 0!');
           clearButton.click();
       }
       else {
           displayContent.innerText = round(second / first);
       }
    }
   else if(operator === '*') {
       displayContent.innerText = round(second * first);
   }
}

let operators = document.querySelectorAll('.operator');

for(let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function() {
        if(selected) {
            storedOperand = activeOperand;
            activeOperand = '';
        }
        else {
            operate(activeOperand, storedOperand);
            selected = true;
            operator = operators[i].innerText;
            activeOperand = Number(displayContent.innerText);
            storedOperand = activeOperand; // storing last number on display
        }
    });
}

let equals = document.querySelector('#equals');

equals.addEventListener('click', function() {
    operate(activeOperand, storedOperand);
    operator = '';
    selected = false;
    activeOperand = Number(displayContent.innerText);
    storedOperand = '';
});
