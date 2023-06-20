<script lang="ts">
  import site from '@data/site'
  import footer from '@data/footer.yml'

  import {
    Section,
    Link,
    Container,
    Highlight,
    Button,
    Panel,
    Logo,
    Text,
    Heading,
    Stack,
  } from 'fulldev-ui'
</script>

<Section class="z-10 -mb-xl  pb-0">
  <Container>
    <Panel class="light-orange border-transparent bg-base-9 shadow-lg">
      <Highlight
        row
        center
      >
        <Heading
          class="text-white"
          text={footer.cta.heading}
        />
        <Button
          class="!text-white hover:ring-base-4"
          slot="actions"
          {...footer.cta.button}
          variant="ringed"
        />
      </Highlight>
    </Panel>
  </Container>
</Section>

<Section class="dark border-t border-base-6 bg-base-1 pb-xl">
  <Container>
    <Stack
      row
      center
    >
      {#each footer.lists as list}
        <div class="flex flex-col items-start gap-xs">
          <Heading
            text={list.heading}
            as="h4"
            class="pb-sm"
          />
          {#each list.links as item}
            <Link
              class="small"
              {...item}
            />
          {/each}
        </div>
      {/each}
      <Highlight>
        <Logo
          src="/logo-white.svg"
          alt="Logo Anti-slip Profiles"
        />
        <Text
          class="!text-base-11"
          secondary
          text={footer.textarea}
        />
      </Highlight>
    </Stack>
  </Container>
</Section>
