<script lang="ts">
	import SlideOutInfoCard from '$lib/SlideOutInfoCard.svelte';
</script>

<div class="w-full h-full grid grid-cols-1 grid-rows-[auto_repeat(3,1fr)] gap-8 pt-4 pb-4">
	<h1 class="mr-8 ml-8 text-2xl">
		WELCOME TO THE <b>TERRAFORMING MARS</b> SCORE CALCULATOR
	</h1>
	<div class="pl-8 overflow-hidden">
		<SlideOutInfoCard isPullToLeft={true} isComingSoon={false}>
			<h3 slot="title" class="text-lg font-semibold">CALCULATE YOUR FINAL SCORE</h3>
			<button slot="button" class="button-primary"> FINAL SCORE CALCULATOR </button>
			<p slot="infotext" class="text-base font-normal">
				Use this calculator at the end of a game to input your points earned in each section and
				calculate the final scores of each player
			</p>
		</SlideOutInfoCard>
	</div>
	<div class="pr-8 overflow-hidden">
		<SlideOutInfoCard isPullToLeft={false} isComingSoon={false}>
			<h3 slot="title" class="text-lg font-semibold">CALCULATE YOUR SCORE AT EACH TURN</h3>
			<button slot="button" class="button-primary">TURN BASED CALCULATOR</button>
			<p slot="infotext" class="text-base font-normal">
				Use this calculator each round to keep calculate and analyse how each player scored
				throughout the game, as well as the final scores
			</p>
		</SlideOutInfoCard>
	</div>
	<div class="pl-8 overflow-hidden">
		<SlideOutInfoCard isPullToLeft={true} isComingSoon={true}>
			<h3 slot="title" class="text-lg font-semibold">CALCULATE SCORE WITH BOARD SIMULATOR</h3>
			<button slot="button" class="button-primary">BOARD SIM CALCULATOR</button>
			<p slot="infotext" class="text-base font-normal" />
		</SlideOutInfoCard>
	</div>
</div>

<style lang="postcss">
</style>
