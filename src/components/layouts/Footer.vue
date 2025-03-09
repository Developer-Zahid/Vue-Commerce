<script setup>
    const currentTime = new Date();
</script>

<template>
    <footer class="footer">
        <div class="container">
            <p class="footer_text">© {{ currentTime.getFullYear() || 2000 }} <a href="/" class="footer_link">Vue Commerce</a>. All rights reserved</p>
        </div>
    </footer>
</template>

<style scoped>
    .footer {
        text-align: center;
        background-color: var(--section-bg);
        padding-block: 1.5rem;
        font-size: 0.8rem;
        border-top: 1px solid var(--color-border);

        .footer_link {
            color: var(--color-primary);
            font-weight: 600;
        }
    }
</style>