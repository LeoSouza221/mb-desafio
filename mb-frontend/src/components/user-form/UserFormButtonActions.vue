<template>
	<div class="form-action-buttons">
		<AppButton
			v-if="currentStep !== 1"
			type="button"
			variant="primary"
			outline
			:loading="loading"
			:disabled="loading"
			@click.prevent="onStepBack()"
		>
			Voltar
		</AppButton>
		<AppButton
			v-if="currentStep !== 4"
			type="button"
			variant="primary"
			:loading="loading"
			:disabled="props.disabled || loading"
			@click.prevent="onStepForward()"
		>
			Continuar
		</AppButton>
		<AppButton
			v-if="currentStep === 4"
			variant="primary"
			:loading="loading"
			:disabled="loading"
			type="submit"
		>
			Cadastrar
		</AppButton>
	</div>
</template>

<script setup>
	import AppButton from '../AppButton.vue'
	import { inject } from 'vue'

	const props = defineProps({
		disabled: {
			type: Boolean,
			default: false
		}
	})

	const emit = defineEmits(['stepBack', 'stepForward'])

	const { currentStep, updateCurrentStep, loading } = inject('step')

	const onStepBack = () => {
		if (currentStep.value > 1) {
			updateCurrentStep(currentStep.value - 1)
		}
	}

	const onStepForward = () => {
		if (currentStep.value < 4) {
			updateCurrentStep(currentStep.value + 1)
		}
	}
</script>

<style scoped>
	.form-action-buttons {
		width: 100%;
		display: flex;
		gap: var(--spacing-2);
		justify-content: center;
	}
</style>
