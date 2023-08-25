import config from './config'
import {
  ProductsQuery,
  ProductQuery,
  CartQuery,
  CartCreateMutation,
  CartLinesAddMutation,
  CartLinesRemoveMutation,
} from './graphql'
import cartStore from '@stores/CartStore.js'

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

// Return cart by id
export async function getCart(id: string) {
  const response = await fetchStorefront(CartQuery, { id })
  return response?.cart
}

// Create cart and return cart object
async function createCart(merchandiseId: string, quantity: number) {
  const response = await fetchStorefront(CartCreateMutation, {
    merchandiseId,
    quantity,
  })
  return response
}

export async function addToCart(merchandiseId: string, quantity: number) {
  rudderanalytics.track('Product Added')
  console.log('Product Added')
  const cartId = localStorage.cartId
  const isValid = cartId ? cartId.startsWith('gid://shopify/Cart/') : false
  if (isValid) {
    const addedCart = await fetchStorefront(CartLinesAddMutation, {
      cartId,
      merchandiseId,
      quantity,
    })
    cartStore.set(addedCart.cartLinesAdd.cart)
    return addedCart.cartLinesAdd.cart
  } else {
    const createdCart = await createCart(merchandiseId, quantity)
    cartStore.set(createdCart.cartCreate.cart)
    return createdCart.cartCreate.cart
  }
}

export async function removeCartLine(lineId: string) {
  const cartId = localStorage.cartId
  const removedLineCart = await fetchStorefront(CartLinesRemoveMutation, {
    cartId,
    lineIds: [lineId],
  })
  cartStore.set(removedLineCart.cartLinesRemove.cart)
  return removedLineCart.cartLinesRemove.cart
}
