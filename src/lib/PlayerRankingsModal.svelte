<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import BaseModal from './BaseModal.svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	const onClose = () => {
		close();
	};
</script>

<BaseModal on:close={onClose}>
	<div slot="header" class="flex flex-col items-center">
		<h2 class="text-2xl">Rankings</h2>
	</div>

	<div
		class="row-start-2 row-end-3 col-start-1 col-end-2 mt-[2px] w-full h-8 bg-gradient-to-b 
		from-white z-20 pointer-events-none"
	/>

	<div
		class="grid grid-cols-[auto_1fr_auto] grid-rows-5 items-center content-center gap-4 overflow-auto overscroll-none 
		border-x-0 border-y-2 border-cadmiumOrange-500 row-start-2 row-end-3 col-start-1 col-end-2 pt-4 pb-4"
	>
		<div class="bg-red-500 w-6 h-6 rounded-sm border border-black" />
		<div class="flex flex-col items-center">
			<h4 class="text-xl">Player 3</h4>
			<h5>69 points</h5>
		</div>
		<p class="text-2xl"><b>1</b></p>

		<div class="bg-blue-500 w-6 h-6 rounded-sm border border-black" />
		<div class="flex flex-col items-center">
			<h4 class="text-xl">Player 1</h4>
			<h5>64 points</h5>
		</div>
		<p class="text-2xl"><b>2</b></p>

		<div class="bg-black w-6 h-6 rounded-sm border border-black" />
		<div class="flex flex-col items-center">
			<h4 class="text-xl">Player 5</h4>
			<h5>58 points</h5>
		</div>
		<p class="text-2xl"><b>3</b></p>

		<div class="bg-green-500 w-6 h-6 rounded-sm border border-black" />
		<div class="flex flex-col items-center">
			<h4 class="text-xl">Player 2</h4>
			<h5>55 points</h5>
		</div>
		<p class="text-2xl"><b>4</b></p>

		<div class="bg-yellow-500 w-6 h-6 rounded-sm border border-black" />
		<div class="flex flex-col items-center">
			<h4 class="text-xl">Player 4</h4>
			<h5>51 points</h5>
		</div>
		<p class="text-2xl"><b>5</b></p>
	</div>

	<div
		class="row-start-2 row-end-3 col-start-1 col-end-2 mb-[2px] self-end w-full h-8 bg-gradient-to-t 
		from-white z-20 pointer-events-none"
	/>

	<div slot="footer" class="flex items-center justify-center gap-5">
		<button class="button-base bg-cadmiumOrange-500 hover:bg-cadmiumOrange-400" on:click={onClose}>
			Close
		</button>
	</div>
</BaseModal>

<style lang="postcss">
</style>
