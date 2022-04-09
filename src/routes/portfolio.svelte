<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`https://opensheet.elk.sh/1822epRj2XCFzLaYxvEIGVkPfF8qYdAbAqWv4bnqUP8A/Portfolio`);
    const data = await res.json();

    if(res.ok) {
      return {
        props: { 
          portfolio: data.filter(item => item.hidden !== 'TRUE')
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
  import { fly } from 'svelte/transition';
  export let portfolio;
</script>

<main in:fly={{ y:50, duration: 500, delay: 500 }} out:fly={{duration: 500}}>
  <div class="prose lg:prose-xl mx-auto">
    <h1 class="text-black dark:text-white pb-10 relative mx-auto text-center">Portfolio</h1>
  </div>

  <div class="portfolio-projects container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each portfolio as project}
      {#if project.view == 'FEATURED' }

  <!-- <a href="{project.url ? project.url : project.dev}" target="_blank" class="flex relative aspect-video rounded-xl overflow-hidden group"> -->
        <a href="{'/portfolio/' + project.id}" sveltekit:prefetch class="flex relative aspect-video rounded-xl overflow-hidden group">
          <img class="transition absolute inset-0 w-full h-full object-cover object-center scale-110 group-hover:scale-100" src="{ project.img ? project.img : 'https://dummyimage.com/600x360' }" alt="{project.name}">
          <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-75">{project.name}</div>
        </a>

      {/if}
    {/each}
  </div>
</main>