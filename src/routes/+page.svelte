<script lang="ts">
	import SlideOutInfoCard from '$lib/SlideOutInfoCard.svelte';
</script>

<div class="w-full h-full grid grid-cols-1 grid-rows-[auto_repeat(3,1fr)] gap-6">
	<h2 class="bg-yellow-300 mt-3 mr-8 ml-8 text-2xl">
		WELCOME TO THE <b>TERRAFORMING MARS</b> SCORE CALCULATOR
	</h2>
	<div class="bg-green-300 pl-8 overflow-hidden">
		<SlideOutInfoCard isPullToLeft={true}>
			<h4 slot="title">Title text</h4>
			<button slot="button">button</button>
			<p slot="infotext">info text</p>
		</SlideOutInfoCard>
	</div>
	<div class="bg-blue-700 pr-8 overflow-hidden">
		<SlideOutInfoCard isPullToLeft={false}>
			<h4 slot="title">Title text</h4>
			<button slot="button">button</button>
			<p slot="infotext">info text</p>
		</SlideOutInfoCard>
	</div>
	<div class="bg-purple-400 pl-8 overflow-hidden">
		<SlideOutInfoCard isPullToLeft={true}>
			<h4 slot="title">Title text</h4>
			<button slot="button">button</button>
			<p slot="infotext">info text</p>
		</SlideOutInfoCard>
	</div>
</div>

<style lang="postcss">
</style>
