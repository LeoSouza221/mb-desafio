<template>
	<AppHeader />

	<main>
		<UserForm />
	</main>

	<AppFooter />
</template>

<script setup>
	import AppFooter from './components/layout/AppFooter.vue'
	import AppHeader from './components/layout/AppHeader.vue'
	import UserForm from './pages/UserForm.vue'
</script>

<style scoped>
	header {
		line-height: 1.5;
	}

	.logo {
		display: block;
		margin: 0 auto 2rem;
	}

	@media (min-width: 1024px) {
		header {
			display: flex;
			place-items: center;
			padding-right: calc(var(--section-gap) / 2);
		}

		.logo {
			margin: 0 2rem 0 0;
		}

		header .wrapper {
			display: flex;
			place-items: flex-start;
			flex-wrap: wrap;
		}
	}
</style>
