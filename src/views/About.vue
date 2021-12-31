<template>
<!-- Header About -->
  <section>
    <div class="about" id="about">
      <div class="container-fluid p-0">
        <img :src="images.cover1" alt="habout" class="w-100">
        <h1 class="mt-5 centered text-black style fw-bold" style="font-size:3vw;">About us</h1>
      </div>
    </div>
  </section>
  <!-- Content -->
  <section>
    <div class="container">
      <div class="row">
        <div class="col pt-3 mt-3 my-5">
          <img :src="a" alt="logo" style="">
        </div>
        <div class="col pt-3">
          <div class="text-left">
            <h2>About <span class="t-color">Medical</span></h2>
            <p>Asosiasi Wisata Medis Indonesia<br>Cinta Indonesia Cinta Wisata Medis Bangsa</p>
            <h2>Visi</h2>
            <p>Meningkatkan Kecintaan Masyarakat Indonesia Akan Wisata Medis</p>
            <h2>Misi</h2>
            <p>Bergerak bersama untuk menciptakan wisata Medis Indonesia.</p>
          </div>
        </div>
      </div>
      <div class="text-justify">
        <h3>Maksud dan Tujuan</h3>
        <hr>
        <p>Secara definisi bahasa, Wisata Medis / Medical Tourism adalah suatu perjalanan karena alasan kesehatan yang
          lebih cenderung menyangkut tindakan medis pengobatan (cure), operasi dan/atau tindakan medis lainnya, yang
          dilakukan terhadap penderita suatu penyakit atau kelainan kondisi kesehatannya. Berbeda dengan health/wellness
          tourism, yang merupakan suatu pariwisata kesehatan bertujuan untuk pemeliharaan dan/atau pemulihan kesehatan,
          dilakukan oleh orang yang sehat, tidak menderita suatu penyakit, atau orang yang baru sembuh. Wisata Medis
          secara umum merupakan bentuk baru pariwisata (Heung et al. 2011), atau suatu perjalanan yang terorganisir ke
          luar lingkungan lokal individu untuk pemeliharaan, peningkatan, dan pemulihan kesehatan dengan melakukan
          intervensi medis (Carl dan Carrera, 2010). Lebih lanjut Heung telah mengidentifikasi bahwa negara-negara
          seperti India, Malaysia, Singapura, Thailand, telah menjadi negara yang telah menerapkan peluang bisnis
          medical tourism dengan menarik lebih dua juta wisatawan medis pada tahun 2005. Dari kedua konsep wisata medis
          diatas yaitu medical tourisme dan welness tourisme. Potensi Indonesia sangat lah besar karena hampir di setiap
          wilayah Indonesia dapat ditemukan pariwisata kesehatan yang dapat dikembangkan; hal tersebut dapat dipahami
          mengingat Indonesia merupakan kepulauan yang kaya akan alam yang tersebar baik di lima pulau terbesar di
          Indonesia maupun di beribu pulau kecil lainnya. Namun sayang sekali data pasti tentang keberadaan pariwisata
          kesehatan yang belum dikembangkan ini belum ada. (Sugianto,2010)</p>
        <br>
        <p>Wisata medis yang akan kami kembangkan adalah sebuah proses penyediaan pelayanan kesehatan medis dengan biaya
          efektif bagi pasien melalui kerja sama dengan industri pariwisata. Sehingga para wisatawan baik lokal maupun
          internasional yang menggunakan perjalanan dengan medical tourism mendapat keuntungan yaitu tidak hanya
          menjalani perawatan medis namun dapat sambil menikmati perjalanan dan tinggal di salah satu tujuan wisata
          wisata populer di Indonesia.</p>
        <br>
        <p>Peran pemerintah sangat diperlukan pada medical tourism sebagai regulator atau pengambil kebijakan dan dengan
          kerjasama yg baik bersama Asosiasi Wisata Medis Indonesia ( AWMI ) maka akan mempercepat tercapainya visi
          wisata medis Indonesia di 2020.</p>
        <br>
        <p>Asosiasi medis Indonesia adalah perkumpulan seminat akan perkembangan Wisata medis Global dan ingin
          menerapkan kemajuan Wisata medis ini di Indonesia. Di dalamnya tergabung dokter umum, spesialis, perawat,
          sarjana kesehatan, artis, maupun awam yang memiliki visi dan misi yg sama Menurut AWMI, populasi pasien wisata
          medis terdiri dari dua kategori besar :</p>
        <p class="ml-2">1. Populasi pasien yang membayar dengan biaya sendiri atau out of pocket</p>
        <p class="ml-2">2. Populasi pasien dengan asuransi swasta sebagai pendorong adanya medical tourism</p>
        <p>Untuk populasi dengan Pembiayaan mandiri peranan pemerintah dalam mengintegrasi kan kampanye Wisata medis
          dengan instansi terkait amat diperlukan dan untuk Populasi pasien dengan asuransi diperlukan regulasi dari
          pemerintah untuk memberikan keringanan pada perusahaan asuransi yang mendukung wisata medis Indonesia. Melihat
          pentingnya kerjasama ini dan mendukung terciptanya Wisata medis Indonesia maka AWMI didirikan pada 8 Agustus
          2019 agar mensinergiskan langkah antara pihak2 terkait.</p>
      </div>
    </div>
  </section>

  <section>
      <h5 align="middle" class="my-5">Website ini mulai dibangun pada Desember 2021.</h5>
      <h5 align="middle" class="my-4">Lihat pengembangan website ini di GitHub: 
        <a href="https://github.com/Pryandika/BelajarVueJs">(Source)</a> <a href="https://github.com/signnd/BelajarVueJs-n">(Fork)</a></h5>
  </section>
</template>


<script>
export default {
    data() {
        return {
            images: {
                cover1: require('@/assets/hero/flat.png'),
                cover2: require('@/assets/gallery/section_bg01.png'),
                logo: require('@/assets/logo/logo.png')
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