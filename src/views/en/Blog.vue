<template>
  <section>
    <div class="blog" id="blog">
      <div class="container-fluid p-0">
        <img :src="images.cover1" alt="habout" class="w-100">
        <h1 class="mt-5 centered text-black style fw-bold" style="font-size:3vw;">Our Blogs</h1>
      </div>
    </div>
    <h1 class="pt-5"> Our <span class="card-text t-color"> <b> Blogs </b> </span> </h1>
    <div id="carouselMultiItemExample" class="carousel slide carousel-dark text-center" data-ride="carousel">
      <!-- Controls -->
      <div class="d-flex justify-content-center mb-4">
        <button class="carousel-control-prev position-relative" type="button" data-target="#carouselMultiItemExample"
          data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next position-relative" type="button" data-target="#carouselMultiItemExample"
          data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- Inner -->
      <div class="carousel-inner">
        <!-- Single item -->
        <div class="carousel-item active">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="card">
                  <img :src="images.gambar1" class="card-img-top" alt="Card image 1" />
                  <div class="card-body">
                    <router-link to="/Blog/Rumahsakit"><b>Hospital Obligations to Patients and Society</b>
                    </router-link>
                    <br>
                    <br>
                    <p class="card-text"></p>
                    <br><br><br>
                    <router-link to="/Blog/Rumahsakit" type="button" class="btn d-block btn-dark">Furthermore
                    </router-link>
                    <p class="card-text">
                      Hospital Information
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 d-none d-lg-block">
                <div class="card">
                  <img :src="images.gambar2" class="card-img-top" alt="Card image 2" />
                  <div class="card-body">
                    <router-link to="/Blog/Kesehatan"><b class="text-black">How to Wash Hands Correctly</b>
                    </router-link>
                    <br>
                    <br>
                    <br>
                    <p class="card-text">One of the clean and healthy living behaviors (PHBS) that has always been echoed since
                      A long time to maintain health and personal hygiene is washing hands. This behavior should be
                      become a very good habit, because in addition to maintaining health and cleanliness, religion
                      also teach it.</p>
                    <br>
                    <br>
                    <br>
                    <br>
                    <router-link to="/Blog/Kesehatan" type="button" class="btn d-block btn-dark">Furthermore
                    </router-link>
                    <p class="card-text">
                      health information
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 d-none d-lg-block">
                <div class="card">
                  <img :src="images.gambar3" class="card-img-top" alt="Card image 3" />
                  <div class="card-body">
                    <router-link class="text-black" to="/Blog/Olahraga"><b>Various Benefits of Sports for Health
                        Physical and Mental</b></router-link>
                    <br>
                    <br>
                    <p class="card-text">There are various benefits of exercise that you can get, ranging from maintaining
                      organ function to increase stamina and endurance. Not only useful for
                      physical health, exercise is also good for your mental health.</p>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <router-link to="/Blog/Olahraga" type="button" class="btn d-block btn-dark">Furthermore
                    </router-link>
                    Sports Benefits Info
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Single item -->
        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <div class="card">
                  <img :src="images.gambar4" class="card-img-top" alt="Card image 4" />
                  <div class="card-body">
                    <router-link class="text-black" to="/about"><b>5 CARA TETAP PRODUKTIF SAAT BEKERJA DARI RUMAH</b>
                    </router-link>
                    <br>
                    <br>
                    <p class="card-text">Sebagai langkah mencegah penyebaran COVID-19, pemerintah mengimbau masyarakat
                      untuk membatasi aktivitas dengan tetap berada di rumah. Imbauan ini mendorong banyak perusahaan
                      menerapkan sistem kerja dari rumah atau work from home.</p>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <router-link to="/about" type="button" class="btn d-block btn-dark">Lebih Lanjut</router-link>
                    <div class="col">
                      Info Kesehatan
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                <div class="card">
                  <img :src="images.gambar5" class="card-img-top" alt="Card image 5" />
                  <div class="card-body">
                    <router-link class="text-black" to="/about"><b>Lingkungan Bersih Ciptakan Hidup Sehat</b>
                    </router-link>
                    <br>
                    <br>
                    <p class="card-text">Lingkungan adalah kombinasi antara kondisi fisik yang mencakup keadaan sumber
                      daya alam, serta flora dan fauna yang tumbuh di darat maupun di dalam laut. Lingkungan terdiri
                      dari dua komponen biotik ( segala sesuatu yang bernyawa) dan abiotik ( segala yang tidak bernyawa
                      ).</p>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <router-link to="/about" type="button" class="btn d-block btn-dark">Lebih Lanjut</router-link>
                    <div class="col">
                      Info Lingkungan
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                <div class="card">
                  <img :src="images.gambar6" class="card-img-top" alt="Card image 6" />
                  <div class="card-body">
                    <router-link class="text-black" to="/about"><b>Kapankah Kita Periksakan Kesehatan Jantung?</b>
                    </router-link>
                    <br>
                    <br>
                    <p class="card-text">Risiko penyakit jantung terbagi dalam 4 kategori, mulai dari rendah, sedang,
                      tinggi, dan sangat tinggi. Yang termasuk dalam risiko SANGAT TINGGI meliputi mereka yang memiliki
                      riwayat serangan jantung, operasi jantung, stroke, gangguan peredaran darah pada anggota gerak,
                      hasil pemeriksaan kateterisasi jantung atau CT-scan pembuluh darah dengan penyempitan bermakna,
                      diabetes melitus lebih dari 20 tahun atau dengan komplikasi, gangguan ginjal berat, gangguan
                      kolesterol genetik.</p>
                    <router-link to="/about" type="button" class="btn d-block btn-dark">Lebih Lanjut</router-link>
                    <p class="card-text">
                      Info Kesehatan
                    </p>
                  </div>
                </div>
              </div>
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
          cover2: require('@/assets/gallery/section_bg01.png'),
          about: require('@/assets/gallery/popular_sub3.png'),
          logo: require('@/assets/logo/logo.png'),
          gambar1: require('@/assets/logo/rumah-sakit.jpg'),
          gambar2: require('@/assets/logo/mencuci.jpg'),
          gambar3: require('@/assets/logo/olahraga.jpg'),
          gambar4: require('@/assets/logo/kesehatanrumah.jpg'),
          gambar5: require('@/assets/logo/lingkungan.jpg'),
          gambar6: require('@/assets/logo/jantung.jpg')
        }
      }
    }
  }
</script>

<style>
</style>