<template>
	<button :class="['btn', variant, { outline }]" :disabled="disabled || loading">
		<Loading v-if="loading" class="spinner" />
		<slot />
	</button>
</template>

<script setup>
	import Loading from './Icon/Loading.vue'

	defineProps({
		variant: {
			type: String,
			default: 'primary'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
		outline: {
			type: Boolean,
			default: false
		}
	})
</script>

<style scoped>
	.btn {
		--btn-color: black;
		padding: var(--spacing);
		border-radius: var(--radius);
		border: none;
		cursor: pointer;
		color: white;
		font-size: 1rem;
		font-weight: 500;
		display: inline-flex;
		place-items: center;
		gap: 0.5rem;
	}

	.btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.btn:hover:not(:disabled) {
		opacity: 0.9;
	}

	.primary {
		background: var(--primary);
		--btn-color: var(--primary);
	}

	.secondary {
		background: var(--secondary);
		--btn-color: var(--secondary);
	}

	.outline {
		background: transparent;
		border: 2px solid var(--btn-color);
		color: var(--btn-color);
	}
</style>
