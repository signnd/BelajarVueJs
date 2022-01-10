<template>
 <section>
   <div class="blog" id="blog">
      <div class="container-fluid p-0">
        <img :src="images.cover1" alt="habout" class="w-100">
        <h1 class="mt-5 centered text-black style fw-bold" style="font-size:3vw;">Our Blogs</h1>
      </div>
    </div>
          
        
<br>
<br>


 <div
  id="carouselMultiItemExample"
  class="carousel slide carousel-dark text-center"
  data-ride="carousel"
>
  <!-- Controls -->
  <div class="d-flex justify-content-center mb-4">
    <button
      class="carousel-control-prev position-relative"
      type="button"
      data-target="#carouselMultiItemExample"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next position-relative"
      type="button"
      data-target="#carouselMultiItemExample"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- Inner -->
  <div class="carousel-inner py-4">
    <!-- Single item -->
    <div class="carousel-item active">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="card">
              <img
                :src="images.gambar1"
                class="card-img-top"
                alt="Card image 1"
              />
              <div class="card-body">
                 <router-link to="/Olahraga"><b>Kewajiban Rumah Sakit kepada Pasien dan Masyarakat</b></router-link>
                 <br>
                 <br>
                <p class="card-text">Rumah  Sakit adalah institusi pelayanan kesehatan yang menyelenggarakan pelayanan kesehatan perorangan secara paripurna    yang menyediakan pelayanan rawat inap, rawat jalan, dan gawat darurat. Pasien adalah setiap orang yang melakukan konsultasi masalah kesehatannya untuk memperoleh pelayanan kesehatan yang  diperlukan, baik secara langsung maupun tidak langsung di Rumah Sakit.  </p>
                <br>
                 <router-link to="/rumahsakit" type="button" class="btn d-block btn-dark">Lebih Lanjut</router-link>     
                <p class="card-text">
                  Info Rumah Sakit
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 d-none d-lg-block">
            <div class="card">
              <img
                :src="images.gambar2"
                class="card-img-top"
                alt="Card image 2"
              />
              <div class="card-body">
                   <router-link to="/Olahraga"><b class="text-black">Cara Mencuci Tangan Yang Benar</b></router-link>
                   <br>
                   <br>
                   <br>
                   
              <p class="card-text">Salah satu perilaku hidup bersih dan sehat (PHBS) yang selalu digaungkan sejak lama untuk menjaga kesehatan dan kebersihan pribadi adalah mencuci tangan. Perilaku ini seharusnya menjadi kebiasaan yang sangat baik, karena selain untuk menjaga kesehatan dan kebersihan, agama juga mengajarkannya.</p>
              <br>
                <br>
                <br>
                <br>
             
              <router-link to="/kesehatan" type="button" class="btn d-block btn-dark">Lebih Lanjut</router-link>  
             
                <p class="card-text">
                  Info Kesehatan
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 d-none d-lg-block">
            <div class="card">
              <img
                :src="images.gambar3"
                class="card-img-top"
                alt="Card image 3"
              />
              <div class="card-body">
                   <router-link class="text-black" to="/Olahraga"><b>Beragam Manfaat Olahraga untuk Kesehatan Fisik dan Mental</b></router-link>
                   <br>
                   <br>
                <p class="card-text">Ada beragam manfaat olahraga yang bisa Anda peroleh, mulai dari memelihara fungsi organ hingga meningkatkan stamina dan daya tahan tubuh. Tak hanya bermanfaat untuk kesehatan fisik, olahraga juga baik untuk kesehatan mental Anda.</p>
                <br>
                <br>
                <br>
                <br>
                <br>
                <router-link to="/Olahraga" type="button" class="btn d-block btn-dark">Lebih Lanjut</router-link>
                  Info Manfaat Olahraga
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
              <img
               :src="images.gambar4"
                class="card-img-top"
                alt="Card image 4"
              />
              <div class="card-body">
                <router-link class="text-black" to="/Olahraga"><b>5 CARA TETAP PRODUKTIF SAAT BEKERJA DARI RUMAH</b></router-link>
                <br>
                <br>
                <p class="card-text">Sebagai langkah mencegah penyebaran COVID-19, pemerintah mengimbau masyarakat untuk membatasi aktivitas dengan tetap berada di rumah. Imbauan ini mendorong banyak perusahaan menerapkan sistem kerja dari rumah atau work from home.</p>
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
              <img
               :src="images.gambar5"
                class="card-img-top"
                alt="Card image 5"
              />
              <div class="card-body">
                <router-link class="text-black" to="/Olahraga"><b>Lingkungan Bersih Ciptakan Hidup Sehat</b></router-link>
                <br>
                <br>
                <p class="card-text">Lingkungan adalah kombinasi antara kondisi fisik yang mencakup keadaan sumber daya alam, serta flora dan fauna yang tumbuh di darat maupun di dalam laut. Lingkungan terdiri dari dua komponen biotik ( segala sesuatu yang bernyawa) dan abiotik ( segala yang tidak bernyawa ).</p>
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
              <img
                :src="images.gambar6"
                class="card-img-top"
                alt="Card image 6"
              />
              <div class="card-body">
                <router-link class="text-black" to="/Olahraga"><b>Kapankah Kita Periksakan Kesehatan Jantung?</b></router-link>
                <br>
                <br>
                <p class="card-text">Risiko penyakit jantung terbagi dalam 4 kategori, mulai dari rendah, sedang, tinggi, dan sangat tinggi. Yang termasuk dalam risiko SANGAT TINGGI meliputi mereka yang memiliki riwayat serangan jantung, operasi jantung, stroke, gangguan peredaran darah pada anggota gerak, hasil pemeriksaan kateterisasi jantung atau CT-scan pembuluh darah dengan penyempitan bermakna, diabetes melitus lebih dari 20 tahun atau dengan komplikasi, gangguan ginjal berat, gangguan kolesterol genetik.</p>
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
