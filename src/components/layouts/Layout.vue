<script setup>
	import Navbar from './Navbar.vue'
	import Footer from './Footer.vue'
</script>

<template>
	<Navbar />
	<main>
		<slot></slot>
	</main>
	<Footer />
</template>

<style scoped>
</style>