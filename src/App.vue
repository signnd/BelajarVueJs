<template>
  <!-- Navbar atas -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
  <section>
  <div class="header-area" id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow">
      <div class="container">
        <nav class="navbar navbar-white bg-white">
          <a class="navbar-brand my-0" href="/">
            <img :src="images.logo" height="45" alt="logo">
          </a>
        </nav>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav my-1">
            <!-- Nav Link Fullscreen -->
            <router-link to="/" class="nav-item nav-link navbar-collapse fs-4 mx-3 nav-fill active"
              data-target="#navbarSupportedContent">Home</router-link>
            <router-link to="/Doctors" class="nav-item nav-link navbar-collapse fs-4 mx-3"
              data-target="#navbarSupportedContent">Doctors</router-link>
            <router-link to="/Contact" class="nav-item nav-link navbar-collapse fs-4 mx-3"
              data-target="#navbarSupportedContent">Contact</router-link>
            <router-link to="/About" class="nav-item nav-link navbar-collapse fs-4 mx-3" data-target="#navbarSupportedContent">
              About</router-link>

            <!-- Nav Link Collapsed -->
            <router-link to="/" class="d-none fs-4 mx-2" data-toggle="collapse"
              data-target="#navbarSupportedContent">Home</router-link>
            <router-link to="/Doctors" class="d-none fs-4 mx-2" data-toggle="collapse"
              data-target="#navbarSupportedContent">Doctors</router-link>
            <router-link to="/Contact" class="d-none fs-4 mx-2" data-toggle="collapse"
              data-target="#navbarSupportedContent">Contact</router-link>
            <router-link to="/About" class="d-none fs-4 mx-2" data-toggle="collapse"
              data-target="#navbarSupportedContent">About</router-link>

            <!-- Search bar -->
            <form class="form-inline my-2 my-lg-1">
              <input class="d-lg-none d-xl-block form-control mr-sm-2 mx-2" type="search" placeholder="Search">
              <input class="d-none d-lg-block d-xl-none form-control mr-sm-2" type="search" placeholder="Enter to Search">
              <button class="d-lg-none d-xl-block btn btn-outline-primary my-2 mx-2" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </div>
  </section>
  <router-view />

  <!-- Top Page Button -->
  <go-top
    :right="10"
    :bottom="10"
    bg-color="#66f"
    box-shadow="0 0 0 transparent">
  </go-top>


  <section>
    <div class="footer">
      <div class="d-block d-sm-none">© 2021 - 2022 Medical Tourism<br><br>
        <router-link to="/">Home</router-link> • <router-link to="/Doctors">Doctors</router-link> • 
        <router-link to="/Contact">Contact</router-link>  • <router-link to="/About">About</router-link>
      </div>
      <div class="d-none d-sm-block d-md-block d-lg-none">
        <div class="text-center">© 2021 - 2022 Medical Tourism • 
          <router-link to="/">Home</router-link> • <router-link to="/Doctors">Doctors</router-link> • <router-link to="/Contact">Contact</router-link> • <router-link to="/About">About</router-link>
        </div>
      </div>
      <div class="d-none d-lg-block d-xl-block d-xxl-block">
        <div class="text-center">© 2021 - 2022 Medical Tourism</div>
      </div>
    </div>
  </section>
</template>

<script>
import GoTop from './component/GoTop.vue'
export default {
    data() {
        return {
            images: {
                logo: require('@/assets/logo/logo-real-a.jpeg')
            }
        }
    },
    components: {
      GoTop
    }
}

$(function(){ 
     var navMain = $(".navbar-collapse");
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
  });

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;

}

#nav a.router-link-exact-active {
  color: #6ec3ff;
}

#nav a:hover {
  color: #6ec3ff;
}

#nav form {
  color: #6ec3ff;
}

.container {
  color: white;
}

.footer {
  padding-block: 1em;
  color: white;
  background-color: #6ec3ff;
}

.fsma {
  text-align: center;
}

.fmed {
  text-align: center;
}

#toTopBtn {
  position: fixed;
  bottom: 26px;
  right: 39px;
  z-index: 98;
  padding: 21px;
  background-color: rgb(110, 195, 255)
}
.js .cd-top--fade-out {
  opacity: .5
}
.js .cd-top--is-visible {
  visibility: visible;
  opacity: 1
}
.js .cd-top {
  visibility: hidden;
  opacity: 0;
  transition: opacity .3s, visibility .3s, background-color .3s
}
.cd-top {
  position: fixed;
  bottom: 20px;
  bottom: var(--cd-back-to-top-margin);
  right: 20px;
  right: var(--cd-back-to-top-margin);
  display: inline-block;
  height: 40px;
  height: var(--cd-back-to-top-size);
  width: 40px;
  width: var(--cd-back-to-top-size);
  box-shadow: 0 0 10px rgba(0, 0, 0, .05) !important;
  background: url(https://res.cloudinary.com/dxfq3iotg/image/upload/v1571057658/cd-top-arrow.svg) no-repeat center 50%;
  background-color: hsla(5, 76%, 62%, .8);
  background-color: hsla(var(--cd-color-3-h), var(--cd-color-3-s), var(--cd-color-3-l), 0.8)
}
.scroll {
  color: #fff;
  margin-top: 100px
}
.fade-in {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.5s;
}
@keyframes fadeInOpacity {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style> 