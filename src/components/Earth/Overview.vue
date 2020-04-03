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
                    <table align="center" class="borderTable tableInfoEarthOverview">
                        <tr>
                            <td>
                                <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/earth_section_logo.png"
                                       height="50" width="50" alt="earth icon"></b-img>
                            </td>
                            <td>
                                <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/volume.png"
                                       height="50" width="50" alt="earth volume icon"></b-img>
                            </td>
                            <td>
                                <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/density.png"
                                       height="50" width="50" alt="earth materials density icon"></b-img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Mass <sup>(kg)</sup></p>
                                <p>{{ allEarthData.mass.massValue }}<sup>{{ allEarthData.mass.massExponent }}</sup></p>
                            </td>
                            <td>
                                <p>Volume <sup>(km3)</sup></p>
                                <p>{{ allEarthData.vol.volValue }}<sup>{{ allEarthData.vol.volExponent }}</sup></p>
                            </td>
                            <td>
                                <p>Density <sup>(g/cm3)</sup></p>
                                <p>{{ allEarthData.density }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/gravity.png"
                                       height="50" width="50" alt="earth gravity icon"></b-img>
                            </td>
                            <td>
                                <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/escape.png"
                                       height="50" width="50" alt="earth escape icon"></b-img>
                            </td>
                            <td>
                                <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/inclination.png"
                                       height="50" width="50" alt="mars season icon"></b-img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Gravity <sup>(m/s2)</sup></p>
                                <p>{{ allEarthData.gravity }}</p>
                            </td>
                            <td>
                                <p>Escape <sup>(km/s)</sup></p>
                                <p>{{ allEarthData.escape / 1000 }}</p>
                            </td>
                            <td>
                                <p>Inclination <sup>(Deg)</sup></p>
                                <p>{{ allEarthData.inclination }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/radius.png"
                                       height="50" width="50" alt="earth gravity icon"></b-img>
                            </td>
                            <td>
                                <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/sideral_orbit.png"
                                       height="50" width="50" alt="earth escape icon"></b-img>
                            </td>
                            <td>
                                <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/sideral_rotation.png"
                                       height="50" width="50" alt="mars season icon"></b-img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Radius <sup>(km)</sup></p>
                                <p>{{ allEarthData.meanRadius }}</p>
                            </td>
                            <td>
                                <p>Sideral Orbit <sup>(Days)</sup></p>
                                <p>{{ allEarthData.sideralOrbit }}</p>
                            </td>
                            <td>
                                <p>Sideral Rotation <sup>(Hours)</sup></p>
                                <p>{{ allEarthData.sideralRotation }}</p>
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
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "Overview",
        components: {Footer, Header},
        data() {
            return {
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

    .p {
        margin: 0 auto !important;
        /*border: 1px solid red;*/
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
        margin-top: 25px;
    }
</style>