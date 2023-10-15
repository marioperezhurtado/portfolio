<script lang="ts">
  const testimonials = [
    {
      fullName: 'Hamid Bchour',
      description: 'Owner of Barbería HB',
      title: 'Great design and support',
      quote:
        'We have had multiple clients come to us thanks to our new website. The design is really good and he has been very attentive to the details that we have asked for.',
      avatar: '/testimonials/hamid-bchour.webp'
    },
    {
      fullName: 'Salvador Pérez',
      description: 'My Dad 🤣',
      title: 'He is a good guy',
      quote: 'What do you want me to say? He is my son. 👍',
      avatar: '/testimonials/salvador-perez.webp'
    }
  ]

  let testimonial = testimonials[0] as (typeof testimonials)[number]
</script>

<div class="flex flex-col gap-y-4 gap-x-14 mt-10 lg:flex-row">
  <ul class="flex flex-row flex-wrap gap-4 lg:flex-col min-w-fit">
    {#each testimonials as t}
      <li>
        <button
          on:click={() => (testimonial = t)}
          class="p-4 pr-8 w-full rounded-md transition hover:shadow-md hover:bg-pf-dark-2"
          class:bg-pf-dark-2={testimonial === t}
          class:shadow-md={testimonial === t}
        >
          <div class="flex gap-3 items-center">
            <div class="overflow-hidden rounded-full bg-pf-dark-3">
              <img
                src={t.avatar}
                alt={t.fullName}
                width="28"
                height="28"
                class="object-cover object-center aspect-square"
              />
            </div>
            <p class="font-semibold text-pf-light">
              {t.fullName}
            </p>
          </div>
          <p class="mt-3 text-sm text-left">{t.description}</p>
        </button>
      </li>
    {/each}
  </ul>
  <div class="pt-4 max-w-prose">
    <svg
      class="text-pf-dark-3"
      viewBox="0 0 24 27"
      height="28"
      width="28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
        fill="currentColor"
      />
    </svg>
    <h3 class="mt-2 mb-5 text-lg font-bold text-pf-light">
      {testimonial.title}
    </h3>
    <p>
      {testimonial.quote}
    </p>
  </div>
</div>
