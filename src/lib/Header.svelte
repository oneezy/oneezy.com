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
	 
	// onMount(() => { 
  //   if ($page.url.pathname != '/') {
	// 	  document.body.style.paddingTop = `${headerHeight}px`;
  //   } else {
  //     document.body.style.paddingTop = '0px';
  //   }
	// })

  let headerClass = 'container mx-auto max-w-screen-xl h-24 py-4 px-12 flex items-center justify-between rounded-full left-0 right-0 top-6 z-10';
</script>

<Device device="hidden" /> 


<!-- Top --> 
{#if ( ($scrollY > (headerHeight*3)) && ($scrollUp) )}
<header in:fly="{{ y: -(headerHeight*2), opacity: 1 }}" out:fly="{{ y: -(headerHeight*2), opacity: 1 }}" bind:clientHeight={headerHeight} 
      class="{`${CLASS} ${headerClass} `} fixed border-4 border-black bg-black/80 dark:from-white dark:bg-white/70 backdrop-blur-lg">

      <slot /> 
</header>

<!-- Everything else... -->
{:else}
<header in:fade out:fade bind:clientHeight={headerHeight} class="{`${CLASS} ${headerClass} `} absolute">
  <slot />
</header>
{/if}
