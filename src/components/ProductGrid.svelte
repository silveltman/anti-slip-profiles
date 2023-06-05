<script lang="ts">
  import {
    Section,
    Container,
    Heading,
    Text,
    Grid,
    Card,
    Image,
  } from 'fulldev-ui'

  export let products: {
    href: string
    heading: string
    image: {
      src: string
      alt: string
    }
    textarea: string
    price: string
  }[] = []
</script>

<Section class="pt-xl">
  <Container>
    <Grid class="large">
      {#each products as product}
        <Card
          href={product.href}
          box
          class="bg-transparent"
        >
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
          <Text
            text={product.textarea}
            class="!text-base-11"
          />
        </Card>
      {/each}
    </Grid>
  </Container>
</Section>
