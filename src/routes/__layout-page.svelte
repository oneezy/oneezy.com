
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

<Device /> 
<BG />
<Scrollbar />

<Header>
  <HeaderContainer>
    <Icon slot="left" />
    <Nav slot="center" />
    <Theme slot="right" />
  </HeaderContainer>
</Header>

<h1>layout-page</h1>
<main>
  <slot />
</main>

{#if $page.url.pathname != '/' }
<footer class="container mx-auto p-4 md:p-8 sticky top-[100vh]">
  <Social />
</footer>
{/if}