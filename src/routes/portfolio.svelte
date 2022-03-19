<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`https://opensheet.elk.sh/1822epRj2XCFzLaYxvEIGVkPfF8qYdAbAqWv4bnqUP8A/Portfolio`);
    const data = await res.json();

    

    if(res.ok) {
      return {
        props: { 
          test: data,
          portfolio: data.filter(item => item.hidden !== 'TRUE'),
          hidden: data.filter(item => item.hidden === 'TRUE'),
          featured: data.filter(item => item.featured === 'TRUE'),
        }
      };

      // return data except for keys pairs with the value of 'hidden'
      // return {
      //   props: {
      //     portfolio: data.filter(item => item.hidden !== 'hidden')
      //   }
      // };
    }
    else if(res.status === 404) {
      return {
        props: { portfolio: [] }
      };
    }


    

  }
</script>

<script>
  import Portfolio from '$lib/Portfolio.svelte';
  import {fly} from 'svelte/transition';

  export let portfolio;
</script>

<div in:fly={{y:50, duration: 500, delay: 500}} out:fly={{duration: 500}}>
  <Portfolio {portfolio} />
</div>