<template>
	<AppInput
		v-bind="$attrs"
		:model-value="modelValue"
		@update:model-value="$emit('update:modelValue', $event)"
	/>
</template>

<script setup>
	import AppInput from './AppInput.vue'

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
