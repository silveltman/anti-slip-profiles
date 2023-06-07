<script lang="ts">
  import site from '@data/site'
  import header from '@data/header.yml'
  import Cart from './Cart.svelte'
  import { Logo, Navbar, Link, Icon, Button, Drawer, Social } from 'fulldev-ui'
</script>

<Navbar class="light border-transparent bg-transparent">
  <Drawer
    position="left"
    class="lg:hidden"
  >
    <div class="flex h-full flex-col gap-md">
      {#each header.links as link}
        <Link {...link} />
      {/each}
    </div>
    <div class="mt-lg flex gap-sm">
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
  </Drawer>
  <Logo
    src={site.logo}
    class="max-lg: mr-auto max-lg:w-[180px]"
    alt="Logo Anti-slip Profiles"
  />
  {#each header.links as link}
    <Link
      class="max-lg:hidden"
      {...link}
    />
  {/each}
  <Cart />
</Navbar>
