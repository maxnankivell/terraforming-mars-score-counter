<script lang="ts">
	import EntryListItem from './EntryListItem.svelte';

	let standAloneGreeneryPoints = 0;
	let greeneryCityPoints = 0;
	let terraformingRatingPoints = 0;
	let cardPoints = 0;
	let milestonePoints = 0;
	let awardPoints = 0;
</script>

<div class="score-entry flex flex-col gap-9">
	<EntryListItem label="Greenery tiles on board" points={standAloneGreeneryPoints}>
		<div class="w-14 h-14 rounded-sm bg-green-500" />
	</EntryListItem>

	<EntryListItem label="Greenery tiles adjacent to your city tiles" points={greeneryCityPoints}>
		<div class="w-14 h-14 rounded-sm bg-green-500" />
	</EntryListItem>

	<EntryListItem label="Terraforming rating " points={terraformingRatingPoints}>
		<div class="w-14 h-14 rounded-sm bg-green-500" />
	</EntryListItem>

	<EntryListItem label="Card points" points={cardPoints}>
		<div class="w-14 h-14 rounded-sm bg-green-500" />
	</EntryListItem>

	<EntryListItem label="Milestone points" points={milestonePoints}>
		<div class="w-14 h-14 rounded-sm bg-green-500" />
	</EntryListItem>

	<EntryListItem label="Award points" points={awardPoints}>
		<div class="w-14 h-14 rounded-sm bg-green-500" />
	</EntryListItem>
</div>

<style lang="postcss">
</style>
