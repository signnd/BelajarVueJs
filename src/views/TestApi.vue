<template>
<div id="app">
  <h1 class="pt-5 mt-5"></h1>
  {{at}}
</div>
</template>

<script>
import axios from "axios";
export default {
   data: () => ({
    at: null,
    ab: null
  }),
  created() {
axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d7667d2d21805a0a483e3da7ce1a0c9b')
  .then((response) => {
    this.at = response.data.weather[0].main;
  });
  }
};
</script>

<style>
</style>