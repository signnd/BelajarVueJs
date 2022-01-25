<template>
<br>
<br>
<br>
<br>
<br>
<br>

<div class="row" id="results"><div v-if="loading">Loading...</div></div>
<div class="error" id="error"></div>
  
 
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      page: 1,
    };
  },
  api: () => ({
    listpoli: null,
    poli: null,
    img: null,
    nama: null,
    alamat: null,
    deskripsi: null,
    waktu: null,
    bahan: null,
    total: null,
    loading: true,

    page: null,
    total_page: null,
    item_per_page: null,
  }),
  created() {
    this.cari()
  },
  methods: {
    cari: function () {
      var value_kabupaten = localStorage.getItem("val_kabupaten");
      console.log(value_kabupaten);
      let baseUrl = 'https://kimiafarmadenpasar.co.id/api_bmta';
      axios.get(`${'https://cors-anywhere.herokuapp.com/'}${baseUrl}/counters_with_office.php?page=1&lat=-8.6649188&long=115.2384802&search=${value_kabupaten}`)
        .then((response) => {
          this.total = response.data.data.paging.item_per_page;
          var total_item = this.total;
          var strHTML = '';
          for (var i = 0; i < total_item; i++) {
            this.bahan = response.data.data.items[i];
            console.log(this.bahan);
            console.log(this.bahan.name);
            var template =
              `<div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-12">
                  <div class="container d-flex">
                    <div class="container my-5 align-items-center" style="width: 900px;">
                      <div class="card-group">
                        <div class="card" style="width:auto;">
                          <img class="card-img-top" src="${this.bahan.office.images[1]}" alt="Card image 1">
                          <div class="card-body text-center">
                            <h5 class="card-title" id="rs4">${this.bahan.name}</h5>
                            <p class="card-text">${this.bahan.office.name}</p>
                            <br>
                            <h4 class="card-text">${this.bahan.person}</h4>
                            <p class="card-text">${this.bahan.office.whatsapp}</p>
                            <p class="card-text">${this.bahan.office.address}</p>
                            <div class="pt-2"></div>
                            <div class="row">
                              <div class="col">
                                <button class="btn w-100 btn-primary" data-toggle="modal"
                                  data-target="#Reservasi" @click="setName('rs4')">Reservasi</button>
                              </div>
                                <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
                              <div class="col">
                                <button class="btn w-100 btn-primary" data-toggle="modal"
                                  data-target="#Jadwal">Jadwal</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;
            strHTML += template;
          }
          document.getElementById('results').insertAdjacentHTML('beforeend', strHTML);
        })
        .catch(error => {
          document.getElementById('error').innerHTML = "Data Tidak Ditemukan";
         })
        .finally(() => this.loading = false)
    },
    retrivePaging() {
      let baseUrl = 'https://kimiafarmadenpasar.co.id/api_bmta';
      axios.get(`${'https://cors-anywhere.herokuapp.com/'}${baseUrl}/counters_with_office.php?page=1&lat=-8.6649188&long=115.2384802&search=${value_kabupaten}`)
      .then((response) => {
          this.page = response.data.data.paging.page;
          this.total_page = response.data.data.total_page;
          this.item_per_page = response.data.data.item_per_page;
      })
    }
  }
}
</script>

<style>
.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}
</style>