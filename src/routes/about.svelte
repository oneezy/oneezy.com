<script>
  import { fly } from 'svelte/transition';
</script>

<div class="mx-auto w-full flex items-center justify-center" in:fly={{y:50, duration: 500, delay: 500}} out:fly={{duration: 500}}>
  <img src="/og/social.png" alt="">
</div>