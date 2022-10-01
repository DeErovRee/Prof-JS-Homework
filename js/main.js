const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.products = [];//массив товаров из JSON документа
        this.allProducts = [];
        this._getProducts()
            .then(data => { //data - объект js
                 this.products = data;
                console.log(data);
                 this.render()
            });
    }

    _getProducts(){
      
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
       
    }

    // _fetchProducts() {
    //     this.products = [
    //         {id: 1, title: 'Notebook', price: 2000, imgUrl: 'https://img.mvideo.ru/Big/30062055bb.jpg'},
    //         {id: 2, title: 'Mouse', price: 20, imgUrl: 'https://img.mvideo.ru/Big/50133149bb.jpg'},
    //         {id: 3, title: 'Keyboard', price: 200, imgUrl: 'https://img.mvideo.ru/Big/50168992bb.jpg'},
    //         {id: 4, title: 'Gamepad', price: 50, imgUrl: 'https://img.mvideo.ru/Big/40078743bb.jpg'},
    //     ];
    // }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.products) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render())
        }
    }

    getSumm() {
        this._getProducts()
            .then(data => {
                let acc = 0;
                data.forEach(elem => {
                    acc += elem.price;
                })
                console.log(acc)
            })

        // let acc = 0;
        // this.products.forEach(elem => {
        //     acc += elem.price;
        // });
        // console.log(acc);
    }
}

class ProductItem {
    constructor(product, img = 'https://storage.bash.news/9/2/8/9282D0FA26A718A2.jpg') {
        this.id = product.id;
        this.title = product.product_name;
        this.price = product.price;
        this.imgUrl = img;

    }

    render() {
        return `<div class="product-item" data-id='${this.id}'>
                <h3>${this.title}</h3>
                <img height='240px' src='${this.imgUrl}'>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductsList();
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
        .join('');
};