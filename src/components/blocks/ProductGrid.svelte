<script lang="ts">
  import {
    Section,
    Container,
    Heading,
    Text,
    Grid,
    Card,
    Image,
  } from 'fulldev-ui'

  export let content: any
</script>

<Section>
  <Container>
    <Grid class="large">
      {#each { length: 6 } as _, i}
        <Card
          href="/"
          box
          class="bg-transparent"
        >
          <Image
            slot="media"
            src="/vlonder-close.jpg"
            alt="placeholder"
          />
          <Text
            class="light-orange"
            secondary
            text="€12,95"
          />
          <Heading
            as="h4"
            text={content.cards[0].heading}
          />
          <Text
            text={content.cards[0].textarea}
            class="!text-base-11"
          />
        </Card>
      {/each}
    </Grid>
  </Container>
</Section>
