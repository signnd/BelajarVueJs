<template>
 <section>
   <div class="blog" id="blog">
      <div class="container-fluid p-0">
        <img :src="images.cover1" alt="habout" class="w-100">
        <h1 class="mt-5 centered text-black style fw-bold" style="font-size:3vw;">Our Blogs</h1>
      </div>
    </div>
    
   <div class="p-3 mb-2 text-black">
<div class="container"> 
   <div class="container-fluid d-flex">
    <div class="container-fluid ml-5 mx-auto my-5 pt-5 mt-5 align-items-center" style="width: 700px;">
      <h1 class="text-center">Artikel Kami</h1>
        <div class="card-group">
         <div class="card"> 
           <div class="p-3 mb-2  text-black">
          <div class="card" style="width:auto;">
            <img class="card-img-top" :src="images.gambar1" alt="Card image 1">
              <div class="card-body">
                <router-link to="/Olahraga"><b>Kewajiban Rumah Sakit kepada Pasien dan Masyarakat</b></router-link>
                <p class="card-text">Rumah  Sakit adalah institusi pelayanan kesehatan yang menyelenggarakan pelayanan kesehatan perorangan secara paripurna    yang menyediakan pelayanan rawat inap, rawat jalan, dan gawat darurat. Pasien adalah setiap orang yang melakukan konsultasi masalah kesehatannya untuk memperoleh pelayanan kesehatan yang  diperlukan, baik secara langsung maupun tidak langsung di Rumah Sakit.  </p>
                  <router-link to="/rumahsakit" type="button" class="btn d-block btn-dark">Lebih Lanjut</router-link>                
                <div class="row">
                <div class="col">
                 Info Rumah Sakit
               </div>
                </div>
              </div>
          </div>
          
          
        
<br>
<br>


        <div class="card" style="width:auto;">
       <div class="card">
          <img class="card-img-top" :src="images.gambar2" alt="Card image 2">
            <div class="card-body">
             <router-link to="/Olahraga"><b class="text-black">Cara Mencuci Tangan Yang Benar</b></router-link>
              <p class="card-text">Salah satu perilaku hidup bersih dan sehat (PHBS) yang selalu digaungkan sejak lama untuk menjaga kesehatan dan kebersihan pribadi adalah mencuci tangan. Perilaku ini seharusnya menjadi kebiasaan yang sangat baik, karena selain untuk menjaga kesehatan dan kebersihan, agama juga mengajarkannya.</p>
                  <router-link to="/kesehatan" type="button" class="btn d-block btn-dark">Lebih Lanjut</router-link>                
                  <div class="col">
                   Info Kesehatan
                   </div>
            </div>
       </div>
<br>
<br>



          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
             <li class="page-item disabled">
               <a class="page-link" href="#" tabindex="-1">Previous</a>
                 </li>
                   <li class="page-item"><a class="page-link" href="Blog">1</a></li>
                  <li class="page-item"><a class="page-link" href="Halaman2">2</a></li>
                <li class="page-item"><a class="page-link" href="Halaman3">3</a></li>
             <li class="page-item">
           <a class="page-link" href="/Halaman2">Next</a>

          </li>
         </ul>
        </nav>
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
                gambar2: require('@/assets/logo/mencuci.jpg')
            }
        }
    }
}
</script>
<style>
</style>
