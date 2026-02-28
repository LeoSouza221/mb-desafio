<template>
	<div class="form-step-one">
		<h2>Seja bem-vindo(a) {{ step }}</h2>
		<div class="form-container">
			<AppInput v-model="modelValue.name" label="Nome" errorMessage="Nome é obrigatório" />
			<AppInput
				v-if="modelValue.type === 'pf'"
				v-model="modelValue.document"
				label="CPF"
				errorMessage="Documento é obrigatório"
			/>
			<AppInput
				v-else
				v-model="modelValue.document"
				label="CNPJ"
				errorMessage="Documento é obrigatório"
			/>
			<AppInput
				v-model="modelValue.birthday"
				label="Data de Nascimento"
				errorMessage="Data de Nascimento é obrigatória"
			/>
			<AppInput
				v-model="modelValue.phoneNumber"
				label="Telefone"
				errorMessage="Telefone é obrigatório"
			/>
		</div>
	</div>
</template>

<script setup>
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
	const props = defineProps({
		step: {
			type: [String, Number],
			default: ''
		}
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
