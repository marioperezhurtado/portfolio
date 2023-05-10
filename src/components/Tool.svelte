<script lang="ts">
  export let title: string
  export let tools: string[]

  //
</script>

<div
  class="bg-pf-dark-2 h-48 sm:h-56 aspect-video p-4 sm:p-6 flex flex-col justify-between rounded-md shadow-md"
>
  <h3 class="text-lg sm:text-xl font-bold font-sans">{title}</h3>
  <p class="text-pf-light-2 sm:text-xl mt-5">
    {#each tools as t, i}
      {i === tools.length - 1 ? `${t}.` : `${t}, `}
    {/each}
  </p>
</div>
