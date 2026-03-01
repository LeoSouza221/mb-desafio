<template>
	<div class="form-step-wrapper">
		<div>
			<h2>Pessoa {{ userTypeText }}</h2>
			<div class="form-container">
				<AppInput
					v-model="modelValue.name"
					label="Nome"
					:errorMessage="nameErrorMessage"
					@blur="nameTouched = true"
				/>
				<AppInputDocument
					v-if="modelValue.type === 'pf'"
					v-model="modelValue.document"
					label="CPF"
					:errorMessage="documentErrorMessage"
					@blur="documentTouched = true"
				/>
				<AppInputDocument
					v-else
					v-model="modelValue.document"
					label="CNPJ"
					:errorMessage="documentErrorMessage"
					@blur="documentTouched = true"
				/>
				<AppInput
					v-model="modelValue.birthday"
					label="Data de Nascimento"
					type="date"
					:errorMessage="birthdayErrorMessage"
					@blur="birthdayTouched = true"
				/>
				<AppInputPhone
					v-model="modelValue.phoneNumber"
					label="Telefone"
					:errorMessage="phoneNumberErrorMessage"
					@blur="phoneNumberTouched = true"
				/>
			</div>
		</div>
		<UserFormButtonActions :disabled="formHasError" />
	</div>
</template>

<script setup>
	import { computed } from 'vue'
	import { useFieldValidator } from '../../composables/useFieldValidator'
	import AppInput from '../inputs/AppInput.vue'
	import AppInputPhone from '../inputs/AppInputPhone.vue'
	import UserFormButtonActions from './UserFormButtonActions.vue'
	import AppInputDocument from '../inputs/AppInputDocument.vue'

	const modelValue = defineModel({
		type: Object,
		default: () => ({
			email: '',
			type: '',
			name: '',
			document: '',
			birthday: '',
			phoneNumber: ''
		})
	})

	const userTypeText = computed(() => {
		return modelValue.value.type === 'pf' ? 'Física' : 'Jurídica'
	})

	const {
		touched: nameTouched,
		errorMessage: nameErrorMessage,
		hasError: nameHasError
	} = useFieldValidator(modelValue, 'name', [
		(v) => !v && 'Nome obrigatório',
		(v) => v && v.length < 3 && 'Nome deve conter pelo menos 3 caracteres'
	])

	const {
		touched: documentTouched,
		errorMessage: documentErrorMessage,
		hasError: documentHasError
	} = useFieldValidator(modelValue, 'document', [
		(v) => !v && 'Documento obrigatório',
		(v) => v && !documentLengthValidation.value(v) && documentLengthErrorMessage.value
	])

	const {
		touched: birthdayTouched,
		errorMessage: birthdayErrorMessage,
		hasError: birthdayHasError
	} = useFieldValidator(modelValue, 'birthday', [
		(v) => !v && 'Data de Nascimento obrigatória',
		(v) =>
			v && !/^\d{4}-\d{2}-\d{2}$/.test(v) && 'Data de Nascimento deve estar no formato DD/MM/AAAA'
	])

	const {
		touched: phoneNumberTouched,
		errorMessage: phoneNumberErrorMessage,
		hasError: phoneNumberHasError
	} = useFieldValidator(modelValue, 'phoneNumber', [
		(v) => !v && 'Telefone obrigatório',
		(v) => v && v.length < 10 && 'Telefone deve conter pelo menos 10 caracteres'
	])

	const documentLengthValidation = computed(() => {
		if (modelValue.value.type === 'pf') {
			return (v) => v && v.length === 11
		} else {
			return (v) => v && v.length === 14
		}
	})

	const documentLengthErrorMessage = computed(() => {
		if (modelValue.value.type === 'pf') {
			return 'CPF deve conter exatamente 11 caracteres'
		} else {
			return 'CNPJ deve conter exatamente 14 caracteres'
		}
	})

	const formHasError = computed(() => {
		return (
			nameHasError.value ||
			documentHasError.value ||
			birthdayHasError.value ||
			phoneNumberHasError.value
		)
	})
</script>
