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
  import { fly, fade, scale } from 'svelte/transition';
  import { backIn } from 'svelte/easing';
  export let portfolio;
</script>

<main in:scale={{ start: 1.1, to: 1, duration: 1000, delay: 400 }} out:fly={{ duration: 400 }}>
  {#each portfolio as project}
      <img class="w-full h-full object-contain object-center" src="{ project.img ? project.img : 'https://dummyimage.com/600x360' }" alt="{project.name}">

      <div class="prose lg:prose-xl mx-auto my-8">
        <h1 class="text-black dark:text-white pb-10 relative mx-auto text-center">{project.name}</h1>
      </div>
  {/each}
</main>