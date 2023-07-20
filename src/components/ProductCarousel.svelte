<script lang="ts">
  import {
    Section,
    Container,
    Card,
    Text,
    Heading,
    Image,
    Carousel,
    Stack,
  } from 'fulldev-ui'
  import Money from './shopify/Money.svelte'

  export let products: any
  export let currentHandle: string
</script>

<Section>
  <Container>
    <Stack>
      <Heading
        as="h3"
        class="small">Vergelijkbare producten</Heading
      >
      <Carousel class="large">
        {#each products as product}
          {#if product.handle !== currentHandle}
            <Card href="/producten/{product.handle}">
              <Image
                class="border border-base-6"
                slot="media"
                src={product.featuredImage.url}
                alt={product.featuredImage.altText}
              />
              <Money
                class="light-orange"
                money={product.priceRange.minVariantPrice}
              />
              <Heading
                as="h4"
                text={product.title}
              />
            </Card>
          {/if}
        {/each}
      </Carousel>
    </Stack>
  </Container>
</Section>
