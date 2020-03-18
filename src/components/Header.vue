<template>
    <header>
        <b-navbar toggleable="lg" class="navbarTop" sticky>
            <div id="divHeader">
                <div id="divNavbarItemsHeader">
                    <div id="divNavbarBrand">
                        <b-navbar-brand><router-link to="/"><b-img id="iconHomeHeaderHome" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/home_icon_48px.png" height="24" width="24" alt="Home icon"></b-img></router-link></b-navbar-brand>
                    </div>
                    <div id="divLogoSpacHeader">
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/logo_nav_header_100px.png" height="33" width="100" alt="spac logo navigation header"></b-img>
                    </div>
                    <Dropdown/>
<!--                    <div id="divDropdownHeader">-->
<!--                        <b-dropdown class="b-dropdown" size="sm" variant="outline-dark" toggle-class="text-decoration-none" no-caret dropleft>-->
<!--                            <template v-slot:button-content>-->
<!--                                <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/menu_icon_48px.png" height="24" width="24" alt="spac brand logo"></b-img>-->
<!--                            </template>-->
<!--                            <b-dropdown-header class="dropdown-header">SPACE</b-dropdown-header>-->
<!--                            <b-dropdown-item class="textRouterLinkHeader"><router-link to="/cometsearch">Comet Search</router-link></b-dropdown-item>-->
<!--                            <b-dropdown-item class="textRouterLinkHeader">Space Weather</b-dropdown-item>-->
<!--                            <b-dropdown-item class="textRouterLinkHeader">Picture of the day</b-dropdown-item>-->
<!--                            <b-dropdown-header class="dropdown-header">MARS</b-dropdown-header>-->
<!--                            <b-dropdown-item class="textRouterLinkHeader">Mars Weather</b-dropdown-item>-->
<!--                            <b-dropdown-item class="textRouterLinkHeader">Photos</b-dropdown-item>-->
<!--                            <b-dropdown-header class="dropdown-header">EARTH</b-dropdown-header>-->
<!--                            <b-dropdown-item class="textRouterLinkHeader">Overview</b-dropdown-item>-->
<!--                            <b-dropdown-item class="textRouterLinkHeader">Local Information</b-dropdown-item>-->
<!--                            <b-dropdown-header class="dropdown-header">ISS</b-dropdown-header>-->
<!--                            <b-dropdown-item class="textRouterLinkHeader">Crew</b-dropdown-item>-->
<!--                            <b-dropdown-item class="textRouterLinkHeader">Current Location</b-dropdown-item>-->
<!--                            <b-dropdown-item class="textRouterLinkHeader">Pass Predictions</b-dropdown-item>-->
<!--                            <b-dropdown-item class="textRouterLinkHeader">Animated Map</b-dropdown-item>-->
<!--                        </b-dropdown>-->
<!--                    </div>-->
                </div>
            </div>
        </b-navbar>
    </header>
</template>

<script>
    import Dropdown from "@/components/Dropdown";
    export default {
        name: "Header",
        components: {Dropdown}
    }
</script>

<style scoped>
    .navbarTop {
        padding: 24px !important;
        width: 100% !important;
    }

    #divHeader {
        width: 100%;
    }

    #divNavbarItemsHeader {
        width: inherit !important;
        justify-content: space-between !important;
        display: flex;
    }

    #divNavbarBrand {
        align-self: auto;
    }

    #divLogoSpacHeader {
        align-self: center;
    }

    #divDropdownHeader {
        align-self: center;
    }

    #iconHomeHeaderHome {
        margin-top: -3px;
        margin-left: -3px;
    }
</style>