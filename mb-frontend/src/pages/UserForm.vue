<template>
	<form @submit.prevent="onHandleSubmit">
		<section class="form-section">
			<div class="form-subtitle-wrapper">
				<h2>Cadastro de Usuário</h2>
				<p aria-live="polite" class="form-subtitle-step">
					Etapa <span class="form-subtitle-text-step">{{ currentStep }}</span> de
					<span class="form-subtitle-text-step">4</span>
				</p>
			</div>
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
	import { useCreateUser } from '@/composables/useCreateUser'
	import UserFormStepOne from '~/user-form/UserFormStepOne.vue'
	import UserFormStepTwo from '~/user-form/UserFormStepTwo.vue'
	import UserFormStepThree from '~/user-form/UserFormStepThree.vue'
	import UserFormStepFour from '~/user-form/UserFormStepFour.vue'
	import AppTransition from '~/AppTransition.vue'

	const currentStep = ref(1)
	const user = ref({
		email: '',
		type: 'pf',
		name: '',
		document: '',
		birthday: '',
		phoneNumber: '',
		password: ''
	})

	const { createUser } = useCreateUser()

	function updateCurrentStep(step) {
		currentStep.value = step
	}

	provide('step', {
		currentStep,
		updateCurrentStep
	})

	function onHandleSubmit() {
		const userData = {
			email: user.value.email,
			type: user.value.type,
			name: user.value.name,
			document: user.value.document,
			birthday: user.value.birthday,
			phoneNumber: user.value.phoneNumber,
			password: user.value.password
		}
		console.log('Dados do usuário:', userData)

		const teste = createUser(userData)
		console.log('Resposta da API:', teste)
	}
</script>

<style scoped>
	form {
		min-height: 100%;
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
		max-width: 600px;
	}

	h2 {
		font-size: var(--spacing-6);
	}

	.form-section {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-4);
		overflow: hidden;
	}

	.form-subtitle-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.form-subtitle-step {
		font-size: var(--spacing-4);
		color: var(--text-color);
	}
	.form-subtitle-text-step {
		font-size: var(--spacing-4);
		color: var(--primary);
	}
</style>
