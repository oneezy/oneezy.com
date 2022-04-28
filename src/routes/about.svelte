<script>
  import { page } from '$app/stores';
  import { fly } from 'svelte/transition';
</script>

<svelte:head>
  <title>About Justin O'Neill | Oneezy</title>
  <meta name="description" content="I'm a self-taught Frontend Developer and UI/UX Designer with over 10 years experience in the industry. I have a passion for creating performant web apps that work cross browser and fit to any device.">
  
  <meta property="og:url" content="{$page.url.href}" />
  <meta property="og:title" content="About Justin O'Neill | Oneezy" />
  <meta property="og:description" content="I'm a self-taught Frontend Developer and UI/UX Designer with over 10 years experience in the industry. I have a passion for creating performant web apps that work cross browser and fit to any device." />
  <meta property="og:image" content="{$page.url.origin}/about/og.png" />
</svelte:head>

<main class="py-40 md:py-56" in:fly={{ y:50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
  <div class="prose lg:prose-xl container">
    <h1 class="text-black dark:text-white pb-10 relative text-center">About</h1>
    <div class="rounded-full overflow-hidden flex items-center justify-center w-48 h-48 mx-auto">
      <img class="w-full h-full object-cover object-center" src="/oneezy.png" alt="Justin O'Neill">
    </div>

    <div class="flex items-center justify-center my-8 gap-8 not-prose">
      <section class="flex items-center justify-center gap-2">
        <img class="img-icon w-8 h-8" src="/icons/user.svg" alt="user icon">
        <h2 class="text-2xl font-semibold text-black dark:text-white">Justin O'Neill</h2>
      </section>
      <section class="flex items-center justify-center gap-2">
        <img class="img-icon w-8 h-8" src="/icons/location.svg" alt="location icon">
        <span class="text-2xl font-semibold text-black dark:text-white">Planet Earth</span>
      </section>
    </div>
    <p class="dark:text-slate-400">
      I'm a self-taught Frontend Developer and UI/UX Designer with over 10 years experience in the industry. 
      I have a passion for creating performant web apps that work cross browser and fit to any device. 
      I love the variety of projects I get to work on- from branding, to cryptocurrency startups, to custom web fonts.
      Interested in working together or just want to say what up? Reach out!
    </p>
  </div>
</main>