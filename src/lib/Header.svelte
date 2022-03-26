<script>
  import MiniLogo from "$lib/Logo/MiniLogo.svelte";
  import Theme from "$lib/Theme.svelte";
  import Nav from "$lib/Nav.svelte";
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

<header bind:clientHeight={header} 
        style:transform={direction === 'down' ? `translateY(-${header}px)` : 'translateY(0px)'}
        class="py-4 text-black dark:text-white fixed top-0 left-0 right-0 z-10">

  <div class="container mx-auto flex items-center justify-between py-6">
    <a href="/" class="flex-1">
      <MiniLogo class="h-14" />
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