<script>
  import {
    Link,
    Container,
    Stack,
    Highlight,
    Section,
    Text,
    Icon,
    Heading,
    Image,
    Button,
    GalleryScroll,
  } from 'antislipprofiles-ui'
  import AddToCartForm from './shopify/AddToCartForm.svelte'

  export let product

  console.log(product)
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
        {#if product.metafield}
          <ul>
            {#each JSON.parse(product.metafield.value) as item}
              <li class="items.center inline-flex gap-sm text-sm text-base-11">
                <Icon
                  name="check"
                  size="xs"
                  class="light-orange shrink-0 text-base-9"
                />
                {item}
              </li>
            {/each}
          </ul>
        {:else}
          <Text class="!text-base-11">
            {product.description}
          </Text>
          <Link
            class="light-orange"
            href="#product-beschrijving">+ Meer over dit product</Link
          >
        {/if}
        <svelte:fragment slot="actions">
          <AddToCartForm {product} />
          {#if product.handle.includes('anti-slip-profiel') || product.handle.includes('afdicht-profiel')}
            <Button
              target="_blank"
              variant="soft"
              class="light-orange w-full"
              href="/inmeetinstructies.pdf">Bekijk inmeetinstructies</Button
            >
          {/if}
          {#if product.handle.includes('anti-slip-profiel') || product.handle.includes('afdicht-profiel')}
            <Button
              target="_blank"
              variant="soft"
              class="light-orange w-full"
              href="/documentatie-afdicht-en-antislip-profielen.pdf"
              >Bekijk documentatie</Button
            >
          {/if}
          {#if product.handle.includes('anti-slip-strook')}
            <Button
              target="_blank"
              variant="soft"
              class="light-orange w-full"
              href="/documentatie-antislip-stroken.pdf"
              >Bekijk documentatie</Button
            >
          {/if}
        </svelte:fragment>
      </Highlight>
    </Stack>
  </Container>
</Section>
