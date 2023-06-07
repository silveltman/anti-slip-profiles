<script>
  import {
    Gallery,
    Container,
    Flow,
    Highlight,
    Section,
    Button,
    Text,
    Heading,
    Image,
    Input,
  } from 'fulldev-ui'

  export let product
</script>

<form>
  <Input
    placeholder="1"
    type="number"
    value="1"
    id="aantal"
  />
  <Button
    variant="solid"
    class="light-orange w-full"
    text="Voeg toe aan winkelwagen"
  />
</form>
