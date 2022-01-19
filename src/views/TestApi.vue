<template>
  <div id="#app" class="mt-5 pt-5">
    {{data}}
  </div>     
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    data: null
  }),
    created(){
      axios.get('https://api.openweathermap.org/data/2.5/weather?id=7038902&units=metric&APPID=d7667d2d21805a0a483e3da7ce1a0c9b')
      .then((response) => {
        this.data = response.data;
        console.log(this.data);
      });
    }
}
</script>

<style>
</style>