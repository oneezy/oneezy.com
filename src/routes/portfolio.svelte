<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`https://opensheet.elk.sh/1822epRj2XCFzLaYxvEIGVkPfF8qYdAbAqWv4bnqUP8A/Portfolio`);
    const data = await res.json();

    if(res.ok) {
      return {
        props: { 
          test: data,
          portfolio: data.filter(item => item.hidden !== 'TRUE'),
          hidden: data.filter(item => item.hidden === 'TRUE'),
          featured: data.filter(item => item.featured === 'TRUE'),
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
  import {fly} from 'svelte/transition';
  export let portfolio;
</script>

<div in:fly={{y:50, duration: 500, delay: 500}} out:fly={{duration: 500}}>
  
  <div class="prose lg:prose-xl mx-auto">
    <h1 class="text-4xl pb-10 text-black dark:text-white relative mx-auto text-center">Portfolio</h1>
  </div>

  <div class="portfolio-projects container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {#each portfolio as project}
      {#if project.view == 'FEATURED' }
  
          <a href="{project.url ? project.url : project.dev}" target="_blank" class="flex relative aspect-video rounded-xl overflow-hidden group">
            <img class="transition absolute inset-0 w-full h-full object-cover object-center scale-110 group-hover:scale-100" src="{ project.img ? project.img : 'https://dummyimage.com/600x360' }" alt="{project.name}">
            <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-75">{project.name}</div>
          </a>

      {/if}
    {/each}
  </div>

</div>