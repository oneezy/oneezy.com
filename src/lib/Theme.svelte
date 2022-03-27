<script>
	let isDark = false;

	if (typeof localStorage !== 'undefined') {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			isDark = true;
		}
	}

	function toggleDarkMode() {
		if (isDark) {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
			isDark = false;
		} else {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
			isDark = true;
		}
	}

	let CLASS;
	export { CLASS as class };
</script>

<button
  class={`${CLASS} flex items-center justify-center h-9 w-9 transition-all hover:ring-2`}
  aria-label="Toggle Dark Mode"
  aria-live="polite"
  on:click={toggleDarkMode}>

    <svg class="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
      
      <mask class="moon origin-center" id="moon-mask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <circle class="dark:translate-x-[-7px]" cx="24" cy="10" r="6" fill="black" />
      </mask>
      
      <circle class="sun origin-center transition dark:scale-[1.75]" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
      
      <g class="sun-beams origin-center transition dark:opacity-0 dark:-rotate-45" stroke="currentColor">
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </g>
    </svg>

</button>


