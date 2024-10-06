<script lang="ts">
  import {
    Section,
    Container,
    Highlight,
    Button,
    Panel,
    Heading,
  } from 'antislipprofiles-ui'

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
          data-rosey={content.heading}
          text={content.heading}
        />
        <Button
          slot="actions"
          {...content.button}
          data-rosey={content.button.text}
          variant="ringed"
        />
      </Highlight>
    </Panel>
  </Container>
</Section>
