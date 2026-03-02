<template>
	<div class="toast-container">
		<AppTransition>
			<div v-if="toasts.message" class="toast" :class="`toast--${toasts.type}`">
				{{ toasts.message }}
				<button @click="removeToast()">✕</button>
			</div>
		</AppTransition>
	</div>
</template>

<script setup>
	import { useToast } from '@/composables/useToast'
	import AppTransition from '~/AppTransition.vue'

	const { toasts, removeToast } = useToast()
</script>

<style scoped>
	.toast-container {
		position: fixed;
		bottom: 50px;
		right: 20px;
		z-index: 9999;
	}

	.toast {
		padding: var(--spacing-3) var(--spacing-4);
		border-radius: var(--radius);
		min-width: 250px;
		display: flex;
		place-items: center;
		font-weight: 500;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.toast--success {
		background: var(--success);
		color: white;
	}

	.toast--error {
		background: var(--error);
		color: white;
	}

	.toast button {
		background: none;
		border: none;
		cursor: pointer;
	}
</style>
