<template>
<section v-if="errored">
    <div class="pt-5">
    <p>Mohon maaf, terjadi kesalahan saat mengambil data. Silakan coba beberapa saat lagi.</p>
    </div>
</section>

<section v-else>
  <div class="pt-5">
    <div class="container pt-4">
      <nav aria-label="breadcrumb" class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Destination</li>
        </ol>
      </nav>
        <div v-if="loading" class="text-center p-5">Loading...</div>
        <div class="row" id="results"></div>
    </div>
  </div>
</section>
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
        //this.isi = response.data.data;
        //var isi = this.isi;
        this.jml = response.data.data.paging.total_item;
        var jml_item = this.jml;
        console.log(this.jml);
        var strHTML = '';
        for (var i = 0; i < jml_item; i++){
          this.isi = response.data.data.items[i];
          var dataapi = this.isi;
          console.log(this.isi.name);
          console.log(this.isi.id);
          //var urut = i;
          //console.log(dataapi.whatsapp);
          var template =
              `
            <div class="col-lg-4 mb-4 d-flex align-items-stretch">
                <div class="card-group">
                  <div class="card card-members">
                    <img class="card-img-top" src="${this.isi.images[0]}" alt="Card image">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title" id="${this.isi.id[i]}">${this.isi.name}</h5>
                          <p class="card-text">${this.isi.address}</p>
                        <a href="/router-test/${i}" class="btn d-block btn-outline-primary">Detail</a>
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
         //document.getElementById("isiPrint").innerHTML = JSON.stringify(this.isi, null, 1);
        //console.log(this.isi);
      
      .catch(error => {
        console.log(error);
        this.error = true;
        //document.getElementById('error').innerHTML = "Data Tidak Ditemukan";
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