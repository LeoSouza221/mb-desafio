import { ref, computed, watchEffect, toValue } from 'vue'

export function useFieldValidator(fieldRef, field, rules) {
	const touched = ref(false)
	const errorMessage = ref('')
	// const hasError = ref(true)
	const value = toValue(fieldRef)

	// function validate(value) {
	// 	if (!touched.value) {
	// 		errorMessage.value = ''
	// 		hasError.value = true
	// 		return
	// 	}

	// 	for (const rule of rules) {
	// 		const result = rule(value)

	// 		if (result) {
	// 			errorMessage.value = result
	// 			hasError.value = true
	// 			return
	// 		}
	// 	}

	// 	errorMessage.value = ''
	// 	hasError.value = false
	// }

	const hasError = computed(() => {
		console.log('antes:')
		if (!touched.value && !value[field]) {
			errorMessage.value = ''
			return true
		}

		console.log('depois:')

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

	// watchEffect(() => {
	// 	validate(value[field])
	// })

	return {
		touched,
		errorMessage,
		hasError
	}
}
