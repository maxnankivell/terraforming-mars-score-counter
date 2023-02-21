<script lang="ts">
	import CaretLeft from 'phosphor-svelte/lib/CaretLeft';
	import CaretRight from 'phosphor-svelte/lib/CaretRight';
	import ArrowLeft from "phosphor-svelte/lib/ArrowLeft";
	import UserCirclePlus from "phosphor-svelte/lib/UserCirclePlus";
	import { createEventDispatcher } from 'svelte';

	export let turn: number;

    const dispatch = createEventDispatcher();
	const finishGame = () => dispatch('finishGame');
	const confirm = () => dispatch('confirm');

	const onFinishGame = () => {
		finishGame();
	};

    const decreaseTurn = () => {
        if (turn > 0) {
            turn -= 1;
        }
    };

    const increaseTurn = () => {
        turn += 1;
    };

</script>

<div class="grid grid-rows-[auto_auto_auto] grid-cols-[auto_1fr_auto] gap-y-3">

	<div class="row-start-1 col-start-1 col-end-4 place-self-center ">
		<h2 class="font-semibold text-lg text-white">CURRENT TURN</h2>
	</div>

    <button class="col-start-1 row-start-2 self-center drop-shadow-md" on:click={decreaseTurn}>
		<CaretLeft color="#FFF" size="2.5rem" weight="bold" />
	</button>

    <div class="row-start-2 col-start-2 place-self-center min-w-[4rem] text-center">
		<h3 class="font-semibold text-5xl text-white">{turn}</h3>
	</div>

	<button class="col-start-3 row-start-2 self-center drop-shadow-md" on:click={increaseTurn}>
		<CaretRight color="#FFF" size="2.5rem" weight="bold" />
	</button>

    <button 
        class="row-start-3 col-start-1 col-end-4 place-self-center button-primary hover:bg-darkOliveGreen-400" 
        on:click={onFinishGame}
    >
        FINISH GAME
    </button>
</div>

<style lang="postcss">
</style>
