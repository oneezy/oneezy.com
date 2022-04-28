<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`https://opensheet.elk.sh/1822epRj2XCFzLaYxvEIGVkPfF8qYdAbAqWv4bnqUP8A/Experience`);
    const data = await res.json();

    if(res.ok) {
      return {
        props: { 
          experience: data,
        }
      };
    }
    else if(res.status === 404) {
      return {
        props: { experience: [] }
      };
    }
  }

  // remove commas from string and replace with •
  export function format(str) {
    return str.replace(/,/g, ` • `);
  }
</script>

<script>
  import { page } from '$app/stores';
  import { fly } from 'svelte/transition';
  import { kebabCase } from '$lib/utils/utils.js';
  export let experience;
</script>


<svelte:head>
  <title>Experience | Oneezy</title>
  <meta name="description" content="Justin's Work Experience and mad skills">
  
  <meta property="og:url" content="{$page.url.href}" />
  <meta property="og:title" content="Experience | Oneezy" />
  <meta property="og:description" content="Justin's Work Experience and mad skills" />
  <meta property="og:image" content="{$page.url.origin}/experience/og.png" />
</svelte:head>

<div class="py-40  md:py-56" in:fly={{y:50, duration: 500, delay: 500}} out:fly={{duration: 500}}>
  <div class="prose lg:prose-xl mx-auto">
    <h1 class="text-black dark:text-white pb-10 relative mx-auto text-center">Experience</h1>
  </div>

  <div class="experience container mx-auto grid grid-cols-1 mt-10 mb-20">

    {#each experience as company}
      {#if company.company }
          <div class="company mx-auto prose dark:prose-invert lg:prose-xl relative flex items-center gap-8 justify-center border-b border-b-slate-300 dark:border-b-slate-800 last:border-b-0 w-full px-4 py-2">
            <div class="hidden md:block flex-none not-prose">
              <img class="img-icon w-16 h-16 not-prose dark:invert opacity-75 dark:opacity-60" src="experience/{ kebabCase(company.company) }.svg" alt="{company.company}" />
            </div>
            
            <div class="grow flex-col">
              <h3 class="text-black dark:text-white m-0 lg:m-0">{company.company}</h3>
              <span class="text-slate-500 dark:text-slate-400">{company.position}</span>
            </div>
            
            <div class="flex-none absolute right-4">
              <b class="justify-self-end flex-auto text-right font-sans font-black ">{company.date_started} – {company.date_ended}</b>
            </div>
          </div>
      {/if}
    {/each}
    
  </div>
</div>