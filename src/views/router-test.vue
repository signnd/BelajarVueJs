<template>
<div class="pt-5">
    <div class="container pt-5">
      <nav aria-label="breadcrumb" class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">{{ $translate(["Destinasi", "Destination"]) }}</li>
        </ol>
      </nav>

      <h2 class="font-weight-bold text-center pb-3">
        {{ $translate(["Destinasi", "Destination"]) }}
      </h2>
      
<section v-if="errored">
    <p class="text-center p-5">Mohon maaf, terjadi kesalahan saat mengambil data. Silakan coba beberapa saat lagi.</p>
</section>

<section v-else>
        <div v-if="loading" class="text-center p-5">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <br><br>Loading...</div>

<div class="container">
 <div class="row" id="sip">
    <!-- <div class="col-lg-4 mb-3 d-flex align-items-stretch" v-for="item in this.isi" :key="item.id">
      <div class="card">
        <div class="card h-100">
          <img class="card-img-top img1" :src="img" alt="Card image">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{item.name}}</h5>
            <div class="pt-2"></div>
            <div class="row">
            </div>
          </div>
        </div>
      </div>
    </div> --> 
  </div>
</div>
        
</section>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    isi: null,
    nama: null,
    alamat: null,
    img: '',
    banyak: null,
    loading: true,
    errored: false
  }),
    created(){
      let baseUrl = 'https://kimiafarmadenpasar.co.id/api_bmta';
      axios.get(`${'https://cors-anywhere.herokuapp.com/'}${baseUrl}/offices.php?lat=-8.6649188&long=115.2384802`)
      .then((response) => {
        var strHTML = '';
        this.banyak = response.data.data.paging.total_item;
        var byk = this.banyak;
        for (var i = 0; i < byk; i++){
          this.isi = response.data.data.items[i];
          console.log(this.isi);
          var template =
              `
            <div class="col-lg-4 mb-4 d-flex align-items-stretch">
                <div class="card-group h-100 container-fluid">
                  <div class="card card-members">
                    <img class="card-img-top" src="${this.isi.images[0]}" style="max-width:auto;" alt="Card image">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-center">${this.isi.name}</h5>
                          <p class="card-text">${this.isi.address}</p>
                        <a href="/destination/${i}" class="btn d-block btn-outline-primary mt-auto">Detail</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              `
            strHTML += template;
          }
        document.getElementById('sip').insertAdjacentHTML('beforeend', strHTML);
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => this.loading = false);
      }
}

</script>

<style>
.card-members{
  padding:0;
}
</style>