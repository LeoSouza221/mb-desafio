<template>
	<div>
		<div class="input-wrapper">
			<label>{{ label }}</label>
			<div class="input-container">
				<input v-model="modelValue" class="input" :type="type" />
			</div>
		</div>
		<div v-if="errorMessage" class="input-error">
			<span>{{ errorMessage }}</span>
		</div>
	</div>
</template>

<script setup>
	const modelValue = defineModel({
		type: String,
		default: ''
	})
	defineProps({
		label: {
			type: String,
			default: ''
		},
		errorMessage: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: 'text'
		}
	})
</script>

<style scoped>
	.input-wrapper {
		width: 100%;
	}

	.input-container {
		border: 2px solid var(--text-color);
		border-radius: var(--radius);
		background: white;
	}

	label {
		display: block;
		font-weight: 600;
		color: var(--text-color);
	}

	input {
		position: relative;
		padding: var(--spacing-2);
		font-size: var(--spacing-4);
		color: var(--text-color);
		border: none;
		background: transparent;
		outline: none;
		width: 100%;
	}

	.input-error {
		color: var(--error);
		font-size: var(--spacing-3);
	}
</style>
