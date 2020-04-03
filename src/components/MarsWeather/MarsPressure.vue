<template>
    <div>
        <div>
            <b-row class="contentDivMarsWeatherPressure">
            <b-img class="imageDivMarsWeatherPressure" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/mars_pressure.png"
                   height="50" width="50" alt="mars pressure icon"></b-img>
                <p class="titleDivMarsWeatherPressure">Pressure <sup>(Pa)</sup></p>
            </b-row>
        </div>

        <div class="container borderTable" id="divContainerTableMarsWeatherPressure">
            <b-table sticky-header=true id="tableMarsWeatherPressure" borderless hover :items="allMarsWeather[2]" :fields="fields" :dark="true" responsive=true>
            </b-table>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        name: "MarsPressure",
        components: {},
        methods: {
            ...mapActions(["getMarsWeather"]),
        },
        computed:
            mapGetters(["allMarsWeather"]),
        created() {
            this.getMarsWeather();
        },
        data() {
            return {
                fields: [
                    {key:'dateEarth',sortable: true,label:'Date Earth'},
                    {key:'sol',sortable: true,label:'Sol'},
                    {key:'averagePressure',sortable: true,label:'Average'},
                    {key:'maximumPressure',sortable: true,label:'Maximum'},
                    {key:'minimumPressure',sortable: true,label:'Minimum'},
                    {key:'samplesPressure',sortable: true,label:'Samples'},
                ],
            }
        },
    }
</script>

<style>

    .imageDivMarsWeatherPressure {
        margin-left: 100px;
    }

    .titleDivMarsWeatherPressure {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left !important;
        font-size: 20px;
        margin-left: 20px;
        margin-top: 6px;
        align-self: self-end;
    }

    .contentDivMarsWeatherPressure {
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

    #divContainerTableMarsWeatherPressure {
        margin-top: 25px;
    }
</style>