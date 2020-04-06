<template>
    <div>
        <div id="divContentHolderMarsWeather">
            <Header/>

            <section id="sectionMarsWeather">
                <div>
                    <b-row class="contentTitle">
                        <b-img class="imageSection" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/mars_weather.png"
                               height="75" width="75" alt="mars weather icon section"></b-img>
                        <p class="titleSection">MARS WEATHER</p>
                    </b-row>
                </div>


                <div>
                    <b-row class="contentDivMarsWeather">
                        <b-img class="imageDivMarsWeather" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/mars_photos.png"
                               height="50" width="50" alt="mars pressure icon"></b-img>
                        <p class="titleDivMarsWeather">Latest forecast</p>
                    </b-row>
                </div>

                <div>
                    <table class="borderTable tableMarsWeather">
                        <tr>
                            <td>
                                <b-img v-b-popover.hover.top.v-dark="{ content: marsWeatherDateEarth }"
                                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/earth_section_logo.png"
                                       height="50" width="50" alt="earth icon"></b-img>
                            </td>
                            <td>
                                <b-img v-b-popover.hover.top.v-dark="{ content: marsWeatherSol }"
                                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/mars_section_logo.png"
                                       height="50" width="50" alt="mars icon"></b-img>
                            </td>
                            <td>
                                <b-img v-b-popover.hover.top.v-dark="{ content: marsWeatherAverage }"
                                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/average_temperature.png"
                                       height="50" width="50" alt="average temperature icon"></b-img>
                            </td>
                            <td>
                                <b-img v-b-popover.hover.top.v-dark="{ content: marsWeatherMaximum }"
                                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/maximum_temperature.png"
                                       height="50" width="50" alt="maximum temperature icon"></b-img>
                            </td>
                            <td>
                                <b-img v-b-popover.hover.top.v-dark="{ content: marsWeatherMinimum }"
                                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/minimum_temperature.png"
                                       height="50" width="50" alt="minimum temperature icon"></b-img>
                            </td>
                            <td>
                                <b-img v-b-popover.hover.top.v-dark="{ content: marsWeatherSeason }"
                                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/mars_season.png"
                                       height="50" width="50" alt="mars season icon"></b-img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Date Earth</p>
                                <p class="pCenterAlignment">{{ allMarsWeather[0][6]._dateEarth }}</p>
                            </td>
                            <td>
                                <p>Sol</p>
                                <p class="pCenterAlignment">{{ allMarsWeather[0][6]._sol }}</p>
                            </td>
                            <td>
                                <p>Average <sup>(°C)</sup></p>
                                <p class="pCenterAlignment">{{ allMarsWeather[0][6]._averageTemp }}</p>
                            </td>
                            <td>
                                <p>Maximum <sup>(°C)</sup></p>
                                <p class="pCenterAlignment">{{ allMarsWeather[0][6]._maximumTemp }}</p>
                            </td>
                            <td>
                                <p>Minimum <sup>(°C)</sup></p>
                                <p class="pCenterAlignment">{{ allMarsWeather[0][6]._minimumTemp }}</p>
                            </td>
                            <td>
                                <p>Season</p>
                                <p class="pCenterAlignment">{{ allMarsWeather[3] }}</p>
                            </td>
                        </tr>
                    </table>
                </div>

                <MarsTemperature/>
                <MarsWind/>
                <MarsPressure/>

            </section>
            <Footer/>
        </div>
    </div>
</template>

<script>
    import Glossary from "@/components/Glossary";
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    import MarsTemperature from "@/components/MarsWeather/MarsTemperature";
    import MarsWind from "@/components/MarsWeather/MarsWind";
    import MarsPressure from "@/components/MarsWeather/MarsPressure";
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "MarsWeather",
        components: {MarsPressure, MarsWind, MarsTemperature, Footer, Header},
        data(){
            return {
                marsWeatherDateEarth:Glossary.methods.data().marsWeatherDateEarth,
                marsWeatherSol:Glossary.methods.data().marsWeatherSol,
                marsWeatherAverage:Glossary.methods.data().marsWeatherAverage,
                marsWeatherMaximum:Glossary.methods.data().marsWeatherMaximum,
                marsWeatherMinimum:Glossary.methods.data().marsWeatherMinimum,
                marsWeatherSeason:Glossary.methods.data().marsWeatherSeason
            }
        },
        methods: {
            ...mapActions(["getMarsWeather"]),
        },
        computed:
            mapGetters(["allMarsWeather"]),
        created() {
            this.getMarsWeather();
        },
    }
</script>

<style>

    .imgCenterAlignment {
        margin: 0 auto !important;
    }

    .pCenterAlignment {
        margin: 5px auto !important;
    }

    .tableMarsWeather {
        margin: 0 auto !important;
        margin-top: 15px !important;
    }

    #sectionMarsWeather {
        margin-bottom: 100px !important
    }

    .bg-b-table-default {
        color: #E2E2E2 !important;
    }

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

    #divContentHolderMarsWeather {
        position: relative;
    }

    #tableMarsWeatherTemperature {
        color: #E2E2E2;
        background-color: #181818;
    }

    .bg-b-table-default {
        background-color: #181818 !important;
    }

    .imageDivMarsWeather {
        margin-left: 100px;
    }

    .titleDivMarsWeather {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left !important;
        font-size: 20px;
        margin-left: 20px;
        margin-top: 10px;
        align-self: self-end;
    }

    .contentDivMarsWeather {
        margin-top: 50px !important;
        margin-left: 45px !important;
    }

    #tableMarsWeatherPressure {
        color: #E2E2E2 !important;
        background-color: #181818 !important;
    }

    .bg-b-table-default {
        background-color: #181818 !important;
    }

</style>