<script>
  import { fly } from 'svelte/transition';
</script>

<main class="py-40  md:py-56" in:fly={{ y:50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
  <div class="prose lg:prose-xl mx-auto">
    <h1 class="text-black dark:text-white pb-10 relative mx-auto text-center">About</h1>
    <div class="rounded-full overflow-hidden flex items-center justify-center w-48 h-48 mx-auto">
      <img class="w-full h-full object-cover object-center" src="/oneezy.png" alt="Justin O'Neill">
    </div>
    <p class="dark:text-slate-400">
      I'm a self-taught Frontend Developer and UI/UX Designer with over 10 years experience in the industry. 
      I have a passion for creating performant web apps that work cross browser and fit to any device. 
      I love the variety of projects I get to work on- from branding, to cryptocurrency startups, to custom web fonts.
      Interested in working together or just want to say what up? Please reach out!
    </p>
  </div>
</main>