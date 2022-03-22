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
  import BG from '$lib/BG.svelte';
  import Nav from "$lib/Nav.svelte";
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

<main class="flex flex-col justify-center h-full w-full relative text-black dark:text-white">
  <Nav/>
  <slot />
</main>