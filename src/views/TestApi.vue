<template>
  <div id="api" class="mt-5 pt-5">
    <!-- {{data}} -->
  </div>     
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    items: null,
    weather: null
  }),
    created(){
      let baseUrl = 'https://kimiafarmadenpasar.co.id/api_bmta';
      // axios.get(`${'https://cors-anywhere.herokuapp.com/'}${baseUrl}/grouped_counters.php`)
      axios.get(`https://api.openweathermap.org/data/2.5/weather?id=7038902&units=metric&APPID=d7667d2d21805a0a483e3da7ce1a0c9b`)
      .then((response) => {
        this.data = response.data.weather;
        console.log(this.data);
      })
      //  .catch(error => console.log('Request failed'));
    }
  }
</script>

<style>
</style>