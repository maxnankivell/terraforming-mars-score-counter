<script lang="ts">
	import CaretLeft from 'phosphor-svelte/lib/CaretLeft';
	import CaretRight from 'phosphor-svelte/lib/CaretRight';
	import type { PlayerColor } from '../constants/player-colors';
	import PositionIndicator from './PositionIndicator.svelte';
	import ScoreEntryList from './ScoreEntryList.svelte';

	export let playerName: string;
	export let playerColor: PlayerColor;
	export let numberOfPlayers: number;
	export let currentPlayerPosition: number;
</script>

<div class="h-full grid grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr] justify-center 
justify-items-center rounded-t-[40px] bg-white drop-shadow-lg pb-4">
	<div class="row-start-1 col-start-1 col-end-4 pt-6 pb-1 gap-3 flex flex-col items-center">
		<div>
			<PositionIndicator numberDots={numberOfPlayers} currentPosition={currentPlayerPosition} />
		</div>
		<div class="player-info flex flex-row items-center gap-3">
			<div class="w-5 h-5 rounded-sm border border-black {playerColor.toString()}" />
			<h2 class="font-semibold text-2xl">{playerName}</h2>
		</div>
	</div>

	<button class="self-center col-start-1 row-start-1 row-end-3 ml-4 drop-shadow-md">
		<CaretLeft color="#E98B43" size="2rem" weight="bold" />
	</button>

	<button class="self-center col-start-3 row-start-1 row-end-3 mr-4 drop-shadow-md">
		<CaretRight color="#E98B43" size="2rem" weight="bold" />
	</button>

	<div
		class="col-start-2 row-start-2 w-full h-8 bg-gradient-to-b 
		from-white z-20 pointer-events-none"
	/>

	<div class="col-start-2 row-start-2 overflow-auto px-4 pt-7 pb-14">
		<ScoreEntryList />
	</div>

	<div
		class="col-start-2 row-start-2 self-end w-full h-14 bg-gradient-to-t 
		from-white z-20 pointer-events-none"
	/>


</div>

<style lang="postcss">
</style>
