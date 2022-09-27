class ProductList {
    constructor(container='.products') {
        this.container = container;
        this.products = [];
        this.allProducts = [];
        this._fetchProducts();
    }

    _fetchProducts() {
        this.products = [
            {id: 1, title: 'Notebook', price: 2000, imgUrl: 'https://img.mvideo.ru/Big/30062055bb.jpg'},
            {id: 2, title: 'Mouse', price: 20, imgUrl: 'https://img.mvideo.ru/Big/50133149bb.jpg'},
            {id: 3, title: 'Keyboard', price: 200, imgUrl: 'https://img.mvideo.ru/Big/50168992bb.jpg'},
            {id: 4, title: 'Gamepad', price: 50, imgUrl: 'https://img.mvideo.ru/Big/40078743bb.jpg'},
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.products) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render())
        }
    }

    getSumm() {
        let acc = 0;
        this.products.forEach(elem => {
            acc += elem.price;
        });
        console.log(acc);
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.imgUrl = product.imgUrl;

    }

    render() {
        return `<div class="product-item">
                <h3>${this.title}</h3>
                <img height='240px' src='${this.imgUrl}'>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();
list.render();
list.getSumm();

class Cart {
    addProduct() {

    }

    deleteProduct() {

    }

    changeProduct() {

    }

    render() {

    }
}

class ElemCart {
    render(){}
}

const renderPage = list => {
    document.querySelector('.products').innerHTML = list
        .map(item => renderProduct(item.title, item.price, item.imgUrl))
        .join(''); // Массив выводился на страницу по умолчанию через запятые. Исправил это методом join.
};