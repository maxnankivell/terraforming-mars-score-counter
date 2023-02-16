<script lang="ts">
	import CaretLeft from 'phosphor-svelte/lib/CaretLeft';
	import CaretRight from 'phosphor-svelte/lib/CaretRight';
	import type { PlayerColor } from '../constants/player-colors';
	import EntryListItem from './EntryListItem.svelte';
	import PositionIndicator from './PositionIndicator.svelte';
	import ScoreEntryArea from './ScoreEntryArea.svelte';

	export let playerName: string;
	export let playerColor: PlayerColor;
	export let numberOfPlayers: number;
	export let currentPlayerPosition: number;
</script>

<div class="h-full grid grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr] justify-center 
justify-items-center rounded-t-[40px] bg-white drop-shadow-lg">
	<div class="row-start-1 col-start-1 col-end-4 py-4 gap-3 flex flex-col items-center">
		<div>
			<PositionIndicator numberDots={numberOfPlayers} currentPosition={currentPlayerPosition} />
		</div>
		<div class="player-info flex flex-row items-center gap-3">
			<div class="w-5 h-5 rounded-sm border border-black bg-{playerColor.toString()}-500" />
			<h2 class="font-semibold text-2xl">{playerName}</h2>
		</div>
	</div>

	<div class="self-center col-start-1 row-start-1 row-end-3 pl-4">
		<CaretLeft color="#E98B43" size="24" weight="bold" />
	</div>

	<div class="self-center col-start-3 row-start-1 row-end-3 pr-4">
		<CaretRight color="#E98B43" size="24" weight="bold" />
	</div>

	<div class="col-start-2 row-start-2 overflow-scroll p-4">
		<ScoreEntryArea />
	</div>
</div>

<div class="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-t from-white" />

<style lang="postcss">
</style>
