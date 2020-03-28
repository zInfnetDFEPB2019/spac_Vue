<template>
    <div>
        <div>
            <b-row class="contentDivISSMetrics">
                <b-img class="imageDivISSMetrics"
                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/metrics.png"
                       height="50" width="50" alt="metrics icon"></b-img>
                <p class="titleDivISSMetrics">Metrics</p>
            </b-row>
        </div>

        <div>
            <table align="center">
                <tr>
                    <td>
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/iss_altitude.png"
                               height="50" width="50" alt="iss altitude icon"></b-img>
                    </td>
                    <td>
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/iss_velocity.png"
                               height="50" width="50" alt="iss velocity icon"></b-img>
                    </td>
                    <td>
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/iss_visibility.png"
                               height="50" width="50" alt="iss visibility icon"></b-img>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Altitude</p>
                        <p> {{ allISSData.altitude.toFixed(2) }} km</p>
                    </td>
                    <td>
                        <p>Velocity</p>
                        <p> {{ allISSData.velocity.toFixed(2) }} km/h</p>
                    </td>
                    <td>
                        <p>Visibility</p>
                        <p>{{ allISSData.visibility.charAt(0).toUpperCase() }}{{ allISSData.visibility.slice(1) }}</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        name: "Metrics",
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

    .imageDivISSMetrics {
        margin-left: 100px;
    }

    .titleDivISSMetrics {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left !important;
        font-size: 20px;
        margin-left: 15px;
        margin-top: 7px;
        align-self: self-end;
    }

    .contentDivISSMetrics {
        margin-top: 50px !important;
        margin-left: 300px !important;
    }
</style>