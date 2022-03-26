<script>
  import { page } from '$app/stores';

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
  
	let className;
	export { className as class };
</script>

<nav class={`${className}`}>
  <div class="flex flex-row items-center justify-center gap-4 capitalize">
    {#each menu as link}
      <a on:click="{() => current = link.label}"
         href="{link.href}" 
         class="block text-black dark:text-white font-semibold text-xl {$page.url.pathname === link.href ? 'bg-blue-500 text-white' : ''}" 
         sveltekit:prefetch 
         sveltekit:noscroll>{link.label}
      </a>
    {/each}
  </div>
</nav>