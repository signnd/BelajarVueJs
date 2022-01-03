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
          <div class="carousel-caption d-block text-dark text-left align-middle">
              <h1 class="font-weight-bold" style="font-size:7vw;">Slide 1</h1>
              <p style="font-size:2vw;">Kami adalah website medis</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block mt-5 pt-2 w-100 h-3" :src="images.cover2" alt="Third slide">
          <div class="carousel-caption d-block text-dark text-left align-middle">
            <h1 class="font-weight-bold" style="font-size:7vw;">Slide 2</h1>
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

  <!-- Search Doctors Lg -->
  <form class="d-none d-md-block">
    <div class="container-fluid form-row f-color px-5">
      <div class="col-3 ml-5">
        <select class="form-control form-control-md">
          <option hidden>Lokasi</option>
          <option>Denpasar</option>
          <option>Tabanan</option>
          <option>Lokasi</option>
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
        <input class="form-control mr-2" type="search" placeholder="Search">
      </div>
      <div class="col-2">
        <router-link :to="{name: 'Doctors'}">
          <button type="button" class="btn btn-md btn-block btn-outline-light">Search</button>
        </router-link>
      </div>
    </div>

</form>
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
  <router-link :to="{name: 'Doctors'}">
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
              <router-link to="/Doctors" class="btn d-block btn-outline-primary text-wrap">Cari dokter</router-link>
            </div>
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
            }
        }
    }
}
</script>
    
<style lang="css">
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

.carousel-caption{
  position: absolute;
  top: 160px;
}

.carousel-item img {
    position:relative;
    min-height: 300px;
}

.carousel-caption {
  padding-inline-end: 15rem;
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

.f-color{
  padding-block: 1em;
  color: #6ec3ff;
  background-color: #6ec3ff;
}
</style>