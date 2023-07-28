// инпут
let inputFirst = document.querySelector( '.calculator-input-first')
let inputSecond = document.querySelector('.calculator-input-second')

//кнопки 
let buttonPlus = document.querySelector('.calculator-plus')
let buttonMinus = document.querySelector('.calculator-minus')
let buttonMultiply = document.querySelector('.calculator-multiply')
let buttonDevide = document.querySelector('.calculator-devide')
let buttonEquals = document.querySelector('.calculator-equals')

//значения 
let valueOne = null;
let valueTwo = null;
let resut = null;

buttonPlus.addEventListener('click', function() {
    valueOne = inputFirst.value
    valueTwo = inputSecond.value

    resut = Number(valueOne) + Number(valueTwo)
   
})

buttonMinus.addEventListener('click', function () {
    valueOne= inputFirst.value
    valueTwo = inputSecond.value

    resut = Number(valueOne) - Number(valueTwo)
})

buttonMultiply.addEventListener('click', function () {
    valueOne = inputFirst.value
    valueTwo = inputSecond.value

    resut = Number(valueOne) * Number(valueTwo)

})

buttonDevide.addEventListener('click', function () {
    valueOne = inputFirst.value
    valueTwo = inputSecond.value

    resut= Number(valueOne) / Number(valueTwo)

})

buttonEquals.addEventListener('click', function () {
    alert('результат :' + resut)
    
} )