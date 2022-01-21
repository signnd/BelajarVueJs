<template>
  <section>
    <section>
    <div class="p-5"></div>
    </section>

  <nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">{{$translate(['Beranda','Home'])}}</a></li>
    <li class="breadcrumb-item"><a href="/Destination">{{$translate(['Destinasi','Destination'])}}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{$translate(['RS BIMC Kuta','RS BIMC Kuta'])}}</li>
  </ol>
</nav>

  <section>
    <!-- Whole Card -->
    <div class="container">
      <div class="card my-3">
        <div class="card-body">
          <div class="row">
            <img :src="images.cover1" alt="rs-header-img" class="d-block d-sm-block d-md-block d-lg-none">
            <img :src="images.cover1" alt="rs-header-img" class="rs-header-img my-auto d-none d-lg-block">
            <div class="d-none d-lg-block col">

              <!-- Card  on desktop-->
              <div class="card my-3">
                <div class="card-body">
                <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-geo-alt-fill"></i></div>
                  <div class="col my-auto"><a href="https://g.page/bimc-kuta?share" target="_blank" style="color:black;">Jl. Bypass Ngurah Rai No 100X Kuta 80361, Bali</a></div>
                </div></div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col my-auto"><a href="mailto:admin@bimcbali.com" style="color:black;">admin@bimcbali.com</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
                  <div class="col my-auto"><a href="tel:+62361761263" target="_blank" style="color:black;">Phone: (+62 361) 761263</a>
                  <br>
                  <a href="https://wa.me/6281139608500" target="_blank" style="color:black;">WhatsApp: +62 811 3960 8500</a>
                  </div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col my-auto"><a href="https://bimcbali.com/" target="_blank">https://bimcbali.com/</a></div></div>
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
                  <div class="col-auto my-auto"><a href="https://g.page/bimc-kuta?share" target="_blank" style="color:black;">Jl. Bypass Ngurah Rai No 100X Kuta 80361, Bali</a></div>
                </div></div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col-auto my-auto"><a href="mailto:admin@bimcbali.com" style="color:black;">admin@bimcbali.com</a></div></div>
            </div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
              <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
              <div class="col-auto my-auto"><a href="tel:+62 361 761263" target="_blank" style="color:black;"> +62 361 761263</a></div></div>
            </div>
          </div>
          <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col-auto my-auto"><a href="https://bimcbali.com/" target="_blank">https://bimcbali.com/</a></div></div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<section class="p-4">
        <div class="text-justify px-5">
        <h3 class="text-center">{{$translate(['RS BIMC Kuta','RS BIMC Kuta'])}}</h3>
        <hr>
        <p>
         {{$translate(['Rumah Sakit Bali International Medical Centre (BIMC) Kuta adalah pusat pelayanan medis dan gawat darurat 24 jam yang berstandar internasional. Lokasinya yang strategis di daerah Kuta menjadikannya sebagai pusat pelayanan kesehatan pilihan yang mudah diakses baik oleh penduduk setempat maupun para wisatawan. Rumah Sakit BIMC Kuta bekerjasama dengan International Assistance Group (IAG) dan telah mendapatkan akreditasi KARS dari Menteri Kesehatan Indonesia dengan status Paripurna.',
         'Established in 1998, the four-storey facility lies strategically on a 1,500 sqm area in Simpang Siur, Kuta, granting easy access for patients coming from all over Bali, whether for an emergency or a planned visit. BIMC Hospital Kuta stands at the forefront of quick and responsive medical assistance that it therefore provides first response emergency motorbike. BIMC Hospital Kuta encompasses two Centres of Excellence: the 24h Accident & Emergency Centre and 24h Medical Centre. The 24 hour Medical Centre caters family medicine program, consultation, on call to hotels and medical check up. Pathology and pharmacy units also operate 24 hours a day.'])}}
        </p>
        </div>
</section>
  </section>
</template>

<script>
export default {
    data() {
        return {
            images: {
                cover1: require('@/assets/rumahsakit/bimc-kuta.jpg'),
                cover2: require('@/assets/gallery/section_bg01.png'),
                about: require('@/assets/gallery/popular_sub3.png'),
                logo: require('@/assets/logo/logo.png')
            }
        }
    }

}
</script>

<style>
.rs-header-img {
  width: 60%;
  height: 60%;
}

</style>