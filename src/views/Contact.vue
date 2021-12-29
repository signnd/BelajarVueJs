<template>
  <section>
    <div class="contact">
      <!--Section heading-->
      <div class="contacthead" id="contacthead">
        <div class="container-fluid p-0">
          <img :src="images.cover1" alt="contacthead" class="w-100">
          <h1 class="d-none d-lg-block mt-5 centered text-black style fw-bold" style="font-size:3vw;">Contact us</h1>
          <p class="d-none d-lg-block mt-5 pt-5 centered text-black style t-pos" style="font-size:1vw;">Anda dapat
            menghubungi kami melalui beberapa kontak yang kami berikan</p>
          <!-- Header Small Screen -->
          <h1 class="d-block d-lg-none text-center pt-2"> Contact Us</h1>
          <p class="d-block d-lg-none text-center px-2">Anda dapat menghubungi kami melalui beberapa kontak yang kami
            berikan</p>
        </div>
      </div>
    </div>
  </section>
  
  <section>
    <!-- Whole Card -->
    <div class="container">
      <div class="card my-3">
        <div class="card-body">
          <div class="row">
            <div class="d-none d-lg-block col">
              <!-- Card -->
              <div class="card my-3">
                <div class="card-body">
                  <b>Alamat:</b>
                  <br>
                  Jl. Merdeka No.45, Renon, Denpasar Selatan, Kota Denpasar, Bali.
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <b>Email:</b>
                  <br>
                  info@bamboomedia.net
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <b>Telp:</b>
                  <br>
                  +62 361 265521
                </div>
              </div>
            </div>
            <!-- Map -->
            <div class="col">
              <div class="iframe-container col-lg-12 py-3">
                <div id="map-container-google-11" class="z-depth-1-half map-container-6 map-height"
                  style="height: 400px">
                  <iframe src="https://maps.google.com/maps?q=Bamboomedia&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Another Card -->
        <div class="d-block d-lg-none container">
          <div class="card my-3">
            <div class="card-body">
              <b>Alamat:</b>
              <br>
              Jl. Merdeka No.45, Renon, Denpasar Selatan, Kota Denpasar, Bali.
            </div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <b>Email:</b>
              <br>
              info@bamboomedia.net
            </div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <b>Telp:</b>
              <br>
              +62 361 265521
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

.iframe-container{
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
}

</style>