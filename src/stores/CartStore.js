// @Robert dit is de svelte store voor de cart

import { writable } from 'svelte/store'

const CartStore = writable({
  id: null,
})

export default CartStore
