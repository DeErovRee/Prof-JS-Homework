const openCartBtn = document.querySelector('.btn-cart');
const cart = document.querySelector('.cart');
const amountCart = document.querySelector('[data-amount]');

openCartBtn.addEventListener('click', () => {
    if (!cart.classList.contains('hidden')) {
        cart.classList.add('hidden');
        return;
    }
    cart.classList.remove('hidden');
})

class ProductsListCart {
    constructor(container = '.cart'){
        this.container = container;
        this.products = [];//массив товаров из JSON документа
        this.allProducts = [];
        this.amount = 0;
        this._getProducts()
            .then(data => { //data - объект js
                 this.products = data.contents;
                // console.log(data.contents);
                 this.render()
            });
    }

    _getProducts(){
      
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
       
    }

    render() {
        const blockCart = document.querySelector(this.container);
        for (let product of this.products) {
            const productObj = new ProductItemCart(product);
            this.allProducts.push(productObj);
            blockCart.insertAdjacentHTML('beforeend', productObj.render())
        }
    }

    getSumm() {
        this._getProducts()
            .then(data => {
                console.log(data.amount)
                this.amount = data.amount;
            })

        // let acc = 0;
        // this.products.forEach(elem => {
        //     acc += elem.price;
        // });
        // console.log(acc);
    }
}

class ProductItemCart {
    constructor(product, img = 'https://storage.bash.news/9/2/8/9282D0FA26A718A2.jpg') {
        this.id = product.id
        this.title = product.product_name;
        this.price = product.price;
        this.imgUrl = img;

    }

    render() {
        return `<div class='cart-item' data-id='${this.id}'>
                <h3>${this.title}</h3>
                <img height='50px' src='${this.imgUrl}'>
                <p>${this.price}</p>
            </div>`
    }
}

function renderAmount() {
    cartList._getProducts()
        .then(data => {
            amountCart.textContent = `${data.amount}`
            amountCart.classList.remove('hidden')
            console.log(data)
        })
}

let cartList = new ProductsListCart;
cartList.render();
cartList.getSumm();
renderAmount()