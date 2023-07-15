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
  class="mt-10 flex gap-8 items-center overflow-x-auto pb-8 select-none cursor-pointer"
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
      tools={['React', 'Next.js', 'Svelte']}
    />
  </li>
  <li>
    <Tool
      title="I deeply care about producing reliable and maintainable code."
      tools={['TypeScript', 'Testing', 'Git']}
    />
  </li>
  <li>
    <Tool
      title="I've also enjoyed doing things beyond the client in order to build stuff."
      tools={['SQL', 'Prisma', 'tRPC', 'Rust']}
    />
  </li>
</ul>
