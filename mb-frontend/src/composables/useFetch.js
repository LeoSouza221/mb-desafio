import { ref, watchEffect, toValue } from 'vue'

export function useFetch() {
	const data = ref(null)
	const error = ref(null)
	const loading = ref(false)

	async function fetchData(url, options = {}) {
		data.value = null
		error.value = null
		loading.value = true

		try {
			const res = await fetch('/api' + url, options)
			if (!res.ok) {
				throw new Error(await res.text())
			}
			const json = await res.json()
			data.value = json
		} catch (err) {
			error.value = err
		} finally {
			loading.value = false
		}
	}

	return { data, error, loading, fetchData }
}
