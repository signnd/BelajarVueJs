<template>


<div class="container">
  <div class="row" id="results">

  </div>
</div>

<div class="error pb-5" id="error"></div>
<!-- <div @scroll="onScroll"></div> -->
        <div class="my-4">
          <ul class="pagination pagination-md justify-content-center text-center">
            <li class="page-item" :class="page === lastPage ? 'disabled' : ''">
              <a class="page-link" @click="nextPage">Load More</a>
            </li>
          </ul>
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
        <img :src="images.speedid" alt="speedid" class="speedid-size pt-3">
        <div class="modal-body">
          <h4 class="font-weight-bold">
            {{$translate(['Jadwal Tersedia','Available Schedule'])}}
          </h4>
          <div class="row px-4">
            <div class="col-5 text-left">
              <h5>{{$translate(['Senin','Monday'])}}</h5>
              <h5>{{$translate(['Rabu','Wednesday'])}}</h5>
              <h5>{{$translate(['Kamis','Thursday'])}}</h5>
              <h5>{{$translate(['Jumat','Friday'])}}</h5>
              <h5>{{$translate(['Sabtu','Saturday'])}}</h5>
              <h5>{{$translate(['Minggu','Sunday'])}}</h5>
            </div>
            <div class="col-5 text-right">
              <!-- <div v-for="jadwal in waktu" :key="jadwal.id">
              <h5>  {{jadwal.opening_hours}} - {{jadwal.closing_hours}} </h5> -->
            </div>
          </div>
          </div>
          <hr>
          <br>
          <h5 class="text-left">{{$translate(['Belum Install SpeedID?','Have Not Installed Yet?'])}}</h5>
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
</section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      images:{
        apple: require('@/assets/modal/apple.png'),
        playstore: require('@/assets/modal/playstore.png'),
        speedid: require('@/assets/modal/SpeedID.png')
      },
        apipage: 1,
        repositories: [],
        page: 1,
        loading: false,
        perPage: 20
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

    total_page: null,
    item_per_page: null,
  }),
  computed: {
      lastPage() {
        let baseUrl = 'https://cors-anywhere.herokuapp.com/https://kimiafarmadenpasar.co.id/api_bmta/counters_with_office.php?lat=-8.6649188&long=115.2384802&page=';
        axios.get(baseUrl + this.apipage)
          .then((response) => {
           this.total_page = response.data.data.paging.total_page;
           var tp = this.total_page;
           console.log(tp);
           return tp;
          })
      }
  },
  methods: {
      setName(idName) {
        var name = document.getElementById(idName).innerHTML;
        console.log(name);
        let language = localStorage.getItem('language')
        if (language == 1) {
          document.getElementById("buttonRs").innerHTML = "Anda dapat melakukan registrasi langsung lewat aplikasi SpeedID dengan mencari office" + " " + "'" + name + "'" + " " + "pada fitur SpeedQ."
        } else {
          document.getElementById("buttonRs").innerHTML = "You can register directly through the SpeedID application by searching for office" + " " + "'" + name + "'" + " " + "in the SpeedQ feature."
        }
      },
      cari() {
        var value_kabupaten = localStorage.getItem("val_kabupaten");
        console.log(value_kabupaten);
        if (value_kabupaten == "Lokasi" || value_kabupaten == "undefined") {
          let baseUrl = 'https://cors-anywhere.herokuapp.com/https://kimiafarmadenpasar.co.id/api_bmta/counters_with_office.php?&lat=-8.6649188&long=115.2384802&page=';
          axios.get(baseUrl + this.apipage)
            .then((response) => {
              this.repositories = response.data.data.items;
              this.total = response.data.data.paging.total_page;
              this.item_per_page = response.data.data.paging.item_per_page;
              var total_item = this.total;
              var strHTML = '';
              for (var i = 0; i < total_item; i++) {
                this.bahan = response.data.data.items[i];
                // console.log(this.bahan);
                // console.log(this.bahan.name);
                var template =
                  `<div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-12">
                    <div class="my-5 align-items-center">
                      <div class="card-group">
                        <div class="card h-100">
                          <img class="card-img-top" src="${this.bahan.office.images[0]}" alt="Card image 1">
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
                                  data-target="#Reservasi" ">Reservasi</button>
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
                  </div>`;
                strHTML += template;
              }
              document.getElementById('results').insertAdjacentHTML('beforeend', strHTML);
            })
            .catch(error => {
              document.getElementById('error').innerHTML = "Data Tidak Ditemukan";
            })
        } else {
          let baseUrl = 'https://cors-anywhere.herokuapp.com/https://kimiafarmadenpasar.co.id/api_bmta/counters_with_office.php?&lat=-8.6649188&long=115.2384802&page=';
          axios.get(baseUrl + this.apipage + `&search=${value_kabupaten}`)
            .then((response) => {
              this.repositories = response.data.data.items;
              this.total = response.data.data.paging.total_page;
              this.item_per_page = response.data.data.paging.item_per_page;
              var total_item = this.total;
              var strHTML = '';
              for (var i = 0; i < total_item; i++) {
                this.bahan = response.data.data.items[i];
                // console.log(this.bahan);
                // console.log(this.bahan.name);
                var template =
                  `<div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-12">
                  <div class="container d-flex">
                    <div class="container my-5 align-items-center" style="width: 900px;">
                      <div class="card-group">
                        <div class="card" style="width:auto;">
                          <img class="card-img-top" src="${this.bahan.office.images[0]}" alt="Card image 1">
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
        }
      },

      prevPage() {
        this.page--;
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      },

      nextPage() {
        this.githubPage++;
        this.cari();
        this.page++;
      },

    // onScroll() {
    //   let asd = this;
    //   window.onscroll = () => {
    //     let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
    //     if (bottomOfWindow) {
    //       this.apipage++;
    //       asd.cari();
    //       this.page++;
    //     }
    //   }
    // }
  },

  mounted() {
    this.cari()
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