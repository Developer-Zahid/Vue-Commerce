import { createWebHistory, createRouter } from 'vue-router';

import HomePage from '@/pages/HomePage.vue';
import ProductAddPage from '@/pages/ProductAddPage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/add-product',
        name: 'add-product',
        component: ProductAddPage
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;