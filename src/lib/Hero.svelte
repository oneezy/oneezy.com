<script>
  import Logo from "$lib/Logo.svelte";
  import Nav from "$lib/Nav.svelte";

  export let current = "home";
</script>

<div class="h-screen w-full flex flex-col items-center justify-center">
  <Nav {current}/>
</div>