<template>
	<form action="">
		<section class="">
			<Transition name="fade">
				<UserFormStepOne v-if="step === 1" v-model="userForm" step="1" />
			</Transition>
			<Transition name="fade">
				<UserFormStepOne v-if="step === 2" v-model="userForm" step="2" />
			</Transition>
			<Transition name="fade">
				<UserFormStepOne v-if="step === 3" v-model="userForm" step="3" />
			</Transition>
			<Transition name="fade">
				<UserFormStepOne v-if="step === 4" v-model="userForm" step="4" />
			</Transition>
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

	const step = ref(1)
	const userForm = ref({
		email: '',
		type: ''
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

	.form-action-buttons {
		width: 100%;
		display: flex;
		gap: var(--spacing-2);
		margin-top: var(--spacing-4);
		justify-content: center;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition:
			opacity 0.5s ease 0.1s,
			transform 0.5s ease 0.1s;
		transform: translateX(-300px);
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
		transform: translateX(300px);
	}
</style>
