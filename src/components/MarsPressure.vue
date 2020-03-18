<template>
    <div>
        <div>
            <b-row class="contentDivMarsWeatherPressure">
            <b-img class="imageDivMarsWeatherPressure" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/mars_pressure.png"
                   height="50" width="50" alt="mars pressure icon"></b-img>
                <p class="titleDivMarsWeatherPressure">Pressure <sup>(Pa)</sup></p>
        </b-row>
        </div>

        <div class="container" id="divContainerTableMarsWeatherPressure">
            <b-table sticky-header=true id="tableMarsWeatherPressure" borderless hover :items="items" :fields="fields" dark="true" responsive=true>
            </b-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MarsPressure",
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
                    {Date:'03/03/2020',Sol:'451',Average:'631.261',Maximum:'656.4275',Minimum:'604.8079',Samples:'154445'},
                    {Date:'04/03/2020',Sol:'452',Average:'630.648',Maximum:'655.3423',Minimum:'605.4033',Samples:'152934'},
                    {Date:'05/03/2020',Sol:'453',Average:'631.85',Maximum:'657.5156',Minimum:'605.2925',Samples:'134903'},
                    {Date:'06/03/2020',Sol:'454',Average:'633.904',Maximum:'660.2834',Minimum:'606.4938',Samples:'90304'},
                    {Date:'07/03/2020',Sol:'455',Average:'632.261',Maximum:'661.5576',Minimum:'605.5313',Samples:'131421'},
                    {Date:'08/03/2020',Sol:'456',Average:'633.878',Maximum:'661.1274',Minimum:'604.3935',Samples:'88777'},
                    {Date:'09/03/2020',Sol:'457',Average:'633.451',Maximum:'661.1479',Minimum:'604.9464',Samples:'154584'}
                ]
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