<script lang="ts">
    export let numberDots: number;
    export let currentPosition: number;
</script>

<div class="flex flex-row gap-3">
{#each Array(numberDots) as _, i}
    {#if i === currentPosition}
        <div class='bg-cadmiumOrange rounded-full w-1.5 h-1.5'>
        </div>
    {/if}
    <div class='bg-champagne rounded-full w-1.5 h-1.5'></div>
{/each}
</div>

<style lang="postcss">
</style>
