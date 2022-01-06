<template>
<!-- Slideshow -->
  <section>
    <div id="slideshow" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#slideshow" data-slide-to="0" class="active"></li>
        <li data-target="#slideshow" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block mt-5 pt-2 w-100" :src="images.cover1" alt="First slide">
          <div class="carousel-caption text-dark">
              <h1 class="font-weight-bold" style="font-size:5vw;">Slide 1</h1>
              <p style="font-size:2vw;">Kami adalah website medis</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block mt-5 pt-2 w-100 h-3" :src="images.cover2" alt="Third slide">
          <div class="carousel-caption text-dark">
              <h1 class="font-weight-bold" style="font-size:5vw;">Slide 2</h1>
              <p style="font-size:2vw;">Berwisata medis bersama kami</p>
          </div>
        </div>
      </div>
        <a class="carousel-control-prev" href="#slideshow" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#slideshow" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
    </div>
  </section>

  <!-- Search Destination & Categories Lg -->
  <form class="d-none d-md-block">
    <div class="container-fluid form-row f-color px-5">
      <div class="col-3 ml-5">
        <select class="form-control form-control-md">
          <option hidden>Lokasi</option>
          <option>Denpasar</option>
          <option>Tabanan</option>
          <option>Klungkung</option>
          <option>Gianyar</option>
          <option>Buleleng</option>
        </select>
      </div>
      <div class="col-3">
        <select class="form-control form-control-md">
          <option hidden>Kategori</option>
          <option>Klinik</option>
          <option>Rumah Sakit</option>
          <option>Apotek</option>
        </select>
      </div>
      <div class="col-3">
        <input class="form-control mr-2" type="search" placeholder="Pencarian">
      </div>
      <div class="col-2">
        <router-link :to="{name: 'Destination'}">
          <button type="button" class="btn btn-md btn-block btn-outline-light">Search</button>
        </router-link>
      </div>
    </div>
</form>
  <!-- Search Destination & Categories SM -->
<div class="container d-block d-md-none pt-3">
  <select class="form-control form-control-md">
    <option hidden>Lokasi</option>
    <option>Denpasar</option>
    <option>Tabanan</option>
    <option>Klungkung</option>
    <option>Gianyar</option>
    <option>Buleleng</option>
  </select>
  <select class="form-control form-control-md my-3">
    <option hidden>Kategori</option>
    <option>Klinik</option>
    <option>Rumah Sakit</option>
    <option>Apotek</option>
  </select>
  <input class="form-control mb-3" type="search" placeholder="Search">
  <router-link :to="{name: 'Destination'}">
    <button type="button" class="btn btn-md btn-block btn-outline-primary">Search</button>
  </router-link>
</div>

  <section>
    <div class="container d-flex">
      <div class="container my-5 align-items-center" style="width: 900px;">
        <div class="card-group">
          <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.card1" alt="Card image 1">
            <div class="card-body">
              <h5 class="card-title">Mitra handal kami</h5>
              <p class="card-text">Tersedia 17 rumah sakit mitra yang tersebar di seluruh Bali.</p>
              <router-link to="/About" class="btn d-block btn-outline-primary text-wrap">Tentang kami</router-link>
            </div>
          </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.card2" alt="Card image 2">
            <div class="card-body">
              <h5 class="card-title">Biaya terjangkau</h5>
              <p class="card-text">Menerima asuransi & BPJS untuk meringankan biaya Anda.</p>
              <router-link to="/Contact" class="btn d-block btn-outline-primary text-wrap">Kontak kami</router-link>
            </div>
          </div>
          <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.card3" alt="Card image 2">
            <div class="card-body">
              <h5 class="card-title">Pelayanan profesional</h5>
              <p class="card-text">Ratusan dokter yang berpengalaman di bidangnya.</p>
              <router-link to="/Destination" class="btn d-block btn-outline-primary text-wrap">Cari dokter</router-link>
            </div>
          </div>
        </div>
    </div>
    </div>
  </section>

<section>
  <h2 class="font-weight-bold text-center pb-3">Layanan kami</h2>
</section>

<section>
  <div class="container">
        <div class="row d-flex">
          <div class="col-5">
          <i class="fas fa-plane-departure"></i>
              <h5 class="service-title">Medical Tourism Guidelines</h5>
              <p class="service-text">Panduan untuk seseorang yang membutuhkan perawatan medis.</p>
          </div>
          <div class="col-5">
          <i class="fas fa-notes-medical"></i>
          <div>
            <h5 class="service-title">Medical training</h5>
            <p class="service-text">Seminar dan Lokakarya Pelatihan untuk Pemerintah, Cluster Kesehatan, Rumah Sakit, Penyedia Asuransi, Perhotelan, dan pihak-pihak lain yang berkepentingan.</p>
          </div>
          </div>
          <div class="col-5">
          <i class="fas fa-stethoscope"></i>
              <h5 class="service-title">Medical research</h5>
              <p class="service-text">Informasi dan penelitian yang diperoleh dari melakukan penelitian dan survei secara signifikan meningkatkan kesadaran dalam pariwisata medis melalui temuan kami dan informasi terkini.</p>
          </div>
          <div class="col-5 mb-4">
          <i class="fas fa-heart"></i>
              <h5 class="service-title">Medical advisor</h5>
              <p class="service-text">Membantu memberikan penilaian, review atau audit medik terhadap praktik medis yang diberikan oleh provider atau non-provider dari asuransi atau perusahaan yang menyelenggarakan jaminan kesehatan pekerjanya.</p>
          </div>
        </div>
      </div>
</section>

<!-- Popular Destination -->
<section>
    <div class="container-fluid">
        <div class="destination">
      <div class="row">
        <div class="col">
          <p v-if="selectedImage"><img class="dest-img" :src="selectedImage" alt="random"></p>
        </div>
        <div class="col-4 ml-4 mt-5 pt-3 text-left">
          <h3 class="text-black font-weight-bold">Destinasi Lainnya </h3>
          <router-link to="/Destination" class="btn btn-outline-primary text-wrap">Lihat Semua ►</router-link>
        </div>
      </div>
    </div>
  </div>
</section>

</template>
    
    
<script>
export default {
  data() {
    return {
      images: {
        cover1: require('@/assets/hero/hero.png'),
        cover2: require('@/assets/hero/hero2.jpg'),
        card1: require('@/assets/gallery/blog1.png'),
        card2: require('@/assets/gallery/blog2.png'),
        card3: require('@/assets/gallery/blog3.png')
      },
      imgRs: [
        require('@/assets/rumahsakit/bimc-nusa-dua.jpg'),
        require('@/assets/rumahsakit/bimc-kuta.jpg'),
        require('@/assets/rumahsakit/rs-kasihibu-saba.jpg'),
        require('@/assets/rumahsakit/bros.jpg'),
      ],
      selectedImage: null
    }
  },
  created() {
    const idx = Math.floor(Math.random() * this.imgRs.length)
    this.selectedImage = this.imgRs[idx]
    return
  }
}

</script>
    
<style lang="css">
.fas {
  font-size:6em;
  color:rgb(85, 189, 253);
  margin-block: 2rem;
  margin-inline: auto;
}

.col-5{
  margin-inline: auto;
  text-align: center;
}

.container {
  position: relative;
  text-align: left;
  color: rgb(0, 0, 0);
}

.container-fluid{
   padding: 0;
   margin: 0;
}

.carousel {
  width:unset;
  height:unset;
}

.carousel-item img {
  position:relative;
  min-width: 100%;
  width: 100%;
}

.carousel-caption {
  padding-inline-end: 15rem;
  width: 500px;
  left: 15%;
  top: 50% !important;
  transform: translateY(-60%);
  text-align: left;
  bottom: initial;
}

.carousel-control-prev{
  margin-top: 50px;
  width:20%;
  height: auto;
}

.carousel-control-next{
  margin-top: 50px;
  width:20%;
  height: auto;   
}

.card-img-top {
  padding-inline: 4pt;
  padding-block: 4pt;
}

.card-title {
  font-family: 'Segoe UI', Verdana, sans-serif, sans-serif;
  font-weight:bold;
}

.card-text {
  font-family:Calibri, sans-serif;
  font-weight:normal;
}

.service-title {
  font-family: 'Segoe UI', Verdana, sans-serif, sans-serif;
  font-weight:bold;
  text-align: center;
}

.service-text {
  font-family:Calibri, sans-serif;
  font-weight:normal;
  text-align: center;
}

.f-color{
  padding-block: 1em;
  color: black;
  background-color: #6ec3ff;
}

.destination{
  background-color: #eaf6ff;
}


.dest-img{
  position:relative;
  min-width: 100%;
  width: 100%;
  max-height: 60%;  
  background-color: white;
}
</style>