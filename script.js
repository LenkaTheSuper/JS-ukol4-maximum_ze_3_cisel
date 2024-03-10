const number1 = Number(prompt("Zadej první číslo"))
const number2 = Number(prompt("Zadej druhé číslo"))
const number3 = Number(prompt("Zadej třetí číslo"))
let numberMax = 0

const maximum = (n1, n2, n3) => {
    if (n1 > n2 && n1 > n3) {
        numberMax = n1
    } else if (n2 > n1 && n2 > n3) {
        numberMax = n2
    } else {
        numberMax = n3
    }

    return numberMax
}

const result = maximum(number1, number2, number3)

document.body.innerHTML = `Z čísel ${number1}, ${number2} a ${number3} je nejvyšší číslo ${result}`