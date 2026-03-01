<template>
	<AppInput type="tel" v-model="phoneFormatted" v-bind="$attrs" />
</template>

<script setup>
	import { ref, computed } from 'vue'
	import AppInput from './AppInput.vue'

	const modelValue = defineModel({
		type: String,
		default: ''
	})

	const phoneValue = ref('')

	function formatPhone(value) {
		let digits = value.replace(/\D/g, '')
		digits = digits.slice(0, 11)
		if (digits.length === 0) return ''
		if (digits.length <= 10) {
			// (99) 9999-9999
			return digits.replace(/(\d{0,2})(\d{0,4})(\d{0,4})/, (_, d1, d2, d3) => {
				let out = ''
				if (d1) out += `(${d1}`
				if (d1 && d1.length === 2 && d2) out += ') '
				if (d2) out += d2
				if (d2 && d2.length === 4 && d3) out += '-'
				if (d3) out += d3
				return out
			})
		} else {
			// (99) 99999-9999
			return digits.replace(/(\d{0,2})(\d{0,5})(\d{0,4})/, (_, d1, d2, d3) => {
				let out = ''
				if (d1) out += `(${d1}`
				if (d1 && d1.length === 2 && d2) out += ') '
				if (d2) out += d2
				if (d2 && d2.length === 5 && d3) out += '-'
				if (d3) out += d3
				return out
			})
		}
	}

	const phoneFormatted = computed({
		get() {
			return formatPhone(modelValue.value)
		},
		set(value) {
			modelValue.value = value.replace(/\D/g, '').slice(0, 11)
		}
	})
</script>
