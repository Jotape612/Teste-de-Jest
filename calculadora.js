class Calculadora {
    somar(a, b) {
        return a + b;
    }

    subtrair(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        if (b === 0) {
            throw new Error("Divisão por zero não é permitida");
        }
        return a / b;
    }
}

module.exports = Calculadora; //Caso haja a dúvida, o module.exports serve para exportar funções,classes e/ou variaveis. Quero exportar a classe Calculadora para facilitar o teste do Jest.
