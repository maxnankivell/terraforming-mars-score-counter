<script lang="ts">
	import CaretLeft from 'phosphor-svelte/lib/CaretLeft';
	import CaretRight from 'phosphor-svelte/lib/CaretRight';

	export let isPullToLeft: boolean;
	let isPulledOut: boolean = false;
</script>

<div
	class="grid grid-cols-[1fr_4rem_4rem_1fr] h-full w-[200%] bg-slate-100 rounded-2xl 
	{!isPullToLeft ? (isPulledOut ? 'ml-[calc(100vw-100%)]' : 'ml-[-100%]') : ''}
	{isPullToLeft && isPulledOut ? 'ml-[-100vw]' : ''}"
	on:click={() => (isPulledOut = !isPulledOut)}
	on:keypress={(event) => (event.key === 'enter' ? (isPulledOut = !isPulledOut) : ``)}
>
	{#if isPullToLeft}
		<div><slot name="title" /><slot name="button" /></div>
	{:else}
		<slot name="infotext" />
	{/if}
	<CaretLeft size={`2rem`} />
	<CaretRight size={`2rem`} />
	{#if isPullToLeft}
		<slot name="infotext" />
	{:else}
		<div><slot name="title" /><slot name="button" /></div>
	{/if}
</div>

<style lang="postcss">
</style>
