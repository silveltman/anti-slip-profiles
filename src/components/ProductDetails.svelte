<script>
  import { Container, Stack, Section, Heading, Prose } from 'antislipprofiles-ui'

  export let product
</script>

<Section
  class="light-orange bg-base-1"
  id="product-beschrijving"
>
  <Container>
    <Stack row>
      <Prose class="light large">
        <Heading
          class="!small"
          text="Beschrijving"
        />
        {@html product.descriptionHtml}
      </Prose>
    </Stack>
  </Container>
</Section>
