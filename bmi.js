let inputKg = document.querySelector('.inputKg')
let inputCm = document.querySelector('.inputCm')
let btn = document.querySelector('.btn')
let answerNum = document.querySelector('.answerNum')
let modal = document.querySelector('.modal')
let x = document.querySelector('.x')
let answerText = document.querySelector('.answerText')
let section = document.querySelector('section')
let ValueKg = document.querySelector('.ValueKg')
let ValueCm = document.querySelector('.ValueCm')

btn.addEventListener('click', function () {

    if (inputKg.value === '' || inputCm.value === '') {

    } else {

        section.style.filter = 'blur(10px)'
        modal.style.display = 'block'
        
        let calcBmi = (+inputKg.value / (Math.pow(+inputCm.value/100, 2))).toFixed(1)
        
        answerNum.innerHTML = calcBmi

        ValueKg.innerHTML = inputKg.value + ' Kg'
        ValueCm.innerHTML = inputCm.value + ' Cm'

        inputKg.value = ''
        inputCm.value = ''
    }

    if (answerNum.innerHTML < 18.5) {
    
        answerText.innerHTML = 'Underweight'
        answerText.style.color = 'chartreuse'
        
    } else if (answerNum.innerHTML >= 18.5 && answerNum.innerHTML <= 24.9) {
        
        answerText.innerHTML = 'Healthy Weight'
        answerText.style.color = 'green'
        
    } else if (answerNum.innerHTML >= 25 && answerNum.innerHTML <= 29.9) {
        
        answerText.innerHTML = 'Overweight'
        answerText.style.color = 'orange'
        
    } else {
        
        answerText.innerHTML = 'Obesity'
        answerText.style.color = 'red'
    }
})

x.addEventListener('click', function () {
    modal.style.display = 'none'
    section.style.filter = 'blur(0px)'
})