<template>
	<div class="form-step-one">
		<div>
			<h2>Seja bem-vindo(a)</h2>
			<div class="form-container">
				<AppInput
					v-model="modelValue.email"
					label="Endereço de email"
					:errorMessage="emailErrorMessage"
					@blur="touched = true"
				/>
				<div class="form-radio-group" role="user-document">
					<AppInputRadio
						v-model="modelValue.type"
						label="Pessoa física"
						value="pf"
						name="userDocument"
					/>
					<AppInputRadio
						v-model="modelValue.type"
						label="Pessoa jurídica"
						value="pj"
						name="userDocument"
					/>
				</div>
			</div>
		</div>
		<UserFormButtonActions :currentStep="1" :disabled="emailHasError" />
	</div>
</template>

<script setup>
	import AppInput from '../inputs/AppInput.vue'
	import AppInputRadio from '../inputs/AppInputRadio.vue'
	import { useFieldValidator } from '../../composables/useFieldValidator'
	import UserFormButtonActions from './UserFormButtonActions.vue'

	const modelValue = defineModel({
		type: Object,
		default: () => ({
			email: '',
			type: 'pf',
			name: '',
			document: '',
			birthday: '',
			phoneNumber: ''
		})
	})

	const {
		touched,
		errorMessage: emailErrorMessage,
		hasError: emailHasError
	} = useFieldValidator(modelValue, 'email', [
		(v) => !v && 'Email obrigatório',
		(v) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && 'Email inválido'
	])
</script>

<style scoped>
	.form-step-one {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-4);
	}

	.form-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-4);
	}

	.form-radio-group {
		display: flex;
		gap: var(--spacing-4);
	}
</style>
