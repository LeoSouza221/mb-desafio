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
		background: var(--primary);
		padding: var(--spacing);
		max-height: 80px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		display: flex;
		place-items: flex-start;
		gap: var(--spacing);
	}

	h1 {
		color: white;
		font-size: 1.5rem;
		font-weight: 600;
	}

	.logo {
		display: block;
		width: 60px;
		height: 60px;
	}

	@media (max-width: 1024px) {
		header {
			display: flex;
			place-items: center;
			padding-right: calc(var(--section-gap) / 2);
			height: 60px;
			gap: var(--spacing);
		}

		.logo {
			height: 40px;
			width: 40px;
		}
	}
</style>
