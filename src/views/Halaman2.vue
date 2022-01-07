<template>
 <section>
   <div class="halaman2" id="halaman2">
      <div class="container-fluid p-0">
        <img :src="images.cover1" alt="habout" class="w-100">
        <h1 class="mt-5 centered text-black style fw-bold" style="font-size:3vw;">Our Blogs</h1>
      </div>
    </div>
    
   <div class="p-3 mb-2 bg-info text-black">
<div class="container"> 
   <div class="container-fluid d-flex">
    <div class="container-fluid ml-5 mx-auto my-5 pt-5 mt-5 align-items-center" style="width: 700px;">
      <h1 class="text-center">Artikel Kami</h1>
        <div class="card-group">
         <div class="card"> 
           <div class="p-3 mb-2 bg-info text-black">
          <div class="card" style="width:auto;">
            <img class="card-img-top" :src="images.gambar3" alt="Card image 3">
              <div class="card-body">
                 <router-link class="text-black" to="/Olahraga"><b>Beragam Manfaat Olahraga untuk Kesehatan Fisik dan Mental</b></router-link>
                <p class="card-text">Ada beragam manfaat olahraga yang bisa Anda peroleh, mulai dari memelihara fungsi organ hingga meningkatkan stamina dan daya tahan tubuh. Tak hanya bermanfaat untuk kesehatan fisik, olahraga juga baik untuk kesehatan mental Anda.
                  <router-link to="/Olahraga" type="button" class="btn d-block btn-dark">Lebih Lanjut</router-link></p>
                <div class="row">
                <div class="col">
                 Info Manfaat Olahraga
               </div>
                </div>
              </div>
          </div>
          
          
        
<br>
<br>


        <div class="card" style="width:auto;">
       <div class="card">
          <img class="card-img-top" :src="images.gambar4" alt="Card image 4">
            <div class="card-body">
             <router-link class="text-black" to="/Olahraga"><b>5 CARA TETAP PRODUKTIF SAAT BEKERJA DARI RUMAH</b></router-link>
              <p class="card-text">Sebagai langkah mencegah penyebaran COVID-19, pemerintah mengimbau masyarakat untuk membatasi aktivitas dengan tetap berada di rumah. Imbauan ini mendorong banyak perusahaan menerapkan sistem kerja dari rumah atau work from home.</p>
                  <router-link to="/about" type="button" class="btn d-block btn-dark">Lebih Lanjut</router-link>                
                  <div class="col">
                   Info Kesehatan
                   </div>
            </div>
       </div>
  
       
<br>
<br>

          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
             <li class="page-item Enable">
               <a class="page-link" href="/Blog" tabindex="-1">Previous</a>
                 </li>
                   <li class="page-item"><a class="page-link" href="Blog">1</a></li>
                  <li class="page-item"><a class="page-link" href="Halaman2">2</a></li>
                <li class="page-item"><a class="page-link" href="Halaman3">3</a></li>
             <li class="page-item">
           <a class="page-link" href="/Halaman3">Next</a>

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
                gambar3: require('@/assets/logo/olahraga.jpg'),
                gambar4: require('@/assets/logo/kesehatanrumah.jpg')
            }
        }
    }
}
</script>
<style>
</style>
