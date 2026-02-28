<template>
	<div class="form-step-one">
		<h2>Seja bem-vindo(a) {{ step }}</h2>
		<div class="form-container">
			<AppInput
				v-model="modelValue.email"
				label="Endereço de email"
				errorMessage="Email é obrigatório"
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
</template>

<script setup>
	import AppInput from '../inputs/AppInput.vue'
	import AppInputRadio from '../inputs/AppInputRadio.vue'

	const modelValue = defineModel({
		type: Object,
		default: () => ({
			email: '',
			type: ''
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
