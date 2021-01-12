// Написать приложение-калькулятор, используя подход BDD. Приложение должно
// состоять из четырёх методов для сложения, вычитания, умножения и деления.
// Каждый метод принимает на вход два аргумента и выполняет действие.
// При написании тестов учесть случаи, когда на вход подаются не числа,
// а строки, null или undefined.

const calc = (arg1, arg2, operations) => {
    if (isNaN(arg1) || isNaN(arg2) || arg1 === null || arg2 === null)
        return 'Ошибка, введите 2 числа';
    if (arg2 === 0 && operations === '/') return 'На 0 делить нельзя';
    switch (operations) {
        case '+':
            return arg1 + arg2;
        case '-':
            return arg1 - arg2;
        case '*':
            return arg1 * arg2;
        case '/':
            return arg1 / arg2;
    }
    return 'Операция должна быть + - / или *'
};

module.exports = calc;
