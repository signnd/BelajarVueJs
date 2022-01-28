<template>

<nav class="container pt-5 mt-5">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{$translate(['Search','Pencarian'])}}</li>
  </ol>
</nav>

<div class="container" >
  <div class="row" id="results">
    <div class="col-lg-4 mb-3 d-flex align-items-stretch" v-for="item in this.bahan" :key="item.id">
      <div class="card">
        <div class="card h-100">
          <img class="card-img-top img1" alt="Card image">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{item.name}}</h5>
            <p class="card-text ">{{item.office.name}}</p>
            <br>
            <h4 class="card-text">{{item.person}}</h4>
            <p class="card-text">{{item.office.whatsapp}}</p>
            <p class="card-text">{{item.office.address}}</p>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary align-self-end" data-toggle="modal"
                  data-target="#Reservasi">Reservasi</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-block d-lg-none mt-auto"></div>
              <div class="col">
                <button class="btn w-100 btn-primary align-self-end" data-toggle="modal" data-target="#Jadwal"
                  @onclick="cariJadwal(testMethod)">Jadwal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
  </div>
</div>


<div v-if="loading" class="justify-content-center">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>

<div class="error pb-5" id="error"></div>



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
          <div class="row px-4">
            <div class="col-5 text-left">
              <p>Senin</p>
              <p>Rabu</p>
              <p>Kamis</p>
            </div>
            <div class="col-5 text-right">
              <p>08:00 - 21:00</p>
              <p>08:00 - 21:00</p>
              <p>08:00 - 21:00</p>
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
      bahan: null,
      modal: false,
      template: null,
      images:{
        apple: require('@/assets/modal/apple.png'),
        playstore: require('@/assets/modal/playstore.png'),
        speedid: require('@/assets/modal/SpeedID.png')
      },
        apipage: 1,
        repositories: [],
        page: 1,
        loading: true,
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
    jadwal: null,
    days: null,
    op_hours: null,
    ed_hours: null,
    loading: true,

    total_item: null,
  }),
  computed: {

  },
  methods: {
      cari() {
        var value_search = localStorage.getItem("val_search");
        var value_kabupaten = localStorage.getItem("val_kabupaten");
        console.log(value_kabupaten);
        if (value_kabupaten == "Lokasi" || value_kabupaten == "Location" || value_search) {
          let baseUrl = 'https://cors-anywhere.herokuapp.com/https://kimiafarmadenpasar.co.id/api_bmta/counters_with_office.php?&lat=-8.6649188&long=115.2384802&page=';
          axios.get(baseUrl + this.apipage + `&search=${value_search}`)
            .then((response) => {
              console.log(value_search);
              this.img = response.data.data.items[0].office.images[1];
              this.bahan = response.data.data.items;
              var x = this.bahan;
              this.loading= "false";
            })
            .catch(error => {
              document.getElementById('error').innerHTML = "Data Tidak Ditemukan";
              console.log(error);
            })
        } else {
          let baseUrl = 'https://cors-anywhere.herokuapp.com/https://kimiafarmadenpasar.co.id/api_bmta/counters_with_office.php?&lat=-8.6649188&long=115.2384802&page=';
          axios.get(baseUrl + this.apipage + `&search=${value_kabupaten}`)
            .then((response) => {
              var strHTML = '';
              for (var i = 0; i < 20; i++) {
                this.bahan = response.data.data.items[i];
                // console.log(this.bahan);
                // console.log(this.bahan.name);
                var template =
                  `<div class="col-lg-4 mb-3 d-flex align-items-stretch">
                      <div class="card">
                        <div class="card h-100">
                          <img class="card-img-top" src="${this.bahan.office.images[0]}" alt="Card image">
                          <div class="card-body d-flex flex-column">
                            <h5 class="card-title ${this.bahan.id}" id="${this.bahan.id}">${this.bahan.name}</h5>
                            <p class="card-text ${this.bahan.office.id}" id="${this.bahan.office.id}">${this.bahan.office.name}</p>
                            <br>
                            <h4 class="card-text">${this.bahan.person}</h4>
                            <p class="card-text">${this.bahan.office.whatsapp}</p>
                            <p class="card-text">${this.bahan.office.address}</p>
                            <div class="pt-2"></div>
                            <div class="row">
                              <div class="col">
                                <button class="btn w-100 btn-primary align-self-end" data-toggle="modal"
                                  data-target="#Reservasi">Reservasi</button>
                              </div>
                                <div class="py-1 d-block d-sm-block d-md-block d-lg-none mt-auto"></div>
                              <div class="col">
                                <button class="btn w-100 btn-primary align-self-end" data-toggle="modal"
                                  data-target="#Jadwal" @click="cariJadwal()" id="${this.bahan.office.id}">Jadwal</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>`;
                strHTML += template;
              }
              document.getElementById('results').innerHTML = strHTML;
              this.loading= "false";
            })
            .catch(error => {
              console.log(error);
              document.getElementById('error').innerHTML = "Data Tidak Ditemukan";
            })
        }
      },

      cariJadwal: function(id_counter){
        var c = id_counter;
        console.log("counter : ", c);
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
      getNextData() {
      window.onscroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          console.log("success")
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