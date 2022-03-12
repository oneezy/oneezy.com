<script>
  import Rainbow from '$lib/Rainbow.svelte';
  import Pattern from '$lib/Pattern.svelte';
  import '../app.css';
</script>

<svelte:head>
  <title>Oneezy.com</title>
</svelte:head>

<Rainbow />
<Pattern />

<main class="flex flex-col items-center justify-center h-full">
  <slot />
</main>