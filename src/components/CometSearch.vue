<template>
    <div>
        <div style="position: relative">
            <header>
                <b-navbar toggleable="lg" class="navbarTop" sticky style="width: 100% !important;">
                    <div style="width: 100%">
                        <div style="width: inherit !important; justify-content: space-between !important; display: flex">
                            <div style="align-self: auto">
                                <b-navbar-brand href="#"><img src="../assets/img/home_icon_48px.png" height="24" width="24" alt="Home icon"/></b-navbar-brand>
                            </div>
                            <div style="align-self: center">
                                <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/logo_nav_header_100px.png" height="33" width="100" alt="spac logo navigation header"></b-img>
                            </div>
                            <div style="align-self: center">
                                <b-dropdown class="b-dropdown" size="sm" variant="outline-dark" toggle-class="text-decoration-none" no-caret dropleft>
                                <template v-slot:button-content>
                                    <img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/menu_icon_48px.png" height="24" width="24" alt="spac brand logo"/>
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
                            </b-dropdown></div>
                        </div>
                    </div>
                </b-navbar>
            </header>
            <section>
                <div>
                    <b-row class="contentTitle">
                        <b-img class="imageSection" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/comet_search.png" height="75" width="75" alt="comet search icon section"></b-img>
                        <p class="titleSection">COMET SEARCH</p>
                    </b-row>
                </div>

                <div>
                    <b-form-row style="border:1px solid red ; justify-content: center; align-items: center">
                        <b-col cols="3">
                            <b-form-group label-cols="4" label-cols-lg="2" label-size="sm"
                                             id="firstDate"
                                             label="Start:"
                                             label-for="input_firstDate">

                            <b-form-datepicker id="input_firstDate"
                                               v-model="value"
                                               class="mb-2"
                                               size="sm"
                                               dark="true"></b-form-datepicker>
                        </b-form-group>
                        </b-col>
                        <b-col cols="3">
                            <b-form-group label-cols="4" label-cols-lg="2" label-size="sm"
                                          id="secondDate"
                                          label="End:"
                                          label-for="input_secondDate">

                                <b-form-datepicker id="input_secondDate"
                                                   v-model="value"
                                                   class="mb-2"
                                                   size="sm"
                                                   dark="true"></b-form-datepicker>
                            </b-form-group>
                        </b-col>
                        <b-col cols="1">
                            <b-button type="submit" class="buttonCometSearch" variant="dark"><b-img style="margin-top: -6px" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/magnifier_icon_24px.png" width="18" height="18" alt="magnifier icon for search comet button"></b-img></b-button>
                        </b-col>
                    </b-form-row>

                </div>
            </section>
            <footer>
                <b-navbar toggleable="lg" class="navbarFooter" fixed="bottom">
                    <b-navbar-brand href="#"><b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/developer_icon_48px.png" height="24" width="24" alt="Home icon"/></b-navbar-brand>
                    <p style="opacity: 0.25;margin-top: 20px;">Developed by Christian Vajgel</p>

                    <b-navbar-nav class="ml-auto">
                        <b-nav>
                            <b-nav-item><a href="https://www.linkedin.com/in/christianvajgel/"><b-img class="iconFooter iconHover" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/linkedin_logo_48px.png" height="24" width="24" alt="spac brand logo"/></a></b-nav-item>
                            <b-nav-item><a href="https://github.com/christianvajgel"><b-img class="iconFooter iconHover" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/github_icon_48px.png" height="24" width="24" alt="spac brand logo"/></a></b-nav-item>
                            <b-nav-item><a href="https://t.me/vajgel"><b-img class="iconHover" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/telegram_icon_48px.png" height="24" width="24" alt="spac brand logo"/></a></b-nav-item>
                        </b-nav>
                    </b-navbar-nav>
                </b-navbar>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CometSearch",
    }
</script>

<style>

    .imageSection {
        margin-left: 50px;
    }

    .titleSection {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left !important;
        font-size: 30px;
        margin-left: 25px;
        align-self: self-end;
    }

    .contentTitle {
        margin-top: 5px !important;
        margin-left: 25px !important;
    }

    .row {
        margin: 0;
    }

    .form-row  {
        margin: 0;
    }

    .buttonCometSearch {
        transform: scale(0.80);
    }
</style>