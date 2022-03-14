<script>
  import Rainbow from '$lib/Rainbow.svelte';
  import Pattern from '$lib/Pattern.svelte';
  import '../app.css';
</script>

<svelte:head>
  <title>Oneezy.com</title>

  <meta name="theme-color" content="#000000">

  <!-- FACESPACE -->
  <meta property="og:site_name" content="oneezy" />
  <meta property="og:url" content="http://www.oneezy.com/index.html" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Oneezy.com | Progressive Web App Development" />
  <meta property="og:description" content="Let oneezy' guide you towards the path of technology enlightenment. You know it's time. Let's go." />
  <meta property="og:image" content="http://www.oneezy.com/images/social/social.jpg" />
  <meta property="fb:app_id" content="902427283166466" />
  <meta property="fb:admins" content="1271441153" />
</svelte:head>

<Rainbow />
<Pattern />

<main class="flex flex-col items-center justify-center h-full">
  <slot />
</main>