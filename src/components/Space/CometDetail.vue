<template>
    <div>
        <div id="divContentHolderCometInfo">
            <Header/>
            <section id="sectionCometInfo">
                <div>
                    <b-row class="contentTitle">
                        <b-img class="imageSection" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/comet_data.png"
                               height="75" width="75" alt="comet info icon section"></b-img>
                        <p class="titleSection">COMET DETAILS</p>
                    </b-row>
                    <b-button id="buttonTrigger" ref="buttonTrigger" @click="trigger()" variant="outline-dark">Details</b-button>
                </div>

                <div>
                    <CometData :comet-id="this.$route.params._id"/>
                    <CloseApproach :comet-id="this.$route.params._id"/>
                </div>
            </section>
            <Footer/>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    import CometData from "@/components/Space/CometData";
    import CloseApproach from "@/components/Space/CloseApproach";
    export default {
        name: "cometDetail",
        components: {CloseApproach, CometData, Footer, Header},
        methods:{
            ...mapActions(["getCometDetails"]),
            trigger(){
              this.getCometDetails(this.$route.params.id);
            },
            created() {
                // this.$refs.buttonTrigger.click();
                // this.getCometDetails(this.$route.params.id);
            },

        },
        computed:
            mapGetters(["allCometDetails","detailedCometById"]),
        data() {
            return {
                id : this.$route.params.id,
            }
        }
    }
</script>

<style>

    /*#buttonTrigger {*/
    /*    !*display: none;*!*/
    /*}*/

    #sectionCometInfo {
        margin-bottom: 150px !important;
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
    }

    .contentTitle {
        margin-top: 5px !important;
        margin-left: 25px !important;
    }

    #divContentHolderCometInfo {
        position: relative;
    }

    .bg-b-table-default {
        background-color: #181818 !important;
    }

    .divContainerTableCometInfo {
        margin-top: 25px;
    }
</style>