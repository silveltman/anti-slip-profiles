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
    <Grid class="items-start large">
      {#each products as product}
        <Card
          href={product.href}
          box
          class="bg-transparent"
        >
          <Ratio
            ratio={4 / 3}
            slot="media"
          >
            <Image {...product.image} />
          </Ratio>
          <Text
            class="light-orange"
            secondary
            text={product.price}
          />
          <Heading
            as="h4"
            text={product.heading}
          />
          <!-- <Text
            text={product.textarea}
            class="!text-base-11"
          /> -->
          <Text class="!text-base-11">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            necessitatibus aperiam facilis repudiandae veniam!
          </Text>
        </Card>
      {/each}
    </Grid>
  </Container>
</Section>
