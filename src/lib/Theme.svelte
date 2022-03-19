<script>
  import DarkMode from "svelte-dark-mode";

  let theme = 'dark';
  
  $: switchTheme = theme === "dark" ? "light" : "dark";
  
  $: if (typeof window !== "undefined") {
    document.documentElement.className = theme;
  }
</script>


<DarkMode bind:theme />

<button on:click={() => (theme = switchTheme)} 
  class="my-4 relative inline-flex items-center py-1.5 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none bg-cyan-500 text-cyan-200 focus-visible:ring-cyan-600" 
  id="headlessui-switch-12"
  role="switch"
  type="button"
  tabindex="0"
  aria-checked="true">
  <span class="sr-only">Enable dark mode</span>
  
  <svg class="transform transition-transform scale-0 duration-500" width="24" height="24" fill="none" aria-hidden="true">
    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
  
  <svg width="24" height="24" fill="none" aria-hidden="true" class="ml-3.5 transform transition-transform scale-100 duration-300">
    <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
  
  <span class="absolute top-0.5 left-0.5 bg-white w-8 h-8 rounded-full flex items-center justify-center transition duration-500 transform">
    <svg width="24" height="24" fill="none" aria-hidden="true" class="flex-none transition duration-500 transform text-cyan-500 opacity-100 scale-100">
      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <svg width="24" height="24" fill="none" aria-hidden="true" class="flex-none -ml-6 transition duration-500 transform text-slate-700 opacity-0 scale-0">
      <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  </span>
</button>

<style>
  :global(*[class*="dark"]) {
    transition: .22s ease-in-out;
  }
</style>