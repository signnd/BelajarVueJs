<template>
  <div id="app">
    <h1 class="pt-5 mt-5">
      Currently in {{location}}
    </h1>
    <img src="" alt="wicon" id="wicon"><b>{{temp}}</b>
    <br>
    <b>Feels like {{feels_like}} °C, with {{weather}}. </b>
    <br>
  </div>

<nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Api</li>
  </ol>
</nav>

</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    weather: null,
    location: null,
    simbol: null,
    suhu: null,
    data: null,
    temp: null,
    feels_like: null
  }),
  created() {
    axios.get('https://api.openweathermap.org/data/2.5/weather?id=7038902&units=metric&APPID=d7667d2d21805a0a483e3da7ce1a0c9b')
      .then((response) => {
        this.weather = response.data.weather[0].description;
        this.simbol = response.data.weather[0].icon;
        this.location = response.data.name;
        this.feels_like = response.data.main.feels_like;
        this.temp = response.data.main.temp;
        this.data = response.data;

        var micon = "https://openweathermap.org/img/wn/" + this.simbol + "@2x.png";
        document.getElementById("wicon").src = micon;        
      });
  }
};

</script>

<style>
.breadcrumb{
  margin-bottom: 0;
  background-color: white;
}
</style>