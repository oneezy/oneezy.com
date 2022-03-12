<div class="w-full h-full fixed inset-0 z-0 flex items-center justify-center">
  <section class="w-[200%] h-[200%] absolute blur-2xl"></section>
</div>

<style>
  section { 
    will-change: transform;
    background-image: 
      linear-gradient( to bottom right, 
        transparent,
        rgb(255, 255, 255), 
        rgb(255, 0, 0), 
        rgb(255, 0, 255), 
        rgb(0, 0, 255), 
        rgb(0, 255, 255), 
        rgb(0, 255, 0), 
        rgb(255, 255, 0), 
        rgb(255, 0, 0),
        rgb(255, 255, 255), 
        transparent
      );
      
    animation: NEON-GRADIENT 8s ease-in-out infinite;   
  }
    
  @keyframes NEON-GRADIENT { 
    from { transform: translate(100%, 100%); } 
    to 	 { transform: translate(-100%, -100%); } 
  }
</style>