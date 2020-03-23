<template>
    <div>
        <div>
            <b-row class="contentDivISSLocation">
                <b-img class="imageDivISSLocation"
                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/pass_predictions.png"
                       height="50" width="50" alt="metrics icon"></b-img>
                <p class="titleDivISSLocation">Location</p>
        </b-row>
        </div>

        <div>
            <table align="center">
                <tr>
                    <td>
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/lat.png"
                               height="50" width="50" alt="latitude icon"></b-img>
                    </td>
                    <td>
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/long.png"
                               height="50" width="50" alt="longitude icon"></b-img>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Latitude</p>
                        <p>{{ allISSData.latitude.toFixed(3) }}</p>
                    </td>
                    <td>
                        <p>Longitude</p>
                        <p>{{ allISSData.longitude.toFixed(3) }}</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        name: "Location",
        methods: {
            ...mapActions(["getISSData"]),
        },
        computed:
            mapGetters(["allISSData"]),
        created() {
            this.getISSData();
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

    .imageDivISSLocation {
        margin-left: 100px;
    }

    .titleDivISSLocation {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left !important;
        font-size: 20px;
        margin-left: 20px;
        margin-top: 8px;
        align-self: self-end;
    }

    .contentDivISSLocation {
        margin-top: 50px !important;
        margin-left: 300px !important;
    }
</style>