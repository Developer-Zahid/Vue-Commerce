<script setup>
    import { ref } from 'vue';
	import SiteLogo from '@/assets/images/logo.svg';

    const cartCount = ref(0);
</script>

<template>
	<!-- Section Navbar -->
	<nav class="navbar">
		<div class="container">
			<div class="navbar_wrapper">
				<a href="/" class="navbar_brand">
					<img alt="Vue logo" class="navbar_brand_logo" :src=SiteLogo width="60" />
					<span>Vue Commerce</span>
				</a>
				<div class="navbar_list">
					<router-link :to="{ name: 'home' }" class="navbar_link">Home</router-link>
					<router-link :to="{ name: 'add-product' }" class="navbar_link">Add product</router-link>
					<a href="#!" class="navbar_link">Cart ({{ cartCount }})</a>
				</div>
			</div>
		</div>
	</nav>
</template>

<style scoped>
	.navbar {
		position: sticky;
		top: 0;
		z-index: 9;
		padding-block: 1rem;
		background-color: var(--navbar-bg);
		border-bottom: 1px solid var(--color-border);

		.navbar_wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
		}

		.navbar_brand {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			font-size: 1rem;
			font-weight: 500;
			outline: none;
			transition: color 0.2s ease;

			&:is(:hover, :focus-visible)
			{
				color: var(--navbar-link-hover-bg);
			}
		}

		.navbar_brand_logo {
			width: 3rem;
		}

		.navbar_list {
			display: flex;
			align-items: center;
			gap: 0.6rem;
		}

		.navbar_link {
			display: inline-block;
			color: var(--color-title);
			font-size: 0.9rem;
			font-weight: 500;
			padding: 0.4rem 0.8rem;
			text-decoration: none;
			border-radius: 0.3rem;
			transition: all 0.2s ease;
			outline: none;

			&:is(:hover, :focus-visible, .router-link-exact-active)
			{
				color: var(--navbar-link-hover-text);
				background-color: var(--navbar-link-hover-bg);
			}
		}
	}
</style>
