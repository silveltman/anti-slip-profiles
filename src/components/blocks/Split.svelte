<script lang="ts">
  import {
    Button,
    Image,
    Container,
    Section,
    Stack,
    Highlight,
    Text,
    Heading,
  } from 'fulldev-ui'

  export let content: any
</script>

<Section
  class="product-split [&+.product-split_.img1]:lg:order-2 [&+.product-split_.imgwrap]:lg:pl-xl [&+.product-split_.imgwrap]:lg:pr-0  [&+.product-split_.order]:lg:order-2"
>
  <Container>
    <Stack
      class=" items-center gap-2xl "
      row
    >
      <div
        class="order imgwrap flex w-full flex-col gap-md pr-xl lg:col-span-3"
      >
        <div class="img1 pr-xl">
          <Image
            class="shadow-lg"
            src={content.image_1.src}
            alt={content.image_1.alt}
          />
        </div>
        <div class="pl-xl">
          <Image
            class=" shadow-lg"
            src={content.image_2.src}
            alt={content.image_2.alt}
          />
        </div>
      </div>
      <Highlight class="lg:col-span-2">
        {#if content.eyebrow}
          <Text
            class="light-orange"
            text={content.eyebrow}
            data-rosey={content.eyebrow}
            secondary
          />
        {/if}
        <Heading
          as="h2"
          text={content.heading}
          data-rosey={content.heading}
        />
        <Text
          text={content.textarea}
          data-rosey={content.textarea}
          class="!text-base-11"
        />
        <Button
          variant="solid"
          class="light-orange"
          {...content.button}
          data-rosey={content.button.text}
          slot="actions"
        />
      </Highlight>
    </Stack>
  </Container>
</Section>
