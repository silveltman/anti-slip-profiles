<script lang="ts">
  import {
    Section,
    Container,
    Button,
    Flow,
    Text,
    Heading,
    Highlight,
    Video,
    Panel,
  } from 'fulldev-ui'

  export let content: any
</script>

<Section class="pt-xl">
  <Container>
    <Flow>
      <Video
        ratio={10 / 3.97}
        autoplay={true}
        loop={true}
        class="dark overflow-hidden rounded-image bg-base-6 shadow-lg"
        title="anti-slip-profiles"
        id="831834222?h=db8094c60f"
      />
      <Highlight
        row
        center
        class="large"
      >
        <Text
          text={content.eyebrow}
          class="light-orange !text-base-11"
        />
        <Heading
          as="h1"
          text={content.heading}
        />
        <Button
          class="light-orange"
          slot="actions"
          {...content.button}
          variant="solid"
        />
      </Highlight>
    </Flow>
  </Container>
</Section>
