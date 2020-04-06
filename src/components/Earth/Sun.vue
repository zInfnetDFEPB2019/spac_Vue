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
            <table class="borderTable sunTable">
                <tr>
                    <td>
                        <b-img v-b-popover.hover.top.v-dark="{ content: sunrise }"
                               src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/sunrise.png"
                               height="50" width="50" alt="sunrise icon"></b-img>
                    </td>
                    <td>
                        <b-img v-b-popover.hover.top.v-dark="{ content: sunset }"
                               src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/sunset.png"
                               height="50" width="50" alt="sunset icon"></b-img>
                    </td>
                    <td>
                        <b-img v-b-popover.hover.top.v-dark="{ content: dayLength }"
                               src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/day_length.png"
                               height="50" width="50" alt="day length icon"></b-img>
                    </td>
                    <td>
                        <b-img v-b-popover.hover.top.v-dark="{ content: solarNoon }"
                               src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/solar_noon_2.png"
                               height="50" width="50" alt="solar noon icon"></b-img>
                    </td>
                    <td>
                        <b-img v-b-popover.hover.top.v-dark="{ content: sunDistance }"
                               src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/sun_distance.png"
                               height="50" width="50" alt="sun distance icon"></b-img>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Sunrise</p>
                        <p class="pCenterAlignment">{{ allGeolocationData.sunrise }}</p>
                    </td>
                    <td>
                        <p>Sunset</p>
                        <p class="pCenterAlignment">{{ allGeolocationData.sunset }}</p>
                    </td>
                    <td>
                        <p>Day Length <sup>(h:min)</sup></p>
                        <p class="pCenterAlignment">{{ allGeolocationData.day_length }}</p>
                    </td>
                    <td>
                        <p>Solar Noon</p>
                        <p class="pCenterAlignment">{{ allGeolocationData.solar_noon }}</p>
                    </td>
                    <td>
                        <p>Sun Distance <sup>(km)</sup></p>
                        <p class="pCenterAlignment">{{ allGeolocationData.sun_distance.toFixed(2) }}</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import Glossary from "@/components/Glossary";
    export default {
        name: "Sun",
        methods: {
            ...mapActions(["getGeolocationData"]),
        },
        computed:
            mapGetters(["allGeolocationData"]),
        created() {
            this.getGeolocationData();
        },
        data(){
            return {
                sunrise:Glossary.methods.data().sunrise,
                sunset:Glossary.methods.data().sunset,
                dayLength:Glossary.methods.data().dayLength,
                solarNoon:Glossary.methods.data().solarNoon,
                sunDistance:Glossary.methods.data().sunDistance
            }
        }
    }
</script>

<style scoped>

    .sunTable {
        margin: 0 auto !important;
        margin-top: 15px !important;
    }

    .pCenterAlignment {
        margin: 5px auto !important;
    }

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