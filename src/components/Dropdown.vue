<template>
    <div id="divDropdown">
        <b-dropdown class="b-dropdown" size="sm" variant="outline-dark" toggle-class="text-decoration-none" no-caret dropleft>
            <template v-slot:button-content>
                <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/menu_icon_48px.png"
                       height="24" width="24" alt="spac brand logo">
                </b-img>
            </template>
            <b-dropdown-header class="dropdown-header">SPACE</b-dropdown-header>
            <b-dropdown-item v-b-popover.hover.left.v-dark="{ content: 'Search for comets between dates.' }"
                             class="textRouterLinkHeader"><router-link to="/cometsearch">Comet Search</router-link></b-dropdown-item>
            <b-dropdown-item v-b-popover.hover.left.v-dark="{ content: 'Daily handpicked images from Space.' }"
                             class="textRouterLinkHeader"><router-link to="/pictureoftheday">Picture of the day</router-link></b-dropdown-item>
            <b-dropdown-header class="dropdown-header">MARS</b-dropdown-header>
            <b-dropdown-item v-b-popover.hover.left.v-dark="{ content: 'Weather forecast from the Red Planet.' }"
                             class="textRouterLinkHeader"><router-link to="/marsweather">Mars Weather</router-link></b-dropdown-item>
            <b-dropdown-header class="dropdown-header">EARTH</b-dropdown-header>
            <b-dropdown-item v-b-popover.hover.left.v-dark="{ content: 'Overview data of Earth.' }"
                             class="textRouterLinkHeader"><router-link to="/overview">Overview</router-link></b-dropdown-item>
            <b-dropdown-item v-b-popover.hover.left.v-dark="{ content: 'Astronomical data of your location.' }"
                             class="textRouterLinkHeader"><router-link to="/localinformation">Local Information</router-link></b-dropdown-item>
            <b-dropdown-item v-b-popover.hover.left.v-dark="{ content: 'Magnetic field data of your location.' }"
                             class="textRouterLinkHeader"><router-link to="/magneticfield">Magnetic Field</router-link></b-dropdown-item>
            <b-dropdown-item v-b-popover.hover.left.v-dark="{ content: 'Catalogued comets which fell on Earth.' }"
                             class="textRouterLinkHeader"><router-link to="/feltonearth">Felt on Earth</router-link></b-dropdown-item>
            <b-dropdown-header class="dropdown-header">ISS</b-dropdown-header>
            <b-dropdown-item v-b-popover.hover.left.v-dark="{ content: 'Real time ISS information.' }"
                             class="textRouterLinkHeader"><router-link to="/iss">Overview</router-link></b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
    export default {
        name: "Dropdown"
    }
</script>

<style scoped>
    #divDropdown {
        align-self: center;
    }

    .dropdown-header {
        color: #E2E2E2 !important;
        font-size: 16px !important;
        text-align: center !important;
        font-weight: bold;
    }

    .textRouterLinkHeader a {
        color: #E2E2E2;
    }

    .textRouterLinkHeader a:hover {
        color: #E2E2E2;
        text-decoration: none;
    }
</style>