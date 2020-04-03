<template>
    <div>
        <div>
            <b-row class="contentDivMarsWeatherTemperature">
            <b-img class="imageDivMarsWeatherTemperature" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/mars_temperature.png"
                   height="50" width="50" alt="mars temperature icon"></b-img>
            <p class="titleDivMarsWeatherTemperature">Temperature <sup>(ºC)</sup></p>
        </b-row>
        </div>

        <div class="container borderTable" id="divContainerTableMarsWeatherTemperature">
            <b-table sticky-header=true id="tableMarsWeatherTemperature" borderless hover :items="allMarsWeather[0]" :fields="fields" :dark="true" responsive=true>
            </b-table>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        name: "MarsTemperature",
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
                    {key:'averageTemp',sortable: true,label:'Average'},
                    {key:'maximumTemp',sortable: true,label:'Maximum'},
                    {key:'minimumTemp',sortable: true,label:'Minimum'},
                    {key:'samplesTemp',sortable: true,label:'Samples'},
                ],
            }
        },
    }
</script>

<style scoped>
    .imageDivMarsWeatherTemperature {
        margin-left: 100px;
    }

    .titleDivMarsWeatherTemperature {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left !important;
        font-size: 20px;
        margin-left: 20px;
        margin-top: 7px;
        align-self: self-end;
    }

    .contentDivMarsWeatherTemperature {
        margin-top: 50px !important;
        margin-left: 45px !important;
    }

    #tableMarsWeatherTemperature {
        color: #E2E2E2;
        background-color: #181818;
    }

    .bg-b-table-default {
        background-color: #181818 !important;
    }

    #divContainerTableMarsWeatherTemperature {
        margin-top: 25px;
    }
</style>