<template>
	<div>
		<div class="input-wrapper">
			<label>{{ label }}</label>
			<div class="input-container">
				<input v-model="modelValue" class="input" :type="inputType" />
				<button
					v-if="type === 'password'"
					type="button"
					class="button-password"
					@click="toggleVisibility"
				>
					<EyeClose v-if="isVisible" width="24" height="24" />
					<EyeOpen v-else width="24" height="24" />
				</button>
			</div>
		</div>
		<div v-if="errorMessage" class="input-error">
			<span>{{ errorMessage }}</span>
		</div>
	</div>
</template>

<script setup>
	import { computed, ref } from 'vue'
	import EyeOpen from '../Icon/EyeOpen.vue'
	import EyeClose from '../Icon/EyeClose.vue'

	const modelValue = defineModel({
		type: String,
		default: ''
	})

	const props = defineProps({
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

	const isVisible = ref(false)

	const inputType = computed(() => {
		if (props.type === 'password') {
			return isVisible.value ? 'text' : 'password'
		}
		return props.type
	})

	function toggleVisibility() {
		isVisible.value = !isVisible.value
	}
</script>

<style scoped>
	.input-wrapper {
		width: 100%;
	}

	.input-container {
		position: relative;
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

	.button-password {
		position: absolute;
		right: 0.75rem;
		background: none;
		border: none;
		cursor: pointer;
		font-size: 1rem;
		height: 100%;
	}
</style>
