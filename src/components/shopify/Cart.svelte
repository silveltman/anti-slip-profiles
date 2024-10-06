<script lang="ts">
  import cartStore from '@stores/CartStore.js'
  import { Icon, Drawer, Heading, Button, Text } from 'antislipprofiles-ui'
  import CartLine from './CartLine.svelte'
  import Money from './Money.svelte'

  let animating = false

  $: {
    if ($cartStore) {
      onQuantityChange($cartStore.totalQuantity)
    }
  }

  async function onQuantityChange(totalQuantity) {
    animating = true
    await new Promise((resolve) => setTimeout(resolve, 800)) // Animation duration (200ms)
    animating = false
  }
</script>

<Drawer position="right">
  <Icon
    slot="toggle"
    class="relative p-sm"
    size={24}
  >
    shopping_cart
    {#if $cartStore && $cartStore.totalQuantity > 0}
      <span
        class="light-orange absolute left-3/4 top-3/4 rounded-button bg-base-9 p-sm text-sm font-button text-white"
        class:animating
      >
        {$cartStore.totalQuantity}
      </span>
    {/if}
  </Icon>
  <Heading
    secondary
    class="!text-base-11"
    text="Winkelwagen"
    slot="header"
  />
  {#if $cartStore}
    <div class="flex flex-col divide-y divide-base-6">
      {#each $cartStore.lines.nodes as item}
        <CartLine line={item} />
      {/each}
    </div>
    <div
      class="fixed bottom-0 left-0 right-0 mt-auto flex flex-col items-stretch gap-md border-t border-base-6 bg-base-1 p-lg"
    >
      <div class="flex items-center justify-between">
        <span class="text-base-11">Totaal:</span>
        <Money money={$cartStore.cost.totalAmount} />
      </div>
      <!-- <p class="text-center text-base-11">Verzendkosten bij afrekenen</p> -->
      <Button
        class="light-orange"
        variant="solid"
        text="Afrekenen"
        disabled={$cartStore.lines.nodes.length > 0 ? false : true}
        href={$cartStore ? $cartStore.checkoutUrl : undefined}
      />
      <Text
        secondary
        class="!text-base-11 small"
        >Verzendkosten worden berekend bij het afrekenen</Text
      >
    </div>
  {:else}
    <div class="flex w-full flex-col items-center justify-center gap-md py-xl">
      <Icon
        name="shopping_cart"
        class="rotate-12"
      />
      <p class="text-center text-base-11">Uw winkelwagen is leeg</p>
    </div>
  {/if}
</Drawer>

<style>
  .animating {
    animation: scale-animation 800ms;
  }

  @keyframes scale-animation {
    50% {
      transform: scale(2.2);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
