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
  
	let CLASS = '';
	export { CLASS as class };
</script>

<nav class={`${CLASS}`}>
  <div class="flex flex-row items-center justify-center capitalize">
    {#each menu as link}
      <a on:click="{() => current = link.label}"
         href="{link.href}" 
         class="flex items-center justify-center font-semibold text-xl rounded-full py-2 px-6 {$page.url.pathname === link.href ? 'active dark:bg-white dark:text-black bg-black text-white' : 'text-black dark:text-white'}" 
         sveltekit:prefetch 
         sveltekit:noscroll>{link.label}
      </a>
    {/each}
  </div>
</nav>