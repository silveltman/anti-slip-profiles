<script lang="ts">
  import {
    Button,
    Image,
    Container,
    Section,
    Flow,
    Highlight,
    Text,
    Heading,
  } from 'fulldev-ui'

  export let content: any
</script>

<Section class="product-split [&+.product-split_.order]:order-2">
  <Container>
    <Flow
      row
      center
    >
      <div class="order col-span-3 flex w-full gap-md">
        <Image
          class="mt-xl"
          src="/vlonder-far.jpg"
          alt="image"
        />
        <Image
          class="mb-xl"
          src="/vlonder-close.jpg"
          alt="image"
        />
      </div>
      <Highlight class="col-span-2">
        {#if content.eyebrow}
          <Text
            class="light-orange"
            text={content.eyebrow}
            secondary
          />
        {/if}
        <Heading
          as="h2"
          text={content.heading}
        />
        <Text
          text={content.textarea}
          class="!text-base-11"
        />
        <Button
          variant="solid"
          class="light-orange"
          {...content.button}
          slot="actions"
        />
      </Highlight>
    </Flow>
  </Container>
</Section>
