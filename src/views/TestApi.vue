<template>
<div id="app">
  <h1 class="pt-5 mt-5"> Price Index</h1>
  <div v-for="currency in info2" v-bind:key="currency" class="currency">
    {{ currency.description }}:
    <span class="lighten">
      <span v-html="currency.symbol"></span>{{ currency.rate_float }}
    </span>
  </div>
   <div>
   </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    info: null,
    info2: null
  }),
  created() {
    axios
  .get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => (this.info2 = response.data.bpi))
  }
};
</script>

<style scoped lang="scss">
</style>