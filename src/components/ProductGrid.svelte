<script lang="ts">
  import {
    Section,
    Container,
    Heading,
    Text,
    Grid,
    Card,
    Image,
    Ratio,
  } from 'fulldev-ui'

  export let products
  let nodes: {
    id: string
    title: string
    handle: string
    description: string
    featuredImage: {
      url: string
      altText: string
    }
    priceRange: {
      minVariantPrice: {
        amount: string
        currencyCode: string
      }
    }
  }[] = products.nodes
</script>

<Section class="pt-xl">
  <Container>
    <Grid class="items-start large">
      {#each nodes as product}
        <Card
          href="/producten/{product.handle}"
          box
          class="bg-transparent"
        >
          <Ratio
            ratio={4 / 3}
            slot="media"
          >
            <Image
              src={product.featuredImage.url}
              alt={product.featuredImage.altText}
            />
          </Ratio>
          <Text
            class="light-orange"
            secondary
            text={product.priceRange.minVariantPrice.amount}
          />
          <Heading
            as="h4"
            text={product.title}
          />
          <Text
            text={product.description}
            class="!text-base-11"
          />
        </Card>
      {/each}
    </Grid>
  </Container>
</Section>
