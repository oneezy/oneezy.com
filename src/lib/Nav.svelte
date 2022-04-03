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

  function resetScroll() {
    // scrollUp.set(false);
  }
  
</script>

<nav class={`${CLASS}`}>
  <div class="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-0 capitalize">
    {#each menu as link}
      <a on:click="{() => current = link.label}"
         on:click={resetScroll}
         href="{link.href}" 
         class="flex items-center justify-center font-semibold text-xl rounded-full py-2 px-6 {$page.url.pathname === link.href ? 'active dark:bg-white dark:text-black bg-black text-white' : 'text-black dark:text-white'}" 
         sveltekit:prefetch>
         <!-- sveltekit:noscroll> -->
         {link.label}
      </a>
    {/each}
  </div>
</nav>