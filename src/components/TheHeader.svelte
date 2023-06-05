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
  } from 'fulldev-ui'
</script>

<Navbar class="light border-transparent bg-transparent">
  <Drawer
    position="left"
    class="lg:hidden"
  >
    <div class="flex flex-col gap-md">
      {#each header.links as link}
        <Link {...link} />
      {/each}
    </div>
    <div>
      <Button
        href={''}
        class="light-orange"
      >
        <Icon name={'home'} />
      </Button>
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
  <Button
    variant="ghost"
    class="light-orange"
  >
    <Icon name="shopping_cart" />
  </Button>
</Navbar>

<Whatsapp tel="/" />
