<template>
    <div>
        <div>
            <b-row class="contentDivMarsWeatherWind">
            <b-img class="imageDivMarsWeatherWind" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/mars_wind.png"
                   height="50" width="50" alt="mars wind icon"></b-img>
                <p class="titleDivMarsWeatherWind">Wind <sup>(m/s)</sup></p>
        </b-row>
        </div>

        <div class="container borderTable" id="divContainerTableMarsWeatherWind">
            <b-table sticky-header=true id="tableMarsWeatherWind" borderless hover :items="allMarsWeather[1]" :fields="fields" :dark="true" responsive=true>
            </b-table>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        name: "MarsWind",
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
                    {key:'averageWind',sortable: true,label:'Average'},
                    {key:'maximumWind',sortable: true,label:'Maximum'},
                    {key:'minimumWind',sortable: true,label:'Minimum'},
                    {key:'samplesWind',sortable: true,label:'Samples'},
                ],
            }
        },
    }
</script>

<style>
    .imageDivMarsWeatherWind {
        margin-left: 100px;
    }

    .titleDivMarsWeatherWind {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left !important;
        font-size: 20px;
        margin-left: 20px;
        margin-top: 6px;
        align-self: self-end;
    }

    .contentDivMarsWeatherWind {
        margin-top: 50px !important;
        margin-left: 45px !important;
    }

    #tableMarsWeatherWind {
        color: #E2E2E2;
        background-color: #181818;
    }

    .bg-b-table-default {
        background-color: #181818 !important;
    }

    #divContainerTableMarsWeatherWind {
        margin-top: 25px;
    }
</style>