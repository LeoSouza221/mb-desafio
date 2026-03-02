import { reactive, ref } from 'vue'

const toasts = ref({
	message: '',
	type: 'success'
})

function addToast(message, type = 'success', duration = 3000) {
	toasts.value = { message, type }

	setTimeout(() => {
		removeToast()
	}, duration)
}

function removeToast() {
	toasts.value = {
		message: '',
		type: 'success'
	}
}

export function useToast() {
	return {
		toasts,
		success: (msg) => addToast(msg, 'success'),
		error: (msg) => addToast(msg, 'error'),
		removeToast
	}
}
