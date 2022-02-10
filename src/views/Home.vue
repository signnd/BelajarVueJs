<template>
<div class="Page">
  <!-- Search Destination & Categories Lg -->
  <form class="pt-5 mt-3 d-none d-md-block">
    <div class="container-fluid form-row f-color px-5">
      <div class="col-3 ml-5">
        <select class="form-control form-control-md" id="kabupaten">
          <option value="" hidden>{{ $translate(["Lokasi", "Location"]) }}</option>
          <option value="32">Denpasar</option>
          <option value="31">Tabanan</option>
          <option value="30">Klungkung</option>
          <option value="27">Gianyar</option>
          <option value="26">Buleleng</option>
        </select>
      </div>
      <div class="col-3">
        <div>
          <select class="form-control form-control-md" id="counter">
            <option value="" hidden>{{ $translate(["Kategori", "Categories"]) }}</option>
            <option v-for="counter in counters" :key="counter.id" :value="counter.value"> {{ counter.name }}</option>
          </select>
        </div>
      </div>
      <div class="col-3">
        <input
          class="form-control mr-2"
          type="search"
          placeholder="Search"
          id="search"
        />
      </div>
      <div class="col-2">
        <button
          type="button"
          class="btn btn-md btn-block btn-primary font-weight-bold"
          @click="valueSender()"
          id="search_home"
        >
          {{ $translate(["Cari", "Search"]) }}
        </button>
      </div>
    </div>
  </form>

  <!-- Search Destination & Categories SM -->
  <div class="container d-block d-md-none pt-4 mt-5 pb-4">
    <select class="form-control form-control-md" id="kabupatenM">
      <option value="" hidden>{{ $translate(["Lokasi", "Location"]) }}</option>
      <option value="32">Denpasar</option>
      <option value="31">Tabanan</option>
      <option value="30">Klungkung</option>
      <option value="27">Gianyar</option>
      <option value="26">Buleleng</option>
    </select>
    <select class="form-control form-control-md my-3" id="counterM">
      <option value="" hidden>{{ $translate(["Kategori", "Categories"]) }}</option>
      <option v-for="counter in counters" :key="counter.id" :value="counter.value"> {{ counter.name }}</option>
    </select>
    <input class="form-control mb-3" type="search" placeholder="Search" id="searchM"/>
    <button
      type="button"
      class="btn btn-md btn-block btn-primary font-weight-bold"
      @click="valueSenderM()"
      id="search_homeM"
    >
      {{ $translate(["Cari", "Search"]) }}
    </button>
  </div>

  <!-- Slideshow -->
  <section>
    <div id="slideshow" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#slideshow" data-slide-to="0" class="active"></li>
        <li data-target="#slideshow" data-slide-to="1"></li>
        <li data-target="#slideshow" data-slide-to="2"></li>
        <li data-target="#slideshow" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <a class="d-block w-100 gradient2" alt="First slide" />
          <div class="carousel-caption text-white">
            <div class="mt-5">
              <h1 style="font-size: 5vw; width: 900px">
                {{ $translate(["Selamat Datang", "Welcome"]) }}
              </h1>
            </div>
            <p style="font-size: 3vw; width: 1000px">
              {{
                $translate([
                  "Layanan Wisata Medis Anda di Bali",
                  "Your Go To Medical Tourism Services",
                ])
              }}
              <br />
              {{ $translate(["", "in Bali"]) }}
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <a class="d-block w-100 h-3 gradient1" alt="Second slide" />
          <div class="carousel-caption text-white">
            <div class="mt-5">
              <h1 style="font-size: 5vw; width: 900px">
                {{ $translate(["Healthy & Peaceful", "Healthy & Peaceful"]) }}
              </h1>
            </div>
            <p style="font-size: 3vw; width: 1000px">
              {{
                $translate([
                  "Makan Sehat dan Kesehatan Pikiran",
                  "Health Talent, Good Food, Mind Fullness",
                ])
              }}
              <span><br /></span>
              {{
                $translate(["Adalah Kunci Kesehatan", "is The Key of Health"])
              }}
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <a class="d-block w-100 h-3 gradient4" alt="Third slide" />
          <div class="carousel-caption text-white">
            <div class="mt-5">
              <h1 style="font-size: 5vw; width: 900px">
                {{ $translate(["Senyum Pasien", "Patient's Smile"]) }}
              </h1>
            </div>
            <p style="font-size: 3vw; width: 1000px">
              {{
                $translate([
                  "Kesenangan Pasien Adalah",
                  "Patient's Satisfaction is",
                ])
              }}
              <span><br /></span>
              {{ $translate(["Prioritas Kami", "Our Top Priority"]) }}
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <a class="d-block w-100 h-3 gradient3" alt="Forth slide" />
          <div class="carousel-caption text-white">
            <div class="mt-5">
              <h1 style="font-size: 5vw">
                {{ $translate(["Ayo Mulai!", "Let's Start!"]) }}
              </h1>
            </div>
            <p class="" style="font-size: 3vw; width: 1000px">
              {{
                $translate([
                  "Hidup Indah Dimulai Dari Kesehatan",
                  "Beautiful Life start from your health",
                ])
              }}
            </p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#slideshow"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true" 
        style="left: 8vw; bottom: 5vw"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#slideshow"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true" 
        style="right: 8vw; bottom: 5vw"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </section>

  <section>
    <div class="container">
      <h3 class="pt-5 pb-5 text-center">
        {{ $translate(["Mengapa Memilih Kami?", "Why choose us?"]) }}
      </h3>
    </div>


    <div class="row container-fluid">
      <div class="col-md-4 col mx-auto mb-3">
        <div class="card h-100">
          <img class="card-img-top" :src="images.card1" alt="Card image" style="height: 100%;"/>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">
              {{ $translate(["Kemudahan", "Convinience"]) }}
            </h5>
            <p class="card-text">
              {{
                $translate([
                  "Cepat dalam memilih layanan dokter terbaik dari berbagai Fasilitas kesehatan dalam 1 kali search.",
                  "Find doctor services and many facilities on a click of a button.",
                ])
              }}
            </p>
            <router-link
              to="/destination"
              class="btn d-block btn-outline-primary text-wrap mt-auto"
            >
              {{ $translate(["Lihat Destinasi", "Available Destinations"]) }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-md-4 col mx-auto mb-3">
        <div class="card h-100">
          <img class="card-img-top" :src="images.card2" alt="Card image" style="height: 100%;"/>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">
              {{ $translate(["Kesehatan Holistik", "Holistic Health"]) }}
            </h5>
            <p class="card-text">
              {{
                $translate([
                  "Menyeimbangkan kesehatan medis dan holistik untuk kesehatan yang paripurna.",
                  "Balance between medical and holysm for a better health.",
                ])
              }}
            </p>
            <router-link
              to="/about"
              class="btn d-block btn-outline-primary text-wrap mt-auto"
            >
              {{ $translate(["Tentang Oobad", "About Oobad"]) }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-md-4 col mx-auto mb-3">
        <div class="card h-100">
          <img
            class="card-img-top container-fluid mx-auto d-block"
            style="height: 100%"
            :src="images.card3"
            alt="Card image"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">
              {{ $translate(["Pelayanan Bersahabat", "Friendly Services"]) }}
            </h5>
            <p class="card-text">
              {{
                $translate([
                  "Oobad menggunakan SpeedQ untuk melayani pasien dengan lebih baik tanpa kerumunan.",
                  "Oobad uses SpeedQ to better serve patients without crowds.",
                ])
              }}
            </p>
            <button
              class="btn d-block btn-outline-primary text-wrap mt-auto"
              @click="scrollBottom()"
            >
              {{ $translate(["Crowd Control", "Crowd Control"]) }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <h2 class="pt-5 pb-4 text-center">
      {{ $translate(["Layanan Terbaik", "Best Services"]) }}
    </h2>
  </section>

  <section>
    <div class="container">
      <div class="row d-flex py-5">
        <div class="col">
          <i class="fas fa-stethoscope d-flex justify-content-center"></i>
          <h5 class="service-title text-center">
            {{ $translate(["Dokter Terpilih", "Specialized Doctors"]) }}
          </h5>
          <p class="service-text">
            {{
              $translate([
                "Kami memilih dokter-dokter terbaik dan layanan unggulan rumah sakit yang ada di Bali.",
                "We select the best doctors from top quality hospital that are available in Bali.",
              ])
            }}
          </p>
        </div>
        <div class="col">
          <i class="fas bi-house-door-fill d-flex justify-content-center"></i>
          <h5 class="service-title text-center">
            {{ $translate(["Rumah Yoga", "Yoga House"]) }}
          </h5>
          <p class="service-text">
            {{
              $translate([
                "Kami menghubungkan anda dengan pembimbing Yoga terbaik di Bali",
                "We have many connection with the best Yoga trainer in Bali",
              ])
            }}
          </p>
        </div>
        <div class="col">
          <i class="fas fa-notes-medical d-flex justify-content-center"></i>
          <div>
            <h5 class="service-title text-center">
              {{
                $translate(["Penyembuhan Tradisional", "Traditional Healing"])
              }}
            </h5>
            <p class="service-text">
              {{
                $translate([
                  "Kami memberi pilihan penyembuhan holistik untuk kesehatan yang paripurna.",
                  "We can give many options for health hospitality",
                ])
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Team -->
  <section>
    <h2 class="pt-5 pb-4 text-center">
      {{ $translate(["Team Kami", "Our Team"]) }}
    </h2>
    <!-- Carousel for bigger screen -->
    <div
      id="carouselMultiItemTeam"
      class="carousel slide carousel-dark d-none d-md-none d-lg-block"
      data-ride="carousel"
    >
      <!-- Controls -->
      <div class="carousel-inner">
        <div class="d-flex justify-content-center position-center">
          <a
            class="carousel-control-prev"
            style="left: 8vw; bottom: 1vw"
            type="button"
            data-target="#carouselMultiItemTeam"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            style="right: 8vw; bottom: 1vw"
            type="button"
            data-target="#carouselMultiItemTeam"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
        <!-- Single item -->
        <div class="carousel-item active">
          <div class="container d-flex justify-content-center">
            <div class="row">
              <div
                class="col-lg-4 mb-3 d-flex align-items-stretch"
                style="float: left"
              >
                <div class="card mb-2">
                  <img
                    class="
                      card-img-top
                      container-fluid
                      rounded-circle
                      mx-auto
                      d-block
                    "
                    style="width: 200px; height: 200px"
                    :src="images.team1"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 class="card-title text-center">Satya</h4>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-4 mb-3 d-flex align-items-stretch"
                style="float: left"
              >
                <div class="card mb-2">
                  <img
                    class="
                      card-img-top
                      container-fluid
                      rounded-circle
                      mx-auto
                      d-block
                    "
                    style="width: 200px; height: 200px"
                    :src="images.team2"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 class="card-title text-center">Andi</h4>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-4 mb-3 d-flex align-items-stretch"
                style="float: left"
              >
                <div class="card mb-2">
                  <img
                    class="
                      card-img-top
                      container-fluid
                      rounded-circle
                      mx-auto
                      d-block
                    "
                    style="width: 200px; height: 200px"
                    :src="images.team3"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 class="card-title text-center">Budha</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Single item -->
        <div class="carousel-item">
          <div class="container d-flex justify-content-center">
            <div class="row">
              <div
                class="col mb-3 d-flex align-items-stretch"
                style="float: left"
              >
                <div class="card mb-2">
                  <img
                    class="
                      card-img-top
                      container-fluid
                      rounded-circle
                      mx-auto
                      d-block
                    "
                    style="width: 200px; height: 200px"
                    :src="images.team4"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 class="card-title text-center">Dini</h4>
                  </div>
                </div>
              </div>

              <div
                class="col mb-3 d-flex align-items-stretch"
                style="float: left"
              >
                <div class="card mb-2">
                  <img
                    class="
                      card-img-top
                      container-fluid
                      rounded-circle
                      mx-auto
                      d-block
                    "
                    style="width: 200px; height: 200px"
                    :src="images.team5"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 class="card-title text-center">Yogi</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4"></div>
    <!-- Carousel wrapper -->
  </section>

  <!-- Team Kami smaller screen-->
  <section>
    <div
      id="carouselMultiItemTeamSmall"
      class="
        carousel
        slide
        carousel-dark
        d-block d-sm-block d-md-block d-lg-none
      "
      data-ride="carousel"
    >
      <div class="carousel-inner pb-4">
        <div class="d-flex justify-content-center position-center">
          <a
            class="carousel-control-prev"
            style="left: 50px; bottom: 50px"
            type="button"
            data-target="#carouselMultiItemTeamSmall"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            style="right: 50px; bottom: 50px"
            type="button"
            data-target="#carouselMultiItemTeamSmall"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
        <!-- Single item -->
        <div class="carousel-item active">
          <div class="container d-flex justify-content-center">
            <div class="row justify-content-center">
              <div
                class="col-lg-4 mb-3 d-flex align-items-stretch"
                style="float: left"
              >
                <div class="card mb-2">
                  <img
                    class="
                      card-img-top
                      container-fluid
                      rounded-circle
                      mx-auto
                      d-block
                    "
                    style="width: 200px; height: 200px"
                    :src="images.team1"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 class="card-title text-center">Satya</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="container d-flex justify-content-center">
            <div class="row justify-content-center">
              <div
                class="col-lg-4 mb-3 d-flex align-items-stretch"
                style="float: left"
              >
                <div class="card mb-2">
                  <img
                    class="
                      card-img-top
                      container-fluid
                      rounded-circle
                      mx-auto
                      d-block
                    "
                    style="width: 200px; height: 200px"
                    :src="images.team2"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 class="card-title text-center">Andi</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="container d-flex justify-content-center">
            <div class="row justify-content-center">
              <div
                class="col-lg-4 mb-3 d-flex align-items-stretch"
                style="float: left"
              >
                <div class="card mb-2">
                  <img
                    class="
                      card-img-top
                      container-fluid
                      rounded-circle
                      mx-auto
                      d-block
                    "
                    style="width: 200px; height: 200px"
                    :src="images.team3"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 class="card-title text-center">Budha</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="container d-flex justify-content-center">
            <div class="row justify-content-center">
              <div
                class="col-lg-4 mb-3 d-flex align-items-stretch"
                style="float: left"
              >
                <div class="card mb-2">
                  <img
                    class="
                      card-img-top
                      container-fluid
                      rounded-circle
                      mx-auto
                      d-block
                    "
                    style="width: 200px; height: 200px"
                    :src="images.team4"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 class="card-title text-center">Dini</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="container d-flex justify-content-center">
            <div class="row justify-content-center">
              <div
                class="col-lg-4 mb-3 d-flex align-items-stretch"
                style="float: left"
              >
                <div class="card mb-2">
                  <img
                    class="
                      card-img-top
                      container-fluid
                      rounded-circle
                      mx-auto
                      d-block
                    "
                    style="width: 200px; height: 200px"
                    :src="images.team5"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 class="card-title text-center">Yogi</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Popular Destination -->
  <section>
    <h2 class="pt-5 pb-4 text-center">
      {{ $translate(["Destinasi Populer", "Popular Destinations"]) }}
    </h2>

    <div class="container-fluid d-none d-lg-block">
      <div class="destination">
        <div class="row">
          <div class="col">
            <img class="dest-img ranimg" id="ranimg" src="" />
          </div>
          <div class="col-6 mt-3 pt-3 text-left mr-5 destination">
            <h2 class="text-black font-weight-bold mx-3 dest-text ranoffices">
              {{ this.nama }}
            </h2>
            <p class="text-black text-justify mx-3 dest-text randesc">
              {{ this.deskripsi }}
            </p>
            <br />
            <router-link
              to="/destination"
              class="btn btn-outline-primary text-wrap ml-3 dest-text"
            >
              {{
                $translate(["Lihat Destinasi Lainnya", "See More Destinations"])
              }}
              ►</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <div class="d-block d-lg-none">
      <div class="container-fluid">
        <img class="dest-img" id="ranimg1" src="" />
        <div class="destination">
          <h2
            class="mx-4 text-black text-left font-weight-bold dest-text-sm pt-4"
          >
            {{ this.nama }}
          </h2>
          <p class="mx-4 text-black text-justify dest-text-sm randesc">
            {{ this.deskripsi }}
          </p>
          <br />
          <router-link
            to="/Destination"
            type="button"
            class="btn btn-outline-primary mx-4 d-block"
          >
            {{
              $translate(["Lihat Destinasi Lainnya", "See More Destinations"])
            }}
            ►
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Partner -->
  <section>
    <div class="container-fluid text-center">
      <h2 class="pt-5 mt-4 pb-3">
        {{ $translate(["Mitra Kami", "Our Partners"]) }}
      </h2>
    </div>
    <div class="container pb-5 text-center">
      <div class="logo-list">
        <div class="row">
          <div class="col-lg-2 col-md-4 col-6 mx-auto">
            <img
              class="partner-carousel img-partner img-fluid"
              :src="images.partner1"
              alt="Partner logo"
            />
          </div>
          <div class="col-lg-2 col-md-4 col-6 mx-auto">
            <img
              class="partner-carousel img-partner img-fluid"
              :src="images.partner2"
              alt="Partner logo"
            />
          </div>
          <div class="col-lg-2 col-md-4 col-6 mx-auto">
            <img
              class="partner-carousel img-partner img-fluid"
              :src="images.partner3"
              alt="Partner logo"
            />
          </div>
          <div class="col-lg-2 col-md-4 col-6 mx-auto">
            <img
              class="partner-carousel img-partner img-fluid"
              :src="images.partner4"
              alt="Partner logo"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Video -->
  <div class="container-fluid d-none d-md-block">
    <div class="background-video">
      <div class="row">
        <div class="col-4 center-block text-center">
          <h2 class="ml-4 pt-5 mt-3 text-white font-weight-bold">Video</h2>
          <p class="ml-4 h4 text-white">Pelayanan Bersahabat Oobad</p>
        </div>
        <div class="col">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hiF_xWJP2yA?controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Small Video -->
  <div class="container-fluid">
    <div class="background-video-sm text-center d-block d-md-none">
      <h2 class="text-white font-weight-bold">Video</h2>
      <p class="h4 text-white">Pelayanan Bersahabat Oobad</p>
    </div>
    <div class="embed-responsive embed-responsive-16by9 d-block d-md-none">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/hiF_xWJP2yA?controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>

  <br />
  <br />
</div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      counters: null,
      random_offices: null,
      nama: null,
      img: "",
      deskripsi: null,
      images: {
        card1: require("@/assets/gallery/blog1.png"),
        card2: require("@/assets/gallery/blog2.png"),
        card3: require("@/assets/gallery/blog3.png"),
        partner1: require("@/assets/partners/idi.jpg"),
        partner2: require("@/assets/partners/persi.jpg"),
        partner3: require("@/assets/partners/mahaloka.png"),
        partner4: require("@/assets/partners/bmta.jpg"),
        team1: require("@/assets/team/Satya.jpg"),
        team2: require("@/assets/team/Andi.jpg"),
        team3: require("@/assets/team/Budha.jpg"),
        team4: require("@/assets/team/Dini.jpg"),
        team5: require("@/assets/team/Yogi.jpg"),
      },
      loc: {
        lat: "",
        long: "",
      },
    };
  },
  mounted() {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude: lat, longitude: lng } = pos.coords;
        this.loc.lat = lat;
        this.loc.long = lng;
        localStorage.setItem("val_lat", lat);
        localStorage.setItem("val_long", lng);
        // console.log(this.loc);
      },
      (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  },

  created() {
    let baseUrl =
      "https://oobad.id/api/";
    let baseUrl2 = "https://kimiafarmadenpasar.co.id/api_oobad/grouped_counters.php";
    axios.get(baseUrl + 'random_offices.php?limit=1')
      .then((response) => {
        this.nama = response.data.data.items[0].name;
        this.img = response.data.data.items[0].images[1];
        this.deskripsi = response.data.data.items[0].description;
        document.getElementById("ranimg").src = this.img;
        document.getElementById("ranimg1").src = this.img;
      })
     .catch((error) => {
        console.log(error);
      });

    axios.get(baseUrl2)
      .then((response) => {
        this.counters = response.data.data.items;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  computed: {
  },
  methods: {
    valueSender: function () {
      var val_kabupaten;
      var val_search;
      var val_counter;
      val_kabupaten = document.getElementById("kabupaten").value;
      val_search = document.getElementById("search").value;
      val_counter = document.getElementById("counter").value;
      localStorage.setItem("val_kabupaten", val_kabupaten);
      localStorage.setItem("val_search", val_search);
      localStorage.setItem("val_counter", val_counter);
      location.href = "/search";
    },
    valueSenderM: function () {
      var val_kabupaten;
      var val_search;
      var val_counter;
      val_kabupaten = document.getElementById("kabupatenM").value;
      val_search = document.getElementById("searchM").value;
      val_counter = document.getElementById("counterM").value;
      localStorage.setItem("val_kabupaten", val_kabupaten);
      localStorage.setItem("val_search", val_search);
      localStorage.setItem("val_counter", val_counter);
      location.href = "/search";
    },
    scrollBottom() {
      window.scrollTo(0, document.body.scrollHeight);
    },
  },
};
</script>

<style lang="css">
.partner-carousel {
  min-height: 100px;
}

.fas,
.fab,
.far {
  font-size: 6em;
  color: rgb(85, 189, 253);
  margin-block: 2rem;
  margin-inline: auto;
}

.col-5 {
  margin-inline: auto;
  text-align: center;
}

.container {
  position: relative;
  text-align: left;
  color: rgb(0, 0, 0);
}

.container-fluid {
  padding: 0;
  margin: 0;
}

.carousel {
  width: unset;
  height: unset;
}

.carousel-item img {
  position: relative;
  min-width: 100%;
  width: 100%;
}

.carousel-caption {
  padding-inline-end: 15rem;
  width: 800px !important;
  left: 10%;
  top: 50% !important;
  transform: translateY(-60%);
  text-align: left;
  bottom: initial;
}

.carousel .carousel-indicators li {
  background-color: #fff;
  background-color: rgba(70, 70, 70, 0.25);
}

.carousel .carousel-indicators .active {
  background-color: #444;
}

.carousel-control-prev {
  margin-top: auto;
  width: 10%;
  height: 100%;
}

.carousel-control-next {
  margin-top: auto;
  width: 10%;
  height: 100%;
}

.card-img-top {
  padding-inline: 4pt;
  padding-block: 4pt;
}

.card-title {
  font-family: "Segoe UI", Verdana, sans-serif, ans-serif;
  font-weight: bold;
}

.card-text {
  font-family: Calibri, sans-serif;
  font-weight: normal;
}

.service-title {
  font-family: "Segoe UI", Verdana, sans-serif, sans-serif;
  font-weight: bold;
  text-align: center;
}

.service-text {
  font-family: Calibri, sans-serif;
  font-weight: normal;
  text-align: center;
}

.f-color {
  padding-block: 1em;
  color: black;
  background-color: #6ec3ff;
}

.destination {
  position: relative;
  background-color: #eaf6ff;
  height: 100%;
}

.dest-img {
  width: 100%;
  height: 100%;
}

.img-partner {
  width: 400px;
  height: 400px;
}

.dest-text {
  position: relative;
  min-width: 100%;
  width: 100%;
  max-height: 100%;
}

@media screen and (max-width: 48em) {
  .col {
    flex: 100% !important;
    max-width: 100% !important;
  }
}

#stripes {
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform-origin: 100;
  transform: skewY(-5deg);
  background: -webkit-linear-gradient(
    300deg,
    #53f 15%,
    #05d5ff 70%,
    #a6ffcb 94%
  );
  background: linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%);
}

#stripes,
#stripes span {
  position: absolute;
}

#stripes span {
  height: 40px;
}

#stripes :nth-child(1) {
  width: 50%;
  left: 50%;
  top: 40px;
  background: #4c29ff;
}

#stripes :nth-child(2) {
  width: 14%;
  right: 0;
  bottom: 40px;
  background: #2be7ff;
}

#stripes :nth-child(3) {
  width: 25%;
  bottom: 0;
  right: 0;
  background: #a1ffc8;
}

.item.active {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8));
}

.logo-list {
  padding: 20px 0;
  text-align: center;
}
.logo-list img {
  display: inline-block;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
}

.background-video {
  background-repeat: inherit;
  background: url("../assets/gallery/section_bg02.png");
}

.background-video-sm {
  padding-block: 1em;
  background: url("../assets/gallery/section_bg02.png");
}

.gradient1 {
  background-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 0),
      rgba(41, 41, 41, 0.603)
    ),
    url("../assets/hero/hero.jpg");
  width: 100vw;
  height: 39vw;
  background-size: cover;
  color: white;
}

.gradient2 {
  background-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 0),
      rgba(41, 41, 41, 0.603)
    ),
    url("../assets/hero/hero2.jpg");
  width: 100vw;
  height: 39vw;
  background-size: cover;
  color: white;
}

.gradient3 {
  background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0),
      rgba(41, 41, 41, 0.603)
    ),
    url("../assets/hero/hero3.jpg");
  width: 100vw;
  height: 39vw;
  background-size: cover;
  color: white;
}

.gradient4 {
  background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0),
      rgba(41, 41, 41, 0.603)
    ),
    url("../assets/hero/hero4.jpg");
  width: 100vw;
  height: 39vw;
  background-size: cover;
  color: white;
}
</style>