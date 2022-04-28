<script>
  import { page } from '$app/stores';
  import Hero from '$lib/Hero.svelte';
  import { fly } from 'svelte/transition';
</script>

<svelte:head>
  <title>Oneezy | Justin O'Neill</title>
  <meta name="description" content="Let oneezy' guide you towards the path of technology enlightenment.">
  
  <meta property="og:url" content="{$page.url.href}" />
  <meta property="og:title" content="Oneezy | Justin O'Neill" />
  <meta property="og:description" content="Let oneezy' guide you towards the path of technology enlightenment." />
  <meta property="og:image" content="{$page.url.origin}/opengraph.png" />
</svelte:head>

<main in:fly={{ y: 50, duration: 500, delay: 1000 }} out:fly={{ duration: 500 }}>
  <Hero />
</main> 