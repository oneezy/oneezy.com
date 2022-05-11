<script context="module">
	import { SITE_URL, SITE_TITLE, SITE_SEPARATOR, SITE_AUTHOR, SITE_DESCRIPTION, FB_ID, FB_ADMINS } from '$data/meta.js';
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

	const sm = mediaQuery('(min-width: 0px) and (max-width: 767px)');
	const md = mediaQuery('(min-width: 0px) and (max-width: 1024px)');
  import '../app.css';
</script>


<svelte:head>
  <title>{SITE_TITLE} {SITE_SEPARATOR} {SITE_AUTHOR}</title>

  <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <link rel="canonical" href="{SITE_URL}{$page.url.pathname}" />

  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{$page.url.href}" />
  <meta property="og:site_name" content="{SITE_TITLE}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  
  <meta property="fb:app_id" content="{FB_ID}" />
  <meta property="fb:admins" content="{FB_ADMINS}" />
</svelte:head>

<Device /> 
<BG />

{#if !$md}
  <Scrollbar />
{/if}

{#if $page.url.pathname !== '/' && !$page.url.pathname.startsWith('/portfolio/')}

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

<!-- <main class="{ $page.url.pathname !== '/' && !$page.url.pathname.startsWith('/portfolio/') ? 'py-40  md:py-56' : '' }"> -->
<main>
  <slot />
</main>

{#if $page.url.pathname !== '/' }
<footer class="container mx-auto p-4 md:p-8 sticky top-[100vh]">
  <Social />
</footer>
{/if}