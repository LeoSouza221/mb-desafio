<template>
	<div class="form-step-wrapper">
		<div>
			<p class="form-subtitle">Seja bem-vindo(a)</p>
			<div class="form-container">
				<AppInput
					v-model="modelValue.email"
					label="Endereço de email"
					type="email"
					:errorMessage="emailErrorMessage"
					@blur="touched = true"
				/>
				<fieldset class="form-radio-group">
					<legend class="sr-only">Tipo de pessoa</legend>
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
				</fieldset>
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
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.form-radio-group {
		border: 0;
		margin: 0;
		padding: 0;
	}
</style>
