<template>
	<div class="form-step-wrapper">
		<div>
			<h2>Senha de acesso</h2>
			<div class="form-container">
				<AppInput
					v-model="modelValue.password"
					label="Senha"
					:errorMessage="passwordErrorMessage"
					type="password"
					required
					@blur="passwordTouched = true"
				/>
			</div>
		</div>
		<UserFormButtonActions :disabled="passwordHasError" />
	</div>
</template>

<script setup>
	import { useFieldValidator } from '@/composables/useFieldValidator'
	import AppInput from '../inputs/AppInput.vue'
	import UserFormButtonActions from './UserFormButtonActions.vue'

	const modelValue = defineModel({
		type: Object,
		default: () => ({
			email: '',
			type: '',
			name: '',
			document: '',
			birthday: '',
			phoneNumber: '',
			password: ''
		})
	})

	const {
		touched: passwordTouched,
		errorMessage: passwordErrorMessage,
		hasError: passwordHasError
	} = useFieldValidator(modelValue, 'password', [
		(v) => !v && 'Senha obrigatória',
		(v) => v && v.length < 6 && 'Senha deve conter pelo menos 6 caracteres'
	])
</script>
