<template>
  <!-- Header Rumahsakit -->
  <section>
    <div class="rumahsakit" id="rumahsakit">
      <div class="container-fluid p-0">
        <img :src="images.cover1" alt="habout" class="w-100">
        <h1 class="mt-5 centered text-black style fw-bold" style="font-size:3vw;">Kesehatan</h1>
      </div>
    </div>
  </section>
  <!-- Content -->
  <nav aria-label="breadcrumb" class="container">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/">Home</a></li>
      <li class="breadcrumb-item"><a href="/Blog">Blog</a></li>
      <li class="breadcrumb-item active" aria-current="page">Kesehatan</li>
    </ol>
    <div class="pr-5 text-right">
      <a href="https://www.facebook.com/" class="get-qoute"><i class="fa fa-share"></i>share</a>
    </div>
  </nav>
  <section>
    <div class="container">
      <div class="row">
        <div class="col pt-0 mx-5 my-5 mt-3">
          <img :src="images.about" style="width: 600px;">
        </div>
        <div class="col pt-5">
          <div class="text-left">
            <h2>Cara Mencuci Tangan <span class=""> Yang Benar</span></h2>
            <p>Salah satu perilaku hidup bersih dan sehat (PHBS) yang selalu digaungkan sejak lama untuk menjaga
              kesehatan dan kebersihan pribadi adalah mencuci tangan </p>
          </div>
        </div>
      </div>
      <div class="text-justify">
        <hr>
        <p>Tangan merupakan media yang sangat ampuh untuk berpindahnya penyakit, karena tangan digunakan untuk memegang
          benda-benda yang seringkali tidak kita ketahui dengan pasti kebersihannya. Salah satu contoh adalah ketika
          kita memegang handle pintu atau pegangan dalam kendaraan, kita tidak pernah tahu apakah ada agen penyakit
          (virus/bakteri) yang menempel disana, bisa jadi sebelumnya dipegang oleh orang yang batuk/bersin ditutup oleh
          tangannya. Kemudian tangan kita yang sudah memegang handle pintu tersebut menutup mulut kita yang menguap atau
          langsung memegang makanan. Jelas sudah terjadi proses perpindahan agen penyakit disana. Jika saat itu daya
          tahan tubuh kita lemah, dalam masa inkubasi kita pun akan mengalami gejala yang sama.</p>
        <p>Mencuci tangan sangat diutamakan pada waktu-waktu penting, antara lain sebelum makan, setelah buang air
          besar, sebelum menjamah makanan, sebelum menyusui/menyiapkan susu bayi, dan setelah beraktifitas. :</p>
        <br>
        <br>
        <br>
        <br>
        <br>
      </div>
    </div>
  </section>
  <section>
  </section>
</template>


<script>
export default {
    data() {
        return {
            images: {
                cover1: require('@/assets/hero/flat.png'),
                cover2: require('@/assets/gallery/section_bg01.png'),
                about: require('@/assets/logo/mencuci.jpg'),
                logo: require('@/assets/logo/logo.png'),
                
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

.centered{  
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.t-color{
  color: #6ec3ff;
}
</style>