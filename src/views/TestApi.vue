<template>
<br>
<br>
<br>
<br>
<br>
<br>
<div class="container d-flex">
  <div class="container my-5 align-items-center" style="width: 900px;">
    <div class="card-group">
      <div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" src="" id="img1" alt="RSUP Sanglah">
          <div class="card-body text-center">
            <h5 class="card-title" id="rs1">{{this.nama}}</h5>
            <br>
            <p class="card-text text-bold">{{this.poli}}</p>
            <p class="card-text">{{this.alamat}}</p>
            <div class="pt-4 d-none d-sm-block"></div>
            <router-link to="" class="btn d-block btn-outline-primary text-wrap gap-2">Detail
            </router-link>
            <div class="py-1"></div>
            <div class="container-fluid">
              <div class="row">
                <div class="col">
                  <button class="btn w-100 btn-primary" data-toggle="modal"
                    data-target="#Reservasi">{{$translate(['Reservasi','Reservation'])}}</button>
                </div>
                <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
                <div class="col">
                  <button class="btn w-100 btn-primary" data-toggle="modal"
                    data-target="#Jadwal">{{$translate(['Jadwal','Schedule'])}}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  <form class="d-none d-md-block">
    <div class="container-fluid form-row f-color px-5">
      <div class="col-3 ml-5">
        <select class="form-control form-control-md">
          <option hidden>Lokasi</option>
          <option>Denpasar</option>
          <option>Tabanan</option>
          <option>Klungkung</option>
          <option>Gianyar</option>
          <option>Buleleng</option>
        </select>
      </div>
      <div class="col-3">
        <select class="form-control form-control-md">
          <option hidden>Kategori</option>
          <option v-for="klinik in this.listpoli" :key="klinik.id">{{klinik.name}}</option>
        </select>
      </div>
      <div class="col-3">
        <input class="form-control mr-2" type="search" placeholder="Pencarian">
      </div>
      <div class="col-2">
        <router-link :to="{name: 'Destination'}">
          <button type="button" class="btn btn-md btn-block btn-outline-light">Search</button>
        </router-link>
      </div>
    </div>
</form>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    listpoli: null,
    poli: null,
    img: null,
    nama: null,
    alamat: null,
    deskripsi: null,
    waktu: null,
  }),
  created() {
    let baseUrl = 'https://kimiafarmadenpasar.co.id/api_bmta';
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}${baseUrl}/counters_with_office.php?page=1&limit=2&lat=-8.6649188&long=115.2384802`)
      .then((response) => {
        this.img = response.data.data.items[0].office.images[1];
        this.nama = response.data.data.items[0].office.name;
        this.alamat = response.data.data.items[0].office.address;
        this.deskripsi = response.data.data.items[0].office.description;
        this.poli = response.data.data.items[0].name;
        document.getElementById("img1").src = this.img;
        console.log(alamat);
      })
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}${baseUrl}/grouped_counters.php`)
      .then((response) => {
        this.listpoli = response.data.data.items;
      })
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}${baseUrl}/operational_days.php?office_id=1&counter_id=1`)
      .then((response) => {
        this.waktu = response.data.data.items;
      })
  }
}
</script>

<style>
</style>