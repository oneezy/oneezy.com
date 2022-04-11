<script context="module">
  export async function load({ fetch, params }) {
    const res = await fetch(`https://opensheet.elk.sh/1822epRj2XCFzLaYxvEIGVkPfF8qYdAbAqWv4bnqUP8A/Portfolio`);
    const data = await res.json();

    if(res.ok) {
      return {
        props: { 
          portfolio: data.filter(item => item.id == params.id),
        }
      };
    }
    else if(res.status === 404) {
      return {
        props: { portfolio: [] }
      };
    }
  }
</script>

<script>
  import Header from '$lib/Header/Header.svelte';
  import HeaderContainer from '$lib/Header/HeaderContainer.svelte';
  import { fly, fade, scale } from 'svelte/transition';
  import { backIn } from 'svelte/easing';
  export let portfolio;
</script>

<div in:fly={{ x: -40, duration: 1000, delay: 500 }} out:fade class="py-6 px-8 bg-gradient-to-b from-black to-transparent fixed left-0 top-0 right-0 z-10">
  <a href="/portfolio" class="text-white flex gap-4 items-center text-xl uppercase font-medium" sveltekit:prefetch>
    <img class="invert h-7 w-7" src="/icons/arrow-left.svg" alt="Back Button">
    <span>Back</span>
  </a>
</div>

<main in:scale={{ start: 1.1, duration: 1000, delay: 500}} out:fade>
  {#each portfolio as project}
      <img class="w-screen h-[40vh] object-cover object-center" src="{ project.img ? project.img : 'https://dummyimage.com/1600x400' }" alt="{project.name}">

      <div class="prose lg:prose-xl mx-auto my-8">
        <h1 class="text-black dark:text-white pb-10 relative mx-auto text-center">{project.name}</h1>
      </div>
  {/each}
</main>