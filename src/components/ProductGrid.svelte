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
</script>

<Section class="pt-xl">
  <Container>
    <Grid class="items-start large">
      {#each products as product}
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
          >
            v.a €{product.priceRange.minVariantPrice.amount.replace('.', ',')}
          </Text>
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
