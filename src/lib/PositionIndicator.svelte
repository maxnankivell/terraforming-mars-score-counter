<script lang="ts">
    export let numberDots: number;
    export let currentPosition: number;
</script>

<div class="flex flex-row gap-3">
{#each Array(numberDots) as _, i}
    <div class='{i === currentPosition ? 'bg-cadmiumOrange' : 'bg-champagne'} rounded-full w-1.5 h-1.5' />
{/each}
</div>

<style lang="postcss">
</style>
