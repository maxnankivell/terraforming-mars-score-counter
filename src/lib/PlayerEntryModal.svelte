<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import BaseModal from './BaseModal.svelte';
	import PlayerNameInput from './PlayerNameInput.svelte';

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
	<div slot="header" class="flex flex-col items-center">
		<h2 class="text-2xl">Add Players</h2>
		<h5 class="text-xs">(Players left blank will not be added)</h5>
	</div>

	<div
		class="row-start-2 row-end-3 col-start-1 col-end-2 mt-[2px] w-full h-8 bg-gradient-to-b 
		from-white to-transparent z-20 pointer-events-none"
	/>

	<div
		class="grid grid-cols-[auto_1fr] grid-rows-5 items-center content-center gap-4 overflow-auto overscroll-none 
		border-x-0 border-y-2 border-cadmiumOrange-500 row-start-2 row-end-3 col-start-1 col-end-2 pt-4 pb-4"
	>
		<div class="bg-red-500 w-6 h-6 rounded-sm border border-black" />
		<PlayerNameInput id="player_1" labelText="Red Player" />

		<div class="bg-blue-500 w-6 h-6 rounded-sm border border-black" />
		<PlayerNameInput id="player_2" labelText="Blue Player" />

		<div class="bg-black w-6 h-6 rounded-sm border border-black" />
		<PlayerNameInput id="player_3" labelText="Black Player" />

		<div class="bg-green-500 w-6 h-6 rounded-sm border border-black" />
		<PlayerNameInput id="player_4" labelText="Green Player" />

		<div class="bg-yellow-500 w-6 h-6 rounded-sm border border-black" />
		<PlayerNameInput id="player_5" labelText="Yellow Player" />
	</div>

	<div
		class="row-start-2 row-end-3 col-start-1 col-end-2 mb-[2px] mt-auto w-full h-8 bg-gradient-to-t 
		from-white to-transparent z-20 pointer-events-none"
	/>

	<div slot="footer" class="flex items-center justify-center gap-5">
		<button class="button-base bg-champagne-500 hover:bg-champagne-400" on:click={onClose}>
			Cancel
		</button>
		<button
			class="button-base bg-cadmiumOrange-500 text-white hover:bg-cadmiumOrange-400"
			on:click={onConfirm}
		>
			Confirm
		</button>
	</div>
</BaseModal>

<style lang="postcss">
</style>
