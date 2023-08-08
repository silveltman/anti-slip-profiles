<script lang="ts">
  import { addToCart } from '@utils/shopify'
  import { Button, Select, Input, Text } from 'fulldev-ui'
  import Money from '@components/shopify/Money.svelte'

  export let product
  let quantity = '1'

  let selectedOptions: {
    [key: string]: string
  } = {}

  let selectedVariant = product.variants.nodes[0]

  function setSelectedVariant(selectedOptions) {
    if (Object.keys(selectedOptions).length === 0) return
    const foundVariant = product.variants.nodes.find((variant) => {
      return variant.selectedOptions.every((variantOption) => {
        return selectedOptions[variantOption.name] === variantOption.value
      })
    })
    selectedVariant = foundVariant
  }

  $: setSelectedVariant(selectedOptions)

  async function onSubmit() {
    console.log('selectedVariant', selectedVariant)
    await addToCart(selectedVariant.id, parseInt(quantity))

    const checkbox = document.getElementById('drawer-right')
    if (checkbox) {
      checkbox.checked = true
    }
  }
</script>

<form
  class="flex w-full flex-col gap-md"
  on:submit|preventDefault={onSubmit}
>
  {#each product.options as option}
    {#if option.name != 'Title'}
      <div class="flex flex-col">
        <Text
          class="block !text-base-11"
          secondary
          text={option.name}
        />
        <Select
          bind:value={selectedOptions[option.name]}
          disabled={option.values.length < 2}
          id={option.name}
          class="bg-image-none grow !opacity-100
          {option.values.length < 2 && 'bg-none'}
          "
          options={option.values}
        />
      </div>
    {/if}
  {/each}
  <Text class="!text-md font-heading large">
    <Money money={selectedVariant?.priceV2} />
  </Text>
  <div class="flex gap-sm">
    <Input
      placeholder="1"
      type="number"
      bind:value={quantity}
      id="quantity"
      class="w-20 shrink"
      min="1"
      max={selectedVariant?.quantityAvailable > 0
        ? selectedVariant?.quantityAvailable
        : null}
    />
    <Button
      disabled={!selectedVariant || selectedVariant.availableForSale === false}
      variant="solid"
      type="submit"
      class="light-orange w-full"
      text={selectedVariant?.availableForSale
        ? 'Toevoegen aan winkelwagen'
        : 'Tijdelijk uitverkocht'}
    />
  </div>
</form>
