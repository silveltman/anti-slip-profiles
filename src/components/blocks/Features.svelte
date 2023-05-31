<script lang="ts">
  import { Container, Flow, Section, Heading, Text } from 'fulldev-ui'
  import { IconCircleCheck } from '@tabler/icons-svelte'

  export let content: any
</script>

<Section class="pt-0">
  <Container>
    <Flow row>
      {#each [content.card_1, content.card_2, content.card_3] as card}
        <div class="flex">
          <IconCircleCheck
            class="light-orange mr-sm mt-xs shrink-0 text-base-9"
            size={24}
          />
          <div>
            <Heading
              class="inline"
              as="h5"
              text={card.heading}
            />
            <Text
              class="inline !text-base-11"
              text={card.textarea}
            />
          </div>
        </div>
      {/each}
    </Flow>
  </Container>
</Section>
