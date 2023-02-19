<script lang="ts">
	import SideMenu from '$lib/SideMenu.svelte';
	import ScoreEntryArea from '$lib/ScoreEntryList.svelte';
	import PlayerScoreEntryArea from '$lib/PlayerScoreEntryArea.svelte';
	import { PlayerColor } from '../../../constants/player-colors';

	let open: boolean;
</script>

<div class="h-screen grid grid-rows-[auto_1fr]">
	<div class="h-14" />
	<div class="overflow-auto">
		<PlayerScoreEntryArea playerName="Player One" playerColor={PlayerColor.RED} numberOfPlayers={4} currentPlayerPosition={0} />
	</div>
</div>

<style lang="postcss">
</style>
