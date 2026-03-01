<template>
	<AppInput type="text" v-model="documentFormatted" v-bind="$attrs" />
</template>

<script setup>
	import { computed } from 'vue'
	import AppInput from '~/inputs/AppInput.vue'

	const modelValue = defineModel({
		type: String,
		default: ''
	})

	function formatCPF(value) {
		return value.replace(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/, (_, p1, p2, p3, p4) => {
			let out = ''
			if (p1) out += p1
			if (p2) out += '.' + p2
			if (p3) out += '.' + p3
			if (p4) out += '-' + p4
			return out
		})
	}

	function formatCNPJ(value) {
		return value.replace(
			/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/,
			(_, p1, p2, p3, p4, p5) => {
				let out = ''
				if (p1) out += p1
				if (p2) out += '.' + p2
				if (p3) out += '.' + p3
				if (p4) out += '/' + p4
				if (p5) out += '-' + p5
				return out
			}
		)
	}

	const documentFormatted = computed({
		get() {
			const digits = modelValue.value.replace(/\D/g, '')

			if (digits.length <= 11) {
				return formatCPF(digits)
			}

			return formatCNPJ(digits)
		},
		set(value) {
			const digits = value.replace(/\D/g, '').slice(0, 14)
			modelValue.value = digits
		}
	})
</script>
