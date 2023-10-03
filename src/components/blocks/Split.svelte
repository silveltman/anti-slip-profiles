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
  class="product-split [&+.product-split_.img1]:lg:order-2 [&+.product-split_.order]:lg:order-2"
>
  <Container>
    <Stack
      class=" items-center justify-between !gap-3xl"
      row
    >
      <div class="order imgwrap flex w-full flex-col gap-md">
        <div class="pr-xl">
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
      <Highlight class="lg:max-w-lg">
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
        <div class="flex gap-md pt-md">
          <!-- content here -->
          <Button
            variant="solid"
            class="light-orange"
            {...content.button_1}
            data-rosey={content.button_1.text}
            slot="actions"
          />
          {#if content.button_2}
            <Button
              variant="soft"
              class="light-orange"
              {...content.button_2}
              data-rosey={content.button_2.text}
              slot="actions"
            />
          {/if}
        </div>
      </Highlight>
    </Stack>
  </Container>
</Section>
