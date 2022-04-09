<script>
  import Hero from '$lib/Hero.svelte';
  import { fly } from 'svelte/transition';
</script>

<main in:fly={{y:50, duration: 500, delay: 500}} out:fly={{duration: 500}}>
  <Hero />
</main> 