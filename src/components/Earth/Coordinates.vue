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
            <table align="center" class="borderTable">
                <tr>
                    <td>
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/latitude.png"
                               height="50" width="50" alt="latitude text icon"></b-img>
                    </td>
                    <td>
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/longitude.png"
                               height="50" width="50" alt="longitude text icon"></b-img>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>{{ allGeolocationData.location.latitude.toFixed(3) }}</p>
                    </td>
                    <td>
                        <p>{{ allGeolocationData.location.longitude.toFixed(3) }}</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
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