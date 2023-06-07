<script lang="ts">
  import site from '@data/site'
  import header from '@data/header.yml'
  import {
    Logo,
    Navbar,
    Link,
    Icon,
    Button,
    Drawer,
    Whatsapp,
    Heading,
  } from 'fulldev-ui'
</script>

<Drawer position="right">
  <Icon
    slot="toggle"
    class="!light-primary p-sm"
    size={24}
    name="shopping_cart"
  />
  <Heading
    secondary
    class="!text-base-11"
    text="Winkelwagen"
    slot="header"
  />

  <p>Producten komen straks hier...</p>
</Drawer>
