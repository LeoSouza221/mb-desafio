<template>
	<Transition name="slide" mode="out-in">
		<slot />
	</Transition>
</template>

<script>
	export default {}
</script>

<style scoped>
	.slide-enter-active {
		transition:
			opacity 0.5s ease-out,
			transform 0.5s ease-out;
	}

	.slide-leave-active {
		transition:
			opacity 0.3s ease-in,
			transform 0.3s ease-in;
	}

	.slide-enter-from {
		opacity: 0;
		transform: translateX(-50%);
	}

	.slide-enter-to {
		opacity: 1;
		transform: translateX(0);
	}

	.slide-leave-from {
		opacity: 1;
		transform: translateX(0);
	}

	.slide-leave-to {
		opacity: 0;
		transform: translateX(50%);
	}
</style>
