<template>
	<div>
		<div class="input-wrapper">
			<label :for="resolvedInputId">{{ label }}</label>
			<div class="input-container">
				<input
					v-model="modelValue"
					class="input"
					:type="inputType"
					v-bind="$attrs"
					:id="resolvedInputId"
					:aria-invalid="errorMessage ? 'true' : 'false'"
					:aria-describedby="errorMessage ? errorId : undefined"
					@blur="emit('blur', $event)"
					@focus="emit('focus', $event)"
				/>
				<button
					v-if="type === 'password'"
					type="button"
					class="button-password"
					:aria-label="isVisible ? 'Ocultar senha' : 'Mostrar senha'"
					:aria-pressed="isVisible"
					@click="toggleVisibility"
				>
					<EyeClose v-if="isVisible" width="24" height="24" />
					<EyeOpen v-else width="24" height="24" />
				</button>
			</div>
		</div>
		<div class="input-error">
			<span v-if="errorMessage" :id="errorId" role="alert">{{ errorMessage }}</span>
		</div>
	</div>
</template>

<script setup>
	import { computed, ref, useAttrs } from 'vue'
	import EyeOpen from '~/icons/EyeOpen.vue'
	import EyeClose from '~/icons/EyeClose.vue'

	const modelValue = defineModel({
		type: [String, Boolean],
		default: ''
	})

	const emit = defineEmits(['blur', 'focus'])
	const attrs = useAttrs()
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
	const inputId = `app-input-${Math.random().toString(36).slice(2, 10)}`

	const resolvedInputId = computed(() => {
		return attrs.id || inputId
	})

	const errorId = computed(() => {
		return `${resolvedInputId.value}-error`
	})

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

	.input-wrapper {
		width: 100%;
	}

	.input-wrapper:has(input[type='checkbox']) {
		display: flex;
		flex-direction: row-reverse;
		gap: var(--spacing-2);
		justify-content: flex-end;
	}

	.input-container {
		position: relative;
		border: 2px solid var(--text-color);
		border-radius: var(--radius);
	}

	.input-container:has(input[type='checkbox']) {
		border-radius: 0;
		border: none;
	}

	.input-container:has(input:disabled) {
		opacity: 0.6;
	}

	input:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.input-error {
		min-height: 14px;
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
