<template>
	<header>
		<img alt="MB logo" class="logo" src="../../assets/logo.svg" width="60" height="60" />

		<div class="wrapper">
			<h1>MB Desafio</h1>
		</div>
	</header>
</template>

<style scoped>
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 60px;
		background: var(--primary);
		padding: var(--spacing-2) var(--spacing-4);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		display: flex;
		place-items: center;
		gap: var(--spacing);
	}

	h1 {
		color: white;
		font-size: var(--spacing-5);
		font-weight: 600;
	}

	.logo {
		height: 40px;
		width: 40px;
	}

	@media (min-width: 1024px) {
		header {
			display: flex;
			place-items: flex-start;
			height: 80px;
			gap: var(--spacing-2);
		}

		.logo {
			display: block;
			width: 60px;
			height: 60px;
		}
	}
</style>
