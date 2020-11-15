const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price) =>
    `<div class="product-item">
        <div class="title">${title}</div>
        <img src="http://placehold.it/250x250" alt="">
        <div class="price">Цена: ${price} рублей</div>
        <button class="by-btn">Добавить в корзину</button>
    </div>`;

const catalogInit = (list) => {
    const productList = list.map((item) => renderProduct(item.title, item.price)).join('');
    console.log(productList);
    document.querySelector('.products').innerHTML = productList;
};

catalogInit(products);
