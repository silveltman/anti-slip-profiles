<script lang="ts">
  import {
    Button,
    Card,
    Container,
    Stack,
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
    Toggle,
  } from 'antislipprofiles-ui'

  export let content: any
</script>

<Section>
  <Container>
    <Stack
      row
      class="items-start"
    >
      <Stack>
        <Highlight>
          <Heading
            as="h1"
            text="Contact Anti-Slip Profiles"
          />
          <Text
            text="Heeft u een vraag, opmerking of een bericht voor Anti-Slip Profiles? Gebruikt u dan het onderstaande formulier. Anti-Slip Profiles neemt dan zo snel mogelijk contact met u op om uw vraag te beantwoorden."
          />
        </Highlight>
      </Stack>
      <Stack class="relative">
        <Toggle
          class="light-orange"
          id="area"
          left="Europa"
          right="Scandinavie"
        />
        {#each [content.europe, content.scandinavia] as supplier, i}
          <img
            src={supplier._map}
            alt="Kaart"
            class="absolute right-full top-[200px] w-full -translate-x-xl
            {i === 0 ? 'flex peer-checked:hidden' : 'hidden peer-checked:flex'}
            "
          />
          <Panel
            class="!bg-base-1
          {i === 0 ? 'flex peer-checked:hidden' : 'hidden peer-checked:flex'}
          "
          >
            <Stack>
              {#each [supplier.address, supplier.phone, supplier.email] as item}
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
              <!-- <div class="flex gap-sm">
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
              </div> -->
            </Stack>
          </Panel>
          <Panel
            class="!bg-base-1
          {i === 0 ? 'flex peer-checked:hidden' : 'hidden peer-checked:flex'}
          "
          >
            <Form
              key={supplier._form_key}
              action="/bedankt"
            >
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
      </Stack>
    </Stack>
  </Container>
</Section>
