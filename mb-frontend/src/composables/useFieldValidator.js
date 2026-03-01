import { ref, computed, toValue } from 'vue'

export function useFieldValidator(fieldRef, field, rules) {
	const touched = ref(false)
	const errorMessage = ref('')
	const value = toValue(fieldRef)

	const hasError = computed(() => {
		if (!touched.value && !value[field]) {
			errorMessage.value = ''
			return true
		}

		for (const rule of rules) {
			const result = rule(value[field])

			if (result) {
				errorMessage.value = result
				return true
			}
		}

		errorMessage.value = ''
		return false
	})

	return {
		touched,
		errorMessage,
		hasError
	}
}
