const input_result = document.querySelector('.input_result')
const input_1 = document.querySelector("#num1")
const input_2 = document.querySelector("#num2")

let value_1 = input_1.value
let value_2 = input_2.value

input_1.addEventListener('change', (e) => {
    value_1 = Number(e.target.value)
})

input_2.addEventListener('change', (e) => {
    value_2 = Number(e.target.value)
})


const botao_soma = document.querySelector(".botao_soma")
    botao_soma.addEventListener('click', () => {
        let soma = value_1 + value_2
        input_result.innerHTML = `${soma}`
    })

const botao_sub = document.querySelector('.botao_sub')
    botao_sub.addEventListener('click', () => {
        let sub = value_1 - value_2
        input_result.innerHTML = `${sub}`
    })

const botao_mult = document.querySelector('.botao_mult')
    botao_mult.addEventListener('click', () => {
        let mult = value_1 * value_2
        input_result.innerHTML = `${mult}`
    })
const botao_div = document.querySelector('.botao_div')
    botao_div.addEventListener('click', () => {
        let div = value_1 / value_2
        input_result.innerHTML = `${div}`
    })

