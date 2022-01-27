<template>
<div class="pt-5">
    <div class="container pt-4">
      <nav aria-label="breadcrumb" class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Destination</li>
        </ol>
      </nav>
<section v-if="errored">
    <p class="text-center p-5">Mohon maaf, terjadi kesalahan saat mengambil data. Silakan coba beberapa saat lagi.</p>
</section>

<section v-else>
        <div v-if="loading" class="text-center p-5">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <br><br>Loading...</div>
        <div class="row" id="results"></div>
</section>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    i: null,
    isi: null,
    loading: true,
    errored: false
  }),
    created(){
      let baseUrl = 'https://kimiafarmadenpasar.co.id/api_bmta';
      axios.get(`${'https://cors-anywhere.herokuapp.com/'}${baseUrl}/offices.php?page=1&lat=-8.6649188&long=115.2384802`)
      .then((response) => {
        this.jml = response.data.data.paging.total_item;
        var jml_item = this.jml;
        console.log(this.jml);
        var strHTML = '';
        for (var i = 0; i < jml_item; i++){
          this.isi = response.data.data.items[i];
          console.log(this.isi.name);
          console.log(this.isi.id);
          var template =
              `
            <div class="col-lg-4 mb-4 d-flex align-items-stretch">
                <div class="card-group">
                  <div class="card card-members">
                    <img class="card-img-top" src="${this.isi.images[0]}" alt="Card image">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-center" id="${this.isi.id[i]}">${this.isi.name}</h5>
                          <p class="card-text">${this.isi.address}</p>
                        <a href="/destination-new/${i}" class="btn d-block btn-outline-primary">Detail</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              `
            strHTML += template;
          }
        document.getElementById('results').insertAdjacentHTML('beforeend', strHTML);
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