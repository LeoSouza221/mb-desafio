<template>
	<div class="form-step-wrapper">
		<div>
			<h2>Revise suas informações</h2>
			<div class="form-container">
				<AppInput v-model="modelValue.email" label="Endereço de email" disabled />
				<AppInput v-model="modelValue.name" label="Nome" disabled />
				<AppInputDocument v-model="modelValue.document" :label="userTypeLabel" disabled />
				<AppInput v-model="modelValue.birthday" label="Data de Nascimento" type="date" disabled />
				<AppInputPhone v-model="modelValue.phoneNumber" label="Telefone" disabled />
				<AppInput v-model="modelValue.password" label="Senha" type="password" disabled />
			</div>
		</div>
		<UserFormButtonActions :disabled="false" />
	</div>
</template>

<script setup>
	import { computed } from 'vue'
	import AppInput from '../inputs/AppInput.vue'
	import AppInputDocument from '../inputs/AppInputDocument.vue'
	import AppInputPhone from '../inputs/AppInputPhone.vue'
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

	const userTypeLabel = computed(() => {
		return modelValue.value.type === 'pf' ? 'CPF' : 'CNPJ'
	})
</script>
