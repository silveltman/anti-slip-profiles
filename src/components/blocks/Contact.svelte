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
    Whatsapp,
  } from 'fulldev-ui'
  import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconMail,
    IconMapPin,
    IconPhoneCall,
  } from '@tabler/icons-svelte'

  export let content: any
</script>

<Section>
  <Container>
    <Flow row>
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
        {#each [content.suppliers.netherlands, content.suppliers.scandinavia] as supplier}
          <img
            src={supplier.map}
            alt="Kaart"
          />
        {/each}
      </Flow>
      <Flow>
        <input
          type="checkbox"
          class="peer"
        />
        {#each [content.suppliers.netherlands, content.suppliers.scandinavia] as supplier, i}
          <Panel
            class="space-y-8 {i === 1
              ? 'hidden peer-checked:block'
              : 'block peer-checked:hidden'}"
          >
            <div class="space-y-4">
              <Card box class="bg-white">
                <div class="flex flex-row items-center justify-center gap-x-4">
                  <div class="basis-1/4">
                    <Card box>
                      <IconMapPin color='#f76808' />
                    </Card>
                  </div>
                  <div class="basis-3/4">
                    <strong><Text text="Plaats" /></strong>
                    <Text
                      text={supplier.address}
                    />
                  </div>
                </div>
              </Card>
              <Card box class="bg-white">
                <div class="flex flex-row items-center justify-center gap-x-4">
                  <div class="basis-1/4">
                    <Card box>
                      <IconMail color='#f76808' />
                    </Card>
                  </div>
                  <div class="basis-3/4">
                    <strong><Text text="Email" /></strong>
                    <Text
                      text={supplier.email}
                    />
                  </div>
                </div>
              </Card>
              <Card box class="bg-white">
                <div class="flex flex-row items-center justify-center gap-x-4">
                  <div class="basis-1/4">
                    <Card box>
                      <IconPhoneCall color='#f76808' />
                    </Card>
                  </div>
                  <div class="basis-3/4">
                    <strong><Text text="Telefoon" /></strong>
                    <Text
                      text={supplier.phone}
                    />
                  </div>
                </div>
              </Card>
            </div>
            <Flow row center>
              <!-- socials -->
            </Flow>
          </Panel>
          <Panel
            class={i === 1
              ? 'hidden peer-checked:block'
              : 'block peer-checked:hidden'}
          >
            <Form key={supplier.form_key}>
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
