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

	console.log('Toasts:', toasts)
</script>

<style scoped>
	.toast-container {
		position: fixed;
		bottom: 50px;
		right: 20px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		z-index: 9999;
	}

	.toast {
		padding: 12px 16px;
		border-radius: 8px;
		min-width: 250px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: 500;
		animation: slideIn 0.25s ease;
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
