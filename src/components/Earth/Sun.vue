<template>
    <div>
        <div>
            <b-row class="contentDivEarthLocalInformationSun">
                <b-img class="imageDivEarthLocalInformationSun"
                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/sun_info.png"
                       height="50" width="50" alt="sun info icon"></b-img>
                <p class="titleDivEarthLocalInformationSun">Sun</p>
        </b-row>
        </div>

        <div>
            <table align="center">
                <tr>
                    <td>
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/sunrise.png"
                               height="50" width="50" alt="sunrise icon"></b-img>
                    </td>
                    <td>
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/sunset.png"
                               height="50" width="50" alt="sunset icon"></b-img>
                    </td>
                    <td>
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/day_length.png"
                               height="50" width="50" alt="day length icon"></b-img>
                    </td>
                    <td>
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/solar_noon_2.png"
                               height="50" width="50" alt="solar noon icon"></b-img>
                    </td>
                    <td>
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/sun_distance.png"
                               height="50" width="50" alt="sun distance icon"></b-img>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Sunrise</p>
                        <p>{{ allGeolocationData.sunrise }}</p>
                    </td>
                    <td>
                        <p>Sunset</p>
                        <p>{{ allGeolocationData.sunset }}</p>
                    </td>
                    <td>
                        <p>Day Length</p>
                        <p>{{ allGeolocationData.day_length }}</p>
                    </td>
                    <td>
                        <p>Solar Noon</p>
                        <p>{{ allGeolocationData.solar_noon }}</p>
                    </td>
                    <td>
                        <p>Sun Distance</p>
                        <p>{{ allGeolocationData.sun_distance.toFixed(2) }} km</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        name: "Sun",
        methods: {
            ...mapActions(["getGeolocationData"]),
        },
        computed:
            mapGetters(["allGeolocationData"]),
        created() {
            this.getGeolocationData();
        }
    }
</script>

<style scoped>
    td {
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 15px;
        padding-top: 15px;
    }

    .imageDivEarthLocalInformationSun {
        margin-left: 100px;
    }

    .titleDivEarthLocalInformationSun {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left !important;
        font-size: 20px;
        margin-left: 20px;
        margin-top: 7px;
        align-self: self-end;
    }

    .contentDivEarthLocalInformationSun {
        margin-top: 50px !important;
        margin-left: 300px !important;
    }
</style>