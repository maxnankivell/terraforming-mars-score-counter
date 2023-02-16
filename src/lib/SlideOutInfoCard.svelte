<script lang="ts">
	import CaretLeft from 'phosphor-svelte/lib/CaretLeft';
	import CaretRight from 'phosphor-svelte/lib/CaretRight';

	export let isSlideDirectionLeft: boolean;
	export let isComingSoon: boolean;
	let isPulledOut: boolean = false;
</script>

<div
	class="relative grid grid-cols-[1fr_4rem_4rem_1fr] h-full w-[200%] place-items-center bg-white rounded-2xl 
	p-6 transition-all duration-200 hover:cursor-pointer
	{!isSlideDirectionLeft ? (isPulledOut ? 'ml-[calc(100vw-100%)]' : 'ml-[-100%]') : ''}
	{isSlideDirectionLeft && isPulledOut ? 'ml-[-100vw]' : ''}
	{isComingSoon ? 'pointer-events-none touch-none select-none' : ''}"
	on:click={() => (isPulledOut = !isPulledOut)}
	on:keypress={(event) => (event.key === 'enter' ? (isPulledOut = !isPulledOut) : ``)}
>
	{#if isSlideDirectionLeft}
		<div class="flex flex-col justify-center items-center gap-4 text-center">
			<slot name="title" /><slot name="button" />
		</div>
	{:else}
		<slot name="infotext" />
	{/if}
	<CaretLeft size={`2rem`} />
	<CaretRight size={`2rem`} />
	{#if isSlideDirectionLeft}
		<slot name="infotext" />
	{:else}
		<div class="flex flex-col justify-center items-center gap-4 text-center">
			<slot name="title" /><slot name="button" />
		</div>
	{/if}

	{#if isComingSoon}
		<div
			class="w-1/2 h-full absolute left-0 top-0 z-10 bg-white rounded-2xl opacity-80 text-cadmiumOrange-500 
			text-opacity-80 text-center grid place-items-center text-4xl"
		>
			<h3 class="-rotate-12"><b>COMING SOON</b></h3>
		</div>
	{/if}
</div>

<style lang="postcss">
</style>
