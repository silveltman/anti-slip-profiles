<script lang="ts">
  import {
    Section,
    Container,
    Highlight,
    Button,
    Panel,
    Heading,
  } from 'fulldev-ui'

  export let content: any
</script>

<Section>
  <Container>
    <Panel class="dark-orange shadow-lg">
      <Highlight
        row
        center
      >
        <Heading
          class="!text-base-11"
          text={content.heading}
        />
        <Button
          slot="actions"
          {...content.button}
          variant="ringed"
        />
      </Highlight>
    </Panel>
  </Container>
</Section>
