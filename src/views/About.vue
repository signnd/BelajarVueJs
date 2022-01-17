<template>
<!-- Header About -->
  <section>
    <div class="about" id="about">
      <div class="container-fluid p-0">
        <img :src="images.cover1" alt="habout" class="w-100">
        <h1 class="mt-5 centered text-black style fw-bold" style="font-size:3vw;">About BMTA</h1>
      </div>
    </div>
  </section>
  <!-- Content -->
  <nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">About</li>
  </ol>
  
</nav>
  <section>
    <div class="container">
      <div class="row">
        <div class="col pt-0 mx-5 my-5 mt-3">
          <img :src="images.about" alt="logo" style="img-fluid" class="img-about">
        </div>
        <div class="col pt-5">
          <div class="text-left">
            <h2><span class="t-color">Bali Medical Tourist Association</span></h2>
            <p>{{$translate(['Cinta Indonesia Cinta Wisata Medis Bangsa','Love Indonesia Love Medical Tourism Nation'])}}</p>
            <h2>{{$translate(['Visi','Vision'])}}</h2>
            <p>{{$translate(['Meningkatkan Kecintaan Masyarakat Indonesia Akan Wisata Medis','Increasing Indonesian Love for Medical Tourism'])}}</p>
            <h2>{{$translate(['Misi','Mission'])}}</h2>
            <p>{{$translate(['Bergerak bersama untuk menciptakan wisata Medis Indonesia.','Move together to create Indonesian Medical tourism.'])}}</p>
          </div>
        </div>
      </div>
      <div class="text-justify">
        <h3>{{$translate(['Maksud dan Tujuan','Purpose and objectives'])}}</h3>
        <hr>
        <p>{{$translate(['Secara definisi bahasa, Wisata Medis / Medical Tourism adalah suatu perjalanan karena alasan kesehatan yang lebih cenderung menyangkut tindakan medis pengobatan (cure), operasi dan/atau tindakan medis lainnya, yang dilakukan terhadap penderita suatu penyakit atau kelainan kondisi kesehatannya. Berbeda dengan health/wellness tourism, yang merupakan suatu pariwisata kesehatan bertujuan untuk pemeliharaan dan/atau pemulihan kesehatan, dilakukan oleh orang yang sehat, tidak menderita suatu penyakit, atau orang yang baru sembuh. Wisata Medis secara umum merupakan bentuk baru pariwisata (Heung et al. 2011), atau suatu perjalanan yang terorganisir ke luar lingkungan lokal individu untuk pemeliharaan, peningkatan, dan pemulihan kesehatan dengan melakukan intervensi medis (Carl dan Carrera, 2010). Lebih lanjut Heung telah mengidentifikasi bahwa negara-negara seperti India, Malaysia, Singapura, Thailand, telah menjadi negara yang telah menerapkan peluang bisnis medical tourism dengan menarik lebih dua juta wisatawan medis pada tahun 2005. Dari kedua konsep wisata medis diatas yaitu medical tourisme dan welness tourisme. Potensi Indonesia sangat lah besar karena hampir di setiap  wilayah Indonesia dapat ditemukan pariwisata kesehatan yang dapat dikembangkan; hal tersebut dapat dipahami  mengingat Indonesia merupakan kepulauan yang kaya akan alam yang tersebar baik di lima pulau terbesar di Indonesia maupun di beribu pulau kecil lainnya. Namun sayang sekali data pasti tentang keberadaan pariwisata kesehatan yang belum dikembangkan ini belum ada. (Sugianto,2010)','By definition of language, Medical Tourism is a journey for health reasons which are more likely to involve medical treatment (cure), surgery and/or other medical actions, which are carried out on sufferers of a disease or disorder in their health condition. In contrast to health/wellness tourism, which is a health tourism aimed at maintaining and/or restoring health, it is carried out by people who are healthy, not suffering from an illness, or people who have just recovered. Medical tourism is generally a new form of tourism (Heung et al. 2011), or an organized trip outside an individuals local environment for the maintenance, improvement, and restoration of health by carrying out medical interventions (Carl and Carrera, 2010). Furthermore, Heung has identified that countries such as India, Malaysia, Singapore, Thailand, have become countries that have implemented medical tourism business opportunities by attracting more than two million medical tourists in 2005. From the two medical tourism concepts above, namely medical tourism and hospitality. tourists. Indonesia potential is very large because almost every region of Indonesia can be found health tourism that can be developed; This is understandable considering that Indonesia is an archipelago that is rich in nature, spread over the five largest islands in Indonesia and thousands of other small islands. Unfortunately, there is no definite data regarding the existence of health tourism that has not been developed yet. (Sugianto, 2010)'])}}</p>
        <br>
        <p>{{$translate(['Wisata medis yang akan kami kembangkan adalah sebuah proses penyediaan pelayanan kesehatan medis dengan biaya efektif bagi pasien melalui kerja sama dengan industri pariwisata. Sehingga para wisatawan baik lokal maupun internasional yang menggunakan perjalanan dengan medical tourism mendapat keuntungan yaitu tidak hanya menjalani perawatan medis namun dapat sambil menikmati perjalanan dan tinggal di salah satu tujuan wisata wisata populer di Indonesia.','Medical tourism that we will develop is a process of providing cost-effective medical health services for patients through collaboration with the tourism industry. So that both local and international tourists who use travel with medical tourism benefit from not only undergoing medical treatment but can while enjoying the trip and staying in one of the popular tourist destinations in Indonesia.'])}}</p>
        <br>
        <p>{{$translate(['Peran pemerintah sangat diperlukan pada medical tourism sebagai regulator atau pengambil kebijakan dan dengan kerjasama yg baik bersama Asosiasi Wisata Medis Indonesia ( AWMI ) maka akan mempercepat tercapainya visi wisata medis Indonesia di 2020.','The role of the government is very much needed in medical tourism as a regulator or policy maker and with good cooperation with the Indonesian Medical Tourism Association (AWMI) it will accelerate the achievement of Indonesia medical tourism vision in 2020.'])}}</p>
        <br>
        <p>{{$translate(['Asosiasi medis Indonesia adalah perkumpulan seminat akan perkembangan Wisata medis Global dan ingin menerapkan kemajuan Wisata medis ini di Indonesia. Di dalamnya tergabung dokter umum, spesialis, perawat, sarjana kesehatan, artis, maupun awam yang memiliki visi dan misi yg sama Menurut AWMI, populasi pasien wisata medis terdiri dari dua kategori besar :','The Indonesian Medical Association is an association of interest in the development of Global Medical Tourism and wants to implement the progress of this medical tourism in Indonesia. It includes general practitioners, specialists, nurses, health scholars, artists, and laymen who share the same vision and mission. According to AWMI, the population of medical tourism patients consists of two broad categories:'])}}</p>
        <p class="ml-2">{{$translate(['1. Populasi pasien yang membayar dengan biaya sendiri atau out of pocket','1. Patient population who pays at their own expense or out of pocket'])}}</p>
        <p class="ml-2">{{$translate(['2. Populasi pasien dengan asuransi swasta sebagai pendorong adanya medical tourism','2. Patient population with private insurance as a driving force for medical tourism'])}}</p>
        <p>{{$translate(['Untuk populasi dengan Pembiayaan mandiri peranan pemerintah dalam mengintegrasi kan kampanye Wisata medis ndengan instansi terkait amat diperlukan dan untuk Populasi pasien dengan asuransi diperlukan regulasi dari pemerintah untuk memberikan keringanan pada perusahaan asuransi yang mendukung wisata medis Indonesia. Melihat pentingnya kerjasama ini dan mendukung terciptanya Wisata medis Indonesia maka AWMI didirikan pada 8 Agustus 2019 agar mensinergiskan langkah antara pihak-pihak terkait.','For populations with self-financing, the governments role in integrating medical tourism campaigns with relevant agencies is very necessary and for the patient population with insurance, regulations from the government are needed to provide relief to insurance companies that support Indonesian medical tourism. Seeing the importance of this collaboration and supporting the creation of Indonesian medical tourism, AWMI was established on August 8, 2019 in order to synergize steps between related parties.'])}}</p>
      </div>
    </div>
  </section>

  <section>
      <p align="middle" class="my-5">{{$translate(['Website ini mulai dibangun pada Desember 2021.','This website began to be built in December 2021.'])}}</p>
      <p align="middle" class="my-4">{{$translate(['Lihat pengembangan website ini di GitHub: ','Check out this website development on GitHub:'])}}
        <a href="https://github.com/Pryandika/BelajarVueJs">(Source)</a> <a href="https://github.com/signnd/BelajarVueJs-n">(Fork)</a></p>
  </section>
</template>


<script>
export default {
    data() {
        return {
            images: {
                cover1: require('@/assets/hero/flat.png'),
                cover2: require('@/assets/gallery/section_bg01.png'),
                about: require('@/assets/gallery/pexels-tom-fisk-1692693.jpg'),
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

.img-about {
  max-width: 100%;
  max-height: 100%;
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