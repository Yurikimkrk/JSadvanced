// Написать приложение-калькулятор, используя подход BDD. Приложение должно
// состоять из четырёх методов для сложения, вычитания, умножения и деления.
// Каждый метод принимает на вход два аргумента и выполняет действие.
// При написании тестов учесть случаи, когда на вход подаются не числа,
// а строки, null или undefined.

const calc = require('./calc');

describe('Операции', function () {
    it('сложение', function () {
        expect(calc(10, 5, '+')).toBe(15);
    });
    it('вычитание', function () {
        expect(calc(10, 5, '-')).toBe(5);
    });
    it('умножение', function () {
        expect(calc(10, 5, '*')).toBe(50);
    });
    it('деление', function () {
        expect(calc(10, 5, '/')).toBe(2);
    });
});

describe('Нестандартные ситуации', function () {
    it('один из операндов - строка', function () {
        expect(calc('привет', 1)).toBe('Ошибка, введите 2 числа');
    });
    it('один из операндов - null', function () {
        expect(calc(2, null)).toBe('Ошибка, введите 2 числа');
    });
    it('один из операндов - undefined', function () {
        expect(calc(undefined, 3)).toBe('Ошибка, введите 2 числа');
    });
    it('деление на 0', function () {
        expect(calc(10, 0, '/')).toBe('На 0 делить нельзя');
    });
    it('нет такой операции', function () {
        expect(calc(5, 5, 5)).toBe('Операция должна быть + - / или *');
    });
});