<template>
    <div>
        <div>
            <b-row class="contentDivSpaceCometInfoCloseApproach">
            <b-img class="imageDivSpaceCometInfoCloseApproach" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/close_approach.png"
                   height="50" width="50" alt="comet close approach icon icon"></b-img>
                <p class="titleDivSpaceCometInfoCloseApproach">Close Approach <sup>Complete</sup></p>
            </b-row>
        </div>

        <div class="container" id="divContainerTableSpaceCometInfoCloseApproach">
            <b-table sticky-header=true id="tableSpaceCometInfoCloseApproach" borderless hover :items="items" :fields="fields" dark="true" responsive=true>
            </b-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CloseApproach",
        components: {},
        data() {
            return {
                fields: [
                    {key:'close_approach',sortable: true},
                    {key:'relative_velocity',sortable: true},
                    {key:'miss_distance',sortable: true},
                    {key:'orbiting_body',sortable: true},
                ],
                items: [
                    {
                        close_approach:"1904-Sep-20 19:52",
                        relative_velocity:'43143.38' + ' km/h',
                        miss_distance:'191395966.02' + ' km',
                        orbiting_body:'Jupiter',
                    },
                    {
                        close_approach:"1916-Jul-14 20:22",
                        relative_velocity:'33046.63' + ' km/h',
                        miss_distance:'227467948.53' + ' km',
                        orbiting_body:'Jupiter',
                    },
                    {
                        close_approach:"1952-Apr-22 21:43",
                        relative_velocity:'30794.21' + ' km/h',
                        miss_distance:'19134.32' + ' km',
                        orbiting_body:'Jupiter',
                    },
                    {
                        close_approach:"1987-Nov-29 06:31",
                        relative_velocity:'34283.12' + ' km/h',
                        miss_distance:'114046897.49' + ' km',
                        orbiting_body:'Jupiter',
                    },
                    {
                        close_approach:"1998-Mar-28 20:47",
                        relative_velocity:'92078.32' + ' km/h',
                        miss_distance:'53545330.84' + ' km',
                        orbiting_body:'Earth',
                    },
                    {
                        close_approach:"2020-Mar-17 00:03",
                        relative_velocity:'91186.85' + ' km/h',
                        miss_distance:'61009412.59' + ' km',
                        orbiting_body:'Earth',
                    },
                    {
                        close_approach:"2023-Apr-29 22:04",
                        relative_velocity:'43500.07' + ' km/h',
                        miss_distance:'195286480.34' + ' km',
                        orbiting_body:'Jupiter',
                    },
                    {
                        close_approach:"2028-Dec-27 09:25",
                        relative_velocity:'104262.61' + ' km/h',
                        miss_distance:'16945662.52' + ' km',
                        orbiting_body:'Venus',
                    },
                    {
                        close_approach:"2033-May-12 11:28",
                        relative_velocity:'95883.79' + ' km/h',
                        miss_distance:'38447111.94' + ' km',
                        orbiting_body:'Earth',
                    },
                    {
                        close_approach:"2035-Mar-28 01:02",
                        relative_velocity:'33451.81' + ' km/h',
                        miss_distance:'226591246.96' + ' km',
                        orbiting_body:'Jupiter',
                    },
                    {
                        close_approach:"2055-Apr-17 13:02",
                        relative_velocity:'91279.02' + ' km/h',
                        miss_distance:'37802860.83' + ' km',
                        orbiting_body:'Earth',
                    },
                ],
            }
        },
    }
</script>

<style>

    .imageDivSpaceCometInfoCloseApproach {
        margin-left: 100px;
    }

    .titleDivSpaceCometInfoCloseApproach {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left !important;
        font-size: 20px;
        margin-left: 20px;
        margin-top: 8px;
        align-self: self-end;
    }

    .contentDivSpaceCometInfoCloseApproach {
        margin-top: 50px !important;
        margin-left: 45px !important;
    }

    #tableSpaceCometInfoCloseApproach {
        color: #E2E2E2 !important;
        background-color: #181818 !important;
    }

    .bg-b-table-default {
        background-color: #181818 !important;
    }

    #divContainerTableSpaceCometInfoCloseApproach {
        margin-top: 25px;
    }
</style>