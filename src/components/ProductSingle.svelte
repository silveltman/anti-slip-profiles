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
</script>

<Section>
  <Container>
    <Flow row>
      <Gallery class="lg:col-span-2">
        {#each product.images as image}
          <Image {...image} />
        {/each}
      </Gallery>
      <Highlight class="sticky top-lg">
        <Heading text={product.heading} />
        <Text
          text={product.price}
          class="light-orange !text-base-11 large"
        />
        <Text text={product.textarea} />
        <svelte:fragment slot="actions">
          <div class="flex w-full justify-stretch gap-sm">
            <Select
              class="flex-1 shrink-0"
              id="groefdikte"
              placeholder="Kies groefdikte"
              options={['6mm', '7-15mm', '12-18mm']}
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
              options={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
              id="aantal"
            />
            <Button
              variant="solid"
              class="light-orange w-full"
              text="Voeg toe aan winkelwagen"
              href="#"
            />
          </div>
        </svelte:fragment>
      </Highlight>
    </Flow>
  </Container>
</Section>
