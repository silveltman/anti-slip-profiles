<script lang="ts">
  import {
    Section,
    Container,
    Card,
    Text,
    Heading,
    Image,
    Carousel,
    Flow,
  } from 'fulldev-ui'

  export let products: any
</script>

<Section>
  <Container>
    <Flow>
      <Heading
        as="h3"
        class="small">Vergelijkbare producten</Heading
      >
      <Carousel>
        {#each products as product}
          <Card href={product.href}>
            <Image
              slot="media"
              {...product.image}
            />
            <Text
              class="light-orange"
              secondary
              text={product.price}
            />
            <Heading
              as="h4"
              text={product.heading}
            />
          </Card>
        {/each}
      </Carousel>
    </Flow>
  </Container>
</Section>
