<template>
	<form action="">
		<section class="form-section">
			<h4>
				Etapa <span class="form-text-step">{{ step }}</span> de
				<span class="form-text-step">4</span>
			</h4>
			<AppTransition>
				<UserFormStepOne v-if="step === 1" key="stepOne" v-model="userForm" />
				<UserFormStepTwo v-else-if="step === 2" key="stepTwo" v-model="userForm" />
				<UserFormStepThree v-else-if="step === 3" key="stepThree" v-model="userForm" />
				<UserFormStepFour v-else-if="step === 4" key="stepFour" v-model="userForm" />
			</AppTransition>
			<div class="form-action-buttons">
				<AppButton
					v-if="step !== 1"
					variant="primary"
					outline
					:loading="false"
					@click.prevent="onStepBack()"
					>Voltar</AppButton
				>
				<AppButton
					v-if="step !== 4"
					variant="primary"
					:loading="false"
					@click.prevent="onStepForward()"
					>Continuar</AppButton
				>
				<AppButton v-if="step === 4" variant="primary" :loading="false" type="submit"
					>Cadastrar</AppButton
				>
			</div>
		</section>
	</form>
</template>

<script setup>
	import { ref } from 'vue'
	import AppButton from '../components/AppButton.vue'
	import UserFormStepOne from '../components/user-form/UserFormStepOne.vue'
	import UserFormStepTwo from '../components/user-form/UserFormStepTwo.vue'
	import UserFormStepThree from '../components/user-form/UserFormStepThree.vue'
	import UserFormStepFour from '../components/user-form/UserFormStepFour.vue'
	import AppTransition from '../components/AppTransition.vue'

	const step = ref(1)
	const userForm = ref({
		email: '',
		type: 'pf',
		name: '',
		document: '',
		birthday: '',
		phoneNumber: ''
	})

	const onStepBack = () => {
		if (step.value > 1) {
			step.value--
		}
	}

	const onStepForward = () => {
		if (step.value < 4) {
			step.value++
		}
	}
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
	}

	.form-text-step {
		font-size: var(--spacing-4);
		color: var(--primary);
	}

	.form-action-buttons {
		width: 100%;
		display: flex;
		gap: var(--spacing-2);
		justify-content: center;
	}
</style>
