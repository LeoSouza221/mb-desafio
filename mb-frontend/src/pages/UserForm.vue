<template>
	<section class="form-section">
		<form
			@submit.prevent="onHandleSubmit"
			class="form-wrapper"
			aria-labelledby="user-form-title"
			aria-describedby="user-form-step"
		>
			<div class="form-subtitle-wrapper">
				<h2 id="user-form-title">Cadastro de Usuário</h2>
				<p id="user-form-step" aria-live="polite" class="form-subtitle-step">
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
		</form>
	</section>
</template>

<script setup>
	import { ref, provide } from 'vue'
	import { useCreateUser } from '@/composables/useCreateUser'
	import { useToast } from '@/composables/useToast'
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

	const { createUser, loading } = useCreateUser()
	const { success, error: errorToast } = useToast()

	function updateCurrentStep(step) {
		currentStep.value = step
	}

	function resetUserData() {
		user.value = {
			email: '',
			type: 'pf',
			name: '',
			document: '',
			birthday: '',
			phoneNumber: '',
			password: ''
		}
	}

	async function onHandleSubmit() {
		const userData = {
			email: user.value.email,
			type: user.value.type,
			name: user.value.name,
			document: user.value.document,
			birthday: user.value.birthday,
			phoneNumber: user.value.phoneNumber,
			password: user.value.password
		}

		const { error } = await createUser(userData)
		if (!error.value) {
			success('Usuário criado com sucesso!')

			resetUserData()
			updateCurrentStep(1)
		} else {
			const responseError = JSON.parse(error.value.message)
			const errorMessage = responseError?.message || 'Ocorreu um erro ao criar o usuário.'
			const missingFields = responseError?.missingFields?.join(', ') || ''

			errorToast(`${errorMessage}: ${missingFields}`)
		}
	}

	provide('step', {
		currentStep,
		updateCurrentStep,
		loading
	})
</script>

<style scoped>
	.form-section {
		flex: 1;
		padding: var(--spacing-4);
		display: flex;
		place-items: center;
		gap: var(--spacing-4);
	}

	h2 {
		font-size: var(--spacing-6);
	}

	.form-wrapper {
		width: 100%;
		flex-direction: column;
		gap: var(--spacing-4);
		overflow: hidden;
		margin: 0 auto;
		padding: var(--spacing-4);
		background: white;
		border-radius: var(--radius);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-wrap: wrap;
		max-width: 600px;
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
