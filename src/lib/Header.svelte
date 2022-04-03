<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://unpkg.com/tailwindcss@^2.2.16/dist/tailwind.min.css" rel="stylesheet"/>
</svelte:head> 

<script>
  import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { screenH, scrollY, scrollDir, scrollUp, scrollDown, scrollTop, scrollBottom } from '$stores/device.js';
	import Device from './Device.svelte';
	
	let CLASS; 
	export { CLASS as class };
	
	export let headerHeight = ''; 
  let headerClass = 'rounded-full left-0 right-0 top-6 z-10';
</script>

<!-- <Device device="stats" />  -->


<!-- Top --> 
{#if ( (!$scrollUp) && (!$scrollDown) )}
  <header in:fly={{ x: -40, duration: 500, delay: 500 }} 
          out:fly={{ duration: 500, delay: 500 }}
          bind:clientHeight={headerHeight} 
          class="{`${CLASS} ${headerClass}`} absolute">

          <slot /> 
  </header>

<!-- Top --> 
{:else if ( ($scrollY > headerHeight) && ($scrollUp) )}
  <header in:fly="{{ y: -(headerHeight*2), opacity: 1 }}" 
          out:fly="{{ y: -(headerHeight*2), opacity: 1 }}" 
          bind:clientHeight={headerHeight} 
          class="{`${CLASS} ${headerClass}`} active fixed">

          <slot /> 
  </header>

<!-- Everything else... -->
{:else}
  <header in:fade 
          out:fade 
          bind:clientHeight={headerHeight} 
          class="{`${CLASS} ${headerClass}`} absolute">

          <slot />
  </header>
{/if}

<style>


</style>