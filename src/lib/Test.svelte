<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://unpkg.com/tailwindcss@^2.2.16/dist/tailwind.min.css" rel="stylesheet"/>
</svelte:head>

<script> 
	import { fade, fly } from 'svelte/transition';
	import { screenH, screenW, scrollY, scrollDir, scrollUp, scrollDown, scrollTop, scrollBottom, mouse, sm, md, lg, xl } from './device.js';
	import Device from './Device.svelte';
	import Header from './Header.svelte';
	
	let headerH = 40; 
	
	let IN;
	let OUT;
	let INPROPS;
	let OUTPROPS;
</script> 
 
<Device />

{#if $scrollY <= 40 }  
	<Header 
		IN="{fade}" INPROPS="{{ duration: 400 }}" 
		OUT="{fade}" OUTPROPS="{{ duration: 400 }}" 
		class="bg-blue-500 text-black absolute" /> 
{:else if $scrollDown && $scrollY > 40 }
	<Header  
		IN="{fly}" INPROPS="{{ y: -40, duration: 400, opacity: 1, delay: 400 }}" 
		OUT="{fly}" OUTPROPS="{{ y: -40, duration: 400, opacity: 1, delay: 400 }}" 
		class="bg-green-500 text-white fixed opacity-0" /> 
{:else if $scrollUp }
	<Header 
		IN="{fly}"  INPROPS="{{ y: -40, duration: 400, opacity: 1, delay: 400 }}"  
		OUT="{fly}" OUTPROPS="{{ y: -40, duration: 400, opacity: 1, delay: 400 }}"
		class="bg-red-500 text-white fixed" />  
{/if}
 
<div class="bg-black text-white rounded-md p-6 fixed top-20 w-3/4 md:w-1/2">
	<h3 class="text-2xl font-semibold border-b mb-1 pb-1">Device Stats</h3>
	<ul class="flex flex-col items-start justify-centerlist-none mb-8">
		<li><b>screenH: 	 </b><span>{$screenH}</span></li>
		<li><b>screenW: 	 </b><span>{$screenW}</span></li>
	 	<li><b>mouse: </b><span>{$mouse.x}, {$mouse.y}</span></li>
		<li><b>scrollY: 	 </b><span>{$scrollY}</span></li>
		<li><b>direction: </b><span>{$scrollDir}</span></li>
		<li><b>scrollTop: </b><span style:color={$scrollTop == true ? 'lime' : 'red'}>{$scrollTop}</span></li>
		<li><b>scrollUp: </b><span style:color={$scrollUp == true ? 'lime' : 'red'}>{$scrollUp}</span></li>
		<li><b>scrollDown: </b><span style:color={$scrollDown == true ? 'lime' : 'red'}>{$scrollDown}</span></li>
		<li><b>scrollBottom: </b><span style:color={$scrollBottom == true ? 'lime' : 'red'}>{$scrollBottom}</span></li>
	</ul> 
			
	<h3 class="text-2xl font-semibold border-b mb-1 pb-1">Screen Sizes</h3>
	<ul class="boolean flex flex-col items-start justify-centerlist-none mb-8">
		<li><b>Small: </b><span style:color={$sm == true ? 'lime' : 'red'}>{$sm}</span></li>
		<li><b>Medium: </b><span style:color={$md == true ? 'lime' : 'red'}>{$md}</span></li>
		<li><b>Large: </b><span style:color={$lg == true ? 'lime' : 'red'}>{$lg}</span></li>
		<li><b>XLarge: </b><span style:color={$xl == true ? 'lime' : 'red'}>{$xl}</span></li>
	</ul>
</div>

<style>
	:global(body) { 
		margin: 0; 
		padding: 0; 
		box-sizing: border-box; 
		height: 200vh; 
		display: flex; 
		align-items: center; 
		justify-content: center; 
	}
	
	li { display: flex; }
	b { width: 180px; display: block; }
</style>






