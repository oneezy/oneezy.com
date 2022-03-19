<script>
  export let portfolio;
  import PortfolioCard from "$lib/PortfolioCard.svelte";
</script>

<div class="prose lg:prose-xl mx-auto">
<h1 class="text-4xl pb-10 text-black dark:text-white relative mx-auto text-center">Portfolio</h1>
</div>
<div class="portfolio-projects grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {#each portfolio as project}
    <PortfolioCard {project} />
  {/each}
</div>