<template>
  <div>
    <div>
      <b-navbar toggleable="lg" class="navbarTopHome" sticky>
          <b-navbar-brand href="/">
              <b-img id="iconHomeHeaderHome"
                     src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/home_icon_48px.png"
                     height="24" width="24" alt="Home icon">
              </b-img>
          </b-navbar-brand>

          <b-navbar-nav class="ml-auto">
              <Dropdown/>
          </b-navbar-nav>
      </b-navbar>

      <div class="container" id="divLogoHome">
        <b-row>
          <b-col>
            <b-img
                    src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/logo_600px.png"
                    fluid
                    height="192"
                    width="600"
                    alt="spac logo"
                    class="imgHome">
            </b-img>
          </b-col>
        </b-row>
        <b-row class="row justify-content-center">
            <p class="sloganHome">Think outside the planet</p>
        </b-row>
      </div>

    <Footer/>
    </div>
    <Animation/>
  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown";
import Footer from "@/components/Footer";
import Animation from "@/components/NotFound/Animation";
export default {
  name: 'Home',
    components: {Animation, Footer, Dropdown},
    props: {
    msg: String
  }
}
</script>

<style>

  html {
    background-color: #181818;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  @font-face {
    font-family: 'aileronsregular';
    src: url('../assets/fonts/airelons/ailerons-regular-webfont.woff2') format('woff2');
    src: url('../assets/fonts/airelons/ailerons-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  .navbarTopHome {
      padding: 24px !important;
      width: 100% !important;
      align-items: baseline;
  }

  .imgHome {
    margin: 60px 30px 30px;
  }

  .sloganHome {
    font-family: "aileronsregular", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    font-size: 43px;
    margin: 15px 0 0;
    opacity: 0.25;
  }

  .sloganHome:hover {
    opacity: 0.40;
  }

  .dropdown-header {
    color: #E2E2E2 !important;
    font-size: 16px !important;
    text-align: center !important;
    font-weight: bold;
  }

  .dropdown-menu {
    background-color: #1F1F1F !important;
    text-align: center !important;
  }

  .dropdown-item {
    color: #E2E2E2 !important;
  }

  a.dropdown-item:hover {
    background-color: #353535;
  }

  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }

  #iconHomeHeaderHome {
      margin-top: -3px;
      margin-left: -3px;
  }

  #divLogoHome {
      margin-top: 45px;
  }

</style>