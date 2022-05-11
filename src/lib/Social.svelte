<script>
	import { onMount } from 'svelte';

	let socials = [];

	onMount(async () => {
		const res = await fetch(`https://opensheet.elk.sh/1822epRj2XCFzLaYxvEIGVkPfF8qYdAbAqWv4bnqUP8A/Social`);
		socials = await res.json();
	});
</script>

<div class="socials flex items-center justify-center gap-2">

	{#each socials as social}
    {#if social.view !== 'HIDDEN' }
      <a href="{social.url}" target="_blank" class="social" title="{social.name}">
        <img class="h-9 w-9 dark:invert" src="/icons/social/{social.name}.svg" alt="{social.name}">
      </a>
    {/if}
	{/each}

</div>