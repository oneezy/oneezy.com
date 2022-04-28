<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`https://opensheet.elk.sh/1822epRj2XCFzLaYxvEIGVkPfF8qYdAbAqWv4bnqUP8A/Portfolio`);
    const data = await res.json();

    if(res.ok) {
      return {
        props: { 
          portfolio: data.filter(item => item.view !== 'HIDDEN')
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
  import { page } from '$app/stores';
  import { fade, fly } from 'svelte/transition';
  import { kebabCase } from '$lib/utils/utils.js';
  export let portfolio;
</script>


<svelte:head>
  <title>Portfolio | Oneezy</title>
  <meta name="description" content="The portfolio for Justin O'Neill">
  
  <meta property="og:url" content="{$page.url.href}" />
  <meta property="og:title" content="Portfolio | Oneezy" />
  <meta property="og:description" content="The portfolio for Justin O'Neill" />
  <meta property="og:image" content="{$page.url.origin}/og.png" />
</svelte:head>

<main class="py-40 md:py-56" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fade>
  <div class="prose lg:prose-xl mx-auto">
    <h1 class="text-black dark:text-white pb-10 relative mx-auto text-center">Portfolio</h1>
  </div>

  <div class="portfolio-projects container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each portfolio as project}

        <a href="/portfolio/{project.label}" sveltekit:prefetch class="flex relative aspect-video rounded-xl overflow-hidden group">
          <img class="transition absolute inset-0 w-full h-full object-cover object-center group-hover:scale-100" src="/portfolio/{ kebabCase(project.name) }/img.png" alt="{project.name}">
          <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-75"></div>
        </a>

    {/each}
  </div>
</main>