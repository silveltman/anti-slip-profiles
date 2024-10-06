<script lang="ts">
  import { onMount } from 'svelte'
  import { Ratio } from 'antislipprofiles-ui'

  let className = ''
  export { className as class }
  export let ratio: number = 1

  onMount(() => {
    const small = document.getElementById('gallery-small-carousel')
    const large = document.getElementById('gallery-large-carousel')
    const images = small?.querySelectorAll('img')

    images?.forEach((image: HTMLImageElement, index: number) => {
      image.addEventListener('click', () => {
        large?.scrollTo({
          top: large.clientHeight * index,
        })
      })
    })
  })
</script>

<Ratio
  ratio={ratio * (5 / 4)}
  class="flex items-center justify-center {className}"
>
  <div class="grid auto-cols-fr grid-flow-col">
    <div
      id="gallery-small-carousel"
      class="col-span-1 flex h-full shrink snap-y snap-mandatory flex-col gap-sm overflow-y-scroll scroll-smooth pr-sm [&>img]:cursor-pointer [&>img]:snap-start [&>img]:border [&>img]:border-base-7 hover:[&>img]:border-base-8 hover:[&>img]:opacity-75"
    >
      <slot />
    </div>

    <div
      id="gallery-large-carousel"
      class="image col-span-4 flex snap-y snap-mandatory flex-col overflow-y-auto border border-base-6 bg-base-2 [&>img]:h-full [&>img]:w-full [&>img]:shrink-0 [&>img]:snap-start [&>img]:object-contain"
    >
      <slot />
    </div>
  </div>
</Ratio>
