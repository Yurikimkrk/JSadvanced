// Некая сеть фастфуда предлагает несколько видов гамбургеров:
// Маленький (50 рублей, 20 калорий).
// Большой (100 рублей, 40 калорий).
// Гамбургер может быть с одним из нескольких видов начинок (обязательно):
// С сыром (+10 рублей, +20 калорий).
// С салатом (+20 рублей, +5 калорий).
// С картофелем (+15 рублей, +10 калорий).
// Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий)
// и полить майонезом (+20 рублей, +5 калорий).
// Напишите программу, рассчитывающую стоимость и калорийность гамбургера.
// Можно использовать примерную архитектуру класса из методички,
// но можно использовать и свою.

class Hamburger {
    constructor(size = 'small', filling = 'cheese') {
        this.size = size;
        this.filling = filling;
        this.menu = [];
        this.getMenu();
        this.buttonListener();
    }

    buttonListener() {
        const button = document.querySelector('.calc_button');
        button.addEventListener('click', event => {
            this.catchChoice(event);
            this.renderResult(event);
        })
    }

    renderResult() {
        const result = document.querySelector('.result');
        result.innerHTML = this.getHTML();
    }

    getHTML() {
        let price = this.calculate()['price'];
        let calories = this.calculate()['calories'];
        return `<p>hamburger price = ${price} rub, calories = ${calories} cal</p>`
    }

    getMenu() {
        this.menu = {
            'size': {'small': {'price': 50, 'calories': 20},
                'big': {'price': 100, 'calories': 40}},
            'filling': {'cheese': {'price': 10, 'calories': 20},
                'salad': {'price': 20, 'calories': 5},
                'potato': {'price': 15, 'calories': 10}},
            'extra': {'spice': {'price': 15, 'calories': 0},
                'mayo': {'price': 20, 'calories': 5}},
        }
    }

    catchChoice() {
        this.size = this.checkRadio('size');
        this.filling = this.checkRadio('filling');
    }

    checkRadio(elementName) {
        let element = document.getElementsByName(`${elementName}`);
        for (var i = 0; i < element.length; i++) {
            if (element[i].checked) {
                return element[i].id
            }
        }
    }

    calculate() {
        let price = this.menu['size'][this.size]['price'] +
        this.menu['filling'][this.filling]['price'] + this.calcExtra()['price'];

        let calories = this.menu['size'][this.size]['calories'] +
        this.menu['filling'][this.filling]['calories'] + this.calcExtra()['calories'];

        return {'price': price, 'calories': calories}
    }

    calcExtra() {
        let extraPrice = 0;
        let extraCalories = 0;
        let extra = document.getElementsByName(`extra`);
        for (var i = 0; i < extra.length; i++) {
            if (extra[i].checked) {
                extraPrice += this.menu['extra'][extra[i].id]['price']
                extraCalories += this.menu['extra'][extra[i].id]['calories']
            }
        }
        return {'price': extraPrice, 'calories': extraCalories}
    }
}

new Hamburger();
