<script lang="ts">
	import Minus from 'phosphor-svelte/lib/Minus';
	import Plus from 'phosphor-svelte/lib/Plus';

	export let label: string;
	export let points: number;

	const handleIncreaseScore = () => {
		if (points < 999){
			points += 1;
		}
	};

	const handleDecreaseScore = () => {
		if (points > 0) {
			points -= 1;
		}
	};

	const handleInput = (event: Event) => {
		const target = <HTMLInputElement>event.target;
		if(target.value.length > 3) {
			points = Number(target.value.slice(0, 3));
		}
	};
</script>

<div class="grid grid-cols-[auto_1fr] gap-6 items-center w-full">
	<slot />
	<div class="input-container flex flex-col items-center gap-3">
		<div class="text-center">{label}</div>
		<div class="input flex flex-row gap-3 items-center">
			<button on:click={handleDecreaseScore}>
				<Minus color="#596842" size="15" weight="bold" />
			</button>
			<input 
				class="w-12 text-center px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 
        		text-sm rounded-lg focus:ring-cadmiumOrange-500 focus:border-cadmiumOrange-500 
        		focus:outline-cadmiumOrange-500" type="number" 
				bind:value={points} 
				min="0" 
				max="999" 
				on:input={handleInput}
			/>
			<button on:click={handleIncreaseScore}>
				<Plus color="#596842" size="15" weight="bold" />
			</button>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
