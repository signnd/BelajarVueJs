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
    </div>
      
<section v-if="errored">
    <p class="text-center p-5">Mohon maaf, terjadi kesalahan saat mengambil data. Silakan coba beberapa saat lagi.</p>
</section>

<section v-else>
  <div v-if="loading" class="text-center p-5">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <br><br>Loading...
  </div>

  <div class="container">
    <div class="row" id="sip">
      <div class="col-lg-4 mb-4 d-flex align-items-stretch" v-for="item in items" :key="item.id">
        <div class="card-group h-100 container-fluid">
          <div class="card card-members">
            <img class="card-img-top" :src="item.images[0]" style="max-width:auto;" alt="Card image">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-center">{{item.name}}</h5>
              <p class="card-text">{{item.address}}</p>
              <button href="/destination/" class="btn d-block btn-outline-primary mt-auto" @click="cariJadwal(item.id)">Detail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
<div class="my-4">
            <ul class="pagination pagination-md justify-content-center text-center">
                <li class="page-item" :class="page === 1 ? 'disabled' : ''">
                    <a
                            class="page-link"
                            @click="prevPage"
                    >
                        Previous
                    </a>
                </li>
                <li class="page-link" style="background-color: inherit">
                    {{ page }} of {{ total_page }}
                </li>
                <li class="page-item" :class="page === total_page ? 'disabled' : ''">
                    <a class="page-link"
                       @click="nextPage"
                    >
                        Next
                    </a>
                </li>
            </ul>
        </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    items: null,
    nama: null,
    alamat: null,
    img: '',
    banyak: null,
    loading: true,
    errored: false,
    page: 1,
    total_page: null,
  }),
    created(){
        this.cari()
      },
      
      methods: {
      cari() {
        this.loading = true;
        let baseUrl = 'https://kimiafarmadenpasar.co.id/api';
      axios.get(`${'https://cors-anywhere.herokuapp.com/'}${baseUrl}/offices.php?lat=-8.6649188&long=115.2384802&page=${this.page}`)
      .then((response) => {
        this.items = response.data.data.items;
        this.page = response.data.data.paging.page;
        this.total_page = response.data.data.paging.total_page;
        this.banyak = response.data.data.paging.item_per_page;
        })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => this.loading = false);
      },

      prevPage() {
        this.page--;
        this.cari();
        window.scrollTo({top: 0, behavior: 'smooth'});
      },

      nextPage() {
        this.page++;
        this.cari();
        window.scrollTo({top: 0, behavior: 'smooth'});
      },

      cariDetail(id_counter, id_office){
        var cid = id_counter;
        var oid = id_office;

        // console.log("counter id :", cid);
        // console.log("office id :", oid);

        let baseUrl = 'https://cors-anywhere.herokuapp.com/https://kimiafarmadenpasar.co.id/api_bmta/operational_days.php?lat=-8.6649188&long=115.2384802&counter_id=';
        axios.get(baseUrl + cid + `&office_id=${oid}`)
        .then((response) => {
          this.operational = response.data.data.items;
        })
      },
    }
}

</script>

<style>
.card-members{
  padding:0;
}
</style>