<script lang="ts">
  import {
    Section,
    Container,
    Button,
    Stack,
    Text,
    Heading,
    Highlight,
    Video,
    Panel,
  } from 'antislipprofiles-ui'

  export let content: any
</script>

<Section class="pt-0">
  <Container>
    <Stack>
      <div
        class="dark overflow-hidden bg-base-1 max-md:-mx-4 max-md:rounded-[0px] md:rounded-box md:shadow-lg"
      >
        <Video
          ratio={10 / 3.97}
          autoplay={true}
          loop={true}
          class="w-full"
          title="anti-slip-profiles"
          id="831834222?h=db8094c60f"
        />
      </div>
      <Highlight
        row
        center
        class="large"
      >
        <Text
          text={content.eyebrow}
          data-rosey={content.eyebrow}
          class="light-orange !text-base-11"
        />
        <Heading
          as="h1"
          data-rosey={content.heading}
          text={content.heading}
        />
        <Button
          class="light-orange"
          slot="actions"
          {...content.button}
          variant="solid"
          data-rosey={content.button.text}
        />
      </Highlight>
    </Stack>
  </Container>
</Section>
