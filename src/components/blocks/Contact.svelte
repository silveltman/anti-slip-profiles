<script lang="ts">
  import {
    Button,
    Card,
    Container,
    Flow,
    Form,
    Heading,
    Highlight,
    Input,
    Panel,
    Section,
    Text,
    Textarea,
    Icon,
  } from 'fulldev-ui'

  export let content: any
</script>

<Section>
  <Container>
    <Flow
      row
      class="items-start"
    >
      <Flow>
        <Highlight>
          <Heading
            as="h1"
            text="Contact Anti-Slip Profiles"
          />
          <Text
            text="Heeft u een vraag, opmerking of een bericht voor Anti-Slip Profiles? Gebruikt u dan het onderstaande formulier. Anti-Slip Profiles neemt dan zo snel mogelijk contact met u op om uw vraag te beantwoorden."
          />
        </Highlight>
        <img
          src={content.europe._map}
          alt="Kaart"
          class="map max-lg:hidden"
        />
      </Flow>
      <Flow>
        <input
          type="checkbox"
          class="peer"
        />
        {#each [content.europe, content.scandinavia] as supplier, i}
          <Panel
            class="!bg-base-1
          {i === 0 ? 'flex peer-checked:hidden' : 'hidden peer-checked:flex'}
          "
          >
            <Flow>
              {#each [supplier.address, supplier.phone, supplier.email] as item}
                <!-- content here -->
                <div class="flex items-center gap-md">
                  <Button
                    href={item.href}
                    class="light-orange"
                  >
                    <Icon name={item.icon} />
                  </Button>
                  <div class="flex flex-col gap-xs">
                    <Heading
                      secondary
                      text={item.heading}
                    />
                    <Text
                      secondary
                      text={item.text}
                    />
                  </div>
                </div>
              {/each}
            </Flow>
          </Panel>
          <Panel
            class="!bg-base-1
          {i === 0 ? 'flex peer-checked:hidden' : 'hidden peer-checked:flex'}
          "
          >
            <Form key={supplier._form_key}>
              <Input
                label="Naam"
                id="naam"
              />
              <Input
                label="Email"
                id="email"
                type="email"
              />
              <Input
                label="Telefoon"
                id="telefoon"
                type="tel"
              />
              <Textarea
                label="Bericht"
                id="bericht"
              />
              <Button
                variant="solid"
                type="submit"
                text="Verstuur"
                class="light-orange"
              />
            </Form>
          </Panel>
        {/each}
      </Flow>
    </Flow>
  </Container>
</Section>
