<script lang="ts">
  export let money: {
    amount: string
    currency: string
  }
  let className = ''
  export { className as class }
</script>

<span class={className}>
  €{money.amount.replace('.', ',')}
</span>
