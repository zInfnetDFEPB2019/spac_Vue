<template>
    <div>
        <div id="divContentHolderEarthOverview">
            <Header/>
            <section id="sectionEarthOverview">
                <div>
                    <b-row class="contentTitle">
                        <b-img class="imageSection" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/overview.png"
                               height="75" width="75" alt="earth section logo"></b-img>
                        <p class="titleSection">EARTH OVERVIEW</p>
                    </b-row>
                </div>

                <div>
                    <table class="borderTable tableInfoEarthOverview">
                        <tr>
                            <td>
                                <b-img v-b-popover.hover.top.v-dark="{ content: earthMass }"
                                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/earth_section_logo.png"
                                       height="50" width="50" alt="earth icon"></b-img>
                            </td>
                            <td>
                                <b-img v-b-popover.hover.top.v-dark="{ content: earthVolume }"
                                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/volume.png"
                                       height="50" width="50" alt="earth volume icon"></b-img>
                            </td>
                            <td>
                                <b-img v-b-popover.hover.top.v-dark="{ content: earthDensity }"
                                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/density.png"
                                       height="50" width="50" alt="earth materials density icon"></b-img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p class="pCenterAlignment">Mass<br><sup>(kg)</sup></p>
                                <p class="pCenterAlignment">{{ allEarthData.mass.massValue }}<sup>{{ allEarthData.mass.massExponent }}</sup></p>
                            </td>
                            <td>
                                <p class="pCenterAlignment">Volume<br><sup>(km3)</sup></p>
                                <p class="pCenterAlignment">{{ allEarthData.vol.volValue }}<sup>{{ allEarthData.vol.volExponent }}</sup></p>
                            </td>
                            <td>
                                <p class="pCenterAlignment">Density<br><sup>(g/cm3)</sup></p>
                                <p class="pCenterAlignment">{{ allEarthData.density }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b-img v-b-popover.hover.top.v-dark="{ content: earthGravity }"
                                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/gravity.png"
                                       height="50" width="50" alt="earth gravity icon"></b-img>
                            </td>
                            <td>
                                <b-img v-b-popover.hover.top.v-dark="{ content: earthEscape }"
                                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/escape.png"
                                       height="50" width="50" alt="earth escape icon"></b-img>
                            </td>
                            <td>
                                <b-img v-b-popover.hover.top.v-dark="{ content: earthInclination }"
                                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/inclination.png"
                                       height="50" width="50" alt="mars season icon"></b-img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p class="pCenterAlignment">Gravity<br><sup>(m/s2)</sup></p>
                                <p class="pCenterAlignment">{{ allEarthData.gravity }}</p>
                            </td>
                            <td>
                                <p class="pCenterAlignment">Escape<br><sup>(km/s)</sup></p>
                                <p class="pCenterAlignment">{{ allEarthData.escape / 1000 }}</p>
                            </td>
                            <td>
                                <p class="pCenterAlignment">Inclination<br><sup>(Deg)</sup></p>
                                <p class="pCenterAlignment">{{ allEarthData.inclination }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b-img v-b-popover.hover.top.v-dark="{ content: earthRadius }"
                                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/radius.png"
                                       height="50" width="50" alt="earth gravity icon"></b-img>
                            </td>
                            <td>
                                <b-img v-b-popover.hover.top.v-dark="{ content: earthSiderealOrbit }"
                                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/sideral_orbit.png"
                                       height="50" width="50" alt="earth escape icon"></b-img>
                            </td>
                            <td>
                                <b-img v-b-popover.hover.top.v-dark="{ content: earthSiderealRotation }"
                                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/sideral_rotation.png"
                                       height="50" width="50" alt="mars season icon"></b-img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p class="pCenterAlignment">Earth<br>Radius<br><sup>(km)</sup></p>
                                <p class="pCenterAlignment">{{ allEarthData.meanRadius }}</p>
                            </td>
                            <td>
                                <p class="pCenterAlignment">Sidereal<br>Orbit<br><sup>(Days)</sup></p>
                                <p class="pCenterAlignment">{{ allEarthData.sideralOrbit }}</p>
                            </td>
                            <td>
                                <p class="pCenterAlignment">Sidereal<br>Rotation<br><sup>(Hours)</sup></p>
                                <p class="pCenterAlignment">{{ allEarthData.sideralRotation }}</p>
                            </td>
                        </tr>
                    </table>
                </div>

            </section>
            <Footer/>
        </div>
    </div>
</template>

<script>
    import Glossary from "@/components/Glossary";
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "Overview",
        components: {Footer, Header},
        data(){
            return {
                earthMass:Glossary.methods.data().earthMass,
                earthVolume:Glossary.methods.data().earthVolume,
                earthDensity:Glossary.methods.data().earthDensity,
                earthGravity:Glossary.methods.data().earthGravity,
                earthEscape:Glossary.methods.data().earthEscape,
                earthInclination:Glossary.methods.data().earthInclination,
                earthRadius:Glossary.methods.data().earthRadius,
                earthSiderealOrbit:Glossary.methods.data().earthSiderealOrbit,
                earthSiderealRotation:Glossary.methods.data().earthSiderealRotation
            }
        },
        methods: {
            ...mapActions(["getEarthData"]),
        },
        computed:
            mapGetters(["allEarthData"]),
        created() {
            this.getEarthData();
        },
    }
</script>

<style scoped>

    .imgCenterAlignment {
        margin: 0 auto !important;
    }

    .pCenterAlignment {
        margin: 5px auto !important;
    }

    .dark,.popover,.b-popover,.bs-popover-top,.b-popover-body,.arrow,.bs-popover-auto {
        border-color: #E2E2E2 !important;
        background-color: #E2E2E2 !important;
        color: white !important;
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
        margin-top: 5px !important;
        align-self: self-end;
    }

    .contentTitle {
        margin-top: 5px !important;
        margin-left: 25px !important;
    }

    #divContentHolderEarthOverview {
        position: relative;
    }

    .bg-b-table-default {
        background-color: #181818 !important;
    }

    #sectionEarthOverview {
        margin-bottom: 100px !important;
    }

    .tableInfoEarthOverview{
        margin: 0 auto !important;
        margin-top: 25px;
    }
</style>