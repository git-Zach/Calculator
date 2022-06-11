const button9 = document.getElementById('9');
const button8 = document.getElementById('8');
const button7 = document.getElementById('7');
const button6 = document.getElementById('6');
const button5 = document.getElementById('5');
const button4 = document.getElementById('4');
const button3 = document.getElementById('3');
const button2 = document.getElementById('2');
const button1 = document.getElementById('1');
const button0 = document.getElementById('0');
const buttons = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.getElementById('equals');

let op = '';
let x = '';
let newX = '';
let y = '';

for (const operator of operators) {
    operator.addEventListener('click', () => {
        op = operator.getAttribute('data-type')
         newX = x
        for (const button of buttons) {
            button.addEventListener('click', () => {
                y += button.getAttribute('data-type')
                    console.log("y time");
            
        })};
    })
};

    for (const button of buttons) {
        button.addEventListener('click', () => {
            x += button.getAttribute('data-type')

                
    })};







console.log(y);





equals.addEventListener('click', () => {
    newX = parseInt(newX, 10);
    y = parseInt(y, 10);
    switch (op) {
        case('+'):      console.log(eval(`${newX} + ${y}`))
                        break;
        case('*'):      console.log(eval(`${newX} * ${y}`))
                        break;      

        case('-'):      console.log(eval(`${newX} - ${y}`))
                        break;      
        case('/'):      console.log(eval(`${newX} / ${y}`))
                        break;      



    }
         



})