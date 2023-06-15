// @Robert in deze file staan de functies die de data van Shopify ophalen en plaatsen
// Het zijn graphql fetch request, waarvan de queries te vinden zijn in graphql.ts
// Ook in deze fil e kun je werken, check comment hieronder

import config from './config'
import {
  ProductsQuery,
  ProductQuery,
  VariantBySelectedOptionsQuery,
  CartCreateMutation,
  CartLinesAddMutation,
} from './graphql'

export async function fetchStorefront(query: string, variables = {}) {
  const endpoint = `${config.shopDomain}/api/${config.apiVersion}/graphql.json`
  const key = config.publicToken

  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key,
      },
      body: { query, variables } && JSON.stringify({ query, variables }),
    })

    const body = await result.json()
    if (body.errors) {
      console.error('Error fetching data from Shopify:', body.errors)
      return null
    }
    return body.data

    // return {
    //   status: result.status,
    //   body: await result.json(),
    // }
  } catch (error) {
    console.error('Error:', error)
    return {
      status: 500,
      error: 'Error receiving data',
    }
  }
}

// Return 250 products
export async function getProducts(first: number = 250) {
  const response = await fetchStorefront(ProductsQuery, { first })
  return response?.products.nodes
}

// Return product by id
export async function getProduct(id: string) {
  const response = await fetchStorefront(ProductQuery, { id })
  return response?.product
}

// Return product variant by selected options
export async function getVariantBySelectedOptions(
  id: string,
  selectedOptions: { name: string; value: string }[]
) {
  const response = await fetchStorefront(VariantBySelectedOptionsQuery, {
    id,
    selectedOptions,
  })
  return response.product.variantBySelectedOptions
}

// Create cart and return cart object
async function createCart(merchandiseId: string, quantity: number) {
  const response = await fetchStorefront(CartCreateMutation, {
    merchandiseId,
    quantity,
  })
  return response.cartCreate.cart
}

// Add to cart or create cart if none exists and return cart object

// @Robert Deze functie wordt aangeroepen in de AddToCartForm component. Het is de bedoeling dat deze function ALTIJD een cart creeert of een item toevoegt.
// In deze functie wordt nu gebruik gemaakt van localstorage.
// Het is de bedoeling dat wanneer de cart wordt aangemaakt/aangepast, dit automatisch wordt toegevoegd/geupdate in de svelte store
// Volgends mij kan door middel van een store.set() functie
// Ik heb al een store aangemaakt in src/stores/cart.ts
// het object wat je kunt toevoegen is OF addedCart OF createdCart, beide zijn het cart-object
// Deze kan vervolgens dus weer gelzen worden vanuit CartLines.svelte
export async function addToCart(merchandiseId: string, quantity: number) {
  const cartId = localStorage.getItem('cartId')
  console.log('cartId in localstorage:', cartId)
  if (cartId) {
    const addedCart = await fetchStorefront(CartLinesAddMutation, {
      cartId,
      merchandiseId,
      quantity,
    })
    console.log('Cart with added line:', addedCart)
    return addedCart.cartLinesAdd.cart
  } else {
    const createdCart = await createCart(merchandiseId, quantity)
    console.log('Created cart:', createdCart)
    localStorage.setItem('cartId', createdCart.id)
    return createdCart
  }
}
