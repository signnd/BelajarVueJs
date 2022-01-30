<template>
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
          <img
            class="d-block mt-5 pt-2 w-100"
            :src="images.cover2"
            alt="First slide"
          />
          <div class="carousel-caption text-dark">
            <div class="mt-5">
              <h1 class="font-weight-bold" style="font-size: 5vw; width: 900px">
                {{ $translate(["Selamat Datang", "Welcome"]) }}
              </h1>
            </div>
            <p style="font-size: 2vw">
              {{
                $translate([
                  "Layanan Wisata Medis Anda di Bali",
                  "Your Go To Medical Tourism Services in Bali",
                ])
              }}
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block mt-5 pt-2 w-100 h-3"
            :src="images.cover1"
            alt="Second slide"
          />
          <div class="carousel-caption text-dark">
            <div class="mt-5">
              <h1 class="font-weight-bold" style="font-size: 5vw; width: 900px">
                {{ $translate(["Healthy & Peaceful", "Healthy & Peaceful"]) }}
              </h1>
            </div>
            <p style="font-size: 2vw; width: 800px">
              {{
                $translate([
                  "Makan Sehat dan Kesehatan Pikiran Adalah Kunci Kesehatan",
                  "Health Talent, Good Food, Mind Fullness is The Key of Wellness",
                ])
              }}
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block mt-5 pt-2 w-100 h-3"
            :src="images.cover4"
            alt="Third slide"
          />
          <div class="carousel-caption text-dark">
            <div class="mt-5">
              <h1 class="font-weight-bold" style="font-size: 5vw; width: 900px">
                {{ $translate(["Senyum Pasien", "Patient's Smile"]) }}
              </h1>
            </div>
            <p style="font-size: 2vw; width: 800px">
              {{
                $translate([
                  "Kesenangan Pasien Adalah Prioritas Kami",
                  "Patient's Satisfaction is Our Top Priority",
                ])
              }}
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block mt-5 pt-2 w-100 h-3"
            :src="images.cover3"
            alt="Forth slide"
          />
          <div class="carousel-caption text-dark">
            <div class="mt-5">
              <h1 class="font-weight-bold" style="font-size: 5vw">
                {{ $translate(["Ayo Mulai!", "Let's Start!"]) }}
              </h1>
            </div>
            <p class="" style="font-size: 2vw; width: 800px">
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
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#slideshow"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </section>

  <!-- Search Destination & Categories Lg -->
  <form class="d-none d-md-block">
    <div class="container-fluid form-row f-color px-5">
      <div class="col-3 ml-5">
        <select class="form-control form-control-md" id="kabupaten">
          <option hidden>{{ $translate(["Lokasi", "Location"]) }}</option>
          <option>Denpasar</option>
          <option>Tabanan</option>
          <option>Klungkung</option>
          <option>Gianyar</option>
          <option>Buleleng</option>
        </select>
      </div>
      <div class="col-3">
        <select class="form-control form-control-md">
          <option hidden>{{ $translate(["Kategori", "Categories"]) }}</option>
          <option v-for="kategori in poli" :key="kategori.id">
            {{ kategori.name }}
          </option>
        </select>
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
          class="btn btn-md btn-block btn-primary"
          @click="valueSender()"
          id="search_home"
        >
          {{ $translate(["Cari", "Search"]) }}
        </button>
      </div>
    </div>
  </form>
  <!-- Search Destination & Categories SM -->
  <div class="container d-block d-md-none pt-3">
    <select class="form-control form-control-md">
      <option hidden>{{ $translate(["Lokasi", "Location"]) }}</option>
      <option>Denpasar</option>
      <option>Tabanan</option>
      <option>Klungkung</option>
      <option>Gianyar</option>
      <option>Buleleng</option>
    </select>
    <select class="form-control form-control-md my-3">
      <option hidden>{{ $translate(["Kategori", "Categories"]) }}</option>
      <option v-for="kategori in poli" :key="kategori.id">
        {{ kategori.name }}
      </option>
    </select>
    <input class="form-control mb-3" type="search" placeholder="Search" />
    <router-link :to="{ name: 'Destination' }">
      <button type="button" class="btn btn-md btn-block btn-primary">
        {{ $translate(["Cari", "Search"]) }}
      </button>
    </router-link>
  </div>

  <section>
    <h2 class="pt-5 font-weight-bold">
      {{ $translate(["Mengapa Memilih Kami?", "Why choose us?"]) }}
    </h2>
    <div class="container d-flex">
      <div class="container my-5 align-items-center" style="width: 900px">
        <div class="card-group">
          <div class="card" style="width: auto">
            <img class="card-img-top" :src="images.card1" alt="Card image 1" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">
                {{ $translate(["Mitra handal", "Reliable partners"]) }}
              </h5>
              <p class="card-text">
                {{
                  $translate([
                    "Tersedia banyak mitra yang tersebar di seluruh Bali.",
                    "We have many partners all across Bali.",
                  ])
                }}
              </p>
              <router-link
                to="/Destination"
                class="btn d-block btn-outline-primary text-wrap mt-auto"
              >
                {{ $translate(["Lihat rumah sakit", "See hospitals"]) }}
              </router-link>
            </div>
          </div>
          <div class="card" style="width: auto">
            <img class="card-img-top" :src="images.card2" alt="Card image 2" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">
                {{ $translate(["Biaya terjangkau", "Affordable costs"]) }}
              </h5>
              <p class="card-text">
                {{
                  $translate([
                    "Menerima asuransi & BPJS untuk meringankan biaya Anda.",
                    "We accept insurances & BPJS to ease your costs.",
                  ])
                }}
              </p>
              <router-link
                to="/Contact"
                class="btn d-block btn-outline-primary text-wrap mt-auto"
              >
                {{ $translate(["Kontak kami", "Contact us"]) }}
              </router-link>
            </div>
          </div>
          <div class="card" style="width: auto">
            <img class="card-img-top" :src="images.card3" alt="Card image 2" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">
                {{
                  $translate(["Layanan profesional", "Professional Services"])
                }}
              </h5>
              <p class="card-text">
                {{
                  $translate([
                    "Kami punya ratusan dokter yang ahli di bidangnya.",
                    "Hundreds of expert doctors ready to serve you.",
                  ])
                }}
              </p>
              <router-link
                to="/About"
                class="btn d-block btn-outline-primary text-wrap mt-auto"
              >
                {{ $translate(["Tentang kami", "About us"]) }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <h2 class="font-weight-bold text-center pb-3">
      {{ $translate(["Layanan Terbaik", "Best Services"]) }}
    </h2>
  </section>

  <section>
    <div class="container">
      <div class="row d-flex py-5">
        <div class="col-4">
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
        <div class="col-4">
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
        <div class="col-4 mb-3">
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
      </div>
    </div>
  </section>

  <!-- Our Team -->
  <section>
    <h2 class="font-weight-bold">
      {{ $translate(["Team Kami", "Our Team"]) }}
    </h2>
    <!-- Carousel for bigger screen -->
    <div
      id="carouselMultiItemTeam"
      class="carousel slide carousel-dark d-none d-md-none d-lg-block"
      data-ride="carousel"
    >
      <!-- Controls -->
      <div class="carousel-inner pb-4">
        <div class="d-flex justify-content-center position-center">
          <a
            class="carousel-control-prev"
            type="button"
            data-target="#carouselMultiItemTeam"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
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
          <div class="container">
            <div class="row">
              <div class="col" style="float: left">
                <div class="card mb-2">
                  <img
                    class="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 class="card-title text-center">Satya</h4>
                  </div>
                </div>
              </div>

              <div class="col" style="float: left">
                <div class="card mb-2">
                  <img
                    class="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 class="card-title text-center">Ryandika</h4>
                  </div>
                </div>
              </div>

              <div class="col" style="float: left">
                <div class="card mb-2">
                  <img
                    class="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 class="card-title text-center">Ngurah</h4>
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
              <div class="col" style="float: left">
                <div class="card mb-2">
                  <img
                    class="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 class="card-title text-center">Marcel</h4>
                  </div>
                </div>
              </div>

              <div class="col" style="float: left">
                <div class="card mb-2">
                  <img
                    class="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
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
      </div>
    </div>
    <div class="py-4"></div>
    <!-- Carousel wrapper -->
  </section> 

    <!-- Carousel smaller screen-->
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
            type="button"
            data-target="#carouselMultiItemTeamSmall"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
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
          <div class="container">
            <div class="row">
              <div class="col" style="float: left">
                <div class="card mb-2">
                  <img
                    class="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
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
          <div class="container">
            <div class="row">
              <div class="col" style="float: left">
                <div class="card mb-2">
                  <img
                    class="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 class="card-title text-center">Ryandika</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col" style="float: left">
                <div class="card mb-2">
                  <img
                    class="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 class="card-title text-center">Ngurah</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col" style="float: left">
                <div class="card mb-2">
                  <img
                    class="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 class="card-title text-center">Marcel</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col" style="float: left">
                <div class="card mb-2">
                  <img
                    class="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
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
      </div>
    </div>
  </section>

  <!-- Popular Destination -->
  <section>
  <h2 class="font-weight-bold py-3">
    {{ $translate(["Destinasi Populer", "Popular Destinations"]) }}
  </h2>

  <div class="container-fluid d-none d-lg-block">
    <div class="destination">
      <div class="row">
        <div class="col">
          <img class="dest-img ranimg" id="ranimg" src="" />
        </div>
        <div class="col-4 mt-3 pt-3 text-left mr-5 destination">
          <h2 class="text-black font-weight-bold mx-3 dest-text ranoffices">
            {{ this.nama }}
          </h2>
          <p class="text-black text-justify mx-3 dest-text randesc">
            {{ this.deskripsi }}
          </p>
          <br />
          <router-link
            to="/Destination"
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
        <div class="pb-2"></div>
      </div>
    </div>
  </div>
  </section>

  <div class="d-none d-sm-block"><br /><br /><br /><br /><br /><br /></div>

  <div class="d-block d-sm-none"><br /><br /></div>

  <!-- Our Partner -->
  <section>
    <h2 class="font-weight-bold">
      {{ $translate(["Mitra Kami", "Our Partners"]) }}
    </h2>

    <!-- Carousel for bigger screen -->
    <div
      id="carouselMultiItemPartner"
      class="carousel slide carousel-dark d-none d-md-none d-lg-block"
      data-ride="carousel"
    >
    <!-- Controls -->
      <div class="carousel-inner pb-4">
        <div class="d-flex justify-content-center position-center">
          <a
            class="carousel-control-prev"
            type="button"
            data-target="#carouselMultiItemPartner"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            type="button"
            data-target="#carouselMultiItemPartner"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
        <!-- Single item -->
        <div class="carousel-item active">
          <div class="container">
            <div class="row">
              <div class="col">
                <img
                  class="partner-carousel"
                  :src="images.partner2"
                  alt="Partner logo"
                />
              </div>

              <div class="col">
                <img
                  class="partner-carousel"
                  :src="images.partner3"
                  alt="Partner logo"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Single item -->
        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col">
                <img
                  class="partner-carousel"
                  :src="images.partner5"
                  alt="Partner logo"
                />
              </div>

              <div class="col">
                <img
                  class="partner-carousel"
                  :src="images.partner6"
                  alt="Partner logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4"></div>
    <!-- Carousel wrapper -->

    <!-- Carousel smaller screen-->
    <div
      id="carouselMultiItemPartnerSmall"
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
            type="button"
            data-target="#carouselMultiItemPartnerSmall"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            type="button"
            data-target="#carouselMultiItemPartnerSmall"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
        <!-- Single item -->
        <div class="carousel-item active">
          <div class="container">
            <div class="row">
              <div class="col">
                <img
                  class="partner-carousel"
                  :src="images.partner1"
                  alt="Partner logo"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col">
                <img
                  class="partner-carousel"
                  :src="images.partner2"
                  alt="Partner logo"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col">
                <img
                  class="partner-carousel"
                  :src="images.partner3"
                  alt="Partner logo"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col">
                <img
                  class="partner-carousel"
                  :src="images.partner4"
                  alt="Partner logo"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col">
                <img
                  class="partner-carousel"
                  :src="images.partner5"
                  alt="Partner logo"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col">
                <img
                  class="partner-carousel"
                  :src="images.partner6"
                  alt="Partner logo"
                />
              </div>
            </div>
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
          <p class="ml-4 h4 text-white">Senyum Nenek</p>
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
      <p class="h4 text-white">Senyum Nenek</p>
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
</template>


<script>
import json from "@/api/poliRs.json";
import axios from "axios";

export default {
  data() {
    return {
      poli: json.data.items,
      random_offices: null,
      nama: null,
      img: "",
      deskripsi: null,
      images: {
        cover1: require("@/assets/hero/hero.png"),
        cover2: require("@/assets/hero/hero2.jpg"),
        cover3: require("@/assets/hero/hero3.jpg"),
        cover4: require("@/assets/hero/hero4.png"),
        card1: require("@/assets/gallery/blog1.png"),
        card2: require("@/assets/gallery/blog2.png"),
        card3: require("@/assets/gallery/blog3.png"),
        team1: require("@/assets/Team/dr ida ayu oka purnamawati.jpg"),
        team2: require("@/assets/Team/Dr.i gede wiryana patra jaya.jpg"),
        team3: require("@/assets/Team/PUTU-DEDDY-SUHARTAWAN-B.BUS-MKTG.jpg"),
        partner1: require("@/assets/logors/350x350-01.png"),
        partner2: require("@/assets/logors/350x350-02.png"),
        partner3: require("@/assets/logors/350x350-03.png"),
        partner4: require("@/assets/logors/350x350-04.png"),
        partner5: require("@/assets/logors/350x350-05.png"),
        partner6: require("@/assets/logors/350x350-06.png"),
        partner7: require("@/assets/logors/350x350-07.png"),
        partner8: require("@/assets/logors/350x350-08.png"),
        partner9: require("@/assets/logors/350x350-09.png"),
      },
      loc: {
        lat: "",
        long: "",
      },
      selectedBanner: "",
    };
  },
  mounted() {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude: lat, longitude: lng } = pos.coords;
        this.loc.lat = lat;
        this.loc.long = lng;
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
    // let baseUrl = 'https://cors-anywhere.herokuapp.com/https://kimiafarmadenpasar.co.id/api_bmta/random_offices.php?limit=1';
    //       axios.get(baseUrl)
    //         .then((response) => {
    //         this.nama = response.data.data.items[0].name;
    //         this.img = response.data.data.items[0].images[1];
    //         this.deskripsi = response.data.data.items[0].description;
    //         document.getElementById('ranimg').src = this.img;
    //         document.getElementById('ranimg1').src = this.img;
    //         })
    //         .catch(error => {
    //           document.getElementById('error').innerHTML = "Data Tidak Ditemukan";
    //           console.log(error);
    //         })
  },

  computed: {
    heroImage() {
      return {
        backgroundImage: `url${require("../assets/gallery/section_bg02.png")}`,
      };
    },
  },
  methods: {
    valueSender: function () {
      var val_kabupaten;
      var val_search;
      val_kabupaten = document.getElementById("kabupaten").value;
      val_search = document.getElementById("search").value;
      localStorage.setItem("val_kabupaten", val_kabupaten);
      localStorage.setItem("val_search", val_search);
      location.href = "/api";
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
  height: 80%;
}

.carousel-control-next {
  margin-top: auto;
  width: 10%;
  height: 80%;
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

@media (min-width: 670px) {
  #stripes {
    height: 80%;
  }

  #stripes span {
    height: 150px;
  }

  #stripes :nth-child(1) {
    top: 0;
  }

  #stripes :nth-child(2) {
    width: 16.66667%;
    top: 300px;
    bottom: auto;
    background: #0dcfff;
  }

  #stripes :nth-child(3) {
    width: 33.33333%;
    right: auto;
    background: #11bdff;
  }
}

@media only screen and (max-width: 1600px) {
  #stripes {
    height: 75%;
  }

  #stripes :nth-child(1) {
    top: 0;
  }

  #stripes :nth-child(2) {
    width: 16.66667%;
    top: 300px;
    bottom: auto;
    background: #0dcfff;
  }

  #stripes :nth-child(3) {
    width: 33.33333%;
    right: auto;
    background: #11bdff;
  }
}

@media only screen and (max-width: 1450px) {
  #stripes {
    height: 65%;
  }

  #stripes :nth-child(1) {
    top: 0;
  }

  #stripes :nth-child(2) {
    width: 16.66667%;
    top: 300px;
    bottom: auto;
    background: #0dcfff;
  }

  #stripes :nth-child(3) {
    width: 33.33333%;
    right: auto;
    background: #11bdff;
  }
}

@media only screen and (max-width: 1300px) {
  #stripes {
    height: 55%;
  }

  #stripes :nth-child(1) {
    top: 0;
  }

  #stripes :nth-child(2) {
    width: 16.66667%;
    top: 300px;
    bottom: auto;
    background: #0dcfff;
  }

  #stripes :nth-child(3) {
    width: 33.33333%;
    right: auto;
    background: #11bdff;
  }
}

@media only screen and (max-width: 1100px) {
  #stripes {
    height: 50%;
  }

  #stripes :nth-child(1) {
    top: 0;
  }

  #stripes :nth-child(2) {
    width: 16.66667%;
    top: 300px;
    bottom: auto;
    background: #0dcfff;
  }

  #stripes :nth-child(3) {
    width: 33.33333%;
    right: auto;
    background: #11bdff;
  }
}

.background-video {
  background: url("../assets/gallery/section_bg02.png");
}

.background-video-sm {
  padding-block: 1em;
  background: url("../assets/gallery/section_bg02.png");
}
</style>