<script>
  import TOC from '$lib/TOC.svelte';
  import { page } from '$app/stores';
  import { fly } from 'svelte/transition';
</script>

<svelte:head>
  <title>About Justin O'Neill | Oneezy</title>
  <meta name="description" content="I'm a self-taught Frontend Developer and UI/UX Designer with over 10 years experience in the industry. I have a passion for creating performant web apps that work cross browser and fit to any device.">
  
  <meta property="og:url" content="{$page.url.href}" />
  <meta property="og:title" content="About Justin O'Neill | Oneezy" />
  <meta property="og:description" content="I'm a self-taught Frontend Developer and UI/UX Designer with over 10 years experience in the industry. I have a passion for creating performant web apps that work cross browser and fit to any device." />
  <meta property="og:image" content="{$page.url.origin}/opengraph.png" />
</svelte:head>

<main class="py-40 md:py-56" in:fly={{ y:50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
  <div class="prose dark:prose-invert lg:prose-xl container">
    <h1 class="text-black dark:text-white pb-10 relative text-center">About</h1>
    <div class="rounded-full overflow-hidden flex items-center justify-center w-48 h-48 mx-auto">
      <img class="w-full h-full object-cover object-center" src="/oneezy.png" alt="Justin O'Neill">
    </div>

    <!-- <div class="flex flex-col md:flex-row items-start justify-center my-8 gap-8 not-prose mx-auto"> -->
    <div class="flex flex-col md:flex-row my-8 gap-4 not-prose mx-auto w-max">

      <section class="flex items-start justify-start gap-2">
        <img class="img-icon w-8 h-8" src="/icons/user.svg" alt="user icon">
        <h2 class="text-2xl font-semibold text-black dark:text-white">Justin O'Neill</h2>
      </section>
      <section class="flex items-start justify-start gap-2">
        <img class="img-icon w-8 h-8" src="/icons/location.svg" alt="location icon">
        <span class="text-2xl font-semibold text-black dark:text-white">Planet Earth</span>
      </section>

    </div>

    <p class="text-slate-700 dark:text-slate-300">
      I'm a self-taught Frontend Developer and UI/UX Designer with over 10 years experience in the industry. 
      I have a passion for creating performant web apps that work cross browser and fit to any device. 
      I love the variety of projects I get to work on- from branding, to cryptocurrency startups, to custom web fonts.
      Interested in working together or just want to say what up? Reach out!
    </p>
      
    <div class="w-full md:w-3/4 my-12 mx-auto">
      <TOC>
        <slot slot="key">email</slot>
        <slot slot="value">justinoneill2007 (at) gmail.com</slot>
        <!-- <span slot="value" class="linktext font-medium">justinoneill2007 (at) gmail.com</span> -->
      </TOC>

      <TOC>
        <slot slot="key">github</slot>
        <a href="https://github.com/oneezy" target="_blank" slot="value" class="linktext">@oneezy</a>
      </TOC>

      <TOC>
        <slot slot="key">twitter</slot>
        <a href="https://twitter.com/oneeezy" target="_blank" slot="value" class="linktext">@oneeezy</a>
      </TOC>
    </div>
  </div>
</main>