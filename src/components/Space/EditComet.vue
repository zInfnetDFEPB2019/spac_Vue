<template>
    <div>
        <div id="divContentHolderCometEdit">
            <Header/>
            <section id="sectionCometEdit">
                <div>
                    <b-row class="contentTitle">
                        <b-img class="imageSection" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/comet_edit.png"
                               height="75" width="75" alt="edit comet icon section"></b-img>
                        <p class="titleSection">EDIT COMET</p>
                    </b-row>
                </div>

                <div>
                    <table align="center" class="borderTable">
                        <tr>
                            <td>
                                <b-img v-b-popover.hover.top.v-dark="{ content: cometAbsoluteMagnitude }"
                                       class="imgCenterAlignment"
                                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/absolute_magnitude.png"
                                       height="50" width="50" alt="comet absolute magnitude icon"></b-img>
                            </td>
                            <td>
                                <b-img v-b-popover.hover.top.v-dark="{ content: cometDesignation }"
                                       class="imgCenterAlignment"
                                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/comet_designation.png"
                                       height="50" width="50" alt="comet designation icon"></b-img>
                            </td>
                            <td>
                                <b-img v-b-popover.hover.top.v-dark="{ content: cometEstimatedDiameter }"
                                       class="imgCenterAlignment"
                                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/diameter.png"
                                       height="50" width="50" alt="comet estimated diameter icon"></b-img>
                            </td>
                            <td>
                                <b-img v-b-popover.hover.top.v-dark="{ content: cometPotentiallyHazard }"
                                       class="imgCenterAlignment"
                                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/potentially_hazard.png"
                                       height="50" width="50" alt="comet potentially hazard icon"></b-img>
                            </td>
                            <td>
                                <b-img v-b-popover.hover.top.v-dark="{ content: cometSentryObject }"
                                       class="imgCenterAlignment"
                                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/sentry_object.png"
                                       height="50" width="50" alt="comet sentry object icon"></b-img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Absolute Magnitude</p>
                                <p class="pCenterAlignment">{{ detailedCometById(id)._absoluteMagnitude }}</p>
                                <b-form-input class="inputEditComet inputCenterAlignment" size="sm" v-model="comet_add._absoluteMagnitude" type="text" required/>
                            </td>
                            <td>
                                <p>Designation</p>
                                <p class="pCenterAlignment">{{ detailedCometById(id)._name }}</p>
                                <b-form-input class="inputEditComet inputCenterAlignment" size="sm" v-model="comet_add._name" type="text" required/>
                            </td>
                            <td>
                                <p>Estimated Diameter <sup>(m)</sup></p>
                                <p class="pCenterAlignment">{{ detailedCometById(id)._estimatedDiameterAvg }}</p>
                                <b-form-input class="inputEditComet inputCenterAlignment" size="sm" v-model="comet_add._estimatedDiameterAvg" type="text" required/>
                            </td>
                            <td>
                                <p>Potentially Hazard</p>
                                <p class="pCenterAlignment">{{ detailedCometById(id)._potentiallyHazardous }}</p>
                                <b-form-input class="inputEditComet inputCenterAlignment" size="sm" v-model="comet_add._potentiallyHazardous" type="text" required/>
                            </td>
                            <td>
                                <p>Sentry Object</p>
                                <p class="pCenterAlignment">{{ detailedCometById(id)._sentryObject }}</p>
                                <b-form-input class="inputEditComet inputCenterAlignment" size="sm" v-model="comet_add._sentryObject" type="text" required/>
                            </td>
                        </tr>
                    </table>

                    <div>
                        <b-button type="submit" id="buttonSubmitCometEdit" @click="onSubmit" variant="outline-dark">Submit</b-button>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    import Glossary from "@/components/Glossary";
    export default {
        name: "EditComet",
        data() {
            return {
                id:this.$route.params.id,
                comet_add : {
                    name:"", absoluteMagnitude:"",
                    estimatedDiameterAvg:"", potentiallyHazardous:"", closeApproach:"",
                },
                cometAbsoluteMagnitude:Glossary.methods.data().cometAbsoluteMagnitude,
                cometDesignation:Glossary.methods.data().cometDesignation,
                cometEstimatedDiameter:Glossary.methods.data().cometEstimatedDiameter,
                cometPotentiallyHazard:Glossary.methods.data().cometPotentiallyHazard,
                cometSentryObject:Glossary.methods.data().cometSentryObject,
            };
        },
        computed: mapGetters(["allCometDetails","detailedCometById"]),
        components: {Footer, Header},
        created() {
            this.comet_add = this.detailedCometById(this.id);
        },
        methods: {
            ...mapActions(["updateCometDetails"]),
            onSubmit() {
                this.updateCometDetails(this.comet_add);
                alert("Success!");
            }
        },
    };
</script>

<style scoped>

    .imgCenterAlignment {
        margin: 0 auto !important;
    }

    .inputCenterAlignment {
        margin: 5px auto !important;
    }

    .pCenterAlignment {
        margin: 5px auto !important;
    }

    #sectionCometEdit {
        margin-bottom: 100px !important;
    }

    .inputEditComet {
        text-align: center !important;
    }

    #buttonSubmitCometEdit {
        margin-top: 25px;
    }

    .contentDivSpaceCometInfo {
        margin-top: 50px !important;
        margin-left: 45px !important;
    }

    .imageDivSpaceCometInfo {
        margin-left: 100px;
    }

    .titleDivSpaceCometInfo {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left !important;
        font-size: 20px;
        margin-left: 20px;
        margin-top: 15px;
        align-self: self-end;
    }

    .bg-b-table-default {
        color: #E2E2E2 !important;
    }

    .imageSection {
        margin-left: 50px;
    }

    .titleSection {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left !important;
        font-size: 30px;
        margin-left: 25px;
        align-self: self-end;
        margin-top: 20px !important;
        margin-bottom: 50px;
    }

    .contentTitle {
        margin-top: 5px !important;
        margin-left: 25px !important;
    }

    #divContentHolderCometEdit {
        position: relative;
    }

    .bg-b-table-default {
        background-color: #181818 !important;
    }

    .divContainerTableCometInfo {
        margin-top: 25px;
    }
</style>