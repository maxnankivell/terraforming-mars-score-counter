<script lang="ts">
	import { createEventDispatcher, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal: HTMLDivElement;

	const handle_keydown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = <NodeListOf<HTMLElement>>modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);

			const activeElement: HTMLElement | null = <HTMLElement>document.activeElement;
			if (!activeElement) {
				return;
			}
			let index = tabbable.indexOf(activeElement);
			if (index === -1 && e.shiftKey) {
				index = 0;
			}

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== 'undefined' && <HTMLElement>document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown} />

<div
	class="fixed top-0 left-0 w-screen h-screen bg-black opacity-30 z-50"
	on:click={close}
	on:keydown={(e) => (e.key === 'Escape' ? close() : ``)}
/>

<div
	class="absolute grid grid-rows-[auto_1fr_auto] gap-4 left-1/2 top-1/2 w-[calc(100vw-4em)] 
	max-w-lg max-h-[calc(100vh-4em)] overflow-auto -translate-x-1/2 -translate-y-1/2 p-6 bg-white 
	z-50 overscroll-none rounded-3xl"
	role="dialog"
	aria-modal="true"
	bind:this={modal}
>
	<slot name="header" />
	<slot />
	<slot name="footer" />
</div>

<style lang="postcss">
</style>
