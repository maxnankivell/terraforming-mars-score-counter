<script lang="ts">
	import Minus from 'phosphor-svelte/lib/Minus';
	import Plus from 'phosphor-svelte/lib/Plus';

	export let label: string;
	export let points: number;

	const handleIncreaseScore = () => {
		points += 1;
	};

	const handleDecreaseScore = () => {
		if (points > 0) {
			points -= 1;
		}
	};
</script>

<div class="entry-list-item-container gap-6 items-center w-full">
	<slot />
	<div class="input-container flex flex-col items-center gap-3">
		<div class="label text-center">{label}</div>
		<div class="input flex flex-row gap-3 items-center">
			<button on:click={handleDecreaseScore}>
				<Minus color="#596842" size="15" weight="bold" />
			</button>
			<input class="player-input-field text-center" type="number" bind:value={points} min="0" />
			<button on:click={handleIncreaseScore}>
				<Plus color="#596842" size="15" weight="bold" />
			</button>
		</div>
	</div>
</div>

<style lang="postcss">
	.entry-list-item-container {
		display: grid;
		grid-template-columns: auto 1fr;
	}
	.label {
		grid-column: 1;
		grid-row: 1;
	}
	.input {
		grid-column: 2;
		grid-row: 1;
	}
	.player-input-field {
		width: 3ch;
	}
</style>
