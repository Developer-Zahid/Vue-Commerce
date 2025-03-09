<script setup>
    const {product} = defineProps({
        product: {
            type: Object,
            required: true,
        }
    }); 
</script>

<template>
    <article class="product-card">
        <figure class="product-card_header">
            <img class="product-card_image" :src="product.image" :alt="product.title" height="300">
        </figure>
        <div class="product-card_body">
            <div class="product-card_meta">
                <span class="product-card_price">${{ product.price }}</span>
                <span class="product-card_tag">{{ product.category }}</span>
            </div>
            <h3 class="product-card_title">{{ product.title }}</h3>
            <p class="product-card_description">{{ product.description }}</p>
            <button type="button" class="product-card_btn">Add to Cart</button>
        </div>
    </article>
</template>

<style scoped>
    .product-card {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--color-border);
        gap: 1rem;

        .product-card_header {
            position: relative;
            background-color: var(--color-white);
            overflow: hidden;
            padding-top: 80%;
            
            .product-card_image {
                position: absolute;
                inset: 0;
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        
        .product-card_body {
            padding: 1rem;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
            border-top: 1px solid var(--color-border);
        }

        .product-card_meta {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 1rem;
        }

        .product-card_price {
            font-size: 1.5rem;
            font-weight: 600;
        }

        .product-card_tag {
            font-size: 0.9rem;
            padding: 0.2rem 0.4rem;
            background-color: var(--color-border);
            font-weight: 500;
            text-transform: capitalize;
        }

        .product-card_title {
            font-size: 1.4rem;
            font-weight: 500;
        }

        .product-card_description {
            font-size: 0.875rem;
            line-height: 1.6;
            margin-block-end: 2rem;
        }
        
        .product-card_btn {
            width: 100%;
            color: var(--color-title);
            border: 1px solid var(--color-title);
            background-color: transparent;
            font-size: 1rem;
            font-weight: 500;
            padding: 0.8em 1em;
            margin-block-start: auto;
            transition: all 0.2s ease;
            
            &:is(:hover, :focus-visible)
			{
				color: var(--color-white);
                background-color: var(--color-black);
			}

            &:active {
                background-color: var(--color-primary);
                border-color: var(--color-primary);
            }
        }
    }
</style>