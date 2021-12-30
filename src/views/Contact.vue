<template>
  <div class="contact">
    <section>
      <!--Section heading-->
      <div class="contacthead" id="contacthead">
        <div class="container-fluid p-0">
          <img :src="images.cover1" alt="contacthead" class="w-100">
          <h1 class="mt-5 centered text-black style fw-bold" style="font-size:3vw;">Contact us</h1>
        </div>
      </div>
    </section>

      <!-- Google Maps -->
      <section>
      <div class="container col-lg-7 pt-5">
        <div id="map-container-google-11" class="z-depth-1-half map-container-6" style="height: 400px">
          <iframe src="https://maps.google.com/maps?q=Bamboomedia&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0"
            style="border:0" allowfullscreen></iframe>
        </div>
        <br>

        <!--Deskripsi-->
        <div class="row text-center">
          <div class="col-md-4">
            <a class="btn-floating blue accent-1"><i class="fas fa-map-marker-alt"></i></a>
            <p>Jalan Merdeka No. 45</p>
            <p>Kota Denpasar, Bali</p>
          </div>

          <div class="col-md-4">
            <a class="btn-floating blue accent-1"><i class="fas fa-phone"></i></a>
            <p>+62 361 265521</p>
            <p>Mon - Fri, 9:00-17:00<br>Sat 9:00-13:00</p>
          </div>

          <div class="col-md-4">
            <a class="btn-floating blue accent-1"><i class="fas fa-envelope"></i></a>
            <p>pryandika7@gmail.com</p>
            <p>ngrmerthaj@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    data() {
        return {
            images: {
                cover1: require('@/assets/hero/flat.png'),
                cover2: require('@/assets/gallery/section_bg01.png')
            }
        }
    }
}
</script>

<style>
.container{
  position: relative;
}

.container-fluid {
  overflow: hidden;
  position: relative;
  text-align: left;
  width: 100%;
}

</style>