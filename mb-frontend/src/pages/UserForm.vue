<template>
	<form action="">
		<section class="form-section">
			<h4>
				Etapa <span class="form-text-step">{{ currentStep }}</span> de
				<span class="form-text-step">4</span>
			</h4>
			<AppTransition>
				<UserFormStepOne v-if="currentStep === 1" key="stepOne" v-model="user" />
				<UserFormStepTwo v-else-if="currentStep === 2" key="stepTwo" v-model="user" />
				<UserFormStepThree v-else-if="currentStep === 3" key="stepThree" v-model="user" />
				<UserFormStepFour v-else-if="currentStep === 4" key="stepFour" v-model="user" />
			</AppTransition>
		</section>
	</form>
</template>

<script setup>
	import { ref, provide } from 'vue'
	import UserFormStepOne from '../components/user-form/UserFormStepOne.vue'
	import UserFormStepTwo from '../components/user-form/UserFormStepTwo.vue'
	import UserFormStepThree from '../components/user-form/UserFormStepThree.vue'
	import UserFormStepFour from '../components/user-form/UserFormStepFour.vue'
	import AppTransition from '../components/AppTransition.vue'

	const currentStep = ref(1)
	const user = ref({
		email: '',
		type: 'pf',
		name: '',
		document: '',
		birthday: '',
		phoneNumber: ''
	})

	function updateCurrentStep(step) {
		currentStep.value = step
	}

	provide('step', {
		currentStep,
		updateCurrentStep
	})
</script>

<style scoped>
	form {
		height: 100%;
		padding: var(--spacing-4);
		display: flex;
		place-items: center;
		gap: var(--spacing-4);
	}

	section {
		margin: 0 auto;
		padding: var(--spacing-4);
		background: white;
		border-radius: var(--radius);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-wrap: wrap;
		max-width: 400px;
	}

	h2 {
		font-size: var(--spacing-5);
		margin-bottom: var(--spacing-2);
	}

	.form-section {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-4);
		overflow: hidden;
	}

	.form-text-step {
		font-size: var(--spacing-4);
		color: var(--primary);
	}
</style>
