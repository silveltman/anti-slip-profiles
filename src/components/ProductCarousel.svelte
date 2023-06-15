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

  export let products: any
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
          <Card href="/producten/{product.handle}">
            <Image
              slot="media"
              src={product.featuredImage.url}
              alt={product.featuredImage.altText}
            />
            <Text
              class="light-orange"
              secondary
              text={product.priceRange.minVariantPrice.amount}
            />
            <Heading
              as="h4"
              text={product.title}
            />
          </Card>
        {/each}
      </Carousel>
    </Stack>
  </Container>
</Section>
