<script lang="ts">
  import { Button, Icon } from 'fulldev-ui'
  import Money from '@components/shopify/Money.svelte'
  import { removeCartLine } from '@utils/shopify'
  export let line

  function removeLine() {
    removeCartLine(line.id)
  }
</script>

<div class="flex gap-md py-lg">
  <a href="/producten/{line.merchandise.product.handle}">
    <img
      class="h-20 w-20 object-cover"
      src={line.merchandise.image.url}
      alt={line.merchandise.image.altText}
    />
  </a>
  <div class="flex w-full flex-col">
    <h6>{line.merchandise.product.title}</h6>
    <span class="text-sm text-base-11">{line.merchandise.title}</span>
    {#if line.quantity > 1}
      <span class="mt-auto text-sm text-base-11">{line.quantity} stuks</span>
    {/if}
  </div>
  <div class="flex flex-col items-end">
    <Money
      class="pr-sm"
      money={line.cost.totalAmount}
    />
    <Button
      class="mt-auto small"
      on:click={removeLine}
    >
      <Icon
        name="delete"
        size={20}
      />
    </Button>
  </div>
</div>
