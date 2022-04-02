<script>
  export let portfolio;
  import PortfolioCard from "$lib/PortfolioCard.svelte";
</script>

<div class="prose lg:prose-xl mx-auto">
  <h1 class="text-black dark:text-white pb-10 relative mx-auto text-center">Portfolio</h1>
</div>
<div class="portfolio-projects grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {#each portfolio as project}
    <PortfolioCard {project} />
  {/each}
</div>