<script context="module">
  const modules = import.meta.glob('./**.svelte');
  let allmenu = [];

  for(let path in modules) {
    allmenu.push({
      label: path.replace(/^\.\//, '').replace(/\.svelte$/, ''),
      href: path.replace(/^\.\//, '/').replace(/\.svelte$/, ''),
    });
  }

  export const load = async() => {
    const menu = await Promise.all(allmenu);
    return {
      props: {
        menu,
      },
    };
  };
</script>

<script>
  export let menu;
</script>

<nav>
  {#each menu as item}
    <a href={item.href} class="block">{item.label}</a>
  {/each}
</nav>