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

<Section class="pt-0">
  <Container>
    <Flow>
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
