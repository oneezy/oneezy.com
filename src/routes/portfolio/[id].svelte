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
	import { scrollY } from '$stores/device.js';
  import { fly, fade, scale } from 'svelte/transition';
  import { backIn } from 'svelte/easing';
  export let portfolio;
  
  function projectName(str) {
    return str && str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');
  }
</script>

<svelte:head>
  {#each portfolio as project}
    <title>{project.name}</title>
    <meta name="description" content="{project.description}">

    <meta property="og:url" content="http://www.oneezy.com/index.html" />
    <meta property="og:title" content="{project.name}" />
    <meta property="og:description" content="{project.description}" />
    <meta property="og:image" content="{project.name}" />
  {/each}
</svelte:head>

<div in:fly={{ x: -40, duration: 1000, delay: 500 }} out:fade class="py-6 px-8 fixed left-0 top-0 z-10">
  <a href="/portfolio" class="bg-black text-white flex gap-3 items-center text-xl uppercase font-medium rounded-full py-4 pl-6 pr-8" sveltekit:prefetch>
    <img class="invert h-7 w-7" src="/icons/arrow-left.svg" alt="Back Button">
    <span>Back</span>
  </a>
</div>

<main in:scale={{ start: 1.1, duration: 1000, delay: 500}} out:fade class="h-[200vh]">
  {#each portfolio as project}

    <section class="w-full h-[50vh] relative flex flex-col items-center justify-center overflow-hidden bg-black">
      <!-- BG Cover -->
      <img 
           style:object-position={ `50% ${ $scrollY * -.05 }px` }
           class="object-cover object-top w-full h-full absolute z-0" 
           src="/portfolio/{projectName(project.name)}/cover.png" 
           alt="{project.name}" />


      <!-- Logo + Buttons -->
      <!-- <div in:fly={{ y: 100, duration: 1000, opacity: 1, delay: 500 }} out:fade   -->
        <div style:transform={ `translateY(${ $scrollY * -.5 }px)` }
             class="flex flex-col items-center justify-center">

             <img class="w-full" src="/portfolio/{projectName(project.name)}/logo.png" alt="{project.name}" />

      </div>
    </section>



    <div class="prose lg:prose-xl mx-auto my-8">
      <h1 class="text-black dark:text-white pt-6 relative mx-auto text-center" style="margin-bottom: 0;">{project.name}</h1>
      <p class="text-center not-prose">{project.description}</p>

      <div class="flex items-center justify-center gap-4 relative not-prose my-12">
        <a href="{project.url}" target="_blank" class="button dark:invert">DEMO</a>
        <a href="{project.github}" target="_blank" class="button dark:invert">CODE</a>
      </div>
      
      <ul>
        <li>
          <b>type</b>
          <span>{project.type}</span>
        </li>
        <li>
          <b>category</b>
          <span>{project.category}</span>
        </li>
        <li>
          <b>status</b>
          <span>{project.status}</span>
        </li>
        <li>
          <b>date</b>
          <span>{project.date}</span>
        </li>
        <li>
          <b>url</b>
          <span>{project.url}</span>
        </li>
        <li>
          <b>dev</b>
          <span>{project.dev}</span>
        </li>
        <li>
          <b>github</b>
          <span>{project.github}</span>
        </li>
        <li>
          <b>npm</b>
          <span>{project.npm}</span>
        </li>
      </ul>
    </div>

  {/each}
</main>