import { useFetch } from './useFetch'

export function useCreateUser() {
	function createUser(userData) {
		console.log('Creating user with data:', userData)
		const { data, error } = useFetch('/api/registration', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		})

		return { data, error }
	}

	return {
		createUser
	}
}
