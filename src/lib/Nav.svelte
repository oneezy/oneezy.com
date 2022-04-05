<script>
  import { page } from '$app/stores';
	import { scrollUp, scrollDown } from '$stores/device.js';

	export let current = 'home';
  export let menu = [
    {
      label: 'home',
      href: '/'
    },
    {
      label: 'about',
      href: '/about'
    },
    {
      label: 'portfolio',
      href: '/portfolio'
    },
    {
      label: 'experience',
      href: '/experience'
    }
  ];
  
	let CLASS = '';
	export { CLASS as class };
</script>

<nav class="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-0 capitalize {CLASS || ''}">
  {#each menu as link}
    <a on:click="{() => current = link.label}"
        href="{link.href}" 
        class="flex items-center justify-center font-semibold text-xl rounded-full py-2 px-6 
        {$page.url.pathname === link.href ? 'active bg-black text-white dark:bg-white dark:text-black' : 'text-black dark:text-white'}"
        
        sveltekit:prefetch>
        <!-- sveltekit:noscroll> -->
        {link.label}
    </a>
  {/each}
</nav>


<!-- {$page.url.pathname === link.href ? 'bg-black text-white dark:bg-white dark:text-black' : 'text-black dark:text-white'}" -->