<template>

<nav class="container pt-5 mt-5">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{$translate(['Pencarian','Search'])}}</li>
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
  <br><br>Loading...
</div>

<div class="container" >
  <div class="row" id="results">
    <div class="col-lg-4 mb-3 d-flex align-items-stretch" v-for="item in items" :key="item.id">
        <div class="card h-100 container-fluid">
          <div class="pt-4">
            <img class="card-img-top container-fluid rounded-circle mx-auto d-block" style="width: 200px; height:200px;" :src="item.logo" alt="Card image">
          </div>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-center">{{item.name}}</h5>
            <p class="card-text text-center">{{item.office.name}}</p>
            <br>
            <h4 class="card-text">{{item.person}}</h4>
            <p class="card-text">{{item.office.whatsapp}}</p>
            <p></p>
            <p class="card-text">{{$filters.str_limit(item.office.address,70)}}</p>
            <div class="pt-2"></div>
            <div class="row mt-auto">
              <div class="col">
                <button class="btn w-100 btn-primary align-self-end" data-toggle="modal"
                  data-target="#Reservasi">Reservasi</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-block d-lg-none mt-auto"></div>
              <div class="col">
                <button class="btn w-100 btn-primary align-self-end" data-toggle="modal" data-target="#Jadwal"
                  @click="cariJadwal(item.id, item.office.id)">Jadwal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 </section> 
 
 <div id="loadmore">

</div>



<!-- Modal Reservasi -->
<section>
  <div class="modal fade" id="Reservasi" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Reservasi</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <img :src="images.speedid" alt="speedid" class="speedid-size pt-3">
        <div class="modal-body">
          <h4 class="font-weight-bold" id="buttonRs"></h4>
          <br>
          <h5 class="text-left">{{$translate(['Belum Install?','Have Not Installed Yet?'])}}</h5>
          <ol class="text-left">
            <li>Download SpeedID</li>
            <li>{{$translate(['Klik SpeedQ','Click SpeedQ'])}}</li>
            <li>{{$translate(['Cari Lokasi Yang Anda Inginkan','Find Your Desired location'])}}</li>
            <li>{{$translate(['Tambahkan Rumah Sakit Ini ke Favorite (Klik ★)','Add This Hospital Into Your Favourite (Click ★)'])}}</li>
            <li>{{$translate(['Pilih Dokter dan Hari Layanan','Choose The Doctor From Days of Service'])}}</li>
            <li>{{$translate(['Tiket Anda di My-Ticket','Your ticket is located in My-Ticket'])}}</li>
          </ol>
        </div>
        <div class="modal-footer">
          <div class="containe">
            <div class="row">
              <div class="col">
                <a href="https://play.google.com/store/apps/details?id=com.bamboomedia.speedid&hl=in&gl=US"
                  target="_blank"><img :src="images.playstore" alt="playstore" class="logo-download"></a>
              </div>
              <div class="col">
                <a href="https://apps.apple.com/id/app/speedid/id1439413446" target="_blank"><img :src="images.apple"
                    alt="apple" class="logo-download"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Modal Jadwal -->
<section>
  <div class="modal fade" id="Jadwal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Jadwal</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h4 class="font-weight-bold">
            {{$translate(['Jadwal Tersedia','Available Schedule'])}}
          </h4>
          <br>
            <div v-for="op in this.operational" :key="op.id">
              <div class="row">
                <div class="col-5 text-left">
                <h5 v-if="op.day == 1">Senin</h5>
                <h5 v-else-if="op.day == 2">Selasa</h5>
                <h5 v-else-if="op.day == 3">Rabu</h5>
                <h5 v-else-if="op.day == 4">Kamis</h5>
                <h5 v-else-if="op.day == 5">Jumat</h5>
                <h5 v-else-if="op.day == 6">Sabtu</h5>
                <h5 v-else-if="op.day == 0">Minggu</h5>
                </div>
                <h5 class="col-5 text-right"> {{op.opening_hours}} - {{op.closing_hours}}</h5>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import axios from "axios";
export default {
    data() {
    return {
      errored: false,
      loading: true,
      items: [],
      bahan: null,
      bahanimg: null,
      modal: false,
      template: null,
      operational: null,
      listpoli: null,
      poli: null,
      img: null,
      nama: null,
      alamat: null,
      deskripsi: null,
      waktu: null,
      bahan: null,
      total: null,
      jadwal: null,
      days: null,
      op_hours: null,
      ed_hours: null,


      total_item: null,
      images:{
        apple: require('@/assets/modal/apple.png'),
        playstore: require('@/assets/modal/playstore.png'),
        speedid: require('@/assets/modal/SpeedID.png')
      },
        apipage: 1,
        apilastpage: 1,
        repositories: [],
        loading: true,
        perPage: 20
    };
  },

  computed: {

  },
  methods: {
    cari() {
      this.loading = true;
      var value_search = localStorage.getItem("val_search");
      var value_kabupaten = localStorage.getItem("val_kabupaten");
      var value_kabupaten1 = localStorage.getItem("val_kabupaten1");
      console.log(value_search);
      if (value_kabupaten == "Lokasi" && value_kabupaten == "Location") {
        let baseUrl = 'https://cors-anywhere.herokuapp.com/https://kimiafarmadenpasar.co.id/api_bmta/counters_with_office.php?&lat=-8.6649188&long=115.2384802&page=';
        axios.get(baseUrl + this.apipage + `&search=${value_search}`)
          .then((response) => {
            // console.log(value_search);
            this.items.push(...response.data.data.items);
            this.bahanimg = response.data.data.items;
            var x = this.bahanimg;
            this.getimg = x.office;
            this.img = this.getimg;
            this.apilastpage = response.data.data.paging.total_page;
            this.loading = "false";
          })
          .catch(error => {
            console.log(error);
            this.errored = true;
          })
          .finally(() => this.loading = false);

      } else if (value_kabupaten){
        let baseUrl = 'https://cors-anywhere.herokuapp.com/https://kimiafarmadenpasar.co.id/api_bmta/counters_with_office.php?&lat=-8.6649188&long=115.2384802&page=';
        axios.get(baseUrl + this.apipage + `&search=${value_kabupaten}`)
          .then((response) => {
            // console.log(value_search);
            this.items.push(...response.data.data.items);
            this.bahanimg = response.data.data.items;
            var x = this.bahanimg;
            this.getimg = x.office;
            this.img = this.getimg;
            this.apilastpage = response.data.data.paging.total_page;
            this.loading = "false";
          })
          .catch(error => {
            console.log(error);
            this.errored = true;
          })
          .finally(() => this.loading = false);
      }
      else if (value_kabupaten1){
        let baseUrl = 'https://cors-anywhere.herokuapp.com/https://kimiafarmadenpasar.co.id/api_bmta/counters_with_office.php?&lat=-8.6649188&long=115.2384802&page=';
        axios.get(baseUrl + this.apipage + `&search=${value_kabupaten1}`)
          .then((response) => {
            // console.log(value_search);
            this.items.push(...response.data.data.items);
            this.bahanimg = response.data.data.items;
            var x = this.bahanimg;
            this.getimg = x.office;
            this.img = this.getimg;
            this.apilastpage = response.data.data.paging.total_page;
            this.loading = "false";
          })
          .catch(error => {
            console.log(error);
            this.errored = true;
          })
          .finally(() => this.loading = false);
      }
    },

    cariJadwal(id_counter, id_office) {
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

    getNextData() {
      window.onscroll = () => {
        if (this.apipage >= this.apilastpage) {
          document.getElementById("loadmore").innerHTML = '';
          return
        }
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          var template = `    
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div> <br><br>`
          document.getElementById("loadmore").innerHTML = template;
          this.apipage++;
          this.cari();
        }
      }
    }
  },
  mounted() {
    this.getNextData(),
    this.cari()
  }
}
</script>

<style>
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.fa-spinner {
  animation: spinner 1s linear infinite;
}

.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}

.card {
    max-width: 55rem;
}

.speedid-size{
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}

.logo-download{
 width: 100%;
}

.nopadding{
  padding: 0;
  margin: 0;
}

.responsive {
  width: 100%;
  max-width: 400px;
  height: auto;
} 
</style>