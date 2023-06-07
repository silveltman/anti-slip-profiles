<script lang="ts">
  import {
    Section,
    Container,
    Highlight,
    Text,
    Panel,
    Heading,
  } from 'fulldev-ui'

  export let content: any
</script>

<Section class="dark pb-0 pt-0">
  <Container>
    <Panel>
      <Highlight>
        <Heading text={content.heading} />
        <Text
          text={content.textarea}
          class="!text-base-11"
        />
      </Highlight>
    </Panel>
  </Container>
</Section>
