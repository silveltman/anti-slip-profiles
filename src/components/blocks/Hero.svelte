<script lang="ts">
  import {
    Section,
    Container,
    Highlight,
    Button,
    Image,
    Stack,
  } from 'fulldev-ui'

  export let content: any
</script>

<Section class="dark-orange py-0">
  <Container>
    <Stack>
      <Image
        src="/hero.png"
        alt="Hero Image"
      />
      <div class="lg:flex items-center justify-between">
        <Highlight class="large !max-w-none">
          <p class="text-base-11">Gepatenteerde Anti-Slip producten</p>
          <h1>Nooit meer een gladde vlonder</h1>
        </Highlight>
        <Button
          text="Bekijk Producten"
          variant="solid"
          class="h-fit"
        />
      </div>
    </Stack>
  </Container>
</Section>
