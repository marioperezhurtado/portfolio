<script lang="ts">
  import Tool from './Tool.svelte'

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
  class="mt-10 sm:mt-20 flex gap-8 items-center overflow-x-auto pb-8 select-none cursor-pointer"
>
  <li>
    <Tool
      title="I like building beautiful interfaces."
      tools={['CSS', 'SCSS', 'TailwindCSS']}
    />
  </li>
  <li>
    <Tool
      title="I like building seamless interactivity and great user experiences."
      tools={['React', 'NextJS', 'Svelte']}
    />
  </li>
  <li>
    <Tool
      title="I consider it important to master the tools that will make you produce more value in the long run."
      tools={['Git', 'GitHub', 'Testing(Jest, Vitest)']}
    />
  </li>
  <li>
    <Tool
      title="I've also enjoyed doing things beyond the client in order to build things."
      tools={['SQL', 'NodeJS', 'tRPC', 'Prisma']}
    />
  </li>
</ul>
