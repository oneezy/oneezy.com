<script>
	import HeaderTransition from '$lib/Header/HeaderTransition.svelte';
	
	let CLASS; 
	export { CLASS as class };
</script>

<HeaderTransition class="p-4">
	
	{#if $$slots.left || $$slots.center || $$slots.right}

		<div class="container max-w-screen-xl mx-auto flex items-center justify-center rounded-full py-4 px-8 {CLASS || ''}">
			<section class="flex-1 flex justify-start relative"><slot name="left"></slot></section>
			<section class="grow flex justify-center relative"><slot name="center"></slot></section>
			<section class="flex-1 flex justify-end relative"><slot name="right"></slot></section>
		</div>
	
	{:else}
		<slot />
	{/if}
	
</HeaderTransition>