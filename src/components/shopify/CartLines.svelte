<script lang="ts">
  // @Robert Dit is het component waarin je kunt werken. Ik wil dan in dit component de producten die in de winkelwagen zitten weergeven.
  // Je hoeft niet om styling the denken, alleen het techische stukje.
  // Het is de bedoeling dat hier een live-data subscription/feed (ik weet niet precies hoe ik het moet noemen) plaatsvind met de svelte store
  // Als de svelte store veranders, moet dit component hierop reageren.
  // Ik krijg nu nog een error (vandaar dat ik het heb gecomment), ik denk dat dit verholpen kan worden door de code in een onMounted te wrappen, zodat het alleen runt op de client

  import CartStore from '../../stores/CartStore.js'

  // CartStore.subscribe((data) => {
  //   cart = data
  // })

  // let cart = {}
  // console.log(cart)
</script>

<h1>HELLO WORLD</h1>
