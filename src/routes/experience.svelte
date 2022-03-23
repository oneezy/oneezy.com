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
  import {fly} from 'svelte/transition';
  export let experience;
</script>

<div class="" in:fly={{y:50, duration: 500, delay: 500}} out:fly={{duration: 500}}>
  
  <div class="prose lg:prose-xl mx-auto">
    <h1 class="text-4xl pb-10 text-black dark:text-white relative mx-auto text-center">Experience</h1>
  </div>

  <div class="experience container prose lg:prose-xl mx-auto grid grid-cols-1 mt-10 mb-20">
    {#each experience as company}
      {#if company.company }
  
          <div class="flex items-center gap-4 border-b border-b-slate-800 last:border-b-0">
            <img class="w-20 h-20 justify-self-start self-start" src="{company.img ? company.img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPKlnRqvBIvTmisfEsjnp9eXKnDwccBtz2pQ&usqp=CAU'}" alt="{company.company}" />
            <div class="flex flex-col">
              <h3 class="text-white m-0 lg:m-0">{company.company}</h3>
              <span class="text-slate-500">{ format(company.highlight) }</span>
            </div>
            <b class="justify-self-end flex-auto text-right">{company.date_started} ‒ {company.date_ended}</b>
          </div>

      {/if}
    {/each}
  </div>

</div>