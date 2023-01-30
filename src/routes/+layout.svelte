<script lang="ts">
	import '../styles/global.css';
</script>

<div class="global-styles bg-orange-200 dark:bg-orange-200">
	<slot />
</div>

<style lang="postcss">
	.global-styles {
		width: 100vw;
		height: 100vh;
	}
</style>
