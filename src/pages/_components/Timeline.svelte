<script lang="ts">
  const timelineItems = [
    {
      year: 2020,
      title: "Technician in Microcomputer Systems and Networks",
      description:
        "Learned about computer hardware, software, networks and operating systems. Developed problem-solving and soft skills.",
    },
    {
      year: 2022,
      title: "Higher Technician in Web Application Development",
      description:
        "Learned web develpment, databases, deployments and project management. Built multiple personal projects in a variety of technologies, learning in a hands-on way.",
    },
    {
      year: 2023,
      title: "Freelance Web Developer",
      description:
        "Developed web and applications for local businesses. Increased online visibility, improved user experience and helped to automate processes.",
    },
  ];

  let position = 0;
  let timeline: HTMLDivElement;

  function handleScroll() {
    const new_position = timeline.getBoundingClientRect().top;
    position = new_position > 0 ? new_position : 0;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<div
  class="flex overflow-hidden relative pl-1 mt-10 h-fit"
  bind:this={timeline}
>
  <span class="min-w-[2px] bg-pf-dark-3" />
  <span
    id="timeline"
    class="absolute left-1 h-full min-w-[2px]"
    style="top: {-position}px"
  />
  <ol class="flex relative flex-col gap-10 max-w-prose bg-pf-dark">
    {#each timelineItems as { year, title, description }}
      <li class="ml-4">
        <div
          class="absolute -left-2 mt-1.5 w-3.5 h-3.5 rounded-full border-2 bg-pf-dark-3 border-pf-dark"
        />

        <time
          class="mb-1 text-sm font-normal leading-none text-pf-light-2"
          datetime="2020-01-01"
        >
          {year}
        </time>
        <h3 class="mb-1 text-lg font-semibold text-pf-light">
          {title}
        </h3>
        <p class="max-w-xl"> 
          {description}
        </p>
      </li>
    {/each}
  </ol>
</div>

<style>
  #timeline {
    background: linear-gradient(to bottom, transparent 80%, #16ca73);
  }
</style>
