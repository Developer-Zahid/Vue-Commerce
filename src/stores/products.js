import { defineStore } from 'pinia'

const useProductsStore = defineStore('products', {
    state: () => ({
        products: [
            {
                "id": 1,
                "title": "White Gold Plated Princess",
                "price": 9.99,
                "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her...",
                "category": "jewelery",
                "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
                "created_at": "03/01/2025"
            },
            {
                "id": 2,
                "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
                "price": 10.99,
                "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings...",
                "category": "jewelery",
                "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
                "created_at": "03/02/2025"
            },
            {
                "id": 3,
                "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0",
                "price": 64,
                "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance...",
                "category": "electronics",
                "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
                "created_at": "03/03/2025"
            },
            {
                "id": 4,
                "title": "Mens Casual Slim Fit",
                "price": 15.99,
                "description": "The color could be slightly different between on the screen and in practice...",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
                "created_at": "03/04/2025"
            },
            {
                "id": 5,
                "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
                "price": 695,
                "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon...",
                "category": "jewelery",
                "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
                "created_at": "03/05/2025"
            },
            {
                "id": 6,
                "title": "Solid Gold Petite Micropave",
                "price": 168,
                "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days...",
                "category": "jewelery",
                "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
                "created_at": "02/06/2025"
            },
            {
                "id": 7,
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "created_at": "03/07/2025"
            },
            {
                "id": 8,
                "title": "Mens Casual Premium Slim Fit T-Shirts",
                "price": 22.3,
                "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                "created_at": "03/08/2025"
            },
            {
                "id": 9,
                "title": "Mens Cotton Jacket",
                "price": 55.99,
                "description": "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions...",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                "created_at": "03/09/2025"
            }
        ]        
    }),
    getters: {
        sortNewestToOldestProducts: (state) => {
            return state.products.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        },
        sortOldestToNewestProducts: (state) => {
            return state.products.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        }
    },
    actions: {
        addProduct(product) {
            this.products.push({
                id: `${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
                title: product.title,
                price: product.price,
                description: product.description,
                category: product.category,
                image: product.image,
                created_at: new Date()
            });
        },
    }
});

export default useProductsStore;