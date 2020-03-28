<template>
    <div>
        <div>
            <b-row class="contentDivEarthLocalInformationMoon">
                <b-img class="imageDivEarthLocalInformationMoon"
                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/moon_info.png"
                       height="50" width="50" alt="sun info icon"></b-img>
                <p class="titleDivEarthLocalInformationMoon">Moon</p>
        </b-row>
        </div>

        <div>
            <table align="center">
                <tr>
                    <td>
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/moonrise.png"
                               height="50" width="50" alt="moonrise icon"></b-img>
                    </td>
                    <td>
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/moonset.png"
                               height="50" width="50" alt="moonset icon"></b-img>
                    </td>
                    <td>
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/moon_distance.png"
                               height="50" width="50" alt="moon distance icon"></b-img>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Moonrise</p>
                        <p>{{ allGeolocationData.moonrise }}</p>
                    </td>
                    <td>
                        <p>Moonset</p>
                        <p>{{ allGeolocationData.moonset }}</p>
                    </td>
                    <td>
                        <p>Moon Distance</p>
                        <p>{{ allGeolocationData.moon_distance.toFixed(2) }} km</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        name: "Moon",
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

    .imageDivEarthLocalInformationMoon {
        margin-left: 100px;
    }

    .titleDivEarthLocalInformationMoon {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left !important;
        font-size: 20px;
        margin-left: 20px;
        margin-top: 7px;
        align-self: self-end;
    }

    .contentDivEarthLocalInformationMoon {
        margin-top: 50px !important;
        margin-left: 300px !important;
    }
</style>