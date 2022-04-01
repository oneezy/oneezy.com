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

<script context="module">
  export const load = async ({ url }) => ({ props: { url } });
</script>

<script>
	import { screenH, scrollY, scrollDir, scrollUp, scrollDown, scrollTop, scrollBottom } from '$stores/device.js';
  import { page } from '$app/stores';
  import Device from '$lib/Device.svelte';
  import BG from '$lib/BG/BG.svelte';
  import Scrollbar from '$lib/Scrollbar.svelte';
  import Header from '$lib/Header.svelte';
  import Transition from '$lib/Transition.svelte';
  import MiniLogo from "$lib/Logo/MiniLogo.svelte";
  import Theme from "$lib/Theme.svelte";
  import Nav from "$lib/Nav.svelte";
  export let url;
  let device;

  import '../app.css';
</script>

<Device device="hidden" /> 
<BG />
<Scrollbar />

{#if $page.url.pathname != '/' }
  <Header class="flex items-center justify-center z-10"> 
    <a href="/" class="flex-1 h-8"><MiniLogo class="h-10 absolute" /></a>
    <Nav class="flex-1 flex items-center justify-center" />
    <section class="flex-1 flex items-center justify-end"><Theme /></section>
  </Header>
{/if}

<Transition 
  {url}
  id="{ $page.routeId == '' ? 'home' : $page.routeId }" 
  class="{ $page.url.pathname != '/' ? 'py-56' : '' }">
  <slot />
</Transition>