<script context="module">
	import { SITE_TITLE, SITE_SEPARATOR, SITE_AUTHOR, SITE_DESCRIPTION } from '$data/meta.js';
</script>

<script>
  import { page } from '$app/stores';
  import Hero from '$lib/Hero.svelte';
  import { fly } from 'svelte/transition';
</script>

<svelte:head>
  <title>{SITE_TITLE} {SITE_SEPARATOR} {SITE_AUTHOR}</title>
  <meta name="description" content="{SITE_DESCRIPTION}">

  <meta property="og:title" content="{SITE_TITLE} {SITE_SEPARATOR} {SITE_AUTHOR}" />
  <meta property="og:description" content="{SITE_DESCRIPTION}" />
  <meta property="og:image" content="{$page.url.origin}/opengraph.png" />
</svelte:head>

<main in:fly={{ y: 50, duration: 500, delay: 1000 }} out:fly={{ duration: 500 }}>
  <Hero />
</main>