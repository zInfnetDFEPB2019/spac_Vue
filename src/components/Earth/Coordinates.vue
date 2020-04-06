<template>
    <div>
        <div>
            <b-row class="contentDivEarthLocalInformationCoordinates">
                <b-img class="imageDivEarthLocalInformationCoordinates"
                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/latlong_2.png"
                       height="50" width="50" alt="coordinates icon"></b-img>
                <p class="titleDivEarthLocalInformationCoordinates">Coordinates</p>
        </b-row>
        </div>

        <div>
            <table class="borderTable coordinatesTable">
                <tr>
                    <td>
                        <b-img v-b-popover.hover.top.v-dark="{ content: latitude }"
                               src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/latitude.png"
                               height="50" width="50" alt="latitude text icon"></b-img>
                    </td>
                    <td>
                        <b-img v-b-popover.hover.top.v-dark="{ content: longitude }"
                               src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/longitude.png"
                               height="50" width="50" alt="longitude text icon"></b-img>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Latitude <sup>(Deg)</sup></p>
                        <p class="pCenterAlignment">{{ allGeolocationData.location.latitude.toFixed(3) }}</p>
                    </td>
                    <td>
                        <p>Longitude <sup>(Deg)</sup></p>
                        <p class="pCenterAlignment">{{ allGeolocationData.location.longitude.toFixed(3) }}</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import Glossary from "@/components/Glossary";
    import { mapGetters, mapActions } from "vuex";
    export default {
        name: "Coordinates",
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
                latitude:Glossary.methods.data().latitude,
                longitude:Glossary.methods.data().longitude
            }
        }
    }
</script>

<style scoped>

    .pCenterAlignment {
        margin: 5px auto !important;
    }

    .coordinatesTable {
        margin: 0 auto !important;
        margin-top: 15px !important;
    }

    td {
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 15px;
        padding-top: 15px;
    }

    .imageDivEarthLocalInformationCoordinates {
        margin-left: 100px;
    }

    .titleDivEarthLocalInformationCoordinates {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left !important;
        font-size: 20px;
        margin-left: 20px;
        margin-top: 7px;
        align-self: self-end;
    }

    .contentDivEarthLocalInformationCoordinates {
        margin-top: 50px !important;
        margin-left: 300px !important;
    }

</style>