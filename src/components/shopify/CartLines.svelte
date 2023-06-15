<script lang="ts">
  import CartStore from '../../stores/CartStore.js'

  CartStore.subscribe((data) => {
    cart = data
  })

  let cart = {}
  console.log(cart)
</script>

<h1>HELLO WORLD</h1>
