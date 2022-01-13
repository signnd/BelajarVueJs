<template>
<!-- Header About -->
  <section>
    <div class="about-ing" id="about-ing">
      <div class="container-fluid p-0">
        <img :src="images.cover1" alt="habout" class="w-100">
        <h1 class="mt-5 centered text-black style fw-bold" style="font-size:3vw;">About us</h1>
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
          <img :src="images.about" alt="logo" style="img-fluid">
        </div>
        <div class="col pt-5">
          <div class="text-left">
            <h2>About <span class="t-color">Medical</span></h2>
            <p>Indonesian Medical Tourism Association<br>Love Indonesia Love Medical Tourism Nation</p>
            <h2>Vision</h2>
            <p>Increasing Indonesian Love for Medical Tourism</p>
            <h2>Mission</h2>
            <p>Move together to create Indonesian Medical tourism.</p>
          </div>
        </div>
      </div>
      <div class="text-justify">
        <h3>
Purpose and objectives</h3>
        <hr>
        <p>In language, Medical Tourism / Medical Tourism is a trip for health reasons that
          more about medical treatment (cure), surgery and/or other medical actions, which
          carried out on patients with a disease or disorder in their health condition. Different from health/health
          tourism, which is a health tourism aimed at the maintenance and/or restoration of health,
          carried out by a healthy person, not suffering from a disease, or a person who has just recovered. Medical Tourism
          is generally a new form of tourism (Heung et al. 2011), or an organized trip to
          outside the individual's local environment for the maintenance, promotion, and restoration of health by performing
          medical intervention (Carl and Carrera, 2010). Furthermore Heung has identified that countries
          such as India, Malaysia, Singapore, Thailand, have become countries that have implemented business opportunities
          medical tourism by attracting more than two million medical tourists in 2005. From both concepts of medical tourism
          above, namely medical tourism and welfare tourism. Indonesia's potential is very large because almost every
          the territory of Indonesia can be found tourism that can be developed; it can be reached
          considering that Indonesia is an archipelago that is rich in nature which is spread over the five largest islands in Indonesia
          Indonesia and thousands of other small islands. But unfortunately the data is certain about the existence of tourism
          This undeveloped health system does not yet exist. (Sugianto, 2010)</p>
        <br>
        <p>Medical tourism that we will develop is a process of providing medical health services at a cost
          effective for patients through collaboration with the tourism industry. So that both local and international tourists
          International travelers who use travel with medical tourism benefit, namely not only
          undergoing medical treatment but can while enjoying the trip and staying in one of the tourist destinations
          popular tourism in Indonesia.</p>
        <br>
        <p>The role of the government is very much needed in medical tourism as a regulator or policy maker and with
          good cooperation with the Indonesian Medical Tourism Association (AWMI) will accelerate the achievement of the vision
          Indonesian medical tourism in 2020.</p>
        <br>
        <p>The Indonesian Medical Association is an association of interest in the development of Global medical tourism and wants to
          implement the progress of this medical tourism in Indonesia. It includes general practitioners, specialists, nurses,
          medical graduates, artists, and laymen who have the same vision and mission According to AWMI, tourism patient population
          Medicines fall into two broad categories:</p>
        <p class="ml-2">1. Patient population who pays at their own expense or out of pocket</p>
        <p class="ml-2">2. Patient population with private insurance as a driving force for medical tourism</p>
        <p>For populations with self-financing, the role of the government in integrating medical tourism campaigns
          with relevant agencies is very necessary and for the patient population with insurance, regulation is needed from
          government to provide waivers to insurance companies that support Indonesian medical tourism. Look
          Because of the importance of this collaboration and supporting the creation of Indonesian medical tourism, AWMI was established on August 8th
          2019 in order to synergize the steps between the relevant parties.</p>
      </div>
    </div>
  </section>

  <section>
      <h5 align="middle" class="my-5">This website began to be built in December 2021.</h5>
      <h5 align="middle" class="my-4">Check out this website development on GitHub:
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
                about: require('@/assets/gallery/popular_sub3.png'),
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