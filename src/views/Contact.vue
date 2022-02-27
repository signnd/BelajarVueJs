<template>
<div class="page">
<div class="pt-5 mt-5"></div>  
<nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><router-link to="/">{{$translate(['Beranda','Home'])}}</router-link></li>
    <li class="breadcrumb-item active" aria-current="page">{{$translate(['Kontak','Contact'])}}</li>
  </ol>
</nav>

  <section>
    <!-- Whole Card -->
    <h3 class="text-center font-weight-bold">{{$translate(['Kantor Oobad','Oobad Office'])}}</h3>
    <div class="container">
        <div class="card-body">
          <div class="row">
            <div class="col d-none d-lg-block">
              <!-- Card -->
              <div class="card my-3">
                <div class="card-body">
                <div class="row align-center">
                  <div class="col-2 mx-2"><i class="bi bi-geo-alt-fill"></i></div>
                  <div class="col my-auto">Jl. Merdeka No.45, Renon, Denpasar Selatan, Kota Denpasar, Bali</div>
                </div></div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-2 mx-2"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col my-auto">oobad@gmail.com</div></div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-2 mx-2"><i class="bi bi-telephone-fill"></i></div>
                  <div class="col my-auto">0361 265521</div></div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-2 mx-2"><i class="bi bi-whatsapp"></i></div>
                  <div class="col my-auto">0821 4663 3466</div></div>
                </div>
              </div>
            </div>
            <!-- Map -->
            <div class="col">
              <div class="iframe-container py-3">
                <div id="map-container-google-11" class="z-depth-1-half map-container-6 map-height" style="height: 400px">
                  <iframe src="https://maps.google.com/maps?q=Bamboomedia&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
        <!-- Card in smaller screen -->
        <div class="d-block d-lg-none container">
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-geo-alt-fill"></i></div>
                  <div class="col-10 my-auto">Jl. Merdeka No.45, Renon, Denpasar Selatan, Kota Denpasar, Bali.</div>
                </div></div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col-auto my-auto">info@bamboomedia.net</div></div>
            </div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
              <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
              <div class="col-auto my-auto">+62 361 265521</div></div>
            </div>
          </div>
          <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-whatsapp"></i></div>
                  <div class="col-auto my-auto">+62 821-4663-3466</div></div>
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
    },
    mounted() {
      //document.title = "Contact - Oobad"
    }
}
</script>

<style>
.bi {
  font-size:2.5rem;
  align-self: center;
}

.card-icon{
  margin:0em;
}

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

.iframe-container > *{
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

.centered{  
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
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

.t-pos{
  height: 0px;
}
</style>