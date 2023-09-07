//les thèmes
const label1 = document.querySelector('.switch__indicator');
const label2 = document.querySelector('.switch__indicator2');
const label3 = document.querySelector('.switch__indicator3');
const body = document.querySelector('#body');
const calculator = document.querySelector('#calculator')
const operator =  document.querySelectorAll('#operator');
// console.log(operator);

label1.addEventListener('click' ,()=>{

    body.classList.remove('theme1', 'theme2', 'theme3');
    body.classList.add('theme1');
    calculator.classList.remove('theme1', 'theme2', 'theme3');
    calculator.classList.add('theme1');
});

label2.addEventListener('click' ,()=>{

    body.classList.remove('theme1', 'theme2', 'theme3');
    body.classList.add('theme2');
    calculator.classList.remove('theme1', 'theme2', 'theme3');
    calculator.classList.add('theme2');
});

label3.addEventListener('click' ,()=>{

    body.classList.remove('theme1', 'theme2', 'theme3');
    body.classList.add('theme3');
    calculator.classList.remove('theme1', 'theme2', 'theme3');
    calculator.classList.add('theme3');
});


let valeur = '';
function update() {
  document.querySelector('.result').value = valeur;  
} 

function appendNumber(val) {
    valeur += val;
    update();
 }
function cancel() {
    valeur = valeur.slice(0,-1);
    update();
}
 function appendOperator(signe) {
    
        valeur += signe;
        update();
}
 function clean (){
    valeur = '';
    update();
 }

 function result(){

    try {

        valeur = eval(valeur)
        update();
        
    } catch (error) {
        valeur = 'error'
        update();
    }

 }






