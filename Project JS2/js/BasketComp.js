Vue.component('basket', {
    data(){
      return {
          imgBasket: 'https://placehold.it/50x100',
          basketUrl: '/getBasket.json',
          basketItems: [],
          showBasket: false,
      }
    },
    methods: {
        addProduct(product){
            this.$parent.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if(data.result === 1){
                        let find = this.basketItems.find(el => el.id_product === product.id_product);
                        if(find){
                            find.quantity++;
                        } else {
                            let prod = Object.assign({quantity: 1}, product);
                            this.basketItems.push(prod)
                        }
                    } else {
                        alert('Error');
                    }
                })
        },
        remove(item) {
            this.$parent.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if(data.result === 1) {
                        if(item.quantity>1){
                            item.quantity--;
                        } else {
                            this.basketItems.splice(this.basketItems.indexOf(item), 1)
                        }
                    }
                })
        },
    },
    mounted(){
        this.$parent.getJson(`${API + this.basketUrl}`)
            .then(data => {
                for(let el of data.contents){
                    this.basketItems.push(el);
                }
            });
    },
    template: `
        <div>
            <button class="btn-basket" type="button" @click="showBasket = !showBasket">Корзина</button>
            <div class="basket-block" v-show="showBasket">
                <p v-if="!basketItems.length">Нет данных</p>
                <basket-item class="basket-item" 
                v-for="item of basketItems" 
                :key="item.id_product"
                :basket-item="item" 
                :img="imgBasket"
                @remove="remove">
                </basket-item>
            </div>
        </div>`
});

Vue.component('basket-item', {
    props: ['basketItem', 'img'],
    template: `
                <div class="basket-item">
                    <div class="product-bio">
                        <img :src="img" alt="Some image">
                        <div class="product-desc">
                            <p class="product-title">{{basketItem.product_name}}</p>
                            <p class="product-quantity">Количество: {{basketItem.quantity}}</p>
                            <p class="product-single-price">{{basketItem.price}}₽ за шт.</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">{{basketItem.quantity*basketItem.price}}</p>
                        <button class="del-btn" @click="$emit('remove', basketItem)">&times;</button>
                    </div>
                </div>
    `
});
