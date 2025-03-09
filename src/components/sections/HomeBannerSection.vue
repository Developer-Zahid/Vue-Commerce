<script setup>
    defineProps({
        title: {
            type: String,
            required: true,
            default: 'Banner Section',
        },
    });
</script>

<template>
    <!-- Section Banner -->
    <header class="section-banner">
        <div class="container">
            <h1 class="u-heading-h1">{{ title }}</h1>
        </div>
    </header>
</template>

<style scoped>
    .section-banner {
        padding-block: 5rem;
        text-align: center;
        background-color: var(--section-bg);
    }
</style>