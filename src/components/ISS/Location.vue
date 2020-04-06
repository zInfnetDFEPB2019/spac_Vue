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
            <table class="borderTable locationTable">
                <tr>
                    <td>
                        <b-img v-b-popover.hover.top.v-dark="{ content: issLatitude }"
                               src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/lat.png"
                               height="50" width="50" alt="latitude icon"></b-img>
                    </td>
                    <td>
                        <b-img v-b-popover.hover.top.v-dark="{ content: issLongitude }"
                               src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/long.png"
                               height="50" width="50" alt="longitude icon"></b-img>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Latitude <sup>(Deg)</sup></p>
                        <p class="pCenterAlignment">{{ allISSData.latitude.toFixed(3) }}</p>
                    </td>
                    <td>
                        <p>Longitude <sup>(Deg)</sup></p>
                        <p class="pCenterAlignment">{{ allISSData.longitude.toFixed(3) }}</p>
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
        name: "Location",
        methods: {
            ...mapActions(["getISSData"]),
        },
        computed:
            mapGetters(["allISSData"]),
        created() {
            this.getISSData();
        },
        data(){
            return {
                issLatitude:Glossary.methods.data().issLatitude,
                issLongitude:Glossary.methods.data().issLongitude
            }
        }
    }
</script>

<style scoped>

    .pCenterAlignment {
        margin: 5px auto !important;
    }

    .locationTable {
        margin: 0 auto !important;
        margin-top: 20px !important;
    }

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