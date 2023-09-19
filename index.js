const valor = 5

const fatorial = () => {
    let resultado = 1

    for(let i = valor; i > 1; i--) {
        resultado *= i
    }

    return resultado
}

console.log(fatorial())