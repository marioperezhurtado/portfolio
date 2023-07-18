<script lang="ts">
  const toolItems = [
    {
      title: 'I like building beautiful interfaces.',
      tools: ['CSS', 'SCSS', 'TailwindCSS']
    },
    {
      title:
        'I like building seamless interactivity and great user experiences.',
      tools: ['React', 'Next.js', 'Svelte']
    },
    {
      title: 'I deeply care about producing reliable and maintainable code.',
      tools: ['TypeScript', 'Testing', 'Git']
    },
    {
      title:
        "I've also enjoyed doing things beyond the client in order to build stuff.",
      tools: ['SQL', 'Prisma', 'tRPC', 'Rust']
    }
  ]

  let toolList: HTMLUListElement
  let isScrolling = false

  const handleScroll = (e: MouseEvent) => {
    if (!isScrolling) return
    if (!toolList) return

    const distance = e.movementX
    toolList.scrollLeft -= distance
  }
</script>

<ul
  on:mousedown={() => (isScrolling = true)}
  on:mouseup={() => (isScrolling = false)}
  on:mouseleave={() => (isScrolling = false)}
  on:mousemove={handleScroll}
  bind:this={toolList}
  class="mt-10 flex gap-8 items-center overflow-x-auto pb-8 select-none cursor-pointer"
>
  {#each toolItems as { title, tools }}
    <li
      class="bg-pf-dark-2 h-44 aspect-video p-4 flex flex-col justify-between rounded-md shadow-md"
    >
      <h3 class="text-lg font-semibold text-pf-light">
        {title}
      </h3>
      <p>
        {#each tools as t, i}
          {i === tools.length - 1 ? `${t}.` : `${t}, `}
        {/each}
      </p>
    </li>
  {/each}
</ul>
