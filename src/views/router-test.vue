<template>


<section v-if="errored">
    <p>Mohon maaf, terjadi kesalahan saat mengambil data. Silakan coba beberapa saat lagi.</p>
</section>

<section v-else>
    <div class="pt-4">
        <h3 class="pt-5">Links:</h3>
        <div v-if="loading">Loading...</div>
        <div id="results"></div>
    </div>
</section>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
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
          console.log(dataapi.whatsapp);
          var template =
              `
              <ul class="text-justify">
              <li>${this.isi.name}</li>
              </ul>
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