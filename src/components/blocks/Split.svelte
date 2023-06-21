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

<Section class="product-split [&+.product-split_.order]:lg:order-2">
  <Container>
    <Stack
      class="items-center"
      row
    >
      <div class="order flex w-full gap-md lg:col-span-3">
        <Image
          class="mt-xl shadow-lg"
          src="/vlonder-far.jpg"
          alt="image"
        />
        <Image
          class="mb-xl shadow-lg"
          src="/vlonder-close.jpg"
          alt="image"
        />
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
