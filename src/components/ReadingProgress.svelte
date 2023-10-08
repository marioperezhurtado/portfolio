<script lang="ts">
  let progress = 0;

  function handleScroll() {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    progress = (winScroll / height) * 100;
  }

</script>

<svelte:window on:scroll={handleScroll}/>

<div class="fixed top-0 left-0 w-screen">
  <span class="bg-pf-dark-3 h-2 absolute top-0 rounded-r-sm" 
    style="width: {progress}%;"
  />
</div>
