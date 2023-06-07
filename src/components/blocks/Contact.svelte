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
    Social,
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
              <div class="flex gap-sm">
                <Social
                  name="facebook"
                  href="#"
                />
                <Social
                  name="instagram"
                  href="#"
                />
                <Social
                  name="linkedin"
                  href="#"
                />
                <Social
                  name="email"
                  href="#"
                />
              </div>
            </Flow>
          </Panel>
          <Panel
            class="!bg-base-1
          {i === 0 ? 'flex peer-checked:hidden' : 'hidden peer-checked:flex'}
          "
          >
            <Form key={supplier._form_key}>
              <div class="flex flex-col">
                <Text
                  secondary
                  class="!text-base-11"
                  as="label"
                  text="Naam"
                />
                <Input
                  label="Naam"
                  id="naam"
                />
              </div>
              <div class="flex flex-col">
                <Text
                  secondary
                  class="!text-base-11"
                  as="label"
                  text="Email"
                />
                <Input
                  label="Email"
                  id="email"
                  type="email"
                />
              </div>
              <div class="flex flex-col">
                <Text
                  secondary
                  class="!text-base-11"
                  as="label"
                  text="Telefoon"
                />
                <Input
                  label="Telefoon"
                  id="telefoon"
                  type="tel"
                />
              </div>
              <div class="flex flex-col">
                <Text
                  secondary
                  class="!text-base-11"
                  as="label"
                  text="Bericht"
                />
                <Textarea
                  label="Bericht"
                  id="bericht"
                />
              </div>

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
