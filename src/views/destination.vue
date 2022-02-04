<template>
<div class="page">
  <div class="pt-5">
    <div class="container pt-5">
      <nav aria-label="breadcrumb" class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">{{$translate(['Beranda','Home'])}}</a></li>
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

    <div v-else>
      <div v-if="loading" class="text-center p-5">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <br><br>Loading...
      </div>

      <div class="container">
        <div class="row" id="sip">
          <div class="col-lg-4 mb-4 d-flex align-items-stretch" v-for="(item, index) in items" :key="item.id">
            <div class="card-group h-100 container-fluid">
              <div class="card card-members">
                <img class="card-img-top" :src="item.images[0]" style="max-width:auto; height: 100%" alt="Card image">
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title text-center">{{item.name}}</h5>
                  <p class="card-text">{{item.address}}</p>
                  <button class="btn w-100 btn-primary align-self-end mt-auto"
                    @click="cariDetail(index)">Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="my-4 pb-4">
      <ul class="pagination pagination-md justify-content-center text-center">
        <li class="page-item" :class="page === 1 ? 'disabled' : ''">
          <a class="page-link" @click="prevPage">
            Previous
          </a>
        </li>
        <li class="page-link" style="background-color: inherit">
          {{ page }} of {{ this.apilastpage }}
        </li>
        <li class="page-item" :class="page === this.apilastpage ? 'disabled' : ''">
          <a class="page-link" @click="nextPage">
            Next
          </a>
        </li>
      </ul>
    </div>
  </div>
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
    link: 0,
    page: 1,
    total_page: null,
    apilastpage: 1,
  }),
    created(){
        this.cari()
      },
      
      methods: {
      cari() {
        this.loading = true;
        let baseUrl =
      "https://oobad.id/api/";
      axios.get(baseUrl + `offices.php?lat=-8.6649188&long=115.2384802&page=${this.page}`)
      .then((response) => {
        this.apilastpage = response.data.data.paging.total_page;
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

      cariDetail(id_link){
        var id = id_link;
        location.href = "/destination/"+ id;
      },
    }
}
</script>

<style>
.card-members{
  padding:0;
}
</style>