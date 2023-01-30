<script lang="ts">
	import { Hamburger } from 'svelte-hamburgers';
	import SideMenu from '$lib/SideMenu.svelte';
	import ScoreEntryArea from '$lib/ScoreEntryArea.svelte';

	let open: boolean;
</script>

<div class="absolute">
	<Hamburger bind:open />
</div>

<SideMenu open />

<ScoreEntryArea />

<style lang="postcss">
</style>
