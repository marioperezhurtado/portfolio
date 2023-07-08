<script lang="ts">
  export let title: string
  export let tools: string[]

  //
</script>

<div
  class="bg-pf-dark-2 h-44 aspect-video p-4 flex flex-col justify-between rounded-md shadow-md"
>
  <h3 class="text-lg sm:text-xl font-bold font-display text-pf-light">
    {title}
  </h3>
  <p class="font-semibold">
    {#each tools as t, i}
      {i === tools.length - 1 ? `${t}.` : `${t}, `}
    {/each}
  </p>
</div>
