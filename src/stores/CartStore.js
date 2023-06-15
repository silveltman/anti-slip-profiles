import { writable } from 'svelte/store'

const CartStore = writable({
  id: null,
})

export default CartStore
