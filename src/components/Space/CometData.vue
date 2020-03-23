<template>
    <div>
        <div>
            <b-row>
                <b-row class="contentDivSpaceCometInfoCometData">
                    <b-img class="imageDivSpaceCometInfoCometData" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/comet_info.png"
                           height="50" width="50" alt="comet icon"></b-img>
                    <p class="titleDivSpaceCometInfoCometData">Comet <sup>3922358</sup></p>
                </b-row>
            </b-row>
        </div>

        <div>
            <table align="center">
                <tr>
                    <td>
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/absolute_magnitude.png"
                               height="50" width="50" alt="comet absolute magnitude icon"></b-img>
                    </td>
                    <td>
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/comet_designation.png"
                               height="50" width="50" alt="comet designation icon"></b-img>
                    </td>
                    <td>
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/diameter.png"
                               height="50" width="50" alt="comet estimated diameter icon"></b-img>
                    </td>
                    <td>
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/potentially_hazard.png"
                               height="50" width="50" alt="comet potentially hazard icon"></b-img>
                    </td>
                    <td>
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/sentry_object.png"
                               height="50" width="50" alt="comet sentry object icon"></b-img>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Absolute Magnitude</p>
                        <p>18.8</p>
                    </td>
                    <td>
                        <p>Designation</p>
                        <p>2019 XG3</p>
                    </td>
                    <td>
                        <p>Estimated Diameter</p>
                        <p>1.03</p>
                    </td>
                    <td>
                        <p>Potentially Hazard</p>
                        <p>SAFE</p>
                    </td>
                    <td>
                        <p>Sentry Object</p>
                        <p>SAFE</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CometData",
        components: {},
    }
</script>

<style scoped>
    td {
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 15px;
        padding-top: 15px;
    }

    .contentDivSpaceCometInfoCometData {
        margin-top: 50px !important;
        margin-left: 45px !important;
    }

    .imageDivSpaceCometInfoCometData {
        margin-left: 100px;
    }

    .titleDivSpaceCometInfoCometData {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left !important;
        font-size: 20px;
        margin-left: 20px;
        margin-top: 12px;
        align-self: self-end;
    }
</style>