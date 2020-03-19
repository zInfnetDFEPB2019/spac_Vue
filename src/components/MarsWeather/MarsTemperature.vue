<template>
    <div>
        <div>
            <b-row class="contentDivMarsWeatherTemperature">
            <b-img class="imageDivMarsWeatherTemperature" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/mars_temperature.png"
                   height="50" width="50" alt="mars temperature icon"></b-img>
            <p class="titleDivMarsWeatherTemperature">Temperature <sup>(ºC)</sup></p>
        </b-row>
        </div>

        <div class="container" id="divContainerTableMarsWeatherTemperature">
            <b-table sticky-header=true id="tableMarsWeatherTemperature" borderless hover :items="items" :fields="fields" dark="true" responsive=true>
            </b-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MarsTemperature",
        components: {},
        data() {
            return {
                fields: [
                    {key:'Date',sortable: true},
                    {key:'Sol',sortable: true},
                    {key:'Average',sortable: true},
                    {key:'Maximum',sortable: true},
                    {key:'Minimum',sortable: true},
                    {key:'Samples',sortable: true},
                ],
                items: [
                    {Date:'03/03/2020',Sol:'451',Average:'-62.174',Maximum:'-10.329',Minimum:'-93.563',Samples:'274075'},
                    {Date:'04/03/2020',Sol:'452',Average:'-58.657',Maximum:'-9.202',Minimum:'-94.25',Samples:'305838'},
                    {Date:'05/03/2020',Sol:'453',Average:'-59.785',Maximum:'-10.765',Minimum:'-95.073',Samples:'259908'},
                    {Date:'06/03/2020',Sol:'454',Average:'-61.741',Maximum:'-12.515',Minimum:'-95.909',Samples:'180534'},
                    {Date:'07/03/2020',Sol:'455',Average:'-63.987',Maximum:'-12.801',Minimum:'-95.437',Samples:'300454'},
                    {Date:'08/03/2020',Sol:'456',Average:'-61.451',Maximum:'-9.595',Minimum:'-94.59',Samples:'177554'},
                    {Date:'09/03/2020',Sol:'457',Average:'-59.117',Maximum:'-9.105',Minimum:'-95.712',Samples:'310592'}
                ]
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