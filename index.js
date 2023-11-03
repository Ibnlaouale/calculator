//les thèmes
const label1 = document.querySelector('.switch__indicator');
const label2 = document.querySelector('.switch__indicator2');
const label3 = document.querySelector('.switch__indicator3');
const body = document.querySelector('#body');
const calculator = document.querySelector('#calculator')
const operator = document.querySelectorAll('#operator');
let scren = document.querySelector('.result')
// console.log(operator);

label1.addEventListener('click', () => {

    body.classList.remove('theme1', 'theme2', 'theme3');
    body.classList.add('theme1');
    calculator.classList.remove('theme1', 'theme2', 'theme3');
    calculator.classList.add('theme1');
});

label2.addEventListener('click', () => {

    body.classList.remove('theme1', 'theme2', 'theme3');
    body.classList.add('theme2');
    calculator.classList.remove('theme1', 'theme2', 'theme3');
    calculator.classList.add('theme2');
});

label3.addEventListener('click', () => {

    body.classList.remove('theme1', 'theme2', 'theme3');
    body.classList.add('theme3');
    calculator.classList.remove('theme1', 'theme2', 'theme3');
    calculator.classList.add('theme3');
});
// ================================================================


let firstNumber = '';
let secondNumber = '';
let sign = '';
// let result = '';
let result = 0;

function appendNumber(val) {

    if (!sign) {
        firstNumber += val;
        scren.value = firstNumber;
        console.log(firstNumber);

    } else {
        secondNumber += val;
        scren.value = secondNumber;
        console.log(secondNumber);
    }

}


const operators = document.querySelectorAll('#operator');


operators.forEach(signe => {
    signe.addEventListener('click', (e) => {

        if (sign !== '' && secondNumber !== '') {
            switch (sign) {
                case '+':
                    console.log(result);
                    result = result
                        ? result + Number(secondNumber)
                        : Number(firstNumber) + Number(secondNumber);
                    scren.value = result.toFixed(2);
                    console.log(result);
                    firstNumber = '';
                    secondNumber = '';
                    break;
                case '-':
                    console.log(result);
                    result = result
                        ? result - Number(secondNumber)
                        : Number(firstNumber) - Number(secondNumber);
                    scren.value = result.toFixed(2);
                    console.log(result);
                    firstNumber = '';
                    secondNumber = '';
                    break;
                case '*':
                    console.log(result);
                    result = result
                        ? result * Number(secondNumber)
                        : Number(firstNumber) * Number(secondNumber);
                    scren.value = result.toFixed(2);
                    console.log(result);
                    firstNumber = '';
                    secondNumber = '';
                    break;
                case '÷':
                    console.log(result);
                    result = result
                        ? result / Number(secondNumber)
                        : Number(firstNumber) / Number(secondNumber);
                    scren.value = result.toFixed(2);
                    console.log(result);
                    firstNumber = '';
                    secondNumber = '';
                    break;
                case '=':
                    scren.value = result.toFixed(2);
                    firstNumber = '';
                    secondNumber = '';
                    break;
            }

        } else {
            sign = e.target.textContent;
            // console.log(sign);
        }
    })
})
// let check = false;
document.querySelector('#point').addEventListener('click', () => {
    if (!scren.value.includes('.')) {
        if (firstNumber == '' && (!sign)) {
            firstNumber += '0.'
            scren.value = firstNumber;
        } else if(firstNumber != '' && (!sign)){
            firstNumber += '.';
            scren.value = firstNumber;   
        } 
        if (firstNumber !='' && secondNumber =='' && (sign)){
            secondNumber += '0.';
            console.log('HHHHH');
            scren.value = secondNumber;
        }else if (secondNumber !='' && (sign)){
            secondNumber += '.';
            scren.value = secondNumber;
        }
       
    }
})
function clean (){
    scren.value = '';
    firstNumber = '';
    sign = '';
    secondNumber = '';

}
function cancel(){
    if(firstNumber != '' && (!sign)){
       firstNumber = firstNumber.slice(0,-1);
        scren.value = firstNumber;
    }
    if (secondNumber !='' && (sign)){
       secondNumber = secondNumber.slice(0,-1);
        scren.value = secondNumber;
    }
}
