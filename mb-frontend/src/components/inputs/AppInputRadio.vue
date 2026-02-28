<template>
	<label class="form-radio-label" :for="value">
		<input
			type="radio"
			:id="value"
			:name="name"
			:value="value"
			:checked="checked"
			@change="handleChange"
		/>
		{{ label }}
	</label>
</template>

<script setup>
	import { inject, computed } from 'vue'

	const modelValue = defineModel({
		type: String,
		default: ''
	})

	const props = defineProps({
		value: {
			type: String,
			default: ''
		},
		label: {
			type: String,
			default: ''
		},
		name: {
			type: String,
			default: ''
		}
	})

	const checked = computed(() => {
		return modelValue.value === props.value
	})

	function handleChange() {
		modelValue.value = props.value
	}
</script>

<style scoped>
	.form-radio-label {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		font-size: var(--spacing-4);
		color: var(--text-color);
		cursor: pointer;
	}

	input[type='radio'] {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		cursor: pointer;
	}
</style>
