<script lang="ts">
  import {
    Container,
    Flow,
    Form,
    Panel,
    Heading,
    Highlight,
    Section,
    Text,
    Input,
    Textarea,
    Button,
  } from 'fulldev-ui'

  type SupplierData = {
    adres: string
    email: string
    form_key: string
    map: string
    phone: string
  }

  export let content: any

  // @robert verplaatsen naar content/pages/contact.md
  const suppliers: {
    [key: string]: SupplierData
  } = {
    ned: {
      adres: 'address netherlands',
      email: 'info@antislipprofiles.com',
      form_key: '',
      map: 'map1.jpg',
      phone: '+31 6 12345678',
    },
    scn: {
      adres: 'address scandinavia',
      email: 'info@antislipprofiles.com',
      form_key: '',
      map: 'map2.jpg',
      phone: '+31 6 12345678',
    },
  }
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
            text="Heeft u een vraag, opmerking of bericht voor Anti-Slip Profiles? Gebruikt u dan het onderstaande formulier. Anti-Slip Profiles neemt dan zo snel mogelijk contact met u op om uw vraag te beantwoorden."
          />
        </Highlight>
        {#each [suppliers.ned, suppliers.scn] as supplier}
          <img
            src="/contact/{supplier.map}"
            alt="map"
          />
        {/each}
      </Flow>
      <Flow>
        <input
          type="checkbox"
          class="peer"
        />
        {#each [suppliers.ned, suppliers.scn] as supplier, i}
          <Panel
            class={i === 1
              ? 'hidden peer-checked:block'
              : 'block peer-checked:hidden'}
          >
            <!-- @robert aanvullen met contactgegevens -->
            {supplier.adres}
          </Panel>
          <Panel
            class={i === 1
              ? 'hidden peer-checked:block'
              : 'block peer-checked:hidden'}
          >
            <Form key={supplier.form_key}>
              <Input
                label="naam"
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
