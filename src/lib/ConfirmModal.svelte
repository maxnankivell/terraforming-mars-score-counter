<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import BaseModal from './BaseModal.svelte';

	export let text: string;

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');
	const confirm = () => dispatch('confirm');

	const onClose = () => {
		close();
	};
	const onConfirm = () => {
		confirm();
	};
</script>

<BaseModal on:close={onClose}>
	<div slot="header" class="flex flex-col items-center mb-2">
		<h2 class="text-xl text-center"><b>{text}</b></h2>
	</div>

	<div slot="footer" class="flex items-center justify-center gap-5">
		<button
			class="button-base text-white bg-cadmiumOrange-500 hover:bg-cadmiumOrange-400"
			on:click={onClose}
		>
			Cancel
		</button>
		<button class="button-base bg-champagne-500 hover:bg-champagne-400" on:click={onConfirm}>
			Confirm
		</button>
	</div>
</BaseModal>

<style lang="postcss">
</style>
