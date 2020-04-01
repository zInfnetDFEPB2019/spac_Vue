<template>
    <div>
        <div>
            <b-row>
                <b-row class="contentDivSpaceCometInfoCometData" >
                    <b-img class="imageDivSpaceCometInfoCometData" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/comet_info.png"
                           height="50" width="50" alt="comet icon"></b-img>
                    <p class="titleDivSpaceCometInfoCometData">Comet <sup>{{ this.cometId }}</sup></p>
                    <router-link :to="{ name: 'editComet', params: { id: this.$route.params.id } }">
                        <b-button variant="dark" id="buttonEditCometData" size="sm"><b-icon-pencil></b-icon-pencil></b-button>
                    </router-link>
                    <router-link :to="{ name: 'newComet'}">
                        <b-button variant="dark" id="buttonNewCometData" size="sm"><b-icon-plus></b-icon-plus></b-button>
                    </router-link>
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
                        <p>{{ allCometDetails[0]._absoluteMagnitude }}</p>
                    </td>
                    <td>
                        <p>Designation</p>
                        <p>{{ allCometDetails[0]._name }}</p>
                    </td>
                    <td>
                        <p>Estimated Diameter <sup>(m)</sup></p>
                        <p>{{ allCometDetails[0]._estimatedDiameterAvg }}</p>
                    </td>
                    <td>
                        <p>Potentially Hazard</p>
                        <p>{{ allCometDetails[0]._potentiallyHazardous }}</p>
                    </td>
                    <td>
                        <p>Sentry Object</p>
                        <p>{{ allCometDetails[0]._sentryObject }}</p>
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
            // editComet() {
            //     this.$router.push({ name: 'edit-comet', params: { id: this.id } });
            // },
            created(){
                this.getCometDetails(this.cometId);
            },
        },
        computed:
            mapGetters(["allCometDetails"]),
        data() {
            return {
                id : this.$route.params.id
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

    .bi-pencil,.bi-plus {
        margin-left: 2px !important;
    }

    #buttonNewCometData {
        width: 40px;
        height: 40px;
        display: flex;
        align-self: center;
        align-items: center;
        margin-left: 10px;
    }

    #buttonNewCometData:hover {
        color:#E2E2E2;
        background-color: #28A745;
    }

</style>