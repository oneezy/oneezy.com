<script>
	let CLASS;
	export { CLASS as class };
</script>

<button
  class="{CLASS || ''} flex items-center justify-center h-9 w-9 relative"
  aria-label="Menu Button"
  aria-live="polite">

    <img class="absolute dark:invert" 
         src="icons/menu-2.svg" 
         alt="Menu Buton" />
</button>