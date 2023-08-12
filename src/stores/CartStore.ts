import { writable } from 'svelte/store'
import { getCart } from '@utils/shopify'

async function initialCart(id) {
  const cart = await getCart(id)
  cartStore.set(cart)
}

const id = localStorage.cartId
const idIsValid = id ? id.startsWith('gid://shopify/Cart/') : false

if (idIsValid) {
  initialCart(id)
}

const cartStore: any = writable()

cartStore.subscribe((data) => {
  if (!data) return
  localStorage.cartId = data.id
})

export default cartStore
