<script lang="ts">
	import SideMenu from '$lib/SideMenu.svelte';
	import ScoreEntryArea from '$lib/ScoreEntryArea.svelte';
	import PlayerEntryArea from '$lib/PlayerEntryArea.svelte';
	import { PlayerColor } from '../../../constants/player-colors';

	let open: boolean;
</script>

<div class="h-screen grid grid-rows-[auto_1fr]">
	<div class="h-14" />
	<div class="overflow-auto">
		<PlayerEntryArea playerName="Player One" playerColor={PlayerColor.RED} numberOfPlayers={4} currentPlayerPosition={0} />
	</div>
</div>

<style lang="postcss">
</style>
