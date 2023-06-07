<script>
  import {
    Gallery,
    Container,
    Flow,
    Highlight,
    Section,
    Button,
    Text,
    Heading,
    Image,
    Input,
    Select,
  } from 'fulldev-ui'

  export let product

  const images = product.images.map((img) => ({
    src: img.src,
    alt: img.altText,
  }))

  const price = `€${product.variants[0].priceV2.amount}`

  const sizes = product.variants.map((variant) => variant.title)

  function handleClick() {
    add
    console.log('click')
  }
</script>

<Section class="max-lg:pt-0">
  <Container>
    <Flow row>
      <Gallery class="lg:col-span-2">
        {#each images as image}
          <Image {...image} />
        {/each}
      </Gallery>
      <Highlight class="sticky top-lg">
        <Heading text={product.title} />
        <Text
          text={price}
          class="light-orange !text-base-11 large"
        />
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          necessitatibus aperiam facilis repudiandae veniam!
        </Text>
        <svelte:fragment slot="actions">
          <div class="flex w-full justify-stretch gap-sm">
            <Select
              class="flex-1 shrink-0"
              id="groefdikte"
              placeholder="Kies groefdikte"
              options={sizes}
            />
            <Button
              class="light-orange flex-1"
              variant="soft"
              text="Inmeet instructies"
              href="#"
            />
          </div>
          <div class="flex w-full gap-sm">
            <Select
              placeholder="1"
              options={[1, 2, 3, 4, 5]}
              id="aantal"
            />
            <Button
              variant="solid"
              on:click={handleClick}
              class="light-orange w-full"
              text="Voeg toe aan winkelwagen"
            />
          </div>
        </svelte:fragment>
      </Highlight>
    </Flow>
  </Container>
</Section>
