<template>
    <div>
        <div id="divContentHolderCometEdit">
            <Header/>
            <section id="sectionCometEdit">
                <div>
                    <b-row class="contentTitle">
                        <b-img class="imageSection" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/comet_new.png"
                               height="75" width="75" alt="new comet icon section"></b-img>
                        <p class="titleSection">NEW COMET</p>
                    </b-row>
                </div>
                <div>
                    <table align="center" class="borderTable">
                        <tr>
                            <td>
                                <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/comet_info.png"
                                       height="50" width="50" alt="comet info icon"></b-img>
                            </td>
                            <td>
                                <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/comet_designation.png"
                                       height="50" width="50" alt="comet designation icon"></b-img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>ID</p>
                                <p>{{ comet_add._id }}</p>
                                <b-form-input class="inputEditComet" size="sm" v-model="comet_add._id" type="text" required/>
                            </td>
                            <td>
                                <p>Designation</p>
                                <p>{{ comet_add._name }}</p>
                                <b-form-input class="inputEditComet" size="sm" v-model="comet_add._name" type="text" required/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/close_approach.png"
                                       height="50" width="50" alt="comet close approach icon"></b-img>
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
                                <p>Close Approach</p>
                                <p>{{ comet_add._closeApproach }}</p>
                                <b-form-datepicker class="inputEditComet" size="sm" v-model="comet_add._closeApproach" type="date" required/>
                            </td>
                            <td>
                                <p>Potentially Hazard</p>
                                <p>{{ comet_add._potentiallyHazardous }}</p>
                                <b-form-input class="inputEditComet" size="sm" v-model="comet_add._potentiallyHazardous" type="text" required/>
                            </td>
                            <td>
                                <p>Sentry Object</p>
                                <p>{{ comet_add._sentryObject }}</p>
                                <b-form-input class="inputEditComet" size="sm" v-model="comet_add._sentryObject" type="text" required/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/absolute_magnitude.png"
                                       height="50" width="50" alt="comet absolute magnitude icon"></b-img>
                            </td>
                            <td>
                                <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/diameter.png"
                                       height="50" width="50" alt="comet estimated diameter icon"></b-img>
                            </td>
                            <td>
                                <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/iss_velocity.png"
                                       height="50" width="50" alt="comet velocity icon"></b-img>
                            </td>
                            <td>
                                <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/comet_miss_distance.png"
                                       height="50" width="50" alt="comet miss distance icon"></b-img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Absolute Magnitude</p>
                                <p>{{ comet_add._absoluteMagnitude }}</p>
                                <b-form-input class="inputEditComet" size="sm" v-model="comet_add._absoluteMagnitude" type="text" required/>
                            </td>
                            <td>
                                <p>Estimated Diameter <sup>(m)</sup></p>
                                <p>{{ comet_add._estimatedDiameterAvg }}</p>
                                <b-form-input class="inputEditComet" size="sm" v-model="comet_add._estimatedDiameterAvg" type="text" required/>
                            </td>
                            <td>
                                <p>Relative Velocity <sup>(km/h)</sup></p>
                                <p>{{ comet_add._relativeVelocity }}</p>
                                <b-form-input class="inputEditComet" size="sm" v-model="comet_add._relativeVelocity" type="text" required/>
                            </td>
                            <td>
                                <p>Miss Distance <sup>(km)</sup></p>
                                <p>{{ comet_add._missDistance }}</p>
                                <b-form-input class="inputEditComet" size="sm" v-model="comet_add._missDistance" type="text" required/>
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
    export default {
        name: "NewComet",
        data() {
            return {
                id:this.$route.params.id,
                comet_add : {
                    _id:"", _name:"", _absoluteMagnitude:"",
                    _estimatedDiameterAvg:"", _potentiallyHazardous:"", _closeApproach:"",
                    _relativeVelocity:"", _missDistance:"", _sentryObject:""
                },
            };
        },
        computed: mapGetters([""]),
        components: {Footer, Header},
        created() {
        },
        methods: {
            ...mapActions(["addComet"]),
            onSubmit() {
                this.addComet(this.comet_add);
                alert("Success!");
            }
        },
    };
</script>

<style scoped>

    table {
        align-items: center !important;
    }

    tr,td {
        text-align: center !important;
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