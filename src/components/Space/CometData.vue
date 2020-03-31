<template>
    <div>
        <div>
            <b-row>
                <b-row class="contentDivSpaceCometInfoCometData" >
                    <b-img class="imageDivSpaceCometInfoCometData" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/comet_info.png"
                           height="50" width="50" alt="comet icon"></b-img>
                    <p class="titleDivSpaceCometInfoCometData">Comet <sup>{{ this.cometId }}</sup></p>
                    <b-button variant="dark" id="buttonEditCometData" size="sm"><b-icon-pencil></b-icon-pencil></b-button>
                </b-row>
            </b-row>
        </div>

        <div>
            <table align="center" class="borderTable">
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
                        <p>{{ allCometDetails._absoluteMagnitude }}</p>
                    </td>
                    <td>
                        <p>Designation</p>
                        <p>{{ allCometDetails._name }}</p>
                    </td>
                    <td>
                        <p>Estimated Diameter <sup>(m)</sup></p>
                        <p>{{ allCometDetails._estimatedDiameterAvg }}</p>
                    </td>
                    <td>
                        <p>Potentially Hazard</p>
                        <p>{{ allCometDetails._potentiallyHazardous }}</p>
                    </td>
                    <td>
                        <p>Sentry Object</p>
                        <p>{{ allCometDetails._sentryObject }}</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "CometData",
        props: {
            cometId: String
        },
        components: {},
        methods: {
            ...mapActions(["getCometDetails"]),
            created(){
                this.getCometDetails("3511833");
            },
        },
        computed:
            mapGetters(["allCometDetails"]),
        data() {
            return {
            }
        },

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

    #buttonEditCometData {
        width: 40px;
        height: 40px;
        display: flex;
        align-self: center;
        align-items: center;
        margin-left: 830px;
    }

    #buttonEditCometData:hover {
        color:#343A40;
        background-color: #FFC107;
    }

    .bi-pencil {
        margin-left: 2px !important;
    }

</style>