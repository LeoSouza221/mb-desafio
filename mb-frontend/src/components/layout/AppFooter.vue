<template>
	<footer>
		<p>© {{ year }} MB Desafio</p>
		<div class="footer-socials">
			<a
				href="https://github.com/LeoSouza221"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub LeoSouza221 (abre em nova aba)"
			>
				<Github width="20" height="20" />
			</a>
			<a
				href="https://www.linkedin.com/in/leonardo-de-souza-a75557156/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="LinkedIn Leonardo de Souza (abre em nova aba)"
			>
				<Linkedin width="20" height="20" />
			</a>
		</div>
	</footer>
</template>

<script setup>
	import { computed } from 'vue'
	import Github from '~/icons/Github.vue'
	import Linkedin from '~/icons/Linkedin.vue'

	const year = computed(() => new Date().getFullYear())
</script>

<style scoped>
	footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 32px;
		background: var(--primary);
		padding: 0 var(--spacing-4);
		box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--spacing-2);
	}

	p {
		color: white;
		font-size: var(--spacing-3);
		font-weight: 500;
	}

	a {
		color: white;
		font-size: var(--spacing-3);
		font-weight: 500;
		text-decoration: none;
		height: 100%;
		display: flex;
		place-items: center;
	}

	.footer-socials {
		display: flex;
		gap: var(--spacing-2);
	}
</style>
