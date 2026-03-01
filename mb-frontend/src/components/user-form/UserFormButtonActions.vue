<template>
	<div class="form-action-buttons">
		<AppButton
			v-if="currentStep !== 1"
			variant="primary"
			outline
			:loading="false"
			@click.prevent="onStepBack()"
		>
			Voltar
		</AppButton>
		<AppButton
			v-if="currentStep !== 4"
			variant="primary"
			:loading="false"
			:disabled="props.disabled"
			@click.prevent="onStepForward()"
		>
			Continuar
		</AppButton>
		<AppButton v-if="currentStep === 4" variant="primary" :loading="false" type="submit">
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

	const { currentStep, updateCurrentStep } = inject('step')

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
