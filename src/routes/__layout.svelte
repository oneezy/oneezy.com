<script context="module">
  const modules = import.meta.glob('./**.svelte');
  let allmenu = [];

  for(let path in modules) {
    allmenu.push({
      label: (path.replace(/^\.\//, '').replace(/\.svelte$/, '') === 'index') ? 'home' : path.replace(/^\.\//, '').replace(/\.svelte$/, ''),
      href: (path.replace(/^\.\//, '').replace(/\.svelte$/, '') === 'index') ? '/' : path.replace(/^\.\//, '').replace(/\.svelte$/, '')
    });
  }

  export const load = async() => {
    const menu = await Promise.all(allmenu);
    return { props: { menu } };
  };
</script>

<script>
	// import { Body, classList, style } from 'svelte-body';
  import Theme from '$lib/Theme.svelte';
  import BG from '$lib/BG.svelte';
  import Logo from '$lib/Logo.svelte';
  import '../app.css';
  export let menu;
</script>

<svelte:head>
  <title>Oneezy.com</title>

  <meta name="theme-color" content="#000000">

  <!-- FACESPACE -->
  <meta property="og:site_name" content="oneezy" />
  <meta property="og:url" content="http://www.oneezy.com/index.html" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Oneezy.com | Progressive Web App Development" />
  <meta property="og:description" content="Let oneezy' guide you towards the path of technology enlightenment. You know it's time. Let's go." />
  <meta property="og:image" content="http://www.oneezy.com/images/social/social.jpg" />
  <meta property="fb:app_id" content="902427283166466" />
  <meta property="fb:admins" content="1271441153" />
</svelte:head>

<!-- <svelte:body use:classList={'bg-slate-300 dark:bg-slate-700'} /> -->

<BG />

<main class="flex flex-col items-center justify-center h-full relative text-black dark:text-white">

  <Logo />
  
  <nav class="flex flex-col items-center justify-center gap-4 mb-10 prose lg:prose-xl">
    <Theme />
    <div class="flex flex-row items-center justify-center gap-4">
    {#each menu as item}
      <a href={item.href} class="block text-black dark:text-white" sveltekit:prefetch sveltekit:noscroll>{item.label}</a>
    {/each}
    </div>
  </nav>

  <slot />
</main>