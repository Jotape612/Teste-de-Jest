const Calculadora = require('./calculadora');
const calc = new Calculadora();

test('Soma de 2 + 3 deve ser 5', () => {
    expect(calc.somar(2, 3)).toBe(5);
});

test('Subtração de 5 - 3 deve ser 2', () => {
    expect(calc.subtrair(5, 3)).toBe(2);
});

test('Multiplicação de 4 * 3 deve ser 12', () => {
    expect(calc.multiplicar(4, 3)).toBe(12);
});

test('Divisão de 10 / 2 deve ser 5', () => {
    expect(calc.dividir(10, 2)).toBe(5);
});

test('Divisão por zero deve lançar um erro', () => {
    expect(() => calc.dividir(5, 0)).toThrow('Divisão por zero não é permitida');
});

//Testes para dar erro propositalmente
test('Soma de 2 + 2 deve ser 3 (propositalmente errado)', () => {
    expect(calc.somar(2, 2)).toBe(3);
});

test('Multiplicação de 3 * 3 deve ser 5 (propositalmente errado)', () => {
    expect(calc.multiplicar(3, 3)).toBe(5);
});

test('Divisão de 10 / 2 deve ser 6 (propositalmente errado)', () => {
    expect(calc.dividir(10, 2)).toBe(6);
});

