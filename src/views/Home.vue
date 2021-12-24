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
          <img class="d-block mt-5 pt-2 w-100 h-3" :src="images.cover1" alt="First slide">
          <div class="carousel-caption d-block text-dark text-left align-middle">
              <h1 class="font-weight-bold" style="font-size:7vw;">Slide 1</h1>
              <p style="font-size:2vw;">Kami adalah website medis</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block mt-5 pt-2 w-100 h-3" :src="images.cover2" alt="Third slide">
          <div class="carousel-caption d-block text-dark text-left align-middle">
            <h1 class="font-weight-bold" style="font-size:7vw;">Slide 2</h1>
            <p style="font-size:2vw;">Yuk berwisata medis</p>
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

  <section>
    <div class="container d-flex justify-content-center">
    <div class="row">
      <div class="container mt-4" style="width: 800px;">
        <div class="card-group">
          <div class="card" style="width=100px;">
          <img class="card-img-top" :src="images.card1" alt="Card image 1">
            <div class="card-body">
              <h5 class="card-title">Mitra handal kami</h5>
              <p class="card-text">Pilih dari 17 rumah sakit kami yang tersebar di seluruh Bali.</p>
              <router-link to="/About" class="btn btn-outline-primary">Tentang kami</router-link>
            </div>
          </div>
        <div class="card">
          <img class="card-img-top" :src="images.card2" alt="Card image 2">
            <div class="card-body">
              <h5 class="card-title">Biaya terjangkau</h5>
              <p class="card-text">Menerima asuransi & BPJS untuk meringankan biaya Anda.</p>
              <router-link to="/Contact" class="btn btn-outline-primary">Kontak kami</router-link>
            </div>
          </div>
          <div class="card">
          <img class="card-img-top" :src="images.card3" alt="Card image 2">
            <div class="card-body">
              <h5 class="card-title">Pelayanan profesional</h5>
              <p class="card-text">Ratusan dokter yang berpengalaman di bidangnya.</p>
              <router-link to="/Doctors" class="btn btn-outline-primary">Cari dokter</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>

  <!-- Flexbox
  <section>
      <div class="d-flex p-2 bg-primary text-white text-middle font-weight-bold">Work In Progress</div>
  </section> -->

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

.carousel-caption{
  position: absolute;
  top: 160px;
}

.carousel .carousel-item {
  height: 450px;
}

.carousel-item img {
    position:relative;
    min-height: 300px;
}

.row {
  margin-left: 10px;
}

.card {
  width: 18em;
  margin-left: 10px;
  margin-top: 10px;
}

.card-img-top {
  padding-inline: 5px;
  padding-block: 5px ;
}

.card-title {
  font-family: 'Segoe UI', Verdana, sans-serif, sans-serif;
  font-weight:bold;
}

.card-text {
  font-family:Calibri, sans-serif;
  font-weight:normal;
}

</style>