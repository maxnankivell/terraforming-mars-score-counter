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
		class="grid grid-cols-[auto_1fr] grid-rows-13 items-center gap-4 overflow-auto overscroll-none"
	>
		<div class="bg-red-500 w-6 h-6" />
		<div class="flex flex-col">
			<label for="player_1" class="block mb-1 font-medium text-gray-900">Red Player</label>
			<input
				type="text"
				id="player_1"
				placeholder="Enter Name Here"
				class="block w-full px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cadmiumOrange-500 focus:border-cadmiumOrange-500 focus:outline-cadmiumOrange-500"
			/>
		</div>
		<div class="bg-blue-500 w-6 h-6" />
		<div class="flex flex-col">
			<label for="player_2" class="block mb-1 font-medium text-gray-900">Blue Player</label>
			<input
				type="text"
				id="player_2"
				placeholder="Enter Name Here"
				class="block w-full px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cadmiumOrange-500 focus:border-cadmiumOrange-500 focus:outline-cadmiumOrange-500"
			/>
		</div>
		<div class="bg-black w-6 h-6" />
		<div class="flex flex-col">
			<label for="player_3" class="block mb-1 font-medium text-gray-900">Black Player</label>
			<input
				type="text"
				id="player_3"
				placeholder="Enter Name Here"
				class="block w-full px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cadmiumOrange-500 focus:border-cadmiumOrange-500 focus:outline-cadmiumOrange-500"
			/>
		</div>
		<div class="bg-green-500 w-6 h-6" />
		<div class="flex flex-col">
			<label for="player_4" class="block mb-1 font-medium text-gray-900">Green Player</label>
			<input
				type="text"
				id="player_4"
				placeholder="Enter Name Here"
				class="block w-full px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cadmiumOrange-500 focus:border-cadmiumOrange-500 focus:outline-cadmiumOrange-500"
			/>
		</div>
		<div class="bg-yellow-500 w-6 h-6" />
		<div class="flex flex-col">
			<label for="player_4" class="block mb-1 font-medium text-gray-900">Yellow Player</label>
			<input
				type="text"
				id="player_4"
				placeholder="Enter Name Here"
				class="block w-full px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cadmiumOrange-500 focus:border-cadmiumOrange-500 focus:outline-cadmiumOrange-500"
			/>
		</div>
		<div class="bg-red-500 w-6 h-6" />
		<div class="flex flex-col">
			<label for="player_5" class="block mb-1 font-medium text-gray-900"> First name </label>
			<input
				type="text"
				id="player_5"
				placeholder="Enter Name Here"
				class="block w-full px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cadmiumOrange-500 focus:border-cadmiumOrange-500 focus:outline-cadmiumOrange-500"
			/>
		</div>
		<div class="bg-red-500 w-6 h-6" />
		<div class="flex flex-col">
			<label for="player_6" class="block mb-1 font-medium text-gray-900"> First name </label>
			<input
				type="text"
				id="player_6"
				placeholder="Enter Name Here"
				class="block w-full px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cadmiumOrange-500 focus:border-cadmiumOrange-500 focus:outline-cadmiumOrange-500"
			/>
		</div>
		<div class="bg-red-500 w-6 h-6" />
		<div class="flex flex-col">
			<label for="player_7" class="block mb-1 font-medium text-gray-900"> First name </label>
			<input
				type="text"
				id="player_7"
				placeholder="Enter Name Here"
				class="block w-full px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cadmiumOrange-500 focus:border-cadmiumOrange-500 focus:outline-cadmiumOrange-500"
			/>
		</div>
		<div class="bg-red-500 w-6 h-6" />
		<div class="flex flex-col">
			<label for="player_8" class="block mb-1 font-medium text-gray-900"> First name </label>
			<input
				type="text"
				id="player_8"
				placeholder="Enter Name Here"
				class="block w-full px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cadmiumOrange-500 focus:border-cadmiumOrange-500 focus:outline-cadmiumOrange-500"
			/>
		</div>
		<div class="bg-red-500 w-6 h-6" />
		<div class="flex flex-col">
			<label for="player_9" class="block mb-1 font-medium text-gray-900"> First name </label>
			<input
				type="text"
				id="player_9"
				placeholder="Enter Name Here"
				class="block w-full px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cadmiumOrange-500 focus:border-cadmiumOrange-500 focus:outline-cadmiumOrange-500"
			/>
		</div>
		<div class="bg-red-500 w-6 h-6" />
		<div class="flex flex-col">
			<label for="player_10" class="block mb-1 font-medium text-gray-900"> First name </label>
			<input
				type="text"
				id="player_10"
				placeholder="Enter Name Here"
				class="block w-full px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cadmiumOrange-500 focus:border-cadmiumOrange-500 focus:outline-cadmiumOrange-500"
			/>
		</div>
		<div class="bg-red-500 w-6 h-6" />
		<div class="flex flex-col">
			<label for="player_12" class="block mb-1 font-medium text-gray-900"> First name </label>
			<input
				type="text"
				id="player_12"
				placeholder="Enter Name Here"
				class="block w-full px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cadmiumOrange-500 focus:border-cadmiumOrange-500 focus:outline-cadmiumOrange-500"
			/>
		</div>
		<div class="bg-red-500 w-6 h-6" />
		<div class="flex flex-col">
			<label for="player_13" class="block mb-1 font-medium text-gray-900"> First name </label>
			<input
				type="text"
				id="player_13"
				placeholder="Enter Name Here"
				class="block w-full px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cadmiumOrange-500 focus:border-cadmiumOrange-500 focus:outline-cadmiumOrange-500"
			/>
		</div>
		<div class="bg-red-500 w-6 h-6" />
		<div class="flex flex-col">
			<label for="player_14" class="block mb-1 font-medium text-gray-900"> First name </label>
			<input
				type="text"
				id="player_14"
				placeholder="Enter Name Here"
				class="block w-full px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cadmiumOrange-500 focus:border-cadmiumOrange-500 focus:outline-cadmiumOrange-500"
			/>
		</div>
	</div>

	<div slot="footer" class="flex flex-row-reverse items-center">
		<button class="button-base bg-cadmiumOrange-500 box shadow-md">Confirm</button>
	</div>
</BaseModal>

<style lang="postcss">
</style>
