<template>
  <section>
    <section>
    <div class="p-5"></div>
    </section>

  <nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">{{$translate(['Beranda','Home'])}}</a></li>
    <li class="breadcrumb-item"><a href="/Destination">{{$translate(['Destinasi','Destination'])}}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{$translate(['RSUP Bali Mandara','Sanglah General Hospital'])}}</li>
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
                  <div class="col my-auto"><a href="https://goo.gl/maps/JA5RaDxG4krVm3918" target="_blank" style="color:black;">Jl. Diponegoro, Kota Denpasar, Bali</a></div>
                </div></div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col my-auto"><a href="mailto:info@sanglahhospitalbali.com" style="color:black;">info@sanglahhospitalbali.com</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
                  <div class="col my-auto"><a href="tel:+62 361 227911" target="_blank" style="color:black;"> +62 361 227911 ext 15</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col my-auto"><a href="https://sanglahhospitalbali.com/home/" target="_blank">https://sanglahhospitalbali.com/</a></div></div>
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
                  <div class="col-auto my-auto"><a href="https://goo.gl/maps/JA5RaDxG4krVm3918" target="_blank" style="color:black;">Jl. Diponegoro, Kota Denpasar, Bali</a></div>
                </div></div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col-auto my-auto"><a href="mailto:info@sanglahhospitalbali.com" style="color:black;">info@sanglahhospitalbali.com</a></div></div>
            </div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
              <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
              <div class="col-auto my-auto"><a href="tel:+62 361 227911" target="_blank" style="color:black;"> +62 361 227911 ext 15</a></div></div>
            </div>
          </div>
          <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col-auto my-auto"><a href="https://sanglahhospitalbali.com/home/" target="_blank">https://sanglahhospitalbali.com/</a></div></div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<section class="p-4">
        <div class="text-justify px-5">
        <h3 class="text-center">{{$translate(['RSUP Sanglah','Sanglah General Hospital'])}}</h3>
        <hr>
        <h5>{{$translate(['Visi RSUP Bali Mandara','RSUP Bali Mandara\'s Vision'])}}</h5>
        <p>
         {{$translate([' Menjadi Rumah Sakit Yang Berkualitas Dengan Mengedepankan Pelayanan, Pendidikan dan Penelitian Menuju Rumah Sakit Berkelas Dunia Tahun 2025','Becoming a Quality Hospital by Prioritizing Services, Education and Research Towards a World Class Hospital in 2025'])}}
        </p>
        <h5>{{$translate(['Misi RSUP Bali Mandara','RSUP Bali Mandara\'s Mission'])}}</h5>
        <ol>
          <li>{{$translate(['Menyelenggarakan pelayanan kesehatan bermutu sesuai dengan standar akreditasi nasional dan internasional yang berorientasi pada keselamatan dan kepuasan pelanggan;','Organizing quality health services in accordance with national and international accreditation standards that are oriented towards safety and customer satisfaction;'])}}</li>
          <li>{{$translate(['Menyelenggarakan pelayanan kesehatan rujukan dengan jejaring yang luas;','Organizing referral health services with a wide network;'])}}</li>
          <li>{{$translate(['Menyediakan sarana dan prasarana sesuai dengan perkembangan ilmu pengetahuan dan teknologi kesehatan;','Provide facilities and infrastructure in accordance with the development of health science and technology;'])}}</li>
          <li>{{$translate(['Menyelenggarakan pendidikan, penelitian dan pengembangan yang berkesinambungan untuk menghasilkan sumber daya manusia yang kompeten, berintegrasi dan memiliki budaya kerja; dan','Organizing continuous education, research and development to produce competent, integrated human resources with a work culture; and'])}}</li>
          <li>{{$translate(['Meningkatkan kinerja layanan, profesionalisme dan meningkatkan kesejahteraan pegawai.','Improve service performance, professionalism and improve employee welfare.'])}}</li>
        </ol>
        </div>
</section>
  </section>
</template>

<script>
export default {
    data() {
        return {
            images: {
                cover1: require('@/assets/rumahsakit/rsu-bali-mandara.jpg'),
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