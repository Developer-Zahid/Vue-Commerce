import { defineStore } from "pinia";

const useCartStore = defineStore('cart', {
    state: () => ({
        cart: []
    }),
    getters: {
        totalItems: (state)=> {
            return state.cart.reduce((sum, item) => (sum + item.quantity), 0)
        },
    },
    actions: {
        addToCart(product) {
            const item = this.cart.find(item => item.id === product.id);
            if(item) {
                item.quantity += 1;
            } else {
                this.cart.push({...product, quantity: 1})
            }
        },
    }
});

export default useCartStore;