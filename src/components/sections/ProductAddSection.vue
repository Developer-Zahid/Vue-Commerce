<script setup>
import {reactive, computed} from 'vue';
import { useRouter } from 'vue-router'
import useProductsStore from '@/stores/products';

const router = useRouter();
const productsStore = useProductsStore();

let product = reactive({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
});

const isFullyFilled = computed(()=>{
    return Object.values(product).every(value => value !== '');
});

const handleFormSubmit = ()=>{
    productsStore.addProduct(product);
    router.push({name: 'home'})
}
</script>

<template>
    <section class="section-form">
        <div class="container">
            <form @submit.prevent="handleFormSubmit" class="form">
                <div class="form_group">
                    <label for="title" class="form_label">Product Title *</label>
                    <input v-model="product.title"  id="title" name="title" type="text" class="form_input" required />
                </div>
                <div class="form_group">
                    <label for="price" class="form_label">Product Price *</label>
                    <input v-model="product.price" id="price" name="price" type="number" placeholder="Number only" step="any" min="0" class="form_input" required />
                </div>
                <div class="form_group">
                    <label for="description" class="form_label">Product Description *</label>
                    <textarea v-model="product.description" id="description" name="description" class="form_input" rows="7" required></textarea>
                </div>
                <div class="form_group">
                    <label for="category" class="form_label">Product Category *</label>
                    <input v-model="product.category" id="category" name="category" type="text" class="form_input" required />
                </div>
                <div class="form_group">
                    <label for="image" class="form_label">Product Image * <small>(https://i.pravatar.cc/370?u=1)</small></label>
                    <input v-model="product.image" id="image" name="image" type="url" placeholder="URL only" class="form_input" required />
                </div>
                <button type="submit" class="form_btn" :disabled="!isFullyFilled">Submit</button>
            </form>
        </div>
    </section>
</template>

<style scoped>
    .section-form {
        padding-block: 4rem;
    }
    .form {
        display: grid;
        gap: 1rem;
        max-width: 600px;
        margin-inline: auto;
        border: 3px solid var(--color-border);
        padding: 2rem 1rem;
        
        .form_group {
            display: grid;
            gap: 0.5rem;
        }

        .form_label {
            font-weight: 600;
        }

        .form_input {
            padding: 1rem;
            border: 2px solid var(--color-border);
            background-color: transparent;

            &:focus {
                outline: 2px solid var(--color-primary);
            }
        }

        .form_btn {
            font-size: 1.1rem;
            padding: 1rem;
            margin-block-start: 1rem;
            color: var(--color-white);
            background-color: var(--color-primary);
            border: none;
            font-weight: 600;
            text-transform: uppercase;

            &[disabled] {
                filter: grayscale(1) contrast(0.3);
                pointer-events: none;
            }

            &:active {
                background-color: var(--color-title);
            }
        }
    }
</style>