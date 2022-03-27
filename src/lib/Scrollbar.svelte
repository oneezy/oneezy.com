<script>
  import { Svrollbar, Svroller } from 'svrollbar';
</script>

<Svrollbar />

<style>
  :global(html),
  :global(body) {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  :global(html::-webkit-scrollbar),
  :global(body::-webkit-scrollbar) {
    display: none;
  }

  :global(html) {
    
    /* Track */
    --svrollbar-track-width: 32px;
    --svrollbar-track-background:	initial;
    --svrollbar-track-radius:	initial;
    --svrollbar-track-opacity:	0;
    --svrollbar-track-shadow:	initial;

    /* Thumb */
    --svrollbar-thumb-width: 16px;
    --svrollbar-thumb-radius:	100px;
    --svrollbar-thumb-shadow:	initial;
    --svrollbar-thumb-opacity: 1;
    --svrollbar-thumb-background: black;
    --svrollbar-thumb-background: 
      linear-gradient( -60deg, 
        rgb(0, 255, 0), 
        rgb(255, 255, 0), 
        rgb(255, 0, 0)
      );
  }

  :global(html.dark) {

    /* Thumb */
    --svrollbar-thumb-background: white;
    --svrollbar-thumb-background: 
      linear-gradient( -60deg, 
        rgb(0, 0, 255),
        rgb(255, 0, 255), 
        rgb(255, 0, 0)
      );
  }

  :global(.v-scrollbar)  { transform: scale(.98); }
  /* :global(.v-track)      {  } */
  /* :global(.v-thumb)      {  } */
</style>