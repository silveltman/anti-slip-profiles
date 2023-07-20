<script>
  import {
    Link,
    Container,
    Stack,
    Highlight,
    Section,
    Text,
    Heading,
    Image,
    Button,
    GalleryScroll,
  } from 'fulldev-ui'
  import AddToCartForm from './shopify/AddToCartForm.svelte'

  export let product
</script>

<Section class="max-lg:pt-0">
  <Container>
    <Stack
      row
      class="items-start"
    >
      <GalleryScroll
        ratio={4 / 2.62}
        class="lg:col-span-2"
      >
        {#each product.images.nodes as image}
          <Image
            class="!rounded-[0px]"
            src={image.url}
            alt={image.altText}
          />
        {/each}
      </GalleryScroll>
      <Highlight class="sticky top-lg">
        <Heading text={product.title} />
        <Text class="!text-base-11">
          {product.description}
          <Link
            class="light-orange pl-sm"
            href="#product-beschrijving">Meer info</Link
          >
        </Text>
        <svelte:fragment slot="actions">
          <AddToCartForm {product} />
          <Button
            target="_blank"
            variant="soft"
            class="light-orange w-full"
            href="/inmeetinstructies.pdf">Bekijk inmeetinstructies</Button
          >
        </svelte:fragment>
      </Highlight>
    </Stack>
  </Container>
</Section>
