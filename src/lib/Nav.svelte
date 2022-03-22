<script>
  import Logo from "$lib/Logo.svelte";
  import Theme from "$lib/Theme.svelte";

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
    }
  ];
</script>

<nav class="flex flex-col items-center justify-center gap-4 mb-10">
  <Logo />
  <Theme />
  <div class="flex flex-row items-center justify-center gap-4">
    {#each menu as link}
      <a 
        href="{link.href}" 
        class="block text-black dark:text-white font-semibold text-xl" 
        class:selected="{current === link.label}" 
        on:click="{() => current = link.label}"
        sveltekit:prefetch 
        sveltekit:noscroll
      >
        {link.label}
      </a>
    {/each}
  </div>
</nav>

<style>
	button {
    background-color: white;
    color: black;
		display: block;
	}

	.selected {
		background-color: #ff3e00;
		color: white;
	}
</style>