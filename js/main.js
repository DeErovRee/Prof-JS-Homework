const products = [
    {id: 1, title: 'Notebook', price: 2000, imgUrl: 'https://img.mvideo.ru/Big/30062055bb.jpg'},
    {id: 2, title: 'Mouse', price: 20, imgUrl: 'https://img.mvideo.ru/Big/50133149bb.jpg'},
    {id: 3, title: 'Keyboard', price: 200, imgUrl: 'https://img.mvideo.ru/Big/50168992bb.jpg'},
    {id: 4, title: 'Gamepad', price: 50, /* url: 'https://img.mvideo.ru/Big/40078743bb.jpg' */},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение

const imgPlaceholder = 'https://www.rassvet-td.ru/files/c7fdd594-44d9-11e1-b24c-001e90f915e2_cb22a654-172e-11eb-87cb-d050999b4264.jpeg'
const renderProduct = (title, price, imgUrl = imgPlaceholder) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <img height='240px' src='${imgUrl}'>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    document.querySelector('.products').innerHTML = list
        .map(item => renderProduct(item.title, item.price, item.imgUrl))
        .join(''); // Массив выводился на страницу по умолчанию через запятые. Исправил это методом join.
};

renderPage(products);