<script lang="ts">
	export let id: string;
	export let labelText: string;
</script>

<div class="flex flex-col">
	<label for={id} class="block font-medium text-gray-900">{labelText}</label>
	<input
		type="text"
		{id}
		placeholder="Enter Name Here"
		class="block w-full px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 
        text-sm rounded-lg focus:ring-cadmiumOrange-500 focus:border-cadmiumOrange-500 
        focus:outline-cadmiumOrange-500"
	/>
</div>

<style lang="postcss">
</style>
