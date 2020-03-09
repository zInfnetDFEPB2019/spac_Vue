<template>
  <div>

    <div>
      <b-navbar toggleable="lg" class="navbarTop" sticky>
        <b-navbar-brand href="#"><img src="../assets/img/home_icon_48px.png" height="24" width="24" alt="Home icon"/></b-navbar-brand>

<!--        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>-->

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
<!--            <b-nav-form>-->
<!--              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
<!--              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
<!--            </b-nav-form>-->

            <b-dropdown class="b-dropdown" size="sm" variant="outline-dark" toggle-class="text-decoration-none" no-caret dropleft>
              <template v-slot:button-content>
                <img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/menu_icon_48px.png" height="24" width="24" alt="spac brand logo"/>
                <!--                &#x2630;<span class="sr-only">Search</span>-->
              </template>
              <b-dropdown-header class="dropdown-header">SPACE</b-dropdown-header>
                <b-dropdown-item href="#">Comet Search</b-dropdown-item>
                <b-dropdown-item href="#">Space Weather</b-dropdown-item>
                <b-dropdown-item href="#">Picture of the day</b-dropdown-item>
              <b-dropdown-header class="dropdown-header">MARS</b-dropdown-header>
                <b-dropdown-item href="#">Mars Weather</b-dropdown-item>
                <b-dropdown-item href="#">Photos</b-dropdown-item>
              <b-dropdown-header class="dropdown-header">EARTH</b-dropdown-header>
                <b-dropdown-item href="#">Overview</b-dropdown-item>
                <b-dropdown-item href="#">Local Information</b-dropdown-item>
              <b-dropdown-header class="dropdown-header">ISS</b-dropdown-header>
                <b-dropdown-item href="#">Crew</b-dropdown-item>
                <b-dropdown-item href="#">Current Location</b-dropdown-item>
                <b-dropdown-item href="#">Pass Predictions</b-dropdown-item>
                <b-dropdown-item href="#">Animated Map</b-dropdown-item>
            </b-dropdown>



<!--            <b-dropdown size="sm" variant="dark" toggle-class="text-decoration-none" no-caret dropleft>-->
<!--              <template v-slot:button-content>-->
<!--                <img src="../assets/img/menu_icon_48px.png" height="24" width="24" alt="spac brand logo"/>-->
<!--                &lt;!&ndash;                &#x2630;<span class="sr-only">Search</span>&ndash;&gt;-->
<!--              </template>-->
<!--              <b-dropdown-item href="#" data-toggle="tooltip" data-html="true" title="Comet Search">SPACE</b-dropdown-item>-->
<!--              <b-dropdown-item href="#">MARS</b-dropdown-item>-->
<!--              <b-dropdown-item href="#">EARTH</b-dropdown-item>-->
<!--              <b-dropdown-item href="#">ISS</b-dropdown-item>-->
<!--              <b-dropdown-item href="#">DEVELOPER</b-dropdown-item>-->
<!--            </b-dropdown>-->

<!--            <b-nav-item-dropdown text="Dropdown" right>-->
<!--              <b-dropdown-item class="dropdownItem" href="#">SPACE</b-dropdown-item>-->
<!--              <b-dropdown-item href="#">MARS</b-dropdown-item>-->
<!--              <b-dropdown-item href="#">EARTH</b-dropdown-item>-->
<!--              <b-dropdown-item href="#">ISS</b-dropdown-item>-->
<!--              <b-dropdown-item href="#">DEVELOPER</b-dropdown-item>-->
<!--            </b-nav-item-dropdown>-->
          </b-navbar-nav>
      </b-navbar>

      <b-container>
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
      </b-container>

      <b-navbar toggleable="lg" class="navbarFooter" fixed="bottom">
          <b-navbar-brand href="#"><b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/developer_icon_48px.png" height="24" width="24" alt="Home icon"/></b-navbar-brand>
          <p style="opacity: 0.25;margin-top: 20px;">Developed by Christian Vajgel</p>
        <!--        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>-->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav>
            <b-nav-item><a href="https://www.linkedin.com/in/christianvajgel/"><b-img class="iconFooter iconHover" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/linkedin_logo_48px.png" height="24" width="24" alt="spac brand logo"/></a></b-nav-item>
            <b-nav-item><a href="https://github.com/christianvajgel"><b-img class="iconFooter iconHover" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/github_icon_48px.png" height="24" width="24" alt="spac brand logo"/></a></b-nav-item>
            <b-nav-item><a href="https://t.me/vajgel"><b-img class="iconHover" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/telegram_icon_48px.png" height="24" width="24" alt="spac brand logo"/></a></b-nav-item>
          </b-nav>
        </b-navbar-nav>
      </b-navbar>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
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

    /*src: url('ailerons-regular-webfont.woff2') format('woff2'),*/
    /*url('ailerons-regular-webfont.woff') format('woff');*/
    font-weight: normal;
    font-style: normal;

  }

  @font-face {
    font-family: 'cabinbold';
    src: url('../assets/fonts/cabin/cabin-bold-webfont.woff2') format('woff2'),
    url('../assets/fonts/cabin/cabin-bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'cabinbold_italic';
    src: url('../assets/fonts/cabin/cabin-bolditalic-webfont.woff2') format('woff2'),
    url('../assets/fonts/cabin/cabin-bolditalic-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'cabinitalic';
    src: url('../assets/fonts/cabin/cabin-italic-webfont.woff2') format('woff2'),
    url('../assets/fonts/cabin/cabin-italic-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'cabinmedium';
    src: url('../assets/fonts/cabin/cabin-medium-webfont.woff2') format('woff2'),
    url('../assets/fonts/cabin/cabin-medium-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'cabinmedium_italic';
    src: url('../assets/fonts/cabin/cabin-mediumitalic-webfont.woff2') format('woff2'),
    url('../assets/fonts/cabin/cabin-mediumitalic-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'cabinregular';
    src: url('../assets/fonts/cabin/cabin-regular-webfont.woff2') format('woff2'),
    url('../assets/fonts/cabin/cabin-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'cabinsemibold';
    src: url('../assets/fonts/cabin/cabin-semibold-webfont.woff2') format('woff2'),
    url('../assets/fonts/cabin/cabin-semibold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'cabinsemibold_italic';
    src: url('../assets/fonts/cabin/cabin-semibolditalic-webfont.woff2') format('woff2'),
    url('../assets/fonts/cabin/cabin-semibolditalic-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  .iconFooter {
    margin-right: -25px !important;
  }

  .iconHover:hover {
    transform: scale(1.12);
  }

  .navbarTop {
    padding: 24px !important;
  }

  .navbarFooter {
    margin-bottom: -5px !important;
    padding: 24px !important;
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
  a {
    color: #42b983;
  }
</style>
