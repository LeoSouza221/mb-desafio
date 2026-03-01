<template>
	<div class="form-step-one">
		<h2>Senha de acesso</h2>
		<div class="form-container">
			<AppInput
				v-model="modelValue.password"
				label="Senha"
				errorMessage="Senha é obrigatória"
				type="password"
				required
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
			phoneNumber: '',
			password: ''
		})
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
