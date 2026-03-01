<template>
	<div class="form-step-one">
		<h2>Revise suas informações</h2>
		<div class="form-container">
			<AppInput v-model="modelValue.email" label="Endereço de email" disabled />
			<AppInput v-model="modelValue.name" label="Nome" />
			<AppInput
				v-if="modelValue.type === 'pf'"
				v-model="modelValue.document"
				label="CPF"
				disabled
			/>
			<AppInput v-else v-model="modelValue.document" label="CNPJ" disabled />
			<AppInput v-model="modelValue.birthday" label="Data de Nascimento" disabled />
			<AppInput v-model="modelValue.phoneNumber" label="Telefone" disabled />
			<AppInput v-model="modelValue.password" label="Senha" type="password" disabled />
		</div>
	</div>
</template>

<script setup>
	import { computed } from 'vue'
	import AppInput from '../inputs/AppInput.vue'

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
</script>

<style scoped>
	.form-step-one {
		width: 100%;
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
