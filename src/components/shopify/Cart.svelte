<script lang="ts">
  // @Robert dit component is een wrapper voor de CartLines component, waarin de items die in de winkelwagen zitten wroden weergegeven.
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
  // import CartLines from './shopify/CartLines.svelte'
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

  <!-- <CartLines /> -->
  <p>Producten komen straks hier...</p>
</Drawer>
