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
	import { mediaQuery } from '$stores/media';
	import { screenH, scrollY, scrollDir, scrollUp, scrollDown, scrollTop, scrollBottom } from '$stores/device.js';
  import { page } from '$app/stores';
  import Device from '$lib/Device.svelte';
  import BG from '$lib/BG/BG.svelte';
  import Scrollbar from '$lib/Scrollbar.svelte';
  import Header from '$lib/Header/Header.svelte';
	import HeaderContainer from '$lib/Header/HeaderContainer.svelte';
  import Menu from '$lib/Menu.svelte';
  import Transition from '$lib/Transition.svelte';
  import Icon from "$lib/Logo/Icon.svelte";
  import Theme from "$lib/Theme.svelte";
  import Nav from "$lib/Nav.svelte";
  import Social from "$lib/Social.svelte";
  export let url;
  let device;

	const sm = mediaQuery('(min-width: 0px) and (max-width: 767px)');
	const md = mediaQuery('(min-width: 0px) and (max-width: 1024px)');
  import '../app.css';
</script>

<Device device="hidden" /> 
<BG />

{#if !$md}
  <Scrollbar />
{/if}

{#if $page.url.pathname != '/' }

  <Header class="p-4 md:p-8">
    {#if $md}
    <HeaderContainer class="max-w-screen-xl rounded-full py-2 px-4 md:py-4 md:px-8">
      <Menu slot="left" />
      <Icon slot="center" />
      <Theme slot="right" />
    </HeaderContainer>
    {:else}
    <HeaderContainer class="max-w-screen-xl rounded-full py-2 px-4 md:py-4 md:px-8">
      <Icon slot="left" />
      <Nav slot="center" />
      <Theme slot="right" />
    </HeaderContainer>
    {/if}
  </Header>

{/if}

<Transition 
  {url}
  id="{ $page.routeId == '' ? 'home' : $page.routeId }" 
  class="{ $page.url.pathname != '/' ? 'py-56' : '' }">
  <slot />
</Transition>

{#if $page.url.pathname != '/' }
<footer class="container mx-auto p-4 md:p-8 sticky top-[100vh]">
  <Social />
</footer>
{/if}