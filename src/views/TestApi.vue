<template>
<div id="app">
  <h1 class="pt-5 mt-5"></h1>
  {{weather}} is the current weather condition in {{location}}
</div>
<img src="" alt="wicon" id="wicon">
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    weather: null,
    location: null,
    simbol: null
  }),
  created() {
    axios.get('https://api.openweathermap.org/data/2.5/weather?id=1643084&APPID=d7667d2d21805a0a483e3da7ce1a0c9b')
      .then((response) => {
        this.weather = response.data.weather[0].description;
        this.simbol = response.data.weather[0].icon;
        this.location = response.data.name;

        var s = this.simbol;
        var micon = "https://openweathermap.org/img/w/" + s + ".png";

        document.getElementById("wicon").src = micon;        
      });
  }
};

</script>

<style>
</style>