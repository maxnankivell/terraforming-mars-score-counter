<script lang="ts">
	import ScoreEntryListItem from './ScoreEntryListItem.svelte';

	let standAloneGreeneryPoints = 0;
	let greeneryCityPoints = 0;
	let terraformingRatingPoints = 0;
	let cardPoints = 0;
	let milestonePoints = 0;
	let awardPoints = 0;
</script>

<div class="score-entry flex flex-col gap-9">
	<ScoreEntryListItem label="Greenery tiles on board" points={standAloneGreeneryPoints}>
		<div class="w-14 h-14 rounded-sm bg-green-500" />
	</ScoreEntryListItem>

	<ScoreEntryListItem label="Greenery tiles adjacent to your city tiles" points={greeneryCityPoints}>
		<div class="w-14 h-14 rounded-sm bg-green-500" />
	</ScoreEntryListItem>

	<ScoreEntryListItem label="Terraforming rating " points={terraformingRatingPoints}>
		<div class="w-14 h-14 rounded-sm bg-green-500" />
	</ScoreEntryListItem>

	<ScoreEntryListItem label="Card points" points={cardPoints}>
		<div class="w-14 h-14 rounded-sm bg-green-500" />
	</ScoreEntryListItem>

	<ScoreEntryListItem label="Milestone points" points={milestonePoints}>
		<div class="w-14 h-14 rounded-sm bg-green-500" />
	</ScoreEntryListItem>

	<ScoreEntryListItem label="Award points" points={awardPoints}>
		<div class="w-14 h-14 rounded-sm bg-green-500" />
	</ScoreEntryListItem>
</div>

<style lang="postcss">
</style>
