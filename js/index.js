
let num1 = Number(document.querySelector("#num1").value)
let num2 = Number(document.querySelector("#num2").value)

function funcaoSoma(){
    let soma = num1 + num2
     console.log(soma)
 }
 console.log(num1, num2)

const botao_soma = document.querySelector(".botao_soma")
    botao_soma.addEventListener('click', funcaoSoma())

let num1 = Number(num1.value)
let value_2 = Number(input_2.value)
    
    
input_1.addEventListener('change', (e) => {
        value_1 = Number(e.target.value)
    })
    input_2.addEventListener('change', (e) => {
        value_2 = Number(e.target.value)
    })

     


/*
const resultado = document.querySelector('.result_text')
    console.log(resultado.innerHTML.toUpperCase()) */
