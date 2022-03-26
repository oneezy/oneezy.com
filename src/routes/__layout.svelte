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

<script>
  import { page } from '$app/stores';
  import { fly } from 'svelte/transition';
  import BG from '$lib/BG/BG.svelte';
  import Header from '$lib/Header.svelte';
  // import Footer from '$lib/Footer.svelte';

  let header;
  import '../app.css';
</script>


<BG />

{#if $page.url.pathname != '/' }
  <Header {header} />
{/if}

<main 
  id="{ $page.routeId == '' ? 'home' : $page.routeId }"
  class:pt-56={ $page.url.pathname != '/' }
  class="h-full w-full">
  <slot />
</main>
<!-- <Footer /> -->