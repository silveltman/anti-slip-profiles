<script lang="ts">
  import { getProduct, getVariantBySelectedOptions } from '@utils/shopifyV3'
  import { Button, Select, Input, Text, Heading } from 'fulldev-ui'

  export let productId

  let selectedOptions: {
    name: string
    value: string
  }[] = []

  function setup(product) {
    console.log(selectedOptions)
    return product
  }

  let productPromise = async () =>
    await getProduct(productId).then((product) => setup(product))

  let selectedVariant
</script>

<form class="m-2xl flex max-w-md flex-col gap-md">
  {#await productPromise()}
    <p>...loading</p>
  {:then product}
    {JSON.stringify(selectedOptions)}
    {#each product.options as option, i}
      <div class="flex flex-col">
        <Text
          class="block !text-base-11"
          secondary
          text={option.name}
        />
        <Select
          bind:value={selectedOptions[i]}
          id={option.name}
          class="grow"
          options={option.values}
        />
      </div>
    {/each}

    <div>
      <Text as="h5">
        {selectedVariant.product.id}
      </Text>
    </div>

    <div class="flex gap-sm">
      <Input
        placeholder="1"
        type="number"
        value="1"
        id="aantal"
        class="w-20 shrink"
        min="1"
      />
      <Button
        variant="solid"
        type="submit"
        class="light-orange w-full"
        text="Toevoegen aan winkelwagen"
      />
    </div>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</form>
