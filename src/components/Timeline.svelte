<script lang="ts">
  import { onMount } from 'svelte'

  const timelineItems = [
    {
      year: 2020,
      title: 'Technician in Microcomputer Systems and Networks',
      description:
        'Learned about computer hardware, software, networks and operating systems. Developed problem-solving and soft skills.'
    },
    {
      year: 2022,
      title: 'Higher Technician in Web Application Development',
      description:
        'Learned web develpment, databases, deployments and project management. Built multiple personal projects in a variety of technologies, learning in a hands-on way.'
    },
    {
      year: 2023,
      title: 'Freelance Web Developer',
      description:
        'Developed web and mobile applications for local businesses. Increased online visibility, improved user experience and helped to automate processes, saving time and costs.'
    }
  ]

  let position = 0
  let timeline: HTMLDivElement

  function handleScroll() {
    const new_position = timeline.getBoundingClientRect().top
    position = new_position > 0 ? new_position : 0
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
</script>

<div
  class="mt-10 flex h-fit relative overflow-hidden pl-1"
  bind:this={timeline}
>
  <span class="min-w-[2px] bg-pf-dark-3" />
  <span
    id="timeline"
    class="min-w-[2px] absolute left-1 h-full"
    style="top: {-position}px"
  />
  <ol class="relative bg-pf-dark max-w-prose flex flex-col gap-10">
    {#each timelineItems as { year, title, description }}
      <li class="ml-4">
        <div
          class="absolute w-3.5 h-3.5 bg-pf-dark-3 rounded-full mt-1.5 -left-2 border-2 border-pf-dark"
        />

        <time
          class="mb-1 text-sm font-normal leading-none text-pf-light-2"
          datetime="2020-01-01"
        >
          {year}
        </time>
        <h3 class="text-lg font-semibold text-pf-light">
          {title}
        </h3>
        <p>
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
