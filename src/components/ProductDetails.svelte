<script>
  import { Container, Flow, Section, Heading, Prose } from 'fulldev-ui'

  export let product
</script>

<Section class="light-orange border-y border-base-6 bg-base-1">
  <Container>
    <Flow row>
      <Prose class="light large">
        <Heading
          class="!small"
          text="Beschrijving"
        />
        {@html product.descriptionHtml}
      </Prose>
    </Flow>
  </Container>
</Section>
