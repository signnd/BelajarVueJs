<template>
  <div class="contact">
    <section class="section pb-5">

      <!--Section heading-->
      <h2 class="section-heading h1 pt-4">Contact us</h2>
      <p class="section-description pb-4">Mikirin text apa diisi</p>

      <!-- Google Maps -->
      <div class="container col-lg-7">
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
            <p>+ 01 234 567 89</p>
            <p>Mon - Sat, 8:00-18:00</p>
          </div>

          <div class="col-md-4">
            <a class="btn-floating blue accent-1"><i class="fas fa-envelope"></i></a>
            <p>pryandika7@gmail.com</p>
            <p>ngrmertha@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
</script>

<style>
.contact {
  padding:60px;
}

  .map-container-6{
  overflow:hidden;
  padding-bottom:56.25%;
  position:relative;
  height:0;
  }

  .map-container-6 iframe{
  left:0;
  top:0;
  height:100%;
  width:100%;
  position:absolute;
  }
</style>