class ProductList {
    #goods;
    #allProducts;

    constructor(box = '.products') {
        this.box = box;
        this.#goods = [];
        this.#allProducts = [];
        this.#fetchGoods();
        this.#render();
    }

    #fetchGoods() {
        this.#goods = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
        ];
    }

    #render() {
        const box = document.querySelector(this.box);

        for (let product of this.#goods) {
            const productObject = new ProductItem(product);

            this.#allProducts.push(productObject);

            box.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }

    totalPrice() {
        let total = 0;
        this.#goods.forEach((item) => {
            total += item.price;
        });
        return total
    }
}

class ProductItem {
    constructor(product, img = "http://placehold.it/250x250") {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }

    getHTMLString() {
        return `<div class="product-item" data-id="${this.id}">
                    <div class="title">${this.title}</div>
                    <img src="${this.img}" alt="">
                    <div class="price">Цена: ${this.price} рублей</div>
                    <button class="by-btn">Добавить в корзину</button>
                </div>`;
    }
}

const ProdList = new ProductList();
console.log(ProdList.totalPrice());

// Добавьте пустые классы для корзины товаров и элемента корзины товаров.
// Продумайте, какие методы понадобятся для работы с этими сущностями.

// class BasketList {
//     создаем конструктор с добавленными товарами
//
//     стоит добавить методы открывания корзины (с рендером добавленных заказов)
//     добавления/удаления товара в корзину
//     рассчета стоимости/количества товара
//     сам рендер добавленных заказов
//     оформления заказа
// }
//
// class BasketItem {
//     добавляем тот же товар в конструктор, что и в ProductItem
//     получение строки (по сути поход на класс ProductItem, возможно даже
//     сделать его потомком, хотя отрисовка товара в корзине по идее должна
//     выглядеть по другому, занимать меньше места и показывать дополн.параметры)
// }
//
//
