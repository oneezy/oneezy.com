<script>
  import { fly } from 'svelte/transition';
</script>

<main class="py-40  md:py-56" in:fly={{ y:50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
  <div class="prose lg:prose-xl mx-auto">
    <h1 class="text-black dark:text-white pb-10 relative mx-auto text-center">About</h1>
  </div>

  <div class="mx-auto w-full flex items-center justify-center">
    <img src="/og/social.png" alt="">
  </div>
</main>