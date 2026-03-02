import { useFetch } from './useFetch'

export function useCreateUser() {
	const { fetchData, data, error, loading } = useFetch()

	async function createUser(userData) {
		await fetchData('/registration', {
			credentials: 'include',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		})

		return { data, error }
	}

	return {
		createUser,
		loading
	}
}
