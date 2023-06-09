<script lang="ts">
  import { cartCreateMutation } from '@utils/shopifyV2'
  import {
    getProduct,
    getVariantBySelectedOptions,
    addToCart,
  } from '@utils/shopifyV3'
  import { Button, Select, Input, Text } from 'fulldev-ui'

  export let productId
  let quantity = '1'
  let selectedVariant
  let selectedOptions: {
    [key: string]: string
  } = {}

  async function setSelectedVariant(productId, selectedOptions) {
    const array: any = Object.entries(selectedOptions).map(([key, value]) => ({
      name: key,
      value: value,
    }))
    selectedVariant = await getVariantBySelectedOptions(productId, array)
  }

  $: setSelectedVariant(productId, selectedOptions)

  let productPromise = async () => await getProduct(productId)

  async function onSubmit() {
    await addToCart(selectedVariant.id, parseInt(quantity))
  }
</script>

<form
  class="m-2xl flex max-w-md flex-col gap-md"
  on:submit|preventDefault={onSubmit}
>
  {#await productPromise()}
    <p>...loading</p>
  {:then product}
    {#each product.options as option}
      <div class="flex flex-col">
        <Text
          class="block !text-base-11"
          secondary
          text={option.name}
        />
        <Select
          bind:value={selectedOptions[option.name]}
          id={option.name}
          class="grow"
          options={option.values}
        />
      </div>
    {/each}
    <div class="flex gap-sm">
      <Input
        placeholder="1"
        type="number"
        bind:value={quantity}
        id="quantity"
        class="w-20 shrink"
        min="1"
      />
      <Button
        disabled={!selectedVariant ||
          selectedVariant.availableForSale === false}
        variant="solid"
        type="submit"
        class="light-orange w-full"
        text={selectedVariant?.availableForSale
          ? 'Toevoegen aan winkelwagen'
          : 'Tijdelijk uitverkocht'}
      />
    </div>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</form>
