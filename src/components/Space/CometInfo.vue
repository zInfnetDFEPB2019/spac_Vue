<template>
    <div>
        <div id="divContentHolderCometInfo">
            <Header/>
            <section id="sectionCometInfo">
                <div>
                    <b-row class="contentTitle">
                        <b-img class="imageSection" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/comet_data.png"
                               height="75" width="75" alt="comet info icon section"></b-img>
                        <p class="titleSection">COMET INFO</p>
                    </b-row>
                </div>

                <div>
                    <CometData/>
                    <CloseApproach/>
                </div>
            </section>
            <Footer/>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    import CometData from "@/components/Space/CometData";
    import CloseApproach from "@/components/Space/CloseApproach";
    export default {
        name: "CometInfo",
        components: {CloseApproach, CometData, Footer, Header},
    }
</script>

<style>

    #sectionCometInfo {
        margin-bottom: 100px !important;
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