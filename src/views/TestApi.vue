<template>
  <div id="api" class="mt-5 pt-5">
    <form class="d-none d-md-block">
    <div class="container-fluid form-row f-color px-5">
      <div class="col-3 ml-5">
        <select class="form-control form-control-md">
          <option hidden>{{$translate(['Lokasi','Location'])}}</option>
          <option>Denpasar</option>
          <option>Tabanan</option>
          <option>Klungkung</option>
          <option>Gianyar</option>
          <option>Buleleng</option>
        </select>
      </div>
      <div class="col-3">
        <select class="form-control form-control-md">
          <option hidden>{{$translate(['Kategori','Categories'])}}</option>
          <option v-for="kategori in poli" :key="kategori.id">{{kategori.name}}</option>
        </select>
      </div>
      <div class="col-3">
        <input class="form-control mr-2" type="search" placeholder="Search">
      </div>
      <div class="col-2">
        <router-link :to="{name: 'Destination'}">
          <button type="button" class="btn btn-md btn-block btn-primary">{{$translate(['Cari','Search'])}}</button>
        </router-link>
      </div>
    </div>
</form>
  </div>     
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    poli: null,
  }),
    created(){
      let baseUrl = 'https://kimiafarmadenpasar.co.id/api_bmta';
      axios.get(`${'https://cors-anywhere.herokuapp.com/'}${baseUrl}/grouped_counters.php`)
      // axios.get(`https://api.openweathermap.org/data/2.5/weather?id=7038902&units=metric&APPID=d7667d2d21805a0a483e3da7ce1a0c9b`)
      .then((response) => {
        this.poli = response.data.data.items.name;
        console.log(this.poli);
      })
      //  .catch(error => console.log('Request failed'));
    }
  }
</script>

<style>
</style>