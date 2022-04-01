<script>
  import MiniLogo from "$lib/Logo/MiniLogo.svelte";
  import Theme from "$lib/Theme.svelte";
  import Nav from "$lib/Nav.svelte";
  import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
  
  export let header;
  let direction;
  let y;

  onMount(() => {
    let header;
    let direction = "up";
    let y = window.scrollY;
  });

  function handleScroll(event) {
    direction = window.scrollY > y ? "down" : "up";
    y = window.scrollY;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<header in:fly={{ x: -50, duration: 500, delay: 500 }} 
        out:fly={{ duration: 500, delay: 500 }}
        bind:clientHeight={header} 
        style:transform={direction === 'down' ? `translateY(-${header}px)` : 'translateY(0px)'} 
        class="py-4 text-black dark:text-white fixed top-0 left-0 right-0 z-10">

  <div class="container mx-auto max-w-screen-xl px-12 flex items-center justify-between py-4 rounded-full {direction === 'up' ? 'border-4 border-black bg-black/80 dark:from-white dark:bg-white/70 backdrop-blur-lg' : ''}">
    <a href="/" class="flex-1">
      <MiniLogo class="h-10" />
    </a>
    <Nav class="flex-1 flex items-center justify-center" />
    <section class="flex-1 flex items-center justify-end">
      <Theme />
    </section>
  </div>
</header>


<style>
  header { position: fixed; top: 0; left: 0; right: 0; transition: .25s ease-in-out; }
</style>















