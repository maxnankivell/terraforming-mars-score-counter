<script lang="ts">
	import ArrowLeft from "phosphor-svelte/lib/ArrowLeft";
	import UserCirclePlus from "phosphor-svelte/lib/UserCirclePlus";
	import PlayerScoreEntryArea from '$lib/PlayerScoreEntryArea.svelte';
	import { PlayerColor } from '../../../constants/player-colors';

	let open: boolean;

	const showScoreBoard = () => {
		//TODO: show score board
	}

	const createNewGame = () => {
		//TODO: create new game	
	}
</script>

<div class="h-screen grid grid-rows-[auto_1fr]">

	<button class="row-start-1 col-start-1 place-self-start drop-shadow-md mt-8 mb-4 mx-7">
		<ArrowLeft color="#FFF" size="2.5rem" weight="bold" />
	</button>
	<button class="row-start-1 col-start-1 justify-self-end self-start drop-shadow-md mt-8 mb-4 mx-7">
		<UserCirclePlus color="#FFF" size="2.5rem" weight="regular" />
	</button>

	<div class="row-start-2 col-start-1 overflow-auto">
		<PlayerScoreEntryArea playerName="Player One" playerColor={PlayerColor.RED} numberOfPlayers={4} currentPlayerPosition={0} />
	</div>

	<div class="row-start-2 col-start-1 justify-self-center self-end z-20 pb-4 flex items-center justify-center gap-5">
		<button
			class="button-primary hover:bg-darkOliveGreen-400"
			on:click={showScoreBoard}
		>
			SCOREBOARD
		</button>
		<button 
			class="button-primary hover:bg-darkOliveGreen-400" 
			on:click={createNewGame}
		>
			NEW GAME
		</button>
	</div>
</div>

<style lang="postcss">
</style>
