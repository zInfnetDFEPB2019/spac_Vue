<template>
    <div>
        <div id="divContentHolderISS">
            <Header/>

            <section id="sectionISS">
                <div>
                    <b-row class="contentTitle">
                        <b-img class="imageSection" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/iss_section_logo.png"
                               height="75" width="75" alt="iss icon section"></b-img>
                        <p class="titleSection">ISS</p>
                    </b-row>
                </div>

                <div>
                    <Id/>
                    <LatLong/>
                    <Metrics/>
                    <Crew/>
                </div>
            </section>

            <Footer/>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    import Id from "@/components/ISS/Id";
    import Metrics from "@/components/ISS/Metrics";
    import LatLong from "@/components/ISS/Location";
    import Crew from "@/components/ISS/Crew";

    export default {
        name: "ISS",
        components: {Crew, LatLong, Metrics, Id, Footer, Header},
    }
</script>

<style>

    #sectionISS {
        margin-bottom: 100px !important
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
    }

    .contentTitle {
        margin-top: 5px !important;
        margin-left: 25px !important;
    }

    #divContentHolderISS {
        position: relative;
    }

    td {
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 15px;
        padding-top: 15px;
    }
</style>