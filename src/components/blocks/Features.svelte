<script lang="ts">
  import { Container, Stack, Section, Heading, Text, Icon } from 'fulldev-ui'

  export let content: any
</script>

<Section class="pt-0">
  <Container>
    <Stack row>
      {#each [content.card_1, content.card_2, content.card_3] as card}
        <div class="flex">
          <Icon
            name="check_circle"
            class="light-orange mr-sm mt-xs shrink-0 text-base-9"
          />
          <div>
            <Heading
              class="inline"
              as="h5"
              text={card.heading}
              data-rosey={card.heading}
            />.
            <Text
              class="inline !text-base-11"
              text={card.textarea}
              data-rosey={card.textarea}
            />
          </div>
        </div>
      {/each}
    </Stack>
  </Container>
</Section>
