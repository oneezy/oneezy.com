<script>
  import { page } from '$app/stores';
  import Hero from '$lib/Hero.svelte';
  import { fly } from 'svelte/transition';
</script>

<svelte:head>
  <title>Oneezy | Justin O'Neill</title>
  <meta name="description" content="Let oneezy' guide you towards the path of technology enlightenment.">
  
  <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <link rel="canonical" href="{$page.url.href}" />

  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{$page.url.href}" />
  <meta property="og:site_name" content="Oneezy" />
  <meta property="og:title" content="Oneezy | Justin O'Neill" />
  <meta property="og:description" content="Let oneezy' guide you towards the path of technology enlightenment." />
  <meta property="og:image" content="{$page.url.origin}/opengraph.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
	<!-- <meta property="og:image:type" content="image/jpeg" /> -->
</svelte:head>

<main in:fly={{ y: 50, duration: 500, delay: 1000 }} out:fly={{ duration: 500 }}>
  <Hero />
</main>