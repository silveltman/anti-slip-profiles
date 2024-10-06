<script>
  import { Container, Section, Prose } from 'antislipprofiles-ui'
</script>

<Section {...$$restProps}>
  <Container>
    <Prose class="mx-auto">
      <slot />
    </Prose>
  </Container>
</Section>
