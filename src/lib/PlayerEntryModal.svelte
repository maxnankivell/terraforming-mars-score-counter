<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import BaseModal from './BaseModal.svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');
</script>

<BaseModal>
	<div slot="header" class="flex flex-col items-center">
		<h2 class="text-2xl">Add Players</h2>
		<h5 class="text-xs">(Players left blank will not be added)</h5>
	</div>

	<div
		class="row-start-2 row-end-3 col-start-1 col-end-2 mt-[2px] w-full h-8 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none"
	/>

	<div
		class="grid grid-cols-[auto_1fr] grid-rows-5 items-center content-center gap-4 overflow-auto overscroll-none 
		border-x-0 border-y-2 border-cadmiumOrange-500 row-start-2 row-end-3 col-start-1 col-end-2 pt-4 pb-4"
	>
		<div class="bg-red-500 w-6 h-6 rounded-sm border border-black" />
		<div class="flex flex-col">
			<label for="player_1" class="block font-medium text-gray-900">Red Player</label>
			<input
				type="text"
				id="player_1"
				placeholder="Enter Name Here"
				class="block w-full px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
				focus:ring-cadmiumOrange-500 focus:border-cadmiumOrange-500 focus:outline-cadmiumOrange-500"
			/>
		</div>
		<div class="bg-blue-500 w-6 h-6 rounded-sm border border-black" />
		<div class="flex flex-col">
			<label for="player_2" class="block font-medium text-gray-900">Blue Player</label>
			<input
				type="text"
				id="player_2"
				placeholder="Enter Name Here"
				class="block w-full px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cadmiumOrange-500 focus:border-cadmiumOrange-500 focus:outline-cadmiumOrange-500"
			/>
		</div>
		<div class="bg-black w-6 h-6 rounded-sm border border-black" />
		<div class="flex flex-col">
			<label for="player_3" class="block font-medium text-gray-900">Black Player</label>
			<input
				type="text"
				id="player_3"
				placeholder="Enter Name Here"
				class="block w-full px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cadmiumOrange-500 focus:border-cadmiumOrange-500 focus:outline-cadmiumOrange-500"
			/>
		</div>
		<div class="bg-green-500 w-6 h-6 rounded-sm border border-black" />
		<div class="flex flex-col">
			<label for="player_4" class="block font-medium text-gray-900">Green Player</label>
			<input
				type="text"
				id="player_4"
				placeholder="Enter Name Here"
				class="block w-full px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cadmiumOrange-500 focus:border-cadmiumOrange-500 focus:outline-cadmiumOrange-500"
			/>
		</div>
		<div class="bg-yellow-500 w-6 h-6 rounded-sm border border-black" />
		<div class="flex flex-col">
			<label for="player_4" class="block font-medium text-gray-900">Yellow Player</label>
			<input
				type="text"
				id="player_4"
				placeholder="Enter Name Here"
				class="block w-full px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cadmiumOrange-500 focus:border-cadmiumOrange-500 focus:outline-cadmiumOrange-500"
			/>
		</div>
	</div>

	<div
		class="row-start-2 row-end-3 col-start-1 col-end-2 mb-[2px] mt-auto w-full h-8 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"
	/>

	<div slot="footer" class="flex items-center justify-center gap-5">
		<button class="button-base bg-champagne-500 hover:bg-champagne-400">Cancel</button>
		<button class="button-base bg-cadmiumOrange-500 text-white hover:bg-cadmiumOrange-400">
			Confirm
		</button>
	</div>
</BaseModal>

<style lang="postcss">
</style>
