<template>
  <!-- Header Rumahsakit -->
  <section>
    <div class="rumahsakit" id="rumahsakit">
      <div class="container-fluid p-0">
        <img :src="images.cover1" alt="habout" class="w-100">
        <h1 class="mt-5 centered text-black style fw-bold" style="font-size:3vw;">Rumah Sakit</h1>
      </div>
    </div>
  </section>
  <!-- Content -->
  <nav aria-label="breadcrumb" class="container">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/">Home</a></li>
      <li class="breadcrumb-item"><a href="/Blog">Blog</a></li>
      <li class="breadcrumb-item active" aria-current="page">Rumah Sakit</li>
    </ol>
    <div class="pr-5 text-right">
      <a href="https://www.facebook.com/" class="get-qoute"><i class="fa fa-share"></i>share</a>
    </div>
  </nav>
  <section>
    <div class="container">
      <div class="row">
        <div class="col pt-0 mx-5 my-5 mt-3">
          <img :src="images.about" alt="logo" style="width: 600px;">
        </div>
        <div class="col pt-5">
          <div class="text-left">
            <h2>Kewajiban Rumah Sakit <span class=""> kepada Pasien dan Masyarakat</span></h2>
            <p>Institusi pelayanan kesehatan yang menyelenggarakan pelayanan kesehatan perorangan secara paripurna yang
              menyediakan pelayanan rawat inap, rawat jalan, dan gawat darurat. Pasien adalah setiap orang yang
              melakukan konsultasi masalah kesehatannya untuk memperoleh pelayanan kesehatan yang diperlukan, baik
              secara langsung maupun tidak langsung di Rumah Sakit. </p>
          </div>
        </div>
      </div>
      <div class="text-justify">
        <h3>Artikel</h3>
        <hr>
        <p>Rumah Sakit yang dalam menjalankan fungsinya menyelenggarakan pelayanan kesehatan; melibatkan berbagai
          komponen; sarana prasarana, alkes, obat, tenaga kesehatan, dll. Untuk menghindari hal hal yang tidak
          diinginkan, serta menjamin bahwa pelayanan kesehatan yang baik, maka ditetapkan perihal kewajiban rumah sakit
          dalam eksistensinya.</p>
        <br>
        <p>Setiap Rumah Sakit mempunyai kewajiban sbb :</p>
        <br>
        <p class="ml-1">1. Memberikan informasi yang benar tentang pelayanan Rumah Sakit kepada masyarakat;</p>
        <p class="ml-1">2. memberi pelayanan kesehatan yang aman, bermutu, anti diskriminasi, dan efektif dengan
          mengutamakan kepentingan pasien sesuai dengan standar pelayanan Rumah Sakit;memberikan pelayanan gawat darurat
          kepada pasien sesuai dengan kemampuan pelayanannya;</p>
        <p class="ml-1">3. memberikan pelayanan gawat darurat kepada pasien sesuai dengan kemampuan pelayanannya; </p>
        <p class="ml-1">4. berperan aktif dalam memberikan pelayanan kesehatan pada bencana, sesuai dengan kemampuan
          pelayanannya; </p>
        <p class="ml-1">5. menyediakan sarana dan pelayanan bagi masyarakat tidak mampu atau miskin; </p>
        <p class="ml-1">6. melaksanakan fungsi sosial; </p>
        <p class="ml-1">7. membuat, melaksanakan, dan menjaga standar mutu pelayanan kesehatan di Rumah Sakit sebagai
          acuan dalam melayani pasien; h. menyelenggarakan rekam medis; </p>
        <p class="ml-1">8. menyediakan sarana dan prasarana umum yang layak meliputi sarana ibadah, parkir, ruang
          tunggu, sarana untuk orang cacat, wanita menyusui, anak-anak, lanjut usia; </p>
        <p class="ml-1">9. melaksanakan sistem rujukan; </p>
        <p class="ml-1">10. menolak keinginan pasien yang bertentangan dengan standar profesi dan etika serta peraturan
          perundang-undangan; l. memberikan informasi yang benar, jelas dan jujur mengenai hak dan kewajiban pasien;
        </p>
        <p class="ml-1">11. menghormati dan melindungi hak pasien; </p>
        <p class="ml-1">12. melaksanakan etika Rumah Sakit; </p>
        <p class="ml-1">13. memiliki sistem pencegahan kecelakaan dan penanggulangan bencana; </p>
        <p class="ml-1">14. melaksanakan program pemerintah di bidang kesehatan baik secara regional maupun nasional;
        </p>
        <p class="ml-1">15. membuat daftar tenaga medis yang melakukan praktik kedokteran atau kedokteran gigi dan
          tenaga kesehatan lainnya; </p>
        <p class="ml-1">15. menyusun dan melaksanakan peraturan internal Rumah Sakit (hospital by laws); </p>
        <p class="ml-1">17. melindungi dan memberikan bantuan hukum bagi semua petugas Rumah Sakit dalam melaksanakan
          tugas; dan </p>
        <p class="ml-1">18. memberlakukan seluruh lingkungan rumah sakit sebagai kawasan tanpa rokok. </p>
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
                about: require('@/assets/logo/rumah-sakit.jpg'),
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