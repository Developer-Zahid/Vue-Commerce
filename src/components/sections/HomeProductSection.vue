<script setup>
    import { ref } from 'vue';
    import ProductCard from '@/components/cards/ProductCard.vue';
    import useProductsStore from '@/stores/products';

    const productsStore = useProductsStore();

    let products = ref(productsStore.sortNewestToOldestProducts);

    const handleSortProducts = (event)=>{
        if(event.target.value == 'OldestToNewest') {
            products.value = productsStore.sortOldestToNewestProducts;
        }else {
            products.value = productsStore.sortNewestToOldestProducts;
        }
    }
</script>

<template>
    <!-- Section Home Product -->
    <section class="section-products u-spacing-block">
        <div class="container">
            <label class="filter">
                Sort
                <select @change="handleSortProducts" name="sort" class="filter_input">
                    <option value="NewestToOldest" selected>Newest To Oldest</option>
                    <option value="OldestToNewest">Oldest To Newest</option>
                </select>
            </label>
            <div class="products-grid">
                <ProductCard v-for="product in products" :key="product.id" :product="product" />
            </div>
        </div>
    </section>
</template>

<style scoped>
    .filter {
        display: inline-grid;
        gap: 10px;
        margin-block-end: 2rem;

        .filter_input {
            -webkit-appearance: initial;
            -moz-appearance: initial;
            appearance: initial;
            padding: 0.8rem 1rem;
            background-color: var(--section-bg);
            border: 1px solid var(--color-border);
            cursor: pointer;
            outline: none;

            &:is(:focus-visible, :active) {
                border-color: var(--color-primary);
            }
        }
    }
    .products-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem;
    }
</style>