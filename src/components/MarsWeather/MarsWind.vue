<template>
    <div>
        <div>
            <b-row class="contentDivMarsWeatherWind">
            <b-img class="imageDivMarsWeatherWind" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/mars_wind.png"
                   height="50" width="50" alt="mars wind icon"></b-img>
                <p class="titleDivMarsWeatherWind">Wind <sup>(m/s)</sup></p>
        </b-row>
        </div>

        <div class="container" id="divContainerTableMarsWeatherWind">
            <b-table sticky-header=true id="tableMarsWeatherWind" borderless hover :items="items" :fields="fields" dark="true" responsive=true>
            </b-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MarsWind",
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
                    {Date:'03/03/2020',Sol:'451',Average:'6.07',Maximum:'21.48',Minimum:'0.205',Samples:'129128'},
                    {Date:'04/03/2020',Sol:'452',Average:'5.922',Maximum:'19.60',Minimum:'0.204',Samples:'140195'},
                    {Date:'05/03/2020',Sol:'453',Average:'5.96',Maximum:'21.41',Minimum:'0.268',Samples:'114581'},
                    {Date:'06/03/2020',Sol:'454',Average:'5.725',Maximum:'25.20',Minimum:'0.209',Samples:'81775'},
                    {Date:'07/03/2020',Sol:'455',Average:'5.347',Maximum:'20.65',Minimum:'0.282',Samples:'141083'},
                    {Date:'08/03/2020',Sol:'456',Average:'5.783',Maximum:'20.19',Minimum:'0.205',Samples:'79749'},
                    {Date:'09/03/2020',Sol:'457',Average:'6.042',Maximum:'20.97',Minimum:'0.209',Samples:'137378'}
                ]
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